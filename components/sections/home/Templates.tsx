import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import { Eyebrow, Container, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { getApiTemplates } from "@/lib/api";
import { TemplateGallery } from "./TemplateGallery";

export async function Templates() {
  const templates = (await getApiTemplates())
    .slice(0, 12)
    .map(({ slug, name, tier }) => ({ slug, name, tier }));

  return (
    <Section aria-labelledby="templates-title">
      <Container>
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>31 templates · 21 free</Eyebrow>
            <Heading id="templates-title">
              Invoices your clients <Gradient>take seriously.</Gradient>
            </Heading>
            <Text size="lead" className="mt-4">
              Not the spreadsheet look. Your logo, a clean layout and every detail a client or
              accountant expects.
            </Text>
          </div>
          <Link href="/templates" className={buttonClass({ variant: "secondary" })}>
            Browse templates <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
        <TemplateGallery initial={templates} />
      </Container>
    </Section>
  );
}
