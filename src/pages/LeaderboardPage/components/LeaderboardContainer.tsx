import { Trans, t } from "@lingui/macro";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  useLeaderboardDataTypeState,
  useLeaderboardIsCompetition,
  useLeaderboardIsTestnet,
  useLeaderboardPageKey,
  useLeaderboardPositions,
  useLeaderboardRankedAccounts,
  useLeaderboardTimeframeTypeState,
  useLeaderboardTiming,
} from "context/SyntheticsStateContext/hooks/leaderboardHooks";
import {
  selectLeaderboardIsLoading,
  selectLeaderboardSearchAddress,
  selectLeaderboardSetSearchAddress,
} from "context/SyntheticsStateContext/selectors/leaderboardSelectors";
import { useSelector } from "context/SyntheticsStateContext/utils";
import { CompetitionType } from "domain/synthetics/leaderboard";
import { mustNeverExist } from "lib/types";
import { useBreakpoints } from "lib/useBreakpoints";

import SearchInput from "components/SearchInput/SearchInput";
import { BodyScrollFadeContainer } from "components/TableScrollFade/TableScrollFade";
import Tabs from "components/Tabs/Tabs";

import { CompetitionPrizes } from "./CompetitionPrizes";
import { LeaderboardAccountsTable } from "./LeaderboardAccountsTable";
import { LeaderboardNavigation } from "./LeaderboardNavigation";
import { LeaderboardPositionsTable } from "./LeaderboardPositionsTable";
import { TestnetBanner } from "./TestnetBanner";

const competitionsTabs = [0, 1];
const leaderboardTimeframeTabs = [2, 1, 0];
const leaderboardDataTypeTabs = [0, 1];

export function LeaderboardContainer() {
  const isCompetition = useLeaderboardIsCompetition();
  const isTestnet = useLeaderboardIsTestnet();

  const [activeLeaderboardTimeframeIndex, setActiveLeaderboardTimeframeIndex] = useState(0);
  const [activeLeaderboardDataTypeIndex, setActiveLeaderboardDataTypeIndex] = useState(0);
  const [activeCompetitionIndex, setActiveCompetitionIndex] = useState(0);

  const leaderboardPageKey = useLeaderboardPageKey();

  const [, setLeaderboardTimeframeType] = useLeaderboardTimeframeTypeState();
  const [, setLeaderboardDataType] = useLeaderboardDataTypeState();

  const competitionLabels = useMemo(() => [t`Top PnL ($)`, t`Top PnL (%)`], []);
  const leaderboardTimeframeLabels = useMemo(() => [t`Total`, t`Last 30d`, t`Last 7d`], []);
  const leaderboardDataTypeLabels = useMemo(() => [t`Top Addresses`, t`Top Positions`], []);

  const activeCompetition: CompetitionType | undefined = isCompetition
    ? activeCompetitionIndex === 0
      ? "notionalPnl"
      : "pnlPercentage"
    : undefined;

  const handleLeaderboardTimeframeTabChange = useCallback(
    (index: number) => setActiveLeaderboardTimeframeIndex(index),
    [setActiveLeaderboardTimeframeIndex]
  );
  const handleCompetitionTabChange = useCallback(
    (index: number) => setActiveCompetitionIndex(index),
    [setActiveCompetitionIndex]
  );

  const handleLeaderboardDataTypeTabChange = useCallback(
    (index: number) => setActiveLeaderboardDataTypeIndex(index),
    []
  );

  const pageKey = useLeaderboardPageKey();

  useEffect(() => {
    setActiveLeaderboardTimeframeIndex(0);
    setActiveCompetitionIndex(0);
  }, [pageKey]);

  useEffect(() => {
    if (activeLeaderboardTimeframeIndex === 0) {
      setLeaderboardTimeframeType("all");
    } else if (activeLeaderboardTimeframeIndex === 1) {
      setLeaderboardTimeframeType("30days");
    } else {
      setLeaderboardTimeframeType("7days");
    }
  }, [activeLeaderboardTimeframeIndex, setLeaderboardTimeframeType]);

  useEffect(() => {
    if (activeLeaderboardDataTypeIndex === 0) {
      setLeaderboardDataType("accounts");
    } else {
      setLeaderboardDataType("positions");
    }
  }, [activeLeaderboardDataTypeIndex, setLeaderboardDataType]);

  const searchAddress = useSelector(selectLeaderboardSearchAddress);
  const setSearchAddress = useSelector(selectLeaderboardSetSearchAddress);

  const description = useMemo(() => {
    switch (leaderboardPageKey) {
      case "leaderboard":
        return t`Leaderboard for traders on 0xMarkets.`;
      case "testnet":
        return t`Testnet trading competition on 0xMarkets.`;
      default:
        throw mustNeverExist(leaderboardPageKey);
    }
  }, [leaderboardPageKey]);

  const leaderboardDataTypeTabsOptions = useMemo(() => {
    return leaderboardDataTypeTabs.map((value) => ({
      value,
      label: leaderboardDataTypeLabels[value],
      className: {
        active: "!text-white !bg-blue-400",
        regular: "hover:!text-typography-primary !bg-button-secondary",
      },
    }));
  }, [leaderboardDataTypeLabels]);

  const leaderboardTimeframeTabsOptions = useMemo(() => {
    return leaderboardTimeframeTabs.map((value) => ({
      value,
      label: leaderboardTimeframeLabels[value],
    }));
  }, [leaderboardTimeframeLabels]);

  const competitionsTabsOptions = useMemo(() => {
    return competitionsTabs.map((value) => ({
      value,
      label: competitionLabels[value],
      className: {
        active: "!text-white !bg-blue-400",
        regular: "hover:!text-typography-primary !bg-button-secondary",
      },
    }));
  }, [competitionLabels]);

  const { isMobile } = useBreakpoints();

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-12">
        <BodyScrollFadeContainer>
          <div>
            <LeaderboardNavigation />
          </div>
        </BodyScrollFadeContainer>
        <div className="text-body-medium font-medium text-typography-secondary">{description}</div>
      </div>

      {isTestnet && <TestnetBanner />}

      <div className="overflow-hidden rounded-20 bg-slate-800">
        <div className="flex items-center justify-between gap-16 border-b border-slate-600/20 bg-slate-900/60 p-20 max-md:flex-col">
          {!isCompetition || isTestnet ? (
            <Tabs
              type="inline"
              selectedValue={activeLeaderboardDataTypeIndex}
              onChange={handleLeaderboardDataTypeTabChange}
              options={leaderboardDataTypeTabsOptions}
              className="max-md:w-full"
              regularOptionClassname="grow"
            />
          ) : (
            <Tabs
              type="inline"
              selectedValue={activeCompetitionIndex}
              onChange={handleCompetitionTabChange}
              options={competitionsTabsOptions}
              className="max-md:w-full"
              regularOptionClassname="grow"
            />
          )}

          <div className="flex gap-8 max-md:w-full max-md:justify-between">
            <SearchInput
              placeholder={isMobile ? t`Search` : t`Search Address`}
              className="w-full max-w-[260px] max-md:min-w-[120px]"
              value={searchAddress}
              setValue={setSearchAddress}
              size="s"
            />
            {!isCompetition && (
              <Tabs
                selectedValue={activeLeaderboardTimeframeIndex}
                onChange={handleLeaderboardTimeframeTabChange}
                type="inline"
                className="shrink-0"
                options={leaderboardTimeframeTabsOptions}
              />
            )}
          </div>
        </div>

        {isCompetition && !isTestnet && activeCompetition && (
          <BodyScrollFadeContainer className="border-b-1/2 border-slate-600">
            <div className="min-w-[1000px]">
              <CompetitionPrizes leaderboardPageKey={leaderboardPageKey} competitionType={activeCompetition} />
            </div>
          </BodyScrollFadeContainer>
        )}

        <Table activeCompetition={activeCompetition} />
      </div>
    </div>
  );
}

function Table({ activeCompetition }: { activeCompetition: CompetitionType | undefined }) {
  const { isStartInFuture, timeframe } = useLeaderboardTiming();
  const leaderboardPageKey = useLeaderboardPageKey();
  const leaderboardDataType = useLeaderboardDataTypeState()[0];
  const isTestnet = useLeaderboardIsTestnet();

  if (isStartInFuture) {
    if (isTestnet) {
      const startDate = new Date(timeframe.from * 1000);
      const formatted = startDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
        timeZoneName: "short",
      });
      return (
        <div className="flex min-h-[300px] items-center justify-center text-body-medium text-typography-secondary">
          <Trans>Competition starts on {formatted}</Trans>
        </div>
      );
    }
    return null;
  }

  const table =
    (leaderboardPageKey === "leaderboard" || leaderboardPageKey === "testnet") &&
    leaderboardDataType === "positions" ? (
      <PositionsTable />
    ) : (
      <AccountsTable activeCompetition={isTestnet ? undefined : activeCompetition} />
    );

  return <div>{table}</div>;
}

function AccountsTable({ activeCompetition }: { activeCompetition: CompetitionType | undefined }) {
  const accounts = useLeaderboardRankedAccounts();
  const isLoading = useSelector(selectLeaderboardIsLoading);
  const searchAddress = useSelector(selectLeaderboardSearchAddress);
  const accountsStruct = useMemo(
    () => ({
      isLoading,
      data: accounts ? accounts : [],
      error: null,
      updatedAt: 0,
    }),
    [accounts, isLoading]
  );

  return (
    <LeaderboardAccountsTable
      activeCompetition={activeCompetition}
      accounts={accountsStruct}
      searchAddress={searchAddress}
    />
  );
}

function PositionsTable() {
  const positions = useLeaderboardPositions();
  const isLoading = useSelector(selectLeaderboardIsLoading);
  const searchAddress = useSelector(selectLeaderboardSearchAddress);
  const positionsStruct = useMemo(
    () => ({
      isLoading,
      data: positions ? positions : [],
      error: null,
      updatedAt: 0,
    }),
    [positions, isLoading]
  );
  return <LeaderboardPositionsTable positions={positionsStruct} searchAddress={searchAddress} />;
}
