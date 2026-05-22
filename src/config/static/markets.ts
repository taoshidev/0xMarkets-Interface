/*
  This files is used to pre-build data during the build process.
  Avoid adding client-side code here, as it can break the build process.

  However, this files can be a dependency for the client code.
*/
import { MARKETS as SDK_MARKETS } from "sdk/configs/markets";

import { ContractsChainId, BASE_SEPOLIA, LOCALHOST } from "./chains";

type MarketUiConfig = {
  enabled: boolean;
  comingSoon?: boolean;
};

/*
  ATTENTION
  When adding new markets, please add them also to the end of the list in ./sortedMarkets.ts
*/
const MARKETS_UI_CONFIGS: Record<ContractsChainId, Record<string, MarketUiConfig>> = {
  [BASE_SEPOLIA]: {
    // EUR/USD [USD0-USD0]
    "0x7054eb596aCF4fC1C0686C9B2cdAC4aE6c6D0F33": {
      enabled: true,
    },
    // GBP/USD [USD0-USD0]
    "0xa09b59adf15B4ED98a099441b84Ff1eABf71B548": {
      enabled: true,
    },
    // GOLD/USD [USD0-USD0]
    "0x89c3B33bEE4b9cD1B246BE44aDcEd870F74637a3": {
      enabled: true,
    },
    // XAG/USD [USD0-USD0]
    "0x6D260c4229dBb55a0a91041b5c07b320fdD6303B": {
      enabled: true,
    },
    // USD/JPY [USD0-USD0]
    "0xD847a999faCe1f862120117C33ae8faBA768fD4b": {
      enabled: true,
    },
    // WTI/USD [USD0-USD0]
    "0x80d260188c592F7F175F843EDc257b6A6Af6e5eF": {
      enabled: true,
      comingSoon: true,
    },
    // WBTC/USD [USD0-USD0]
    "0x63D05Da932541380df8d9eE20D8FdB4B02849398": {
      enabled: true,
    },
    // WETH/USD [USD0-USD0]
    "0x23F40e3279685413b252A6944AF9a0641D3aa6ce": {
      enabled: true,
    },
    // TAO/USD [USD0-USD0]
    "0x24061f45f954D880dCa0Ce122FFA60Cfd5447B5A": {
      enabled: true,
    },
  },
  [LOCALHOST]: {},
};

export const MARKETS = Object.keys(MARKETS_UI_CONFIGS).reduce(
  (acc, network) => {
    return {
      ...acc,
      [network]: Object.keys(MARKETS_UI_CONFIGS[network]).reduce((acc, address) => {
        return {
          ...acc,
          [address]: {
            ...SDK_MARKETS[network][address],
            ...MARKETS_UI_CONFIGS[network][address],
          },
        };
      }, {}),
    };
  },
  {} as Record<
    number,
    Record<
      string,
      MarketUiConfig & {
        longTokenAddress: string;
        shortTokenAddress: string;
        indexTokenAddress: string;
        marketTokenAddress: string;
        reversed?: boolean;
      }
    >
  >
);
