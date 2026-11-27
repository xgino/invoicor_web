/**
 * Thin and duplicate pages on the built site (seo/RULES.md §2): every live page of every type and
 * language, by the visible text of its <main>. Catches what `content:check` can't see: tools,
 * generators, help, the language versions and the page types still to come. Fix: rewrite the
 * page so it answers something its neighbour doesn't, or park it and improve the other one.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { parseCsv } from "../../scripts/pages-lib.mjs";
import {
  MAX_ALIKE_BUILT,
  closestPair,
  mainText,
  nearCopies,
  shingles,
  words,
} from "../../scripts/similarity.mjs";

/** Minimum words of a built page's <main> per page type (seo/RULES.md §5); a floor, not a target. */
const MIN_WORDS: Record<string, number> = {
  template: 500,
  "template (billing type)": 500,
  "template (invoice type)": 600,
  industry: 500,
  compare: 500,
  "compare (local)": 500,
  tool: 500,
  generator: 600,
  country: 600,
  "local topic": 600,
};

const root = process.cwd();
const live = parseCsv(readFileSync(join(root, "seo/keyword-map.csv"), "utf8")).filter(
  (r) => r.status === "live",
);
const pages = live.map((r) => {
  const file = join(root, "out", r.url === "/" ? "index.html" : `${r.url ?? ""}.html`);
  const list = words(mainText(readFileSync(file, "utf8")));
  return {
    id: r.url ?? "",
    group: r.lang ?? "",
    type: r.page_type ?? "",
    count: list.length,
    shingles: shingles(list),
  };
});
const urls = pages.map((p) => p.id);
/** A hub lists its own pages (/tools above /tools/vat-calculator): no minimum for its cards. */
const isHub = (url: string) => urls.some((u) => u.startsWith(`${url}/`));

describe("thin and duplicate pages (built site)", () => {
  it(`has no two pages of one language more than ${MAX_ALIKE_BUILT * 100}% alike`, () => {
    const copies = nearCopies(pages, MAX_ALIKE_BUILT).map(
      ({ a, b, score }) => `${a} ~ ${b}: ${Math.round(score * 100)}%`,
    );
    expect(copies).toEqual([]);
    // The margin, for the log: today's most alike pair.
    const top = closestPair(pages);
    if (top) console.log(`most alike: ${top.a} ~ ${top.b}, ${Math.round(top.score * 100)}%`);
  });

  it("gives every page at least its type's minimum words", () => {
    const thin = pages
      .map((p) => ({ ...p, min: MIN_WORDS[p.type] ?? 0 }))
      .filter((p) => p.min && !isHub(p.id) && p.count < p.min)
      .map((p) => `${p.id} (${p.type}): ${p.count} words, min ${p.min}`);
    expect(thin).toEqual([]);
  });
});
