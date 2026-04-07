import { deserializeBigIntsInObject, serializeBigIntsInObject } from "lib/numbers";

import { isDevelopment } from "./env";
import { DEBUG_SWAP_SETTINGS_KEY } from "./localStorage";

// Enable external swap if price impact delta is less than this threshold
export const SWAP_PRICE_IMPACT_FOR_EXTERNAL_SWAP_THRESHOLD_BPS = -15n;

export const HIGH_EXTERNAL_SWAP_FEES_BPS = 200; // 2%

let isSwapDebugSettingsInited = false;

let swapDebugSettings = {
  swapPriceImpactForExternalSwapThresholdBps: SWAP_PRICE_IMPACT_FOR_EXTERNAL_SWAP_THRESHOLD_BPS,
  forceExternalSwaps: false,
  failExternalSwaps: false,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OPEN_OCEAN_BASE_URL = "https://open-api.openocean.finance/v3";
export const OPEN_OCEAN_REFERRER = "0xC539cB358a58aC67185BaAD4d5E3f7fCfc903700";

const OPEN_OCEAN_API_URL: Record<number, string> = {};

export const DISABLED_OPEN_OCEAN_DEXES: Record<number, number[]> = {};

export function getOpenOceanUrl(chainId: number) {
  const url = OPEN_OCEAN_API_URL[chainId];

  if (!url) {
    throw new Error("Unsupported open ocean network");
  }

  return url;
}

export function setSwapDebugSetting<K extends keyof typeof swapDebugSettings>(
  key: K,
  value: (typeof swapDebugSettings)[K]
) {
  if (!isDevelopment()) {
    return;
  }

  swapDebugSettings[key] = value;
  localStorage.setItem(DEBUG_SWAP_SETTINGS_KEY, JSON.stringify(swapDebugSettings));
}

export function getSwapPriceImpactForExternalSwapThresholdBps() {
  const swapDebugSettings = getSwapDebugSettings();

  return (
    swapDebugSettings?.swapPriceImpactForExternalSwapThresholdBps || SWAP_PRICE_IMPACT_FOR_EXTERNAL_SWAP_THRESHOLD_BPS
  );
}

export function getSwapDebugSettings() {
  if (!isDevelopment()) {
    return undefined;
  }

  if (!isSwapDebugSettingsInited) {
    const stored = localStorage.getItem(DEBUG_SWAP_SETTINGS_KEY);

    // use stored or store defaults
    if (stored) {
      swapDebugSettings = deserializeBigIntsInObject(JSON.parse(stored)) as typeof swapDebugSettings;
    } else {
      localStorage.setItem(DEBUG_SWAP_SETTINGS_KEY, JSON.stringify(serializeBigIntsInObject(swapDebugSettings)));
    }

    isSwapDebugSettingsInited = true;
  }

  return swapDebugSettings;
}
