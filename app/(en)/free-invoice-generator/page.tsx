import type { Metadata } from "next";
import { GeneratorPage } from "@/components/sections/generator/GeneratorPage";
import { GENERATOR } from "@/lib/i18n/pages/generator";
import { alternatesFor } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...GENERATOR.en.page.meta,
  path: "/free-invoice-generator",
  image: "/og-generator.png",
  locale: "en",
  languages: alternatesFor("generator"),
});

/** Free invoice generator (ROADMAP Stage G, chunks 32–35). */
export default function FreeInvoiceGeneratorPage() {
  return <GeneratorPage locale="en" />;
}
