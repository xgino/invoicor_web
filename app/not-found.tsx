import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import { InvoicePaper, LineItems, PaperLabel, Stamp } from "@/components/ui/invoice";
import { Container } from "@/components/ui/layout";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Invoicor" },
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/templates", label: "Invoice templates" },
  { href: "/industries", label: "Industries" },
  { href: "/compare", label: "Compare" },
  { href: "/help", label: "Help center" },
];

/** Branded 404 (ROADMAP chunk 24e). Exported as out/404.html; nginx serves it with status 404. */
export default function NotFound() {
  return (
    <Container className="pt-nav pb-section grid items-center gap-14 lg:grid-cols-2">
      <div className="pt-16">
        <p className="text-eyebrow text-brand-700 mb-3 uppercase">Error 404</p>
        <h1 className="font-heading text-h1 text-ink">This page doesn&apos;t exist.</h1>
        <p className="text-lead text-muted mt-5 max-w-md">
          The link may be old or mistyped. Here are some places to go instead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className={buttonClass()}>
            Go to the home page
          </Link>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={buttonClass({ variant: "secondary" })}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <InvoicePaper edge="perforated" className="relative mx-auto w-full max-w-sm p-7 lg:mt-16">
        <Stamp className="absolute top-6 right-6" rotate={-12}>
          Void
        </Stamp>
        <PaperLabel>Invoice № 404</PaperLabel>
        <LineItems
          className="mt-12"
          items={[{ description: "The page you asked for", detail: "Not found", amount: "$0.00" }]}
          total={{ label: "Total", amount: "$0.00" }}
        />
      </InvoicePaper>
    </Container>
  );
}
