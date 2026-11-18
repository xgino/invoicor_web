import { Check, Minus } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppleIcon } from "@/components/brand/AppleIcon";
import {
  ArticleLayout,
  Block,
  Callout,
  ClosingCta,
  FaqBlock,
  PageHeader,
  PointList,
} from "@/components/sections/content/blocks";
import { buttonClass } from "@/components/ui/Button";
import { RelatedLinks } from "@/components/ui/content";
import { cx } from "@/components/ui/cx";
import { InvoicePaper, LineItems, PaperLabel, Stamp } from "@/components/ui/invoice";
import { appStoreLink } from "@/lib/config";
import { CONTENT_UPDATED_AT, flag, getComparison, getComparisons, text } from "@/lib/content";
import { FREE_INVOICES, PAID_PLANS, PRICING, formatPrice } from "@/lib/pricing";
import { buildMetadata, ogImagePath } from "@/lib/seo";

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
    image: ogImagePath("compare", d.slug),
  });
}

const THREE = [1, 2, 3];
const FIVE = [1, 2, 3, 4, 5];

function Mark({ yes, label }: { yes: boolean; label: string }) {
  return yes ? (
    <span className="bg-brand-50 text-brand-700 inline-grid size-8 place-items-center rounded-full">
      <Check aria-hidden className="size-4" strokeWidth={2.5} />
      <span className="sr-only">{label}: yes</span>
    </span>
  ) : (
    <span className="bg-tint text-subtle inline-grid size-8 place-items-center rounded-full">
      <Minus aria-hidden className="size-4" />
      <span className="sr-only">{label}: no</span>
    </span>
  );
}

/** Compare page (ROADMAP chunk 23, blueprint "Compare"). Text from content/comparisons.json;
 * Invoicor's prices from content/pricing.json. */
export default async function ComparePage({ params }: PageProps<"/compare/[slug]">) {
  const { slug } = await params;
  const d = getComparison(slug);
  if (!d) notFound();

  const competitor = d.competitor;
  const pairs = (prefix: string) =>
    THREE.flatMap((n) => {
      const title = text(d, `${prefix}_${n}_title`);
      return title ? [{ title, text: text(d, `${prefix}_${n}_text`) }] : [];
    });
  const painPoints = pairs("mistake");
  const steps = pairs("step");
  const rows = FIVE.flatMap((n) => {
    const name = text(d, `feature_compare_${n}_name`);
    return name
      ? [
          {
            name,
            us: flag(d, `feature_compare_${n}_us`),
            them: flag(d, `feature_compare_${n}_them`),
          },
        ]
      : [];
  });
  const stats = [1, 2].flatMap((n) => {
    const value = text(d, `stat_${n}_value`);
    return value ? [{ value, desc: text(d, `stat_${n}_desc`) }] : [];
  });
  const audienceTitle = text(d, "target_audience_title");
  const policyH2 = text(d, "policy_h2");
  const pricingThem = text(d, "pricing_them");

  const toc = [
    { id: "pain-points", label: `Where ${competitor} slows you down`, show: painPoints.length > 0 },
    { id: "features", label: "Feature comparison", show: rows.length > 0 },
    { id: "audience", label: "Who each is for", show: !!audienceTitle },
    { id: "approach", label: "The Invoicor approach", show: !!policyH2 },
    { id: "pricing", label: "Pricing", show: !!pricingThem },
    { id: "steps", label: "How to switch", show: steps.length > 0 },
    { id: "faqs", label: "FAQ", show: d.faqs.length > 0 },
  ].filter((s) => s.show);

  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: `vs ${competitor}` },
        ]}
        eyebrow={text(d, "badge_text") ?? `Invoicor vs ${competitor}`}
        updated={CONTENT_UPDATED_AT.comparisons}
        title={d.h1}
        subtitle={d.subtitle}
        actions={
          <a
            href={appStoreLink(`compare-${d.slug}`)}
            target="_blank"
            rel="noopener noreferrer"
            data-track="cta_click"
            data-track-section={`compare-${d.slug}`}
            className={buttonClass({ size: "lg" })}
          >
            <AppleIcon size={17} />
            Try Invoicor free
          </a>
        }
        aside={
          stats.length > 0 && (
            <InvoicePaper highlight edge="perforated" className="p-6 sm:p-7">
              <PaperLabel>Invoicor vs {competitor} · at a glance</PaperLabel>
              <ul className="mt-2">
                {stats.map((s) => (
                  <li key={s.value} className="border-line border-b py-5 last:border-b-0">
                    <p className="font-heading text-h2 text-ink tabular-nums">{s.value}</p>
                    {s.desc && <p className="text-small text-muted mt-1">{s.desc}</p>}
                  </li>
                ))}
              </ul>
            </InvoicePaper>
          )
        }
      />

      <ArticleLayout toc={toc}>
        {painPoints.length > 0 && (
          <Block
            id="pain-points"
            eyebrow="The problem"
            title={`Where ${competitor} slows you down`}
          >
            <PointList items={painPoints} tone="cross" />
          </Block>
        )}

        {rows.length > 0 && (
          <Block id="features" eyebrow="Side by side" title={`Invoicor vs ${competitor}`}>
            <div className="bg-surface ring-line shadow-soft overflow-hidden rounded-2xl ring-1">
              <table className="w-full text-left">
                <caption className="sr-only">
                  Feature comparison between Invoicor and {competitor}
                </caption>
                <thead className="bg-tint text-eyebrow text-subtle uppercase">
                  <tr>
                    <th scope="col" className="px-5 py-4">
                      Feature
                    </th>
                    <th scope="col" className="text-brand-700 w-28 px-3 py-4 text-center">
                      Invoicor
                    </th>
                    <th scope="col" className="w-28 px-3 py-4 text-center">
                      {competitor}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-line divide-y">
                  {rows.map((r) => (
                    <tr key={r.name}>
                      <th scope="row" className="text-ink px-5 py-4 font-medium">
                        {r.name}
                      </th>
                      <td className="bg-brand-50/40 px-3 py-4 text-center">
                        <Mark yes={r.us} label="Invoicor" />
                      </td>
                      <td className="px-3 py-4 text-center">
                        <Mark yes={r.them} label={competitor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-small text-subtle mt-4">
              Where {competitor} has a feature Invoicor doesn&apos;t, we say so. Features change:
              check {competitor}&apos;s website for their current plans.
            </p>
          </Block>
        )}

        {audienceTitle && (
          <Block id="audience" eyebrow="Who each is for" title={audienceTitle}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-brand-50 ring-brand-200 rounded-2xl p-6 ring-1">
                <h3 className="text-brand-800 font-bold">Choose Invoicor if you are</h3>
                <p className="text-ink mt-2 leading-relaxed">{text(d, "target_audience_us")}</p>
              </div>
              <div className="bg-tint ring-line rounded-2xl p-6 ring-1">
                <h3 className="text-ink font-bold">Choose {competitor} if you are</h3>
                <p className="text-muted mt-2 leading-relaxed">{text(d, "target_audience_them")}</p>
              </div>
            </div>
          </Block>
        )}

        {policyH2 && (
          <Block id="approach" eyebrow="The Invoicor approach" title={policyH2}>
            <p className="text-ink text-[1.0625rem] leading-relaxed">{text(d, "policy_text")}</p>
            {text(d, "solution_text") && (
              <div className="mt-8">
                <Callout title={text(d, "solution_h2") ?? "How Invoicor is different"}>
                  {text(d, "solution_text")}
                </Callout>
              </div>
            )}
          </Block>
        )}

        {pricingThem && (
          <Block id="pricing" eyebrow="Pricing" title="An honest price comparison">
            <div className="grid items-start gap-6 sm:grid-cols-2">
              <InvoicePaper className="p-6">
                <PaperLabel>{competitor}</PaperLabel>
                <p className="font-heading text-h2 text-ink mt-3">{pricingThem}</p>
                {text(d, "pricing_them_subtext") && (
                  <p className="text-small text-muted mt-3 leading-relaxed">
                    {text(d, "pricing_them_subtext")}
                  </p>
                )}
                <p className="text-small text-subtle border-line mt-5 border-t pt-4">
                  {competitor}&apos;s prices change; check their website for the current price.
                </p>
              </InvoicePaper>
              <InvoicePaper highlight edge="perforated" className="relative p-6">
                <Stamp className="absolute top-5 right-5" rotate={-8}>
                  0% fees
                </Stamp>
                <PaperLabel>Invoicor</PaperLabel>
                <LineItems
                  className="mt-12"
                  items={[
                    {
                      description: "Free",
                      detail: `${FREE_INVOICES} invoices, no watermark`,
                      amount: "$0",
                    },
                    ...PAID_PLANS.map((p) => ({
                      description: p.name,
                      detail: p.features[0],
                      amount: `${formatPrice(p.monthly)}/mo`,
                    })),
                  ]}
                />
                <p className="text-small text-muted mt-4">
                  {PRICING.trial_days.monthly}-day free trial ({PRICING.trial_days.yearly} days on
                  yearly plans), cancel any time through Apple. Invoicor takes nothing from your
                  payments.
                </p>
              </InvoicePaper>
            </div>
          </Block>
        )}

        {steps.length > 0 && (
          <Block id="steps" eyebrow="Switching" title={`Switch from ${competitor} in 3 steps`}>
            <PointList items={steps} numbered />
          </Block>
        )}

        <FaqBlock title={`Switching from ${competitor}`} faqs={d.faqs} />

        {d.related_comparisons.length > 0 && (
          <div className={cx("border-line border-t py-14")}>
            <RelatedLinks
              title="More comparisons"
              links={d.related_comparisons.map((r) => ({
                href: `/compare/${r.slug}`,
                title: `Invoicor vs ${r.name}`,
              }))}
            />
          </div>
        )}
      </ArticleLayout>

      <ClosingCta
        title={`Try the ${competitor} alternative`}
        gradient="for free."
        text="Professional invoices from your iPhone, clear prices, and no cut of your payments."
        campaign={`compare-${d.slug}-footer`}
      />
    </>
  );
}
