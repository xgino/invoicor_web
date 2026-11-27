#!/usr/bin/env node
/**
 * The language gaps of the live pages, as a to-do list of version IDs (the full map:
 * seo/LANGUAGES.md).
 *
 *   node scripts/pages-gaps.mjs            # totals per language and per category
 *   node scripts/pages-gaps.mjs de         # every missing German version
 *   node scripts/pages-gaps.mjs de D       # only the invoice types (D)
 */
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { CATEGORIES } from "./pages-categories.mjs";
import { loadRows } from "./pages-data.mjs";
import { LANGUAGES, LANGUAGE_ORDER, PREFIX } from "./pages-items.mjs";
import { languageGapsByPage, parseId } from "./pages-lib.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const all = languageGapsByPage(loadRows(root));
const [lang, letter] = process.argv.slice(2);
const prefixOf = (r) => parseId(r.id)?.prefix ?? "";

if (!lang) {
  const total = all.reduce((n, x) => n + x.gaps.length, 0);
  console.log(`${total} language versions missing for live pages (map: seo/LANGUAGES.md)\n`);
  for (const l of LANGUAGE_ORDER) {
    const list = all.filter((x) => x.gaps.includes(l));
    const now = list.filter((x) => !x.needs).length;
    console.log(
      `${l}  ${LANGUAGES[l].name.padEnd(20)} ${String(list.length).padStart(4)} missing · ${now} can be written now`,
    );
  }
  console.log("");
  for (const c of CATEGORIES) {
    const list = all.filter((x) => prefixOf(x.page) === PREFIX[c.id]);
    const n = list.reduce((s, x) => s + x.gaps.length, 0);
    if (n)
      console.log(
        `${PREFIX[c.id].padEnd(3)} ${c.title.padEnd(44)} ${String(n).padStart(4)} missing${list.some((x) => x.needs) ? ` (needs ${[...new Set(list.map((x) => x.needs).filter(Boolean))].join(", ")})` : ""}`,
      );
  }
  console.log("\nOne language: npm run -s pages:gaps -- de   (and a letter: -- de D)");
  process.exit(0);
}

if (!LANGUAGES[lang]) {
  console.error(`Unknown language "${lang}". One of: ${LANGUAGE_ORDER.join(", ")}`);
  process.exit(1);
}
const list = all
  .filter((x) => x.gaps.includes(lang) && (!letter || prefixOf(x.page) === letter.toUpperCase()))
  .sort(
    (a, b) =>
      prefixOf(a.page).localeCompare(prefixOf(b.page)) ||
      parseId(a.page.id).n - parseId(b.page.id).n,
  );
console.log(
  `${list.length} missing in ${LANGUAGES[lang].name}${letter ? ` (${letter.toUpperCase()})` : ""}:\n`,
);
for (const x of list)
  console.log(
    `${`${x.page.id}-${lang}`.padEnd(10)} ${x.page.url}${x.state[lang] === "planned" ? "  (row planned)" : ""}${x.needs ? `  · needs ${x.needs}` : ""}`,
  );
