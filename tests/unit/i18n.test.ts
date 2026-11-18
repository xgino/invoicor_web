import { describe, expect, it } from "vitest";
import { CHROME } from "@/lib/i18n/chrome";
import { LOCALES } from "@/lib/i18n/config";
import { ANDROID } from "@/lib/i18n/pages/android";
import { GENERATOR } from "@/lib/i18n/pages/generator";
import { HELP } from "@/lib/i18n/pages/help";
import { HOME } from "@/lib/i18n/pages/home";
import { TOOLS_TEXT } from "@/lib/i18n/pages/tools";
import { STANDARD_RATES, hourlyRate } from "@/lib/tools/math";
import { ROUTES, pageForPath } from "@/lib/i18n/routes";
import { PLANS } from "@/lib/pricing";

/** The translated pages must say the same facts as the English ones (ROADMAP Stage H). */
const digits = (s: string) => (s.match(/\d+/g) ?? []).join(",");

describe("translations", () => {
  it("cover all 11 languages", () => {
    for (const dict of [CHROME, ANDROID, HOME])
      expect(Object.keys(dict).sort()).toEqual([...LOCALES].sort());
  });

  it.each(LOCALES.filter((l) => l !== "en"))(
    "%s: plan features keep the numbers of pricing.json",
    (l) => {
      const plans = HOME[l].table.plans!;
      for (const plan of PLANS) {
        const local = plans[plan.id];
        expect(local.features).toHaveLength(plan.features.length);
        plan.features.forEach((f, i) => expect(digits(local.features[i]!), f).toBe(digits(f)));
      }
    },
  );

  it.each(LOCALES)("%s: every list has the same length as English", (l) => {
    const t = HOME[l];
    const en = HOME.en;
    expect(t.hero.promises).toHaveLength(en.hero.promises.length);
    expect(t.how.steps).toHaveLength(4);
    expect(t.who.people).toHaveLength(3);
    expect(t.app.points).toHaveLength(en.app.points.length);
    expect(t.features.honestList).toHaveLength(en.features.honestList.length);
    expect(t.keep.points).toHaveLength(3);
    expect(t.fee.marks).toHaveLength(3);
    expect(t.table.everyList).toHaveLength(en.table.everyList.length);
    expect(t.promises.items).toHaveLength(3);
    expect(t.faq.items.length).toBeGreaterThanOrEqual(6);
    expect(t.sample.items).toHaveLength(3);
  });

  it.each(LOCALES)("%s: placeholders are kept", (l) => {
    const t = HOME[l];
    expect(t.hero.promises[0]).toContain("{n}");
    expect(t.final.text).toContain("{n}");
    expect(t.table.trialYear).toContain("{price}");
    expect(t.table.trialYear).toContain("{days}");
    expect(t.table.note).toContain("{currency}");
    expect(t.table.note).toContain("{pct}");
    expect(t.faq.items[0]!.answer).toContain("{price}");
    expect(t.promises.items[0]!.fact).toBe("{zero}");
  });

  it("the sample invoice keeps the same proportions in every currency", () => {
    const ratio = (l: (typeof LOCALES)[number]) => {
      const a = HOME[l].sample.items.map((i) => i.amount);
      return a.map((x) => Math.round((x / a[0]!) * 100) / 100).join(",");
    };
    for (const l of LOCALES) expect(ratio(l), l).toBe(ratio("en"));
  });

  it("every translated URL maps back to its page and language", () => {
    for (const key of Object.keys(ROUTES) as (keyof typeof ROUTES)[]) {
      for (const [locale, path] of Object.entries(ROUTES[key])) {
        expect(pageForPath(path)).toEqual({ key, locale });
      }
    }
  });
});

describe("free generator translations (HL1)", () => {
  const placeholders = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort().join(",");

  it("cover all 11 languages", () => {
    expect(Object.keys(GENERATOR).sort()).toEqual([...LOCALES].sort());
  });

  it.each(LOCALES)("%s: title and description fit in search results", (l) => {
    const { title, description } = GENERATOR[l].page.meta;
    expect(title.length, title).toBeLessThanOrEqual(60);
    expect(description.length, description).toBeLessThanOrEqual(155);
  });

  it.each(LOCALES)("%s: every interface text keeps its placeholders", (l) => {
    for (const [key, text] of Object.entries(GENERATOR.en.ui))
      expect(placeholders(GENERATOR[l].ui[key as keyof typeof GENERATOR.en.ui]), key).toBe(
        placeholders(text),
      );
  });

  it.each(LOCALES)("%s: same structure as English, links unchanged", (l) => {
    const t = GENERATOR[l].page;
    expect(t.steps).toHaveLength(3);
    expect(t.types).toHaveLength(3);
    expect(t.tips).toHaveLength(3);
    expect(t.faqs).toHaveLength(10);
    expect(t.compare).toHaveLength(7);
    expect(t.mustHave.length).toBeGreaterThanOrEqual(6);
    expect(t.useCases.map((u) => u.href)).toEqual(GENERATOR.en.page.useCases.map((u) => u.href));
    expect(GENERATOR[l].ui.fileName).toMatch(/^[a-z]+$/);
    if (l !== "en") expect(t.moreEnglishNote).not.toBe("");
  });

  it.each(LOCALES)("%s: no claims the generator can't keep", (l) => {
    const all = JSON.stringify(GENERATOR[l]);
    // The app's facts, as numbers: 21 free / 31 templates, 38 currencies, 11 languages, 10 lines.
    expect(all).not.toMatch(/\b(unlimited|unbegrenzt|illimit|ilimitad|onbeperkt)/i);
    for (const n of ["21", "31", "38", "11"]) expect(all).toContain(n);
  });
});

describe("free tools translations (HL2)", () => {
  const placeholders = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort().join(",");
  const CODES = STANDARD_RATES.map((r) => r.code);

  it("cover all 11 languages", () => {
    expect(Object.keys(TOOLS_TEXT).sort()).toEqual([...LOCALES].sort());
  });

  it.each(LOCALES)("%s: titles and descriptions fit in search results", (l) => {
    const t = TOOLS_TEXT[l];
    for (const { title, description } of [t.hub.meta, t.vat.meta, t.hours.meta, t.rate.meta]) {
      expect(title.length, title).toBeLessThanOrEqual(60);
      expect(description.length, description).toBeLessThanOrEqual(155);
    }
  });

  it.each(LOCALES)("%s: calculator texts keep their placeholders", (l) => {
    for (const tool of ["vat", "hours", "rate"] as const)
      for (const [key, text] of Object.entries(TOOLS_TEXT.en[tool].ui))
        expect(
          placeholders((TOOLS_TEXT[l][tool].ui as Record<string, string>)[key]!),
          `${tool}.${key}`,
        ).toBe(placeholders(text));
    expect(TOOLS_TEXT[l].common.closing.text).toContain("{n}");
  });

  it.each(LOCALES)("%s: same structure, a real default country, sane defaults", (l) => {
    const t = TOOLS_TEXT[l];
    for (const tool of ["vat", "hours", "rate"] as const) {
      expect(t[tool].sections).toHaveLength(3);
      expect(t[tool].faqs).toHaveLength(5);
    }
    expect(CODES).toContain(t.vat.defaultCountry);
    const d = t.rate.defaults;
    const r = hourlyRate({
      takeHome: Number(d.takeHome),
      taxPercent: Number(d.tax),
      costs: Number(d.costs),
      weeksOff: Number(d.weeks),
      billableHours: Number(d.hours),
    });
    expect(r, "the default inputs must give a result").not.toBeNull();
    expect(t.tools.generator.name).toBe(GENERATOR[l].page.crumb);
  });
});

describe("help center translations (HL3)", () => {
  it("cover all 11 languages", () => {
    expect(Object.keys(HELP).sort()).toEqual([...LOCALES].sort());
  });

  it.each(LOCALES)("%s: same sections and questions as English", (l) => {
    const t = HELP[l];
    expect(t.meta.title.length, t.meta.title).toBeLessThanOrEqual(60);
    expect(t.meta.description.length, t.meta.description).toBeLessThanOrEqual(155);
    expect(t.sections.map((s) => s.id)).toEqual(HELP.en.sections.map((s) => s.id));
    t.sections.forEach((s, i) =>
      expect(s.items, s.id).toHaveLength(HELP.en.sections[i]!.items.length),
    );
  });

  it.each(LOCALES)("%s: links sit in their answer, lists and the email stay", (l) => {
    const items = HELP[l].sections.flatMap((s) => s.items);
    const en = HELP.en.sections.flatMap((s) => s.items);
    items.forEach((item, i) => {
      const source = en[i]!;
      if (source.link) {
        expect(item.link, item.q).toBeDefined();
        expect(item.a, item.q).toContain(item.link!.text);
        expect(item.link!.page).toBe(source.link.page);
      }
      if (source.list) expect(item.list, item.q).toHaveLength(source.list.length);
      expect(item.a.includes("{email}"), item.q).toBe(source.a.includes("{email}"));
    });
  });

  it.each(LOCALES.filter((l) => l !== "en"))("%s: says the app's screens are in English", (l) => {
    const devices = HELP[l].sections[0]!.items[3]!.a;
    expect(devices).toMatch(
      /English|Engels|Englisch|anglais|inglés|inglese|inglês|angielsk|engelsk/i,
    );
  });
});
