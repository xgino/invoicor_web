#!/usr/bin/env node
/**
 * Tell IndexNow (Bing, Yandex, Seznam, Naver…) which URLs changed in this deploy.
 *
 *   node scripts/indexnow.mjs <previous-sitemap.xml> <new-sitemap.xml>
 *
 * Submits URLs that are new or whose <lastmod> changed. If the previous sitemap is missing or
 * empty, every URL is submitted. Called by deploy/deploy.sh; never fails the deploy.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const [prevPath, nextPath] = process.argv.slice(2);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Map of url -> lastmod from a sitemap.xml file. */
function readSitemap(path) {
  const map = new Map();
  if (!path || !existsSync(path)) return map;
  const xml = readFileSync(path, "utf8");
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? "";
    if (loc) map.set(loc, lastmod);
  }
  return map;
}

const prev = readSitemap(prevPath);
const next = readSitemap(nextPath);
const changed = [...next].filter(([url, lastmod]) => prev.get(url) !== lastmod).map(([url]) => url);

if (changed.length === 0) {
  console.log("    IndexNow: no changed URLs");
  process.exit(0);
}

const config = readFileSync(join(root, "lib/config.ts"), "utf8");
const key = config.match(/INDEXNOW_KEY = "([0-9a-f]+)"/)?.[1];
if (!key) {
  console.log("    IndexNow: no INDEXNOW_KEY in lib/config.ts, skipped");
  process.exit(0);
}

const host = new URL(changed[0]).host;
try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key,
      keyLocation: `https://${host}/${key}.txt`,
      urlList: changed,
    }),
    signal: AbortSignal.timeout(15000),
  });
  console.log(`    IndexNow: submitted ${changed.length} URLs -> HTTP ${res.status}`);
} catch (error) {
  console.log(`    IndexNow: failed (${error.message}), not a problem for the deploy`);
}
