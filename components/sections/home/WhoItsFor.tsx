import { ArrowRight, Briefcase, Check, Globe2, Wrench } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Container, Eyebrow, Gradient, Heading, Section, Text } from "@/components/ui/layout";

/**
 * Who Invoicor is for (ROADMAP P14): the audience profiles from BRAND.md §2, so visitors can picture
 * themselves. Each card: the moment they reach for the app, what they get, and links to their
 * industry pages (internal links for SEO). Only true claims (BRAND.md §10).
 */
const PEOPLE = [
  {
    icon: Wrench,
    who: "Tradespeople",
    examples: "Plumbers, electricians, cleaners, landscapers",
    moment: "The job is done and the client is standing right there.",
    gain: "Send a professional invoice from the driveway, before you leave. No evening paperwork.",
    scene: ["Job done", "Invoice sent"],
    links: [
      { href: "/industries/plumbers-hvac", label: "Plumbers & HVAC" },
      { href: "/industries/electricians", label: "Electricians" },
      { href: "/industries/landscaping-lawn-care", label: "Landscaping" },
    ],
  },
  {
    icon: Globe2,
    who: "Freelancers",
    examples: "Designers, photographers, consultants, coaches",
    moment: "The project is delivered, and the client is in another country.",
    gain: "Invoice them in their language and currency, with a layout that looks as good as your work.",
    scene: ["Project delivered", "Paid in EUR"],
    links: [
      { href: "/industries/freelance-designers", label: "Designers" },
      { href: "/industries/photographers-videographers", label: "Photographers" },
      { href: "/industries/consultants-coaches", label: "Consultants" },
    ],
  },
  {
    icon: Briefcase,
    who: "Small businesses",
    examples: "Studios, contractors, owners of more than one business",
    moment: "End of the month: several clients, maybe two businesses.",
    gain: "Up to 3 business profiles on Pro, each with its own logo and details. Duplicate last month's invoices in a tap.",
    scene: ["Month end", "All sent"],
    links: [
      { href: "/industries/general-contractors", label: "Contractors" },
      { href: "/industries/cleaning-services", label: "Cleaning" },
      { href: "/industries/auto-detailing-mechanics", label: "Auto & mobile" },
    ],
  },
];

const NOT_ACCOUNTING = [
  "No ledgers, no setup wizard",
  "Send the PDFs to your accountant",
  "Works on your iPhone, wherever the job is",
];

export function WhoItsFor() {
  return (
    <Section aria-labelledby="who-title">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>Who it&apos;s for</Eyebrow>
          <Heading id="who-title">
            Built for people who&apos;d rather <Gradient>be working.</Gradient>
          </Heading>
          <Text size="lead" className="mt-4">
            If you send invoices between jobs, from your phone, Invoicor was made for you.
          </Text>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {PEOPLE.map((p, i) => (
            <li key={p.who} className="reveal" style={{ "--d": `${i * 0.1}s` } as CSSProperties}>
              <article className="promise-card bg-surface ring-line shadow-card relative flex h-full flex-col rounded-3xl p-7 ring-1 transition duration-250">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-gradient shadow-brand grid size-11 shrink-0 place-items-center rounded-2xl text-white">
                    <p.icon aria-hidden className="size-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-heading text-h4 text-ink">{p.who}</h3>
                    <p className="text-small text-subtle">{p.examples}</p>
                  </div>
                </div>

                {/* the moment, as a tiny before → after scene */}
                <div className="bg-tint ring-line mt-6 flex items-center gap-2 rounded-xl p-3 ring-1">
                  <span className="text-small text-muted rounded-lg px-2 py-1 font-medium">
                    {p.scene[0]}
                  </span>
                  <ArrowRight aria-hidden className="text-brand-500 size-4 shrink-0" />
                  <span className="text-small bg-brand-50 text-brand-800 ring-brand-200 flex items-center gap-1 rounded-lg px-2 py-1 font-bold ring-1">
                    <Check aria-hidden className="size-3.5" />
                    {p.scene[1]}
                  </span>
                </div>

                <p className="text-ink mt-5 font-medium">{p.moment}</p>
                <p className="text-muted mt-2 grow leading-relaxed">{p.gain}</p>

                <ul className="border-line mt-6 flex flex-wrap gap-2 border-t pt-5">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-small text-brand-700 hover:bg-brand-50 focus-visible:focus-ring ring-brand-200 rounded-full px-3 py-1 font-bold ring-1 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        <div className="reveal bg-brand-50 ring-brand-200 mt-10 flex flex-col items-center gap-4 rounded-2xl px-6 py-5 ring-1 md:flex-row md:justify-between">
          <p className="font-heading text-h4 text-ink shrink-0 text-center md:text-left lg:whitespace-nowrap">
            Not accounting software. <span className="text-brand-700">Just invoices.</span>
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {NOT_ACCOUNTING.map((t) => (
              <li key={t} className="text-small text-ink flex items-center gap-1.5 font-medium">
                <Check aria-hidden className="text-brand-600 size-4" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
