#!/usr/bin/env node
/**
 * The page log. Run after `npm run build`:
 *
 *   npm run pages                                   sync seo/keyword-map.csv with the site, write seo/PAGES.md
 *   npm run pages -- --check "plumbing deposit invoice" [--lang de]
 *                                                   before planning a page: the pages with the closest keys
 *
 * Sync: every URL in out/sitemap.xml gets a row (new rows: today's date, a key from the URL or the
 * title, "planned" becomes "live"); rows no longer on the site become "removed" (kept as history).
 * Rows without a date get the date from git history (the commit that added that page).
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  CLOSE,
  LOCALES,
  TOO_CLOSE,
  closest,
  parseCsv,
  renderPagesMd,
  renderPlanFiles,
  assignIds,
  renderRules,
  toCsv,
} from "./pages-lib.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const CSV = join(root, "seo/keyword-map.csv");
const MD = join(root, "seo/PAGES.md");
const OUT = join(root, "out");
const today = new Date().toISOString().slice(0, 10);

const args = process.argv.slice(2);
const rows = parseCsv(readFileSync(CSV, "utf8")).map((r) => ({
  ...r,
  lang: r.lang || langOf(r.url),
}));

if (args[0] === "--check") {
  const keyword = args[1];
  const lang = args.includes("--lang") ? args[args.indexOf("--lang") + 1] : "en";
  if (!keyword) {
    console.error('Usage: npm run pages -- --check "plumbing deposit invoice" [--lang de]');
    process.exit(1);
  }
  const matches = closest(rows, keyword, lang);
  console.log(`\nClosest pages to "${keyword}" (${lang}):\n`);
  if (!matches.length) console.log("  nothing alike: free to use.");
  for (const { row, score } of matches) {
    const verdict = score >= TOO_CLOSE ? "TOO CLOSE" : score >= CLOSE ? "close    " : "ok       ";
    console.log(
      `  ${verdict} ${String(Math.round(score * 100)).padStart(3)}%  ${row.primary_keyword}  (${row.url}, ${row.status})`,
    );
  }
  const top = matches[0]?.score ?? 0;
  console.log(
    top >= TOO_CLOSE
      ? "\n→ Too close: improve that page instead, or pick a clearly different key and intent.\n"
      : top >= CLOSE
        ? "\n→ Close: fine if the intent differs (e.g. template vs app); link the two pages to each other.\n"
        : "\n→ Free to use.\n",
  );
  process.exit(0);
}

// ── Sync with the built site ──
if (!existsSync(join(OUT, "sitemap.xml"))) {
  console.error("No out/sitemap.xml: run `npm run build` first.");
  process.exit(1);
}
const changes = [];
const byUrl = new Map(rows.map((r) => [r.url, r]));
const siteUrls = [
  ...readFileSync(join(OUT, "sitemap.xml"), "utf8").matchAll(
    /<loc>https:\/\/invoicor\.com([^<]*)<\/loc>/g,
  ),
].map((m) => m[1] || "/");

for (const url of siteUrls) {
  // A translation remembers its English page (hreflang="en"), so PLAN.md can tick off language items.
  if (langOf(url) !== "en" && byUrl.get(url) && !byUrl.get(url).translation_of) {
    const en = htmlOf(url).match(/hrefLang="en" href="https:\/\/invoicor\.com([^"]*)"/);
    if (en) byUrl.get(url).translation_of = en[1] || "/";
  }
  const row = byUrl.get(url);
  if (!row) {
    const html = htmlOf(url);
    // A translation has the type of its English page (hreflang="en"); the home page's is "".
    const en = html.match(/hrefLang="en" href="https:\/\/invoicor\.com([^"]*)"/);
    const enRow = en && en[1] !== url ? byUrl.get(en[1] || "/") : undefined;
    const type = enRow?.page_type || guessType(url);
    const fresh = {
      url,
      lang: langOf(url),
      status: "live",
      added: "",
      page_type: type,
      // A translation follows its English page; a new English page needs a decision (R4).
      localize: enRow?.localize ?? "",
      translation_of: enRow ? en[1] || "/" : "",
      id: "",
      primary_keyword: keyFrom(url, html),
      secondary_keywords: "",
      intent: "",
      chunk: "",
      baseline_position: "",
      notes: "key from the URL or title (npm run pages); check it",
    };
    rows.push(fresh);
    byUrl.set(url, fresh);
    changes.push(`+ ${url}  (${fresh.primary_keyword})`);
  } else if (row.status !== "live") {
    changes.push(`${row.status} → live  ${url}`);
    row.status = "live";
  }
}
const onSite = new Set(siteUrls);
for (const r of rows)
  if (r.status === "live" && !onSite.has(r.url)) {
    r.status = "removed";
    changes.push(`- ${r.url} (no longer on the site)`);
  }

// ── Dates ──
for (const r of rows) if (r.status === "live" && !r.added) r.added = gitDate(r.url) || today;

// ── IDs: new pages get the next number of their letter, language versions {id}-{lang} ──
for (const r of assignIds(rows)) changes.push(`id ${r.id}  ${r.url}`);

// ── Write ──
const order = (r) => (r.lang === "en" ? 0 : 1);
rows.sort((a, b) => order(a) - order(b));
writeFileSync(CSV, toCsv(rows));
writeFileSync(MD, renderPagesMd(rows));
for (const [file, text] of Object.entries(renderPlanFiles(rows))) {
  mkdirSync(dirname(join(root, file)), { recursive: true });
  writeFileSync(join(root, file), text);
}
const RULES = join(root, "seo/RULES.md");
writeFileSync(RULES, renderRules(readFileSync(RULES, "utf8")));
console.log(changes.length ? changes.join("\n") : "No new or removed pages.");
console.log(
  `\nseo/keyword-map.csv, seo/PAGES.md, seo/PLAN.md, seo/plan/ and the language table in seo/RULES.md updated (${rows.filter((r) => r.status === "live").length} live pages).`,
);

// ── Helpers ──

function langOf(url) {
  if (url.startsWith("http")) return "en";
  const first = url.split("/")[1];
  return LOCALES.includes(first) ? first : "en";
}

function htmlOf(url) {
  const file = join(OUT, url === "/" ? "index.html" : `${url.slice(1)}.html`);
  return existsSync(file) ? readFileSync(file, "utf8") : "";
}

function keyFrom(url, html) {
  const last = url.split("/").filter(Boolean).at(-1) ?? "";
  // Slugs are chosen as search words ("rechnung-erstellen"). A home page or a one-word slug
  // ("hilfe", "android") says little: use the first part of the page title instead.
  if (last.includes("-") && !LOCALES.includes(last))
    return decodeURIComponent(last).replace(/-/g, " ");
  const title = decodeEntities(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  return title.split("|")[0].trim().toLowerCase() || decodeURIComponent(last) || "home";
}

function decodeEntities(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function guessType(url) {
  if (url.split("/").filter(Boolean).at(-1) === "android") return "android";
  const segments = url.split("/").filter(Boolean);
  return segments.length <= 1 ? "page" : segments[0];
}

/** The day the commit that first mentioned this page was made. */
function gitDate(url) {
  const tries = [];
  if (!url.startsWith("http")) {
    const slug = url.split("/").filter(Boolean).at(-1);
    if (langOf(url) !== "en") tries.push([`"${url}"`, "lib/i18n"]);
    if (slug) tries.push([`"slug": "${slug}"`, "content"]);
    tries.push([`"${url}"`, "lib"]);
    if (url === "/") return gitLog(["--diff-filter=A", "--", "app/(en)/page.tsx"]);
    const page = `app/(en)${url}/page.tsx`;
    if (existsSync(join(root, page))) return gitLog(["--diff-filter=A", "--", page]);
  }
  for (const [needle, path] of tries) {
    const date = gitLog([`-S${needle}`, "--", path]);
    if (date) return date;
  }
  return "";
}

function gitLog(extra) {
  try {
    const out = execFileSync("git", ["log", "--reverse", "--format=%as", ...extra], {
      cwd: root,
      encoding: "utf8",
    });
    return out.split("\n")[0].trim();
  } catch {
    return "";
  }
}
