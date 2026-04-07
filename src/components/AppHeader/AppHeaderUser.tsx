import { Trans } from "@lingui/macro";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import { useChainId } from "lib/chains";
import { sendUserAnalyticsConnectWalletClickEvent } from "lib/userAnalytics";
import useWallet from "lib/wallets/useWallet";

import Button from "components/Button/Button";
import { NETWORK_OPTIONS } from "components/Header/AppHeaderChainAndSettings";
import { OneClickButton } from "components/OneClickButton/OneClickButton";

import { AddressDropdown } from "../AddressDropdown/AddressDropdown";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";
import NetworkDropdown from "../NetworkDropdown/NetworkDropdown";

const FAUCET_URL = "https://faucet.0xMarkets.io";

type Props = {
  openSettings: () => void;
  menuToggle?: React.ReactNode;
};

export function AppHeaderUser({ openSettings, menuToggle }: Props) {
  const { chainId: settlementChainId, srcChainId } = useChainId();
  const { active, account } = useWallet();
  const { openConnectModal } = useConnectModal();

  const visualChainId = srcChainId ?? settlementChainId;

  if (!active || !account) {
    return (
      <div className="flex items-center gap-8 py-16">
        {openConnectModal ? (
          <>
            <Button variant="ghost" to={FAUCET_URL} newTab>
              <Trans>Faucet</Trans>
            </Button>
            <ConnectWalletButton
              onClick={() => {
                sendUserAnalyticsConnectWalletClickEvent("Header");
                openConnectModal();
              }}
            >
              <Trans>Connect Wallet</Trans>
            </ConnectWalletButton>
            <OneClickButton openSettings={openSettings} />
            <NetworkDropdown chainId={visualChainId} networkOptions={NETWORK_OPTIONS} openSettings={openSettings} />
            {menuToggle ? menuToggle : null}
          </>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-8 py-16">
      <Button variant="ghost" to={FAUCET_URL} newTab>
        <Trans>Faucet</Trans>
      </Button>
      <div data-qa="user-address">
        <AddressDropdown account={account} />
      </div>
      <OneClickButton openSettings={openSettings} />
      <NetworkDropdown chainId={visualChainId} networkOptions={NETWORK_OPTIONS} openSettings={openSettings} />
      {menuToggle ? menuToggle : null}
    </div>
  );
}
