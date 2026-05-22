import { BASIS_POINTS_DIVISOR } from "configs/factors";
import { getTokenVisualMultiplier, NATIVE_TOKEN_ADDRESS } from "configs/tokens";
import { ContractMarketPrices, Market, MarketInfo } from "types/markets";
import { Token, TokenPrices, TokensData } from "types/tokens";

import { applyFactor, PRECISION } from "./numbers";
import { getByKey } from "./objects";
import { convertToContractTokenPrices, convertToUsd, getMidPrice } from "./tokens";

const REVERSED_PAIR_SYMBOLS = new Set(["JPY"]);

export function getMarketFullName(p: {
  longToken: Token;
  shortToken: Token;
  indexToken: Token;
  isSpotOnly: boolean;
  reversed?: boolean;
}) {
  const { indexToken, longToken, shortToken, isSpotOnly, reversed } = p;

  return `${getMarketIndexName({ indexToken, isSpotOnly, reversed })} [${getMarketPoolName({ longToken, shortToken })}]`;
}

export function getMarketIndexName(
  p: ({ indexToken: Token } | { glvToken: Token }) & { isSpotOnly: boolean; reversed?: boolean }
) {
  if (p.isSpotOnly) {
    return `SWAP-ONLY`;
  }

  const baseName = getMarketBaseName(p);
  const token = "indexToken" in p ? p.indexToken : p.glvToken;
  const isReversed = p.reversed ?? REVERSED_PAIR_SYMBOLS.has(token.symbol);
  return isReversed ? `USD/${baseName}` : `${baseName}/USD`;
}

export function getMarketBaseName(p: ({ indexToken: Token } | { glvToken: Token }) & { isSpotOnly: boolean }) {
  const { isSpotOnly } = p;

  const firstToken = "indexToken" in p ? p.indexToken : p.glvToken;

  if (isSpotOnly) {
    return `SWAP-ONLY`;
  }

  const prefix = getTokenVisualMultiplier(firstToken);

  return `${prefix}${firstToken.baseSymbol || firstToken.symbol}`;
}

export function getMarketPoolName(p: { longToken: Token; shortToken: Token }, separator = "-") {
  const { longToken, shortToken } = p;

  return `${longToken.symbol}${separator}${shortToken.symbol}`;
}

export function getContractMarketPrices(tokensData: TokensData, market: Market): ContractMarketPrices | undefined {
  const indexToken = getByKey(tokensData, market.indexTokenAddress);
  const longToken = getByKey(tokensData, market.longTokenAddress);
  const shortToken = getByKey(tokensData, market.shortTokenAddress);

  if (!indexToken || !longToken || !shortToken) {
    return undefined;
  }

  return {
    indexTokenPrice: indexToken && convertToContractTokenPrices(indexToken.prices, indexToken.decimals),
    longTokenPrice: longToken && convertToContractTokenPrices(longToken.prices, longToken.decimals),
    shortTokenPrice: shortToken && convertToContractTokenPrices(shortToken.prices, shortToken.decimals),
  };
}

/**
 * Apart from usual cases, returns `long` for single token backed markets.
 */
export function getTokenPoolType(
  marketInfo: {
    longToken: Token;
    shortToken: Token;
  },
  tokenAddress: string
): "long" | "short" | undefined {
  const { longToken, shortToken } = marketInfo;

  if (longToken.address === shortToken.address && tokenAddress === longToken.address) {
    return "long";
  }

  if (tokenAddress === longToken.address || (tokenAddress === NATIVE_TOKEN_ADDRESS && longToken.isWrapped)) {
    return "long";
  }

  if (tokenAddress === shortToken.address || (tokenAddress === NATIVE_TOKEN_ADDRESS && shortToken.isWrapped)) {
    return "short";
  }

  return undefined;
}

export function getPoolUsdWithoutPnl(
  marketInfo: MarketInfo,
  isLong: boolean,
  priceType: "minPrice" | "maxPrice" | "midPrice"
) {
  const poolAmount = isLong ? marketInfo.longPoolAmount : marketInfo.shortPoolAmount;
  const token = isLong ? marketInfo.longToken : marketInfo.shortToken;

  let price: bigint | undefined;

  if (priceType === "minPrice") {
    price = token.prices?.minPrice;
  } else if (priceType === "maxPrice") {
    price = token.prices?.maxPrice;
  } else {
    price = getMidPrice(token.prices);
  }

  return convertToUsd(poolAmount, token.decimals, price)!;
}

export function getCappedPoolPnl(p: { marketInfo: MarketInfo; poolUsd: bigint; poolPnl: bigint; isLong: boolean }) {
  const { marketInfo, poolUsd, poolPnl, isLong } = p;

  if (poolPnl < 0) {
    return poolPnl;
  }

  const maxPnlFactor: bigint = isLong ? marketInfo.maxPnlFactorForTradersLong : marketInfo.maxPnlFactorForTradersShort;
  const maxPnl = applyFactor(poolUsd, maxPnlFactor);

  return poolPnl > maxPnl ? maxPnl : poolPnl;
}

export function getMaxLeverageByMinCollateralFactor(minCollateralFactor: bigint | undefined) {
  if (minCollateralFactor === undefined) return 100 * BASIS_POINTS_DIVISOR;
  if (minCollateralFactor === 0n) return 100 * BASIS_POINTS_DIVISOR;

  const x = Number(PRECISION / minCollateralFactor);
  const rounded = Math.round(x / 10) * 10;
  return rounded * BASIS_POINTS_DIVISOR;
}

export function getMaxAllowedLeverageByMinCollateralFactor(minCollateralFactor: bigint | undefined) {
  const raw = getMaxLeverageByMinCollateralFactor(minCollateralFactor) / 1.5;
  // Floor to nearest whole multiplier of BASIS_POINTS_DIVISOR (e.g. 500x, 200x, 100x)
  const wholeX = Math.floor(raw / BASIS_POINTS_DIVISOR);
  return wholeX * BASIS_POINTS_DIVISOR;
}

// Mirror of LeverageLadderUtils.getMaxLeverageForNotional on the contract side.
// Output is 30-decimal fixed-point. Returns undefined when there's no ladder.
export function getLadderMaxLeverageForNotional(
  market: { leverageLadder?: Array<{ maxNotionalUsd: bigint; maxLeverage: bigint }> },
  notionalUsd: bigint
): bigint | undefined {
  const ladder = market.leverageLadder;
  if (!ladder || ladder.length === 0) return undefined;

  for (const tier of ladder) {
    if (notionalUsd <= tier.maxNotionalUsd) return tier.maxLeverage;
  }
  // Tail tier should be MAX_UINT, so we never reach here for a well-formed
  // ladder; falling back to the last tier just in case.
  return ladder[ladder.length - 1].maxLeverage;
}

// Highest leverage L such that (collateralUsd * L) stays within a tier whose
// cap is >= L. Use when collateral is the stable input (Pay-driven mode) to
// avoid the slider's "current size depends on current leverage" feedback loop.
export function getLadderEquilibriumMaxLeverage(
  market: { leverageLadder?: Array<{ maxNotionalUsd: bigint; maxLeverage: bigint }> },
  collateralUsd: bigint
): bigint | undefined {
  const ladder = market.leverageLadder;
  if (!ladder || ladder.length === 0) return undefined;
  if (collateralUsd <= 0n) return ladder[0].maxLeverage;

  let maxEq = 0n;
  for (const tier of ladder) {
    // L where notional reaches the tier ceiling: L = maxNotional / collateral.
    // Multiply by PRECISION first so the result lands in 30-decimal fixed-point.
    const fromNotional = (tier.maxNotionalUsd * PRECISION) / collateralUsd;
    const eq = fromNotional < tier.maxLeverage ? fromNotional : tier.maxLeverage;
    if (eq > maxEq) maxEq = eq;
  }
  return maxEq;
}

// 30-decimal fixed-point -> BPS units (10000 = 1x), to match the rest of the
// leverage stack.
export function ladderMaxLeverageToBps(ladderMaxLeverage: bigint): number {
  return Number((ladderMaxLeverage * BigInt(BASIS_POINTS_DIVISOR)) / PRECISION);
}

export function getOppositeCollateral(marketInfo: MarketInfo, tokenAddress: string) {
  const poolType = getTokenPoolType(marketInfo, tokenAddress);

  if (poolType === "long") {
    return marketInfo.shortToken;
  }

  if (poolType === "short") {
    return marketInfo.longToken;
  }

  return undefined;
}

export function getAvailableUsdLiquidityForCollateral(marketInfo: MarketInfo, isLong: boolean) {
  const poolUsd = getPoolUsdWithoutPnl(marketInfo, isLong, "minPrice");

  if (marketInfo.isSpotOnly) {
    return poolUsd;
  }

  const reservedUsd = getReservedUsd(marketInfo, isLong);
  const maxReserveFactor = isLong ? marketInfo.reserveFactorLong : marketInfo.reserveFactorShort;

  if (maxReserveFactor === 0n) {
    return 0n;
  }

  const minPoolUsd = (reservedUsd * PRECISION) / maxReserveFactor;

  const liquidity = poolUsd - minPoolUsd;

  return liquidity;
}

export function getReservedUsd(marketInfo: MarketInfo, isLong: boolean) {
  const { indexToken } = marketInfo;

  if (isLong) {
    return convertToUsd(marketInfo.longInterestInTokens, marketInfo.indexToken.decimals, indexToken.prices.maxPrice)!;
  } else {
    return marketInfo.shortInterestUsd;
  }
}

export function getMarketDivisor({
  longTokenAddress,
  shortTokenAddress,
}: {
  longTokenAddress: string;
  shortTokenAddress: string;
}) {
  return longTokenAddress === shortTokenAddress ? 2n : 1n;
}

export function getMarketPnl(marketInfo: MarketInfo, isLong: boolean, forMaxPoolValue: boolean) {
  const maximize = !forMaxPoolValue;
  const openInterestUsd = getOpenInterestUsd(marketInfo, isLong);
  const openInterestInTokens = getOpenInterestInTokens(marketInfo, isLong);

  if (openInterestUsd === 0n || openInterestInTokens === 0n) {
    return 0n;
  }

  const price = getPriceForPnl(marketInfo.indexToken.prices, isLong, maximize);

  const openInterestValue = convertToUsd(openInterestInTokens, marketInfo.indexToken.decimals, price)!;
  const pnl = isLong ? openInterestValue - openInterestUsd : openInterestUsd - openInterestValue;

  return pnl;
}

export function getOpenInterestUsd(marketInfo: MarketInfo, isLong: boolean) {
  return isLong ? marketInfo.longInterestUsd : marketInfo.shortInterestUsd;
}

export function getOpenInterestInTokens(marketInfo: MarketInfo, isLong: boolean) {
  return isLong ? marketInfo.longInterestInTokens : marketInfo.shortInterestInTokens;
}

export function getPriceForPnl(prices: TokenPrices, isLong: boolean, maximize: boolean) {
  // for long positions, pick the larger price to maximize pnl
  // for short positions, pick the smaller price to maximize pnl
  if (isLong) {
    return maximize ? prices.maxPrice : prices.minPrice;
  }

  return maximize ? prices.minPrice : prices.maxPrice;
}

export function getIsMarketAvailableForExpressSwaps(marketInfo: MarketInfo) {
  return [marketInfo.indexToken, marketInfo.longToken, marketInfo.shortToken].every(
    (token) => token.hasPriceFeedProvider
  );
}
