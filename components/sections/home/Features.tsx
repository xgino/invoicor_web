import { BadgeCheck, Globe2, Layers, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/content";
import { cx } from "@/components/ui/cx";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";

/**
 * Features by messaging pillar (BRAND.md §3, ROADMAP chunk 20a/b). Every proof point is on the
 * fact sheet (BRAND.md §10).
 */
function Card({
  icon,
  title,
  children,
  className,
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cx("reveal bg-surface ring-line shadow-soft rounded-2xl p-7 ring-1", className)}
      style={{ "--d": `${delay}s` } as React.CSSProperties}
    >
      <span className="bg-brand-50 text-brand-700 mb-5 grid size-11 place-items-center rounded-xl">
        {icon}
      </span>
      <h3 className="font-heading text-h3 text-ink">{title}</h3>
      {children}
    </div>
  );
}

const CURRENCIES = [
  "USD $",
  "EUR €",
  "GBP £",
  "CAD $",
  "AUD $",
  "CHF",
  "JPY ¥",
  "INR ₹",
  "BRL R$",
  "PLN zł",
];
const LANGUAGES = [
  "English",
  "Deutsch",
  "Español",
  "Français",
  "Nederlands",
  "Italiano",
  "Português",
];
const STATUSES = [
  { client: "Studio Nova", amount: "$3,080.00", status: "Paid", tone: "success" as const },
  { client: "Acme Corp", amount: "$1,200.00", status: "Sent", tone: "neutral" as const },
  { client: "Bright Agency", amount: "$750.00", status: "Draft", tone: "free" as const },
];

export function Features() {
  return (
    <Section aria-labelledby="features-title">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>Everything an invoice needs</Eyebrow>
          <Heading id="features-title">Built for the job, not for accountants.</Heading>
          <Text size="lead" className="mt-4">
            No ledgers, no setup wizard. The parts of invoicing you actually use, done properly.
          </Text>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-6">
          <Card
            icon={<Zap aria-hidden className="size-5" />}
            title="Fast"
            className="lg:col-span-3"
          >
            <p className="text-muted mt-2">
              Saved clients and products fill in for you. Totals, tax and discounts add up as you
              type. Duplicate last month&apos;s invoice with one tap.
            </p>
            <ul className="mt-6 space-y-2">
              {STATUSES.map((s) => (
                <li
                  key={s.client}
                  className="bg-tint text-small flex items-center justify-between rounded-xl px-4 py-2.5"
                >
                  <span className="text-ink font-medium">{s.client}</span>
                  <span className="flex items-center gap-3">
                    <span className="text-ink tabular-nums">{s.amount}</span>
                    <Badge tone={s.tone}>{s.status}</Badge>
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card
            icon={<Globe2 aria-hidden className="size-5" />}
            title="Global"
            className="lg:col-span-3"
            delay={0.08}
          >
            <p className="text-muted mt-2">
              Invoice any client, anywhere: 38 currencies and 11 invoice languages. Your client
              reads it in their own language.
            </p>
            <ul aria-label="Some supported currencies" className="mt-6 flex flex-wrap gap-2">
              {CURRENCIES.map((c) => (
                <li
                  key={c}
                  className="bg-tint text-small text-ink rounded-lg px-2.5 py-1 font-medium tabular-nums"
                >
                  {c}
                </li>
              ))}
            </ul>
            <ul aria-label="Some invoice languages" className="mt-2 flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <li
                  key={l}
                  className="bg-brand-50 text-small text-brand-800 rounded-lg px-2.5 py-1 font-medium"
                >
                  {l}
                </li>
              ))}
            </ul>
          </Card>

          <Card
            icon={<Layers aria-hidden className="size-5" />}
            title="Professional"
            className="lg:col-span-2"
            delay={0.12}
          >
            <p className="text-muted mt-2">
              31 templates (21 free) with your logo. Up to 3 business profiles on Pro, and a revenue
              dashboard to see what&apos;s paid and what&apos;s still out.
            </p>
          </Card>

          <Card
            icon={<BadgeCheck aria-hidden className="size-5" />}
            title="Honest"
            className="lg:col-span-4"
            delay={0.16}
          >
            <ul className="text-muted mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {[
                "3 invoices free, no watermark",
                "No card needed to start",
                "0% of your payments, ever",
                "Data stored in Germany (GDPR)",
                "Clear prices, cancel any time",
                "A real person answers",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden className="text-brand-600">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
