import { absoluteUrl } from "@/lib/config";
import { CONTENT_UPDATED_AT, getComparisons, getIndustries, getTemplates } from "@/lib/content";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { ROUTES, type PageKey } from "@/lib/i18n/routes";
import { TOOLS } from "@/lib/tools/registry";

/**
 * The sitemaps, one per page type, under one index at /sitemap.xml (task S1), so Search
 * Console shows indexing per type: a type under ~50% indexed is the signal to improve it before
 * adding more (seo/RULES.md §2). lastmod uses real content dates (lib/content.ts), not the build
 * date, so search engines only recrawl when something actually changed.
 */
export const SITEMAP_TYPES = ["pages", "templates", "industries", "compare", "tools"] as const;
export type SitemapType = (typeof SITEMAP_TYPES)[number];

export interface SitemapEntry {
  path: string;
  lastModified: string;
  /** Every language version of the page (hreflang), when it has more than one. */
  languages?: Partial<Record<Locale, string>>;
}

/** Translated fixed pages by route key: the tools go with the tools, the rest with the pages. */
const TOOL_KEYS: PageKey[] = ["tools", "vat", "hours", "rate"];

function languagesOf(path: string): Partial<Record<Locale, string>> | undefined {
  const key = (Object.keys(ROUTES) as PageKey[]).find((k) =>
    Object.values(ROUTES[k]).includes(path),
  );
  const versions = key ? ROUTES[key] : {};
  return Object.keys(versions).length > 1 ? versions : undefined;
}

const entry = (path: string, lastModified: string): SitemapEntry => {
  const languages = languagesOf(path);
  return { path, lastModified, ...(languages ? { languages } : {}) };
};

export function sitemapEntries(): Record<SitemapType, SitemapEntry[]> {
  const translated = (keys: (k: PageKey) => boolean) =>
    (Object.keys(ROUTES) as PageKey[])
      .filter(keys)
      .flatMap((key) =>
        (Object.entries(ROUTES[key]) as [Locale, string][])
          .filter(([l]) => l !== DEFAULT_LOCALE)
          .map(([, path]) => entry(path, CONTENT_UPDATED_AT.site)),
      );
  return {
    pages: [
      entry("/", CONTENT_UPDATED_AT.site),
      entry("/free-invoice-generator", "2026-11-18"),
      entry("/help", CONTENT_UPDATED_AT.site),
      entry("/android", CONTENT_UPDATED_AT.site),
      entry("/affiliate", CONTENT_UPDATED_AT.site),
      entry("/about", "2026-11-27"),
      entry("/contact", "2026-11-27"),
      entry("/terms", CONTENT_UPDATED_AT.legal),
      entry("/privacy", CONTENT_UPDATED_AT.privacy),
      ...translated((k) => !TOOL_KEYS.includes(k)),
    ],
    templates: [
      entry("/templates", CONTENT_UPDATED_AT.templates),
      ...getTemplates().map((t) => entry(`/templates/${t.slug}`, CONTENT_UPDATED_AT.templates)),
    ],
    industries: [
      entry("/industries", CONTENT_UPDATED_AT.industries),
      ...getIndustries().map((i) => entry(`/industries/${i.slug}`, CONTENT_UPDATED_AT.industries)),
    ],
    compare: [
      entry("/compare", CONTENT_UPDATED_AT.comparisons),
      ...getComparisons().map((c) => entry(`/compare/${c.slug}`, CONTENT_UPDATED_AT.comparisons)),
    ],
    tools: [
      entry("/tools", "2026-11-18"),
      ...TOOLS.filter((t) => t.href.startsWith("/tools/")).map((t) => entry(t.href, "2026-11-18")),
      ...translated((k) => TOOL_KEYS.includes(k)),
    ],
  };
}

const xml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** One sitemap (urlset), in the same format Next.js wrote before the split. */
export function renderUrlset(entries: SitemapEntry[]): string {
  const urls = entries.map((e) =>
    [
      "<url>",
      `<loc>${xml(absoluteUrl(e.path))}</loc>`,
      ...Object.entries(e.languages ?? {}).map(
        ([l, p]) =>
          `<xhtml:link rel="alternate" hreflang="${l}" href="${xml(absoluteUrl(p as string))}" />`,
      ),
      `<lastmod>${e.lastModified}</lastmod>`,
      "</url>",
    ].join("\n"),
  );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

/** The index at /sitemap.xml: one <sitemap> per type, dated by its newest page. */
export function renderIndex(): string {
  const all = sitemapEntries();
  const maps = SITEMAP_TYPES.filter((t) => all[t].length).map((t) => {
    const newest = all[t]
      .map((e) => e.lastModified)
      .sort()
      .at(-1);
    return `<sitemap>\n<loc>${absoluteUrl(`/sitemaps/${t}.xml`)}</loc>\n<lastmod>${newest}</lastmod>\n</sitemap>`;
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...maps,
    "</sitemapindex>",
    "",
  ].join("\n");
}
