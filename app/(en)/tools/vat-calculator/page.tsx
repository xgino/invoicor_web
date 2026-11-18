import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { TOOLS_TEXT } from "@/lib/i18n/pages/tools";
import { alternatesFor } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...TOOLS_TEXT.en.vat.meta,
  path: "/tools/vat-calculator",
  locale: "en",
  languages: alternatesFor("vat"),
});

/** Free tools (ROADMAP T1; other languages HL2). The text lives in lib/i18n/pages/tools. */
export default function Page() {
  return <ToolPage tool="vat" locale="en" />;
}
