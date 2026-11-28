import { describe, expect, it } from "vitest";
import { getComparisons, getIndustries, getTemplates } from "@/lib/content";

describe("content", () => {
  it("loads all 129 pages with valid, unique slugs", () => {
    // 2026-11-26, wave 1 batch A: +30 templates, +23 industries (ROADMAP W1).
    // 2026-11-27, item D1: +16 invoice-type templates (4 parked at the demand gate).
    for (const [list, count] of [
      [getTemplates(), 66],
      [getIndustries(), 43],
      [getComparisons(), 20],
    ] as const) {
      expect(list).toHaveLength(count);
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

describe("FAQ deep links", () => {
  it("turns questions into stable, readable ids", async () => {
    const { questionId } = await import("@/components/ui/Accordion");
    expect(questionId("How do I pay an invoice safely?")).toBe("how-do-i-pay-an-invoice-safely");
    expect(questionId("Sending & Tracking: what's new?")).toBe("sending-and-tracking-what-s-new");
  });
});

describe("FAQ answers only describe what the app does", () => {
  // Found in the 2026-11-18 FAQ audit: answers that described a different product.
  const claims =
    /secure web portal|payment portal|its own tax flag|tax flag|partial-payment request|configure recurring|set up recurring invoices|recurring invoices to fire|encrypted and stored|Invoicor links are secure|match your brand colors|custom field|take 3 seconds|about a minute/i;
  const all = [...getTemplates(), ...getIndustries(), ...getComparisons()];

  it.each(all.map((e) => [e.slug, e] as const))("%s", (_slug, e) => {
    // Answers only: a question may fairly ask about something the app doesn't do.
    for (const f of e.faqs) expect(f.answer, f.question).not.toMatch(claims);
  });
});
