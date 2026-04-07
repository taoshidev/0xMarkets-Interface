import type { ConnectionState, KeeperWsMessage } from "./types";

type EventType = "ticker" | "candle" | "stateChange";
type EventHandler = (...args: any[]) => void;

const MAX_RECONNECT_DELAY = 30_000;
const BASE_RECONNECT_DELAY = 1_000;

export function getKeeperWebSocketUrl(): string {
  return "wss://keeper.0xmarkets.io";
}

export class KeeperWebSocketManager {
  private url: string;
  private ws: WebSocket | null = null;
  private state: ConnectionState = "disconnected";
  private reconnectAttempts = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private manualDisconnect = false;
  private listeners = new Map<EventType, Set<EventHandler>>();

  constructor(url: string) {
    this.url = url;
  }

  getState(): ConnectionState {
    return this.state;
  }

  connect(): void {
    this.manualDisconnect = false;
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      this.reconnectAttempts = 0;
      this.setState("connected");
    };

    this.ws.onmessage = (event: MessageEvent) => {
      try {
        const message = JSON.parse(event.data) as KeeperWsMessage;
        if (message.type === "ticker" || message.type === "candle") {
          this.emit(message.type, message.data);
        }
      } catch (_e) {
        // Ignore malformed messages
      }
    };

    this.ws.onclose = () => {
      this.scheduleReconnect();
    };

    this.ws.onerror = () => {
      // No-op -- onclose handles reconnect
    };
  }

  disconnect(): void {
    this.manualDisconnect = true;

    if (this.reconnectTimer !== null) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    if (this.ws) {
      // Remove onclose to prevent triggering scheduleReconnect
      this.ws.onclose = null;
      this.ws.close();
      this.ws = null;
    }

    this.setState("disconnected");
  }

  on(event: EventType, handler: EventHandler): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(handler);
  }

  off(event: EventType, handler: EventHandler): void {
    this.listeners.get(event)?.delete(handler);
  }

  private emit(event: EventType, ...args: unknown[]): void {
    const handlers = this.listeners.get(event);
    if (handlers) {
      for (const handler of handlers) {
        handler(...args);
      }
    }
  }

  private setState(newState: ConnectionState): void {
    this.state = newState;
    this.emit("stateChange", newState);
  }

  private scheduleReconnect(): void {
    if (this.manualDisconnect) {
      return;
    }

    this.setState("reconnecting");

    const delay = Math.min(BASE_RECONNECT_DELAY * Math.pow(2, this.reconnectAttempts), MAX_RECONNECT_DELAY);
    this.reconnectAttempts++;

    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, delay);
  }
}
