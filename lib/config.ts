/**
 * Single source of truth for URLs, IDs and site-wide constants.
 * Values can be overridden with NEXT_PUBLIC_* env vars (see .env.example);
 * the defaults are the production values, so a plain `npm run build` is correct.
 */

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

export const SITE_URL = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL || "https://invoicor.com",
);

export const API_URL = stripTrailingSlash(
  process.env.NEXT_PUBLIC_API_URL || "https://invoicor.com/api",
);

export const SITE_NAME = "Invoicor";
/** The blog with how-to articles (ROADMAP L), a separate site on its own subdomain. */
export const BLOG_URL = "https://learn.invoicor.com/";

export const CONTACT_EMAIL = "info@invoicor.com";

export const APP_STORE_ID = "6761840276";
export const APP_STORE_APP_NAME = "Invoicor: Invoice Generator";
/** Country-neutral link: Apple redirects to the visitor's own storefront. */
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
const APP_STORE_PROVIDER_TOKEN = process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN || "";

export const AFFILIATE_SIGNUP_URL =
  "https://gomarketme.net/m/invoicor/c/b80f3289-edcb-4fb5-8548-4328a404d519/signup";

export const ANALYTICS_ENABLED = process.env.NEXT_PUBLIC_ANALYTICS !== "false";
export const GA_MEASUREMENT_ID = "G-DX0880SW9D";
export const POSTHOG_KEY = "phc_Pc8MPW957gjYlwUzKVdGBfcWXc2k7Oy8aM7BHZsI0EV";
/** PostHog US cloud. Moving to the EU cloud (eu.i.posthog.com) needs a new PostHog project (ROADMAP Y12). */
export const POSTHOG_HOST = "https://us.i.posthog.com";

/**
 * App Store link with optional campaign attribution.
 * `ct` (campaign) only counts in App Store Connect when a provider token (`pt`) is set,
 * so without the token this returns the plain link.
 */
export function appStoreLink(campaign?: string): string {
  if (!campaign || !APP_STORE_PROVIDER_TOKEN) return APP_STORE_URL;
  // Apple accepts campaign names of up to 40 characters.
  const params = new URLSearchParams({
    pt: APP_STORE_PROVIDER_TOKEN,
    ct: campaign.slice(0, 40),
    mt: "8",
  });
  return `${APP_STORE_URL}?${params.toString()}`;
}

/** Absolute URL for a site path, e.g. absoluteUrl("/templates") */
export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** IndexNow key (Bing, Yandex, Seznam…). The same value is served at /<key>.txt from public/. */
export const INDEXNOW_KEY = "d3e8f87315d5d18c667a3f10ea082f94";
