import { t } from "@lingui/macro";
import { ReactNode } from "react";

import DiscordIcon from "img/ic_discord.svg?react";
import XIcon from "img/ic_x.svg?react";

type Link = {
  label: ReactNode;
  link: string;
  external?: boolean;
  isAppLink?: boolean;
};

type SocialLink = {
  link: string;
  name: string;
  icon: React.ReactNode;
};

export function getFooterLinks(isHome) {
  const FOOTER_LINKS: { home: Link[]; app: Link[] } = {
    home: [
      { label: t`Terms and Conditions`, link: "/terms-and-conditions" },
      { label: t`Referral Terms`, link: "/referral-terms" },
    ],
    app: [
      { label: t`Faucet`, link: "https://faucet.0xMarkets.io", external: true },
      { label: t`Charts by TradingView`, link: "https://www.tradingview.com/", external: true },
      { label: t`Leave Feedback`, link: "https://discord.gg/XtKESzrBvs", external: true },
    ],
  };
  return FOOTER_LINKS[isHome ? "home" : "app"];
}

export const SOCIAL_LINKS: SocialLink[] = [
  { link: "https://x.com/0x_Markets", name: "Twitter", icon: <XIcon className="size-16" /> },

  { link: "https://discord.gg/XtKESzrBvs", name: "Discord", icon: <DiscordIcon className="size-16" /> },
];
