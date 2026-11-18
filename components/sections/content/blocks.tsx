import { formatUpdated } from "@/lib/content";
import { CircleCheck, CircleX, Info, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { AndroidButton } from "@/components/ui/AndroidButton";
import { AppStoreBadge, Breadcrumbs } from "@/components/ui/content";
import { QrDownload } from "@/components/ui/QrDownload";
import { cx } from "@/components/ui/cx";
import { Container, Eyebrow, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { FREE_INVOICES } from "@/lib/pricing";
import { Toc, type TocSection } from "./Toc";

/**
 * Building blocks for the SEO pages (templates, industries, compare; ROADMAP chunks 21–23).
 * One design for all three types, built on the UI kit. Light only.
 */

/** Page header: breadcrumbs (with JSON-LD), eyebrow, the page's one H1, subtitle, actions and an
 * optional visual on the right. */
export function PageHeader({
  crumbs,
  eyebrow,
  title,
  subtitle,
  actions,
  aside,
  updated,
}: {
  crumbs: Array<{ name: string; href?: string }>;
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  /** ISO date of the last content update, shown as "Updated November 18, 2026". */
  updated?: string;
}) {
  return (
    <header className="bg-surface relative isolate overflow-hidden">
      <div aria-hidden className="bg-brand-glow absolute inset-x-0 top-0 -z-10 h-[36rem]" />
      <Container className="pt-nav">
        <Breadcrumbs items={crumbs} className="pt-8" />
        <div
          className={cx(
            "grid items-center gap-12 pt-10 pb-16 lg:pb-24",
            !!aside && "lg:grid-cols-[1.1fr_1fr] lg:gap-16",
          )}
        >
          <div className="anim-up">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="font-heading text-h1 text-ink text-balance">{title}</h1>
            {subtitle && (
              <Text size="lead" className="mt-5 max-w-2xl">
                {subtitle}
              </Text>
            )}
            {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
            {updated && (
              <p className="text-small text-subtle mt-5">
                Updated <time dateTime={updated}>{formatUpdated(updated)}</time>
              </p>
            )}
          </div>
          {aside && <div className="anim-phone mx-auto w-full max-w-md">{aside}</div>}
        </div>
      </Container>
    </header>
  );
}

/** Article body with a sticky "On this page" list beside it on large screens. */
export function ArticleLayout({ toc, children }: { toc: TocSection[]; children: ReactNode }) {
  return (
    <Container className="grid gap-12 pb-8 lg:grid-cols-[13rem_1fr] lg:gap-16">
      <Toc sections={toc} />
      <div className="max-w-3xl min-w-0">{children}</div>
    </Container>
  );
}

/** One titled section of an article. `id` is the TOC anchor. */
export function Block({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-line scroll-mt-24 border-t py-14"
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading id={`${id}-title`} size="h2" className="max-w-2xl">
        {title}
      </Heading>
      {intro && <Text className="text-muted mt-4">{intro}</Text>}
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}

/** Cards with a check (things to include) or a cross (mistakes). */
export function PointList({
  items,
  tone = "check",
  numbered = false,
}: {
  items: Array<{ title: string; text?: string }>;
  tone?: "check" | "cross";
  numbered?: boolean;
}) {
  const Icon = tone === "check" ? CircleCheck : CircleX;
  return (
    <ul className={cx("grid gap-4", tone === "check" && "sm:grid-cols-2")}>
      {items.map((item, i) => (
        <li key={item.title} className="bg-surface ring-line shadow-soft rounded-2xl p-6 ring-1">
          <h3 className="text-ink flex items-start gap-3 font-bold">
            {numbered ? (
              <span className="bg-brand-50 text-brand-700 grid size-7 shrink-0 place-items-center rounded-lg text-[0.8125rem] tabular-nums">
                {i + 1}
              </span>
            ) : (
              <Icon
                aria-hidden
                className={cx(
                  "mt-0.5 size-5 shrink-0",
                  tone === "check" ? "text-brand-600" : "text-danger",
                )}
              />
            )}
            <span className="pt-0.5">{item.title}</span>
          </h3>
          {item.text && (
            <p className="text-muted mt-2 pl-10 text-[0.9375rem] leading-relaxed">{item.text}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Highlighted note: a pro tip, important info, or a disclaimer. */
export function Callout({
  tone = "tip",
  title,
  children,
}: {
  tone?: "tip" | "info";
  title: ReactNode;
  children: ReactNode;
}) {
  const Icon = tone === "tip" ? Lightbulb : Info;
  return (
    <div
      className={cx(
        "flex gap-4 rounded-2xl p-6 ring-1",
        tone === "tip" ? "bg-brand-50 ring-brand-200" : "bg-tint ring-line",
      )}
    >
      <span
        className={cx(
          "grid size-10 shrink-0 place-items-center rounded-xl",
          tone === "tip" ? "bg-surface text-brand-700" : "bg-surface text-muted",
        )}
      >
        <Icon aria-hidden className="size-5" />
      </span>
      <div>
        <p className="text-eyebrow text-brand-800 uppercase">{title}</p>
        <div className="text-ink mt-1.5 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/** Notes with a brand rule on the left (industry notes, tax notes). */
export function NoteList({ items }: { items: Array<{ title: string; text: string }> }) {
  return (
    <ul className="space-y-4">
      {items.map((n) => (
        <li key={n.title} className="border-brand-500 bg-tint rounded-r-2xl border-l-4 p-6">
          <h3 className="text-ink font-bold">{n.title}</h3>
          <p className="text-muted mt-2 text-[0.9375rem] leading-relaxed">{n.text}</p>
        </li>
      ))}
    </ul>
  );
}

/** FAQ block: visible questions + FAQPage JSON-LD from the same list. */
export function FaqBlock({
  id = "faqs",
  title,
  faqs,
}: {
  id?: string;
  title: ReactNode;
  faqs: Array<{ question: string; answer: string }>;
}) {
  if (faqs.length === 0) return null;
  return (
    <Block id={id} eyebrow="FAQ" title={title}>
      <Accordion items={faqs} structuredData />
    </Block>
  );
}

/** Closing call to action with the brand glow. */
export function ClosingCta({
  title,
  gradient,
  text,
  campaign,
  action,
}: {
  title: string;
  /** The one gradient word or phrase, appended to the title. */
  gradient?: string;
  text: string;
  campaign: string;
  /** Replaces the App Store badge and the free-plan note (e.g. the affiliate sign-up). */
  action?: ReactNode;
}) {
  return (
    <Section tone="glow" className="text-center" data-hide-sticky>
      <Container narrow className="reveal">
        <Heading size="h1">
          {title} {gradient && <Gradient>{gradient}</Gradient>}
        </Heading>
        <Text size="lead" className="mx-auto mt-5 max-w-lg">
          {text}
        </Text>
        {action ? (
          <div className="mt-8 flex justify-center">{action}</div>
        ) : (
          <>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <AppStoreBadge campaign={campaign} />
              <AndroidButton campaign={campaign} />
              <QrDownload campaign={`qr_${campaign}`} />
            </div>
            <p className="text-small text-subtle mt-4">
              {FREE_INVOICES} invoices free · no watermark · no subscription needed
            </p>
          </>
        )}
      </Container>
    </Section>
  );
}
