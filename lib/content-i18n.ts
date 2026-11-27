/**
 * The template and industry pages in the other languages (task S1): content/{locale}/templates.json
 * and industries.json. Each entry is written for that country (seo/RULES.md §4), not translated
 * word for word, and names the English page it's a version of (`translation_of`, the English
 * slug). Validated when the module loads, like lib/content.ts, so a broken entry fails the build.
 *
 * A language's hub and pages only exist when it has at least one entry: no empty hubs.
 */
import { z } from "zod";
import daIndustries from "@/content/da/industries.json";
import daTemplates from "@/content/da/templates.json";
import deIndustries from "@/content/de/industries.json";
import deTemplates from "@/content/de/templates.json";
import esIndustries from "@/content/es/industries.json";
import esTemplates from "@/content/es/templates.json";
import frIndustries from "@/content/fr/industries.json";
import frTemplates from "@/content/fr/templates.json";
import itIndustries from "@/content/it/industries.json";
import itTemplates from "@/content/it/templates.json";
import nbIndustries from "@/content/nb/industries.json";
import nbTemplates from "@/content/nb/templates.json";
import nlIndustries from "@/content/nl/industries.json";
import nlTemplates from "@/content/nl/templates.json";
import plIndustries from "@/content/pl/industries.json";
import plTemplates from "@/content/pl/templates.json";
import ptIndustries from "@/content/pt/industries.json";
import ptTemplates from "@/content/pt/templates.json";
import svIndustries from "@/content/sv/industries.json";
import svTemplates from "@/content/sv/templates.json";
import { getIndustry, getTemplate, industrySchema, templateSchema } from "@/lib/content";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/config";
import { CONTENT_BASES } from "@/lib/i18n/routes";

type Prefixed = Exclude<Locale, "en">;

/**
 * A template page in another language. Headings that contain the trade's or type's name are
 * written in the entry itself, because the grammar changes per language ("Was auf eine
 * Anzahlungsrechnung gehört"): English builds them from `niche`.
 */
export const localTemplateSchema = templateSchema.extend({
  /** The English page this is a version of (its slug in content/templates.json). */
  translation_of: z.string().min(1),
  /** "What to include on a deposit invoice", in the language. */
  include_title: z.string().min(1),
  /** The label on the sample invoice ("Deposit invoice · sample"). */
  paper_label: z.string().min(1),
  /** The FAQ heading ("Deposit invoicing FAQ"). */
  faq_title: z.string().min(1),
  /** The closing call to action ("Make your deposit invoice"). */
  cta_title: z.string().min(1),
  /** The pro tip heading ("A tip for deposit invoices"); needed when the entry has a pro_tip. */
  tip_title: z.string().optional(),
  /** The heading over the invoice-type links (a trade page) or the trade links (a type page). */
  links_title: z.string().optional(),
});

/** An industry page in another language; the headings with the profession in them, as above. */
export const localIndustrySchema = industrySchema.extend({
  translation_of: z.string().min(1),
  features_title: z.string().min(1),
  line_items_title: z.string().min(1),
  faq_title: z.string().min(1),
  cta_title: z.string().min(1),
  /** The label on the stats card ("Plumbers at a glance"). */
  stats_label: z.string().optional(),
});

export type LocalTemplate = z.infer<typeof localTemplateSchema>;
export type LocalIndustry = z.infer<typeof localIndustrySchema>;

const RAW: Record<Prefixed, { templates: unknown; industries: unknown }> = {
  nl: { templates: nlTemplates, industries: nlIndustries },
  de: { templates: deTemplates, industries: deIndustries },
  fr: { templates: frTemplates, industries: frIndustries },
  es: { templates: esTemplates, industries: esIndustries },
  it: { templates: itTemplates, industries: itIndustries },
  pt: { templates: ptTemplates, industries: ptIndustries },
  pl: { templates: plTemplates, industries: plIndustries },
  sv: { templates: svTemplates, industries: svIndustries },
  da: { templates: daTemplates, industries: daIndustries },
  nb: { templates: nbTemplates, industries: nbIndustries },
};

function parse<S extends z.ZodType>(file: string, schema: S, raw: unknown): z.infer<S>[] {
  const result = z.array(schema).safeParse(raw);
  if (!result.success) throw new Error(`${file} is invalid:\n${z.prettifyError(result.error)}`);
  return result.data as z.infer<S>[];
}

/** Slugs unique, one version per English page, and the English page must exist. */
function checkEntries(
  file: string,
  entries: Array<{ slug: string; translation_of: string }>,
  englishExists: (slug: string) => boolean,
) {
  const slugs = new Set<string>();
  const sources = new Set<string>();
  for (const e of entries) {
    if (slugs.has(e.slug)) throw new Error(`${file}: duplicate slug ${e.slug}`);
    if (sources.has(e.translation_of))
      throw new Error(`${file}: two versions of /${e.translation_of}`);
    if (!englishExists(e.translation_of))
      throw new Error(
        `${file} ${e.slug}: translation_of "${e.translation_of}" isn't an English page`,
      );
    slugs.add(e.slug);
    sources.add(e.translation_of);
  }
}

const DATA = Object.fromEntries(
  (Object.keys(RAW) as Prefixed[]).map((locale) => {
    const tFile = `content/${locale}/templates.json`;
    const iFile = `content/${locale}/industries.json`;
    const industries = parse(iFile, localIndustrySchema, RAW[locale].industries);
    checkEntries(iFile, industries, (s) => !!getIndustry(s));
    const industrySlugs = new Set(industries.map((i) => i.slug));
    const templates = parse(tFile, localTemplateSchema, RAW[locale].templates);
    checkEntries(tFile, templates, (s) => !!getTemplate(s));
    const templateSlugs = new Set(templates.map((t) => t.slug));
    for (const t of templates) {
      if (t.industry && !industrySlugs.has(t.industry))
        throw new Error(`${tFile} ${t.slug}: industry "${t.industry}" isn't in ${iFile}`);
      for (const slug of t.invoice_types) {
        const target = templates.find((x) => x.slug === slug);
        if (!target || target.industry)
          throw new Error(`${tFile} ${t.slug}: invoice type "${slug}" isn't an invoice-type page`);
      }
      if (t.pro_tip && !t.tip_title)
        throw new Error(`${tFile} ${t.slug}: pro_tip without tip_title`);
    }
    // Links to pages that don't exist in this language yet are left out, like in English.
    return [
      locale,
      {
        templates: templates.map((t) => ({
          ...t,
          related: t.related.filter((r) => templateSlugs.has(r.slug)),
        })),
        industries: industries.map((i) => ({
          ...i,
          related: i.related.filter((r) => industrySlugs.has(r.slug)),
        })),
      },
    ];
  }),
) as Record<Prefixed, { templates: LocalTemplate[]; industries: LocalIndustry[] }>;

const isPrefixed = (l: Locale): l is Prefixed => l !== DEFAULT_LOCALE;

export const getLocalTemplates = (l: Locale): LocalTemplate[] =>
  isPrefixed(l) ? DATA[l].templates : [];
export const getLocalIndustries = (l: Locale): LocalIndustry[] =>
  isPrefixed(l) ? DATA[l].industries : [];
export const getLocalTemplate = (l: Locale, slug: string) =>
  getLocalTemplates(l).find((t) => t.slug === slug);
export const getLocalIndustry = (l: Locale, slug: string) =>
  getLocalIndustries(l).find((i) => i.slug === slug);

/** URL of a template or industry page in a language: /templates/plumbing, /de/vorlagen/… */
export const contentPath = (kind: "templates" | "industries", l: Locale, slug: string) =>
  `${CONTENT_BASES[kind][l]}/${slug}`;

/** A language's hub, only when that language has pages of that kind. */
export function hubPath(kind: "templates" | "industries", l: Locale): string | undefined {
  if (l === DEFAULT_LOCALE) return CONTENT_BASES[kind].en;
  const list = kind === "templates" ? getLocalTemplates(l) : getLocalIndustries(l);
  return list.length ? CONTENT_BASES[kind][l] : undefined;
}

/** The hub in every language it exists in (hreflang). */
export function hubVersions(kind: "templates" | "industries"): Partial<Record<Locale, string>> {
  return Object.fromEntries(
    LOCALES.flatMap((l) => {
      const p = hubPath(kind, l);
      return p ? [[l, p]] : [];
    }),
  );
}

/** An English page's URL in every language it exists in (for hreflang, the sitemap, the switcher). */
export function contentVersions(
  kind: "templates" | "industries",
  englishSlug: string,
): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {
    en: contentPath(kind, DEFAULT_LOCALE, englishSlug),
  };
  for (const l of LOCALES.filter(isPrefixed)) {
    const list = kind === "templates" ? getLocalTemplates(l) : getLocalIndustries(l);
    const v = list.find((e) => e.translation_of === englishSlug);
    if (v) out[l] = contentPath(kind, l, v.slug);
  }
  return out;
}

/** The trade pages in a language that link this invoice-type page (its "by trade" list). */
export const getLocalTradesForInvoiceType = (l: Locale, slug: string) =>
  getLocalTemplates(l).filter((t) => t.invoice_types.includes(slug));
/** The template pages in a language that belong to an industry page. */
export const getLocalTemplatesForIndustry = (l: Locale, slug: string) =>
  getLocalTemplates(l).filter((t) => t.industry === slug);
