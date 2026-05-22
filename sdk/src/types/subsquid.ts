export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: number; output: string; }
}

export interface AccountStat {
  __typename?: 'AccountStat';
  closedCount: Scalars['Int']['output'];
  cumsumCollateral: Scalars['BigInt']['output'];
  cumsumSize: Scalars['BigInt']['output'];
  deposits: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  losses: Scalars['Int']['output'];
  maxCapital: Scalars['BigInt']['output'];
  netCapital: Scalars['BigInt']['output'];
  realizedFees: Scalars['BigInt']['output'];
  realizedPnl: Scalars['BigInt']['output'];
  realizedPriceImpact: Scalars['BigInt']['output'];
  realizedSwapImpact: Scalars['BigInt']['output'];
  sumMaxSize: Scalars['BigInt']['output'];
  totalDepositedUsd0: Scalars['BigInt']['output'];
  updatedAt: Scalars['Int']['output'];
  volume: Scalars['BigInt']['output'];
  wins: Scalars['Int']['output'];
}

export interface AccountStatEdge {
  __typename?: 'AccountStatEdge';
  cursor: Scalars['String']['output'];
  node: AccountStat;
}

export enum AccountStatOrderByInput {
  closedCount_ASC = 'closedCount_ASC',
  closedCount_ASC_NULLS_FIRST = 'closedCount_ASC_NULLS_FIRST',
  closedCount_ASC_NULLS_LAST = 'closedCount_ASC_NULLS_LAST',
  closedCount_DESC = 'closedCount_DESC',
  closedCount_DESC_NULLS_FIRST = 'closedCount_DESC_NULLS_FIRST',
  closedCount_DESC_NULLS_LAST = 'closedCount_DESC_NULLS_LAST',
  cumsumCollateral_ASC = 'cumsumCollateral_ASC',
  cumsumCollateral_ASC_NULLS_FIRST = 'cumsumCollateral_ASC_NULLS_FIRST',
  cumsumCollateral_ASC_NULLS_LAST = 'cumsumCollateral_ASC_NULLS_LAST',
  cumsumCollateral_DESC = 'cumsumCollateral_DESC',
  cumsumCollateral_DESC_NULLS_FIRST = 'cumsumCollateral_DESC_NULLS_FIRST',
  cumsumCollateral_DESC_NULLS_LAST = 'cumsumCollateral_DESC_NULLS_LAST',
  cumsumSize_ASC = 'cumsumSize_ASC',
  cumsumSize_ASC_NULLS_FIRST = 'cumsumSize_ASC_NULLS_FIRST',
  cumsumSize_ASC_NULLS_LAST = 'cumsumSize_ASC_NULLS_LAST',
  cumsumSize_DESC = 'cumsumSize_DESC',
  cumsumSize_DESC_NULLS_FIRST = 'cumsumSize_DESC_NULLS_FIRST',
  cumsumSize_DESC_NULLS_LAST = 'cumsumSize_DESC_NULLS_LAST',
  deposits_ASC = 'deposits_ASC',
  deposits_ASC_NULLS_FIRST = 'deposits_ASC_NULLS_FIRST',
  deposits_ASC_NULLS_LAST = 'deposits_ASC_NULLS_LAST',
  deposits_DESC = 'deposits_DESC',
  deposits_DESC_NULLS_FIRST = 'deposits_DESC_NULLS_FIRST',
  deposits_DESC_NULLS_LAST = 'deposits_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  losses_ASC = 'losses_ASC',
  losses_ASC_NULLS_FIRST = 'losses_ASC_NULLS_FIRST',
  losses_ASC_NULLS_LAST = 'losses_ASC_NULLS_LAST',
  losses_DESC = 'losses_DESC',
  losses_DESC_NULLS_FIRST = 'losses_DESC_NULLS_FIRST',
  losses_DESC_NULLS_LAST = 'losses_DESC_NULLS_LAST',
  maxCapital_ASC = 'maxCapital_ASC',
  maxCapital_ASC_NULLS_FIRST = 'maxCapital_ASC_NULLS_FIRST',
  maxCapital_ASC_NULLS_LAST = 'maxCapital_ASC_NULLS_LAST',
  maxCapital_DESC = 'maxCapital_DESC',
  maxCapital_DESC_NULLS_FIRST = 'maxCapital_DESC_NULLS_FIRST',
  maxCapital_DESC_NULLS_LAST = 'maxCapital_DESC_NULLS_LAST',
  netCapital_ASC = 'netCapital_ASC',
  netCapital_ASC_NULLS_FIRST = 'netCapital_ASC_NULLS_FIRST',
  netCapital_ASC_NULLS_LAST = 'netCapital_ASC_NULLS_LAST',
  netCapital_DESC = 'netCapital_DESC',
  netCapital_DESC_NULLS_FIRST = 'netCapital_DESC_NULLS_FIRST',
  netCapital_DESC_NULLS_LAST = 'netCapital_DESC_NULLS_LAST',
  realizedFees_ASC = 'realizedFees_ASC',
  realizedFees_ASC_NULLS_FIRST = 'realizedFees_ASC_NULLS_FIRST',
  realizedFees_ASC_NULLS_LAST = 'realizedFees_ASC_NULLS_LAST',
  realizedFees_DESC = 'realizedFees_DESC',
  realizedFees_DESC_NULLS_FIRST = 'realizedFees_DESC_NULLS_FIRST',
  realizedFees_DESC_NULLS_LAST = 'realizedFees_DESC_NULLS_LAST',
  realizedPnl_ASC = 'realizedPnl_ASC',
  realizedPnl_ASC_NULLS_FIRST = 'realizedPnl_ASC_NULLS_FIRST',
  realizedPnl_ASC_NULLS_LAST = 'realizedPnl_ASC_NULLS_LAST',
  realizedPnl_DESC = 'realizedPnl_DESC',
  realizedPnl_DESC_NULLS_FIRST = 'realizedPnl_DESC_NULLS_FIRST',
  realizedPnl_DESC_NULLS_LAST = 'realizedPnl_DESC_NULLS_LAST',
  realizedPriceImpact_ASC = 'realizedPriceImpact_ASC',
  realizedPriceImpact_ASC_NULLS_FIRST = 'realizedPriceImpact_ASC_NULLS_FIRST',
  realizedPriceImpact_ASC_NULLS_LAST = 'realizedPriceImpact_ASC_NULLS_LAST',
  realizedPriceImpact_DESC = 'realizedPriceImpact_DESC',
  realizedPriceImpact_DESC_NULLS_FIRST = 'realizedPriceImpact_DESC_NULLS_FIRST',
  realizedPriceImpact_DESC_NULLS_LAST = 'realizedPriceImpact_DESC_NULLS_LAST',
  realizedSwapImpact_ASC = 'realizedSwapImpact_ASC',
  realizedSwapImpact_ASC_NULLS_FIRST = 'realizedSwapImpact_ASC_NULLS_FIRST',
  realizedSwapImpact_ASC_NULLS_LAST = 'realizedSwapImpact_ASC_NULLS_LAST',
  realizedSwapImpact_DESC = 'realizedSwapImpact_DESC',
  realizedSwapImpact_DESC_NULLS_FIRST = 'realizedSwapImpact_DESC_NULLS_FIRST',
  realizedSwapImpact_DESC_NULLS_LAST = 'realizedSwapImpact_DESC_NULLS_LAST',
  sumMaxSize_ASC = 'sumMaxSize_ASC',
  sumMaxSize_ASC_NULLS_FIRST = 'sumMaxSize_ASC_NULLS_FIRST',
  sumMaxSize_ASC_NULLS_LAST = 'sumMaxSize_ASC_NULLS_LAST',
  sumMaxSize_DESC = 'sumMaxSize_DESC',
  sumMaxSize_DESC_NULLS_FIRST = 'sumMaxSize_DESC_NULLS_FIRST',
  sumMaxSize_DESC_NULLS_LAST = 'sumMaxSize_DESC_NULLS_LAST',
  totalDepositedUsd0_ASC = 'totalDepositedUsd0_ASC',
  totalDepositedUsd0_ASC_NULLS_FIRST = 'totalDepositedUsd0_ASC_NULLS_FIRST',
  totalDepositedUsd0_ASC_NULLS_LAST = 'totalDepositedUsd0_ASC_NULLS_LAST',
  totalDepositedUsd0_DESC = 'totalDepositedUsd0_DESC',
  totalDepositedUsd0_DESC_NULLS_FIRST = 'totalDepositedUsd0_DESC_NULLS_FIRST',
  totalDepositedUsd0_DESC_NULLS_LAST = 'totalDepositedUsd0_DESC_NULLS_LAST',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_ASC_NULLS_FIRST = 'updatedAt_ASC_NULLS_FIRST',
  updatedAt_ASC_NULLS_LAST = 'updatedAt_ASC_NULLS_LAST',
  updatedAt_DESC = 'updatedAt_DESC',
  updatedAt_DESC_NULLS_FIRST = 'updatedAt_DESC_NULLS_FIRST',
  updatedAt_DESC_NULLS_LAST = 'updatedAt_DESC_NULLS_LAST',
  volume_ASC = 'volume_ASC',
  volume_ASC_NULLS_FIRST = 'volume_ASC_NULLS_FIRST',
  volume_ASC_NULLS_LAST = 'volume_ASC_NULLS_LAST',
  volume_DESC = 'volume_DESC',
  volume_DESC_NULLS_FIRST = 'volume_DESC_NULLS_FIRST',
  volume_DESC_NULLS_LAST = 'volume_DESC_NULLS_LAST',
  wins_ASC = 'wins_ASC',
  wins_ASC_NULLS_FIRST = 'wins_ASC_NULLS_FIRST',
  wins_ASC_NULLS_LAST = 'wins_ASC_NULLS_LAST',
  wins_DESC = 'wins_DESC',
  wins_DESC_NULLS_FIRST = 'wins_DESC_NULLS_FIRST',
  wins_DESC_NULLS_LAST = 'wins_DESC_NULLS_LAST'
}

export interface AccountStatWhereInput {
  AND?: InputMaybe<Array<AccountStatWhereInput>>;
  OR?: InputMaybe<Array<AccountStatWhereInput>>;
  closedCount_eq?: InputMaybe<Scalars['Int']['input']>;
  closedCount_gt?: InputMaybe<Scalars['Int']['input']>;
  closedCount_gte?: InputMaybe<Scalars['Int']['input']>;
  closedCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  closedCount_lt?: InputMaybe<Scalars['Int']['input']>;
  closedCount_lte?: InputMaybe<Scalars['Int']['input']>;
  closedCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  closedCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumsumCollateral_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumsumCollateral_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumsumCollateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumsumSize_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumsumSize_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumsumSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposits_eq?: InputMaybe<Scalars['BigInt']['input']>;
  deposits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposits_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  deposits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposits_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  deposits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  losses_eq?: InputMaybe<Scalars['Int']['input']>;
  losses_gt?: InputMaybe<Scalars['Int']['input']>;
  losses_gte?: InputMaybe<Scalars['Int']['input']>;
  losses_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  losses_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  losses_lt?: InputMaybe<Scalars['Int']['input']>;
  losses_lte?: InputMaybe<Scalars['Int']['input']>;
  losses_not_eq?: InputMaybe<Scalars['Int']['input']>;
  losses_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxCapital_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxCapital_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxCapital_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netCapital_eq?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netCapital_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  netCapital_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedFees_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedFees_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPriceImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPriceImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedPriceImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedSwapImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedSwapImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedSwapImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedSwapImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedSwapImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedSwapImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedSwapImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedSwapImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedSwapImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sumMaxSize_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sumMaxSize_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sumMaxSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDepositedUsd0_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDepositedUsd0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalDepositedUsd0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  volume_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wins_eq?: InputMaybe<Scalars['Int']['input']>;
  wins_gt?: InputMaybe<Scalars['Int']['input']>;
  wins_gte?: InputMaybe<Scalars['Int']['input']>;
  wins_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  wins_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  wins_lt?: InputMaybe<Scalars['Int']['input']>;
  wins_lte?: InputMaybe<Scalars['Int']['input']>;
  wins_not_eq?: InputMaybe<Scalars['Int']['input']>;
  wins_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
}

export interface AccountStatsConnection {
  __typename?: 'AccountStatsConnection';
  edges: Array<AccountStatEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface AprSnapshot {
  __typename?: 'AprSnapshot';
  address: Scalars['String']['output'];
  aprByBorrowingFee: Scalars['BigInt']['output'];
  aprByFee: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  snapshotTimestamp: Scalars['Int']['output'];
}

export interface AprSnapshotEdge {
  __typename?: 'AprSnapshotEdge';
  cursor: Scalars['String']['output'];
  node: AprSnapshot;
}

export enum AprSnapshotOrderByInput {
  address_ASC = 'address_ASC',
  address_ASC_NULLS_FIRST = 'address_ASC_NULLS_FIRST',
  address_ASC_NULLS_LAST = 'address_ASC_NULLS_LAST',
  address_DESC = 'address_DESC',
  address_DESC_NULLS_FIRST = 'address_DESC_NULLS_FIRST',
  address_DESC_NULLS_LAST = 'address_DESC_NULLS_LAST',
  aprByBorrowingFee_ASC = 'aprByBorrowingFee_ASC',
  aprByBorrowingFee_ASC_NULLS_FIRST = 'aprByBorrowingFee_ASC_NULLS_FIRST',
  aprByBorrowingFee_ASC_NULLS_LAST = 'aprByBorrowingFee_ASC_NULLS_LAST',
  aprByBorrowingFee_DESC = 'aprByBorrowingFee_DESC',
  aprByBorrowingFee_DESC_NULLS_FIRST = 'aprByBorrowingFee_DESC_NULLS_FIRST',
  aprByBorrowingFee_DESC_NULLS_LAST = 'aprByBorrowingFee_DESC_NULLS_LAST',
  aprByFee_ASC = 'aprByFee_ASC',
  aprByFee_ASC_NULLS_FIRST = 'aprByFee_ASC_NULLS_FIRST',
  aprByFee_ASC_NULLS_LAST = 'aprByFee_ASC_NULLS_LAST',
  aprByFee_DESC = 'aprByFee_DESC',
  aprByFee_DESC_NULLS_FIRST = 'aprByFee_DESC_NULLS_FIRST',
  aprByFee_DESC_NULLS_LAST = 'aprByFee_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  snapshotTimestamp_ASC = 'snapshotTimestamp_ASC',
  snapshotTimestamp_ASC_NULLS_FIRST = 'snapshotTimestamp_ASC_NULLS_FIRST',
  snapshotTimestamp_ASC_NULLS_LAST = 'snapshotTimestamp_ASC_NULLS_LAST',
  snapshotTimestamp_DESC = 'snapshotTimestamp_DESC',
  snapshotTimestamp_DESC_NULLS_FIRST = 'snapshotTimestamp_DESC_NULLS_FIRST',
  snapshotTimestamp_DESC_NULLS_LAST = 'snapshotTimestamp_DESC_NULLS_LAST'
}

export interface AprSnapshotWhereInput {
  AND?: InputMaybe<Array<AprSnapshotWhereInput>>;
  OR?: InputMaybe<Array<AprSnapshotWhereInput>>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  address_endsWith?: InputMaybe<Scalars['String']['input']>;
  address_eq?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  address_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  address_not_eq?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  address_startsWith?: InputMaybe<Scalars['String']['input']>;
  aprByBorrowingFee_eq?: InputMaybe<Scalars['BigInt']['input']>;
  aprByBorrowingFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  aprByBorrowingFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  aprByBorrowingFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aprByBorrowingFee_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  aprByBorrowingFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  aprByBorrowingFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  aprByBorrowingFee_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  aprByBorrowingFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aprByFee_eq?: InputMaybe<Scalars['BigInt']['input']>;
  aprByFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  aprByFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  aprByFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aprByFee_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  aprByFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  aprByFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  aprByFee_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  aprByFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  snapshotTimestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  snapshotTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  snapshotTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
}

export interface AprSnapshotsConnection {
  __typename?: 'AprSnapshotsConnection';
  edges: Array<AprSnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface ClaimAction {
  __typename?: 'ClaimAction';
  account: Scalars['String']['output'];
  amounts: Array<Scalars['String']['output']>;
  eventName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isLongOrders: Array<Scalars['Boolean']['output']>;
  marketAddresses: Array<Scalars['String']['output']>;
  timestamp: Scalars['Int']['output'];
  tokenAddresses: Array<Scalars['String']['output']>;
  tokenPrices: Array<Scalars['String']['output']>;
  transaction: Transaction;
}

export interface ClaimActionEdge {
  __typename?: 'ClaimActionEdge';
  cursor: Scalars['String']['output'];
  node: ClaimAction;
}

export enum ClaimActionOrderByInput {
  account_ASC = 'account_ASC',
  account_ASC_NULLS_FIRST = 'account_ASC_NULLS_FIRST',
  account_ASC_NULLS_LAST = 'account_ASC_NULLS_LAST',
  account_DESC = 'account_DESC',
  account_DESC_NULLS_FIRST = 'account_DESC_NULLS_FIRST',
  account_DESC_NULLS_LAST = 'account_DESC_NULLS_LAST',
  eventName_ASC = 'eventName_ASC',
  eventName_ASC_NULLS_FIRST = 'eventName_ASC_NULLS_FIRST',
  eventName_ASC_NULLS_LAST = 'eventName_ASC_NULLS_LAST',
  eventName_DESC = 'eventName_DESC',
  eventName_DESC_NULLS_FIRST = 'eventName_DESC_NULLS_FIRST',
  eventName_DESC_NULLS_LAST = 'eventName_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  transaction_blockNumber_ASC = 'transaction_blockNumber_ASC',
  transaction_blockNumber_ASC_NULLS_FIRST = 'transaction_blockNumber_ASC_NULLS_FIRST',
  transaction_blockNumber_ASC_NULLS_LAST = 'transaction_blockNumber_ASC_NULLS_LAST',
  transaction_blockNumber_DESC = 'transaction_blockNumber_DESC',
  transaction_blockNumber_DESC_NULLS_FIRST = 'transaction_blockNumber_DESC_NULLS_FIRST',
  transaction_blockNumber_DESC_NULLS_LAST = 'transaction_blockNumber_DESC_NULLS_LAST',
  transaction_hash_ASC = 'transaction_hash_ASC',
  transaction_hash_ASC_NULLS_FIRST = 'transaction_hash_ASC_NULLS_FIRST',
  transaction_hash_ASC_NULLS_LAST = 'transaction_hash_ASC_NULLS_LAST',
  transaction_hash_DESC = 'transaction_hash_DESC',
  transaction_hash_DESC_NULLS_FIRST = 'transaction_hash_DESC_NULLS_FIRST',
  transaction_hash_DESC_NULLS_LAST = 'transaction_hash_DESC_NULLS_LAST',
  transaction_id_ASC = 'transaction_id_ASC',
  transaction_id_ASC_NULLS_FIRST = 'transaction_id_ASC_NULLS_FIRST',
  transaction_id_ASC_NULLS_LAST = 'transaction_id_ASC_NULLS_LAST',
  transaction_id_DESC = 'transaction_id_DESC',
  transaction_id_DESC_NULLS_FIRST = 'transaction_id_DESC_NULLS_FIRST',
  transaction_id_DESC_NULLS_LAST = 'transaction_id_DESC_NULLS_LAST',
  transaction_timestamp_ASC = 'transaction_timestamp_ASC',
  transaction_timestamp_ASC_NULLS_FIRST = 'transaction_timestamp_ASC_NULLS_FIRST',
  transaction_timestamp_ASC_NULLS_LAST = 'transaction_timestamp_ASC_NULLS_LAST',
  transaction_timestamp_DESC = 'transaction_timestamp_DESC',
  transaction_timestamp_DESC_NULLS_FIRST = 'transaction_timestamp_DESC_NULLS_FIRST',
  transaction_timestamp_DESC_NULLS_LAST = 'transaction_timestamp_DESC_NULLS_LAST'
}

export interface ClaimActionWhereInput {
  AND?: InputMaybe<Array<ClaimActionWhereInput>>;
  OR?: InputMaybe<Array<ClaimActionWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  amounts_containsAll?: InputMaybe<Array<Scalars['String']['input']>>;
  amounts_containsAny?: InputMaybe<Array<Scalars['String']['input']>>;
  amounts_containsNone?: InputMaybe<Array<Scalars['String']['input']>>;
  amounts_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  eventName_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_gt?: InputMaybe<Scalars['String']['input']>;
  eventName_gte?: InputMaybe<Scalars['String']['input']>;
  eventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  eventName_lt?: InputMaybe<Scalars['String']['input']>;
  eventName_lte?: InputMaybe<Scalars['String']['input']>;
  eventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_not_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isLongOrders_containsAll?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isLongOrders_containsAny?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isLongOrders_containsNone?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isLongOrders_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketAddresses_containsAll?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddresses_containsAny?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddresses_containsNone?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddresses_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenAddresses_containsAll?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenAddresses_containsAny?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenAddresses_containsNone?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenAddresses_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenPrices_containsAll?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenPrices_containsAny?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenPrices_containsNone?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenPrices_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  transaction?: InputMaybe<TransactionWhereInput>;
  transaction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ClaimActionsConnection {
  __typename?: 'ClaimActionsConnection';
  edges: Array<ClaimActionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface ClaimableCollateral {
  __typename?: 'ClaimableCollateral';
  account: Scalars['String']['output'];
  claimed: Scalars['Boolean']['output'];
  factor: Scalars['BigInt']['output'];
  factorByTime: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  marketAddress: Scalars['String']['output'];
  reductionFactor: Scalars['BigInt']['output'];
  timeKey: Scalars['String']['output'];
  tokenAddress: Scalars['String']['output'];
  updatedAt: Scalars['Int']['output'];
  value: Scalars['BigInt']['output'];
}

export interface ClaimableCollateralEdge {
  __typename?: 'ClaimableCollateralEdge';
  cursor: Scalars['String']['output'];
  node: ClaimableCollateral;
}

export enum ClaimableCollateralOrderByInput {
  account_ASC = 'account_ASC',
  account_ASC_NULLS_FIRST = 'account_ASC_NULLS_FIRST',
  account_ASC_NULLS_LAST = 'account_ASC_NULLS_LAST',
  account_DESC = 'account_DESC',
  account_DESC_NULLS_FIRST = 'account_DESC_NULLS_FIRST',
  account_DESC_NULLS_LAST = 'account_DESC_NULLS_LAST',
  claimed_ASC = 'claimed_ASC',
  claimed_ASC_NULLS_FIRST = 'claimed_ASC_NULLS_FIRST',
  claimed_ASC_NULLS_LAST = 'claimed_ASC_NULLS_LAST',
  claimed_DESC = 'claimed_DESC',
  claimed_DESC_NULLS_FIRST = 'claimed_DESC_NULLS_FIRST',
  claimed_DESC_NULLS_LAST = 'claimed_DESC_NULLS_LAST',
  factorByTime_ASC = 'factorByTime_ASC',
  factorByTime_ASC_NULLS_FIRST = 'factorByTime_ASC_NULLS_FIRST',
  factorByTime_ASC_NULLS_LAST = 'factorByTime_ASC_NULLS_LAST',
  factorByTime_DESC = 'factorByTime_DESC',
  factorByTime_DESC_NULLS_FIRST = 'factorByTime_DESC_NULLS_FIRST',
  factorByTime_DESC_NULLS_LAST = 'factorByTime_DESC_NULLS_LAST',
  factor_ASC = 'factor_ASC',
  factor_ASC_NULLS_FIRST = 'factor_ASC_NULLS_FIRST',
  factor_ASC_NULLS_LAST = 'factor_ASC_NULLS_LAST',
  factor_DESC = 'factor_DESC',
  factor_DESC_NULLS_FIRST = 'factor_DESC_NULLS_FIRST',
  factor_DESC_NULLS_LAST = 'factor_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  marketAddress_ASC = 'marketAddress_ASC',
  marketAddress_ASC_NULLS_FIRST = 'marketAddress_ASC_NULLS_FIRST',
  marketAddress_ASC_NULLS_LAST = 'marketAddress_ASC_NULLS_LAST',
  marketAddress_DESC = 'marketAddress_DESC',
  marketAddress_DESC_NULLS_FIRST = 'marketAddress_DESC_NULLS_FIRST',
  marketAddress_DESC_NULLS_LAST = 'marketAddress_DESC_NULLS_LAST',
  reductionFactor_ASC = 'reductionFactor_ASC',
  reductionFactor_ASC_NULLS_FIRST = 'reductionFactor_ASC_NULLS_FIRST',
  reductionFactor_ASC_NULLS_LAST = 'reductionFactor_ASC_NULLS_LAST',
  reductionFactor_DESC = 'reductionFactor_DESC',
  reductionFactor_DESC_NULLS_FIRST = 'reductionFactor_DESC_NULLS_FIRST',
  reductionFactor_DESC_NULLS_LAST = 'reductionFactor_DESC_NULLS_LAST',
  timeKey_ASC = 'timeKey_ASC',
  timeKey_ASC_NULLS_FIRST = 'timeKey_ASC_NULLS_FIRST',
  timeKey_ASC_NULLS_LAST = 'timeKey_ASC_NULLS_LAST',
  timeKey_DESC = 'timeKey_DESC',
  timeKey_DESC_NULLS_FIRST = 'timeKey_DESC_NULLS_FIRST',
  timeKey_DESC_NULLS_LAST = 'timeKey_DESC_NULLS_LAST',
  tokenAddress_ASC = 'tokenAddress_ASC',
  tokenAddress_ASC_NULLS_FIRST = 'tokenAddress_ASC_NULLS_FIRST',
  tokenAddress_ASC_NULLS_LAST = 'tokenAddress_ASC_NULLS_LAST',
  tokenAddress_DESC = 'tokenAddress_DESC',
  tokenAddress_DESC_NULLS_FIRST = 'tokenAddress_DESC_NULLS_FIRST',
  tokenAddress_DESC_NULLS_LAST = 'tokenAddress_DESC_NULLS_LAST',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_ASC_NULLS_FIRST = 'updatedAt_ASC_NULLS_FIRST',
  updatedAt_ASC_NULLS_LAST = 'updatedAt_ASC_NULLS_LAST',
  updatedAt_DESC = 'updatedAt_DESC',
  updatedAt_DESC_NULLS_FIRST = 'updatedAt_DESC_NULLS_FIRST',
  updatedAt_DESC_NULLS_LAST = 'updatedAt_DESC_NULLS_LAST',
  value_ASC = 'value_ASC',
  value_ASC_NULLS_FIRST = 'value_ASC_NULLS_FIRST',
  value_ASC_NULLS_LAST = 'value_ASC_NULLS_LAST',
  value_DESC = 'value_DESC',
  value_DESC_NULLS_FIRST = 'value_DESC_NULLS_FIRST',
  value_DESC_NULLS_LAST = 'value_DESC_NULLS_LAST'
}

export interface ClaimableCollateralWhereInput {
  AND?: InputMaybe<Array<ClaimableCollateralWhereInput>>;
  OR?: InputMaybe<Array<ClaimableCollateralWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  claimed_eq?: InputMaybe<Scalars['Boolean']['input']>;
  claimed_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  claimed_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  factorByTime_eq?: InputMaybe<Scalars['BigInt']['input']>;
  factorByTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  factorByTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  factorByTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  factorByTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  factorByTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  factorByTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  factorByTime_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  factorByTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  factor_eq?: InputMaybe<Scalars['BigInt']['input']>;
  factor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  factor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  factor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  factor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  factor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  factor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  factor_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  factor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketAddress_lt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_lte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  reductionFactor_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reductionFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reductionFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reductionFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reductionFactor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reductionFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reductionFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reductionFactor_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reductionFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeKey_contains?: InputMaybe<Scalars['String']['input']>;
  timeKey_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  timeKey_endsWith?: InputMaybe<Scalars['String']['input']>;
  timeKey_eq?: InputMaybe<Scalars['String']['input']>;
  timeKey_gt?: InputMaybe<Scalars['String']['input']>;
  timeKey_gte?: InputMaybe<Scalars['String']['input']>;
  timeKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  timeKey_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timeKey_lt?: InputMaybe<Scalars['String']['input']>;
  timeKey_lte?: InputMaybe<Scalars['String']['input']>;
  timeKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  timeKey_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  timeKey_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  timeKey_not_eq?: InputMaybe<Scalars['String']['input']>;
  timeKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  timeKey_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  timeKey_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_eq?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  value_eq?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
}

export interface ClaimableCollateralsConnection {
  __typename?: 'ClaimableCollateralsConnection';
  edges: Array<ClaimableCollateralEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface DepositAction {
  __typename?: 'DepositAction';
  account: Scalars['String']['output'];
  callbackGasLimit?: Maybe<Scalars['BigInt']['output']>;
  eventName: Scalars['String']['output'];
  executionFee?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['String']['output'];
  initialLongToken?: Maybe<Scalars['BigInt']['output']>;
  initialShortToken?: Maybe<Scalars['BigInt']['output']>;
  key: Scalars['String']['output'];
  marketAddress: Scalars['String']['output'];
  receivedMarketTokens?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['Int']['output'];
  transaction: Transaction;
}

export interface DepositActionEdge {
  __typename?: 'DepositActionEdge';
  cursor: Scalars['String']['output'];
  node: DepositAction;
}

export enum DepositActionOrderByInput {
  account_ASC = 'account_ASC',
  account_ASC_NULLS_FIRST = 'account_ASC_NULLS_FIRST',
  account_ASC_NULLS_LAST = 'account_ASC_NULLS_LAST',
  account_DESC = 'account_DESC',
  account_DESC_NULLS_FIRST = 'account_DESC_NULLS_FIRST',
  account_DESC_NULLS_LAST = 'account_DESC_NULLS_LAST',
  callbackGasLimit_ASC = 'callbackGasLimit_ASC',
  callbackGasLimit_ASC_NULLS_FIRST = 'callbackGasLimit_ASC_NULLS_FIRST',
  callbackGasLimit_ASC_NULLS_LAST = 'callbackGasLimit_ASC_NULLS_LAST',
  callbackGasLimit_DESC = 'callbackGasLimit_DESC',
  callbackGasLimit_DESC_NULLS_FIRST = 'callbackGasLimit_DESC_NULLS_FIRST',
  callbackGasLimit_DESC_NULLS_LAST = 'callbackGasLimit_DESC_NULLS_LAST',
  eventName_ASC = 'eventName_ASC',
  eventName_ASC_NULLS_FIRST = 'eventName_ASC_NULLS_FIRST',
  eventName_ASC_NULLS_LAST = 'eventName_ASC_NULLS_LAST',
  eventName_DESC = 'eventName_DESC',
  eventName_DESC_NULLS_FIRST = 'eventName_DESC_NULLS_FIRST',
  eventName_DESC_NULLS_LAST = 'eventName_DESC_NULLS_LAST',
  executionFee_ASC = 'executionFee_ASC',
  executionFee_ASC_NULLS_FIRST = 'executionFee_ASC_NULLS_FIRST',
  executionFee_ASC_NULLS_LAST = 'executionFee_ASC_NULLS_LAST',
  executionFee_DESC = 'executionFee_DESC',
  executionFee_DESC_NULLS_FIRST = 'executionFee_DESC_NULLS_FIRST',
  executionFee_DESC_NULLS_LAST = 'executionFee_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  initialLongToken_ASC = 'initialLongToken_ASC',
  initialLongToken_ASC_NULLS_FIRST = 'initialLongToken_ASC_NULLS_FIRST',
  initialLongToken_ASC_NULLS_LAST = 'initialLongToken_ASC_NULLS_LAST',
  initialLongToken_DESC = 'initialLongToken_DESC',
  initialLongToken_DESC_NULLS_FIRST = 'initialLongToken_DESC_NULLS_FIRST',
  initialLongToken_DESC_NULLS_LAST = 'initialLongToken_DESC_NULLS_LAST',
  initialShortToken_ASC = 'initialShortToken_ASC',
  initialShortToken_ASC_NULLS_FIRST = 'initialShortToken_ASC_NULLS_FIRST',
  initialShortToken_ASC_NULLS_LAST = 'initialShortToken_ASC_NULLS_LAST',
  initialShortToken_DESC = 'initialShortToken_DESC',
  initialShortToken_DESC_NULLS_FIRST = 'initialShortToken_DESC_NULLS_FIRST',
  initialShortToken_DESC_NULLS_LAST = 'initialShortToken_DESC_NULLS_LAST',
  key_ASC = 'key_ASC',
  key_ASC_NULLS_FIRST = 'key_ASC_NULLS_FIRST',
  key_ASC_NULLS_LAST = 'key_ASC_NULLS_LAST',
  key_DESC = 'key_DESC',
  key_DESC_NULLS_FIRST = 'key_DESC_NULLS_FIRST',
  key_DESC_NULLS_LAST = 'key_DESC_NULLS_LAST',
  marketAddress_ASC = 'marketAddress_ASC',
  marketAddress_ASC_NULLS_FIRST = 'marketAddress_ASC_NULLS_FIRST',
  marketAddress_ASC_NULLS_LAST = 'marketAddress_ASC_NULLS_LAST',
  marketAddress_DESC = 'marketAddress_DESC',
  marketAddress_DESC_NULLS_FIRST = 'marketAddress_DESC_NULLS_FIRST',
  marketAddress_DESC_NULLS_LAST = 'marketAddress_DESC_NULLS_LAST',
  receivedMarketTokens_ASC = 'receivedMarketTokens_ASC',
  receivedMarketTokens_ASC_NULLS_FIRST = 'receivedMarketTokens_ASC_NULLS_FIRST',
  receivedMarketTokens_ASC_NULLS_LAST = 'receivedMarketTokens_ASC_NULLS_LAST',
  receivedMarketTokens_DESC = 'receivedMarketTokens_DESC',
  receivedMarketTokens_DESC_NULLS_FIRST = 'receivedMarketTokens_DESC_NULLS_FIRST',
  receivedMarketTokens_DESC_NULLS_LAST = 'receivedMarketTokens_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  transaction_blockNumber_ASC = 'transaction_blockNumber_ASC',
  transaction_blockNumber_ASC_NULLS_FIRST = 'transaction_blockNumber_ASC_NULLS_FIRST',
  transaction_blockNumber_ASC_NULLS_LAST = 'transaction_blockNumber_ASC_NULLS_LAST',
  transaction_blockNumber_DESC = 'transaction_blockNumber_DESC',
  transaction_blockNumber_DESC_NULLS_FIRST = 'transaction_blockNumber_DESC_NULLS_FIRST',
  transaction_blockNumber_DESC_NULLS_LAST = 'transaction_blockNumber_DESC_NULLS_LAST',
  transaction_hash_ASC = 'transaction_hash_ASC',
  transaction_hash_ASC_NULLS_FIRST = 'transaction_hash_ASC_NULLS_FIRST',
  transaction_hash_ASC_NULLS_LAST = 'transaction_hash_ASC_NULLS_LAST',
  transaction_hash_DESC = 'transaction_hash_DESC',
  transaction_hash_DESC_NULLS_FIRST = 'transaction_hash_DESC_NULLS_FIRST',
  transaction_hash_DESC_NULLS_LAST = 'transaction_hash_DESC_NULLS_LAST',
  transaction_id_ASC = 'transaction_id_ASC',
  transaction_id_ASC_NULLS_FIRST = 'transaction_id_ASC_NULLS_FIRST',
  transaction_id_ASC_NULLS_LAST = 'transaction_id_ASC_NULLS_LAST',
  transaction_id_DESC = 'transaction_id_DESC',
  transaction_id_DESC_NULLS_FIRST = 'transaction_id_DESC_NULLS_FIRST',
  transaction_id_DESC_NULLS_LAST = 'transaction_id_DESC_NULLS_LAST',
  transaction_timestamp_ASC = 'transaction_timestamp_ASC',
  transaction_timestamp_ASC_NULLS_FIRST = 'transaction_timestamp_ASC_NULLS_FIRST',
  transaction_timestamp_ASC_NULLS_LAST = 'transaction_timestamp_ASC_NULLS_LAST',
  transaction_timestamp_DESC = 'transaction_timestamp_DESC',
  transaction_timestamp_DESC_NULLS_FIRST = 'transaction_timestamp_DESC_NULLS_FIRST',
  transaction_timestamp_DESC_NULLS_LAST = 'transaction_timestamp_DESC_NULLS_LAST'
}

export interface DepositActionWhereInput {
  AND?: InputMaybe<Array<DepositActionWhereInput>>;
  OR?: InputMaybe<Array<DepositActionWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  callbackGasLimit_eq?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  callbackGasLimit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  callbackGasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventName_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_gt?: InputMaybe<Scalars['String']['input']>;
  eventName_gte?: InputMaybe<Scalars['String']['input']>;
  eventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  eventName_lt?: InputMaybe<Scalars['String']['input']>;
  eventName_lte?: InputMaybe<Scalars['String']['input']>;
  eventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_not_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_startsWith?: InputMaybe<Scalars['String']['input']>;
  executionFee_eq?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionFee_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  executionFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  initialLongToken_eq?: InputMaybe<Scalars['BigInt']['input']>;
  initialLongToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialLongToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialLongToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialLongToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  initialLongToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialLongToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialLongToken_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  initialLongToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialShortToken_eq?: InputMaybe<Scalars['BigInt']['input']>;
  initialShortToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialShortToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialShortToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialShortToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  initialShortToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialShortToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialShortToken_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  initialShortToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  key_endsWith?: InputMaybe<Scalars['String']['input']>;
  key_eq?: InputMaybe<Scalars['String']['input']>;
  key_gt?: InputMaybe<Scalars['String']['input']>;
  key_gte?: InputMaybe<Scalars['String']['input']>;
  key_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  key_lt?: InputMaybe<Scalars['String']['input']>;
  key_lte?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  key_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  key_not_eq?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  key_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketAddress_lt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_lte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  receivedMarketTokens_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedMarketTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedMarketTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedMarketTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receivedMarketTokens_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  receivedMarketTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedMarketTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedMarketTokens_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedMarketTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<TransactionWhereInput>;
  transaction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface DepositActionsConnection {
  __typename?: 'DepositActionsConnection';
  edges: Array<DepositActionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface Distribution {
  __typename?: 'Distribution';
  amounts: Array<Scalars['String']['output']>;
  amountsInUsd: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  receiver: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  tokens: Array<Scalars['String']['output']>;
  transaction: Transaction;
  typeId: Scalars['String']['output'];
}

export interface DistributionEdge {
  __typename?: 'DistributionEdge';
  cursor: Scalars['String']['output'];
  node: Distribution;
}

export enum DistributionOrderByInput {
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  receiver_ASC = 'receiver_ASC',
  receiver_ASC_NULLS_FIRST = 'receiver_ASC_NULLS_FIRST',
  receiver_ASC_NULLS_LAST = 'receiver_ASC_NULLS_LAST',
  receiver_DESC = 'receiver_DESC',
  receiver_DESC_NULLS_FIRST = 'receiver_DESC_NULLS_FIRST',
  receiver_DESC_NULLS_LAST = 'receiver_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  transaction_blockNumber_ASC = 'transaction_blockNumber_ASC',
  transaction_blockNumber_ASC_NULLS_FIRST = 'transaction_blockNumber_ASC_NULLS_FIRST',
  transaction_blockNumber_ASC_NULLS_LAST = 'transaction_blockNumber_ASC_NULLS_LAST',
  transaction_blockNumber_DESC = 'transaction_blockNumber_DESC',
  transaction_blockNumber_DESC_NULLS_FIRST = 'transaction_blockNumber_DESC_NULLS_FIRST',
  transaction_blockNumber_DESC_NULLS_LAST = 'transaction_blockNumber_DESC_NULLS_LAST',
  transaction_hash_ASC = 'transaction_hash_ASC',
  transaction_hash_ASC_NULLS_FIRST = 'transaction_hash_ASC_NULLS_FIRST',
  transaction_hash_ASC_NULLS_LAST = 'transaction_hash_ASC_NULLS_LAST',
  transaction_hash_DESC = 'transaction_hash_DESC',
  transaction_hash_DESC_NULLS_FIRST = 'transaction_hash_DESC_NULLS_FIRST',
  transaction_hash_DESC_NULLS_LAST = 'transaction_hash_DESC_NULLS_LAST',
  transaction_id_ASC = 'transaction_id_ASC',
  transaction_id_ASC_NULLS_FIRST = 'transaction_id_ASC_NULLS_FIRST',
  transaction_id_ASC_NULLS_LAST = 'transaction_id_ASC_NULLS_LAST',
  transaction_id_DESC = 'transaction_id_DESC',
  transaction_id_DESC_NULLS_FIRST = 'transaction_id_DESC_NULLS_FIRST',
  transaction_id_DESC_NULLS_LAST = 'transaction_id_DESC_NULLS_LAST',
  transaction_timestamp_ASC = 'transaction_timestamp_ASC',
  transaction_timestamp_ASC_NULLS_FIRST = 'transaction_timestamp_ASC_NULLS_FIRST',
  transaction_timestamp_ASC_NULLS_LAST = 'transaction_timestamp_ASC_NULLS_LAST',
  transaction_timestamp_DESC = 'transaction_timestamp_DESC',
  transaction_timestamp_DESC_NULLS_FIRST = 'transaction_timestamp_DESC_NULLS_FIRST',
  transaction_timestamp_DESC_NULLS_LAST = 'transaction_timestamp_DESC_NULLS_LAST',
  typeId_ASC = 'typeId_ASC',
  typeId_ASC_NULLS_FIRST = 'typeId_ASC_NULLS_FIRST',
  typeId_ASC_NULLS_LAST = 'typeId_ASC_NULLS_LAST',
  typeId_DESC = 'typeId_DESC',
  typeId_DESC_NULLS_FIRST = 'typeId_DESC_NULLS_FIRST',
  typeId_DESC_NULLS_LAST = 'typeId_DESC_NULLS_LAST'
}

export interface DistributionWhereInput {
  AND?: InputMaybe<Array<DistributionWhereInput>>;
  OR?: InputMaybe<Array<DistributionWhereInput>>;
  amountsInUsd_containsAll?: InputMaybe<Array<Scalars['String']['input']>>;
  amountsInUsd_containsAny?: InputMaybe<Array<Scalars['String']['input']>>;
  amountsInUsd_containsNone?: InputMaybe<Array<Scalars['String']['input']>>;
  amountsInUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amounts_containsAll?: InputMaybe<Array<Scalars['String']['input']>>;
  amounts_containsAny?: InputMaybe<Array<Scalars['String']['input']>>;
  amounts_containsNone?: InputMaybe<Array<Scalars['String']['input']>>;
  amounts_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  receiver_endsWith?: InputMaybe<Scalars['String']['input']>;
  receiver_eq?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  receiver_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  receiver_not_eq?: InputMaybe<Scalars['String']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  receiver_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokens_containsAll?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_containsAny?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_containsNone?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  transaction?: InputMaybe<TransactionWhereInput>;
  transaction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  typeId_contains?: InputMaybe<Scalars['String']['input']>;
  typeId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  typeId_endsWith?: InputMaybe<Scalars['String']['input']>;
  typeId_eq?: InputMaybe<Scalars['String']['input']>;
  typeId_gt?: InputMaybe<Scalars['String']['input']>;
  typeId_gte?: InputMaybe<Scalars['String']['input']>;
  typeId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  typeId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  typeId_lt?: InputMaybe<Scalars['String']['input']>;
  typeId_lte?: InputMaybe<Scalars['String']['input']>;
  typeId_not_contains?: InputMaybe<Scalars['String']['input']>;
  typeId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  typeId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  typeId_not_eq?: InputMaybe<Scalars['String']['input']>;
  typeId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  typeId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  typeId_startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface DistributionsConnection {
  __typename?: 'DistributionsConnection';
  edges: Array<DistributionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface FeesInfo {
  __typename?: 'FeesInfo';
  id: Scalars['String']['output'];
  period: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  totalBorrowingFeeUsd: Scalars['BigInt']['output'];
  totalLiquidationFeeUsd: Scalars['BigInt']['output'];
  totalPositionFeeUsd: Scalars['BigInt']['output'];
  totalSwapFeeUsd: Scalars['BigInt']['output'];
}

export interface FeesInfoEdge {
  __typename?: 'FeesInfoEdge';
  cursor: Scalars['String']['output'];
  node: FeesInfo;
}

export enum FeesInfoOrderByInput {
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  period_ASC = 'period_ASC',
  period_ASC_NULLS_FIRST = 'period_ASC_NULLS_FIRST',
  period_ASC_NULLS_LAST = 'period_ASC_NULLS_LAST',
  period_DESC = 'period_DESC',
  period_DESC_NULLS_FIRST = 'period_DESC_NULLS_FIRST',
  period_DESC_NULLS_LAST = 'period_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  totalBorrowingFeeUsd_ASC = 'totalBorrowingFeeUsd_ASC',
  totalBorrowingFeeUsd_ASC_NULLS_FIRST = 'totalBorrowingFeeUsd_ASC_NULLS_FIRST',
  totalBorrowingFeeUsd_ASC_NULLS_LAST = 'totalBorrowingFeeUsd_ASC_NULLS_LAST',
  totalBorrowingFeeUsd_DESC = 'totalBorrowingFeeUsd_DESC',
  totalBorrowingFeeUsd_DESC_NULLS_FIRST = 'totalBorrowingFeeUsd_DESC_NULLS_FIRST',
  totalBorrowingFeeUsd_DESC_NULLS_LAST = 'totalBorrowingFeeUsd_DESC_NULLS_LAST',
  totalLiquidationFeeUsd_ASC = 'totalLiquidationFeeUsd_ASC',
  totalLiquidationFeeUsd_ASC_NULLS_FIRST = 'totalLiquidationFeeUsd_ASC_NULLS_FIRST',
  totalLiquidationFeeUsd_ASC_NULLS_LAST = 'totalLiquidationFeeUsd_ASC_NULLS_LAST',
  totalLiquidationFeeUsd_DESC = 'totalLiquidationFeeUsd_DESC',
  totalLiquidationFeeUsd_DESC_NULLS_FIRST = 'totalLiquidationFeeUsd_DESC_NULLS_FIRST',
  totalLiquidationFeeUsd_DESC_NULLS_LAST = 'totalLiquidationFeeUsd_DESC_NULLS_LAST',
  totalPositionFeeUsd_ASC = 'totalPositionFeeUsd_ASC',
  totalPositionFeeUsd_ASC_NULLS_FIRST = 'totalPositionFeeUsd_ASC_NULLS_FIRST',
  totalPositionFeeUsd_ASC_NULLS_LAST = 'totalPositionFeeUsd_ASC_NULLS_LAST',
  totalPositionFeeUsd_DESC = 'totalPositionFeeUsd_DESC',
  totalPositionFeeUsd_DESC_NULLS_FIRST = 'totalPositionFeeUsd_DESC_NULLS_FIRST',
  totalPositionFeeUsd_DESC_NULLS_LAST = 'totalPositionFeeUsd_DESC_NULLS_LAST',
  totalSwapFeeUsd_ASC = 'totalSwapFeeUsd_ASC',
  totalSwapFeeUsd_ASC_NULLS_FIRST = 'totalSwapFeeUsd_ASC_NULLS_FIRST',
  totalSwapFeeUsd_ASC_NULLS_LAST = 'totalSwapFeeUsd_ASC_NULLS_LAST',
  totalSwapFeeUsd_DESC = 'totalSwapFeeUsd_DESC',
  totalSwapFeeUsd_DESC_NULLS_FIRST = 'totalSwapFeeUsd_DESC_NULLS_FIRST',
  totalSwapFeeUsd_DESC_NULLS_LAST = 'totalSwapFeeUsd_DESC_NULLS_LAST'
}

export interface FeesInfoWhereInput {
  AND?: InputMaybe<Array<FeesInfoWhereInput>>;
  OR?: InputMaybe<Array<FeesInfoWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  period_contains?: InputMaybe<Scalars['String']['input']>;
  period_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  period_endsWith?: InputMaybe<Scalars['String']['input']>;
  period_eq?: InputMaybe<Scalars['String']['input']>;
  period_gt?: InputMaybe<Scalars['String']['input']>;
  period_gte?: InputMaybe<Scalars['String']['input']>;
  period_in?: InputMaybe<Array<Scalars['String']['input']>>;
  period_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  period_lt?: InputMaybe<Scalars['String']['input']>;
  period_lte?: InputMaybe<Scalars['String']['input']>;
  period_not_contains?: InputMaybe<Scalars['String']['input']>;
  period_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  period_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  period_not_eq?: InputMaybe<Scalars['String']['input']>;
  period_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  period_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  period_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalBorrowingFeeUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFeeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFeeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFeeUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBorrowingFeeUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalBorrowingFeeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFeeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFeeUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFeeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidationFeeUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidationFeeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidationFeeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidationFeeUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidationFeeUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidationFeeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidationFeeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidationFeeUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidationFeeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalPositionFeeUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalPositionFeeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPositionFeeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPositionFeeUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalPositionFeeUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalPositionFeeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPositionFeeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPositionFeeUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalPositionFeeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapFeeUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapFeeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapFeeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapFeeUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapFeeUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalSwapFeeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapFeeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapFeeUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapFeeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
}

export interface FeesInfosConnection {
  __typename?: 'FeesInfosConnection';
  edges: Array<FeesInfoEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface GlvDepositAction {
  __typename?: 'GlvDepositAction';
  account: Scalars['String']['output'];
  eventName: Scalars['String']['output'];
  glvAddress: Scalars['String']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  longTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  marketAddress?: Maybe<Scalars['String']['output']>;
  receivedGlvTokens?: Maybe<Scalars['BigInt']['output']>;
  shortTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['Int']['output'];
  transaction: Transaction;
}

export interface GlvDepositActionEdge {
  __typename?: 'GlvDepositActionEdge';
  cursor: Scalars['String']['output'];
  node: GlvDepositAction;
}

export enum GlvDepositActionOrderByInput {
  account_ASC = 'account_ASC',
  account_ASC_NULLS_FIRST = 'account_ASC_NULLS_FIRST',
  account_ASC_NULLS_LAST = 'account_ASC_NULLS_LAST',
  account_DESC = 'account_DESC',
  account_DESC_NULLS_FIRST = 'account_DESC_NULLS_FIRST',
  account_DESC_NULLS_LAST = 'account_DESC_NULLS_LAST',
  eventName_ASC = 'eventName_ASC',
  eventName_ASC_NULLS_FIRST = 'eventName_ASC_NULLS_FIRST',
  eventName_ASC_NULLS_LAST = 'eventName_ASC_NULLS_LAST',
  eventName_DESC = 'eventName_DESC',
  eventName_DESC_NULLS_FIRST = 'eventName_DESC_NULLS_FIRST',
  eventName_DESC_NULLS_LAST = 'eventName_DESC_NULLS_LAST',
  glvAddress_ASC = 'glvAddress_ASC',
  glvAddress_ASC_NULLS_FIRST = 'glvAddress_ASC_NULLS_FIRST',
  glvAddress_ASC_NULLS_LAST = 'glvAddress_ASC_NULLS_LAST',
  glvAddress_DESC = 'glvAddress_DESC',
  glvAddress_DESC_NULLS_FIRST = 'glvAddress_DESC_NULLS_FIRST',
  glvAddress_DESC_NULLS_LAST = 'glvAddress_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  key_ASC = 'key_ASC',
  key_ASC_NULLS_FIRST = 'key_ASC_NULLS_FIRST',
  key_ASC_NULLS_LAST = 'key_ASC_NULLS_LAST',
  key_DESC = 'key_DESC',
  key_DESC_NULLS_FIRST = 'key_DESC_NULLS_FIRST',
  key_DESC_NULLS_LAST = 'key_DESC_NULLS_LAST',
  longTokenAmount_ASC = 'longTokenAmount_ASC',
  longTokenAmount_ASC_NULLS_FIRST = 'longTokenAmount_ASC_NULLS_FIRST',
  longTokenAmount_ASC_NULLS_LAST = 'longTokenAmount_ASC_NULLS_LAST',
  longTokenAmount_DESC = 'longTokenAmount_DESC',
  longTokenAmount_DESC_NULLS_FIRST = 'longTokenAmount_DESC_NULLS_FIRST',
  longTokenAmount_DESC_NULLS_LAST = 'longTokenAmount_DESC_NULLS_LAST',
  marketAddress_ASC = 'marketAddress_ASC',
  marketAddress_ASC_NULLS_FIRST = 'marketAddress_ASC_NULLS_FIRST',
  marketAddress_ASC_NULLS_LAST = 'marketAddress_ASC_NULLS_LAST',
  marketAddress_DESC = 'marketAddress_DESC',
  marketAddress_DESC_NULLS_FIRST = 'marketAddress_DESC_NULLS_FIRST',
  marketAddress_DESC_NULLS_LAST = 'marketAddress_DESC_NULLS_LAST',
  receivedGlvTokens_ASC = 'receivedGlvTokens_ASC',
  receivedGlvTokens_ASC_NULLS_FIRST = 'receivedGlvTokens_ASC_NULLS_FIRST',
  receivedGlvTokens_ASC_NULLS_LAST = 'receivedGlvTokens_ASC_NULLS_LAST',
  receivedGlvTokens_DESC = 'receivedGlvTokens_DESC',
  receivedGlvTokens_DESC_NULLS_FIRST = 'receivedGlvTokens_DESC_NULLS_FIRST',
  receivedGlvTokens_DESC_NULLS_LAST = 'receivedGlvTokens_DESC_NULLS_LAST',
  shortTokenAmount_ASC = 'shortTokenAmount_ASC',
  shortTokenAmount_ASC_NULLS_FIRST = 'shortTokenAmount_ASC_NULLS_FIRST',
  shortTokenAmount_ASC_NULLS_LAST = 'shortTokenAmount_ASC_NULLS_LAST',
  shortTokenAmount_DESC = 'shortTokenAmount_DESC',
  shortTokenAmount_DESC_NULLS_FIRST = 'shortTokenAmount_DESC_NULLS_FIRST',
  shortTokenAmount_DESC_NULLS_LAST = 'shortTokenAmount_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  transaction_blockNumber_ASC = 'transaction_blockNumber_ASC',
  transaction_blockNumber_ASC_NULLS_FIRST = 'transaction_blockNumber_ASC_NULLS_FIRST',
  transaction_blockNumber_ASC_NULLS_LAST = 'transaction_blockNumber_ASC_NULLS_LAST',
  transaction_blockNumber_DESC = 'transaction_blockNumber_DESC',
  transaction_blockNumber_DESC_NULLS_FIRST = 'transaction_blockNumber_DESC_NULLS_FIRST',
  transaction_blockNumber_DESC_NULLS_LAST = 'transaction_blockNumber_DESC_NULLS_LAST',
  transaction_hash_ASC = 'transaction_hash_ASC',
  transaction_hash_ASC_NULLS_FIRST = 'transaction_hash_ASC_NULLS_FIRST',
  transaction_hash_ASC_NULLS_LAST = 'transaction_hash_ASC_NULLS_LAST',
  transaction_hash_DESC = 'transaction_hash_DESC',
  transaction_hash_DESC_NULLS_FIRST = 'transaction_hash_DESC_NULLS_FIRST',
  transaction_hash_DESC_NULLS_LAST = 'transaction_hash_DESC_NULLS_LAST',
  transaction_id_ASC = 'transaction_id_ASC',
  transaction_id_ASC_NULLS_FIRST = 'transaction_id_ASC_NULLS_FIRST',
  transaction_id_ASC_NULLS_LAST = 'transaction_id_ASC_NULLS_LAST',
  transaction_id_DESC = 'transaction_id_DESC',
  transaction_id_DESC_NULLS_FIRST = 'transaction_id_DESC_NULLS_FIRST',
  transaction_id_DESC_NULLS_LAST = 'transaction_id_DESC_NULLS_LAST',
  transaction_timestamp_ASC = 'transaction_timestamp_ASC',
  transaction_timestamp_ASC_NULLS_FIRST = 'transaction_timestamp_ASC_NULLS_FIRST',
  transaction_timestamp_ASC_NULLS_LAST = 'transaction_timestamp_ASC_NULLS_LAST',
  transaction_timestamp_DESC = 'transaction_timestamp_DESC',
  transaction_timestamp_DESC_NULLS_FIRST = 'transaction_timestamp_DESC_NULLS_FIRST',
  transaction_timestamp_DESC_NULLS_LAST = 'transaction_timestamp_DESC_NULLS_LAST'
}

export interface GlvDepositActionWhereInput {
  AND?: InputMaybe<Array<GlvDepositActionWhereInput>>;
  OR?: InputMaybe<Array<GlvDepositActionWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_gt?: InputMaybe<Scalars['String']['input']>;
  eventName_gte?: InputMaybe<Scalars['String']['input']>;
  eventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  eventName_lt?: InputMaybe<Scalars['String']['input']>;
  eventName_lte?: InputMaybe<Scalars['String']['input']>;
  eventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_not_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_startsWith?: InputMaybe<Scalars['String']['input']>;
  glvAddress_contains?: InputMaybe<Scalars['String']['input']>;
  glvAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  glvAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  glvAddress_eq?: InputMaybe<Scalars['String']['input']>;
  glvAddress_gt?: InputMaybe<Scalars['String']['input']>;
  glvAddress_gte?: InputMaybe<Scalars['String']['input']>;
  glvAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  glvAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  glvAddress_lt?: InputMaybe<Scalars['String']['input']>;
  glvAddress_lte?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  glvAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  glvAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  key_endsWith?: InputMaybe<Scalars['String']['input']>;
  key_eq?: InputMaybe<Scalars['String']['input']>;
  key_gt?: InputMaybe<Scalars['String']['input']>;
  key_gte?: InputMaybe<Scalars['String']['input']>;
  key_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  key_lt?: InputMaybe<Scalars['String']['input']>;
  key_lte?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  key_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  key_not_eq?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  key_startsWith?: InputMaybe<Scalars['String']['input']>;
  longTokenAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  longTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longTokenAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  longTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longTokenAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  longTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketAddress_lt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_lte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  receivedGlvTokens_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedGlvTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedGlvTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedGlvTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receivedGlvTokens_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  receivedGlvTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedGlvTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedGlvTokens_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedGlvTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortTokenAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  shortTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortTokenAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  shortTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortTokenAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  shortTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<TransactionWhereInput>;
  transaction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface GlvDepositActionsConnection {
  __typename?: 'GlvDepositActionsConnection';
  edges: Array<GlvDepositActionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface GlvWithdrawalAction {
  __typename?: 'GlvWithdrawalAction';
  account: Scalars['String']['output'];
  eventName: Scalars['String']['output'];
  glvAddress: Scalars['String']['output'];
  glvTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  marketAddress?: Maybe<Scalars['String']['output']>;
  receivedLongTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  receivedShortTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['Int']['output'];
  transaction: Transaction;
}

export interface GlvWithdrawalActionEdge {
  __typename?: 'GlvWithdrawalActionEdge';
  cursor: Scalars['String']['output'];
  node: GlvWithdrawalAction;
}

export enum GlvWithdrawalActionOrderByInput {
  account_ASC = 'account_ASC',
  account_ASC_NULLS_FIRST = 'account_ASC_NULLS_FIRST',
  account_ASC_NULLS_LAST = 'account_ASC_NULLS_LAST',
  account_DESC = 'account_DESC',
  account_DESC_NULLS_FIRST = 'account_DESC_NULLS_FIRST',
  account_DESC_NULLS_LAST = 'account_DESC_NULLS_LAST',
  eventName_ASC = 'eventName_ASC',
  eventName_ASC_NULLS_FIRST = 'eventName_ASC_NULLS_FIRST',
  eventName_ASC_NULLS_LAST = 'eventName_ASC_NULLS_LAST',
  eventName_DESC = 'eventName_DESC',
  eventName_DESC_NULLS_FIRST = 'eventName_DESC_NULLS_FIRST',
  eventName_DESC_NULLS_LAST = 'eventName_DESC_NULLS_LAST',
  glvAddress_ASC = 'glvAddress_ASC',
  glvAddress_ASC_NULLS_FIRST = 'glvAddress_ASC_NULLS_FIRST',
  glvAddress_ASC_NULLS_LAST = 'glvAddress_ASC_NULLS_LAST',
  glvAddress_DESC = 'glvAddress_DESC',
  glvAddress_DESC_NULLS_FIRST = 'glvAddress_DESC_NULLS_FIRST',
  glvAddress_DESC_NULLS_LAST = 'glvAddress_DESC_NULLS_LAST',
  glvTokenAmount_ASC = 'glvTokenAmount_ASC',
  glvTokenAmount_ASC_NULLS_FIRST = 'glvTokenAmount_ASC_NULLS_FIRST',
  glvTokenAmount_ASC_NULLS_LAST = 'glvTokenAmount_ASC_NULLS_LAST',
  glvTokenAmount_DESC = 'glvTokenAmount_DESC',
  glvTokenAmount_DESC_NULLS_FIRST = 'glvTokenAmount_DESC_NULLS_FIRST',
  glvTokenAmount_DESC_NULLS_LAST = 'glvTokenAmount_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  key_ASC = 'key_ASC',
  key_ASC_NULLS_FIRST = 'key_ASC_NULLS_FIRST',
  key_ASC_NULLS_LAST = 'key_ASC_NULLS_LAST',
  key_DESC = 'key_DESC',
  key_DESC_NULLS_FIRST = 'key_DESC_NULLS_FIRST',
  key_DESC_NULLS_LAST = 'key_DESC_NULLS_LAST',
  marketAddress_ASC = 'marketAddress_ASC',
  marketAddress_ASC_NULLS_FIRST = 'marketAddress_ASC_NULLS_FIRST',
  marketAddress_ASC_NULLS_LAST = 'marketAddress_ASC_NULLS_LAST',
  marketAddress_DESC = 'marketAddress_DESC',
  marketAddress_DESC_NULLS_FIRST = 'marketAddress_DESC_NULLS_FIRST',
  marketAddress_DESC_NULLS_LAST = 'marketAddress_DESC_NULLS_LAST',
  receivedLongTokenAmount_ASC = 'receivedLongTokenAmount_ASC',
  receivedLongTokenAmount_ASC_NULLS_FIRST = 'receivedLongTokenAmount_ASC_NULLS_FIRST',
  receivedLongTokenAmount_ASC_NULLS_LAST = 'receivedLongTokenAmount_ASC_NULLS_LAST',
  receivedLongTokenAmount_DESC = 'receivedLongTokenAmount_DESC',
  receivedLongTokenAmount_DESC_NULLS_FIRST = 'receivedLongTokenAmount_DESC_NULLS_FIRST',
  receivedLongTokenAmount_DESC_NULLS_LAST = 'receivedLongTokenAmount_DESC_NULLS_LAST',
  receivedShortTokenAmount_ASC = 'receivedShortTokenAmount_ASC',
  receivedShortTokenAmount_ASC_NULLS_FIRST = 'receivedShortTokenAmount_ASC_NULLS_FIRST',
  receivedShortTokenAmount_ASC_NULLS_LAST = 'receivedShortTokenAmount_ASC_NULLS_LAST',
  receivedShortTokenAmount_DESC = 'receivedShortTokenAmount_DESC',
  receivedShortTokenAmount_DESC_NULLS_FIRST = 'receivedShortTokenAmount_DESC_NULLS_FIRST',
  receivedShortTokenAmount_DESC_NULLS_LAST = 'receivedShortTokenAmount_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  transaction_blockNumber_ASC = 'transaction_blockNumber_ASC',
  transaction_blockNumber_ASC_NULLS_FIRST = 'transaction_blockNumber_ASC_NULLS_FIRST',
  transaction_blockNumber_ASC_NULLS_LAST = 'transaction_blockNumber_ASC_NULLS_LAST',
  transaction_blockNumber_DESC = 'transaction_blockNumber_DESC',
  transaction_blockNumber_DESC_NULLS_FIRST = 'transaction_blockNumber_DESC_NULLS_FIRST',
  transaction_blockNumber_DESC_NULLS_LAST = 'transaction_blockNumber_DESC_NULLS_LAST',
  transaction_hash_ASC = 'transaction_hash_ASC',
  transaction_hash_ASC_NULLS_FIRST = 'transaction_hash_ASC_NULLS_FIRST',
  transaction_hash_ASC_NULLS_LAST = 'transaction_hash_ASC_NULLS_LAST',
  transaction_hash_DESC = 'transaction_hash_DESC',
  transaction_hash_DESC_NULLS_FIRST = 'transaction_hash_DESC_NULLS_FIRST',
  transaction_hash_DESC_NULLS_LAST = 'transaction_hash_DESC_NULLS_LAST',
  transaction_id_ASC = 'transaction_id_ASC',
  transaction_id_ASC_NULLS_FIRST = 'transaction_id_ASC_NULLS_FIRST',
  transaction_id_ASC_NULLS_LAST = 'transaction_id_ASC_NULLS_LAST',
  transaction_id_DESC = 'transaction_id_DESC',
  transaction_id_DESC_NULLS_FIRST = 'transaction_id_DESC_NULLS_FIRST',
  transaction_id_DESC_NULLS_LAST = 'transaction_id_DESC_NULLS_LAST',
  transaction_timestamp_ASC = 'transaction_timestamp_ASC',
  transaction_timestamp_ASC_NULLS_FIRST = 'transaction_timestamp_ASC_NULLS_FIRST',
  transaction_timestamp_ASC_NULLS_LAST = 'transaction_timestamp_ASC_NULLS_LAST',
  transaction_timestamp_DESC = 'transaction_timestamp_DESC',
  transaction_timestamp_DESC_NULLS_FIRST = 'transaction_timestamp_DESC_NULLS_FIRST',
  transaction_timestamp_DESC_NULLS_LAST = 'transaction_timestamp_DESC_NULLS_LAST'
}

export interface GlvWithdrawalActionWhereInput {
  AND?: InputMaybe<Array<GlvWithdrawalActionWhereInput>>;
  OR?: InputMaybe<Array<GlvWithdrawalActionWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_gt?: InputMaybe<Scalars['String']['input']>;
  eventName_gte?: InputMaybe<Scalars['String']['input']>;
  eventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  eventName_lt?: InputMaybe<Scalars['String']['input']>;
  eventName_lte?: InputMaybe<Scalars['String']['input']>;
  eventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_not_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_startsWith?: InputMaybe<Scalars['String']['input']>;
  glvAddress_contains?: InputMaybe<Scalars['String']['input']>;
  glvAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  glvAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  glvAddress_eq?: InputMaybe<Scalars['String']['input']>;
  glvAddress_gt?: InputMaybe<Scalars['String']['input']>;
  glvAddress_gte?: InputMaybe<Scalars['String']['input']>;
  glvAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  glvAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  glvAddress_lt?: InputMaybe<Scalars['String']['input']>;
  glvAddress_lte?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  glvAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  glvAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  glvAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  glvTokenAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  glvTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  glvTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  glvTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  glvTokenAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  glvTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  glvTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  glvTokenAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  glvTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  key_endsWith?: InputMaybe<Scalars['String']['input']>;
  key_eq?: InputMaybe<Scalars['String']['input']>;
  key_gt?: InputMaybe<Scalars['String']['input']>;
  key_gte?: InputMaybe<Scalars['String']['input']>;
  key_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  key_lt?: InputMaybe<Scalars['String']['input']>;
  key_lte?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  key_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  key_not_eq?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  key_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketAddress_lt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_lte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  receivedLongTokenAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receivedLongTokenAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  receivedLongTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receivedShortTokenAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receivedShortTokenAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  receivedShortTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<TransactionWhereInput>;
  transaction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface GlvWithdrawalActionsConnection {
  __typename?: 'GlvWithdrawalActionsConnection';
  edges: Array<GlvWithdrawalActionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface MarketInfo {
  __typename?: 'MarketInfo';
  atomicSwapFeeFactor: Scalars['BigInt']['output'];
  borrowingFactorPerSecondForLongs: Scalars['BigInt']['output'];
  borrowingFactorPerSecondForShorts: Scalars['BigInt']['output'];
  createdAt: Scalars['Int']['output'];
  fundingDecreaseFactorPerSecond: Scalars['BigInt']['output'];
  fundingExponentFactor: Scalars['BigInt']['output'];
  fundingFactor: Scalars['BigInt']['output'];
  fundingFactorPerSecond?: Maybe<Scalars['BigInt']['output']>;
  fundingIncreaseFactorPerSecond: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  indexTokenAddress: Scalars['String']['output'];
  isDisabled: Scalars['Boolean']['output'];
  lentPositionImpactPoolAmount?: Maybe<Scalars['BigInt']['output']>;
  longOpenInterestInTokens: Scalars['BigInt']['output'];
  longOpenInterestUsd: Scalars['BigInt']['output'];
  longPoolAmount: Scalars['BigInt']['output'];
  longTokenAddress: Scalars['String']['output'];
  longsPayShorts?: Maybe<Scalars['Boolean']['output']>;
  marketTokenAddress: Scalars['String']['output'];
  maxFundingFactorPerSecond: Scalars['BigInt']['output'];
  maxLendableImpactFactor?: Maybe<Scalars['BigInt']['output']>;
  maxLendableImpactFactorForWithdrawals?: Maybe<Scalars['BigInt']['output']>;
  maxLendableImpactUsd?: Maybe<Scalars['BigInt']['output']>;
  maxLongPoolAmount: Scalars['BigInt']['output'];
  maxLongPoolUsdForDeposit: Scalars['BigInt']['output'];
  maxOpenInterestLong: Scalars['BigInt']['output'];
  maxOpenInterestShort: Scalars['BigInt']['output'];
  maxPnlFactorForTradersLong: Scalars['BigInt']['output'];
  maxPnlFactorForTradersShort: Scalars['BigInt']['output'];
  maxPositionImpactFactorForLiquidations?: Maybe<Scalars['BigInt']['output']>;
  maxPositionImpactFactorNegative?: Maybe<Scalars['BigInt']['output']>;
  maxPositionImpactFactorPositive?: Maybe<Scalars['BigInt']['output']>;
  maxShortPoolAmount: Scalars['BigInt']['output'];
  maxShortPoolUsdForDeposit: Scalars['BigInt']['output'];
  minCollateralFactor: Scalars['BigInt']['output'];
  minCollateralFactorForOpenInterestLong: Scalars['BigInt']['output'];
  minCollateralFactorForOpenInterestShort: Scalars['BigInt']['output'];
  minFundingFactorPerSecond: Scalars['BigInt']['output'];
  minPositionImpactPoolAmount: Scalars['BigInt']['output'];
  openInterestReserveFactorLong: Scalars['BigInt']['output'];
  openInterestReserveFactorShort: Scalars['BigInt']['output'];
  poolValueMax: Scalars['BigInt']['output'];
  poolValueMin: Scalars['BigInt']['output'];
  positionFeeFactorForNegativeImpact: Scalars['BigInt']['output'];
  positionFeeFactorForPositiveImpact: Scalars['BigInt']['output'];
  positionImpactExponentFactor?: Maybe<Scalars['BigInt']['output']>;
  positionImpactFactorNegative?: Maybe<Scalars['BigInt']['output']>;
  positionImpactFactorPositive?: Maybe<Scalars['BigInt']['output']>;
  positionImpactPoolAmount: Scalars['BigInt']['output'];
  positionImpactPoolDistributionRate: Scalars['BigInt']['output'];
  reserveFactorLong: Scalars['BigInt']['output'];
  reserveFactorShort: Scalars['BigInt']['output'];
  shortOpenInterestInTokens: Scalars['BigInt']['output'];
  shortOpenInterestUsd: Scalars['BigInt']['output'];
  shortPoolAmount: Scalars['BigInt']['output'];
  shortTokenAddress: Scalars['String']['output'];
  swapFeeFactorForNegativeImpact: Scalars['BigInt']['output'];
  swapFeeFactorForPositiveImpact: Scalars['BigInt']['output'];
  swapImpactExponentFactor?: Maybe<Scalars['BigInt']['output']>;
  swapImpactFactorNegative?: Maybe<Scalars['BigInt']['output']>;
  swapImpactFactorPositive?: Maybe<Scalars['BigInt']['output']>;
  swapImpactPoolAmountLong: Scalars['BigInt']['output'];
  swapImpactPoolAmountShort: Scalars['BigInt']['output'];
  thresholdForDecreaseFunding: Scalars['BigInt']['output'];
  thresholdForStableFunding: Scalars['BigInt']['output'];
  totalBorrowingFees: Scalars['BigInt']['output'];
  updatedAt: Scalars['Int']['output'];
  virtualInventoryForPositions?: Maybe<Scalars['BigInt']['output']>;
  virtualLongTokenId?: Maybe<Scalars['String']['output']>;
  virtualMarketId?: Maybe<Scalars['String']['output']>;
  virtualPoolAmountForLongToken?: Maybe<Scalars['BigInt']['output']>;
  virtualPoolAmountForShortToken?: Maybe<Scalars['BigInt']['output']>;
  virtualShortTokenId?: Maybe<Scalars['String']['output']>;
}

export interface MarketInfoEdge {
  __typename?: 'MarketInfoEdge';
  cursor: Scalars['String']['output'];
  node: MarketInfo;
}

export enum MarketInfoOrderByInput {
  atomicSwapFeeFactor_ASC = 'atomicSwapFeeFactor_ASC',
  atomicSwapFeeFactor_ASC_NULLS_FIRST = 'atomicSwapFeeFactor_ASC_NULLS_FIRST',
  atomicSwapFeeFactor_ASC_NULLS_LAST = 'atomicSwapFeeFactor_ASC_NULLS_LAST',
  atomicSwapFeeFactor_DESC = 'atomicSwapFeeFactor_DESC',
  atomicSwapFeeFactor_DESC_NULLS_FIRST = 'atomicSwapFeeFactor_DESC_NULLS_FIRST',
  atomicSwapFeeFactor_DESC_NULLS_LAST = 'atomicSwapFeeFactor_DESC_NULLS_LAST',
  borrowingFactorPerSecondForLongs_ASC = 'borrowingFactorPerSecondForLongs_ASC',
  borrowingFactorPerSecondForLongs_ASC_NULLS_FIRST = 'borrowingFactorPerSecondForLongs_ASC_NULLS_FIRST',
  borrowingFactorPerSecondForLongs_ASC_NULLS_LAST = 'borrowingFactorPerSecondForLongs_ASC_NULLS_LAST',
  borrowingFactorPerSecondForLongs_DESC = 'borrowingFactorPerSecondForLongs_DESC',
  borrowingFactorPerSecondForLongs_DESC_NULLS_FIRST = 'borrowingFactorPerSecondForLongs_DESC_NULLS_FIRST',
  borrowingFactorPerSecondForLongs_DESC_NULLS_LAST = 'borrowingFactorPerSecondForLongs_DESC_NULLS_LAST',
  borrowingFactorPerSecondForShorts_ASC = 'borrowingFactorPerSecondForShorts_ASC',
  borrowingFactorPerSecondForShorts_ASC_NULLS_FIRST = 'borrowingFactorPerSecondForShorts_ASC_NULLS_FIRST',
  borrowingFactorPerSecondForShorts_ASC_NULLS_LAST = 'borrowingFactorPerSecondForShorts_ASC_NULLS_LAST',
  borrowingFactorPerSecondForShorts_DESC = 'borrowingFactorPerSecondForShorts_DESC',
  borrowingFactorPerSecondForShorts_DESC_NULLS_FIRST = 'borrowingFactorPerSecondForShorts_DESC_NULLS_FIRST',
  borrowingFactorPerSecondForShorts_DESC_NULLS_LAST = 'borrowingFactorPerSecondForShorts_DESC_NULLS_LAST',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_ASC_NULLS_FIRST = 'createdAt_ASC_NULLS_FIRST',
  createdAt_ASC_NULLS_LAST = 'createdAt_ASC_NULLS_LAST',
  createdAt_DESC = 'createdAt_DESC',
  createdAt_DESC_NULLS_FIRST = 'createdAt_DESC_NULLS_FIRST',
  createdAt_DESC_NULLS_LAST = 'createdAt_DESC_NULLS_LAST',
  fundingDecreaseFactorPerSecond_ASC = 'fundingDecreaseFactorPerSecond_ASC',
  fundingDecreaseFactorPerSecond_ASC_NULLS_FIRST = 'fundingDecreaseFactorPerSecond_ASC_NULLS_FIRST',
  fundingDecreaseFactorPerSecond_ASC_NULLS_LAST = 'fundingDecreaseFactorPerSecond_ASC_NULLS_LAST',
  fundingDecreaseFactorPerSecond_DESC = 'fundingDecreaseFactorPerSecond_DESC',
  fundingDecreaseFactorPerSecond_DESC_NULLS_FIRST = 'fundingDecreaseFactorPerSecond_DESC_NULLS_FIRST',
  fundingDecreaseFactorPerSecond_DESC_NULLS_LAST = 'fundingDecreaseFactorPerSecond_DESC_NULLS_LAST',
  fundingExponentFactor_ASC = 'fundingExponentFactor_ASC',
  fundingExponentFactor_ASC_NULLS_FIRST = 'fundingExponentFactor_ASC_NULLS_FIRST',
  fundingExponentFactor_ASC_NULLS_LAST = 'fundingExponentFactor_ASC_NULLS_LAST',
  fundingExponentFactor_DESC = 'fundingExponentFactor_DESC',
  fundingExponentFactor_DESC_NULLS_FIRST = 'fundingExponentFactor_DESC_NULLS_FIRST',
  fundingExponentFactor_DESC_NULLS_LAST = 'fundingExponentFactor_DESC_NULLS_LAST',
  fundingFactorPerSecond_ASC = 'fundingFactorPerSecond_ASC',
  fundingFactorPerSecond_ASC_NULLS_FIRST = 'fundingFactorPerSecond_ASC_NULLS_FIRST',
  fundingFactorPerSecond_ASC_NULLS_LAST = 'fundingFactorPerSecond_ASC_NULLS_LAST',
  fundingFactorPerSecond_DESC = 'fundingFactorPerSecond_DESC',
  fundingFactorPerSecond_DESC_NULLS_FIRST = 'fundingFactorPerSecond_DESC_NULLS_FIRST',
  fundingFactorPerSecond_DESC_NULLS_LAST = 'fundingFactorPerSecond_DESC_NULLS_LAST',
  fundingFactor_ASC = 'fundingFactor_ASC',
  fundingFactor_ASC_NULLS_FIRST = 'fundingFactor_ASC_NULLS_FIRST',
  fundingFactor_ASC_NULLS_LAST = 'fundingFactor_ASC_NULLS_LAST',
  fundingFactor_DESC = 'fundingFactor_DESC',
  fundingFactor_DESC_NULLS_FIRST = 'fundingFactor_DESC_NULLS_FIRST',
  fundingFactor_DESC_NULLS_LAST = 'fundingFactor_DESC_NULLS_LAST',
  fundingIncreaseFactorPerSecond_ASC = 'fundingIncreaseFactorPerSecond_ASC',
  fundingIncreaseFactorPerSecond_ASC_NULLS_FIRST = 'fundingIncreaseFactorPerSecond_ASC_NULLS_FIRST',
  fundingIncreaseFactorPerSecond_ASC_NULLS_LAST = 'fundingIncreaseFactorPerSecond_ASC_NULLS_LAST',
  fundingIncreaseFactorPerSecond_DESC = 'fundingIncreaseFactorPerSecond_DESC',
  fundingIncreaseFactorPerSecond_DESC_NULLS_FIRST = 'fundingIncreaseFactorPerSecond_DESC_NULLS_FIRST',
  fundingIncreaseFactorPerSecond_DESC_NULLS_LAST = 'fundingIncreaseFactorPerSecond_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  indexTokenAddress_ASC = 'indexTokenAddress_ASC',
  indexTokenAddress_ASC_NULLS_FIRST = 'indexTokenAddress_ASC_NULLS_FIRST',
  indexTokenAddress_ASC_NULLS_LAST = 'indexTokenAddress_ASC_NULLS_LAST',
  indexTokenAddress_DESC = 'indexTokenAddress_DESC',
  indexTokenAddress_DESC_NULLS_FIRST = 'indexTokenAddress_DESC_NULLS_FIRST',
  indexTokenAddress_DESC_NULLS_LAST = 'indexTokenAddress_DESC_NULLS_LAST',
  isDisabled_ASC = 'isDisabled_ASC',
  isDisabled_ASC_NULLS_FIRST = 'isDisabled_ASC_NULLS_FIRST',
  isDisabled_ASC_NULLS_LAST = 'isDisabled_ASC_NULLS_LAST',
  isDisabled_DESC = 'isDisabled_DESC',
  isDisabled_DESC_NULLS_FIRST = 'isDisabled_DESC_NULLS_FIRST',
  isDisabled_DESC_NULLS_LAST = 'isDisabled_DESC_NULLS_LAST',
  lentPositionImpactPoolAmount_ASC = 'lentPositionImpactPoolAmount_ASC',
  lentPositionImpactPoolAmount_ASC_NULLS_FIRST = 'lentPositionImpactPoolAmount_ASC_NULLS_FIRST',
  lentPositionImpactPoolAmount_ASC_NULLS_LAST = 'lentPositionImpactPoolAmount_ASC_NULLS_LAST',
  lentPositionImpactPoolAmount_DESC = 'lentPositionImpactPoolAmount_DESC',
  lentPositionImpactPoolAmount_DESC_NULLS_FIRST = 'lentPositionImpactPoolAmount_DESC_NULLS_FIRST',
  lentPositionImpactPoolAmount_DESC_NULLS_LAST = 'lentPositionImpactPoolAmount_DESC_NULLS_LAST',
  longOpenInterestInTokens_ASC = 'longOpenInterestInTokens_ASC',
  longOpenInterestInTokens_ASC_NULLS_FIRST = 'longOpenInterestInTokens_ASC_NULLS_FIRST',
  longOpenInterestInTokens_ASC_NULLS_LAST = 'longOpenInterestInTokens_ASC_NULLS_LAST',
  longOpenInterestInTokens_DESC = 'longOpenInterestInTokens_DESC',
  longOpenInterestInTokens_DESC_NULLS_FIRST = 'longOpenInterestInTokens_DESC_NULLS_FIRST',
  longOpenInterestInTokens_DESC_NULLS_LAST = 'longOpenInterestInTokens_DESC_NULLS_LAST',
  longOpenInterestUsd_ASC = 'longOpenInterestUsd_ASC',
  longOpenInterestUsd_ASC_NULLS_FIRST = 'longOpenInterestUsd_ASC_NULLS_FIRST',
  longOpenInterestUsd_ASC_NULLS_LAST = 'longOpenInterestUsd_ASC_NULLS_LAST',
  longOpenInterestUsd_DESC = 'longOpenInterestUsd_DESC',
  longOpenInterestUsd_DESC_NULLS_FIRST = 'longOpenInterestUsd_DESC_NULLS_FIRST',
  longOpenInterestUsd_DESC_NULLS_LAST = 'longOpenInterestUsd_DESC_NULLS_LAST',
  longPoolAmount_ASC = 'longPoolAmount_ASC',
  longPoolAmount_ASC_NULLS_FIRST = 'longPoolAmount_ASC_NULLS_FIRST',
  longPoolAmount_ASC_NULLS_LAST = 'longPoolAmount_ASC_NULLS_LAST',
  longPoolAmount_DESC = 'longPoolAmount_DESC',
  longPoolAmount_DESC_NULLS_FIRST = 'longPoolAmount_DESC_NULLS_FIRST',
  longPoolAmount_DESC_NULLS_LAST = 'longPoolAmount_DESC_NULLS_LAST',
  longTokenAddress_ASC = 'longTokenAddress_ASC',
  longTokenAddress_ASC_NULLS_FIRST = 'longTokenAddress_ASC_NULLS_FIRST',
  longTokenAddress_ASC_NULLS_LAST = 'longTokenAddress_ASC_NULLS_LAST',
  longTokenAddress_DESC = 'longTokenAddress_DESC',
  longTokenAddress_DESC_NULLS_FIRST = 'longTokenAddress_DESC_NULLS_FIRST',
  longTokenAddress_DESC_NULLS_LAST = 'longTokenAddress_DESC_NULLS_LAST',
  longsPayShorts_ASC = 'longsPayShorts_ASC',
  longsPayShorts_ASC_NULLS_FIRST = 'longsPayShorts_ASC_NULLS_FIRST',
  longsPayShorts_ASC_NULLS_LAST = 'longsPayShorts_ASC_NULLS_LAST',
  longsPayShorts_DESC = 'longsPayShorts_DESC',
  longsPayShorts_DESC_NULLS_FIRST = 'longsPayShorts_DESC_NULLS_FIRST',
  longsPayShorts_DESC_NULLS_LAST = 'longsPayShorts_DESC_NULLS_LAST',
  marketTokenAddress_ASC = 'marketTokenAddress_ASC',
  marketTokenAddress_ASC_NULLS_FIRST = 'marketTokenAddress_ASC_NULLS_FIRST',
  marketTokenAddress_ASC_NULLS_LAST = 'marketTokenAddress_ASC_NULLS_LAST',
  marketTokenAddress_DESC = 'marketTokenAddress_DESC',
  marketTokenAddress_DESC_NULLS_FIRST = 'marketTokenAddress_DESC_NULLS_FIRST',
  marketTokenAddress_DESC_NULLS_LAST = 'marketTokenAddress_DESC_NULLS_LAST',
  maxFundingFactorPerSecond_ASC = 'maxFundingFactorPerSecond_ASC',
  maxFundingFactorPerSecond_ASC_NULLS_FIRST = 'maxFundingFactorPerSecond_ASC_NULLS_FIRST',
  maxFundingFactorPerSecond_ASC_NULLS_LAST = 'maxFundingFactorPerSecond_ASC_NULLS_LAST',
  maxFundingFactorPerSecond_DESC = 'maxFundingFactorPerSecond_DESC',
  maxFundingFactorPerSecond_DESC_NULLS_FIRST = 'maxFundingFactorPerSecond_DESC_NULLS_FIRST',
  maxFundingFactorPerSecond_DESC_NULLS_LAST = 'maxFundingFactorPerSecond_DESC_NULLS_LAST',
  maxLendableImpactFactorForWithdrawals_ASC = 'maxLendableImpactFactorForWithdrawals_ASC',
  maxLendableImpactFactorForWithdrawals_ASC_NULLS_FIRST = 'maxLendableImpactFactorForWithdrawals_ASC_NULLS_FIRST',
  maxLendableImpactFactorForWithdrawals_ASC_NULLS_LAST = 'maxLendableImpactFactorForWithdrawals_ASC_NULLS_LAST',
  maxLendableImpactFactorForWithdrawals_DESC = 'maxLendableImpactFactorForWithdrawals_DESC',
  maxLendableImpactFactorForWithdrawals_DESC_NULLS_FIRST = 'maxLendableImpactFactorForWithdrawals_DESC_NULLS_FIRST',
  maxLendableImpactFactorForWithdrawals_DESC_NULLS_LAST = 'maxLendableImpactFactorForWithdrawals_DESC_NULLS_LAST',
  maxLendableImpactFactor_ASC = 'maxLendableImpactFactor_ASC',
  maxLendableImpactFactor_ASC_NULLS_FIRST = 'maxLendableImpactFactor_ASC_NULLS_FIRST',
  maxLendableImpactFactor_ASC_NULLS_LAST = 'maxLendableImpactFactor_ASC_NULLS_LAST',
  maxLendableImpactFactor_DESC = 'maxLendableImpactFactor_DESC',
  maxLendableImpactFactor_DESC_NULLS_FIRST = 'maxLendableImpactFactor_DESC_NULLS_FIRST',
  maxLendableImpactFactor_DESC_NULLS_LAST = 'maxLendableImpactFactor_DESC_NULLS_LAST',
  maxLendableImpactUsd_ASC = 'maxLendableImpactUsd_ASC',
  maxLendableImpactUsd_ASC_NULLS_FIRST = 'maxLendableImpactUsd_ASC_NULLS_FIRST',
  maxLendableImpactUsd_ASC_NULLS_LAST = 'maxLendableImpactUsd_ASC_NULLS_LAST',
  maxLendableImpactUsd_DESC = 'maxLendableImpactUsd_DESC',
  maxLendableImpactUsd_DESC_NULLS_FIRST = 'maxLendableImpactUsd_DESC_NULLS_FIRST',
  maxLendableImpactUsd_DESC_NULLS_LAST = 'maxLendableImpactUsd_DESC_NULLS_LAST',
  maxLongPoolAmount_ASC = 'maxLongPoolAmount_ASC',
  maxLongPoolAmount_ASC_NULLS_FIRST = 'maxLongPoolAmount_ASC_NULLS_FIRST',
  maxLongPoolAmount_ASC_NULLS_LAST = 'maxLongPoolAmount_ASC_NULLS_LAST',
  maxLongPoolAmount_DESC = 'maxLongPoolAmount_DESC',
  maxLongPoolAmount_DESC_NULLS_FIRST = 'maxLongPoolAmount_DESC_NULLS_FIRST',
  maxLongPoolAmount_DESC_NULLS_LAST = 'maxLongPoolAmount_DESC_NULLS_LAST',
  maxLongPoolUsdForDeposit_ASC = 'maxLongPoolUsdForDeposit_ASC',
  maxLongPoolUsdForDeposit_ASC_NULLS_FIRST = 'maxLongPoolUsdForDeposit_ASC_NULLS_FIRST',
  maxLongPoolUsdForDeposit_ASC_NULLS_LAST = 'maxLongPoolUsdForDeposit_ASC_NULLS_LAST',
  maxLongPoolUsdForDeposit_DESC = 'maxLongPoolUsdForDeposit_DESC',
  maxLongPoolUsdForDeposit_DESC_NULLS_FIRST = 'maxLongPoolUsdForDeposit_DESC_NULLS_FIRST',
  maxLongPoolUsdForDeposit_DESC_NULLS_LAST = 'maxLongPoolUsdForDeposit_DESC_NULLS_LAST',
  maxOpenInterestLong_ASC = 'maxOpenInterestLong_ASC',
  maxOpenInterestLong_ASC_NULLS_FIRST = 'maxOpenInterestLong_ASC_NULLS_FIRST',
  maxOpenInterestLong_ASC_NULLS_LAST = 'maxOpenInterestLong_ASC_NULLS_LAST',
  maxOpenInterestLong_DESC = 'maxOpenInterestLong_DESC',
  maxOpenInterestLong_DESC_NULLS_FIRST = 'maxOpenInterestLong_DESC_NULLS_FIRST',
  maxOpenInterestLong_DESC_NULLS_LAST = 'maxOpenInterestLong_DESC_NULLS_LAST',
  maxOpenInterestShort_ASC = 'maxOpenInterestShort_ASC',
  maxOpenInterestShort_ASC_NULLS_FIRST = 'maxOpenInterestShort_ASC_NULLS_FIRST',
  maxOpenInterestShort_ASC_NULLS_LAST = 'maxOpenInterestShort_ASC_NULLS_LAST',
  maxOpenInterestShort_DESC = 'maxOpenInterestShort_DESC',
  maxOpenInterestShort_DESC_NULLS_FIRST = 'maxOpenInterestShort_DESC_NULLS_FIRST',
  maxOpenInterestShort_DESC_NULLS_LAST = 'maxOpenInterestShort_DESC_NULLS_LAST',
  maxPnlFactorForTradersLong_ASC = 'maxPnlFactorForTradersLong_ASC',
  maxPnlFactorForTradersLong_ASC_NULLS_FIRST = 'maxPnlFactorForTradersLong_ASC_NULLS_FIRST',
  maxPnlFactorForTradersLong_ASC_NULLS_LAST = 'maxPnlFactorForTradersLong_ASC_NULLS_LAST',
  maxPnlFactorForTradersLong_DESC = 'maxPnlFactorForTradersLong_DESC',
  maxPnlFactorForTradersLong_DESC_NULLS_FIRST = 'maxPnlFactorForTradersLong_DESC_NULLS_FIRST',
  maxPnlFactorForTradersLong_DESC_NULLS_LAST = 'maxPnlFactorForTradersLong_DESC_NULLS_LAST',
  maxPnlFactorForTradersShort_ASC = 'maxPnlFactorForTradersShort_ASC',
  maxPnlFactorForTradersShort_ASC_NULLS_FIRST = 'maxPnlFactorForTradersShort_ASC_NULLS_FIRST',
  maxPnlFactorForTradersShort_ASC_NULLS_LAST = 'maxPnlFactorForTradersShort_ASC_NULLS_LAST',
  maxPnlFactorForTradersShort_DESC = 'maxPnlFactorForTradersShort_DESC',
  maxPnlFactorForTradersShort_DESC_NULLS_FIRST = 'maxPnlFactorForTradersShort_DESC_NULLS_FIRST',
  maxPnlFactorForTradersShort_DESC_NULLS_LAST = 'maxPnlFactorForTradersShort_DESC_NULLS_LAST',
  maxPositionImpactFactorForLiquidations_ASC = 'maxPositionImpactFactorForLiquidations_ASC',
  maxPositionImpactFactorForLiquidations_ASC_NULLS_FIRST = 'maxPositionImpactFactorForLiquidations_ASC_NULLS_FIRST',
  maxPositionImpactFactorForLiquidations_ASC_NULLS_LAST = 'maxPositionImpactFactorForLiquidations_ASC_NULLS_LAST',
  maxPositionImpactFactorForLiquidations_DESC = 'maxPositionImpactFactorForLiquidations_DESC',
  maxPositionImpactFactorForLiquidations_DESC_NULLS_FIRST = 'maxPositionImpactFactorForLiquidations_DESC_NULLS_FIRST',
  maxPositionImpactFactorForLiquidations_DESC_NULLS_LAST = 'maxPositionImpactFactorForLiquidations_DESC_NULLS_LAST',
  maxPositionImpactFactorNegative_ASC = 'maxPositionImpactFactorNegative_ASC',
  maxPositionImpactFactorNegative_ASC_NULLS_FIRST = 'maxPositionImpactFactorNegative_ASC_NULLS_FIRST',
  maxPositionImpactFactorNegative_ASC_NULLS_LAST = 'maxPositionImpactFactorNegative_ASC_NULLS_LAST',
  maxPositionImpactFactorNegative_DESC = 'maxPositionImpactFactorNegative_DESC',
  maxPositionImpactFactorNegative_DESC_NULLS_FIRST = 'maxPositionImpactFactorNegative_DESC_NULLS_FIRST',
  maxPositionImpactFactorNegative_DESC_NULLS_LAST = 'maxPositionImpactFactorNegative_DESC_NULLS_LAST',
  maxPositionImpactFactorPositive_ASC = 'maxPositionImpactFactorPositive_ASC',
  maxPositionImpactFactorPositive_ASC_NULLS_FIRST = 'maxPositionImpactFactorPositive_ASC_NULLS_FIRST',
  maxPositionImpactFactorPositive_ASC_NULLS_LAST = 'maxPositionImpactFactorPositive_ASC_NULLS_LAST',
  maxPositionImpactFactorPositive_DESC = 'maxPositionImpactFactorPositive_DESC',
  maxPositionImpactFactorPositive_DESC_NULLS_FIRST = 'maxPositionImpactFactorPositive_DESC_NULLS_FIRST',
  maxPositionImpactFactorPositive_DESC_NULLS_LAST = 'maxPositionImpactFactorPositive_DESC_NULLS_LAST',
  maxShortPoolAmount_ASC = 'maxShortPoolAmount_ASC',
  maxShortPoolAmount_ASC_NULLS_FIRST = 'maxShortPoolAmount_ASC_NULLS_FIRST',
  maxShortPoolAmount_ASC_NULLS_LAST = 'maxShortPoolAmount_ASC_NULLS_LAST',
  maxShortPoolAmount_DESC = 'maxShortPoolAmount_DESC',
  maxShortPoolAmount_DESC_NULLS_FIRST = 'maxShortPoolAmount_DESC_NULLS_FIRST',
  maxShortPoolAmount_DESC_NULLS_LAST = 'maxShortPoolAmount_DESC_NULLS_LAST',
  maxShortPoolUsdForDeposit_ASC = 'maxShortPoolUsdForDeposit_ASC',
  maxShortPoolUsdForDeposit_ASC_NULLS_FIRST = 'maxShortPoolUsdForDeposit_ASC_NULLS_FIRST',
  maxShortPoolUsdForDeposit_ASC_NULLS_LAST = 'maxShortPoolUsdForDeposit_ASC_NULLS_LAST',
  maxShortPoolUsdForDeposit_DESC = 'maxShortPoolUsdForDeposit_DESC',
  maxShortPoolUsdForDeposit_DESC_NULLS_FIRST = 'maxShortPoolUsdForDeposit_DESC_NULLS_FIRST',
  maxShortPoolUsdForDeposit_DESC_NULLS_LAST = 'maxShortPoolUsdForDeposit_DESC_NULLS_LAST',
  minCollateralFactorForOpenInterestLong_ASC = 'minCollateralFactorForOpenInterestLong_ASC',
  minCollateralFactorForOpenInterestLong_ASC_NULLS_FIRST = 'minCollateralFactorForOpenInterestLong_ASC_NULLS_FIRST',
  minCollateralFactorForOpenInterestLong_ASC_NULLS_LAST = 'minCollateralFactorForOpenInterestLong_ASC_NULLS_LAST',
  minCollateralFactorForOpenInterestLong_DESC = 'minCollateralFactorForOpenInterestLong_DESC',
  minCollateralFactorForOpenInterestLong_DESC_NULLS_FIRST = 'minCollateralFactorForOpenInterestLong_DESC_NULLS_FIRST',
  minCollateralFactorForOpenInterestLong_DESC_NULLS_LAST = 'minCollateralFactorForOpenInterestLong_DESC_NULLS_LAST',
  minCollateralFactorForOpenInterestShort_ASC = 'minCollateralFactorForOpenInterestShort_ASC',
  minCollateralFactorForOpenInterestShort_ASC_NULLS_FIRST = 'minCollateralFactorForOpenInterestShort_ASC_NULLS_FIRST',
  minCollateralFactorForOpenInterestShort_ASC_NULLS_LAST = 'minCollateralFactorForOpenInterestShort_ASC_NULLS_LAST',
  minCollateralFactorForOpenInterestShort_DESC = 'minCollateralFactorForOpenInterestShort_DESC',
  minCollateralFactorForOpenInterestShort_DESC_NULLS_FIRST = 'minCollateralFactorForOpenInterestShort_DESC_NULLS_FIRST',
  minCollateralFactorForOpenInterestShort_DESC_NULLS_LAST = 'minCollateralFactorForOpenInterestShort_DESC_NULLS_LAST',
  minCollateralFactor_ASC = 'minCollateralFactor_ASC',
  minCollateralFactor_ASC_NULLS_FIRST = 'minCollateralFactor_ASC_NULLS_FIRST',
  minCollateralFactor_ASC_NULLS_LAST = 'minCollateralFactor_ASC_NULLS_LAST',
  minCollateralFactor_DESC = 'minCollateralFactor_DESC',
  minCollateralFactor_DESC_NULLS_FIRST = 'minCollateralFactor_DESC_NULLS_FIRST',
  minCollateralFactor_DESC_NULLS_LAST = 'minCollateralFactor_DESC_NULLS_LAST',
  minFundingFactorPerSecond_ASC = 'minFundingFactorPerSecond_ASC',
  minFundingFactorPerSecond_ASC_NULLS_FIRST = 'minFundingFactorPerSecond_ASC_NULLS_FIRST',
  minFundingFactorPerSecond_ASC_NULLS_LAST = 'minFundingFactorPerSecond_ASC_NULLS_LAST',
  minFundingFactorPerSecond_DESC = 'minFundingFactorPerSecond_DESC',
  minFundingFactorPerSecond_DESC_NULLS_FIRST = 'minFundingFactorPerSecond_DESC_NULLS_FIRST',
  minFundingFactorPerSecond_DESC_NULLS_LAST = 'minFundingFactorPerSecond_DESC_NULLS_LAST',
  minPositionImpactPoolAmount_ASC = 'minPositionImpactPoolAmount_ASC',
  minPositionImpactPoolAmount_ASC_NULLS_FIRST = 'minPositionImpactPoolAmount_ASC_NULLS_FIRST',
  minPositionImpactPoolAmount_ASC_NULLS_LAST = 'minPositionImpactPoolAmount_ASC_NULLS_LAST',
  minPositionImpactPoolAmount_DESC = 'minPositionImpactPoolAmount_DESC',
  minPositionImpactPoolAmount_DESC_NULLS_FIRST = 'minPositionImpactPoolAmount_DESC_NULLS_FIRST',
  minPositionImpactPoolAmount_DESC_NULLS_LAST = 'minPositionImpactPoolAmount_DESC_NULLS_LAST',
  openInterestReserveFactorLong_ASC = 'openInterestReserveFactorLong_ASC',
  openInterestReserveFactorLong_ASC_NULLS_FIRST = 'openInterestReserveFactorLong_ASC_NULLS_FIRST',
  openInterestReserveFactorLong_ASC_NULLS_LAST = 'openInterestReserveFactorLong_ASC_NULLS_LAST',
  openInterestReserveFactorLong_DESC = 'openInterestReserveFactorLong_DESC',
  openInterestReserveFactorLong_DESC_NULLS_FIRST = 'openInterestReserveFactorLong_DESC_NULLS_FIRST',
  openInterestReserveFactorLong_DESC_NULLS_LAST = 'openInterestReserveFactorLong_DESC_NULLS_LAST',
  openInterestReserveFactorShort_ASC = 'openInterestReserveFactorShort_ASC',
  openInterestReserveFactorShort_ASC_NULLS_FIRST = 'openInterestReserveFactorShort_ASC_NULLS_FIRST',
  openInterestReserveFactorShort_ASC_NULLS_LAST = 'openInterestReserveFactorShort_ASC_NULLS_LAST',
  openInterestReserveFactorShort_DESC = 'openInterestReserveFactorShort_DESC',
  openInterestReserveFactorShort_DESC_NULLS_FIRST = 'openInterestReserveFactorShort_DESC_NULLS_FIRST',
  openInterestReserveFactorShort_DESC_NULLS_LAST = 'openInterestReserveFactorShort_DESC_NULLS_LAST',
  poolValueMax_ASC = 'poolValueMax_ASC',
  poolValueMax_ASC_NULLS_FIRST = 'poolValueMax_ASC_NULLS_FIRST',
  poolValueMax_ASC_NULLS_LAST = 'poolValueMax_ASC_NULLS_LAST',
  poolValueMax_DESC = 'poolValueMax_DESC',
  poolValueMax_DESC_NULLS_FIRST = 'poolValueMax_DESC_NULLS_FIRST',
  poolValueMax_DESC_NULLS_LAST = 'poolValueMax_DESC_NULLS_LAST',
  poolValueMin_ASC = 'poolValueMin_ASC',
  poolValueMin_ASC_NULLS_FIRST = 'poolValueMin_ASC_NULLS_FIRST',
  poolValueMin_ASC_NULLS_LAST = 'poolValueMin_ASC_NULLS_LAST',
  poolValueMin_DESC = 'poolValueMin_DESC',
  poolValueMin_DESC_NULLS_FIRST = 'poolValueMin_DESC_NULLS_FIRST',
  poolValueMin_DESC_NULLS_LAST = 'poolValueMin_DESC_NULLS_LAST',
  positionFeeFactorForNegativeImpact_ASC = 'positionFeeFactorForNegativeImpact_ASC',
  positionFeeFactorForNegativeImpact_ASC_NULLS_FIRST = 'positionFeeFactorForNegativeImpact_ASC_NULLS_FIRST',
  positionFeeFactorForNegativeImpact_ASC_NULLS_LAST = 'positionFeeFactorForNegativeImpact_ASC_NULLS_LAST',
  positionFeeFactorForNegativeImpact_DESC = 'positionFeeFactorForNegativeImpact_DESC',
  positionFeeFactorForNegativeImpact_DESC_NULLS_FIRST = 'positionFeeFactorForNegativeImpact_DESC_NULLS_FIRST',
  positionFeeFactorForNegativeImpact_DESC_NULLS_LAST = 'positionFeeFactorForNegativeImpact_DESC_NULLS_LAST',
  positionFeeFactorForPositiveImpact_ASC = 'positionFeeFactorForPositiveImpact_ASC',
  positionFeeFactorForPositiveImpact_ASC_NULLS_FIRST = 'positionFeeFactorForPositiveImpact_ASC_NULLS_FIRST',
  positionFeeFactorForPositiveImpact_ASC_NULLS_LAST = 'positionFeeFactorForPositiveImpact_ASC_NULLS_LAST',
  positionFeeFactorForPositiveImpact_DESC = 'positionFeeFactorForPositiveImpact_DESC',
  positionFeeFactorForPositiveImpact_DESC_NULLS_FIRST = 'positionFeeFactorForPositiveImpact_DESC_NULLS_FIRST',
  positionFeeFactorForPositiveImpact_DESC_NULLS_LAST = 'positionFeeFactorForPositiveImpact_DESC_NULLS_LAST',
  positionImpactExponentFactor_ASC = 'positionImpactExponentFactor_ASC',
  positionImpactExponentFactor_ASC_NULLS_FIRST = 'positionImpactExponentFactor_ASC_NULLS_FIRST',
  positionImpactExponentFactor_ASC_NULLS_LAST = 'positionImpactExponentFactor_ASC_NULLS_LAST',
  positionImpactExponentFactor_DESC = 'positionImpactExponentFactor_DESC',
  positionImpactExponentFactor_DESC_NULLS_FIRST = 'positionImpactExponentFactor_DESC_NULLS_FIRST',
  positionImpactExponentFactor_DESC_NULLS_LAST = 'positionImpactExponentFactor_DESC_NULLS_LAST',
  positionImpactFactorNegative_ASC = 'positionImpactFactorNegative_ASC',
  positionImpactFactorNegative_ASC_NULLS_FIRST = 'positionImpactFactorNegative_ASC_NULLS_FIRST',
  positionImpactFactorNegative_ASC_NULLS_LAST = 'positionImpactFactorNegative_ASC_NULLS_LAST',
  positionImpactFactorNegative_DESC = 'positionImpactFactorNegative_DESC',
  positionImpactFactorNegative_DESC_NULLS_FIRST = 'positionImpactFactorNegative_DESC_NULLS_FIRST',
  positionImpactFactorNegative_DESC_NULLS_LAST = 'positionImpactFactorNegative_DESC_NULLS_LAST',
  positionImpactFactorPositive_ASC = 'positionImpactFactorPositive_ASC',
  positionImpactFactorPositive_ASC_NULLS_FIRST = 'positionImpactFactorPositive_ASC_NULLS_FIRST',
  positionImpactFactorPositive_ASC_NULLS_LAST = 'positionImpactFactorPositive_ASC_NULLS_LAST',
  positionImpactFactorPositive_DESC = 'positionImpactFactorPositive_DESC',
  positionImpactFactorPositive_DESC_NULLS_FIRST = 'positionImpactFactorPositive_DESC_NULLS_FIRST',
  positionImpactFactorPositive_DESC_NULLS_LAST = 'positionImpactFactorPositive_DESC_NULLS_LAST',
  positionImpactPoolAmount_ASC = 'positionImpactPoolAmount_ASC',
  positionImpactPoolAmount_ASC_NULLS_FIRST = 'positionImpactPoolAmount_ASC_NULLS_FIRST',
  positionImpactPoolAmount_ASC_NULLS_LAST = 'positionImpactPoolAmount_ASC_NULLS_LAST',
  positionImpactPoolAmount_DESC = 'positionImpactPoolAmount_DESC',
  positionImpactPoolAmount_DESC_NULLS_FIRST = 'positionImpactPoolAmount_DESC_NULLS_FIRST',
  positionImpactPoolAmount_DESC_NULLS_LAST = 'positionImpactPoolAmount_DESC_NULLS_LAST',
  positionImpactPoolDistributionRate_ASC = 'positionImpactPoolDistributionRate_ASC',
  positionImpactPoolDistributionRate_ASC_NULLS_FIRST = 'positionImpactPoolDistributionRate_ASC_NULLS_FIRST',
  positionImpactPoolDistributionRate_ASC_NULLS_LAST = 'positionImpactPoolDistributionRate_ASC_NULLS_LAST',
  positionImpactPoolDistributionRate_DESC = 'positionImpactPoolDistributionRate_DESC',
  positionImpactPoolDistributionRate_DESC_NULLS_FIRST = 'positionImpactPoolDistributionRate_DESC_NULLS_FIRST',
  positionImpactPoolDistributionRate_DESC_NULLS_LAST = 'positionImpactPoolDistributionRate_DESC_NULLS_LAST',
  reserveFactorLong_ASC = 'reserveFactorLong_ASC',
  reserveFactorLong_ASC_NULLS_FIRST = 'reserveFactorLong_ASC_NULLS_FIRST',
  reserveFactorLong_ASC_NULLS_LAST = 'reserveFactorLong_ASC_NULLS_LAST',
  reserveFactorLong_DESC = 'reserveFactorLong_DESC',
  reserveFactorLong_DESC_NULLS_FIRST = 'reserveFactorLong_DESC_NULLS_FIRST',
  reserveFactorLong_DESC_NULLS_LAST = 'reserveFactorLong_DESC_NULLS_LAST',
  reserveFactorShort_ASC = 'reserveFactorShort_ASC',
  reserveFactorShort_ASC_NULLS_FIRST = 'reserveFactorShort_ASC_NULLS_FIRST',
  reserveFactorShort_ASC_NULLS_LAST = 'reserveFactorShort_ASC_NULLS_LAST',
  reserveFactorShort_DESC = 'reserveFactorShort_DESC',
  reserveFactorShort_DESC_NULLS_FIRST = 'reserveFactorShort_DESC_NULLS_FIRST',
  reserveFactorShort_DESC_NULLS_LAST = 'reserveFactorShort_DESC_NULLS_LAST',
  shortOpenInterestInTokens_ASC = 'shortOpenInterestInTokens_ASC',
  shortOpenInterestInTokens_ASC_NULLS_FIRST = 'shortOpenInterestInTokens_ASC_NULLS_FIRST',
  shortOpenInterestInTokens_ASC_NULLS_LAST = 'shortOpenInterestInTokens_ASC_NULLS_LAST',
  shortOpenInterestInTokens_DESC = 'shortOpenInterestInTokens_DESC',
  shortOpenInterestInTokens_DESC_NULLS_FIRST = 'shortOpenInterestInTokens_DESC_NULLS_FIRST',
  shortOpenInterestInTokens_DESC_NULLS_LAST = 'shortOpenInterestInTokens_DESC_NULLS_LAST',
  shortOpenInterestUsd_ASC = 'shortOpenInterestUsd_ASC',
  shortOpenInterestUsd_ASC_NULLS_FIRST = 'shortOpenInterestUsd_ASC_NULLS_FIRST',
  shortOpenInterestUsd_ASC_NULLS_LAST = 'shortOpenInterestUsd_ASC_NULLS_LAST',
  shortOpenInterestUsd_DESC = 'shortOpenInterestUsd_DESC',
  shortOpenInterestUsd_DESC_NULLS_FIRST = 'shortOpenInterestUsd_DESC_NULLS_FIRST',
  shortOpenInterestUsd_DESC_NULLS_LAST = 'shortOpenInterestUsd_DESC_NULLS_LAST',
  shortPoolAmount_ASC = 'shortPoolAmount_ASC',
  shortPoolAmount_ASC_NULLS_FIRST = 'shortPoolAmount_ASC_NULLS_FIRST',
  shortPoolAmount_ASC_NULLS_LAST = 'shortPoolAmount_ASC_NULLS_LAST',
  shortPoolAmount_DESC = 'shortPoolAmount_DESC',
  shortPoolAmount_DESC_NULLS_FIRST = 'shortPoolAmount_DESC_NULLS_FIRST',
  shortPoolAmount_DESC_NULLS_LAST = 'shortPoolAmount_DESC_NULLS_LAST',
  shortTokenAddress_ASC = 'shortTokenAddress_ASC',
  shortTokenAddress_ASC_NULLS_FIRST = 'shortTokenAddress_ASC_NULLS_FIRST',
  shortTokenAddress_ASC_NULLS_LAST = 'shortTokenAddress_ASC_NULLS_LAST',
  shortTokenAddress_DESC = 'shortTokenAddress_DESC',
  shortTokenAddress_DESC_NULLS_FIRST = 'shortTokenAddress_DESC_NULLS_FIRST',
  shortTokenAddress_DESC_NULLS_LAST = 'shortTokenAddress_DESC_NULLS_LAST',
  swapFeeFactorForNegativeImpact_ASC = 'swapFeeFactorForNegativeImpact_ASC',
  swapFeeFactorForNegativeImpact_ASC_NULLS_FIRST = 'swapFeeFactorForNegativeImpact_ASC_NULLS_FIRST',
  swapFeeFactorForNegativeImpact_ASC_NULLS_LAST = 'swapFeeFactorForNegativeImpact_ASC_NULLS_LAST',
  swapFeeFactorForNegativeImpact_DESC = 'swapFeeFactorForNegativeImpact_DESC',
  swapFeeFactorForNegativeImpact_DESC_NULLS_FIRST = 'swapFeeFactorForNegativeImpact_DESC_NULLS_FIRST',
  swapFeeFactorForNegativeImpact_DESC_NULLS_LAST = 'swapFeeFactorForNegativeImpact_DESC_NULLS_LAST',
  swapFeeFactorForPositiveImpact_ASC = 'swapFeeFactorForPositiveImpact_ASC',
  swapFeeFactorForPositiveImpact_ASC_NULLS_FIRST = 'swapFeeFactorForPositiveImpact_ASC_NULLS_FIRST',
  swapFeeFactorForPositiveImpact_ASC_NULLS_LAST = 'swapFeeFactorForPositiveImpact_ASC_NULLS_LAST',
  swapFeeFactorForPositiveImpact_DESC = 'swapFeeFactorForPositiveImpact_DESC',
  swapFeeFactorForPositiveImpact_DESC_NULLS_FIRST = 'swapFeeFactorForPositiveImpact_DESC_NULLS_FIRST',
  swapFeeFactorForPositiveImpact_DESC_NULLS_LAST = 'swapFeeFactorForPositiveImpact_DESC_NULLS_LAST',
  swapImpactExponentFactor_ASC = 'swapImpactExponentFactor_ASC',
  swapImpactExponentFactor_ASC_NULLS_FIRST = 'swapImpactExponentFactor_ASC_NULLS_FIRST',
  swapImpactExponentFactor_ASC_NULLS_LAST = 'swapImpactExponentFactor_ASC_NULLS_LAST',
  swapImpactExponentFactor_DESC = 'swapImpactExponentFactor_DESC',
  swapImpactExponentFactor_DESC_NULLS_FIRST = 'swapImpactExponentFactor_DESC_NULLS_FIRST',
  swapImpactExponentFactor_DESC_NULLS_LAST = 'swapImpactExponentFactor_DESC_NULLS_LAST',
  swapImpactFactorNegative_ASC = 'swapImpactFactorNegative_ASC',
  swapImpactFactorNegative_ASC_NULLS_FIRST = 'swapImpactFactorNegative_ASC_NULLS_FIRST',
  swapImpactFactorNegative_ASC_NULLS_LAST = 'swapImpactFactorNegative_ASC_NULLS_LAST',
  swapImpactFactorNegative_DESC = 'swapImpactFactorNegative_DESC',
  swapImpactFactorNegative_DESC_NULLS_FIRST = 'swapImpactFactorNegative_DESC_NULLS_FIRST',
  swapImpactFactorNegative_DESC_NULLS_LAST = 'swapImpactFactorNegative_DESC_NULLS_LAST',
  swapImpactFactorPositive_ASC = 'swapImpactFactorPositive_ASC',
  swapImpactFactorPositive_ASC_NULLS_FIRST = 'swapImpactFactorPositive_ASC_NULLS_FIRST',
  swapImpactFactorPositive_ASC_NULLS_LAST = 'swapImpactFactorPositive_ASC_NULLS_LAST',
  swapImpactFactorPositive_DESC = 'swapImpactFactorPositive_DESC',
  swapImpactFactorPositive_DESC_NULLS_FIRST = 'swapImpactFactorPositive_DESC_NULLS_FIRST',
  swapImpactFactorPositive_DESC_NULLS_LAST = 'swapImpactFactorPositive_DESC_NULLS_LAST',
  swapImpactPoolAmountLong_ASC = 'swapImpactPoolAmountLong_ASC',
  swapImpactPoolAmountLong_ASC_NULLS_FIRST = 'swapImpactPoolAmountLong_ASC_NULLS_FIRST',
  swapImpactPoolAmountLong_ASC_NULLS_LAST = 'swapImpactPoolAmountLong_ASC_NULLS_LAST',
  swapImpactPoolAmountLong_DESC = 'swapImpactPoolAmountLong_DESC',
  swapImpactPoolAmountLong_DESC_NULLS_FIRST = 'swapImpactPoolAmountLong_DESC_NULLS_FIRST',
  swapImpactPoolAmountLong_DESC_NULLS_LAST = 'swapImpactPoolAmountLong_DESC_NULLS_LAST',
  swapImpactPoolAmountShort_ASC = 'swapImpactPoolAmountShort_ASC',
  swapImpactPoolAmountShort_ASC_NULLS_FIRST = 'swapImpactPoolAmountShort_ASC_NULLS_FIRST',
  swapImpactPoolAmountShort_ASC_NULLS_LAST = 'swapImpactPoolAmountShort_ASC_NULLS_LAST',
  swapImpactPoolAmountShort_DESC = 'swapImpactPoolAmountShort_DESC',
  swapImpactPoolAmountShort_DESC_NULLS_FIRST = 'swapImpactPoolAmountShort_DESC_NULLS_FIRST',
  swapImpactPoolAmountShort_DESC_NULLS_LAST = 'swapImpactPoolAmountShort_DESC_NULLS_LAST',
  thresholdForDecreaseFunding_ASC = 'thresholdForDecreaseFunding_ASC',
  thresholdForDecreaseFunding_ASC_NULLS_FIRST = 'thresholdForDecreaseFunding_ASC_NULLS_FIRST',
  thresholdForDecreaseFunding_ASC_NULLS_LAST = 'thresholdForDecreaseFunding_ASC_NULLS_LAST',
  thresholdForDecreaseFunding_DESC = 'thresholdForDecreaseFunding_DESC',
  thresholdForDecreaseFunding_DESC_NULLS_FIRST = 'thresholdForDecreaseFunding_DESC_NULLS_FIRST',
  thresholdForDecreaseFunding_DESC_NULLS_LAST = 'thresholdForDecreaseFunding_DESC_NULLS_LAST',
  thresholdForStableFunding_ASC = 'thresholdForStableFunding_ASC',
  thresholdForStableFunding_ASC_NULLS_FIRST = 'thresholdForStableFunding_ASC_NULLS_FIRST',
  thresholdForStableFunding_ASC_NULLS_LAST = 'thresholdForStableFunding_ASC_NULLS_LAST',
  thresholdForStableFunding_DESC = 'thresholdForStableFunding_DESC',
  thresholdForStableFunding_DESC_NULLS_FIRST = 'thresholdForStableFunding_DESC_NULLS_FIRST',
  thresholdForStableFunding_DESC_NULLS_LAST = 'thresholdForStableFunding_DESC_NULLS_LAST',
  totalBorrowingFees_ASC = 'totalBorrowingFees_ASC',
  totalBorrowingFees_ASC_NULLS_FIRST = 'totalBorrowingFees_ASC_NULLS_FIRST',
  totalBorrowingFees_ASC_NULLS_LAST = 'totalBorrowingFees_ASC_NULLS_LAST',
  totalBorrowingFees_DESC = 'totalBorrowingFees_DESC',
  totalBorrowingFees_DESC_NULLS_FIRST = 'totalBorrowingFees_DESC_NULLS_FIRST',
  totalBorrowingFees_DESC_NULLS_LAST = 'totalBorrowingFees_DESC_NULLS_LAST',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_ASC_NULLS_FIRST = 'updatedAt_ASC_NULLS_FIRST',
  updatedAt_ASC_NULLS_LAST = 'updatedAt_ASC_NULLS_LAST',
  updatedAt_DESC = 'updatedAt_DESC',
  updatedAt_DESC_NULLS_FIRST = 'updatedAt_DESC_NULLS_FIRST',
  updatedAt_DESC_NULLS_LAST = 'updatedAt_DESC_NULLS_LAST',
  virtualInventoryForPositions_ASC = 'virtualInventoryForPositions_ASC',
  virtualInventoryForPositions_ASC_NULLS_FIRST = 'virtualInventoryForPositions_ASC_NULLS_FIRST',
  virtualInventoryForPositions_ASC_NULLS_LAST = 'virtualInventoryForPositions_ASC_NULLS_LAST',
  virtualInventoryForPositions_DESC = 'virtualInventoryForPositions_DESC',
  virtualInventoryForPositions_DESC_NULLS_FIRST = 'virtualInventoryForPositions_DESC_NULLS_FIRST',
  virtualInventoryForPositions_DESC_NULLS_LAST = 'virtualInventoryForPositions_DESC_NULLS_LAST',
  virtualLongTokenId_ASC = 'virtualLongTokenId_ASC',
  virtualLongTokenId_ASC_NULLS_FIRST = 'virtualLongTokenId_ASC_NULLS_FIRST',
  virtualLongTokenId_ASC_NULLS_LAST = 'virtualLongTokenId_ASC_NULLS_LAST',
  virtualLongTokenId_DESC = 'virtualLongTokenId_DESC',
  virtualLongTokenId_DESC_NULLS_FIRST = 'virtualLongTokenId_DESC_NULLS_FIRST',
  virtualLongTokenId_DESC_NULLS_LAST = 'virtualLongTokenId_DESC_NULLS_LAST',
  virtualMarketId_ASC = 'virtualMarketId_ASC',
  virtualMarketId_ASC_NULLS_FIRST = 'virtualMarketId_ASC_NULLS_FIRST',
  virtualMarketId_ASC_NULLS_LAST = 'virtualMarketId_ASC_NULLS_LAST',
  virtualMarketId_DESC = 'virtualMarketId_DESC',
  virtualMarketId_DESC_NULLS_FIRST = 'virtualMarketId_DESC_NULLS_FIRST',
  virtualMarketId_DESC_NULLS_LAST = 'virtualMarketId_DESC_NULLS_LAST',
  virtualPoolAmountForLongToken_ASC = 'virtualPoolAmountForLongToken_ASC',
  virtualPoolAmountForLongToken_ASC_NULLS_FIRST = 'virtualPoolAmountForLongToken_ASC_NULLS_FIRST',
  virtualPoolAmountForLongToken_ASC_NULLS_LAST = 'virtualPoolAmountForLongToken_ASC_NULLS_LAST',
  virtualPoolAmountForLongToken_DESC = 'virtualPoolAmountForLongToken_DESC',
  virtualPoolAmountForLongToken_DESC_NULLS_FIRST = 'virtualPoolAmountForLongToken_DESC_NULLS_FIRST',
  virtualPoolAmountForLongToken_DESC_NULLS_LAST = 'virtualPoolAmountForLongToken_DESC_NULLS_LAST',
  virtualPoolAmountForShortToken_ASC = 'virtualPoolAmountForShortToken_ASC',
  virtualPoolAmountForShortToken_ASC_NULLS_FIRST = 'virtualPoolAmountForShortToken_ASC_NULLS_FIRST',
  virtualPoolAmountForShortToken_ASC_NULLS_LAST = 'virtualPoolAmountForShortToken_ASC_NULLS_LAST',
  virtualPoolAmountForShortToken_DESC = 'virtualPoolAmountForShortToken_DESC',
  virtualPoolAmountForShortToken_DESC_NULLS_FIRST = 'virtualPoolAmountForShortToken_DESC_NULLS_FIRST',
  virtualPoolAmountForShortToken_DESC_NULLS_LAST = 'virtualPoolAmountForShortToken_DESC_NULLS_LAST',
  virtualShortTokenId_ASC = 'virtualShortTokenId_ASC',
  virtualShortTokenId_ASC_NULLS_FIRST = 'virtualShortTokenId_ASC_NULLS_FIRST',
  virtualShortTokenId_ASC_NULLS_LAST = 'virtualShortTokenId_ASC_NULLS_LAST',
  virtualShortTokenId_DESC = 'virtualShortTokenId_DESC',
  virtualShortTokenId_DESC_NULLS_FIRST = 'virtualShortTokenId_DESC_NULLS_FIRST',
  virtualShortTokenId_DESC_NULLS_LAST = 'virtualShortTokenId_DESC_NULLS_LAST'
}

export interface MarketInfoWhereInput {
  AND?: InputMaybe<Array<MarketInfoWhereInput>>;
  OR?: InputMaybe<Array<MarketInfoWhereInput>>;
  atomicSwapFeeFactor_eq?: InputMaybe<Scalars['BigInt']['input']>;
  atomicSwapFeeFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomicSwapFeeFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomicSwapFeeFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  atomicSwapFeeFactor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  atomicSwapFeeFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomicSwapFeeFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomicSwapFeeFactor_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  atomicSwapFeeFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowingFactorPerSecondForLongs_eq?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForLongs_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForLongs_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForLongs_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowingFactorPerSecondForLongs_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  borrowingFactorPerSecondForLongs_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForLongs_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForLongs_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForLongs_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowingFactorPerSecondForShorts_eq?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForShorts_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForShorts_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForShorts_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowingFactorPerSecondForShorts_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  borrowingFactorPerSecondForShorts_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForShorts_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForShorts_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFactorPerSecondForShorts_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fundingDecreaseFactorPerSecond_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingDecreaseFactorPerSecond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingDecreaseFactorPerSecond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingDecreaseFactorPerSecond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingDecreaseFactorPerSecond_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fundingDecreaseFactorPerSecond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingDecreaseFactorPerSecond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingDecreaseFactorPerSecond_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingDecreaseFactorPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingExponentFactor_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingExponentFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingExponentFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingExponentFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingExponentFactor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fundingExponentFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingExponentFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingExponentFactor_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingExponentFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingFactorPerSecond_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactorPerSecond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactorPerSecond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactorPerSecond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingFactorPerSecond_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fundingFactorPerSecond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactorPerSecond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactorPerSecond_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactorPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingFactor_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingFactor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fundingFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactor_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingIncreaseFactorPerSecond_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIncreaseFactorPerSecond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIncreaseFactorPerSecond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIncreaseFactorPerSecond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingIncreaseFactorPerSecond_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fundingIncreaseFactorPerSecond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIncreaseFactorPerSecond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIncreaseFactorPerSecond_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingIncreaseFactorPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_eq?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexTokenAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  indexTokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexTokenAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  indexTokenAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  isDisabled_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  lentPositionImpactPoolAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lentPositionImpactPoolAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lentPositionImpactPoolAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lentPositionImpactPoolAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lentPositionImpactPoolAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lentPositionImpactPoolAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lentPositionImpactPoolAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lentPositionImpactPoolAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lentPositionImpactPoolAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longOpenInterestInTokens_eq?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestInTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestInTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestInTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longOpenInterestInTokens_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  longOpenInterestInTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestInTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestInTokens_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestInTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longOpenInterestUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longOpenInterestUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  longOpenInterestUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  longOpenInterestUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longPoolAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  longPoolAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longPoolAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longPoolAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longPoolAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  longPoolAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longPoolAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longPoolAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  longPoolAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longTokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_eq?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  longTokenAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  longTokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  longTokenAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  longTokenAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  longsPayShorts_eq?: InputMaybe<Scalars['Boolean']['input']>;
  longsPayShorts_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  longsPayShorts_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  marketTokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_eq?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketTokenAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketTokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketTokenAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketTokenAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  maxFundingFactorPerSecond_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingFactorPerSecond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingFactorPerSecond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingFactorPerSecond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxFundingFactorPerSecond_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxFundingFactorPerSecond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingFactorPerSecond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingFactorPerSecond_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxFundingFactorPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLendableImpactFactorForWithdrawals_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactorForWithdrawals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactorForWithdrawals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactorForWithdrawals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLendableImpactFactorForWithdrawals_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxLendableImpactFactorForWithdrawals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactorForWithdrawals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactorForWithdrawals_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactorForWithdrawals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLendableImpactFactor_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLendableImpactFactor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxLendableImpactFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactor_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLendableImpactUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLendableImpactUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxLendableImpactUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLendableImpactUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLongPoolAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLongPoolAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxLongPoolAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLongPoolUsdForDeposit_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolUsdForDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolUsdForDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolUsdForDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLongPoolUsdForDeposit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxLongPoolUsdForDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolUsdForDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolUsdForDeposit_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxLongPoolUsdForDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxOpenInterestLong_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxOpenInterestLong_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxOpenInterestLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestLong_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxOpenInterestShort_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxOpenInterestShort_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxOpenInterestShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestShort_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxOpenInterestShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPnlFactorForTradersLong_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPnlFactorForTradersLong_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxPnlFactorForTradersLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersLong_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPnlFactorForTradersShort_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPnlFactorForTradersShort_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxPnlFactorForTradersShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersShort_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPnlFactorForTradersShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPositionImpactFactorForLiquidations_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorForLiquidations_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorForLiquidations_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorForLiquidations_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPositionImpactFactorForLiquidations_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxPositionImpactFactorForLiquidations_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorForLiquidations_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorForLiquidations_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorForLiquidations_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPositionImpactFactorNegative_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorNegative_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorNegative_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorNegative_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPositionImpactFactorNegative_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxPositionImpactFactorNegative_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorNegative_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorNegative_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorNegative_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPositionImpactFactorPositive_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorPositive_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorPositive_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorPositive_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPositionImpactFactorPositive_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxPositionImpactFactorPositive_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorPositive_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorPositive_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPositionImpactFactorPositive_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxShortPoolAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxShortPoolAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxShortPoolAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxShortPoolUsdForDeposit_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolUsdForDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolUsdForDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolUsdForDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxShortPoolUsdForDeposit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxShortPoolUsdForDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolUsdForDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolUsdForDeposit_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxShortPoolUsdForDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minCollateralFactorForOpenInterestLong_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minCollateralFactorForOpenInterestLong_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minCollateralFactorForOpenInterestLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestLong_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minCollateralFactorForOpenInterestShort_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minCollateralFactorForOpenInterestShort_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minCollateralFactorForOpenInterestShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestShort_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactorForOpenInterestShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minCollateralFactor_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minCollateralFactor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minCollateralFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactor_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minCollateralFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minFundingFactorPerSecond_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingFactorPerSecond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingFactorPerSecond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingFactorPerSecond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minFundingFactorPerSecond_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minFundingFactorPerSecond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingFactorPerSecond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingFactorPerSecond_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minFundingFactorPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minPositionImpactPoolAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minPositionImpactPoolAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minPositionImpactPoolAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minPositionImpactPoolAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minPositionImpactPoolAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minPositionImpactPoolAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minPositionImpactPoolAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minPositionImpactPoolAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minPositionImpactPoolAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openInterestReserveFactorLong_eq?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openInterestReserveFactorLong_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  openInterestReserveFactorLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorLong_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openInterestReserveFactorShort_eq?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openInterestReserveFactorShort_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  openInterestReserveFactorShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorShort_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  openInterestReserveFactorShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolValueMax_eq?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMax_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMax_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMax_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolValueMax_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  poolValueMax_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMax_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMax_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMax_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolValueMin_eq?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolValueMin_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  poolValueMin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMin_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  poolValueMin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeFactorForNegativeImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForNegativeImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForNegativeImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForNegativeImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeFactorForNegativeImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  positionFeeFactorForNegativeImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForNegativeImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForNegativeImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForNegativeImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeFactorForPositiveImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForPositiveImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForPositiveImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForPositiveImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeFactorForPositiveImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  positionFeeFactorForPositiveImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForPositiveImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForPositiveImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFactorForPositiveImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactExponentFactor_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactExponentFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactExponentFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactExponentFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactExponentFactor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  positionImpactExponentFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactExponentFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactExponentFactor_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactExponentFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactFactorNegative_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorNegative_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorNegative_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorNegative_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactFactorNegative_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  positionImpactFactorNegative_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorNegative_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorNegative_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorNegative_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactFactorPositive_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorPositive_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorPositive_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorPositive_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactFactorPositive_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  positionImpactFactorPositive_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorPositive_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorPositive_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactFactorPositive_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactPoolAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactPoolAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  positionImpactPoolAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactPoolDistributionRate_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolDistributionRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolDistributionRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolDistributionRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionImpactPoolDistributionRate_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  positionImpactPoolDistributionRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolDistributionRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolDistributionRate_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionImpactPoolDistributionRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveFactorLong_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveFactorLong_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserveFactorLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorLong_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveFactorShort_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveFactorShort_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserveFactorShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorShort_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortOpenInterestInTokens_eq?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestInTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestInTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestInTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortOpenInterestInTokens_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  shortOpenInterestInTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestInTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestInTokens_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestInTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortOpenInterestUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortOpenInterestUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  shortOpenInterestUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  shortOpenInterestUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortPoolAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  shortPoolAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortPoolAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortPoolAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortPoolAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  shortPoolAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortPoolAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortPoolAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  shortPoolAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortTokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_eq?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  shortTokenAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  shortTokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  shortTokenAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  shortTokenAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  swapFeeFactorForNegativeImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForNegativeImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForNegativeImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForNegativeImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapFeeFactorForNegativeImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapFeeFactorForNegativeImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForNegativeImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForNegativeImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForNegativeImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapFeeFactorForPositiveImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForPositiveImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForPositiveImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForPositiveImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapFeeFactorForPositiveImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapFeeFactorForPositiveImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForPositiveImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForPositiveImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapFeeFactorForPositiveImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactExponentFactor_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactExponentFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactExponentFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactExponentFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactExponentFactor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapImpactExponentFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactExponentFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactExponentFactor_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactExponentFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactFactorNegative_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorNegative_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorNegative_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorNegative_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactFactorNegative_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapImpactFactorNegative_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorNegative_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorNegative_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorNegative_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactFactorPositive_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorPositive_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorPositive_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorPositive_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactFactorPositive_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapImpactFactorPositive_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorPositive_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorPositive_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactFactorPositive_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactPoolAmountLong_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactPoolAmountLong_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapImpactPoolAmountLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountLong_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactPoolAmountShort_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactPoolAmountShort_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapImpactPoolAmountShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountShort_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactPoolAmountShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  thresholdForDecreaseFunding_eq?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForDecreaseFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForDecreaseFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForDecreaseFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  thresholdForDecreaseFunding_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  thresholdForDecreaseFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForDecreaseFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForDecreaseFunding_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForDecreaseFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  thresholdForStableFunding_eq?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForStableFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForStableFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForStableFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  thresholdForStableFunding_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  thresholdForStableFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForStableFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForStableFunding_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  thresholdForStableFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBorrowingFees_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBorrowingFees_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalBorrowingFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFees_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowingFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  virtualInventoryForPositions_eq?: InputMaybe<Scalars['BigInt']['input']>;
  virtualInventoryForPositions_gt?: InputMaybe<Scalars['BigInt']['input']>;
  virtualInventoryForPositions_gte?: InputMaybe<Scalars['BigInt']['input']>;
  virtualInventoryForPositions_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  virtualInventoryForPositions_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  virtualInventoryForPositions_lt?: InputMaybe<Scalars['BigInt']['input']>;
  virtualInventoryForPositions_lte?: InputMaybe<Scalars['BigInt']['input']>;
  virtualInventoryForPositions_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  virtualInventoryForPositions_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  virtualLongTokenId_contains?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_endsWith?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_eq?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_gt?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_gte?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  virtualLongTokenId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  virtualLongTokenId_lt?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_lte?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_not_eq?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  virtualLongTokenId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  virtualLongTokenId_startsWith?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_contains?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_endsWith?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_eq?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_gt?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_gte?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  virtualMarketId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  virtualMarketId_lt?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_lte?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_not_contains?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_not_eq?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  virtualMarketId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  virtualMarketId_startsWith?: InputMaybe<Scalars['String']['input']>;
  virtualPoolAmountForLongToken_eq?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForLongToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForLongToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForLongToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  virtualPoolAmountForLongToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  virtualPoolAmountForLongToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForLongToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForLongToken_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForLongToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  virtualPoolAmountForShortToken_eq?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForShortToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForShortToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForShortToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  virtualPoolAmountForShortToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  virtualPoolAmountForShortToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForShortToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForShortToken_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPoolAmountForShortToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  virtualShortTokenId_contains?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_endsWith?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_eq?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_gt?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_gte?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  virtualShortTokenId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  virtualShortTokenId_lt?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_lte?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_not_eq?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  virtualShortTokenId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  virtualShortTokenId_startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface MarketInfosConnection {
  __typename?: 'MarketInfosConnection';
  edges: Array<MarketInfoEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface PageInfo {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
}

export interface PeriodAccountStat {
  __typename?: 'PeriodAccountStat';
  account: Scalars['String']['output'];
  closedCount: Scalars['Int']['output'];
  cumsumCollateral: Scalars['BigInt']['output'];
  cumsumSize: Scalars['BigInt']['output'];
  hasRank: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  losses: Scalars['Int']['output'];
  maxCapital: Scalars['BigInt']['output'];
  netCapital: Scalars['BigInt']['output'];
  periodEnd: Scalars['Int']['output'];
  periodStart: Scalars['Int']['output'];
  realizedFees: Scalars['BigInt']['output'];
  realizedPnl: Scalars['BigInt']['output'];
  realizedPriceImpact: Scalars['BigInt']['output'];
  startUnrealizedFees: Scalars['BigInt']['output'];
  startUnrealizedPnl: Scalars['BigInt']['output'];
  startUnrealizedPriceImpact: Scalars['BigInt']['output'];
  sumMaxSize: Scalars['BigInt']['output'];
  totalDepositedUsd0: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  wins: Scalars['Int']['output'];
}

export interface PeriodAccountStatEdge {
  __typename?: 'PeriodAccountStatEdge';
  cursor: Scalars['String']['output'];
  node: PeriodAccountStat;
}

export enum PeriodAccountStatOrderByInput {
  account_ASC = 'account_ASC',
  account_ASC_NULLS_FIRST = 'account_ASC_NULLS_FIRST',
  account_ASC_NULLS_LAST = 'account_ASC_NULLS_LAST',
  account_DESC = 'account_DESC',
  account_DESC_NULLS_FIRST = 'account_DESC_NULLS_FIRST',
  account_DESC_NULLS_LAST = 'account_DESC_NULLS_LAST',
  closedCount_ASC = 'closedCount_ASC',
  closedCount_ASC_NULLS_FIRST = 'closedCount_ASC_NULLS_FIRST',
  closedCount_ASC_NULLS_LAST = 'closedCount_ASC_NULLS_LAST',
  closedCount_DESC = 'closedCount_DESC',
  closedCount_DESC_NULLS_FIRST = 'closedCount_DESC_NULLS_FIRST',
  closedCount_DESC_NULLS_LAST = 'closedCount_DESC_NULLS_LAST',
  cumsumCollateral_ASC = 'cumsumCollateral_ASC',
  cumsumCollateral_ASC_NULLS_FIRST = 'cumsumCollateral_ASC_NULLS_FIRST',
  cumsumCollateral_ASC_NULLS_LAST = 'cumsumCollateral_ASC_NULLS_LAST',
  cumsumCollateral_DESC = 'cumsumCollateral_DESC',
  cumsumCollateral_DESC_NULLS_FIRST = 'cumsumCollateral_DESC_NULLS_FIRST',
  cumsumCollateral_DESC_NULLS_LAST = 'cumsumCollateral_DESC_NULLS_LAST',
  cumsumSize_ASC = 'cumsumSize_ASC',
  cumsumSize_ASC_NULLS_FIRST = 'cumsumSize_ASC_NULLS_FIRST',
  cumsumSize_ASC_NULLS_LAST = 'cumsumSize_ASC_NULLS_LAST',
  cumsumSize_DESC = 'cumsumSize_DESC',
  cumsumSize_DESC_NULLS_FIRST = 'cumsumSize_DESC_NULLS_FIRST',
  cumsumSize_DESC_NULLS_LAST = 'cumsumSize_DESC_NULLS_LAST',
  hasRank_ASC = 'hasRank_ASC',
  hasRank_ASC_NULLS_FIRST = 'hasRank_ASC_NULLS_FIRST',
  hasRank_ASC_NULLS_LAST = 'hasRank_ASC_NULLS_LAST',
  hasRank_DESC = 'hasRank_DESC',
  hasRank_DESC_NULLS_FIRST = 'hasRank_DESC_NULLS_FIRST',
  hasRank_DESC_NULLS_LAST = 'hasRank_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  losses_ASC = 'losses_ASC',
  losses_ASC_NULLS_FIRST = 'losses_ASC_NULLS_FIRST',
  losses_ASC_NULLS_LAST = 'losses_ASC_NULLS_LAST',
  losses_DESC = 'losses_DESC',
  losses_DESC_NULLS_FIRST = 'losses_DESC_NULLS_FIRST',
  losses_DESC_NULLS_LAST = 'losses_DESC_NULLS_LAST',
  maxCapital_ASC = 'maxCapital_ASC',
  maxCapital_ASC_NULLS_FIRST = 'maxCapital_ASC_NULLS_FIRST',
  maxCapital_ASC_NULLS_LAST = 'maxCapital_ASC_NULLS_LAST',
  maxCapital_DESC = 'maxCapital_DESC',
  maxCapital_DESC_NULLS_FIRST = 'maxCapital_DESC_NULLS_FIRST',
  maxCapital_DESC_NULLS_LAST = 'maxCapital_DESC_NULLS_LAST',
  netCapital_ASC = 'netCapital_ASC',
  netCapital_ASC_NULLS_FIRST = 'netCapital_ASC_NULLS_FIRST',
  netCapital_ASC_NULLS_LAST = 'netCapital_ASC_NULLS_LAST',
  netCapital_DESC = 'netCapital_DESC',
  netCapital_DESC_NULLS_FIRST = 'netCapital_DESC_NULLS_FIRST',
  netCapital_DESC_NULLS_LAST = 'netCapital_DESC_NULLS_LAST',
  periodEnd_ASC = 'periodEnd_ASC',
  periodEnd_ASC_NULLS_FIRST = 'periodEnd_ASC_NULLS_FIRST',
  periodEnd_ASC_NULLS_LAST = 'periodEnd_ASC_NULLS_LAST',
  periodEnd_DESC = 'periodEnd_DESC',
  periodEnd_DESC_NULLS_FIRST = 'periodEnd_DESC_NULLS_FIRST',
  periodEnd_DESC_NULLS_LAST = 'periodEnd_DESC_NULLS_LAST',
  periodStart_ASC = 'periodStart_ASC',
  periodStart_ASC_NULLS_FIRST = 'periodStart_ASC_NULLS_FIRST',
  periodStart_ASC_NULLS_LAST = 'periodStart_ASC_NULLS_LAST',
  periodStart_DESC = 'periodStart_DESC',
  periodStart_DESC_NULLS_FIRST = 'periodStart_DESC_NULLS_FIRST',
  periodStart_DESC_NULLS_LAST = 'periodStart_DESC_NULLS_LAST',
  realizedFees_ASC = 'realizedFees_ASC',
  realizedFees_ASC_NULLS_FIRST = 'realizedFees_ASC_NULLS_FIRST',
  realizedFees_ASC_NULLS_LAST = 'realizedFees_ASC_NULLS_LAST',
  realizedFees_DESC = 'realizedFees_DESC',
  realizedFees_DESC_NULLS_FIRST = 'realizedFees_DESC_NULLS_FIRST',
  realizedFees_DESC_NULLS_LAST = 'realizedFees_DESC_NULLS_LAST',
  realizedPnl_ASC = 'realizedPnl_ASC',
  realizedPnl_ASC_NULLS_FIRST = 'realizedPnl_ASC_NULLS_FIRST',
  realizedPnl_ASC_NULLS_LAST = 'realizedPnl_ASC_NULLS_LAST',
  realizedPnl_DESC = 'realizedPnl_DESC',
  realizedPnl_DESC_NULLS_FIRST = 'realizedPnl_DESC_NULLS_FIRST',
  realizedPnl_DESC_NULLS_LAST = 'realizedPnl_DESC_NULLS_LAST',
  realizedPriceImpact_ASC = 'realizedPriceImpact_ASC',
  realizedPriceImpact_ASC_NULLS_FIRST = 'realizedPriceImpact_ASC_NULLS_FIRST',
  realizedPriceImpact_ASC_NULLS_LAST = 'realizedPriceImpact_ASC_NULLS_LAST',
  realizedPriceImpact_DESC = 'realizedPriceImpact_DESC',
  realizedPriceImpact_DESC_NULLS_FIRST = 'realizedPriceImpact_DESC_NULLS_FIRST',
  realizedPriceImpact_DESC_NULLS_LAST = 'realizedPriceImpact_DESC_NULLS_LAST',
  startUnrealizedFees_ASC = 'startUnrealizedFees_ASC',
  startUnrealizedFees_ASC_NULLS_FIRST = 'startUnrealizedFees_ASC_NULLS_FIRST',
  startUnrealizedFees_ASC_NULLS_LAST = 'startUnrealizedFees_ASC_NULLS_LAST',
  startUnrealizedFees_DESC = 'startUnrealizedFees_DESC',
  startUnrealizedFees_DESC_NULLS_FIRST = 'startUnrealizedFees_DESC_NULLS_FIRST',
  startUnrealizedFees_DESC_NULLS_LAST = 'startUnrealizedFees_DESC_NULLS_LAST',
  startUnrealizedPnl_ASC = 'startUnrealizedPnl_ASC',
  startUnrealizedPnl_ASC_NULLS_FIRST = 'startUnrealizedPnl_ASC_NULLS_FIRST',
  startUnrealizedPnl_ASC_NULLS_LAST = 'startUnrealizedPnl_ASC_NULLS_LAST',
  startUnrealizedPnl_DESC = 'startUnrealizedPnl_DESC',
  startUnrealizedPnl_DESC_NULLS_FIRST = 'startUnrealizedPnl_DESC_NULLS_FIRST',
  startUnrealizedPnl_DESC_NULLS_LAST = 'startUnrealizedPnl_DESC_NULLS_LAST',
  startUnrealizedPriceImpact_ASC = 'startUnrealizedPriceImpact_ASC',
  startUnrealizedPriceImpact_ASC_NULLS_FIRST = 'startUnrealizedPriceImpact_ASC_NULLS_FIRST',
  startUnrealizedPriceImpact_ASC_NULLS_LAST = 'startUnrealizedPriceImpact_ASC_NULLS_LAST',
  startUnrealizedPriceImpact_DESC = 'startUnrealizedPriceImpact_DESC',
  startUnrealizedPriceImpact_DESC_NULLS_FIRST = 'startUnrealizedPriceImpact_DESC_NULLS_FIRST',
  startUnrealizedPriceImpact_DESC_NULLS_LAST = 'startUnrealizedPriceImpact_DESC_NULLS_LAST',
  sumMaxSize_ASC = 'sumMaxSize_ASC',
  sumMaxSize_ASC_NULLS_FIRST = 'sumMaxSize_ASC_NULLS_FIRST',
  sumMaxSize_ASC_NULLS_LAST = 'sumMaxSize_ASC_NULLS_LAST',
  sumMaxSize_DESC = 'sumMaxSize_DESC',
  sumMaxSize_DESC_NULLS_FIRST = 'sumMaxSize_DESC_NULLS_FIRST',
  sumMaxSize_DESC_NULLS_LAST = 'sumMaxSize_DESC_NULLS_LAST',
  totalDepositedUsd0_ASC = 'totalDepositedUsd0_ASC',
  totalDepositedUsd0_ASC_NULLS_FIRST = 'totalDepositedUsd0_ASC_NULLS_FIRST',
  totalDepositedUsd0_ASC_NULLS_LAST = 'totalDepositedUsd0_ASC_NULLS_LAST',
  totalDepositedUsd0_DESC = 'totalDepositedUsd0_DESC',
  totalDepositedUsd0_DESC_NULLS_FIRST = 'totalDepositedUsd0_DESC_NULLS_FIRST',
  totalDepositedUsd0_DESC_NULLS_LAST = 'totalDepositedUsd0_DESC_NULLS_LAST',
  volume_ASC = 'volume_ASC',
  volume_ASC_NULLS_FIRST = 'volume_ASC_NULLS_FIRST',
  volume_ASC_NULLS_LAST = 'volume_ASC_NULLS_LAST',
  volume_DESC = 'volume_DESC',
  volume_DESC_NULLS_FIRST = 'volume_DESC_NULLS_FIRST',
  volume_DESC_NULLS_LAST = 'volume_DESC_NULLS_LAST',
  wins_ASC = 'wins_ASC',
  wins_ASC_NULLS_FIRST = 'wins_ASC_NULLS_FIRST',
  wins_ASC_NULLS_LAST = 'wins_ASC_NULLS_LAST',
  wins_DESC = 'wins_DESC',
  wins_DESC_NULLS_FIRST = 'wins_DESC_NULLS_FIRST',
  wins_DESC_NULLS_LAST = 'wins_DESC_NULLS_LAST'
}

export interface PeriodAccountStatWhereInput {
  AND?: InputMaybe<Array<PeriodAccountStatWhereInput>>;
  OR?: InputMaybe<Array<PeriodAccountStatWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  closedCount_eq?: InputMaybe<Scalars['Int']['input']>;
  closedCount_gt?: InputMaybe<Scalars['Int']['input']>;
  closedCount_gte?: InputMaybe<Scalars['Int']['input']>;
  closedCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  closedCount_lt?: InputMaybe<Scalars['Int']['input']>;
  closedCount_lte?: InputMaybe<Scalars['Int']['input']>;
  closedCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  closedCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumsumCollateral_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumsumCollateral_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumsumCollateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumsumSize_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumsumSize_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumsumSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumsumSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hasRank_eq?: InputMaybe<Scalars['Boolean']['input']>;
  hasRank_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  hasRank_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  losses_eq?: InputMaybe<Scalars['Int']['input']>;
  losses_gt?: InputMaybe<Scalars['Int']['input']>;
  losses_gte?: InputMaybe<Scalars['Int']['input']>;
  losses_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  losses_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  losses_lt?: InputMaybe<Scalars['Int']['input']>;
  losses_lte?: InputMaybe<Scalars['Int']['input']>;
  losses_not_eq?: InputMaybe<Scalars['Int']['input']>;
  losses_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxCapital_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxCapital_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxCapital_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxCapital_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netCapital_eq?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netCapital_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  netCapital_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  netCapital_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodEnd_eq?: InputMaybe<Scalars['Int']['input']>;
  periodEnd_gt?: InputMaybe<Scalars['Int']['input']>;
  periodEnd_gte?: InputMaybe<Scalars['Int']['input']>;
  periodEnd_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodEnd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  periodEnd_lt?: InputMaybe<Scalars['Int']['input']>;
  periodEnd_lte?: InputMaybe<Scalars['Int']['input']>;
  periodEnd_not_eq?: InputMaybe<Scalars['Int']['input']>;
  periodEnd_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStart_eq?: InputMaybe<Scalars['Int']['input']>;
  periodStart_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStart_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStart_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStart_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  periodStart_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStart_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStart_not_eq?: InputMaybe<Scalars['Int']['input']>;
  periodStart_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  realizedFees_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedFees_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPriceImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPriceImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedPriceImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startUnrealizedFees_eq?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startUnrealizedFees_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  startUnrealizedFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedFees_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startUnrealizedPnl_eq?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startUnrealizedPnl_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  startUnrealizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPnl_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startUnrealizedPriceImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPriceImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPriceImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPriceImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startUnrealizedPriceImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  startUnrealizedPriceImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPriceImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPriceImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  startUnrealizedPriceImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sumMaxSize_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sumMaxSize_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sumMaxSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sumMaxSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDepositedUsd0_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDepositedUsd0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalDepositedUsd0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositedUsd0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wins_eq?: InputMaybe<Scalars['Int']['input']>;
  wins_gt?: InputMaybe<Scalars['Int']['input']>;
  wins_gte?: InputMaybe<Scalars['Int']['input']>;
  wins_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  wins_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  wins_lt?: InputMaybe<Scalars['Int']['input']>;
  wins_lte?: InputMaybe<Scalars['Int']['input']>;
  wins_not_eq?: InputMaybe<Scalars['Int']['input']>;
  wins_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
}

export interface PeriodAccountStatsConnection {
  __typename?: 'PeriodAccountStatsConnection';
  edges: Array<PeriodAccountStatEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface PlatformStat {
  __typename?: 'PlatformStat';
  depositedUsers: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
}

export interface PlatformStatEdge {
  __typename?: 'PlatformStatEdge';
  cursor: Scalars['String']['output'];
  node: PlatformStat;
}

export enum PlatformStatOrderByInput {
  depositedUsers_ASC = 'depositedUsers_ASC',
  depositedUsers_ASC_NULLS_FIRST = 'depositedUsers_ASC_NULLS_FIRST',
  depositedUsers_ASC_NULLS_LAST = 'depositedUsers_ASC_NULLS_LAST',
  depositedUsers_DESC = 'depositedUsers_DESC',
  depositedUsers_DESC_NULLS_FIRST = 'depositedUsers_DESC_NULLS_FIRST',
  depositedUsers_DESC_NULLS_LAST = 'depositedUsers_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST'
}

export interface PlatformStatWhereInput {
  AND?: InputMaybe<Array<PlatformStatWhereInput>>;
  OR?: InputMaybe<Array<PlatformStatWhereInput>>;
  depositedUsers_eq?: InputMaybe<Scalars['Int']['input']>;
  depositedUsers_gt?: InputMaybe<Scalars['Int']['input']>;
  depositedUsers_gte?: InputMaybe<Scalars['Int']['input']>;
  depositedUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  depositedUsers_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  depositedUsers_lt?: InputMaybe<Scalars['Int']['input']>;
  depositedUsers_lte?: InputMaybe<Scalars['Int']['input']>;
  depositedUsers_not_eq?: InputMaybe<Scalars['Int']['input']>;
  depositedUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
}

export interface PlatformStatsConnection {
  __typename?: 'PlatformStatsConnection';
  edges: Array<PlatformStatEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface Position {
  __typename?: 'Position';
  account: Scalars['String']['output'];
  accountStat: AccountStat;
  collateralAmount: Scalars['BigInt']['output'];
  collateralToken: Scalars['String']['output'];
  createdAt: Scalars['Int']['output'];
  entryPrice: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  isLong: Scalars['Boolean']['output'];
  isSnapshot: Scalars['Boolean']['output'];
  market: Scalars['String']['output'];
  maxSize: Scalars['BigInt']['output'];
  realizedFees: Scalars['BigInt']['output'];
  realizedPnl: Scalars['BigInt']['output'];
  realizedPriceImpact: Scalars['BigInt']['output'];
  sizeInTokens: Scalars['BigInt']['output'];
  sizeInUsd: Scalars['BigInt']['output'];
  snapshotTimestamp?: Maybe<Scalars['Int']['output']>;
  unrealizedFees: Scalars['BigInt']['output'];
  unrealizedPnl: Scalars['BigInt']['output'];
  unrealizedPriceImpact: Scalars['BigInt']['output'];
  updatedAt: Scalars['Int']['output'];
}

export interface PositionEdge {
  __typename?: 'PositionEdge';
  cursor: Scalars['String']['output'];
  node: Position;
}

export enum PositionOrderByInput {
  accountStat_closedCount_ASC = 'accountStat_closedCount_ASC',
  accountStat_closedCount_ASC_NULLS_FIRST = 'accountStat_closedCount_ASC_NULLS_FIRST',
  accountStat_closedCount_ASC_NULLS_LAST = 'accountStat_closedCount_ASC_NULLS_LAST',
  accountStat_closedCount_DESC = 'accountStat_closedCount_DESC',
  accountStat_closedCount_DESC_NULLS_FIRST = 'accountStat_closedCount_DESC_NULLS_FIRST',
  accountStat_closedCount_DESC_NULLS_LAST = 'accountStat_closedCount_DESC_NULLS_LAST',
  accountStat_cumsumCollateral_ASC = 'accountStat_cumsumCollateral_ASC',
  accountStat_cumsumCollateral_ASC_NULLS_FIRST = 'accountStat_cumsumCollateral_ASC_NULLS_FIRST',
  accountStat_cumsumCollateral_ASC_NULLS_LAST = 'accountStat_cumsumCollateral_ASC_NULLS_LAST',
  accountStat_cumsumCollateral_DESC = 'accountStat_cumsumCollateral_DESC',
  accountStat_cumsumCollateral_DESC_NULLS_FIRST = 'accountStat_cumsumCollateral_DESC_NULLS_FIRST',
  accountStat_cumsumCollateral_DESC_NULLS_LAST = 'accountStat_cumsumCollateral_DESC_NULLS_LAST',
  accountStat_cumsumSize_ASC = 'accountStat_cumsumSize_ASC',
  accountStat_cumsumSize_ASC_NULLS_FIRST = 'accountStat_cumsumSize_ASC_NULLS_FIRST',
  accountStat_cumsumSize_ASC_NULLS_LAST = 'accountStat_cumsumSize_ASC_NULLS_LAST',
  accountStat_cumsumSize_DESC = 'accountStat_cumsumSize_DESC',
  accountStat_cumsumSize_DESC_NULLS_FIRST = 'accountStat_cumsumSize_DESC_NULLS_FIRST',
  accountStat_cumsumSize_DESC_NULLS_LAST = 'accountStat_cumsumSize_DESC_NULLS_LAST',
  accountStat_deposits_ASC = 'accountStat_deposits_ASC',
  accountStat_deposits_ASC_NULLS_FIRST = 'accountStat_deposits_ASC_NULLS_FIRST',
  accountStat_deposits_ASC_NULLS_LAST = 'accountStat_deposits_ASC_NULLS_LAST',
  accountStat_deposits_DESC = 'accountStat_deposits_DESC',
  accountStat_deposits_DESC_NULLS_FIRST = 'accountStat_deposits_DESC_NULLS_FIRST',
  accountStat_deposits_DESC_NULLS_LAST = 'accountStat_deposits_DESC_NULLS_LAST',
  accountStat_id_ASC = 'accountStat_id_ASC',
  accountStat_id_ASC_NULLS_FIRST = 'accountStat_id_ASC_NULLS_FIRST',
  accountStat_id_ASC_NULLS_LAST = 'accountStat_id_ASC_NULLS_LAST',
  accountStat_id_DESC = 'accountStat_id_DESC',
  accountStat_id_DESC_NULLS_FIRST = 'accountStat_id_DESC_NULLS_FIRST',
  accountStat_id_DESC_NULLS_LAST = 'accountStat_id_DESC_NULLS_LAST',
  accountStat_losses_ASC = 'accountStat_losses_ASC',
  accountStat_losses_ASC_NULLS_FIRST = 'accountStat_losses_ASC_NULLS_FIRST',
  accountStat_losses_ASC_NULLS_LAST = 'accountStat_losses_ASC_NULLS_LAST',
  accountStat_losses_DESC = 'accountStat_losses_DESC',
  accountStat_losses_DESC_NULLS_FIRST = 'accountStat_losses_DESC_NULLS_FIRST',
  accountStat_losses_DESC_NULLS_LAST = 'accountStat_losses_DESC_NULLS_LAST',
  accountStat_maxCapital_ASC = 'accountStat_maxCapital_ASC',
  accountStat_maxCapital_ASC_NULLS_FIRST = 'accountStat_maxCapital_ASC_NULLS_FIRST',
  accountStat_maxCapital_ASC_NULLS_LAST = 'accountStat_maxCapital_ASC_NULLS_LAST',
  accountStat_maxCapital_DESC = 'accountStat_maxCapital_DESC',
  accountStat_maxCapital_DESC_NULLS_FIRST = 'accountStat_maxCapital_DESC_NULLS_FIRST',
  accountStat_maxCapital_DESC_NULLS_LAST = 'accountStat_maxCapital_DESC_NULLS_LAST',
  accountStat_netCapital_ASC = 'accountStat_netCapital_ASC',
  accountStat_netCapital_ASC_NULLS_FIRST = 'accountStat_netCapital_ASC_NULLS_FIRST',
  accountStat_netCapital_ASC_NULLS_LAST = 'accountStat_netCapital_ASC_NULLS_LAST',
  accountStat_netCapital_DESC = 'accountStat_netCapital_DESC',
  accountStat_netCapital_DESC_NULLS_FIRST = 'accountStat_netCapital_DESC_NULLS_FIRST',
  accountStat_netCapital_DESC_NULLS_LAST = 'accountStat_netCapital_DESC_NULLS_LAST',
  accountStat_realizedFees_ASC = 'accountStat_realizedFees_ASC',
  accountStat_realizedFees_ASC_NULLS_FIRST = 'accountStat_realizedFees_ASC_NULLS_FIRST',
  accountStat_realizedFees_ASC_NULLS_LAST = 'accountStat_realizedFees_ASC_NULLS_LAST',
  accountStat_realizedFees_DESC = 'accountStat_realizedFees_DESC',
  accountStat_realizedFees_DESC_NULLS_FIRST = 'accountStat_realizedFees_DESC_NULLS_FIRST',
  accountStat_realizedFees_DESC_NULLS_LAST = 'accountStat_realizedFees_DESC_NULLS_LAST',
  accountStat_realizedPnl_ASC = 'accountStat_realizedPnl_ASC',
  accountStat_realizedPnl_ASC_NULLS_FIRST = 'accountStat_realizedPnl_ASC_NULLS_FIRST',
  accountStat_realizedPnl_ASC_NULLS_LAST = 'accountStat_realizedPnl_ASC_NULLS_LAST',
  accountStat_realizedPnl_DESC = 'accountStat_realizedPnl_DESC',
  accountStat_realizedPnl_DESC_NULLS_FIRST = 'accountStat_realizedPnl_DESC_NULLS_FIRST',
  accountStat_realizedPnl_DESC_NULLS_LAST = 'accountStat_realizedPnl_DESC_NULLS_LAST',
  accountStat_realizedPriceImpact_ASC = 'accountStat_realizedPriceImpact_ASC',
  accountStat_realizedPriceImpact_ASC_NULLS_FIRST = 'accountStat_realizedPriceImpact_ASC_NULLS_FIRST',
  accountStat_realizedPriceImpact_ASC_NULLS_LAST = 'accountStat_realizedPriceImpact_ASC_NULLS_LAST',
  accountStat_realizedPriceImpact_DESC = 'accountStat_realizedPriceImpact_DESC',
  accountStat_realizedPriceImpact_DESC_NULLS_FIRST = 'accountStat_realizedPriceImpact_DESC_NULLS_FIRST',
  accountStat_realizedPriceImpact_DESC_NULLS_LAST = 'accountStat_realizedPriceImpact_DESC_NULLS_LAST',
  accountStat_realizedSwapImpact_ASC = 'accountStat_realizedSwapImpact_ASC',
  accountStat_realizedSwapImpact_ASC_NULLS_FIRST = 'accountStat_realizedSwapImpact_ASC_NULLS_FIRST',
  accountStat_realizedSwapImpact_ASC_NULLS_LAST = 'accountStat_realizedSwapImpact_ASC_NULLS_LAST',
  accountStat_realizedSwapImpact_DESC = 'accountStat_realizedSwapImpact_DESC',
  accountStat_realizedSwapImpact_DESC_NULLS_FIRST = 'accountStat_realizedSwapImpact_DESC_NULLS_FIRST',
  accountStat_realizedSwapImpact_DESC_NULLS_LAST = 'accountStat_realizedSwapImpact_DESC_NULLS_LAST',
  accountStat_sumMaxSize_ASC = 'accountStat_sumMaxSize_ASC',
  accountStat_sumMaxSize_ASC_NULLS_FIRST = 'accountStat_sumMaxSize_ASC_NULLS_FIRST',
  accountStat_sumMaxSize_ASC_NULLS_LAST = 'accountStat_sumMaxSize_ASC_NULLS_LAST',
  accountStat_sumMaxSize_DESC = 'accountStat_sumMaxSize_DESC',
  accountStat_sumMaxSize_DESC_NULLS_FIRST = 'accountStat_sumMaxSize_DESC_NULLS_FIRST',
  accountStat_sumMaxSize_DESC_NULLS_LAST = 'accountStat_sumMaxSize_DESC_NULLS_LAST',
  accountStat_totalDepositedUsd0_ASC = 'accountStat_totalDepositedUsd0_ASC',
  accountStat_totalDepositedUsd0_ASC_NULLS_FIRST = 'accountStat_totalDepositedUsd0_ASC_NULLS_FIRST',
  accountStat_totalDepositedUsd0_ASC_NULLS_LAST = 'accountStat_totalDepositedUsd0_ASC_NULLS_LAST',
  accountStat_totalDepositedUsd0_DESC = 'accountStat_totalDepositedUsd0_DESC',
  accountStat_totalDepositedUsd0_DESC_NULLS_FIRST = 'accountStat_totalDepositedUsd0_DESC_NULLS_FIRST',
  accountStat_totalDepositedUsd0_DESC_NULLS_LAST = 'accountStat_totalDepositedUsd0_DESC_NULLS_LAST',
  accountStat_updatedAt_ASC = 'accountStat_updatedAt_ASC',
  accountStat_updatedAt_ASC_NULLS_FIRST = 'accountStat_updatedAt_ASC_NULLS_FIRST',
  accountStat_updatedAt_ASC_NULLS_LAST = 'accountStat_updatedAt_ASC_NULLS_LAST',
  accountStat_updatedAt_DESC = 'accountStat_updatedAt_DESC',
  accountStat_updatedAt_DESC_NULLS_FIRST = 'accountStat_updatedAt_DESC_NULLS_FIRST',
  accountStat_updatedAt_DESC_NULLS_LAST = 'accountStat_updatedAt_DESC_NULLS_LAST',
  accountStat_volume_ASC = 'accountStat_volume_ASC',
  accountStat_volume_ASC_NULLS_FIRST = 'accountStat_volume_ASC_NULLS_FIRST',
  accountStat_volume_ASC_NULLS_LAST = 'accountStat_volume_ASC_NULLS_LAST',
  accountStat_volume_DESC = 'accountStat_volume_DESC',
  accountStat_volume_DESC_NULLS_FIRST = 'accountStat_volume_DESC_NULLS_FIRST',
  accountStat_volume_DESC_NULLS_LAST = 'accountStat_volume_DESC_NULLS_LAST',
  accountStat_wins_ASC = 'accountStat_wins_ASC',
  accountStat_wins_ASC_NULLS_FIRST = 'accountStat_wins_ASC_NULLS_FIRST',
  accountStat_wins_ASC_NULLS_LAST = 'accountStat_wins_ASC_NULLS_LAST',
  accountStat_wins_DESC = 'accountStat_wins_DESC',
  accountStat_wins_DESC_NULLS_FIRST = 'accountStat_wins_DESC_NULLS_FIRST',
  accountStat_wins_DESC_NULLS_LAST = 'accountStat_wins_DESC_NULLS_LAST',
  account_ASC = 'account_ASC',
  account_ASC_NULLS_FIRST = 'account_ASC_NULLS_FIRST',
  account_ASC_NULLS_LAST = 'account_ASC_NULLS_LAST',
  account_DESC = 'account_DESC',
  account_DESC_NULLS_FIRST = 'account_DESC_NULLS_FIRST',
  account_DESC_NULLS_LAST = 'account_DESC_NULLS_LAST',
  collateralAmount_ASC = 'collateralAmount_ASC',
  collateralAmount_ASC_NULLS_FIRST = 'collateralAmount_ASC_NULLS_FIRST',
  collateralAmount_ASC_NULLS_LAST = 'collateralAmount_ASC_NULLS_LAST',
  collateralAmount_DESC = 'collateralAmount_DESC',
  collateralAmount_DESC_NULLS_FIRST = 'collateralAmount_DESC_NULLS_FIRST',
  collateralAmount_DESC_NULLS_LAST = 'collateralAmount_DESC_NULLS_LAST',
  collateralToken_ASC = 'collateralToken_ASC',
  collateralToken_ASC_NULLS_FIRST = 'collateralToken_ASC_NULLS_FIRST',
  collateralToken_ASC_NULLS_LAST = 'collateralToken_ASC_NULLS_LAST',
  collateralToken_DESC = 'collateralToken_DESC',
  collateralToken_DESC_NULLS_FIRST = 'collateralToken_DESC_NULLS_FIRST',
  collateralToken_DESC_NULLS_LAST = 'collateralToken_DESC_NULLS_LAST',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_ASC_NULLS_FIRST = 'createdAt_ASC_NULLS_FIRST',
  createdAt_ASC_NULLS_LAST = 'createdAt_ASC_NULLS_LAST',
  createdAt_DESC = 'createdAt_DESC',
  createdAt_DESC_NULLS_FIRST = 'createdAt_DESC_NULLS_FIRST',
  createdAt_DESC_NULLS_LAST = 'createdAt_DESC_NULLS_LAST',
  entryPrice_ASC = 'entryPrice_ASC',
  entryPrice_ASC_NULLS_FIRST = 'entryPrice_ASC_NULLS_FIRST',
  entryPrice_ASC_NULLS_LAST = 'entryPrice_ASC_NULLS_LAST',
  entryPrice_DESC = 'entryPrice_DESC',
  entryPrice_DESC_NULLS_FIRST = 'entryPrice_DESC_NULLS_FIRST',
  entryPrice_DESC_NULLS_LAST = 'entryPrice_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  isLong_ASC = 'isLong_ASC',
  isLong_ASC_NULLS_FIRST = 'isLong_ASC_NULLS_FIRST',
  isLong_ASC_NULLS_LAST = 'isLong_ASC_NULLS_LAST',
  isLong_DESC = 'isLong_DESC',
  isLong_DESC_NULLS_FIRST = 'isLong_DESC_NULLS_FIRST',
  isLong_DESC_NULLS_LAST = 'isLong_DESC_NULLS_LAST',
  isSnapshot_ASC = 'isSnapshot_ASC',
  isSnapshot_ASC_NULLS_FIRST = 'isSnapshot_ASC_NULLS_FIRST',
  isSnapshot_ASC_NULLS_LAST = 'isSnapshot_ASC_NULLS_LAST',
  isSnapshot_DESC = 'isSnapshot_DESC',
  isSnapshot_DESC_NULLS_FIRST = 'isSnapshot_DESC_NULLS_FIRST',
  isSnapshot_DESC_NULLS_LAST = 'isSnapshot_DESC_NULLS_LAST',
  market_ASC = 'market_ASC',
  market_ASC_NULLS_FIRST = 'market_ASC_NULLS_FIRST',
  market_ASC_NULLS_LAST = 'market_ASC_NULLS_LAST',
  market_DESC = 'market_DESC',
  market_DESC_NULLS_FIRST = 'market_DESC_NULLS_FIRST',
  market_DESC_NULLS_LAST = 'market_DESC_NULLS_LAST',
  maxSize_ASC = 'maxSize_ASC',
  maxSize_ASC_NULLS_FIRST = 'maxSize_ASC_NULLS_FIRST',
  maxSize_ASC_NULLS_LAST = 'maxSize_ASC_NULLS_LAST',
  maxSize_DESC = 'maxSize_DESC',
  maxSize_DESC_NULLS_FIRST = 'maxSize_DESC_NULLS_FIRST',
  maxSize_DESC_NULLS_LAST = 'maxSize_DESC_NULLS_LAST',
  realizedFees_ASC = 'realizedFees_ASC',
  realizedFees_ASC_NULLS_FIRST = 'realizedFees_ASC_NULLS_FIRST',
  realizedFees_ASC_NULLS_LAST = 'realizedFees_ASC_NULLS_LAST',
  realizedFees_DESC = 'realizedFees_DESC',
  realizedFees_DESC_NULLS_FIRST = 'realizedFees_DESC_NULLS_FIRST',
  realizedFees_DESC_NULLS_LAST = 'realizedFees_DESC_NULLS_LAST',
  realizedPnl_ASC = 'realizedPnl_ASC',
  realizedPnl_ASC_NULLS_FIRST = 'realizedPnl_ASC_NULLS_FIRST',
  realizedPnl_ASC_NULLS_LAST = 'realizedPnl_ASC_NULLS_LAST',
  realizedPnl_DESC = 'realizedPnl_DESC',
  realizedPnl_DESC_NULLS_FIRST = 'realizedPnl_DESC_NULLS_FIRST',
  realizedPnl_DESC_NULLS_LAST = 'realizedPnl_DESC_NULLS_LAST',
  realizedPriceImpact_ASC = 'realizedPriceImpact_ASC',
  realizedPriceImpact_ASC_NULLS_FIRST = 'realizedPriceImpact_ASC_NULLS_FIRST',
  realizedPriceImpact_ASC_NULLS_LAST = 'realizedPriceImpact_ASC_NULLS_LAST',
  realizedPriceImpact_DESC = 'realizedPriceImpact_DESC',
  realizedPriceImpact_DESC_NULLS_FIRST = 'realizedPriceImpact_DESC_NULLS_FIRST',
  realizedPriceImpact_DESC_NULLS_LAST = 'realizedPriceImpact_DESC_NULLS_LAST',
  sizeInTokens_ASC = 'sizeInTokens_ASC',
  sizeInTokens_ASC_NULLS_FIRST = 'sizeInTokens_ASC_NULLS_FIRST',
  sizeInTokens_ASC_NULLS_LAST = 'sizeInTokens_ASC_NULLS_LAST',
  sizeInTokens_DESC = 'sizeInTokens_DESC',
  sizeInTokens_DESC_NULLS_FIRST = 'sizeInTokens_DESC_NULLS_FIRST',
  sizeInTokens_DESC_NULLS_LAST = 'sizeInTokens_DESC_NULLS_LAST',
  sizeInUsd_ASC = 'sizeInUsd_ASC',
  sizeInUsd_ASC_NULLS_FIRST = 'sizeInUsd_ASC_NULLS_FIRST',
  sizeInUsd_ASC_NULLS_LAST = 'sizeInUsd_ASC_NULLS_LAST',
  sizeInUsd_DESC = 'sizeInUsd_DESC',
  sizeInUsd_DESC_NULLS_FIRST = 'sizeInUsd_DESC_NULLS_FIRST',
  sizeInUsd_DESC_NULLS_LAST = 'sizeInUsd_DESC_NULLS_LAST',
  snapshotTimestamp_ASC = 'snapshotTimestamp_ASC',
  snapshotTimestamp_ASC_NULLS_FIRST = 'snapshotTimestamp_ASC_NULLS_FIRST',
  snapshotTimestamp_ASC_NULLS_LAST = 'snapshotTimestamp_ASC_NULLS_LAST',
  snapshotTimestamp_DESC = 'snapshotTimestamp_DESC',
  snapshotTimestamp_DESC_NULLS_FIRST = 'snapshotTimestamp_DESC_NULLS_FIRST',
  snapshotTimestamp_DESC_NULLS_LAST = 'snapshotTimestamp_DESC_NULLS_LAST',
  unrealizedFees_ASC = 'unrealizedFees_ASC',
  unrealizedFees_ASC_NULLS_FIRST = 'unrealizedFees_ASC_NULLS_FIRST',
  unrealizedFees_ASC_NULLS_LAST = 'unrealizedFees_ASC_NULLS_LAST',
  unrealizedFees_DESC = 'unrealizedFees_DESC',
  unrealizedFees_DESC_NULLS_FIRST = 'unrealizedFees_DESC_NULLS_FIRST',
  unrealizedFees_DESC_NULLS_LAST = 'unrealizedFees_DESC_NULLS_LAST',
  unrealizedPnl_ASC = 'unrealizedPnl_ASC',
  unrealizedPnl_ASC_NULLS_FIRST = 'unrealizedPnl_ASC_NULLS_FIRST',
  unrealizedPnl_ASC_NULLS_LAST = 'unrealizedPnl_ASC_NULLS_LAST',
  unrealizedPnl_DESC = 'unrealizedPnl_DESC',
  unrealizedPnl_DESC_NULLS_FIRST = 'unrealizedPnl_DESC_NULLS_FIRST',
  unrealizedPnl_DESC_NULLS_LAST = 'unrealizedPnl_DESC_NULLS_LAST',
  unrealizedPriceImpact_ASC = 'unrealizedPriceImpact_ASC',
  unrealizedPriceImpact_ASC_NULLS_FIRST = 'unrealizedPriceImpact_ASC_NULLS_FIRST',
  unrealizedPriceImpact_ASC_NULLS_LAST = 'unrealizedPriceImpact_ASC_NULLS_LAST',
  unrealizedPriceImpact_DESC = 'unrealizedPriceImpact_DESC',
  unrealizedPriceImpact_DESC_NULLS_FIRST = 'unrealizedPriceImpact_DESC_NULLS_FIRST',
  unrealizedPriceImpact_DESC_NULLS_LAST = 'unrealizedPriceImpact_DESC_NULLS_LAST',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_ASC_NULLS_FIRST = 'updatedAt_ASC_NULLS_FIRST',
  updatedAt_ASC_NULLS_LAST = 'updatedAt_ASC_NULLS_LAST',
  updatedAt_DESC = 'updatedAt_DESC',
  updatedAt_DESC_NULLS_FIRST = 'updatedAt_DESC_NULLS_FIRST',
  updatedAt_DESC_NULLS_LAST = 'updatedAt_DESC_NULLS_LAST'
}

export interface PositionWhereInput {
  AND?: InputMaybe<Array<PositionWhereInput>>;
  OR?: InputMaybe<Array<PositionWhereInput>>;
  accountStat?: InputMaybe<AccountStatWhereInput>;
  accountStat_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  collateralAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  collateralAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralToken_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  collateralToken_endsWith?: InputMaybe<Scalars['String']['input']>;
  collateralToken_eq?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  collateralToken_lt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_eq?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  collateralToken_startsWith?: InputMaybe<Scalars['String']['input']>;
  createdAt_eq?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  entryPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  entryPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isLong_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isLong_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isLong_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isSnapshot_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isSnapshot_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isSnapshot_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  market_endsWith?: InputMaybe<Scalars['String']['input']>;
  market_eq?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  market_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  market_not_eq?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  market_startsWith?: InputMaybe<Scalars['String']['input']>;
  maxSize_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxSize_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSize_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedFees_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedFees_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPriceImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPriceImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  realizedPriceImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPriceImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeInTokens_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeInTokens_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sizeInTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInTokens_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeInUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeInUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sizeInUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sizeInUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshotTimestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  snapshotTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  snapshotTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unrealizedFees_eq?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unrealizedFees_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  unrealizedFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedFees_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unrealizedPnl_eq?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unrealizedPnl_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  unrealizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unrealizedPriceImpact_eq?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPriceImpact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPriceImpact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPriceImpact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unrealizedPriceImpact_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  unrealizedPriceImpact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPriceImpact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPriceImpact_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  unrealizedPriceImpact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
}

export interface PositionsConnection {
  __typename?: 'PositionsConnection';
  edges: Array<PositionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface PositionsVolume {
  __typename?: 'PositionsVolume';
  id: Scalars['String']['output'];
  market: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  volume: Scalars['BigInt']['output'];
}

export interface PositionsVolumeEdge {
  __typename?: 'PositionsVolumeEdge';
  cursor: Scalars['String']['output'];
  node: PositionsVolume;
}

export enum PositionsVolumeOrderByInput {
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  market_ASC = 'market_ASC',
  market_ASC_NULLS_FIRST = 'market_ASC_NULLS_FIRST',
  market_ASC_NULLS_LAST = 'market_ASC_NULLS_LAST',
  market_DESC = 'market_DESC',
  market_DESC_NULLS_FIRST = 'market_DESC_NULLS_FIRST',
  market_DESC_NULLS_LAST = 'market_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  volume_ASC = 'volume_ASC',
  volume_ASC_NULLS_FIRST = 'volume_ASC_NULLS_FIRST',
  volume_ASC_NULLS_LAST = 'volume_ASC_NULLS_LAST',
  volume_DESC = 'volume_DESC',
  volume_DESC_NULLS_FIRST = 'volume_DESC_NULLS_FIRST',
  volume_DESC_NULLS_LAST = 'volume_DESC_NULLS_LAST'
}

export interface PositionsVolumeWhereInput {
  AND?: InputMaybe<Array<PositionsVolumeWhereInput>>;
  OR?: InputMaybe<Array<PositionsVolumeWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  market_endsWith?: InputMaybe<Scalars['String']['input']>;
  market_eq?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  market_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  market_not_eq?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  market_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  volume_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
}

export interface PositionsVolumesConnection {
  __typename?: 'PositionsVolumesConnection';
  edges: Array<PositionsVolumeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface Price {
  __typename?: 'Price';
  id: Scalars['String']['output'];
  isSnapshot: Scalars['Boolean']['output'];
  maxPrice: Scalars['BigInt']['output'];
  minPrice: Scalars['BigInt']['output'];
  snapshotTimestamp: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
}

export interface PriceEdge {
  __typename?: 'PriceEdge';
  cursor: Scalars['String']['output'];
  node: Price;
}

export enum PriceOrderByInput {
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  isSnapshot_ASC = 'isSnapshot_ASC',
  isSnapshot_ASC_NULLS_FIRST = 'isSnapshot_ASC_NULLS_FIRST',
  isSnapshot_ASC_NULLS_LAST = 'isSnapshot_ASC_NULLS_LAST',
  isSnapshot_DESC = 'isSnapshot_DESC',
  isSnapshot_DESC_NULLS_FIRST = 'isSnapshot_DESC_NULLS_FIRST',
  isSnapshot_DESC_NULLS_LAST = 'isSnapshot_DESC_NULLS_LAST',
  maxPrice_ASC = 'maxPrice_ASC',
  maxPrice_ASC_NULLS_FIRST = 'maxPrice_ASC_NULLS_FIRST',
  maxPrice_ASC_NULLS_LAST = 'maxPrice_ASC_NULLS_LAST',
  maxPrice_DESC = 'maxPrice_DESC',
  maxPrice_DESC_NULLS_FIRST = 'maxPrice_DESC_NULLS_FIRST',
  maxPrice_DESC_NULLS_LAST = 'maxPrice_DESC_NULLS_LAST',
  minPrice_ASC = 'minPrice_ASC',
  minPrice_ASC_NULLS_FIRST = 'minPrice_ASC_NULLS_FIRST',
  minPrice_ASC_NULLS_LAST = 'minPrice_ASC_NULLS_LAST',
  minPrice_DESC = 'minPrice_DESC',
  minPrice_DESC_NULLS_FIRST = 'minPrice_DESC_NULLS_FIRST',
  minPrice_DESC_NULLS_LAST = 'minPrice_DESC_NULLS_LAST',
  snapshotTimestamp_ASC = 'snapshotTimestamp_ASC',
  snapshotTimestamp_ASC_NULLS_FIRST = 'snapshotTimestamp_ASC_NULLS_FIRST',
  snapshotTimestamp_ASC_NULLS_LAST = 'snapshotTimestamp_ASC_NULLS_LAST',
  snapshotTimestamp_DESC = 'snapshotTimestamp_DESC',
  snapshotTimestamp_DESC_NULLS_FIRST = 'snapshotTimestamp_DESC_NULLS_FIRST',
  snapshotTimestamp_DESC_NULLS_LAST = 'snapshotTimestamp_DESC_NULLS_LAST',
  token_ASC = 'token_ASC',
  token_ASC_NULLS_FIRST = 'token_ASC_NULLS_FIRST',
  token_ASC_NULLS_LAST = 'token_ASC_NULLS_LAST',
  token_DESC = 'token_DESC',
  token_DESC_NULLS_FIRST = 'token_DESC_NULLS_FIRST',
  token_DESC_NULLS_LAST = 'token_DESC_NULLS_LAST',
  type_ASC = 'type_ASC',
  type_ASC_NULLS_FIRST = 'type_ASC_NULLS_FIRST',
  type_ASC_NULLS_LAST = 'type_ASC_NULLS_LAST',
  type_DESC = 'type_DESC',
  type_DESC_NULLS_FIRST = 'type_DESC_NULLS_FIRST',
  type_DESC_NULLS_LAST = 'type_DESC_NULLS_LAST'
}

export interface PriceWhereInput {
  AND?: InputMaybe<Array<PriceWhereInput>>;
  OR?: InputMaybe<Array<PriceWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isSnapshot_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isSnapshot_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isSnapshot_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  maxPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshotTimestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  snapshotTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  snapshotTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  snapshotTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token_endsWith?: InputMaybe<Scalars['String']['input']>;
  token_eq?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  token_not_eq?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  token_startsWith?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  type_endsWith?: InputMaybe<Scalars['String']['input']>;
  type_eq?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  type_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  type_not_eq?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  type_startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface PricesConnection {
  __typename?: 'PricesConnection';
  edges: Array<PriceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface Query {
  __typename?: 'Query';
  accountStatById?: Maybe<AccountStat>;
  accountStats: Array<AccountStat>;
  accountStatsConnection: AccountStatsConnection;
  aprSnapshotById?: Maybe<AprSnapshot>;
  aprSnapshots: Array<AprSnapshot>;
  aprSnapshotsConnection: AprSnapshotsConnection;
  claimActionById?: Maybe<ClaimAction>;
  claimActions: Array<ClaimAction>;
  claimActionsConnection: ClaimActionsConnection;
  claimableCollateralById?: Maybe<ClaimableCollateral>;
  claimableCollaterals: Array<ClaimableCollateral>;
  claimableCollateralsConnection: ClaimableCollateralsConnection;
  depositActionById?: Maybe<DepositAction>;
  depositActions: Array<DepositAction>;
  depositActionsConnection: DepositActionsConnection;
  distributionById?: Maybe<Distribution>;
  distributions: Array<Distribution>;
  distributionsConnection: DistributionsConnection;
  feesInfoById?: Maybe<FeesInfo>;
  feesInfos: Array<FeesInfo>;
  feesInfosConnection: FeesInfosConnection;
  glvDepositActionById?: Maybe<GlvDepositAction>;
  glvDepositActions: Array<GlvDepositAction>;
  glvDepositActionsConnection: GlvDepositActionsConnection;
  glvWithdrawalActionById?: Maybe<GlvWithdrawalAction>;
  glvWithdrawalActions: Array<GlvWithdrawalAction>;
  glvWithdrawalActionsConnection: GlvWithdrawalActionsConnection;
  marketInfoById?: Maybe<MarketInfo>;
  marketInfos: Array<MarketInfo>;
  marketInfosConnection: MarketInfosConnection;
  periodAccountStatById?: Maybe<PeriodAccountStat>;
  periodAccountStats: Array<PeriodAccountStat>;
  periodAccountStatsConnection: PeriodAccountStatsConnection;
  platformStatById?: Maybe<PlatformStat>;
  platformStats: Array<PlatformStat>;
  platformStatsConnection: PlatformStatsConnection;
  positionById?: Maybe<Position>;
  positions: Array<Position>;
  positionsConnection: PositionsConnection;
  positionsVolumeById?: Maybe<PositionsVolume>;
  positionsVolumes: Array<PositionsVolume>;
  positionsVolumesConnection: PositionsVolumesConnection;
  priceById?: Maybe<Price>;
  prices: Array<Price>;
  pricesConnection: PricesConnection;
  squidStatus?: Maybe<SquidStatus>;
  tradeActionById?: Maybe<TradeAction>;
  tradeActions: Array<TradeAction>;
  tradeActionsConnection: TradeActionsConnection;
  transactionById?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transactionsConnection: TransactionsConnection;
  userStatById?: Maybe<UserStat>;
  userStats: Array<UserStat>;
  userStatsConnection: UserStatsConnection;
  volumeInfoById?: Maybe<VolumeInfo>;
  volumeInfos: Array<VolumeInfo>;
  volumeInfosConnection: VolumeInfosConnection;
  withdrawalActionById?: Maybe<WithdrawalAction>;
  withdrawalActions: Array<WithdrawalAction>;
  withdrawalActionsConnection: WithdrawalActionsConnection;
}


export interface QueryaccountStatByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryaccountStatsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountStatOrderByInput>>;
  where?: InputMaybe<AccountStatWhereInput>;
}


export interface QueryaccountStatsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AccountStatOrderByInput>;
  where?: InputMaybe<AccountStatWhereInput>;
}


export interface QueryaprSnapshotByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryaprSnapshotsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AprSnapshotOrderByInput>>;
  where?: InputMaybe<AprSnapshotWhereInput>;
}


export interface QueryaprSnapshotsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AprSnapshotOrderByInput>;
  where?: InputMaybe<AprSnapshotWhereInput>;
}


export interface QueryclaimActionByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryclaimActionsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimActionOrderByInput>>;
  where?: InputMaybe<ClaimActionWhereInput>;
}


export interface QueryclaimActionsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ClaimActionOrderByInput>;
  where?: InputMaybe<ClaimActionWhereInput>;
}


export interface QueryclaimableCollateralByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryclaimableCollateralsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimableCollateralOrderByInput>>;
  where?: InputMaybe<ClaimableCollateralWhereInput>;
}


export interface QueryclaimableCollateralsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ClaimableCollateralOrderByInput>;
  where?: InputMaybe<ClaimableCollateralWhereInput>;
}


export interface QuerydepositActionByIdArgs {
  id: Scalars['String']['input'];
}


export interface QuerydepositActionsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DepositActionOrderByInput>>;
  where?: InputMaybe<DepositActionWhereInput>;
}


export interface QuerydepositActionsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DepositActionOrderByInput>;
  where?: InputMaybe<DepositActionWhereInput>;
}


export interface QuerydistributionByIdArgs {
  id: Scalars['String']['input'];
}


export interface QuerydistributionsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionOrderByInput>>;
  where?: InputMaybe<DistributionWhereInput>;
}


export interface QuerydistributionsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DistributionOrderByInput>;
  where?: InputMaybe<DistributionWhereInput>;
}


export interface QueryfeesInfoByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryfeesInfosArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeesInfoOrderByInput>>;
  where?: InputMaybe<FeesInfoWhereInput>;
}


export interface QueryfeesInfosConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<FeesInfoOrderByInput>;
  where?: InputMaybe<FeesInfoWhereInput>;
}


export interface QueryglvDepositActionByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryglvDepositActionsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GlvDepositActionOrderByInput>>;
  where?: InputMaybe<GlvDepositActionWhereInput>;
}


export interface QueryglvDepositActionsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<GlvDepositActionOrderByInput>;
  where?: InputMaybe<GlvDepositActionWhereInput>;
}


export interface QueryglvWithdrawalActionByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryglvWithdrawalActionsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GlvWithdrawalActionOrderByInput>>;
  where?: InputMaybe<GlvWithdrawalActionWhereInput>;
}


export interface QueryglvWithdrawalActionsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<GlvWithdrawalActionOrderByInput>;
  where?: InputMaybe<GlvWithdrawalActionWhereInput>;
}


export interface QuerymarketInfoByIdArgs {
  id: Scalars['String']['input'];
}


export interface QuerymarketInfosArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MarketInfoOrderByInput>>;
  where?: InputMaybe<MarketInfoWhereInput>;
}


export interface QuerymarketInfosConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<MarketInfoOrderByInput>;
  where?: InputMaybe<MarketInfoWhereInput>;
}


export interface QueryperiodAccountStatByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryperiodAccountStatsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PeriodAccountStatOrderByInput>>;
  where?: InputMaybe<PeriodAccountStatWhereInput>;
}


export interface QueryperiodAccountStatsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PeriodAccountStatOrderByInput>;
  where?: InputMaybe<PeriodAccountStatWhereInput>;
}


export interface QueryplatformStatByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryplatformStatsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlatformStatOrderByInput>>;
  where?: InputMaybe<PlatformStatWhereInput>;
}


export interface QueryplatformStatsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PlatformStatOrderByInput>;
  where?: InputMaybe<PlatformStatWhereInput>;
}


export interface QuerypositionByIdArgs {
  id: Scalars['String']['input'];
}


export interface QuerypositionsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PositionOrderByInput>>;
  where?: InputMaybe<PositionWhereInput>;
}


export interface QuerypositionsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PositionOrderByInput>;
  where?: InputMaybe<PositionWhereInput>;
}


export interface QuerypositionsVolumeByIdArgs {
  id: Scalars['String']['input'];
}


export interface QuerypositionsVolumesArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PositionsVolumeOrderByInput>>;
  where?: InputMaybe<PositionsVolumeWhereInput>;
}


export interface QuerypositionsVolumesConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PositionsVolumeOrderByInput>;
  where?: InputMaybe<PositionsVolumeWhereInput>;
}


export interface QuerypriceByIdArgs {
  id: Scalars['String']['input'];
}


export interface QuerypricesArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriceOrderByInput>>;
  where?: InputMaybe<PriceWhereInput>;
}


export interface QuerypricesConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PriceOrderByInput>;
  where?: InputMaybe<PriceWhereInput>;
}


export interface QuerytradeActionByIdArgs {
  id: Scalars['String']['input'];
}


export interface QuerytradeActionsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TradeActionOrderByInput>>;
  where?: InputMaybe<TradeActionWhereInput>;
}


export interface QuerytradeActionsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<TradeActionOrderByInput>;
  where?: InputMaybe<TradeActionWhereInput>;
}


export interface QuerytransactionByIdArgs {
  id: Scalars['String']['input'];
}


export interface QuerytransactionsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransactionOrderByInput>>;
  where?: InputMaybe<TransactionWhereInput>;
}


export interface QuerytransactionsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<TransactionOrderByInput>;
  where?: InputMaybe<TransactionWhereInput>;
}


export interface QueryuserStatByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryuserStatsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserStatOrderByInput>>;
  where?: InputMaybe<UserStatWhereInput>;
}


export interface QueryuserStatsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<UserStatOrderByInput>;
  where?: InputMaybe<UserStatWhereInput>;
}


export interface QueryvolumeInfoByIdArgs {
  id: Scalars['String']['input'];
}


export interface QueryvolumeInfosArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VolumeInfoOrderByInput>>;
  where?: InputMaybe<VolumeInfoWhereInput>;
}


export interface QueryvolumeInfosConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VolumeInfoOrderByInput>;
  where?: InputMaybe<VolumeInfoWhereInput>;
}


export interface QuerywithdrawalActionByIdArgs {
  id: Scalars['String']['input'];
}


export interface QuerywithdrawalActionsArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WithdrawalActionOrderByInput>>;
  where?: InputMaybe<WithdrawalActionWhereInput>;
}


export interface QuerywithdrawalActionsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<WithdrawalActionOrderByInput>;
  where?: InputMaybe<WithdrawalActionWhereInput>;
}

export interface SquidStatus {
  __typename?: 'SquidStatus';
  /** The hash of the last processed finalized block */
  finalizedHash?: Maybe<Scalars['String']['output']>;
  /** The height of the last processed finalized block */
  finalizedHeight?: Maybe<Scalars['Int']['output']>;
  /** The hash of the last processed block */
  hash?: Maybe<Scalars['String']['output']>;
  /** The height of the last processed block */
  height?: Maybe<Scalars['Int']['output']>;
}

export interface TradeAction {
  __typename?: 'TradeAction';
  acceptablePrice?: Maybe<Scalars['BigInt']['output']>;
  account: Scalars['String']['output'];
  basePnlUsd?: Maybe<Scalars['BigInt']['output']>;
  borrowingFeeAmount?: Maybe<Scalars['BigInt']['output']>;
  collateralTokenPriceMax?: Maybe<Scalars['BigInt']['output']>;
  collateralTokenPriceMin?: Maybe<Scalars['BigInt']['output']>;
  collateralTotalCostAmount?: Maybe<Scalars['BigInt']['output']>;
  contractTriggerPrice?: Maybe<Scalars['BigInt']['output']>;
  decreasePositionSwapType?: Maybe<Scalars['Int']['output']>;
  eventName: Scalars['String']['output'];
  executionAmountOut?: Maybe<Scalars['BigInt']['output']>;
  executionPrice?: Maybe<Scalars['BigInt']['output']>;
  fundingFeeAmount?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['String']['output'];
  indexTokenPriceMax?: Maybe<Scalars['BigInt']['output']>;
  indexTokenPriceMin?: Maybe<Scalars['BigInt']['output']>;
  initialCollateralDeltaAmount: Scalars['BigInt']['output'];
  initialCollateralTokenAddress: Scalars['String']['output'];
  isLong?: Maybe<Scalars['Boolean']['output']>;
  liquidationFeeAmount?: Maybe<Scalars['BigInt']['output']>;
  marketAddress?: Maybe<Scalars['String']['output']>;
  minOutputAmount?: Maybe<Scalars['BigInt']['output']>;
  numberOfParts?: Maybe<Scalars['Int']['output']>;
  orderKey: Scalars['String']['output'];
  orderType: Scalars['Int']['output'];
  pnlUsd?: Maybe<Scalars['BigInt']['output']>;
  positionFeeAmount?: Maybe<Scalars['BigInt']['output']>;
  priceImpactAmount?: Maybe<Scalars['BigInt']['output']>;
  priceImpactDiffUsd?: Maybe<Scalars['BigInt']['output']>;
  priceImpactUsd?: Maybe<Scalars['BigInt']['output']>;
  proportionalPendingImpactUsd?: Maybe<Scalars['BigInt']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  reasonBytes?: Maybe<Scalars['String']['output']>;
  shouldUnwrapNativeToken?: Maybe<Scalars['Boolean']['output']>;
  sizeDeltaInTokens?: Maybe<Scalars['BigInt']['output']>;
  sizeDeltaUsd?: Maybe<Scalars['BigInt']['output']>;
  srcChainId?: Maybe<Scalars['BigInt']['output']>;
  swapImpactUsd?: Maybe<Scalars['BigInt']['output']>;
  swapPath: Array<Scalars['String']['output']>;
  timestamp: Scalars['Int']['output'];
  totalImpactUsd?: Maybe<Scalars['BigInt']['output']>;
  transaction: Transaction;
  triggerPrice?: Maybe<Scalars['BigInt']['output']>;
  twapGroupId?: Maybe<Scalars['String']['output']>;
  uiFeeReceiver: Scalars['String']['output'];
}

export interface TradeActionEdge {
  __typename?: 'TradeActionEdge';
  cursor: Scalars['String']['output'];
  node: TradeAction;
}

export enum TradeActionOrderByInput {
  acceptablePrice_ASC = 'acceptablePrice_ASC',
  acceptablePrice_ASC_NULLS_FIRST = 'acceptablePrice_ASC_NULLS_FIRST',
  acceptablePrice_ASC_NULLS_LAST = 'acceptablePrice_ASC_NULLS_LAST',
  acceptablePrice_DESC = 'acceptablePrice_DESC',
  acceptablePrice_DESC_NULLS_FIRST = 'acceptablePrice_DESC_NULLS_FIRST',
  acceptablePrice_DESC_NULLS_LAST = 'acceptablePrice_DESC_NULLS_LAST',
  account_ASC = 'account_ASC',
  account_ASC_NULLS_FIRST = 'account_ASC_NULLS_FIRST',
  account_ASC_NULLS_LAST = 'account_ASC_NULLS_LAST',
  account_DESC = 'account_DESC',
  account_DESC_NULLS_FIRST = 'account_DESC_NULLS_FIRST',
  account_DESC_NULLS_LAST = 'account_DESC_NULLS_LAST',
  basePnlUsd_ASC = 'basePnlUsd_ASC',
  basePnlUsd_ASC_NULLS_FIRST = 'basePnlUsd_ASC_NULLS_FIRST',
  basePnlUsd_ASC_NULLS_LAST = 'basePnlUsd_ASC_NULLS_LAST',
  basePnlUsd_DESC = 'basePnlUsd_DESC',
  basePnlUsd_DESC_NULLS_FIRST = 'basePnlUsd_DESC_NULLS_FIRST',
  basePnlUsd_DESC_NULLS_LAST = 'basePnlUsd_DESC_NULLS_LAST',
  borrowingFeeAmount_ASC = 'borrowingFeeAmount_ASC',
  borrowingFeeAmount_ASC_NULLS_FIRST = 'borrowingFeeAmount_ASC_NULLS_FIRST',
  borrowingFeeAmount_ASC_NULLS_LAST = 'borrowingFeeAmount_ASC_NULLS_LAST',
  borrowingFeeAmount_DESC = 'borrowingFeeAmount_DESC',
  borrowingFeeAmount_DESC_NULLS_FIRST = 'borrowingFeeAmount_DESC_NULLS_FIRST',
  borrowingFeeAmount_DESC_NULLS_LAST = 'borrowingFeeAmount_DESC_NULLS_LAST',
  collateralTokenPriceMax_ASC = 'collateralTokenPriceMax_ASC',
  collateralTokenPriceMax_ASC_NULLS_FIRST = 'collateralTokenPriceMax_ASC_NULLS_FIRST',
  collateralTokenPriceMax_ASC_NULLS_LAST = 'collateralTokenPriceMax_ASC_NULLS_LAST',
  collateralTokenPriceMax_DESC = 'collateralTokenPriceMax_DESC',
  collateralTokenPriceMax_DESC_NULLS_FIRST = 'collateralTokenPriceMax_DESC_NULLS_FIRST',
  collateralTokenPriceMax_DESC_NULLS_LAST = 'collateralTokenPriceMax_DESC_NULLS_LAST',
  collateralTokenPriceMin_ASC = 'collateralTokenPriceMin_ASC',
  collateralTokenPriceMin_ASC_NULLS_FIRST = 'collateralTokenPriceMin_ASC_NULLS_FIRST',
  collateralTokenPriceMin_ASC_NULLS_LAST = 'collateralTokenPriceMin_ASC_NULLS_LAST',
  collateralTokenPriceMin_DESC = 'collateralTokenPriceMin_DESC',
  collateralTokenPriceMin_DESC_NULLS_FIRST = 'collateralTokenPriceMin_DESC_NULLS_FIRST',
  collateralTokenPriceMin_DESC_NULLS_LAST = 'collateralTokenPriceMin_DESC_NULLS_LAST',
  collateralTotalCostAmount_ASC = 'collateralTotalCostAmount_ASC',
  collateralTotalCostAmount_ASC_NULLS_FIRST = 'collateralTotalCostAmount_ASC_NULLS_FIRST',
  collateralTotalCostAmount_ASC_NULLS_LAST = 'collateralTotalCostAmount_ASC_NULLS_LAST',
  collateralTotalCostAmount_DESC = 'collateralTotalCostAmount_DESC',
  collateralTotalCostAmount_DESC_NULLS_FIRST = 'collateralTotalCostAmount_DESC_NULLS_FIRST',
  collateralTotalCostAmount_DESC_NULLS_LAST = 'collateralTotalCostAmount_DESC_NULLS_LAST',
  contractTriggerPrice_ASC = 'contractTriggerPrice_ASC',
  contractTriggerPrice_ASC_NULLS_FIRST = 'contractTriggerPrice_ASC_NULLS_FIRST',
  contractTriggerPrice_ASC_NULLS_LAST = 'contractTriggerPrice_ASC_NULLS_LAST',
  contractTriggerPrice_DESC = 'contractTriggerPrice_DESC',
  contractTriggerPrice_DESC_NULLS_FIRST = 'contractTriggerPrice_DESC_NULLS_FIRST',
  contractTriggerPrice_DESC_NULLS_LAST = 'contractTriggerPrice_DESC_NULLS_LAST',
  decreasePositionSwapType_ASC = 'decreasePositionSwapType_ASC',
  decreasePositionSwapType_ASC_NULLS_FIRST = 'decreasePositionSwapType_ASC_NULLS_FIRST',
  decreasePositionSwapType_ASC_NULLS_LAST = 'decreasePositionSwapType_ASC_NULLS_LAST',
  decreasePositionSwapType_DESC = 'decreasePositionSwapType_DESC',
  decreasePositionSwapType_DESC_NULLS_FIRST = 'decreasePositionSwapType_DESC_NULLS_FIRST',
  decreasePositionSwapType_DESC_NULLS_LAST = 'decreasePositionSwapType_DESC_NULLS_LAST',
  eventName_ASC = 'eventName_ASC',
  eventName_ASC_NULLS_FIRST = 'eventName_ASC_NULLS_FIRST',
  eventName_ASC_NULLS_LAST = 'eventName_ASC_NULLS_LAST',
  eventName_DESC = 'eventName_DESC',
  eventName_DESC_NULLS_FIRST = 'eventName_DESC_NULLS_FIRST',
  eventName_DESC_NULLS_LAST = 'eventName_DESC_NULLS_LAST',
  executionAmountOut_ASC = 'executionAmountOut_ASC',
  executionAmountOut_ASC_NULLS_FIRST = 'executionAmountOut_ASC_NULLS_FIRST',
  executionAmountOut_ASC_NULLS_LAST = 'executionAmountOut_ASC_NULLS_LAST',
  executionAmountOut_DESC = 'executionAmountOut_DESC',
  executionAmountOut_DESC_NULLS_FIRST = 'executionAmountOut_DESC_NULLS_FIRST',
  executionAmountOut_DESC_NULLS_LAST = 'executionAmountOut_DESC_NULLS_LAST',
  executionPrice_ASC = 'executionPrice_ASC',
  executionPrice_ASC_NULLS_FIRST = 'executionPrice_ASC_NULLS_FIRST',
  executionPrice_ASC_NULLS_LAST = 'executionPrice_ASC_NULLS_LAST',
  executionPrice_DESC = 'executionPrice_DESC',
  executionPrice_DESC_NULLS_FIRST = 'executionPrice_DESC_NULLS_FIRST',
  executionPrice_DESC_NULLS_LAST = 'executionPrice_DESC_NULLS_LAST',
  fundingFeeAmount_ASC = 'fundingFeeAmount_ASC',
  fundingFeeAmount_ASC_NULLS_FIRST = 'fundingFeeAmount_ASC_NULLS_FIRST',
  fundingFeeAmount_ASC_NULLS_LAST = 'fundingFeeAmount_ASC_NULLS_LAST',
  fundingFeeAmount_DESC = 'fundingFeeAmount_DESC',
  fundingFeeAmount_DESC_NULLS_FIRST = 'fundingFeeAmount_DESC_NULLS_FIRST',
  fundingFeeAmount_DESC_NULLS_LAST = 'fundingFeeAmount_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  indexTokenPriceMax_ASC = 'indexTokenPriceMax_ASC',
  indexTokenPriceMax_ASC_NULLS_FIRST = 'indexTokenPriceMax_ASC_NULLS_FIRST',
  indexTokenPriceMax_ASC_NULLS_LAST = 'indexTokenPriceMax_ASC_NULLS_LAST',
  indexTokenPriceMax_DESC = 'indexTokenPriceMax_DESC',
  indexTokenPriceMax_DESC_NULLS_FIRST = 'indexTokenPriceMax_DESC_NULLS_FIRST',
  indexTokenPriceMax_DESC_NULLS_LAST = 'indexTokenPriceMax_DESC_NULLS_LAST',
  indexTokenPriceMin_ASC = 'indexTokenPriceMin_ASC',
  indexTokenPriceMin_ASC_NULLS_FIRST = 'indexTokenPriceMin_ASC_NULLS_FIRST',
  indexTokenPriceMin_ASC_NULLS_LAST = 'indexTokenPriceMin_ASC_NULLS_LAST',
  indexTokenPriceMin_DESC = 'indexTokenPriceMin_DESC',
  indexTokenPriceMin_DESC_NULLS_FIRST = 'indexTokenPriceMin_DESC_NULLS_FIRST',
  indexTokenPriceMin_DESC_NULLS_LAST = 'indexTokenPriceMin_DESC_NULLS_LAST',
  initialCollateralDeltaAmount_ASC = 'initialCollateralDeltaAmount_ASC',
  initialCollateralDeltaAmount_ASC_NULLS_FIRST = 'initialCollateralDeltaAmount_ASC_NULLS_FIRST',
  initialCollateralDeltaAmount_ASC_NULLS_LAST = 'initialCollateralDeltaAmount_ASC_NULLS_LAST',
  initialCollateralDeltaAmount_DESC = 'initialCollateralDeltaAmount_DESC',
  initialCollateralDeltaAmount_DESC_NULLS_FIRST = 'initialCollateralDeltaAmount_DESC_NULLS_FIRST',
  initialCollateralDeltaAmount_DESC_NULLS_LAST = 'initialCollateralDeltaAmount_DESC_NULLS_LAST',
  initialCollateralTokenAddress_ASC = 'initialCollateralTokenAddress_ASC',
  initialCollateralTokenAddress_ASC_NULLS_FIRST = 'initialCollateralTokenAddress_ASC_NULLS_FIRST',
  initialCollateralTokenAddress_ASC_NULLS_LAST = 'initialCollateralTokenAddress_ASC_NULLS_LAST',
  initialCollateralTokenAddress_DESC = 'initialCollateralTokenAddress_DESC',
  initialCollateralTokenAddress_DESC_NULLS_FIRST = 'initialCollateralTokenAddress_DESC_NULLS_FIRST',
  initialCollateralTokenAddress_DESC_NULLS_LAST = 'initialCollateralTokenAddress_DESC_NULLS_LAST',
  isLong_ASC = 'isLong_ASC',
  isLong_ASC_NULLS_FIRST = 'isLong_ASC_NULLS_FIRST',
  isLong_ASC_NULLS_LAST = 'isLong_ASC_NULLS_LAST',
  isLong_DESC = 'isLong_DESC',
  isLong_DESC_NULLS_FIRST = 'isLong_DESC_NULLS_FIRST',
  isLong_DESC_NULLS_LAST = 'isLong_DESC_NULLS_LAST',
  liquidationFeeAmount_ASC = 'liquidationFeeAmount_ASC',
  liquidationFeeAmount_ASC_NULLS_FIRST = 'liquidationFeeAmount_ASC_NULLS_FIRST',
  liquidationFeeAmount_ASC_NULLS_LAST = 'liquidationFeeAmount_ASC_NULLS_LAST',
  liquidationFeeAmount_DESC = 'liquidationFeeAmount_DESC',
  liquidationFeeAmount_DESC_NULLS_FIRST = 'liquidationFeeAmount_DESC_NULLS_FIRST',
  liquidationFeeAmount_DESC_NULLS_LAST = 'liquidationFeeAmount_DESC_NULLS_LAST',
  marketAddress_ASC = 'marketAddress_ASC',
  marketAddress_ASC_NULLS_FIRST = 'marketAddress_ASC_NULLS_FIRST',
  marketAddress_ASC_NULLS_LAST = 'marketAddress_ASC_NULLS_LAST',
  marketAddress_DESC = 'marketAddress_DESC',
  marketAddress_DESC_NULLS_FIRST = 'marketAddress_DESC_NULLS_FIRST',
  marketAddress_DESC_NULLS_LAST = 'marketAddress_DESC_NULLS_LAST',
  minOutputAmount_ASC = 'minOutputAmount_ASC',
  minOutputAmount_ASC_NULLS_FIRST = 'minOutputAmount_ASC_NULLS_FIRST',
  minOutputAmount_ASC_NULLS_LAST = 'minOutputAmount_ASC_NULLS_LAST',
  minOutputAmount_DESC = 'minOutputAmount_DESC',
  minOutputAmount_DESC_NULLS_FIRST = 'minOutputAmount_DESC_NULLS_FIRST',
  minOutputAmount_DESC_NULLS_LAST = 'minOutputAmount_DESC_NULLS_LAST',
  numberOfParts_ASC = 'numberOfParts_ASC',
  numberOfParts_ASC_NULLS_FIRST = 'numberOfParts_ASC_NULLS_FIRST',
  numberOfParts_ASC_NULLS_LAST = 'numberOfParts_ASC_NULLS_LAST',
  numberOfParts_DESC = 'numberOfParts_DESC',
  numberOfParts_DESC_NULLS_FIRST = 'numberOfParts_DESC_NULLS_FIRST',
  numberOfParts_DESC_NULLS_LAST = 'numberOfParts_DESC_NULLS_LAST',
  orderKey_ASC = 'orderKey_ASC',
  orderKey_ASC_NULLS_FIRST = 'orderKey_ASC_NULLS_FIRST',
  orderKey_ASC_NULLS_LAST = 'orderKey_ASC_NULLS_LAST',
  orderKey_DESC = 'orderKey_DESC',
  orderKey_DESC_NULLS_FIRST = 'orderKey_DESC_NULLS_FIRST',
  orderKey_DESC_NULLS_LAST = 'orderKey_DESC_NULLS_LAST',
  orderType_ASC = 'orderType_ASC',
  orderType_ASC_NULLS_FIRST = 'orderType_ASC_NULLS_FIRST',
  orderType_ASC_NULLS_LAST = 'orderType_ASC_NULLS_LAST',
  orderType_DESC = 'orderType_DESC',
  orderType_DESC_NULLS_FIRST = 'orderType_DESC_NULLS_FIRST',
  orderType_DESC_NULLS_LAST = 'orderType_DESC_NULLS_LAST',
  pnlUsd_ASC = 'pnlUsd_ASC',
  pnlUsd_ASC_NULLS_FIRST = 'pnlUsd_ASC_NULLS_FIRST',
  pnlUsd_ASC_NULLS_LAST = 'pnlUsd_ASC_NULLS_LAST',
  pnlUsd_DESC = 'pnlUsd_DESC',
  pnlUsd_DESC_NULLS_FIRST = 'pnlUsd_DESC_NULLS_FIRST',
  pnlUsd_DESC_NULLS_LAST = 'pnlUsd_DESC_NULLS_LAST',
  positionFeeAmount_ASC = 'positionFeeAmount_ASC',
  positionFeeAmount_ASC_NULLS_FIRST = 'positionFeeAmount_ASC_NULLS_FIRST',
  positionFeeAmount_ASC_NULLS_LAST = 'positionFeeAmount_ASC_NULLS_LAST',
  positionFeeAmount_DESC = 'positionFeeAmount_DESC',
  positionFeeAmount_DESC_NULLS_FIRST = 'positionFeeAmount_DESC_NULLS_FIRST',
  positionFeeAmount_DESC_NULLS_LAST = 'positionFeeAmount_DESC_NULLS_LAST',
  priceImpactAmount_ASC = 'priceImpactAmount_ASC',
  priceImpactAmount_ASC_NULLS_FIRST = 'priceImpactAmount_ASC_NULLS_FIRST',
  priceImpactAmount_ASC_NULLS_LAST = 'priceImpactAmount_ASC_NULLS_LAST',
  priceImpactAmount_DESC = 'priceImpactAmount_DESC',
  priceImpactAmount_DESC_NULLS_FIRST = 'priceImpactAmount_DESC_NULLS_FIRST',
  priceImpactAmount_DESC_NULLS_LAST = 'priceImpactAmount_DESC_NULLS_LAST',
  priceImpactDiffUsd_ASC = 'priceImpactDiffUsd_ASC',
  priceImpactDiffUsd_ASC_NULLS_FIRST = 'priceImpactDiffUsd_ASC_NULLS_FIRST',
  priceImpactDiffUsd_ASC_NULLS_LAST = 'priceImpactDiffUsd_ASC_NULLS_LAST',
  priceImpactDiffUsd_DESC = 'priceImpactDiffUsd_DESC',
  priceImpactDiffUsd_DESC_NULLS_FIRST = 'priceImpactDiffUsd_DESC_NULLS_FIRST',
  priceImpactDiffUsd_DESC_NULLS_LAST = 'priceImpactDiffUsd_DESC_NULLS_LAST',
  priceImpactUsd_ASC = 'priceImpactUsd_ASC',
  priceImpactUsd_ASC_NULLS_FIRST = 'priceImpactUsd_ASC_NULLS_FIRST',
  priceImpactUsd_ASC_NULLS_LAST = 'priceImpactUsd_ASC_NULLS_LAST',
  priceImpactUsd_DESC = 'priceImpactUsd_DESC',
  priceImpactUsd_DESC_NULLS_FIRST = 'priceImpactUsd_DESC_NULLS_FIRST',
  priceImpactUsd_DESC_NULLS_LAST = 'priceImpactUsd_DESC_NULLS_LAST',
  proportionalPendingImpactUsd_ASC = 'proportionalPendingImpactUsd_ASC',
  proportionalPendingImpactUsd_ASC_NULLS_FIRST = 'proportionalPendingImpactUsd_ASC_NULLS_FIRST',
  proportionalPendingImpactUsd_ASC_NULLS_LAST = 'proportionalPendingImpactUsd_ASC_NULLS_LAST',
  proportionalPendingImpactUsd_DESC = 'proportionalPendingImpactUsd_DESC',
  proportionalPendingImpactUsd_DESC_NULLS_FIRST = 'proportionalPendingImpactUsd_DESC_NULLS_FIRST',
  proportionalPendingImpactUsd_DESC_NULLS_LAST = 'proportionalPendingImpactUsd_DESC_NULLS_LAST',
  reasonBytes_ASC = 'reasonBytes_ASC',
  reasonBytes_ASC_NULLS_FIRST = 'reasonBytes_ASC_NULLS_FIRST',
  reasonBytes_ASC_NULLS_LAST = 'reasonBytes_ASC_NULLS_LAST',
  reasonBytes_DESC = 'reasonBytes_DESC',
  reasonBytes_DESC_NULLS_FIRST = 'reasonBytes_DESC_NULLS_FIRST',
  reasonBytes_DESC_NULLS_LAST = 'reasonBytes_DESC_NULLS_LAST',
  reason_ASC = 'reason_ASC',
  reason_ASC_NULLS_FIRST = 'reason_ASC_NULLS_FIRST',
  reason_ASC_NULLS_LAST = 'reason_ASC_NULLS_LAST',
  reason_DESC = 'reason_DESC',
  reason_DESC_NULLS_FIRST = 'reason_DESC_NULLS_FIRST',
  reason_DESC_NULLS_LAST = 'reason_DESC_NULLS_LAST',
  shouldUnwrapNativeToken_ASC = 'shouldUnwrapNativeToken_ASC',
  shouldUnwrapNativeToken_ASC_NULLS_FIRST = 'shouldUnwrapNativeToken_ASC_NULLS_FIRST',
  shouldUnwrapNativeToken_ASC_NULLS_LAST = 'shouldUnwrapNativeToken_ASC_NULLS_LAST',
  shouldUnwrapNativeToken_DESC = 'shouldUnwrapNativeToken_DESC',
  shouldUnwrapNativeToken_DESC_NULLS_FIRST = 'shouldUnwrapNativeToken_DESC_NULLS_FIRST',
  shouldUnwrapNativeToken_DESC_NULLS_LAST = 'shouldUnwrapNativeToken_DESC_NULLS_LAST',
  sizeDeltaInTokens_ASC = 'sizeDeltaInTokens_ASC',
  sizeDeltaInTokens_ASC_NULLS_FIRST = 'sizeDeltaInTokens_ASC_NULLS_FIRST',
  sizeDeltaInTokens_ASC_NULLS_LAST = 'sizeDeltaInTokens_ASC_NULLS_LAST',
  sizeDeltaInTokens_DESC = 'sizeDeltaInTokens_DESC',
  sizeDeltaInTokens_DESC_NULLS_FIRST = 'sizeDeltaInTokens_DESC_NULLS_FIRST',
  sizeDeltaInTokens_DESC_NULLS_LAST = 'sizeDeltaInTokens_DESC_NULLS_LAST',
  sizeDeltaUsd_ASC = 'sizeDeltaUsd_ASC',
  sizeDeltaUsd_ASC_NULLS_FIRST = 'sizeDeltaUsd_ASC_NULLS_FIRST',
  sizeDeltaUsd_ASC_NULLS_LAST = 'sizeDeltaUsd_ASC_NULLS_LAST',
  sizeDeltaUsd_DESC = 'sizeDeltaUsd_DESC',
  sizeDeltaUsd_DESC_NULLS_FIRST = 'sizeDeltaUsd_DESC_NULLS_FIRST',
  sizeDeltaUsd_DESC_NULLS_LAST = 'sizeDeltaUsd_DESC_NULLS_LAST',
  srcChainId_ASC = 'srcChainId_ASC',
  srcChainId_ASC_NULLS_FIRST = 'srcChainId_ASC_NULLS_FIRST',
  srcChainId_ASC_NULLS_LAST = 'srcChainId_ASC_NULLS_LAST',
  srcChainId_DESC = 'srcChainId_DESC',
  srcChainId_DESC_NULLS_FIRST = 'srcChainId_DESC_NULLS_FIRST',
  srcChainId_DESC_NULLS_LAST = 'srcChainId_DESC_NULLS_LAST',
  swapImpactUsd_ASC = 'swapImpactUsd_ASC',
  swapImpactUsd_ASC_NULLS_FIRST = 'swapImpactUsd_ASC_NULLS_FIRST',
  swapImpactUsd_ASC_NULLS_LAST = 'swapImpactUsd_ASC_NULLS_LAST',
  swapImpactUsd_DESC = 'swapImpactUsd_DESC',
  swapImpactUsd_DESC_NULLS_FIRST = 'swapImpactUsd_DESC_NULLS_FIRST',
  swapImpactUsd_DESC_NULLS_LAST = 'swapImpactUsd_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  totalImpactUsd_ASC = 'totalImpactUsd_ASC',
  totalImpactUsd_ASC_NULLS_FIRST = 'totalImpactUsd_ASC_NULLS_FIRST',
  totalImpactUsd_ASC_NULLS_LAST = 'totalImpactUsd_ASC_NULLS_LAST',
  totalImpactUsd_DESC = 'totalImpactUsd_DESC',
  totalImpactUsd_DESC_NULLS_FIRST = 'totalImpactUsd_DESC_NULLS_FIRST',
  totalImpactUsd_DESC_NULLS_LAST = 'totalImpactUsd_DESC_NULLS_LAST',
  transaction_blockNumber_ASC = 'transaction_blockNumber_ASC',
  transaction_blockNumber_ASC_NULLS_FIRST = 'transaction_blockNumber_ASC_NULLS_FIRST',
  transaction_blockNumber_ASC_NULLS_LAST = 'transaction_blockNumber_ASC_NULLS_LAST',
  transaction_blockNumber_DESC = 'transaction_blockNumber_DESC',
  transaction_blockNumber_DESC_NULLS_FIRST = 'transaction_blockNumber_DESC_NULLS_FIRST',
  transaction_blockNumber_DESC_NULLS_LAST = 'transaction_blockNumber_DESC_NULLS_LAST',
  transaction_hash_ASC = 'transaction_hash_ASC',
  transaction_hash_ASC_NULLS_FIRST = 'transaction_hash_ASC_NULLS_FIRST',
  transaction_hash_ASC_NULLS_LAST = 'transaction_hash_ASC_NULLS_LAST',
  transaction_hash_DESC = 'transaction_hash_DESC',
  transaction_hash_DESC_NULLS_FIRST = 'transaction_hash_DESC_NULLS_FIRST',
  transaction_hash_DESC_NULLS_LAST = 'transaction_hash_DESC_NULLS_LAST',
  transaction_id_ASC = 'transaction_id_ASC',
  transaction_id_ASC_NULLS_FIRST = 'transaction_id_ASC_NULLS_FIRST',
  transaction_id_ASC_NULLS_LAST = 'transaction_id_ASC_NULLS_LAST',
  transaction_id_DESC = 'transaction_id_DESC',
  transaction_id_DESC_NULLS_FIRST = 'transaction_id_DESC_NULLS_FIRST',
  transaction_id_DESC_NULLS_LAST = 'transaction_id_DESC_NULLS_LAST',
  transaction_timestamp_ASC = 'transaction_timestamp_ASC',
  transaction_timestamp_ASC_NULLS_FIRST = 'transaction_timestamp_ASC_NULLS_FIRST',
  transaction_timestamp_ASC_NULLS_LAST = 'transaction_timestamp_ASC_NULLS_LAST',
  transaction_timestamp_DESC = 'transaction_timestamp_DESC',
  transaction_timestamp_DESC_NULLS_FIRST = 'transaction_timestamp_DESC_NULLS_FIRST',
  transaction_timestamp_DESC_NULLS_LAST = 'transaction_timestamp_DESC_NULLS_LAST',
  triggerPrice_ASC = 'triggerPrice_ASC',
  triggerPrice_ASC_NULLS_FIRST = 'triggerPrice_ASC_NULLS_FIRST',
  triggerPrice_ASC_NULLS_LAST = 'triggerPrice_ASC_NULLS_LAST',
  triggerPrice_DESC = 'triggerPrice_DESC',
  triggerPrice_DESC_NULLS_FIRST = 'triggerPrice_DESC_NULLS_FIRST',
  triggerPrice_DESC_NULLS_LAST = 'triggerPrice_DESC_NULLS_LAST',
  twapGroupId_ASC = 'twapGroupId_ASC',
  twapGroupId_ASC_NULLS_FIRST = 'twapGroupId_ASC_NULLS_FIRST',
  twapGroupId_ASC_NULLS_LAST = 'twapGroupId_ASC_NULLS_LAST',
  twapGroupId_DESC = 'twapGroupId_DESC',
  twapGroupId_DESC_NULLS_FIRST = 'twapGroupId_DESC_NULLS_FIRST',
  twapGroupId_DESC_NULLS_LAST = 'twapGroupId_DESC_NULLS_LAST',
  uiFeeReceiver_ASC = 'uiFeeReceiver_ASC',
  uiFeeReceiver_ASC_NULLS_FIRST = 'uiFeeReceiver_ASC_NULLS_FIRST',
  uiFeeReceiver_ASC_NULLS_LAST = 'uiFeeReceiver_ASC_NULLS_LAST',
  uiFeeReceiver_DESC = 'uiFeeReceiver_DESC',
  uiFeeReceiver_DESC_NULLS_FIRST = 'uiFeeReceiver_DESC_NULLS_FIRST',
  uiFeeReceiver_DESC_NULLS_LAST = 'uiFeeReceiver_DESC_NULLS_LAST'
}

export interface TradeActionWhereInput {
  AND?: InputMaybe<Array<TradeActionWhereInput>>;
  OR?: InputMaybe<Array<TradeActionWhereInput>>;
  acceptablePrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  acceptablePrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  acceptablePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  acceptablePrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  basePnlUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  basePnlUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  basePnlUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  basePnlUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  basePnlUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  basePnlUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  basePnlUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  basePnlUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  basePnlUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowingFeeAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowingFeeAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  borrowingFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFeeAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  borrowingFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenPriceMax_eq?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMax_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMax_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMax_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenPriceMax_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  collateralTokenPriceMax_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMax_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMax_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMax_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenPriceMin_eq?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenPriceMin_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  collateralTokenPriceMin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMin_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenPriceMin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTotalCostAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTotalCostAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTotalCostAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTotalCostAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTotalCostAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  collateralTotalCostAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTotalCostAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTotalCostAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTotalCostAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contractTriggerPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  contractTriggerPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  contractTriggerPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  contractTriggerPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contractTriggerPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  contractTriggerPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  contractTriggerPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  contractTriggerPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  contractTriggerPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decreasePositionSwapType_eq?: InputMaybe<Scalars['Int']['input']>;
  decreasePositionSwapType_gt?: InputMaybe<Scalars['Int']['input']>;
  decreasePositionSwapType_gte?: InputMaybe<Scalars['Int']['input']>;
  decreasePositionSwapType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decreasePositionSwapType_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  decreasePositionSwapType_lt?: InputMaybe<Scalars['Int']['input']>;
  decreasePositionSwapType_lte?: InputMaybe<Scalars['Int']['input']>;
  decreasePositionSwapType_not_eq?: InputMaybe<Scalars['Int']['input']>;
  decreasePositionSwapType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventName_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_gt?: InputMaybe<Scalars['String']['input']>;
  eventName_gte?: InputMaybe<Scalars['String']['input']>;
  eventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  eventName_lt?: InputMaybe<Scalars['String']['input']>;
  eventName_lte?: InputMaybe<Scalars['String']['input']>;
  eventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_not_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_startsWith?: InputMaybe<Scalars['String']['input']>;
  executionAmountOut_eq?: InputMaybe<Scalars['BigInt']['input']>;
  executionAmountOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executionAmountOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executionAmountOut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionAmountOut_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  executionAmountOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executionAmountOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executionAmountOut_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  executionAmountOut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  executionPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executionPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executionPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  executionPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executionPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executionPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  executionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingFeeAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingFeeAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fundingFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFeeAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  indexTokenPriceMax_eq?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMax_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMax_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMax_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexTokenPriceMax_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  indexTokenPriceMax_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMax_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMax_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMax_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexTokenPriceMin_eq?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexTokenPriceMin_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  indexTokenPriceMin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMin_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  indexTokenPriceMin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCollateralDeltaAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  initialCollateralDeltaAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCollateralDeltaAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCollateralDeltaAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCollateralDeltaAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  initialCollateralDeltaAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCollateralDeltaAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCollateralDeltaAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  initialCollateralDeltaAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCollateralTokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_eq?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  initialCollateralTokenAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  initialCollateralTokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  initialCollateralTokenAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  initialCollateralTokenAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  isLong_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isLong_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isLong_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  liquidationFeeAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationFeeAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidationFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFeeAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketAddress_lt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_lte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  minOutputAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minOutputAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minOutputAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minOutputAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minOutputAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minOutputAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minOutputAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minOutputAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minOutputAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfParts_eq?: InputMaybe<Scalars['Int']['input']>;
  numberOfParts_gt?: InputMaybe<Scalars['Int']['input']>;
  numberOfParts_gte?: InputMaybe<Scalars['Int']['input']>;
  numberOfParts_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numberOfParts_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfParts_lt?: InputMaybe<Scalars['Int']['input']>;
  numberOfParts_lte?: InputMaybe<Scalars['Int']['input']>;
  numberOfParts_not_eq?: InputMaybe<Scalars['Int']['input']>;
  numberOfParts_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderKey_contains?: InputMaybe<Scalars['String']['input']>;
  orderKey_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  orderKey_endsWith?: InputMaybe<Scalars['String']['input']>;
  orderKey_eq?: InputMaybe<Scalars['String']['input']>;
  orderKey_gt?: InputMaybe<Scalars['String']['input']>;
  orderKey_gte?: InputMaybe<Scalars['String']['input']>;
  orderKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  orderKey_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  orderKey_lt?: InputMaybe<Scalars['String']['input']>;
  orderKey_lte?: InputMaybe<Scalars['String']['input']>;
  orderKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  orderKey_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  orderKey_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  orderKey_not_eq?: InputMaybe<Scalars['String']['input']>;
  orderKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  orderKey_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  orderKey_startsWith?: InputMaybe<Scalars['String']['input']>;
  orderType_eq?: InputMaybe<Scalars['Int']['input']>;
  orderType_gt?: InputMaybe<Scalars['Int']['input']>;
  orderType_gte?: InputMaybe<Scalars['Int']['input']>;
  orderType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderType_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  orderType_lt?: InputMaybe<Scalars['Int']['input']>;
  orderType_lte?: InputMaybe<Scalars['Int']['input']>;
  orderType_not_eq?: InputMaybe<Scalars['Int']['input']>;
  orderType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pnlUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  pnlUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pnlUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  pnlUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  positionFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceImpactAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceImpactAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceImpactAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceImpactDiffUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactDiffUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactDiffUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactDiffUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceImpactDiffUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceImpactDiffUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactDiffUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactDiffUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactDiffUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceImpactUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceImpactUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceImpactUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proportionalPendingImpactUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  proportionalPendingImpactUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proportionalPendingImpactUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proportionalPendingImpactUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proportionalPendingImpactUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  proportionalPendingImpactUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proportionalPendingImpactUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proportionalPendingImpactUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  proportionalPendingImpactUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reasonBytes_contains?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_endsWith?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_eq?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_gt?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_gte?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reasonBytes_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reasonBytes_lt?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_lte?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_not_contains?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_not_eq?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reasonBytes_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  reasonBytes_startsWith?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reason_endsWith?: InputMaybe<Scalars['String']['input']>;
  reason_eq?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reason_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  reason_not_eq?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  reason_startsWith?: InputMaybe<Scalars['String']['input']>;
  shouldUnwrapNativeToken_eq?: InputMaybe<Scalars['Boolean']['input']>;
  shouldUnwrapNativeToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  shouldUnwrapNativeToken_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  sizeDeltaInTokens_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaInTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaInTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaInTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeDeltaInTokens_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sizeDeltaInTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaInTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaInTokens_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaInTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeDeltaUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sizeDeltaUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sizeDeltaUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  sizeDeltaUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  srcChainId_eq?: InputMaybe<Scalars['BigInt']['input']>;
  srcChainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  srcChainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  srcChainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  srcChainId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  srcChainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  srcChainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  srcChainId_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  srcChainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapImpactUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapImpactUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapImpactUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapPath_containsAll?: InputMaybe<Array<Scalars['String']['input']>>;
  swapPath_containsAny?: InputMaybe<Array<Scalars['String']['input']>>;
  swapPath_containsNone?: InputMaybe<Array<Scalars['String']['input']>>;
  swapPath_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalImpactUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalImpactUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalImpactUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalImpactUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalImpactUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalImpactUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalImpactUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalImpactUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalImpactUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<TransactionWhereInput>;
  transaction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  triggerPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  triggerPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  triggerPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  triggerPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  triggerPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  triggerPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  triggerPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  triggerPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  triggerPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  twapGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_endsWith?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_eq?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_gt?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_gte?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  twapGroupId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  twapGroupId_lt?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_lte?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_not_eq?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  twapGroupId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  twapGroupId_startsWith?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_contains?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_endsWith?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_eq?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_gt?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_gte?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uiFeeReceiver_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  uiFeeReceiver_lt?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_lte?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_not_eq?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uiFeeReceiver_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  uiFeeReceiver_startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface TradeActionsConnection {
  __typename?: 'TradeActionsConnection';
  edges: Array<TradeActionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface Transaction {
  __typename?: 'Transaction';
  blockNumber: Scalars['Int']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
}

export interface TransactionEdge {
  __typename?: 'TransactionEdge';
  cursor: Scalars['String']['output'];
  node: Transaction;
}

export enum TransactionOrderByInput {
  blockNumber_ASC = 'blockNumber_ASC',
  blockNumber_ASC_NULLS_FIRST = 'blockNumber_ASC_NULLS_FIRST',
  blockNumber_ASC_NULLS_LAST = 'blockNumber_ASC_NULLS_LAST',
  blockNumber_DESC = 'blockNumber_DESC',
  blockNumber_DESC_NULLS_FIRST = 'blockNumber_DESC_NULLS_FIRST',
  blockNumber_DESC_NULLS_LAST = 'blockNumber_DESC_NULLS_LAST',
  hash_ASC = 'hash_ASC',
  hash_ASC_NULLS_FIRST = 'hash_ASC_NULLS_FIRST',
  hash_ASC_NULLS_LAST = 'hash_ASC_NULLS_LAST',
  hash_DESC = 'hash_DESC',
  hash_DESC_NULLS_FIRST = 'hash_DESC_NULLS_FIRST',
  hash_DESC_NULLS_LAST = 'hash_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST'
}

export interface TransactionWhereInput {
  AND?: InputMaybe<Array<TransactionWhereInput>>;
  OR?: InputMaybe<Array<TransactionWhereInput>>;
  blockNumber_eq?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hash_contains?: InputMaybe<Scalars['String']['input']>;
  hash_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  hash_endsWith?: InputMaybe<Scalars['String']['input']>;
  hash_eq?: InputMaybe<Scalars['String']['input']>;
  hash_gt?: InputMaybe<Scalars['String']['input']>;
  hash_gte?: InputMaybe<Scalars['String']['input']>;
  hash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hash_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  hash_lt?: InputMaybe<Scalars['String']['input']>;
  hash_lte?: InputMaybe<Scalars['String']['input']>;
  hash_not_contains?: InputMaybe<Scalars['String']['input']>;
  hash_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  hash_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  hash_not_eq?: InputMaybe<Scalars['String']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hash_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  hash_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
}

export interface TransactionsConnection {
  __typename?: 'TransactionsConnection';
  edges: Array<TransactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface UserStat {
  __typename?: 'UserStat';
  id: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  uniqueUsers: Scalars['Int']['output'];
}

export interface UserStatEdge {
  __typename?: 'UserStatEdge';
  cursor: Scalars['String']['output'];
  node: UserStat;
}

export enum UserStatOrderByInput {
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  uniqueUsers_ASC = 'uniqueUsers_ASC',
  uniqueUsers_ASC_NULLS_FIRST = 'uniqueUsers_ASC_NULLS_FIRST',
  uniqueUsers_ASC_NULLS_LAST = 'uniqueUsers_ASC_NULLS_LAST',
  uniqueUsers_DESC = 'uniqueUsers_DESC',
  uniqueUsers_DESC_NULLS_FIRST = 'uniqueUsers_DESC_NULLS_FIRST',
  uniqueUsers_DESC_NULLS_LAST = 'uniqueUsers_DESC_NULLS_LAST'
}

export interface UserStatWhereInput {
  AND?: InputMaybe<Array<UserStatWhereInput>>;
  OR?: InputMaybe<Array<UserStatWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  uniqueUsers_eq?: InputMaybe<Scalars['Int']['input']>;
  uniqueUsers_gt?: InputMaybe<Scalars['Int']['input']>;
  uniqueUsers_gte?: InputMaybe<Scalars['Int']['input']>;
  uniqueUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  uniqueUsers_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  uniqueUsers_lt?: InputMaybe<Scalars['Int']['input']>;
  uniqueUsers_lte?: InputMaybe<Scalars['Int']['input']>;
  uniqueUsers_not_eq?: InputMaybe<Scalars['Int']['input']>;
  uniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
}

export interface UserStatsConnection {
  __typename?: 'UserStatsConnection';
  edges: Array<UserStatEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface VolumeInfo {
  __typename?: 'VolumeInfo';
  id: Scalars['String']['output'];
  market: Scalars['String']['output'];
  period: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  volumeUsd: Scalars['BigInt']['output'];
}

export interface VolumeInfoEdge {
  __typename?: 'VolumeInfoEdge';
  cursor: Scalars['String']['output'];
  node: VolumeInfo;
}

export enum VolumeInfoOrderByInput {
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  market_ASC = 'market_ASC',
  market_ASC_NULLS_FIRST = 'market_ASC_NULLS_FIRST',
  market_ASC_NULLS_LAST = 'market_ASC_NULLS_LAST',
  market_DESC = 'market_DESC',
  market_DESC_NULLS_FIRST = 'market_DESC_NULLS_FIRST',
  market_DESC_NULLS_LAST = 'market_DESC_NULLS_LAST',
  period_ASC = 'period_ASC',
  period_ASC_NULLS_FIRST = 'period_ASC_NULLS_FIRST',
  period_ASC_NULLS_LAST = 'period_ASC_NULLS_LAST',
  period_DESC = 'period_DESC',
  period_DESC_NULLS_FIRST = 'period_DESC_NULLS_FIRST',
  period_DESC_NULLS_LAST = 'period_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  volumeUsd_ASC = 'volumeUsd_ASC',
  volumeUsd_ASC_NULLS_FIRST = 'volumeUsd_ASC_NULLS_FIRST',
  volumeUsd_ASC_NULLS_LAST = 'volumeUsd_ASC_NULLS_LAST',
  volumeUsd_DESC = 'volumeUsd_DESC',
  volumeUsd_DESC_NULLS_FIRST = 'volumeUsd_DESC_NULLS_FIRST',
  volumeUsd_DESC_NULLS_LAST = 'volumeUsd_DESC_NULLS_LAST'
}

export interface VolumeInfoWhereInput {
  AND?: InputMaybe<Array<VolumeInfoWhereInput>>;
  OR?: InputMaybe<Array<VolumeInfoWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  market_endsWith?: InputMaybe<Scalars['String']['input']>;
  market_eq?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  market_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  market_not_eq?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  market_startsWith?: InputMaybe<Scalars['String']['input']>;
  period_contains?: InputMaybe<Scalars['String']['input']>;
  period_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  period_endsWith?: InputMaybe<Scalars['String']['input']>;
  period_eq?: InputMaybe<Scalars['String']['input']>;
  period_gt?: InputMaybe<Scalars['String']['input']>;
  period_gte?: InputMaybe<Scalars['String']['input']>;
  period_in?: InputMaybe<Array<Scalars['String']['input']>>;
  period_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  period_lt?: InputMaybe<Scalars['String']['input']>;
  period_lte?: InputMaybe<Scalars['String']['input']>;
  period_not_contains?: InputMaybe<Scalars['String']['input']>;
  period_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  period_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  period_not_eq?: InputMaybe<Scalars['String']['input']>;
  period_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  period_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  period_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  volumeUsd_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUsd_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
}

export interface VolumeInfosConnection {
  __typename?: 'VolumeInfosConnection';
  edges: Array<VolumeInfoEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}

export interface WithdrawalAction {
  __typename?: 'WithdrawalAction';
  account: Scalars['String']['output'];
  callbackGasLimit?: Maybe<Scalars['BigInt']['output']>;
  eventName: Scalars['String']['output'];
  executionFee?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  marketAddress: Scalars['String']['output'];
  marketTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  receivedLongTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  receivedShortTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['Int']['output'];
  transaction: Transaction;
}

export interface WithdrawalActionEdge {
  __typename?: 'WithdrawalActionEdge';
  cursor: Scalars['String']['output'];
  node: WithdrawalAction;
}

export enum WithdrawalActionOrderByInput {
  account_ASC = 'account_ASC',
  account_ASC_NULLS_FIRST = 'account_ASC_NULLS_FIRST',
  account_ASC_NULLS_LAST = 'account_ASC_NULLS_LAST',
  account_DESC = 'account_DESC',
  account_DESC_NULLS_FIRST = 'account_DESC_NULLS_FIRST',
  account_DESC_NULLS_LAST = 'account_DESC_NULLS_LAST',
  callbackGasLimit_ASC = 'callbackGasLimit_ASC',
  callbackGasLimit_ASC_NULLS_FIRST = 'callbackGasLimit_ASC_NULLS_FIRST',
  callbackGasLimit_ASC_NULLS_LAST = 'callbackGasLimit_ASC_NULLS_LAST',
  callbackGasLimit_DESC = 'callbackGasLimit_DESC',
  callbackGasLimit_DESC_NULLS_FIRST = 'callbackGasLimit_DESC_NULLS_FIRST',
  callbackGasLimit_DESC_NULLS_LAST = 'callbackGasLimit_DESC_NULLS_LAST',
  eventName_ASC = 'eventName_ASC',
  eventName_ASC_NULLS_FIRST = 'eventName_ASC_NULLS_FIRST',
  eventName_ASC_NULLS_LAST = 'eventName_ASC_NULLS_LAST',
  eventName_DESC = 'eventName_DESC',
  eventName_DESC_NULLS_FIRST = 'eventName_DESC_NULLS_FIRST',
  eventName_DESC_NULLS_LAST = 'eventName_DESC_NULLS_LAST',
  executionFee_ASC = 'executionFee_ASC',
  executionFee_ASC_NULLS_FIRST = 'executionFee_ASC_NULLS_FIRST',
  executionFee_ASC_NULLS_LAST = 'executionFee_ASC_NULLS_LAST',
  executionFee_DESC = 'executionFee_DESC',
  executionFee_DESC_NULLS_FIRST = 'executionFee_DESC_NULLS_FIRST',
  executionFee_DESC_NULLS_LAST = 'executionFee_DESC_NULLS_LAST',
  id_ASC = 'id_ASC',
  id_ASC_NULLS_FIRST = 'id_ASC_NULLS_FIRST',
  id_ASC_NULLS_LAST = 'id_ASC_NULLS_LAST',
  id_DESC = 'id_DESC',
  id_DESC_NULLS_FIRST = 'id_DESC_NULLS_FIRST',
  id_DESC_NULLS_LAST = 'id_DESC_NULLS_LAST',
  key_ASC = 'key_ASC',
  key_ASC_NULLS_FIRST = 'key_ASC_NULLS_FIRST',
  key_ASC_NULLS_LAST = 'key_ASC_NULLS_LAST',
  key_DESC = 'key_DESC',
  key_DESC_NULLS_FIRST = 'key_DESC_NULLS_FIRST',
  key_DESC_NULLS_LAST = 'key_DESC_NULLS_LAST',
  marketAddress_ASC = 'marketAddress_ASC',
  marketAddress_ASC_NULLS_FIRST = 'marketAddress_ASC_NULLS_FIRST',
  marketAddress_ASC_NULLS_LAST = 'marketAddress_ASC_NULLS_LAST',
  marketAddress_DESC = 'marketAddress_DESC',
  marketAddress_DESC_NULLS_FIRST = 'marketAddress_DESC_NULLS_FIRST',
  marketAddress_DESC_NULLS_LAST = 'marketAddress_DESC_NULLS_LAST',
  marketTokenAmount_ASC = 'marketTokenAmount_ASC',
  marketTokenAmount_ASC_NULLS_FIRST = 'marketTokenAmount_ASC_NULLS_FIRST',
  marketTokenAmount_ASC_NULLS_LAST = 'marketTokenAmount_ASC_NULLS_LAST',
  marketTokenAmount_DESC = 'marketTokenAmount_DESC',
  marketTokenAmount_DESC_NULLS_FIRST = 'marketTokenAmount_DESC_NULLS_FIRST',
  marketTokenAmount_DESC_NULLS_LAST = 'marketTokenAmount_DESC_NULLS_LAST',
  receivedLongTokenAmount_ASC = 'receivedLongTokenAmount_ASC',
  receivedLongTokenAmount_ASC_NULLS_FIRST = 'receivedLongTokenAmount_ASC_NULLS_FIRST',
  receivedLongTokenAmount_ASC_NULLS_LAST = 'receivedLongTokenAmount_ASC_NULLS_LAST',
  receivedLongTokenAmount_DESC = 'receivedLongTokenAmount_DESC',
  receivedLongTokenAmount_DESC_NULLS_FIRST = 'receivedLongTokenAmount_DESC_NULLS_FIRST',
  receivedLongTokenAmount_DESC_NULLS_LAST = 'receivedLongTokenAmount_DESC_NULLS_LAST',
  receivedShortTokenAmount_ASC = 'receivedShortTokenAmount_ASC',
  receivedShortTokenAmount_ASC_NULLS_FIRST = 'receivedShortTokenAmount_ASC_NULLS_FIRST',
  receivedShortTokenAmount_ASC_NULLS_LAST = 'receivedShortTokenAmount_ASC_NULLS_LAST',
  receivedShortTokenAmount_DESC = 'receivedShortTokenAmount_DESC',
  receivedShortTokenAmount_DESC_NULLS_FIRST = 'receivedShortTokenAmount_DESC_NULLS_FIRST',
  receivedShortTokenAmount_DESC_NULLS_LAST = 'receivedShortTokenAmount_DESC_NULLS_LAST',
  timestamp_ASC = 'timestamp_ASC',
  timestamp_ASC_NULLS_FIRST = 'timestamp_ASC_NULLS_FIRST',
  timestamp_ASC_NULLS_LAST = 'timestamp_ASC_NULLS_LAST',
  timestamp_DESC = 'timestamp_DESC',
  timestamp_DESC_NULLS_FIRST = 'timestamp_DESC_NULLS_FIRST',
  timestamp_DESC_NULLS_LAST = 'timestamp_DESC_NULLS_LAST',
  transaction_blockNumber_ASC = 'transaction_blockNumber_ASC',
  transaction_blockNumber_ASC_NULLS_FIRST = 'transaction_blockNumber_ASC_NULLS_FIRST',
  transaction_blockNumber_ASC_NULLS_LAST = 'transaction_blockNumber_ASC_NULLS_LAST',
  transaction_blockNumber_DESC = 'transaction_blockNumber_DESC',
  transaction_blockNumber_DESC_NULLS_FIRST = 'transaction_blockNumber_DESC_NULLS_FIRST',
  transaction_blockNumber_DESC_NULLS_LAST = 'transaction_blockNumber_DESC_NULLS_LAST',
  transaction_hash_ASC = 'transaction_hash_ASC',
  transaction_hash_ASC_NULLS_FIRST = 'transaction_hash_ASC_NULLS_FIRST',
  transaction_hash_ASC_NULLS_LAST = 'transaction_hash_ASC_NULLS_LAST',
  transaction_hash_DESC = 'transaction_hash_DESC',
  transaction_hash_DESC_NULLS_FIRST = 'transaction_hash_DESC_NULLS_FIRST',
  transaction_hash_DESC_NULLS_LAST = 'transaction_hash_DESC_NULLS_LAST',
  transaction_id_ASC = 'transaction_id_ASC',
  transaction_id_ASC_NULLS_FIRST = 'transaction_id_ASC_NULLS_FIRST',
  transaction_id_ASC_NULLS_LAST = 'transaction_id_ASC_NULLS_LAST',
  transaction_id_DESC = 'transaction_id_DESC',
  transaction_id_DESC_NULLS_FIRST = 'transaction_id_DESC_NULLS_FIRST',
  transaction_id_DESC_NULLS_LAST = 'transaction_id_DESC_NULLS_LAST',
  transaction_timestamp_ASC = 'transaction_timestamp_ASC',
  transaction_timestamp_ASC_NULLS_FIRST = 'transaction_timestamp_ASC_NULLS_FIRST',
  transaction_timestamp_ASC_NULLS_LAST = 'transaction_timestamp_ASC_NULLS_LAST',
  transaction_timestamp_DESC = 'transaction_timestamp_DESC',
  transaction_timestamp_DESC_NULLS_FIRST = 'transaction_timestamp_DESC_NULLS_FIRST',
  transaction_timestamp_DESC_NULLS_LAST = 'transaction_timestamp_DESC_NULLS_LAST'
}

export interface WithdrawalActionWhereInput {
  AND?: InputMaybe<Array<WithdrawalActionWhereInput>>;
  OR?: InputMaybe<Array<WithdrawalActionWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  callbackGasLimit_eq?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  callbackGasLimit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  callbackGasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  callbackGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventName_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_gt?: InputMaybe<Scalars['String']['input']>;
  eventName_gte?: InputMaybe<Scalars['String']['input']>;
  eventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  eventName_lt?: InputMaybe<Scalars['String']['input']>;
  eventName_lte?: InputMaybe<Scalars['String']['input']>;
  eventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventName_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  eventName_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_not_eq?: InputMaybe<Scalars['String']['input']>;
  eventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eventName_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  eventName_startsWith?: InputMaybe<Scalars['String']['input']>;
  executionFee_eq?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionFee_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  executionFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  executionFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  key_endsWith?: InputMaybe<Scalars['String']['input']>;
  key_eq?: InputMaybe<Scalars['String']['input']>;
  key_gt?: InputMaybe<Scalars['String']['input']>;
  key_gte?: InputMaybe<Scalars['String']['input']>;
  key_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  key_lt?: InputMaybe<Scalars['String']['input']>;
  key_lte?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  key_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  key_not_eq?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  key_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_gte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketAddress_lt?: InputMaybe<Scalars['String']['input']>;
  marketAddress_lte?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  marketTokenAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  marketTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketTokenAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketTokenAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  marketTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receivedLongTokenAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receivedLongTokenAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  receivedLongTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedLongTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receivedShortTokenAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receivedShortTokenAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  receivedShortTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  receivedShortTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<TransactionWhereInput>;
  transaction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface WithdrawalActionsConnection {
  __typename?: 'WithdrawalActionsConnection';
  edges: Array<WithdrawalActionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
}
