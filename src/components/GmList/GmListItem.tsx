import { Trans } from "@lingui/macro";
import React, { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Area, AreaChart } from "recharts";

import { useSettings } from "context/SettingsContext/SettingsContextProvider";
import { useTokensData } from "context/SyntheticsStateContext/hooks/globalsHooks";
import {
  selectChainId,
  selectGlvAndMarketsInfoData,
  selectSrcChainId,
} from "context/SyntheticsStateContext/selectors/globalSelectors";
import { useSelector } from "context/SyntheticsStateContext/utils";
import {
  MarketTokensAPRData,
  getGlvDisplayName,
  getGlvOrMarketAddress,
  getMarketBadge,
  getMarketIndexName,
  getMarketPoolName,
} from "domain/synthetics/markets";
import { isGlvInfo } from "domain/synthetics/markets/glv";
import { GlvOrMarketInfo, MarketInfo } from "domain/synthetics/markets/types";
import { useDaysConsideredInMarketsApr } from "domain/synthetics/markets/useDaysConsideredInMarketsApr";
import { PerformanceData } from "domain/synthetics/markets/usePerformanceAnnualized";
import { PerformanceSnapshot, PerformanceSnapshotsData } from "domain/synthetics/markets/usePerformanceSnapshots";
import { useUserEarnings } from "domain/synthetics/markets/useUserEarnings";
import { TokenData, convertToUsd, getTokenData } from "domain/synthetics/tokens";
import { bigintToNumber, formatPercentage, formatUsd, PRECISION_DECIMALS } from "lib/numbers";
import { EMPTY_ARRAY, getByKey } from "lib/objects";
import { usePoolsIsMobilePage } from "pages/Pools/usePoolsIsMobilePage";
import { getNormalizedTokenSymbol } from "sdk/configs/tokens";
import { bigMath } from "sdk/utils/bigmath";

import { AmountWithUsdHuman } from "components/AmountWithUsd/AmountWithUsd";
import { AprInfo } from "components/AprInfo/AprInfo";
import Button from "components/Button/Button";
import FavoriteStar from "components/FavoriteStar/FavoriteStar";
import { TableTdActionable, TableTrActionable } from "components/Table/Table";
import { PoolTokenIcon } from "components/TokenIcon/PoolTokenIcon";
import { GmTokensBalanceInfo } from "./GmTokensTotalBalanceInfo";
import GmAssetDropdown from "../GmAssetDropdown/GmAssetDropdown";
import { SyntheticsInfoRow } from "../SyntheticsInfoRow";
import { FeeApyLabel } from "./FeeApyLabel";
import { PerformanceLabel } from "./PerformanceLabel";

export const tokenAddressStyle = { fontSize: 5 };

/**
 * Compute utilization as a percentage (0–100) for a market.
 * Utilization = (longInterestUsd + shortInterestUsd) / poolValueMax * 100
 * Returns null for GLV markets or when pool value is zero.
 */
function computeUtilization(marketOrGlv: GlvOrMarketInfo | undefined): number | null {
  if (!marketOrGlv || isGlvInfo(marketOrGlv)) return null;
  const market = marketOrGlv as MarketInfo;
  const poolValue = market.poolValueMax;
  if (poolValue === 0n) return null;
  const totalInterest = market.longInterestUsd + market.shortInterestUsd;
  // Both values are in USD with PRECISION (30 decimals), same scale — safe to divide
  const utilizationBps = bigMath.mulDiv(totalInterest, 10000n, poolValue);
  const util = Number(utilizationBps) / 100;
  return Math.min(util, 100); // cap at 100% in edge cases
}

/**
 * Compute pool fill as a percentage (0–100) for a market.
 * Fill = (longPoolAmount + shortPoolAmount) / (maxLongPoolAmount + maxShortPoolAmount) * 100
 * Returns null for GLV markets or when max is zero.
 */
function computePoolFill(marketOrGlv: GlvOrMarketInfo | undefined): {
  fillPercent: number;
  currentAmount: bigint;
  maxAmount: bigint;
} | null {
  if (!marketOrGlv || isGlvInfo(marketOrGlv)) return null;
  const market = marketOrGlv as MarketInfo;
  const maxTotal = market.maxLongPoolAmount + market.maxShortPoolAmount;
  if (maxTotal === 0n) return null;
  const currentTotal = market.longPoolAmount + market.shortPoolAmount;
  const fillBps = bigMath.mulDiv(currentTotal, 10000n, maxTotal);
  return {
    fillPercent: Math.min(Number(fillBps) / 100, 100),
    currentAmount: currentTotal,
    maxAmount: maxTotal,
  };
}

export function GmListItem({
  token,
  marketsTokensApyData,
  marketsTokensIncentiveAprData,
  glvTokensIncentiveAprData,
  marketsTokensLidoAprData,
  glvTokensApyData,
  isFavorite,
  onFavoriteClick,
  performance,
  performanceSnapshots,
  showPnl = false,
}: {
  token: TokenData;
  marketsTokensApyData: MarketTokensAPRData | undefined;
  marketsTokensIncentiveAprData: MarketTokensAPRData | undefined;
  glvTokensIncentiveAprData: MarketTokensAPRData | undefined;
  marketsTokensLidoAprData: MarketTokensAPRData | undefined;
  glvTokensApyData: MarketTokensAPRData | undefined;
  isFavorite: boolean | undefined;
  onFavoriteClick: ((address: string) => void) | undefined;
  performance: PerformanceData | undefined;
  performanceSnapshots: PerformanceSnapshotsData | undefined;
  showPnl?: boolean;
}) {
  const chainId = useSelector(selectChainId);
  const srcChainId = useSelector(selectSrcChainId);
  const marketsInfoData = useSelector(selectGlvAndMarketsInfoData);
  const tokensData = useTokensData();
  const userEarnings = useUserEarnings(chainId, srcChainId);
  const daysConsidered = useDaysConsideredInMarketsApr();
  const { showDebugValues } = useSettings();

  const marketOrGlv = getByKey(marketsInfoData, token?.address);

  const isGlv = isGlvInfo(marketOrGlv);

  const indexToken = isGlv ? marketOrGlv.glvToken : getTokenData(tokensData, marketOrGlv?.indexTokenAddress, "native");
  const longToken = getTokenData(tokensData, marketOrGlv?.longTokenAddress);
  const shortToken = getTokenData(tokensData, marketOrGlv?.shortTokenAddress);

  const marketOrGlvTokenAddress = marketOrGlv && getGlvOrMarketAddress(marketOrGlv);

  const apy = isGlv
    ? getByKey(glvTokensApyData, marketOrGlvTokenAddress)
    : getByKey(marketsTokensApyData, token?.address);
  const incentiveApr = isGlv
    ? getByKey(glvTokensIncentiveAprData, token?.address)
    : getByKey(marketsTokensIncentiveAprData, token?.address);
  const lidoApr = getByKey(marketsTokensLidoAprData, token?.address);
  const marketEarnings = getByKey(userEarnings?.byMarketAddress, token?.address);

  const isMobile = usePoolsIsMobilePage();

  const history = useHistory();

  const handleItemClick = useCallback(
    (event: React.MouseEvent) => {
      history.push(`/pools/details?market=${marketOrGlvTokenAddress}`);
      event.stopPropagation();
    },
    [history, marketOrGlvTokenAddress]
  );

  if (!token || !indexToken || !longToken || !shortToken || !marketOrGlv) {
    return null;
  }

  const totalSupply = token?.totalSupply;
  const totalSupplyUsd = convertToUsd(totalSupply, token?.decimals, token?.prices?.minPrice);
  const tokenIconName = marketOrGlv?.isSpotOnly
    ? getNormalizedTokenSymbol(longToken.symbol) + getNormalizedTokenSymbol(shortToken.symbol)
    : getNormalizedTokenSymbol(indexToken.symbol);

  const tokenIconBadge = getMarketBadge(chainId, marketOrGlv);

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!marketOrGlvTokenAddress) return;
    onFavoriteClick?.(marketOrGlvTokenAddress);
  };

  const marketPerformance = performance?.[token.address.toLowerCase()];
  const marketPerformanceSnapshots = performanceSnapshots?.[token.address.toLowerCase()];

  // Utilization calculation
  const utilization = computeUtilization(marketOrGlv);
  const utilizationDisplay = utilization !== null ? `${utilization.toFixed(1)}%` : "—";

  // Pool cap calculation
  const poolFill = computePoolFill(marketOrGlv);

  // PnL display
  const pnlValue = marketEarnings?.total;
  const pnlDisplay = pnlValue !== undefined ? formatUsd(pnlValue, { displayDecimals: 2 }) : null;
  const pnlPositive = pnlValue !== undefined && pnlValue >= 0n;

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4 rounded-8 bg-fill-surfaceElevated50 p-12">
        <div className="flex flex-wrap items-center pb-8" onClick={handleItemClick}>
          <div className="flex items-center">
            <div className="mr-12 flex shrink-0 items-center ">
              <PoolTokenIcon
                symbol={tokenIconName}
                displaySize={40}
                badge={tokenIconBadge}
                className="min-h-40 min-w-40"
                badgeClassName={isGlv ? "left-[50%] -translate-x-1/2 right-[unset] bottom-0" : undefined}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-body-medium flex">
                <span className="font-medium">
                  {isGlv
                    ? getGlvDisplayName(marketOrGlv)
                    : getMarketIndexName({ indexToken, isSpotOnly: marketOrGlv.isSpotOnly })}
                </span>

                <div className="inline-block">
                  <GmAssetDropdown token={token} marketsInfoData={marketsInfoData} tokensData={tokensData} />
                </div>
              </div>
              <div className="text-12 tracking-normal text-typography-secondary">
                [{getMarketPoolName({ longToken, shortToken })}]
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-8">
            <SnapshotGraph
              performanceSnapshots={marketPerformanceSnapshots ?? EMPTY_ARRAY}
              performance={marketPerformance ?? 0n}
            />

            {onFavoriteClick ? (
              <div>
                <Button variant="secondary" className="shrink-0" onClick={handleFavoriteClick}>
                  <FavoriteStar isFavorite={isFavorite} />
                </Button>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-10 border-t border-slate-600 pt-8">
          <SyntheticsInfoRow
            label={<Trans>TVL (Supply)</Trans>}
            value={
              <div>
                <AmountWithUsdHuman
                  amount={totalSupply}
                  decimals={token.decimals}
                  usd={totalSupplyUsd}
                  symbol={token.symbol}
                  usdOnTop
                />
                {poolFill && (
                  <PoolCapBar
                    fillPercent={poolFill.fillPercent}
                    currentAmount={poolFill.currentAmount}
                    maxAmount={poolFill.maxAmount}
                    tokenDecimals={longToken.decimals}
                  />
                )}
              </div>
            }
          />
          <SyntheticsInfoRow
            label={<Trans>Wallet</Trans>}
            value={
              <GmTokensBalanceInfo
                token={token}
                daysConsidered={daysConsidered}
                earnedRecently={marketEarnings?.recent}
                earnedTotal={marketEarnings?.total}
                isGlv={isGlv}
                singleLine={true}
              />
            }
          />
          {showPnl && pnlDisplay !== null && (
            <SyntheticsInfoRow
              label={<Trans>PnL</Trans>}
              value={
                <span className={pnlPositive ? "text-green-500" : "text-red-400"}>
                  {pnlDisplay}
                </span>
              }
            />
          )}
          <SyntheticsInfoRow
            label={<Trans>Utilization</Trans>}
            value={utilizationDisplay}
          />
          <SyntheticsInfoRow
            label={<FeeApyLabel />}
            value={<AprInfo apy={apy} incentiveApr={incentiveApr} lidoApr={lidoApr} marketAddress={token.address} />}
          />
          <SyntheticsInfoRow
            label={<PerformanceLabel />}
            value={
              marketPerformance
                ? formatPercentage(marketPerformance, { bps: false, signed: true, showPlus: false })
                : "..."
            }
            valueClassName={marketPerformance ? "numbers" : undefined}
          />
        </div>

        <div className="mt-12 flex gap-8">
          <Button
            variant="primary-action"
            className="flex-1"
            to={`/pools/details?market=${marketOrGlvTokenAddress}&operation=Deposit`}
          >
            <Trans>Deposit</Trans>
          </Button>
          <Button
            variant="secondary"
            className="flex-1 text-green-500"
            to={`/pools/details?market=${marketOrGlvTokenAddress}&operation=Withdrawal`}
          >
            <span className="text-red-400">
              <Trans>Withdraw</Trans>
            </span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <TableTrActionable key={token.address} className="cursor-pointer" onClick={handleItemClick}>
      <TableTdActionable className="w-[220px] pl-16">
        <div className="flex items-center gap-8">
          {onFavoriteClick && (
            <Button variant="ghost" className="!p-8" onClick={handleFavoriteClick}>
              <FavoriteStar isFavorite={isFavorite} />
            </Button>
          )}

          <div className="mr-12 flex shrink-0 items-center ">
            <PoolTokenIcon
              symbol={tokenIconName}
              displaySize={40}
              badge={tokenIconBadge}
              className="min-h-40 min-w-40"
              badgeClassName={isGlv ? "left-[50%] -translate-x-1/2 right-[unset] bottom-0" : undefined}
            />
          </div>
          <div>
            <div className="flex items-center text-16">
              <span className="font-medium">
                {isGlv
                  ? getGlvDisplayName(marketOrGlv)
                  : getMarketIndexName({ indexToken, isSpotOnly: Boolean(marketOrGlv?.isSpotOnly) })}
              </span>

              <div className="inline-block">
                <GmAssetDropdown token={token} marketsInfoData={marketsInfoData} tokensData={tokensData} />
              </div>
            </div>
            <div className="text-12 tracking-normal text-typography-secondary">
              [{getMarketPoolName({ longToken, shortToken })}]
            </div>
          </div>
        </div>
        {showDebugValues && <span style={tokenAddressStyle}>{marketOrGlvTokenAddress}</span>}
      </TableTdActionable>
      <TableTdActionable className="w-[13%]">
        <AmountWithUsdHuman
          multiline
          amount={totalSupply}
          decimals={token.decimals}
          usd={totalSupplyUsd}
          symbol={token.symbol}
          usdOnTop
        />
        {poolFill && (
          <PoolCapBar
            fillPercent={poolFill.fillPercent}
            currentAmount={poolFill.currentAmount}
            maxAmount={poolFill.maxAmount}
            tokenDecimals={longToken.decimals}
          />
        )}
      </TableTdActionable>
      <TableTdActionable className="w-[11%]">
        <div className="flex flex-col gap-4">
          <GmTokensBalanceInfo
            token={token}
            daysConsidered={daysConsidered}
            earnedRecently={marketEarnings?.recent}
            earnedTotal={marketEarnings?.total}
            isGlv={isGlv}
          />
          {showPnl && pnlDisplay !== null && (
            <div className={`text-12 ${pnlPositive ? "text-green-500" : "text-red-400"}`}>
              <Trans>PnL:</Trans> {pnlDisplay}
            </div>
          )}
        </div>
      </TableTdActionable>

      <TableTdActionable className="w-[11%]">
        <div className={`apy-value ${apy !== undefined && apy > 0n ? "apy-positive" : ""}`}>
          <AprInfo apy={apy} incentiveApr={incentiveApr} lidoApr={lidoApr} marketAddress={token.address} />
        </div>
      </TableTdActionable>

      <TableTdActionable className="w-[8%]">
        <div>
          <span className="numbers text-body-small">{utilizationDisplay}</span>
          {utilization !== null && (
            <div className="util-bar">
              <div
                className={`util-bar-fill ${utilization < 50 ? "util-low" : utilization < 80 ? "util-medium" : "util-high"}`}
                style={{ width: `${Math.min(utilization, 100)}%` }}
              />
            </div>
          )}
        </div>
      </TableTdActionable>

      <TableTdActionable className="w-[18%]">
        {marketPerformance ? (
          <div className="numbers">
            {formatPercentage(marketPerformance, { bps: false, signed: true, showPlus: false })}
          </div>
        ) : (
          "..."
        )}
      </TableTdActionable>

      <TableTdActionable className="w-[14%]">
        <SnapshotGraph
          performanceSnapshots={marketPerformanceSnapshots ?? EMPTY_ARRAY}
          performance={marketPerformance ?? 0n}
        />
      </TableTdActionable>

      <TableTdActionable className="w-[10%] pr-16">
        <div className="flex items-center gap-6">
          <Button
            variant="primary-action"
            className="text-12 px-10 py-6"
            to={`/pools/details?market=${marketOrGlvTokenAddress}&operation=Deposit`}
          >
            <Trans>Deposit</Trans>
          </Button>
          <Button
            variant="secondary"
            className="text-12 px-10 py-6"
            to={`/pools/details?market=${marketOrGlvTokenAddress}&operation=Withdrawal`}
          >
            <span className="text-red-400">
              <Trans>Withdraw</Trans>
            </span>
          </Button>
        </div>
      </TableTdActionable>
    </TableTrActionable>
  );
}

/**
 * Format a raw token amount (6 decimals for USDC) as a compact string like "1.2M" or "500K".
 */
function formatCompactAmount(amount: bigint, decimals: number): string {
  const num = Number(amount) / 10 ** decimals;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`;
  return num.toFixed(0);
}

function PoolCapBar({ fillPercent, currentAmount, maxAmount, tokenDecimals }: {
  fillPercent: number;
  currentAmount: bigint;
  maxAmount: bigint;
  tokenDecimals: number;
}) {
  return (
    <div className="mt-4">
      <div className="text-12 text-typography-secondary">
        {formatCompactAmount(currentAmount, tokenDecimals)} / {formatCompactAmount(maxAmount, tokenDecimals)} USDC
      </div>
      <div className="pool-cap-bar">
        <div
          className={`pool-cap-bar-fill ${fillPercent < 50 ? "util-low" : fillPercent < 80 ? "util-medium" : "util-high"}`}
          style={{ width: `${Math.min(fillPercent, 100)}%` }}
        />
      </div>
    </div>
  );
}

const MOBILE_SNAPSHOT_GRAPH_SIZE = {
  width: 80,
  height: 32,
};

const DESKTOP_SNAPSHOT_GRAPH_SIZE = {
  width: 160,
  height: 32,
};

const SnapshotGraph = ({
  performanceSnapshots,
  performance,
}: {
  performanceSnapshots: PerformanceSnapshot[];
  performance: bigint;
}) => {
  const isNegative = performance < 0n;

  const isMobile = usePoolsIsMobilePage();
  const size = isMobile ? MOBILE_SNAPSHOT_GRAPH_SIZE : DESKTOP_SNAPSHOT_GRAPH_SIZE;

  const chartData = useMemo(
    () =>
      performanceSnapshots.map((snapshot) => ({
        ...snapshot,
        performance: bigintToNumber(snapshot.performance, PRECISION_DECIMALS),
      })),
    [performanceSnapshots]
  );

  return (
    <div style={isMobile ? MOBILE_SNAPSHOT_GRAPH_SIZE : DESKTOP_SNAPSHOT_GRAPH_SIZE}>
      <AreaChart width={size.width} height={size.height} data={chartData}>
        <defs>
          <linearGradient id={`snapshot-graph-gradient-green`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="-45%" stopColor="var(--color-green-500)" stopOpacity={0.5}></stop>
            <stop offset="100%" stopColor="var(--color-green-500)" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient id={`snapshot-graph-gradient-red`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="-45%" stopColor="var(--color-red-500)" stopOpacity={0.5}></stop>
            <stop offset="100%" stopColor="var(--color-red-500)" stopOpacity={0}></stop>
          </linearGradient>
        </defs>
        <Area
          dataKey="performance"
          stroke={isNegative ? "var(--color-red-500)" : "var(--color-green-500)"}
          dot={false}
          fill={isNegative ? "url(#snapshot-graph-gradient-red)" : "url(#snapshot-graph-gradient-green)"}
          baseValue="dataMin"
        />
      </AreaChart>
    </div>
  );
};
