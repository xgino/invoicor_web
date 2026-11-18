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

## The funnel to watch (PostHog)

`$pageview` (any page) → `cta_click` → App Store page → install (App Store Connect, by `ct`) →
trial → paid (app analytics). The website owns the first two steps; compare `cta_click` rate per
`section` to see which placements work, and per page type to see which SEO pages convert.
