import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { getComparisons, getIndustries, getTemplates } from "@/lib/content";
import {
  contentPath,
  getLocalIndustries,
  getLocalTemplates,
  hubVersions,
} from "@/lib/content-i18n";
import { LOCALES, type Locale } from "@/lib/i18n/config";
import { ANDROID } from "@/lib/i18n/pages/android";
import { CONTENT_TEXT } from "@/lib/i18n/pages/content";
import { GENERATOR } from "@/lib/i18n/pages/generator";
import { HELP } from "@/lib/i18n/pages/help";
import { HOME } from "@/lib/i18n/pages/home";
import { TOOLS_TEXT } from "@/lib/i18n/pages/tools";
import { TRUST } from "@/lib/i18n/pages/trust";
import { type PageKey, pageForPath } from "@/lib/i18n/routes";
import type { PageDates } from "@/lib/page-dates";
import { sitemapEntries, SITEMAP_TYPES } from "@/lib/sitemap";

/**
 * What makes up each page's own text, per sitemap URL (for content/page-dates.json): the page's
 * entry or dictionary, not the shared header, footer or layout. A change in it gives the page a new
 * date; a change elsewhere (a button style, the footer) doesn't. Node only (tests and `npm run dates`).
 */
const card = (e: {
  slug: string;
  niche?: string;
  industry?: string;
  subtitle?: string;
  h1?: string;
}) => [e.slug, e.niche ?? e.industry ?? e.h1, e.subtitle];

function fromRoute(key: PageKey, l: Locale): unknown {
  switch (key) {
    case "home":
      return HOME[l];
    case "generator":
      return GENERATOR[l];
    case "help":
      return HELP[l];
    case "android":
      return ANDROID[l];
    case "tools":
      return TOOLS_TEXT[l].hub;
    case "vat":
    case "hours":
    case "rate":
      return TOOLS_TEXT[l][key];
    case "about":
      return [TRUST[l].about, TRUST[l].company, TRUST[l].country];
    case "contact":
      return [TRUST[l].contact, TRUST[l].company];
  }
}

export function pageSources(root = process.cwd()): Record<string, unknown> {
  const sources: Record<string, unknown> = {};
  for (const t of getTemplates()) sources[`/templates/${t.slug}`] = t;
  for (const i of getIndustries()) sources[`/industries/${i.slug}`] = i;
  for (const c of getComparisons()) sources[`/compare/${c.slug}`] = c;
  sources["/compare"] = getComparisons().map((c) => [c.slug, c.h1, c.subtitle]);
  for (const l of LOCALES) {
    for (const e of getLocalTemplates(l)) sources[contentPath("templates", l, e.slug)] = e;
    for (const e of getLocalIndustries(l)) sources[contentPath("industries", l, e.slug)] = e;
  }
  for (const kind of ["templates", "industries"] as const) {
    for (const [l, path] of Object.entries(hubVersions(kind)) as [Locale, string][]) {
      const entries =
        l === "en"
          ? kind === "templates"
            ? getTemplates()
            : getIndustries()
          : kind === "templates"
            ? getLocalTemplates(l)
            : getLocalIndustries(l);
      const text = kind === "templates" ? CONTENT_TEXT[l].templateHub : CONTENT_TEXT[l].industryHub;
      sources[path] = [text, entries.map(card)];
    }
  }
  const all = sitemapEntries();
  for (const type of SITEMAP_TYPES) {
    for (const { path } of all[type]) {
      if (path in sources) continue;
      const { key, locale } = pageForPath(path);
      if (key) {
        sources[path] = fromRoute(key, locale);
        continue;
      }
      // An English page with its text in its own file (affiliate, terms, privacy).
      const file = join(root, "app/(en)", path, "page.tsx");
      if (!existsSync(file))
        throw new Error(`no text source known for ${path}: add it to lib/page-sources.ts`);
      sources[path] = readFileSync(file, "utf8");
    }
  }
  return sources;
}

/** JSON with sorted keys, functions as their source, so the same text always gives the same hash. */
function stable(v: unknown): string {
  return JSON.stringify(v, (_k, x: unknown) => {
    if (typeof x === "function") return x.toString();
    if (x && typeof x === "object" && !Array.isArray(x))
      return Object.fromEntries(Object.entries(x).sort(([a], [b]) => a.localeCompare(b)));
    return x;
  });
}

export const fingerprint = (v: unknown) =>
  createHash("sha256").update(stable(v)).digest("hex").slice(0, 16);

/**
 * The ledger after today's changes: a page whose fingerprint changed, or a new page, gets `date`
 * (or its `seed` date, for the first fill); pages no longer in the sitemap are dropped.
 */
export function updateDates(
  prev: PageDates,
  sources: Record<string, unknown>,
  date: string,
  seed: Record<string, string> = {},
): { next: PageDates; changed: string[]; added: string[]; removed: string[] } {
  const next: PageDates = {};
  const changed: string[] = [];
  const added: string[] = [];
  for (const path of Object.keys(sources).sort()) {
    const hash = fingerprint(sources[path]);
    const old = prev[path];
    if (!old) {
      added.push(path);
      next[path] = { updated: seed[path] ?? date, hash };
    } else if (old.hash !== hash) {
      changed.push(path);
      next[path] = { updated: date, hash };
    } else next[path] = old;
  }
  const removed = Object.keys(prev).filter((p) => !(p in sources));
  return { next, changed, added, removed };
}
