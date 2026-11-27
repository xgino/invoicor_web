import { describe, expect, it } from "vitest";
import { getTemplates, getIndustries } from "@/lib/content";
import {
  contentPath,
  contentVersions,
  getLocalIndustries,
  getLocalTemplates,
  hubPath,
  hubVersions,
} from "@/lib/content-i18n";
import { PREFIXED_LOCALES } from "@/lib/i18n/config";
import { CONTENT_BASES } from "@/lib/i18n/routes";
import { CONTENT_TEXT } from "@/lib/i18n/pages/content";

describe("templates and industry pages in other languages (task S1)", () => {
  it("gives every language a templates and an industries base under its own prefix", () => {
    for (const l of PREFIXED_LOCALES) {
      expect(CONTENT_BASES.templates[l]).toMatch(new RegExp(`^/${l}/[a-z-]+$`));
      expect(CONTENT_BASES.industries[l]).toMatch(new RegExp(`^/${l}/[a-z-]+$`));
      expect(CONTENT_BASES.templates[l]).not.toBe(CONTENT_BASES.industries[l]);
    }
  });

  it("only has a hub where the language has pages, and lists only versions that exist", () => {
    for (const l of PREFIXED_LOCALES) {
      expect(hubPath("templates", l)).toBe(
        getLocalTemplates(l).length ? CONTENT_BASES.templates[l] : undefined,
      );
      expect(hubPath("industries", l)).toBe(
        getLocalIndustries(l).length ? CONTENT_BASES.industries[l] : undefined,
      );
    }
    expect(hubVersions("templates").en).toBe("/templates");
    const t = getTemplates()[0]!;
    const versions = contentVersions("templates", t.slug);
    expect(versions.en).toBe(`/templates/${t.slug}`);
    for (const [l, path] of Object.entries(versions))
      if (l !== "en") expect(path.startsWith(CONTENT_BASES.templates[l as "de"])).toBe(true);
    expect(contentVersions("industries", getIndustries()[0]!.slug).en).toBe(
      `/industries/${getIndustries()[0]!.slug}`,
    );
  });

  it("points every version at a real English page", () => {
    for (const l of PREFIXED_LOCALES) {
      for (const t of getLocalTemplates(l))
        expect(getTemplates().some((e) => e.slug === t.translation_of)).toBe(true);
      for (const i of getLocalIndustries(l))
        expect(getIndustries().some((e) => e.slug === i.translation_of)).toBe(true);
    }
    expect(contentPath("templates", "de", "x")).toBe(`${CONTENT_BASES.templates.de}/x`);
  });

  it("has the page labels in every language, with {n} kept where English has it", () => {
    const keys = (o: unknown, p = ""): string[] =>
      o && typeof o === "object" && !Array.isArray(o)
        ? Object.entries(o).flatMap(([k, v]) => keys(v, `${p}${k}.`))
        : [p];
    const en = keys(CONTENT_TEXT.en).sort();
    for (const l of PREFIXED_LOCALES) {
      expect(keys(CONTENT_TEXT[l]).sort(), l).toEqual(en);
      expect(CONTENT_TEXT[l].template.iphoneText, l).toContain("{n}");
      expect(CONTENT_TEXT[l].templateHub.meta.title.length, l).toBeLessThanOrEqual(60);
      expect(CONTENT_TEXT[l].templateHub.meta.description.length, l).toBeLessThanOrEqual(155);
    }
  });
});
