# Invoicor Web Roadmap

_Last updated: 2026-11-17 (revision 2)_

Goal: make invoicor.com **look premium and on-brand**, **rank well in search (Google, Bing and AI assistants)**, and turn visitors into app users through a **free invoice generator**.

## How to use this file

- The work is split into **46 numbered chunks** in **9 stages**. Each chunk is roughly **one working session** (2–6 hours) and ends in something you can check.
- Do them **in order**. A chunk only depends on chunks with a lower number. Chunks marked ⇄ can run in parallel with the stage before them.
- Each chunk has: **Goal**, steps **a, b, c…**, and **Done when** (the check that closes it).
- Tick the steps as you go, and tick the chunk in the overview when its "Done when" passes.
- Background is in **Reference** at the bottom (R1–R7). Chunks link there instead of repeating it.
- Decisions to make are marked **🟡 Decide:**. Write the answer next to them, so the file stays the single source of truth.

---

## Overview (the todo list)

**Stage A: Clean repo, baseline & deploy**
- [ ] 1. Clean up the repo
- [ ] 2. Map the server & write DEPLOY.md
- [ ] 3. Set up auto-deploy (dev → main → live)
- [ ] 4. SEO baseline & quick fixes on the live site

**Stage B: Strategy (decide before building)**
- [ ] 5. Brand strategy
- [ ] 6. SEO strategy: keyword map & URL plan
- [ ] 7. Page-type blueprints & content quality rules

**Stage C: Next.js foundation**
- [ ] 8. Create the Next.js app skeleton
- [ ] 9. Tooling & CI checks
- [ ] 10. Config, types & API client
- [ ] 11. Content pipeline & page generation
- [ ] 12. Metadata & structured data helpers
- [ ] 13. Sitemap, robots & indexing
- [ ] 14. Analytics, cookie consent & App Store attribution

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
- [ ] h. **Targets:** pick 10 priority keywords and set a 6-month goal for each (e.g. top 10 for "free invoice generator").

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
_Repo layout during the migration: the new app is built in **`web/`** on the `dev` branch, while the old Vite app stays at the root and keeps deploying. At launch (chunk 28) the Vite files are removed, and `web/` + `deploy/` remain, the same layout as vindevent._

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
- [ ] b. Keep the claims about competitors factual and dated (legal safety).
- [ ] c. Hub grid + intro.
- [ ] d. Metadata, OG images, JSON-LD.

**Done when:** every old `/compare/*` URL works and its content is in the raw HTML.

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
- [ ] c. A small calculator page: late fee or VAT calculator, linking to the generator.
- [ ] d. A "Free tools" footer column + a navbar dropdown.

**Done when:** both generators are live with the watermark and their SEO content.

### 45. Launch & backlinks
**Goal:** outside links and the first users.

- [ ] a. Track the watermark: check that `?ref=pdf` visits show up in analytics.
- [ ] b. Listings: Product Hunt, AlternativeTo, SaaSHub, G2/Capterra, freelancer tool lists. Use UTM links (chunk 14f).
- [ ] c. An "Embed this generator" snippet (iframe + a credit link back) for blogs and accountants.
- [ ] d. Outreach to the "best free invoice generator" roundups (find them on Google, ask for inclusion).
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
- [ ] f. Pick the 1–2 biggest fixes and add them as new chunks at the end of this file.

**Done when:** it's a recurring calendar item (or a scheduled Claude task).

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

1. **Build next to the old site:** Next.js in `web/` on `dev`; the Vite site at the root keeps deploying from `main`.
2. **Baseline first** (chunk 4): record every URL, title and ranking before anything changes.
3. **Staging** (chunk 26): the full site on `staging.invoicor.com`, password-protected and `noindex`.
4. **Parity** (chunk 27): a script proves every old URL resolves with the right title and canonical.
5. **Switch** (chunk 28): nginx goes from `dist/` to PM2; rollback = restore one nginx file (under 1 minute).
6. **Watch** (chunk 29): 4 weeks of comparison against the baseline; redirect anything that 404s.
