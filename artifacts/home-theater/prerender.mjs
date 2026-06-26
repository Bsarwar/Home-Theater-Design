/**
 * Post-build prerender script.
 *
 * 1. Imports the SSR bundle (dist/server/entry-server.js) produced by the
 *    second Vite build step.  That bundle exports:
 *      render(path) → HTML string for <div id="root">
 *      ROUTE_METADATA → single source of truth for all route metadata
 *
 * 2. For each public route, renders the full React component tree to HTML,
 *    patches the <head> (title / description / canonical / OG / JSON-LD),
 *    injects the rendered HTML into <div id="root">, and writes the result
 *    to dist/public/<route>/index.html.
 *
 * 3. Also updates dist/public/index.html (the root route) with rendered body
 *    content so non-JS crawlers see the homepage markup.
 *
 * Run automatically as part of `pnpm run build`.
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "dist", "public");
const templatePath = join(distDir, "index.html");

// ---------------------------------------------------------------------------
// 1. Load SSR bundle
// ---------------------------------------------------------------------------
let render, ROUTE_METADATA;
try {
  const ssrBundle = await import("./dist/server/entry-server.js");
  render = ssrBundle.render;
  ROUTE_METADATA = ssrBundle.ROUTE_METADATA;
} catch (err) {
  console.error("[prerender] Failed to import SSR bundle:", err.message);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 2. Read client-built template
// ---------------------------------------------------------------------------
let template;
try {
  template = readFileSync(templatePath, "utf8");
} catch (err) {
  console.error(`[prerender] Could not read ${templatePath}:`, err.message);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 3. Helper: patch <head> metadata
// ---------------------------------------------------------------------------
function patchHead(html, { title, description, canonical, jsonLd }) {
  const escapedTitle = title.replace(/&/g, "&amp;");
  const escapedDesc = description.replace(/&/g, "&amp;");

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapedTitle}</title>`);

  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapedDesc}" />`,
  );

  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`,
  );

  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`,
  );

  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapedTitle}" />`,
  );

  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapedDesc}" />`,
  );

  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapedTitle}" />`,
  );

  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapedDesc}" />`,
  );

  // JSON-LD: replace the existing script block (present from the Vite template)
  const jsonLdStr = JSON.stringify(jsonLd, null, 2);
  html = html.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${jsonLdStr}\n</script>`,
  );

  return html;
}

// ---------------------------------------------------------------------------
// 4. Helper: inject rendered body into <div id="root">
// ---------------------------------------------------------------------------
function injectBody(html, appHtml) {
  return html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );
}

// ---------------------------------------------------------------------------
// 5. Render and write each route
// ---------------------------------------------------------------------------
let successCount = 0;

for (const [routePath, meta] of Object.entries(ROUTE_METADATA)) {
  let appHtml;
  try {
    appHtml = render(routePath);
  } catch (err) {
    console.error(`[prerender] render("${routePath}") failed:`, err.message);
    // Write a degraded file (head-only) rather than crashing the whole build
    appHtml = "";
  }

  let html = injectBody(template, appHtml);

  if (routePath === "/") {
    // Root: head metadata already correct in template; just inject body
    writeFileSync(templatePath, html, "utf8");
    console.log(`[prerender] / → ${templatePath}`);
  } else {
    // Non-root: patch head, inject body, write to subdirectory
    html = patchHead(html, meta);
    const seg = routePath.replace(/^\//, ""); // e.g. "services"
    const outDir = join(distDir, seg);
    mkdirSync(outDir, { recursive: true });
    const outFile = join(outDir, "index.html");
    writeFileSync(outFile, html, "utf8");
    console.log(`[prerender] ${routePath} → ${outFile}`);
  }

  successCount++;
}

console.log(`[prerender] Done. Prerendered ${successCount} routes.`);
