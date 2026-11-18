import { Accordion } from "@/components/ui/Accordion";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/layout";
import { fill } from "@/lib/i18n/chrome";
import type { Locale } from "@/lib/i18n/config";
import { formatUsd } from "@/lib/i18n/money";
import type { HomeDict } from "@/lib/i18n/pages/home/en";
import { FREE_INVOICES, PAID_PLANS, PRICING } from "@/lib/pricing";

/** The home FAQ in the page's language, with prices and trial days from content/pricing.json. */
export function homeFaqs(t: HomeDict, locale: Locale) {
  const values = {
    n: FREE_INVOICES,
    price: formatUsd(Math.min(...PAID_PLANS.map((p) => p.monthly)), locale),
    monthly: PRICING.trial_days.monthly,
    yearly: PRICING.trial_days.yearly,
  };
  return t.faq.items.map((f) => ({ question: f.question, answer: fill(f.answer, values) }));
}

/** Visible FAQ + FAQPage JSON-LD from the same list (ROADMAP chunk 20e). */
export function HomeFaq({ t, locale }: { t: HomeDict; locale: Locale }) {
  return (
    <Section tone="tint" aria-labelledby="faq-title">
      <Container narrow>
        <div className="reveal mb-10 text-center">
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <Heading id="faq-title">{t.faq.title}</Heading>
        </div>
        <Accordion items={homeFaqs(t, locale)} structuredData />
      </Container>
    </Section>
  );
}
