import type { MarketsData } from "sdk/types/markets";
import { MAX_LADDER_TIERS } from "sdk/configs/dataStore";
import { MarketConfigMulticallRequestConfig } from "sdk/modules/markets/types";
import { HASHED_MARKET_CONFIG_KEYS } from "sdk/prebuilt";
import { hashMarketConfigKeys } from "sdk/utils/marketKeysAndConfigs";

export async function buildMarketsConfigsRequest(
  chainId: number,
  {
    marketsAddresses,
    marketsData,
    dataStoreAddress,
  }: {
    marketsAddresses: string[] | undefined;
    marketsData: MarketsData | undefined;
    dataStoreAddress: string;
  }
) {
  const request: MarketConfigMulticallRequestConfig = {};
  for (const marketAddress of marketsAddresses || []) {
    let prebuiltHashedKeys: Record<string, string> | undefined =
      HASHED_MARKET_CONFIG_KEYS[chainId]?.[marketAddress];

    // Cache miss can happen for fork addresses or any market added after the
    // last prebuild. Fall back to hashing on the fly.
    if (!prebuiltHashedKeys) {
      const market = marketsData?.[marketAddress];
      if (!market) {
        throw new Error(
          `No pre-built hashed config keys and no market data found for the market ${marketAddress}.`
        );
      }
      prebuiltHashedKeys = hashMarketConfigKeys(market);
    }

    request[`${marketAddress}-dataStore`] = {
      contractAddress: dataStoreAddress,
      abiId: "DataStore",
      calls: {
        isDisabled: {
          methodName: "getBool",
          params: [prebuiltHashedKeys.isDisabled],
        },
        maxLongPoolAmount: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxLongPoolAmount],
        },
        maxShortPoolAmount: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxShortPoolAmount],
        },
        maxLongPoolUsdForDeposit: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxLongPoolUsdForDeposit],
        },
        maxShortPoolUsdForDeposit: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxShortPoolUsdForDeposit],
        },
        reserveFactorLong: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.reserveFactorLong],
        },
        reserveFactorShort: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.reserveFactorShort],
        },
        openInterestReserveFactorLong: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.openInterestReserveFactorLong],
        },
        openInterestReserveFactorShort: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.openInterestReserveFactorShort],
        },
        maxOpenInterestLong: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxOpenInterestLong],
        },
        maxOpenInterestShort: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxOpenInterestShort],
        },
        minPositionImpactPoolAmount: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.minPositionImpactPoolAmount],
        },
        positionImpactPoolDistributionRate: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.positionImpactPoolDistributionRate],
        },
        borrowingFactorLong: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.borrowingFactorLong],
        },
        borrowingFactorShort: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.borrowingFactorShort],
        },
        borrowingExponentFactorLong: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.borrowingExponentFactorLong],
        },
        borrowingExponentFactorShort: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.borrowingExponentFactorShort],
        },
        fundingFactor: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.fundingFactor],
        },
        fundingExponentFactor: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.fundingExponentFactor],
        },
        fundingIncreaseFactorPerSecond: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.fundingIncreaseFactorPerSecond],
        },
        fundingDecreaseFactorPerSecond: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.fundingDecreaseFactorPerSecond],
        },
        thresholdForStableFunding: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.thresholdForStableFunding],
        },
        thresholdForDecreaseFunding: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.thresholdForDecreaseFunding],
        },
        minFundingFactorPerSecond: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.minFundingFactorPerSecond],
        },
        maxFundingFactorPerSecond: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxFundingFactorPerSecond],
        },
        maxPnlFactorForTradersLong: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxPnlFactorForTradersLong],
        },
        maxPnlFactorForTradersShort: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxPnlFactorForTradersShort],
        },
        positionFeeFactorForBalanceWasImproved: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.positionFeeFactorForBalanceWasImproved],
        },
        positionFeeFactorForBalanceWasNotImproved: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.positionFeeFactorForBalanceWasNotImproved],
        },
        positionImpactFactorPositive: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.positionImpactFactorPositive],
        },
        positionImpactFactorNegative: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.positionImpactFactorNegative],
        },
        maxPositionImpactFactorPositive: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxPositionImpactFactorPositive],
        },
        maxPositionImpactFactorNegative: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxPositionImpactFactorNegative],
        },
        maxPositionImpactFactorForLiquidations: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxPositionImpactFactorForLiquidations],
        },
        maxLendableImpactFactor: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxLendableImpactFactor],
        },
        maxLendableImpactFactorForWithdrawals: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxLendableImpactFactorForWithdrawals],
        },
        maxLendableImpactUsd: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.maxLendableImpactUsd],
        },
        lentPositionImpactPoolAmount: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.lentPositionImpactPoolAmount],
        },
        minCollateralFactor: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.minCollateralFactor],
        },
        minCollateralFactorForLiquidation: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.minCollateralFactorForLiquidation],
        },
        minCollateralFactorForOpenInterestLong: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.minCollateralFactorForOpenInterestLong],
        },
        minCollateralFactorForOpenInterestShort: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.minCollateralFactorForOpenInterestShort],
        },
        positionImpactExponentFactor: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.positionImpactExponentFactor],
        },
        swapFeeFactorForBalanceWasImproved: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.swapFeeFactorForBalanceWasImproved],
        },
        swapFeeFactorForBalanceWasNotImproved: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.swapFeeFactorForBalanceWasNotImproved],
        },
        atomicSwapFeeFactor: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.atomicSwapFeeFactor],
        },
        swapImpactFactorPositive: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.swapImpactFactorPositive],
        },
        swapImpactFactorNegative: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.swapImpactFactorNegative],
        },
        swapImpactExponentFactor: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.swapImpactExponentFactor],
        },
        virtualMarketId: {
          methodName: "getBytes32",
          params: [prebuiltHashedKeys.virtualMarketId],
        },
        virtualShortTokenId: {
          methodName: "getBytes32",
          params: [prebuiltHashedKeys.virtualShortTokenId],
        },
        virtualLongTokenId: {
          methodName: "getBytes32",
          params: [prebuiltHashedKeys.virtualLongTokenId],
        },
        leverageLadderTierCount: {
          methodName: "getUint",
          params: [prebuiltHashedKeys.leverageLadderTierCount],
        },
        ...buildLadderTierCalls(prebuiltHashedKeys),
      },
    };
  }

  return request;
}

// Reads up to MAX_LADDER_TIERS slots; the parser trims trailing empties using
// the tierCount value above.
function buildLadderTierCalls(prebuiltHashedKeys: Record<string, string>) {
  const calls: Record<string, { methodName: string; params: [string] }> = {};
  for (let i = 0; i < MAX_LADDER_TIERS; i++) {
    calls[`leverageLadderMaxNotional_${i}`] = {
      methodName: "getUint",
      params: [prebuiltHashedKeys[`leverageLadderMaxNotional_${i}`]],
    };
    calls[`leverageLadderMaxLeverage_${i}`] = {
      methodName: "getUint",
      params: [prebuiltHashedKeys[`leverageLadderMaxLeverage_${i}`]],
    };
  }
  return calls;
}
