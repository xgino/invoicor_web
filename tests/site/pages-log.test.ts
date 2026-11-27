/**
 * The page log (seo/pages/*.csv → seo/PAGES.md) must match the built site, so planning the
 * next batch never starts from an outdated list. Fix: `npm run build && npm run pages`.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  LOCALIZE,
  SCORES,
  groupOf,
  parseId,
  parseRange,
  renderPagesMd,
  renderPlanFiles,
  renderRules,
  rulesHeading,
  rulesSection,
  similarity,
} from "../../scripts/pages-lib.mjs";
import { CATEGORIES } from "../../scripts/pages-categories.mjs";
import { loadRows } from "../../scripts/pages-data.mjs";
import { builtSitemapPaths } from "../../scripts/sitemap-read.mjs";
import { GROUPS, ORDER, PREFIX, TASKS } from "../../scripts/pages-items.mjs";

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
const rows = loadRows(process.cwd()) as unknown as Row[];
const site = builtSitemapPaths(join(process.cwd(), "out"));
const FIX = "run `npm run build && npm run pages`";

describe("page log", () => {
  it(`has a live row for every page in the sitemap (${FIX})`, () => {
    const live = new Set(rows.filter((r) => r.status === "live").map((r) => r.url));
    expect(site.filter((u) => !live.has(u))).toEqual([]);
  });

  it(`has no live row for a page that's gone (${FIX})`, () => {
    const onSite = new Set(site);
    const stale = rows.filter((r) => r.status === "live" && !onSite.has(r.url));
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

  it("scores pages 1–5 or not at all, and a score above 3 only with its evidence (RULES.md §3)", () => {
    const all = rows as unknown as Record<string, string>[];
    const bad = all
      .filter((r) => !SCORES.includes(r.score ?? ""))
      .map((r) => `${r.url}: score "${r.score}"`);
    const noWhy = all
      .filter((r) => Number(r.score) > 3 && !(r.score_why ?? "").trim())
      .map((r) => `${r.url}: score ${r.score} without score_why`);
    expect([...bad, ...noWhy]).toEqual([]);
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

  it(`seo/RULES.md has the current language table (${FIX})`, () => {
    const text = readFileSync(join(process.cwd(), "seo/RULES.md"), "utf8");
    expect(text).toBe(renderRules(text));
  });

  it("gives every category its rules in seo/RULES.md §5 (heading: letter · title)", () => {
    const text = readFileSync(join(process.cwd(), "seo/RULES.md"), "utf8");
    const missing = CATEGORIES.filter((c) => !rulesSection(text, c)).map(rulesHeading);
    expect(missing).toEqual([]);
  });

  it("gives every page a unique ID of its category's letter, and each version its page's ID + language", () => {
    const all = rows as unknown as Record<string, string>[];
    const live = all.filter((r) => r.status !== "removed");
    const seen = new Map<string, string>();
    const bad: string[] = [];
    const byUrl = new Map(live.filter((r) => !r.translation_of).map((r) => [r.url, r]));
    for (const r of live) {
      const id = r.id ?? "";
      if (seen.has(id)) bad.push(`${id} twice: ${r.url} and ${seen.get(id)}`);
      seen.set(id, r.url ?? "");
      const p = parseId(id);
      if (r.translation_of) {
        const parent = byUrl.get(r.translation_of);
        if (id !== `${parent?.id}-${r.lang}`)
          bad.push(`${r.url}: id "${id}", expected ${parent?.id}-${r.lang}`);
      } else {
        const c = CATEGORIES.find((x) => x.match(r));
        if (!p || p.lang || !c || p.prefix !== PREFIX[c.id]) bad.push(`${r.url}: id "${id}"`);
      }
    }
    expect(bad).toEqual([]);
  });

  it("keeps groups to one category, without overlaps, at most 25 pages, and in the suggested order", () => {
    const all = (rows as unknown as Record<string, string>[]).filter(
      (r) => r.status !== "removed" && !r.translation_of,
    );
    const problems: string[] = [];
    const taken = new Map<string, string>();
    for (const g of GROUPS) {
      const r = parseRange(g.range);
      if (!r) {
        problems.push(`bad range ${g.range}`);
        continue;
      }
      if (!Object.values(PREFIX).includes(r.prefix)) problems.push(`${g.range}: unknown letter`);
      for (let n = r.from; n <= r.to; n++) {
        const k = `${r.prefix}${n}`;
        if (taken.has(k)) problems.push(`${k} in ${g.range} and ${taken.get(k)}`);
        taken.set(k, g.range);
      }
      const size = all.filter((x) => groupOf(x.id)?.range === g.range).length;
      if (size > 25) problems.push(`${g.range}: ${size} pages`);
      if (size === 0) problems.push(`${g.range}: no pages`);
      for (const t of g.needs ?? [])
        if (!TASKS.some((x) => x.id === t)) problems.push(`${g.range}: unknown task ${t}`);
    }
    const known = new Set([...GROUPS.map((g) => g.range), ...TASKS.map((t) => t.id)]);
    problems.push(...ORDER.filter((id) => !known.has(id)).map((id) => `ORDER: unknown ${id}`));
    // Every group still to build is in the suggested order, so nothing gets forgotten.
    const toBuild = new Set(
      all.filter((x) => x.status === "planned").map((x) => groupOf(x.id)?.range ?? ""),
    );
    toBuild.delete("");
    problems.push(
      ...[...toBuild].filter((g) => !ORDER.includes(g)).map((g) => `not in ORDER: ${g}`),
    );
    expect(problems).toEqual([]);
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
