import { BadgeCheck, Banknote, MessageCircle } from "lucide-react";
import { Container, Eyebrow, Gradient, Heading, Section } from "@/components/ui/layout";
import { FREE_INVOICES } from "@/lib/pricing";

/**
 * Promises built on competitors' most common one-star complaints (BRAND.md §1). Only true claims.
 * Real, attributed App Store reviews join this section once there are enough (chunk 50).
 */
const PROMISES = [
  {
    icon: BadgeCheck,
    title: "Free means free",
    text: `Your first ${FREE_INVOICES} invoices are free, with no watermark and no card needed. No trial that turns into a paywall halfway through your first invoice.`,
  },
  {
    icon: Banknote,
    title: "We never touch your money",
    text: "Invoicor doesn't process payments, so it can't hold, freeze or take a cut of what you earn. Your client pays you directly.",
  },
  {
    icon: MessageCircle,
    title: "A real person answers",
    text: "Questions and feedback go straight from the app to the people who build it. No bots, no endless ticket queue.",
  },
];

export function Promises() {
  return (
    <Section aria-labelledby="promises-title">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>Our promises</Eyebrow>
          <Heading id="promises-title">
            No tricks. <Gradient>Just invoices.</Gradient>
          </Heading>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {PROMISES.map((p, i) => (
            <li
              key={p.title}
              className="reveal ring-line bg-surface shadow-soft rounded-2xl p-7 ring-1"
              style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
            >
              <p.icon aria-hidden className="text-brand-600 size-7" strokeWidth={1.75} />
              <h3 className="font-heading text-h4 text-ink mt-5">{p.title}</h3>
              <p className="text-muted mt-2">{p.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
