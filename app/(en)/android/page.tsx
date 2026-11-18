import type { Metadata } from "next";
import { AndroidPage } from "@/components/sections/android/AndroidPage";
import { ANDROID } from "@/lib/i18n/pages/android";
import { alternatesFor } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: ANDROID.en.metaTitle,
  description: ANDROID.en.metaDescription,
  path: "/android",
  languages: alternatesFor("android"),
});

export default function Page() {
  return <AndroidPage locale="en" />;
}
