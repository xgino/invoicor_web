#!/usr/bin/env node
/**
 * One category at a glance, for planning new pages without reading PLAN.md:
 * its rules (its section of seo/RULES.md §5) and every row (live, planned, parked),
 * one line each, live first.
 *
 *   node scripts/pages-category.mjs            # list the categories with their counts
 *   node scripts/pages-category.mjs D          # by item letter …
 *   node scripts/pages-category.mjs types      # … or by category id
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { groupOf, parseCsv, parseId, rulesSection, scoreOf } from "./pages-lib.mjs";
import { CATEGORIES } from "./pages-categories.mjs";
import { PREFIX } from "./pages-items.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const rows = parseCsv(readFileSync(join(root, "seo/keyword-map.csv"), "utf8"));
const count = (list) => {
  const n = { live: 0, planned: 0, parked: 0 };
  for (const r of list) if (r.status in n) n[r.status]++;
  return n;
};

const arg = process.argv[2];
if (!arg) {
  for (const c of CATEGORIES) {
    const n = count(rows.filter(c.match));
    console.log(
      `${(PREFIX[c.id] ?? "").padEnd(3)} ${c.id.padEnd(11)} live ${n.live}, planned ${n.planned}, parked ${n.parked}`,
    );
  }
  process.exit(0);
}

const cat = CATEGORIES.find((c) => c.id === arg || PREFIX[c.id] === arg.toUpperCase());
if (!cat) {
  console.error(`No category "${arg}". Run without an argument to list them.`);
  process.exit(1);
}
const list = rows.filter(cat.match);
const n = count(list);
const groups = [...new Set(list.map((r) => groupOf(r.id)?.range).filter(Boolean))];
console.log(`# ${PREFIX[cat.id]} · ${cat.title} (${cat.id})`);
console.log(
  `live ${n.live}, planned ${n.planned}, parked ${n.parked} · groups: ${groups.join(", ") || "none"}`,
);
console.log(
  `\nRules (seo/RULES.md §5):\n${rulesSection(readFileSync(join(root, "seo/RULES.md"), "utf8"), cat) ?? "MISSING: add this category's section to seo/RULES.md"}`,
);
console.log("\nPages (id | status | localize | score | url | key), by ID:");
const order = { live: 0, planned: 1, parked: 2, removed: 3 };
for (const r of [...list].sort(
  (a, b) =>
    (parseId(a.id)?.n ?? 0) - (parseId(b.id)?.n ?? 0) ||
    (order[a.status] ?? 9) - (order[b.status] ?? 9) ||
    scoreOf(b) - scoreOf(a),
))
  console.log(
    [r.id || "-", r.status, r.localize || "-", r.score || "-", r.url, r.primary_keyword].join(
      " | ",
    ),
  );
