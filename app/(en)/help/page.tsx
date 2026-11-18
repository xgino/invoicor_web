import type { Metadata } from "next";
import { HelpPage } from "@/components/sections/help/HelpPage";
import { HELP } from "@/lib/i18n/pages/help";
import { alternatesFor } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...HELP.en.meta,
  path: "/help",
  locale: "en",
  languages: alternatesFor("help"),
});

/** Help center (ROADMAP chunk 24b; other languages HL3). The text lives in lib/i18n/pages/help. */
export default function Page() {
  return <HelpPage locale="en" />;
}
