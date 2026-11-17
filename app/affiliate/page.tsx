import {
  BarChart3,
  Banknote,
  Megaphone,
  Moon,
  Repeat,
  Smartphone,
  Target,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
import type { Metadata } from "next";
import { AffiliateCalculator } from "@/components/affiliate/AffiliateCalculator";
import { AFFILIATE } from "@/components/affiliate/config";
import { ClosingCta, PageHeader } from "@/components/sections/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { buttonClass } from "@/components/ui/Button";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";
import { AFFILIATE_SIGNUP_URL } from "@/lib/config";
import { faqLd } from "@/lib/jsonld";
import { FREE_INVOICES, formatPrice } from "@/lib/pricing";
import { buildMetadata } from "@/lib/seo";

const { commission, plans, payoutDay, payoutMethods, minimumPayout } = AFFILIATE;
const pro = plans[plans.length - 1]!;
const proMonthly = formatPrice(Math.round(pro.price * commission) / 100);
const proYearly = formatPrice(Math.round(pro.price * commission * 12) / 100);

export const metadata: Metadata = buildMetadata({
  title: `Affiliate Program | Invoicor - Earn ${commission}% Recurring`,
  description: `Join the Invoicor Affiliate Program. Earn ${commission}% lifetime recurring commission promoting a fast, honest invoice app for freelancers. Free to join, auto-approved.`,
  path: "/affiliate",
});

const FAQS = [
  {
    question: "What does recurring commission mean?",
    answer: `You get paid every month your referral stays subscribed. Refer one Pro user (${formatPrice(pro.price)}/mo) and earn ${proMonthly} every month. After 12 months, that one referral earned you ${proYearly}. It keeps going as long as they stay.`,
  },
  {
    question: "How is commission calculated?",
    answer: `You earn ${commission}% of the App Store subscription price excluding applicable taxes. Apple processes the payment, we track the attribution, and you get paid monthly.`,
  },
  {
    question: "How and when do I get paid?",
    answer: `Commissions are paid on the ${payoutDay}th of each month via ${payoutMethods}. Minimum payout is ${minimumPayout}. Balances below the threshold roll over.`,
  },
  {
    question: "What if someone cancels or refunds?",
    answer:
      "If a subscriber cancels, your recurring commission stops from that point. Refunds reverse the commission for that period. You only earn on active, paying subscribers.",
  },
  {
    question: "Can I run paid ads?",
    answer:
      'Yes. Any channel works. The only rule is no bidding on "Invoicor" as a keyword in search ads (Google, Bing, Apple Search Ads).',
  },
];

const HIGHLIGHTS = [
  { icon: Moon, title: "Earn while you sleep", text: "Commissions run 24/7" },
  { icon: Repeat, title: "Paid every month", text: "Not a one-time payout" },
  { icon: TrendingUp, title: "No earning cap", text: "Refer 1 or 1,000" },
  { icon: Smartphone, title: "Easy sell", text: `${FREE_INVOICES} free invoices, no card` },
];

const STEPS = [
  {
    icon: UserPlus,
    title: "Sign up free",
    text: "Create your affiliate account in a minute. No approval wait: you get your tracking link straight away.",
  },
  {
    icon: Megaphone,
    title: "Share with your audience",
    text: "Blog post, YouTube video, newsletter, social post. Your link works everywhere.",
  },
  {
    icon: Wallet,
    title: "Get paid monthly",
    text: `When someone subscribes through your link, you earn ${commission}% of their plan, every month they stay.`,
  },
];

const REASONS = [
  {
    icon: Banknote,
    title: `${commission}% lifetime recurring`,
    text: `A single Pro subscriber at ${formatPrice(pro.price)}/month pays you ${proMonthly} every month: ${proYearly} a year from one referral.`,
  },
  {
    icon: BarChart3,
    title: "Real-time dashboard",
    text: "Track clicks, signups and earnings live, and see which content drives results.",
  },
  {
    icon: Wallet,
    title: "Monthly payouts",
    text: `Paid on the ${payoutDay}th of each month via ${payoutMethods}. Minimum ${minimumPayout}.`,
  },
  {
    icon: Target,
    title: "Easy to recommend",
    text: `${FREE_INVOICES} free invoices, no watermark, no card needed. Your audience tries it risk-free; you earn when they upgrade.`,
  },
  {
    icon: Users,
    title: "A huge audience",
    text: "Every freelancer, contractor and small business owner sends invoices, every month.",
  },
];

const AUDIENCES = [
  "Freelance YouTubers",
  "Business bloggers",
  "Side hustle creators",
  "Bookkeeping creators",
  "Self-employed coaches",
  "Small business podcasters",
  "Finance content creators",
  "Contractor community leaders",
  "Digital nomad creators",
  "Web designers",
  "VA agencies",
  "Accountants",
];

function SignupButton({ size = "lg" }: { size?: "md" | "lg" }) {
  return (
    <a
      href={AFFILIATE_SIGNUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-track="cta_click"
      data-track-section="affiliate"
      className={buttonClass({ size })}
    >
      Start earning today
    </a>
  );
}

/** Affiliate program (ROADMAP chunk 24c). Prices from content/pricing.json. */
export default function AffiliatePage() {
  return (
    <>
      <JsonLd data={faqLd(FAQS)} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Affiliate program" }]}
        eyebrow="Affiliate program"
        title="Your audience sends invoices. Get paid when they do."
        subtitle={`Recommend Invoicor to freelancers and small business owners. Earn ${commission}% of every subscription, every month, for as long as they stay.`}
        actions={
          <>
            <SignupButton />
            <p className="text-small text-subtle w-full">
              Free to join. Auto-approved. Takes a minute.
            </p>
          </>
        }
        aside={<AffiliateCalculator />}
      />

      <Section tone="tint" className="py-12!">
        <Container>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <li key={h.title} className="bg-surface ring-line rounded-2xl p-5 text-center ring-1">
                <h.icon aria-hidden className="text-brand-600 mx-auto size-6" strokeWidth={1.75} />
                <p className="text-ink mt-3 font-bold">{h.title}</p>
                <p className="text-small text-muted">{h.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="how-title">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How it works</Eyebrow>
            <Heading id="how-title">Three steps. Then it runs by itself.</Heading>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-surface ring-line shadow-soft rounded-2xl p-7 ring-1">
                <div className="flex items-center justify-between">
                  <span className="bg-brand-50 text-brand-700 grid size-11 place-items-center rounded-xl">
                    <s.icon aria-hidden className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-small text-subtle font-bold tabular-nums">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-h4 text-ink mt-5">{s.title}</h3>
                <p className="text-muted mt-2">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="why-title">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Why promote Invoicor</Eyebrow>
            <Heading id="why-title">Most programs pay once. We pay every month.</Heading>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => (
              <li key={r.title} className="bg-surface ring-line rounded-2xl p-6 ring-1">
                <r.icon aria-hidden className="text-brand-600 size-6" strokeWidth={1.75} />
                <h3 className="text-ink mt-4 font-bold">{r.title}</h3>
                <p className="text-small text-muted mt-1.5 leading-relaxed">{r.text}</p>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <h3 className="font-heading text-h3 text-ink">Perfect for</h3>
            <Text muted className="mt-2">
              If your audience includes anyone who sends invoices, Invoicor is a natural fit.
            </Text>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {AUDIENCES.map((a) => (
                <li
                  key={a}
                  className="bg-surface ring-line text-small text-ink rounded-full px-4 py-1.5 font-medium ring-1"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="faq-title">
        <Container narrow>
          <div className="mb-10 text-center">
            <Eyebrow>FAQ</Eyebrow>
            <Heading id="faq-title">Common questions</Heading>
          </div>
          <Accordion items={FAQS} />
          <div className="mt-10 flex justify-center">
            <SignupButton size="md" />
          </div>
        </Container>
      </Section>

      <ClosingCta
        title="Your audience invoices every week."
        gradient="Earn from it."
        text={`Join the Invoicor affiliate program: ${commission}% recurring, no cap, no expiry.`}
        campaign="affiliate-footer"
        action={<SignupButton />}
      />
    </>
  );
}
