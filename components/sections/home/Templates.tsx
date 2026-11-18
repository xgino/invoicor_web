import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import { Eyebrow, Container, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { getApiTemplates } from "@/lib/api";
import { TemplateGallery } from "./TemplateGallery";
import { ROUTES } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/config";
import type { HomeDict } from "@/lib/i18n/pages/home/en";

export async function Templates({ t, locale }: { t: HomeDict; locale: Locale }) {
  const c = t.templates;
  // The template pages are English-only for now; other languages open the generator's picker.
  const browse =
    locale === "en"
      ? "/templates"
      : (ROUTES.generator[locale] ?? `/free-invoice-generator?lang=${locale}`);
  const templates = (await getApiTemplates())
    .slice(0, 12)
    .map(({ slug, name, tier }) => ({ slug, name, tier }));

  return (
    <Section aria-labelledby="templates-title">
      <Container>
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <Heading id="templates-title">
              {c.titleA} <Gradient>{c.titleB}</Gradient>
            </Heading>
            <Text size="lead" className="mt-4">
              {c.lead}
            </Text>
          </div>
          <Link href={browse} className={buttonClass({ variant: "secondary" })}>
            {c.browse} <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
        <TemplateGallery initial={templates} label={c.galleryAria} previewLabel={c.preview} />
      </Container>
    </Section>
  );
}
