# Page blueprints

> **Status: DRAFT (2026-11-17).** The recipe for every page type (ROADMAP chunk 7). The Stage E
> redesign builds each page from its blueprint, and `npm run content:check` enforces the numbers.
> Voice and claims follow [BRAND.md](../BRAND.md); keywords come from [keyword-map.csv](keyword-map.csv).

## Rules for every indexable page

| Rule | Limit | Enforced by |
|---|---|---|
| Title | ≤ 60 characters, unique, ends in `\| Invoicor` | `content:check` (warning) |
| Meta description | ≤ 155 characters, unique, a benefit + a call to action | `content:check` (warning) |
| H1 | exactly one, unique, contains the primary keyword | `content:check` (unique) |
| Canonical | absolute, `https://invoicor.com`, no trailing slash | `buildMetadata()` |
| OG image | 1200×630 | `buildMetadata()` |
| Breadcrumbs | visible + `BreadcrumbList` JSON-LD (not on home) | page code |
| JSON-LD | only describes what's visible on the page | review |
| Internal links | ≥ 3 out (related pages, hub, a CTA), ≥ 3 in (hub, footer, related) | review |
| "Last updated" date | visible on templates, industries, compare, guides | page code (Stage E) |
| Uniqueness | < 80% alike any page of the same type; own intro, FAQs and examples | `content:check` |
| Primary CTA | one per section at most; generator (once live) or App Store with `ct` campaign | review |

**Never:** hidden text, keyword lists, fake reviews or ratings, claims the app can't back up,
competitor facts without a source.

## Home `/`

- **Intent:** app / brand ("invoice app iphone", "invoicor").
- **Title:** `Invoicor: {benefit headline}` (≤ 60). **H1:** the hero headline from BRAND.md §5.
- **Sections:** hero (headline, sub, App Store CTA, phone) → proof band (true numbers) → templates
  carousel → how it works (3 steps) → features by pillar → pricing (from `pricing.json`) → real
  reviews (only real ones) → FAQ (5–8) → final CTA.
- **JSON-LD:** `Organization`, `WebSite`, `MobileApplication` (rating only when real and ≥ 10), `FAQPage`.
- **Links out:** templates hub, industries hub, compare hub, generator (once live), help.

## Generator `/free-invoice-generator` (chunks 30–35)

- **Intent:** tool, "free invoice generator". The page **is** the tool, content below it.
- **Title:** `Free Invoice Generator: Create a PDF Invoice Online \| Invoicor` (shorten to ≤ 60).
- **Sections:** tool (form + live preview) → how it works → what to include on an invoice → template
  picker → FAQ (6–10) → app CTA ("save clients and send invoices from your phone").
- **JSON-LD:** `WebApplication` (free offer), `HowTo`, `FAQPage`, `BreadcrumbList`.
- **Min words (below the tool):** 600.

## Template `/templates/{slug}`

- **Intent:** "{niche} invoice template". The visitor wants a template to fill in or download.
- **Title:** `Free {Niche} Invoice Template ({formats}) \| Invoicor`.
- **Meta:** `Download a free {niche} invoice template… {one unique detail}. Or create it in seconds with Invoicor.`
- **Sections:** H1 + subtitle + CTA → intro (unique) → template preview image → what to include
  (4–6 items) → sample invoice table (real line items for this niche) → industry notes → common
  mistakes → pro tip → format guide (PDF / Word / Excel) → FAQ (4–6) → related templates (3–4) →
  link to the matching industry page → closing CTA.
- **JSON-LD:** `BreadcrumbList`, `FAQPage`, `HowTo` (what to include).
- **Min words:** 500 (target 900+).

## Billing-type template `/templates/{trade}-{billing}-invoice`

_Added 2026-11-26 for wave 1 batch B (ROADMAP W1). Briefs per page: [PLAN.md](PLAN.md)._

- **Intent:** "{trade} {billing type} invoice" (deposit, progress/milestone, hourly, labor and
  materials, retainer). A different question from the trade's main template: not "what goes on my
  invoice" but "how do I bill this way".
- **Data:** an entry in `content/templates.json` with the same fields as a template; `industry` =
  the trade's industry page; `related` = the trade's main template + one other billing type.
- **Sections:** as a template, but the intro, what-to-include, sample invoice, notes, mistakes and
  FAQs are all about this billing type for this trade (e.g. deposit size and terms, retainage,
  increments, unused hours). The trade's general fields get one sentence and a link to its template.
- **Honest:** the app doesn't track deposits, partial payments or time and doesn't send recurring
  invoices. A deposit is its own invoice, then a negative line or a note on the final one; monthly
  work is "duplicate the last invoice".
- **Min words:** 500 (target 900+). Must stay < 80% alike the trade's main template (`content:check`).

## Invoice-type template `/templates/{type}-invoice`

_Added 2026-11-26 for item 1F ([PLAN.md](PLAN.md)). The parents of the billing-type pages._

- **Intent:** "{deposit | final | hourly | commercial | freelance …} invoice template". The general
  document, not a trade: what makes this kind of invoice different and how it relates to the others
  (a deposit invoice → the final invoice that subtracts it).
- **Data:** an entry in `content/templates.json` with the same fields as a template; `industry`
  empty; `related` = 2 other invoice types. A "by trade" section lists that type's billing-type pages.
- **Sections:** as a template; what-to-include, the sample, notes, mistakes and FAQs are about the
  document type. Tax and legal points per country hedged or sourced; the local versions carry the
  country's own rules (Anzahlungsrechnung, Kleinunternehmer).
- **Honest:** the app makes the invoice; it doesn't track deposits or partial payments, send
  recurring invoices or make customs forms.
- **Min words:** 600 (target 1,000+): these are bigger searches than the trade pages.

## Pricing calculator `/tools/{trade}-pricing-calculator`

_Added 2026-11-26 for item 6A. Needs code: one calculator engine with a config per trade._

- **Intent:** "{trade} pricing calculator", "how much to charge for {job}". The pro wants a price.
- **The tool:** inputs in the trade's units (square feet, rooms, visits, loads, guests), the pro's own
  rates (defaults are labelled examples), the result with each step shown, and "Put on an invoice"
  (the generator with `?item=&qty=&price=`). Metric units and local currency in the language versions.
- **Below the tool:** how pros in that trade price (the methods, what to add, common mistakes), 3–5
  FAQs, links to the trade's template and the general tools.
- **Never:** market prices as facts (a range only with its source and date); a promise that the result
  is the "right" price.
- **JSON-LD:** `WebApplication`, `FAQPage`, `BreadcrumbList`. **Min words (below the tool):** 500.

## Country page `/invoice-generator-{country}` and local pages

_Added 2026-11-26 for wave 1 batch C (roadmap chunk 43). Needs page code: a new page type._

- **Intent:** "{country} invoice requirements / VAT (or GST) invoice". The visitor wants to know what
  must be on an invoice in that country, then make one.
- **Sections:** H1 + subtitle → the free generator preset for the country (currency, VAT/GST rate,
  the fields the rules require) → what must be on the invoice (a checklist with each rule's source)
  → thresholds and special cases (small invoices, not registered, small-business schemes, reverse
  charge) → a sample invoice → FAQ (4–6) → links to the VAT calculator and the general generator.
- **Facts:** every rule with its official source and the date it was checked; re-check every 6
  months (rates and e-invoicing rules change). Hedge anything not in the source.
- **Language:** English for English-speaking countries; local pages (`/de/…`, `/nl/…`, `/fr/…`) are
  written in that language from the start (rule R4) and must not compete with that language's
  generator page ("what must be on it" vs "make one").
- **JSON-LD:** `BreadcrumbList`, `FAQPage`. **Min words:** 600.

## Industry `/industries/{slug}`

- **Intent:** "invoice app for {profession}" (software, commercial). Not the template intent.
- **Title:** `Invoicing Software for {Profession} \| Invoicor`.
- **Sections:** H1 + badge + subtitle + CTA → stats → 3 mistakes {profession} make → 3 features
  that solve them → expert tip → real scenario (a day in the job) → common line items table →
  glossary → tax/compliance notes → FAQ (4–6) → link to the matching template → related industries → CTA.
- **JSON-LD:** `BreadcrumbList`, `FAQPage`, `DefinedTermSet` (glossary).
- **Min words:** 500 (target 900+).

## Compare `/compare/{slug}`

- **Intent:** "{competitor} alternative", "{competitor} vs".
- **Title:** `{Competitor} Alternative: {one honest difference} \| Invoicor`.
- **Sections:** H1 + subtitle → where {competitor} falls short (3 points, sourced) → feature table
  (5 rows, honest, including where they win) → pricing side by side (**our price from
  `pricing.json`, theirs with a source and date**) → who should pick which → switch in 3 steps →
  FAQ → other comparisons → CTA.
- **JSON-LD:** `BreadcrumbList`, `FAQPage`.
- **Min words:** 500. **Re-check every 6 months** (competitor prices change).

## Guide `/guides/{slug}` (chunk 42)

- **Intent:** informational ("how to write an invoice").
- **Title:** `{Question or topic}: {promise} \| Invoicor`.
- **Sections:** H1 → short answer (2–3 sentences, quotable by AI assistants) → table of contents →
  sections with a clear answer under each H2 → example invoice or checklist → FAQ → related guides
  and templates → generator CTA.
- **JSON-LD:** `Article` (author, `dateModified`), `BreadcrumbList`, `FAQPage`, `HowTo` where it's steps.
- **Trust:** author or reviewer line, "last updated" date, sources for tax and legal claims.
- **Min words:** 1,000.

## Hub `/templates`, `/industries`, `/compare`, `/guides`

- **Intent:** browse ("invoice templates").
- **Sections:** H1 + 2–3 sentence intro → card grid of every child page → short explainer (200–400
  words, unique) → FAQ (3–5) → CTA.
- **JSON-LD:** `BreadcrumbList`, `CollectionPage` with an `ItemList` of the children.

## About, Contact, Help, Affiliate, Legal

- **About:** who's behind Invoicor and why, company details (decision D6), contact. JSON-LD `AboutPage` + `Organization`.
- **Contact:** email, response time promise ("a real person replies within one working day"), company details.
- **Help:** FAQ grouped by topic; `FAQPage`.
- **Affiliate:** commission, calculator (prices from `pricing.json`), FAQ; `FAQPage`.
- **Terms / Privacy:** indexable but not targeted; "last updated" date; no CTA clutter.

## Content fields (for the schemas)

Every content type keeps the fields it has today (see [CONTENT.md](../CONTENT.md)) and gains,
in the Stage E rebuild:

| Field | Type | Why |
|---|---|---|
| `updated_at` | date | visible "last updated" + sitemap `lastmod` per page instead of per collection |
| `noindex` | boolean, default false | park weak pages without deleting them |
| `primary_keyword` | string | ties the page to `keyword-map.csv`; `content:check` can verify it's in the title and H1 |
| `sources` | list of `{label, url}` | required on compare pages and guides |
