import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

/**
 * Hidden brand reference (ROADMAP chunks 15–17): every token, the logo and every UI component.
 * noindex, and not in the sitemap or llms.txt. Tokens live in styles/tokens.css.
 */
export const metadata: Metadata = buildMetadata({
  title: "Brand system | Invoicor",
  description: "Invoicor colors, type, gradients, shadows and components.",
  path: "/brand",
  noindex: true,
});

const BRAND = [
  ["50", "#FFF7ED"],
  ["100", "#FFEDD5"],
  ["200", "#FED7AA"],
  ["300", "#FDBA74"],
  ["400", "#F7913D"],
  ["500", "#E95D05"],
  ["600", "#DC3002"],
  ["700", "#B42A06"],
  ["800", "#8F240C"],
  ["900", "#74200E"],
  ["950", "#400D04"],
] as const;

/** Contrast of each shade against white, so the right text shade is obvious. */
const BRAND_NOTE: Record<string, string> = {
  "500": "3.5:1 · large text / decoration",
  "600": "4.7:1 · AA text",
  "700": "6.4:1 · links, text on white",
};

const STONE = [
  ["50", "#FAFAF9"],
  ["100", "#F5F5F4"],
  ["200", "#E7E5E4"],
  ["300", "#D6D3D1"],
  ["400", "#A8A29E"],
  ["500", "#78716C"],
  ["600", "#57534E"],
  ["700", "#44403C"],
  ["800", "#292524"],
  ["900", "#1C1917"],
  ["950", "#0C0A09"],
] as const;

const ROLES = [
  ["ink", "var(--color-ink)", "Headings, body text"],
  ["muted", "var(--color-muted)", "Secondary text"],
  ["subtle", "var(--color-subtle)", "Captions (lightest text allowed)"],
  ["tint", "var(--color-tint)", "Alternate section background"],
  ["line", "var(--color-line)", "Hairline borders"],
  ["success", "var(--color-success)", "Paid, saved"],
  ["warning", "var(--color-warning)", "Due soon"],
  ["danger", "var(--color-danger)", "Overdue, errors"],
  ["info", "var(--color-info)", "Notices"],
] as const;

const GRADIENTS = [
  ["--brand-gradient", "Logo, glows, decorative shapes"],
  ["--brand-gradient-text", "One gradient word in a large headline"],
  ["--brand-gradient-cta", "Primary buttons (white text passes AA)"],
] as const;

const TYPE = [
  ["text-display", "Display", "Your next invoice, done."],
  ["text-h1", "H1", "Free invoice templates"],
  ["text-h2", "H2", "Invoice any client, anywhere"],
  ["text-h3", "H3", "Saved clients fill in for you"],
  ["text-h4", "H4", "What to include on an invoice"],
] as const;

const SHADOWS = [
  ["shadow-soft", "Soft: inputs, small cards"],
  ["shadow-card", "Card: cards, pricing"],
  ["shadow-float", "Float: phone mockups, popovers"],
  ["shadow-brand", "Brand: primary button"],
] as const;

const RADII = [
  ["rounded-lg", "8 px", "Inputs, small buttons"],
  ["rounded-xl", "12 px", "Buttons, badges"],
  ["rounded-2xl", "16 px", "Cards"],
  ["rounded-3xl", "24 px", "Panels, phone frames"],
] as const;

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-line border-t py-12">
      <h2 className="font-heading text-h3 text-ink mb-6">{title}</h2>
      {children}
    </section>
  );
}

function Swatch({ name, hex, note }: { name: string; hex: string; note?: string }) {
  return (
    <div>
      <div className="border-line h-16 rounded-xl border" style={{ background: hex }} />
      <p className="text-small text-ink mt-2 font-bold">{name}</p>
      <p className="text-small text-subtle font-mono">{hex}</p>
      {note && <p className="text-small text-muted">{note}</p>}
    </div>
  );
}

export default function BrandPage() {
  return (
    <div className="bg-surface text-ink">
      <div className="bg-brand-glow">
        <div className="max-w-page px-gutter mx-auto pt-16 pb-8 sm:px-6">
          <p className="text-eyebrow text-brand-700 mb-3 uppercase">Internal · not indexed</p>
          <h1 className="font-heading text-h1">
            Invoicor <span className="text-gradient">brand</span> system
          </h1>
          <p className="text-lead text-muted max-w-reading mt-4">
            Every token from <code>styles/tokens.css</code>. Light only (decision D13). Rules for
            using them are in BRAND.md section 7.
          </p>
        </div>
      </div>

      <div className="max-w-page px-gutter mx-auto pb-24 sm:px-6">
        <Block id="brand-colors" title="Brand colors">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-11">
            {BRAND.map(([k, hex]) => (
              <Swatch key={k} name={`brand-${k}`} hex={hex} note={BRAND_NOTE[k]} />
            ))}
          </div>
        </Block>

        <Block id="neutrals" title="Neutrals (stone) and roles">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-11">
            {STONE.map(([k, hex]) => (
              <Swatch key={k} name={`stone-${k}`} hex={hex} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {ROLES.map(([name, value, use]) => (
              <Swatch key={name} name={name} hex={value} note={use} />
            ))}
          </div>
        </Block>

        <Block id="gradients" title="Gradients">
          <div className="grid gap-4 sm:grid-cols-3">
            {GRADIENTS.map(([v, use]) => (
              <div key={v}>
                <div className="h-24 rounded-2xl" style={{ backgroundImage: `var(${v})` }} />
                <p className="text-small mt-2 font-mono font-bold">{v}</p>
                <p className="text-small text-muted">{use}</p>
              </div>
            ))}
          </div>
          <div className="border-line bg-brand-glow mt-6 flex h-40 items-end rounded-2xl border p-4">
            <p className="text-small font-mono font-bold">--brand-glow (on white)</p>
          </div>
          <p className="text-small text-muted mt-4">
            The gradient is rare: primary buttons, one word per headline, the popular pricing card
            and the glow. Nowhere else.
          </p>
        </Block>

        <Block id="type" title="Type">
          <div className="space-y-6">
            {TYPE.map(([cls, label, sample]) => (
              <div key={cls} className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:items-baseline">
                <p className="text-small text-subtle font-mono">{label}</p>
                <p className={`font-heading ${cls}`}>{sample}</p>
              </div>
            ))}
            <div className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:items-baseline">
              <p className="text-small text-subtle font-mono">Lead</p>
              <p className="text-lead text-muted max-w-reading">
                A professional invoice in seconds, in your client&apos;s language and currency.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:items-baseline">
              <p className="text-small text-subtle font-mono">Body</p>
              <p className="text-body max-w-reading">
                Saved clients and products fill in for you, totals add up on their own, and the PDF
                goes out from your phone. Satoshi, 16 px, line height 1.65.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:items-baseline">
              <p className="text-small text-subtle font-mono">Small</p>
              <p className="text-small text-muted">
                3 invoices free. No watermark. No card needed.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:items-baseline">
              <p className="text-small text-subtle font-mono">Eyebrow</p>
              <p className="text-eyebrow text-brand-700 uppercase">How it works</p>
            </div>
          </div>
        </Block>

        <Block id="shadows" title="Shadows and radius">
          <div className="grid gap-6 sm:grid-cols-4">
            {SHADOWS.map(([cls, use]) => (
              <div key={cls} className={`bg-surface rounded-2xl p-5 ${cls}`}>
                <p className="text-small font-mono font-bold">{cls}</p>
                <p className="text-small text-muted">{use}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {RADII.map(([cls, px, use]) => (
              <div key={cls} className={`border-line-strong bg-tint border p-5 ${cls}`}>
                <p className="text-small font-mono font-bold">
                  {cls} · {px}
                </p>
                <p className="text-small text-muted">{use}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block id="motion" title="Motion">
          <p className="text-muted max-w-reading mb-6">
            150 / 250 / 400 ms with <code>ease-brand</code> (cubic-bezier(.22, 1, .36, 1)). Only
            transform and opacity. Off when the visitor prefers reduced motion. Hover the cards.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {(["duration-150", "duration-250", "duration-400"] as const).map((d) => (
              <div
                key={d}
                className={`bg-surface shadow-card ease-brand rounded-2xl p-5 transition-transform hover:-translate-y-1.5 ${d}`}
              >
                <p className="text-small font-mono font-bold">{d}</p>
              </div>
            ))}
          </div>
        </Block>
      </div>
    </div>
  );
}
