/**
 * The page log (seo/keyword-map.csv → seo/PAGES.md) must match the built site, so planning the
 * next batch never starts from an outdated list. Fix: `npm run build && npm run pages`.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  BLOG_ORIGIN,
  LOCALIZE,
  parseCsv,
  renderPagesMd,
  renderPlanMd,
  similarity,
} from "../../scripts/pages-lib.mjs";

interface Row {
  url: string;
  lang: string;
  status: string;
  added: string;
  localize: string;
  brief: string;
  primary_keyword: string;
}
const csv = readFileSync(join(process.cwd(), "seo/keyword-map.csv"), "utf8");
const rows = parseCsv(csv) as unknown as Row[];
const site = [
  ...readFileSync(join(process.cwd(), "out/sitemap.xml"), "utf8").matchAll(
    /<loc>https:\/\/invoicor\.com([^<]*)<\/loc>/g,
  ),
].map((m) => m[1] || "/");
const FIX = "run `npm run build && npm run pages`";

describe("page log", () => {
  it(`has a live row for every page in the sitemap (${FIX})`, () => {
    const live = new Set(rows.filter((r) => r.status === "live").map((r) => r.url));
    expect(site.filter((u) => !live.has(u))).toEqual([]);
  });

  it(`has no live row for a page that's gone (${FIX})`, () => {
    const onSite = new Set(site);
    const stale = rows.filter(
      (r) => r.status === "live" && !r.url.startsWith(BLOG_ORIGIN) && !onSite.has(r.url),
    );
    expect(stale.map((r) => r.url)).toEqual([]);
  });

  it("gives every live page a language, a date and a key", () => {
    const missing = rows
      .filter((r) => r.status === "live" && (!r.lang || !r.added || !r.primary_keyword))
      .map((r) => r.url);
    expect(missing).toEqual([]);
  });

  it("gives every page a language decision: yes, local or en-only (roadmap R4)", () => {
    const undecided = rows
      .filter((r) => r.status !== "removed" && !LOCALIZE.includes(r.localize))
      .map((r) => r.url);
    expect(undecided).toEqual([]);
  });

  it("never gives two pages the same key in the same language", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const r of rows.filter((r) => r.status !== "removed")) {
      const k = `${r.lang}:${r.primary_keyword.trim().toLowerCase()}`;
      if (seen.has(k)) dupes.push(`${r.url} = ${seen.get(k)} (${r.primary_keyword})`);
      else seen.set(k, r.url);
    }
    expect(dupes).toEqual([]);
  });

  it(`seo/PAGES.md is up to date (${FIX})`, () => {
    expect(readFileSync(join(process.cwd(), "seo/PAGES.md"), "utf8")).toBe(
      renderPagesMd(rows as unknown as Record<string, string>[]),
    );
  });

  it(`seo/PLAN.md is up to date (${FIX})`, () => {
    expect(readFileSync(join(process.cwd(), "seo/PLAN.md"), "utf8")).toBe(
      renderPlanMd(rows as unknown as Record<string, string>[]),
    );
  });

  it("gives every planned page a brief, so the next batch can be built from PLAN.md", () => {
    const noBrief = rows
      .filter((r) => r.status === "planned" && !r.brief?.trim())
      .map((r) => r.url);
    expect(noBrief).toEqual([]);
  });

  it("scores keys by shared words, ignoring filler words and plurals", () => {
    expect(similarity("plumbing invoice template", "Plumbing invoice templates")).toBe(1);
    expect(similarity("plumbing invoice template", "invoice app for plumbers")).toBeLessThan(0.4);
  });
});
