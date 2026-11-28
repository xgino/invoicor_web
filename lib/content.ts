/**
 * Typed, validated access to the programmatic SEO content in /content.
 * The JSON is parsed with zod when the module loads, so a malformed entry fails the build
 * instead of shipping a broken page.
 */
import { z } from "zod";
import templatesJson from "@/content/templates.json";
import industriesJson from "@/content/industries.json";
import comparisonsJson from "@/content/comparisons.json";

const faq = z.object({ question: z.string().min(1), answer: z.string().min(1) });
const link = z.object({ slug: z.string().min(1), name: z.string().min(1) });
const titled = z.object({ title: z.string().min(1), text: z.string().min(1) });

/** Fields every programmatic page has. Numbered fields (req_1_title, …) are read with `text()`. */
const base = {
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug must be lowercase kebab-case"),
  title: z.string().min(1),
  meta_description: z.string().min(1),
  h1: z.string().min(1),
  subtitle: z.string().min(1),
  faqs: z.array(faq).default([]),
};

export const templateSchema = z.looseObject({
  ...base,
  niche: z.string().min(1),
  /** Slug of the matching industry page (the "invoice app for …" page), for cross-links. */
  industry: z.string().optional(),
  sample_breakdown_rows: z
    .array(
      z.object({ description: z.string(), qty: z.string(), rate: z.string(), amount: z.string() }),
    )
    .default([]),
  industry_notes: z.array(titled).default([]),
  mistakes: z.array(titled).default([]),
  related: z.array(link).default([]),
  /** Trade templates only: slugs of the invoice-type pages that fit this trade (deposit-invoice,
   * labor-and-materials-invoice …). The trade page links them; each type page lists its trades. */
  invoice_types: z.array(z.string()).default([]),
});

export const industrySchema = z.looseObject({
  ...base,
  industry: z.string().min(1),
  industry_stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  common_line_items: z
    .array(z.object({ name: z.string(), desc: z.string(), type: z.string() }))
    .default([]),
  industry_glossary: z.array(z.object({ term: z.string(), definition: z.string() })).default([]),
  related: z.array(link).default([]),
});

const comparisonSchema = z.looseObject({
  ...base,
  competitor: z.string().min(1),
  related_comparisons: z.array(link).default([]),
});

export type Faq = z.infer<typeof faq>;
export type TemplateEntry = z.infer<typeof templateSchema>;
export type IndustryEntry = z.infer<typeof industrySchema>;
export type ComparisonEntry = z.infer<typeof comparisonSchema>;

/** Last real content update per collection (used for sitemap <lastmod>). Update when content changes. */
export const CONTENT_UPDATED_AT = {
  templates: "2026-11-27",
  industries: "2026-11-26",
  comparisons: "2026-11-18",
  legal: "2026-11-18",
  privacy: "2026-11-18",
  site: "2026-11-17",
} as const;

function parseCollection<S extends z.ZodType>(name: string, schema: S, raw: unknown): z.infer<S>[] {
  const result = z.array(schema).safeParse(raw);
  if (!result.success) {
    throw new Error(`content/${name}.json is invalid:\n${z.prettifyError(result.error)}`);
  }
  const entries = result.data as Array<z.infer<S> & { slug: string }>;
  const seen = new Set<string>();
  for (const entry of entries) {
    if (seen.has(entry.slug))
      throw new Error(`content/${name}.json has a duplicate slug: ${entry.slug}`);
    seen.add(entry.slug);
  }
  return entries;
}

/** Drop "related" links that point to pages that don't exist (they would 404). */
function keepExistingLinks<T extends { slug: string; name: string }>(
  collection: string,
  from: string,
  links: T[],
  existing: Set<string>,
): T[] {
  return links.filter((l) => {
    if (existing.has(l.slug)) return true;
    console.warn(
      `[content] ${collection}/${from}: skipped related link to missing page "${l.slug}"`,
    );
    return false;
  });
}

const rawIndustries = parseCollection("industries", industrySchema, industriesJson);
const industrySlugs = new Set(rawIndustries.map((i) => i.slug));

const rawTemplates = parseCollection("templates", templateSchema, templatesJson);
const templateSlugs = new Set(rawTemplates.map((t) => t.slug));
const templates: TemplateEntry[] = rawTemplates.map((t) => {
  if (t.industry && !industrySlugs.has(t.industry))
    throw new Error(`content/templates.json ${t.slug}: industry "${t.industry}" doesn't exist`);
  for (const slug of t.invoice_types) {
    const target = rawTemplates.find((x) => x.slug === slug);
    if (!target || target.industry)
      throw new Error(
        `content/templates.json ${t.slug}: invoice type "${slug}" isn't an invoice-type page`,
      );
  }
  return { ...t, related: keepExistingLinks("templates", t.slug, t.related, templateSlugs) };
});
const industries: IndustryEntry[] = rawIndustries.map((i) => ({
  ...i,
  related: keepExistingLinks("industries", i.slug, i.related, industrySlugs),
}));

const rawComparisons = parseCollection("comparisons", comparisonSchema, comparisonsJson);
const comparisonSlugs = new Set(rawComparisons.map((c) => c.slug));
const comparisons: ComparisonEntry[] = rawComparisons.map((c) => ({
  ...c,
  related_comparisons: keepExistingLinks(
    "comparisons",
    c.slug,
    c.related_comparisons,
    comparisonSlugs,
  ),
}));

export const getTemplates = () => templates;
/** The trade templates that link this invoice-type page (its "by trade" list). */
export const getTradesForInvoiceType = (slug: string) =>
  templates.filter((t) => t.invoice_types.includes(slug));
export const getTemplate = (slug: string) => templates.find((t) => t.slug === slug);
/** Template pages that belong to an industry page (e.g. plumbing + hvac → plumbers-hvac). */
export const getTemplatesForIndustry = (slug: string) =>
  templates.filter((t) => t.industry === slug);
export const getIndustries = () => industries;
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const getComparisons = () => comparisons;
export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);

/** Read an optional, non-empty string field (e.g. `text(d, "req_1_title")`). */
/** "2026-11-18" → "November 18, 2026" (the visible "Updated" line on content pages). */
/** "2026-11-18" → "November 18, 2026" (or the date in another language: `intl` "de-DE"). */
export function formatUpdated(iso: string, intl = "en-US"): string {
  const [y, m, d] = iso.split("-").map(Number) as [number, number, number];
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString(intl, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function text(entry: Record<string, unknown>, key: string): string | undefined {
  const value = entry[key];
  return typeof value === "string" && value.trim() !== "" ? value : undefined;
}

/** Read an optional boolean field (e.g. `flag(d, "feature_compare_1_us")`). */
export function flag(entry: Record<string, unknown>, key: string): boolean {
  return entry[key] === true;
}
