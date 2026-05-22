import { useMemo } from "react";

import {
  selectTradeboxIncreasePositionAmounts,
  selectTradeboxMaxLeverage,
} from "context/SyntheticsStateContext/selectors/tradeboxSelectors";
import { useSelector } from "context/SyntheticsStateContext/utils";
import {
  getLadderEquilibriumMaxLeverage,
  getMaxAllowedLeverageByMinCollateralFactor,
  ladderMaxLeverageToBps,
} from "domain/synthetics/markets";
import { BASIS_POINTS_DIVISOR } from "sdk/configs/factors";
import type { MarketInfo } from "sdk/types/markets";

export type LadderTierWarning = {
  showLadderTierWarning: boolean;
  activeTierMaxLeverage: number | undefined;
  tierBoundaryUsd: bigint | undefined;
};

export function useShowLadderTierWarning(marketInfo: MarketInfo | undefined): LadderTierWarning {
  const amounts = useSelector(selectTradeboxIncreasePositionAmounts);
  const effectiveMaxLeverage = useSelector(selectTradeboxMaxLeverage);

  return useMemo(() => {
    const noBanner = {
      showLadderTierWarning: false,
      activeTierMaxLeverage: undefined,
      tierBoundaryUsd: undefined,
    };

    if (!marketInfo?.leverageLadder?.length) return noBanner;

    const sizeDeltaUsd = amounts?.sizeDeltaUsd ?? 0n;
    const collateralUsd = amounts?.initialCollateralUsd ?? 0n;

    // Don't fire on an empty ticket.
    if (sizeDeltaUsd <= 0n && collateralUsd <= 0n) return noBanner;

    const activeTierIndex = marketInfo.leverageLadder.findIndex((tier) => sizeDeltaUsd <= tier.maxNotionalUsd);
    if (activeTierIndex < 0) return noBanner;
    const activeTier = marketInfo.leverageLadder[activeTierIndex];

    // The ladder's actual contribution to the slider cap. In tier > 0 it's the
    // tier's pure cap; in tier 0 it's the equilibrium (could be tighter than
    // the headline because of `pay × leverage > tier-0 ceiling`).
    const ladderContribRaw =
      activeTierIndex > 0
        ? activeTier.maxLeverage
        : getLadderEquilibriumMaxLeverage(marketInfo, collateralUsd) ?? activeTier.maxLeverage;

    const ladderMaxBps = ladderMaxLeverageToBps(ladderContribRaw);
    const baseMaxBps = getMaxAllowedLeverageByMinCollateralFactor(marketInfo.minCollateralFactor);

    // Only show the banner when the ladder is actually the binding cap.
    if (ladderMaxBps >= baseMaxBps) return noBanner;

    return {
      showLadderTierWarning: true,
      activeTierMaxLeverage: Math.floor(effectiveMaxLeverage / BASIS_POINTS_DIVISOR),
      tierBoundaryUsd: activeTier.maxNotionalUsd,
    };
  }, [marketInfo, amounts?.sizeDeltaUsd, amounts?.initialCollateralUsd, effectiveMaxLeverage]);
}
