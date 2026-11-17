import { Accordion } from "@/components/ui/Accordion";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/layout";
import { HOME_FAQS } from "./faqs";

/** Visible FAQ + FAQPage JSON-LD from the same list (ROADMAP chunk 20e). */
export function HomeFaq() {
  return (
    <Section tone="tint" aria-labelledby="faq-title">
      <Container narrow>
        <div className="reveal mb-10 text-center">
          <Eyebrow>FAQ</Eyebrow>
          <Heading id="faq-title">Questions, answered.</Heading>
        </div>
        <Accordion items={HOME_FAQS} structuredData />
      </Container>
    </Section>
  );
}
