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
export const CONTACT_EMAIL = "info@invoicor.com";

/**
 * Company details for /about, /contact and the footer (ROADMAP X7, decision D6). Empty until
 * the owner sends them: a field that's empty isn't shown, so nothing is ever guessed. A Dutch
 * business must show its KvK number on its website: fill `kvk` before a big launch.
 */
export const COMPANY = {
  /** Where the business is run from, as the terms and privacy policy say. */
  country: "the Netherlands",
  legalName: "",
  kvk: "",
  vat: "",
  city: "",
  /** 3–5 sentences by the owner: who makes Invoicor and why. Shown on /about when filled. */
  story: "",
};

export const APP_STORE_ID = "6761840276";
export const APP_STORE_APP_NAME = "Invoicor: Invoice Generator";
/**
 * The plain App Store address, without tracking. Only for structured data and llms.txt, which
 * should name the app's canonical address. Every link people click uses appStoreLink() instead.
 */
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
/**
 * App Store Connect provider token (ROADMAP X10). Public: it's in every campaign link. The GitHub
 * variable APP_STORE_PROVIDER_TOKEN can override it.
 */
const APP_STORE_PROVIDER_TOKEN = providerToken(process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN);

/** The token itself, also when a whole campaign link was pasted ("…?pt=128750110&ct=…" → "128750110"). */
function providerToken(value: string | undefined): string {
  const v = (value ?? "").trim();
  const pt = v.match(/[?&]pt=(\d+)/)?.[1] ?? (/^\d+$/.test(v) ? v : "");
  return pt || "128750110";
}
/** Campaign name for a link that doesn't name its own. */
const DEFAULT_CAMPAIGN = "invoicor.com";

export const AFFILIATE_SIGNUP_URL =
  "https://gomarketme.net/m/invoicor/c/b80f3289-edcb-4fb5-8548-4328a404d519/signup";

export const ANALYTICS_ENABLED = process.env.NEXT_PUBLIC_ANALYTICS !== "false";
export const GA_MEASUREMENT_ID = "G-DX0880SW9D";
/**
 * StatsUp: our own cookieless visitor counter, on our server in Germany. It runs for every visitor,
 * with or without cookie consent: no cookies, nothing sent to third parties; only a session ID and
 * page number in sessionStorage (gone when the tab closes). See the privacy policy, section 9.
 */
export const STATSUP_SITE_ID = "a5a3e40b-d48f-4787-a0b9-a215ac4d2a4a";
export const STATSUP_SCRIPT = "https://www.statsup.co/static/tracker/main.js";
export const POSTHOG_KEY = "phc_Pc8MPW957gjYlwUzKVdGBfcWXc2k7Oy8aM7BHZsI0EV";
/** PostHog US cloud. Moving to the EU cloud (eu.i.posthog.com) needs a new PostHog project (ROADMAP Y12). */
export const POSTHOG_HOST = "https://us.i.posthog.com";

/**
 * The App Store link every button, badge and QR code uses: Apple's campaign link, so App Store
 * Connect → App Analytics → Acquisition → Campaigns shows installs per button (`ct`), e.g. `hero`,
 * `template-plumbing`, `gen_success`. Without a name it's counted as "invoicor.com".
 */
export function appStoreLink(campaign: string = DEFAULT_CAMPAIGN): string {
  const params = new URLSearchParams({
    pt: APP_STORE_PROVIDER_TOKEN,
    // Apple accepts campaign names of up to 40 characters.
    ct: (campaign || DEFAULT_CAMPAIGN).slice(0, 40),
    mt: "8",
  });
  return `https://apps.apple.com/app/apple-store/id${APP_STORE_ID}?${params.toString()}`;
}

/** Absolute URL for a site path, e.g. absoluteUrl("/templates") */
export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** IndexNow key (Bing, Yandex, Seznam…). The same value is served at /<key>.txt from public/. */
export const INDEXNOW_KEY = "d3e8f87315d5d18c667a3f10ea082f94";
