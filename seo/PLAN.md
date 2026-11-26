# Page plan: what to build next

> **Generated, don't edit by hand.** The instructions for whoever builds the next pages, a person
> or a model. Every planned page has a brief here: what to write, and which existing pages already
> cover nearby topics (link to those, don't repeat them). What exists today is in
> [PAGES.md](PAGES.md). To change a brief or plan a page, edit its row in
> [keyword-map.csv](keyword-map.csv) (`brief`, `avoid`, `chunk` = batch) and run `npm run pages`.

**103 pages planned** in 11 groups · 241 live today

## How to build a batch

1. **Take the first batch that's ready** (the table below; the roadmap, W1, says when). Build all its pages
   in one go, then wait 2–3 weeks and check the indexed share in Search Console before the next.
2. **For each page read:** its brief and its category's direction below; the blueprint (linked per category,
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
| W1-B | 20 | template (billing type) 20 | yes 20 |
| W1-C | 10 | country 10 | en-only 7, local 3 |
| W2-A | 20 | template 10, industry 10 | yes 20 |
| W2-B | 11 | tool 11 | yes 9, en-only 2 |
| W2-C | 7 | country 7 | local 4, en-only 3 |
| W2-D | 10 | compare 10 | en-only 10 |
| blog topics (L4) | 12 | guide 12 | en-only 12 |
| later: needs code (44) | 4 | generator 4 | yes 4 |
| later: trust pages (24) | 2 | trust 2 | yes 2 |
| on hold: e-invoicing | 3 | country 3 | local 3 |
| on hold: file downloads (53) | 4 | template (file format) 4 | en-only 4 |

## Categories

Each category below has its **direction** (what its pages may and may not do), the pages that
are **done** (never build these again; improve them instead), and the **planned** pages with a
brief each. A new page idea must fit a category's direction; if it fits none, it needs a decision
first (a new category here).

| Category | Live | Planned | Languages |
|---|---|---|---|
| [Trade templates](#trade-templates) | 50 | 10 | yes |
| [Billing-type templates](#billing-type-templates) | 0 | 20 | yes |
| [Industry pages ("invoice app for …")](#industry-pages-invoice-app-for-) | 43 | 10 | yes |
| [Compare pages ("{competitor} alternative")](#compare-pages-competitor-alternative) | 20 | 10 | en-only |
| [Free tools](#free-tools) | 4 | 11 | yes |
| [Country pages (English)](#country-pages-english) | 0 | 10 | en-only |
| [Local pages (in the country's own language)](#local-pages-in-the-countrys-own-language) | 0 | 10 | local |
| [Generators (other documents)](#generators-other-documents) | 1 | 4 | yes |
| [Blog (learn.invoicor.com)](#blog-learninvoicorcom) | 34 | 12 | en-only |
| [Core pages, hubs, trust and legal](#core-pages-hubs-trust-and-legal) | 9 | 6 | per page |

## Trade templates

- **URL:** `/templates/{trade}` · **Key:** "{trade} invoice template"
- **Blueprint:** [BLUEPRINTS.md](BLUEPRINTS.md#template-templatesslug) · **Where it's written:** `content/templates.json`
- **Links to:** its industry page (`industry` field), 2 related templates, the trade's billing-type pages once they exist.
- **Languages:** **yes**: written per country later (local trade names and prices), after the language setup (H4).

**Can do:**

- One page per trade with real work of its own: its jobs, units (per hour, per square foot, per visit), materials, terms and billing habits.
- A filled-in sample invoice with realistic prices; the free generator opens with it (Use this template).
- Trade-specific notes, mistakes, a pro tip and FAQs about how that trade invoices.
- Name the PDF: why a PDF works for this trade, and the free generator.

**Can't do:**

- A trade that's only a synonym or a sub-niche of a live one ("auto repair" is already the key of /templates/auto-detailing): improve that page instead.
- Word, Excel or Google Docs downloads: we don't offer those files (S1-n).
- City or state versions of the same trade (doorway pages).
- Billing-type questions in depth (deposits, retainers, hourly): those are their own pages, see Billing-type templates.

### Done (50): don't build these again

`photography` photography invoice template · `plumbing` plumbing invoice template · `hvac` hvac invoice template · `freelance-design` graphic design invoice template · `handyman` handyman invoice template · `videography` videography invoice template · `landscaping` landscaping invoice template · `consulting` consulting invoice template · `cleaning-services` cleaning invoice template · `auto-detailing` auto repair invoice template · `electrician` electrician invoice template · `construction` construction invoice template · `roofing` roofing invoice template · `painting` painting invoice template · `web-development` web development invoice template · `personal-training` personal trainer invoice template · `tutoring` tutoring invoice template · `catering` catering invoice template · `moving` moving company invoice template · `pest-control` pest control invoice template · `virtual-assistant` virtual assistant invoice template · `pet-sitting` pet sitting invoice template · `makeup-artist` makeup artist invoice template · `carpentry` carpentry invoice template · `flooring` flooring invoice template · `tile-installation` tile installation invoice template · `drywall` drywall invoice template · `masonry` masonry invoice template · `fence-installation` fence installation invoice template · `pool-service` pool service invoice template · `window-cleaning` window cleaning invoice template · `pressure-washing` pressure washing invoice template · `tree-service` tree service invoice template · `snow-removal` snow removal invoice template · `locksmith` locksmith invoice template · `appliance-repair` appliance repair invoice template · `junk-removal` junk removal invoice template · `carpet-cleaning` carpet cleaning invoice template · `interior-design` interior design invoice template · `remodeling` remodeling invoice template · `garage-door-repair` garage door repair invoice template · `dj` dj invoice template · `event-planning` event planner invoice template · `florist` florist invoice template · `massage-therapy` massage therapy invoice template · `translation` translation invoice template · `copywriting` copywriter invoice template · `social-media-management` social media manager invoice template · `music-lessons` music teacher invoice template · `bookkeeping` bookkeeping invoice template

### Planned (10)

#### /templates/notary

- **Key:** notary invoice template · also: mobile notary invoice; loan signing invoice
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Mobile notaries and loan signing agents: fees per notarial act are capped by state law (each state publishes its maximum; check and say "check your state's fee schedule"), travel fees billed separately, loan signings paid by signing services or title companies (often net 30), printing and courier fees. Sample: a loan signing with travel and printing. FAQs: can I charge travel, what's the maximum fee, who pays a loan signing, what to put on the invoice.
- **Notes:** industry: notaries

#### /templates/home-inspection

- **Key:** home inspection invoice template · also: home inspector invoice; inspection report invoice
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Home inspectors: the base fee by square footage and age, add-ons (radon, sewer scope, mold, wood-destroying insects), re-inspection fees, payment due at or before the inspection, buyer vs agent paying, report delivery terms. Sample: a 2,400 sq ft inspection with radon and a sewer scope.
- **Don't write about:** Pest treatment itself (owned by /templates/pest-control): a wood-destroying insect report is mentioned, not explained.
- **Notes:** industry: home-inspectors

#### /templates/it-services

- **Key:** it services invoice template · also: computer repair invoice template; it support invoice
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. IT support and computer repair: hourly support (remote vs on-site, minimum charge), managed services per device or user per month, hardware and licenses resold (with markup, warranty), project work. Sample: a small-office month with 12 managed devices, an on-site visit and a laptop.
- **Don't write about:** Websites and web projects (owned by /templates/web-development).
- **Already covered (link, don't repeat):** /templates/pool-service (“pool service invoice template”) · /templates/tree-service (“tree service invoice template”)
- **Notes:** industry: it-technicians

#### /templates/drone-services

- **Key:** drone services invoice template · also: drone photography invoice; aerial photography invoice
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Drone pilots: flight time or per project, the FAA Part 107 certificate number on the invoice (US commercial pilots need it; verify), editing and deliverables (photos, video, maps), licensing and usage, travel, weather reschedules. Sample: a real-estate aerial package.
- **Don't write about:** Photo usage rights in general (owned by /templates/photography).
- **Already covered (link, don't repeat):** /templates/pool-service (“pool service invoice template”) · /templates/tree-service (“tree service invoice template”)
- **Notes:** industry: drone-pilots

#### /templates/tattoo

- **Key:** tattoo invoice template · also: tattoo artist invoice; tattoo receipt
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Tattoo artists and studios: hourly vs a set price per piece, the booking deposit (non-refundable, applied to the final price), touch-up policy, design fees for custom work, multi-session pieces, cash tips. Sample: a two-session half sleeve with a deposit applied.
- **Don't write about:** Makeup and beauty services (owned by /templates/makeup-artist).
- **Notes:** industry: tattoo-artists

#### /templates/personal-chef

- **Key:** personal chef invoice template · also: private chef invoice; meal prep invoice
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Personal and private chefs: service fee per day or per person, groceries at cost (with receipts) on their own lines, weekly meal-prep packages, dinner parties, travel, cleanup. Sample: a weekly meal-prep week with groceries.
- **Don't write about:** Event catering for big groups (owned by /templates/catering).
- **Already covered (link, don't repeat):** /templates/personal-training (“personal trainer invoice template”)
- **Notes:** industry: personal-chefs

#### /templates/bakery

- **Key:** bakery invoice template · also: cake order invoice; custom cake invoice
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Home and small bakeries: custom cake orders (tiers, servings, design), the order deposit, delivery and setup, tastings, wholesale orders to cafés on account; sales tax on food differs by state (hedge). Sample: a wedding cake order with delivery.
- **Don't write about:** Full event catering (owned by /templates/catering).
- **Notes:** industry: bakers

#### /templates/dog-training

- **Key:** dog training invoice template · also: dog trainer invoice
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Dog trainers: session packages (6 sessions paid up front), private vs group classes, board-and-train programs, behavior consults, travel. Sample: a 6-session package plus an evaluation.
- **Don't write about:** Walks, sitting and grooming (owned by /templates/pet-sitting).
- **Notes:** industry: dog-trainers

#### /templates/musician

- **Key:** musician invoice template · also: band invoice template; gig invoice
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Musicians and bands: performance fee per set or per event, the deposit to hold the date, travel and accommodation, backline and sound, overtime, splitting between band members (who invoices). Sample: a wedding ceremony and reception gig.
- **Don't write about:** DJ services (owned by /templates/dj).
- **Notes:** industry: musicians

#### /templates/voice-over

- **Key:** voice over invoice template · also: voice actor invoice
- **Batch:** W2-A · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Voice actors: session fee plus usage (broadcast, online, internal; term and territory), pickups and revisions, studio fees, rush fees. Sample: an online ad with a 1-year usage line.
- **Don't write about:** Copywriting (owned by /templates/copywriting).
- **Notes:** industry: voice-actors

## Billing-type templates

- **URL:** `/templates/{trade}-{billing}-invoice` · **Key:** "{trade} {deposit | progress | milestone | hourly | labor and materials | retainer} invoice"
- **Blueprint:** [BLUEPRINTS.md](BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · **Where it's written:** `content/templates.json`
- **Links to:** the trade's template (in `related`), its industry page, one other billing-type page.
- **Languages:** **yes**, with the trade templates.

**Can do:**

- Answer "how do I bill this way" for one trade: deposit size and terms, progress percentages and retainage, increments and minimums, parts vs labor, unused retainer hours.
- A sample invoice of that billing type (e.g. a deposit invoice, then how the final invoice subtracts it).
- Only combinations people actually bill that way (wedding trades take deposits, contractors bill progress, consultants bill hourly or on retainer).

**Can't do:**

- Repeat the trade's general fields: one sentence and a link to its template.
- Claim the app tracks deposits, partial payments or time, or sends recurring invoices (it doesn't).
- Every trade × every billing type: at most 2 billing types per trade, and only where the search is real.

### Done (0): don't build these again

_None yet._

### Planned (20)

#### /templates/photography-deposit-invoice

- **Key:** photography deposit invoice · also: photographer deposit invoice; wedding photography deposit
- **Batch:** W1-B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit (retainer) invoice a photographer sends when a client books a date: what it secures (the date, prep time), usual sizes (25–50%), non-refundable wording and the cancellation and reschedule policy, due before the date is held. Sample: a wedding booking deposit. Show how the balance invoice later lists the deposit as a negative line. FAQs: deposit vs retainer, refundable or not, rescheduling, how it appears on the final invoice.
- **Don't write about:** General photography invoice fields, usage rights and licensing (owned by /templates/photography): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/photography (“photography invoice template”)

#### /templates/catering-deposit-invoice

- **Key:** catering deposit invoice · also: catering deposit invoice template
- **Batch:** W1-B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit that locks a catering date: deposit size, the final headcount deadline and how the final invoice adjusts to the guaranteed count, a tasting fee credited against the deposit, cancellation windows. Sample: a 120-guest wedding deposit.
- **Don't write about:** Per-head menu pricing, service charge vs gratuity, staffing lines (owned by /templates/catering).
- **Already covered (link, don't repeat):** /templates/catering (“catering invoice template”)

#### /templates/contractor-deposit-invoice

- **Key:** contractor deposit invoice · also: construction deposit invoice; down payment invoice
- **Batch:** W1-B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The down payment a contractor takes before starting: what it pays for (materials, scheduling), how big it may be (some states cap home-improvement down payments, e.g. California: $1,000 or 10% of the contract price, whichever is less, Business and Professions Code §7159.5; verify and date it), a materials deposit vs a booking deposit, what the contract should say. Sample: a kitchen job deposit.
- **Don't write about:** Progress billing and retainage (owned by /templates/construction-progress-invoice); general construction fields (/templates/construction).
- **Already covered (link, don't repeat):** /industries/general-contractors (“invoice app for contractors”)

#### /templates/roofing-deposit-invoice

- **Key:** roofing deposit invoice · also: roofer deposit invoice
- **Batch:** W1-B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit before a roof job: ordering shingles and materials, scheduling around weather, insurance-claim jobs (homeowner deductible, insurer's first and final checks, hedged), what happens to the deposit if the job is delayed. Sample: a full re-roof materials deposit.
- **Don't write about:** Roofing line items per square, tear-off and disposal (owned by /templates/roofing).
- **Already covered (link, don't repeat):** /templates/roofing (“roofing invoice template”) · /industries/roofers (“roofing invoice app”)

#### /templates/painting-deposit-invoice

- **Key:** painting deposit invoice · also: painter deposit invoice
- **Batch:** W1-B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit a painter takes for paint and the booked days: color selection before ordering, change orders after the deposit, interior vs exterior weather terms. Sample: an exterior repaint deposit.
- **Don't write about:** Per-room and per-square-foot pricing, prep lines (owned by /templates/painting).
- **Already covered (link, don't repeat):** /templates/painting (“painting invoice template”)

#### /templates/dj-deposit-invoice

- **Key:** dj deposit invoice · also: wedding dj deposit
- **Batch:** W1-B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The date-hold deposit for a DJ booking: deposit size, what it covers, non-refundable terms, balance due before the event, overtime rate agreed in advance. Sample: a wedding DJ deposit.
- **Don't write about:** Full DJ invoice lines (hours, equipment, travel; owned by /templates/dj).
- **Already covered (link, don't repeat):** /templates/dj (“dj invoice template”)

#### /templates/construction-progress-invoice

- **Key:** construction progress invoice · also: progress billing invoice; progress payment invoice
- **Batch:** W1-B · **Intent:** template: progress · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Progress billing: invoicing by percentage complete or by milestone against a schedule of values, retainage (often 5–10% held until completion), change orders on their own lines, lien waivers (hedged, state rules vary); the AIA G702/G703 forms exist as an industry standard, but this is a plain invoice. Sample: the 3rd progress invoice of a home addition with previous payments shown.
- **Don't write about:** Deposits and down payments (owned by /templates/contractor-deposit-invoice); general construction fields (/templates/construction).
- **Already covered (link, don't repeat):** /templates/construction (“construction invoice template”)

#### /templates/web-development-milestone-invoice

- **Key:** web development milestone invoice · also: website project milestone invoice
- **Batch:** W1-B · **Intent:** template: progress · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Billing a website project in milestones (discovery, design, build, launch): what counts as done (acceptance), revision rounds, scope changes as new lines, deposit at the start. Sample: milestone 2 of 4.
- **Don't write about:** Monthly maintenance retainers (owned by /templates/web-development-retainer-invoice); general web development fields (/templates/web-development).
- **Already covered (link, don't repeat):** /templates/web-development (“web development invoice template”)

#### /templates/video-production-milestone-invoice

- **Key:** video production milestone invoice · also: videographer milestone invoice
- **Batch:** W1-B · **Intent:** template: progress · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Billing a video project in stages: pre-production, shoot days, edit and revision rounds, delivery; what each milestone includes, extra revision rounds as lines, usage terms per stage. Sample: the post-production milestone.
- **Don't write about:** Day rates, crew and usage rights (owned by /templates/videography).

#### /templates/consulting-hourly-invoice

- **Key:** consulting hourly invoice · also: hourly consultant invoice
- **Batch:** W1-B · **Intent:** template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly consulting invoices: hours × rate, billing increments (e.g. 0.25 h), how much detail per entry, minimum billing, travel time; hours come from your own timesheet (the app doesn't track time); link the free hours calculator. Sample: a month of advisory hours.
- **Don't write about:** Retainers (owned by /templates/consulting-retainer-invoice); setting your rate (the rate calculator in /tools); general consulting fields (/templates/consulting).
- **Already covered (link, don't repeat):** /templates/consulting (“consulting invoice template”)

#### /templates/virtual-assistant-hourly-invoice

- **Key:** virtual assistant hourly invoice · also: va hourly invoice
- **Batch:** W1-B · **Intent:** template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly VA invoices: hours by task category, pre-paid blocks of hours vs billing after, time zones and response times, tools and subscriptions passed through. Sample: a two-week period for one client.
- **Don't write about:** General VA fields (owned by /templates/virtual-assistant); the app pitch for VAs (/industries/virtual-assistants).
- **Already covered (link, don't repeat):** /industries/virtual-assistants (“invoice app for virtual assistants”) · /templates/virtual-assistant (“virtual assistant invoice template”)

#### /templates/handyman-hourly-invoice

- **Key:** handyman hourly invoice · also: handyman hourly rate invoice
- **Batch:** W1-B · **Intent:** template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly handyman billing: hourly vs flat per job, minimum charge (often 1–2 hours), trip charge, materials at cost or with a markup, rounding. Sample: a half-day of small repairs.
- **Don't write about:** General handyman invoice fields (owned by /templates/handyman).
- **Already covered (link, don't repeat):** /templates/handyman (“handyman invoice template”)

#### /templates/bookkeeping-hourly-invoice

- **Key:** bookkeeping hourly invoice · also: bookkeeper hourly invoice
- **Batch:** W1-B · **Intent:** template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly bookkeeping: catch-up and clean-up work billed by the hour vs the usual monthly fixed fee, what to list per entry, year-end extras. Sample: a catch-up project of 3 months of books.
- **Don't write about:** The monthly fixed-fee bookkeeping invoice (owned by /templates/bookkeeping).
- **Already covered (link, don't repeat):** /templates/bookkeeping (“bookkeeping invoice template”)

#### /templates/plumbing-labor-and-materials-invoice

- **Key:** plumbing labor and materials invoice · also: plumbing parts and labor invoice
- **Batch:** W1-B · **Intent:** template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Separating labor and parts: labor as hours × rate or a flat fee, each part on its own line, markup on parts (be transparent), parts vs workmanship warranty; sales tax on parts vs labor differs by state, and the app applies one tax rate per invoice (say how to handle it). Sample: a water heater replacement.
- **Don't write about:** General plumbing invoice fields (owned by /templates/plumbing).

#### /templates/electrical-labor-and-materials-invoice

- **Key:** electrical labor and materials invoice · also: electrician parts and labor invoice
- **Batch:** W1-B · **Intent:** template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Labor and materials for electricians: wire by the foot, devices and fixtures (supplied by you or the customer), permit fees as a pass-through line, labor hours; tax on materials vs labor (state rules, one tax rate per invoice). Sample: a panel upgrade.
- **Don't write about:** General electrician invoice fields (owned by /templates/electrician).

#### /templates/hvac-labor-and-materials-invoice

- **Key:** hvac labor and materials invoice · also: hvac parts and labor invoice
- **Batch:** W1-B · **Intent:** template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Labor and materials for HVAC: equipment, refrigerant by the pound, parts, labor hours, warranty registration, disposal of old units; tax rules hedged. Sample: an AC condenser replacement.
- **Don't write about:** General HVAC invoice fields and maintenance plans (owned by /templates/hvac).

#### /templates/landscaping-labor-and-materials-invoice

- **Key:** landscaping labor and materials invoice · also: landscaping materials invoice
- **Batch:** W1-B · **Intent:** template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Labor and materials for landscaping projects: plants, soil and mulch by the cubic yard, stone by the ton, crew hours, equipment and disposal fees. Sample: a new front-yard bed install.
- **Don't write about:** Recurring lawn care visits and general landscaping fields (owned by /templates/landscaping).

#### /templates/consulting-retainer-invoice

- **Key:** consulting retainer invoice · also: retainer invoice template
- **Batch:** W1-B · **Intent:** template: retainer · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Monthly consulting retainers: paying for availability vs a block of hours, invoicing at the start of the month, unused hours (roll over or not), the overage rate; in the app, duplicate last month's invoice. Sample: a monthly advisory retainer with an overage line.
- **Don't write about:** Hourly billing (owned by /templates/consulting-hourly-invoice); general consulting fields (/templates/consulting).
- **Already covered (link, don't repeat):** /templates/consulting (“consulting invoice template”)

#### /templates/social-media-retainer-invoice

- **Key:** social media retainer invoice · also: monthly social media invoice
- **Batch:** W1-B · **Intent:** template: retainer · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Monthly social media retainers: the management fee, what's included (posts, platforms, reports), ad spend billed separately as a pass-through, extras (shoots, campaigns). Sample: a monthly retainer with ad spend on its own line.
- **Don't write about:** General social media manager invoice fields (owned by /templates/social-media-management).
- **Already covered (link, don't repeat):** /templates/social-media-management (“social media manager invoice template”) · /industries/social-media-managers (“invoice app for social media managers”)

#### /templates/web-development-retainer-invoice

- **Key:** website maintenance retainer invoice · also: web maintenance invoice
- **Batch:** W1-B · **Intent:** template: retainer · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Website maintenance retainers: hosting, updates and backups, a number of support hours, response times, extra hours at a set rate; billed monthly by duplicating the last invoice. Sample: a monthly care plan.
- **Don't write about:** Project milestones (owned by /templates/web-development-milestone-invoice); general web development fields (/templates/web-development).

## Industry pages ("invoice app for …")

- **URL:** `/industries/{professionals}` · **Key:** "invoice app for {professionals}"
- **Blueprint:** [BLUEPRINTS.md](BLUEPRINTS.md#industry-industriesslug) · **Where it's written:** `content/industries.json`
- **Links to:** the matching template(s), 2 related industries.
- **Languages:** **yes**, after the language setup (H4).

**Can do:**

- Show how that profession invoices from an iPhone with Invoicor: a real day (scenario), their usual line items, their mistakes and the app features that fix them.
- Profession-specific stats (price ranges), glossary, tax and licensing notes (hedged).
- Pair with the trade's template (template = the document, industry = the app).

**Can't do:**

- A profession a live page already covers (drywall, fencing and remodeling sit under /industries/general-contractors).
- Features outside BRAND.md §10 in the feature cards (no estimates, scheduling, reminders, payments, photo attachments, time tracking).
- "The app in your language": the app's screens are English; say "invoices in 11 languages".

### Done (43): don't build these again

`plumbers-hvac` invoice app for plumbers · `freelance-designers` invoicing app for freelance designers · `landscaping-lawn-care` landscaping invoicing software · `electricians` invoice app for electricians · `general-contractors` invoice app for contractors · `photographers-videographers` invoicing software for photographers · `consultants-coaches` invoicing software for consultants · `cleaning-services` invoice app for cleaning business · `personal-trainers` invoicing for personal trainers · `auto-detailing-mechanics` invoice app for mechanics · `roofers` roofing invoice app · `painters` invoice app for painters · `web-developers` invoice app for freelance developers · `tutors` invoice app for tutors · `caterers` invoice app for caterers · `movers` invoice app for movers · `pest-control` pest control invoicing software · `virtual-assistants` invoice app for virtual assistants · `pet-care` invoice app for dog walkers · `hair-makeup-artists` invoice app for makeup artists · `carpenters` invoice app for carpenters · `flooring-installers` invoice app for flooring installers · `tile-installers` invoice app for tile installers · `masons` invoice app for masons · `pool-service` invoice app for pool service companies · `window-cleaners` invoice app for window cleaners · `pressure-washing` invoice app for pressure washing businesses · `tree-service` invoice app for tree service companies · `snow-removal` invoice app for snow removal businesses · `locksmiths` invoice app for locksmiths · `appliance-repair` invoice app for appliance repair technicians · `junk-removal` invoice app for junk removal businesses · `carpet-cleaners` invoice app for carpet cleaners · `interior-designers` invoice app for interior designers · `djs` invoice app for djs · `event-planners` invoice app for event planners · `florists` invoice app for florists · `massage-therapists` invoice app for massage therapists · `translators` invoice app for translators · `copywriters` invoice app for copywriters · `social-media-managers` invoice app for social media managers · `music-teachers` invoice app for music teachers · `bookkeepers` invoice app for bookkeepers

### Planned (10)

#### /industries/notaries

- **Key:** invoice app for notaries · also: mobile notary invoicing app
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. A mobile notary's day: invoicing each signing from the car, per-act fees within the state cap, travel lines, signing companies that pay net 30, statuses to see who still owes.

#### /industries/home-inspectors

- **Key:** invoice app for home inspectors · also: home inspection invoicing
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. Invoicing at the inspection: saved inspection packages and add-ons, sending the invoice before the report, buyer or agent as the client.

#### /industries/it-technicians

- **Key:** invoice app for it technicians · also: computer repair invoicing app
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. IT support and repair: monthly managed-service invoices by duplicating last month's, on-site visits, hardware lines, several business clients.

#### /industries/drone-pilots

- **Key:** invoice app for drone pilots · also: drone business invoicing
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. Drone businesses: per-project packages saved as products, real-estate agents as repeat clients, travel and reshoot lines, the Part 107 number in the notes.

#### /industries/tattoo-artists

- **Key:** invoice app for tattoo artists · also: tattoo studio invoicing
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. Tattoo artists: deposits as their own invoice, multi-session pieces, studio vs guest artists, paid status at the end of the session.
- **Already covered (link, don't repeat):** /industries/hair-makeup-artists (“invoice app for makeup artists”)

#### /industries/personal-chefs

- **Key:** invoice app for personal chefs · also: private chef invoicing
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. Personal chefs: weekly clients (duplicate last week's invoice), groceries at cost, dinner-party quotes turned into invoices.

#### /industries/bakers

- **Key:** invoice app for bakers · also: home bakery invoicing
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. Home and small bakeries: custom orders, deposits, café accounts invoiced weekly, delivery fees; cottage food rules vary by state (hedge).

#### /industries/dog-trainers

- **Key:** invoice app for dog trainers · also: dog training business invoicing
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. Dog trainers: packages paid up front, group classes, board-and-train, invoicing after the evaluation.
- **Already covered (link, don't repeat):** /industries/pet-care (“invoice app for dog walkers”)

#### /industries/musicians

- **Key:** invoice app for musicians · also: band invoicing app
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. Musicians and bands: gig invoices from the venue parking lot, deposits, venues vs private clients, one member invoicing for the band.

#### /industries/voice-actors

- **Key:** invoice app for voice actors · also: voice over invoicing
- **Batch:** W2-A · **Intent:** app for my trade · **Languages:** yes
- **Write about:** Same fields and depth as the live industry pages (content/industries.json): stats, 3 mistakes, 3 real app features, a real day, 5 line items, a glossary, tax and licensing notes (hedged), 5 FAQs. Voice actors: session plus usage lines, agencies and direct clients, pickups invoiced later, currencies for clients abroad (38 currencies).

## Compare pages ("{competitor} alternative")

- **URL:** `/compare/{competitor}` · **Key:** "{competitor} alternative"
- **Blueprint:** [BLUEPRINTS.md](BLUEPRINTS.md#compare-compareslug) · **Where it's written:** `content/comparisons.json`
- **Links to:** 2 related compares, the pricing section, the free generator.
- **Languages:** **en-only** (HL8). Local rivals become their own local pages (HL9).

**Can do:**

- An honest comparison: who the competitor is for, their prices and features from their own pages (source and date), where Invoicor is simpler or cheaper, and where they're the better choice.
- Competitors that people actually search for as "{name} alternative" or "{name} vs".

**Can't do:**

- Competitor facts without a source and a date, or prices older than 3 months (re-check, E1-b).
- "X vs Y" pages between two competitors (little value of our own).
- Local rivals in other languages here: those are local pages (HL9), written in that language.

### Done (20): don't build these again

`quickbooks` quickbooks alternative · `freshbooks` freshbooks alternative · `invoice2go` invoice2go alternative · `wave` wave alternative · `xero` xero alternative · `zoho-invoice` zoho invoice alternative · `square-invoices` square invoices alternative · `honeybook` honeybook alternative · `bonsai` bonsai alternative · `stripe-invoices` stripe invoicing alternative · `invoice-fly` invoice fly alternative · `bookipi` bookipi alternative · `joist` joist alternative · `jobber` jobber alternative · `housecall-pro` housecall pro alternative · `invoice-ninja` invoice ninja alternative · `harvest` harvest alternative · `servicem8` servicem8 alternative · `billdu` billdu alternative · `zervant` zervant alternative

### Planned (10)

#### /compare/invoice-simple

- **Key:** invoice simple alternative · also: invoice simple vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the other compares: Invoice Simple vs Invoicor, their prices and features from their own pricing page (sourced and dated), our facts from BRAND.md §10 and content/pricing.json.
- **Already covered (link, don't repeat):** /compare (“invoice app alternatives”)
- **Notes:** The biggest App Store competitors; missing today

#### /compare/invoice-home

- **Key:** invoice home alternative · also: invoice home vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the live compares (content/comparisons.json): who they're for, their prices and plans from their own pricing page (source and date), features side by side, where Invoicor is simpler or cheaper and where they're the better choice. Check on their site before writing: their template library, the mobile app, pricing tiers. Be fair: say who should stay with Invoice Home.
- **Already covered (link, don't repeat):** /compare (“invoice app alternatives”)

#### /compare/moon-invoice

- **Key:** moon invoice alternative · also: moon invoice vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the live compares (content/comparisons.json): who they're for, their prices and plans from their own pricing page (source and date), features side by side, where Invoicor is simpler or cheaper and where they're the better choice. Check on their site before writing: platforms (iOS, Android, web), plans, estimates and payments. Be fair: say who should stay with Moon Invoice.
- **Already covered (link, don't repeat):** /compare (“invoice app alternatives”)

#### /compare/invoicely

- **Key:** invoicely alternative · also: invoicely vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the live compares (content/comparisons.json): who they're for, their prices and plans from their own pricing page (source and date), features side by side, where Invoicor is simpler or cheaper and where they're the better choice. Check on their site before writing: free plan limits, plans, multi-business. Be fair: say who should stay with Invoicely.

#### /compare/paypal-invoicing

- **Key:** paypal invoicing alternative · also: paypal invoicing vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the live compares (content/comparisons.json): who they're for, their prices and plans from their own pricing page (source and date), features side by side, where Invoicor is simpler or cheaper and where they're the better choice. Check on their site before writing: fees per paid invoice (their fee page), no subscription, what you need a PayPal account for. Be fair: say who should stay with PayPal Invoicing.

#### /compare/tradify

- **Key:** tradify alternative · also: tradify vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the live compares (content/comparisons.json): who they're for, their prices and plans from their own pricing page (source and date), features side by side, where Invoicor is simpler or cheaper and where they're the better choice. Check on their site before writing: job management for trades, per-user pricing, quoting and scheduling. Be fair: say who should stay with Tradify.

#### /compare/fieldpulse

- **Key:** fieldpulse alternative · also: fieldpulse vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the live compares (content/comparisons.json): who they're for, their prices and plans from their own pricing page (source and date), features side by side, where Invoicor is simpler or cheaper and where they're the better choice. Check on their site before writing: field service features, pricing (often on request), team size. Be fair: say who should stay with FieldPulse.

#### /compare/hiveage

- **Key:** hiveage alternative · also: hiveage vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the live compares (content/comparisons.json): who they're for, their prices and plans from their own pricing page (source and date), features side by side, where Invoicor is simpler or cheaper and where they're the better choice. Check on their site before writing: plans, time tracking, recurring billing. Be fair: say who should stay with Hiveage.

#### /compare/sumup-invoices

- **Key:** sumup invoices alternative · also: sumup invoices vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the live compares (content/comparisons.json): who they're for, their prices and plans from their own pricing page (source and date), features side by side, where Invoicor is simpler or cheaper and where they're the better choice. Check on their site before writing: free invoicing tied to SumUp payments, card fees, countries. Be fair: say who should stay with SumUp Invoices.
- **Already covered (link, don't repeat):** /compare (“invoice app alternatives”)

#### /compare/sage-accounting

- **Key:** sage accounting alternative · also: sage accounting vs invoicor
- **Batch:** W2-D · **Intent:** compare · **Languages:** en-only
- **Write about:** Same blueprint as the live compares (content/comparisons.json): who they're for, their prices and plans from their own pricing page (source and date), features side by side, where Invoicor is simpler or cheaper and where they're the better choice. Check on their site before writing: accounting suite vs a simple invoice app, monthly price, countries. Be fair: say who should stay with Sage Accounting.

## Free tools

- **URL:** `/tools/{tool}` (local slugs per language, `lib/i18n/routes.ts`) · **Key:** "{tool} calculator / checker / generator"
- **Blueprint:** [../ROADMAP.md](../ROADMAP.md#t-free-tools) · **Where it's written:** page code: `components/tools/`, `lib/tools/registry.ts`
- **Links to:** the free generator, the other tools (hub), the related templates.
- **Languages:** **yes**: every tool exists in all 11 languages with local presets (T9).

**Can do:**

- A tool that works in the browser and gives a real answer (a number, a check), with the steps in plain words.
- A button that puts the result on an invoice in the free generator (`?item=&qty=&price=&tax=&currency=`).
- Country presets per language (rates, number format, currency).

**Can't do:**

- Rates or rules without a source and a date (VAT, late-payment interest): re-check every 6 months.
- Claims a check can't back up: an IBAN check catches typos, it doesn't prove who owns the account.
- Tools that need our server or a paid API without a decision first (VAT number check, business register: T5, T6).

### Done (4): don't build these again

`/tools` free invoicing tools · `vat-calculator` vat calculator · `hours-calculator` hours calculator · `hourly-rate-calculator` freelance hourly rate calculator

### Planned (11)

#### /tools/iban-checker

- **Key:** iban checker · also: iban validator; check iban
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T3. Check an IBAN in the browser: length per country and the ISO 13616 mod-97 check digits; show the country and the bank code. Say plainly: it catches typos, it doesn't prove who owns the account (since October 2025 EU banks check the name for SEPA transfers: Verification of Payee).
- **Notes:** T3

#### /tools/late-payment-interest-calculator

- **Key:** late payment interest calculator · also: late payment fee calculator; statutory interest calculator
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T7. Business-to-business late payment interest per country: EU statutory interest (the ECB reference rate + 8 points; + 9 in Germany) and the fixed €40 compensation per invoice; the UK's Late Payment Act (base rate + 8%, fixed sums by debt size); consumer rules differ (e.g. the Dutch WIK scale). Every rate with its source and date; re-check every half year. The result goes onto a reminder invoice in the generator.
- **Notes:** T7

#### /tools/due-date-calculator

- **Key:** invoice due date calculator · also: net 30 calculator; payment terms calculator
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Invoice date + terms (due on receipt, Net 7/15/30/60, end of month, end of month + 30) = the due date, with the weekday; explain each term in one line.
- **Don't write about:** What payment terms mean in depth (the blog topic invoice-payment-terms).
- **Notes:** T8

#### /tools/invoice-number-generator

- **Key:** invoice number generator · also: invoice numbering format
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Build an invoice number format (prefix, year, client code, sequence) and show the next 5 numbers; the rules in one paragraph (unique, sequential; in the EU no gaps). Copy to the generator.
- **Don't write about:** How to number invoices in general (the blog: learn:/how-to-number-invoices-on-iphone).
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”) · learn:/how-to-number-invoices-on-iphone (“how to number invoices on iphone”)
- **Notes:** T8

#### /tools/discount-calculator

- **Key:** discount calculator · also: invoice discount calculator; percentage off calculator
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. A discount as a percentage or an amount, before or after tax, with the new total; explain early-payment discounts (e.g. 2/10 net 30).
- **Notes:** T8

#### /tools/markup-calculator

- **Key:** markup calculator · also: markup percentage calculator; price from cost
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Cost + markup % = price, and the margin that gives; the difference between markup and margin in plain words (link the margin calculator). Useful for parts and materials on trade invoices.
- **Notes:** T8

#### /tools/profit-margin-calculator

- **Key:** profit margin calculator · also: gross margin calculator
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Price and cost = margin % and profit; or cost and target margin = price. Link the markup calculator both ways.
- **Notes:** T8

#### /tools/deposit-calculator

- **Key:** deposit calculator · also: down payment calculator; deposit invoice amount
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). The deposit (% or amount) of a job total, the balance due, and both as invoice lines: the deposit invoice and the final invoice with the deposit subtracted, each one click into the generator. Link the deposit templates.
- **Notes:** new

#### /tools/retainage-calculator

- **Key:** retainage calculator · also: retention calculator construction
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Progress billing: contract value, % complete, previous payments and the retainage % = this invoice's amount and the retainage held. US construction term; English only. Link /templates/construction-progress-invoice.
- **Notes:** new

#### /tools/sales-tax-calculator

- **Key:** sales tax calculator · also: us sales tax calculator
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). US sales tax: amount + rate = tax and total; state base rates as presets (sourced, dated; local rates add on top, say so). English only (US topic). Link the VAT calculator for other countries.
- **Don't write about:** The VAT calculator (owned by /tools/vat-calculator).
- **Already covered (link, don't repeat):** learn:/what-does-an-invoice-tax-calculator-do (“what does an invoice tax calculator do”)
- **Notes:** new

#### /tools/vat-number-checker

- **Key:** eu vat number checker · also: vies vat check; validate vat number
- **Batch:** W2-B · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T5. Checks an EU VAT number with the European Commission's VIES service (and often returns the company name). Needs a small server proxy in invoicor_api with caching and rate limits (browsers can't call VIES directly): a decision first.
- **Notes:** T5, needs the API

## Country pages (English)

- **URL:** `/invoice-generator-{country}`, `/reverse-charge-invoice` · **Key:** "{country} VAT / GST / tax invoice (requirements)"
- **Blueprint:** [BLUEPRINTS.md](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · **Where it's written:** page code: a new page type (chunk 43)
- **Links to:** the VAT calculator, the free generator, the reverse-charge page (EU countries).
- **Languages:** **en-only** for English-speaking countries; other countries get a local page in their own language (next category).

**Can do:**

- What must be on an invoice in that country, each rule with its official source and the date checked, plus the free generator preset (currency, rate).
- Countries whose rules differ in ways that matter (VAT/GST numbers, thresholds, required wording) and whose currency the generator supports (the API's 38).

**Can't do:**

- Countries where a PDF invoice from Invoicor isn't a valid invoice (mandatory e-invoicing or certified software, e.g. Italy's SdI, Portugal's certified software, Poland's KSeF from 2026, Kenya's eTIMS): no page that sends people to make one here.
- Rules from memory: only what the official source says; rates change.
- The general "what goes on an invoice" (the blog owns it).

### Done (0): don't build these again

_None yet._

### Planned (10)

#### /invoice-generator-uk

- **Key:** uk vat invoice requirements · also: invoice generator uk; vat invoice template uk
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (new page type, chunk 43): the free generator preset for the UK (GBP, the VAT rates) plus the UK rules. What a VAT invoice must show, full vs simplified invoices (under £250), the VAT number, rates 20/5/0%, the tax point, invoicing when you're not VAT-registered (no VAT shown). Every rule with its source on gov.uk and the date checked.
- **Don't write about:** What every invoice includes in general (the blog: learn:/what-should-an-invoice-include); how to use the generator (/free-invoice-generator).
- **Notes:** GBP, 20/5/0% VAT, VAT number; replaces /guides/invoice-requirements-uk

#### /invoice-generator-ireland

- **Key:** vat invoice ireland · also: invoice template ireland; irish vat invoice requirements
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for Ireland (EUR, the VAT rates) plus what a VAT invoice must show per Revenue, the VAT number, rates (23/13.5/9/0%, check and date them), credit notes, not registered = no VAT. Sources: revenue.ie.
- **Don't write about:** General invoice fields (the blog); EU reverse charge (owned by /reverse-charge-invoice): one sentence and a link.
- **Notes:** EUR, 23/13.5/9% VAT

#### /invoice-generator-australia

- **Key:** tax invoice australia · also: abn invoice template; gst invoice australia
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for Australia (AUD, 10% GST) plus the ATO tax invoice rules: the ABN, the words 'tax invoice', GST shown, the extra buyer details from A$1,000, not registered for GST = an 'invoice', not a tax invoice. Sources: ato.gov.au, dated.
- **Don't write about:** General invoice fields (the blog).
- **Notes:** AUD, 10% GST, ABN

#### /invoice-generator-new-zealand

- **Key:** gst invoice nz · also: tax invoice nz; nz invoice template
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for New Zealand (NZD, 15% GST) plus the current IRD rules (since 2023 'taxable supply information' replaced the old tax invoice rules: check and explain), the GST number, thresholds. Sources: ird.govt.nz, dated.
- **Don't write about:** General invoice fields (the blog).
- **Notes:** NZD, 15% GST, GST number

#### /invoice-generator-canada

- **Key:** gst hst invoice canada · also: canada invoice template; invoice requirements canada
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for Canada (CAD) plus the GST/HST rules: the registration number, rates by province (GST 5%, HST provinces, PST and QST separate), the small-supplier threshold, the information required by invoice amount. The app applies one tax rate per invoice: explain how to show GST + PST honestly. Sources: canada.ca, dated.
- **Don't write about:** General invoice fields (the blog); the VAT calculator (/tools/vat-calculator).
- **Notes:** CAD, GST/HST/PST by province

#### /invoice-generator-south-africa

- **Key:** vat invoice south africa · also: tax invoice south africa; sars invoice requirements
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for South Africa (ZAR, 15% VAT) plus SARS tax invoice rules: full vs abridged tax invoices and their thresholds (check), the VAT number, the words 'tax invoice'. Sources: sars.gov.za, dated.
- **Don't write about:** General invoice fields (the blog).
- **Notes:** ZAR, 15% VAT

#### /reverse-charge-invoice

- **Key:** eu reverse charge invoice · also: vat reverse charge invoice; intra eu invoice
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): EU business-to-business invoices across borders: when the reverse charge applies (services and goods between VAT-registered businesses in different EU countries), both VAT numbers, no VAT charged, the reverse-charge note (VAT Directive art. 196), checking the client's VAT number in VIES. A generator preset with 0% and the note filled in. Sources: the EU's Your Europe pages, dated.
- **Don't write about:** Country VAT rates (owned by /tools/vat-calculator); the Irish rules (/invoice-generator-ireland).
- **Notes:** EU B2B: both VAT numbers + the reverse-charge note; chunk 43 called it /eu

#### /invoice-generator-singapore

- **Key:** gst invoice singapore · also: tax invoice singapore; iras invoice requirements
- **Batch:** W2-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset (SGD, 9% GST) plus IRAS tax invoice rules: the GST registration number, the words 'tax invoice', simplified tax invoices under the threshold, not registered = no GST. Sources: iras.gov.sg, dated.
- **Don't write about:** General invoice fields (the blog).

#### /invoice-generator-nigeria

- **Key:** vat invoice nigeria · also: invoice template nigeria; firs invoice requirements
- **Batch:** W2-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset (NGN, 7.5% VAT) plus what an invoice must show (TIN, VAT), the current e-invoicing plans of the tax authority (check: if e-invoicing becomes mandatory for a business size, say so plainly). Sources: the tax authority's site, dated.
- **Don't write about:** General invoice fields (the blog).

#### /invoice-generator-uae

- **Key:** tax invoice uae · also: vat invoice uae; fta invoice requirements
- **Batch:** W2-C · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset (AED, 5% VAT) plus FTA tax invoice rules: the TRN, the words 'tax invoice', simplified tax invoices, the coming e-invoicing rollout (check dates and say plainly whether a PDF still counts). Sources: tax.gov.ae, dated.
- **Don't write about:** General invoice fields (the blog).

## Local pages (in the country's own language)

- **URL:** `/{lang}/{local slug}` · **Key:** the country's own search words (e.g. "pflichtangaben rechnung", "factuureisen")
- **Blueprint:** [BLUEPRINTS.md](BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · **Where it's written:** page code under the language routes (chunk 43)
- **Links to:** the language's generator page and VAT calculator.
- **Languages:** **local**: only in its own language.

**Can do:**

- Written in the language from the start (rule R4): local invoice rules, small-business schemes, local wording and examples.
- Later: comparisons with that country's own rivals (HL9).

**Can't do:**

- Compete with that language's generator page: this is "what must be on it", the generator is "make one".
- Invite people to make a PDF invoice where the law requires e-invoicing (IT, PT, PL): those are on hold until the product supports it.

### Done (0): don't build these again

_None yet._

### Planned (10)

#### /de/rechnung-pflichtangaben

- **Key:** pflichtangaben rechnung · also: rechnung pflichtangaben; was muss auf eine rechnung
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** local (written in de)
- **Write about:** Written in German for German businesses (page code, chunk 43, under the de routes): the mandatory invoice details (§14 Abs. 4 UStG), small invoices up to €250 (§33 UStDV), Kleinunternehmer (§19 UStG) and the note to use, the e-invoicing obligation from 2025 and its transition rules (be honest: Invoicor makes PDF invoices; say when a PDF is still allowed for B2B, check and date). Sources: Gesetze im Internet, BMF, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /de/rechnung-erstellen): one sentence and a link. That page is 'make one', this page is 'what must be on it'.
- **Notes:** §14 UStG, Kleinunternehmer §19; replaces /guides/invoice-requirements-germany; next to /de/rechnung-erstellen, must not compete with it

#### /nl/factuureisen

- **Key:** factuureisen · also: wat moet er op een factuur; factuur eisen belastingdienst
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** local (written in nl)
- **Write about:** Written in Dutch for Dutch businesses (page code, chunk 43, under the nl routes): the Belastingdienst invoice requirements (factuureisen), the KvK number and btw-id, the KOR (small business scheme) and what to put on the invoice, 'btw verlegd', the 5-year/7-year retention rule. Sources: belastingdienst.nl, kvk.nl, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /nl/gratis-factuur-maken).
- **Notes:** btw-nummer, KvK, KOR; replaces /guides/invoice-requirements-netherlands

#### /fr/mentions-obligatoires-facture

- **Key:** mentions obligatoires facture · also: facture mentions légales; mentions facture auto-entrepreneur
- **Batch:** W1-C · **Intent:** country rules + generator preset · **Languages:** local (written in fr)
- **Write about:** Written in French for French businesses (page code, chunk 43, under the fr routes): the mandatory mentions (SIRET, TVA intracommunautaire, numbering, due date), 'TVA non applicable, art. 293 B du CGI' for micro-entrepreneurs, late-payment penalties and the €40 fixed compensation, the e-invoicing reform timetable (check and date). Sources: service-public.fr, economie.gouv.fr, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /fr/creer-une-facture).
- **Notes:** SIRET, TVA non applicable art. 293 B

#### /es/requisitos-factura

- **Key:** requisitos de una factura · also: datos obligatorios factura; que debe llevar una factura
- **Batch:** W2-C · **Intent:** country rules + generator preset · **Languages:** local (written in es)
- **Write about:** Written in Spanish for Spain (page code, chunk 43, es routes): the mandatory data (NIF, numbering, IVA, the Reglamento de facturación), simplified invoices, and the coming Verifactu and B2B e-invoice rules (check dates; say plainly when a PDF from a non-certified tool stops being enough). Sources: agenciatributaria.gob.es, BOE, dated.
- **Don't write about:** How to make an invoice (owned by /es/crear-factura).

#### /sv/vad-ska-sta-pa-en-faktura

- **Key:** vad ska stå på en faktura · also: fakturakrav; krav på faktura
- **Batch:** W2-C · **Intent:** country rules + generator preset · **Languages:** local (written in sv)
- **Write about:** Written in Swedish (page code, chunk 43, sv routes): Skatteverket's invoice requirements (momsregistreringsnummer, F-skatt, numbering, moms), simplified invoices, 'omvänd betalningsskyldighet'. Sources: skatteverket.se, dated.
- **Don't write about:** How to make an invoice (owned by /sv/skapa-faktura).

#### /da/krav-til-faktura

- **Key:** krav til faktura · also: hvad skal en faktura indeholde
- **Batch:** W2-C · **Intent:** country rules + generator preset · **Languages:** local (written in da)
- **Write about:** Written in Danish (page code, chunk 43, da routes): the invoice requirements (CVR number, numbering, moms), simplified invoices, and the bookkeeping law's rules on digital systems (check what applies to issuing invoices; hedge). Sources: skat.dk, erhvervsstyrelsen.dk, dated.
- **Don't write about:** How to make an invoice (owned by /da/lav-faktura).
- **Already covered (link, don't repeat):** /da (“faktura-app til iphone”)

#### /nb/krav-til-faktura

- **Key:** krav til faktura · also: hva skal stå på en faktura
- **Batch:** W2-C · **Intent:** country rules + generator preset · **Languages:** local (written in nb)
- **Write about:** Written in Norwegian Bokmål (page code, chunk 43, nb routes): bokføringsforskriften's requirements (organisasjonsnummer, 'MVA' after the number when registered, numbering, due date), EHF for the public sector (Invoicor doesn't send EHF: say so). Sources: skatteetaten.no, lovdata.no, dated.
- **Don't write about:** How to make an invoice (owned by /nb/lag-faktura).

#### /it/fattura-elementi-obbligatori

- **Key:** elementi obbligatori fattura · also: cosa deve contenere una fattura
- **Batch:** on hold: e-invoicing · **Intent:** country rules · **Languages:** local (written in it)
- **Write about:** On hold: in Italy invoices must be electronic and go through the SdI (fatturazione elettronica; nearly all businesses, incl. the regime forfettario since 2024). A PDF from Invoicor is only a courtesy copy, so the page can't send people to make one. Build only if the product supports it, or as a purely informational page with that said in the first paragraph.
- **Notes:** blocked by e-invoicing law

#### /pt/requisitos-fatura

- **Key:** requisitos de uma fatura · also: o que deve constar numa fatura
- **Batch:** on hold: e-invoicing · **Intent:** country rules · **Languages:** local (written in pt)
- **Write about:** On hold: in Portugal invoices must come from AT-certified software (with the ATCUD code and QR code), with few exceptions. A PDF from Invoicor doesn't meet that. Same rule as Italy.
- **Notes:** blocked by certified-software law

#### /pl/elementy-faktury

- **Key:** elementy faktury · also: co musi zawierać faktura
- **Batch:** on hold: e-invoicing · **Intent:** country rules · **Languages:** local (written in pl)
- **Write about:** On hold: Poland's KSeF makes structured e-invoices mandatory for businesses in 2026 (check the dates and any small-business exceptions). After that a PDF isn't a valid B2B invoice. Decide when the dates are clear.
- **Notes:** blocked by e-invoicing law

## Generators (other documents)

- **URL:** `/free-{document}-generator` · **Key:** "free {document} generator"
- **Blueprint:** [BLUEPRINTS.md](BLUEPRINTS.md#generator-free-invoice-generator-chunks-3035) · **Where it's written:** page code: a `document_type` in the web generator (chunk 44)
- **Links to:** the invoice generator, the matching blog explainer.
- **Languages:** **yes**, like the invoice generator.

**Can do:**

- Other business documents made in the browser like the invoice: receipt, estimate, proforma, credit note.
- Say plainly that the app itself makes invoices only.

**Can't do:**

- Separate pages for synonyms (quote = estimate: one page owns both keys).
- Fewer than 10 is right here: only documents a small business really sends.

### Done (1): don't build these again

`/free-invoice-generator` free invoice generator

### Planned (4)

#### /free-receipt-generator

- **Key:** free receipt generator
- **Batch:** later: needs code (44) · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a receipt mode in the web generator. The page says plainly that the app itself makes invoices, not receipts.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

#### /free-estimate-generator

- **Key:** free estimate generator
- **Batch:** later: needs code (44) · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): an estimate mode in the web generator. The page says plainly that the app has no estimates or quotes.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

#### /free-proforma-invoice-generator

- **Key:** proforma invoice generator · also: proforma invoice template
- **Batch:** later: needs code (44) · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a proforma mode in the web generator (the title 'Proforma invoice', 'not a tax invoice', no invoice number sequence). Explain when a proforma is used (prepayment, customs, quotes for imports). The app itself makes invoices only.
- **Don't write about:** What a proforma invoice is in depth (the blog topic what-is-a-proforma-invoice): link.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

#### /free-credit-note-generator

- **Key:** credit note generator · also: credit memo template; credit note template
- **Batch:** later: needs code (44) · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a credit note mode (refers to the original invoice number, negative amounts). The app has no credit notes: say so; in the app you cancel and duplicate.
- **Don't write about:** What a credit note is (the blog topic what-is-a-credit-note): link.

## Blog (learn.invoicor.com)

- **URL:** `https://learn.invoicor.com/{slug}` (a separate site; you publish there) · **Key:** a question people ask ("what is a proforma invoice")
- **Blueprint:** [BLUEPRINTS.md](BLUEPRINTS.md#guide-guidesslug-chunk-42) · **Where it's written:** the blog itself (not this repo); `npm run pages` picks new articles up from its sitemap
- **Links to:** one in-text link to invoicor.com per article (L2).
- **Languages:** **en-only** for now (a separate site).

**Can do:**

- Explain concepts and how-tos (what, why, how) with a link to the matching template, tool or generator.
- Own the general topics, so templates and tools don't have to repeat them.

**Can't do:**

- A second article on a topic the blog already has: 5 near-pairs exist already (PAGES.md); improve or merge.
- Trade-specific invoices (the templates own them) or app promises outside BRAND.md §10 (the fact check L1 found 129 such spots).

### Done (34): don't build these again

`learn:/how-to-use-an-invoice-maker-for-iphone` how to use an invoice maker for iphone · `learn:/how-to-create-an-invoice-on-iphone-in-seconds` how to create an invoice on iphone in seconds · `learn:/free-invoice-app-for-iphone-what-to-look-for` free invoice app for iphone what to look for · `learn:/how-pdf-invoice-templates-work-on-iphone` how pdf invoice templates work on iphone · `learn:/what-is-a-multi-currency-invoicing-app` what is a multi currency invoicing app · `learn:/how-a-tax-calculator-helps-when-creating-invoices` how a tax calculator helps when creating invoices · `learn:/how-to-share-an-invoice-pdf-from-iphone` how to share an invoice pdf from iphone · `learn:/what-makes-an-invoice-look-professional` what makes an invoice look professional · `learn:/invoice-creation-checklist-for-iphone-users` invoice creation checklist for iphone users · `learn:/what-is-an-invoice-maker` what is an invoice maker · `learn:/how-to-use-pdf-invoice-templates-on-iphone` how to use pdf invoice templates on iphone · `learn:/how-to-calculate-tax-on-an-invoice-in-the-app` how to calculate tax on an invoice in the app · `learn:/can-you-create-invoices-in-different-currencies` can you create invoices in different currencies · `learn:/how-auto-fill-helps-you-create-invoices-faster` how auto fill helps you create invoices faster · `learn:/how-to-share-invoices-instantly-from-iphone` how to share invoices instantly from iphone · `learn:/how-to-create-a-receipt-on-iphone-in-minutes` how to create a receipt on iphone in minutes · `learn:/how-to-send-an-invoice-from-iphone-by-email` how to send an invoice from iphone by email · `learn:/how-to-save-an-invoice-as-a-pdf-on-iphone` how to save an invoice as a pdf on iphone · `learn:/how-to-change-the-currency-on-an-invoice` how to change the currency on an invoice · `learn:/how-to-reuse-invoice-details-on-iphone` how to reuse invoice details on iphone · `learn:/how-to-number-invoices-on-iphone` how to number invoices on iphone · `learn:/what-should-an-invoice-include` what should an invoice include · `learn:/what-is-a-pdf-invoice` what is a pdf invoice · `learn:/what-does-auto-fill-mean-in-an-invoice-app` what does auto fill mean in an invoice app · `learn:/why-use-an-invoice-app-on-iphone` why use an invoice app on iphone · `learn:/what-does-an-invoice-tax-calculator-do` what does an invoice tax calculator do · `learn:/what-is-a-multi-currency-invoice` what is a multi currency invoice · `learn:/best-invoice-app-features-for-freelancers-on-iphone` best invoice app features for freelancers on iphone · `learn:/best-ways-to-send-invoices-from-iphone` best ways to send invoices from iphone · `learn:/best-invoice-template-styles-for-mobile-use` best invoice template styles for mobile use · `learn:/can-you-make-an-invoice-on-iphone-without-paper` can you make an invoice on iphone without paper · `learn:/can-you-edit-an-invoice-after-saving-it` can you edit an invoice after saving it · `learn:/can-you-send-an-invoice-as-a-pdf-from-iphone` can you send an invoice as a pdf from iphone · `learn:/do-you-need-to-fill-every-invoice-field` do you need to fill every invoice field

### Planned (12)

#### learn:/how-to-write-an-invoice

- **Key:** how to write an invoice
- **Batch:** blog topics (L4) · **Intent:** learn (how-to) · **Languages:** en-only
- **Write about:** Write on learn.invoicor.com (D16): a step-by-step how-to with a filled-in example and a link to the free generator.
- **Don't write about:** Check the blog articles in PAGES.md (learn.invoicor.com section) first; e.g. learn:/how-to-create-an-invoice-on-iphone-in-seconds is close.

#### learn:/what-to-include-on-an-invoice

- **Key:** what to include on an invoice
- **Batch:** blog topics (L4) · **Intent:** learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog, but learn:/what-should-an-invoice-include already covers it: improve that article instead of a new one.
- **Already covered (link, don't repeat):** learn:/what-should-an-invoice-include (“what should an invoice include”)

#### learn:/invoice-vs-receipt

- **Key:** invoice vs receipt
- **Batch:** blog topics (L4) · **Intent:** learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog: the difference, when to send which; honest that Invoicor makes invoices (mark as paid), not receipts.

#### learn:/invoice-payment-terms

- **Key:** invoice payment terms
- **Batch:** blog topics (L4) · **Intent:** learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog: Net 15/30/60, due on receipt, late fees, early-payment discounts, how to word them.

#### learn:/how-to-number-invoices

- **Key:** invoice numbering
- **Batch:** blog topics (L4) · **Intent:** learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog, but learn:/how-to-number-invoices-on-iphone exists: improve that article instead.

#### learn:/late-payment-email

- **Key:** late payment email template
- **Batch:** blog topics (L4) · **Intent:** learn (how-to) · **Languages:** en-only
- **Write about:** Write on the blog: friendly, firm and final reminder emails with templates; the app sends no reminders.

#### learn:/what-is-a-proforma-invoice

- **Key:** what is a proforma invoice · also: proforma invoice meaning; proforma vs invoice
- **Batch:** blog topics (L4) · **Intent:** learn · **Languages:** en-only
- **Write about:** The meaning, when it's used (prepayment, customs, imports), how it differs from an invoice and an estimate, an example; link the free generator.

#### learn:/what-is-a-credit-note

- **Key:** what is a credit note · also: credit note vs refund; credit memo
- **Batch:** blog topics (L4) · **Intent:** learn · **Languages:** en-only
- **Write about:** When you issue one (a mistake, a return, a discount after the fact), what it must show (the original invoice number), how it differs from a refund; honest: Invoicor has no credit notes, you cancel and duplicate.

#### learn:/what-does-net-30-mean

- **Key:** what does net 30 mean · also: net 30 payment terms; net 15 vs net 30
- **Batch:** blog topics (L4) · **Intent:** learn · **Languages:** en-only
- **Write about:** Net 30, Net 15, due on receipt and end-of-month terms explained, with dates worked out; link the due date calculator once it exists.
- **Don't write about:** Merge with the planned 'invoice payment terms' topic if both get written: one article.

#### learn:/how-to-invoice-as-a-freelancer

- **Key:** how to invoice as a freelancer · also: freelance invoice tips
- **Batch:** blog topics (L4) · **Intent:** learn · **Languages:** en-only
- **Write about:** From the first client to getting paid: what to put on the invoice, terms, deposits, chasing late payment; link the trade templates for freelancers (design, copywriting, web, VA).

#### learn:/what-to-do-when-a-client-doesnt-pay

- **Key:** what to do when a client doesnt pay · also: unpaid invoice what to do; client not paying invoice
- **Batch:** blog topics (L4) · **Intent:** learn · **Languages:** en-only
- **Write about:** Steps: check the invoice, reminders (friendly, firm, final), late fees and statutory interest (link the calculator), small claims; hedged by country. The app sends no reminders.
- **Don't write about:** The reminder email templates (the late-payment-email topic): link.

#### learn:/how-to-charge-a-deposit

- **Key:** how to charge a deposit · also: asking clients for a deposit; deposit invoice
- **Batch:** blog topics (L4) · **Intent:** learn · **Languages:** en-only
- **Write about:** Why and how much, what the contract says, the deposit invoice and the final invoice; link the deposit templates per trade and the deposit calculator.
- **Don't write about:** Trade-specific deposits (owned by the billing-type templates, e.g. /templates/photography-deposit-invoice).

## Core pages, hubs, trust and legal

- **URL:** fixed pages · **Key:** one each
- **Blueprint:** [BLUEPRINTS.md](BLUEPRINTS.md#about-contact-help-affiliate-legal) · **Where it's written:** page code
- **Links to:** nav and footer.
- **Languages:** per page: home, generator, tools, help, Android are in 11 languages; templates and industries hubs follow H4; legal later (HL7).

**Can do:**

- One page per purpose; hubs list every page of their collection by themselves.

**Can't do:**

- More of them: these are single pages, so no 10 here.
- Word, Excel, Google Docs template pages until we really offer the files (on hold).

### Done (9): don't build these again

`/` invoice app iphone · `/templates` invoice templates · `/industries` invoicing software by industry · `/compare` invoice app alternatives · `/help` invoicor help · `/affiliate` invoicor affiliate program · `/terms` invoicor terms of service · `/privacy` invoicor privacy policy · `/android` invoicor for android: coming soon

### Planned (6)

#### /about

- **Key:** about invoicor
- **Batch:** later: trust pages (24) · **Intent:** brand / trust · **Languages:** yes
- **Write about:** Who makes Invoicor and why, where the data lives (servers in Germany), how to reach us; facts only, no invented team size or numbers.
- **Notes:** E-E-A-T

#### /contact

- **Key:** contact invoicor
- **Batch:** later: trust pages (24) · **Intent:** brand / trust · **Languages:** yes
- **Write about:** How to reach the team: email and in-app feedback, read by the team, replies can take a few days (BRAND.md §10: no live chat, no phone, no response-time promise).
- **Notes:** E-E-A-T

#### /templates/invoice-template-word

- **Key:** invoice template word
- **Batch:** on hold: file downloads (53) · **Intent:** download · **Languages:** en-only
- **Write about:** On hold: we don't offer a Word download (S1-n). Only build this when there's a real .docx file to download (chunk 53).
- **Notes:** Big-volume quick wins

#### /templates/invoice-template-excel

- **Key:** invoice template excel
- **Batch:** on hold: file downloads (53) · **Intent:** download · **Languages:** en-only
- **Write about:** On hold: we don't offer an Excel download (S1-n). Only with a real .xlsx file (chunk 53).
- **Notes:** Big-volume quick wins

#### /templates/invoice-template-google-docs

- **Key:** invoice template google docs
- **Batch:** on hold: file downloads (53) · **Intent:** download · **Languages:** en-only
- **Write about:** On hold: needs a real Google Docs copy link (chunk 53).
- **Notes:** Big-volume quick wins

#### /templates/invoice-template-pdf

- **Key:** invoice template pdf
- **Batch:** on hold: file downloads (53) · **Intent:** download · **Languages:** en-only
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
