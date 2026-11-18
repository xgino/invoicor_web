import { PricingTable } from "@/components/pricing/PricingTable";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";
import { CHROME } from "@/lib/i18n/chrome";
import { LOCALE_INFO, type Locale } from "@/lib/i18n/config";
import type { HomeDict } from "@/lib/i18n/pages/home/en";

/** Pricing (ROADMAP chunk 20c): every plan as an invoice, yearly first. */
export function PricingSection({ t, locale }: { t: HomeDict; locale: Locale }) {
  return (
    <Section id="pricing" tone="tint" aria-labelledby="pricing-title" data-hide-sticky>
      <Container>
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow>{t.pricing.eyebrow}</Eyebrow>
          <Heading id="pricing-title">{t.pricing.title}</Heading>
          <Text size="lead" className="mt-4">
            {t.pricing.lead}
          </Text>
        </div>
        <PricingTable
          campaign={locale === "en" ? "pricing" : `pricing_${locale}`}
          t={t.table}
          intl={LOCALE_INFO[locale].intl}
          headers={CHROME[locale].invoice}
        />
      </Container>
    </Section>
  );
}
