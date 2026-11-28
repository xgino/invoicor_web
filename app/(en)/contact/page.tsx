import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/trust/ContactPage";
import { TRUST } from "@/lib/i18n/pages/trust";
import { alternatesFor } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...TRUST.en.contact.meta,
  path: "/contact",
  languages: alternatesFor("contact"),
});

/** Contact page (P11), English. Text: lib/i18n/pages/trust/en.ts. */
export default function Page() {
  return <ContactPage locale="en" />;
}
