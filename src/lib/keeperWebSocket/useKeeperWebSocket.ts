import { useEffect, useState } from "react";

import { KeeperWebSocketManager, getKeeperWebSocketUrl } from "./KeeperWebSocketManager";
import type { ConnectionState } from "./types";

const manager = new KeeperWebSocketManager(getKeeperWebSocketUrl());
manager.connect();

export function getManager(): KeeperWebSocketManager {
  return manager;
}

/**
 * Hook that provides access to the singleton KeeperWebSocketManager.
 * The manager connects eagerly at module load and stays connected for the app lifetime.
 */
export function useKeeperWebSocket(): { manager: KeeperWebSocketManager } {
  return { manager };
}

/**
 * Hook that provides reactive connection state for the keeper WebSocket.
 * Re-renders the component whenever the connection state changes.
 */
export function useKeeperWebSocketState(): ConnectionState {
  const mgr = getManager();
  const [state, setState] = useState<ConnectionState>(mgr.getState());

  useEffect(() => {
    const handler = (newState: ConnectionState) => {
      setState(newState);
    };

    mgr.on("stateChange", handler);

    // Sync initial state in case it changed between render and effect
    setState(mgr.getState());

    return () => {
      mgr.off("stateChange", handler);
    };
  }, [mgr]);

  return state;
}
