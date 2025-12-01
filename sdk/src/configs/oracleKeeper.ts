import { ARBITRUM, ARBITRUM_SEPOLIA, AVALANCHE, AVALANCHE_FUJI, BOTANIX, LOCALHOST, ContractsChainId } from "./chains";

const ORACLE_KEEPER_URLS: Record<ContractsChainId, string> = {
  [ARBITRUM]: "https://arbitrum-api.gmxinfra.io",

  [AVALANCHE]: "https://avalanche-api.gmxinfra.io",

  [AVALANCHE_FUJI]: "https://synthetics-api-avax-fuji-upovm.ondigitalocean.app",

  [BOTANIX]: "https://botanix-api.gmxinfra.io",

  [ARBITRUM_SEPOLIA]: "https://dolphin-app-a2dup.ondigitalocean.app",

  // For localhost, you may need to run your own oracle keeper or use mock prices
  [LOCALHOST]: "http://127.0.0.1:3000",
};

const ORACLE_KEEPER_FALLBACK_URLS: Record<ContractsChainId, string[]> = {
  [ARBITRUM]: ["https://arbitrum-api-fallback.gmxinfra.io", "https://arbitrum-api-fallback.gmxinfra2.io"],

  [AVALANCHE]: ["https://avalanche-api-fallback.gmxinfra.io", "https://avalanche-api-fallback.gmxinfra2.io"],

  [AVALANCHE_FUJI]: ["https://synthetics-api-avax-fuji-upovm.ondigitalocean.app"],

  [BOTANIX]: ["https://botanix-api-fallback.gmxinfra.io", "https://botanix-api-fallback.gmxinfra2.io"],

  [ARBITRUM_SEPOLIA]: ["https://dolphin-app-a2dup.ondigitalocean.app"],

  [LOCALHOST]: ["http://127.0.0.1:3000"],
};

export function getOracleKeeperUrl(chainId: number) {
  if (!ORACLE_KEEPER_URLS[chainId]) {
    throw new Error(`No oracle keeper url for chain ${chainId}`);
  }

  return ORACLE_KEEPER_URLS[chainId];
}

export function getOracleKeeperFallbackUrls(chainId: number) {
  if (!ORACLE_KEEPER_FALLBACK_URLS[chainId]) {
    throw new Error(`No oracle keeper fallback urls for chain ${chainId}`);
  }

  return ORACLE_KEEPER_FALLBACK_URLS[chainId];
}
