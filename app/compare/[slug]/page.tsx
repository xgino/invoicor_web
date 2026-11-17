import { Check, CircleCheck, CircleX, TrendingUp, UserCheck, X } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppStoreButton, Breadcrumbs, FaqSection, RelatedLinks } from "@/components/content/blocks";
import { Toc } from "@/components/content/Toc";
import { JsonLd } from "@/components/seo/JsonLd";
import { flag, getComparison, getComparisons, text } from "@/lib/content";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { FREE_INVOICES, PAID_PLANS, PRICING, STARTING_PRICE, formatPrice } from "@/lib/pricing";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getComparisons().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/compare/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getComparison(slug);
  if (!d) return {};
  return buildMetadata({
    title: d.title,
    description: d.meta_description,
    path: `/compare/${d.slug}`,
  });
}

const THREE = [1, 2, 3];
const FIVE = [1, 2, 3, 4, 5];

export default async function ComparePage({ params }: PageProps<"/compare/[slug]">) {
  const { slug } = await params;
  const d = getComparison(slug);
  if (!d) notFound();

  const competitor = d.competitor;
  const painPoints = THREE.flatMap((n) => {
    const title = text(d, `mistake_${n}_title`);
    return title ? [{ n, title, text: text(d, `mistake_${n}_text`) }] : [];
  });
  const featureRows = FIVE.flatMap((n) => {
    const name = text(d, `feature_compare_${n}_name`);
    return name
      ? [
          {
            n,
            name,
            us: flag(d, `feature_compare_${n}_us`),
            them: flag(d, `feature_compare_${n}_them`),
          },
        ]
      : [];
  });
  const stats = [1, 2].flatMap((n) => {
    const value = text(d, `stat_${n}_value`);
    return value ? [{ n, value, desc: text(d, `stat_${n}_desc`) }] : [];
  });
  const steps = THREE.flatMap((n) => {
    const title = text(d, `step_${n}_title`);
    return title ? [{ n, title, text: text(d, `step_${n}_text`) }] : [];
  });
  const audienceTitle = text(d, "target_audience_title");
  const policyH2 = text(d, "policy_h2");
  const pricingThem = text(d, "pricing_them");

  const tocSections = [
    { id: "pain-points", label: `Why ${competitor} slows you down`, show: painPoints.length > 0 },
    { id: "features", label: "Feature comparison", show: featureRows.length > 0 },
    { id: "audience", label: "Who it's for", show: !!audienceTitle },
    { id: "philosophy", label: "The Invoicor approach", show: !!policyH2 },
    { id: "pricing", label: "Pricing comparison", show: !!pricingThem },
    { id: "steps", label: "How switching works", show: steps.length > 0 },
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
            { name: "Compare", path: "/compare" },
            { name: `Invoicor vs ${competitor}` },
          ]),
          faqLd(d.faqs),
        ]}
      />
      <Toc sections={tocSections} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: `vs ${competitor}` },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <span className="mb-6 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase">
          {text(d, "badge_text") ?? "Software Comparison"}
        </span>
        <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-6xl">
          {d.h1}
        </h1>
        <p className="mb-10 text-lg leading-relaxed font-medium text-slate-500 md:text-xl">
          {d.subtitle}
        </p>
        <AppStoreButton campaign={`compare-${d.slug}`}>Start Free Trial</AppStoreButton>
      </section>

      {painPoints.length > 0 && (
        <section id="pain-points" className="scroll-mt-24 border-y border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-3xl font-extrabold">
              Why {competitor} slows you down.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {painPoints.map((m) => (
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

      {featureRows.length > 0 && (
        <section id="features" className="scroll-mt-24 bg-slate-50 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-slate-900">
                Invoicor vs {competitor} Features
              </h2>
              <p className="text-lg font-medium text-slate-500">
                A clear breakdown of what you actually get.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left">
                <thead className="border-b border-slate-200 bg-slate-100 text-sm font-bold tracking-wider text-slate-500 uppercase">
                  <tr>
                    <th scope="col" className="p-6">
                      Feature
                    </th>
                    <th scope="col" className="p-6 text-center text-blue-600">
                      Invoicor
                    </th>
                    <th scope="col" className="p-6 text-center">
                      {competitor}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {featureRows.map((row) => (
                    <tr key={row.n} className="transition-colors hover:bg-slate-50">
                      <th scope="row" className="p-6 font-semibold text-slate-900">
                        {row.name}
                      </th>
                      <td className="p-6">
                        <span className="flex justify-center">
                          {row.us ? (
                            <CircleCheck className="h-6 w-6 text-emerald-500" aria-label="Yes" />
                          ) : (
                            <X className="h-6 w-6 text-slate-300" aria-label="No" />
                          )}
                        </span>
                      </td>
                      <td className="p-6">
                        <span className="flex justify-center">
                          {row.them ? (
                            <Check className="h-6 w-6 text-slate-800" aria-label="Yes" />
                          ) : (
                            <X className="h-6 w-6 text-rose-400" aria-label="No" />
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {audienceTitle && (
        <section id="audience" className="scroll-mt-24 border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-slate-900">
              {audienceTitle}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
                <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-blue-700">
                  <UserCheck className="h-6 w-6" aria-hidden /> Ideal for Invoicor
                </h3>
                <p className="leading-relaxed font-medium text-slate-700">
                  {text(d, "target_audience_us")}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-100/70 p-8">
                <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-slate-700">
                  <UserCheck className="h-6 w-6" aria-hidden /> Better Fit for {competitor}
                </h3>
                <p className="leading-relaxed font-medium text-slate-700">
                  {text(d, "target_audience_them")}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {policyH2 && (
        <section id="philosophy" className="scroll-mt-24 bg-slate-950 py-24 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-extrabold">{policyH2}</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-400">
                {text(d, "policy_text")}
              </p>
              {text(d, "solution_h2") && (
                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
                  <h3 className="mb-4 text-2xl font-bold">{text(d, "solution_h2")}</h3>
                  <p className="text-lg leading-relaxed text-blue-200/80">
                    {text(d, "solution_text")}
                  </p>
                </div>
              )}
            </div>
            {stats.length > 0 && (
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-xl">
                <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold">
                  <TrendingUp className="text-emerald-400" aria-hidden /> Invoicor Impact
                </h3>
                {stats.map((s) => (
                  <div
                    key={s.n}
                    className="mb-8 border-b border-slate-800 pb-8 last:mb-0 last:border-0 last:pb-0"
                  >
                    <div className="mb-3 bg-linear-to-br from-blue-400 to-emerald-400 bg-clip-text text-5xl font-black text-transparent">
                      {s.value}
                    </div>
                    {s.desc && <p className="text-lg font-medium text-slate-400">{s.desc}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {pricingThem && (
        <section
          id="pricing"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-24 text-center"
        >
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl font-extrabold text-slate-900">
              Honest Pricing Comparison
            </h2>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 p-8 md:w-1/2">
                <h3 className="mb-4 text-lg font-bold tracking-wider text-slate-500 uppercase">
                  {competitor}
                </h3>
                <div className="mb-4 text-4xl font-bold text-slate-400 line-through">
                  {text(d, "pricing_them")}
                </div>
                <p className="text-[15px] leading-relaxed text-slate-500">
                  {text(d, "pricing_them_subtext")}
                </p>
              </div>
              <div className="w-full transform rounded-3xl border border-blue-700 bg-blue-600 p-8 shadow-2xl md:w-1/2 md:scale-105">
                <h3 className="mb-4 text-lg font-bold tracking-wider text-blue-200 uppercase">
                  Invoicor
                </h3>
                <div className="mb-1 text-5xl font-black text-white">
                  {STARTING_PRICE}
                  <span className="text-2xl font-bold text-blue-200">/mo</span>
                </div>
                <p className="mb-4 text-sm font-semibold text-blue-200">
                  Free for your first {FREE_INVOICES} invoices
                </p>
                <p className="text-[15px] leading-relaxed text-blue-100">
                  {PAID_PLANS.map(
                    (p) => `${p.name} ${formatPrice(p.monthly)}/mo (${p.features[0]})`,
                  ).join(" · ")}
                  . {PRICING.trial_days.monthly}-day free trial ({PRICING.trial_days.yearly} days on
                  yearly plans), cancel anytime. No fees on your payments.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {steps.length > 0 && (
        <section id="steps" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-16 text-center text-3xl font-extrabold">Switching is Easy</h2>
            <ol className="relative grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <span
                    aria-hidden
                    className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-md"
                  >
                    {s.n}
                  </span>
                  <h3 className="mt-2 mb-3 text-xl font-bold text-slate-900">{s.title}</h3>
                  {s.text && <p className="text-[15px] leading-relaxed text-slate-600">{s.text}</p>}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <FaqSection title={`Switching from ${competitor}`} faqs={d.faqs} slug={d.slug} />

      <RelatedLinks
        title="Compare More Invoicing Software"
        allHref="/compare"
        allLabel="All Comparisons"
        links={d.related_comparisons.map((r) => ({
          href: `/compare/${r.slug}`,
          label: `Invoicor vs ${r.name}`,
        }))}
      />
    </div>
  );
}
