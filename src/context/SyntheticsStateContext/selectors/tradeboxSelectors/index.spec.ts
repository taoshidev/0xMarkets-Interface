import { describe, expect, it } from "vitest";

import { BASIS_POINTS_DIVISOR } from "config/factors";
import { getTradeboxLeverageSliderMarks } from "domain/synthetics/markets";

describe("tradeboxSelectors", () => {
  it("selectTradeboxLeverageSliderMarks", () => {
    // Ladder tier caps and base caps the slider can see.
    expect(getTradeboxLeverageSliderMarks(3 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 3]);
    expect(getTradeboxLeverageSliderMarks(5 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5]);
    expect(getTradeboxLeverageSliderMarks(10 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5, 10]);
    expect(getTradeboxLeverageSliderMarks(15 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5, 10, 15]);
    expect(getTradeboxLeverageSliderMarks(25 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5, 10, 25]);
    expect(getTradeboxLeverageSliderMarks(50 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5, 10, 25, 50]);
    expect(getTradeboxLeverageSliderMarks(60 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5, 10, 25, 50, 60]);
    expect(getTradeboxLeverageSliderMarks(75 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5, 10, 25, 50, 75]);
    expect(getTradeboxLeverageSliderMarks(100 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5, 10, 25, 50, 100]);
    expect(getTradeboxLeverageSliderMarks(150 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5, 10, 25, 50, 100, 150]);
    expect(getTradeboxLeverageSliderMarks(200 * BASIS_POINTS_DIVISOR)).toEqual([0.1, 1, 2, 5, 10, 25, 50, 100, 200]);
  });
});
