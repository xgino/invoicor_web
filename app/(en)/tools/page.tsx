import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCta, PageHeader } from "@/components/sections/content/blocks";
import { TOOL_ICONS } from "@/components/tools/ToolPage";
import { cx } from "@/components/ui/cx";
import { Container } from "@/components/ui/layout";
import { buildMetadata } from "@/lib/seo";
import { TOOLS } from "@/lib/tools/registry";

export const metadata: Metadata = buildMetadata({
  title: "Free Invoicing Tools: Generator & Calculators | Invoicor",
  description:
    "Free tools for freelancers and small businesses: an online invoice generator, a VAT calculator, an hours calculator and an hourly rate calculator.",
  path: "/tools",
});

/** The free tools hub (ROADMAP T1). The list comes from lib/tools/registry.ts. */
export default function ToolsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Free tools" }]}
        eyebrow="Free · no signup · nothing to install"
        title="Free tools for getting paid"
        subtitle="Make an invoice, get the VAT right, add up your hours and set a rate that pays your bills. Everything runs in your browser."
      />
      <Container className="-mt-6 pb-24">
        <ul className="grid gap-5 md:grid-cols-2">
          {TOOLS.map((t) => {
            const Icon = TOOL_ICONS[t.icon];
            return (
              <li key={t.href} className={cx(t.featured && "md:col-span-2")}>
                <Link
                  href={t.href}
                  data-track="tool_open"
                  data-track-tool={t.href}
                  className={cx(
                    "group ring-line hover:ring-brand-200 focus-visible:focus-ring shadow-soft flex h-full items-start gap-5 rounded-3xl p-7 ring-1 transition",
                    t.featured ? "bg-brand-50" : "bg-surface",
                  )}
                >
                  <span
                    className={cx(
                      "grid size-12 shrink-0 place-items-center rounded-2xl",
                      t.featured
                        ? "bg-brand-gradient shadow-brand text-white"
                        : "bg-brand-50 text-brand-700",
                    )}
                  >
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <span>
                    <span className="font-heading text-h4 text-ink flex items-center gap-2">
                      {t.name}
                      <ArrowRight
                        aria-hidden
                        className="text-brand-700 size-4 transition group-hover:translate-x-1"
                      />
                    </span>
                    <span className="text-muted mt-1 block">{t.short}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
      <ClosingCta
        title="All of it, on your iPhone."
        gradient="3 invoices free."
        text="Saved clients and items, tax and totals worked out for you, and every invoice with its status."
        campaign="tools-hub"
      />
    </>
  );
}
