/**
 * The page log (seo/keyword-map.csv → seo/PAGES.md). Shared by `npm run pages` and the site test.
 * Pure functions only: no file system, no network, so the test can check PAGES.md is up to date.
 */

export const COLUMNS = [
  "url",
  "lang",
  "status",
  "added",
  "page_type",
  "localize",
  "primary_keyword",
  "secondary_keywords",
  "intent",
  "chunk",
  "baseline_position",
  "notes",
];

/**
 * The language decision per page (roadmap R4, "localize only what makes sense"):
 * yes = written per country in every language · local = only in its own language ·
 * en-only = stays English (US/UK-only topics, HL8; the blog is a separate site).
 */
export const LOCALIZE = ["yes", "local", "en-only"];

export const LOCALES = ["en", "nl", "de", "fr", "es", "it", "pt", "pl", "sv", "da", "nb"];
export const BLOG_ORIGIN = "https://learn.invoicor.com";

/** Two keys this alike (0–1, shared words) are flagged. 1 = the same words. */
export const TOO_CLOSE = 0.6;
export const CLOSE = 0.4;

// ── CSV (RFC 4180: quotes around fields with commas or quotes) ──

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      if (row.some((f) => f !== "")) rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  row.push(field);
  if (row.some((f) => f !== "")) rows.push(row);
  const [header, ...body] = rows;
  return body.map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])));
}

export function toCsv(rows) {
  const esc = (v = "") => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
  return (
    [COLUMNS.join(","), ...rows.map((r) => COLUMNS.map((c) => esc(r[c])).join(","))].join("\n") +
    "\n"
  );
}

// ── Keys and similarity ──

const STOP = new Set(
  "a an the and or for to of on in at by with from your my you is are what how why can do does".split(
    " ",
  ),
);

/** The words of a keyword, lowercased, without filler words and plural -s. */
export function tokens(text) {
  return [
    ...new Set(
      text
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[̀-ͯ]/g, "")
        .split(/[^a-z0-9]+/)
        .filter((w) => w && !STOP.has(w))
        .map((w) => (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w)),
    ),
  ];
}

/**
 * Words almost every key has: they count for less, so "pool service invoice template" and
 * "tree service invoice template" aren't called alike just because of "invoice template".
 */
const COMMON = new Set(
  "invoice invoicing template app software iphone free factuur rechnung facture factura fattura fatura faktura".split(
    " ",
  ),
);
const weight = (w) => (COMMON.has(w) ? 0.3 : 1);

/** Shared words / all words (weighted Jaccard). 1 = the same words. */
export function similarity(a, b) {
  const x = new Set(tokens(a));
  const y = new Set(tokens(b));
  if (!x.size || !y.size) return 0;
  let shared = 0;
  let all = 0;
  for (const w of new Set([...x, ...y])) {
    all += weight(w);
    if (x.has(w) && y.has(w)) shared += weight(w);
  }
  return shared / all;
}

/** A trade's template and its "invoice app for …" page are a pair by design (a document vs an app). */
const isPair = (a, b) =>
  [a.page_type, b.page_type].includes("industry") &&
  [a.page_type, b.page_type].some((t) => t.startsWith("template"));

/** The pages most like `keyword` in the same language, best first. */
export function closest(rows, keyword, lang = "en", limit = 8) {
  return rows
    .filter((r) => r.lang === lang && r.status !== "removed")
    .map((r) => ({ row: r, score: similarity(keyword, r.primary_keyword) }))
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/** Pairs of pages in the same language whose keys are too close (likely to compete). */
export function overlaps(rows) {
  const pairs = [];
  const live = rows.filter((r) => r.status !== "removed");
  for (let i = 0; i < live.length; i++)
    for (let j = i + 1; j < live.length; j++) {
      const a = live[i];
      const b = live[j];
      if (a.lang !== b.lang) continue;
      // A hub and its own pages (/templates and /templates/plumbing) are meant to share words.
      if (b.url.startsWith(`${a.url}/`) || a.url.startsWith(`${b.url}/`)) continue;
      if (isPair(a, b)) continue;
      const score = similarity(a.primary_keyword, b.primary_keyword);
      if (score >= TOO_CLOSE) pairs.push({ a, b, score });
    }
  return pairs.sort((p, q) => q.score - p.score);
}

// ── Grouping ──

/** Where a page lives, for the counts: "learn.invoicor.com", "/templates", "/de" … */
export function section(row) {
  if (row.url.startsWith(BLOG_ORIGIN)) return "learn.invoicor.com (blog)";
  const first = row.url.split("/")[1] ?? "";
  if (LOCALES.includes(first)) return `/${first}`;
  if (["templates", "industries", "compare", "tools", "guides"].includes(first)) return `/${first}`;
  return "other English pages";
}

const shortUrl = (url) => url.replace(BLOG_ORIGIN, "learn:");

// ── PAGES.md ──

export function renderPagesMd(rows) {
  const live = rows.filter((r) => r.status === "live");
  const planned = rows.filter((r) => r.status === "planned");
  const out = [];
  out.push(
    "# Page log",
    "",
    "> **Generated, don't edit by hand.** The data is [keyword-map.csv](keyword-map.csv): one row per",
    "> page, with its language, status, the date it was made and its **key** (the search it's for).",
    "> After adding or removing pages: `npm run build && npm run pages`. Before planning a new page:",
    '> `npm run pages -- --check "plumbing deposit invoice"` (add `--lang de` for German) lists the',
    "> pages with the closest keys. The site test fails when this file or the CSV is behind the site.",
    "",
    `**${live.length} live pages** · ${planned.length} planned · last change ${latest(live)}`,
    "",
  );

  // Counts per section and per page type
  out.push("## Counts", "", "| Section | Live | Planned | Page types |", "|---|---|---|---|");
  const bySection = group(
    rows.filter((r) => r.status !== "removed"),
    section,
  );
  for (const [name, list] of sortedSections(bySection)) {
    const types = countBy(
      list.filter((r) => r.status === "live"),
      (r) => r.page_type,
    );
    out.push(
      `| ${name} | ${list.filter((r) => r.status === "live").length} | ${
        list.filter((r) => r.status === "planned").length || ""
      } | ${types.map(([t, n]) => `${t} ${n}`).join(", ")} |`,
    );
  }
  out.push("");

  // Languages: what still needs writing in the other 10 languages
  out.push(
    "## Languages",
    "",
    "Every page has a language decision in the `localize` column (roadmap R4): **yes** = written per",
    "country in all 11 languages (local words, rules and examples, not word for word), **local** = only",
    "in its own language, **en-only** = stays English. Each batch decides this for its new pages and",
    "writes its language versions as part of the batch.",
    "",
    "| Page type | Decision | English | Per other language | Still to write |",
    "|---|---|---|---|---|",
  );
  const site = rows.filter((r) => !r.url.startsWith(BLOG_ORIGIN) && r.status !== "removed");
  let todo = 0;
  for (const t of [...new Set(site.filter((r) => r.lang === "en").map((r) => r.page_type))]) {
    const en = site.filter((r) => r.lang === "en" && r.page_type === t);
    const decisions = [...new Set(en.map((r) => r.localize || "?"))].join(", ");
    const enLive = en.filter((r) => r.status === "live" && r.localize === "yes").length;
    const enPlanned = en.filter((r) => r.status === "planned" && r.localize === "yes").length;
    const per = LOCALES.slice(1).map(
      (l) => site.filter((r) => r.lang === l && r.page_type === t && r.status === "live").length,
    );
    const missing = per.reduce((sum, n) => sum + Math.max(0, enLive - n), 0);
    todo += missing;
    const range =
      Math.min(...per) === Math.max(...per)
        ? `${per[0]}`
        : `${Math.min(...per)}–${Math.max(...per)}`;
    out.push(
      `| ${t} | ${decisions} | ${en.filter((r) => r.status === "live").length}${enPlanned ? ` (+${enPlanned} planned)` : ""} | ${range} | ${missing || ""}${enPlanned ? `${missing ? " + " : ""}${enPlanned * 10} when the planned ones are live` : ""} |`,
    );
  }
  out.push("", `**${todo} language versions still to write** for live pages.`, "");

  // Page type × language
  const types = [
    ...new Set(live.filter((r) => !r.url.startsWith(BLOG_ORIGIN)).map((r) => r.page_type)),
  ];
  out.push(
    "### invoicor.com: page type × language",
    "",
    `| Type | ${LOCALES.join(" | ")} |`,
    `|---|${LOCALES.map(() => "---").join("|")}|`,
  );
  for (const t of types) {
    const cells = LOCALES.map(
      (l) =>
        live.filter((r) => r.page_type === t && r.lang === l && !r.url.startsWith(BLOG_ORIGIN))
          .length || "·",
    );
    out.push(`| ${t} | ${cells.join(" | ")} |`);
  }
  out.push("");

  // Made per day
  out.push("### Made per day", "", "| Date | Pages | What |", "|---|---|---|");
  const byDate = group(live, (r) => r.added || "unknown");
  for (const [date, list] of [...byDate].sort((a, b) => (a[0] < b[0] ? 1 : -1))) {
    const english = countBy(
      list.filter((r) => r.lang === "en"),
      (r) => r.page_type,
    ).map(([t, n]) => `${t} ${n}`);
    const other = list.filter((r) => r.lang !== "en");
    const langs = new Set(other.map((r) => r.lang)).size;
    const translated = other.length
      ? [
          `translations ${other.length} (${langs} languages: ${countBy(other, (r) => r.page_type)
            .map(([t, n]) => `${t} ${n}`)
            .join(", ")})`,
        ]
      : [];
    const what = [...english, ...translated].join(", ");
    out.push(`| ${date} | ${list.length} | ${what} |`);
  }
  out.push("");

  // Overlaps
  const pairs = overlaps(rows.filter((r) => r.status === "live" || r.status === "planned"));
  out.push(
    "## Keys that are too close",
    "",
    `Pages in the same language whose keys share most of their words (≥ ${TOO_CLOSE * 100}%). They`,
    "may compete for the same search: merge them, or give one a clearly different key and intent.",
    "",
  );
  if (!pairs.length) out.push("None.", "");
  else {
    out.push("| Alike | Page | Key | Page | Key |", "|---|---|---|---|---|");
    for (const { a, b, score } of pairs)
      out.push(
        `| ${Math.round(score * 100)}% | ${shortUrl(a.url)}${a.status === "planned" ? " _(planned)_" : ""} | ${a.primary_keyword} | ${shortUrl(b.url)}${b.status === "planned" ? " _(planned)_" : ""} | ${b.primary_keyword} |`,
      );
    out.push("");
  }

  // Every page, per section
  out.push("## All pages", "");
  for (const [name, list] of sortedSections(bySection)) {
    out.push(`### ${name} (${list.filter((r) => r.status === "live").length} live)`, "");
    out.push("| URL | Key | Type | Made | Status |", "|---|---|---|---|---|");
    for (const r of [...list].sort(byStatusThenUrl))
      out.push(
        `| ${shortUrl(r.url)} | ${r.primary_keyword} | ${r.page_type} | ${r.added || ""} | ${r.status} |`,
      );
    out.push("");
  }
  return out.join("\n");
}

function latest(rows) {
  return (
    rows
      .map((r) => r.added)
      .filter(Boolean)
      .sort()
      .at(-1) ?? "unknown"
  );
}

function group(list, keyFn) {
  const map = new Map();
  for (const item of list) {
    const k = keyFn(item);
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(item);
  }
  return map;
}

function countBy(list, keyFn) {
  return [...group(list, keyFn)].map(([k, v]) => [k, v.length]).sort((a, b) => b[1] - a[1]);
}

function sortedSections(map) {
  const order = (name) =>
    name === "other English pages"
      ? 0
      : name.startsWith("/") && !LOCALES.includes(name.slice(1))
        ? 1
        : name.startsWith("learn")
          ? 3
          : 2;
  return [...map].sort((a, b) => order(a[0]) - order(b[0]) || a[0].localeCompare(b[0]));
}

function byStatusThenUrl(a, b) {
  return (
    (a.status === "live" ? 0 : 1) - (b.status === "live" ? 0 : 1) || a.url.localeCompare(b.url)
  );
}
