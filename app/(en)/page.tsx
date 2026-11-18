import type { Metadata } from "next";
import { HomePage } from "@/components/sections/home/HomePage";
import { HOME } from "@/lib/i18n/pages/home";
import { en } from "@/lib/i18n/pages/home/en";
import { alternatesFor } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: en.meta.title,
  description: en.meta.description,
  path: "/",
  languages: alternatesFor("home"),
});

/** Home page (ROADMAP chunks 19–20), light and invoice-styled; text in lib/i18n/pages/home. */
export default function Page() {
  return <HomePage t={HOME.en} locale="en" />;
}
