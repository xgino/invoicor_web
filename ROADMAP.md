# Invoicor Web Roadmap

_Last updated: 2026-11-18 (revision 6: split into **Planned** and **Done**)_

Goal: make invoicor.com **look premium and on-brand**, **rank well in search (Google, Bing and AI
assistants)**, and turn visitors into app users through the **free invoice generator**.

## How this file works

- **Two parts.** [Part 1: Planned](#part-1-planned) is everything still open, in the order to do
  it. [Part 2: Done](#part-2-done) is one line per finished item. When something is finished, move
  its line from Planned to Done, with the date.
- **One ID per item, kept forever** (code comments and commits point to them):
  chunks `1–60` · `P` polish · `X` your steps · `S` Search Console rounds · `L` learn.invoicor.com ·
  `W` web app · `D` decisions.
- **Who:** 👤 you (accounts, server, App Store, opinions) · 🤖 Claude · 👥 both.
  **Priority:** 🔴 essential · 🟠 important, soon · 🟢 when there's time.
- **The full step-by-step history** of everything finished (and the old Y-numbers) is in
  [docs/roadmap-archive-2026-11-18.md](docs/roadmap-archive-2026-11-18.md), unchanged.
- Background (API, design, languages, SEO rules, growth model) is in [Reference](#reference) at the end.

## Where things live

| What | Where | Notes |
|---|---|---|
| **invoicor.com** (marketing site, free generator, templates, industries, compares) | this repo, Next.js static export | Built on `dev`; `main` = what's deployed. Deploy by hand: [DEPLOY.md](DEPLOY.md) |
| **learn.invoicor.com** (blog: 17 how-to articles about the iPhone app) | a separate site, not in this repo | Own sitemap (`/sitemap.xml`). Plans in [L](#l-learninvoicorcom-the-blog) |
| **The API** (accounts, invoices, templates, PDFs, subscriptions) | `invoicor_api` (Django), servers in Germany | Reference: [R2](#r2-the-api) |
| **The iPhone app** | `invoicor_ios` + App Store | Facts the site may claim: [BRAND.md §10](BRAND.md#10-fact-sheet-what-the-app-does-check-every-claim-against-this) |
| Page content (30 SEO pages) · keyword plan | `content/*.json` · `seo/keyword-map.csv` | How to edit: [CONTENT.md](CONTENT.md) |

## Now (2026-11-18)

- **The new site is finished on `dev` but not live.** invoicor.com still runs the old site, so the
  rankings in Search Console are the old pages. Everything built since (redesign, free generator,
  the S1 SEO upgrade) only reaches Google after the launch: **X1–X6 are the one real blocker.**
- **Built and tested on `dev`:** Stages A–F, polish P1–P20, the free invoice generator (Stage G,
  fully in the browser), the Android "coming soon" page, and the S1 upgrade of all 30 SEO pages.
- **Next, in order:** 👤 launch (X1 → X6) · 👤 Search Console exports (X2) so 🤖 can do X9 and S1-k ·
  🤖 S1 leftovers and the L items · later: languages (Stage H) and growth (Stages I–J).

---

# Part 1: Planned

## 1. Your steps 👤 (in this order)

_Only you can do these: they need your accounts, your server, your company details or your opinion.
Claude prepares everything around them. The old "Your steps" (Y) and open decisions are merged in
here; the old number is in brackets._

**Before and at launch** (do these together):

| ID | Step | Time | Why / how |
|---|---|---|---|
| X1 | 🔴 Verify Google Search Console **by DNS** [Y13] | 10 min | GA now loads only after consent, so the old verification may break. Add a **Domain** property for `invoicor.com`, put its `google-site-verification` TXT record in DNS, verify. It also covers learn.invoicor.com. |
| X2 | 🔴 Export the SEO baseline [Y1] | 20 min | Search Console → Performance (3 months, CSV), Pages, Links; Bing the same. Put them in `seo/baseline/2026-11/`. Without a "before", nobody can tell if the launch helped. |
| X3 | 🔴 Check the server and merge the nginx config [Y2] | 30 min | DEPLOY.md A, steps 1–3. Paste the output of `grep -rln invoicor /etc/nginx/sites-enabled/` and `nginx -v` to Claude for the exact merged file. Same session as X5. |
| X4 | 🟠 Staging + QA checklist [Y17] | 45 min | DEPLOY.md A.4, then `bash deploy/deploy.sh --staging`, `npm run parity -- --new https://staging.invoicor.com …` and [seo/QA.md](seo/QA.md). Recommended for the first launch. |
| X5 | 🔴 Launch: merge `dev` → `main`, deploy [Y2] | 15 min | DEPLOY.md C. Rollback is one command. |
| X6 | 🔴 Tell Google and Bing [Y3] | 15 min | Submit `sitemap.xml` in both. URL Inspection → **Request indexing** for the home page, the generator and the 6 pages from S1 (plumbing, HVAC, freelance design templates; lawn care, electricians industries; Invoice2go compare). |
| X13 | 🔴 Post-launch watch, 4 weeks | 10 min/week | Week 1 daily: server 404s (`grep '" 404 ' /var/log/nginx/access.log \| tail -50`). Weekly: Search Console vs X2. Send Claude the 404s and exports. |

**Trust and legal** (soon after launch):

| ID | Step | Why / how |
|---|---|---|
| X7 | 🟠 Company details + your story [D6, Y4] | A Dutch business must show its KvK number. Send: legal name, KvK, (VAT), city, 3–5 sentences about you. Claude builds `/about`, `/contact` and the footer line. |
| X15 | 🟠 Lawyer review of Terms and Privacy | They now cover payments, fraud, US analytics and the Android counter. A fixed-price review is enough. |
| X16 | 🟠 Fix 2 claims in the App Store screenshots | Screenshot 2 says "Estimates" (doesn't exist) and "Trusted by businesses worldwide" (no proof). Apple guideline 2.3. |
| X11 | 🟠 OK the competitor facts [Y16] | Invoice2go and Wave are now sourced (S1). The other 8 compares are S1-l; confirm Claude's sourced drafts before promoting them. |

**When you have time:**

| ID | Step | Why / how |
|---|---|---|
| X8 | 🟢 Approve the brand draft [D7, Y5] | Read [BRAND.md](BRAND.md) §1–6, change what doesn't sound like you, mark it "Approved". |
| X10 | 🟢 App Store provider token [Y6] | App Store Connect → App Analytics → Campaigns → copy `pt=`. Then installs per page show up. |
| X12 | 🟢 Check 4 competitors by hand | Invoice Fly, Bookipi and Joist are live (E1). **Invoice Simple and PayPal block automated reading, Moon Invoice and Invoice Home show no prices in their page text**, so they can't be sourced by Claude. Open their pricing pages in a browser and send the plans and prices (or screenshots); Claude writes the pages. |
| X14 | 🟢 Small decisions that change page text [Y14, Y15] | D12 (time a real invoice: "5 seconds"?) and D14 (prices). See [Decisions](#3-decisions-still-open). |
| X17 | 🟢 Fresh app screenshots | Dashboard, new invoice, template picker, preview, share sheet → `assets/app-screens/`. |
| X18 | 🟡 Deploy the API template fixes | Branch `feature/public-generator` in `invoicor_api`: VAT ID, registration number, client email/phone, item details on their own line, 2-decimal money **in the app's PDFs**. Merge, `createcachetable`, restart, check one app PDF. The website doesn't need it. |
| X20 | 🟢 Move PostHog to its EU cloud [Y12] | New project on eu.posthog.com, send Claude the key; then only GA4 leaves the EU. |
| X21 | 🟢 iOS: brand accent color + rating prompt [D11, Y7] | `AccentColor` = `#E95D05`; the review prompt from chunk 50a; the generator → app hand-off from 34d (opening a draft in the app). |

_Your parts of the growth chunks (ASO listing 48–49 [Y8], profiles 51 [Y9], outreach 45/52/57 [Y10])
are listed inside those chunks: Claude drafts, you post or submit._

## 2. Next up for Claude 🤖

_No input needed unless noted. In order._

**S1 leftovers** (from the Search Console round, details in [S1](#s1-search-console-round-1-2026-11-18)):
- [ ] **S1-k** Re-measure on **2026-12-16** (or 4 weeks after X5): same report vs the baseline in `seo/keyword-map.csv`. _Needs your export._
- [ ] **S1-l** Source the prices of the other 8 compare competitors (QuickBooks, FreshBooks, Xero, Zoho, Square, HoneyBook, Bonsai, Stripe) on their pricing pages; add a "{Competitor} pricing" FAQ where people search for it. _Closes X11 with your OK._
- [ ] **S1-m** "Unlimited clients on every plan" (FreshBooks and other compares) isn't in the BRAND.md §10 fact sheet: verify in the app/API, then add it to the fact sheet or remove it.
- [ ] **S1-n** Rewrite the "Which file format?" section on template pages around the PDF from the generator; it still talks about Word and Excel, which we don't offer (chunk 53 would add real downloads).
- [ ] **S1-o** A real image of the filled-in template on each template page (Google Images + a reason to stay). Merges chunk 54a.
- [ ] **S1-p** If "air conditioning invoice" / "heating and cooling invoice" grow, a dedicated section on `/templates/hvac` first.
- [ ] **S1-q** Lawn care and electricians rank on page 5–6 for "… invoice app": track after S1-k; needs trust signals (reviews 50, profiles 51, links 57).

**E1 follow-ups** (the 30 new pages, see [E1](#e1-pseo-to-20-templates-20-industries-20-compares-2026-11-18)):
- [ ] **E1-a** **Measure in ~3 months (around 2027-02-18, or 3 months after X5):** per new page, impressions, average position and clicks in Search Console; and `template_use` / `gen_example` events per template in PostHog. Improve the 5 weakest the same way as S1 (titles and FAQs for the searches they show up for).
- [ ] **E1-b** Re-check the 10 new competitors' prices every 3 months (they change): Invoice Fly, Bookipi, Joist, Jobber, Housecall Pro, Invoice Ninja, Harvest, ServiceM8, Billdu, Zervant. Update `pricing_them_subtext` and the FAQ, with the new date.
- [ ] **E1-c** "Unlimited clients on every plan" is now used on 4 compare pages (from `content/pricing.json`, decision D1). Confirm it in the app/API and add it to the BRAND.md §10 fact sheet (closes S1-m).

**After the launch:**
- [ ] **X9** Fill in current positions in `seo/keyword-map.csv` and propose 10 priority keywords with 6-month targets. _After X2._
- [ ] **46** Set up the monthly 30-minute monitoring routine (Search Console, PostHog funnel, App Store installs).

## 3. Decisions still open

| ID | Decision | Recommendation | Blocks |
|---|---|---|---|
| D12 | "5 seconds" and "80% auto-fill" claims | Only with a real test (time a real invoice). Until then "in seconds". | hero copy |
| D14 | Raise prices? (Starter $4.99 → ~$7.99, Pro $7.99 → $14.99, new Unlimited $19.99) | Raise once, for new customers only; keep an entry tier; Unlimited only when the App Store product and API limit exist. Check trial → paid conversion first. Full reasoning in the archive. | pricing, ASO |
| D16 | Where do how-to guides live: learn.invoicor.com or a new `/guides` on the main site (chunk 42)? | **learn.invoicor.com.** It already has 17 articles and its own sitemap; a second blog would compete for the same searches. Chunk 42 becomes [L4](#l-learninvoicorcom-the-blog). | 42, L4 |
| D17 | When to start the web app ([W](#w-web-app-invoice-maker-and-accounts-in-the-browser))? | Not now. Start when one of the triggers in W is hit. | W |
| D9 | Shrink git history (228 MB of old `node_modules`) | Optional, low priority: `git filter-repo` + force-push. | n/a |

## L. learn.invoicor.com (the blog)

_A separate site with 17 how-to articles, all about using the iPhone app ("How to create an invoice
on iPhone in seconds", "What is an invoice maker", "How to send an invoice from iPhone by email"…).
Today the main site doesn't link to it, and it isn't in the keyword plan._

- [ ] **L1** 🤖 **Fact-check the 17 articles against BRAND.md §10.** Titles like "How auto-fill helps you create invoices faster", "How to create a receipt on iPhone" and "How a tax calculator helps" may promise things the app doesn't do (no receipts or estimates; one tax rate per invoice). List every claim to fix; 👤 you edit the blog.
- [ ] **L2** 🤖 **Link both ways.** Main site: a "Learn" link in the footer (and nav if it earns it), and 1–2 matching articles on each template, industry and generator page. Blog: every article links to the matching template page or the free generator. Internal links between the two sites help both rank.
- [ ] **L3** 👥 **Search Console and keyword plan.** The DNS domain property (X1) covers learn.invoicor.com; submit its sitemap there. Add every article to `seo/keyword-map.csv`, so a blog post and a template page never target the same search (one search intent = one URL).
- [ ] **L4** 🤖 **Guides go to the blog** (replaces chunk 42, after D16): write the planned how-to guides there (how to write an invoice, invoice numbering, payment terms explained, invoice vs receipt, how to invoice as a freelancer, late invoices), each with a FAQ, "last updated" and a link to the generator.
- [ ] **L5** 🤖 Mention learn.invoicor.com in `llms.txt` and the Organization JSON-LD, so AI assistants connect the two sites.

## 4. Later: growth and scale

_The original plan, still valid. Details below in [Planned chunks](#planned-chunks-details)._

**Stage H: Languages** (after the launch has settled)
- [ ] 36. Translation setup & language switcher
- [ ] 37. Auto-detect language (banner, never a redirect)
- [ ] 38. German
- [ ] 39. Spanish
- [ ] 40. French, Portuguese, Italian, Dutch

**Stage I: Scale & grow**
- [ ] 41. Performance & security hardening
- ~~42. Guides hub~~ → moved to the blog: **L4** (D16)
- [ ] 43. Country generator pages (UK VAT, EU reverse charge, Australia GST, Canada GST/HST)
- [ ] 44. More free tools: receipt and estimate generators
- [ ] 45. Launch & backlinks (listings, embed snippet, roundups)
- [ ] 46. Monthly monitoring routine

**Stage J: Growth track** (can run in parallel any time)
- [ ] 47. Competitor SEO & link gap analysis
- [ ] 48. App Store Optimization: the listing 👥
- [ ] 49. App Store Optimization: localized listings 👥
- [ ] 50. Ratings & reviews engine (iOS)
- [ ] 51. Brand entity & profiles 👥
- [ ] 52. Social, video & communities 👥
- [ ] 53. Downloadable templates (Word, Excel, Google Docs, PDF)
- [ ] 54. Image & video SEO (54a is S1-o)
- [ ] 55. Free micro-tools (link magnets)
- [ ] 56. Scale the programmatic content
- [ ] 57. Digital PR & link building 👥
- [ ] 58. Email capture & lifecycle
- [ ] 59. Affiliate & partner program 👥
- [ ] 60. Conversion experiments

## W. Web app: invoice maker and accounts in the browser

**Big, and not essential at this stage** (D17). Today Invoicor is an iPhone app; the website has a
free generator for one-off invoices that saves nothing to an account. The web app would let people
**sign in on the web** and do what the app does: saved clients and products, business profiles,
invoice history with statuses, PDFs without a watermark, the same subscription.

**Why it's interesting:** Android users (the [/android](app/android/page.tsx) counter measures how many
ask), people who invoice from a laptop, and generator users who want to keep their invoices. Almost
everything it needs already exists in **our own API** (accounts, Apple/Google sign-in, invoices,
clients, products, profiles, render/PDF, subscriptions: see [R2](#r2-the-api)), so it's a second
front end, not a new product.

**Why not now:** it's a second app to build, test and support, and the iPhone app plus the launch
(X1–X6) and SEO bring more for the effort today. The free generator already covers "I need one
invoice now".

**Start when one of these happens** (check at S1-k and in the monthly routine, chunk 46):
- the Android counter passes a clear number of visits (e.g. 1,000), or
- generator users often ask to "save" their invoices or create an account, or
- a large share of installs comes from people who first used the generator on a computer.

**Rough plan, when it starts:**
- [ ] **W1** 👥 Scope and billing: which features first; how web subscriptions work next to App Store ones (one account, one plan, wherever it was bought; e.g. RevenueCat web billing or Stripe), and the price.
- [ ] **W2** 🤖 Where it lives: `app.invoicor.com`, separate from the static marketing site (it needs sign-in, so it can't be a static export); same brand components.
- [ ] **W3** 🤖 Sign-in on the web: email + password, Sign in with Apple and Google, through the API; session handling, CORS and security headers checked; password reset.
- [ ] **W4** 🤖 Invoices: list with statuses, create/edit/duplicate, PDF from the API (no watermark), share or email. Reuse the generator's form and preview.
- [ ] **W5** 🤖 Clients, products and business profiles, the same limits per plan as the app (API `subscriptions/limits.py`).
- [ ] **W6** 👥 API work: check every endpoint the web needs exists and is safe for browser use (rate limits, CORS, token storage); add what's missing in `invoicor_api`.
- [ ] **W7** 🤖 Privacy policy, terms and BRAND.md §10 updated; GDPR export and account deletion on the web.
- [ ] **W8** 🤖 Launch: "Save this invoice to a free account" in the generator, the /android page offers the web app, App Store and web accounts stay one account.
- An installable web app (PWA) could also be the first answer to Android, before a native Android app.

---

# Part 2: Done

_One line per finished item, newest first. Full details: [the archive](docs/roadmap-archive-2026-11-18.md)._

### E1. pSEO to 20 templates, 20 industries, 20 compares (2026-11-18)

30 new pages, each for a search the site didn't cover yet, with the same structure as the S1-upgraded pages
(example invoice that opens in the generator, keyword H1, FAQs, "Updated" date, cross-links):

| Type | New pages |
|---|---|
| Templates | electrician, construction (progress billing), roofing, painting, web development, personal training, tutoring, catering, moving, pest control |
| Industries | roofers, painters, web developers, tutors, caterers, movers, pest control, virtual assistants, pet care, hair & makeup artists |
| Compares | Invoice Fly, Bookipi, Joist, Jobber, Housecall Pro, Invoice Ninja, Harvest, ServiceM8, Billdu, Zervant |

- [x] Every template example adds up (checked line by line), and opens filled in via "Use this template free". New templates have no "Which file format?" section (no Word/Excel promises).
- [x] Template ↔ industry pairs: 7 new pairs, and the electrician, construction and personal training templates give the existing electricians, general contractors and personal trainers pages a template at last.
- [x] Compare facts read from each competitor's own pricing page on 2026-11-18 and dated on the page. Where they're stronger (estimates, scheduling, Android, teams), the page says so. 5 comparison rows I couldn't source were replaced by sourced ones.
- [x] Old pages link to the new ones (related links on 10 templates, 8 industries and 8 compares); 30 rows added to `seo/keyword-map.csv`; `tests/urls.txt` protects all 72 URLs.
- [x] `content:check`: 60 pages, 0 errors, 0 warnings (every page ≥ 500 words, no near-duplicates, titles ≤ 60, descriptions ≤ 155). The claim tests cover all 60 pages.

### S1. Search Console round 1 (2026-11-18)

Data (Search Console, 28 days to 2026-11-18): almost all impressions went to 6 pages on positions
25–55. Baseline per page is in `seo/keyword-map.csv`.

| Page | Impr. | Pos. | Searches the page didn't answer |
|---|---|---|---|
| `/templates/plumbing` | 573 | 26.8 | plumbing bill template, plumbing invoice sample / examples |
| `/industries/landscaping-lawn-care` | 432 | 51.5 | lawn care invoice app, lawn care billing software, landscape billing |
| `/templates/hvac` | 368 | 54.0 | air conditioning invoice, hvac service invoice, heating and cooling invoice, hvac invoice example |
| `/templates/freelance-design` | 237 | 30.0 | how to write an invoice for freelance design, freelance artist invoice template |
| `/compare/invoice2go` | 101 | 24.0 | invoice2go pricing |
| `/industries/electricians` | 64 | 46.0 | electricians billing software |

- [x] a. "Use this template free" on all 10 template pages: the generator opens with that page's example filled in (`?example=slug`); "Fill in this example online" under each example; industry pages open their template's example.
- [x] b. Titles, H1s and descriptions rewritten per type for real searches; keyword H1s instead of slogans on industry and compare pages.
- [x] c. "{Niche} invoice example" sections; "(PDF, Word, Excel)" removed from template titles (closes D15).
- [x] d. New FAQs for unanswered searches (plumbing, HVAC, freelance design, lawn care, Invoice2go, Wave).
- [x] e. Invoice2go ($44.99, not $39.99) and Wave prices sourced from their pricing pages; unsourced claims replaced.
- [x] f. Template ↔ industry cross-links (`industry` field in `content/templates.json`).
- [x] g. Visible "Updated" date on all template, industry and compare pages.
- [x] h. `content:check`: 0 warnings (was 25). i. Tracking: `template_use`, `gen_example`.

### Stage G: Free invoice generator (2026-11-18)
- [x] 35d. Android "coming soon" button and `/android` page with a public visit counter (Abacus). _Keep the counter's admin key in your password manager._
- [x] 35c. PDF made in the browser (no API needed; Chrome and Safari tested; links stay clickable).
- [x] 35b. Feedback round: VAT/registration numbers, client email/phone, item details on their own line, 2-decimal money, the watermark in the preview, one-page warning, calmer form in invoice order, "Saved in this browser".
- [x] 35. SEO content (1,250 words, 10 FAQs), JSON-LD, share image, links from every page, privacy policy.
- [x] 34. Download flow, success panel, app hand-off copy. _Opening a draft in the app needs iOS work: X21._
- [x] 33. Live preview filled in the browser on every keystroke (matches the API for all 21 free templates × 11 languages); template picker.
- [x] 32. Form, draft model, totals (same math as the app), autosave.
- [x] 30–31. API public render/PDF endpoints with rate limits [Y11]: built on `feature/public-generator`, then **made unnecessary** by 33 and 35c (the branch's template fixes are X18).
- [x] X19. Bot check (Turnstile): not needed any more (35c).

### Stage P: Polish from your review (2026-11-18)
- [x] P1–P10. Honest wording · "send it anywhere" trust row · "How it works" path · promises · fee calculator as a gain · pricing layout · premium motion · legal (payments, fraud) · FAQ search optimisation · mobile and speed.
- [x] P11–P20. Price anchors · monthly price first · hand-drawn doodles · "Who it's for" · real app screens in an iPhone frame · sticky "Get the app" bar · QR code for desktop · speed recheck (LCP ≈ 0.7 s, CLS 0) · FAQ audit · plain security wording.

### Stage F: Switch to Next.js (prepared 2026-11-18; the launch itself is X3–X6)
- [x] 26. Staging config, `deploy.sh --staging`, [seo/QA.md](seo/QA.md) (running it: X4).
- [x] 27. URL parity check: `npm run parity`, 0 failures against the live site.
- [x] 28. Launch runbook (DEPLOY.md C). 29 → X13.

### Stage E: Rebuild the pages in the new brand (2026-11-18)
- [x] 18. Navbar & footer · 19–20. Landing page (real sample invoice hero, fee calculator, invoice-style pricing, FAQ) · 21–23. Template, industry and compare pages + hubs (33 false claims fixed) · 24. Help, affiliate, legal, 404 · 25. Motion (CSS only, reduced-motion safe).

### Stage D: Brand system (2026-11-18)
- [x] 15. Tokens (`styles/tokens.css`) · 16. Logo, icons, share images · 17. UI kit (`components/ui/`, on `/brand`) · 17.1 Tests (unit, style guard, built-site, browser, accessibility) · 17.2 Invoice-style components.

### Stage C: Next.js foundation (2026-11-17)
- [x] 8. App skeleton (static export) · 9. Tooling & CI · 10. Typed API client · 11. Content pipeline + `content:check` · 12. Metadata & JSON-LD · 13. Sitemap, robots (AI bots allowed), `llms.txt`, IndexNow · 14. GA4 + PostHog after consent, App Store campaign links.

### Stage B: Strategy (2026-11-17)
- [x] 5. [BRAND.md](BRAND.md) (approval: X8) · 6. [seo/keyword-map.csv](seo/keyword-map.csv) · 7. [seo/BLUEPRINTS.md](seo/BLUEPRINTS.md).

### Stage A: Clean repo, baseline & deploy (2026-11-17)
- [x] 1. Repo cleanup · 2. [DEPLOY.md](DEPLOY.md) + nginx config (server check: X3) · 3. `deploy/deploy.sh` (manual, with staging and rollback) · 4. SEO fixes (baseline export: X2).

### Decisions made

| ID | Decision | Date |
|---|---|---|
| D1 | Prices = what the App Store charges, one source (`content/pricing.json`): Free (3 invoices), Starter $4.99/mo or $49.99/yr, Pro $7.99/mo or $79.99/yr; trials 3 days (monthly) / 7 days (yearly) | 2026-11-17 |
| D2 | No fake social proof; true facts until real reviews | 2026-11-17 |
| D3 | All AI bots allowed (search and training) | 2026-11-17 |
| D4 | PostHog + GA4 only | 2026-11-17 |
| D5 | Branded consent banner; nothing with cookies before Accept | 2026-11-17 |
| D8 | Templates hub title "Free Invoice Templates by Industry" kept | 2026-11-17 |
| D10 | Build the free generator (Stage G) | 2026-11-18 |
| D13 | Light only, no dark sections | 2026-11-18 |
| D15 | Template titles no longer promise Word/Excel (S1); real downloads stay chunk 53 | 2026-11-18 |
| — | Static export, no Node on the server; redirects in nginx; language detection as a banner, never a redirect | 2026-11-17 |
| — | The generator runs fully in the browser (preview and PDF); no API calls, no rate limits needed | 2026-11-18 |

---

# Planned chunks (details)

_The step-by-step plans for the chunks listed in [Later: growth and scale](#4-later-growth-and-scale)._

## Stage H: Languages
_See [R4](#r4-language-strategy) for the strategy._

### 36. Translation setup & language switcher
**Goal:** the site is ready for any language; English still the only one live.

- [ ] a. Move every UI string from the components into `messages/en.json` (next-intl). Add a lint rule or check against hard-coded text in JSX.
- [ ] b. Content per locale: `content/{locale}/…`, falling back to English. `content:check` validates every locale.
- [ ] c. Translated slugs with next-intl `pathnames` (e.g. `/free-invoice-generator` → `/de/kostenloser-rechnungsgenerator`).
- [ ] d. `buildMetadata()` outputs `hreflang` for every live locale + `x-default`. The sitemap lists every language version.
- [ ] e. `<LanguageSwitcher>` (globe icon) in the navbar and footer: each language named in itself (Deutsch, Español…), and switching goes to the **same page** in that language.
- [ ] f. Locale-aware formatting: dates and numbers with `Intl`, and a default currency per locale.

**Done when:** adding a language means adding JSON files only, with no code changes.

### 37. Auto-detect language
**Goal:** visitors are offered their language without hurting SEO.

- [ ] a. In the browser (a static site has no `proxy.ts`): on the **first visit to `/` only**, read `navigator.languages`.
- [ ] b. **Don't redirect.** Show a small banner: “🇩🇪 Diese Seite auf Deutsch ansehen?” → Ja / No thanks. (Turn off next-intl's automatic locale redirect.)
- [ ] c. Save the choice in a `lang` cookie (1 year), and never ask again.
- [ ] d. Check that Googlebot (no `Accept-Language`) always gets the page it asked for.

**Done when:** a browser set to German sees the banner once, and Google still crawls `/` and `/de/` separately.

### 38. German
**Goal:** `/de/` live for the pages that matter most.

- [ ] a. German keyword research: map the main clusters from chunk 6 to German search terms (e.g. "Rechnung erstellen kostenlos", "Rechnungsvorlage"). **Don't just translate the English keywords.**
- [ ] b. Machine-translate `messages/de.json`, then have a native speaker review it.
- [ ] c. Translate the landing page, generator (+ SEO content), top 10 template pages and top 5 industry pages. Local details: “Rechnung”, USt/MwSt, IBAN, EUR default, German invoice rules (e.g. the required fields of a German invoice).
- [ ] d. German translated slugs + metadata.
- [ ] e. Enable `de`, deploy, submit the sitemap, and inspect 3 URLs in Search Console.

**Done when:** the `/de/` pages are indexed and `hreflang` is valid.

### 39. Spanish
**Goal:** `/es/` live: the same steps as chunk 38 ("factura", IVA, EUR/MXN depending on the region, Spain vs Latin America wording).

- [ ] a. Spanish keyword research.
- [ ] b. Translate the messages, with a review.
- [ ] c. Landing, generator, top templates and industries.
- [ ] d. Slugs + metadata.
- [ ] e. Enable, deploy, Search Console.

**Done when:** the `/es/` pages are indexed with valid `hreflang`.

### 40. French, Portuguese, Italian, Dutch
**Goal:** cover the rest of the main European languages, one at a time.

- [ ] a. Look at the Search Console data from DE/ES first: which pages earned traffic? Translate those first.
- [ ] b. For each language, repeat chunk 38's steps a–e.

**Done when:** all four are live and indexed.

## Stage I: Scale & grow

### 41. Performance & security hardening
**Goal:** fast on a mid-range phone, and safe.

- [ ] a. Measure: Lighthouse mobile + PageSpeed Insights (real-user data) on the home page, generator, a template page and an industry page.
- [ ] b. Targets: LCP < 2.5 s, CLS < 0.1, INP < 200 ms, Lighthouse ≥ 95.
- [ ] c. Fix the findings:
  - every image through `next/image`
  - lazy-load the generator preview and the carousel
  - check the analytics loading
  - subset the fonts
- [ ] d. nginx: Brotli/gzip on, long cache headers for `/_next/static/`, HTTP/2 or HTTP/3.
- [ ] e. Security headers:
  - `Strict-Transport-Security`
  - `Content-Security-Policy` (allow only the analytics, the API for template thumbnails, and the Android counter at abacus.jasoncameron.dev)
  - `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
  - `frame-ancestors` (allow embedding only for the embed widget route)
- [ ] f. Monitoring:
  - an uptime check (e.g. UptimeRobot) on `/` and `/api/invoices/templates/`
  - error tracking (Sentry or PostHog exceptions) for the web app
- [ ] g. Check the score on securityheaders.com.

**Done when:** all four pages hit the targets, securityheaders.com gives an A, and you get an alert when the site is down.

### 42. ~~Guides hub~~ → L4
The how-to guides go to learn.invoicor.com instead of a new `/guides` section (D16). See [L](#l-learninvoicorcom-the-blog).

### 43. Country generator pages
**Goal:** win country/tax searches with a different intent from the main generator (no doorway pages, see chunk 6d).

- [ ] a. Only for countries with **real differences** in their invoice rules:
  - `/invoice-generator-uk` (VAT number, VAT rates)
  - `/eu` (IBAN, reverse charge)
  - `/australia` (GST, ABN)
  - `/canada` (GST/HST)
- [ ] b. Each page: the generator preset (currency, tax, required fields) + **unique** content on that country's invoice rules + FAQ. It must pass `content:check` similarity.
- [ ] c. Link them from the main generator page ("Invoicing in the UK? →") and the related guides.

**Done when:** 4 country pages are live, unique and indexed.

### 44. More free tools (receipt, estimate)
**Goal:** more entry points from the same engine.

- [ ] a. Generator: a `document_type` (receipt | estimate) with its own title label and fields, filled in the browser like the invoice (no API needed). Check BRAND.md §10 first: the app itself has no receipts or estimates, so say so on the pages.
- [ ] b. `/free-receipt-generator` and `/free-estimate-generator` reuse the generator components, each with its own blueprint and content.
- [ ] c. A "Free tools" footer column + a navbar dropdown (the calculators come in chunk 55).

**Done when:** both generators are live with the watermark and their SEO content.

### 45. Launch & backlinks
**Goal:** outside links and the first users.

- [ ] a. Track the watermark: check that `?ref=pdf` visits show up in analytics.
- [ ] b. Listings: Product Hunt, AlternativeTo, SaaSHub, G2/Capterra, freelancer tool lists. Use UTM links (chunk 14f).
- [ ] c. An "Embed this generator" snippet (iframe + a credit link back) for blogs and accountants.
- [ ] d. Outreach to the "best free invoice generator" roundups (find them on Google, ask for inclusion). Ongoing link building continues in chunk 57.
- [ ] e. Removing the watermark becomes a listed perk of the paid plans (upsell copy on the pricing page).
- [ ] f. Keep the Organization `sameAs` profiles up to date (App Store, LinkedIn, X, Product Hunt).

**Done when:** you're listed in 5+ places and the first referral traffic is visible.

### 46. Monthly monitoring routine
**Goal:** a 30-minute check every month.

- [ ] a. Search Console:
  - clicks and position for the 10 priority keywords (chunk 6h) and each language's equivalents
  - pages with impressions but low clicks → rewrite title/description
  - coverage errors
- [ ] b. Bing Webmaster: the same quick look.
- [ ] c. PostHog: the generate → download → app click / signup funnel. Find the step with the biggest drop.
- [ ] d. App Store Connect: installs per campaign (`ct`), to see which pages bring users.
- [ ] e. Core Web Vitals + uptime report.
- [ ] f. Growth KPIs from [R8](#r8-growth-model): organic clicks, referring domains, App Store search installs, generator → install rate, reviews.
- [ ] g. **Content refresh:** pick the 3 pages whose clicks dropped most over 3 months. Update their facts, examples and FAQs, and change the "last updated" date only when the content really changed.
- [ ] h. Pick the 1–2 biggest fixes and add them as new chunks at the end of this file.

**Done when:** it's a recurring calendar item (or a scheduled Claude task).

## Stage J: Growth track
_Inbound (people find you) and outbound (you go to them). Paid channels (Apple Search Ads, the Meta ads in `invoicor_api/docs/meta/`) are outside this roadmap, but use their data to guide the organic work._

### 47. Competitor SEO & link gap analysis
**Start:** now. **Goal:** know exactly what the leaders rank for and where their links come from, so we copy what works and target what they miss.

- [ ] a. Tools: the Ahrefs free tools / Webmaster Tools (free for your own site), plus a 7-day Semrush or Ahrefs trial for competitor data.
- [ ] b. For Invoice Simple, Invoice Home, Zoho Invoice, Bookipi, Invoice Fly and Invoice2go's websites, list:
  - their top 50 pages by organic traffic
  - the keywords they rank for that we have no page for (the **keyword gap**)
  - their page types (generators, templates by format, industry pages, guides, calculators)
- [ ] c. **Link gap:** the sites linking to 2+ competitors but not to us (roundups, directories, resource pages, blogs). This becomes the outreach list for chunk 57.
- [ ] d. Look at their SERP features: who has featured snippets, image results and video results for the top keywords?
- [ ] e. Save it as `seo/competitors.md` + `seo/link-targets.csv`. It feeds chunk 6 (keyword map) and chunk 57 (links).

**Done when:** you can name the 20 keywords and the 30 linking sites with the best opportunity.

### 48. App Store Optimization: the listing
**Start:** now. **Goal:** more installs from App Store search, which is probably the biggest organic channel for an iOS app and doesn't need the website at all.

- [ ] a. **Keyword research** in the App Store: autocomplete for "invoice…", "receipt…", "estimate…", "bill…"; competitor titles and subtitles; the Apple Search Ads keyword-popularity data if you have an account.
- [ ] b. **Title (30 characters)** and **subtitle (30)**: the strongest keywords, read naturally. Example direction: "Invoicor: Invoice Maker" + "Free Invoices & Estimates PDF". Test what actually fits.
- [ ] c. **Keyword field (100 characters):**
  - comma-separated, no spaces after commas
  - no words already in the title or subtitle
  - no plurals of words you already have
  - no competitor brand names
- [ ] d. **Screenshots** (the first 3 matter most) in the new brand:
  - each one has one benefit headline: speed, templates, currencies, honestly free
  - real app screens
- [ ] e. **App preview video** (15–30 s): an invoice made in 5 seconds.
- [ ] f. **Description:** the first 3 lines carry the message (that's what shows before "more"). It doesn't affect search ranking on iOS, but it drives conversion.
- [ ] g. **Custom product pages** (up to 35): one per audience (freelancer, contractor, consultant) with matching screenshots. Link each from the matching website page (chunk 14e campaign links) and use them in ads.
- [ ] h. **In-app events** for real updates (new templates, new languages). These show up in App Store search.
- [ ] i. Track in App Store Connect: impressions, product page views, conversion rate, installs from search. Change one thing at a time, every 2–4 weeks.

**Done when:** the new listing is live and you have a 4-week before/after on search impressions and conversion.

### 49. App Store Optimization: localized listings
**Start:** after 48. **Goal:** rank in the App Store in other countries, which is much faster than translating the website.

- [ ] a. Localize the title, subtitle, keywords and screenshots for the top markets: DE, ES, MX, FR, IT, NL, PT-BR, UK, AU, CA. Each locale has **its own 100-character keyword field**.
- [ ] b. Do keyword research per language (e.g. "Rechnung", "factura"); don't just translate the English keywords.
- [ ] c. Use the extra locales a storefront indexes (for example, the US store also indexes the Spanish (Mexico) listing) to fit more keywords.
- [ ] d. Make sure the app itself is fully localized in those languages; reviews punish half-translated apps.
- [ ] e. Measure installs per country in App Store Connect after 4 weeks.

**Done when:** at least 6 localized listings are live and installs from those countries are measured.

### 50. Ratings & reviews engine
**Start:** now (iOS app work). **Goal:** many real, recent ratings. They lift App Store ranking and conversion, and give the website true social proof.

- [ ] a. In the app: ask for a rating with `SKStoreReviewController` at a **happy moment** (e.g. after the 2nd invoice is sent or marked paid). Never right after a bug or a paywall.
- [ ] b. Before the system prompt, a simple "Enjoying Invoicor?" choice: yes → the rating prompt; no → a feedback form (the existing `/api/feedback/`), so unhappy users reach you instead of the store.
- [ ] c. Reply to every App Store review, especially negative ones, within 48 hours.
- [ ] d. Create profiles on G2, Capterra and Trustpilot. Invite happy users (email or in-app).
- [ ] e. Collect testimonials with permission (name, job, photo) for the website (chunk 20d) and update the real rating in `softwareAppLd()`.

**Done when:** the rating prompt is in production and new ratings arrive every week.

### 51. Brand entity & profiles
**Start:** now. **Goal:** Google (and AI assistants) understand "Invoicor" as a real brand: consistent profiles, branded search results, a chance of a knowledge panel.

- [ ] a. Create or complete the profiles with the same name, logo, description and URL everywhere:
  - LinkedIn company page
  - X/Twitter
  - Product Hunt
  - Crunchbase
  - YouTube channel
  - Pinterest business account
  - the App Store developer page
- [ ] b. Add them all to `organizationLd()` `sameAs` (chunk 12c).
- [ ] c. Get listed in the major app and software directories (AlternativeTo, SaaSHub, Capterra, G2, GetApp). These are also links.
- [ ] d. Check the branded search ("invoicor") monthly: what shows up, and is anything wrong or missing?

**Done when:** every profile exists, is consistent, and is linked from the site's JSON-LD.

### 52. Social, video & communities
**Start:** now. **Goal:** steady outbound reach that brings visitors, brand searches and links, at a pace you can keep up.

- [ ] a. **Short video** (TikTok, Reels, YouTube Shorts): "invoice in 5 seconds", "invoice mistakes that delay payment", before/after templates. Reuse the `social video` material and the `posttune` tooling. Aim for 3 a week.
- [ ] b. **YouTube tutorials** (long form): "How to make an invoice on iPhone", "How to invoice as a freelancer", "Invoice template walkthrough". YouTube is the second-largest search engine, and its videos show up in Google results. Embed them in the matching guides (chunk 54).
- [ ] c. **Pinterest:** a pin for every template (vertical image → template page). Template searches do very well on Pinterest.
- [ ] d. **Reddit & communities** (r/freelance, r/smallbusiness, r/Entrepreneur, Indie Hackers, local freelancer groups):
  - answer invoicing questions helpfully
  - mention Invoicor only where it really fits, and follow each community's self-promotion rules
  - a "Show" post when the generator launches
- [ ] e. **Build in public** on X/LinkedIn: milestones, design work, numbers. This earns attention from other makers, who are also potential linkers.
- [ ] f. Every link out uses UTM tags (chunk 14f). Review monthly which channel actually brings installs, and double down on it.

**Done when:** a posting rhythm runs for 4 weeks, and the best channel is known from the UTM data.

### 53. Downloadable templates (Word, Excel, Google Docs, PDF)
**Start:** after 21. **Goal:** capture the biggest template searches ("invoice template word", "invoice template excel", "google docs invoice template", "printable invoice pdf"), which the app-only templates can't serve today.

- [ ] a. Make the top 10 free templates as **.docx**, **.xlsx** (with working formulas), **Google Docs/Sheets** ("Make a copy" links) and **printable PDF**.
- [ ] b. A small "Made with Invoicor · invoicor.com" credit in each file's footer. People who reuse and share the files spread the brand, the same way the PDF watermark does.
- [ ] c. Pages:
  - `/templates/word`, `/templates/excel`, `/templates/google-docs`, `/templates/pdf` (one page per format: a different search intent each)
  - download buttons on every template page
- [ ] d. Every download page also offers "or fill it in online" → the generator (with that template's example, like S1-a), and "or on your phone" → the App Store.
- [ ] e. Track downloads as `tpl_download` events with the format.
- [ ] f. Add the format pages to the keyword map and the sitemap.

**Done when:** the 4 format pages are live with 10 templates each, and downloads are tracked.

### 54. Image & video SEO
**Start:** after 21. **Goal:** extra traffic from Google Images and video results. Template searches are very visual.

- [ ] a. Template preview images: descriptive file names (`classic-invoice-template.png`), real alt text ("Classic invoice template with blue header and itemized table"), served through `next/image`, listed in the sitemap (chunk 13a).
- [ ] b. Large, high-quality previews (1200 px+ wide) with `max-image-preview:large` in robots meta, so Google can show big thumbnails.
- [ ] c. Embed the YouTube tutorials (chunk 52b) in the matching guide and template pages, with `VideoObject` JSON-LD.
- [ ] d. Check Search Console → Performance → search type "Image" and "Video" monthly.

**Done when:** template images get impressions in Google Images, and the guide videos have `VideoObject` markup.

### 55. Free micro-tools (link magnets)
**Start:** after 35. **Goal:** small, useful tools that people bookmark and other sites link to.

- [ ] a. Pick 4–6 from the keyword map, for example:
  - invoice number generator
  - late payment fee / interest calculator (with EU/UK late payment rules)
  - VAT / sales tax calculator
  - due date calculator (Net 15/30/60)
  - freelance hourly rate calculator
- [ ] b. Each tool: client-side, instant, no signup; its own page following a "tool" blueprint (short explanation, FAQ, a link to the generator); `webAppLd()`.
- [ ] c. A "Free tools" hub page (`/tools`) linked from the navbar and footer.
- [ ] d. A "use this on your site" embed option for the calculators (like chunk 45c), with a credit link.
- [ ] e. Pitch the tools in the link-building outreach (chunk 57): "a free resource for your readers" works far better than "link to our app".

**Done when:** 4 tools are live, indexed and listed on `/tools`.

### 56. Scale the programmatic content
**Start:** after 42. **Goal:** more pages that each serve a real, different search, without becoming thin or doorway pages.

- [ ] a. **Industries:** grow from today's set to 50–100 professions, prioritized by the keyword map. Each page gets unique content: that profession's billing practices, typical line items, an example invoice. It must pass `content:check`.
- [ ] b. **Glossary** (`/glossary/[term]`): pro forma invoice, credit note, reverse charge, Net 30, PO number, VAT invoice, self-billing… Short, clear definitions (AI assistants like to quote these), each linking to a guide or template.
- [ ] c. **"How to invoice in {country}"** guides for the top 20 countries: legal requirements, tax, numbering rules, language. They link to the country generator pages (chunk 43).
- [ ] d. Translate the best-performing pages into the live languages (Stage H).
- [ ] e. Watch quality: if a batch of new pages isn't indexed after 6–8 weeks, improve those pages before adding more.

**Done when:** each section grows by its planned batch, and at least 80% of the new pages are indexed.

### 57. Digital PR & link building
**Start:** after 35. **Goal:** a steady flow of quality backlinks: the thing that decides whether we can win the head terms.

- [ ] a. **Linkable assets:** the free tools (55), the downloadable templates (53), the guides (42), and a yearly **data report**.
- [ ] b. **Data report:** "The Invoicing Report 2027", built from **anonymized, aggregated** generator and app stats (most used currencies, average payment terms by country, busiest invoicing days), plus a small freelancer survey. Pitch it to journalists and freelancer/finance blogs. Check the privacy policy covers aggregated stats.
- [ ] c. **Outreach** to the link-gap list from chunk 47:
  - roundups ("best invoice apps 2027")
  - resource pages for freelancers and small businesses
  - university/bootcamp career pages
  - coworking spaces
  - accountant blogs
- [ ] d. **Expert quotes:** answer journalist requests on Qwoted / Featured.com about invoicing and freelancing.
- [ ] e. **Guest posts:** 1–2 a month on freelancer, design, trades and small-business blogs, with useful content and one natural link.
- [ ] f. **Partnerships:** freelancer unions/associations, accounting firms, banks/fintechs for freelancers. Co-branded templates or guides.
- [ ] g. **Unlinked mentions:** monthly search for "Invoicor" without a link → a polite request to add it.
- [ ] h. **Never** buy links or use link schemes (Google penalty risk).
- [ ] i. Track referring domains monthly (Ahrefs Webmaster Tools, Search Console links).

**Done when:** outreach runs every month, and referring domains grow month over month.

### 58. Email capture & lifecycle
**Start:** after 34. **Goal:** turn one-time generator visitors into app users through email, not just one page visit.

- [ ] a. In the generator success panel: **optional** "Email me a copy" and "Remind me when this invoice is due". These are useful reasons to give an email, not a gate.
- [ ] b. Double opt-in, a clear consent text, and an unsubscribe link (GDPR). Add it to the privacy policy.
- [ ] c. Tool: Loops, Resend or Brevo. Store only the email + consent + the due date, not the invoice data.
- [ ] d. A 4–5 email sequence over 3 weeks:
  - the copy and the due-date reminder
  - "get paid faster" tips
  - "track this invoice in the app"
  - template showcase
  - an honest free-plan explanation
  - each one with an App Store link (`ct=email-{n}`)
- [ ] e. Measure open → click → install, and improve the weakest email first.

**Done when:** the sequence runs, and email-sourced installs show up in App Store Connect.

### 59. Affiliate & partner program
**Start:** after 24. **Goal:** other people promote Invoicor for a reward. The `/affiliate` page exists, but nobody is recruited yet.

- [ ] a. Check how affiliate payouts work today (RevenueCat? a tool like Rewardful/FirstPromoter?) and how referrals are tracked from the web into the app.
- [ ] b. Recruit: freelancer YouTubers and TikTokers, accountants and bookkeepers, freelancer course creators, and the blogs from chunk 57.
- [ ] c. A partner kit: logos, screenshots, short copy, custom product page links (chunk 48g), UTM/`ct` links.
- [ ] d. Their own landing pages where worthwhile (`/partners/{name}`, `noindex`), with an offer such as an extended free period.
- [ ] e. Monthly: payouts, the top partners, and a thank-you to them.

**Done when:** 10 active partners, and referral installs are tracked.

### 60. Conversion experiments
**Start:** after 35. **Goal:** more installs from the same traffic.

- [ ] a. Set up PostHog experiments (feature flags) and session replays on the key pages (generator, home, top template pages).
- [ ] b. Test one thing at a time, for at least 2 weeks or until the result is significant. For example:
  - hero headline variants
  - CTA text ("Create a free invoice" vs "Make my invoice")
  - the success panel's app pitch (QR code vs button; the wording)
  - the template page CTA position
- [ ] c. Log every experiment (hypothesis, result, decision) in `seo/EXPERIMENTS.md`.
- [ ] d. Keep the winners, and feed what you learn back into the brand messaging (chunk 5) and the App Store listing (chunk 48).

**Done when:** 4 experiments have run with documented results.

---

## Reference

_R1 (the first audit), R5 (target folder structure), R7 (migration steps) and R10 (your ideas of 2026-11-18, all handled) are in the [archive](docs/roadmap-archive-2026-11-18.md)._

### R2. The API

Full schema: `https://invoicor.com/api/schema/` (49 endpoints).

**Public (no auth):**

| Endpoint | Use |
|---|---|
| `GET /api/invoices/templates/` | 31 templates (21 free, 8 starter, 2 pro) |
| `GET /api/invoices/templates/{slug}/` | Raw HTML template with `{{PLACEHOLDERS}}` |
| `GET /api/invoices/templates/{slug}/fields/` | Field list for each template |
| `GET /api/invoices/templates/{slug}/preview/` | Rendered with **sample** data only |
| `GET /api/invoices/currencies/` · `languages/` | Dropdowns |
| `GET/POST /api/accounts/onboarding/session/` | Anonymous session |
| `POST /api/accounts/register/` · `login/` · `auth/google/` · `auth/apple/` | Signup |

**Auth required:** invoices (CRUD, duplicate, `render`, `pdf`), clients, products, business profiles, `me`, feedback, subscriptions.

**How the free generator uses it (2026-11-18):** not at all at runtime, except the template
thumbnails (`/preview/`). The 21 free templates, the labels and currency data are copied into
`public/generator/` by `scripts/sync-generator-templates.py` (run it again after a template, label
or currency change in the API); the browser fills them and makes the PDF. A unit test checks that the
browser fill matches the API's own fill. The public render/PDF endpoints on `feature/public-generator`
are unused (see X18).

**For the web app (W):** everything signed-in users need exists behind auth (invoices, clients,
products, profiles, render/PDF, subscriptions); W6 checks it's safe for browser use.

### R3. Design decisions

- **Light only, no dark sections** (decided 2026-11-18). Invoicing is a B2B trust purchase: invoices are white paper, forms read better on light backgrounds, and a dark site feels like a gaming or crypto product to a plumber or an accountant. Every section uses white or warm off-white (`stone-50` `#FAFAF9`, `brand-50` `#FFF7ED` for highlighted bands). Depth comes from a soft orange glow on light, warm shadows and hairline borders, never from black backgrounds. Text is warm near-black (`stone-900`). A site-wide dark mode is not planned.
- **The brand comes from the logo:**
  - orange `#E95D05` → red `#DC3002`
  - warm stone neutrals instead of cold slate
  - the same accent color in the iOS app
- **The gradient is rare on purpose.** It only appears on the primary CTA, one word per headline, the popular pricing card and the hero glow.
- **Type:** Cabinet Grotesk for headings, Satoshi for body text, self-hosted with `next/font/local`.
- **Imagery:** real app screens in device frames, Lucide icons, no stock photos.
- **Motion:** subtle, fast (150–400 ms), only `transform` and `opacity`, off under reduced motion, never hiding content from crawlers.

### R4. Language strategy

- **Why:** invoice searches in DE/ES/FR/PT/IT/NL have far less competition than English. The app already supports these languages, and your data is hosted in the EU.
- **URLs:**
  - `/` = English (no prefix), `/de/`, `/es/`… with translated slugs (next-intl `pathnames`)
  - every language version has its own indexable URL, `hreflang` and sitemap entry
- **Keywords per language:** research each language separately, don't just translate the English keywords.
- **Detection:** the browser language first (location ≠ language). Offer the language through a banner, **never a forced redirect**. Remember the choice in a cookie.
- **Switcher:** a globe menu in the navbar and footer, going to the same page in the other language.
- **Rollout:** EN → DE → ES → FR, PT, IT, NL, guided by the Search Console data.

### R6. SEO rules

- **Canonical host:** `https://invoicor.com` (no `www`), lowercase, kebab-case, **no trailing slash**. Everything else 301s there.
- **One intent = one URL.** Before creating a page, check `seo/keyword-map.csv`. If the intent is taken, improve that page instead (no doorway pages).
- **Every indexable page has:**
  - a unique title (≤60 characters) and meta description (≤155)
  - one H1
  - a self-referencing canonical
  - hreflang (when translated)
  - breadcrumbs
  - JSON-LD that matches the visible content
  - an OG image
  - at least 3 internal links in and out
- **Programmatic pages:** at least 20% unique content, unique FAQs, a minimum word count, all enforced by `content:check` (full rules in `pseo_engine/docs/seo_strategy.md`).
- **Never delete pages that rank.** Improve them, or 301 them to the closest page.
- **Sitemaps:** only indexable 200 URLs, with real `lastModified` dates, split by section.
- **AI search:** allow the answer/search bots, keep `llms.txt` up to date, write clear answers under each heading.
- **Truth:** every claim about Invoicor matches the fact sheet in [BRAND.md §10](BRAND.md#10-fact-sheet-what-the-app-does-check-every-claim-against-this). `content:check` can't catch a false claim; this rule is the only guard.

### R8. Growth model

**Channels, ranked by expected impact and time to results** (for a young iOS app with a new website):

| # | Channel | Type | Time to results | Why |
|---|---|---|---|---|
| 1 | App Store search (ASO) | Inbound | 2–6 weeks | People search the App Store ready to install; no website needed (chunks 48–50) |
| 2 | Generator + PDF watermark loop | Inbound / viral | 1–3 months, compounding | Every invoice sent shows invoicor.com to a new business (Stage G) |
| 3 | Long-tail + non-English SEO | Inbound | 3–6 months | Lower competition; profession, country and language pages (Stages E, H, chunk 56) |
| 4 | Template downloads & free tools | Inbound + links | 3–6 months | Huge search volume, and the assets other sites link to (chunks 53, 55) |
| 5 | Social, video, communities | Outbound | Weeks, steady | Reach, brand searches and links; YouTube also ranks in Google (chunk 52) |
| 6 | PR, links, partners, affiliates | Outbound | 3–12 months | The backlinks that unlock the head terms (chunks 57, 59) |
| 7 | Head terms ("free invoice generator") | Inbound | 12–18 months | Needs everything above: authority, links and good engagement |

**Inbound** = people find you (search, App Store, content, the watermark). **Outbound** = you go to them (social, communities, PR, partners, email). You need both: outbound builds the links and brand searches that make inbound rank.

**North-star metric:** installs from organic channels per month (App Store search + web referrals + `ct` campaign links).

**KPIs to review monthly (chunk 46):**

| KPI | Where |
|---|---|
| Organic clicks & impressions (web, per language) | Search Console, Bing Webmaster |
| Number of keywords in the top 10 / top 3 | Search Console or a rank tracker |
| Referring domains | Ahrefs Webmaster Tools, Search Console links |
| App Store search impressions → product page views → installs | App Store Connect |
| Installs per web campaign (`ct`) | App Store Connect |
| Generator → PDF → app click conversion | PostHog |
| New ratings per week & average rating | App Store Connect |
| Email subscribers → installs | Email tool + App Store Connect |

### R9. App feature ideas from the content audit

_The old SEO pages kept promising features the app doesn't have. That's a signal of what each audience expects. Not website work: input for the iOS/API roadmap, ranked by how often the pages (and `competitor_research.md`) needed them._

| Feature | Wanted by | Why it matters | Website after it ships |
|---|---|---|---|
| **Estimates / quotes → invoice** | electricians, contractors, landscapers | 6 of 9 competitors have it; contractors quote first | New template + guide pages; "estimate" keywords (chunk 44) |
| **Recurring invoices** | cleaning, lawn care, trainers, retainers | Weekly/monthly clients; the duplicate button is a workaround | Re-add to industry pages, compare tables |
| **Per-line tax (taxable / non-taxable items)** | plumbers, electricians, photographers, auto (7 of 10 industry pages) | US sales tax often applies to parts but not labor | Restore the tax sections' strongest advice |
| **Payment reminders** | freelancers, agencies | Table stakes in reviews | Compare tables (FreshBooks, Invoice2go) |
| **Offline drafts** | trades in basements and rural areas | Job sites without signal | Industry pages (electricians, landscaping) |
| **Photo attachments** | landscaping, contractors, detailers | Before/after proof | Industry FAQs |

When one ships: update BRAND.md §10 first, then the pages.

