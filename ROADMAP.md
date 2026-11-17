# Invoicor Web Roadmap

_Last updated: 2026-11-17_

Goal: make invoicor.com **look premium and on-brand**, **rank well in search**, and turn visitors into app users through a **free invoice generator**.

## How to use this file

- The work is split into **35 numbered chunks**. Each chunk is roughly **one working session** (2–6 hours) and ends in something you can check.
- Do them **in order**. A chunk only depends on chunks with a lower number. The exceptions are marked ⇄ and can run in parallel.
- Each chunk has: **Goal**, steps **a, b, c…**, and **Done when** (the check that closes it).
- Tick the boxes as you go, and tick the chunk in the overview below when its "Done when" passes.
- Background (the audit, decisions, API) is at the bottom in **Reference**. Chunks link to it instead of repeating it.

---

## Overview (the todo list)

**Stage A: Clean repo & auto-deploy**
- [ ] 1. Clean up the repo
- [ ] 2. Map the server & write DEPLOY.md
- [ ] 3. Set up auto-deploy (dev → main → live)

**Stage B: Next.js foundation**
- [ ] 4. Create the Next.js app skeleton
- [ ] 5. Tooling & CI checks
- [ ] 6. Config, types & data layer
- [ ] 7. SEO helpers & analytics

**Stage C: Brand system**
- [ ] 8. Brand tokens (colors, gradient, type, spacing)
- [ ] 9. Logo, icons & OG images
- [ ] 10. UI components kit

**Stage D: Rebuild the pages (in the new brand)**
- [ ] 11. Navbar & footer
- [ ] 12. Landing page, part 1 (hero → how it works)
- [ ] 13. Landing page, part 2 (features → final CTA)
- [ ] 14. Template pages + hub
- [ ] 15. Industry pages + hub
- [ ] 16. Compare pages + hub
- [ ] 17. Help, affiliate, terms, privacy
- [ ] 18. Motion & micro-interactions
- [ ] 19. Go live on Next.js

**Stage E: Free invoice generator** (⇄ 20–21 can start any time, they're backend)
- [ ] 20. API: public render endpoint
- [ ] 21. API: public PDF + watermark + abuse limits
- [ ] 22. Generator page: form
- [ ] 23. Generator page: live preview & template picker
- [ ] 24. Generate flow, watermark reveal & signup handoff
- [ ] 25. Generator SEO content & launch

**Stage F: Languages**
- [ ] 26. i18n plumbing & language switcher
- [ ] 27. Auto-detect language
- [ ] 28. German
- [ ] 29. Spanish
- [ ] 30. French, Portuguese, Italian, Dutch

**Stage G: Scale & grow**
- [ ] 31. Performance pass
- [ ] 32. Generator spoke pages
- [ ] 33. More free tools (receipt, estimate)
- [ ] 34. Launch & backlinks
- [ ] 35. Monthly monitoring routine

---

## Stage A: Clean repo & auto-deploy
_Done in the current Vite repo. Don't tidy the old code itself; it gets rebuilt in Stage B._

### 1. Clean up the repo
**Goal:** the repo holds only source code, with no starter-template leftovers.

- [ ] a. Create a `dev` branch and work on it from now on (`main` = production).
- [ ] b. Add `.gitignore`: `node_modules/`, `dist/`, `.next/`, `out/`, `.vite/`, `.env*`, `!.env.example`, `.DS_Store`.
- [ ] c. Take the built output and Mac files out of git: `git rm -r --cached dist`, plus `git rm --cached` on every `.DS_Store`.
- [ ] d. Remove the AI Studio leftovers:
  - `metadata.json`
  - the `GEMINI_API_KEY` define and the HMR comment in `vite.config.ts`
  - the packages `@google/genai`, `express`, `dotenv`, `@types/express`, `tsx`, `autoprefixer` (`npm uninstall …`)
- [ ] e. Rename the package in `package.json` to `invoicor-web`.
- [ ] f. Rewrite `README.md`: what this is, `npm install`, `npm run dev`, `npm run build`, and links to `ROADMAP.md` and `DEPLOY.md`.
- [ ] g. Commit on `dev`.

**Done when:** `npm run build` still works, `git status` is clean after a build, and `git ls-files | grep -E "dist/|DS_Store"` returns nothing.

### 2. Map the server & write DEPLOY.md
**Goal:** know exactly how invoicor.com is served today, written down.

- [ ] a. SSH into the Hetzner server and run `grep -rn "invoicor" /etc/nginx/sites-enabled/` to find the nginx config.
- [ ] b. Write down:
  - the site folder (e.g. `/var/www/invoicor.com`)
  - which folder nginx serves (`dist/`?)
  - how `/api/` is proxied to Django
  - where the SSL certificates live
- [ ] c. Check how the site is updated today (`git pull` in that folder? a copied `dist/`?).
- [ ] d. Write `DEPLOY.md` in the style of `vindevent/DEPLOY.md`: a request-flow diagram, a "what / where" table, "every update" steps and "rollback" steps.

**Done when:** someone else could deploy and roll back using only `DEPLOY.md`.

### 3. Set up auto-deploy (dev → main → live)
**Goal:** one command on the Mac takes `dev` to production, safely.

- [ ] a. Copy `seedtorank/.github/workflows/deploy.yml` and cut it down to a single **web build** job, followed by the **deploy** job.
- [ ] b. Write `deploy/deploy.sh`:
  - **Mac mode:** push `dev`, open a PR into `main` and merge it (`gh pr create` + `gh pr merge`).
  - **Server mode (`--server`):** `git pull` → `npm ci` → `npm run build` → `sudo systemctl reload nginx`.
- [ ] c. Add the GitHub repo secrets the workflow needs (SSH host, user and key), the same as seedtorank.
- [ ] d. Test it: change one word on `dev`, run `bash deploy/deploy.sh` and watch the GitHub Action.
- [ ] e. Add the commands and a rollback step (`git revert` + redeploy) to `DEPLOY.md`.

**Done when:** a change on `dev` is live on invoicor.com after one command, and a failing build never reaches the server.

---

## Stage B: Next.js foundation
_Build the new app next to the old one (`web/` folder or a `next` branch). The old site stays live until chunk 19._

### 4. Create the Next.js app skeleton
**Goal:** an empty Next.js app with the final folder structure.

- [ ] a. `npx create-next-app@latest`: TypeScript, Tailwind, App Router, ESLint, `src/` off, alias `@/*`.
- [ ] b. Turn on `"strict": true` in `tsconfig.json`, and remove `allowJs`.
- [ ] c. Create the folder structure (see [Reference R5](#r5-target-folder-structure)), with empty `index` files where needed.
- [ ] d. Install `next-intl`, and set up `app/[locale]/` with **English only** for now. Using `[locale]` from day one avoids moving every file later.
- [ ] e. A placeholder home page that renders "Invoicor" at `/`.

**Done when:** `npm run dev` shows the placeholder at `/`, and `npm run build` passes.

### 5. Tooling & CI checks
**Goal:** messy code can't get in.

- [ ] a. Prettier + `prettier-plugin-tailwindcss` (sorts classes automatically).
- [ ] b. ESLint with Next's config, plus a rule that forbids inline `style={{}}`.
- [ ] c. `package.json` scripts: `dev`, `build`, `start`, `lint`, `typecheck` (`tsc --noEmit`), `format`.
- [ ] d. A pre-commit hook: `husky` + `lint-staged` (format and lint the changed files).
- [ ] e. Add `lint` and `typecheck` to the CI workflow from chunk 3, so they run before `build`.

**Done when:** committing a file with an inline style or a type error is blocked, and CI shows lint, typecheck and build.

### 6. Config, types & data layer
**Goal:** every setting and every piece of content has exactly one home, and is typed.

- [ ] a. `lib/config.ts`: `SITE_URL`, `API_URL`, `APP_STORE_URL`, `APP_STORE_ID`, the social links. Values come from `NEXT_PUBLIC_*` env vars.
- [ ] b. `.env.example` with every variable and a comment for each.
- [ ] c. `types/`: `Template`, `Industry`, `Comparison`, `ApiTemplate`, `Currency`, `Language`.
- [ ] d. Move `templates.json`, `industries.json` and `comparisons.json` to `content/`, with a `zod` schema each. The build fails on a missing field.
- [ ] e. `lib/api.ts`: a typed fetch wrapper with `getTemplates()`, `getTemplatePreview(slug)`, `getCurrencies()` and `getLanguages()`. It caches with Next's `revalidate` (e.g. 1 hour).

**Done when:** a small test page lists all templates from the API and all industries from `content/`, with full type safety.

### 7. SEO helpers & analytics
**Goal:** every page gets correct SEO with one function call.

- [ ] a. `lib/seo.ts`: `buildMetadata({ title, description, path, image })`. It returns the title, description, canonical URL, OG/Twitter tags and `alternates.languages` (hreflang, ready for Stage F).
- [ ] b. JSON-LD builders: `organizationLd()`, `breadcrumbLd()`, `faqLd()`, `howToLd()`, `softwareAppLd()`, and a `<JsonLd>` component that renders them.
- [ ] c. `app/sitemap.ts` (all routes and slugs) and `app/robots.ts`. These replace `scripts/generate-sitemap.cjs`.
- [ ] d. `lib/analytics.ts`: `track(event, props)`, the **only** place that calls PostHog or gtag.
- [ ] e. Load PostHog (and GA4 if you keep it) with `next/script` (`afterInteractive`). Drop StatsUp and Ahrefs unless you actually check them.
- [ ] f. Check the App Store rating. Use the real number in `softwareAppLd()`, or leave the rating out.

**Done when:** the test page's raw HTML (`curl`) contains the correct title, canonical URL and JSON-LD, and `/sitemap.xml` lists every URL.

---

## Stage C: Brand system
_See [Reference R3](#r3-design-decisions) for the decisions behind this stage._

### 8. Brand tokens (colors, gradient, type, spacing)
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
- [ ] f. `BRAND.md`:
  - where the gradient is allowed (primary CTA, one word per headline, the popular pricing card, the hero glow) and where it isn't
  - brand voice in 5 lines
  - words to use and words to avoid

**Done when:** a hidden `/brand` page shows every color, the gradient, all type sizes and all shadows, and they look right together.

### 9. Logo, icons & OG images
**Goal:** sharp brand assets everywhere, and no 364 KB JPGs.

- [ ] a. Redraw the logo as **SVG**: the mark, mark + wordmark, light and dark versions. Add it as a `<Logo>` component.
- [ ] b. App icons with Next file conventions: `app/icon.svg`, `app/apple-icon.png` (180×180), `app/manifest.ts`.
- [ ] c. `app/[locale]/opengraph-image.tsx`: a branded 1200×630 card (orange glow, logo, page title).
- [ ] d. Per-page OG images for templates (with the template preview), industries and compare pages.
- [ ] e. Delete the duplicated `icon.jpg`, `logo.jpg` and `og-image.jpg` once nothing references them.

**Done when:** pasting a template-page URL into WhatsApp or Slack, or into an OG debugger, shows a branded card with the right title.

### 10. UI components kit
**Goal:** pages are built from shared parts, never one-off styles.

- [ ] a. `Button`: primary (gradient), secondary, ghost; sizes sm/md/lg; loading state; works as a link.
- [ ] b. `Container`, `Section` (light/dark/glow variants), `Heading` (with an optional gradient word), `Text`.
- [ ] c. `Card`, `Badge` (free/starter/pro), `AppStoreBadge`.
- [ ] d. Form parts for the generator later: `Input`, `Textarea`, `Select`, `Field` (label + error), `NumberInput`.
- [ ] e. `Accordion` (FAQ), `Tabs`, `Skeleton`.
- [ ] f. Show every component on the `/brand` page.
- [ ] g. Accessibility: visible focus rings in brand color, AA contrast (orange text on white uses `brand-700`).

**Done when:** every component is on `/brand`, works with the keyboard and passes an axe/Lighthouse accessibility check.

---

## Stage D: Rebuild the pages (in the new brand)
_Light-first, with dark glow sections as accents. Port the **content**, not the old code. Keep every URL the same._

### 11. Navbar & footer
**Goal:** clear navigation on every page.

- [ ] a. Navbar links: Free Invoice Generator · Templates · Industries · Pricing · Help, plus the App Store CTA. Leave a slot for the language switcher.
- [ ] b. Light by default, with a transparent version over dark heroes. Blur and border appear on scroll.
- [ ] c. Mobile: a hamburger opening a slide-out menu, with the focus kept inside it and closing on Esc.
- [ ] d. Footer columns: Product, Free tools, Templates (top 6), Industries (top 6), Compare, Company, Legal. Brand gradient hairline at the top, App Store badge.
- [ ] e. Both are server components; only the mobile menu toggle is a client component.

**Done when:** every page is reachable within two clicks from any page, on desktop and mobile.

### 12. Landing page, part 1 (hero → how it works)
**Goal:** a premium first impression.

- [ ] a. Split it into one file per section in `components/sections/`.
- [ ] b. **Hero:** dark with the orange glow, a headline with one gradient word, two CTAs (“Create a free invoice” → generator, “Get the app” → App Store) and an iPhone/invoice mockup.
- [ ] c. Trust strip: a short line plus the App Store rating (real numbers only).
- [ ] d. Templates carousel: live from the API, with skeletons while loading and a fallback if the API fails.
- [ ] e. How it works: 3 steps with icons.

**Done when:** the top half of the page looks finished on mobile and desktop, and Lighthouse shows no layout shift.

### 13. Landing page, part 2 (features → final CTA)
**Goal:** the full landing page, with SEO.

- [ ] a. Features grid (auto-fill, templates, currencies, tax/discount, status tracking, dashboard).
- [ ] b. Currencies & languages + "Your data stays in Europe" (security).
- [ ] c. Pricing: monthly/yearly toggle, the popular card with a gradient border, every plan's features.
- [ ] d. Testimonials: **real ones only**; remove the section if you don't have them yet.
- [ ] e. A visible FAQ (Accordion) + matching `faqLd()`.
- [ ] f. Final CTA section (dark + glow).
- [ ] g. Metadata + `softwareAppLd()` + `organizationLd()`, on this page only.

**Done when:** the full page is done, `curl /` shows all the text, and Google's Rich Results Test shows the FAQ + app markup without errors.

### 14. Template pages + hub
**Goal:** `/templates` and `/templates/[slug]` rebuilt, statically generated.

- [ ] a. `generateStaticParams` from `content/templates.json`. `revalidate` so new templates appear automatically.
- [ ] b. Template page:
  - branded hero with the live preview image
  - sticky CTA "Use this template free →" (to the generator with `?template=slug` later; to the App Store for now)
  - the existing long-form content
  - related templates + industries
- [ ] c. Hub: a filterable grid (free / starter / pro).
- [ ] d. Metadata, `breadcrumbLd()`, OG image for each page.

**Done when:** every old `/templates/*` URL renders its full content in the raw HTML, styled in the new brand.

### 15. Industry pages + hub
**Goal:** the same treatment for `/industries` and `/industries/[slug]`.

- [ ] a. `generateStaticParams` from `content/industries.json`.
- [ ] b. Page sections: hero, the industry's pain points, recommended templates, FAQ (+ `faqLd()` if visible), CTA.
- [ ] c. Hub grid with icons.
- [ ] d. Metadata, breadcrumbs, OG images.

**Done when:** every old `/industries/*` URL works and its content is in the raw HTML.

### 16. Compare pages + hub
**Goal:** the same treatment for `/compare` and `/compare/[slug]`.

- [ ] a. `generateStaticParams` from `content/comparisons.json`.
- [ ] b. A comparison table component (✓/✗, prices), a verdict box and a CTA.
- [ ] c. Hub grid.
- [ ] d. Metadata, breadcrumbs, OG images.

**Done when:** every old `/compare/*` URL works and its content is in the raw HTML.

### 17. Help, affiliate, terms, privacy
**Goal:** the remaining pages on the new system.

- [ ] a. Help: FAQ accordion + search filter + contact.
- [ ] b. Affiliate: rebuilt with the shared sections (hero, how it works, payouts, FAQ, CTA).
- [ ] c. Terms & Privacy: a simple `prose` layout with a table of contents and a "last updated" date.
- [ ] d. A branded 404 (`not-found.tsx`) and error page (`error.tsx`).

**Done when:** no page uses the old styling, and a random wrong URL shows the branded 404.

### 18. Motion & micro-interactions
**Goal:** the site feels alive, without getting in the way. Uses the `motion` package.

- [ ] a. `<Reveal>` component: fade + 12 px rise on scroll, 60 ms stagger for lists. Used on section headings and card grids.
- [ ] b. Hero: staggered headline entrance, a gently floating mockup, slow drift on the glow.
- [ ] c. Buttons: 1 px lift on hover, a gradient sheen sweep on the primary CTA, `scale(.97)` on press.
- [ ] d. Cards: lift + shadow on hover; slight tilt on template thumbnails (desktop only).
- [ ] e. Navbar: a sliding underline under the active/hovered link. Accordion: smooth height animation. Count-up stats.
- [ ] f. A short fade between routes.
- [ ] g. Guardrails:
  - everything off under `prefers-reduced-motion`
  - animate only `transform` and `opacity`
  - nothing loops forever except the hero glow

**Done when:** it looks good with motion on, works fully with reduced motion on, and CLS stays at 0.

### 19. Go live on Next.js
**Goal:** swap production from Vite to Next.js with no lost URLs.

- [ ] a. List every live URL from the old sitemap and check that each returns 200 on the new app (a small script).
- [ ] b. `next.config` redirects (301) for anything renamed. Old `/help` etc. stay the same.
- [ ] c. Server: install Node + PM2. Run `next start` on a port (e.g. 3020) as PM2 `invoicor-web`.
- [ ] d. nginx: `/api/` still goes to Django; everything else proxies to the PM2 port. Keep the old `dist/` config as a commented-out rollback.
- [ ] e. Update `deploy.sh --server`: `npm ci` → `npm run build` → `pm2 reload invoicor-web`. Update `DEPLOY.md`.
- [ ] f. Deploy, then check with `curl`: titles, canonical URLs, JSON-LD on 5 random pages.
- [ ] g. Search Console + Bing Webmaster: resubmit the sitemap, run URL Inspection on the home page and 3 SEO pages.
- [ ] h. After a week with no issues, delete the old Vite code.

**Done when:** invoicor.com is served by Next.js, every old URL still works, and Search Console's live test shows the real page content.

---

## Stage E: Free invoice generator
_Chunks 20–21 are in the **invoicor_api** (Django) repo and can be done any time ⇄. Chunks 22+ need 19 done._

### 20. API: public render endpoint
**Goal:** visitors can get a filled invoice preview without an account.

- [ ] a. A serializer for the public invoice input:
  - `template_slug`, `language`, `currency`
  - `sender{}`, `client{}`, `items[]{description, qty, unit_price}`
  - `tax_rate`, `discount`, `notes`, `payment_terms`, `bank{}`, `due_date`, `issue_date`, `invoice_number`, `logo` (base64)
- [ ] b. Reuse the existing render logic (the one behind `/invoices/{id}/render/`), but take the serializer data instead of a saved invoice. **Nothing is stored.**
- [ ] c. `POST /api/invoices/public/render/` returns HTML.
- [ ] d. Only `tier: free` templates; others get a 403 `{"code": "template_locked"}`.
- [ ] e. Limits: body ≤ 200 KB, ≤ 50 items, logo ≤ 500 KB and PNG/JPG/sanitized SVG only, rate 60/minute per IP (DRF throttle).
- [ ] f. Tests: a happy path, a locked template, an oversized request, the throttle. Add the endpoint to the OpenAPI docs.

**Done when:** `curl -X POST …/public/render/` with sample JSON returns a correct invoice in HTML.

### 21. API: public PDF + watermark + abuse limits
**Goal:** visitors can download a PDF that carries your brand.

- [ ] a. `POST /api/invoices/public/pdf/`: same input, rendered to PDF with the existing PDF engine.
- [ ] b. The watermark, added **only in this endpoint** and on the server: a footer line “Created with invoicor.com” linking to `https://invoicor.com/?ref=pdf`, small, grey, the same position on every template.
- [ ] c. Cloudflare Turnstile: the endpoint requires a valid token (verified on the server).
- [ ] d. Rate limit 10 PDFs/hour per IP.
- [ ] e. Count generated PDFs by template, currency and language (no personal data). Optional `GET /api/invoices/public/stats/` for "X invoices created".
- [ ] f. Housekeeping: remove `/api/subscriptions/debug/`, and pin `swagger-ui-dist` to a fixed version.
- [ ] g. Tests + docs.

**Done when:** a PDF downloads with the watermark link working, and the 11th request in an hour is refused.

### 22. Generator page: form
**Goal:** `/free-invoice-generator` with a complete, pleasant form.

- [ ] a. Route + page layout: the form on the left, a preview slot on the right; stacked on mobile, with a Form / Preview tab switch.
- [ ] b. Sections (collapsible): Your business · Client · Invoice details (number, dates) · Line items · Tax & discount · Payment (terms, bank, payment link) · Notes · Logo.
- [ ] c. Line items: add, remove and reorder rows; quantity × price; live subtotal, tax, discount and total, formatted with `Intl.NumberFormat` in the chosen currency.
- [ ] d. State in one typed store (`useReducer` or Zustand), validated with `zod`.
- [ ] e. Autosave the draft to `localStorage` (wrapped in try/catch), plus a "Clear form" option.
- [ ] f. Currency and language dropdowns from the public API.

**Done when:** you can fill in a full invoice, the totals are right, and a page refresh keeps the draft.

### 23. Generator page: live preview & template picker
**Goal:** the visitor sees the real invoice update as they type.

- [ ] a. Preview: a debounced (400 ms) call to `public/render`, shown in a sandboxed `iframe` scaled to fit A4.
- [ ] b. A loading shimmer during updates, and a crossfade when the template changes.
- [ ] c. Template picker: a thumbnail grid; the 21 free ones selectable, starter/pro shown locked with an "In the app" badge (click → App Store).
- [ ] d. Deep links: `?template=classic&currency=EUR&lang=de` prefill the form.
- [ ] e. Error states: API down → a friendly message, and the form keeps working.

**Done when:** typing updates the preview within about half a second, and switching templates works on mobile.

### 24. Generate flow, watermark reveal & signup handoff
**Goal:** the generate moment turns visitors into users.

- [ ] a. The **Generate invoice** button runs Turnstile, then `public/pdf`, then downloads `invoice-{number}.pdf`.
- [ ] b. Animation: the invoice “prints” and slides out; **then** “Created with invoicor.com” fades in under the preview. That line appears **only after generating**, matching the PDF.
- [ ] c. Success panel: Download again · Create another · **“Save this client & send it from your phone, free in the app”** (App Store + QR code on desktop) · “Create a free account”.
- [ ] d. Handoff: create an `onboarding/session` with the draft, so that after signing up `onboarding/link` attaches the client and business details to the new account. Check what the iOS app needs for this.
- [ ] e. Analytics through `track()`: `gen_form_start`, `gen_template_change`, `gen_generate`, `gen_download`, `gen_app_click`, `gen_signup_click`.

**Done when:** a full run (fill → generate → PDF → app click) works, and every event shows up in PostHog.

### 25. Generator SEO content & launch
**Goal:** the page ranks for “free invoice generator”.

- [ ] a. H1 “Free Invoice Generator”; subtitle “Create a professional invoice in 60 seconds: no signup, download PDF.”
- [ ] b. Title `Free Invoice Generator – Create & Download PDF | Invoicor`, meta description ≤155 characters.
- [ ] c. About 1,200–1,800 words below the tool:
  - how to create an invoice in 3 steps
  - what an invoice must include (a checklist)
  - invoice vs. receipt vs. estimate
  - payment terms (Net 15/30, due on receipt)
  - a template gallery
  - use cases by industry
  - 8–12 FAQs
- [ ] d. JSON-LD: `WebApplication` (price 0), `HowTo`, `FAQPage`, `BreadcrumbList`.
- [ ] e. Its own OG image showing the generator.
- [ ] f. Internal links: the hero CTA on the home page, the navbar, the footer, and the CTA on every template and industry page pointing here with `?template=` prefilled.
- [ ] g. Add it to the sitemap and run URL Inspection in Search Console.

**Done when:** the page is live, indexed, and linked from every page on the site.

---

## Stage F: Languages
_See [Reference R4](#r4-language-strategy) for the strategy._

### 26. i18n plumbing & language switcher
**Goal:** the site is ready for any language; English still the only one live.

- [ ] a. Move every UI string from the components into `messages/en.json` (next-intl).
- [ ] b. Content per locale: `content/{locale}/templates.json` etc., falling back to English.
- [ ] c. Translated slugs map (e.g. `free-invoice-generator` → `de: kostenloser-rechnungsgenerator`).
- [ ] d. `buildMetadata()` outputs `hreflang` for every live locale + `x-default`. The sitemap includes every locale.
- [ ] e. `<LanguageSwitcher>` (globe icon) in the navbar and footer: each language named in itself (Deutsch, Español…), and switching goes to the **same page** in that language.
- [ ] f. Locale-aware formatting: dates and numbers with `Intl`, and a default currency per locale.

**Done when:** adding a language means adding JSON files only, with no code changes.

### 27. Auto-detect language
**Goal:** visitors are offered their language without hurting SEO.

- [ ] a. Next middleware: on the **first visit to `/` only**, read `Accept-Language`. Use the country header from nginx GeoIP2 as a fallback (optional).
- [ ] b. **Don't redirect.** Show a small banner: “🇩🇪 Diese Seite auf Deutsch ansehen?” → Ja / No thanks.
- [ ] c. Save the choice in a `lang` cookie (1 year), and never ask again.
- [ ] d. Check that Googlebot (no `Accept-Language`) always gets the page it asked for.

**Done when:** a browser set to German sees the banner once, and Google still crawls `/` and `/de/` separately.

### 28. German
**Goal:** `/de/` live for the pages that matter most.

- [ ] a. Machine-translate `messages/de.json`, then have a native speaker review it.
- [ ] b. Translate the landing page, generator (+ SEO content), top 10 template pages and top 5 industry pages. Local details: “Rechnung”, USt/MwSt, IBAN, EUR default.
- [ ] c. German translated slugs + metadata.
- [ ] d. Enable `de` in the config, deploy, submit the sitemap, and inspect 3 URLs in Search Console.

**Done when:** the `/de/` pages are indexed and `hreflang` is valid (check with an hreflang testing tool).

### 29. Spanish
**Goal:** `/es/` live: the same steps as chunk 28 (“factura”, IVA, EUR/MXN depending on region).

- [ ] a. Translate the messages, with a review.
- [ ] b. Landing, generator, top templates and industries.
- [ ] c. Slugs + metadata.
- [ ] d. Enable, deploy, Search Console.

**Done when:** the `/es/` pages are indexed with valid `hreflang`.

### 30. French, Portuguese, Italian, Dutch
**Goal:** cover the rest of the main European languages, one at a time.

- [ ] a. Look at the Search Console data from DE/ES first: which pages earned traffic? Translate those first.
- [ ] b. For each language, repeat chunk 28's steps a–d.

**Done when:** all four are live and indexed.

---

## Stage G: Scale & grow

### 31. Performance pass
**Goal:** fast on a mid-range phone.

- [ ] a. Measure: Lighthouse mobile + PageSpeed Insights on the home page, generator, a template page and an industry page.
- [ ] b. Targets: LCP < 2.5 s, CLS < 0.1, INP < 200 ms, Lighthouse ≥ 95.
- [ ] c. Fix the findings:
  - every image through `next/image`
  - lazy-load the generator preview and the carousel
  - check the analytics loading strategy
  - subset the fonts
- [ ] d. nginx: Brotli/gzip on, long cache headers for `/_next/static/`, HTTP/2 or HTTP/3.

**Done when:** all four pages hit the targets.

### 32. Generator spoke pages
**Goal:** rank for long-tail searches with the same tool.

- [ ] a. A reusable "generator landing" layout: tool + preset + its own H1, intro and FAQ.
- [ ] b. By profession: `/free-invoice-generator/freelancer`, `/contractor`, `/consultant`, `/photographer`, `/cleaning`.
- [ ] c. By search intent: `/invoice-generator-pdf`, `/invoice-template-word-alternative`.
- [ ] d. By country: `/invoice-generator-uk` (VAT), `/eu` (IBAN), `/australia` (GST), `/canada` (GST/HST).
- [ ] e. Each one gets unique content (no copy-paste), breadcrumbs, a sitemap entry, and links from related template and industry pages.

**Done when:** the first 8 spoke pages are live and indexed.

### 33. More free tools (receipt, estimate)
**Goal:** more entry points from the same engine.

- [ ] a. API: support `document_type: receipt | estimate` in the public endpoints (different title and fields).
- [ ] b. `/free-receipt-generator` and `/free-estimate-generator` reuse the generator components.
- [ ] c. A small calculator page: late fee or VAT calculator, linking to the generator.
- [ ] d. A "Free tools" footer column + a navbar dropdown.

**Done when:** both generators are live with the watermark and their SEO content.

### 34. Launch & backlinks
**Goal:** outside links and the first users.

- [ ] a. Track the watermark: check that `?ref=pdf` visits show up in analytics.
- [ ] b. Listings: Product Hunt, AlternativeTo, SaaSHub, G2/Capterra, freelancer tool lists.
- [ ] c. An "Embed this generator" snippet (iframe + a credit link back) for blogs and accountants.
- [ ] d. Outreach to the "best free invoice generator" roundups (find them on Google, ask for inclusion).
- [ ] e. Removing the watermark becomes a listed perk of the paid plans (upsell copy on the pricing page).

**Done when:** you're listed in 5+ places and the first referral traffic is visible.

### 35. Monthly monitoring routine
**Goal:** a 30-minute check every month.

- [ ] a. Search Console:
  - rankings and clicks for “free invoice generator”, “invoice maker”, “invoice template pdf”, “create invoice online” (+ each language's equivalent)
  - coverage errors
- [ ] b. PostHog: the generate → download → app click / signup funnel. Find the step with the biggest drop.
- [ ] c. Core Web Vitals report.
- [ ] d. Pick the 1–2 biggest fixes and add them as new chunks at the end of this file.

**Done when:** it's a recurring calendar item (or a scheduled Claude task).

---

## Reference

### R1. Audit (2026-11-17)

| Area | Score | Summary |
|---|---|---|
| SEO crawlability | 🔴 1/5 | Every page ships an empty `<div id="root">` with the homepage title |
| Branding | 🔴 1/5 | The logo is orange/red, but the site is indigo/violet/blue |
| Design consistency | 🟠 2/5 | Two separate design systems (dark inline styles vs. light Tailwind) |
| Navigation | 🟠 2/5 | The navbar has no links: only the logo and an App Store button |
| Motion / “alive” feel | 🟡 3/5 | Landing has animations; the other 32 SEO pages have none |
| Performance | 🟡 3/5 | 364 KB logo JPG, 4 analytics scripts, fonts loaded per page |
| Languages | 🔴 0/5 | English only, although the app supports many languages |
| Content depth (SEO pages) | 🟢 4/5 | Good long-form template, industry and compare pages |
| Code health | 🔴 2/5 | Leftovers from the AI Studio starter, a 588-line landing file, inline styles, no lint/types/CI |
| Deploy | 🔴 1/5 | Manual; built `dist/` committed to git; no dev branch, no CI |

**Critical findings:**
1. **Google sees blank pages.** The site is a client-side Vite SPA served by nginx. `curl https://invoicor.com/templates/classic` returns `<div id="root"></div>` and the home title. (Fixed by chunks 4–19.)
2. **Brand mismatch.** The logo is `#E95D05 → #DC3002`; the site uses `#6366f1` / `#7c3aed` / `#60a5fa` / `blue-600`. (Chunks 8–17.)
3. **Two design systems.**
   - Landing, Affiliate, Help, Terms, Privacy and Footer: dark, about 300 inline styles.
   - Template, Industry and Compare: light Tailwind, system font.
   - `index.css` has no tokens.
4. **Fonts load per page** (only 4 pages load Cabinet Grotesk/Satoshi). The logo text font changes between pages.
5. **Meta problems:**
   - the default OG image `/default-og-image.jpg` doesn't exist
   - the OG image is a square logo
   - FAQ + app JSON-LD is sent on every route
   - `aggregateRating` 4.8/347 is unverified
   - `site.webmanifest` is missing; the favicons are JPG
6. **No navigation links** and no mobile menu.

**Code health:**
- The project started from the Google AI Studio "react-example" starter (Vite + React 19 + React Router), **not Next.js**. Leftovers: the README, `metadata.json`, the `GEMINI_API_KEY` define in `vite.config.ts` (no key is in the current build) and unused packages.
- No `.gitignore`; `dist/` and `.DS_Store` are committed.
- `Landing.tsx` is 588 lines, with 9 components inside it.
- Duplicated constants, font links and images.
- No `strict` TypeScript; untyped JSON content.
- Mixed naming and export styles.
- No lint, format, tests or CI.

**Other:**
- 4 analytics tools.
- `/api/subscriptions/debug/` is marked temporary.
- The API docs load `swagger-ui-dist@latest`.
- Hosting: a Hetzner VPS, nginx 1.24 on Ubuntu.

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

That's why chunks 20–21 add the public endpoints.

### R3. Design decisions

- **Light-first, with dark accent sections.** Invoices are white paper, forms read better on light backgrounds, and the SEO pages are already light. Dark is used for the hero, the stats band and the final CTA: near-black `#0C0A09` with an orange glow.
- **The brand comes from the logo:**
  - orange `#E95D05` → red `#DC3002`
  - warm stone neutrals instead of cold slate
- **The gradient is rare on purpose.** It only appears on the primary CTA, one word per headline, the popular pricing card and the hero glow. Restraint is what makes it look premium.
- **Type:** Cabinet Grotesk for headings, Satoshi for body text, self-hosted.
- **Motion:** subtle, fast (150–400 ms), only `transform` and `opacity`, and off under reduced motion.

### R4. Language strategy

- **Why:** invoice searches in DE/ES/FR/PT/IT/NL have far less competition than English. The app already supports these languages, and your data is hosted in the EU.
- **URLs:** `/` = English, and `/de/`, `/es/`… with translated slugs. Every language has its own indexable URL; never switch languages through cookies or JavaScript only.
- **Detection:** the browser language first (location ≠ language). Offer the language through a banner, **never a forced redirect**. Remember the choice in a cookie.
- **Switcher:** a globe menu in the navbar and footer, going to the same page in the other language.
- **Rollout:** EN → DE → ES → FR, PT, IT, NL, guided by the Search Console data.

### R5. Target folder structure

```
web/
  app/[locale]/            routes only, thin: fetch data → render sections
    page.tsx               landing
    free-invoice-generator/
    templates/[slug]/  industries/[slug]/  compare/[slug]/
    help/  affiliate/  (legal)/terms  (legal)/privacy
  components/
    ui/                    Button, Card, Badge, Input, Accordion…
    layout/                Navbar, Footer, LanguageSwitcher, Logo
    sections/              Hero, Pricing, FAQ, TemplateCarousel… one file each
    generator/             form, preview, line items, template picker
  content/                 templates.json, industries.json, comparisons.json (+ per locale)
  lib/
    config.ts              SITE_URL, API_URL, APP_STORE_URL… one place
    api.ts                 typed fetch wrapper for invoicor.com/api
    analytics.ts           track(event, props), the only place posthog/gtag is called
    seo.ts                 buildMetadata + JSON-LD builders
  types/                   Template, Industry, Comparison, Invoice…
  messages/{locale}.json   UI strings
  styles/tokens.css        brand tokens
```

**Code rules:**
- One component per file, under about 200 lines.
- No inline `style={{}}`; Tailwind + tokens only.
- Server components by default; `"use client"` only where there's interaction.
- Typed and validated content.
- PascalCase components, kebab-case routes, named exports (except pages).
- Every setting in `lib/config.ts`; every tracking call through `lib/analytics.ts`.
