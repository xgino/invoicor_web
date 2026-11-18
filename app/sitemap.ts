import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/config";
import { CONTENT_UPDATED_AT, getComparisons, getIndustries, getTemplates } from "@/lib/content";

// Required for `output: "export"`: render once at build time into out/sitemap.xml.
export const dynamic = "force-static";

/**
 * Every indexable URL. lastModified uses real content dates (lib/content.ts), not the build date,
 * so search engines only recrawl when something actually changed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, date: string) => ({ url: absoluteUrl(path), lastModified: date });

  return [
    page("/", CONTENT_UPDATED_AT.site),
    page("/free-invoice-generator", "2026-11-18"),
    page("/templates", CONTENT_UPDATED_AT.templates),
    ...getTemplates().map((t) => page(`/templates/${t.slug}`, CONTENT_UPDATED_AT.templates)),
    page("/industries", CONTENT_UPDATED_AT.industries),
    ...getIndustries().map((i) => page(`/industries/${i.slug}`, CONTENT_UPDATED_AT.industries)),
    page("/compare", CONTENT_UPDATED_AT.comparisons),
    ...getComparisons().map((c) => page(`/compare/${c.slug}`, CONTENT_UPDATED_AT.comparisons)),
    page("/help", CONTENT_UPDATED_AT.site),
    page("/affiliate", CONTENT_UPDATED_AT.site),
    page("/terms", CONTENT_UPDATED_AT.legal),
    page("/privacy", CONTENT_UPDATED_AT.privacy),
  ];
}
