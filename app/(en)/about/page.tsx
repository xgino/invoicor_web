import { HandCoins, MessageSquareText, ServerCog, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CompanyDetails } from "@/components/sections/content/company";
import { ClosingCta, PageHeader } from "@/components/sections/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonClass } from "@/components/ui/Button";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";
import { COMPANY, absoluteUrl } from "@/lib/config";
import { organizationLd } from "@/lib/jsonld";
import { FREE_INVOICES } from "@/lib/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Invoicor: the Honest Invoice App | Invoicor",
  description:
    "Who makes Invoicor and what it stands for: a free start, no fees on your money, real people reading every message, and your data on servers in Germany.",
  path: "/about",
});

/** Every point is in BRAND.md §10 (the fact sheet); re-check it when the app changes. */
const PRINCIPLES = [
  {
    icon: Sparkles,
    title: "Honestly free to start",
    text: `${FREE_INVOICES} real invoices in the app, without a watermark and without a subscription. You see what you get before you pay anything.`,
  },
  {
    icon: HandCoins,
    title: "We never touch your money",
    text: "Invoicor isn't a payment processor. Your client pays you directly, through your bank or a payment link you add yourself, and we take no cut of any payment.",
  },
  {
    icon: MessageSquareText,
    title: "Real people read every message",
    text: "Feedback from the app and email reach the team, not a bot. Replies can take a few days, and we'd rather say so than promise an hour we can't keep.",
  },
  {
    icon: ServerCog,
    title: "Your data stays in the EU",
    text: "Accounts and invoices are stored on servers in Germany and handled under the GDPR. Delete your account and your data is removed from our servers within 30 days, except what the law requires us to keep.",
  },
];

const DOES = [
  "Make a professional invoice on your iPhone in seconds and share the PDF by email, iMessage or WhatsApp",
  "31 invoice templates and your own logo",
  "Invoices in 11 languages and 38 currencies, for clients abroad",
  "Saved clients and products, and one tap to duplicate last month's invoice",
  "A free invoice generator on this website, no account needed",
];

const DOESNT = [
  "Estimates or quotes",
  "Recurring or scheduled invoices, or reminders to your clients",
  "Payment processing (you add your own payment link)",
  "Work offline: it needs an internet connection",
  "Android yet (it's coming: see the Android page)",
];

function aboutLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absoluteUrl("/about"),
    name: "About Invoicor",
    mainEntity: organizationLd(),
  };
}

/** About page (P1, E-E-A-T): who's behind Invoicor, facts only. Company details: lib/config.ts. */
export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutLd()} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        eyebrow="About Invoicor"
        title="The honest invoice app"
        subtitle="Invoicor helps freelancers and small businesses send a professional invoice in seconds, in their client's language and currency, with no hidden paywall and no fees on their money."
      />

      <Section aria-labelledby="why-title">
        <Container narrow className="space-y-5 text-[1.0625rem] leading-relaxed">
          <Eyebrow>Why it exists</Eyebrow>
          <Heading id="why-title">Invoicing shouldn&apos;t eat your evening</Heading>
          {COMPANY.story ? (
            <Text>{COMPANY.story}</Text>
          ) : (
            <Text muted>
              Most people who send invoices are plumbers, cleaners, designers and consultants, not
              accountants. They finish a job, the client asks for the invoice, and the tools on
              offer are either a blank document or accounting software built for a finance team.
              Invoicor is the middle: the fields a client&apos;s accounts team expects, filled in
              from what you saved last time, and a clean PDF you send before you leave.
            </Text>
          )}
          <Text muted>
            The same complaints come up again and again in reviews of invoicing apps: a
            &quot;free&quot; plan that turns out to be a trial, no human to talk to, and payment
            processing that holds your money. Invoicor is built to avoid all three.
          </Text>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="principles-title">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What we stand for</Eyebrow>
            <Heading id="principles-title">Four promises we can keep</Heading>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <li key={p.title} className="bg-surface ring-line rounded-2xl p-7 ring-1">
                <p.icon aria-hidden className="text-brand-600 size-6" strokeWidth={1.75} />
                <h3 className="font-heading text-h4 text-ink mt-4">{p.title}</h3>
                <p className="text-muted mt-2 leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="what-title">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What it does, and doesn&apos;t</Eyebrow>
            <Heading id="what-title">So you know before you download</Heading>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="bg-surface ring-line rounded-2xl p-7 ring-1">
              <h3 className="font-heading text-h4 text-ink">Invoicor does</h3>
              <ul className="text-muted mt-4 list-disc space-y-2 pl-5">
                {DOES.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="bg-surface ring-line rounded-2xl p-7 ring-1">
              <h3 className="font-heading text-h4 text-ink">Invoicor doesn&apos;t (yet)</h3>
              <ul className="text-muted mt-4 list-disc space-y-2 pl-5">
                {DOESNT.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-small text-subtle mt-6 text-center">
            The app&apos;s own screens are in English; the invoices come in 11 languages.
          </p>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="who-title">
        <Container narrow>
          <Eyebrow>Who&apos;s behind it</Eyebrow>
          <Heading id="who-title">Run from {COMPANY.country}</Heading>
          <Text muted className="mt-4 mb-8">
            Invoicor is a business operated from {COMPANY.country}. These are its details; the terms
            and the privacy policy say what applies when you use the app.
          </Text>
          <CompanyDetails />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className={buttonClass({ size: "md" })}>
              Contact us
            </Link>
            <Link href="/help" className={buttonClass({ size: "md", variant: "secondary" })}>
              Help &amp; FAQ
            </Link>
          </div>
        </Container>
      </Section>

      <ClosingCta
        title="Send your next invoice"
        gradient="in seconds."
        text={`${FREE_INVOICES} free invoices, no watermark, no subscription needed.`}
        campaign="about-footer"
      />
    </>
  );
}
