import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { AFFILIATE } from "@/components/affiliate/config";
import { Logo } from "@/components/brand/Logo";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";
import { AndroidButton } from "@/components/ui/AndroidButton";
import { AppStoreBadge } from "@/components/ui/content";
import { CONTACT_EMAIL } from "@/lib/config";
import { getComparisons, getIndustries, getTemplates } from "@/lib/content";

/**
 * Site footer (ROADMAP chunk 18d): light, with a brand-gradient hairline on top. Columns link
 * into every hub and the top pages of each, so every page is within 3 clicks of any other.
 */
const LINK =
  "text-small text-muted hover:text-ink focus-visible:focus-ring rounded transition-colors duration-150";

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-eyebrow text-ink mb-4 uppercase">{title}</h2>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function Item({ href, children, track }: { href: string; children: ReactNode; track?: string }) {
  return (
    <li>
      <Link
        href={href}
        className={LINK}
        data-track={track ? "footer_click" : undefined}
        data-track-link={track}
      >
        {children}
      </Link>
    </li>
  );
}

function AllLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-small text-brand-700 focus-visible:focus-ring rounded font-bold hover:underline"
      >
        {children} →
      </Link>
    </li>
  );
}

export function Footer() {
  const templates = getTemplates().slice(0, 6);
  const industries = getIndustries().slice(0, 6);
  const comparisons = getComparisons().slice(0, 6);
  const year = new Date().getFullYear();

  return (
    <footer data-hide-sticky className="bg-tint relative">
      <div aria-hidden className="bg-brand-gradient absolute inset-x-0 top-0 h-px opacity-60" />
      <div className="max-w-page px-gutter mx-auto pt-16 pb-10 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_3fr]">
          <div className="max-w-xs">
            <Link
              href="/"
              aria-label="Invoicor home"
              className="text-ink focus-visible:focus-ring inline-block rounded-lg"
            >
              <Logo size={32} />
            </Link>
            <p className="text-small text-muted mt-4 leading-relaxed">
              Professional invoices from your iPhone, for freelancers and small businesses. No fees
              on your payments, ever.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AppStoreBadge campaign="footer" />
              <AndroidButton campaign="footer" />
            </div>
            <p className="text-small text-muted mt-6 flex items-center gap-2">
              <ShieldCheck aria-hidden className="text-brand-700 size-4 shrink-0" />
              Your app data is stored in Germany.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <Column title="Templates">
              {templates.map((t) => (
                <Item key={t.slug} href={`/templates/${t.slug}`}>
                  {t.niche} invoice
                </Item>
              ))}
              <AllLink href="/templates">All templates</AllLink>
            </Column>
            <Column title="Industries">
              {industries.map((i) => (
                <Item key={i.slug} href={`/industries/${i.slug}`}>
                  {i.industry}
                </Item>
              ))}
              <AllLink href="/industries">All industries</AllLink>
            </Column>
            <Column title="Compare">
              {comparisons.map((c) => (
                <Item key={c.slug} href={`/compare/${c.slug}`}>
                  {c.competitor} alternative
                </Item>
              ))}
              <AllLink href="/compare">All comparisons</AllLink>
            </Column>
            <Column title="Company">
              <Item href="/free-invoice-generator" track="generator">
                Free invoice generator
              </Item>
              <Item href="/#pricing" track="pricing">
                Pricing
              </Item>
              <Item href="/help" track="help">
                Help &amp; FAQ
              </Item>
              <Item href="/affiliate" track="affiliate">
                Affiliate program ({AFFILIATE.commission}%)
              </Item>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={LINK}
                  data-track="footer_click"
                  data-track-link="email"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </Column>
          </nav>
        </div>

        <div className="border-line text-small text-subtle mt-14 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Invoicor. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <Item href="/privacy" track="privacy">
              Privacy
            </Item>
            <Item href="/terms" track="terms">
              Terms
            </Item>
            <li>
              <CookieSettingsButton className={LINK} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
