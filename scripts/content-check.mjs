#!/usr/bin/env node
/**
 * SEO quality gate for content/*.json (ROADMAP chunk 11f). Run: npm run content:check
 *
 * Errors (exit 1): duplicate slugs, titles, meta descriptions or H1s; related links to missing
 * pages; pages below the minimum word count; two pages of the same type that are near-copies.
 * Warnings (printed only): title or description longer than Google shows.
 *
 * Schema validation (required fields, types) runs in lib/content.ts during `npm run build`.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const RULES = {
  titleMax: 60,
  descriptionMax: 155,
  minWords: { templates: 500, industries: 500, comparisons: 500 },
  maxSimilarity: 0.8,
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

const words = (s) => s.toLowerCase().match(/[\p{L}\p{N}']+/gu) ?? [];

/** Set of 3-word shingles, for a cheap near-duplicate check. */
function shingles(list) {
  const set = new Set();
  for (let i = 0; i + 2 < list.length; i++) set.add(`${list[i]} ${list[i + 1]} ${list[i + 2]}`);
  return set;
}

function jaccard(a, b) {
  let shared = 0;
  for (const s of a) if (b.has(s)) shared++;
  return shared / (a.size + b.size - shared || 1);
}

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

    prepared.push({ url, entry, shingles: shingles(list) });
  }

  for (const { url, entry } of prepared) {
    for (const link of entry[relatedKey] ?? []) {
      if (!slugs.has(link.slug))
        errors.push(`${url}: related link to missing ${path}/${link.slug}`);
    }
  }

  for (let i = 0; i < prepared.length; i++) {
    for (let j = i + 1; j < prepared.length; j++) {
      const sim = jaccard(prepared[i].shingles, prepared[j].shingles);
      if (sim > RULES.maxSimilarity)
        errors.push(
          `${prepared[i].url} and ${prepared[j].url} are ${Math.round(sim * 100)}% alike (max ${RULES.maxSimilarity * 100}%)`,
        );
    }
  }
}

for (const w of warnings) console.warn(`warn   ${w}`);
for (const e of errors) console.error(`error  ${e}`);
console.log(
  `\ncontent:check: ${pageCount} pages, ${errors.length} errors, ${warnings.length} warnings`,
);
process.exit(errors.length ? 1 : 0);
