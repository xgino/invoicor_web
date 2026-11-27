import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { AFFILIATE } from "@/components/affiliate/config";
import { Logo } from "@/components/brand/Logo";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";
import { AndroidButton } from "@/components/ui/AndroidButton";
import { AppStoreBadge } from "@/components/ui/content";
import { CONTACT_EMAIL } from "@/lib/config";
import { getTemplates } from "@/lib/content";
import { CHROME } from "@/lib/i18n/chrome";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";

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

/**
 * The 3 templates with the most search impressions (Search Console, 28 days to 2026-11-18;
 * baseline in seo/keyword-map.csv), then 3 general invoice types with strong search demand
 * (demand gate 2026-11-27; the commercial invoice has no trade page to link it). Update after
 * each Search Console round.
 */
const POPULAR_SLUGS = [
  "plumbing",
  "hvac",
  "freelance-design",
  "deposit-invoice",
  "freelance-invoice",
  "commercial-invoice",
];
const POPULAR_TEMPLATES = POPULAR_SLUGS.flatMap((slug) => {
  const t = getTemplates().find((x) => x.slug === slug);
  return t ? [t] : [];
});

export function Footer({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  if (locale !== DEFAULT_LOCALE)
    return <LocalizedFooter locale={locale as Exclude<Locale, "en">} />;
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
            <Column title="Product">
              <Item href="/#pricing" track="pricing">
                Pricing
              </Item>
              <Item href="/free-invoice-generator" track="generator">
                Free invoice generator
              </Item>
              <Item href="/tools" track="tools">
                Free tools
              </Item>
              <Item href="/android" track="android">
                Android (coming soon)
              </Item>
            </Column>
            <Column title="Popular templates">
              {POPULAR_TEMPLATES.map((t) => (
                <Item key={t.slug} href={`/templates/${t.slug}`}>
                  {t.niche} invoice
                </Item>
              ))}
              <AllLink href="/templates">All templates</AllLink>
            </Column>
            <Column title="Resources">
              <Item href="/help" track="help">
                Help &amp; FAQ
              </Item>
              <Item href="/industries" track="industries">
                Invoicing by industry
              </Item>
              <Item href="/compare" track="compare">
                Compare invoice apps
              </Item>
            </Column>
            <Column title="Company">
              <Item href="/about" track="about">
                About
              </Item>
              <Item href="/contact" track="contact">
                Contact
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

        <div className="border-line mt-14 border-t pt-8">
          <LanguageSwitcher locale={locale} label={CHROME.en.switcher.label} variant="list" />
        </div>

        <div className="border-line text-small text-subtle mt-8 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
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

/**
 * Footer in another language (ROADMAP 36e): links to the pages that exist in that language, the
 * English hubs under a clear "In English" heading, and a note that legal pages are in English.
 */
function LocalizedFooter({ locale }: { locale: Exclude<Locale, "en"> }) {
  const t = CHROME[locale].footer;
  const home = ROUTES.home[locale];
  const year = new Date().getFullYear();
  return (
    <footer data-hide-sticky className="bg-tint relative">
      <div aria-hidden className="bg-brand-gradient absolute inset-x-0 top-0 h-px opacity-60" />
      <div className="max-w-page px-gutter mx-auto pt-16 pb-10 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_3fr]">
          <div className="max-w-xs">
            <Link
              href={home ?? "/"}
              aria-label={CHROME[locale].nav.homeAria}
              className="text-ink focus-visible:focus-ring inline-block rounded-lg"
            >
              <Logo size={32} />
            </Link>
            <p className="text-small text-muted mt-4 leading-relaxed">{t.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AppStoreBadge
                campaign={`footer_${locale}`}
                top={CHROME[locale].badges.appStoreTop}
              />
              <AndroidButton
                campaign={`footer_${locale}`}
                href={ROUTES.android[locale] ?? "/android"}
                top={CHROME[locale].badges.androidTop}
                label={CHROME[locale].badges.android}
              />
            </div>
            <p className="text-small text-muted mt-6 flex items-center gap-2">
              <ShieldCheck aria-hidden className="text-brand-700 size-4 shrink-0" />
              {t.dataGermany}
            </p>
          </div>

          <nav aria-label={t.aria} className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <Column title={t.colInvoicor}>
              <Item
                href={ROUTES.generator[locale] ?? `/free-invoice-generator?lang=${locale}`}
                track="generator"
              >
                {t.generator}
              </Item>
              {ROUTES.tools[locale] && (
                <Item href={ROUTES.tools[locale]!} track="tools">
                  {CHROME[locale].nav.tools}
                </Item>
              )}
              {ROUTES.help[locale] && (
                <Item href={ROUTES.help[locale]!} track="help">
                  {t.help}
                </Item>
              )}
              <Item href={home ? `${home}#pricing` : "/#pricing"} track="pricing">
                {t.pricing}
              </Item>
              <Item href={ROUTES.android[locale] ?? "/android"} track="android">
                {t.android}
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
            <Column title={t.colEnglish}>
              <EnglishItem href="/templates">{t.templates}</EnglishItem>
              <EnglishItem href="/industries">{t.industries}</EnglishItem>
              <EnglishItem href="/compare">{t.compare}</EnglishItem>
            </Column>
            <div className="col-span-2 sm:col-span-1">
              <LanguageSwitcher
                locale={locale}
                label={CHROME[locale].switcher.label}
                variant="list"
              />
            </div>
          </nav>
        </div>

        <div className="border-line text-small text-subtle mt-14 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Invoicor. {t.rights} <span className="block sm:inline">{t.legalNote}</span>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <EnglishItem href="/privacy">{t.privacy}</EnglishItem>
            <EnglishItem href="/terms">{t.terms}</EnglishItem>
            <li>
              <CookieSettingsButton className={LINK} label={t.cookies} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/** A link to an English page from a translated page: marked with hreflang and lang. */
function EnglishItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link href={href} hrefLang="en" className={LINK}>
        {children}
      </Link>
    </li>
  );
}
