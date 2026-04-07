import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { useKeeperWebSocket, useKeeperWebSocketState } from "lib/keeperWebSocket";

const CHECK_INTERVAL_MS = 60_000;
const KEEPER_HEALTH_URL = "/api/keeper/prices/tickers";
const MAINTENANCE_TOAST_ID = "keeper-maintenance";
const RECONNECTING_TOAST_ID = "keeper-reconnecting";

export function KeeperStatusBanner() {
  const [isKeeperDown, setIsKeeperDown] = useState(false);
  const prevKeeperDown = useRef(false);
  const prevWsReconnecting = useRef(false);

  // Initialize WebSocket connection on app load (this component is always mounted)
  useKeeperWebSocket();
  const wsState = useKeeperWebSocketState();

  useEffect(() => {
    let mounted = true;

    async function checkKeeperHealth() {
      try {
        const response = await fetch(KEEPER_HEALTH_URL, { method: "GET" });
        if (mounted) {
          setIsKeeperDown(!response.ok);
        }
      } catch (_e) {
        if (mounted) {
          setIsKeeperDown(true);
        }
      }
    }

    checkKeeperHealth();

    const interval = setInterval(checkKeeperHealth, CHECK_INTERVAL_MS);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isKeeperDown && !prevKeeperDown.current) {
      toast.warning("System maintenance in progress. You can browse markets but trading operations may be delayed.", {
        toastId: MAINTENANCE_TOAST_ID,
        autoClose: false,
      });
    } else if (!isKeeperDown && prevKeeperDown.current) {
      toast.dismiss(MAINTENANCE_TOAST_ID);
    }
    prevKeeperDown.current = isKeeperDown;
  }, [isKeeperDown]);

  const isWsReconnecting = !isKeeperDown && wsState === "reconnecting";

  useEffect(() => {
    if (isWsReconnecting && !prevWsReconnecting.current) {
      toast.info("Reconnecting to live price feed...", {
        toastId: RECONNECTING_TOAST_ID,
        autoClose: false,
      });
    } else if (!isWsReconnecting && prevWsReconnecting.current) {
      toast.dismiss(RECONNECTING_TOAST_ID);
    }
    prevWsReconnecting.current = isWsReconnecting;
  }, [isWsReconnecting]);

  return null;
}
