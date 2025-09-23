import cx from "classnames";
import { useCallback } from "react";
import type { Address } from "viem";
import { motion, AnimatePresence } from "framer-motion";

import { useSelector } from "context/SyntheticsStateContext/utils";
import { selectAvailableChartTokens } from "context/SyntheticsStateContext/selectors/chartSelectors";
import { selectChainId, selectTokensData } from "context/SyntheticsStateContext/selectors/globalSelectors";
import { selectTradeboxChooseSuitableMarket } from "context/SyntheticsStateContext/selectors/tradeboxSelectors";
import { useTokensFavorites } from "context/TokensFavoritesContext/TokensFavoritesContextProvider";
import { getMidPrice } from "domain/tokens";
import { formatUsdPrice } from "lib/numbers";
import { getTokenVisualMultiplier, isChartAvailableForToken } from "sdk/configs/tokens";
import { use24hPriceDeltaMap } from "domain/synthetics/tokens";


export function FavoriteTokensBar() {
  const chainId = useSelector(selectChainId);
  const availableTokens = useSelector(selectAvailableChartTokens);
  const tokensData = useSelector(selectTokensData);
  const chooseSuitableMarket = useSelector(selectTradeboxChooseSuitableMarket);
  const { favoriteTokens } = useTokensFavorites("chart-token-selector");

  const availableChartTokens = availableTokens?.filter((token) => 
    isChartAvailableForToken(chainId, token.symbol)
  );

  const favoriteChartTokens = availableChartTokens?.filter((token) =>
    favoriteTokens.includes(token.address)
  );

  const availableChartTokenAddresses = favoriteChartTokens?.map((token) => token.address as Address);
  const dayPriceDeltaMap = use24hPriceDeltaMap(chainId, availableChartTokenAddresses);

  const handleTokenClick = useCallback((tokenAddress: string) => {
    chooseSuitableMarket(tokenAddress, undefined, undefined);
  }, [chooseSuitableMarket]);

  if (!favoriteChartTokens?.length) {
    return null;
  }

  return (
    <div className="Favorite-tokens-bar bg-slate-800 border border-slate-700 w-full rounded-4 py-8 flex">
      <AnimatePresence mode="popLayout">
        {favoriteChartTokens.map((token) => {
          const tokenData = tokensData?.[token.address];
          const dayPriceDelta = dayPriceDeltaMap?.[token.address];
          const averagePrice = tokenData ? getMidPrice(tokenData.prices) : undefined;
          const formattedPrice = averagePrice
            ? formatUsdPrice(averagePrice, {
                visualMultiplier: tokenData?.visualMultiplier,
              })
            : undefined;

          return (
            <motion.button
              key={token.address}
              className="flex-shrink-0 px-16 py-8"
              onClick={() => handleTokenClick(token.address)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-body-small font-medium text-slate-100 whitespace-nowrap">
                {getTokenVisualMultiplier(token)}
                {token.symbol}-USD
                {formattedPrice && (
                  <span className="ml-8 text-slate-300">
                    {formattedPrice}
                  </span>
                )}
                {dayPriceDelta?.deltaPercentageStr && (
                  <span
                    className={cx("ml-8", {
                      "positive": dayPriceDelta.deltaPercentage > 0,
                      "negative": dayPriceDelta.deltaPercentage < 0,
                    })}
                  >
                    {dayPriceDelta.deltaPercentageStr}
                  </span>
                )}
              </div>
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}