# SEO rules

> **The one rulebook for every page on invoicor.com.** Change a rule here and nowhere else. The
> pages themselves (live, planned, parked) are rows in [keyword-map.csv](keyword-map.csv); the
> views [PLAN.md](PLAN.md), [PAGES.md](PAGES.md) and [plan/](plan/) are generated from it by
> `npm run pages`. Hand-written, except the block marked _generated_ in §4.
>
> - **Add pages to the plan:** "add 10 pages to T" (the `seo-add-pages` skill reads this file).
> - **Build planned pages:** "do D1" (see [PLAN.md → How to run an item](PLAN.md#how-to-run-an-item)).
> - **One category at a glance:** `npm run pages:category -- D` (its section below + every row).
> - **Facts the app backs up:** [BRAND.md §10](../BRAND.md). Nothing else counts as proof.

## 1. Every page

### 1.1 Technical

| Rule | Limit | Enforced by |
|---|---|---|
| Title | ≤ 60 characters, unique, ends in `\| Invoicor` | `content:check` (warning) |
| Meta description | ≤ 155 characters, unique, a benefit + a call to action | `content:check` (warning) |
| H1 | exactly one, unique, contains the primary keyword | `content:check`, site test |
| Canonical | absolute, `https://invoicor.com`, no trailing slash | `buildMetadata()` |
| OG image | 1200×630 | `buildMetadata()` |
| Breadcrumbs | visible + `BreadcrumbList` JSON-LD (not on home) | page code |
| JSON-LD | only describes what's visible on the page | review |
| Internal links | ≥ 3 out (related pages, hub, a CTA), ≥ 3 in (hub, footer, related) | review |
| "Last updated" date | visible on templates, industries and compare pages | page code |
| Primary CTA | one per section at most: the free generator or the App Store with a `ct` campaign | review |

**Never:** hidden text, keyword lists, fake reviews or ratings, claims the app can't back up,
competitor facts without a source.

### 1.2 Content

- Same fields and depth as the live pages of that type; about 900–1,200 words of real, specific
  text (the trade's jobs, units, materials, terms, billing habits). The key in the H1.
- Sample invoices: realistic prices, correct math (qty × rate, subtotal, tax, balance), a stated and
  hedged tax situation ("tax rules vary").
- Only claims the app backs up (BRAND.md §10). No estimates or quotes, no recurring or scheduled
  invoices, no reminders, no photo attachments, no deposit or partial-payment tracking, no time
  tracking, no offline use, one tax rate per invoice. Repeat work = duplicate the last invoice and
  change the date. A deposit = its own invoice, then a negative line or a note on the final invoice.
- At most one "Can Invoicor do X? No." FAQ per page; spend the FAQs on the page's own questions.
- Legal and tax points hedged ("check your state's rule") unless the brief gives a sourced fact; a
  specific law, rate or price only with its source and the date checked. Re-check those every 6
  months.
- Link the trade's pages both ways (template ↔ industry ↔ billing types); 2 `related` per page.

## 2. Thin and duplicate pages (what Google punishes)

Google's scaled-content policy judges value **per page**, and weak pages pull the whole site down.
The plan's page count is a direction, not a quota.

**Before a page is planned**
- **A search of its own.** Not a synonym (quote = estimate, down payment = deposit), a sub-niche
  (wedding photography is part of photography), or a city or state version of a live page
  (doorway pages).
- **Key not taken:** `npm run pages -- --check "<key>"` (`--lang de` for German). Taken: improve
  that page instead.
- **Value of its own:** it answers something its neighbours don't. If the honest page is mostly
  its parent with other nouns, don't plan it: improve the parent.
- **Fits its category** (§5: can, not can't) and only promises what BRAND.md §10 backs up.

**Before a page is written: the demand gate**
- Find evidence that people search for the key: Search Console queries, Google autocomplete and
  "People also ask", or a keyword tool. Never invent volumes.
- No evidence: don't write it. Set `status` to `parked` with the reason in `notes`. The item is done
  without it and the key stays reserved, so nobody plans it again.

**While building**
- **Parents before children:** the general page ("deposit invoice") comes before or with its
  specific ones ("photography deposit invoice"), and the children link up to it.
- **Proven types first:** a new page type starts with one item of ≤ 10 pages and grows only after
  it indexes.
- **No near-copies,** checked in two places (`scripts/similarity.mjs`). Pages are compared by
  overlapping 5-word phrases: the share of the smaller page's phrases that also appear in the
  other one.
  - `npm run content:check`, on the text we write (`content/*.json`, all types together): fails
    above **30%**. Today's most alike pair: 10%. A copy with the trade's nouns swapped scores
    ~93%, half the sentences copied ~55%.
  - The site test `tests/site/similarity.test.ts`, on every built page of every type and language
    (the visible text of `<main>`, pages of the same language): fails above **40%**. The page
    type's shared headings and calls to action add ~20%, so today's most alike pair is 23%. A hub
    and its own pages are not compared (the cards repeat their texts).
  - The same test fails a page under its type's minimum words (§5, the built `<main>`; hubs are
    exempt).

**After each deploy**
- **Release in waves:** at most ~150 new URLs per deploy.
- Wait 2–3 weeks, then check in Search Console how many of the new pages got indexed, per page type
  (a sitemap per type comes with task S1). A type under ~50% indexed after 4 weeks: stop adding
  that type and improve its pages first.
- **Re-plan with Search Console data** every ~5 items: more of what ranks, less of what doesn't.

## 3. Planning new items

- **One item = 10–25 pages of one category** (fewer rather than padded with sub-niches), named with
  the category's letter and the next number (T10, B4 …). Add it at the end of `ITEMS` and to
  `ORDER` in `scripts/pages-items.mjs`; numbers never change.
- **Every row** gets `localize` (yes / local / en-only, the reason in `notes`), a `brief` (what to
  write, with the sources to check) and an `avoid` (what its neighbours own: link them) before it
  gets an `item`.
- **Languages:** if its pages are `localize: yes`, add the item at the end of `LANGUAGE_SOURCES`
  (append-only): its 10 L items appear by themselves, with the next free numbers. A language
  version that shouldn't exist gets a `parked` row in that language (`translation_of` = the
  English URL, the reason in `notes`).
- **Stopping short is fine.** When a category runs out of good pages, the ROADMAP entry says
  **"Stopped at {item}"** and why, so the next round doesn't propose the same pages again.
- Then `npm run pages` and `npm run check`; one commit per item, pushed to `dev`.

## 4. Languages

- Written for the country, by local search words (research them first), not word for word.
- The slug, title, H1 and examples in that language; prices, currency and number format of that
  market (the table below).
- Never claim the app's screens are in that language (they're English); say "invoices in your
  language".
- The e-invoicing warnings below are part of the page where they apply (first paragraph).
- A page with no local search, or a trade that works differently there (a notary in Germany is a
  state office with fixed fees), gets a `parked` row in that language: skipped, not translated
  anyway.
- German first (it already gets clicks); Italian, Portuguese and Polish last (e-invoicing).

<!-- generated:languages (npm run pages; edit LANGUAGES in scripts/pages-items.mjs) -->
| Lang | Markets | Money | Numbers | VAT | Tax words | Watch out |
|---|---|---|---|---|---|---|
| [de German](plan/languages/de.md) | Germany, Austria, Switzerland | EUR (CHF in Switzerland) | 1.234,56 € | 19% (7% reduced); Austria 20%, Switzerland 8.1% | USt / MwSt; Kleinunternehmer (§19 UStG) note | B2B e-invoicing in Germany: receiving since 2025, sending phased in 2027–2028; say when a PDF is still fine. |
| [es Spanish](plan/languages/es.md) | Spain first; Latin America only with care | EUR | 1.234,56 € | 21% (10%, 4%) | IVA; NIF | Spain: Verifactu and B2B e-invoicing are coming (check dates). Mexico (CFDI) and most of Latin America require electronic invoices: don't present a PDF as a valid invoice there. |
| [fr French](plan/languages/fr.md) | France, Belgium (FR), Switzerland (FR) | EUR (CHF) | 1 234,56 € | 20% (10%, 5.5%, 2.1%) | TVA; 'TVA non applicable, art. 293 B du CGI' for micro-entrepreneurs | France: B2B e-invoicing from 2026–2027 (check dates). |
| [nl Dutch](plan/languages/nl.md) | Netherlands, Belgium (NL) | EUR | € 1.234,56 | 21% (9%) | btw; KOR; KvK number; 'btw verlegd' | Belgium: B2B e-invoicing from 2026 (Peppol): say so on Belgian examples. |
| [sv Swedish](plan/languages/sv.md) | Sweden | SEK | 1 234,56 kr | 25% (12%, 6%) | moms; F-skatt; momsregistreringsnummer | Public sector needs Peppol e-invoices. |
| [da Danish](plan/languages/da.md) | Denmark | DKK | 1.234,56 kr. | 25% | moms; CVR number | Public sector needs e-invoices (NemHandel/OIOUBL); the bookkeeping law sets rules for digital systems (hedge). |
| [nb Norwegian (Bokmål)](plan/languages/nb.md) | Norway | NOK | 1 234,56 kr | 25% (15%, 12%) | MVA; organisasjonsnummer + 'MVA' | Public sector needs EHF; Invoicor doesn't send EHF. |
| [it Italian](plan/languages/it.md) | Italy, Switzerland (IT) | EUR | 1.234,56 € | 22% (10%, 5%, 4%) | IVA; partita IVA | Italy: invoices must be electronic via the SdI; a PDF is only a courtesy copy. Every Italian page says so in the first paragraph and never sends people to make a 'valid invoice' as a PDF. |
| [pt Portuguese](plan/languages/pt.md) | Portugal (PT-PT); Brazil only with care | EUR | 1234,56 € | 23% (13%, 6%) | IVA; NIF | Portugal: invoices must come from AT-certified software; Brazil: NF-e/NFS-e electronic invoices. Say so plainly; a PDF from Invoicor isn't a valid invoice there. |
| [pl Polish](plan/languages/pl.md) | Poland | PLN | 1 234,56 zł | 23% (8%, 5%) | VAT; NIP | Poland: KSeF structured e-invoices become mandatory in 2026 (check dates); after that a PDF isn't a valid B2B invoice. |
<!-- /generated:languages -->

## 5. Categories

One section per item letter: the URL, the key and where the page is written; **Intent**,
**Sections**, **JSON-LD** and **Min words** are the blueprint (build a new page like the live ones
of its type); then what it can and can't do, its links and its languages. A new category gets its
section here first (the site test checks the heading: `{letter} · {title}`).

### T · Trade templates

- **URL:** `/templates/{trade}` · **Key:** "{trade} invoice template" · **Written in:**
  `content/templates.json`
- **Intent:** the visitor wants a template to fill in or download.
- **Title:** `Free {Trade} Invoice Template \| Invoicor`. **Meta:** a unique detail of the trade +
  "Or create it in seconds with Invoicor."
- **Sections:** H1 + subtitle + CTA → intro (unique) → template preview → what to include (4–6
  items) → sample invoice table (real line items for this trade) → industry notes → common
  mistakes → pro tip → format guide (PDF) → FAQ (4–6) → related templates (3–4) → the matching
  industry page → closing CTA.
- **JSON-LD:** `BreadcrumbList`, `FAQPage`, `HowTo` (what to include). **Min words:** 500 (target
  900+).
- **Can:** one page per trade with real work of its own: its jobs, units (per hour, per square
  foot, per visit), materials, terms and billing habits; a filled-in sample the free generator
  opens with (Use this template); the trade's notes, mistakes, a pro tip and FAQs; why a PDF works
  for this trade.
- **Can't:** a trade that's a synonym or sub-niche of a live one (wedding photography is part of
  /templates/photography, mobile mechanic of /templates/auto-repair); two trades on one page;
  Word, Excel or Google Docs downloads (we don't offer those files); city or state versions;
  billing-type questions in depth (deposits, retainers, hourly: those are B pages).
- **Links:** its industry page (`industry` field), 2 related templates, the trade's billing-type
  pages once they exist.
- **Languages:** yes, written per country (local trade names and prices), after task S1.

### B · Billing-type templates

- **URL:** `/templates/{trade}-{billing}-invoice` · **Key:** "{trade} {deposit | progress |
  milestone | hourly | labor and materials | retainer} invoice" · **Written in:**
  `content/templates.json`
- **Intent:** not "what goes on my invoice" but "how do I bill this way" for one trade.
- **Data:** the same fields as a template; `industry` = the trade's industry page; `related` = the
  trade's main template + one other billing type.
- **Sections:** as a template, but the intro, what to include, sample, notes, mistakes and FAQs are
  all about this billing type for this trade (deposit size and terms, retainage, increments,
  unused hours). The trade's general fields get one sentence and a link to its template.
- **Min words:** 500 (target 900+); must stay under the near-copy limit against the trade's main
  template (§2).
- **Can:** answer "how do I bill this way" for one trade; a sample of that billing type (a deposit
  invoice, then how the final invoice subtracts it); only combinations people really bill that way
  (wedding trades take deposits, contractors bill progress, consultants hourly or on retainer).
- **Can't:** repeat the trade's general fields; claim the app tracks deposits, partial payments or
  time, or sends recurring invoices; every trade × every billing type (at most 2 per trade, only
  where the search is real); exist without its own demand (the general invoice type covers a
  trade that only swaps the materials).
- **Links:** the trade's template (in `related`), the general invoice type (D), its industry page.
- **Languages:** yes, with the trade templates.

### D · Invoice types (general documents)

- **URL:** `/templates/{type}-invoice` · **Key:** "{deposit | final | hourly | commercial |
  freelance …} invoice template" · **Written in:** `content/templates.json`
- **Intent:** the general document, not a trade: what makes this kind of invoice different and how
  it relates to the others (a deposit invoice → the final invoice that subtracts it).
- **Data:** the same fields as a template; `industry` empty; `related` = 2 other invoice types. A
  "by trade" section lists that type's billing-type pages.
- **Sections:** as a template; what to include, the sample, notes, mistakes and FAQs are about the
  document type. Tax and legal points per country hedged or sourced.
- **Min words:** 600 (target 1,000+): bigger searches than the trade pages.
- **Can:** the general document behind many trades; be the parent of the B pages ("by trade") and
  take the general search; a who-invoices type (freelance, subcontractor, independent contractor)
  when the tax status changes the invoice (no VAT charged, CIS deduction, reverse charge).
- **Can't:** a trade template under another name ("service invoice" is about services in
  general); synonyms as their own pages (down payment = advance payment = deposit; interim =
  progress; time and materials = labor and materials; sole trader = self-employed = freelance);
  promise deposit tracking, recurring invoices or customs forms; "what is" explainers (this page is
  the document).
- **Links:** the B pages of this type (both ways), the free generator, one tool (deposit calculator,
  mileage calculator …).
- **Languages:** yes for most (Anzahlungsrechnung, Schlussrechnung, factuur zzp); US-only ones
  (1099, mileage) stay en-only.

### I · Industry pages ("invoice app for …")

- **URL:** `/industries/{professionals}` · **Key:** "invoice app for {professionals}" ·
  **Written in:** `content/industries.json`
- **Intent:** software, commercial. Not the template intent.
- **Title:** `Invoicing Software for {Profession} \| Invoicor`.
- **Sections:** H1 + badge + subtitle + CTA → stats → 3 mistakes {profession} make → 3 features
  that solve them → expert tip → a real scenario (a day in the job) → common line items table →
  glossary → tax and compliance notes → FAQ (4–6) → the matching template → related industries →
  CTA.
- **JSON-LD:** `BreadcrumbList`, `FAQPage`, `DefinedTermSet` (glossary). **Min words:** 500 (target
  900+).
- **Can:** how that profession invoices from an iPhone with Invoicor (a real day, their line items,
  their mistakes and the features that fix them); profession-specific stats, glossary, tax and
  licensing notes (hedged); pair with the trade's template (template = the document, industry =
  the app).
- **Can't:** a profession a live page already covers (drywall, fencing and remodeling sit under
  /industries/general-contractors); features outside BRAND.md §10; "the app in your language" (say
  "invoices in 11 languages"); a niche trade without its own "invoice app / software for …"
  search (the app's features are the same everywhere, so such pages differ only in the trade:
  doorway risk; link the nearest broader industry instead).
- **Links:** the matching template(s), 2 related industries.
- **Languages:** yes, after task S1.

### C · Compare pages ("{competitor} alternative")

- **URL:** `/compare/{competitor}` · **Key:** "{competitor} alternative" · **Written in:**
  `content/comparisons.json`
- **Intent:** "{competitor} alternative", "{competitor} vs".
- **Title:** `{Competitor} Alternative: {one honest difference} \| Invoicor`.
- **Sections:** H1 + subtitle → where {competitor} falls short (3 points, sourced) → feature table
  (5 rows, honest, including where they win) → pricing side by side (ours from `pricing.json`,
  theirs with a source and date) → who should pick which → switch in 3 steps → FAQ → other
  comparisons → CTA.
- **JSON-LD:** `BreadcrumbList`, `FAQPage`. **Min words:** 500.
- **Can:** an honest comparison from the competitor's own pages (source and date): who they're
  for, where Invoicor is simpler or cheaper, and where they're the better choice; competitors
  people really search for as "{name} alternative" or "{name} vs".
- **Can't:** competitor facts without a source and date, or prices older than 3 months; "X vs Y"
  between two competitors; local rivals in other languages (those are LO pages).
- **Links:** 2 related compares, the pricing section, the free generator.
- **Languages:** en-only (HL8). Local rivals get their own local pages (HL9).

### TL · Free tools

- **URL:** `/tools/{tool}` (local slugs per language in `lib/i18n/routes.ts`) · **Key:** "{tool}
  calculator / checker / generator" · **Written in:** `components/tools/`, `lib/tools/registry.ts`
- **Intent:** a number or a check, now. The page **is** the tool; the text is below it.
- **Sections:** the tool (inputs, the result with each step shown) → "Put on an invoice" (the free
  generator with `?item=&qty=&price=&tax=&currency=`) → how it works and what the rule or rate is
  (with its source and date) → FAQ (3–5) → related tools and templates.
- **Pricing calculators** (`/tools/{trade}-pricing-calculator`, need task S4): inputs in the trade's
  units (square feet, rooms, visits, loads, guests) and the pro's own rates (defaults labelled as
  examples); below the tool how pros in that trade price, what to add, common mistakes.
- **JSON-LD:** `WebApplication`, `FAQPage`, `BreadcrumbList`. **Min words (below the tool):** 500.
- **Can:** a tool that works in the browser and gives a real answer, with the steps in plain words;
  country presets per language (rates, number format, currency); a trade's pricing math, then the
  price on an invoice.
- **Can't:** rates or rules without a source and date; claims a check can't back up (an IBAN check
  catches typos, it doesn't prove who owns the account); tools that need our server or a paid API
  without a decision first (VAT number check, business register); market prices as facts (a range
  only with its source and date; never promise the "right" price).
- **Links:** the free generator, the other tools (hub), the related templates.
- **Languages:** yes: every tool in all 11 languages with local presets.

### CT · Country pages (English)

- **URL:** `/invoice-generator-{country}`, cross-border pages at `/{topic}` · **Key:** "{country}
  VAT / GST / tax invoice (requirements)" · **Written in:** a new page type (task S3)
- **Intent:** what must be on an invoice in that country, then make one.
- **Sections:** H1 + subtitle → the free generator preset for the country (currency, VAT/GST rate,
  the fields the rules require) → what must be on the invoice (a checklist, each rule with its
  source) → thresholds and special cases (small invoices, not registered, small-business schemes,
  reverse charge) → a sample invoice → FAQ (4–6) → the VAT calculator and the general generator.
- **JSON-LD:** `BreadcrumbList`, `FAQPage`. **Min words:** 600.
- **Can:** countries whose rules differ in ways that matter and whose currency the generator
  supports (the API's 38); European countries in English for the foreign freelancers there
  ("invoice requirements germany"), paired by hreflang with the local page once both exist.
- **Can't:** countries where a PDF invoice isn't valid (mandatory e-invoicing or certified
  software: Italy's SdI, Portugal, Poland's KSeF, Kenya's eTIMS, most of Latin America); rules from
  memory (only the official source, with the date checked); the general "what goes on an invoice".
- **Links:** the VAT calculator, the free generator, the reverse-charge page (EU countries).
- **Languages:** en-only for English-speaking countries; other countries get an LO page.

### LO · Local pages (in the country's own language)

- **URL:** `/{lang}/{local slug}` · **Key:** the country's own search words ("pflichtangaben
  rechnung", "factuureisen") · **Written in:** page code under the language routes (task S3)
- **Types:** local country rules (as CT, in the language), local topics with no English parent
  (`local topic`: the German Kleinbetragsrechnung, the Swedish ROT/RUT deduction, reminder fees,
  payment references), and comparisons with that country's own rivals (`compare (local)`, as C).
- **Sections:** as the CT or C page of the same kind; a local tool (an OCR or KID reference, the
  incassokosten calculator) as a TL page. **Min words:** 600.
- **Can:** written in the language from the start (rule R4): local rules, small-business schemes,
  local wording and examples.
- **Can't:** compete with that language's generator page ("what must be on it" here, "make one"
  there); invite people to make a PDF invoice where the law requires e-invoicing (IT, PT, PL: on
  hold until the product supports it).
- **Links:** the language's generator page and VAT calculator.
- **Languages:** local: only in its own language.

### G · Generators

- **URL:** `/free-invoice-generator`, `/free-{document}-generator` · **Key:** "free {document}
  generator" · **Written in:** the web generator; another document is a `document_type` (needs code
  first)
- **Intent:** a tool. The page **is** the generator; the content is below it.
- **Sections:** tool (form + live preview) → how it works → what to include on this document →
  template picker → FAQ (6–10) → app CTA ("save clients and send invoices from your phone").
- **JSON-LD:** `WebApplication` (free offer), `HowTo`, `FAQPage`, `BreadcrumbList`. **Min words
  (below the tool):** 600.
- **Can:** business documents a small business really sends, made in the browser like the invoice
  (receipt, estimate, proforma, credit note, purchase order …); say plainly that the app itself
  makes invoices only.
- **Can't:** separate pages for synonyms (quote = estimate: one page owns both keys); more than
  about 10 documents; legal documents (contracts, bills of sale).
- **Links:** the invoice generator.
- **Languages:** yes, like the invoice generator.

### P · Core pages, hubs, trust and legal

- **URL:** fixed pages · **Key:** one each · **Written in:** page code
- **Home `/`:** intent app and brand ("invoice app iphone", "invoicor"). Hero (headline from
  BRAND.md §5, App Store CTA) → proof band (true numbers) → templates → how it works (3 steps) →
  features by pillar → pricing (from `pricing.json`) → real reviews only → FAQ (5–8) → final CTA.
  JSON-LD `Organization`, `WebSite`, `MobileApplication` (a rating only when real and ≥ 10),
  `FAQPage`.
- **Hubs** (`/templates`, `/industries`, `/compare`, later `/countries`): H1 + 2–3 sentence
  intro → a card for every child page (by itself, from the data) → a unique explainer (200–400
  words) → FAQ (3–5) → CTA. JSON-LD `BreadcrumbList`, `CollectionPage` with an `ItemList`. At scale,
  groups are sections of the one hub, never thin sub-hub URLs (task S2).
- **About:** who's behind Invoicor and why, company details, contact (`AboutPage` +
  `Organization`). **Contact:** email, response time, company details. **Help:** FAQ grouped by
  topic (`FAQPage`). **Affiliate:** commission, calculator (prices from `pricing.json`), FAQ.
- **Trust and product** (`/features`, `/security`): only what BRAND.md §10 says, with an honest
  "what it doesn't do".
- **Legal** (terms, privacy, Impressum): indexable but not targeted; a "last updated" date; no CTA
  clutter.
- **Can't:** more of them (single pages, so no item of 10 here); Word, Excel or Google Docs template
  pages until we really offer the files.
- **Links:** nav and footer.
- **Languages:** per page: home, generator, tools, help and Android in 11 languages; the templates
  and industries hubs after task S1; legal later (HL7).
