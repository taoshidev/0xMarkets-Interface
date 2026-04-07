import { Trans } from "@lingui/macro";
import { useEffect, useMemo, useState } from "react";

import { BASE_SEPOLIA } from "config/chains";
import { USD_DECIMALS } from "config/factors";
import { usePositionsTotalCollateral } from "domain/synthetics/positions/usePositionsTotalCollateral";
import useV2Stats from "domain/synthetics/stats/useV2Stats";
import { useChainId } from "lib/chains";
import { formatAmountHuman } from "lib/numbers";

import { AppCard, AppCardSection, AppCardSplit } from "components/AppCard/AppCard";
import TooltipComponent from "components/Tooltip/Tooltip";

import { getFormattedFeesDuration } from "./getFormattedFeesDuration";

export function OverviewCard() {
  const { chainId: _chainId } = useChainId();

  const v2Overview = useV2Stats(BASE_SEPOLIA);

  const positionsCollateralUsd = usePositionsTotalCollateral(BASE_SEPOLIA);

  // #region TVL
  const gmTvl = v2Overview.totalGMLiquidity;

  let displayTvl: bigint | undefined = undefined;
  if (positionsCollateralUsd !== undefined) {
    displayTvl = gmTvl + positionsCollateralUsd;
  }
  // #endregion TVL

  // #region Daily Volume
  const totalDailyVolume = v2Overview.dailyVolume;
  // #endregion Daily Volume

  // #region Open Interest
  const totalOpenInterest = v2Overview.openInterest;
  // #endregion Open Interest

  // #region Long Position Sizes
  const totalLongPositionSizes = v2Overview.totalLongPositionSizes;
  // #endregion Long Position Sizes

  // #region Short Position Sizes
  const totalShortPositionSizes = v2Overview.totalShortPositionSizes;
  // #endregion Short Position Sizes

  // #region Fees
  const totalEpochFeesUsd = v2Overview.epochFees;
  const totalWeeklyFeesUsd = v2Overview.weeklyFees ?? 0n;
  // #endregion Fees

  const [formattedDuration, setFormattedDuration] = useState(() => getFormattedFeesDuration());

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDuration(getFormattedFeesDuration());
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  const feesSubtotal = useMemo(() => {
    const annualizedTotal = (totalWeeklyFeesUsd * 365n) / 7n;

    return (
      <>
        <div className="my-5 h-1 bg-gray-800" />
        <p className="Tooltip-row">
          <span className="label">
            <Trans>Annualized:</Trans>
          </span>
          <span className="numbers">{formatAmountHuman(annualizedTotal, USD_DECIMALS, true, 2)}</span>
        </p>
        <p className="Tooltip-row !mt-16">
          <Trans>Annualized data based on the past 7 days.</Trans>
        </p>
      </>
    );
  }, [totalWeeklyFeesUsd]);

  return (
    <AppCard>
      <AppCardSection className="text-body-large font-medium">
        <Trans>Overview</Trans>
      </AppCardSection>
      <AppCardSplit
        className="max-lg:flex-col"
        leftClassName="max-lg:border-r-0 max-lg:border-b"
        right={
          <AppCardSection className="pb-24">
            <div className="App-card-row">
              <div className="label">
                <Trans>Fees for the past</Trans> {formattedDuration}
              </div>
              <div>
                <TooltipComponent
                  position="bottom-end"
                  className="whitespace-nowrap"
                  handle={formatAmountHuman(totalEpochFeesUsd, USD_DECIMALS, true, 2)}
                  handleClassName="numbers"
                  content={feesSubtotal}
                />
              </div>
            </div>
            <div className="App-card-row">
              <div className="label">
                <Trans>TVL</Trans>
              </div>
              <div>
                <span className="numbers">{formatAmountHuman(displayTvl, USD_DECIMALS, true, 2)}</span>
              </div>
            </div>
            <div className="App-card-row">
              <div className="label">
                <Trans>Pools</Trans>
              </div>
              <div>
                <span className="numbers">{formatAmountHuman(gmTvl, USD_DECIMALS, true, 2)}</span>
              </div>
            </div>
          </AppCardSection>
        }
        left={
          <AppCardSection className="pb-24">
            <div className="App-card-row">
              <div className="label">
                <Trans>24h Volume</Trans>
              </div>
              <div>
                <span className="numbers">{formatAmountHuman(totalDailyVolume, USD_DECIMALS, true, 2)}</span>
              </div>
            </div>
            <div className="App-card-row">
              <div className="label">
                <Trans>Open Interest</Trans>
              </div>
              <div>
                <span className="numbers">{formatAmountHuman(totalOpenInterest, USD_DECIMALS, true, 2)}</span>
              </div>
            </div>
            <div className="App-card-row">
              <div className="label">
                <Trans>Long Positions</Trans>
              </div>
              <div>
                <span className="numbers">{formatAmountHuman(totalLongPositionSizes, USD_DECIMALS, true, 2)}</span>
              </div>
            </div>
            <div className="App-card-row">
              <div className="label">
                <Trans>Short Positions</Trans>
              </div>
              <div>
                <span className="numbers">{formatAmountHuman(totalShortPositionSizes, USD_DECIMALS, true, 2)}</span>
              </div>
            </div>
          </AppCardSection>
        }
      ></AppCardSplit>
    </AppCard>
  );
}
