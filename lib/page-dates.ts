import ledger from "@/content/page-dates.json";

/**
 * When each page's own text last changed: content/page-dates.json, one row per sitemap URL with
 * the date and a fingerprint of the page's text (lib/page-sources.ts). `npm run dates` keeps it up
 * to date (it also runs before every commit): a page whose text changed gets today's date, the
 * others keep theirs. The unit tests fail when a row is missing or stale, so a date can't lag.
 * Used for the sitemaps' <lastmod> and the "Updated" line on the content pages.
 */
export type PageDates = Record<string, { updated: string; hash: string }>;

const DATES = ledger as PageDates;

/** Today in the local time zone, as YYYY-MM-DD. */
export function today(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** The page's date; a page not dated yet (added since the last `npm run dates`) is new: today. */
export function pageUpdated(path: string): string {
  return DATES[path]?.updated ?? today();
}
