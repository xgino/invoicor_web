/**
 * Read the built sitemap (out/sitemap.xml): an index of one sitemap per page type (task S1), or a
 * single urlset (the live site before the split). Shared by `npm run pages`, the site tests and
 * scripts/indexnow.mjs.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://invoicor.com";

/** <url> blocks → { loc, lastmod }. */
function urls(xml) {
  return (xml.match(/<url>[\s\S]*?<\/url>/g) ?? []).map((b) => ({
    loc: b.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim() ?? "",
    lastmod: b.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? "",
  }));
}

/** The child sitemaps an index lists (absolute URLs), or [] for a plain urlset. */
export function childSitemaps(xml) {
  if (!xml.includes("<sitemapindex")) return [];
  return [...xml.matchAll(/<sitemap>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

/** Every { loc, lastmod } in the built site's sitemaps (out/sitemap.xml and its children). */
export function readBuiltSitemap(outDir) {
  const xml = readFileSync(join(outDir, "sitemap.xml"), "utf8");
  const children = childSitemaps(xml);
  if (!children.length) return urls(xml);
  return children.flatMap((loc) => {
    const file = join(outDir, loc.replace(SITE, ""));
    if (!existsSync(file)) throw new Error(`sitemap index lists ${loc}, but ${file} is missing`);
    return urls(readFileSync(file, "utf8"));
  });
}

/** The paths of every URL in the built sitemaps ("/" for the home page). */
export function builtSitemapPaths(outDir) {
  return readBuiltSitemap(outDir).map((u) => u.loc.replace(SITE, "") || "/");
}

/** A downloaded sitemap file (urlset or index; an index's children are fetched from the site). */
export async function readSitemapFile(path) {
  if (!path || !existsSync(path)) return [];
  const xml = readFileSync(path, "utf8");
  const children = childSitemaps(xml);
  if (!children.length) return urls(xml);
  const parts = await Promise.all(
    children.map(async (loc) => {
      try {
        const res = await fetch(loc, { signal: AbortSignal.timeout(15000) });
        return res.ok ? urls(await res.text()) : [];
      } catch {
        return [];
      }
    }),
  );
  return parts.flat();
}
