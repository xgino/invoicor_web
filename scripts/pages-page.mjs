#!/usr/bin/env node
/**
 * One page at a glance, with all its language versions: the English (or local) page's row, its
 * group, its brief, and per language what exists (live, planned, parked) and what's still to write.
 *
 *   node scripts/pages-page.mjs D4          # npm run -s pages:page -- D4
 *   node scripts/pages-page.mjs D4-de       # the German version (and its English page)
 *   node scripts/pages-page.mjs /templates/hourly-invoice
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { groupOf, parseCsv, parseId } from "./pages-lib.mjs";
import { LANGUAGES, LANGUAGE_ORDER, TASKS } from "./pages-items.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const rows = parseCsv(readFileSync(join(root, "seo/keyword-map.csv"), "utf8")).filter(
  (r) => r.status !== "removed",
);
const arg = process.argv[2];
if (!arg) {
  console.error("Usage: npm run -s pages:page -- D4   (or D4-de, or a URL)");
  process.exit(1);
}

const p = parseId(arg.toUpperCase().replace(/-([A-Z]{2})$/, (_, l) => `-${l.toLowerCase()}`));
const page = arg.startsWith("/")
  ? rows.find((r) => r.url === arg && !r.translation_of)
  : rows.find((r) => r.id === (p ? `${p.prefix}${p.n}` : ""));
if (!page) {
  console.error(`No page "${arg}". IDs look like D4 or D4-de; see npm run -s pages:category`);
  process.exit(1);
}

const g = groupOf(page.id);
const blocked = (g?.needs ?? []).filter((id) => !TASKS.find((t) => t.id === id)?.done);
console.log(`# ${page.id} · ${page.url}  (${page.status}${page.added ? `, ${page.added}` : ""})`);
console.log(
  `key: ${page.primary_keyword}${page.secondary_keywords ? ` · also: ${page.secondary_keywords}` : ""}`,
);
console.log(
  `type: ${page.page_type} · lang: ${page.lang} · localize: ${page.localize || "?"} · score: ${page.score || "-"}${page.score_why ? ` (${page.score_why})` : ""}`,
);
console.log(
  `group: ${g ? `${g.range} ${g.title}` : "none yet"}${blocked.length ? ` · waits for task ${blocked.join(" + ")}` : ""}`,
);
if (page.brief) console.log(`\nbrief: ${page.brief}`);
if (page.avoid) console.log(`avoid: ${page.avoid}`);
if (page.notes) console.log(`notes: ${page.notes}`);

const versions = rows.filter((r) => r.translation_of === page.url);
console.log("\nLanguage versions:");
if (page.status === "parked") {
  console.log("  none: the English page is parked (see notes)");
} else if (page.localize !== "yes") {
  console.log(`  none planned (localize: ${page.localize || "undecided"})`);
  for (const v of versions) console.log(`  ${v.id}  ${v.status}  ${v.url}`);
} else {
  for (const lang of LANGUAGE_ORDER) {
    const v = versions.find((r) => r.lang === lang);
    const state = v ? v.status : page.status === "live" ? "to write" : "after the English page";
    const extra = v?.status === "parked" ? `: ${v.notes}` : v ? `  ${v.url}` : "";
    console.log(
      `  ${`${page.id}-${lang}`.padEnd(9)} ${LANGUAGES[lang].name.padEnd(20)} ${state}${extra}`,
    );
  }
}
if (p?.lang) console.log(`\n(You asked for ${page.id}-${p.lang}: its row is listed above.)`);
