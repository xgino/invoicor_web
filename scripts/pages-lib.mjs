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
  "item",
  "translation_of",
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
  "invoice invoicing template app software iphone free factuur rechnung facture factura fattura fatura faktura calculator pricing cost installation estimate".split(
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

/**
 * Pairs by design: a trade's template and its "invoice app for …" page (a document vs an app), and
 * an invoice type and a trade's page ("deposit invoice" is the parent of "photography deposit
 * invoice"; "service invoice" isn't "pool service invoice").
 */
const isPair = (a, b) => {
  const types = [a.page_type, b.page_type];
  if (types.includes("industry") && types.some((t) => t.startsWith("template"))) return true;
  // A calculator and a template answer different searches ("… calculator" vs "… invoice template").
  if (types.includes("tool") && types.some((t) => t.startsWith("template"))) return true;
  // A trade's template and its own billing-type pages (/templates/dj and /templates/dj-deposit-invoice).
  const slug = (r) => r.url.split("/").pop();
  if (types.includes("template") && types.includes("template (billing type)")) {
    const [t, bt] = a.page_type === "template" ? [a, b] : [b, a];
    if (slug(bt).startsWith(`${slug(t)}-`) || slug(bt).includes(`-${slug(t)}-`)) return true;
  }
  return (
    types.filter((t) => t === "template (invoice type)").length === 1 &&
    types.every((t) => t.startsWith("template"))
  );
};

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
import {
  GOAL,
  ITEMS,
  LANGUAGES,
  LANGUAGE_ORDER,
  LANGUAGE_SOURCES,
  ORDER,
  PREFIX,
  TASKS,
} from "./pages-items.mjs";

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
    "to-do list in [PLAN.md](PLAN.md#languages-l).",
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

const PAGE_RULES = [
  "- Same fields and depth as the live pages of that type; about 900–1,200 words of real, specific",
  "  text (the trade's jobs, units, materials, terms, billing habits). Title ≤ 60 characters ending in",
  "  `| Invoicor`, meta description ≤ 155, the key in the H1. No sentence copied from another page.",
  "- Sample invoices: realistic prices, correct math (qty × rate, subtotal, tax, balance), a stated and",
  '  hedged tax situation ("tax rules vary").',
  "- Only claims the app backs up (BRAND.md §10). No estimates or quotes, no recurring or scheduled",
  "  invoices, no reminders, no photo attachments, no deposit or partial-payment tracking, no time",
  "  tracking, no offline use, one tax rate per invoice. Repeat work = duplicate the last invoice and",
  "  change the date. A deposit = its own invoice, then a negative line or a note on the final invoice.",
  '- At most one "Can Invoicor do X? No." FAQ per page; spend the FAQs on the trade\'s own questions.',
  '- Legal and tax points hedged ("check your state\'s rule") unless the brief gives a sourced fact; a',
  "  specific law only with its source and the date checked.",
  "- Link the trade's pages both ways (template ↔ industry ↔ billing types); 2 `related` per page.",
  "- Never build a page that's in a category's **Done** list or whose key is taken",
  '  (`npm run pages -- --check "<key>"`): improve that page instead.',
  "- **Demand first (the gate):** before writing, find evidence that people search for the page's",
  '  key: Search Console queries, Google\'s autocomplete and "People also ask", or a keyword tool.',
  "  No evidence: don't write it. Set its `status` to `parked` with the reason in `notes`. The item",
  "  is done without it, and the key stays reserved so nobody plans it again.",
  "- **Value of its own:** a page must answer something its neighbours don't. If the honest content",
  "  is mostly the parent page with other nouns (a trade's billing type, a niche trade's app page),",
  "  park it and improve the parent instead. 4,000 pages is a direction, not a quota: Google's",
  "  scaled-content policy judges value per page, and weak pages pull the whole site down.",
  "- **Release in waves:** at most ~150 new URLs per deploy, then watch indexing per page type in",
  "  Search Console (sitemap per type, task S1).",
];

/** All plan files: seo/PLAN.md (the items), seo/plan/{category}.md (the briefs) and
 * seo/plan/languages/{lang}.md (every language item with its pages). */
export function renderPlanFiles(rows) {
  const files = { "seo/PLAN.md": renderPlan(rows) };
  for (const c of CATEGORIES) files[`seo/plan/${c.id}.md`] = renderCategory(rows, c);
  for (const l of LANGUAGE_ORDER) files[`seo/plan/languages/${l}.md`] = renderLanguage(rows, l);
  return files;
}

export function renderPlanMd(rows) {
  return renderPlan(rows);
}

const categoryOf = (r) => CATEGORIES.find((c) => c.match(r));
const pageLink = (r, fromPlan = true) => {
  const c = categoryOf(r);
  return c ? `${fromPlan ? "plan/" : ""}${c.id}.md#${anchor(shortUrl(r.url))}` : "";
};
const box = (done) => (done ? "[x]" : "[ ]");

/** An item's pages to build; parked pages (no demand, see PAGE_RULES) don't count. */
function itemStats(rows, itemId) {
  const all = rows.filter((r) => r.item === itemId && r.status !== "removed");
  const pages = all.filter((r) => r.status !== "parked");
  return {
    pages,
    parked: all.filter((r) => r.status === "parked"),
    live: pages.filter((r) => r.status === "live").length,
  };
}

/**
 * An item's pages in one language. A page that doesn't fit that country (no local demand, a trade
 * that works differently there) gets a row in that language with `status: parked` and
 * `translation_of`: it's skipped.
 */
function languageStats(rows, pages, lang) {
  const yes = pages.filter((r) => r.localize === "yes");
  const urls = new Set(yes.map((r) => r.url));
  const of = (status) =>
    rows.filter((r) => r.lang === lang && r.status === status && urls.has(r.translation_of)).length;
  return { total: yes.length - of("parked"), done: of("live") };
}

/** The language version of an English page, if planned, live or parked. */
const versionOf = (rows, url, lang) =>
  rows.find((r) => r.lang === lang && r.translation_of === url && r.status !== "removed");

/** L1, L2 …: per source item (LANGUAGE_SOURCES), one per language; append-only numbering. */
function languageItems(rows) {
  const list = [];
  for (const source of LANGUAGE_SOURCES) {
    const yes = itemStats(rows, source).pages.filter((r) => r.localize === "yes");
    if (!yes.length) continue;
    for (const lang of LANGUAGE_ORDER)
      list.push({ id: `L${list.length + 1}`, source, lang, pages: yes });
  }
  return list;
}

const itemOf = (id) => ITEMS.find((i) => i.id === id);
const itemCategory = (rows, id) => {
  const { pages, parked } = itemStats(rows, id);
  return categoryOf([...pages, ...parked][0] ?? {}) ?? null;
};
const lAnchor = (li) => anchor(`${li.id} ${li.source} in ${LANGUAGES[li.lang].name}`);

function renderPlan(rows) {
  const live = rows.filter((r) => r.status === "live");
  const planned = rows.filter((r) => r.status === "planned");
  const litems = languageItems(rows);
  const lStats = litems.map((li) => ({ li, ...languageStats(rows, li.pages, li.lang) }));
  const langTodo = lStats.reduce((n, s) => n + s.total - s.done, 0);
  const total = live.length + planned.filter((r) => r.item).length + langTodo;
  const out = [];
  out.push(
    "# Page plan: the road to 4,000 pages",
    "",
    "> **Generated, don't edit by hand.** Every item per category, with its pages below it: T1, T2 …",
    "> for trade templates, I1 … for industry pages, and so on; L1, L2 … for the language versions",
    "> (one language each). Boxes tick themselves when the pages are live. The brief per English page is",
    "> in [plan/](plan/) (one file per category, with what its pages can and can't do); the",
    "> instructions per language page are in [plan/languages/](plan/languages/) (one file per",
    "> language). What exists today: [PAGES.md](PAGES.md). Data: [keyword-map.csv](keyword-map.csv)",
    "> (`item`, `brief`, `avoid`), items: `scripts/pages-items.mjs`, categories:",
    "> `scripts/pages-categories.mjs`. After any change: `npm run pages`.",
    "",
    `**${live.length.toLocaleString("en")} / ${GOAL.toLocaleString("en")} pages live** (${Math.round((live.length / GOAL) * 100)}%) · planned: ${planned.filter((r) => r.item).length} English and local pages + ${langTodo.toLocaleString("en")} language pages · **${total.toLocaleString("en")} when everything is built** (fewer after the demand gate parks the weak ones)`,
    "",
    "## How to run an item",
    "",
    'Say which: "do T5", "do D1, B1", "do L1, L2" or "do S1". Then:',
    "",
    "1. **English item (T5, B1 …):** first the demand gate (rules below): park the pages nobody",
    "   searches for. Then, for each page listed under the item, read its brief (the link) and its",
    "   category's direction in the same file, the blueprint and the fact sheet",
    "   [BRAND.md §10](../BRAND.md). Use one live page of the same type as the model. Write them all,",
    "   then: `npm run content:check` → `npm run build` → `npm run pages` → `npm run check`. Update",
    "   ROADMAP.md; one commit per item.",
    "2. **Language item (L1 …):** one item's pages in one language, written for that country. Its",
    "   instructions per page are in that language's file in [plan/languages/](plan/languages/).",
    "   Needs task S1 for templates and industry pages, and the English pages live first.",
    "3. **Task (S1 …):** code work, no pages. Tick it in `scripts/pages-items.mjs` (`done: true`).",
    "4. **After each deploy:** wait 2–3 weeks and check in Search Console how many of the new pages got",
    "   indexed. A page type under ~50% indexed after 4 weeks: stop and improve it before adding more.",
    "",
    "## Rules for every page",
    "",
    ...PAGE_RULES,
    "",
    "## Rules for language items",
    "",
    "- Written for the country, by local search words (research them first), not word for word.",
    "- The slug, title, H1 and examples in that language; prices, currency and number format of that",
    "  market (the table below).",
    "- Never claim the app's screens are in that language (they're English); say \"invoices in your",
    '  language".',
    "- The e-invoicing warnings below are part of the page where they apply (first paragraph).",
    "- A page with no local search, or a trade that works differently there (a notary in Germany is a",
    "  state office with fixed fees), gets a `parked` row in that language (`translation_of` = the",
    "  English URL, the reason in `notes`): skipped, not translated anyway.",
    "- German first (it already gets clicks); Italian, Portuguese and Polish last (e-invoicing).",
    "",
    "| Lang | Markets | Money | Numbers | VAT | Tax words | Watch out |",
    "|---|---|---|---|---|---|---|",
    ...LANGUAGE_ORDER.map((l) => {
      const x = LANGUAGES[l];
      return `| [${l} ${x.name}](plan/languages/${l}.md) | ${x.markets} | ${x.money} | ${x.numbers} | ${x.rate} | ${x.tax} | ${x.watch} |`;
    }),
    "",
    "## Rules for new items",
    "",
    "So the plan can keep growing (the goal of 4,000 can move up or down with the results):",
    "",
    "- **One item = 15–25 pages of one category**, named with that category's letter and the next",
    "  number (T10, B4 …). Add it at the end of `ITEMS` in `scripts/pages-items.mjs`; numbers never",
    "  change.",
    "- **Languages:** if its pages are `localize: yes`, add the item at the end of `LANGUAGE_SOURCES`:",
    "  its 10 L items appear by themselves, with the next free numbers.",
    "- **New page ideas** must fit a category's direction ([plan/](plan/)), pass the key check, and get",
    "  a brief (`brief`) and what not to repeat (`avoid`) before they get an `item`.",
    "- **Proven types first:** a new page type (a new category) starts with one item of ≤ 10 pages and",
    "  grows only after it indexes.",
    '- **Parents before children:** the general page ("deposit invoice") comes before or with its',
    '  specific ones ("photography deposit invoice"), and the children link up to it.',
    "- **Bigger searches first:** a new trade or topic must be a search of its own, not a sub-niche or a",
    "  synonym of a planned one.",
    "- **Re-plan with Search Console data** every ~5 items: more of what ranks, less of what doesn't.",
    "",
  );

  // Overview
  out.push(
    "## Overview",
    "",
    "| Category | Items | Pages done | Pages to build | Language items |",
    "|---|---|---|---|---|",
  );
  for (const c of CATEGORIES) {
    const ids = ITEMS.filter((it) => itemCategory(rows, it.id) === c).map((it) => it.id);
    if (!ids.length) continue;
    const pages = ids.flatMap((id) => itemStats(rows, id).pages);
    const ls = lStats.filter((s) => ids.includes(s.li.source));
    const lrange = ls.length
      ? `${ls.filter((s) => s.total && s.done === s.total).length}/${ls.length} done`
      : "none";
    out.push(
      `| [${c.title}](#${anchor(`${c.title} ${PREFIX[c.id]}`)}) | ${ids.join(" ")} | ${pages.filter((r) => r.status === "live").length} | ${pages.filter((r) => r.status === "planned").length} | ${lrange} |`,
    );
  }
  out.push(
    `| [Languages](#languages-l) | L1–L${litems.length} | ${lStats.reduce((n, s) => n + s.done, 0)} | ${langTodo} | |`,
    "",
  );

  // Suggested order
  const doneId = (id) => {
    const t = TASKS.find((x) => x.id === id);
    if (t) return t.done;
    const { pages, live: n } = itemStats(rows, id);
    return pages.length > 0 && n === pages.length;
  };
  out.push(
    "## Suggested order",
    "",
    "The English items and tasks in the order that pays off most (parents first, bigger searches first,",
    "code before the pages that need it). Language items: in their number order, alongside, once their",
    "English pages are live.",
    "",
    ORDER.map((id) => (doneId(id) ? `~~${id}~~` : `**${id}**`)).join(" → "),
    "",
    "## Tasks (S): code, no pages",
    "",
    ...TASKS.map((t) => `- ${box(t.done)} **${t.id}** ${t.title}: ${t.text}`),
    "",
  );

  // Per category: its items and their pages
  for (const c of CATEGORIES) {
    const items = ITEMS.filter((it) => itemCategory(rows, it.id) === c);
    if (!items.length) continue;
    out.push(
      `## ${c.title} (${PREFIX[c.id]})`,
      "",
      `Direction (what these pages can and can't do) and every brief: [plan/${c.id}.md](plan/${c.id}.md)`,
      "",
    );
    for (const it of items) {
      const { pages, parked, live: n } = itemStats(rows, it.id);
      const ls = litems.filter((li) => li.source === it.id);
      out.push(
        `### ${it.id}: ${it.title}`,
        "",
        `- ${box(pages.length > 0 && n === pages.length)} **${it.id}** · ${n}/${pages.length} live${parked.length ? ` · ${parked.length} parked` : ""}${it.text ? ` · ${it.text}` : ""}${ls.length ? ` · languages: [${ls[0].id}–${ls.at(-1).id}](#${anchor(`${it.id} in every language`)})` : ""}`,
      );
      for (const r of pages)
        out.push(
          `  - ${box(r.status === "live")} [${shortUrl(r.url)}](${r.status === "live" ? `https://invoicor.com${r.url}` : pageLink(r)}) ${r.primary_keyword}`,
        );
      for (const r of parked)
        out.push(`  - ~~${shortUrl(r.url)}~~ parked: ${r.notes || "no reason given"}`);
      out.push("");
    }
  }

  // Languages
  out.push(
    "## Languages (L)",
    "",
    "One L item = one item's pages in one language. The instructions per page (search words, what to",
    "write for that country, what not to) are in the language's file; the number links there.",
    "",
  );
  for (const source of [...new Set(litems.map((li) => li.source))]) {
    const it = itemOf(source);
    out.push(
      `### ${source} in every language`,
      "",
      `${it.title} · ${litems.find((li) => li.source === source).pages.length} pages`,
      "",
    );
    for (const s of lStats.filter((x) => x.li.source === source))
      out.push(
        `- ${box(s.total > 0 && s.done === s.total)} [**${s.li.id}**](plan/languages/${s.li.lang}.md#${lAnchor(s.li)}) ${LANGUAGES[s.li.lang].name} · ${s.done}/${s.total}`,
      );
    out.push("");
  }

  // Not in an item
  const loose = planned.filter((r) => !r.item);
  out.push(
    "## Not in an item yet",
    "",
    "Blog topics (you write them on learn.invoicor.com), pages that need a decision or code first,",
    "and pages on hold, with the reason in their brief.",
    "",
  );
  for (const [g, list] of group(loose, (r) => r.chunk || "unsorted"))
    out.push(
      `- **${g}** (${list.length}): ${list.map((r) => `[${shortUrl(r.url)}](${pageLink(r)})`).join(" · ")}`,
    );
  out.push("");
  return out.join("\n");
}

/** What the page is about, in English, for the local search-word pattern ("plumbing", "plumbers"). */
function subjectOf(r) {
  return r.primary_keyword
    .replace(/^invoice app for /, "")
    .replace(/ (invoice template|invoice|calculator|checker|generator)$/, "")
    .trim();
}

function localKey(r, lang) {
  const keys = LANGUAGES[lang].keys;
  const hint = (r.notes.match(/local: ([^;]*)/) ?? [])[1];
  const pattern =
    r.page_type === "template"
      ? keys.template
      : r.page_type === "industry"
        ? keys.industry
        : r.page_type === "tool"
          ? keys.tool
          : "";
  const shape = pattern
    ? `"${pattern.replace(/\{(trade|tool)\}/, `[${subjectOf(r)}, in ${LANGUAGES[lang].name}]`)}"`
    : `the ${LANGUAGES[lang].name} term for "${r.primary_keyword}"`;
  return hint ? `${shape}; known local terms: ${hint}` : shape;
}

/** What a language version of this kind of page must get right, beyond the page's own brief. */
const TYPE_NOTES = {
  template:
    "A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.",
  "template (billing type)":
    "How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.",
  "template (invoice type)":
    "This document under that country's rules (the local terms list): what it must show there, the law or tax office as the source with the date checked.",
  industry:
    'A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".',
  tool: "The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.",
  generator: "The local document name and its rules there; the local generator presets.",
  country:
    "That country's own terms for the rule (the local terms list), with the local official source.",
  trust: "The same facts (BRAND.md §10), written naturally in that language.",
};

function renderLanguage(rows, lang) {
  const L = LANGUAGES[lang];
  const items = languageItems(rows).filter((li) => li.lang === lang);
  const out = [
    `# ${L.name} (${lang}): language items`,
    "",
    "> **Generated, don't edit by hand.** Every L item in this language with its pages and what each",
    "> page must do. Back to the [plan](../../PLAN.md#languages-l). Data: `seo/keyword-map.csv`; then",
    "> `npm run pages`.",
    "",
    `## Writing for ${L.markets}`,
    "",
    `- **Money:** ${L.money} · **numbers:** ${L.numbers} · **VAT:** ${L.rate}`,
    `- **Tax words:** ${L.tax}`,
    `- **Watch out:** ${L.watch}`,
    `- **Search words** usually look like: template "${L.keys.template}", app page "${L.keys.industry}", tool "${L.keys.tool}". Research the real local words first (the demand gate): Google in ${L.name} (autocomplete, "People also ask"), Search Console for the ${lang} pages.`,
    "- **Every page:** written for the country, not word for word; slug, title, H1 and examples in",
    `  ${L.name}; links to the English page (hreflang) and to the other ${lang} pages; the same depth and`,
    "  honesty rules as the English page ([PLAN.md](../../PLAN.md#rules-for-every-page)).",
    `- **Skip a page** that has no ${L.name} search or doesn't fit the country: a \`parked\` row in`,
    `  \`${lang}\` with \`translation_of\` = the English URL and the reason in \`notes\`.`,
    "",
  ];
  for (const li of items) {
    const it = itemOf(li.source);
    const s = languageStats(rows, li.pages, lang);
    const types = [...new Set(li.pages.map((r) => r.page_type))];
    out.push(
      `## ${li.id}: ${li.source} in ${L.name}`,
      "",
      `${box(s.total > 0 && s.done === s.total)} ${it.title} · ${s.done}/${s.total} live in ${lang}`,
      "",
      ...types.map((t) => `- **For every ${t} page:** ${TYPE_NOTES[t] ?? TYPE_NOTES.trust}`),
      "",
    );
    for (const r of li.pages) {
      const v = versionOf(rows, r.url, lang);
      const src = r.status === "live" ? `https://invoicor.com${r.url}` : `../${pageLink(r, false)}`;
      if (v?.status === "parked") {
        out.push(`- ~~${r.url}~~ skipped in ${lang}: ${v.notes || "no reason given"}`, "");
        continue;
      }
      out.push(
        `### ${r.url} → ${L.name}`,
        "",
        `- ${box(v?.status === "live")} **Live in ${lang}**${v ? `: ${v.url}` : ""}`,
        `- **English page:** [${r.primary_keyword}](${src})${r.status === "live" ? " (live: use it as the source)" : " (planned: write the English page first)"}`,
        `- **Search words:** ${localKey(r, lang)}`,
        `- **Write:** ${r.brief ? "the English brief, adapted to the country (local rules, prices and units instead of US ones): " + r.brief.replace(/^(Same fields|Needs (page )?code)[\s\S]*?\.(?=\s[A-Z])\s*/, "") : `the live page rewritten for ${L.markets}: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.`}`,
      );
      if (r.avoid) out.push(`- **Don't:** ${r.avoid}`);
      out.push("");
    }
  }
  if (!items.length) out.push("_No language items yet._", "");
  return out.join("\n");
}

function renderCategory(rows, c) {
  const site = rows.filter((r) => r.status !== "removed");
  const list = site.filter(c.match);
  const done = list.filter((r) => r.status === "live");
  const todo = list.filter((r) => r.status === "planned");
  const parked = list.filter((r) => r.status === "parked");
  const live = rows.filter((r) => r.status === "live");
  const out = [
    `# ${c.title}`,
    "",
    "> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:",
    "> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).",
    "",
    `**${done.length} done · ${todo.length} planned**`,
    "",
    "## Direction",
    "",
    `- **URL:** ${c.url} · **Key:** ${c.key}`,
    `- **Blueprint:** [${c.blueprint.split("#")[0].replace("../", "")}](../${c.blueprint}) · **Where it's written:** ${c.data}`,
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
    `## Done (${done.length}): don't build these again`,
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
    `## Planned (${todo.length})`,
    "",
  ];
  if (!todo.length) out.push("_Nothing planned._", "");
  const byItem = group(todo, (r) => r.item || r.chunk || "unscheduled");
  for (const [item, items] of [...byItem].sort((a, b) =>
    a[0].localeCompare(b[0], "en", { numeric: true }),
  )) {
    out.push(`### ${/^[A-Z]+\d+$/.test(item) ? `Item ${item}` : item} (${items.length})`, "");
    for (const r of items) {
      const near = closest(
        live.filter((x) => x.url !== r.url),
        r.primary_keyword,
        r.lang,
        4,
      ).filter((m) => m.score >= CLOSE);
      out.push(`#### ${shortUrl(r.url)}`, "");
      out.push(
        `- **Key:** ${r.primary_keyword}${r.secondary_keywords ? ` · also: ${r.secondary_keywords}` : ""}`,
        `- **Item:** ${r.item || r.chunk || "unscheduled"}${r.intent ? ` · **Intent:** ${r.intent}` : ""} · **Languages:** ${r.localize || "decide (yes / local / en-only)"}${r.lang !== "en" ? ` (written in ${r.lang})` : ""}`,
        `- **Write about:** ${r.brief || "_no brief yet: write one before building_"}`,
      );
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
  if (parked.length)
    out.push(
      `## Parked (${parked.length}): not built, key reserved`,
      "",
      "No proven demand, or the parent page covers it. Unpark (`status: planned`) only with new evidence.",
      "",
      ...parked.map(
        (r) => `- \`${shortUrl(r.url)}\` ${r.primary_keyword}: ${r.notes || "no reason given"}`,
      ),
      "",
    );
  return out.join("\n");
}

function anchor(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N} -]/gu, "")
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
