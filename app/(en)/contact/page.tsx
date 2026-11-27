import { LifeBuoy, Mail, Smartphone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CompanyDetails } from "@/components/sections/content/company";
import { ClosingCta, PageHeader } from "@/components/sections/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";
import { CONTACT_EMAIL, absoluteUrl } from "@/lib/config";
import { organizationLd } from "@/lib/jsonld";
import { FREE_INVOICES } from "@/lib/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Invoicor: Feedback, Questions, Bugs | Invoicor",
  description:
    "Reach the Invoicor team from the app (Settings, Send Feedback) or by email. A person reads every message; replies can take a few days.",
  path: "/contact",
});

/** What the app's Settings → Support screens do (invoicor_ios, checked 2026-11-27). */
const WAYS = [
  {
    icon: Smartphone,
    title: "In the app",
    text: (
      <>
        Go to <strong className="text-ink">Settings → Support → Send Feedback</strong> and choose a
        bug, a feature request or a question. Your iPhone model and app version are added for you,
        and <strong className="text-ink">My Submissions</strong> shows where each message is: new,
        seen, in progress or resolved.
      </>
    ),
  },
  {
    icon: Mail,
    title: "By email",
    text: (
      <>
        Write to{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-brand-700 font-medium underline-offset-4 hover:underline"
          data-track="contact_click"
          data-track-link="email"
        >
          {CONTACT_EMAIL}
        </a>{" "}
        for anything: when you can&apos;t sign in, for privacy requests, partnerships or press.
      </>
    ),
  },
  {
    icon: LifeBuoy,
    title: "Help & FAQ",
    text: (
      <>
        Most questions about templates, currencies, taxes and plans are answered in the{" "}
        <Link
          href="/help"
          className="text-brand-700 font-medium underline-offset-4 hover:underline"
        >
          help center
        </Link>
        , any time.
      </>
    ),
  },
];

const TOPICS = [
  {
    title: "A bug or a broken PDF",
    text: "Say what you tapped, what you expected and what happened, and the invoice number if it's about one invoice. A screenshot helps (attach it to an email).",
  },
  {
    title: "Subscriptions, refunds and cancelling",
    text: "Plans are bought through Apple, so Apple handles payments and refunds. Cancel any time in your iPhone's Settings, under your name, then Subscriptions. We're happy to help if something looks wrong.",
  },
  {
    title: "Your data and privacy",
    text: "Ask for a copy of your data or its deletion by email; you can also delete your account in the app. The privacy policy explains your rights under the GDPR.",
  },
  {
    title: "Affiliates and partners",
    text: "The affiliate program has its own page with how it works and how to sign up. For other partnerships, email us.",
  },
];

function contactLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl("/contact"),
    name: "Contact Invoicor",
    mainEntity: {
      ...organizationLd(),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
      },
    },
  };
}

/** Contact page (P1): the real ways to reach the team, no promises the team can't keep. */
export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactLd()} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
        eyebrow="Contact"
        title="Talk to the people who make Invoicor"
        subtitle="Questions, bugs or ideas: a person on the team reads every message. Replies can take a few days, so for a quick answer, the help center may be faster."
      />

      <Section aria-labelledby="ways-title" className="pt-0!">
        <Container>
          <h2 id="ways-title" className="sr-only">
            Ways to reach us
          </h2>
          <ul className="grid gap-5 md:grid-cols-3">
            {WAYS.map((w) => (
              <li key={w.title} className="bg-surface ring-line shadow-soft rounded-2xl p-7 ring-1">
                <span className="bg-brand-50 text-brand-700 grid size-11 place-items-center rounded-xl">
                  <w.icon aria-hidden className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-heading text-h4 text-ink mt-5">{w.title}</h3>
                <p className="text-muted mt-2 leading-relaxed">{w.text}</p>
              </li>
            ))}
          </ul>
          <p className="text-small text-subtle mt-6">
            There&apos;s no phone line or live chat: writing lets us look into your account and
            answer properly.
          </p>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="topics-title">
        <Container narrow>
          <Eyebrow>Before you write</Eyebrow>
          <Heading id="topics-title">Get the right answer the first time</Heading>
          <dl className="mt-8 space-y-6">
            {TOPICS.map((t) => (
              <div key={t.title}>
                <dt className="font-heading text-h4 text-ink">{t.title}</dt>
                <dd className="text-muted mt-1.5 leading-relaxed">{t.text}</dd>
              </div>
            ))}
          </dl>
          <Text muted className="mt-8">
            Related:{" "}
            <Link href="/privacy" className="text-brand-700 underline-offset-4 hover:underline">
              privacy policy
            </Link>
            ,{" "}
            <Link href="/terms" className="text-brand-700 underline-offset-4 hover:underline">
              terms
            </Link>
            ,{" "}
            <Link href="/affiliate" className="text-brand-700 underline-offset-4 hover:underline">
              affiliate program
            </Link>
            ,{" "}
            <Link href="/about" className="text-brand-700 underline-offset-4 hover:underline">
              about Invoicor
            </Link>
            .
          </Text>
        </Container>
      </Section>

      <Section aria-labelledby="company-title">
        <Container narrow>
          <Eyebrow>Business details</Eyebrow>
          <Heading id="company-title">Who you&apos;re writing to</Heading>
          <div className="mt-8">
            <CompanyDetails />
          </div>
        </Container>
      </Section>

      <ClosingCta
        title="Haven't tried it yet?"
        gradient="Start free."
        text={`${FREE_INVOICES} free invoices, no watermark, no subscription needed.`}
        campaign="contact-footer"
      />
    </>
  );
}
