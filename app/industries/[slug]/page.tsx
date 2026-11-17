import { BookOpen, CirclePlay, CircleX, Lightbulb, Receipt, Scale } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AppStoreButton,
  Breadcrumbs,
  ClosingCta,
  FaqSection,
  RelatedLinks,
} from "@/components/content/blocks";
import { Toc } from "@/components/content/Toc";
import { JsonLd } from "@/components/seo/JsonLd";
import { getIndustries, getIndustry, text } from "@/lib/content";
import { breadcrumbLd, definedTermSetLd, faqLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getIndustries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getIndustry(slug);
  if (!d) return {};
  return buildMetadata({
    title: d.title,
    description: d.meta_description,
    path: `/industries/${d.slug}`,
  });
}

const THREE = [1, 2, 3];

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const d = getIndustry(slug);
  if (!d) notFound();

  const industry = d.industry;
  const industryLower = industry.toLowerCase();
  const mistakes = THREE.flatMap((n) => {
    const title = text(d, `industry_mistake_${n}_title`);
    return title ? [{ n, title, text: text(d, `industry_mistake_${n}_text`) }] : [];
  });
  const features = THREE.flatMap((n) => {
    const title = text(d, `feature_${n}_title`);
    return title ? [{ n, title, text: text(d, `feature_${n}_text`) }] : [];
  });
  const scenario = text(d, "real_scenario_text");
  const tip = text(d, "expert_tip_text");
  const tax = text(d, "tax_or_compliance_text");
  const glossaryTitle = text(d, "industry_glossary_title") ?? `${industry} billing terms`;

  const tocSections = [
    { id: "stats", label: "Industry snapshot", show: d.industry_stats.length > 0 },
    { id: "mistakes", label: "Billing mistakes", show: mistakes.length > 0 },
    { id: "features", label: "Key features", show: features.length > 0 },
    { id: "scenario", label: "Real scenario", show: !!scenario },
    { id: "tip", label: "Pro tip", show: !!tip },
    { id: "line-items", label: "Common line items", show: d.common_line_items.length > 0 },
    { id: "glossary", label: "Glossary", show: d.industry_glossary.length > 0 },
    { id: "tax", label: "Tax & compliance", show: !!tax },
    { id: "faqs", label: "FAQs", show: d.faqs.length > 0 },
  ]
    .filter((s) => s.show)
    .map(({ id, label }) => ({ id, label }));

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry },
          ]),
          faqLd(d.faqs),
          definedTermSetLd(glossaryTitle, d.industry_glossary),
        ]}
      />
      <Toc sections={tocSections} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: industry },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <span className="mb-6 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase">
          {text(d, "badge_text") ?? "Industry Invoicing"}
        </span>
        <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-6xl">
          {d.h1}
        </h1>
        <p className="mb-10 text-lg leading-relaxed font-medium text-slate-500 md:text-xl">
          {d.subtitle}
        </p>
        <AppStoreButton campaign={`industry-${d.slug}`}>Start Free Trial</AppStoreButton>
      </section>

      {d.industry_stats.length > 0 && (
        <section id="stats" className="scroll-mt-24 border-y border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <dl className="grid gap-6 md:grid-cols-3">
              {d.industry_stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col-reverse rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center"
                >
                  <dd className="text-2xl font-extrabold text-slate-900 md:text-3xl">{s.value}</dd>
                  <dt className="mb-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {mistakes.length > 0 && (
        <section id="mistakes" className="scroll-mt-24 border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-3xl font-extrabold">
              {text(d, "industry_mistakes_title") ?? `Billing mistakes that cost ${industry} money`}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {mistakes.map((m) => (
                <div key={m.n} className="rounded-3xl border border-rose-100 bg-rose-50/50 p-8">
                  <CircleX className="mb-6 h-10 w-10 text-rose-500" aria-hidden />
                  <h3 className="mb-3 text-xl font-bold">{m.title}</h3>
                  {m.text && <p className="text-[15px] leading-relaxed text-slate-600">{m.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {features.length > 0 && (
        <section id="features" className="scroll-mt-24 bg-slate-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-slate-900">
                Built for how {industryLower} actually bill
              </h2>
              <p className="text-lg font-medium text-slate-500">
                Every feature is designed around the realities of your day.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.n}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div
                    aria-hidden
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-black text-blue-600"
                  >
                    {f.n}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{f.title}</h3>
                  {f.text && <p className="text-[15px] leading-relaxed text-slate-600">{f.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {scenario && (
        <section id="scenario" className="scroll-mt-24 border-y border-slate-200 bg-white py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-6 flex items-center gap-3 text-blue-600">
              <CirclePlay className="h-6 w-6" aria-hidden />
              <span className="text-xs font-bold tracking-wider uppercase">Walkthrough</span>
            </div>
            <h2 className="mb-6 text-3xl font-extrabold text-slate-900">
              {text(d, "real_scenario_title") ?? "A real billing scenario"}
            </h2>
            <div className="rounded-r-2xl border-l-4 border-blue-600 bg-slate-50 p-8">
              <p className="text-[17px] leading-relaxed text-slate-700">{scenario}</p>
            </div>
          </div>
        </section>
      )}

      {tip && (
        <section id="tip" className="scroll-mt-24 border-b border-amber-100 bg-amber-50/50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border border-amber-200 bg-white p-10 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Lightbulb className="h-7 w-7" aria-hidden />
                </div>
                <div>
                  <div className="mb-2 text-xs font-bold tracking-wider text-amber-700 uppercase">
                    Pro Tip
                  </div>
                  {text(d, "expert_tip_title") && (
                    <h2 className="mb-3 text-2xl font-bold text-slate-900">
                      {text(d, "expert_tip_title")}
                    </h2>
                  )}
                  <p className="text-[16px] leading-relaxed text-slate-700">{tip}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {d.common_line_items.length > 0 && (
        <section
          id="line-items"
          className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-6 flex items-center gap-3 text-slate-500">
              <Receipt className="h-6 w-6" aria-hidden />
              <span className="text-xs font-bold tracking-wider uppercase">Reference</span>
            </div>
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900">
              Common {industryLower} line items
            </h2>
            <p className="mb-10 font-medium text-slate-500">
              Save these as reusable items in your Invoicor library for one-tap invoicing.
            </p>
            <ul className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {d.common_line_items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start justify-between gap-6 p-6 transition-colors hover:bg-slate-50"
                >
                  <div className="flex-1">
                    <h3 className="mb-1 font-bold text-slate-900">{item.name}</h3>
                    <p className="text-[15px] leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wider text-blue-700 uppercase">
                    {item.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {d.industry_glossary.length > 0 && (
        <section id="glossary" className="scroll-mt-24 border-b border-slate-200 bg-white py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-6 flex items-center gap-3 text-slate-500">
              <BookOpen className="h-6 w-6" aria-hidden />
              <span className="text-xs font-bold tracking-wider uppercase">Glossary</span>
            </div>
            <h2 className="mb-10 text-3xl font-extrabold text-slate-900">{glossaryTitle}</h2>
            <dl className="space-y-6">
              {d.industry_glossary.map((g) => (
                <div key={g.term} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <dt className="mb-2 text-lg font-bold text-slate-900">{g.term}</dt>
                  <dd className="text-[15px] leading-relaxed text-slate-600">{g.definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {tax && (
        <section id="tax" className="scroll-mt-24 bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-6 flex items-center gap-3 text-emerald-400">
              <Scale className="h-6 w-6" aria-hidden />
              <span className="text-xs font-bold tracking-wider uppercase">
                Tax &amp; Compliance
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-extrabold">
              {text(d, "tax_or_compliance_title") ?? `Tax considerations for ${industryLower}`}
            </h2>
            <p className="text-[17px] leading-relaxed text-slate-300">{tax}</p>
            <p className="mt-6 text-sm leading-relaxed text-slate-400 italic">
              This is general information, not tax advice. Confirm specifics with a licensed
              accountant in your jurisdiction.
            </p>
          </div>
        </section>
      )}

      <FaqSection title={`Questions from ${industryLower}`} faqs={d.faqs} slug={d.slug} />

      <ClosingCta
        title={`Built for ${industryLower}. Try it free.`}
        text="No credit card required. Send your first invoice in 60 seconds."
        button="Get Started Free"
        campaign={`industry-${d.slug}-footer`}
      />

      <RelatedLinks
        title="More industries we support"
        allHref="/industries"
        allLabel="All Industries"
        links={d.related.map((r) => ({
          href: `/industries/${r.slug}`,
          label: `Invoicing for ${r.name}`,
        }))}
      />
    </div>
  );
}
