import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ArticleLayout, Block, PageHeader } from "@/components/sections/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { buttonClass } from "@/components/ui/Button";
import { InvoicePaper } from "@/components/ui/invoice";
import { CONTACT_EMAIL } from "@/lib/config";
import { fill } from "@/lib/i18n/chrome";
import type { Locale } from "@/lib/i18n/config";
import { HELP } from "@/lib/i18n/pages/help";
import type { HelpItem } from "@/lib/i18n/pages/help/en";
import { ROUTES } from "@/lib/i18n/routes";
import { faqLd } from "@/lib/jsonld";

const LINKS = { privacy: "/privacy#", terms: "/terms#payments-and-fraud" } as const;

/** The rich version of an answer: labelled lines, or one phrase as a link. Says the same as `a`. */
function rich(item: HelpItem, answer: string, english: boolean) {
  if (item.list)
    return (
      <>
        {item.list.map(([label, text], i) => (
          <span key={label}>
            {i > 0 && <br />}
            <strong className="text-ink">{label}</strong>: {text}
          </span>
        ))}
      </>
    );
  if (item.link && answer.includes(item.link.text)) {
    const [before, after] = answer.split(item.link.text, 2);
    return (
      <>
        {before}
        <Link
          href={LINKS[item.link.page].replace(/#$/, "")}
          hrefLang={english ? undefined : "en"}
          className="text-brand-700 font-medium underline underline-offset-2"
        >
          {item.link.text}
        </Link>
        {after}
      </>
    );
  }
  return undefined;
}

/** Help center (ROADMAP chunk 24b, HL3): questions grouped by topic, one FAQPage JSON-LD for all. */
export function HelpPage({ locale }: { locale: Locale }) {
  const t = HELP[locale];
  const answer = (a: string) => fill(a, { email: CONTACT_EMAIL });
  const all = t.sections.flatMap((s) => s.items);
  return (
    <>
      <JsonLd data={faqLd(all.map((i) => ({ question: i.q, answer: answer(i.a) })))} />
      <PageHeader
        crumbs={[{ name: t.home, href: ROUTES.home[locale] ?? "/" }, { name: t.crumb }]}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />
      <ArticleLayout toc={t.sections.map((s) => ({ id: s.id, label: s.title }))} tocLabel={t.toc}>
        {t.sections.map((section) => (
          <Block key={section.id} id={section.id} title={section.title}>
            <Accordion
              items={section.items.map((i) => ({
                question: i.q,
                answer: answer(i.a),
                content: rich(i, answer(i.a), locale === "en"),
              }))}
            />
          </Block>
        ))}

        <div className="border-line border-t py-14">
          <InvoicePaper highlight className="p-8 text-center">
            <MessageCircle
              aria-hidden
              className="text-brand-600 mx-auto size-8"
              strokeWidth={1.75}
            />
            <h2 className="font-heading text-h3 text-ink mt-4">{t.contactTitle}</h2>
            <p className="text-muted mx-auto mt-2 max-w-md">{t.contactText}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={buttonClass({ variant: "secondary", className: "mt-6" })}
            >
              <Mail aria-hidden className="size-4" />
              {CONTACT_EMAIL}
            </a>
          </InvoicePaper>
        </div>
      </ArticleLayout>
    </>
  );
}
