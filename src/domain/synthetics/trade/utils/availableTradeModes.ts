import { TradeMode, TradeType } from "sdk/types/trade";

const AVAILABLE_TRADE_MODES = {
  [TradeType.Long]: [
    TradeMode.Market,
    TradeMode.Limit,
    [TradeMode.Trigger, TradeMode.StopMarket, TradeMode.Twap],
  ] as const,
  [TradeType.Short]: [
    TradeMode.Market,
    TradeMode.Limit,
    [TradeMode.Trigger, TradeMode.StopMarket, TradeMode.Twap],
  ] as const,
  [TradeType.Swap]: [TradeMode.Market, TradeMode.Limit, TradeMode.Twap] as const,
};

export function getAvailableTradeModes({
  tradeType,
}: {
  chainId: number;
  tradeType: TradeType;
  fromTokenAddress: string | undefined;
  toTokenAddress: string | undefined;
}) {
  if (!tradeType) {
    return [];
  }

  return AVAILABLE_TRADE_MODES[tradeType];
}
