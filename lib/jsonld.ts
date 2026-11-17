/**
 * Builders for schema.org structured data (JSON-LD).
 * Rule: markup only describes what is visible on the page it is placed on.
 */
import type { Faq } from "./content";
import { PLANS, PRICING } from "./pricing";
import {
  APP_STORE_APP_NAME,
  APP_STORE_URL,
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "./config";

type JsonLd = Record<string, unknown>;

export function organizationLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icons/icon-512.png"),
    email: CONTACT_EMAIL,
    sameAs: [APP_STORE_URL],
  };
}

export function websiteLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/**
 * The iOS app. No aggregateRating on purpose: only add one when it matches the real
 * App Store rating (Google penalises review markup that doesn't).
 */
export function mobileAppLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: APP_STORE_APP_NAME,
    description:
      "Create professional invoices in seconds on your iPhone. Auto fill clients and items, beautiful PDF templates, multi currency and language support, tax and discount calculator.",
    operatingSystem: "iOS 17.6 or later",
    applicationCategory: "BusinessApplication",
    url: absoluteUrl("/"),
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    offers: PLANS.map((plan) => ({
      "@type": "Offer",
      price: plan.monthly.toFixed(2),
      priceCurrency: PRICING.currency,
      description:
        plan.monthly === 0
          ? `${plan.name} plan: ${plan.features[0]}`
          : `${plan.name} plan, billed monthly`,
    })),
    featureList:
      "Auto Fill Invoices, PDF Templates, Multi Currency, Multi Language, Tax Calculator, Discount Calculator, Status Tracking, Multiple Business Profiles, Revenue Dashboard",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbLd(items: Array<{ name: string; path?: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function faqLd(faqs: Faq[]): JsonLd | null {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function howToLd(
  name: string,
  description: string | undefined,
  steps: Array<{ name: string; text?: string }>,
): JsonLd | null {
  if (steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    ...(description ? { description } : {}),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      ...(s.text ? { text: s.text } : {}),
    })),
  };
}

export function definedTermSetLd(
  name: string,
  terms: Array<{ term: string; definition: string }>,
): JsonLd | null {
  if (terms.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };
}
