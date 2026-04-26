import { describe, expect, it } from "vitest";

import { BASIS_POINTS_DIVISOR } from "config/factors";

import { getMaxLeverageByMarketMaxLeverage } from "./markets";

const PRECISION = 10n ** 30n;

describe("domain/synthetics/utils", () => {
  it("getMaxLeverageByMarketMaxLeverage", () => {
    expect(getMaxLeverageByMarketMaxLeverage(undefined)).toBe(100 * BASIS_POINTS_DIVISOR);
    expect(getMaxLeverageByMarketMaxLeverage(0n)).toBe(100 * BASIS_POINTS_DIVISOR);

    // 100x
    expect(getMaxLeverageByMarketMaxLeverage(100n * PRECISION)).toBe(100 * BASIS_POINTS_DIVISOR);

    // 150x
    expect(getMaxLeverageByMarketMaxLeverage(150n * PRECISION)).toBe(150 * BASIS_POINTS_DIVISOR);

    // 200x
    expect(getMaxLeverageByMarketMaxLeverage(200n * PRECISION)).toBe(200 * BASIS_POINTS_DIVISOR);

    // 120x
    expect(getMaxLeverageByMarketMaxLeverage(120n * PRECISION)).toBe(120 * BASIS_POINTS_DIVISOR);

    // 250x
    expect(getMaxLeverageByMarketMaxLeverage(250n * PRECISION)).toBe(250 * BASIS_POINTS_DIVISOR);
  });
});
