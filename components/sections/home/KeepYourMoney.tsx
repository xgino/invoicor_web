import { HandCoins, Landmark, ShieldCheck } from "lucide-react";
import { Container, Eyebrow, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { TrustRow } from "@/components/ui/TrustRow";
import { FeeCalculator } from "./FeeCalculator";
import { CALCULATOR_SCALE } from "@/lib/i18n/money";
import { LOCALE_INFO } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";
import type { HomeDict } from "@/lib/i18n/pages/home/en";

const ICONS = [HandCoins, Landmark, ShieldCheck];

/** "You did the work. You keep the money." (ROADMAP chunk 20d2, BRAND.md pillar: Honest) */
export function KeepYourMoney({ t, locale }: { t: HomeDict; locale: Locale }) {
  const k = t.keep;
  const POINTS = k.points.map((p, i) => ({ ...p, icon: ICONS[i]! }));
  const currency = LOCALE_INFO[locale].currency;
  return (
    <Section tone="brand" aria-labelledby="keep-title">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>{k.eyebrow}</Eyebrow>
          <Heading id="keep-title">
            {k.titleA} <Gradient underline="reveal">{k.titleB}</Gradient>
          </Heading>
          <Text size="lead" className="mt-5">
            {k.lead}
          </Text>
          <ul className="mt-9 space-y-6">
            {POINTS.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="bg-surface text-brand-700 ring-brand-200 grid size-11 shrink-0 place-items-center rounded-xl ring-1">
                  <p.icon aria-hidden className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-ink font-bold">{p.title}</h3>
                  <p className="text-muted mt-1">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <TrustRow show="pay" t={t.trust} className="mt-9" />
        </div>
        <div
          className="reveal mx-auto w-full max-w-md"
          style={{ "--d": "0.1s" } as React.CSSProperties}
        >
          <FeeCalculator
            t={t.fee}
            intl={LOCALE_INFO[locale].intl}
            currency={currency}
            scale={CALCULATOR_SCALE[currency] ?? 1}
          />
        </div>
      </Container>
    </Section>
  );
}
