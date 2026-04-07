import { Trans, t } from "@lingui/macro";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import {
  EXECUTION_TIMEOUT_HASH,
  PendingDepositData,
  PendingShiftData,
  PendingWithdrawalData,
  getPendingDepositKey,
  getPendingShiftKey,
  getPendingWithdrawalKey,
  useSyntheticsEvents,
} from "context/SyntheticsEvents";
import {
  GlvAndGmMarketsInfoData,
  getGlvDisplayName,
  getMarketIndexName,
  getMarketPoolName,
} from "domain/synthetics/markets";
import { cancelDepositTxn } from "domain/synthetics/markets/cancelDepositTxn";
import { cancelWithdrawalTxn } from "domain/synthetics/markets/cancelWithdrawalTxn";
import { isGlvInfo } from "domain/synthetics/markets/glv";
import { TokenData, TokensData } from "domain/synthetics/tokens";
import { useChainId } from "lib/chains";
import { getByKey } from "lib/objects";
import useWallet from "lib/wallets/useWallet";
import { convertTokenAddress } from "sdk/configs/tokens";

import { TransactionStatus, TransactionStatusType } from "components/TransactionStatus/TransactionStatus";

import { StatusNotification } from "./StatusNotification";
import { useDepositElapsed } from "./useDepositTimeout";
import { useToastAutoClose } from "./useToastAutoClose";

export type Props = {
  toastTimestamp: number;
  pendingDepositData?: PendingDepositData;
  pendingWithdrawalData?: PendingWithdrawalData;
  pendingShiftData?: PendingShiftData;
  marketsInfoData?: GlvAndGmMarketsInfoData;
  tokensData?: TokensData;
};

function select<A, B, C>(
  deposit: A,
  withdrawal: B,
  shift: C,
  operation: "deposit" | "withdrawal" | "shift"
): A | B | C {
  if (operation === "deposit") {
    return deposit;
  } else if (operation === "withdrawal") {
    return withdrawal;
  } else {
    return shift;
  }
}

function getActionableMessage(errorReason: string | null): string {
  if (!errorReason) return t`Your deposit was cancelled. Your USDC has been returned.`;

  const lower = errorReason.toLowerCase();

  if (lower.includes("minmarkettokens")) {
    return t`Price moved too much. Try increasing slippage tolerance or reducing deposit size.`;
  }
  if (lower.includes("oracletimestamps") || lower.includes("expired") || lower.includes("expiration")) {
    return t`Deposit expired before the keeper could execute it. Your USDC has been returned. Try again.`;
  }
  if (lower.includes("emptydeposit") || lower.includes("0x95b66fe9")) {
    return t`Your deposit was already processed. Check your wallet balance.`;
  }
  if (lower.includes("insufficientexecutionfee")) {
    return t`Execution fee was insufficient. Try again.`;
  }
  if (lower.includes("execution reverted")) {
    return t`Deposit execution failed on-chain. Your USDC has been returned. Please try again.`;
  }
  return t`Your deposit was cancelled. Your USDC has been returned.`;
}

function getWithdrawalActionableMessage(errorReason: string | null): string {
  if (!errorReason) return t`Your withdrawal was cancelled. Your funds have been returned.`;

  const lower = errorReason.toLowerCase();

  if (lower.includes("insufficientswapoutputamount")) {
    return t`Insufficient swap liquidity. Try a smaller amount.`;
  }
  if (lower.includes("oracletimestamps") || lower.includes("expired") || lower.includes("expiration")) {
    return t`Withdrawal expired before the keeper could execute it. Your funds have been returned. Try again.`;
  }
  if (lower.includes("insufficientexecutionfee")) {
    return t`Execution fee was insufficient. Try again.`;
  }
  if (lower.includes("emptywithdrawal") || lower.includes("execution reverted")) {
    return t`Withdrawal execution failed on-chain. Your funds have been returned. Please try again.`;
  }
  return t`Your withdrawal was cancelled. Your funds have been returned.`;
}

function getShiftActionableMessage(errorReason: string | null): string {
  if (!errorReason) return t`Shift order cancelled.`;

  const lower = errorReason.toLowerCase();

  if (lower.includes("minmarkettokens")) {
    return t`Price moved too much. Try increasing slippage tolerance or reducing shift size.`;
  }
  if (lower.includes("oracletimestamps") || lower.includes("expired") || lower.includes("expiration")) {
    return t`Shift expired before the keeper could execute it. Try again.`;
  }
  if (lower.includes("insufficientexecutionfee")) {
    return t`Execution fee was insufficient. Try again.`;
  }
  return t`Shift order cancelled.`;
}

export function GmStatusNotification({
  toastTimestamp,
  pendingDepositData,
  pendingWithdrawalData,
  pendingShiftData,
  marketsInfoData,
  tokensData,
}: Props) {
  const { chainId } = useChainId();
  const { signer } = useWallet();
  const {
    depositStatuses,
    withdrawalStatuses,
    shiftStatuses,
    //
    setDepositStatusViewed,
    setWithdrawalStatusViewed,
    setShiftStatusViewed,
  } = useSyntheticsEvents();

  let operation: "deposit" | "withdrawal" | "shift";
  if (pendingDepositData) {
    operation = "deposit";
  } else if (pendingWithdrawalData) {
    operation = "withdrawal";
  } else {
    operation = "shift";
  }

  const [depositStatusKey, setDepositStatusKey] = useState<string>();
  const [withdrawalStatusKey, setWithdrawalStatusKey] = useState<string>();
  const [shiftStatusKey, setShiftStatusKey] = useState<string>();

  const depositStatus = getByKey(depositStatuses, depositStatusKey);
  const withdrawalStatus = getByKey(withdrawalStatuses, withdrawalStatusKey);
  const shiftStatus = getByKey(shiftStatuses, shiftStatusKey);

  const isCompleted = select(
    Boolean(depositStatus?.executedTxnHash),
    Boolean(withdrawalStatus?.executedTxnHash),
    Boolean(shiftStatus?.executedTxnHash),
    operation
  );

  const hasError = select(
    Boolean(depositStatus?.cancelledTxnHash),
    Boolean(withdrawalStatus?.cancelledTxnHash),
    Boolean(shiftStatus?.cancelledTxnHash),
    operation
  );

  const depositCreatedAt = depositStatus?.createdAt;
  const elapsedSeconds = useDepositElapsed(depositCreatedAt);
  const withdrawalCreatedAt = withdrawalStatus?.createdAt;
  const withdrawalElapsedSeconds = useDepositElapsed(withdrawalCreatedAt);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isCancellingWithdrawal, setIsCancellingWithdrawal] = useState(false);

  const pendingDepositKey = useMemo(() => {
    if (pendingDepositData) {
      const key = getPendingDepositKey(pendingDepositData);
      return key;
    }
  }, [pendingDepositData]);

  const pendingWithdrawalKey = useMemo(() => {
    if (pendingWithdrawalData) {
      return getPendingWithdrawalKey(pendingWithdrawalData);
    }
  }, [pendingWithdrawalData]);

  const pendingShiftKey = useMemo(() => {
    if (pendingShiftData) {
      return getPendingShiftKey(pendingShiftData);
    }
  }, [pendingShiftData]);

  const title = useMemo(() => {
    if (operation === "deposit") {
      if (!pendingDepositData) {
        return t`Unknown deposit order`;
      }

      let longToken: TokenData | undefined;
      let shortToken: TokenData | undefined;

      if (pendingDepositData.initialLongTokenAmount > 0) {
        longToken = getByKey(
          tokensData,
          convertTokenAddress(
            chainId,
            pendingDepositData.initialLongTokenAddress,
            pendingDepositData.shouldUnwrapNativeToken ? "native" : "wrapped"
          )
        );
      }

      if (pendingDepositData.initialShortTokenAmount > 0) {
        shortToken = getByKey(
          tokensData,
          convertTokenAddress(
            chainId,
            pendingDepositData.initialShortTokenAddress,
            pendingDepositData.shouldUnwrapNativeToken ? "native" : "wrapped"
          )
        );
      }

      const marketInfo = getByKey(marketsInfoData, pendingDepositData.marketAddress);
      const glv = pendingDepositData.isGlvDeposit ? getByKey(marketsInfoData, pendingDepositData.glvAddress) : null;
      const glvInfo = glv && isGlvInfo(glv) ? glv : null;
      const indexName = glvInfo ? undefined : marketInfo ? getMarketIndexName(marketInfo) : undefined;
      const poolName = marketInfo ? getMarketPoolName(marketInfo) : "";

      let tokensText: string | ReactNode = "";
      if (marketInfo?.isSameCollaterals) {
        tokensText = longToken?.symbol ?? "";
      } else {
        tokensText = [longToken, shortToken]
          .filter(Boolean)
          .map((token) => token?.symbol)
          .join(" and ");
      }

      if (glvInfo && pendingDepositData.isMarketDeposit) {
        const gmMarket = marketsInfoData?.[pendingDepositData.marketAddress];

        if (gmMarket) {
          tokensText = (
            <>
              <span className="inline-flex whitespace-nowrap">
                {" "}
                {getMarketIndexName(gmMarket)}
                <PoolName>{getMarketPoolName(gmMarket)}</PoolName>
              </span>
            </>
          );
        }
      }

      if (pendingDepositData.initialLongTokenAddress)
        return (
          <Trans>
            <div className="inline-flex">
              Depositing to {glvInfo ? getGlvDisplayName(glvInfo) : ""}
              {indexName ? <span>&nbsp;{indexName}</span> : null}
              <PoolName>{poolName}</PoolName>
            </div>{" "}
            <span>with {tokensText}</span>
          </Trans>
        );
    } else if (operation === "withdrawal") {
      if (!pendingWithdrawalData) {
        return t`Unknown withdrawal order`;
      }
      const marketInfo = getByKey(marketsInfoData, pendingWithdrawalData.marketAddress);
      const isGlv = marketInfo && isGlvInfo(marketInfo);
      const indexName = isGlv ? undefined : marketInfo ? getMarketIndexName(marketInfo) : undefined;
      const poolName = marketInfo ? getMarketPoolName(marketInfo) : "";

      return (
        <Trans>
          <div className="inline-flex">
            Withdrawing from {isGlv ? getGlvDisplayName(marketInfo) : ""}
            {indexName && <span>:&nbsp;{indexName}</span>}
            <PoolName>{poolName}</PoolName>
          </div>
        </Trans>
      );
    } else {
      if (!pendingShiftData) {
        return t`Unknown shift order`;
      }

      const fromMarketInfo = getByKey(marketsInfoData, pendingShiftData.fromMarket);
      const fromIndexName = fromMarketInfo ? getMarketIndexName(fromMarketInfo) : "";
      const fromPoolName = fromMarketInfo ? getMarketPoolName(fromMarketInfo) : "";

      const toMarketInfo = getByKey(marketsInfoData, pendingShiftData.toMarket);
      const toIndexName = toMarketInfo ? getMarketIndexName(toMarketInfo) : "";
      const toPoolName = toMarketInfo ? getMarketPoolName(toMarketInfo) : "";

      return (
        <Trans>
          Shifting from{" "}
          <span className="inline-flex items-center">
            <span>{fromIndexName}</span>
            <PoolName>{fromPoolName}</PoolName>
          </span>{" "}
          to{" "}
          <span className="inline-flex items-center">
            <span>{toIndexName}</span>
            <PoolName>{toPoolName}</PoolName>
          </span>
        </Trans>
      );
    }
  }, [chainId, marketsInfoData, operation, pendingDepositData, pendingShiftData, pendingWithdrawalData, tokensData]);

  const creationStatus = useMemo(() => {
    let text = "";
    let status: TransactionStatusType = "loading";
    let createdTxnHash: string | undefined;

    if (operation === "deposit") {
      text = t`Sending deposit request.`;

      if (depositStatus?.createdTxnHash) {
        text = t`Deposit request sent.`;
        status = "success";
        createdTxnHash = depositStatus?.createdTxnHash;
      }
    } else if (operation === "withdrawal") {
      text = t`Sending withdrawal request.`;

      if (withdrawalStatus?.createdTxnHash) {
        text = t`Withdrawal request sent.`;
        status = "success";
        createdTxnHash = withdrawalStatus?.createdTxnHash;
      }
    } else {
      text = t`Sending shift request.`;

      if (shiftStatus?.createdTxnHash) {
        text = t`Shift request sent.`;
        status = "success";
        createdTxnHash = shiftStatus?.createdTxnHash;
      }
    }

    return <TransactionStatus status={status} txnHash={createdTxnHash} text={text} />;
  }, [depositStatus?.createdTxnHash, operation, shiftStatus?.createdTxnHash, withdrawalStatus?.createdTxnHash]);

  const executionStatus = useMemo(() => {
    let text = "";
    let status: TransactionStatusType = "muted";
    let txnHash: string | undefined;

    if (operation === "deposit") {
      if (depositStatus?.cancelledTxnHash === EXECUTION_TIMEOUT_HASH) {
        text = t`Deposit timed out. The keeper may be down. Try again or check your wallet balance.`;
        status = "error";
      } else if (depositStatus?.cancelledTxnHash) {
        text = getActionableMessage(depositStatus.cancelledReason ?? null);
        status = "error";
        txnHash = depositStatus.cancelledTxnHash;
      } else if (depositStatus?.executedTxnHash) {
        text = t`Deposit executed.`;
        status = "success";
        txnHash = depositStatus.executedTxnHash;
      } else if (depositStatus?.createdTxnHash) {
        status = "loading";
        if (elapsedSeconds < 15) {
          text = t`Waiting for keeper to execute...`;
        } else if (elapsedSeconds < 60) {
          text = t`Keeper executing... (${elapsedSeconds}s)`;
        } else if (elapsedSeconds < 120) {
          text = t`Taking longer than expected... (${Math.floor(elapsedSeconds / 60)}m ${elapsedSeconds % 60}s)`;
        } else {
          text = t`Still waiting... (${Math.floor(elapsedSeconds / 60)}m ${elapsedSeconds % 60}s)`;
        }
      } else {
        text = t`Fulfilling deposit request.`;
      }
    } else if (operation === "withdrawal") {
      if (withdrawalStatus?.cancelledTxnHash === EXECUTION_TIMEOUT_HASH) {
        text = t`Withdrawal timed out. The keeper may be down. Try again or check your pool balance.`;
        status = "error";
      } else if (withdrawalStatus?.cancelledTxnHash) {
        text = getWithdrawalActionableMessage(withdrawalStatus.cancelledReason ?? null);
        status = "error";
        txnHash = withdrawalStatus.cancelledTxnHash;
      } else if (withdrawalStatus?.executedTxnHash) {
        text = t`Withdrawal executed.`;
        status = "success";
        txnHash = withdrawalStatus.executedTxnHash;
      } else if (withdrawalStatus?.createdTxnHash) {
        status = "loading";
        if (withdrawalElapsedSeconds < 15) {
          text = t`Waiting for keeper to execute...`;
        } else if (withdrawalElapsedSeconds < 60) {
          text = t`Keeper executing... (${withdrawalElapsedSeconds}s)`;
        } else if (withdrawalElapsedSeconds < 120) {
          text = t`Taking longer than expected... (${Math.floor(withdrawalElapsedSeconds / 60)}m ${withdrawalElapsedSeconds % 60}s)`;
        } else {
          text = t`Still waiting... (${Math.floor(withdrawalElapsedSeconds / 60)}m ${withdrawalElapsedSeconds % 60}s)`;
        }
      } else {
        text = t`Fulfilling withdrawal request.`;
      }
    } else {
      text = t`Fulfilling shift request.`;

      if (shiftStatus?.createdTxnHash) {
        status = "loading";
      }

      if (shiftStatus?.executedTxnHash) {
        text = t`Shift executed.`;
        status = "success";
        txnHash = shiftStatus?.executedTxnHash;
      }

      if (shiftStatus?.cancelledTxnHash) {
        text = getShiftActionableMessage(shiftStatus.cancelledReason ?? null);
        status = "error";
        txnHash = shiftStatus?.cancelledTxnHash;
      }
    }

    return <TransactionStatus status={status} txnHash={txnHash} text={text} />;
  }, [
    depositStatus?.cancelledTxnHash,
    depositStatus?.cancelledReason,
    depositStatus?.createdTxnHash,
    depositStatus?.executedTxnHash,
    elapsedSeconds,
    operation,
    shiftStatus?.cancelledTxnHash,
    shiftStatus?.cancelledReason,
    shiftStatus?.createdTxnHash,
    shiftStatus?.executedTxnHash,
    withdrawalElapsedSeconds,
    withdrawalStatus?.cancelledReason,
    withdrawalStatus?.cancelledTxnHash,
    withdrawalStatus?.createdTxnHash,
    withdrawalStatus?.executedTxnHash,
  ]);

  useEffect(
    function getStatusKey() {
      if (operation === "deposit") {
        if (depositStatusKey) {
          return;
        }

        const matchedStatusKey = Object.values(depositStatuses).find(
          (status) => !status.isViewed && status.data && getPendingDepositKey(status.data) === pendingDepositKey
        )?.key;

        if (matchedStatusKey) {
          setDepositStatusKey(matchedStatusKey);
          setDepositStatusViewed(matchedStatusKey);
        }
      } else if (operation === "withdrawal") {
        if (withdrawalStatusKey) {
          return;
        }

        const matchedStatusKey = Object.values(withdrawalStatuses).find(
          (status) => !status.isViewed && status.data && getPendingWithdrawalKey(status.data) === pendingWithdrawalKey
        )?.key;

        if (matchedStatusKey) {
          setWithdrawalStatusKey(matchedStatusKey);
          setWithdrawalStatusViewed(matchedStatusKey);
        }
      } else {
        if (shiftStatusKey) {
          return;
        }

        const matchedStatusKey = Object.values(shiftStatuses).find(
          (status) => !status.isViewed && status.data && getPendingShiftKey(status.data) === pendingShiftKey
        )?.key;

        if (matchedStatusKey) {
          setShiftStatusKey(matchedStatusKey);
          setShiftStatusViewed(matchedStatusKey);
        }
      }
    },
    [
      depositStatusKey,
      depositStatuses,
      operation,
      pendingDepositKey,
      pendingShiftKey,
      pendingWithdrawalKey,
      setDepositStatusViewed,
      setShiftStatusViewed,
      setWithdrawalStatusViewed,
      shiftStatusKey,
      shiftStatuses,
      toastTimestamp,
      withdrawalStatusKey,
      withdrawalStatuses,
    ]
  );

  useToastAutoClose(isCompleted, toastTimestamp);

  useEffect(() => {
    if (hasError) {
      toast.update(toastTimestamp, { type: "error" });
    }
  }, [hasError, toastTimestamp]);


  const handleCancelDeposit = async () => {
    if (!signer || !depositStatusKey || isCancelling) return;
    setIsCancelling(true);
    try {
      await cancelDepositTxn(chainId, signer, depositStatusKey);
    } catch (_e) {
      setIsCancelling(false);
    }
  };

  const handleCancelWithdrawal = async () => {
    if (!signer || !withdrawalStatusKey || isCancellingWithdrawal) return;
    setIsCancellingWithdrawal(true);
    try {
      await cancelWithdrawalTxn(chainId, signer, withdrawalStatusKey);
    } catch (_e) {
      setIsCancellingWithdrawal(false);
    }
  };

  return (
    <StatusNotification title={title}>
      {creationStatus}
      {executionStatus}
      {operation === "deposit" &&
        depositStatus?.createdTxnHash &&
        !depositStatus?.executedTxnHash &&
        !depositStatus?.cancelledTxnHash &&
        elapsedSeconds >= 60 && (
          <div className="mt-4 text-13">
            {elapsedSeconds < 120 ? (
              <div className="text-yellow-500">
                <Trans>This is taking longer than usual. The keeper may be busy.</Trans>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-yellow-500">
                  <Trans>Deposit may be stuck.</Trans>
                </span>
                {signer && depositStatusKey && (
                  <button
                    className="ml-8 rounded bg-red-500/20 px-8 py-2 text-12 text-red-400 hover:bg-red-500/30 disabled:opacity-50"
                    onClick={handleCancelDeposit}
                    disabled={isCancelling}
                  >
                    {isCancelling ? t`Cancelling...` : t`Cancel Deposit`}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      {operation === "withdrawal" &&
        withdrawalStatus?.createdTxnHash &&
        !withdrawalStatus?.executedTxnHash &&
        !withdrawalStatus?.cancelledTxnHash &&
        withdrawalElapsedSeconds >= 60 && (
          <div className="mt-4 text-13">
            {withdrawalElapsedSeconds < 120 ? (
              <div className="text-yellow-500">
                <Trans>This is taking longer than usual. The keeper may be busy.</Trans>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-yellow-500">
                  <Trans>Withdrawal may be stuck.</Trans>
                </span>
                {signer && withdrawalStatusKey && (
                  <button
                    className="ml-8 rounded bg-red-500/20 px-8 py-2 text-12 text-red-400 hover:bg-red-500/30 disabled:opacity-50"
                    onClick={handleCancelWithdrawal}
                    disabled={isCancellingWithdrawal}
                  >
                    {isCancellingWithdrawal ? t`Cancelling...` : t`Cancel Withdrawal`}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
    </StatusNotification>
  );
}

function PoolName({ children }: { children: ReactNode }) {
  return children ? <span className="ml-2 text-12 font-normal text-typography-primary">[{children}]</span> : null;
}
