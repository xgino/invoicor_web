import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/config";
import { CONTENT_UPDATED_AT, getComparisons, getIndustries, getTemplates } from "@/lib/content";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { ROUTES, type PageKey } from "@/lib/i18n/routes";
import { TOOLS } from "@/lib/tools/registry";

// Required for `output: "export"`: render once at build time into out/sitemap.xml.
export const dynamic = "force-static";

/**
 * Every indexable URL. lastModified uses real content dates (lib/content.ts), not the build date,
 * so search engines only recrawl when something actually changed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Pages that exist in several languages carry all their language versions (ROADMAP 36d).
  const languagesOf = (path: string) => {
    const key = (Object.keys(ROUTES) as PageKey[]).find((k) =>
      Object.values(ROUTES[k]).includes(path),
    );
    const versions = key ? ROUTES[key] : {};
    if (Object.keys(versions).length < 2) return undefined;
    return {
      languages: Object.fromEntries(
        Object.entries(versions).map(([l, p]) => [l, absoluteUrl(p as string)]),
      ),
    };
  };
  const page = (path: string, date: string) => {
    const alternates = languagesOf(path);
    return { url: absoluteUrl(path), lastModified: date, ...(alternates ? { alternates } : {}) };
  };
  const translated = (Object.keys(ROUTES) as PageKey[]).flatMap((key) =>
    (Object.entries(ROUTES[key]) as [Locale, string][])
      .filter(([l]) => l !== DEFAULT_LOCALE)
      .map(([, path]) => page(path, CONTENT_UPDATED_AT.site)),
  );

  return [
    page("/", CONTENT_UPDATED_AT.site),
    page("/free-invoice-generator", "2026-11-18"),
    page("/templates", CONTENT_UPDATED_AT.templates),
    ...getTemplates().map((t) => page(`/templates/${t.slug}`, CONTENT_UPDATED_AT.templates)),
    page("/industries", CONTENT_UPDATED_AT.industries),
    ...getIndustries().map((i) => page(`/industries/${i.slug}`, CONTENT_UPDATED_AT.industries)),
    page("/compare", CONTENT_UPDATED_AT.comparisons),
    ...getComparisons().map((c) => page(`/compare/${c.slug}`, CONTENT_UPDATED_AT.comparisons)),
    page("/tools", "2026-11-18"),
    ...TOOLS.filter((t) => t.href.startsWith("/tools/")).map((t) => page(t.href, "2026-11-18")),
    page("/help", CONTENT_UPDATED_AT.site),
    page("/android", CONTENT_UPDATED_AT.site),
    page("/affiliate", CONTENT_UPDATED_AT.site),
    page("/terms", CONTENT_UPDATED_AT.legal),
    page("/privacy", CONTENT_UPDATED_AT.privacy),
    ...translated,
  ];
}
