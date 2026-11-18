import { Check } from "lucide-react";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Container, Eyebrow, Heading, Text } from "@/components/ui/layout";
import { fill } from "@/lib/i18n/chrome";
import type { GeneratorDict } from "@/lib/i18n/pages/generator/en";
import { FREE_INVOICES } from "@/lib/pricing";

/**
 * The SEO content below the generator (ROADMAP 35b, HL1), in the page's language. Every claim
 * matches BRAND.md §10 and the public API's real limits (invoicor_api/docs/PUBLIC_GENERATOR.md).
 */
export function GeneratorGuide({ t }: { t: GeneratorDict["page"] }) {
  const n = { n: FREE_INVOICES };
  const faqs = t.faqs.map((f) => ({ question: f.question, answer: fill(f.answer, n) }));
  return (
    <div className="border-line border-t">
      <Container narrow className="py-section space-y-16">
        <section aria-labelledby="how-title">
          <Eyebrow>{t.howEyebrow}</Eyebrow>
          <Heading id="how-title">{t.howTitle}</Heading>
          <ol className="mt-8 space-y-5">
            {t.steps.map((s, i) => (
              <li key={s.name} className="flex gap-4">
                <span className="bg-brand-gradient grid size-9 shrink-0 place-items-center rounded-full font-bold text-white tabular-nums">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-ink font-bold">{s.name}</h3>
                  <p className="text-muted mt-1 leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="include-title">
          <Eyebrow>{t.mustEyebrow}</Eyebrow>
          <Heading id="include-title">{t.mustTitle}</Heading>
          <Text className="text-muted mt-4">{t.mustIntro}</Text>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {t.mustHave.map((m) => (
              <li key={m} className="bg-tint ring-line flex gap-2.5 rounded-xl p-3.5 ring-1">
                <Check aria-hidden className="text-brand-600 mt-0.5 size-4 shrink-0" />
                <span className="text-small text-ink">{m}</span>
              </li>
            ))}
          </ul>
          {t.mustNote && <Text className="text-muted mt-5">{t.mustNote}</Text>}
        </section>

        <section aria-labelledby="types-title">
          <Eyebrow>{t.typesEyebrow}</Eyebrow>
          <Heading id="types-title">{t.typesTitle}</Heading>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.types.map(({ title, text }) => (
              <div key={title} className="ring-line rounded-2xl p-5 ring-1">
                <h3 className="font-heading text-h4 text-ink">{title}</h3>
                <p className="text-small text-muted mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <Text className="text-muted mt-5">{t.typesNote}</Text>
        </section>

        <section aria-labelledby="terms-title">
          <Eyebrow>{t.termsEyebrow}</Eyebrow>
          <Heading id="terms-title">{t.termsTitle}</Heading>
          <Text className="text-muted mt-4 leading-relaxed">{t.termsText}</Text>
        </section>

        <section aria-labelledby="tips-title">
          <Eyebrow>{t.tipsEyebrow}</Eyebrow>
          <Heading id="tips-title">{t.tipsTitle}</Heading>
          <div className="mt-6 space-y-5">
            {t.tips.map((tip) => (
              <div key={tip.title}>
                <h3 className="text-ink font-bold">{tip.title}</h3>
                <p className="text-muted mt-1 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="vs-title">
          <Eyebrow>{t.vsEyebrow}</Eyebrow>
          <Heading id="vs-title">{t.vsTitle}</Heading>
          <Text className="text-muted mt-4">{t.vsIntro}</Text>
          <div className="ring-line mt-6 overflow-hidden rounded-2xl ring-1">
            <table className="w-full text-left">
              <caption className="sr-only">{t.vsCaption}</caption>
              <thead className="bg-tint text-eyebrow text-subtle uppercase">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-4 py-3">
                    {t.vsGenerator}
                  </th>
                  <th scope="col" className="text-brand-700 px-4 py-3">
                    {t.vsApp}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-line text-small divide-y">
                {t.compare.map(([what, gen, app]) => (
                  <tr key={what}>
                    <th scope="row" className="text-ink px-4 py-3 font-medium">
                      {what}
                    </th>
                    <td className="text-muted px-4 py-3">{fill(gen, n)}</td>
                    <td className="text-ink px-4 py-3">{fill(app, n)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="more-title">
          <Eyebrow>{t.moreEyebrow}</Eyebrow>
          <Heading id="more-title">{t.moreTitle}</Heading>
          <Text className="text-muted mt-4">
            {t.moreBefore}{" "}
            <Link
              href="/templates"
              hrefLang={t.moreEnglishNote ? "en" : undefined}
              className="text-brand-700 font-medium underline underline-offset-2"
            >
              {t.moreLink}
            </Link>
            {t.moreAfter}
          </Text>
          <ul className="mt-5 flex flex-wrap gap-2">
            {t.useCases.map((u) => (
              <li key={u.href}>
                <Link
                  href={u.href}
                  hrefLang={t.moreEnglishNote ? "en" : undefined}
                  className="text-small text-brand-700 hover:bg-brand-50 focus-visible:focus-ring ring-brand-200 rounded-full px-3 py-1 font-bold ring-1"
                >
                  {u.label}
                </Link>
              </li>
            ))}
          </ul>
          {t.moreEnglishNote && <p className="text-small text-subtle mt-3">{t.moreEnglishNote}</p>}
        </section>

        <section aria-labelledby="faq-title">
          <Eyebrow>{t.faqEyebrow}</Eyebrow>
          <Heading id="faq-title">{t.faqTitle}</Heading>
          <Accordion items={faqs} structuredData className="mt-6" />
        </section>
      </Container>
    </div>
  );
}
