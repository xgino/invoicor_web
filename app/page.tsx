import type { Metadata } from "next";
import { Dashboard } from "@/components/landing/sections/Dashboard";
import { Faq, HOME_FAQS } from "@/components/landing/sections/Faq";
import { FinalCta } from "@/components/landing/sections/FinalCta";
import { GlobalSecurity } from "@/components/landing/sections/GlobalSecurity";
import { Hero } from "@/components/landing/sections/Hero";
import { HowItWorks } from "@/components/landing/sections/HowItWorks";
import { Pricing } from "@/components/landing/sections/Pricing";
import { Stats } from "@/components/landing/sections/Stats";
import { Templates } from "@/components/landing/sections/Templates";
import { Testimonials } from "@/components/landing/sections/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqLd, mobileAppLd, organizationLd, websiteLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Invoice Maker for iPhone | Create Invoices in Seconds | Invoicor",
  description:
    "Create professional invoices in under 5 seconds on your iPhone. 80% auto fill, beautiful PDF templates, multi currency, tax calculator, and instant sharing. Free to start.",
  path: "/",
});

export default function HomePage() {
  return (
    <div style={{ color: "#f5f5f5", background: "#09090b", overflowX: "hidden" }}>
      <JsonLd data={[organizationLd(), websiteLd(), mobileAppLd(), faqLd(HOME_FAQS)]} />
      <Hero />
      <Stats />
      <Templates />
      <HowItWorks />
      <Dashboard />
      <GlobalSecurity />
      <Pricing />
      <Testimonials />
      <Faq />
      <FinalCta />
    </div>
  );
}
