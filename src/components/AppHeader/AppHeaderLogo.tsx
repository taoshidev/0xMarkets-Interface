import ButtonLink from "components/Button/ButtonLink";

import LogoText from "img/logo-text.svg?react";
import logoIcon from "img/logo_0xMarkets.svg";

export function AppHeaderLogo() {
  return (
    <ButtonLink to="/" className="flex items-center gap-8 px-6 py-4 text-typography-primary lg:hidden">
      <img src={logoIcon} alt="0xMarkets Logo" className="block" />
      <LogoText className="hidden md:block" />
    </ButtonLink>
  );
}
