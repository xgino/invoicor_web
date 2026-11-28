import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/trust/AboutPage";
import { TRUST } from "@/lib/i18n/pages/trust";
import { alternatesFor } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...TRUST.en.about.meta,
  path: "/about",
  languages: alternatesFor("about"),
});

/** About page (P10), English. Text: lib/i18n/pages/trust/en.ts; company details: lib/config.ts. */
export default function Page() {
  return <AboutPage locale="en" />;
}
