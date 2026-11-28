/**
 * The page log on disk: one CSV per category in seo/pages/ (T-templates.csv, D-types.csv …).
 * Each file holds the category's pages and, right below each page, its language versions
 * (D4, D4-de, D4-es …), sorted by ID. Every script and test reads and writes the log through
 * these two functions, so the rest of the code sees one list of rows.
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { CATEGORIES } from "./pages-categories.mjs";
import { LANGUAGE_ORDER, PREFIX } from "./pages-items.mjs";
import { parseCsv, parseId, toCsv } from "./pages-lib.mjs";

export const PAGES_DIR = "seo/pages";

/** seo/pages/{letter}-{category}.csv, e.g. seo/pages/D-types.csv. */
export const fileOf = (c) => `${PAGES_DIR}/${PREFIX[c.id]}-${c.id}.csv`;

/** Every row of every category file, in category order. */
export function loadRows(root) {
  const dir = join(root, PAGES_DIR);
  const known = new Set(CATEGORIES.map((c) => fileOf(c).split("/").pop()));
  const extra = readdirSync(dir).filter((f) => f.endsWith(".csv") && !known.has(f));
  if (extra.length) throw new Error(`${PAGES_DIR}: unknown file(s) ${extra.join(", ")}`);
  return CATEGORIES.flatMap((c) => {
    const file = join(root, fileOf(c));
    return existsSync(file) ? parseCsv(readFileSync(file, "utf8")) : [];
  });
}

/** The category a row is filed under: its own, or (a language version) its page's. */
export function categoryFor(row, byUrl) {
  const page = row.translation_of ? byUrl.get(row.translation_of) : row;
  return page ? CATEGORIES.find((c) => c.match(page)) : undefined;
}

const LANG_RANK = Object.fromEntries(["", ...LANGUAGE_ORDER].map((l, i) => [l, i]));

/** Sort key: the page's number, then the page before its versions (in language order). */
function sortKey(row) {
  const p = parseId(row.id);
  return p ? [p.n, LANG_RANK[p.lang] ?? 99] : [Infinity, 0];
}

/** Write every row to its category's file, sorted by ID. Throws for a row with no category. */
export function saveRows(root, rows) {
  const byUrl = new Map(rows.filter((r) => !r.translation_of).map((r) => [r.url, r]));
  const files = new Map(CATEGORIES.map((c) => [c, []]));
  const homeless = [];
  for (const r of rows) {
    const c = categoryFor(r, byUrl);
    if (c) files.get(c).push(r);
    else homeless.push(r.url);
  }
  if (homeless.length)
    throw new Error(`No category for: ${homeless.join(", ")} (see scripts/pages-categories.mjs)`);
  for (const [c, list] of files) {
    list.sort((a, b) => {
      const [an, al] = sortKey(a);
      const [bn, bl] = sortKey(b);
      return an - bn || al - bl;
    });
    writeFileSync(join(root, fileOf(c)), toCsv(list));
  }
}
