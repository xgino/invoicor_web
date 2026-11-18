import { ArrowRight, Clock, FileText, Percent, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ClosingCta, PageHeader } from "@/components/sections/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/layout";
import { webAppLd } from "@/lib/jsonld";
import { TOOLS, type Tool } from "@/lib/tools/registry";

export const TOOL_ICONS = { FileText, Percent, Clock, TrendingUp } satisfies Record<
  Tool["icon"],
  unknown
>;

/**
 * One free tool page (ROADMAP T1): the tool first, then how it works in plain words, an FAQ
 * (also FAQPage JSON-LD), and the other tools. Same shape for every tool.
 */
export function ToolPage({
  href,
  title,
  subtitle,
  tool,
  sections,
  faqs,
}: {
  href: string;
  title: string;
  subtitle: string;
  tool: ReactNode;
  sections: Array<{ title: string; body: ReactNode }>;
  faqs: Array<{ question: string; answer: string }>;
}) {
  const me = TOOLS.find((t) => t.href === href)!;
  const others = TOOLS.filter((t) => t.href !== href);
  return (
    <>
      <JsonLd data={webAppLd({ name: `Invoicor ${me.name}`, path: href, description: me.short })} />
      <PageHeader
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Free tools", href: "/tools" },
          { name: me.name },
        ]}
        eyebrow="Free tool · no signup"
        title={title}
        subtitle={subtitle}
      />
      <Container className="-mt-6 pb-16">
        <div className="mx-auto max-w-3xl">{tool}</div>
      </Container>

      <Section tone="tint" aria-labelledby="how-title">
        <Container narrow>
          <Eyebrow>How it works</Eyebrow>
          <Heading id="how-title">The math, in plain words</Heading>
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h3 className="font-heading text-h4 text-ink">{s.title}</h3>
                <div className="text-muted mt-2 space-y-3 leading-relaxed">{s.body}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="faq-title">
        <Container narrow>
          <Eyebrow>FAQ</Eyebrow>
          <Heading id="faq-title">Questions about this tool</Heading>
          <div className="mt-8">
            <Accordion items={faqs} structuredData />
          </div>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="more-tools">
        <Container>
          <Heading id="more-tools" size="h3">
            More free tools
          </Heading>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((t) => {
              const Icon = TOOL_ICONS[t.icon];
              return (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="group bg-surface ring-line hover:ring-brand-200 focus-visible:focus-ring flex h-full flex-col rounded-2xl p-5 ring-1 transition"
                  >
                    <span className="bg-brand-50 text-brand-700 grid size-10 place-items-center rounded-xl">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span className="text-ink mt-4 flex items-center gap-1.5 font-bold">
                      {t.name}
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition group-hover:translate-x-0.5"
                      />
                    </span>
                    <span className="text-small text-muted mt-1">{t.short}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <ClosingCta
        title="Invoicing every week?"
        gradient="Do it in the app."
        text="Saved clients and items, every invoice with its status, and a clean PDF from your iPhone. 3 invoices free."
        campaign={`tool-${href.split("/").pop()}`}
      />
    </>
  );
}
