import { BadgeCheck, Banknote, MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";
import { cx } from "@/components/ui/cx";
import { DrawnCircle } from "@/components/ui/doodles";
import { Container, Eyebrow, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { FREE_INVOICES } from "@/lib/pricing";

/**
 * Promises built on competitors' most common one-star complaints (BRAND.md §1), made to stand out
 * (ROADMAP P4): one big fact per card, a gradient icon tile, a proof line, the middle card raised.
 * Only true claims (BRAND.md §10). Real App Store reviews join here once there are enough (chunk 50).
 */
const PROMISES = [
  {
    icon: BadgeCheck,
    fact: "$0",
    factLabel: `for your first ${FREE_INVOICES} invoices`,
    title: "Free means free",
    text: "No watermark and no subscription. No trial that turns into a paywall halfway through your first invoice.",
    proof: "Upgrade only when you send more",
  },
  {
    icon: Banknote,
    fact: "0%",
    factLabel: "of your payments, ever",
    title: "We never touch your money",
    text: "Invoicor isn't a payment gateway, so it can't hold, freeze or take a cut. Your client pays you directly, through your own link.",
    proof: "One flat subscription, nothing per invoice",
    featured: true,
  },
  {
    icon: MessageCircle,
    fact: "100%",
    factLabel: "of messages read by people",
    title: "Real people, not bots",
    text: "Feedback from the app and email go to the people who build Invoicor. Replies can take a few days; nothing gets lost in a bot.",
    proof: "No ticket robots, no canned answers",
  },
];

export function Promises() {
  return (
    <Section aria-labelledby="promises-title" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="bg-brand-glow glow-drift absolute inset-x-0 top-1/3 -z-10 h-[34rem] opacity-80"
      />
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>Our promises</Eyebrow>
          <Heading id="promises-title">
            No tricks. <Gradient>Just invoices.</Gradient>
          </Heading>
          <Text size="lead" className="mt-4">
            What other invoice apps get the worst reviews for, we promise not to do.
          </Text>
        </div>
        <ul className="mt-14 grid items-center gap-6 md:grid-cols-3">
          {PROMISES.map((p, i) => (
            <li
              key={p.title}
              className="reveal h-full"
              style={{ "--d": `${i * 0.12}s` } as CSSProperties}
            >
              <div
                className={cx(
                  "group promise-card bg-surface relative flex h-full flex-col rounded-3xl p-8 transition duration-250",
                  p.featured
                    ? "shadow-float ring-brand-200 ring-2 md:-my-4 md:h-[calc(100%+2rem)] md:py-12"
                    : "shadow-card ring-line ring-1",
                )}
              >
                {p.featured && (
                  <span className="bg-brand-cta absolute -top-3 left-8 rounded-full px-3 py-1 text-[0.75rem] font-bold text-white">
                    Our core promise
                  </span>
                )}
                <span className="bg-brand-gradient shadow-brand grid size-12 shrink-0 place-items-center rounded-2xl text-white">
                  <p.icon aria-hidden className="size-6" strokeWidth={2} />
                </span>
                <p className="mt-6 flex shrink-0 flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-heading text-ink relative text-[2.75rem] leading-none font-extrabold tracking-tight tabular-nums">
                    {p.fact}
                    {p.featured && (
                      <DrawnCircle className="absolute -top-3 -left-4 h-[calc(100%+1.5rem)] w-[calc(100%+2rem)]" />
                    )}
                  </span>
                  <span className="text-small text-muted font-medium">{p.factLabel}</span>
                </p>
                <h3 className="font-heading text-h3 text-ink mt-4">{p.title}</h3>
                <p className="text-muted mt-2 grow leading-relaxed">{p.text}</p>
                <p className="border-line text-small text-brand-800 mt-6 flex items-center gap-2 border-t pt-4 font-bold">
                  <span aria-hidden className="bg-brand-500 size-1.5 rounded-full" />
                  {p.proof}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
