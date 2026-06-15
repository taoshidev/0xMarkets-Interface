import { ethers } from "ethers";
import sample from "lodash/sample";

import {
  AnyChainId,
  ContractsChainId,
  CONTRACTS_CHAIN_IDS as SDK_CONTRACTS_CHAIN_IDS,
  CONTRACTS_CHAIN_IDS_DEV as SDK_CONTRACTS_CHAIN_IDS_DEV,
  SOURCE_BASE_MAINNET,
  BASE_SEPOLIA,
  LOCALHOST,
} from "sdk/configs/chains";

import { isDevelopment } from "./env";

export { CHAIN_NAMES_MAP, getChainName } from "sdk/configs/chains";
export * from "./static/chains";

export const CONTRACTS_CHAIN_IDS = isDevelopment() ? SDK_CONTRACTS_CHAIN_IDS_DEV : SDK_CONTRACTS_CHAIN_IDS;

const { parseEther } = ethers;

// TODO take it from web3
export const DEFAULT_CHAIN_ID = BASE_SEPOLIA;
export const CHAIN_ID = DEFAULT_CHAIN_ID;

export const IS_NETWORK_DISABLED: Record<ContractsChainId, boolean> = {
  [BASE_SEPOLIA]: false,
  [LOCALHOST]: false,
};

export const NETWORK_EXECUTION_TO_CREATE_FEE_FACTOR = {} as const;

const constants = {
  [BASE_SEPOLIA]: {
    nativeTokenSymbol: "ETH",
    wrappedTokenSymbol: "WETH",
    defaultCollateralSymbol: "USD0",
    defaultFlagOrdersEnabled: true,
    positionReaderPropsLength: 9,
    v2: true,

    SWAP_ORDER_EXECUTION_GAS_FEE: parseEther("0.0003"),
    INCREASE_ORDER_EXECUTION_GAS_FEE: parseEther("0.0003"),
    // contract requires that execution fee be strictly greater than instead of gte
    DECREASE_ORDER_EXECUTION_GAS_FEE: parseEther("0.000300001"),
  },
  [LOCALHOST]: {
    nativeTokenSymbol: "ETH",
    wrappedTokenSymbol: "WETH",
    defaultCollateralSymbol: "USD0",
    defaultFlagOrdersEnabled: true,
    positionReaderPropsLength: 9,
    v2: true,

    SWAP_ORDER_EXECUTION_GAS_FEE: parseEther("0.0003"),
    INCREASE_ORDER_EXECUTION_GAS_FEE: parseEther("0.0003"),
    DECREASE_ORDER_EXECUTION_GAS_FEE: parseEther("0.000300001"),
  },
} satisfies Record<ContractsChainId, Record<string, any>>;

const ALCHEMY_WHITELISTED_DOMAINS = ["0xmarkets.io", "app.0xmarkets.io"];

export const RPC_PROVIDERS: Record<AnyChainId, string[]> = {
  [SOURCE_BASE_MAINNET]: [
    "https://mainnet.base.org",
    "https://base.llamarpc.com",
    "https://base-rpc.publicnode.com",
    "https://base.drpc.org",
  ],
  [BASE_SEPOLIA]: [
    "https://sepolia.base.org",
    "https://base-sepolia.drpc.org",
    "https://base-sepolia.therpc.io",
    "https://base-sepolia.rpc.ankr.com",
    "https://base-sepolia.core.chainstack.com/eb2a709e3101b602a19c3bebf81d1124",
  ],
  [LOCALHOST]: [
    "http://127.0.0.1:8545",
  ],
};

export const FALLBACK_PROVIDERS: Record<AnyChainId, string[]> = {
  [SOURCE_BASE_MAINNET]: [getAlchemyBaseMainnetHttpUrl("fallback")],
  [BASE_SEPOLIA]: [
    "https://base-sepolia.drpc.org",
    "https://base-sepolia.therpc.io",
    "https://base-sepolia.rpc.ankr.com",
  ],
  [LOCALHOST]: [
    "http://127.0.0.1:8545",
  ],
};

export const PRIVATE_RPC_PROVIDERS: Partial<Record<AnyChainId, string[]>> = {
  [SOURCE_BASE_MAINNET]: [getAlchemyBaseMainnetHttpUrl("largeAccount")],
};

export const EXPRESS_RPC_PROVIDERS: Partial<Record<AnyChainId, string[]>> = {
  [SOURCE_BASE_MAINNET]: [getAlchemyBaseMainnetHttpUrl("express")],
};

type ConstantName = keyof (typeof constants)[ContractsChainId];

export const getConstant = <T extends ContractsChainId, K extends ConstantName>(
  chainId: T,
  key: K
): (typeof constants)[T][K] => {
  if (!constants[chainId]) {
    throw new Error(`Unsupported chainId ${chainId}`);
  }

  if (!(key in constants[chainId])) {
    throw new Error(`Key ${key} does not exist for chainId ${chainId}`);
  }

  return constants[chainId][key];
};

export function getFallbackRpcUrl(chainId: number, isLargeAccount: boolean): string {
  const providers = isLargeAccount ? PRIVATE_RPC_PROVIDERS[chainId] : FALLBACK_PROVIDERS[chainId];
  // Always prefer the first entry as the stable fallback rather than random selection.
  // For BASE_SEPOLIA this ensures sepolia.base.org is used before Chainstack when quota is exhausted.
  return providers?.[0] ?? sample(providers);
}

export function getExpressRpcUrl(chainId: number): string {
  return sample(EXPRESS_RPC_PROVIDERS[chainId]);
}

type AlchemyKeyPurpose = "fallback" | "largeAccount" | "express";

function getAlchemyKey(purpose: AlchemyKeyPurpose) {
  if (ALCHEMY_WHITELISTED_DOMAINS.includes(self.location.host)) {
    if (purpose === "fallback") {
      return "NnWkTZJp8dNKXlCIfJwej";
    } else if (purpose === "largeAccount") {
      return "UnfP5Io4K9X8UZnUnFy2a";
    } else if (purpose === "express") {
      return "vZoYuLP1GVpvE0wpgPKwC";
    }
  }

  return "jXT7KIV6ttYFNoSprdkqG";
}

export function getAlchemyBaseMainnetHttpUrl(purpose: AlchemyKeyPurpose) {
  return `https://base-mainnet.g.alchemy.com/v2/${getAlchemyKey(purpose)}`;
}

export function getAlchemyBaseMainnetWsUrl(purpose: AlchemyKeyPurpose) {
  return `wss://base-mainnet.g.alchemy.com/v2/${getAlchemyKey(purpose)}`;
}

export function getAlchemyBaseSepoliaHttpUrl(purpose: AlchemyKeyPurpose) {
  return `https://base-sepolia.g.alchemy.com/v2/${getAlchemyKey(purpose)}`;
}

export function getAlchemyBaseSepoliaWsUrl(purpose: AlchemyKeyPurpose) {
  return `wss://base-sepolia.g.alchemy.com/v2/${getAlchemyKey(purpose)}`;
}

export function getExplorerUrl(chainId: number | "layerzero" | "layerzero-testnet"): string {
  switch (chainId as AnyChainId | "layerzero" | "layerzero-testnet") {
    case SOURCE_BASE_MAINNET:
      return "https://basescan.org/";
    case BASE_SEPOLIA:
      return "https://sepolia.basescan.org/";
    case "layerzero":
      return "https://layerzeroscan.com/";
    case "layerzero-testnet":
      return "https://testnet.layerzeroscan.com/";
    default:
      return "https://basescan.org/";
  }
}

export function getTokenExplorerUrl(chainId: number, tokenAddress: string) {
  return `${getExplorerUrl(chainId)}token/${tokenAddress}`;
}
