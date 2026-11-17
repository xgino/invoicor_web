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
