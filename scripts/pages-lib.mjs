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
import { CHUNKS, GOAL, LANGUAGE_ORDER, LANGUAGES } from "./pages-chunks.mjs";

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
];

/** All plan files: seo/PLAN.md (the chunks) and seo/plan/{category}.md (the briefs). */
export function renderPlanFiles(rows) {
  const files = { "seo/PLAN.md": renderChunks(rows) };
  for (const c of CATEGORIES) files[`seo/plan/${c.id}.md`] = renderCategory(rows, c);
  return files;
}

export function renderPlanMd(rows) {
  return renderChunks(rows);
}

const categoryOf = (r) => CATEGORIES.find((c) => c.match(r));
const pageLink = (r, fromPlan = true) => {
  const c = categoryOf(r);
  return c ? `${fromPlan ? "plan/" : ""}${c.id}.md#${anchor(shortUrl(r.url))}` : "";
};

function itemStats(rows, itemId) {
  const pages = rows.filter((r) => r.item === itemId && r.status !== "removed");
  return { pages, live: pages.filter((r) => r.status === "live").length };
}

function languageStats(rows, pages, lang) {
  const yes = pages.filter((r) => r.localize === "yes");
  const urls = new Set(yes.map((r) => r.url));
  const done = rows.filter(
    (r) => r.lang === lang && r.status === "live" && urls.has(r.translation_of),
  ).length;
  return { total: yes.length, done };
}

function renderChunks(rows) {
  const live = rows.filter((r) => r.status === "live");
  const box = (done) => (done ? "[x]" : "[ ]");
  const out = [];
  // Totals per chunk
  let running = live.length;
  const summary = CHUNKS.map((ch) => {
    let english = 0;
    for (const it of ch.items.filter((i) => !i.task)) {
      const { pages } = itemStats(rows, it.id);
      english += pages.filter((r) => r.status === "planned").length;
    }
    let langPages = 0;
    let langDone = 0;
    for (const id of ch.languages ?? []) {
      const { pages } = itemStats(rows, id);
      for (const l of LANGUAGE_ORDER) {
        const s = languageStats(rows, pages, l);
        langPages += s.total - s.done;
        langDone += s.done;
      }
    }
    running += english + langPages;
    const open = ch.items.filter((it) =>
      it.task ? !it.done : itemStats(rows, it.id).pages.some((r) => r.status === "planned"),
    ).length;
    return { ch, english, langPages, langDone, total: running, open };
  });
  const next = summary.find((s) => s.ch.id !== "0" && (s.open || s.langPages));
  out.push(
    "# Page plan: the road to 4,000 pages",
    "",
    "> **Generated, don't edit by hand.** The to-do list in chunks. Each item is ~20 pages of one",
    "> category; each translated item also has one language item per language (e.g. `1B-de`). Boxes",
    "> tick themselves when the pages are live. The briefs per page are in [plan/](plan/) (one file",
    "> per category, with its direction: what its pages can and can't do, and what's already done).",
    "> What exists today: [PAGES.md](PAGES.md). Plan data: [keyword-map.csv](keyword-map.csv)",
    "> (`item`, `brief`, `avoid`); chunks: `scripts/pages-chunks.mjs`; categories:",
    "> `scripts/pages-categories.mjs`. After any change: `npm run pages`.",
    "",
    `**${live.length.toLocaleString("en")} / ${GOAL.toLocaleString("en")} pages live** (${Math.round((live.length / GOAL) * 100)}%)${next ? ` · next: **chunk ${next.ch.id}**` : ""}`,
    "",
    "## How to run an item",
    "",
    'Say which items: "do 1B", or "do 1B, 1B-de, 1B-es". Then, per item:',
    "",
    "1. **English item (e.g. 1B):** for each page listed under the item, read its brief (the link) and",
    "   its category's direction in the same file, the blueprint, and the fact sheet",
    "   [BRAND.md §10](../BRAND.md). Use one live page of the same type as the model. Write them all,",
    "   then: `npm run content:check` → `npm run build` → `npm run pages` → `npm run check`. Update",
    "   ROADMAP.md; one commit per item.",
    "2. **Language item (e.g. 1B-de):** the item's pages written for that language's country, not",
    "   translated word for word: local search words in the slug and title, local prices, currency,",
    "   number format, tax words and rules (the language table below). Needs task 1A done first.",
    "   The same checks; each version links to its English page (hreflang).",
    "3. **Task (e.g. 1A):** code work, no pages. Tick it in `scripts/pages-chunks.mjs` (`done: true`).",
    "4. **Between chunks:** wait 2–3 weeks after a deploy and check in Search Console how many of the",
    "   new pages got indexed. A page type under ~50% indexed after 4 weeks: stop and improve it first.",
    "",
    "## Rules for every page",
    "",
    ...PAGE_RULES,
    "",
    "## Rules for language items",
    "",
    "- Written for the country, by local search words (research them first), not word for word.",
    "- The slug, title, H1 and examples in that language; prices and currency of that market.",
    "- Never claim the app's screens are in that language (they're English); say \"invoices in your",
    '  language".',
    "- The e-invoicing warnings below are part of the page where they apply (first paragraph).",
    "- German first (it already gets clicks); Italian, Portuguese and Polish last (e-invoicing).",
    "",
    "| Lang | Markets | Money | Tax words | Watch out |",
    "|---|---|---|---|---|",
    ...LANGUAGE_ORDER.map((l) => {
      const x = LANGUAGES[l];
      return `| ${l} ${x.name} | ${x.markets} | ${x.money} | ${x.tax} | ${x.watch} |`;
    }),
    "",
    "## Rules for new chunks",
    "",
    "So the plan can keep growing (the goal of 4,000 can move up or down with the results):",
    "",
    "- **One item = 15–25 pages of one category**, the size one run builds well. 3–5 English items per",
    "  chunk, from different categories.",
    "- **Languages in the same chunk:** every item whose pages are `yes` gets its 10 language items in",
    "  the chunk; older pages' language versions are spread over the next chunks.",
    "- **New page ideas** must fit a category's direction ([plan/](plan/)), pass the key check, and get",
    "  a brief (`brief`) and what not to repeat (`avoid`) before they get an `item`.",
    "- **Proven types first:** a new page type (a new category) starts with one item of ≤ 10 pages and",
    "  grows only after it indexes.",
    "- **Re-plan after each chunk** with Search Console data: more of what ranks, less of what doesn't.",
    "",
    "## Chunks",
    "",
    "| Chunk | What | New English/local pages | Language pages to write | Total when done |",
    "|---|---|---|---|---|",
    ...summary.map(
      (s) =>
        `| [${s.ch.id}](#${anchor(`chunk ${s.ch.id} ${s.ch.title}`)}) | ${s.ch.title} | ${s.ch.id === "0" ? "built" : s.english} | ${s.langPages} | ${s.total.toLocaleString("en")} |`,
    ),
    "",
  );

  for (const s of summary) {
    const ch = s.ch;
    out.push(`## Chunk ${ch.id}: ${ch.title}`, "", ch.goal, "");
    for (const it of ch.items) {
      if (it.task) {
        out.push(`- ${box(it.done)} **${it.id}** (task) ${it.title}: ${it.text}`);
        continue;
      }
      const { pages, live: n } = itemStats(rows, it.id);
      const cats = [...new Set(pages.map((r) => categoryOf(r)).filter(Boolean))];
      out.push(
        `- ${box(pages.length > 0 && n === pages.length)} **${it.id}** ${it.title} · ${n}/${pages.length} live · ${cats
          .map((c) => `[${c.title}](plan/${c.id}.md)`)
          .join(", ")}`,
      );
      if (ch.id !== "0")
        for (const r of pages)
          out.push(
            `  - ${box(r.status === "live")} [${shortUrl(r.url)}](${pageLink(r)}) ${r.primary_keyword}`,
          );
    }
    if (ch.languages?.length) {
      out.push(
        "",
        `**Language items** (in this order per item: ${LANGUAGE_ORDER.join(", ")}):`,
        "",
      );
      for (const id of ch.languages) {
        const { pages } = itemStats(rows, id);
        const cells = LANGUAGE_ORDER.map((l) => {
          const st = languageStats(rows, pages, l);
          return `${box(st.total > 0 && st.done === st.total)} ${id}-${l} ${st.done}/${st.total}`;
        });
        out.push(`- **${id}:** ${cells.join(" · ")}`);
      }
    }
    out.push("");
  }

  // Not in a chunk
  const loose = rows.filter((r) => r.status === "planned" && !r.item);
  out.push(
    "## Not in a chunk yet",
    "",
    "Blog topics (you write them on learn.invoicor.com), pages that need a decision or code first,",
    "and pages on hold, with the reason in their brief.",
    "",
  );
  for (const [g, list] of group(loose, (r) => r.chunk || "unsorted")) {
    out.push(
      `- **${g}** (${list.length}): ${list.map((r) => `[${shortUrl(r.url)}](${pageLink(r)})`).join(" · ")}`,
    );
  }
  out.push("");
  return out.join("\n");
}

function renderCategory(rows, c) {
  const site = rows.filter((r) => r.status !== "removed");
  const list = site.filter(c.match);
  const done = list.filter((r) => r.status === "live");
  const todo = list.filter((r) => r.status === "planned");
  const live = rows.filter((r) => r.status === "live");
  const out = [
    `# ${c.title}`,
    "",
    "> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:",
    "> `seo/keyword-map.csv`; then `npm run pages`. Back to the [chunks](../PLAN.md).",
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
    out.push(`### ${/^\d[A-Z]$/.test(item) ? `Item ${item}` : item} (${items.length})`, "");
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
