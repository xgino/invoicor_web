import { absoluteUrl } from "@/lib/config";
import { getComparisons, getIndustries, getTemplates } from "@/lib/content";
import { pageUpdated } from "@/lib/page-dates";
import {
  contentPath,
  contentVersions,
  getLocalIndustries,
  getLocalTemplates,
  hubVersions,
} from "@/lib/content-i18n";
import { DEFAULT_LOCALE, PREFIXED_LOCALES, type Locale } from "@/lib/i18n/config";
import { ROUTES, type PageKey } from "@/lib/i18n/routes";
import { TOOLS } from "@/lib/tools/registry";

/**
 * The sitemaps, one per page type, under one index at /sitemap.xml (task S1), so Search
 * Console shows indexing per type: a type under ~50% indexed is the signal to improve it before
 * adding more (seo/RULES.md §2). lastmod is each page's own date (lib/page-dates.ts: when its text
 * last changed), not the build date, so search engines only recrawl what actually changed.
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

/** A URL with its own date: when its text last changed (lib/page-dates.ts). */
const entry = (path: string, versions?: Partial<Record<Locale, string>>): SitemapEntry => {
  const languages = versions
    ? Object.keys(versions).length > 1
      ? versions
      : undefined
    : languagesOf(path);
  return { path, lastModified: pageUpdated(path), ...(languages ? { languages } : {}) };
};

/** A content type in every language (task S1): the hubs, then the English pages and their versions. */
function contentEntries(kind: "templates" | "industries"): SitemapEntry[] {
  const hubs = hubVersions(kind);
  const english = (kind === "templates" ? getTemplates() : getIndustries()).map((e) =>
    entry(`/${kind}/${e.slug}`, contentVersions(kind, e.slug)),
  );
  const local = PREFIXED_LOCALES.flatMap((l) =>
    (kind === "templates" ? getLocalTemplates(l) : getLocalIndustries(l)).map((e) =>
      entry(contentPath(kind, l, e.slug), contentVersions(kind, e.translation_of)),
    ),
  );
  return [
    ...(Object.entries(hubs) as [Locale, string][]).map(([, path]) => entry(path, hubs)),
    ...english,
    ...local,
  ];
}

export function sitemapEntries(): Record<SitemapType, SitemapEntry[]> {
  const translated = (keys: (k: PageKey) => boolean) =>
    (Object.keys(ROUTES) as PageKey[])
      .filter(keys)
      .flatMap((key) =>
        (Object.entries(ROUTES[key]) as [Locale, string][])
          .filter(([l]) => l !== DEFAULT_LOCALE)
          .map(([, path]) => entry(path)),
      );
  return {
    pages: [
      entry("/"),
      entry("/free-invoice-generator"),
      entry("/help"),
      entry("/android"),
      entry("/affiliate"),
      entry("/about"),
      entry("/contact"),
      entry("/terms"),
      entry("/privacy"),
      ...translated((k) => !TOOL_KEYS.includes(k)),
    ],
    templates: contentEntries("templates"),
    industries: contentEntries("industries"),
    compare: [entry("/compare"), ...getComparisons().map((c) => entry(`/compare/${c.slug}`))],
    tools: [
      entry("/tools"),
      ...TOOLS.filter((t) => t.href.startsWith("/tools/")).map((t) => entry(t.href)),
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
