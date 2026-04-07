import { gql } from "@apollo/client";
import { Trans, t } from "@lingui/macro";
import { lightFormat } from "date-fns";
import { toPng } from "html-to-image";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import useSWR from "swr";
import type { Address } from "viem";

import { USD_DECIMALS } from "config/factors";
import { useShowDebugValues } from "context/SyntheticsStateContext/hooks/settingsHooks";
import type { FromOldToNewArray } from "domain/tradingview/types";
import { SECONDS_IN_DAY, formatDate, formatDateTime, toUtcDayStart } from "lib/dates";
import downloadImage from "lib/downloadImage";
import { helperToast } from "lib/helperToast";
import { bigintToNumber, formatUsd } from "lib/numbers";
import { EMPTY_ARRAY } from "lib/objects";
import { getSubsquidGraphClient } from "lib/subgraph";
import { useBreakpoints } from "lib/useBreakpoints";
import { getPositiveOrNegativeClass } from "lib/utils";

import Button from "components/Button/Button";
import { DateSelect } from "components/DateRangeSelect/DateRangeSelect";
import Loader from "components/Loader/Loader";
import StatsTooltipRow from "components/StatsTooltip/StatsTooltipRow";

import DownloadIcon from "img/ic_download2.svg?react";

import {
  DebugLegend,
  DebugLines,
  DebugTooltip,
  type AccountPnlHistoryPointDebugFields,
} from "./dailyAndCumulativePnLDebug";

import "./DailyAndCumulativePnL.css";

const CHART_TOOLTIP_WRAPPER_STYLE: React.CSSProperties = { zIndex: 10000 };

const getInitialDate = () => undefined;

const CHART_TICK_PROPS: React.SVGProps<SVGTextElement> = {
  fill: "var(--color-slate-100)",
  fontSize: 11,
  fontWeight: 500,
};

const X_AXIS_LINE_PROPS: React.SVGProps<SVGLineElement> = {
  stroke: "var(--color-slate-600)",
  strokeWidth: 0.5,
};

const CHART_CURSOR_PROPS = {
  stroke: "var(--color-slate-500)",
  strokeWidth: 1,
  strokeDasharray: "2 2",
};

const ACTIVE_DOT_PROPS = {
  r: 4,
  strokeWidth: 2,
  stroke: "var(--color-blue-300)",
  fill: "var(--color-slate-900)",
};

const CHART_MARGIN = { top: 16, right: 16, bottom: 16, left: 0 };

export function DailyAndCumulativePnL({ chainId, account }: { chainId: number; account: Address }) {
  const [fromDate, setFromDate] = useState<Date | undefined>(getInitialDate);
  const fromTimestamp = useMemo(() => fromDate && toUtcDayStart(fromDate), [fromDate]);

  const { data: clusteredPnlData, error, loading } = usePnlHistoricalData(chainId, account, fromTimestamp);

  const { cardRef, handleImageDownload } = useImageDownload();

  const { isMobile } = useBreakpoints();

  const buttons = (
    <>
      <Button variant="ghost" className="gap-4" data-exclude onClick={handleImageDownload}>
        <div className="size-16">
          <DownloadIcon />
        </div>

        <Trans>PNG</Trans>
      </Button>
      <DateSelect date={fromDate} onChange={setFromDate} buttonTextPrefix={t`From`} />
    </>
  );

  const chartMargin = useMemo(() => {
    const maxValue = Math.max(...clusteredPnlData.map((point) => Math.max(point.cumulativePnlFloat, point.pnlFloat)));
    const stringValue = Math.ceil(maxValue).toString();
    return { ...CHART_MARGIN, left: stringValue.length * 4 };
  }, [clusteredPnlData]);

  return (
    <div className="flex flex-col rounded-8 bg-slate-900" ref={cardRef}>
      <div className="flex items-center justify-between px-20 py-15">
        <div className="text-20 font-medium">
          <Trans>Daily and Cumulative PnL</Trans>
        </div>
        {isMobile ? null : <div className="flex flex-wrap items-stretch justify-end gap-8 py-8">{buttons}</div>}
      </div>

      <div className="flex flex-wrap gap-24 px-16 pt-16 text-typography-secondary">
        <div className="flex items-center gap-8 text-13 font-medium">
          <div className="inline-block size-4 rounded-full bg-green-500" /> <Trans>Daily Profit</Trans>
        </div>
        <div className="flex items-center gap-8 text-13 font-medium">
          <div className="inline-block size-4 rounded-full bg-red-500" /> <Trans>Daily Loss</Trans>
        </div>
        <div className="flex items-center gap-8 text-13 font-medium">
          <div className="inline-block size-4 rounded-full bg-blue-300" />{" "}
          <Trans>
            Cumulative PnL{" "}
            <span className={getPositiveOrNegativeClass(clusteredPnlData.at(-1)?.cumulativePnl)}>
              {formatUsd(clusteredPnlData.at(-1)?.cumulativePnl)}
            </span>
          </Trans>
        </div>
        <DebugLegend lastPoint={clusteredPnlData.at(-1)} />
      </div>

      <div className="relative min-h-[250px] grow">
        <div className="DailyAndCumulativePnL-hide-last-tick absolute size-full">
          <ResponsiveContainer debounce={500}>
            <ComposedChart
              width={500}
              height={300}
              data={clusteredPnlData}
              barCategoryGap="25%"
              margin={chartMargin}
              // @ts-expect-error
              overflow="visible"
            >
              <RechartsTooltip
                cursor={CHART_CURSOR_PROPS}
                content={ChartTooltip}
                wrapperStyle={CHART_TOOLTIP_WRAPPER_STYLE}
              />
              <CartesianGrid vertical={false} strokeDasharray="5 3" strokeWidth={0.5} stroke="var(--color-slate-600)" />
              <Bar dataKey="pnlFloat" minPointSize={1} radius={2}>
                {clusteredPnlData.map(renderPnlBar)}
              </Bar>

              <defs>
                <linearGradient id="cumulative-pnl-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="-45%" stopColor="var(--color-blue-300)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="var(--color-blue-300)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="cumulativePnlFloat"
                stroke="var(--color-blue-300)"
                fill="url(#cumulative-pnl-gradient)"
                strokeWidth={2}
                dot={false}
                baseValue="dataMin"
                activeDot={ACTIVE_DOT_PROPS}
              />
              <XAxis
                dataKey="dateCompact"
                tickLine={false}
                axisLine={X_AXIS_LINE_PROPS}
                minTickGap={isMobile ? 20 : 32}
                tick={CHART_TICK_PROPS}
                tickMargin={10}
              />
              <YAxis
                type="number"
                allowDecimals={false}
                markerWidth={0}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tickFormatter={yAxisTickFormatter}
                tick={CHART_TICK_PROPS}
              />
              {DebugLines()}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        {error && (
          <div className="absolute grid size-full max-h-full place-items-center overflow-auto">
            <div className="whitespace-pre-wrap font-mono text-red-500">{JSON.stringify(error, null, 2)}</div>
          </div>
        )}
        {loading && (
          <div className="absolute grid size-full place-items-center">
            <Loader />
          </div>
        )}
        {!loading && !error && clusteredPnlData.length === 0 && (
          <div className="absolute grid size-full place-items-center text-typography-secondary">
            <Trans>No data available</Trans>
          </div>
        )}
      </div>

      {isMobile && <div className="flex justify-around border-t-1/2 border-slate-600 px-16 py-12">{buttons}</div>}
    </div>
  );
}

function renderPnlBar(entry: AccountPnlHistoryPoint) {
  let fill: string;
  if (entry.pnl > 0n) {
    fill = "var(--color-green-500)";
  } else if (entry.pnl < 0n) {
    fill = "var(--color-red-500)";
  } else {
    fill = "var(--color-gray-900)";
  }
  return <Cell key={entry.date} fill={fill} />;
}

function yAxisTickFormatter(value: number) {
  if (!isFinite(value)) return "0";

  return formatUsd(BigInt(value as number) * 10n ** 30n, { displayDecimals: 0 })!;
}

function ChartTooltip({ active, payload }: TooltipProps<number | string, "pnl" | "cumulativePnl" | "date">) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const stats = payload[0].payload as PnlHistoricalData[number];

  return (
    <div
      className={`backdrop-blur-100 text-body-small z-50 flex flex-col rounded-4 bg-[rgba(160,163,196,0.1)]
      bg-[linear-gradient(0deg,var(--color-slate-800),var(--color-slate-800))] px-12 pt-8 bg-blend-overlay shadow-lg`}
    >
      <StatsTooltipRow label={t`Date`} value={stats.date} showDollar={false} />
      <StatsTooltipRow
        label={t`PnL`}
        value={formatUsd(stats.pnl)}
        showDollar={false}
        textClassName={getPositiveOrNegativeClass(stats.pnl)}
      />
      <StatsTooltipRow
        label={t`Cumulative PnL`}
        value={formatUsd(stats.cumulativePnl)}
        showDollar={false}
        textClassName={getPositiveOrNegativeClass(stats.cumulativePnl)}
      />
      <DebugTooltip stats={stats} />
    </div>
  );
}

export type AccountPnlHistoryPoint = {
  date: string;
  dateCompact: string;
  pnlFloat: number;
  pnl: bigint;
  cumulativePnlFloat: number;
  cumulativePnl: bigint;
} & AccountPnlHistoryPointDebugFields;

type PnlHistoricalData = FromOldToNewArray<AccountPnlHistoryPoint>;

// Query raw trade actions to compute PnL history client-side
const TRADE_ACTIONS_QUERY = gql`
  query TradeActionsForPnlHistory($account: String!, $from: Int) {
    tradeActions(
      where: { account_eq: $account, timestamp_gte: $from, eventName_in: ["OrderExecuted", "PositionDecrease", "PositionIncrease"] }
      orderBy: timestamp_ASC
      limit: 1000
    ) {
      id
      timestamp
      pnlUsd
      basePnlUsd
      priceImpactUsd
      positionFeeAmount
      borrowingFeeAmount
      fundingFeeAmount
      collateralTokenPriceMin
    }
  }
`;

type RawTradeAction = {
  id: string;
  timestamp: number;
  pnlUsd: string | null;
  basePnlUsd: string | null;
  priceImpactUsd: string | null;
  positionFeeAmount: string | null;
  borrowingFeeAmount: string | null;
  fundingFeeAmount: string | null;
  collateralTokenPriceMin: string | null;
};

function computeDailyPnlFromTrades(trades: RawTradeAction[], showDebugValues: boolean): PnlHistoricalData {
  if (!trades || trades.length === 0) {
    return EMPTY_ARRAY as PnlHistoricalData;
  }

  // Group trades by day (UTC)
  const dayMap = new Map<number, RawTradeAction[]>();

  for (const trade of trades) {
    const dayStart = Math.floor(trade.timestamp / SECONDS_IN_DAY) * SECONDS_IN_DAY;
    if (!dayMap.has(dayStart)) {
      dayMap.set(dayStart, []);
    }
    dayMap.get(dayStart)!.push(trade);
  }

  // Sort days and compute cumulative PnL
  const sortedDays = Array.from(dayMap.keys()).sort((a, b) => a - b);
  let cumulativePnl = 0n;
  let cumulativeRealizedPnl = 0n;
  let cumulativeRealizedFees = 0n;
  let cumulativeRealizedPriceImpact = 0n;

  const dataPoints = sortedDays.map((dayTimestamp) => {
    const dayTrades = dayMap.get(dayTimestamp)!;

    let dailyPnl = 0n;
    let dailyRealizedPnl = 0n;
    let dailyPriceImpact = 0n;
    let dailyFees = 0n;

    for (const trade of dayTrades) {
      const pnl = trade.pnlUsd ? BigInt(trade.pnlUsd) : 0n;
      const basePnl = trade.basePnlUsd ? BigInt(trade.basePnlUsd) : 0n;
      const priceImpact = trade.priceImpactUsd ? BigInt(trade.priceImpactUsd) : 0n;

      // Calculate fees in USD
      const positionFee = trade.positionFeeAmount ? BigInt(trade.positionFeeAmount) : 0n;
      const borrowingFee = trade.borrowingFeeAmount ? BigInt(trade.borrowingFeeAmount) : 0n;
      const fundingFee = trade.fundingFeeAmount ? BigInt(trade.fundingFeeAmount) : 0n;
      const collateralPrice = trade.collateralTokenPriceMin ? BigInt(trade.collateralTokenPriceMin) : 1n;
      const feesUsd = ((positionFee + borrowingFee + fundingFee) * collateralPrice) / BigInt(1e30);

      dailyPnl += pnl;
      dailyRealizedPnl += basePnl;
      dailyPriceImpact += priceImpact;
      dailyFees += feesUsd;
    }

    cumulativePnl += dailyPnl;
    cumulativeRealizedPnl += dailyRealizedPnl;
    cumulativeRealizedFees += dailyFees;
    cumulativeRealizedPriceImpact += dailyPriceImpact;

    // Create point with all required debug fields
    const point: AccountPnlHistoryPoint = {
      date: showDebugValues
        ? formatDateTime(dayTimestamp) + " - " + formatDateTime(dayTimestamp + SECONDS_IN_DAY) + " local"
        : formatDate(dayTimestamp),
      dateCompact: lightFormat(dayTimestamp * 1000, "dd/MM"),
      pnl: dailyPnl,
      pnlFloat: bigintToNumber(dailyPnl, USD_DECIMALS),
      cumulativePnl: cumulativePnl,
      cumulativePnlFloat: bigintToNumber(cumulativePnl, USD_DECIMALS),
      // Debug fields - always included but only shown when showDebugValues is true
      realizedFees: dailyFees,
      realizedFeesFloat: bigintToNumber(dailyFees, USD_DECIMALS),
      realizedPnl: dailyRealizedPnl,
      realizedPnlFloat: bigintToNumber(dailyRealizedPnl, USD_DECIMALS),
      realizedPriceImpact: dailyPriceImpact,
      realizedPriceImpactFloat: bigintToNumber(dailyPriceImpact, USD_DECIMALS),
      unrealizedFees: 0n,
      unrealizedFeesFloat: 0,
      unrealizedPnl: 0n,
      unrealizedPnlFloat: 0,
      cumulativeRealizedFees: cumulativeRealizedFees,
      cumulativeRealizedFeesFloat: bigintToNumber(cumulativeRealizedFees, USD_DECIMALS),
      cumulativeRealizedPnl: cumulativeRealizedPnl,
      cumulativeRealizedPnlFloat: bigintToNumber(cumulativeRealizedPnl, USD_DECIMALS),
      cumulativeRealizedPriceImpact: cumulativeRealizedPriceImpact,
      cumulativeRealizedPriceImpactFloat: bigintToNumber(cumulativeRealizedPriceImpact, USD_DECIMALS),
      startUnrealizedPnl: 0n,
      startUnrealizedPnlFloat: 0,
      startUnrealizedFees: 0n,
      startUnrealizedFeesFloat: 0,
    };

    return point;
  });

  return dataPoints as PnlHistoricalData;
}

const MINIMUM_DATA_POINTS = 7;

function usePnlHistoricalData(chainId: number, account: Address, fromTimestamp: number | undefined) {
  const showDebugValues = useShowDebugValues();
  const client = getSubsquidGraphClient(chainId);

  const { data, error, isLoading } = useSWR<PnlHistoricalData>(
    account && client ? ["usePnlHistoricalData", chainId, account, fromTimestamp, showDebugValues] : null,
    {
      fetcher: async () => {
        const res = await client!.query({
          query: TRADE_ACTIONS_QUERY,
          variables: { account, from: fromTimestamp },
          fetchPolicy: "no-cache",
        });

        const trades = (res.data?.tradeActions || []) as RawTradeAction[];
        let dataPoints = computeDailyPnlFromTrades(trades, showDebugValues);

        // Pad with empty points if needed
        if (dataPoints.length > 0 && dataPoints.length < MINIMUM_DATA_POINTS) {
          const now = Math.floor(Date.now() / 1000);
          const firstTimestamp = now - SECONDS_IN_DAY * dataPoints.length;

          const pointsLength = dataPoints.length;
          const paddedPoints: AccountPnlHistoryPoint[] = [];

          for (let i = pointsLength; i < MINIMUM_DATA_POINTS; i++) {
            const newTimestamp = firstTimestamp - SECONDS_IN_DAY * (i - pointsLength + 1);
            const emptyPoint: AccountPnlHistoryPoint = {
              date: showDebugValues
                ? formatDateTime(newTimestamp) + " - " + formatDateTime(newTimestamp + SECONDS_IN_DAY) + " local"
                : formatDate(newTimestamp),
              dateCompact: lightFormat(newTimestamp * 1000, "dd/MM"),
              pnl: undefined as any,
              pnlFloat: undefined as any,
              cumulativePnl: undefined as any,
              cumulativePnlFloat: undefined as any,
              // Debug fields
              realizedFees: 0n,
              realizedFeesFloat: 0,
              realizedPnl: 0n,
              realizedPnlFloat: 0,
              realizedPriceImpact: 0n,
              realizedPriceImpactFloat: 0,
              unrealizedFees: 0n,
              unrealizedFeesFloat: 0,
              unrealizedPnl: 0n,
              unrealizedPnlFloat: 0,
              cumulativeRealizedFees: 0n,
              cumulativeRealizedFeesFloat: 0,
              cumulativeRealizedPnl: 0n,
              cumulativeRealizedPnlFloat: 0,
              cumulativeRealizedPriceImpact: 0n,
              cumulativeRealizedPriceImpactFloat: 0,
              startUnrealizedPnl: 0n,
              startUnrealizedPnlFloat: 0,
              startUnrealizedFees: 0n,
              startUnrealizedFeesFloat: 0,
            };
            paddedPoints.unshift(emptyPoint);
          }

          dataPoints = [...paddedPoints, ...dataPoints] as PnlHistoricalData;
        }

        return dataPoints;
      },
    }
  );

  return { data: data || (EMPTY_ARRAY as PnlHistoricalData), error, loading: isLoading };
}

function useImageDownload() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleImageDownload = useCallback(() => {
    if (!cardRef.current) {
      helperToast.error("Error in downloading image");
      return;
    }

    toPng(cardRef.current, {
      filter: (element) => {
        if (element.dataset?.exclude) {
          return false;
        }
        return true;
      },
    }).then((dataUri) => {
      downloadImage(dataUri, "daily-and-cumulative-pnl.png");
    });
  }, []);

  return { cardRef, handleImageDownload };
}
