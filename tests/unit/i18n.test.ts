import { describe, expect, it } from "vitest";
import { CHROME } from "@/lib/i18n/chrome";
import { LOCALES } from "@/lib/i18n/config";
import { ANDROID } from "@/lib/i18n/pages/android";
import { HOME } from "@/lib/i18n/pages/home";
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
