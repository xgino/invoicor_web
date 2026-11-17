import { HandCoins, Landmark, ShieldCheck } from "lucide-react";
import { Container, Eyebrow, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { FeeCalculator } from "./FeeCalculator";

const POINTS = [
  {
    icon: HandCoins,
    title: "No cut, no per-invoice fee",
    text: "You pay one flat subscription. What your client pays is yours.",
  },
  {
    icon: Landmark,
    title: "Paid straight to you",
    text: "Add your own payment link to the invoice. The money never passes through us, so it can't be held or frozen.",
  },
  {
    icon: ShieldCheck,
    title: "Honest about it",
    text: "If you use a PayPal or Stripe link, they charge their own fee, as they would anywhere. Invoicor adds 0%.",
  },
];

/** "You did the work. You keep the money." (ROADMAP chunk 20d2, BRAND.md pillar: Honest) */
export function KeepYourMoney() {
  return (
    <Section tone="brand" aria-labelledby="keep-title">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>0% of your payments. Ever.</Eyebrow>
          <Heading id="keep-title">
            You did the work. <Gradient>You keep the money.</Gradient>
          </Heading>
          <Text size="lead" className="mt-5">
            Many invoicing apps take a percentage of every card payment, on top of their
            subscription. We think that&apos;s wrong. Invoicor never touches your money.
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
        </div>
        <div
          className="reveal mx-auto w-full max-w-md"
          style={{ "--d": "0.1s" } as React.CSSProperties}
        >
          <FeeCalculator />
        </div>
      </Container>
    </Section>
  );
}
