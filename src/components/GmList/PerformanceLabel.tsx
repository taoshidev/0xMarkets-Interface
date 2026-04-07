import { Trans, t } from "@lingui/macro";
import { ComponentProps } from "react";

import TooltipWithPortal from "components/Tooltip/TooltipWithPortal";

export function PerformanceLabel({
  upperCase = false,
  short = true,
  variant = "underline",
}: {
  upperCase?: boolean;
  short?: boolean;
  variant?: ComponentProps<typeof TooltipWithPortal>["variant"];
}) {
  const label = short ? t`Ann. Performance` : t`Annualized Performance`;
  return (
    <TooltipWithPortal
      handle={upperCase ? label.toUpperCase() : label}
      className="normal-case"
      position="bottom-end"
      variant={variant}
      content={
        <Trans>
          Annualized return of the pool or vault over the selected period, compared to a benchmark that follows Uniswap
          V2–style rebalancing of the backing tokens in the same 0xM pool or GLV vault.
          <br />
          <br />
          Annualized figures based on short periods may be distorted by short-term volatility.
        </Trans>
      }
    />
  );
}
