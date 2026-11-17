import type { Metadata } from "next";
import { Features } from "@/components/sections/home/Features";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Hero } from "@/components/sections/home/Hero";
import { HomeFaq } from "@/components/sections/home/HomeFaq";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { KeepYourMoney } from "@/components/sections/home/KeepYourMoney";
import { PricingSection } from "@/components/sections/home/PricingSection";
import { Promises } from "@/components/sections/home/Promises";
import { ProofBand } from "@/components/sections/home/ProofBand";
import { Templates } from "@/components/sections/home/Templates";
import { JsonLd } from "@/components/seo/JsonLd";
import { mobileAppLd, organizationLd, websiteLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Invoice Maker for iPhone | Create Invoices in Seconds | Invoicor",
  description:
    "Create professional invoices in seconds on your iPhone. 31 templates, 38 currencies, 11 languages. 3 invoices free, and no fees on your payments.",
  path: "/",
});

/**
 * Home page (ROADMAP chunks 19–20), light and invoice-styled. Sections live in
 * components/sections/home/. The FAQPage JSON-LD comes from the FAQ section itself.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationLd(), websiteLd(), mobileAppLd()]} />
      <Hero />
      <ProofBand />
      <Templates />
      <HowItWorks />
      <Features />
      <KeepYourMoney />
      <PricingSection />
      <Promises />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
