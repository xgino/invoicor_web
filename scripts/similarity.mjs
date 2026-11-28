/**
 * Near-duplicate detection, shared by `npm run content:check` (the text we write, content/*.json)
 * and tests/site/similarity.test.ts (every built page, every type and language). Rules:
 * seo/RULES.md §2.
 *
 * A page is split into overlapping 5-word phrases ("shingles"). Two pages are compared by
 * containment: the share of the smaller page's phrases that also appear in the other one. A page
 * copied into a longer one, or a page spun from another by swapping the trade's nouns, scores
 * high (a spun copy ~93%, half the sentences copied ~55%); two honestly different pages of the
 * same type score under ~10% on their own text and ~20–25% once built (the page type's shared
 * headings and calls to action).
 */

/** Pages whose own text (content/*.json) shares more than this are near-copies. */
export const MAX_ALIKE_CONTENT = 0.3;
/** Built pages (own text + the page type's shared parts) sharing more than this are near-copies. */
export const MAX_ALIKE_BUILT = 0.4;
export const SHINGLE = 5;

export const words = (s) => s.toLowerCase().match(/[\p{L}\p{N}']+/gu) ?? [];

/** The set of overlapping n-word phrases of a word list. */
export function shingles(list, n = SHINGLE) {
  const set = new Set();
  for (let i = 0; i + n <= list.length; i++) set.add(list.slice(i, i + n).join(" "));
  return set;
}

/** Share of the smaller set that's also in the other one (0–1). */
export function containment(a, b) {
  const [small, big] = a.size <= b.size ? [a, b] : [b, a];
  if (!small.size) return 0;
  let shared = 0;
  for (const s of small) if (big.has(s)) shared++;
  return shared / small.size;
}

/** The visible text of a built page's <main>, without scripts and styles. */
export function mainText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  return main
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ");
}

/** A hub and its own pages share their card texts by design: /tools and /tools/vat-calculator. */
export const isHubAndChild = (a, b) => b.startsWith(`${a}/`) || a.startsWith(`${b}/`);

/**
 * Every pair above `max`, most alike first. `pages`: { id, group, shingles }; only pages of the
 * same group (a language) are compared, and never a hub with its own pages.
 */
export function nearCopies(pages, max) {
  const out = [];
  for (let i = 0; i < pages.length; i++)
    for (let j = i + 1; j < pages.length; j++) {
      const a = pages[i];
      const b = pages[j];
      if (a.group !== b.group || isHubAndChild(a.id, b.id)) continue;
      const score = containment(a.shingles, b.shingles);
      if (score > max) out.push({ a: a.id, b: b.id, score });
    }
  return out.sort((x, y) => y.score - x.score);
}

/** The most alike pair (for the report), or null. */
export function closestPair(pages) {
  return nearCopies(pages, -1)[0] ?? null;
}
