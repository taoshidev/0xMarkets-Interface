import { ethers } from "ethers";
import { useMemo } from "react";

import { getContract } from "config/contracts";
import { UI_FEE_RECEIVER_ACCOUNT } from "config/ui";
import { ContractCallsConfig, useMulticall } from "lib/multicall";
import type { ContractsChainId } from "sdk/configs/chains";
import { SwapPricingType } from "sdk/types/orders";

import { getContractMarketPrices } from "./utils";
import { MarketInfo } from "./types";
import { TokensData } from "../tokens/types";

/**
 * Calls SyntheticsReader.getDepositAmountOut() to get the exact on-chain
 * market token amount for a given deposit. This replaces the inaccurate
 * pure-JS estimation that diverges from the contract by up to 9%+ for
 * large deposits.
 */
export function useDepositAmountOut(
  chainId: ContractsChainId,
  {
    marketInfo,
    tokensData,
    longTokenAmount,
    shortTokenAmount,
    enabled,
  }: {
    marketInfo: MarketInfo | undefined;
    tokensData: TokensData | undefined;
    longTokenAmount: bigint;
    shortTokenAmount: bigint;
    enabled: boolean;
  }
): bigint | undefined {
  const hasAmounts = longTokenAmount > 0n || shortTokenAmount > 0n;

  const marketPrices = useMemo(
    () => (marketInfo && tokensData ? getContractMarketPrices(tokensData, marketInfo) : undefined),
    [marketInfo, tokensData]
  );

  const isReady = enabled && hasAmounts && !!marketInfo && !!marketPrices;

  const { data } = useMulticall(chainId, "useDepositAmountOut", {
    key: isReady
      ? [marketInfo!.marketTokenAddress, longTokenAmount.toString(), shortTokenAmount.toString()]
      : undefined,

    request: () => {
      const marketProps = {
        marketToken: marketInfo!.marketTokenAddress,
        indexToken: marketInfo!.indexTokenAddress,
        longToken: marketInfo!.longTokenAddress,
        shortToken: marketInfo!.shortTokenAddress,
        reversed: marketInfo!.reversed,
      };

      return {
        depositAmountOut: {
          contractAddress: getContract(chainId, "SyntheticsReader"),
          abiId: "SyntheticsReader",
          calls: {
            result: {
              methodName: "getDepositAmountOut",
              params: [
                getContract(chainId, "DataStore"),
                marketProps,
                marketPrices!,
                longTokenAmount,
                shortTokenAmount,
                UI_FEE_RECEIVER_ACCOUNT ?? ethers.ZeroAddress,
                SwapPricingType.TwoStep,
                true, // includeVirtualInventoryImpact
              ],
            },
          },
        } satisfies ContractCallsConfig<any>,
      };
    },

    parseResponse: (res) => {
      const value = res.data.depositAmountOut?.result?.returnValues?.[0];
      return value !== undefined ? BigInt(value) : undefined;
    },
  });

  return data;
}
