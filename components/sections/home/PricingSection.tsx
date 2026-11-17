import { PricingTable } from "@/components/pricing/PricingTable";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";

/** Pricing (ROADMAP chunk 20c): every plan as an invoice, yearly first. */
export function PricingSection() {
  return (
    <Section id="pricing" tone="tint" aria-labelledby="pricing-title">
      <Container>
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <Heading id="pricing-title">Clear prices. Nothing taken from your payments.</Heading>
          <Text size="lead" className="mt-4">
            Start free. Upgrade when you send more. Cancel any time through Apple.
          </Text>
        </div>
        <PricingTable campaign="pricing" />
      </Container>
    </Section>
  );
}
