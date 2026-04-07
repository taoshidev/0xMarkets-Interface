import { Trans, t } from "@lingui/macro";

import { SyntheticsStateContextProvider } from "context/SyntheticsStateContext/SyntheticsStateContextProvider";
import { useChainId } from "lib/chains";
import { getPageTitle } from "lib/legacy";

import AppPageLayout from "components/AppPageLayout/AppPageLayout";
import { ChainContentHeader } from "components/ChainContentHeader/ChainContentHeader";
import { MarketsList } from "components/MarketsList/MarketsList";
import PageTitle from "components/PageTitle/PageTitle";
import SEO from "components/Seo/SEO";

import { GmCard } from "./GmCard";
import { PlatformStats } from "./PlatformStats";

import "./DashboardV2.css";

export default function DashboardV2() {
  const { chainId: _chainId } = useChainId();

  return (
    <SEO title={getPageTitle(t`Stats`)}>
      <AppPageLayout header={<ChainContentHeader />}>
        <div className="default-container DashboardV2 page-layout flex flex-col gap-28">
          <PageTitle title={t`Stats`} qa="dashboard-page" />

          {/* 1. Platform overview */}
          <PlatformStats />

          {/* 2. Markets + Pools */}
          <section className="flex flex-col gap-16">
            <h2 className="text-h2 px-12 font-medium">
              <Trans>Markets</Trans>
            </h2>
            <div className="DashboardV2-token-cards">
              <div className="stats-wrapper stats-wrapper--gmx">
                <GmCard />
              </div>
            </div>
            <SyntheticsStateContextProvider skipLocalReferralCode={false} pageType="pools">
              <MarketsList />
            </SyntheticsStateContextProvider>
          </section>
        </div>
      </AppPageLayout>
    </SEO>
  );
}
