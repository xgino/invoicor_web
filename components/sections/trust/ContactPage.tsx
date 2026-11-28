import { LifeBuoy, Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import { ClosingCta, PageHeader } from "@/components/sections/content/blocks";
import { CompanyDetails } from "@/components/sections/content/company";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";
import { CONTACT_EMAIL, absoluteUrl } from "@/lib/config";
import type { Locale } from "@/lib/i18n/config";
import { TRUST } from "@/lib/i18n/pages/trust";
import { ROUTES } from "@/lib/i18n/routes";
import { organizationLd } from "@/lib/jsonld";
import { FREE_INVOICES } from "@/lib/pricing";

const LINK = "text-brand-700 underline-offset-4 hover:underline";

/** Contact page (P11) in every language: the real ways to reach the team (invoicor_ios, checked 2026-11-27). */
export function ContactPage({ locale }: { locale: Locale }) {
  const all = TRUST[locale];
  const t = all.contact;
  const path = ROUTES.contact[locale] ?? "/contact";
  const ways = [
    {
      icon: Smartphone,
      title: t.app.title,
      text: (
        <>
          {t.app.before} <strong className="text-ink">{t.app.path}</strong> {t.app.middle}{" "}
          <strong className="text-ink">{t.app.submissions}</strong> {t.app.after}
        </>
      ),
    },
    {
      icon: Mail,
      title: t.email.title,
      text: (
        <>
          {t.email.before}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand-700 font-medium underline-offset-4 hover:underline"
            data-track="contact_click"
            data-track-link="email"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          {t.email.after}
        </>
      ),
    },
    {
      icon: LifeBuoy,
      title: t.help.title,
      text: (
        <>
          {t.help.before}{" "}
          <Link
            href={ROUTES.help[locale] ?? "/help"}
            className="text-brand-700 font-medium underline-offset-4 hover:underline"
          >
            {t.help.link}
          </Link>
          {t.help.after}
        </>
      ),
    },
  ];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: absoluteUrl(path),
          name: t.title,
          inLanguage: locale,
          mainEntity: {
            ...organizationLd(),
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: CONTACT_EMAIL,
            },
          },
        }}
      />
      <PageHeader
        locale={locale}
        crumbs={[{ name: all.home, href: ROUTES.home[locale] ?? "/" }, { name: t.crumb }]}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <Section aria-labelledby="ways-title" className="pt-0!">
        <Container>
          <h2 id="ways-title" className="sr-only">
            {t.waysHidden}
          </h2>
          <ul className="grid gap-5 md:grid-cols-3">
            {ways.map((w) => (
              <li key={w.title} className="bg-surface ring-line shadow-soft rounded-2xl p-7 ring-1">
                <span className="bg-brand-50 text-brand-700 grid size-11 place-items-center rounded-xl">
                  <w.icon aria-hidden className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-heading text-h4 text-ink mt-5">{w.title}</h3>
                <p className="text-muted mt-2 leading-relaxed">{w.text}</p>
              </li>
            ))}
          </ul>
          <p className="text-small text-subtle mt-6">{t.noPhone}</p>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="topics-title">
        <Container narrow>
          <Eyebrow>{t.topicsEyebrow}</Eyebrow>
          <Heading id="topics-title">{t.topicsTitle}</Heading>
          <dl className="mt-8 space-y-6">
            {t.topics.map((x) => (
              <div key={x.title}>
                <dt className="font-heading text-h4 text-ink">{x.title}</dt>
                <dd className="text-muted mt-1.5 leading-relaxed">{x.text}</dd>
              </div>
            ))}
          </dl>
          <Text muted className="mt-8">
            {t.related}{" "}
            <Link href="/privacy" className={LINK}>
              {t.relatedLinks.privacy}
            </Link>
            ,{" "}
            <Link href="/terms" className={LINK}>
              {t.relatedLinks.terms}
            </Link>
            ,{" "}
            <Link href="/affiliate" className={LINK}>
              {t.relatedLinks.affiliate}
            </Link>
            ,{" "}
            <Link href={ROUTES.about[locale] ?? "/about"} className={LINK}>
              {t.relatedLinks.about}
            </Link>
            .
          </Text>
        </Container>
      </Section>

      <Section aria-labelledby="company-title">
        <Container narrow>
          <Eyebrow>{t.companyEyebrow}</Eyebrow>
          <Heading id="company-title">{t.companyTitle}</Heading>
          <div className="mt-8">
            <CompanyDetails t={all.company} />
          </div>
        </Container>
      </Section>

      <ClosingCta
        locale={locale}
        title={t.ctaTitle}
        gradient={t.ctaGradient}
        text={t.ctaText.replaceAll("{n}", String(FREE_INVOICES))}
        campaign={locale === "en" ? "contact-footer" : `contact-footer-${locale}`}
      />
    </>
  );
}
