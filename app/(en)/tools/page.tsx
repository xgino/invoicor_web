import type { Metadata } from "next";
import { ToolsHub } from "@/components/tools/ToolPage";
import { TOOLS_TEXT } from "@/lib/i18n/pages/tools";
import { alternatesFor } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...TOOLS_TEXT.en.hub.meta,
  path: "/tools",
  locale: "en",
  languages: alternatesFor("tools"),
});

/** Free tools (ROADMAP T1; other languages HL2). The text lives in lib/i18n/pages/tools. */
export default function Page() {
  return <ToolsHub locale="en" />;
}
