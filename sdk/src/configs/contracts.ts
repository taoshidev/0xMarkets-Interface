import { type Address, zeroAddress } from "viem";

import { ContractsChainId, BASE_SEPOLIA, LOCALHOST } from "./chains";

export const CONTRACTS = {
  [BASE_SEPOLIA]: {
    // Layer 1 + pinned singletons live on House A (0x0cA7D71… DataStore);
    // Layer 2/3 below were redeployed against it in May 2026 to ship the
    // leverage ladder without touching MarketToken addresses.
    DataStore: "0x0cA7D71845cb485B7593bBdCbcac93d82d52d053",
    EventEmitter: "0x68001935Ec7C2e3980f99435db3CabC89dea602B",
    SubaccountRouter: "0x99Aa90A736cF592fe0D6DD4c948CeE951e259d04",
    ExchangeRouter: "0xF940b74a65be4cd6E9D8a874a072759a19CC15aA",
    DepositVault: "0x590d1d8e50A3a3d9F3448657D1Cb64D486978781",
    WithdrawalVault: "0xE47130E74CAEd3Cae1Bf2c7e1e0af0B592354b57",
    OrderVault: "0x76DE02F06979a24A87F2cD743Ab533a44EdcFb08",
    ShiftVault: "0xEF60117684991C41dea18de53446c437462d07cc",

    SyntheticsReader: "0xA47f995B1eb4BB0B431bE7D257e0637a52bDF83E",
    SyntheticsRouter: "0xE92B08345125dc77eB071d1a2D513751C4D22714",

    GlvReader: "0x037Fc657a470d29AA9eb11b1D8c6d72820c0e520",
    GlvRouter: "0x916966Bd4611422Cfa68D284C78B0B434650cde0",
    GlvVault: "0x5fEb1eF511E953dec5E016bFF32F8987cE6eD33a",

    GelatoRelayRouter: "0x11775fc8521bA024921e3E10fAE34350fFC8b37a",
    SubaccountGelatoRelayRouter: "0x86E59890F68B3d38b0bF3FC11891E966b97414Cb",

    MultichainClaimsRouter: zeroAddress,
    MultichainGlvRouter: zeroAddress,
    MultichainGmRouter: zeroAddress,
    MultichainOrderRouter: zeroAddress,
    MultichainSubaccountRouter: zeroAddress,
    MultichainTransferRouter: zeroAddress,
    MultichainVault: zeroAddress,
    LayerZeroProvider: zeroAddress,

    ChainlinkPriceFeedProvider: "0xe0A7f2a21373128DB38b55a6FEb081C6BCDCC22E",
    ClaimHandler: zeroAddress,

    // External
    ExternalHandler: "0xfcD54e4D5ECA91abbB18CA9429369617730F4395",
    OpenOceanRouter: zeroAddress,
    Multicall: "0xdD6E2999d0a882886A50c031c7a117058B4aCB5f",
    LayerZeroEndpoint: zeroAddress,
    ArbitrumNodeInterface: zeroAddress,
    GelatoRelayAddress: zeroAddress,

    // V1 legacy (not deployed on Base Sepolia)
    Vault: zeroAddress,
    Reader: "0xA47f995B1eb4BB0B431bE7D257e0637a52bDF83E",
    PositionRouter: zeroAddress,
    ReferralStorage: "0x29D5533a26ac87C28972d277CEFf2EC00843c5A7",
    VaultReader: zeroAddress,
    GlpManager: zeroAddress,
    RewardRouter: zeroAddress,
    RewardReader: zeroAddress,
    GlpRewardRouter: zeroAddress,
    StakedGmxTracker: zeroAddress,
    FeeGmxTracker: zeroAddress,
    GLP: zeroAddress,
    GMX: zeroAddress,
    ES_GMX: zeroAddress,
    BN_GMX: zeroAddress,
    USDG: zeroAddress,
    BonusGmxTracker: zeroAddress,
    StakedGlpTracker: zeroAddress,
    FeeGlpTracker: zeroAddress,
    ExtendedGmxTracker: zeroAddress,
    StakedGmxDistributor: zeroAddress,
    StakedGlpDistributor: zeroAddress,
    GmxVester: zeroAddress,
    GlpVester: zeroAddress,
    AffiliateVester: zeroAddress,
    Router: "0xE92B08345125dc77eB071d1a2D513751C4D22714",
    GovToken: "0xA24dff4D381f97e9cb4DA7fb7b50505390cda522",
    ES_GMX_IOU: zeroAddress,
    OrderBook: zeroAddress,
    UniswapGmxEthPool: zeroAddress,
    Timelock: "0xF5ECA46bD52E43E8ef34938EC036bF1A6dA723a2",

    // BASE_SEPOLIA specific tokens
    NATIVE_TOKEN: "0x4200000000000000000000000000000000000006",
  },
  [LOCALHOST]: {
    DataStore: zeroAddress,
    EventEmitter: zeroAddress,
    SubaccountRouter: zeroAddress,
    ExchangeRouter: zeroAddress,
    DepositVault: zeroAddress,
    WithdrawalVault: zeroAddress,
    OrderVault: zeroAddress,
    ShiftVault: zeroAddress,
    SyntheticsReader: zeroAddress,
    SyntheticsRouter: zeroAddress,
    GlvReader: zeroAddress,
    GlvRouter: zeroAddress,
    GlvVault: zeroAddress,
    GelatoRelayRouter: zeroAddress,
    SubaccountGelatoRelayRouter: zeroAddress,
    MultichainClaimsRouter: zeroAddress,
    MultichainGlvRouter: zeroAddress,
    MultichainGmRouter: zeroAddress,
    MultichainOrderRouter: zeroAddress,
    MultichainSubaccountRouter: zeroAddress,
    MultichainTransferRouter: zeroAddress,
    MultichainVault: zeroAddress,
    LayerZeroProvider: zeroAddress,
    ChainlinkPriceFeedProvider: zeroAddress,
    ClaimHandler: zeroAddress,
    ExternalHandler: zeroAddress,
    OpenOceanRouter: zeroAddress,
    Multicall: zeroAddress,
    LayerZeroEndpoint: zeroAddress,
    ArbitrumNodeInterface: zeroAddress,
    GelatoRelayAddress: zeroAddress,
    Vault: zeroAddress,
    Reader: zeroAddress,
    PositionRouter: zeroAddress,
    ReferralStorage: zeroAddress,
    VaultReader: zeroAddress,
    GlpManager: zeroAddress,
    RewardRouter: zeroAddress,
    RewardReader: zeroAddress,
    GlpRewardRouter: zeroAddress,
    StakedGmxTracker: zeroAddress,
    FeeGmxTracker: zeroAddress,
    GLP: zeroAddress,
    GMX: zeroAddress,
    ES_GMX: zeroAddress,
    BN_GMX: zeroAddress,
    USDG: zeroAddress,
    BonusGmxTracker: zeroAddress,
    StakedGlpTracker: zeroAddress,
    FeeGlpTracker: zeroAddress,
    ExtendedGmxTracker: zeroAddress,
    StakedGmxDistributor: zeroAddress,
    StakedGlpDistributor: zeroAddress,
    GmxVester: zeroAddress,
    GlpVester: zeroAddress,
    AffiliateVester: zeroAddress,
    Router: zeroAddress,
    GovToken: zeroAddress,
    ES_GMX_IOU: zeroAddress,
    OrderBook: zeroAddress,
    UniswapGmxEthPool: zeroAddress,
    Timelock: zeroAddress,
    NATIVE_TOKEN: "0x4200000000000000000000000000000000000006",
  },
};

type ExtractContractNames<T extends object> = {
  [K in keyof T]: keyof T[K];
}[keyof T];

export type ContractName = ExtractContractNames<typeof CONTRACTS>;

export function getContract(chainId: ContractsChainId, name: ContractName): Address {
  if (!CONTRACTS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }

  if (!CONTRACTS[chainId][name]) {
    throw new Error(`Unknown contract "${name}" for chainId ${chainId}`);
  }

  return CONTRACTS[chainId][name] as Address;
}
