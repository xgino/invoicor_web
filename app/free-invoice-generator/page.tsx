import type { Metadata } from "next";
import { Generator } from "@/components/generator/Generator";
import { Container } from "@/components/ui/layout";
import { Breadcrumbs } from "@/components/ui/content";
import { getApiCurrencies, getApiLanguages, getApiTemplates } from "@/lib/api";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Invoice Generator: Create & Download a PDF | Invoicor",
  description:
    "Create a professional invoice online for free: pick a template, add your items and download a PDF. No signup. 38 currencies, 11 languages.",
  path: "/free-invoice-generator",
});

/** Fallbacks if the API can't be reached at build time (the tool still works with these). */
const FALLBACK_CURRENCIES = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
];
const FALLBACK_LANGUAGES = [{ code: "en", name: "English" }];

/** Free invoice generator (ROADMAP Stage G, chunks 32–35). */
export default async function FreeInvoiceGeneratorPage() {
  const [templates, currencies, languages] = await Promise.all([
    getApiTemplates(),
    getApiCurrencies(),
    getApiLanguages(),
  ]);

  return (
    <>
      <section className="bg-surface relative isolate">
        <div aria-hidden className="bg-brand-glow absolute inset-x-0 top-0 -z-10 h-[28rem]" />
        <Container className="pt-nav pb-section">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Free invoice generator" }]}
            className="pt-8"
          />
          <div className="mt-8 mb-10 max-w-3xl">
            <p className="text-eyebrow text-brand-700 mb-3 uppercase">Free · no signup</p>
            <h1 className="font-heading text-h1 text-ink">Free Invoice Generator</h1>
            <p className="text-lead text-muted mt-4">
              Fill in your details, pick a template and download a professional PDF invoice. Free,
              no account needed, in 38 currencies and 11 languages.
            </p>
          </div>
          <Generator
            templates={templates.map(({ slug, name, tier }) => ({ slug, name, tier }))}
            currencies={currencies.length > 0 ? currencies : FALLBACK_CURRENCIES}
            languages={languages.length > 0 ? languages : FALLBACK_LANGUAGES}
          />
        </Container>
      </section>
    </>
  );
}
