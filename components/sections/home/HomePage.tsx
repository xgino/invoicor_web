import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/lib/i18n/config";
import type { HomeDict } from "@/lib/i18n/pages/home/en";
import { blogLd, mobileAppLd, organizationLd, websiteLd } from "@/lib/jsonld";
import { AppPreview } from "./AppPreview";
import { Features } from "./Features";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { HomeFaq } from "./HomeFaq";
import { HowItWorks } from "./HowItWorks";
import { KeepYourMoney } from "./KeepYourMoney";
import { PricingSection } from "./PricingSection";
import { Promises } from "./Promises";
import { ProofBand } from "./ProofBand";
import { Templates } from "./Templates";
import { WhoItsFor } from "./WhoItsFor";

/**
 * The home page in any language (ROADMAP chunks 19–20, Stage H). Sections live in this folder;
 * all text comes from lib/i18n/pages/home/{locale}.ts. The FAQPage JSON-LD comes from the FAQ.
 */
export function HomePage({ t, locale }: { t: HomeDict; locale: Locale }) {
  const p = { t, locale };
  return (
    <>
      <JsonLd data={[organizationLd(), websiteLd(), mobileAppLd(), blogLd()]} />
      <Hero {...p} />
      <ProofBand {...p} />
      <Templates {...p} />
      <HowItWorks {...p} />
      <WhoItsFor {...p} />
      <AppPreview {...p} />
      <Features {...p} />
      <KeepYourMoney {...p} />
      <PricingSection {...p} />
      <Promises {...p} />
      <HomeFaq {...p} />
      <FinalCta {...p} />
    </>
  );
}
