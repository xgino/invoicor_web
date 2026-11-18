import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/content";
import { Container } from "@/components/ui/layout";

/**
 * Long-form layout for Terms and Privacy (ROADMAP chunk 24d): light, reading width, numbered
 * sections, a visible "last updated" line. No CTA clutter.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <Container narrow className="pt-nav pb-section">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: title }]} className="pt-8" />
      <p className="text-eyebrow text-brand-700 mt-10 mb-3 uppercase">{eyebrow}</p>
      <h1 className="font-heading text-h1 text-ink">{title}</h1>
      <div className="text-small text-muted border-line mt-4 mb-12 border-b pb-6">{intro}</div>
      {children}
    </Container>
  );
}

/** Numbered legal section. */
export function S({
  n,
  t,
  id,
  children,
}: {
  n: string;
  t: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="font-heading text-h4 text-ink mb-3">
        <span className="text-subtle mr-2 tabular-nums">{n}.</span>
        {t}
      </h2>
      {children}
    </section>
  );
}

/** Paragraph. */
export function P({ children }: { children: ReactNode }) {
  return <p className="text-muted mb-3 text-[0.9375rem] leading-[1.75]">{children}</p>;
}

/** Highlighted paragraph. */
export function H({ children }: { children: ReactNode }) {
  return (
    <p className="bg-tint ring-line text-ink mb-3 rounded-xl px-4 py-3.5 text-[0.9375rem] leading-relaxed font-medium ring-1">
      {children}
    </p>
  );
}

/** Bold inline label. */
export function B({ children }: { children: ReactNode }) {
  return <strong className="text-ink font-bold">{children}</strong>;
}

/** Inline link inside legal text. */
export const LEGAL_LINK =
  "text-brand-700 focus-visible:focus-ring rounded font-medium underline underline-offset-2 hover:no-underline";
