import { useCallback, useRef } from "react";

import { BN_ZERO } from "lib/numbers";

export * from "./prices";

export function useUserStat(_chainId) {
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export function useGmxPrice(_chainId, _libraries, _active) {
  const gmxPrice = undefined;
  const mutate = useCallback(noop, []);

  return {
    gmxPrice,
    gmxPriceFromArbitrum: undefined,
    gmxPriceFromAvalanche: undefined,
    mutate,
  };
}

export function useTotalGmxSupply() {
  return {
    total: undefined,
    mutate: noop,
  };
}

export function useTotalGmxStaked() {
  let totalStakedGmx = useRef(BN_ZERO);
  const mutate = useCallback(noop, []);

  return {
    total: totalStakedGmx.current,
    mutate,
  };
}

export function useTotalGmxInLiquidity() {
  let totalGMX = useRef(BN_ZERO);
  const mutate = useCallback(noop, []);

  return {
    total: totalGMX.current,
    mutate,
  };
}
