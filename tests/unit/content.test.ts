import { describe, expect, it } from "vitest";
import { getComparisons, getIndustries, getTemplates } from "@/lib/content";

describe("content", () => {
  it("loads all 30 pages with valid, unique slugs", () => {
    for (const list of [getTemplates(), getIndustries(), getComparisons()]) {
      expect(list).toHaveLength(10);
      const slugs = list.map((e) => e.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("never repeats claims the app can't back up (BRAND.md §10)", () => {
    const banned = [
      /apple pay checkout/i,
      /unlimited invoices/i,
      /135 currencies/i,
      /works offline/i,
      /offline mode/i,
      /\$12\s*\/\s*mo/i,
    ];
    // Fields that describe a competitor's own plans (pricing_them*) may mention what *they* sell.
    const aboutUs = getComparisons().map((c) =>
      Object.fromEntries(Object.entries(c).filter(([k]) => !k.startsWith("pricing_them"))),
    );
    const text = JSON.stringify([getTemplates(), getIndustries(), aboutUs]);
    for (const pattern of banned) expect(text).not.toMatch(pattern);
  });
});

describe("what the industry pages say Invoicor does", () => {
  // The "How Invoicor helps" cards, subtitles and descriptions speak for the app, so they may only
  // describe features on the fact sheet (BRAND.md §10). Found in the 2026-11-18 rebuild.
  const claims =
    /apple pay|google pay|tap[- ]to[- ]pay|automatic(ally)?\s+(generate|send|monthly)|recurring invoice|135|any currency|notification|tax flag|hex colou?r|updates automatically/i;

  it.each(getIndustries().map((d) => [d.slug, d] as const))("%s", (_slug, d) => {
    const fields = Object.entries(d).filter(([k]) =>
      /^(feature_\d_(title|text)|subtitle|meta_description|h1)$/.test(k),
    );
    for (const [key, value] of fields) expect(String(value), key).not.toMatch(claims);
  });
});
