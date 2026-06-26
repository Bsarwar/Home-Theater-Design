/**
 * Vite configuration for the SSR (server-side) build.
 *
 * Produces dist/server/entry-server.js — a Node.js ESM bundle used by
 * prerender.mjs to render each route to an HTML string at build time.
 *
 * Key differences from vite.config.ts:
 *   - No Tailwind / Replit plugins (CSS is irrelevant for SSR HTML)
 *   - All image/font/asset imports are stubbed to "" so Node.js doesn't
 *     choke on binary files; the client build already hashed and copied them
 *   - Output format is ESM so prerender.mjs can dynamic-import() the bundle
 */
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/**
 * Stub plugin: makes every static asset import (images, fonts, icons) resolve
 * to an empty string in the SSR bundle.  Crawlers care about text content —
 * images are handled by the client JS after hydration.
 */
function ssrAssetsPlugin(): Plugin {
  const assetRe = /\.(jpg|jpeg|png|gif|webp|svg|ico|avif|woff|woff2|ttf|eot)(\?.*)?$/;
  return {
    name: "ssr-stub-assets",
    resolveId(id) {
      if (assetRe.test(id)) return `\0ssr-asset:${id}`;
    },
    load(id) {
      if (id.startsWith("\0ssr-asset:")) return "export default ''";
    },
  };
}

export default defineConfig({
  plugins: [react(), ssrAssetsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/server"),
    emptyOutDir: true,
    rollupOptions: {
      input: "src/entry-server.tsx",
      output: {
        format: "esm",
        entryFileNames: "entry-server.js",
      },
    },
  },
  ssr: {
    format: "esm",
    target: "node",
  },
});
