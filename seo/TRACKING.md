# What the website measures

> ROADMAP chunk 14. Everything here only runs after a visitor clicks **Accept** in the cookie
> banner (decision D5). Before that, and after Decline, nothing loads.

## Tools

| Tool | What for | Where the data goes |
|---|---|---|
| Google Analytics 4 (`G-DX0880SW9D`) | traffic, sources, pages | Google, US. Consent Mode: ads storage always denied |
| PostHog (`us.i.posthog.com`) | events and funnels; session replay **off** | PostHog US cloud. Moving to the EU cloud is Y12 |
| Google Search Console, Bing Webmaster | search queries, indexing | not on the site, no cookies |
| App Store Connect | installs per campaign link | Apple, needs the provider token (Y6) |

Code: `components/analytics/Analytics.tsx` (loading), `lib/analytics.ts` (`track()`, the only
place that sends events), `components/analytics/ClickTracker.tsx` (clicks).

## Events

| Event | When | Properties |
|---|---|---|
| `$pageview` (PostHog) / `page_view` (GA4) | every page | automatic |
| `cta_click` | any App Store or sign-up button | `section`: where it was clicked (see campaigns below) |
| `footer_click` | footer links to pricing, help, affiliate, email, privacy, terms | `link` |
| `gen_form_start` | first edit in the free invoice generator | none |
| `gen_template_change` | a template picked in the generator | `template` |
| `gen_new_invoice` | “New invoice” clicked (keeps the business, clears client and items) | |
| `gen_generate` | "Download PDF" clicked | `template`, `currency`, `language` (no invoice content) |
| `gen_download` | the PDF downloaded | none |
| `gen_error` | the PDF couldn't be made | `code` (`rate_limited`, `bot_check`, `unavailable`, …) |
| `gen_app_click` | a locked template clicked (goes to the App Store) | `section` |

Add tracking to a link with attributes, no JavaScript needed:
`<a data-track="cta_click" data-track-section="hero">`.

## App Store campaigns (`ct`)

Every App Store link carries a campaign name via `appStoreLink(campaign)`, so App Store Connect can
show installs per placement. **This only works once the provider token is set** (Y6:
`NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN` at build time); until then the links are plain.

| Campaign | Placement |
|---|---|
| `hero`, `final`, `navbar`, `navbar_mobile`, `footer` | home page and site-wide |
| `pricing_free`, `pricing_starter`, `pricing_pro` | pricing table |
| `template-{slug}`, `template-{slug}-footer` | template pages |
| `industry-{slug}`, `industry-{slug}-footer` | industry pages |
| `compare-{slug}`, `compare-{slug}-footer` | compare pages |
| `templates-hub`, `industries-hub`, `compare-hub` | hub pages |
| `gen_success`, `qr_gen_success`, `gen-locked` | generator: after a download, QR code, locked template |

## The funnel to watch (PostHog)

`$pageview` (any page) → `cta_click` → App Store page → install (App Store Connect, by `ct`) →
trial → paid (app analytics). The website owns the first two steps; compare `cta_click` rate per
`section` to see which placements work, and per page type to see which SEO pages convert.

## UTM links for outside traffic

Links you post elsewhere (social, directories, outreach, newsletters) get UTM tags, so GA4 and
PostHog show where visitors came from. Lowercase, dashes, no spaces.

| Parameter | Use | Examples |
|---|---|---|
| `utm_source` | the site or platform | `reddit`, `producthunt`, `linkedin`, `newsletter`, `g2` |
| `utm_medium` | the type of link | `social`, `referral`, `email`, `listing`, `affiliate` |
| `utm_campaign` | what it's for | `launch-2026`, `templates-plumbing`, `compare-quickbooks` |
| `utm_content` | optional: which post or link | `post-1`, `bio-link` |

Example: `https://invoicor.com/templates/plumbing?utm_source=reddit&utm_medium=social&utm_campaign=templates-plumbing`

Never tag internal links (between invoicor.com pages): it overwrites the real source.
