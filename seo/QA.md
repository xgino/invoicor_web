# QA checklist (before every launch)

> ROADMAP chunk 26e. Run on a **local preview** of the production build (`npm run build && npm run preview`, then http://localhost:4173) before merging to
> `main`. Most of it is automated; the rest takes about 20 minutes by hand.

## Automated (must be green)

| Check | Command | Covers |
|---|---|---|
| Lint, types, SEO content rules, unit tests, build, built-site tests, browser tests | `npm run check` | every URL in `tests/urls.txt` exists with one H1, canonical and share image; consent banner; 404 status; axe accessibility on every page type (desktop + mobile); style guard; no banned claims |
| URL parity against the live site | `node scripts/parity-check.mjs --new http://localhost:4173` (nginx redirects show as 404 locally; they're checked after launch) | every old URL returns 200 or the expected 301; report in `seo/parity/` |
| CI | GitHub → Actions → `check` on the commit | same as `npm run check` on a clean machine |

## By hand

**Devices** (home, one template, one industry, one compare page, help):
- [ ] iPhone Safari: layout, navbar menu opens and closes, pricing switch, FAQ opens
- [ ] Android Chrome: same
- [ ] Desktop Chrome, Safari and Firefox: same, plus the sticky "On this page" list

**Performance** (Chrome DevTools → Lighthouse, mobile):
- [ ] Home ≥ 90 performance, ≥ 95 accessibility, 100 SEO
- [ ] One template page and one industry page: same targets

**Search**:
- [ ] Rich Results Test (search.google.com/test/rich-results) on the home page (FAQ), one template
      (HowTo, FAQ, breadcrumbs), one industry (FAQ, breadcrumbs) and the templates hub
- [ ] `curl -s http://localhost:4173/templates/plumbing | grep "<h1"` shows the
      real heading in the raw HTML

**Sharing**:
- [ ] Paste a template URL into Slack or WhatsApp **after launch** (a local preview isn't reachable from outside,
      so previews can't load there): branded card with the right title

**Consent and analytics** (on production after launch, in a private window):
- [ ] Banner appears; Decline → no requests to google-analytics.com or posthog.com (DevTools → Network)
- [ ] Accept → GA4 and PostHog requests appear; GA4 Realtime shows the visit
- [ ] Footer "Cookie settings" re-opens the banner

**Redirects** (production after launch):
- [ ] `curl -sI http://invoicor.com/` and `https://www.invoicor.com/` → 301 to `https://invoicor.com/`
- [ ] `curl -sI https://invoicor.com/pricing` → 301 to `/#pricing`
- [ ] `curl -sI https://invoicor.com/does-not-exist` → 404
