import { gql } from "@apollo/client";
import { useMemo } from "react";
import useSWR from "swr";
import type { Address } from "viem";

import { useShowDebugValues } from "context/SyntheticsStateContext/hooks/settingsHooks";
import { EMPTY_ARRAY } from "lib/objects";
import { getSubsquidGraphClient } from "lib/subgraph";

export type PnlSummaryPoint = {
  bucketLabel: string;
  losses: number;
  pnlBps: bigint;
  pnlUsd: bigint;
  realizedPnlUsd: bigint;
  unrealizedPnlUsd: bigint;
  startUnrealizedPnlUsd: bigint;
  volume: bigint;
  wins: number;
  winsLossesRatioBps: bigint | undefined;
  usedCapitalUsd: bigint;
} & PnlSummaryPointDebugFields;

export type PnlSummaryPointDebugFields = {
  // #region Debug fields
  // Present only when showDebugValues is true
  realizedBasePnlUsd: bigint;
  realizedFeesUsd: bigint;
  realizedPriceImpactUsd: bigint;
  unrealizedBasePnlUsd: bigint;
  unrealizedFeesUsd: bigint;
  startUnrealizedBasePnlUsd: bigint;
  startUnrealizedFeesUsd: bigint;
  // #endregion
};

type PnlSummaryData = PnlSummaryPoint[];

// Query raw trade actions to compute PnL summary client-side
const TRADE_ACTIONS_QUERY = gql`
  query TradeActionsForPnlSummary($account: String!) {
    tradeActions(
      where: { account_eq: $account, eventName_in: ["OrderExecuted", "PositionDecrease", "PositionIncrease"] }
      orderBy: timestamp_ASC
      limit: 1000
    ) {
      id
      eventName
      timestamp
      sizeDeltaUsd
      pnlUsd
      basePnlUsd
      priceImpactUsd
      positionFeeAmount
      borrowingFeeAmount
      fundingFeeAmount
      initialCollateralDeltaAmount
      collateralTokenPriceMin
    }
  }
`;

type RawTradeAction = {
  id: string;
  eventName: string;
  timestamp: number;
  sizeDeltaUsd: string | null;
  pnlUsd: string | null;
  basePnlUsd: string | null;
  priceImpactUsd: string | null;
  positionFeeAmount: string | null;
  borrowingFeeAmount: string | null;
  fundingFeeAmount: string | null;
  initialCollateralDeltaAmount: string | null;
  collateralTokenPriceMin: string | null;
};

// Time bucket definitions (in seconds)
const TIME_BUCKETS = [
  { label: "1d", duration: 86400 },
  { label: "7d", duration: 604800 },
  { label: "30d", duration: 2592000 },
  { label: "90d", duration: 7776000 },
  { label: "All", duration: Infinity },
];

function computePnlSummaryFromTrades(trades: RawTradeAction[], showDebugValues: boolean): PnlSummaryData {
  if (!trades || trades.length === 0) {
    return EMPTY_ARRAY as PnlSummaryData;
  }

  const now = Math.floor(Date.now() / 1000);

  return TIME_BUCKETS.map((bucket) => {
    const cutoffTime = bucket.duration === Infinity ? 0 : now - bucket.duration;
    const bucketTrades = trades.filter((t) => t.timestamp >= cutoffTime);

    let wins = 0;
    let losses = 0;
    let volume = 0n;
    let realizedPnlUsd = 0n;
    let realizedBasePnlUsd = 0n;
    let realizedFeesUsd = 0n;
    let realizedPriceImpactUsd = 0n;
    let usedCapitalUsd = 0n;

    for (const trade of bucketTrades) {
      // Volume from sizeDeltaUsd
      if (trade.sizeDeltaUsd) {
        const sizeDelta = BigInt(trade.sizeDeltaUsd);
        volume += sizeDelta > 0n ? sizeDelta : -sizeDelta;
      }

      // PnL tracking
      const pnl = trade.pnlUsd ? BigInt(trade.pnlUsd) : 0n;
      const basePnl = trade.basePnlUsd ? BigInt(trade.basePnlUsd) : 0n;
      const priceImpact = trade.priceImpactUsd ? BigInt(trade.priceImpactUsd) : 0n;

      // Calculate fees in USD
      const positionFee = trade.positionFeeAmount ? BigInt(trade.positionFeeAmount) : 0n;
      const borrowingFee = trade.borrowingFeeAmount ? BigInt(trade.borrowingFeeAmount) : 0n;
      const fundingFee = trade.fundingFeeAmount ? BigInt(trade.fundingFeeAmount) : 0n;
      const collateralPrice = trade.collateralTokenPriceMin ? BigInt(trade.collateralTokenPriceMin) : 1n;
      const feesUsd = ((positionFee + borrowingFee + fundingFee) * collateralPrice) / BigInt(1e30);

      realizedPnlUsd += pnl;
      realizedBasePnlUsd += basePnl;
      realizedFeesUsd += feesUsd;
      realizedPriceImpactUsd += priceImpact;

      // Track wins/losses for position decreases with PnL
      if (trade.eventName === "PositionDecrease" || trade.eventName === "OrderExecuted") {
        if (pnl > 0n) {
          wins++;
        } else if (pnl < 0n) {
          losses++;
        }
      }

      // Used capital from collateral
      if (trade.initialCollateralDeltaAmount && trade.collateralTokenPriceMin) {
        const collateral = BigInt(trade.initialCollateralDeltaAmount);
        const price = BigInt(trade.collateralTokenPriceMin);
        if (collateral > 0n) {
          usedCapitalUsd += (collateral * price);
        }
      }
    }

    // Calculate PnL basis points (relative to used capital)
    const pnlBps = usedCapitalUsd > 0n ? (realizedPnlUsd * 10000n) / usedCapitalUsd : 0n;

    // Win/loss ratio in basis points
    const totalTrades = wins + losses;
    const winsLossesRatioBps = totalTrades > 0 ? BigInt(Math.floor((wins / totalTrades) * 10000)) : undefined;

    const point: PnlSummaryPoint = {
      bucketLabel: bucket.label,
      losses,
      pnlBps,
      pnlUsd: realizedPnlUsd,
      realizedPnlUsd,
      unrealizedPnlUsd: 0n, // Would need open positions to calculate
      startUnrealizedPnlUsd: 0n,
      volume,
      wins,
      winsLossesRatioBps,
      usedCapitalUsd,
      // Debug fields
      realizedBasePnlUsd: showDebugValues ? realizedBasePnlUsd : 0n,
      realizedFeesUsd: showDebugValues ? realizedFeesUsd : 0n,
      realizedPriceImpactUsd: showDebugValues ? realizedPriceImpactUsd : 0n,
      unrealizedBasePnlUsd: 0n,
      unrealizedFeesUsd: 0n,
      startUnrealizedBasePnlUsd: 0n,
      startUnrealizedFeesUsd: 0n,
    };

    return point;
  });
}

export function usePnlSummaryData(chainId: number, account: Address) {
  const showDebugValues = useShowDebugValues();
  const client = getSubsquidGraphClient(chainId);

  const { data, error, isLoading } = useSWR<PnlSummaryData>(
    account && client ? ["usePnlSummaryData", chainId, account, showDebugValues] : null,
    {
      fetcher: async () => {
        const res = await client!.query({
          query: TRADE_ACTIONS_QUERY,
          variables: { account },
          fetchPolicy: "no-cache",
        });

        const trades = (res.data?.tradeActions || []) as RawTradeAction[];
        return computePnlSummaryFromTrades(trades, showDebugValues);
      },
    }
  );

  return useMemo(
    () => ({
      data: data || (EMPTY_ARRAY as PnlSummaryData),
      error,
      loading: isLoading,
    }),
    [data, error, isLoading]
  );
}
