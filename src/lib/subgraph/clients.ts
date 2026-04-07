import { ApolloClient } from "@apollo/client";

import { BASE_SEPOLIA } from "config/chains";

import { createClient } from "./utils";

type GraphClient = ApolloClient<any>;

export const baseSepoliaSubsquidClient = createClient(BASE_SEPOLIA, "subsquid");

export const chainlinkClient: GraphClient | null = null;

export const REFERRAL_SUPPORTED_CHAIN_IDS: number[] = [];

export function getSubsquidGraphClient(chainId: number): GraphClient | null {
  if (chainId === BASE_SEPOLIA) {
    return baseSepoliaSubsquidClient;
  }

  return null;
}

export function getGmxGraphClient(_chainId: number): GraphClient | null {
  return null;
}

export function getReferralsGraphClient(_chainId: number): GraphClient | null {
  return null;
}
