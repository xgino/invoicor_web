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
  renderPlanFiles,
  similarity,
} from "../../scripts/pages-lib.mjs";
import { CATEGORIES } from "../../scripts/pages-categories.mjs";
import { ITEMS, LANGUAGE_SOURCES, ORDER, TASKS } from "../../scripts/pages-items.mjs";

interface Row {
  url: string;
  lang: string;
  status: string;
  added: string;
  localize: string;
  brief: string;
  notes: string;
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

  it(`seo/PLAN.md and seo/plan/*.md are up to date (${FIX})`, () => {
    const files = renderPlanFiles(rows as unknown as Record<string, string>[]);
    for (const [file, text] of Object.entries(files))
      expect(readFileSync(join(process.cwd(), file), "utf8"), file).toBe(text);
  });

  it("keeps items the size one run builds well (at most 25 pages) and in the item list", () => {
    const ids = new Set(ITEMS.map((i) => i.id));
    const sizes = new Map<string, number>();
    for (const r of rows as unknown as Record<string, string>[])
      if (r.item) sizes.set(r.item, (sizes.get(r.item) ?? 0) + 1);
    expect([...sizes].filter(([, n]) => n > 25)).toEqual([]);
    expect([...sizes.keys()].filter((id) => !ids.has(id))).toEqual([]);
    expect(LANGUAGE_SOURCES.filter((id) => !sizes.has(id))).toEqual([]);
    const known = new Set([...ids, ...TASKS.map((t) => t.id)]);
    expect(ORDER.filter((id) => !known.has(id))).toEqual([]);
    // Every item still to build is in the suggested order, so nothing gets forgotten.
    const toBuild = new Set(
      (rows as unknown as Record<string, string>[])
        .filter((r) => r.item && r.status === "planned")
        .map((r) => r.item ?? ""),
    );
    expect([...toBuild].filter((id) => !ORDER.includes(id))).toEqual([]);
  });

  it("uses only known statuses, and says why a page is parked (the demand gate)", () => {
    const known = ["live", "planned", "parked", "removed"];
    expect(rows.filter((r) => !known.includes(r.status)).map((r) => r.url)).toEqual([]);
    expect(rows.filter((r) => r.status === "parked" && !r.notes?.trim()).map((r) => r.url)).toEqual(
      [],
    );
  });

  it("gives every planned page a brief, so the next batch can be built from PLAN.md", () => {
    const noBrief = rows
      .filter((r) => r.status === "planned" && !r.brief?.trim())
      .map((r) => r.url);
    expect(noBrief).toEqual([]);
  });

  it("puts every planned page in a category with a direction (seo/PLAN.md)", () => {
    const loose = rows
      .filter((r) => r.status === "planned")
      .filter((r) => !CATEGORIES.some((c) => c.match(r as unknown as Record<string, string>)))
      .map((r) => r.url);
    expect(loose).toEqual([]);
  });

  it("scores keys by shared words, ignoring filler words and plurals", () => {
    expect(similarity("plumbing invoice template", "Plumbing invoice templates")).toBe(1);
    expect(similarity("plumbing invoice template", "invoice app for plumbers")).toBeLessThan(0.4);
  });
});
