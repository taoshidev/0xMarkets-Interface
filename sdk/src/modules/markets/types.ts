import { MarketInfo, MarketsData, MarketsInfoData } from "types/markets";
import { TokensData } from "types/tokens";
import { MulticallRequestConfig } from "utils/multicall";

export type MarketsResult = {
  marketsData?: MarketsData;
  marketsAddresses?: string[];
  error?: Error | undefined;
};

export type MarketsInfoResult = {
  marketsInfoData?: MarketsInfoData;
  tokensData?: TokensData;
  pricesUpdatedAt?: number;
};

/**
 * Updates frequently
 */
export type MarketValues = Pick<
  MarketInfo,
  | "longInterestUsd"
  | "shortInterestUsd"
  | "longInterestInTokens"
  | "shortInterestInTokens"
  | "longPoolAmount"
  | "shortPoolAmount"
  | "poolValueMin"
  | "poolValueMax"
  | "totalBorrowingFees"
  | "positionImpactPoolAmount"
  | "swapImpactPoolAmountLong"
  | "swapImpactPoolAmountShort"
  | "borrowingFactorPerSecondForLongs"
  | "borrowingFactorPerSecondForShorts"
  | "fundingFactorPerSecond"
  | "longsPayShorts"
  | "virtualPoolAmountForLongToken"
  | "virtualPoolAmountForShortToken"
  | "virtualInventoryForPositions"
>;

/**
 * Updates seldom
 */
export type MarketConfig = Pick<
  MarketInfo,
  | "isDisabled"
  | "maxLongPoolUsdForDeposit"
  | "maxShortPoolUsdForDeposit"
  | "maxLongPoolAmount"
  | "maxShortPoolAmount"
  | "reserveFactorLong"
  | "reserveFactorShort"
  | "openInterestReserveFactorLong"
  | "openInterestReserveFactorShort"
  | "maxOpenInterestLong"
  | "maxOpenInterestShort"
  | "minPositionImpactPoolAmount"
  | "positionImpactPoolDistributionRate"
  | "borrowingFactorLong"
  | "borrowingFactorShort"
  | "borrowingExponentFactorLong"
  | "borrowingExponentFactorShort"
  | "fundingFactor"
  | "fundingExponentFactor"
  | "fundingIncreaseFactorPerSecond"
  | "fundingDecreaseFactorPerSecond"
  | "thresholdForDecreaseFunding"
  | "thresholdForStableFunding"
  | "minFundingFactorPerSecond"
  | "maxFundingFactorPerSecond"
  | "maxPnlFactorForTradersLong"
  | "maxPnlFactorForTradersShort"
  | "minCollateralFactor"
  | "minCollateralFactorForLiquidation"
  | "minCollateralFactorForOpenInterestLong"
  | "minCollateralFactorForOpenInterestShort"
  | "positionFeeFactorForBalanceWasImproved"
  | "positionFeeFactorForBalanceWasNotImproved"
  | "positionImpactFactorPositive"
  | "positionImpactFactorNegative"
  | "maxPositionImpactFactorPositive"
  | "maxPositionImpactFactorNegative"
  | "maxPositionImpactFactorForLiquidations"
  | "maxLendableImpactFactor"
  | "maxLendableImpactFactorForWithdrawals"
  | "maxLendableImpactUsd"
  | "lentPositionImpactPoolAmount"
  | "positionImpactExponentFactor"
  | "swapFeeFactorForBalanceWasImproved"
  | "swapFeeFactorForBalanceWasNotImproved"
  | "swapImpactFactorPositive"
  | "swapImpactFactorNegative"
  | "swapImpactExponentFactor"
  | "atomicSwapFeeFactor"
  | "virtualMarketId"
  | "virtualLongTokenId"
  | "virtualShortTokenId"
  | "leverageLadder"
>;

export type MarketValuesMulticallRequestConfig = MulticallRequestConfig<{
  [key: `${string}-reader`]: {
    calls: Record<
      "marketInfo" | "marketTokenPriceMax" | "marketTokenPriceMin",
      {
        methodName: string;
        params: any[];
      }
    >;
  };
  [key: `${string}-dataStore`]: {
    calls: Record<
      | "longPoolAmount"
      | "shortPoolAmount"
      | "positionImpactPoolAmount"
      | "swapImpactPoolAmountLong"
      | "swapImpactPoolAmountShort"
      | "longInterestUsingLongToken"
      | "longInterestUsingShortToken"
      | "shortInterestUsingLongToken"
      | "shortInterestUsingShortToken"
      | "longInterestInTokensUsingLongToken"
      | "longInterestInTokensUsingShortToken"
      | "shortInterestInTokensUsingLongToken"
      | "shortInterestInTokensUsingShortToken",
      {
        methodName: string;
        params: any[];
      }
    >;
  };
}>;

// Per-tier slot keys for the leverage ladder. Indices are 0..(MAX_LADDER_TIERS-1) — kept
// as a template-literal-style union so the type stays flexible if MAX_LADDER_TIERS grows.
export type LeverageLadderTierCallKey =
  | `leverageLadderMaxNotional_${number}`
  | `leverageLadderMaxLeverage_${number}`;

export type MarketConfigMulticallCallKey =
  | "isDisabled"
  | "maxLongPoolAmount"
  | "maxShortPoolAmount"
  | "maxLongPoolUsdForDeposit"
  | "maxShortPoolUsdForDeposit"
  | "reserveFactorLong"
  | "reserveFactorShort"
  | "openInterestReserveFactorLong"
  | "openInterestReserveFactorShort"
  | "maxOpenInterestLong"
  | "maxOpenInterestShort"
  | "minPositionImpactPoolAmount"
  | "positionImpactPoolDistributionRate"
  | "borrowingFactorLong"
  | "borrowingFactorShort"
  | "borrowingExponentFactorLong"
  | "borrowingExponentFactorShort"
  | "fundingFactor"
  | "fundingExponentFactor"
  | "fundingIncreaseFactorPerSecond"
  | "fundingDecreaseFactorPerSecond"
  | "thresholdForStableFunding"
  | "thresholdForDecreaseFunding"
  | "minFundingFactorPerSecond"
  | "maxFundingFactorPerSecond"
  | "maxPnlFactorForTradersLong"
  | "maxPnlFactorForTradersShort"
  | "positionFeeFactorForBalanceWasImproved"
  | "positionFeeFactorForBalanceWasNotImproved"
  | "positionImpactFactorPositive"
  | "positionImpactFactorNegative"
  | "maxPositionImpactFactorPositive"
  | "maxPositionImpactFactorNegative"
  | "maxPositionImpactFactorForLiquidations"
  | "maxLendableImpactFactor"
  | "maxLendableImpactFactorForWithdrawals"
  | "maxLendableImpactUsd"
  | "lentPositionImpactPoolAmount"
  | "minCollateralFactor"
  | "minCollateralFactorForLiquidation"
  | "minCollateralFactorForOpenInterestLong"
  | "minCollateralFactorForOpenInterestShort"
  | "positionImpactExponentFactor"
  | "swapFeeFactorForBalanceWasImproved"
  | "swapFeeFactorForBalanceWasNotImproved"
  | "atomicSwapFeeFactor"
  | "swapImpactFactorPositive"
  | "swapImpactFactorNegative"
  | "swapImpactExponentFactor"
  | "virtualMarketId"
  | "virtualLongTokenId"
  | "virtualShortTokenId"
  | "leverageLadderTierCount"
  | LeverageLadderTierCallKey;

export type MarketConfigMulticallRequestConfig = MulticallRequestConfig<{
  [key: `${string}-dataStore`]: {
    calls: Record<
      MarketConfigMulticallCallKey,
      {
        methodName: string;
        params: any[];
      }
    >;
  };
}>;

export type KinkModelMarketRateMulticallRequestConfig = MulticallRequestConfig<{
  [key: `${string}-dataStore`]: {
    calls: Record<
      | "optimalUsageFactorLong"
      | "optimalUsageFactorShort"
      | "baseBorrowingFactorLong"
      | "baseBorrowingFactorShort"
      | "aboveOptimalUsageBorrowingFactorLong"
      | "aboveOptimalUsageBorrowingFactorShort",
      {
        methodName: string;
        params: any[];
      }
    >;
  };
}>;
