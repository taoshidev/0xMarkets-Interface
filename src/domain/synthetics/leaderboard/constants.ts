import { BASE_SEPOLIA } from "config/chains";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expandDecimals } from "lib/numbers";

import { LeaderboardPageConfig, LeaderboardPageKey } from "./types";

export const MIN_COLLATERAL_USD_IN_LEADERBOARD = 0n;

export const LEADERBOARD_PAGES_ORDER = ["leaderboard", "testnet"] as const;

export const LEADERBOARD_PAGES: Record<LeaderboardPageKey, LeaderboardPageConfig> = {
  leaderboard: {
    key: "leaderboard",
    href: "/leaderboard",
    isCompetition: false,
    timeframe: {
      from: 0,
      to: 0,
    },
  },
  testnet: {
    key: "testnet",
    href: "/leaderboard/testnet",
    isCompetition: true,
    isTestnet: true,
    chainId: BASE_SEPOLIA,
    enabled: true,
    timeframe: {
      from: 1774288800, // March 23, 2026 18:00 UTC
      to: 1776816000, // April 22, 2026 00:00 UTC
    },
    title: "0xMarkets Testnet Trading Competition",
    description:
      "Compete on Base Sepolia testnet for a share of the 22,000 Subnet 35 alpha pool on Bittensor. Trade with testnet tokens — no real funds required.",
    prizePool: "22,000 Alpha",
    network: "Base Sepolia",
    faucetUrl: "https://faucet.0xMarkets.io",
  },
};
