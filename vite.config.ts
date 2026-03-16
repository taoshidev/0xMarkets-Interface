/// <reference types="vitest" />

import { lingui } from "@lingui/vite-plugin";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { createLogger, defineConfig, type PluginOption } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { BREAKPOINTS } from "./src/lib/breakpoints";

const logger = createLogger();
const loggerWarn = logger.warn.bind(logger);
logger.warn = (msg, options) => {
  if (msg.includes("Error when using sourcemap")) return;
  loggerWarn(msg, options);
};

export default defineConfig(({ mode }) => {
  return {
    customLogger: logger,
    worker: {
      format: "es",
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $screen-md: ${BREAKPOINTS.mobile}px;
            $screen-lg: ${BREAKPOINTS.tablet}px;
            $screen-xl: ${BREAKPOINTS.desktop}px;
            $screen-sm: ${BREAKPOINTS.smallMobile}px;
          `,
        },
      },
    },
    plugins: [
      svgr({
        include: "**/*.svg?react",
      }),
      tsconfigPaths(),
      react({
        babel: {
          plugins: ["macros"],
        },
      }),
      lingui(),
      visualizer() as PluginOption,
      mode === "analyze" && analyzer(),
      process.env.SENTRY_AUTH_TOKEN &&
        sentryVitePlugin({
          org: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          authToken: process.env.SENTRY_AUTH_TOKEN,
        }),
    ],
    resolve: {
      alias: {
        buffer: "buffer/",
        App: path.resolve(__dirname, "src/App"),
        components: path.resolve(__dirname, "src/components"),
        config: path.resolve(__dirname, "src/config"),
        context: path.resolve(__dirname, "src/context"),
        domain: path.resolve(__dirname, "src/domain"),
        fonts: path.resolve(__dirname, "src/fonts"),
        img: path.resolve(__dirname, "src/img"),
        lib: path.resolve(__dirname, "src/lib"),
        ab: path.resolve(__dirname, "src/ab"),
        locales: path.resolve(__dirname, "src/locales"),
        pages: path.resolve(__dirname, "src/pages"),
        styles: path.resolve(__dirname, "src/styles"),
        "typechain-types": path.resolve(__dirname, "src/typechain-types"),
        prebuilt: path.resolve(__dirname, "src/prebuilt"),
        sdk: path.resolve(__dirname, "sdk/src"),
      },
    },
    build: {
      assetsInlineLimit: 0,
      outDir: "build",
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            web3: ["ethers", "viem", "date-fns", "@rainbow-me/rainbowkit", "lodash", "@gelatonetwork/relay-sdk"],
            charts: ["recharts"],
            ui: ["@headlessui/react", "framer-motion", "react-select"],
          },
        },
      },
    },
    server: {
      proxy: {
        "/api/keeper": {
          target: "http://142.93.203.222:37017",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/keeper/, ""),
        },
        "/api/order-keeper": {
          target: "http://localhost:37018",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/order-keeper/, ""),
        },
      },
    },
    test: {
      environment: "happy-dom",
      globalSetup: "./vitest.global-setup.js",
      exclude: ["./autotests", "node_modules", "./sdk"],
      setupFiles: ["@vitest/web-worker"],
    },
  };
});
