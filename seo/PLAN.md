# Page plan: what to build next

> **Generated, don't edit by hand.** The instructions for whoever builds the next pages, a person
> or a model. Every planned page has a brief here: what to write, and which existing pages already
> cover nearby topics (link to those, don't repeat them). What exists today is in
> [PAGES.md](PAGES.md). To change a brief or plan a page, edit its row in
> [keyword-map.csv](keyword-map.csv) (`brief`, `avoid`, `chunk` = batch) and run `npm run pages`.

**46 pages planned** in 7 groups · 241 live today

## How to build a batch

1. **Take the first batch below that's ready** (the roadmap, W1, says when). Build all its pages
   in one go, then wait 2–3 weeks and check the indexed share in Search Console before the next.
2. **For each page read:** its brief below; the blueprint for its type (linked per page,
   [BLUEPRINTS.md](BLUEPRINTS.md)); the fact sheet [BRAND.md §10](../BRAND.md) (what the app does
   and doesn't do); one live page of the same type as the model for depth and fields.
3. **Don't repeat what another page owns.** Each brief lists the closest existing pages under
   "Already covered". Mention the topic in a sentence and link there; never write a second
   section about it. A new idea? Run `npm run pages -- --check "<key>"` first.
4. **Write it** in the right place: `content/templates.json` or `content/industries.json` for
   templates and industry pages ([CONTENT.md](../CONTENT.md)); other types need page code, the brief
   says so.
5. **Language step:** the page's `Languages` decision. **yes** = it gets its language versions as
   part of the batch (local words, rules and examples per country, not word for word); **local** =
   only in its own language; **en-only** = English only.
6. **Check and log:** `npm run content:check` → `npm run build` → `npm run pages` (the page moves from
   here to PAGES.md) → `npm run check`. Update ROADMAP.md, one commit per batch.

## Rules for every page (learned in batch A)

- Same fields and depth as the live pages of that type; about 900–1,200 words of real, trade-specific
  text (jobs, units, materials, terms, billing habits). Title ≤ 60 characters ending in `| Invoicor`,
  meta description ≤ 155, the key in the H1. No sentence copied from another page.
- Sample invoices: realistic prices, correct math (qty × rate, subtotal, tax, balance), a stated and
  hedged tax situation ("tax rules vary").
- Only claims the app backs up (BRAND.md §10). No estimates or quotes, no recurring or scheduled
  invoices, no reminders, no photo attachments, no deposit or partial-payment tracking, no time
  tracking, no offline use, one tax rate per invoice. Repeat work = duplicate the last invoice and
  change the date. A deposit = its own invoice, then a negative line or a note on the final invoice.
- Not too many "Can Invoicor do X? No." FAQs: at most one per page; spend the FAQs on the trade's
  own questions.
- Legal and tax points are hedged ("check your state's rule") unless the brief gives a sourced fact;
  a specific law only with its source and date.
- `related` links: 2 pages of the same collection; link the trade's other pages (template ↔ industry
  ↔ billing types) both ways.

## Batches

| Batch | Pages | Types | Languages |
|---|---|---|---|
| [W1-B](#batch-w1-b) | 20 | template (billing type) 20 | yes 20 |
| [W1-C](#batch-w1-c) | 10 | country 10 | en-only 7, local 3 |
| [blog topics (L4)](#batch-blog-topics-l4) | 7 | guide 6, hub 1 | en-only 7 |
| [later: compare](#batch-later-compare) | 1 | compare 1 | en-only 1 |
| [later: needs code (44)](#batch-later-needs-code-44) | 2 | generator 2 | yes 2 |
| [later: trust pages (24)](#batch-later-trust-pages-24) | 2 | trust 2 | yes 2 |
| [on hold: file downloads (53)](#batch-on-hold-file-downloads-53) | 4 | template (file format) 4 | en-only 4 |

## Batch W1-B

### /templates/photography-deposit-invoice

- **Key:** photography deposit invoice · also: photographer deposit invoice; wedding photography deposit
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit (retainer) invoice a photographer sends when a client books a date: what it secures (the date, prep time), usual sizes (25–50%), non-refundable wording and the cancellation and reschedule policy, due before the date is held. Sample: a wedding booking deposit. Show how the balance invoice later lists the deposit as a negative line. FAQs: deposit vs retainer, refundable or not, rescheduling, how it appears on the final invoice.
- **Don't write about:** General photography invoice fields, usage rights and licensing (owned by /templates/photography): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/photography (“photography invoice template”)

### /templates/catering-deposit-invoice

- **Key:** catering deposit invoice · also: catering deposit invoice template
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit that locks a catering date: deposit size, the final headcount deadline and how the final invoice adjusts to the guaranteed count, a tasting fee credited against the deposit, cancellation windows. Sample: a 120-guest wedding deposit.
- **Don't write about:** Per-head menu pricing, service charge vs gratuity, staffing lines (owned by /templates/catering).
- **Already covered (link, don't repeat):** /templates/catering (“catering invoice template”)

### /templates/contractor-deposit-invoice

- **Key:** contractor deposit invoice · also: construction deposit invoice; down payment invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The down payment a contractor takes before starting: what it pays for (materials, scheduling), how big it may be (some states cap home-improvement down payments, e.g. California: $1,000 or 10% of the contract price, whichever is less, Business and Professions Code §7159.5; verify and date it), a materials deposit vs a booking deposit, what the contract should say. Sample: a kitchen job deposit.
- **Don't write about:** Progress billing and retainage (owned by /templates/construction-progress-invoice); general construction fields (/templates/construction).
- **Already covered (link, don't repeat):** /industries/general-contractors (“invoice app for contractors”)

### /templates/roofing-deposit-invoice

- **Key:** roofing deposit invoice · also: roofer deposit invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit before a roof job: ordering shingles and materials, scheduling around weather, insurance-claim jobs (homeowner deductible, insurer's first and final checks, hedged), what happens to the deposit if the job is delayed. Sample: a full re-roof materials deposit.
- **Don't write about:** Roofing line items per square, tear-off and disposal (owned by /templates/roofing).
- **Already covered (link, don't repeat):** /templates/roofing (“roofing invoice template”) · /industries/roofers (“roofing invoice app”)

### /templates/painting-deposit-invoice

- **Key:** painting deposit invoice · also: painter deposit invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit a painter takes for paint and the booked days: color selection before ordering, change orders after the deposit, interior vs exterior weather terms. Sample: an exterior repaint deposit.
- **Don't write about:** Per-room and per-square-foot pricing, prep lines (owned by /templates/painting).
- **Already covered (link, don't repeat):** /templates/painting (“painting invoice template”)

### /templates/dj-deposit-invoice

- **Key:** dj deposit invoice · also: wedding dj deposit
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The date-hold deposit for a DJ booking: deposit size, what it covers, non-refundable terms, balance due before the event, overtime rate agreed in advance. Sample: a wedding DJ deposit.
- **Don't write about:** Full DJ invoice lines (hours, equipment, travel; owned by /templates/dj).
- **Already covered (link, don't repeat):** /templates/dj (“dj invoice template”)

### /templates/construction-progress-invoice

- **Key:** construction progress invoice · also: progress billing invoice; progress payment invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: progress · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Progress billing: invoicing by percentage complete or by milestone against a schedule of values, retainage (often 5–10% held until completion), change orders on their own lines, lien waivers (hedged, state rules vary); the AIA G702/G703 forms exist as an industry standard, but this is a plain invoice. Sample: the 3rd progress invoice of a home addition with previous payments shown.
- **Don't write about:** Deposits and down payments (owned by /templates/contractor-deposit-invoice); general construction fields (/templates/construction).
- **Already covered (link, don't repeat):** /templates/construction (“construction invoice template”)

### /templates/web-development-milestone-invoice

- **Key:** web development milestone invoice · also: website project milestone invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: progress · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Billing a website project in milestones (discovery, design, build, launch): what counts as done (acceptance), revision rounds, scope changes as new lines, deposit at the start. Sample: milestone 2 of 4.
- **Don't write about:** Monthly maintenance retainers (owned by /templates/web-development-retainer-invoice); general web development fields (/templates/web-development).
- **Already covered (link, don't repeat):** /templates/web-development (“web development invoice template”)

### /templates/video-production-milestone-invoice

- **Key:** video production milestone invoice · also: videographer milestone invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: progress · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Billing a video project in stages: pre-production, shoot days, edit and revision rounds, delivery; what each milestone includes, extra revision rounds as lines, usage terms per stage. Sample: the post-production milestone.
- **Don't write about:** Day rates, crew and usage rights (owned by /templates/videography).

### /templates/consulting-hourly-invoice

- **Key:** consulting hourly invoice · also: hourly consultant invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly consulting invoices: hours × rate, billing increments (e.g. 0.25 h), how much detail per entry, minimum billing, travel time; hours come from your own timesheet (the app doesn't track time); link the free hours calculator. Sample: a month of advisory hours.
- **Don't write about:** Retainers (owned by /templates/consulting-retainer-invoice); setting your rate (the rate calculator in /tools); general consulting fields (/templates/consulting).
- **Already covered (link, don't repeat):** /templates/consulting (“consulting invoice template”)

### /templates/virtual-assistant-hourly-invoice

- **Key:** virtual assistant hourly invoice · also: va hourly invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly VA invoices: hours by task category, pre-paid blocks of hours vs billing after, time zones and response times, tools and subscriptions passed through. Sample: a two-week period for one client.
- **Don't write about:** General VA fields (owned by /templates/virtual-assistant); the app pitch for VAs (/industries/virtual-assistants).
- **Already covered (link, don't repeat):** /industries/virtual-assistants (“invoice app for virtual assistants”) · /templates/virtual-assistant (“virtual assistant invoice template”)

### /templates/handyman-hourly-invoice

- **Key:** handyman hourly invoice · also: handyman hourly rate invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly handyman billing: hourly vs flat per job, minimum charge (often 1–2 hours), trip charge, materials at cost or with a markup, rounding. Sample: a half-day of small repairs.
- **Don't write about:** General handyman invoice fields (owned by /templates/handyman).
- **Already covered (link, don't repeat):** /templates/handyman (“handyman invoice template”)

### /templates/bookkeeping-hourly-invoice

- **Key:** bookkeeping hourly invoice · also: bookkeeper hourly invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly bookkeeping: catch-up and clean-up work billed by the hour vs the usual monthly fixed fee, what to list per entry, year-end extras. Sample: a catch-up project of 3 months of books.
- **Don't write about:** The monthly fixed-fee bookkeeping invoice (owned by /templates/bookkeeping).
- **Already covered (link, don't repeat):** /templates/bookkeeping (“bookkeeping invoice template”)

### /templates/plumbing-labor-and-materials-invoice

- **Key:** plumbing labor and materials invoice · also: plumbing parts and labor invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Separating labor and parts: labor as hours × rate or a flat fee, each part on its own line, markup on parts (be transparent), parts vs workmanship warranty; sales tax on parts vs labor differs by state, and the app applies one tax rate per invoice (say how to handle it). Sample: a water heater replacement.
- **Don't write about:** General plumbing invoice fields (owned by /templates/plumbing).

### /templates/electrical-labor-and-materials-invoice

- **Key:** electrical labor and materials invoice · also: electrician parts and labor invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Labor and materials for electricians: wire by the foot, devices and fixtures (supplied by you or the customer), permit fees as a pass-through line, labor hours; tax on materials vs labor (state rules, one tax rate per invoice). Sample: a panel upgrade.
- **Don't write about:** General electrician invoice fields (owned by /templates/electrician).

### /templates/hvac-labor-and-materials-invoice

- **Key:** hvac labor and materials invoice · also: hvac parts and labor invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Labor and materials for HVAC: equipment, refrigerant by the pound, parts, labor hours, warranty registration, disposal of old units; tax rules hedged. Sample: an AC condenser replacement.
- **Don't write about:** General HVAC invoice fields and maintenance plans (owned by /templates/hvac).

### /templates/landscaping-labor-and-materials-invoice

- **Key:** landscaping labor and materials invoice · also: landscaping materials invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Labor and materials for landscaping projects: plants, soil and mulch by the cubic yard, stone by the ton, crew hours, equipment and disposal fees. Sample: a new front-yard bed install.
- **Don't write about:** Recurring lawn care visits and general landscaping fields (owned by /templates/landscaping).

### /templates/consulting-retainer-invoice

- **Key:** consulting retainer invoice · also: retainer invoice template
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: retainer · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Monthly consulting retainers: paying for availability vs a block of hours, invoicing at the start of the month, unused hours (roll over or not), the overage rate; in the app, duplicate last month's invoice. Sample: a monthly advisory retainer with an overage line.
- **Don't write about:** Hourly billing (owned by /templates/consulting-hourly-invoice); general consulting fields (/templates/consulting).
- **Already covered (link, don't repeat):** /templates/consulting (“consulting invoice template”)

### /templates/social-media-retainer-invoice

- **Key:** social media retainer invoice · also: monthly social media invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: retainer · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Monthly social media retainers: the management fee, what's included (posts, platforms, reports), ad spend billed separately as a pass-through, extras (shoots, campaigns). Sample: a monthly retainer with ad spend on its own line.
- **Don't write about:** General social media manager invoice fields (owned by /templates/social-media-management).
- **Already covered (link, don't repeat):** /templates/social-media-management (“social media manager invoice template”) · /industries/social-media-managers (“invoice app for social media managers”)

### /templates/web-development-retainer-invoice

- **Key:** website maintenance retainer invoice · also: web maintenance invoice
- **Type:** [template (billing type)](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · intent: template: retainer · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Website maintenance retainers: hosting, updates and backups, a number of support hours, response times, extra hours at a set rate; billed monthly by duplicating the last invoice. Sample: a monthly care plan.
- **Don't write about:** Project milestones (owned by /templates/web-development-milestone-invoice); general web development fields (/templates/web-development).

## Batch W1-C

### /invoice-generator-uk

- **Key:** uk vat invoice requirements · also: invoice generator uk; vat invoice template uk
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (new page type, chunk 43): the free generator preset for the UK (GBP, the VAT rates) plus the UK rules. What a VAT invoice must show, full vs simplified invoices (under £250), the VAT number, rates 20/5/0%, the tax point, invoicing when you're not VAT-registered (no VAT shown). Every rule with its source on gov.uk and the date checked.
- **Don't write about:** What every invoice includes in general (the blog: learn:/what-should-an-invoice-include); how to use the generator (/free-invoice-generator).
- **Notes:** GBP, 20/5/0% VAT, VAT number; replaces /guides/invoice-requirements-uk

### /invoice-generator-ireland

- **Key:** vat invoice ireland · also: invoice template ireland; irish vat invoice requirements
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for Ireland (EUR, the VAT rates) plus what a VAT invoice must show per Revenue, the VAT number, rates (23/13.5/9/0%, check and date them), credit notes, not registered = no VAT. Sources: revenue.ie.
- **Don't write about:** General invoice fields (the blog); EU reverse charge (owned by /reverse-charge-invoice): one sentence and a link.
- **Notes:** EUR, 23/13.5/9% VAT

### /invoice-generator-australia

- **Key:** tax invoice australia · also: abn invoice template; gst invoice australia
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for Australia (AUD, 10% GST) plus the ATO tax invoice rules: the ABN, the words 'tax invoice', GST shown, the extra buyer details from A$1,000, not registered for GST = an 'invoice', not a tax invoice. Sources: ato.gov.au, dated.
- **Don't write about:** General invoice fields (the blog).
- **Notes:** AUD, 10% GST, ABN

### /invoice-generator-new-zealand

- **Key:** gst invoice nz · also: tax invoice nz; nz invoice template
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for New Zealand (NZD, 15% GST) plus the current IRD rules (since 2023 'taxable supply information' replaced the old tax invoice rules: check and explain), the GST number, thresholds. Sources: ird.govt.nz, dated.
- **Don't write about:** General invoice fields (the blog).
- **Notes:** NZD, 15% GST, GST number

### /invoice-generator-canada

- **Key:** gst hst invoice canada · also: canada invoice template; invoice requirements canada
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for Canada (CAD) plus the GST/HST rules: the registration number, rates by province (GST 5%, HST provinces, PST and QST separate), the small-supplier threshold, the information required by invoice amount. The app applies one tax rate per invoice: explain how to show GST + PST honestly. Sources: canada.ca, dated.
- **Don't write about:** General invoice fields (the blog); the VAT calculator (/tools/vat-calculator).
- **Notes:** CAD, GST/HST/PST by province

### /invoice-generator-south-africa

- **Key:** vat invoice south africa · also: tax invoice south africa; sars invoice requirements
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for South Africa (ZAR, 15% VAT) plus SARS tax invoice rules: full vs abridged tax invoices and their thresholds (check), the VAT number, the words 'tax invoice'. Sources: sars.gov.za, dated.
- **Don't write about:** General invoice fields (the blog).
- **Notes:** ZAR, 15% VAT

### /reverse-charge-invoice

- **Key:** eu reverse charge invoice · also: vat reverse charge invoice; intra eu invoice
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): EU business-to-business invoices across borders: when the reverse charge applies (services and goods between VAT-registered businesses in different EU countries), both VAT numbers, no VAT charged, the reverse-charge note (VAT Directive art. 196), checking the client's VAT number in VIES. A generator preset with 0% and the note filled in. Sources: the EU's Your Europe pages, dated.
- **Don't write about:** Country VAT rates (owned by /tools/vat-calculator); the Irish rules (/invoice-generator-ireland).
- **Notes:** EU B2B: both VAT numbers + the reverse-charge note; chunk 43 called it /eu

### /de/rechnung-pflichtangaben

- **Key:** pflichtangaben rechnung · also: rechnung pflichtangaben; was muss auf eine rechnung
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** local (written in de)
- **Write about:** Written in German for German businesses (page code, chunk 43, under the de routes): the mandatory invoice details (§14 Abs. 4 UStG), small invoices up to €250 (§33 UStDV), Kleinunternehmer (§19 UStG) and the note to use, the e-invoicing obligation from 2025 and its transition rules (be honest: Invoicor makes PDF invoices; say when a PDF is still allowed for B2B, check and date). Sources: Gesetze im Internet, BMF, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /de/rechnung-erstellen): one sentence and a link. That page is 'make one', this page is 'what must be on it'.
- **Notes:** §14 UStG, Kleinunternehmer §19; replaces /guides/invoice-requirements-germany; next to /de/rechnung-erstellen, must not compete with it

### /nl/factuureisen

- **Key:** factuureisen · also: wat moet er op een factuur; factuur eisen belastingdienst
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** local (written in nl)
- **Write about:** Written in Dutch for Dutch businesses (page code, chunk 43, under the nl routes): the Belastingdienst invoice requirements (factuureisen), the KvK number and btw-id, the KOR (small business scheme) and what to put on the invoice, 'btw verlegd', the 5-year/7-year retention rule. Sources: belastingdienst.nl, kvk.nl, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /nl/gratis-factuur-maken).
- **Notes:** btw-nummer, KvK, KOR; replaces /guides/invoice-requirements-netherlands

### /fr/mentions-obligatoires-facture

- **Key:** mentions obligatoires facture · also: facture mentions légales; mentions facture auto-entrepreneur
- **Type:** [country](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · intent: country rules + generator preset · **Languages:** local (written in fr)
- **Write about:** Written in French for French businesses (page code, chunk 43, under the fr routes): the mandatory mentions (SIRET, TVA intracommunautaire, numbering, due date), 'TVA non applicable, art. 293 B du CGI' for micro-entrepreneurs, late-payment penalties and the €40 fixed compensation, the e-invoicing reform timetable (check and date). Sources: service-public.fr, economie.gouv.fr, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /fr/creer-une-facture).
- **Notes:** SIRET, TVA non applicable art. 293 B

## Batch blog topics (L4)

### /guides

- **Key:** invoicing guide · also: how to invoice
- **Type:** [hub](BLUEPRINTS.md#hub-templates-industries-compare-guides) · intent: learn · **Languages:** en-only
- **Write about:** Not on invoicor.com: guides go to the blog (decision D16, roadmap L4).

### /guides/how-to-write-an-invoice

- **Key:** how to write an invoice
- **Type:** [guide](BLUEPRINTS.md#guide-guidesslug-chunk-42) · intent: learn (how-to) · **Languages:** en-only
- **Write about:** Write on learn.invoicor.com (D16): a step-by-step how-to with a filled-in example and a link to the free generator.
- **Don't write about:** Check the blog articles in PAGES.md (learn.invoicor.com section) first; e.g. learn:/how-to-create-an-invoice-on-iphone-in-seconds is close.

### /guides/what-to-include-on-an-invoice

- **Key:** what to include on an invoice
- **Type:** [guide](BLUEPRINTS.md#guide-guidesslug-chunk-42) · intent: learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog, but learn:/what-should-an-invoice-include already covers it: improve that article instead of a new one.
- **Already covered (link, don't repeat):** learn:/what-should-an-invoice-include (“what should an invoice include”)

### /guides/invoice-vs-receipt

- **Key:** invoice vs receipt
- **Type:** [guide](BLUEPRINTS.md#guide-guidesslug-chunk-42) · intent: learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog: the difference, when to send which; honest that Invoicor makes invoices (mark as paid), not receipts.

### /guides/invoice-payment-terms

- **Key:** invoice payment terms
- **Type:** [guide](BLUEPRINTS.md#guide-guidesslug-chunk-42) · intent: learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog: Net 15/30/60, due on receipt, late fees, early-payment discounts, how to word them.

### /guides/how-to-number-invoices

- **Key:** invoice numbering
- **Type:** [guide](BLUEPRINTS.md#guide-guidesslug-chunk-42) · intent: learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog, but learn:/how-to-number-invoices-on-iphone exists: improve that article instead.

### /guides/late-payment-email

- **Key:** late payment email template
- **Type:** [guide](BLUEPRINTS.md#guide-guidesslug-chunk-42) · intent: learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog: friendly, firm and final reminder emails with templates; the app sends no reminders.

## Batch later: compare

### /compare/invoice-simple

- **Key:** invoice simple alternative · also: invoice simple vs invoicor
- **Type:** [compare](BLUEPRINTS.md#compare-compareslug) · intent: compare · **Languages:** en-only
- **Write about:** Same blueprint as the other compares: Invoice Simple vs Invoicor, their prices and features from their own pricing page (sourced and dated), our facts from BRAND.md §10 and content/pricing.json.
- **Already covered (link, don't repeat):** /compare (“invoice app alternatives”)
- **Notes:** The biggest App Store competitors; missing today

## Batch later: needs code (44)

### /free-receipt-generator

- **Key:** free receipt generator
- **Type:** [generator](BLUEPRINTS.md#generator-free-invoice-generator-chunks-3035) · intent: tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a receipt mode in the web generator. The page says plainly that the app itself makes invoices, not receipts.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

### /free-estimate-generator

- **Key:** free estimate generator
- **Type:** [generator](BLUEPRINTS.md#generator-free-invoice-generator-chunks-3035) · intent: tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): an estimate mode in the web generator. The page says plainly that the app has no estimates or quotes.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

## Batch later: trust pages (24)

### /about

- **Key:** about invoicor
- **Type:** [trust](BLUEPRINTS.md#about-contact-help-affiliate-legal) · intent: brand / trust · **Languages:** yes
- **Write about:** Who makes Invoicor and why, where the data lives (servers in Germany), how to reach us; facts only, no invented team size or numbers.
- **Notes:** E-E-A-T

### /contact

- **Key:** contact invoicor
- **Type:** [trust](BLUEPRINTS.md#about-contact-help-affiliate-legal) · intent: brand / trust · **Languages:** yes
- **Write about:** How to reach the team: email and in-app feedback, read by the team, replies can take a few days (BRAND.md §10: no live chat, no phone, no response-time promise).
- **Notes:** E-E-A-T

## Batch on hold: file downloads (53)

### /templates/invoice-template-word

- **Key:** invoice template word
- **Type:** template (file format) · intent: download · **Languages:** en-only
- **Write about:** On hold: we don't offer a Word download (S1-n). Only build this when there's a real .docx file to download (chunk 53).
- **Notes:** Big-volume quick wins

### /templates/invoice-template-excel

- **Key:** invoice template excel
- **Type:** template (file format) · intent: download · **Languages:** en-only
- **Write about:** On hold: we don't offer an Excel download (S1-n). Only with a real .xlsx file (chunk 53).
- **Notes:** Big-volume quick wins

### /templates/invoice-template-google-docs

- **Key:** invoice template google docs
- **Type:** template (file format) · intent: download · **Languages:** en-only
- **Write about:** On hold: needs a real Google Docs copy link (chunk 53).
- **Notes:** Big-volume quick wins

### /templates/invoice-template-pdf

- **Key:** invoice template pdf
- **Type:** template (file format) · intent: download · **Languages:** en-only
- **Write about:** On hold: the generator already makes PDFs and the blog has PDF articles; check for overlap before building (chunk 53).
- **Don't write about:** The free generator (/free-invoice-generator) and the blog's PDF articles.
- **Already covered (link, don't repeat):** learn:/what-is-a-pdf-invoice (“what is a pdf invoice”) · learn:/how-pdf-invoice-templates-work-on-iphone (“how pdf invoice templates work on iphone”) · learn:/how-to-use-pdf-invoice-templates-on-iphone (“how to use pdf invoice templates on iphone”) · learn:/how-to-share-an-invoice-pdf-from-iphone (“how to share an invoice pdf from iphone”)
- **Notes:** Big-volume quick wins

## Language versions to write

Live English pages marked **yes** that don't exist in every language yet. Pages that already have
their language versions (home, generator, tools, help, Android) aren't listed.

| Page type | English pages | Missing language versions |
|---|---|---|
| hub | 2 | 20 |
| template | 50 | 500 |
| industry | 43 | 430 |
| program | 1 | 10 |
| legal | 2 | 20 |

Before the first one: templates and industry pages have no language setup yet (roadmap H4: the page
labels per language, `content/{locale}/*.json`, local slugs and search words, hreflang). Start with
the languages that get traffic (German first, roadmap H6).
