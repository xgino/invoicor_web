import { BadgeCheck, Globe2, Layers, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/content";
import { cx } from "@/components/ui/cx";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";
import { formatMoney } from "@/lib/i18n/money";
import type { Locale } from "@/lib/i18n/config";
import type { HomeDict } from "@/lib/i18n/pages/home/en";

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
export function Features({ t, locale }: { t: HomeDict; locale: Locale }) {
  const f = t.features;
  const money = (n: number) => formatMoney(n, locale);
  const STATUSES = [
    { client: "Studio Nova", amount: money(3080), status: f.paid, tone: "success" as const },
    { client: "Acme Corp", amount: money(1200), status: f.sent, tone: "neutral" as const },
    { client: "Bright Agency", amount: money(750), status: f.draft, tone: "free" as const },
  ];
  return (
    <Section aria-labelledby="features-title">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>{f.eyebrow}</Eyebrow>
          <Heading id="features-title">{f.title}</Heading>
          <Text size="lead" className="mt-4">
            {f.lead}
          </Text>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-6">
          <Card
            icon={<Zap aria-hidden className="size-5" />}
            title={f.fast}
            className="lg:col-span-3"
          >
            <p className="text-muted mt-2">{f.fastText}</p>
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
            title={f.global}
            className="lg:col-span-3"
            delay={0.08}
          >
            <p className="text-muted mt-2">{f.globalText}</p>
            <ul aria-label={f.currenciesAria} className="mt-6 flex flex-wrap gap-2">
              {CURRENCIES.map((c) => (
                <li
                  key={c}
                  className="bg-tint text-small text-ink rounded-lg px-2.5 py-1 font-medium tabular-nums"
                >
                  {c}
                </li>
              ))}
            </ul>
            <ul aria-label={f.languagesAria} className="mt-2 flex flex-wrap gap-2">
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
            title={f.professional}
            className="lg:col-span-2"
            delay={0.12}
          >
            <p className="text-muted mt-2">{f.professionalText}</p>
          </Card>

          <Card
            icon={<BadgeCheck aria-hidden className="size-5" />}
            title={f.honest}
            className="lg:col-span-4"
            delay={0.16}
          >
            <ul className="text-muted mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {f.honestList.map((line) => (
                <li key={line} className="flex gap-2">
                  <span aria-hidden className="text-brand-600">
                    ✓
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
