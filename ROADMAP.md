# Invoicor Web Roadmap

_Last updated: 2026-11-17 (revision 5: Stage C finished, Stage B drafted, decisions collected at the end)_

Goal: make invoicor.com **look premium and on-brand**, **rank well in search (Google, Bing and AI assistants)**, and turn visitors into app users through a **free invoice generator**.

## How to use this file

- The work is split into **60 numbered chunks** in **two tracks**. Each chunk is roughly **one working session** (2–6 hours) and ends in something you can check.
  - **Build track (Stages A–I, chunks 1–46):** do these **in order**. A chunk only depends on chunks with a lower number. Chunks marked ⇄ can run in parallel with the stage before them.
  - **Growth track (Stage J, chunks 47–60):** runs **in parallel from week 1**. Each chunk says when it can start (“Start:”). Don't wait for the rebuild to start growing: App Store search, reviews, social and links take months to compound, so they start now.
- How the channels compare (expected impact and time to results) is in [R8](#r8-growth-model).
- Each chunk has: **Goal**, steps **a, b, c…**, and **Done when** (the check that closes it).
- Tick the steps as you go, and tick the chunk in the overview when its "Done when" passes.
- Background is in **Reference** at the bottom (R1–R7). Chunks link there instead of repeating it.
- Steps only you can do (accounts, server, App Store, opinions) are collected in [Your steps](#your-steps) at the end.
- Decisions to make are marked **🟡 Decide:** and collected in [Decisions for you](#decisions-for-you) at the end. Write the answer there, so the file stays the single source of truth.

---

## Status (2026-11-17)

**Done:** chunk 1 (repo cleanup), Stage C (chunks 8–12; 13 and 14 wait on decisions), first drafts of Stage B ([BRAND.md](BRAND.md), [seo/keyword-map.csv](seo/keyword-map.csv), [seo/BLUEPRINTS.md](seo/BLUEPRINTS.md)), and the Next.js rebuild of every existing page, at the same URLs and with the same look. It covers most of chunks 8–13, plus parts of 14, 16, 21–24 and 28 (see the ✅ notes in each chunk). It's on the `dev` branch and **not live yet**: deploy with [DEPLOY.md](DEPLOY.md).

**Next up:** D1–D5 are answered and being built. Still open: D6–D11 (see [Decisions for you](#decisions-for-you)). Everything only you can do is in [Your steps](#your-steps).

**Decisions made during the migration** (they replace what some older chunks say):

| Decision | Why | Affects |
|---|---|---|
| **Static export** (`output: "export"`): `npm run build` → `out/` → upload; nginx serves it. **No Node/PM2 on the server.** | You deploy by hand; a folder of HTML is the simplest and most reliable thing to host. Nothing can crash. | Chunks 3, 19, 26, 28, 29 |
| The Next.js app lives at the **repo root** (not in `web/`). | The old Vite app is gone from `dev`; `main` still holds it until you deploy. | R5, R7 |
| No server-side features: no ISR/on-demand revalidation, no `proxy.ts`, no next.config redirects. | Not available in a static export. Redirects live in nginx (`deploy/nginx/`). Fresh API data = rebuild + deploy. | Chunks 11e, 13, 37 |
| Language detection (chunk 37) becomes a **client-side banner** (reads the browser language), not `proxy.ts`. Language URLs (`/de/…`) are still separate static pages. | Same SEO result (Google never gets redirected); works on static hosting. | Chunks 8d, 36, 37 |
| `next-intl` and `[locale]` routing are **not** set up yet; add them in chunk 36, when the first translation is ready. | Avoids complexity before there's a second language. | Chunk 8d |
| Visual design is unchanged for now (inline styles kept on the landing page); the "no inline styles" lint rule comes with the redesign (Stage E). | Migrate first, then redesign; one risk at a time. | Chunk 9b |
| Upgrade path: if we ever need server features, remove `output: "export"` and run `next start` behind nginx. | No code rewrite needed. | n/a |

**Found and fixed during the migration:**
- `node_modules/` (9,104 files) and `.vite/` were committed to git; now untracked.
- The schema markup claimed **4.8★ from 347 ratings**; the App Store shows **2 ratings** → removed (Google penalises fake ratings). Add it back once you have real volume.
- The CTAs on the template, industry and compare pages linked to `/register`, which doesn't exist; they now go to the App Store.
- Two template pages linked to a non-existent `/templates/electrician` (removed). The build now skips and warns about broken related links.
- The affiliate calculator slider's fill bar was wrong (it filled up after 100 of 10,000).
- FAQ markup sat on every page without a visible FAQ → the home page now shows those FAQs; the Help and Affiliate pages got FAQ markup for their visible questions.

**Still open:** every decision waiting on you is listed in [Decisions for you](#decisions-for-you) at the end of this file.

---

## Overview (the todo list)

**Stage A: Clean repo, baseline & deploy**
- [x] 1. Clean up the repo
- [ ] 2. Map the server & write DEPLOY.md _(DEPLOY.md written; the server paths still need checking)_
- [ ] 3. Set up auto-deploy (dev → main → live) _(replaced by `deploy/deploy.sh`: one command, manual trigger)_
- [ ] 4. SEO baseline & quick fixes on the live site _(www redirect + /pricing are in `deploy/nginx/`; baseline export still to do **before** deploying Next.js)_

**Stage B: Strategy (decide before building)**
- [ ] 5. Brand strategy _(draft in [BRAND.md](BRAND.md); waiting on decisions D1 and D7)_
- [ ] 6. SEO strategy: keyword map & URL plan _(draft [seo/keyword-map.csv](seo/keyword-map.csv): 60 URLs, one intent each; positions after chunk 4, competitor data after chunk 47)_
- [ ] 7. Page-type blueprints & content quality rules _(draft [seo/BLUEPRINTS.md](seo/BLUEPRINTS.md); needs D6 for the trust details)_

**Stage C: Next.js foundation**
- [x] 8. Create the Next.js app skeleton _(static export at repo root; i18n moved to chunk 36)_
- [x] 9. Tooling & CI checks _(pre-commit hook + GitHub Actions `check.yml`; the no-inline-style rule comes with Stage E)_
- [x] 10. Config, types & API client _(`npm run api:types`; the API schema doesn't describe template/currency/language responses, so `lib/api.ts` validates them with zod)_
- [x] 11. Content pipeline & page generation _(`npm run content:check` + [CONTENT.md](CONTENT.md); `pricing.json` waits for D1, `content/en/` for chunk 36)_
- [x] 12. Metadata & structured data helpers
- [ ] 13. Sitemap, robots & indexing _(sitemap, robots, `/llms.txt` and IndexNow in `deploy.sh` done; only the AI-bot rules wait for D3)_
- [ ] 14. Analytics, cookie consent & App Store attribution _(`appStoreLink()` and `lib/analytics.ts` `track()` done; tool choice and consent banner wait for D4 and D5)_

**Stage D: Brand system**
- [ ] 15. Brand tokens (colors, gradient, type, spacing)
- [ ] 16. Logo, icons & OG images
- [ ] 17. UI components kit

**Stage E: Rebuild the pages (in the new brand)**
- [ ] 18. Navbar & footer
- [ ] 19. Landing page, part 1 (hero → how it works)
- [ ] 20. Landing page, part 2 (features → final CTA)
- [ ] 21. Template pages + hub
- [ ] 22. Industry pages + hub
- [ ] 23. Compare pages + hub
- [ ] 24. About, contact, help, affiliate & legal
- [ ] 25. Motion & micro-interactions

**Stage F: Switch to Next.js**
- [ ] 26. Staging site & QA
- [ ] 27. URL parity check & redirect map
- [ ] 28. Launch day
- [ ] 29. Post-launch watch (4 weeks)

**Stage G: Free invoice generator** (⇄ 30–31 are backend and can start any time)
- [ ] 30. API: public render endpoint
- [ ] 31. API: public PDF + watermark + abuse limits
- [ ] 32. Generator page: form
- [ ] 33. Generator page: live preview & template picker
- [ ] 34. Generate flow, watermark reveal & signup handoff
- [ ] 35. Generator SEO content & launch

**Stage H: Languages**
- [ ] 36. Translation setup & language switcher
- [ ] 37. Auto-detect language
- [ ] 38. German
- [ ] 39. Spanish
- [ ] 40. French, Portuguese, Italian, Dutch

**Stage I: Scale & grow**
- [ ] 41. Performance & security hardening
- [ ] 42. Guides hub (informational content)
- [ ] 43. Country generator pages
- [ ] 44. More free tools (receipt, estimate)
- [ ] 45. Launch & backlinks
- [ ] 46. Monthly monitoring routine

**Stage J: Growth track (parallel, from week 1)**
- [ ] 47. Competitor SEO & link gap analysis _(start: now)_
- [ ] 48. App Store Optimization: the listing _(start: now)_
- [ ] 49. App Store Optimization: localized listings _(start: after 48)_
- [ ] 50. Ratings & reviews engine _(start: now)_
- [ ] 51. Brand entity & profiles _(start: now)_
- [ ] 52. Social, video & communities _(start: now)_
- [ ] 53. Downloadable templates (Word, Excel, Google Docs, PDF) _(start: after 21)_
- [ ] 54. Image & video SEO _(start: after 21)_
- [ ] 55. Free micro-tools (link magnets) _(start: after 35)_
- [ ] 56. Scale the programmatic content _(start: after 42)_
- [ ] 57. Digital PR & link building _(start: after 35)_
- [ ] 58. Email capture & lifecycle _(start: after 34)_
- [ ] 59. Affiliate & partner program _(start: after 24)_
- [ ] 60. Conversion experiments _(start: after 35)_

---

## Stage A: Clean repo, baseline & deploy
_Done in the current Vite repo. Don't tidy the old code itself; it gets rebuilt in Stage C–E._

### 1. Clean up the repo
**Goal:** the repo holds only source code, with no starter-template leftovers.

- [ ] a. Work on the `dev` branch from now on (`main` = production). _`dev` already exists._
- [ ] b. Add `.gitignore`: `node_modules/`, `dist/`, `.next/`, `out/`, `.vite/`, `.env*`, `!.env.example`, `.DS_Store`, `*.log`.
- [ ] c. Take the built output and Mac files out of git: `git rm -r --cached dist`, plus `git rm --cached` on every `.DS_Store`.
- [ ] d. Remove the AI Studio leftovers:
  - `metadata.json`
  - the `GEMINI_API_KEY` define and the HMR comment in `vite.config.ts`
  - the packages `@google/genai`, `express`, `dotenv`, `@types/express`, `tsx`, `autoprefixer`
- [ ] e. Rename the package to `invoicor-web`.
- [ ] f. Rewrite `README.md`: what this is, `npm install`, `npm run dev`, `npm run build`, and links to `ROADMAP.md` and `DEPLOY.md`.
- [ ] g. Commit on `dev`.

**Done when:** `npm run build` still works, `git status` is clean after a build, and `git ls-files | grep -E "dist/|DS_Store"` returns nothing.

### 2. Map the server & write DEPLOY.md
**Goal:** know exactly how invoicor.com is served today, written down.

- [ ] a. SSH into the Hetzner server and run `grep -rn "invoicor" /etc/nginx/sites-enabled/`.
- [ ] b. Write down:
  - the site folder
  - which folder nginx serves (`dist/`?)
  - how `/api/` is proxied to Django
  - the `server_name` lines (apex and `www`)
  - where the SSL certificates live
- [ ] c. Check how the site is updated today (`git pull` + `dist/`? copied files?).
- [ ] d. Back up the nginx config into the repo as `deploy/nginx/invoicor.com.conf` (no secrets in it).
- [ ] e. Write `DEPLOY.md` in the style of `vindevent/DEPLOY.md`: a request-flow diagram, a "what / where" table, "every update" steps and "rollback" steps.

**Done when:** someone else could deploy and roll back using only `DEPLOY.md`.

### 3. Set up auto-deploy (dev → main → live)
**Goal:** one command on the Mac takes `dev` to production, safely.

- [ ] a. Copy `seedtorank/.github/workflows/deploy.yml` and cut it down to a single **web build** job, followed by the **deploy** job (only on `main`, only when the build is green, no concurrent deploys).
- [ ] b. Write `deploy/deploy.sh`:
  - **Mac mode:** push `dev`, open a PR into `main` and merge it (`gh pr create` + `gh pr merge`).
  - **Server mode (`--server`):** `git pull` → `npm ci` → `npm run build` → `sudo nginx -t && sudo systemctl reload nginx`.
- [ ] c. Add the GitHub repo secrets the workflow needs (SSH host, user and key), the same as seedtorank.
- [ ] d. Test it: change one word on `dev`, run `bash deploy/deploy.sh` and watch the GitHub Action.
- [ ] e. Add the commands and a rollback step (`git revert` + redeploy) to `DEPLOY.md`.

**Done when:** a change on `dev` is live after one command, and a failing build never reaches the server.

### 4. SEO baseline & quick fixes on the live site
**Goal:** record where we stand before the migration, and fix the issues that take only minutes.

- [ ] a. **Duplicate host:** `https://www.invoicor.com` returns 200 (a full duplicate of the site). Add an nginx `server` block that sends `www` → `https://invoicor.com$request_uri` with a 301. Check that `/api/` keeps working.
- [ ] b. Change the landing page API base from `https://www.invoicor.com/api` to `https://invoicor.com/api`, so it doesn't pass through that redirect.
- [ ] c. Sitemap fixes:
  - remove `/pricing` (no such route: it renders an empty page)
  - add `/help`, `/affiliate`, `/terms`, `/privacy`
  - redeploy
- [ ] d. **Baseline export** into `seo/baseline/2026-11/` (commit it):
  - Search Console: Performance (queries + pages, last 3 months, as CSV), Pages/indexing report, links report
  - Bing Webmaster: the same where available
  - the list of every live URL with its title, meta description, canonical URL and H1 (a small script or Screaming Frog), which chunk 27 compares against
- [ ] e. Note the known issues that only the migration fixes (so we don't fight them twice):
  - empty HTML for crawlers
  - unknown URLs (`/does-not-exist`) return 200 instead of 404 (soft 404s)
  - `/templates/classic/` and `/templates/classic` both return 200 (no trailing-slash rule)

**Done when:** `www` redirects with a 301, the sitemap only lists real pages, and the baseline files are committed.

---

## Stage B: Strategy (decide before building)
_No code. These three chunks decide what the pages say and which searches they target, so the rebuild is done once._

### 5. Brand strategy
**Goal:** a written brand that the website, the iOS app and the App Store listing all follow.

- [ ] a. **Inputs:** `invoicor_api/docs/strategy.md`, `competitor_research.md`, `price_analysis.md`, and the App Store reviews.
  - The competitor reviews show where they fail: deceptive "free" paywalls (19 mentions), no human support (17), payment funds held (13), accounts locked without reason (10).
  - Those failures **are** the positioning: _honestly free (3 real invoices, no watermark), no payment processing that can hold your money, a real human answers_. Build the messaging on them, and only claim what's true.
- [ ] b. **Positioning:** one sentence. Draft: _“The fastest native invoice app for freelancers and small businesses: an invoice in seconds, in any language and currency, with zero payment fees.”_
- [ ] c. **Audience:** 2–3 short profiles (e.g. a solo freelancer, a tradesperson, a small agency), each with the main pain point and the trigger moment ("I need to send an invoice now").
- [ ] d. **Messaging pillars** (3–4), each with proof points:
  - Speed (auto-fill, under 5 seconds)
  - Global (currencies and languages)
  - Professional look (templates)
  - Privacy (EU servers, no fees)
- [ ] e. **Differentiation:** a "why us vs X" table for the top 5 competitors. It feeds the compare pages (chunk 23).
- [ ] f. **Tagline** + 3 headline variants for the hero.
- [ ] g. **Voice:** 5 rules (e.g. short sentences, no jargon, confident not hype), plus words to use and words to avoid.
- [ ] h. **Visual direction** (the details come in chunk 15):
  - the logo orange/red as the only brand color, light-first (see [R3](#r3-design-decisions))
  - icon style: Lucide, 1.5 px stroke
  - illustration and screenshot style: real app screens in an iPhone frame, no stock photos
- [ ] i. **App consistency:**
  - the iOS app's `AccentColor` asset is **empty** (system blue); set it to the brand orange
  - App Store screenshots and description use the same pillars and colors
- [ ] j. **Pricing source of truth:** `strategy.md` lists 4 tiers (Free, Starter $4.99, Pro $7.99, Business $19.99), but the website shows 3. 🟡 Decide which tiers are live, and write them down once (they become `content/pricing.json` in chunk 11).
- [ ] k. Save all of this as `BRAND.md` (strategy part).

**Done when:** `BRAND.md` answers "who is it for, why us, how do we sound, what do we look like", and the pricing is confirmed.

### 6. SEO strategy: keyword map & URL plan
**Goal:** every page targets one search intent, and no two pages compete with each other.

- [ ] a. **Inputs:**
  - the competitor gap analysis (chunk 47): what Invoice Simple, Invoice Home, Zoho, Bookipi and Invoice Fly rank for
  - the baseline from chunk 4 (which queries already get impressions)
  - `pseo_engine/google_page_ideas.ipynb`
  - Google autocomplete / "People also ask"
  - a keyword tool (Ahrefs free tools, Google Keyword Planner)
- [ ] b. **Keyword clusters:** group the keywords by search intent. Examples:
  - free generator ("free invoice generator", "create invoice online")
  - templates ("invoice template pdf", "{style} invoice template")
  - industry ("{profession} invoice")
  - comparison ("{competitor} alternative")
  - how-to ("how to write an invoice")
  - country/tax ("UK VAT invoice")
- [ ] c. **Keyword map** (`seo/keyword-map.csv`): **one cluster → one URL**, with primary keyword, secondary keywords, intent, page type and the current position (from the baseline).
- [ ] d. **Cannibalization rule:** two URLs never target the same intent. Also follow the doorway-page rules in `pseo_engine/docs/seo_strategy.md`. That means:
  - **no** `/free-invoice-generator/freelancer`, because `/industries/freelancer` owns that intent; the industry page embeds the generator preset instead
  - **no** `/invoice-generator-pdf` next to `/free-invoice-generator`
- [ ] e. **URL conventions** (see [R6](#r6-seo-rules)): apex `https://invoicor.com`, lowercase, kebab-case, **no trailing slash**, English slugs at `/`, translated slugs under `/de/` etc.
- [ ] f. **Site structure:** home → hubs (`/templates`, `/industries`, `/compare`, `/guides`) → detail pages, with every page at most 3 clicks from home.
- [ ] g. **AI search (ChatGPT, Perplexity, Claude, Google AI Overviews).** `robots.txt` currently blocks `GPTBot`, `Google-Extended` and `CCBot`.
  - 🟡 Decide. Recommendation:
    - allow the **search/answer** bots (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Claude-User`) so assistants can cite and recommend Invoicor
    - training bots (`GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`) are your choice
    - blocking `Google-Extended` doesn't affect normal Google ranking
  - Write pages in a format that's easy to quote: a short, clear answer under each heading, plus FAQs.
  - Add `llms.txt` (a short site summary + key links) in chunk 13.
- [ ] h. **Targets:** pick 10 priority keywords and set a 6-month goal for each. Be realistic about difficulty:
  - **Head terms** ("free invoice generator", "invoice template") are owned by sites with thousands of backlinks (Invoice Simple, Zoho, Canva, Shopify, Square). For a young domain they're 12–18-month goals that need links (chunk 57).
  - **Quick wins (3–6 months):** long-tail terms ("{profession} invoice template", "how to invoice in {country}"), non-English searches (Stage H), and template **file format** searches ("invoice template word / excel / google docs", chunk 53).
  - Order the work by **traffic potential ÷ difficulty**, not by search volume alone.

**Done when:** `seo/keyword-map.csv` covers every existing and planned URL, with no intent claimed twice.

### 7. Page-type blueprints & content quality rules
**Goal:** a fixed recipe for each page type, so generated pages are useful and never thin.

- [ ] a. **One blueprint per page type** (home, generator, template, industry, compare, guide, hub, legal). Each one lists:
  - its sections in order
  - the title formula, e.g. `{Template} Invoice Template – Free PDF | Invoicor` (≤60 characters)
  - the meta description formula (≤155 characters, includes a benefit + CTA)
  - the H1 formula, and the rule of one H1 per page
  - the required JSON-LD
  - internal links: which related pages and how many
  - the CTA (generator or App Store)
- [ ] b. **Quality rules** (from `pseo_engine/docs/seo_strategy.md`):
  - at least 20% unique content per programmatic page
  - unique intro, FAQs and examples per page
  - minimum word counts per page type
  - no hidden text
  - no keyword stuffing
- [ ] c. **E-E-A-T (trust signals):**
  - an About page (who's behind Invoicor, why)
  - a Contact page
  - company/legal details as your country requires (🟡 Decide: e.g. KvK number in NL)
  - "last updated" dates on content pages
  - author or reviewer lines on guides
- [ ] d. **Content fields** each page type needs. These become the schemas in chunk 11, e.g. `slug`, `title`, `metaDescription`, `h1`, `intro`, `sections[]`, `faqs[]`, `related[]`, `updatedAt`, `noindex`.
- [ ] e. Write it up as `seo/BLUEPRINTS.md`.

**Done when:** for every page type, you could hand the blueprint to a writer and get a page that passes the quality rules.

---

## Stage C: Next.js foundation
_✅ Done on 2026-11-17, as a **static export at the repo root** (see "Decisions made during the migration" at the top). Steps below that mention `web/`, PM2, `proxy.ts` or revalidation describe the original plan; the decision table at the top wins._

### 8. Create the Next.js app skeleton
**Goal:** an empty Next.js app with the final folder structure.

- [ ] a. `cd web && npx create-next-app@latest .`: TypeScript, Tailwind, App Router, ESLint, no `src/` folder, alias `@/*`. Use the current stable Next.js and pin it exactly in `package.json`.
- [ ] b. Turn on `"strict": true` and `"noUncheckedIndexedAccess": true` in `tsconfig.json`.
- [ ] c. Create the folder structure from [R5](#r5-target-folder-structure), with `.gitkeep` files in empty folders.
- [ ] d. Set up `next-intl`:
  - `i18n/routing.ts` (locales: only `en` for now; `localePrefix: 'as-needed'`, so English has no prefix)
  - `i18n/request.ts`
  - the `proxy.ts` file (called `middleware.ts` before Next.js 16)
  - `app/[locale]/layout.tsx`
- [ ] e. `next.config.ts`:
  - `trailingSlash: false`
  - `images.remotePatterns` for `invoicor.com`
  - `poweredByHeader: false`
- [ ] f. A placeholder home page that renders "Invoicor" at `/`.

**Done when:** `npm run dev` in `web/` shows the placeholder at `/`, and `npm run build` passes.

### 9. Tooling & CI checks
**Goal:** messy code can't get in.

- [ ] a. Prettier + `prettier-plugin-tailwindcss` (sorts classes).
- [ ] b. ESLint with Next's config, plus a rule that forbids inline `style={{}}` (`react/forbid-dom-props` / `forbid-component-props` for `style`).
- [ ] c. Scripts: `dev`, `build`, `start`, `lint`, `typecheck` (`tsc --noEmit`), `format`, `content:check` (added in chunk 11).
- [ ] d. Pre-commit hook: `husky` + `lint-staged`.
- [ ] e. CI (the workflow from chunk 3) gets a `web` job: `npm ci` → `lint` → `typecheck` → `content:check` → `build`.

**Done when:** a commit with an inline style or a type error is blocked, and CI shows all the steps green.

### 10. Config, types & API client
**Goal:** every setting has one home, and the API is typed.

- [ ] a. `lib/config.ts`:
  - `SITE_URL`, `API_URL`, `APP_STORE_URL`, `APP_STORE_ID`, social profile URLs
  - read from `NEXT_PUBLIC_*` env vars and validated with `zod` at startup
- [ ] b. `.env.example` with every variable and a comment for each.
- [ ] c. `types/api.ts`: `ApiTemplate`, `Currency`, `Language`, `TemplateFields`. Generate these from the OpenAPI schema (`openapi-typescript https://invoicor.com/api/schema/`) so they never drift from the API.
- [ ] d. `lib/api.ts`:
  - a typed wrapper with `getTemplates()`, `getTemplate(slug)`, `getTemplatePreview(slug)`, `getCurrencies()`, `getLanguages()`
  - uses `fetch` with `next: { revalidate: 3600, tags: ['templates'] }`
  - a timeout, and a typed error

**Done when:** a test page lists every template from the API with full type safety.

### 11. Content pipeline & page generation
**Goal:** adding a programmatic page means adding one JSON entry, and bad content can't be published.

- [ ] a. Move `templates.json`, `industries.json` and `comparisons.json` into `content/en/`. Add `pricing.json` (from chunk 5j) and `faqs/` (shared FAQ sets).
- [ ] b. A `zod` schema per content type in `content/schemas.ts`, using the fields from the blueprints (chunk 7d), including `updatedAt` and `noindex`.
- [ ] c. `lib/content.ts`:
  - `getAll(type, locale)` and `getBySlug(type, slug, locale)`
  - validated, typed, and falls back to English when a translation is missing
- [ ] d. **Static generation for every detail route:**
  - `generateStaticParams()` from the content
  - `export const dynamicParams = false`, so unknown slugs return a **real 404** (fixes the soft 404s)
  - `notFound()` for missing entries
- [ ] e. **Keep API data fresh:** pages that show live template data revalidate every hour, plus **on-demand** refresh:
  - `app/api/revalidate/route.ts`, protected with a secret header, calls `revalidateTag('templates')`
  - Django calls it whenever a template changes (a small task in `invoicor_api`)
- [ ] f. **`scripts/content-check.ts`** (`npm run content:check`, run in CI). It fails on:
  - schema errors
  - duplicate titles, meta descriptions or H1s
  - titles over 60 characters or descriptions over 155
  - pages below the minimum word count
  - two pages more than 80% alike (simple text-similarity check)
  - `related[]` links that point to slugs that don't exist
- [ ] g. `CONTENT.md`: how to add or edit a template, industry or compare page, step by step.

**Done when:** adding a test entry to `industries.json` creates a new static page after `build`, and a deliberately duplicated title fails CI.

### 12. Metadata & structured data helpers
**Goal:** every page gets complete, correct SEO with one function call.

- [ ] a. `lib/seo.ts` → `buildMetadata({ title, description, path, locale, image, noindex })`. It returns:
  - title, description
  - canonical URL (absolute, apex, no trailing slash)
  - OG/Twitter tags
  - `alternates.languages` (hreflang for live locales + `x-default`)
  - `robots`
- [ ] b. A root `metadataBase` = `SITE_URL`, a title template `%s | Invoicor`, and the default OG image.
- [ ] c. JSON-LD builders in `lib/jsonld.ts`:
  - `organizationLd()` with `sameAs` (App Store, socials) and logo
  - `websiteLd()`, `breadcrumbLd()`, `faqLd()`, `howToLd()`, `softwareAppLd()` (iOS app), `webAppLd()` (the generator)
- [ ] d. A `<JsonLd data={…}>` component (a server component with safe serialization).
- [ ] e. Rule: JSON-LD only describes what's visible on that page. FAQ markup only when the FAQ is shown.
- [ ] f. Check the real App Store rating: use it in `softwareAppLd()`, or leave the rating out.

**Done when:** a test page's raw HTML has a correct canonical URL, hreflang and JSON-LD that pass Google's Rich Results Test.

### 13. Sitemap, robots & indexing
**Goal:** search engines find every page that should be indexed, and none of the rest.

- [ ] a. `app/sitemap.ts`, generated from the routes + the content (it replaces `scripts/generate-sitemap.cjs`):
  - split it with `generateSitemaps()` into `pages`, `templates`, `industries`, `compare`, `guides` (plus a sitemap index)
  - `lastModified` = the content's real `updatedAt`, **not** the build date
  - each URL lists its language versions (`alternates.languages`) once there are more locales
  - template pages include their preview image (`images` in the sitemap entry), so they can show up in Google Images
  - leave out: `noindex` pages, redirects, `/brand`, the API
  - drop `priority` and `changefreq` (Google ignores them)
- [ ] b. `app/robots.ts`:
  - disallow `/api/`, `/admin/`, `/brand`
  - the AI-bot rules from chunk 6g
  - the sitemap URL
- [ ] c. `app/llms.txt/route.ts`: a short plain-text summary of Invoicor + the links to the main pages.
- [ ] d. **IndexNow** (Bing, Yandex, Seznam): host the key file, and after each deploy ping it with the changed URLs (a step in `deploy.sh`).
- [ ] e. Keep `BingSiteAuth.xml` in `web/public/`. Check that the Google verification still works (DNS or meta tag).
- [ ] f. A `noindex` rule for preview and staging environments: if `NEXT_PUBLIC_ENV !== 'production'`, add a `noindex` robots tag to every page and block everything in robots.

**Done when:** `/sitemap.xml` lists exactly the indexable URLs with real dates, and `/robots.txt` and `/llms.txt` render correctly.

### 14. Analytics, cookie consent & App Store attribution
**Goal:** measure what matters, legally, and know which pages bring app installs.

- [ ] a. 🟡 Decide on the tools. Recommendation:
  - **PostHog** (product funnel) + **GA4** only if you use its reports
  - drop StatsUp and Ahrefs Web Analytics unless you check them weekly
  - Search Console + Bing Webmaster for search
- [ ] b. **Cookie consent (EU/GDPR):**
  - a small branded consent banner
  - GA4 with Consent Mode v2 (no cookies until accepted)
  - PostHog in cookieless/memory mode until consent
  - remember the choice
- [ ] c. `lib/analytics.ts` → `track(event, props)`, the only place that talks to PostHog/GA. Event names follow `area_action` (e.g. `gen_generate`, `nav_app_click`).
- [ ] d. Load the scripts with `next/script` (`afterInteractive`), and only after consent.
- [ ] e. **App Store attribution:** every App Store link goes through `appStoreLink(campaign)`, which adds `pt` (provider token) and `ct` (campaign = page type or slug). App Store Connect then shows which page drives installs.
- [ ] f. UTM convention for outside links (social, listings, outreach), written in `seo/TRACKING.md`.

**Done when:** no analytics cookies are set before consent, events arrive after consent, and an App Store link from a template page carries `ct=template-{slug}`.

---

## Stage D: Brand system
_See [R3](#r3-design-decisions) and `BRAND.md` from chunk 5._

### 15. Brand tokens (colors, gradient, type, spacing)
**Goal:** one file defines how Invoicor looks.

- [ ] a. `styles/tokens.css` with Tailwind v4 `@theme`:
  - **Brand colors:** a scale from `brand-50` to `brand-950`, generated from `#E95D05` (500) and `#DC3002` (600).
  - **Neutrals:** a warm stone scale `#FAFAF9 → #0C0A09`.
  - **Semantic colors:** success `#16A34A`, warning `#D97706`, danger `#DC2626`, info `#2563EB`.
- [ ] b. Gradients:
  - `--brand-gradient: linear-gradient(135deg, #F07A1A 0%, #E95D05 45%, #DC3002 100%)`
  - `--brand-glow: radial-gradient(60% 50% at 50% 0%, rgb(233 93 5 / .12), transparent 70%)`
- [ ] c. Fonts: download the Cabinet Grotesk and Satoshi `woff2` files and load them with `next/font/local` in the root layout. Set a type scale with `clamp()`: display, h1–h4, body, small.
- [ ] d. Radius (8/12/16/24), 3 shadow levels with a slight warm tint, hairline border `rgb(0 0 0 / .06)`, and a spacing rhythm for sections.
- [ ] e. Motion tokens: durations 150/250/400 ms, easing `cubic-bezier(.22,1,.36,1)`.
- [ ] f. Add the visual rules to `BRAND.md`: where the gradient is allowed (primary CTA, one word per headline, the popular pricing card, the hero glow) and where it isn't.
- [ ] g. A hidden `/brand` page (`noindex`) showing every token.

**Done when:** `/brand` shows every color, the gradient, all type sizes and all shadows, and they look right together.

### 16. Logo, icons & OG images
**Goal:** sharp brand assets everywhere, and no 364 KB JPGs.

- [ ] a. Redraw the logo as **SVG**: the mark, mark + wordmark, light and dark versions. Add it as a `<Logo>` component.
- [ ] b. App icons with Next file conventions: `app/icon.svg`, `app/apple-icon.png` (180×180), `app/manifest.ts` (name, colors, icons).
- [ ] c. `app/[locale]/opengraph-image.tsx`: a branded 1200×630 card (orange glow, logo, page title).
- [ ] d. Per-page OG images for templates (with the template preview), industries, compare pages and guides.
- [ ] e. Delete the duplicated `icon.jpg`, `logo.jpg` and `og-image.jpg` once nothing uses them.

**Done when:** pasting a template-page URL into WhatsApp or Slack, or into an OG debugger, shows a branded card with the right title.

### 17. UI components kit
**Goal:** pages are built from shared parts, never one-off styles.

- [ ] a. `Button`: primary (gradient), secondary, ghost; sizes sm/md/lg; loading state; works as a link.
- [ ] b. `Container`, `Section` (light/dark/glow variants), `Heading` (with an optional gradient word), `Text`, `Prose` (long-form content).
- [ ] c. `Card`, `Badge` (free/starter/pro), `AppStoreBadge`, `Breadcrumbs` (with `breadcrumbLd()` built in).
- [ ] d. Form parts for the generator later: `Input`, `Textarea`, `Select`, `Field` (label + error), `NumberInput`.
- [ ] e. `Accordion` (FAQ, with `faqLd()` support), `Tabs`, `Skeleton`, `RelatedLinks`.
- [ ] f. Show every component on `/brand`.
- [ ] g. Accessibility: visible focus rings in brand color, AA contrast (orange text on white uses `brand-700`), keyboard support.

**Done when:** every component is on `/brand`, works with the keyboard and passes an axe/Lighthouse accessibility check.

---

## Stage E: Rebuild the pages (in the new brand)
_Light-first, with dark glow sections as accents. Each page follows its blueprint (chunk 7). Port the **content**, not the old code. Keep every URL the same._

### 18. Navbar & footer
**Goal:** clear navigation and strong internal linking on every page.

- [ ] a. Navbar links: Free Invoice Generator · Templates · Industries · Pricing (`/#pricing`) · Help, plus the App Store CTA. Leave a slot for the language switcher.
- [ ] b. Light by default, with a transparent version over dark heroes. Blur and border appear on scroll.
- [ ] c. Mobile: a hamburger opening a slide-out menu, with the focus kept inside it and closing on Esc.
- [ ] d. Footer columns: Product, Free tools, Templates (top 6), Industries (top 6), Compare, Guides, Company (About, Contact, Affiliate), Legal. Brand gradient hairline at the top, App Store badge.
- [ ] e. Both are server components; only the mobile menu toggle is a client component.

**Done when:** every page is reachable within 3 clicks from home, on desktop and mobile.

### 19. Landing page, part 1 (hero → how it works)
**Goal:** a premium first impression.

- [ ] a. Split it into one file per section in `components/sections/`.
- [ ] b. **Hero:**
  - dark with the orange glow
  - the headline from chunk 5f, with one gradient word
  - two CTAs: “Create a free invoice” → generator, “Get the app” → App Store
  - an iPhone/invoice mockup
- [ ] c. Trust strip: a short line plus the App Store rating (real numbers only).
- [ ] d. Templates carousel: live from the API, with skeletons while loading and a fallback if the API fails.
- [ ] e. How it works: 3 steps with icons.

**Done when:** the top half of the page looks finished on mobile and desktop, with no layout shift.

### 20. Landing page, part 2 (features → final CTA)
**Goal:** the full landing page, with SEO.

- [ ] a. Features grid, built from the messaging pillars (chunk 5d).
- [ ] b. Currencies & languages + "Your data stays in Europe" (security).
- [ ] c. Pricing from `content/pricing.json`: monthly/yearly toggle, the popular card with a gradient border. Make sure the tiers match the app exactly.
- [ ] d. Testimonials: **real ones only**; remove the section if you don't have them yet.
- [ ] e. A visible FAQ (Accordion) + matching `faqLd()`.
- [ ] f. Final CTA section (dark + glow).
- [ ] g. Metadata + `organizationLd()` + `websiteLd()` + `softwareAppLd()`, on this page only.

**Done when:** `curl /` shows all the text, and the Rich Results Test passes.

### 21. Template pages + hub
**Goal:** `/templates` and `/templates/[slug]` rebuilt following the template blueprint.

- [ ] a. A static page for each template (chunk 11d), revalidated with the `templates` tag.
- [ ] b. Template page:
  - breadcrumbs
  - branded hero with the live preview image
  - sticky CTA "Use this template free →" (to the App Store until the generator ships, then to `/free-invoice-generator?template={slug}`)
  - the existing long-form content
  - FAQ
  - related templates + industries
- [ ] c. Hub: a filterable grid (free / starter / pro), plus an intro text for SEO.
- [ ] d. Metadata, OG image, JSON-LD for each page.

**Done when:** every old `/templates/*` URL renders its full content in the raw HTML, styled in the new brand, and `content:check` passes.

### 22. Industry pages + hub
**Goal:** the same treatment for `/industries` and `/industries/[slug]`.

- [ ] a. Page sections: breadcrumbs, hero, the industry's pain points, what this industry's invoice must include, recommended templates, a **generator preset CTA** (`?industry={slug}` once the generator is live), FAQ, related.
- [ ] b. Hub grid with icons + intro.
- [ ] c. Metadata, OG images, JSON-LD.

**Done when:** every old `/industries/*` URL works and its content is in the raw HTML.

### 23. Compare pages + hub
**Goal:** the same treatment for `/compare` and `/compare/[slug]`.

- [ ] a. A comparison table component (✓/✗, prices), with a "last checked" date, a verdict box and a CTA. Use the differentiation work from chunk 5e.
- [ ] b. Keep the claims about competitors factual and dated (legal safety). Use the real complaint themes from `competitor_research.md` (paywalls, support, payment holds) as comparison rows, phrased as facts you can back up.
- [ ] c. Cover every competitor with real search demand: `/compare/{competitor}-alternative` for the top 10 (Invoice Simple, Invoice2go, Invoice Fly, Bookipi, Zoho Invoice, Wave, FreshBooks, QuickBooks, Joist, Invoice Home), plus the most-searched "{A} vs {B}" pairs. People searching these are ready to switch.
- [ ] d. Hub grid + intro.
- [ ] e. Metadata, OG images, JSON-LD.

**Done when:** every old `/compare/*` URL works, its content is in the raw HTML, and the top 10 competitors each have an alternative page.

### 24. About, contact, help, affiliate & legal
**Goal:** the remaining pages, plus the trust pages Google looks for.

- [ ] a. **New: About** (the story, who's behind it, EU hosting, the mission) and **Contact** (email/form, response time, company details). Both feed the trust signals (chunk 7c).
- [ ] b. Help: FAQ accordion + search filter + contact link.
- [ ] c. Affiliate: rebuilt with the shared sections.
- [ ] d. Terms & Privacy: `Prose` layout, a table of contents, a "last updated" date. **Update the privacy policy** for analytics + consent, Turnstile, and the generator ("we don't store invoice data").
- [ ] e. A branded 404 (`not-found.tsx`) with links to the main pages, and an error page (`error.tsx`).

**Done when:** no page uses the old styling, a wrong URL shows the branded 404 with **status 404**, and the privacy policy matches what the site actually does.

### 25. Motion & micro-interactions
**Goal:** the site feels alive, without getting in the way. Uses the `motion` package (in client components only).

- [ ] a. `<Reveal>` component: fade + 12 px rise on scroll, 60 ms stagger for lists. Used on section headings and card grids.
- [ ] b. Hero: staggered headline entrance, a gently floating mockup, slow drift on the glow.
- [ ] c. Buttons: 1 px lift on hover, a gradient sheen sweep on the primary CTA, `scale(.97)` on press.
- [ ] d. Cards: lift + shadow on hover; slight tilt on template thumbnails (desktop only).
- [ ] e. Navbar: a sliding underline under the active/hovered link. Accordion: smooth height animation. Count-up stats.
- [ ] f. Guardrails:
  - everything off under `prefers-reduced-motion`
  - animate only `transform` and `opacity`
  - content is visible without JavaScript (crawlers must see the text, not wait for a reveal)

**Done when:** it looks good with motion on, works with reduced motion on, CLS stays at 0, and `curl` still shows all the text.

---

## Stage F: Switch to Next.js
_See [R7](#r7-migration-strategy) for the strategy summary._

### 26. Staging site & QA
**Goal:** the new site running on the real server, privately, before the switch.

- [ ] a. DNS: add `staging.invoicor.com` (an A record to the same server) + a certbot certificate.
- [ ] b. Server: install Node LTS + PM2. Clone the repo into a staging folder, build `web/` with `NEXT_PUBLIC_ENV=staging`, and run it as PM2 `invoicor-web-staging` on its own port.
- [ ] c. nginx for `staging.`: basic-auth password, `X-Robots-Tag: noindex` header, `/api/` proxied to Django as on production.
- [ ] d. Add a `--staging` mode to `deploy.sh` (deploys the `dev` branch to staging).
- [ ] e. **QA checklist** (`seo/QA.md`), run on staging:
  - every page type on iPhone Safari, Android Chrome, desktop Chrome/Safari/Firefox
  - Lighthouse mobile ≥ 90 on home, a template page, an industry page
  - broken-link check (e.g. `linkinator`)
  - Rich Results Test on 1 page of each type
  - forms, the consent banner, analytics events
  - 404 page and status
  - the `www`/`http` redirects
  - OG previews
- [ ] f. Fix everything the checklist finds.

**Done when:** the whole QA checklist passes on staging.

### 27. URL parity check & redirect map
**Goal:** prove that no URL, title or ranking signal gets lost in the switch.

- [ ] a. `scripts/parity-check.ts`: for every URL in the baseline (chunk 4d), fetch it on staging and compare the status, title, meta description, canonical URL and H1. It outputs a report.
- [ ] b. Every old URL must return 200 with the same canonical URL, or 301 to its new home. Zero 404s for URLs that used to work.
- [ ] c. Changed titles or descriptions are fine if they're intentional improvements. List them in the report.
- [ ] d. Redirect map in `next.config.ts` `redirects()` (permanent) for anything renamed or merged. Trailing-slash variants redirect automatically.
- [ ] e. Compare the new sitemap with the old one: every old URL is present or redirected.

**Done when:** the parity report shows no unexpected differences, and every old URL resolves.

### 28. Launch day
**Goal:** production switches from Vite to Next.js with a rollback ready.

- [ ] a. Before the switch:
  - merge `dev` → `main`
  - confirm the latest parity report is green
  - save the current nginx config as `invoicor.com.conf.vite-backup`
- [ ] b. Server:
  - clone/pull into the production folder
  - build `web/` with `NEXT_PUBLIC_ENV=production`
  - start PM2 `invoicor-web` (e.g. port 3020)
  - `pm2 save` + `pm2 startup` (survives reboots)
- [ ] c. nginx:
  - `/api/`, `/admin/`, `/static/` stay on Django
  - `/_next/static/` gets long cache headers
  - everything else proxies to `127.0.0.1:3020`
  - `nginx -t` → reload
- [ ] d. Smoke test right away:
  - `curl` the home page, 3 templates, 3 industries, 2 compare pages, a fake URL (expect 404)
  - check the `www` and `http` redirects
  - `/sitemap.xml`, `/robots.txt`
- [ ] e. **Rollback** (if anything is badly wrong): restore the `.vite-backup` config, reload nginx (under 1 minute). Write this in `DEPLOY.md`.
- [ ] f. Update `deploy.sh --server` for production: `npm ci` → `npm run build` → `pm2 reload invoicor-web` → IndexNow ping.
- [ ] g. Search Console + Bing Webmaster:
  - resubmit the sitemap
  - URL Inspection → "Request indexing" for the home page and the top 10 pages from the baseline
- [ ] h. Remove the old Vite files from the repo root (`src/`, `index.html`, `vite.config.ts`, the old `package.json`, `public/` once moved). Commit "chore: remove Vite app".

**Done when:** invoicor.com is served by Next.js, the smoke test passes, and the rollback is documented and tested on staging.

### 29. Post-launch watch (4 weeks)
**Goal:** catch any SEO drop early.

- [ ] a. **Daily for the first week:** the nginx error log + 404 log, PM2 status, an uptime check.
- [ ] b. **Weekly, compared with the baseline:**
  - Search Console: indexed pages, coverage errors, impressions and clicks for the top pages
  - Bing: the same
- [ ] c. Add redirects for any 404 URLs that real visitors or Google hit.
- [ ] d. A small temporary dip in rankings is normal for 2–4 weeks. Investigate if it lasts longer than that, or if pages fall out of the index.
- [ ] e. After 4 weeks, write a short summary of indexed pages, impressions and clicks vs the baseline in `seo/baseline/`.

**Done when:** 4 weeks after launch, the indexed pages and impressions are at or above the baseline.

---

## Stage G: Free invoice generator
_Chunks 30–31 are in the **invoicor_api** (Django) repo and can start any time ⇄. Chunks 32+ need chunk 28 done._

### 30. API: public render endpoint
**Goal:** visitors can get a filled invoice preview without an account.

- [ ] a. A serializer for the public invoice input:
  - `template_slug`, `language`, `currency`
  - `sender{}`, `client{}`, `items[]{description, qty, unit_price}`
  - `tax_rate`, `discount`, `notes`, `payment_terms`, `bank{}`, `due_date`, `issue_date`, `invoice_number`, `logo` (base64)
- [ ] b. Reuse the existing render logic (the one behind `/invoices/{id}/render/`), but take the serializer data instead of a saved invoice. **Nothing is stored.**
- [ ] c. `POST /api/invoices/public/render/` returns HTML.
- [ ] d. Only `tier: free` templates; others get a 403 `{"code": "template_locked"}`.
- [ ] e. Limits: body ≤ 200 KB, ≤ 50 items, logo ≤ 500 KB and PNG/JPG/sanitized SVG only, rate 60/minute per IP (DRF throttle). CORS allows `https://invoicor.com` only.
- [ ] f. Tests: a happy path, a locked template, an oversized request, the throttle. Add the endpoint to the OpenAPI docs, then regenerate the web types (chunk 10c).

**Done when:** `curl -X POST …/public/render/` with sample JSON returns a correct invoice in HTML.

### 31. API: public PDF + watermark + abuse limits
**Goal:** visitors can download a PDF that carries your brand.

- [ ] a. `POST /api/invoices/public/pdf/`: same input, rendered to PDF with the existing PDF engine.
- [ ] b. The watermark, added **only in this endpoint** and on the server: a footer line “Created with invoicor.com” linking to `https://invoicor.com/?ref=pdf`, small, grey, the same position on every template.
- [ ] c. Cloudflare Turnstile: the endpoint requires a valid token (verified on the server).
- [ ] d. Rate limit 10 PDFs/hour per IP.
- [ ] e. Count generated PDFs by template, currency and language (no personal data). Optional `GET /api/invoices/public/stats/` for "X invoices created".
- [ ] f. Housekeeping: remove `/api/subscriptions/debug/`, and pin `swagger-ui-dist` to a fixed version.
- [ ] g. Tests + docs.

**Done when:** a PDF downloads with the watermark link working, and the 11th request in an hour is refused.

### 32. Generator page: form
**Goal:** `/free-invoice-generator` with a complete, pleasant form.

- [ ] a. Route + layout: the form on the left, a preview slot on the right; stacked on mobile, with a Form / Preview tab switch. The page shell and SEO content are server-rendered; only the tool is a client component.
- [ ] b. Sections (collapsible): Your business · Client · Invoice details · Line items · Tax & discount · Payment (terms, bank, payment link) · Notes · Logo.
- [ ] c. Line items: add, remove and reorder rows; quantity × price; live subtotal, tax, discount and total, formatted with `Intl.NumberFormat` in the chosen currency.
- [ ] d. State in one typed store (`useReducer` or Zustand), validated with `zod` (shared with the API input shape).
- [ ] e. Autosave the draft to `localStorage` (wrapped in try/catch), plus a "Clear form" option.
- [ ] f. Currency and language dropdowns from the public API.

**Done when:** you can fill in a full invoice, the totals are right, and a page refresh keeps the draft.

### 33. Generator page: live preview & template picker
**Goal:** the visitor sees the real invoice update as they type.

- [ ] a. Preview: a debounced (400 ms) call to `public/render`, shown in a sandboxed `iframe` scaled to fit A4.
- [ ] b. A loading shimmer during updates, and a crossfade when the template changes.
- [ ] c. Template picker: a thumbnail grid; the 21 free ones selectable, starter/pro shown locked with an "In the app" badge (→ App Store with `ct=gen-locked`).
- [ ] d. Deep links prefill the form: `?template=classic&currency=EUR&lang=de&industry=freelancer`. These URLs get a canonical tag pointing to the clean `/free-invoice-generator`.
- [ ] e. Error states: API down → a friendly message, and the form keeps working.

**Done when:** typing updates the preview within about half a second, and switching templates works on mobile.

### 34. Generate flow, watermark reveal & signup handoff
**Goal:** the generate moment turns visitors into users.

- [ ] a. The **Generate invoice** button runs Turnstile, then `public/pdf`, then downloads `invoice-{number}.pdf`.
- [ ] b. Animation: the invoice “prints” and slides out; **then** “Created with invoicor.com” fades in under the preview. That line appears **only after generating**, matching the PDF.
- [ ] c. Success panel: Download again · Create another · **“Save this client & send it from your phone, free in the app”** (App Store + QR code on desktop) · “Create a free account”.
- [ ] d. Handoff: create an `onboarding/session` with the draft, so that after signing up `onboarding/link` attaches the client and business details to the new account. Check what the iOS app needs for this.
- [ ] e. Analytics through `track()`: `gen_form_start`, `gen_template_change`, `gen_generate`, `gen_download`, `gen_app_click`, `gen_signup_click`.

**Done when:** a full run (fill → generate → PDF → app click) works, and every event shows up in PostHog.

### 35. Generator SEO content & launch
**Goal:** the page ranks for “free invoice generator”.

- [ ] a. Follow the generator blueprint (chunk 7):
  - H1 “Free Invoice Generator”
  - subtitle “Create a professional invoice in 60 seconds: no signup, download PDF.”
  - title `Free Invoice Generator – Create & Download PDF | Invoicor`
- [ ] b. About 1,200–1,800 words below the tool:
  - how to create an invoice in 3 steps
  - what an invoice must include (a checklist)
  - invoice vs. receipt vs. estimate
  - payment terms
  - a template gallery
  - use cases by industry
  - 8–12 FAQs
- [ ] c. JSON-LD: `webAppLd()` (price 0), `howToLd()`, `faqLd()`, `breadcrumbLd()`.
- [ ] d. Its own OG image showing the generator.
- [ ] e. **Internal links:** the hero CTA on the home page, the navbar, the footer, and the CTAs on every template and industry page now point here (with `?template=` / `?industry=` prefilled).
- [ ] f. Add it to the sitemap, ping IndexNow, request indexing in Search Console.
- [ ] g. Update the privacy policy if anything changed.

**Done when:** the page is live, indexed, and linked from every page on the site.

---

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

- [ ] a. In `proxy.ts`: on the **first visit to `/` only**, read `Accept-Language`. Use the country header from nginx GeoIP2 as a fallback (optional).
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

---

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
  - `Content-Security-Policy` (allow only your analytics, Turnstile and the API)
  - `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
  - `frame-ancestors` (allow embedding only for the embed widget route)
- [ ] f. Monitoring:
  - an uptime check (e.g. UptimeRobot) on `/` and `/api/invoices/templates/`
  - error tracking (Sentry or PostHog exceptions) for the web app
- [ ] g. Check the score on securityheaders.com.

**Done when:** all four pages hit the targets, securityheaders.com gives an A, and you get an alert when the site is down.

### 42. Guides hub (informational content)
**Goal:** rank for "how to" searches, and give the commercial pages links and authority.

- [ ] a. `/guides` hub + `/guides/[slug]` (MDX in `content/en/guides/`), following the guide blueprint (author or reviewer line, "last updated", table of contents, FAQ, a CTA to the generator).
- [ ] b. The first 6 guides, from the "how-to" cluster in the keyword map, e.g.:
  - how to write an invoice
  - invoice number format
  - payment terms explained
  - invoice vs receipt
  - how to invoice as a freelancer
  - what to do when an invoice is late
- [ ] c. Each guide links to 2–3 templates/industries + the generator. Templates and industry pages link back to the related guides.
- [ ] d. `howToLd()` / `faqLd()` where the content fits. Add the guides to the sitemap.
- [ ] e. Plan for 2 new guides a month (tracked in `seo/keyword-map.csv`).

**Done when:** 6 guides are live, indexed, and linked from related pages.

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

- [ ] a. API: support `document_type: receipt | estimate` in the public endpoints (different title and fields).
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

---

## Stage J: Growth track (parallel, from week 1)
_Inbound (people find you: SEO, App Store search, content) and outbound (you go to them: social, communities, PR, partners). These chunks don't wait for the rebuild unless "Start:" says so. Paid channels (Apple Search Ads, the Meta ads in `invoicor_api/docs/meta/`) are outside this roadmap, but use their keyword and creative data to guide the organic work._

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
- [ ] d. Every download page also offers "or fill it online in 60 seconds" → the generator, and "or on your phone" → the App Store.
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

### R1. Audit (2026-11-17)

| Area | Score | Summary |
|---|---|---|
| SEO crawlability | 🔴 1/5 | Every page ships an empty `<div id="root">` with the homepage title |
| Technical SEO | 🔴 1/5 | `www` duplicate (200), soft 404s, trailing-slash duplicates, a sitemap listing a page that doesn't exist |
| Branding | 🔴 1/5 | The logo is orange/red, but the site is indigo/violet/blue; the iOS AccentColor isn't set |
| Design consistency | 🟠 2/5 | Two separate design systems (dark inline styles vs. light Tailwind) |
| Navigation | 🟠 2/5 | The navbar has no links: only the logo and an App Store button |
| Motion / “alive” feel | 🟡 3/5 | Landing has animations; the other 32 SEO pages have none |
| Performance | 🟡 3/5 | 364 KB logo JPG, 4 analytics scripts, fonts loaded per page |
| Languages | 🔴 0/5 | English only, although the app supports many languages |
| Content depth (SEO pages) | 🟢 4/5 | Good long-form template, industry and compare pages |
| Trust pages | 🔴 1/5 | No About or Contact page; unverified rating markup |
| Code health | 🔴 2/5 | Leftovers from the AI Studio starter, a 588-line landing file, inline styles, no lint/types/CI |
| Deploy | 🔴 1/5 | Manual; built `dist/` was committed; no CI |

**Findings:**

1. **Google sees blank pages.** The site is a client-side Vite SPA served by nginx. `curl https://invoicor.com/templates/classic` returns `<div id="root"></div>` and the home title.
2. **Technical SEO:**
   - `https://www.invoicor.com` → 200 (a duplicate of the whole site; `http` correctly redirects with a 301)
   - `/does-not-exist` → 200 (soft 404)
   - `/templates/classic/` and `/templates/classic` both → 200
   - The sitemap (35 URLs) lists `/pricing`, which has no route, and leaves out `/help`, `/affiliate`, `/terms` and `/privacy`. Every `lastmod` is the build date.
   - `robots.txt` blocks `GPTBot`, `Google-Extended` and `CCBot` (a decision is needed, see chunk 6g).
3. **Brand mismatch.**
   - The logo is `#E95D05 → #DC3002`; the site uses `#6366f1` / `#7c3aed` / `#60a5fa` / `blue-600`.
   - The iOS `AccentColor` asset is empty.
   - Pricing on the website (3 tiers) doesn't match `strategy.md` (4 tiers).
4. **Two design systems.**
   - Landing, Affiliate, Help, Terms, Privacy and Footer: dark, about 300 inline styles.
   - Template, Industry and Compare: light Tailwind, system font.
   - Fonts load in only 4 pages.
5. **Meta problems:**
   - the default OG image `/default-og-image.jpg` doesn't exist
   - the OG image is a square logo
   - FAQ + app JSON-LD is sent on every route
   - `aggregateRating` 4.8/347 is unverified
   - `site.webmanifest` is missing; the favicons are JPG
6. **No navigation links**, no mobile menu, no About/Contact pages.
7. **Code health:**
   - The project started from the Google AI Studio starter (Vite + React 19 + React Router), **not Next.js**.
   - Leftovers: the README, `metadata.json`, the `GEMINI_API_KEY` define (no key is in the current build) and unused packages.
   - No `.gitignore`; `dist/` and `.DS_Store` were committed.
   - `Landing.tsx` is 588 lines, with 9 components inside it.
   - Duplicated constants, font links and images.
   - No `strict` TypeScript.
8. **Other:**
   - 4 analytics tools and no cookie consent (EU)
   - `/api/subscriptions/debug/` is marked temporary
   - the API docs load `swagger-ui-dist@latest`
   - hosting: a Hetzner VPS, nginx 1.24 on Ubuntu

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

**Gap:** nothing renders a visitor's own data without login. Filling templates in the browser doesn't work well:
- `{{ITEM_ROWS}}` is HTML built on the server.
- The `{{t.*}}` translations aren't public.
- A watermark added in the browser is easy to remove.

That's why chunks 30–31 add the public endpoints.

### R3. Design decisions

- **Light-first, with dark accent sections.** Invoices are white paper, forms read better on light backgrounds, and the SEO pages are already light. Dark is used for the hero, the stats band and the final CTA: near-black `#0C0A09` with an orange glow.
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

### R5. Target folder structure

> **Current state:** the app lives at the repo root (no `web/` level). The actual layout is described in [README.md](README.md#project-structure). The tree below is the long-term target; read it without the `web/` level. `proxy.ts` and `api/revalidate` only apply if we ever leave static export.

```
invoicor_web/                     repo root (after launch: only these)
  web/                            the Next.js app
    app/
      [locale]/
        layout.tsx                html lang, fonts, Navbar/Footer, consent, analytics
        page.tsx                  landing
        free-invoice-generator/page.tsx
        templates/page.tsx  templates/[slug]/page.tsx
        industries/…  compare/…  guides/…
        about/  contact/  help/  affiliate/
        (legal)/terms/  (legal)/privacy/
        brand/                    noindex: tokens + component showcase
        not-found.tsx  error.tsx  opengraph-image.tsx
      api/revalidate/route.ts     on-demand refresh (secret)
      llms.txt/route.ts
      sitemap.ts  robots.ts  manifest.ts  icon.svg  apple-icon.png
    components/
      ui/                         Button, Card, Badge, Input, Accordion, Breadcrumbs…
      layout/                     Navbar, Footer, LanguageSwitcher, Logo, ConsentBanner
      sections/                   Hero, Pricing, FAQ, TemplateCarousel… one file each
      generator/                  form, preview, line items, template picker
      seo/                        JsonLd
    content/
      schemas.ts                  zod schemas for every content type
      en/                         templates.json, industries.json, comparisons.json,
                                  pricing.json, faqs/, guides/*.mdx
      de/ es/ …                   translations (fallback to en)
    i18n/                         routing.ts, request.ts
    messages/                     en.json, de.json… (UI strings)
    lib/
      config.ts                   SITE_URL, API_URL, APP_STORE_URL… (zod-validated env)
      api.ts                      typed client for invoicor.com/api
      content.ts                  getAll / getBySlug
      seo.ts  jsonld.ts           metadata + structured data
      analytics.ts                track(), appStoreLink()
    styles/                       tokens.css, globals.css
    types/                        api.ts (generated from OpenAPI), shared types
    scripts/                      content-check.ts, parity-check.ts
    tests/e2e/                    Playwright smoke tests
    public/                       BingSiteAuth.xml, IndexNow key, static images
    proxy.ts                      locale handling + language banner signal
    next.config.ts
  deploy/                         deploy.sh, nginx/ configs, .env.example
  seo/                            keyword-map.csv, BLUEPRINTS.md, TRACKING.md, QA.md, baseline/
  .github/workflows/deploy.yml
  ROADMAP.md  BRAND.md  CONTENT.md  DEPLOY.md  README.md
```

**Code rules:**
- One component per file, under about 200 lines.
- No inline `style={{}}`; Tailwind + tokens only.
- Server components by default; `"use client"` only where there's interaction (generator, carousel, menus, consent).
- All content is typed, validated and checked in CI.
- PascalCase components, kebab-case routes, named exports (except pages/layouts).
- Every setting in `lib/config.ts`; every tracking call through `lib/analytics.ts`; every App Store link through `appStoreLink()`.

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

### R7. Migration strategy

1. **Build on `dev`** ✅: the Next.js app replaced the Vite app on `dev`; `main` (and the live site) still run Vite until you deploy.
2. **Baseline first** (chunk 4): record every URL, title and ranking **before** the first Next.js deploy.
3. **Check locally** ✅: `npm run build && npm run preview`. All 35 old sitemap URLs (minus the nonexistent `/pricing`) return 200; unknown URLs return 404. A separate staging server (chunk 26) is optional for a static site.
4. **Parity** (chunk 27): compare the baseline titles/canonicals against `out/` before deploying.
5. **Switch** (chunk 28): `bash deploy/deploy.sh` uploads `out/` and swaps folders; nginx `root` points at `$SITE_DIR/site`. Rollback = `bash deploy/deploy.sh --rollback` (under a minute).
6. **Watch** (chunk 29): 4 weeks of comparison against the baseline; redirect anything that 404s (in nginx).

### R8. Growth model

**Channels, ranked by expected impact and time to results** (for a young iOS app with a new website):

| # | Channel | Type | Time to results | Why |
|---|---|---|---|---|
| 1 | App Store search (ASO) | Inbound | 2–6 weeks | People search the App Store ready to install; no website needed (chunks 48–50) |
| 2 | Generator + PDF watermark loop | Inbound / viral | 1–3 months, compounding | Every invoice sent shows invoicor.com to a new business (chunks 30–35) |
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

---

## Decisions for you

_The open questions in one place. Each has a recommendation; write your answer in the **Your call** column (or just tell Claude) and the matching chunk can go ahead. Ordered by what blocks the most._

| # | Decision | Recommendation | Blocks | Your call |
|---|---|---|---|---|
| D1 | **Which price tiers are live?** Website: Free / Starter $4.99 / Pro $7.99 (yearly $49.99 / $79.99). `strategy.md`: also Business $19.99 and yearly $49 / $79. Affiliate calculator: Starter €4.99 / Pro €9.99. The iOS app only sells Starter and Pro (no Business product). **All 10 compare pages say Invoicor is "$12/mo flat, unlimited invoices"**, which matches no plan. Also: is there a free trial? The buttons say "Start Free Trial". | Use what the **App Store actually charges** as the only truth. Put it in `content/pricing.json` and let the home page, affiliate calculator **and compare pages** all read it. Fix the compare pages first: a wrong price is a trust and legal risk. | 5j, 11a, 20, 23, 24, 48 | ✅ **2026-11-17:** Free (3 invoices, lifetime) · Starter $4.99/mo or $49.99/yr (10/mo) · Pro $7.99/mo or $79.99/yr (50/mo). Monthly plans: **3-day free trial**; yearly: **7-day free trial**; cancel any time. No Business tier. |
| D2 | **Fake social proof.** Hero avatars are random faces from pravatar.cc, and the three testimonials aren't real customers. | Remove both now. Replace with true claims ("31 templates", "6 languages", "EU servers") until you have real reviews (chunk 50), then quote real App Store reviews with permission. | 19, 20 | ✅ **2026-11-17:** remove; use true facts until real reviews exist. |
| D3 | **AI bots in robots.txt.** `GPTBot`, `Google-Extended` and `CCBot` are blocked. | Allow the **answer/search** bots (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Claude-User`) so ChatGPT, Perplexity and Claude can recommend Invoicor. Training bots: allow too (more mentions in answers), unless you object. | 6g, 13b | ✅ **2026-11-17:** allow all AI bots (search and training). |
| D4 | **Analytics tools.** 4 tools load today: GA4, PostHog, StatsUp, Ahrefs. | Keep **PostHog** (funnels) + Search Console/Bing. Keep GA4 only if you open it. Drop StatsUp and Ahrefs Web Analytics. Fewer tools = faster pages and a smaller consent banner. | 14a, 14b | ✅ **2026-11-17:** keep PostHog + GA4; drop StatsUp and Ahrefs Web Analytics. |
| D5 | **Cookie consent.** No banner today, but GA4/PostHog set cookies (EU users). | A small branded banner; nothing loads until "Accept"; PostHog cookieless before consent. Needed before more EU traffic (Stage H). | 14b, 36 | ✅ **2026-11-17:** yes, branded consent banner; nothing with cookies before Accept. |
| D6 | **Legal/company details** for About, Contact and the footer (company name, KvK number, address or "registered in"). | Show the legal name + KvK number in the footer and on the About page. Needed for trust (E-E-A-T) and EU rules. | 7c, 24 | |
| D7 | **Brand strategy draft** (`BRAND.md`): positioning, audience, pillars, voice, tagline. | Review the draft, change what doesn't sound like you, then mark it approved. | 5, 15–25 | |
| D8 | **Templates hub title.** Changed from the old title to "Free Invoice Templates by Industry \| Invoicor" during the migration. | Keep it: it targets what people search. Revert if you prefer the old one. | n/a | |
| D9 | **Git history is 228 MB** (old `node_modules` and `dist` are still in history). | Optional: rewrite history with `git filter-repo` to shrink it. Needs a force-push and re-clone everywhere. Low priority. | n/a | |
| D10 | **Public generator backend** (chunks 30–31): a public render + PDF endpoint with watermark and rate limits in `invoicor_api`. | Yes. It's growth channel #2 in [R8](#r8-growth-model). Needs Django work, so plan it in the API repo. | 30–35 | |
| D11 | **iOS AccentColor** is empty (system blue). | Set it to brand orange `#E95D05` in the next app update, so the app matches the site. | 5i | |

---

## Your steps

_Things Claude can't do from here (they need your accounts, your server, your phone or your opinion). Everything else in this file Claude can build. Do them in this order when you have time; none of them blocks the build track except where noted._

| # | Step | Where | Chunk | Blocks |
|---|---|---|---|---|
| Y1 | **Export the SEO baseline** before the first Next.js deploy: Search Console Performance (queries + pages, 3 months, CSV), Pages report, Links report; Bing the same. Drop the files in `seo/baseline/2026-11/` (Claude commits and analyses them). | Search Console, Bing Webmaster | 4d | the first deploy |
| Y2 | **Server setup + first deploy:** `deploy/.env`, merge the nginx config, `sudo nginx -t`, `bash deploy/deploy.sh` (see DEPLOY.md A–C). | VPS | 2, 28 | going live |
| Y3 | **After going live:** resubmit the sitemap in Search Console and Bing, request indexing for the top pages. | Search Console, Bing | 28, 29 | n/a |
| Y4 | **Answer D6:** legal company name, KvK number, and what address or city to show. | this file | 7c, 24 | About, Contact, footer |
| Y5 | **Review BRAND.md** (D7): change what doesn't sound like you, mark it approved. | BRAND.md | 5 | final copy in Stage E |
| Y6 | **App Store provider token:** App Store Connect → Analytics → Campaigns → copy the provider token (`pt`) into `NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN`, so installs per page show up. | App Store Connect | 14e | install attribution |
| Y7 | **iOS app:** set `AccentColor` to `#E95D05` (D11); review prompt triggers (chunk 50). | Xcode | 5i, 50 | n/a |
| Y8 | **App Store listing:** name, subtitle, keywords, screenshots (Claude drafts the text and screenshot copy). | App Store Connect | 48, 49 | n/a |
| Y9 | **Profiles in your name:** Google Business Profile, Crunchbase, Product Hunt, LinkedIn page, X, YouTube; send Claude the URLs for `sameAs`. | each site | 51, 52 | n/a |
| Y10 | **Outreach and PR:** sending emails, posting in communities, launches (Claude drafts them). | email, Reddit, Product Hunt | 45, 52, 57 | n/a |
| Y11 | **Public generator API** (D10): approve, then it's built in `invoicor_api` and deployed on the server. | invoicor_api | 30, 31 | Stage G |
