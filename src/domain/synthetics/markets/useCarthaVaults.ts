import { useMemo } from "react";

import { useMulticall } from "lib/multicall";
import type { ContractCallsConfig } from "lib/multicall/types";
import { FREQUENT_MULTICALL_REFRESH_INTERVAL } from "lib/timeConstants";
import useWallet from "lib/wallets/useWallet";

import type { ContractsChainId } from "sdk/configs/chains";
import type { AbiId } from "sdk/abis";
import {
  type CarthaVaultType,
  type CarthaCategory,
  getCarthaVaults,
} from "sdk/configs/carthaVaults";

export interface CarthaVaultData {
  address: string;
  name: string;
  symbol: string;
  type: CarthaVaultType;
  category: CarthaCategory;
  parentAddress?: string;
  children?: string[];
  /** TVL in USDC (6 decimals) — from totalAssets() for parents, totalValueLocked() for children */
  totalAssets: bigint;
  /** Total vault shares (18 decimals) */
  totalSupply: bigint;
  /** User's share balance (18 decimals), 0n if not connected */
  userBalance: bigint;
  /** User's balance value in USDC (6 decimals), computed as userBalance * totalAssets / totalSupply */
  userBalanceUsd: bigint;
}

export function useCarthaVaults(chainId: ContractsChainId | undefined): CarthaVaultData[] {
  const { account } = useWallet();

  const vaultConfigs = useMemo(
    () => (chainId ? getCarthaVaults(chainId) : []),
    [chainId]
  );

  const { data } = useMulticall<any, CarthaVaultData[]>(chainId, "useCarthaVaults", {
    key: vaultConfigs.length > 0 ? [account ?? "no-account", vaultConfigs.length] : undefined,

    refreshInterval: FREQUENT_MULTICALL_REFRESH_INTERVAL,
    keepPreviousData: true,

    request: () => {
      const requests: Record<string, ContractCallsConfig<any>> = {};

      for (const vault of vaultConfigs) {
        const isParent = vault.type === "parent";
        const abiId: AbiId = isParent ? "CarthaParentVault" : "CarthaVault";

        requests[vault.address] = {
          contractAddress: vault.address,
          abiId,
          calls: {
            tvl: {
              methodName: isParent ? "totalAssets" : "totalValueLocked",
              params: [],
            },
            totalSupply: {
              methodName: "totalSupply",
              params: [],
            },
            balance: account
              ? {
                  methodName: "balanceOf",
                  params: [account],
                }
              : undefined,
          },
        };
      }

      return requests;
    },

    parseResponse: (res) => {
      return vaultConfigs.map((vault): CarthaVaultData => {
        const result = res.data[vault.address];

        const totalAssets: bigint = result?.tvl?.returnValues?.[0] ?? 0n;
        const totalSupply: bigint = result?.totalSupply?.returnValues?.[0] ?? 0n;
        const userBalance: bigint = result?.balance?.returnValues?.[0] ?? 0n;

        // userBalanceUsd = userBalance * totalAssets / totalSupply
        const userBalanceUsd =
          totalSupply > 0n ? (userBalance * totalAssets) / totalSupply : 0n;

        return {
          address: vault.address,
          name: vault.name,
          symbol: vault.symbol,
          type: vault.type,
          category: vault.category,
          parentAddress: vault.parentAddress,
          children: vault.children,
          totalAssets,
          totalSupply,
          userBalance,
          userBalanceUsd,
        };
      });
    },
  });

  return data ?? [];
}
