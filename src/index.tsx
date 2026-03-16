import "regenerator-runtime/runtime";
import "lib/polyfills";
import "styles/tailwind.css";
import "lib/monkeyPatching";

import * as Sentry from "@sentry/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { HelmetProvider } from "react-helmet-async";

import WalletProvider from "lib/wallets/WalletProvider";

import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

const history = createBrowserHistory();

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  enabled: import.meta.env.PROD,
  environment: import.meta.env.MODE,
  release: import.meta.env.VITE_APP_VERSION,
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV5BrowserTracingIntegration({ history }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 0.2,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Sentry.ErrorBoundary fallback={<p>Something went wrong.</p>}>
          <WalletProvider>
            <App />
          </WalletProvider>
        </Sentry.ErrorBoundary>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.info))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export { formatTokenAmount, formatTokenAmountWithUsd, formatUsd } from "./lib/numbers";
