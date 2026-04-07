import { Trans } from "@lingui/macro";
import { useMemo } from "react";

import { formatTokenAmount, formatUsd } from "lib/numbers";

import type { CarthaVaultData } from "domain/synthetics/markets/useCarthaVaults";

/** Scale USDC (6 decimals) to USD_DECIMALS (30 decimals) for formatUsd */
const USDC_TO_USD_SCALE = 10n ** 24n;

function formatVaultUsd(usdc6: bigint): string {
  return formatUsd(usdc6 * USDC_TO_USD_SCALE) ?? "$0.00";
}

interface CategoryGroup {
  parent: CarthaVaultData;
  children: CarthaVaultData[];
}

export function CarthaVaultCards({ vaults }: { vaults: CarthaVaultData[] }) {
  const groups = useMemo<CategoryGroup[]>(() => {
    const parents = vaults.filter((v) => v.type === "parent");
    return parents.map((parent) => ({
      parent,
      children: vaults.filter((v) => v.type === "child" && v.parentAddress === parent.address),
    }));
  }, [vaults]);

  if (!groups.length) return null;

  return (
    <div className="px-8 pb-12 max-md:px-12 max-md:pb-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {groups.map(({ parent, children }) => (
          <CarthaVaultCard key={parent.address} parent={parent} subVaults={children} />
        ))}
      </div>
    </div>
  );
}

function CarthaVaultCard({ parent, subVaults }: { parent: CarthaVaultData; subVaults: CarthaVaultData[] }) {
  const hasBalance = parent.userBalance > 0n;

  return (
    <div className="flex flex-col overflow-hidden rounded-8 border border-[#383a55] bg-[#050e16]">
      {/* Teal top accent bar */}
      <div className="h-[2px] bg-[#01d1d0]" />

      <div className="flex flex-col gap-12 p-16">
        {/* Header: name + category badge */}
        <div className="flex flex-col">
          <div className="flex items-center gap-8">
            <span className="text-body-large font-medium">{parent.name}</span>
            <span className="rounded-4 bg-[#01d1d0]/10 px-6 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#01d1d0]">
              {parent.category}
            </span>
          </div>
          <span className="text-12 text-[#8f9eae]">{parent.symbol}</span>
        </div>

        {/* Parent TVL */}
        <div>
          <div className="text-h3 normal-nums">{formatVaultUsd(parent.totalAssets)}</div>
          <div className="text-body-small text-[#8f9eae]">
            <Trans>Total Value Locked</Trans>
          </div>
        </div>

        {/* User balance if connected */}
        {hasBalance && (
          <div>
            <div className="numbers text-body-medium">
              {formatTokenAmount(parent.userBalance, 18, undefined, { displayDecimals: 4 })} shares
            </div>
            <div className="text-12 text-[#8f9eae] numbers">
              ({formatVaultUsd(parent.userBalanceUsd)})
            </div>
          </div>
        )}

        {/* Child vaults */}
        {subVaults.length > 0 && (
          <div className="flex flex-col gap-2 border-t border-[#383a55] pt-12">
            {subVaults.map((child) => (
              <CarthaChildRow key={child.address} vault={child} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CarthaChildRow({ vault }: { vault: CarthaVaultData }) {
  const hasBalance = vault.userBalance > 0n;

  return (
    <div className="flex items-center justify-between rounded-4 px-8 py-6 gmx-hover:bg-[#383a55]/30">
      <div className="flex items-center gap-8">
        <div className="h-16 w-[2px] shrink-0 rounded-full bg-[#01d1d0]/25" />
        <div>
          <span className="text-body-medium">{vault.name}</span>
          <span className="ml-6 text-12 text-[#8f9eae]">{vault.symbol}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="numbers text-body-medium">{formatVaultUsd(vault.totalAssets)}</div>
        {hasBalance && (
          <div className="text-12 text-[#8f9eae] numbers">
            {formatTokenAmount(vault.userBalance, 18, undefined, { displayDecimals: 2 })} shares
          </div>
        )}
      </div>
    </div>
  );
}
