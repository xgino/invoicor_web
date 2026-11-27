/**
 * The page log (seo/pages/*.csv → seo/PAGES.md, PLAN.md, LANGUAGES.md). Shared by `npm run pages` and the site test.
 * Pure functions only: no file system, no network, so the test can check PAGES.md is up to date.
 */

export const COLUMNS = [
  /** The page's ID: {letter}{n} per category (D4), a language version {parent}-{lang} (D4-de). */
  "id",
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
  "translation_of",
  "score",
  "score_why",
];

/**
 * `score`: how much a planned page is worth building, 1–5 (seo/RULES.md §3), with the evidence in
 * `score_why`. Blank = not scored yet, counted as UNSCORED.
 */
export const SCORES = ["", "1", "2", "3", "4", "5"];
export const UNSCORED = 3;
export const scoreOf = (r) => Number(r.score) || UNSCORED;
/** Best first; ties keep their order. */
const byScore = (list) =>
  list
    .map((r, i) => ({ r, i }))
    .sort((a, b) => scoreOf(b.r) - scoreOf(a.r) || a.i - b.i)
    .map((x) => x.r);
const scoreLabel = (r) => (r.score ? ` · score ${r.score}` : "");

/**
 * The language decision per page (roadmap R4, "localize only what makes sense"):
 * yes = written per country in every language · local = only in its own language ·
 * en-only = stays English (US/UK-only topics, HL8).
 */
export const LOCALIZE = ["yes", "local", "en-only"];

export const LOCALES = ["en", "nl", "de", "fr", "es", "it", "pt", "pl", "sv", "da", "nb"];

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

/** Where a page lives, for the counts: "/templates", "/de" … */
export function section(row) {
  const first = row.url.split("/")[1] ?? "";
  if (LOCALES.includes(first)) return `/${first}`;
  if (["templates", "industries", "compare", "tools", "guides"].includes(first)) return `/${first}`;
  return "other English pages";
}

const shortUrl = (url) => url;

import { CATEGORIES } from "./pages-categories.mjs";
import {
  GOAL,
  GROUPS,
  LANGUAGES,
  LANGUAGE_NEEDS,
  LANGUAGE_ORDER,
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
    "> **Generated, don't edit by hand.** Every live page on invoicor.com and its translations,",
    "> with its **key** (the search it's for), its language decision and the",
    "> date it was made. What we still want to build is in [PLAN.md](PLAN.md). The data for both is",
    "> [pages/](pages/) (one CSV per category). After adding or removing pages: `npm run build && npm run pages`.",
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
    "in its own language, **en-only** = stays English. Which live page misses which language:",
    "[LANGUAGES.md](LANGUAGES.md) (the gap map).",
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
  const site = live;
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
  const site = rows.filter((r) => r.status === "live");
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

// ── LANGUAGES.md: the gap map ──

/** The task a page's language versions wait for (S1 …), or "" when they can be written now. */
export function languageBlocker(page) {
  const done = (id) => TASKS.find((t) => t.id === id)?.done;
  for (const [task, x] of Object.entries(LANGUAGE_NEEDS))
    if (!done(task) && (x.types.includes(page.page_type) || x.urls.includes(page.url))) return task;
  return "";
}

/**
 * Per live page that should exist in every language (`localize: yes`): its state per language.
 * live = the version is live; parked = skipped on purpose (the reason in its row); planned = a row
 * exists but isn't live; missing = no version yet. A gap = planned or missing.
 */
export function languageGapsByPage(rows) {
  const versions = new Map();
  for (const r of rows)
    if (r.translation_of && r.status !== "removed")
      versions.set(`${r.translation_of}|${r.lang}`, r);
  return rows
    .filter((r) => r.status === "live" && !r.translation_of && r.localize === "yes")
    .map((page) => {
      const state = Object.fromEntries(
        LANGUAGE_ORDER.map((l) => [l, versions.get(`${page.url}|${l}`)?.status ?? "missing"]),
      );
      const gaps = LANGUAGE_ORDER.filter((l) => state[l] === "missing" || state[l] === "planned");
      return { page, state, gaps, needs: languageBlocker(page) };
    });
}

const MARK = { live: "✓", parked: "–", planned: "◦", missing: "·" };

function renderLanguagesMd(rows) {
  const all = languageGapsByPage(rows);
  const gapsTotal = all.reduce((n, x) => n + x.gaps.length, 0);
  const now = all.filter((x) => !x.needs).reduce((n, x) => n + x.gaps.length, 0);
  const out = [
    "# Language gaps",
    "",
    "> **Generated, don't edit by hand.** Every live page that should exist in all 11 languages",
    "> (`localize: yes`) and, per language, whether its version exists. **Fill a page type's gaps",
    "> before adding more English pages of that type** ([RULES.md §3](RULES.md#3-planning-new-pages)).",
    '> Ask for them by ID: "do D4-de", or "do the German gaps for D". List them:',
    "> `npm run pages:gaps -- de` (a language), `-- de D` (and a letter). Data: [pages/](pages/);",
    "> then `npm run pages`.",
    "",
    `**${gapsTotal.toLocaleString("en")} language versions missing** for ${all.filter((x) => x.gaps.length).length} of ${all.length} live pages · ${now.toLocaleString("en")} can be written now, ${(gapsTotal - now).toLocaleString("en")} wait for a task (the **Needs** column).`,
    "",
    `Marks: **${MARK.live}** live, **${MARK.missing}** missing, **${MARK.planned}** planned (a row exists, not live yet), **${MARK.parked}** parked on purpose (no local demand; the reason is in its row).`,
    "",
    "## Per category",
    "",
    `| Category | Live pages | Complete | Missing | Needs | ${LANGUAGE_ORDER.join(" | ")} |`,
    `|---|---|---|---|---|${LANGUAGE_ORDER.map(() => "---").join("|")}|`,
  ];
  const byCat = CATEGORIES.map((c) => ({
    c,
    list: all.filter((x) => categoryOf(x.page) === c),
  })).filter((x) => x.list.length);
  for (const { c, list } of byCat) {
    const per = LANGUAGE_ORDER.map((l) => list.filter((x) => x.gaps.includes(l)).length || "");
    const needs = [
      ...new Set(
        list
          .filter((x) => x.gaps.length)
          .map((x) => x.needs)
          .filter(Boolean),
      ),
    ];
    out.push(
      `| [${PREFIX[c.id]} · ${c.title}](#${anchor(`${PREFIX[c.id]} ${c.title}`)}) | ${list.length} | ${list.filter((x) => !x.gaps.length).length} | ${list.reduce((n, x) => n + x.gaps.length, 0)} | ${needs.join(", ") || "none"} | ${per.join(" | ")} |`,
    );
  }
  out.push("");
  for (const { c, list } of byCat) {
    out.push(
      `## ${PREFIX[c.id]} ${c.title}`,
      "",
      `| ID | Page | Needs | ${LANGUAGE_ORDER.join(" | ")} |`,
      `|---|---|---|${LANGUAGE_ORDER.map(() => "---").join("|")}|`,
    );
    for (const x of [...list].sort(
      (a, b) => (parseId(a.page.id)?.n ?? 0) - (parseId(b.page.id)?.n ?? 0),
    ))
      out.push(
        `| ${x.page.id} | ${x.page.url} | ${x.gaps.length ? x.needs || "" : "complete"} | ${LANGUAGE_ORDER.map((l) => MARK[x.state[l]] ?? "?").join(" | ")} |`,
      );
    out.push("");
  }
  return out.join("\n");
}

// ── RULES.md: the one generated block (the language table) ──

const RULES_START =
  "<!-- generated:languages (npm run pages; edit LANGUAGES in scripts/pages-items.mjs) -->";
const RULES_END = "<!-- /generated:languages -->";

/** The markets per language: money, number format, VAT, tax words, e-invoicing warnings. */
export function renderLanguageTable() {
  return [
    "| Lang | Markets | Money | Numbers | VAT | Tax words | Watch out |",
    "|---|---|---|---|---|---|---|",
    ...LANGUAGE_ORDER.map((l) => {
      const x = LANGUAGES[l];
      return `| [${l} ${x.name}](plan/languages/${l}.md) | ${x.markets} | ${x.money} | ${x.numbers} | ${x.rate} | ${x.tax} | ${x.watch} |`;
    }),
  ].join("\n");
}

/** seo/RULES.md with its generated block refreshed; the rest is hand-written. */
export function renderRules(text) {
  const a = text.indexOf(RULES_START);
  const b = text.indexOf(RULES_END);
  if (a < 0 || b < a) throw new Error(`seo/RULES.md: missing ${RULES_START} … ${RULES_END}`);
  return `${text.slice(0, a + RULES_START.length)}\n${renderLanguageTable()}\n${text.slice(b)}`;
}

/** A category's heading in RULES.md §5: "T · Trade templates". */
export const rulesHeading = (c) => `${PREFIX[c.id]} · ${c.title}`;

/** The category's section of RULES.md (its heading up to the next one), or null. */
export function rulesSection(text, c) {
  const head = `### ${rulesHeading(c)}\n`;
  const a = text.indexOf(head);
  if (a < 0) return null;
  const rest = text.slice(a + head.length);
  const b = rest.search(/^#{2,3} /m);
  return (b < 0 ? rest : rest.slice(0, b)).trim();
}

// ── PLAN.md: what to build next (instructions) ──

/** All plan files: seo/PLAN.md (the items), seo/plan/{category}.md (the briefs) and
 * seo/plan/languages/{lang}.md (every language item with its pages). */
export function renderPlanFiles(rows) {
  const files = { "seo/PLAN.md": renderPlan(rows), "seo/LANGUAGES.md": renderLanguagesMd(rows) };
  for (const c of CATEGORIES) files[`seo/plan/${c.id}.md`] = renderCategory(rows, c);
  for (const l of LANGUAGE_ORDER) files[`seo/plan/languages/${l}.md`] = renderLanguage(rows, l);
  return files;
}

export function renderPlanMd(rows) {
  return renderPlan(rows);
}

const categoryOf = (r) => CATEGORIES.find((c) => c.match(r));
/** The heading of a page in its category file: "D4 · /templates/hourly-invoice". */
const pageHeading = (r) => `${r.id} · ${shortUrl(r.url)}`;
const pageLink = (r, fromPlan = true) => {
  const c = categoryOf(r);
  return c ? `${fromPlan ? "plan/" : ""}${c.id}.md#${anchor(pageHeading(r))}` : "";
};
const box = (done) => (done ? "[x]" : "[ ]");

// ── Page IDs and groups ──

const ID_RE = /^([A-Z]+)(\d+)(?:-([a-z]{2}))?$/;

/** "D4" → { prefix: "D", n: 4 }; "D4-de" → { …, lang: "de" }; anything else → null. */
export function parseId(id) {
  const m = String(id ?? "").match(ID_RE);
  return m ? { prefix: m[1], n: Number(m[2]), lang: m[3] ?? "" } : null;
}

/** "D1–D20" (or "D1-D20", or one ID) → { prefix, from, to }, or null. */
export function parseRange(range) {
  const [a, b] = String(range)
    .split(/[–-](?=[A-Z])/)
    .map(parseId);
  if (!a || a.lang || (b && (b.lang || b.prefix !== a.prefix))) return null;
  return { prefix: a.prefix, from: a.n, to: (b ?? a).n };
}

const inRange = (id, range) => {
  const p = parseId(id);
  const r = parseRange(range);
  return !!p && !!r && !p.lang && p.prefix === r.prefix && p.n >= r.from && p.n <= r.to;
};

/** The group a page belongs to (by its ID; a language version by its English page's ID). */
export const groupOf = (id) => {
  const p = parseId(id);
  return p ? (GROUPS.find((g) => inRange(`${p.prefix}${p.n}`, g.range)) ?? null) : null;
};

const isPage = (r) => !r.translation_of && r.status !== "removed";

/**
 * Fill in missing IDs: a page gets the next free number of its category's letter, a language
 * version its English page's ID + "-{lang}". Existing IDs never change. Returns the rows it changed.
 */
export function assignIds(rows) {
  const changed = [];
  const next = {};
  for (const r of rows) {
    const p = parseId(r.id);
    if (p && !p.lang) next[p.prefix] = Math.max(next[p.prefix] ?? 0, p.n);
  }
  for (const r of rows.filter((x) => isPage(x) && !x.id)) {
    const c = categoryOf(r);
    if (!c) continue;
    const prefix = PREFIX[c.id];
    next[prefix] = (next[prefix] ?? 0) + 1;
    r.id = `${prefix}${next[prefix]}`;
    changed.push(r);
  }
  const byUrl = new Map(rows.filter(isPage).map((r) => [r.url, r]));
  for (const r of rows.filter((x) => x.translation_of && x.status !== "removed" && !x.id)) {
    const parent = byUrl.get(r.translation_of);
    if (!parent?.id) continue;
    r.id = `${parent.id}-${r.lang}`;
    changed.push(r);
  }
  return changed;
}

/** A group's pages to build; parked pages (no demand, RULES.md §2) don't count. */
function groupStats(rows, g) {
  const all = rows.filter((r) => isPage(r) && inRange(r.id, g.range));
  const pages = all.filter((r) => r.status !== "parked");
  return {
    pages,
    parked: all.filter((r) => r.status === "parked"),
    live: pages.filter((r) => r.status === "live").length,
  };
}

/**
 * A group's pages in one language. A page that doesn't fit that country (no local demand, a trade
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

/** Per group with `localize: yes` pages, one entry per language: "D1–D20 in German". */
function languageItems(rows) {
  const list = [];
  for (const g of GROUPS) {
    const yes = groupStats(rows, g).pages.filter((r) => r.localize === "yes");
    if (!yes.length) continue;
    for (const lang of LANGUAGE_ORDER) list.push({ g, lang, pages: yes });
  }
  return list;
}

const groupCategory = (g) => {
  const r = parseRange(g.range);
  return CATEGORIES.find((c) => PREFIX[c.id] === r?.prefix) ?? null;
};
const groupHeading = (g) => `${g.range}: ${g.title}`;
const langLabel = (li) => `${li.g.range} in ${LANGUAGES[li.lang].name}`;

function renderPlan(rows) {
  const live = rows.filter((r) => r.status === "live");
  const planned = rows.filter((r) => r.status === "planned");
  const inGroup = planned.filter((r) => isPage(r) && groupOf(r.id));
  const litems = languageItems(rows);
  const lStats = litems.map((li) => ({ li, ...languageStats(rows, li.pages, li.lang) }));
  const langTodo = lStats.reduce((n, s) => n + s.total - s.done, 0);
  const total = live.length + inGroup.length + langTodo;
  const out = [];
  out.push(
    "# Page plan",
    "",
    "> **Generated, don't edit by hand.** Every page has an ID: a letter per category and a number",
    "> (T5, D12, LO3); its language versions add the language (D12-de). Pages sit in groups of",
    "> 10–25 (D1–D20) per category. Boxes tick themselves when the pages are live. The rules for",
    "> every page: [RULES.md](RULES.md). The brief per English page is in [plan/](plan/) (one file per",
    "> category); the instructions per language version in [plan/languages/](plan/languages/). What",
    "> exists today: [PAGES.md](PAGES.md). Data: [pages/](pages/) (`id`, `brief`,",
    "> `avoid`), groups and tasks: `scripts/pages-items.mjs`. After any change: `npm run pages`.",
    "",
    `**${live.length.toLocaleString("en")} / ${GOAL.toLocaleString("en")} pages live** (${Math.round((live.length / GOAL) * 100)}%) · planned: ${inGroup.length} English and local pages + ${langTodo.toLocaleString("en")} language versions · **${total.toLocaleString("en")} when everything is built** (fewer after the demand gate parks the weak ones)`,
    "",
    "## How to run",
    "",
    'Say which: "do D4" (one page and its language versions), "do D4-de" (one language version),',
    '"do D1–D20" (a group), "do D1–D20 in German" or "do S1" (a task). One page at a glance:',
    "`npm run pages:page D4`. Then:",
    "",
    "1. **English pages (D4, D1–D20 …):** first the demand gate ([RULES.md §2](RULES.md#2-thin-and-duplicate-pages-what-google-punishes)):",
    "   park the pages nobody searches for. Then, for each page, read its brief (the link), its",
    "   category's section in [RULES.md §5](RULES.md#5-categories) and the fact sheet",
    "   [BRAND.md §10](../BRAND.md). Use one live page of the same type as the model. Write them all,",
    "   then: `npm run content:check` → `npm run build` → `npm run pages` → `npm run check`. Update",
    "   ROADMAP.md; one commit per request.",
    "2. **Language versions (D4-de, D1–D20 in German …):** written for that country, from the",
    "   instructions in that language's file in [plan/languages/](plan/languages/). Needs task S1 for",
    '   templates and industry pages, and the English page live first. "do D4" includes them once',
    "   both are true.",
    "3. **Task (S1 …):** code work, no pages. Tick it in `scripts/pages-items.mjs` (`done: true`).",
    "4. **After each deploy:** check indexing per page type before adding more of it ([RULES.md §2](RULES.md#2-thin-and-duplicate-pages-what-google-punishes)).",
    '5. **New pages for the plan:** "add 10 pages to T" (the `seo-add-pages` skill, [RULES.md §3](RULES.md#3-planning-new-items)).',
    "",
  );

  // Overview
  out.push(
    "## Overview",
    "",
    "| Category | Page IDs | Groups | Pages done | Pages to build | Languages done |",
    "|---|---|---|---|---|---|",
  );
  for (const c of CATEGORIES) {
    const gs = GROUPS.filter((g) => groupCategory(g) === c);
    if (!gs.length) continue;
    const pages = gs.flatMap((g) => groupStats(rows, g).pages);
    const ls = lStats.filter((s) => gs.includes(s.li.g));
    const ids = rows
      .filter((r) => isPage(r) && categoryOf(r) === c)
      .map((r) => parseId(r.id)?.n ?? 0);
    out.push(
      `| [${c.title}](#${anchor(`${c.title} ${PREFIX[c.id]}`)}) | ${PREFIX[c.id]}1–${PREFIX[c.id]}${Math.max(0, ...ids)} | ${gs.length} | ${pages.filter((r) => r.status === "live").length} | ${pages.filter((r) => r.status === "planned").length} | ${ls.length ? `${ls.reduce((n, s) => n + s.done, 0)}/${ls.reduce((n, s) => n + s.total, 0)}` : "none"} |`,
    );
  }
  out.push("");

  // Best next: by score, among the groups whose tasks are done
  const taskDone = (id) => TASKS.find((t) => t.id === id)?.done ?? false;
  const doneId = (id) => {
    const t = TASKS.find((x) => x.id === id);
    if (t) return t.done;
    const g = GROUPS.find((x) => x.range === id);
    if (!g) return false;
    const { pages, live: n } = groupStats(rows, g);
    return pages.length > 0 && n === pages.length;
  };
  const open = GROUPS.map((g, i) => {
    const todo = groupStats(rows, g).pages.filter((r) => r.status === "planned");
    const scored = todo.filter((r) => r.score);
    return {
      g,
      todo,
      scored: scored.length,
      avg: todo.length ? todo.reduce((n, r) => n + scoreOf(r), 0) / todo.length : 0,
      blocked: (g.needs ?? []).filter((id) => !taskDone(id)),
      order: ORDER.includes(g.range) ? ORDER.indexOf(g.range) : ORDER.length + i,
    };
  }).filter((x) => x.todo.length);
  const rank = (a, b) => b.avg - a.avg || a.order - b.order;
  const ready = open.filter((x) => !x.blocked.length).sort(rank);
  const waiting = open.filter((x) => x.blocked.length);
  const byTask = group(waiting, (x) => x.blocked.join(" + "));
  const scoredAll = open.reduce((n, x) => n + x.scored, 0);
  const todoAll = open.reduce((n, x) => n + x.todo.length, 0);
  out.push(
    "## Best next (by score)",
    "",
    `The groups that can be built now (no task in the way), best first: the average \`score\` of their planned pages (blank counts as ${UNSCORED}; how to score: [RULES.md §3](RULES.md#3-planning-new-items)), ties in the suggested order below. ${scoredAll} of ${todoAll} planned pages are scored.`,
    "",
    "| # | Group | Pages to build | Score | Scored |",
    "|---|---|---|---|---|",
    ...ready
      .slice(0, 15)
      .map(
        (x, i) =>
          `| ${i + 1} | [${x.g.range}](#${anchor(groupHeading(x.g))}) ${x.g.title} | ${x.todo.length} | ${x.avg.toFixed(1)} | ${x.scored}/${x.todo.length} |`,
      ),
    "",
    `${ready.length > 15 ? `And ${ready.length - 15} more ready groups. ` : ""}Waiting for a task: ${
      [...byTask]
        .map(([task, list]) => `**${task}** (${list.map((x) => x.g.range).join(", ")})`)
        .join(" · ") || "none"
    }.`,
    "",
  );

  out.push(
    "## Suggested order",
    "",
    "The groups and tasks in the order that pays off most (parents first, bigger searches first, code",
    "before the pages that need it). A group's language versions follow once its English pages are live.",
    "",
    ORDER.map((id) => (doneId(id) ? `~~${id}~~` : `**${id}**`)).join(" → "),
    "",
    "## Tasks (S): code, no pages",
    "",
    ...TASKS.map((t) => `- ${box(t.done)} **${t.id}** ${t.title}: ${t.text}`),
    "",
  );

  // Per category: its groups and their pages
  for (const c of CATEGORIES) {
    const gs = GROUPS.filter((g) => groupCategory(g) === c);
    if (!gs.length) continue;
    out.push(
      `## ${c.title} (${PREFIX[c.id]})`,
      "",
      `Rules: [RULES.md § ${rulesHeading(c)}](RULES.md#${anchor(rulesHeading(c))}) · every brief: [plan/${c.id}.md](plan/${c.id}.md)`,
      "",
    );
    for (const g of gs) {
      const { pages, parked, live: n } = groupStats(rows, g);
      const ls = lStats.filter((s) => s.li.g === g);
      out.push(
        `### ${groupHeading(g)}`,
        "",
        `- ${box(pages.length > 0 && n === pages.length)} **${g.range}** · ${n}/${pages.length} live${parked.length ? ` · ${parked.length} parked` : ""}${g.needs?.length ? ` · needs task ${g.needs.join(" + ")}` : ""}${g.text ? ` · ${g.text}` : ""}${ls.length ? ` · [languages](#${anchor(`${g.range} in every language`)}): ${ls.reduce((x, s) => x + s.done, 0)}/${ls.reduce((x, s) => x + s.total, 0)}` : ""}`,
      );
      for (const r of byScore(pages))
        out.push(
          `  - ${box(r.status === "live")} **${r.id}** [${shortUrl(r.url)}](${r.status === "live" ? `https://invoicor.com${r.url}` : pageLink(r)}) ${r.primary_keyword}${r.status === "live" ? "" : scoreLabel(r)}`,
        );
      for (const r of parked)
        out.push(`  - ~~**${r.id}** ${shortUrl(r.url)}~~ parked: ${r.notes || "no reason given"}`);
      out.push("");
    }
  }

  // Languages
  out.push(
    "## Languages",
    "",
    'Per group, its `localize: yes` pages in each language: "do D1–D20 in German", or one version:',
    '"do D4-de". The instructions per version (search words, what to write for that country, what',
    "not to) are in the language's file; each line links there.",
    "",
  );
  for (const g of [...new Set(litems.map((li) => li.g))]) {
    out.push(
      `### ${g.range} in every language`,
      "",
      `${g.title} · ${litems.find((li) => li.g === g).pages.length} pages`,
      "",
    );
    for (const s of lStats.filter((x) => x.li.g === g))
      out.push(
        `- ${box(s.total > 0 && s.done === s.total)} [**${langLabel(s.li)}**](plan/languages/${s.li.lang}.md#${anchor(langLabel(s.li))}) · ${s.done}/${s.total}`,
      );
    out.push("");
  }

  // Not in a group
  const loose = planned.filter((r) => isPage(r) && !groupOf(r.id));
  out.push(
    "## Not in a group yet",
    "",
    "Pages that need a decision or code first, and pages on hold, with the reason in their brief.",
    "",
  );
  for (const [g, list] of group(loose, (r) => r.chunk || "unsorted"))
    out.push(
      `- **${g}** (${list.length}): ${list.map((r) => `[${r.id} ${shortUrl(r.url)}](${pageLink(r)})`).join(" · ")}`,
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
    `# ${L.name} (${lang}): language versions`,
    "",
    `> **Generated, don't edit by hand.** Every page planned in ${L.name}, per group, with what each`,
    `> version must do. A version's ID is its English page's ID + \`-${lang}\` ("do D4-${lang}"; a whole`,
    `> group: "do D1–D20 in ${L.name}"). Back to the [plan](../../PLAN.md#languages). Data:`,
    "> `seo/pages/`; then `npm run pages`.",
    "",
    `## Writing for ${L.markets}`,
    "",
    `- **Money:** ${L.money} · **numbers:** ${L.numbers} · **VAT:** ${L.rate}`,
    `- **Tax words:** ${L.tax}`,
    `- **Watch out:** ${L.watch}`,
    `- **Search words** usually look like: template "${L.keys.template}", app page "${L.keys.industry}", tool "${L.keys.tool}". Research the real local words first (the demand gate): Google in ${L.name} (autocomplete, "People also ask"), Search Console for the ${lang} pages.`,
    "- **Every page:** written for the country, not word for word; slug, title, H1 and examples in",
    `  ${L.name}; links to the English page (hreflang) and to the other ${lang} pages; the same depth and`,
    "  honesty rules as the English page ([RULES.md](../../RULES.md)).",
    `- **Skip a page** that has no ${L.name} search or doesn't fit the country: a \`parked\` row in`,
    `  \`${lang}\` with \`translation_of\` = the English URL and the reason in \`notes\`.`,
    "",
  ];
  for (const li of items) {
    const s = languageStats(rows, li.pages, lang);
    const types = [...new Set(li.pages.map((r) => r.page_type))];
    out.push(
      `## ${langLabel(li)}`,
      "",
      `${box(s.total > 0 && s.done === s.total)} ${li.g.title} · ${s.done}/${s.total} live in ${lang}`,
      "",
      ...types.map((t) => `- **For every ${t} page:** ${TYPE_NOTES[t] ?? TYPE_NOTES.trust}`),
      "",
    );
    for (const r of li.pages) {
      const v = versionOf(rows, r.url, lang);
      const src = r.status === "live" ? `https://invoicor.com${r.url}` : `../${pageLink(r, false)}`;
      if (v?.status === "parked") {
        out.push(
          `- ~~**${r.id}-${lang}** ${r.url}~~ skipped in ${lang}: ${v.notes || "no reason given"}`,
          "",
        );
        continue;
      }
      out.push(
        `### ${r.id}-${lang} · ${r.url} → ${L.name}`,
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
  if (!items.length) out.push("_No language versions planned yet._", "");
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
    "> **Generated, don't edit by hand.** Rules: [RULES.md](../RULES.md); pages and briefs:",
    "> `seo/pages/`; then `npm run pages`. Back to the [plan](../PLAN.md).",
    "",
    `**${done.length} done · ${todo.length} planned**`,
    "",
    "## Direction",
    "",
    `URL, key, sections, what these pages can and can't do, links and languages: [RULES.md § ${rulesHeading(c)}](../RULES.md#${anchor(rulesHeading(c))}).`,
    "",
    `## Done (${done.length}): don't build these again`,
    "",
    done.length
      ? done
          .map(
            (r) =>
              `**${r.id}** \`${shortUrl(r.url).replace(/^\/(templates|industries|compare|tools)\//, "")}\` ${r.primary_keyword}`,
          )
          .join(" · ")
      : "_None yet._",
    "",
    `## Planned (${todo.length})`,
    "",
  ];
  if (!todo.length) out.push("_Nothing planned._", "");
  const groupName = (r) => {
    const g = groupOf(r.id);
    return g ? groupHeading(g) : `Not in a group yet: ${r.chunk || "unsorted"}`;
  };
  const byGroup = group(todo, groupName);
  const first = (list) => Math.min(...list.map((r) => parseId(r.id)?.n ?? Infinity));
  for (const [name, items] of [...byGroup].sort((a, b) => first(a[1]) - first(b[1]))) {
    out.push(`### ${name} (${items.length})`, "");
    for (const r of byScore(items)) {
      const near = closest(
        live.filter((x) => x.url !== r.url),
        r.primary_keyword,
        r.lang,
        4,
      ).filter((m) => m.score >= CLOSE);
      out.push(`#### ${pageHeading(r)}`, "");
      out.push(
        `- **Key:** ${r.primary_keyword}${r.secondary_keywords ? ` · also: ${r.secondary_keywords}` : ""}`,
        `- **Group:** ${groupOf(r.id)?.range ?? (r.chunk || "none yet")} · **Score:** ${r.score ? `${r.score}${r.score_why ? ` (${r.score_why})` : ""}` : "not scored"}${r.intent ? ` · **Intent:** ${r.intent}` : ""} · **Languages:** ${r.localize || "decide (yes / local / en-only)"}${r.lang !== "en" ? ` (written in ${r.lang})` : ""}`,
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
        (r) =>
          `- **${r.id}** \`${shortUrl(r.url)}\` ${r.primary_keyword}: ${r.notes || "no reason given"}`,
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
