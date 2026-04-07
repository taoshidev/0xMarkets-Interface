import { Trans, t } from "@lingui/macro";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { createPublicClient, http, formatUnits, parseAbi } from "viem";
import { baseSepolia } from "viem/chains";

import { useLeaderboardPageKey, useLeaderboardTiming } from "context/SyntheticsStateContext/hooks/leaderboardHooks";
import { LEADERBOARD_PAGES } from "domain/synthetics/leaderboard/constants";

const KEEPER_ADDRESS = "0x48Cb0d738C9B3F44F60f7338F788fa093FD25828" as const;
const USD0_ADDRESS = "0x3ae4474579d24a743c9016F017e76185A834d837" as const;

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

function useKeeperUsd0Balance() {
  const { data } = useSWR("keeper-usd0-balance", async () => {
    const balance = await publicClient.readContract({
      address: USD0_ADDRESS,
      abi: parseAbi(["function balanceOf(address) view returns (uint256)"]),
      functionName: "balanceOf",
      args: [KEEPER_ADDRESS],
    });
    return balance;
  }, { refreshInterval: 30_000 });

  return data;
}

const PRIZES = [
  { rank: "#1", amount: "12,500", pct: "56.8%" },
  { rank: "#2", amount: "5,000", pct: "22.7%" },
  { rank: "#3", amount: "2,500", pct: "11.4%" },
  { rank: "#4", amount: "1,000", pct: "4.5%" },
  { rank: "#5", amount: "500", pct: "2.3%" },
  { rank: "#6–10", amount: "100 each", pct: "0.45% ea" },
];

const STEPS = [
  { num: "1", label: "Get USD0 from faucet" },
  { num: "2", label: "Trade on Base Sepolia" },
  { num: "3", label: "Climb the leaderboard" },
  { num: "4", label: "Claim your Alpha" },
];

export function TestnetBanner() {
  const pageKey = useLeaderboardPageKey();
  const page = LEADERBOARD_PAGES[pageKey];
  const { isEndInFuture, isStartInFuture, timeframe } = useLeaderboardTiming();
  const keeperBalance = useKeeperUsd0Balance();

  const durationLabel = useMemo(() => {
    const fmt = (ts: number) =>
      new Date(ts * 1000).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
    const start = fmt(timeframe.from);
    const end = timeframe.to ? fmt(timeframe.to) : "TBD";
    return `${start} – ${end}`;
  }, [timeframe]);

  if (!page.isCompetition || !page.isTestnet) return null;

  const { title, description, prizePool, network, faucetUrl } = page;
  const hasEnded = !isEndInFuture && !isStartInFuture;
  const formattedBalance = keeperBalance !== undefined
    ? Number(formatUnits(keeperBalance, 18)).toLocaleString("en-US", { maximumFractionDigits: 0 })
    : "…";

  return (
    <div className="flex flex-col gap-16">
      {/* Hero card */}
      <div className="relative overflow-hidden rounded-20 bg-slate-800">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -right-60 -top-80 h-[340px] w-[340px] rounded-full bg-blue-400 opacity-[0.07] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-[120px] left-[15%] h-[300px] w-[300px] rounded-full bg-[#00D1CD] opacity-[0.04] blur-[100px]" />

        <div className="relative flex items-start justify-between gap-24 p-28 max-md:flex-col">
          {/* Left */}
          <div className="min-w-0 flex-1">
            <div className="mb-12 inline-block rounded-4 border border-blue-400/20 bg-blue-400/10 px-10 py-3 text-caption font-medium uppercase tracking-wider text-blue-300">
              <Trans>Testnet Competition</Trans>
            </div>

            <h3 className="text-h3 mb-8 font-medium text-typography-primary">{title}</h3>
            <p className="text-body-medium mb-18 max-w-[500px] leading-relaxed text-typography-secondary">
              {description}
            </p>

            {/* Meta stats */}
            <div className="mb-18 flex gap-28 max-md:flex-wrap max-md:gap-16">
              <div>
                <div className="text-caption font-medium uppercase tracking-wider text-typography-secondary">
                  <Trans>Prize Pool</Trans>
                </div>
                <div className="mt-4 text-body-medium font-medium text-[#00D1CD]">{prizePool}</div>
              </div>
              <div>
                <div className="text-caption font-medium uppercase tracking-wider text-typography-secondary">
                  <Trans>Duration</Trans>
                </div>
                <div className="mt-4 text-body-medium font-medium text-typography-secondary">{durationLabel}</div>
              </div>
              <div>
                <div className="text-caption font-medium uppercase tracking-wider text-typography-secondary">
                  <Trans>Network</Trans>
                </div>
                <div className="mt-4 text-body-medium font-medium text-typography-secondary">{network}</div>
              </div>
              <div>
                <div className="text-caption font-medium uppercase tracking-wider text-typography-secondary">
                  <Trans>Ranking</Trans>
                </div>
                <div className="mt-4 text-body-medium font-medium text-typography-secondary">Total Closed PnL ($)</div>
              </div>
              <div>
                <div className="text-caption font-medium uppercase tracking-wider text-typography-secondary">
                  <Trans>USDC Accumulated</Trans>
                </div>
                <div className="mt-4 text-body-medium font-medium text-[#00D1CD]">{formattedBalance} USD0</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-10 max-md:w-full max-md:flex-col">
              {!hasEnded && faucetUrl && (
                <a
                  href={faucetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 rounded-6 bg-blue-400 px-18 py-8 text-body-medium font-medium text-white transition-colors hover:bg-[#2a3de5]"
                >
                  <Trans>Get Testnet Tokens</Trans>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-70">
                    <path
                      d="M3.5 1.5H10.5V8.5M10.5 1.5L1.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right — Countdown */}
          <div className="flex-shrink-0 text-right max-md:text-left">
            <BannerCountdown
              isStartInFuture={isStartInFuture}
              isEndInFuture={isEndInFuture}
              hasEnded={hasEnded}
              timeframe={timeframe}
            />
          </div>
        </div>
      </div>

      {/* Prize schedule + How to participate */}
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Prize Schedule */}
        <div className="rounded-20 bg-slate-800 p-24">
          <h4 className="text-body-large mb-16 font-medium text-typography-primary">
            <Trans>Prize Schedule</Trans>
          </h4>
          <div className="flex flex-col gap-2">
            {PRIZES.map((p) => (
              <div
                key={p.rank}
                className="flex items-center justify-between rounded-8 px-12 py-8 odd:bg-slate-900/40"
              >
                <div className="flex items-center gap-12">
                  <span className="w-[48px] text-body-medium font-medium text-typography-secondary">{p.rank}</span>
                  <span className="text-body-medium font-medium text-[#00D1CD]">{p.amount} Alpha</span>
                </div>
                <span className="text-caption text-typography-secondary">{p.pct}</span>
              </div>
            ))}
            <div className="mt-8 flex items-center justify-between border-t border-slate-700 px-12 pt-10">
              <span className="text-body-medium font-medium text-typography-secondary">
                <Trans>Total</Trans>
              </span>
              <span className="text-body-medium font-medium text-[#00D1CD]">22,000 Alpha</span>
            </div>
            <p className="mt-12 px-12 text-caption leading-relaxed text-typography-secondary">
              All accumulated USDC will be used to buyback additional Alpha and distributed in accordance with the
              schedule.
            </p>
          </div>
        </div>

        {/* How to Participate */}
        <div className="rounded-20 bg-slate-800 p-24">
          <h4 className="text-body-large mb-16 font-medium text-typography-primary">
            <Trans>How to Participate</Trans>
          </h4>
          <div className="mb-20 flex flex-col gap-12">
            {STEPS.map((s) => (
              <div key={s.num} className="flex items-center gap-12">
                <div className="flex size-28 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-caption font-medium text-blue-300">
                  {s.num}
                </div>
                <span className="text-body-medium text-typography-secondary">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="rounded-8 bg-slate-900/60 p-16">
            <div className="mb-6 text-caption font-medium uppercase tracking-wider text-typography-secondary">
              <Trans>Ranking Formula</Trans>
            </div>
            <code className="text-body-small font-medium text-typography-primary">
              Total Closed PnL ($)
            </code>
            <p className="mt-8 text-caption leading-relaxed text-typography-secondary">
              <Trans>
                Only realized (closed) PnL counts. Unrealized PnL is excluded. The trader with the highest total
                closed dollar PnL wins.
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerCountdown({
  isStartInFuture,
  isEndInFuture: _isEndInFuture,
  hasEnded,
  timeframe,
}: {
  isStartInFuture: boolean;
  isEndInFuture: boolean;
  hasEnded: boolean;
  timeframe: { from: number; to: number | undefined };
}) {
  if (hasEnded) {
    const endDate = timeframe.to
      ? new Date(timeframe.to * 1000).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        })
      : "";
    return (
      <div>
        <div className="text-caption font-medium uppercase tracking-wider text-typography-secondary">
          <Trans>Competition Ended</Trans>
        </div>
        {endDate && <div className="mt-4 text-body-medium text-typography-secondary">{endDate}</div>}
      </div>
    );
  }

  const target = isStartInFuture ? timeframe.from : timeframe.to;
  if (!target) return null;

  const label = isStartInFuture ? t`Starts in` : t`Ends in`;

  return (
    <div>
      <div className="text-caption font-medium uppercase tracking-wider text-typography-secondary">{label}</div>
      <CountdownDigits target={target} />
    </div>
  );
}

function CountdownDigits({ target }: { target: number }) {
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, Math.ceil(target - Date.now() / 1000)));

  useEffect(() => {
    setTimeLeft(Math.max(0, Math.ceil(target - Date.now() / 1000)));
    const id = setInterval(() => {
      setTimeLeft(Math.max(0, Math.ceil(target - Date.now() / 1000)));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div>
      <div
        className="mt-8 text-[3.6rem] font-medium leading-none tracking-wide text-typography-primary"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {pad(days)}
        <span className="text-slate-600">:</span>
        {pad(hours)}
        <span className="text-slate-600">:</span>
        {pad(minutes)}
        <span className="text-slate-600">:</span>
        {pad(seconds)}
      </div>
      <div className="mt-6 flex justify-end gap-[22px] text-caption font-medium uppercase tracking-wider text-typography-secondary max-md:justify-start">
        <span>days</span>
        <span>hrs</span>
        <span>min</span>
        <span>sec</span>
      </div>
    </div>
  );
}
