import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import { isNewerThan } from "./types";

// --- Mock WebSocket ---
class MockWebSocket {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;

  url: string;
  readyState = MockWebSocket.CONNECTING;
  onopen: ((ev: Event) => void) | null = null;
  onclose: ((ev: CloseEvent) => void) | null = null;
  onmessage: ((ev: MessageEvent) => void) | null = null;
  onerror: ((ev: Event) => void) | null = null;

  constructor(url: string) {
    this.url = url;
    MockWebSocket._instances.push(this);
  }

  close() {
    this.readyState = MockWebSocket.CLOSED;
    if (this.onclose) {
      this.onclose(new CloseEvent("close"));
    }
  }

  // Test helpers
  simulateOpen() {
    this.readyState = MockWebSocket.OPEN;
    if (this.onopen) this.onopen(new Event("open"));
  }

  simulateMessage(data: unknown) {
    if (this.onmessage) {
      this.onmessage(new MessageEvent("message", { data: JSON.stringify(data) }));
    }
  }

  simulateClose() {
    this.readyState = MockWebSocket.CLOSED;
    if (this.onclose) this.onclose(new CloseEvent("close"));
  }

  static _instances: MockWebSocket[] = [];
  static _reset() {
    MockWebSocket._instances = [];
  }
  static get lastInstance(): MockWebSocket | undefined {
    return MockWebSocket._instances[MockWebSocket._instances.length - 1];
  }
}

// Replace global WebSocket
vi.stubGlobal("WebSocket", MockWebSocket);

// Mock isLocal to return false by default
vi.mock("config/env", () => ({
  isLocal: () => false,
}));

import { KeeperWebSocketManager } from "./KeeperWebSocketManager";

describe("KeeperWebSocketManager", () => {
  let manager: KeeperWebSocketManager;

  beforeEach(() => {
    vi.useFakeTimers();
    MockWebSocket._reset();
    manager = new KeeperWebSocketManager("ws://test:37017");
  });

  afterEach(() => {
    manager.disconnect();
    vi.useRealTimers();
  });

  it("connect() creates a WebSocket and transitions state to connected on open", () => {
    const stateHandler = vi.fn();
    manager.on("stateChange", stateHandler);

    expect(manager.getState()).toBe("disconnected");
    manager.connect();

    const ws = MockWebSocket.lastInstance!;
    expect(ws).toBeDefined();
    expect(ws.url).toBe("ws://test:37017");

    ws.simulateOpen();
    expect(manager.getState()).toBe("connected");
    expect(stateHandler).toHaveBeenCalledWith("connected");
  });

  it("onmessage with ticker JSON emits ticker event with parsed data array", () => {
    const tickerHandler = vi.fn();
    manager.on("ticker", tickerHandler);
    manager.connect();

    const ws = MockWebSocket.lastInstance!;
    ws.simulateOpen();

    const tickerData = {
      type: "ticker",
      data: [
        {
          minPrice: "3000.00",
          maxPrice: "3001.00",
          oracleDecimals: 8,
          tokenSymbol: "ETH",
          tokenAddress: "0x123",
          updatedAt: 1000,
        },
      ],
    };

    ws.simulateMessage(tickerData);
    expect(tickerHandler).toHaveBeenCalledWith(tickerData.data);
  });

  it("onmessage with candle JSON emits candle event with parsed data array", () => {
    const candleHandler = vi.fn();
    manager.on("candle", candleHandler);
    manager.connect();

    const ws = MockWebSocket.lastInstance!;
    ws.simulateOpen();

    const candleData = {
      type: "candle",
      data: [
        {
          tokenSymbol: "ETH",
          open: 3000,
          high: 3050,
          low: 2950,
          close: 3020,
          minuteTs: 1700000000,
        },
      ],
    };

    ws.simulateMessage(candleData);
    expect(candleHandler).toHaveBeenCalledWith(candleData.data);
  });

  it("onclose schedules reconnect with exponential backoff (1s, 2s, 4s... capped at 30s)", () => {
    manager.connect();
    const ws1 = MockWebSocket.lastInstance!;
    ws1.simulateOpen();

    // First close triggers reconnect after 1s
    ws1.simulateClose();
    expect(manager.getState()).toBe("reconnecting");

    vi.advanceTimersByTime(1000);
    const ws2 = MockWebSocket.lastInstance!;
    expect(ws2).not.toBe(ws1);

    // Second close triggers reconnect after 2s
    ws2.simulateClose();
    expect(MockWebSocket._instances.length).toBe(2); // no new one yet
    vi.advanceTimersByTime(1999);
    expect(MockWebSocket._instances.length).toBe(2); // still waiting
    vi.advanceTimersByTime(1);
    expect(MockWebSocket._instances.length).toBe(3); // now reconnected

    // Third close triggers reconnect after 4s
    const ws3 = MockWebSocket.lastInstance!;
    ws3.simulateClose();
    vi.advanceTimersByTime(3999);
    expect(MockWebSocket._instances.length).toBe(3);
    vi.advanceTimersByTime(1);
    expect(MockWebSocket._instances.length).toBe(4);
  });

  it("reconnect resets attempt counter on successful connection", () => {
    manager.connect();
    const ws1 = MockWebSocket.lastInstance!;
    ws1.simulateOpen();

    // First close + reconnect
    ws1.simulateClose();
    vi.advanceTimersByTime(1000);
    const ws2 = MockWebSocket.lastInstance!;
    ws2.simulateOpen(); // successful connection resets counter

    // Next close should use 1s delay again (reset)
    ws2.simulateClose();
    vi.advanceTimersByTime(999);
    expect(MockWebSocket._instances.length).toBe(2); // not yet
    vi.advanceTimersByTime(1);
    expect(MockWebSocket._instances.length).toBe(3); // reconnected at 1s, not 2s
  });

  it("disconnect() closes socket and sets state to disconnected without reconnect", () => {
    const stateHandler = vi.fn();
    manager.on("stateChange", stateHandler);
    manager.connect();

    const ws = MockWebSocket.lastInstance!;
    ws.simulateOpen();
    stateHandler.mockClear();

    manager.disconnect();
    expect(manager.getState()).toBe("disconnected");
    expect(stateHandler).toHaveBeenCalledWith("disconnected");

    // Advancing timers should NOT trigger reconnect
    vi.advanceTimersByTime(60000);
    expect(MockWebSocket._instances.length).toBe(1); // no new instances
  });

  it("off() removes event listener", () => {
    const handler = vi.fn();
    manager.on("ticker", handler);
    manager.off("ticker", handler);

    manager.connect();
    MockWebSocket.lastInstance!.simulateOpen();
    MockWebSocket.lastInstance!.simulateMessage({
      type: "ticker",
      data: [{ tokenSymbol: "ETH", minPrice: "1", maxPrice: "2", oracleDecimals: 8, tokenAddress: "0x1", updatedAt: 1 }],
    });

    expect(handler).not.toHaveBeenCalled();
  });
});

describe("isNewerThan", () => {
  it("returns true only when incoming > current", () => {
    expect(isNewerThan(100, 99)).toBe(true);
    expect(isNewerThan(100, 100)).toBe(false);
    expect(isNewerThan(99, 100)).toBe(false);
  });
});
