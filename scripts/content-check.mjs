#!/usr/bin/env node
/**
 * SEO quality gate for content/*.json (ROADMAP chunk 11f). Run: npm run content:check
 *
 * Errors (exit 1): duplicate slugs, titles, meta descriptions or H1s; related links to missing
 * pages; pages below the minimum word count; two pages (of any type here) whose own text is a
 * near-copy: more than 30% of the smaller page's 5-word phrases also in the other
 * (scripts/similarity.mjs, seo/RULES.md §2). Prints the most alike pair, so the margin shows.
 * Warnings (printed only): title or description longer than Google shows.
 *
 * Schema validation (required fields, types) runs in lib/content.ts during `npm run build`.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { MAX_ALIKE_CONTENT, closestPair, nearCopies, shingles, words } from "./similarity.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const RULES = {
  titleMax: 60,
  descriptionMax: 155,
  minWords: { templates: 500, industries: 500, comparisons: 500 },
};

const COLLECTIONS = [
  { name: "templates", path: "/templates", relatedKey: "related" },
  { name: "industries", path: "/industries", relatedKey: "related" },
  { name: "comparisons", path: "/compare", relatedKey: "related_comparisons" },
];

const errors = [];
const warnings = [];

/** Every string inside an entry, except slugs and link targets. */
function allText(value, key = "") {
  if (typeof value === "string") return key === "slug" ? "" : value;
  if (Array.isArray(value)) return value.map((v) => allText(v)).join(" ");
  if (value && typeof value === "object") {
    return Object.entries(value)
      .map(([k, v]) => allText(v, k))
      .join(" ");
  }
  return "";
}

const all = [];
const seen = { title: new Map(), meta_description: new Map(), h1: new Map() };
let pageCount = 0;

for (const { name, path, relatedKey } of COLLECTIONS) {
  const entries = JSON.parse(readFileSync(join(root, "content", `${name}.json`), "utf8"));
  const slugs = new Set();
  const prepared = [];

  for (const entry of entries) {
    const url = `${path}/${entry.slug}`;
    pageCount++;

    if (slugs.has(entry.slug)) errors.push(`${url}: duplicate slug`);
    slugs.add(entry.slug);

    for (const field of Object.keys(seen)) {
      const value = (entry[field] ?? "").trim().toLowerCase();
      if (!value) continue;
      const other = seen[field].get(value);
      if (other) errors.push(`${url}: same ${field} as ${other}`);
      else seen[field].set(value, url);
    }

    const title = entry.title ?? "";
    if (title.length > RULES.titleMax)
      warnings.push(`${url}: title is ${title.length} chars (max ${RULES.titleMax})`);
    const desc = entry.meta_description ?? "";
    if (desc.length > RULES.descriptionMax)
      warnings.push(
        `${url}: meta_description is ${desc.length} chars (max ${RULES.descriptionMax})`,
      );

    const list = words(allText(entry));
    if (list.length < RULES.minWords[name])
      errors.push(`${url}: only ${list.length} words (min ${RULES.minWords[name]})`);

    prepared.push({ url, entry });
    all.push({ id: url, group: "en", shingles: shingles(list) });
  }

  for (const { url, entry } of prepared) {
    for (const link of entry[relatedKey] ?? []) {
      if (!slugs.has(link.slug))
        errors.push(`${url}: related link to missing ${path}/${link.slug}`);
    }
  }
}

for (const { a, b, score } of nearCopies(all, MAX_ALIKE_CONTENT))
  errors.push(
    `${a} and ${b} are ${Math.round(score * 100)}% alike (max ${MAX_ALIKE_CONTENT * 100}%): rewrite one, or park it and improve the other`,
  );
const closest = closestPair(all);

for (const w of warnings) console.warn(`warn   ${w}`);
for (const e of errors) console.error(`error  ${e}`);
console.log(
  `\ncontent:check: ${pageCount} pages, ${errors.length} errors, ${warnings.length} warnings` +
    (closest
      ? ` · most alike: ${closest.a} and ${closest.b}, ${Math.round(closest.score * 100)}% (max ${MAX_ALIKE_CONTENT * 100}%)`
      : ""),
);
process.exit(errors.length ? 1 : 0);
