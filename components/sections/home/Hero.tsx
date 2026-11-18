import { ArrowRight, CircleCheck, Send } from "lucide-react";
import { AppleIcon } from "@/components/brand/AppleIcon";
import { buttonClass } from "@/components/ui/Button";
import { cx } from "@/components/ui/cx";
import { InvoicePaper, LineItems, PaperLabel, Stamp } from "@/components/ui/invoice";
import { Container, Eyebrow, Gradient } from "@/components/ui/layout";
import { appStoreLink } from "@/lib/config";
import { FREE_INVOICES } from "@/lib/pricing";
import { TrustRow } from "@/components/ui/TrustRow";

const PROMISES = [`${FREE_INVOICES} invoices free`, "No watermark", "No subscription needed"];

/**
 * Home hero (ROADMAP chunk 19b): light, a soft orange glow, one gradient word, and a real
 * invoice instead of a fake dashboard. The invoice is a sample job for the core audience
 * (BRAND.md §2: the tradesperson); its math adds up.
 */
export function Hero() {
  return (
    <section className="bg-surface relative isolate overflow-hidden">
      <div
        aria-hidden
        className="bg-brand-glow glow-drift absolute inset-x-0 -top-24 -z-10 h-[46rem] opacity-90"
      />
      <Container className="pt-nav grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28">
        <div className="anim-up pt-12 lg:pt-20">
          <Eyebrow>Invoice maker for iPhone</Eyebrow>
          <h1 className="font-heading text-display text-ink text-balance">
            Professional invoices, sent <Gradient>in seconds.</Gradient>
          </h1>
          <p className="text-lead text-muted mt-6 max-w-xl">
            Your business details, clients and prices fill in for you. Pick a template, tap send. A
            clean PDF in your client&apos;s language and currency, straight from your phone.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={appStoreLink("hero")}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_click"
              data-track-section="hero"
              className={buttonClass({ size: "lg" })}
            >
              <AppleIcon size={18} />
              Download free on iOS
            </a>
            <a href="#pricing" className={buttonClass({ variant: "secondary", size: "lg" })}>
              See pricing <ArrowRight aria-hidden className="size-4" />
            </a>
          </div>
          <ul aria-label="What you get for free" className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {PROMISES.map((p) => (
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
                  <PaperLabel>Invoice № 0042</PaperLabel>
                  <p className="font-heading text-h4 text-ink mt-1">Rivera Plumbing</p>
                  <p className="text-small text-subtle">Issued today · Due in 14 days</p>
                </div>
                <Stamp tone="success" rotate={-12} delay={0.9}>
                  Paid
                </Stamp>
              </div>
              <PaperLabel className="mb-1">Bill to</PaperLabel>
              <p className="text-small text-ink mb-6">Sarah Mitchell · 18 Oak Lane, Austin TX</p>
              <LineItems
                animate
                items={[
                  { description: "Emergency call-out", detail: "Saturday", amount: "$95.00" },
                  {
                    description: "Labor, 2 hours",
                    detail: "Replace kitchen faucet",
                    amount: "$170.00",
                  },
                  { description: "Faucet and fittings", amount: "$213.50" },
                ]}
                totals={[
                  { label: "Subtotal", amount: "$478.50" },
                  { label: "Tax 8%", amount: "$38.28" },
                ]}
                total={{ label: "Total due", amount: "$516.78" }}
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
            Sent via WhatsApp as PDF
          </div>
        </div>
      </Container>
      <Container className="pb-14">
        <TrustRow className="reveal border-line border-t pt-8" />
      </Container>
    </section>
  );
}
