import { ArrowRight, CircleCheck, Send } from "lucide-react";
import Link from "next/link";
import { AppleIcon } from "@/components/brand/AppleIcon";
import { buttonClass } from "@/components/ui/Button";
import { cx } from "@/components/ui/cx";
import { InvoicePaper, LineItems, PaperLabel, Stamp } from "@/components/ui/invoice";
import { Container, Eyebrow, Gradient } from "@/components/ui/layout";
import { appStoreLink } from "@/lib/config";
import { FREE_INVOICES } from "@/lib/pricing";
import { TrustRow } from "@/components/ui/TrustRow";
import { DrawnArrow } from "@/components/ui/doodles";
import { CHROME, fill } from "@/lib/i18n/chrome";
import type { Locale } from "@/lib/i18n/config";
import { cents, formatMoney } from "@/lib/i18n/money";
import type { HomeDict } from "@/lib/i18n/pages/home/en";
import { ROUTES } from "@/lib/i18n/routes";

/** The sample invoice's totals, calculated from the language's own items and tax rate. */
export function sampleTotals(t: HomeDict["sample"]) {
  const subtotal = cents(t.items.reduce((s, i) => s + i.amount, 0));
  const tax = cents((subtotal * t.taxRate) / 100);
  return { subtotal, tax, total: cents(subtotal + tax) };
}

/**
 * Home hero (ROADMAP chunk 19b): light, a soft orange glow, one gradient word, and a real
 * invoice instead of a fake dashboard. The invoice is a sample job for the core audience
 * (BRAND.md §2: the tradesperson); its math adds up.
 */
export function Hero({ t, locale }: { t: HomeDict; locale: Locale }) {
  const h = t.hero;
  const sample = t.sample;
  const sums = sampleTotals(sample);
  const money = (n: number) => formatMoney(n, locale);
  const generator = ROUTES.generator[locale] ?? `/free-invoice-generator?lang=${locale}`;
  const promises = h.promises.map((p) => fill(p, { n: FREE_INVOICES }));
  return (
    <section className="bg-surface relative isolate overflow-hidden">
      <div
        aria-hidden
        className="bg-brand-glow glow-drift absolute inset-x-0 -top-24 -z-10 h-[46rem] opacity-90"
      />
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="dot-grid absolute -inset-12" />
      </div>
      <Container className="pt-nav grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28">
        <div className="anim-up relative pt-12 lg:pt-20">
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <h1 className="font-heading text-display text-ink text-balance">
            {h.titleA} <Gradient underline="load">{h.titleB}</Gradient>
          </h1>
          <p className="text-lead text-muted mt-6 max-w-xl">{h.lead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={appStoreLink(locale === "en" ? "hero" : `hero_${locale}`)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_click"
              data-track-section="hero"
              className={buttonClass({ size: "lg" })}
            >
              <AppleIcon size={18} />
              {h.cta}
            </a>
            <Link href={generator} className={buttonClass({ variant: "secondary", size: "lg" })}>
              {h.online} <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <p className="text-small text-muted mt-4">
            {h.androidQ}{" "}
            <Link
              href={ROUTES.android[locale] ?? "/android"}
              data-track="android_click"
              data-track-section="hero"
              className="text-brand-700 focus-visible:focus-ring rounded font-bold underline-offset-4 hover:underline"
            >
              {h.androidLink}
            </Link>
          </p>
          {/* Hand-drawn pointer to the invoice (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 bottom-14 hidden flex-col items-center xl:flex"
          >
            <span className="font-heading text-small text-brand-700 rotate-[-8deg] font-bold whitespace-nowrap">
              {h.doodle}
            </span>
            <DrawnArrow when="load" className="h-12 w-20 -rotate-[25deg]" />
          </div>
          <ul aria-label={h.promisesAria} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {promises.map((p) => (
              <li key={p} className="text-small text-muted flex items-center gap-2 font-medium">
                <CircleCheck aria-hidden className="text-brand-600 size-4" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="anim-phone relative mx-auto w-full max-w-md lg:mt-16">
          <div
            aria-hidden
            className="bg-brand-200/40 absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl"
          />
          <div className="float-soft">
            <InvoicePaper highlight edge="perforated" className="p-6 sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <PaperLabel>{sample.number}</PaperLabel>
                  <p className="font-heading text-h4 text-ink mt-1">{sample.business}</p>
                  <p className="text-small text-subtle">{sample.issued}</p>
                </div>
                <Stamp tone="success" rotate={-12} delay={0.9}>
                  {sample.stamp}
                </Stamp>
              </div>
              <PaperLabel className="mb-1">{sample.billTo}</PaperLabel>
              <p className="text-small text-ink mb-6">{sample.client}</p>
              <LineItems
                animate
                headers={CHROME[locale].invoice}
                items={sample.items.map((i) => ({
                  description: i.description,
                  detail: i.detail || undefined,
                  amount: money(i.amount),
                }))}
                totals={[
                  { label: sample.subtotal, amount: money(sums.subtotal) },
                  { label: sample.taxLabel, amount: money(sums.tax) },
                ]}
                total={{ label: sample.total, amount: money(sums.total) }}
              />
            </InvoicePaper>
          </div>
          <div
            className={cx(
              "bg-surface ring-line shadow-card text-small text-ink absolute -bottom-16 left-0 flex items-center gap-2.5 rounded-2xl px-4 py-3 font-medium ring-1 sm:-bottom-5 sm:-left-8",
              "reveal",
            )}
          >
            <span className="bg-brand-50 text-brand-700 grid size-8 place-items-center rounded-full">
              <Send aria-hidden className="size-4" />
            </span>
            {h.sent}
          </div>
        </div>
      </Container>
      <Container className="pb-14">
        <TrustRow t={t.trust} className="reveal border-line border-t pt-8" />
      </Container>
    </section>
  );
}
