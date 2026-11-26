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
  "brief",
  "avoid",
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

import { CATEGORIES } from "./pages-categories.mjs";

// ── PAGES.md: what we have ──

export function renderPagesMd(rows) {
  const live = rows.filter((r) => r.status === "live");
  const planned = rows.filter((r) => r.status === "planned");
  const out = [];
  out.push(
    "# Pages we have",
    "",
    "> **Generated, don't edit by hand.** Every live page on invoicor.com, its translations and the",
    "> blog (learn.invoicor.com), with its **key** (the search it's for), its language decision and the",
    "> date it was made. What we still want to build is in [PLAN.md](PLAN.md). The data for both is",
    "> [keyword-map.csv](keyword-map.csv). After adding or removing pages: `npm run build && npm run pages`.",
    '> Is a key taken? `npm run pages -- --check "plumbing deposit invoice"` (`--lang de` for German).',
    "> The site test fails when this file or the CSV is behind the site.",
    "",
    `**${live.length} live pages** · last change ${latest(live)} · ${planned.length} more planned in [PLAN.md](PLAN.md)`,
    "",
  );

  // Counts per section and per page type
  out.push("## Counts", "", "| Section | Live | Page types |", "|---|---|---|");
  const bySection = group(live, section);
  for (const [name, list] of sortedSections(bySection)) {
    const types = countBy(list, (r) => r.page_type);
    out.push(`| ${name} | ${list.length} | ${types.map(([t, n]) => `${t} ${n}`).join(", ")} |`);
  }
  out.push("");

  // Languages
  out.push(
    "## Languages",
    "",
    "Every page has a language decision in the `localize` column (roadmap R4): **yes** = written per",
    "country in all 11 languages (local words, rules and examples, not word for word), **local** = only",
    "in its own language, **en-only** = stays English. The language versions still to write are on the",
    "to-do list in [PLAN.md](PLAN.md#language-versions-to-write).",
    "",
    "| Page type | Decision | English | Per other language | Still to write |",
    "|---|---|---|---|---|",
  );
  const gaps = languageGaps(rows);
  for (const g of gaps)
    out.push(`| ${g.type} | ${g.decisions} | ${g.en} | ${g.range} | ${g.missing || ""} |`);
  out.push(
    "",
    `**${gaps.reduce((s, g) => s + g.missing, 0)} language versions still to write** for live pages.`,
    "",
  );

  // Page type × language
  const site = live.filter((r) => !r.url.startsWith(BLOG_ORIGIN));
  out.push(
    "### invoicor.com: page type × language",
    "",
    `| Type | ${LOCALES.join(" | ")} |`,
    `|---|${LOCALES.map(() => "---").join("|")}|`,
  );
  for (const t of [...new Set(site.map((r) => r.page_type))]) {
    const cells = LOCALES.map(
      (l) => site.filter((r) => r.page_type === t && r.lang === l).length || "·",
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
    out.push(`| ${date} | ${list.length} | ${[...english, ...translated].join(", ")} |`);
  }
  out.push("");

  // Overlaps
  const pairs = overlaps(live);
  out.push(
    "## Keys that are too close",
    "",
    `Live pages in the same language whose keys share most of their words (≥ ${TOO_CLOSE * 100}%).`,
    "They may compete for the same search: merge them, or give one a clearly different key and intent.",
    "",
  );
  if (!pairs.length) out.push("None.", "");
  else {
    out.push("| Alike | Page | Key | Page | Key |", "|---|---|---|---|---|");
    for (const { a, b, score } of pairs)
      out.push(
        `| ${Math.round(score * 100)}% | ${shortUrl(a.url)} | ${a.primary_keyword} | ${shortUrl(b.url)} | ${b.primary_keyword} |`,
      );
    out.push("");
  }

  // Every page, per section
  out.push("## All pages", "");
  for (const [name, list] of sortedSections(bySection)) {
    out.push(`### ${name} (${list.length})`, "");
    out.push("| URL | Key | Type | Languages | Made |", "|---|---|---|---|---|");
    for (const r of [...list].sort((a, b) => a.url.localeCompare(b.url)))
      out.push(
        `| ${shortUrl(r.url)} | ${r.primary_keyword} | ${r.page_type} | ${r.localize} | ${r.added || ""} |`,
      );
    out.push("");
  }
  const removed = rows.filter((r) => r.status === "removed");
  if (removed.length) {
    out.push("## Removed pages (history)", "", "| URL | Key | Made |", "|---|---|---|");
    for (const r of removed) out.push(`| ${shortUrl(r.url)} | ${r.primary_keyword} | ${r.added} |`);
    out.push("");
  }
  return out.join("\n");
}

/** Per English page type marked "yes": how many language versions are missing. */
function languageGaps(rows) {
  const site = rows.filter((r) => !r.url.startsWith(BLOG_ORIGIN) && r.status === "live");
  return [...new Set(site.filter((r) => r.lang === "en").map((r) => r.page_type))].map((type) => {
    const en = site.filter((r) => r.lang === "en" && r.page_type === type);
    const yes = en.filter((r) => r.localize === "yes").length;
    const per = LOCALES.slice(1).map(
      (l) => site.filter((r) => r.lang === l && r.page_type === type).length,
    );
    const range =
      Math.min(...per) === Math.max(...per)
        ? `${per[0]}`
        : `${Math.min(...per)}–${Math.max(...per)}`;
    return {
      type,
      decisions: [...new Set(en.map((r) => r.localize || "?"))].join(", "),
      en: en.length,
      yes,
      range,
      missing: per.reduce((sum, n) => sum + Math.max(0, yes - n), 0),
    };
  });
}

// ── PLAN.md: what to build next (instructions) ──

export function renderPlanMd(rows) {
  const planned = rows.filter((r) => r.status === "planned");
  const live = rows.filter((r) => r.status === "live");
  const batches = group(planned, (r) => r.chunk || "unscheduled");
  const order = [...batches.keys()].sort((a, b) => {
    const w = (k) => (/^W\d/.test(k) ? 0 : 1);
    return w(a) - w(b) || a.localeCompare(b, "en", { numeric: true });
  });
  const out = [];
  out.push(
    "# Page plan: what to build next",
    "",
    "> **Generated, don't edit by hand.** The instructions for whoever builds the next pages, a person",
    "> or a model. Every planned page has a brief here: what to write, and which existing pages already",
    "> cover nearby topics (link to those, don't repeat them). What exists today is in",
    "> [PAGES.md](PAGES.md). To change a brief or plan a page, edit its row in",
    "> [keyword-map.csv](keyword-map.csv) (`brief`, `avoid`, `chunk` = batch) and run `npm run pages`.",
    "",
    `**${planned.length} pages planned** in ${order.length} groups · ${live.length} live today`,
    "",
    "## How to build a batch",
    "",
    "1. **Take the first batch that's ready** (the table below; the roadmap, W1, says when). Build all its pages",
    "   in one go, then wait 2–3 weeks and check the indexed share in Search Console before the next.",
    "2. **For each page read:** its brief and its category's direction below; the blueprint (linked per category,",
    "   [BLUEPRINTS.md](BLUEPRINTS.md)); the fact sheet [BRAND.md §10](../BRAND.md) (what the app does",
    "   and doesn't do); one live page of the same type as the model for depth and fields.",
    "3. **Don't repeat what another page owns.** Each brief lists the closest existing pages under",
    '   "Already covered". Mention the topic in a sentence and link there; never write a second',
    '   section about it. A new idea? Run `npm run pages -- --check "<key>"` first.',
    "4. **Write it** in the right place: `content/templates.json` or `content/industries.json` for",
    "   templates and industry pages ([CONTENT.md](../CONTENT.md)); other types need page code, the brief",
    "   says so.",
    "5. **Language step:** the page's `Languages` decision. **yes** = it gets its language versions as",
    "   part of the batch (local words, rules and examples per country, not word for word); **local** =",
    "   only in its own language; **en-only** = English only.",
    "6. **Check and log:** `npm run content:check` → `npm run build` → `npm run pages` (the page moves from",
    "   here to PAGES.md) → `npm run check`. Update ROADMAP.md, one commit per batch.",
    "",
    "## Rules for every page (learned in batch A)",
    "",
    "- Same fields and depth as the live pages of that type; about 900–1,200 words of real, trade-specific",
    "  text (jobs, units, materials, terms, billing habits). Title ≤ 60 characters ending in `| Invoicor`,",
    "  meta description ≤ 155, the key in the H1. No sentence copied from another page.",
    "- Sample invoices: realistic prices, correct math (qty × rate, subtotal, tax, balance), a stated and",
    '  hedged tax situation ("tax rules vary").',
    "- Only claims the app backs up (BRAND.md §10). No estimates or quotes, no recurring or scheduled",
    "  invoices, no reminders, no photo attachments, no deposit or partial-payment tracking, no time",
    "  tracking, no offline use, one tax rate per invoice. Repeat work = duplicate the last invoice and",
    "  change the date. A deposit = its own invoice, then a negative line or a note on the final invoice.",
    '- Not too many "Can Invoicor do X? No." FAQs: at most one per page; spend the FAQs on the trade\'s',
    "  own questions.",
    '- Legal and tax points are hedged ("check your state\'s rule") unless the brief gives a sourced fact;',
    "  a specific law only with its source and date.",
    "- `related` links: 2 pages of the same collection; link the trade's other pages (template ↔ industry",
    "  ↔ billing types) both ways.",
    "",
    "## Batches",
    "",
    "| Batch | Pages | Types | Languages |",
    "|---|---|---|---|",
  );
  for (const k of order) {
    const list = batches.get(k);
    out.push(
      `| ${k} | ${list.length} | ${countBy(list, (r) => r.page_type)
        .map(([t, n]) => `${t} ${n}`)
        .join(", ")} | ${countBy(list, (r) => r.localize || "?")
        .map(([t, n]) => `${t} ${n}`)
        .join(", ")} |`,
    );
  }
  out.push("");

  // Categories: direction, what's done, what's planned
  const site = rows.filter((r) => r.status !== "removed");
  out.push(
    "## Categories",
    "",
    "Each category below has its **direction** (what its pages may and may not do), the pages that",
    "are **done** (never build these again; improve them instead), and the **planned** pages with a",
    "brief each. A new page idea must fit a category's direction; if it fits none, it needs a decision",
    "first (a new category here).",
    "",
    "| Category | Live | Planned | Languages |",
    "|---|---|---|---|",
  );
  for (const c of CATEGORIES) {
    const list = site.filter(c.match);
    out.push(
      `| [${c.title}](#${anchor(c.title)}) | ${list.filter((r) => r.status === "live").length} | ${
        list.filter((r) => r.status === "planned").length
      } | ${c.languages.match(/\*\*(.+?)\*\*/)?.[1] ?? c.languages.split(/[:.;]/)[0]} |`,
    );
  }
  out.push("");

  for (const c of CATEGORIES) {
    const list = site.filter(c.match);
    const done = list.filter((r) => r.status === "live");
    const todo = list.filter((r) => r.status === "planned");
    out.push(`## ${c.title}`, "");
    out.push(
      `- **URL:** ${c.url} · **Key:** ${c.key}`,
      `- **Blueprint:** [${c.blueprint.split("#")[0]}](${c.blueprint}) · **Where it's written:** ${c.data}`,
      `- **Links to:** ${c.links}`,
      `- **Languages:** ${c.languages}`,
      "",
      "**Can do:**",
      "",
      ...c.can.map((x) => `- ${x}`),
      "",
      "**Can't do:**",
      "",
      ...c.cannot.map((x) => `- ${x}`),
      "",
    );
    out.push(
      `### Done (${done.length}): don't build these again`,
      "",
      done.length
        ? done
            .map(
              (r) =>
                `\`${shortUrl(r.url).replace(/^\/(templates|industries|compare|tools)\//, "")}\` ${r.primary_keyword}`,
            )
            .join(" · ")
        : "_None yet._",
      "",
    );
    out.push(`### Planned (${todo.length})`, "");
    if (!todo.length) out.push("_Nothing planned._", "");
    for (const r of todo) {
      const near = closest(
        live.filter((x) => x.url !== r.url),
        r.primary_keyword,
        r.lang,
        4,
      ).filter((m) => m.score >= CLOSE);
      out.push(`#### ${shortUrl(r.url)}`, "");
      out.push(
        `- **Key:** ${r.primary_keyword}${r.secondary_keywords ? ` · also: ${r.secondary_keywords}` : ""}`,
      );
      out.push(
        `- **Batch:** ${r.chunk || "unscheduled"}${r.intent ? ` · **Intent:** ${r.intent}` : ""} · **Languages:** ${r.localize || "decide (yes / local / en-only)"}${r.lang !== "en" ? ` (written in ${r.lang})` : ""}`,
      );
      out.push(`- **Write about:** ${r.brief || "_no brief yet: write one before building_"}`);
      if (r.avoid) out.push(`- **Don't write about:** ${r.avoid}`);
      if (near.length)
        out.push(
          `- **Already covered (link, don't repeat):** ${near
            .map((m) => `${shortUrl(m.row.url)} (“${m.row.primary_keyword}”)`)
            .join(" · ")}`,
        );
      if (r.notes) out.push(`- **Notes:** ${r.notes}`);
      out.push("");
    }
  }

  // Language versions of live pages
  out.push(
    "## Language versions to write",
    "",
    "Live English pages marked **yes** that don't exist in every language yet. Pages that already have",
    "their language versions (home, generator, tools, help, Android) aren't listed.",
    "",
    "| Page type | English pages | Missing language versions |",
    "|---|---|---|",
  );
  for (const g of languageGaps(rows).filter((g) => g.missing))
    out.push(`| ${g.type} | ${g.yes} | ${g.missing} |`);
  out.push(
    "",
    "Before the first one: templates and industry pages have no language setup yet (roadmap H4: the page",
    "labels per language, `content/{locale}/*.json`, local slugs and search words, hreflang). Start with",
    "the languages that get traffic (German first, roadmap H6).",
    "",
  );
  return out.join("\n");
}

function anchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/ /g, "-");
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
