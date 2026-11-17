import { FileText, Send, UserRound } from "lucide-react";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";

const STEPS = [
  {
    icon: UserRound,
    title: "Pick your client",
    text: "Choose a saved client or add a new one. Name, address and email fill in for you.",
  },
  {
    icon: FileText,
    title: "Add your items",
    text: "Pick saved products or type a line. Tax, discount and totals are calculated as you go.",
  },
  {
    icon: Send,
    title: "Send the PDF",
    text: "Share it by email, WhatsApp or AirDrop, then mark it paid when the money arrives.",
  },
];

/** Three steps, numbered like invoice lines (ROADMAP chunk 19e). */
export function HowItWorks() {
  return (
    <Section tone="tint" aria-labelledby="how-title">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <Heading id="how-title">Three taps. Then it&apos;s sent.</Heading>
          <Text size="lead" className="mt-4">
            Set up your business once. After that, every invoice is a few taps.
          </Text>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="reveal bg-surface ring-line shadow-soft relative rounded-2xl p-7 ring-1"
              style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="bg-brand-50 text-brand-700 grid size-12 place-items-center rounded-xl">
                  <step.icon aria-hidden className="size-6" strokeWidth={1.75} />
                </span>
                <span className="font-heading text-h2 text-stone-200 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading text-h4 text-ink">{step.title}</h3>
              <p className="text-muted mt-2">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
