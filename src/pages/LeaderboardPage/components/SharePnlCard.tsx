import { Trans, t } from "@lingui/macro";
import { toPng } from "html-to-image";
import { useCallback, useRef, useState } from "react";

import { LeaderboardAccount } from "domain/synthetics/leaderboard";
import { shortenAddress } from "lib/legacy";
import { formatAmount, USD_DECIMALS } from "lib/numbers";
import { bigMath } from "sdk/utils/bigmath";

import logoSrc from "img/logo_0xMarkets.svg";

function formatPnlUsd(pnl: bigint): string {
  const abs = bigMath.abs(pnl);
  const sign = pnl >= 0n ? "+" : "-";
  return `${sign}$${formatAmount(abs, USD_DECIMALS, 2, true)}`;
}

function formatPnlPct(pct: bigint): string {
  const sign = pct >= 0n ? "+" : "-";
  const abs = bigMath.abs(pct);
  return `${sign}${formatAmount(abs, 2, 2, true)}%`;
}

export function SharePnlCard({
  account,
  rank,
  onClose,
}: {
  account: LeaderboardAccount;
  rank: number | null;
  onClose: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        backgroundColor: "#0b0e1a",
      });
      const link = document.createElement("a");
      link.download = `0xmarkets-pnl-${shortenAddress(account.account, 4)}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setDownloading(false);
    }
  }, [account.account]);

  const handleCopyImage = useCallback(async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        backgroundColor: "#0b0e1a",
      });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    } finally {
      setDownloading(false);
    }
  }, []);

  const pnl = account.totalQualifyingPnl;
  const pct = account.pnlPercentage;
  const isPositive = pnl >= 0n;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-16" onClick={onClose}>
      <div className="flex max-w-[520px] flex-col gap-16" onClick={(e) => e.stopPropagation()}>
        {/* The card itself — this gets exported */}
        <div
          ref={cardRef}
          style={{
            width: 480,
            padding: 32,
            background: "linear-gradient(145deg, #0d1020 0%, #111631 50%, #0d1020 100%)",
            borderRadius: 16,
            fontFamily: "system-ui, -apple-system, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -60,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: isPositive ? "#00D1CD" : "#b42941",
              opacity: 0.06,
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -100,
              left: -40,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "#3b4bec",
              opacity: 0.05,
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />

          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
            <img src={logoSrc} alt="0xMarkets" style={{ height: 22, opacity: 0.9 }} />
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#00D1CD",
                background: "rgba(0,209,205,0.1)",
                border: "1px solid rgba(0,209,205,0.2)",
                padding: "3px 10px",
                borderRadius: 4,
              }}
            >
              Testnet Competition
            </div>
          </div>

          {/* Rank */}
          {rank !== null && (
            <div style={{ marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Rank
              </span>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "white",
                  marginLeft: 12,
                }}
              >
                #{rank}
              </span>
            </div>
          )}

          {/* PnL */}
          <div style={{ marginBottom: 6 }}>
            <div
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: isPositive ? "#00D1CD" : "#ef4444",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {formatPnlUsd(pnl)}
            </div>
          </div>

          {/* ROI */}
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: isPositive ? "rgba(0,209,205,0.7)" : "rgba(239,68,68,0.7)",
              }}
            >
              ROI {formatPnlPct(pct)}
            </span>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 16 }} />

          {/* Footer */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
              {shortenAddress(account.account, 8)}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontWeight: 500 }}>
              app.0xmarkets.io
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-8">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex-1 rounded-8 bg-blue-400 px-16 py-10 text-body-medium font-medium text-white transition-colors hover:bg-[#2a3de5] disabled:opacity-50"
          >
            {downloading ? t`Exporting...` : t`Download PNG`}
          </button>
          <button
            onClick={handleCopyImage}
            disabled={downloading}
            className="flex-1 rounded-8 border border-slate-600 bg-transparent px-16 py-10 text-body-medium font-medium text-typography-secondary transition-colors hover:border-slate-500 hover:text-typography-primary disabled:opacity-50"
          >
            <Trans>Copy to Clipboard</Trans>
          </button>
          <button
            onClick={onClose}
            className="rounded-8 border border-slate-600 bg-transparent px-16 py-10 text-body-medium font-medium text-typography-secondary transition-colors hover:border-slate-500 hover:text-typography-primary"
          >
            <Trans>Close</Trans>
          </button>
        </div>
      </div>
    </div>
  );
}
