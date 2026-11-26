# Page plan: the road to 4,000 pages

> **Generated, don't edit by hand.** The to-do list: chunks give the order, and every item is
> listed under its category with its pages below it. Each item is ~20 pages of one category; each translated item also has one language item per language (e.g. `1B-de`). Boxes
> tick themselves when the pages are live. The briefs per page are in [plan/](plan/) (one file
> per category, with its direction: what its pages can and can't do, and what's already done).
> What exists today: [PAGES.md](PAGES.md). Plan data: [keyword-map.csv](keyword-map.csv)
> (`item`, `brief`, `avoid`); chunks: `scripts/pages-chunks.mjs`; categories:
> `scripts/pages-categories.mjs`. After any change: `npm run pages`.

**241 / 4,000 pages live** (6%) · next: **chunk 1**

## How to run an item

Say which items: "do 1B", or "do 1B, 1B-de, 1B-es". Then, per item:

1. **English item (e.g. 1B):** first the demand gate (rules below): park the pages nobody
   searches for. Then, for each page listed under the item, read its brief (the link) and
   its category's direction in the same file, the blueprint, and the fact sheet
   [BRAND.md §10](../BRAND.md). Use one live page of the same type as the model. Write them all,
   then: `npm run content:check` → `npm run build` → `npm run pages` → `npm run check`. Update
   ROADMAP.md; one commit per item.
2. **Language item (e.g. 1B-de):** the item's pages written for that language's country, not
   translated word for word: local search words in the slug and title, local prices, currency,
   number format, tax words and rules (the language table below). Needs task 1A done first.
   The same checks; each version links to its English page (hreflang). A page with no local
   search or a trade that works differently there (a notary in Germany is a state office with
   fixed fees) gets a `parked` row in that language (`translation_of` = the English URL, the
   reason in `notes`): skipped, not translated anyway.
3. **Task (e.g. 1A):** code work, no pages. Tick it in `scripts/pages-chunks.mjs` (`done: true`).
4. **Between chunks:** wait 2–3 weeks after a deploy and check in Search Console how many of the
   new pages got indexed. A page type under ~50% indexed after 4 weeks: stop and improve it first.

## Rules for every page

- Same fields and depth as the live pages of that type; about 900–1,200 words of real, specific
  text (the trade's jobs, units, materials, terms, billing habits). Title ≤ 60 characters ending in
  `| Invoicor`, meta description ≤ 155, the key in the H1. No sentence copied from another page.
- Sample invoices: realistic prices, correct math (qty × rate, subtotal, tax, balance), a stated and
  hedged tax situation ("tax rules vary").
- Only claims the app backs up (BRAND.md §10). No estimates or quotes, no recurring or scheduled
  invoices, no reminders, no photo attachments, no deposit or partial-payment tracking, no time
  tracking, no offline use, one tax rate per invoice. Repeat work = duplicate the last invoice and
  change the date. A deposit = its own invoice, then a negative line or a note on the final invoice.
- At most one "Can Invoicor do X? No." FAQ per page; spend the FAQs on the trade's own questions.
- Legal and tax points hedged ("check your state's rule") unless the brief gives a sourced fact; a
  specific law only with its source and the date checked.
- Link the trade's pages both ways (template ↔ industry ↔ billing types); 2 `related` per page.
- Never build a page that's in a category's **Done** list or whose key is taken
  (`npm run pages -- --check "<key>"`): improve that page instead.
- **Demand first (the gate):** before writing, find evidence that people search for the page's
  key: Search Console queries, Google's autocomplete and "People also ask", or a keyword tool.
  No evidence: don't write it. Set its `status` to `parked` with the reason in `notes`. The item
  is done without it, and the key stays reserved so nobody plans it again.
- **Value of its own:** a page must answer something its neighbours don't. If the honest content
  is mostly the parent page with other nouns (a trade's billing type, a niche trade's app page),
  park it and improve the parent instead. 4,000 pages is a direction, not a quota: Google's
  scaled-content policy judges value per page, and weak pages pull the whole site down.
- **Release in waves:** at most ~150 new URLs per deploy, then watch indexing per page type in
  Search Console (sitemap per type, task 1A).

## Rules for language items

- Written for the country, by local search words (research them first), not word for word.
- The slug, title, H1 and examples in that language; prices and currency of that market.
- Never claim the app's screens are in that language (they're English); say "invoices in your
  language".
- The e-invoicing warnings below are part of the page where they apply (first paragraph).
- German first (it already gets clicks); Italian, Portuguese and Polish last (e-invoicing).

| Lang | Markets | Money | Tax words | Watch out |
|---|---|---|---|---|
| de German | Germany, Austria, Switzerland | EUR (CHF in Switzerland) | USt / MwSt; Kleinunternehmer (§19 UStG) note | B2B e-invoicing in Germany: receiving since 2025, sending phased in 2027–2028; say when a PDF is still fine. |
| es Spanish | Spain first; Latin America only with care | EUR | IVA; NIF | Spain: Verifactu and B2B e-invoicing are coming (check dates). Mexico (CFDI) and most of Latin America require electronic invoices: don't present a PDF as a valid invoice there. |
| fr French | France, Belgium (FR), Switzerland (FR) | EUR (CHF) | TVA; 'TVA non applicable, art. 293 B du CGI' for micro-entrepreneurs | France: B2B e-invoicing from 2026–2027 (check dates). |
| nl Dutch | Netherlands, Belgium (NL) | EUR | btw; KOR; KvK number; 'btw verlegd' | Belgium: B2B e-invoicing from 2026 (Peppol): say so on Belgian examples. |
| sv Swedish | Sweden | SEK | moms; F-skatt; momsregistreringsnummer | Public sector needs Peppol e-invoices. |
| da Danish | Denmark | DKK | moms; CVR number | Public sector needs e-invoices (NemHandel/OIOUBL); the bookkeeping law sets rules for digital systems (hedge). |
| nb Norwegian (Bokmål) | Norway | NOK | MVA; organisasjonsnummer + 'MVA' | Public sector needs EHF; Invoicor doesn't send EHF. |
| it Italian | Italy, Switzerland (IT) | EUR | IVA; partita IVA | Italy: invoices must be electronic via the SdI; a PDF is only a courtesy copy. Every Italian page says so in the first paragraph and never sends people to make a 'valid invoice' as a PDF. |
| pt Portuguese | Portugal (PT-PT); Brazil only with care | EUR | IVA; NIF | Portugal: invoices must come from AT-certified software; Brazil: NF-e/NFS-e electronic invoices. Say so plainly; a PDF from Invoicor isn't a valid invoice there. |
| pl Polish | Poland | PLN | VAT; NIP | Poland: KSeF structured e-invoices become mandatory in 2026 (check dates); after that a PDF isn't a valid B2B invoice. |

## Rules for new chunks

So the plan can keep growing (the goal of 4,000 can move up or down with the results):

- **One item = 15–25 pages of one category**, the size one run builds well. 3–5 English items per
  chunk, from different categories.
- **Languages in the same chunk:** every item whose pages are `yes` gets its 10 language items in
  the chunk; older pages' language versions are spread over the next chunks.
- **New page ideas** must fit a category's direction ([plan/](plan/)), pass the key check, and get
  a brief (`brief`) and what not to repeat (`avoid`) before they get an `item`.
- **Proven types first:** a new page type (a new category) starts with one item of ≤ 10 pages and
  grows only after it indexes.
- **Parents before children:** the general page ("deposit invoice") comes before or with its
  specific ones ("photography deposit invoice"), and the children link up to it.
- **Bigger searches first:** a new trade or topic must be a search of its own, not a sub-niche or a
  synonym of a planned one. Order items by expected demand, not by category.
- **Re-plan after each chunk** with Search Console data: more of what ranks, less of what doesn't.

## Chunks

The order to build in. Every item is listed with its pages under its category (next section).

| Chunk | What | Items | New English/local pages | Language pages to write | Total when done |
|---|---|---|---|---|---|
| 0 | Built so far (English) | [0A](#0a-trade-templates-first-20) [0B](#0b-industry-pages-first-20) [0C](#0c-compare-pages-english-only) [0D](#0d-trade-templates-2135-batch-a) [0E](#0e-trade-templates-3650-batch-a) [0F](#0f-industry-pages-2132-batch-a) [0G](#0g-industry-pages-3343-batch-a) | built | 0 | 241 |
| 1 | Foundation: languages for templates, billing types, tools, countries | 1A [1B](#1b-billing-type-templates-i) [1C](#1c-10-trades-templates--industry-pages) [1D](#1d-free-tools-i-needs-code) [1E](#1e-country-pages-i-needs-code-the-country-page-type) [1F](#1f-invoice-types-the-general-documents) [1G](#1g-trust-pages-e-e-a-t-whos-behind-the-site) | 83 | 1040 | 1,364 |
| 2 | Home and property trades, compares, more countries | [2A](#2a-20-trade-templates-home-and-property-services) [2B](#2b-20-industry-pages-the-same-trades) [2C](#2c-20-compares-english-only) [2D](#2d-country-pages-ii) 2E | 70 | 710 | 2,144 |
| 3 | Billing types II, makers and transport, local rivals | [3A](#3a-billing-type-templates-ii) [3B](#3b-20-trade-templates-makers-repair-transport-events) [3C](#3c-20-industry-pages-the-same-trades) [3D](#3d-20-local-compares-in-their-own-language-hl9) | 80 | 830 | 3,054 |
| 4 | Tools II and generators, professional and wellness trades | [4A](#4a-free-tools-ii--document-generators-needs-code) [4B](#4b-20-trade-templates-professional-wellness-care) [4C](#4c-20-industry-pages-the-same-trades) [4D](#4d-billing-type-templates-iii) | 73 | 690 | 3,817 |
| 5 | Beauty, creative and specialist trades | [5A](#5a-20-trade-templates-beauty-creative-specialist) [5B](#5b-20-industry-pages-the-same-trades) | 40 | 400 | 4,257 |
| 6 | Pricing calculators, more trades, Europe in English, local tax rules | [6A](#6a-20-pricing-calculators-for-trades-needs-code-one-calculator-engine-a-config-per-trade) [6B](#6b-16-trades-with-their-own-demand--4-industry-pages) [6C](#6c-european-countries-in-english-for-foreign-freelancers) [6D](#6d-local-tax-rules-in-their-own-language-no-english-parent) | 55 | 400 | 4,712 |

## Tasks (code, no pages)

- [ ] **1A** (chunk 1) Language setup for templates and industry pages (roadmap H4): Code, no pages: the template and industry page labels in 11 languages, `content/{locale}/templates.json` and `industries.json`, local slugs per language in the route table, hreflang between the versions, the language switcher, the hubs per language, and the sitemap split per page type (a sitemap index, so Search Console shows indexing per type: needed for the indexing check between chunks). Every language item below waits for this.
- [ ] **2E** (chunk 2) Hubs at scale: Code, no pages: with 150+ templates the hubs need groups (home services, trades, creative, professional, invoice types, billing types) with anchors and a short intro each, so every page is at most 2 clicks from its hub and the hub stays useful to read. No thin sub-hub URLs: groups are sections of the one hub.

## Items per category

Each item with its pages below it. Language items in this order: de, es, fr, nl, sv, da, nb, it, pt, pl.

### Trade templates

Direction and briefs: [plan/templates.md](plan/templates.md)

#### 0A: Trade templates, first 20

- [x] **0A** · chunk 0 · 20/20 live

**Languages** (chunk 1): [ ] 0A-de 0/20 · [ ] 0A-es 0/20 · [ ] 0A-fr 0/20 · [ ] 0A-nl 0/20 · [ ] 0A-sv 0/20 · [ ] 0A-da 0/20 · [ ] 0A-nb 0/20 · [ ] 0A-it 0/20 · [ ] 0A-pt 0/20 · [ ] 0A-pl 0/20

#### 0D: Trade templates 21–35 (batch A)

- [x] **0D** · chunk 0 · 15/15 live

**Languages** (chunk 2): [ ] 0D-de 0/15 · [ ] 0D-es 0/15 · [ ] 0D-fr 0/15 · [ ] 0D-nl 0/15 · [ ] 0D-sv 0/15 · [ ] 0D-da 0/15 · [ ] 0D-nb 0/15 · [ ] 0D-it 0/15 · [ ] 0D-pt 0/15 · [ ] 0D-pl 0/15

#### 0E: Trade templates 36–50 (batch A)

- [x] **0E** · chunk 0 · 15/15 live

**Languages** (chunk 2): [ ] 0E-de 0/15 · [ ] 0E-es 0/15 · [ ] 0E-fr 0/15 · [ ] 0E-nl 0/15 · [ ] 0E-sv 0/15 · [ ] 0E-da 0/15 · [ ] 0E-nb 0/15 · [ ] 0E-it 0/15 · [ ] 0E-pt 0/15 · [ ] 0E-pl 0/15

#### 1C: 10 trades: templates + industry pages

- [ ] **1C** · chunk 1 · 0/10 live

- [ ] [/templates/notary](plan/templates.md#templatesnotary) notary invoice template
- [ ] [/templates/home-inspection](plan/templates.md#templateshome-inspection) home inspection invoice template
- [ ] [/templates/it-services](plan/templates.md#templatesit-services) it services invoice template
- [ ] [/templates/drone-services](plan/templates.md#templatesdrone-services) drone services invoice template
- [ ] [/templates/tattoo](plan/templates.md#templatestattoo) tattoo invoice template
- [ ] [/templates/personal-chef](plan/templates.md#templatespersonal-chef) personal chef invoice template
- [ ] [/templates/bakery](plan/templates.md#templatesbakery) bakery invoice template
- [ ] [/templates/dog-training](plan/templates.md#templatesdog-training) dog training invoice template
- [ ] [/templates/musician](plan/templates.md#templatesmusician) musician invoice template
- [ ] [/templates/voice-over](plan/templates.md#templatesvoice-over) voice over invoice template

**Languages** (chunk 1): [ ] 1C-de 0/9 · [ ] 1C-es 0/9 · [ ] 1C-fr 0/9 · [ ] 1C-nl 0/9 · [ ] 1C-sv 0/9 · [ ] 1C-da 0/9 · [ ] 1C-nb 0/9 · [ ] 1C-it 0/9 · [ ] 1C-pt 0/9 · [ ] 1C-pl 0/9

#### 2A: 20 trade templates: home and property services

- [ ] **2A** · chunk 2 · 0/20 live

- [ ] [/templates/chimney-sweep](plan/templates.md#templateschimney-sweep) chimney sweep invoice template
- [ ] [/templates/gutter-cleaning](plan/templates.md#templatesgutter-cleaning) gutter cleaning invoice template
- [ ] [/templates/septic-service](plan/templates.md#templatesseptic-service) septic pumping invoice template
- [ ] [/templates/irrigation](plan/templates.md#templatesirrigation) irrigation invoice template
- [ ] [/templates/deck-building](plan/templates.md#templatesdeck-building) deck building invoice template
- [ ] [/templates/cabinet-installation](plan/templates.md#templatescabinet-installation) cabinet installation invoice template
- [ ] [/templates/countertop-installation](plan/templates.md#templatescountertop-installation) countertop installation invoice template
- [ ] [/templates/insulation](plan/templates.md#templatesinsulation) insulation invoice template
- [ ] [/templates/siding](plan/templates.md#templatessiding) siding installation invoice template
- [ ] [/templates/window-installation](plan/templates.md#templateswindow-installation) window installation invoice template
- [ ] [/templates/asphalt-paving](plan/templates.md#templatesasphalt-paving) asphalt paving invoice template
- [ ] [/templates/excavation](plan/templates.md#templatesexcavation) excavation invoice template
- [ ] [/templates/demolition](plan/templates.md#templatesdemolition) demolition invoice template
- [ ] [/templates/solar-installation](plan/templates.md#templatessolar-installation) solar installation invoice template
- [ ] [/templates/home-staging](plan/templates.md#templateshome-staging) home staging invoice template
- [ ] [/templates/security-system-installation](plan/templates.md#templatessecurity-system-installation) security system installation invoice template
- [ ] [/templates/home-theater-installation](plan/templates.md#templateshome-theater-installation) home theater installation invoice template
- [ ] [/templates/mold-remediation](plan/templates.md#templatesmold-remediation) mold remediation invoice template
- [ ] [/templates/water-damage-restoration](plan/templates.md#templateswater-damage-restoration) water damage restoration invoice template
- [ ] [/templates/air-duct-cleaning](plan/templates.md#templatesair-duct-cleaning) air duct cleaning invoice template

**Languages** (chunk 2): [ ] 2A-de 0/20 · [ ] 2A-es 0/20 · [ ] 2A-fr 0/20 · [ ] 2A-nl 0/20 · [ ] 2A-sv 0/20 · [ ] 2A-da 0/20 · [ ] 2A-nb 0/20 · [ ] 2A-it 0/20 · [ ] 2A-pt 0/20 · [ ] 2A-pl 0/20

#### 3B: 20 trade templates: makers, repair, transport, events

- [ ] **3B** · chunk 3 · 0/20 live

- [ ] [/templates/welding](plan/templates.md#templateswelding) welding invoice template
- [ ] [/templates/sign-making](plan/templates.md#templatessign-making) sign invoice template
- [ ] [/templates/screen-printing](plan/templates.md#templatesscreen-printing) screen printing invoice template
- [ ] [/templates/embroidery](plan/templates.md#templatesembroidery) embroidery invoice template
- [ ] [/templates/alterations](plan/templates.md#templatesalterations) alterations invoice template
- [ ] [/templates/jewelry-repair](plan/templates.md#templatesjewelry-repair) jewelry repair invoice template
- [ ] [/templates/bike-repair](plan/templates.md#templatesbike-repair) bike repair invoice template
- [ ] [/templates/small-engine-repair](plan/templates.md#templatessmall-engine-repair) small engine repair invoice template
- [ ] [/templates/boat-repair](plan/templates.md#templatesboat-repair) boat repair invoice template
- [ ] [/templates/rv-repair](plan/templates.md#templatesrv-repair) rv repair invoice template
- [ ] [/templates/towing](plan/templates.md#templatestowing) towing invoice template
- [ ] [/templates/courier](plan/templates.md#templatescourier) courier invoice template
- [ ] [/templates/trucking](plan/templates.md#templatestrucking) trucking invoice template
- [ ] [/templates/limousine-service](plan/templates.md#templateslimousine-service) limousine service invoice template
- [ ] [/templates/photo-booth-rental](plan/templates.md#templatesphoto-booth-rental) photo booth rental invoice template
- [ ] [/templates/party-rentals](plan/templates.md#templatesparty-rentals) party rental invoice template
- [ ] [/templates/wedding-officiant](plan/templates.md#templateswedding-officiant) wedding officiant invoice template
- [ ] [/templates/illustration](plan/templates.md#templatesillustration) illustration invoice template
- [ ] [/templates/video-editing](plan/templates.md#templatesvideo-editing) video editing invoice template
- [ ] [/templates/podcast-production](plan/templates.md#templatespodcast-production) podcast production invoice template

**Languages** (chunk 3): [ ] 3B-de 0/20 · [ ] 3B-es 0/20 · [ ] 3B-fr 0/20 · [ ] 3B-nl 0/20 · [ ] 3B-sv 0/20 · [ ] 3B-da 0/20 · [ ] 3B-nb 0/20 · [ ] 3B-it 0/20 · [ ] 3B-pt 0/20 · [ ] 3B-pl 0/20

#### 4B: 20 trade templates: professional, wellness, care

- [ ] **4B** · chunk 4 · 0/20 live

- [ ] [/templates/seo-services](plan/templates.md#templatesseo-services) seo invoice template
- [ ] [/templates/marketing-agency](plan/templates.md#templatesmarketing-agency) marketing agency invoice template
- [ ] [/templates/ux-design](plan/templates.md#templatesux-design) ux design invoice template
- [ ] [/templates/app-development](plan/templates.md#templatesapp-development) app development invoice template
- [ ] [/templates/data-analysis](plan/templates.md#templatesdata-analysis) data analysis invoice template
- [ ] [/templates/tax-preparation](plan/templates.md#templatestax-preparation) tax preparation invoice template
- [ ] [/templates/attorney](plan/templates.md#templatesattorney) attorney invoice template
- [ ] [/templates/property-management](plan/templates.md#templatesproperty-management) property management invoice template
- [ ] [/templates/rent](plan/templates.md#templatesrent) rent invoice template
- [ ] [/templates/security-guard](plan/templates.md#templatessecurity-guard) security guard invoice template
- [ ] [/templates/therapy](plan/templates.md#templatestherapy) therapist invoice template
- [ ] [/templates/nutrition](plan/templates.md#templatesnutrition) nutritionist invoice template
- [ ] [/templates/yoga](plan/templates.md#templatesyoga) yoga instructor invoice template
- [ ] [/templates/dance-lessons](plan/templates.md#templatesdance-lessons) dance teacher invoice template
- [ ] [/templates/swim-lessons](plan/templates.md#templatesswim-lessons) swim lessons invoice template
- [ ] [/templates/sports-coaching](plan/templates.md#templatessports-coaching) sports coach invoice template
- [ ] [/templates/babysitting](plan/templates.md#templatesbabysitting) babysitting invoice template
- [ ] [/templates/caregiving](plan/templates.md#templatescaregiving) caregiver invoice template
- [ ] [/templates/doula](plan/templates.md#templatesdoula) doula invoice template
- [ ] [/templates/barber](plan/templates.md#templatesbarber) barber invoice template

**Languages** (chunk 4): [ ] 4B-de 0/19 · [ ] 4B-es 0/19 · [ ] 4B-fr 0/19 · [ ] 4B-nl 0/19 · [ ] 4B-sv 0/19 · [ ] 4B-da 0/19 · [ ] 4B-nb 0/19 · [ ] 4B-it 0/19 · [ ] 4B-pt 0/19 · [ ] 4B-pl 0/19

#### 5A: 20 trade templates: beauty, creative, specialist

- [ ] **5A** · chunk 5 · 0/20 live

- [ ] [/templates/nail-technician](plan/templates.md#templatesnail-technician) nail technician invoice template
- [ ] [/templates/esthetician](plan/templates.md#templatesesthetician) esthetician invoice template
- [ ] [/templates/lash-extensions](plan/templates.md#templateslash-extensions) lash tech invoice template
- [ ] [/templates/art-commission](plan/templates.md#templatesart-commission) art commission invoice template
- [ ] [/templates/music-production](plan/templates.md#templatesmusic-production) music producer invoice template
- [ ] [/templates/recording-studio](plan/templates.md#templatesrecording-studio) recording studio invoice template
- [ ] [/templates/sound-engineering](plan/templates.md#templatessound-engineering) sound engineer invoice template
- [ ] [/templates/content-creator](plan/templates.md#templatescontent-creator) content creator invoice template
- [ ] [/templates/proofreading](plan/templates.md#templatesproofreading) proofreading invoice template
- [ ] [/templates/driving-instructor](plan/templates.md#templatesdriving-instructor) driving instructor invoice template
- [ ] [/templates/farm](plan/templates.md#templatesfarm) farm invoice template
- [ ] [/templates/print-shop](plan/templates.md#templatesprint-shop) print shop invoice template
- [ ] [/templates/3d-printing](plan/templates.md#templates3d-printing) 3d printing invoice template
- [ ] [/templates/laser-engraving](plan/templates.md#templateslaser-engraving) laser engraving invoice template
- [ ] [/templates/custom-furniture](plan/templates.md#templatescustom-furniture) custom furniture invoice template
- [ ] [/templates/glazier](plan/templates.md#templatesglazier) glass repair invoice template
- [ ] [/templates/wildlife-removal](plan/templates.md#templateswildlife-removal) wildlife removal invoice template
- [ ] [/templates/aquarium-maintenance](plan/templates.md#templatesaquarium-maintenance) aquarium maintenance invoice template
- [ ] [/templates/land-surveying](plan/templates.md#templatesland-surveying) land surveying invoice template
- [ ] [/templates/professional-organizing](plan/templates.md#templatesprofessional-organizing) professional organizer invoice template

**Languages** (chunk 5): [ ] 5A-de 0/20 · [ ] 5A-es 0/20 · [ ] 5A-fr 0/20 · [ ] 5A-nl 0/20 · [ ] 5A-sv 0/20 · [ ] 5A-da 0/20 · [ ] 5A-nb 0/20 · [ ] 5A-it 0/20 · [ ] 5A-pt 0/20 · [ ] 5A-pl 0/20

#### 6B: 16 trades with their own demand + 4 industry pages

- [ ] **6B** · chunk 6 · 0/16 live

- [ ] [/templates/auto-repair](plan/templates.md#templatesauto-repair) auto repair invoice template
- [ ] [/templates/auto-body](plan/templates.md#templatesauto-body) auto body invoice template
- [ ] [/templates/dog-grooming](plan/templates.md#templatesdog-grooming) dog grooming invoice template
- [ ] [/templates/hair-salon](plan/templates.md#templateshair-salon) hair salon invoice template
- [ ] [/templates/architect](plan/templates.md#templatesarchitect) architect invoice template
- [ ] [/templates/real-estate](plan/templates.md#templatesreal-estate) real estate invoice template
- [ ] [/templates/equipment-rental](plan/templates.md#templatesequipment-rental) equipment rental invoice template
- [ ] [/templates/private-investigator](plan/templates.md#templatesprivate-investigator) private investigator invoice template
- [ ] [/templates/phone-repair](plan/templates.md#templatesphone-repair) phone repair invoice template
- [ ] [/templates/furniture-assembly](plan/templates.md#templatesfurniture-assembly) furniture assembly invoice template
- [ ] [/templates/upholstery](plan/templates.md#templatesupholstery) upholstery invoice template
- [ ] [/templates/life-coaching](plan/templates.md#templateslife-coaching) life coach invoice template
- [ ] [/templates/bartending](plan/templates.md#templatesbartending) bartending invoice template
- [ ] [/templates/plastering](plan/templates.md#templatesplastering) plastering invoice template
- [ ] [/templates/concrete](plan/templates.md#templatesconcrete) concrete invoice template
- [ ] [/templates/event-venue](plan/templates.md#templatesevent-venue) event venue invoice template

**Languages** (chunk 6): [ ] 6B-de 0/16 · [ ] 6B-es 0/16 · [ ] 6B-fr 0/16 · [ ] 6B-nl 0/16 · [ ] 6B-sv 0/16 · [ ] 6B-da 0/16 · [ ] 6B-nb 0/16 · [ ] 6B-it 0/16 · [ ] 6B-pt 0/16 · [ ] 6B-pl 0/16

### Billing-type templates

Direction and briefs: [plan/billing.md](plan/billing.md)

#### 1B: Billing-type templates I

- [ ] **1B** · chunk 1 · 0/20 live

- [ ] [/templates/photography-deposit-invoice](plan/billing.md#templatesphotography-deposit-invoice) photography deposit invoice
- [ ] [/templates/catering-deposit-invoice](plan/billing.md#templatescatering-deposit-invoice) catering deposit invoice
- [ ] [/templates/contractor-deposit-invoice](plan/billing.md#templatescontractor-deposit-invoice) contractor deposit invoice
- [ ] [/templates/roofing-deposit-invoice](plan/billing.md#templatesroofing-deposit-invoice) roofing deposit invoice
- [ ] [/templates/painting-deposit-invoice](plan/billing.md#templatespainting-deposit-invoice) painting deposit invoice
- [ ] [/templates/dj-deposit-invoice](plan/billing.md#templatesdj-deposit-invoice) dj deposit invoice
- [ ] [/templates/construction-progress-invoice](plan/billing.md#templatesconstruction-progress-invoice) construction progress invoice
- [ ] [/templates/web-development-milestone-invoice](plan/billing.md#templatesweb-development-milestone-invoice) web development milestone invoice
- [ ] [/templates/video-production-milestone-invoice](plan/billing.md#templatesvideo-production-milestone-invoice) video production milestone invoice
- [ ] [/templates/consulting-hourly-invoice](plan/billing.md#templatesconsulting-hourly-invoice) consulting hourly invoice
- [ ] [/templates/virtual-assistant-hourly-invoice](plan/billing.md#templatesvirtual-assistant-hourly-invoice) virtual assistant hourly invoice
- [ ] [/templates/handyman-hourly-invoice](plan/billing.md#templateshandyman-hourly-invoice) handyman hourly invoice
- [ ] [/templates/bookkeeping-hourly-invoice](plan/billing.md#templatesbookkeeping-hourly-invoice) bookkeeping hourly invoice
- [ ] [/templates/plumbing-labor-and-materials-invoice](plan/billing.md#templatesplumbing-labor-and-materials-invoice) plumbing labor and materials invoice
- [ ] [/templates/electrical-labor-and-materials-invoice](plan/billing.md#templateselectrical-labor-and-materials-invoice) electrical labor and materials invoice
- [ ] [/templates/hvac-labor-and-materials-invoice](plan/billing.md#templateshvac-labor-and-materials-invoice) hvac labor and materials invoice
- [ ] [/templates/landscaping-labor-and-materials-invoice](plan/billing.md#templateslandscaping-labor-and-materials-invoice) landscaping labor and materials invoice
- [ ] [/templates/consulting-retainer-invoice](plan/billing.md#templatesconsulting-retainer-invoice) consulting retainer invoice
- [ ] [/templates/social-media-retainer-invoice](plan/billing.md#templatessocial-media-retainer-invoice) social media retainer invoice
- [ ] [/templates/web-development-retainer-invoice](plan/billing.md#templatesweb-development-retainer-invoice) website maintenance retainer invoice

**Languages** (chunk 1): [ ] 1B-de 0/20 · [ ] 1B-es 0/20 · [ ] 1B-fr 0/20 · [ ] 1B-nl 0/20 · [ ] 1B-sv 0/20 · [ ] 1B-da 0/20 · [ ] 1B-nb 0/20 · [ ] 1B-it 0/20 · [ ] 1B-pt 0/20 · [ ] 1B-pl 0/20

#### 3A: Billing-type templates II

- [ ] **3A** · chunk 3 · 0/20 live

- [ ] [/templates/tattoo-deposit-invoice](plan/billing.md#templatestattoo-deposit-invoice) tattoo deposit invoice
- [ ] [/templates/cake-deposit-invoice](plan/billing.md#templatescake-deposit-invoice) cake deposit invoice
- [ ] [/templates/band-deposit-invoice](plan/billing.md#templatesband-deposit-invoice) band deposit invoice
- [ ] [/templates/event-planner-deposit-invoice](plan/billing.md#templatesevent-planner-deposit-invoice) event planner deposit invoice
- [ ] [/templates/florist-deposit-invoice](plan/billing.md#templatesflorist-deposit-invoice) wedding florist deposit invoice
- [ ] [/templates/makeup-artist-deposit-invoice](plan/billing.md#templatesmakeup-artist-deposit-invoice) makeup artist deposit invoice
- [ ] [/templates/interior-design-retainer-invoice](plan/billing.md#templatesinterior-design-retainer-invoice) interior design retainer invoice
- [ ] [/templates/app-development-milestone-invoice](plan/billing.md#templatesapp-development-milestone-invoice) app development milestone invoice
- [ ] [/templates/remodeling-progress-invoice](plan/billing.md#templatesremodeling-progress-invoice) remodeling progress invoice
- [ ] [/templates/change-order-invoice](plan/billing.md#templateschange-order-invoice) construction change order invoice
- [ ] [/templates/managed-it-services-invoice](plan/billing.md#templatesmanaged-it-services-invoice) managed it services invoice
- [ ] [/templates/tutoring-package-invoice](plan/billing.md#templatestutoring-package-invoice) tutoring package invoice
- [ ] [/templates/house-cleaning-hourly-invoice](plan/billing.md#templateshouse-cleaning-hourly-invoice) house cleaning hourly invoice
- [ ] [/templates/translation-per-word-invoice](plan/billing.md#templatestranslation-per-word-invoice) translation per word invoice
- [ ] [/templates/copywriting-per-word-invoice](plan/billing.md#templatescopywriting-per-word-invoice) copywriting per word invoice
- [ ] [/templates/roofing-labor-and-materials-invoice](plan/billing.md#templatesroofing-labor-and-materials-invoice) roofing labor and materials invoice
- [ ] [/templates/flooring-labor-and-materials-invoice](plan/billing.md#templatesflooring-labor-and-materials-invoice) flooring labor and materials invoice
- [ ] [/templates/carpentry-labor-and-materials-invoice](plan/billing.md#templatescarpentry-labor-and-materials-invoice) carpentry labor and materials invoice
- [ ] [/templates/painting-labor-and-materials-invoice](plan/billing.md#templatespainting-labor-and-materials-invoice) painting labor and materials invoice
- [ ] [/templates/monthly-pool-service-invoice](plan/billing.md#templatesmonthly-pool-service-invoice) monthly pool service invoice

**Languages** (chunk 3): [ ] 3A-de 0/20 · [ ] 3A-es 0/20 · [ ] 3A-fr 0/20 · [ ] 3A-nl 0/20 · [ ] 3A-sv 0/20 · [ ] 3A-da 0/20 · [ ] 3A-nb 0/20 · [ ] 3A-it 0/20 · [ ] 3A-pt 0/20 · [ ] 3A-pl 0/20

#### 4D: Billing-type templates III

- [ ] **4D** · chunk 4 · 0/19 live · 1 parked

- [ ] [/templates/monthly-lawn-care-invoice](plan/billing.md#templatesmonthly-lawn-care-invoice) monthly lawn care invoice
- [ ] [/templates/commercial-cleaning-monthly-invoice](plan/billing.md#templatescommercial-cleaning-monthly-invoice) monthly cleaning invoice
- [ ] [/templates/seasonal-snow-removal-invoice](plan/billing.md#templatesseasonal-snow-removal-invoice) seasonal snow removal invoice
- [ ] [/templates/quarterly-pest-control-invoice](plan/billing.md#templatesquarterly-pest-control-invoice) quarterly pest control invoice
- [ ] [/templates/personal-training-package-invoice](plan/billing.md#templatespersonal-training-package-invoice) personal training package invoice
- [ ] [/templates/dog-training-package-invoice](plan/billing.md#templatesdog-training-package-invoice) dog training package invoice
- [ ] [/templates/monthly-music-lesson-invoice](plan/billing.md#templatesmonthly-music-lesson-invoice) monthly music lesson invoice
- [ ] [/templates/photography-final-invoice](plan/billing.md#templatesphotography-final-invoice) photography final invoice
- [ ] [/templates/videography-deposit-invoice](plan/billing.md#templatesvideography-deposit-invoice) videography deposit invoice
- [ ] [/templates/catering-final-invoice](plan/billing.md#templatescatering-final-invoice) catering final invoice
- [ ] [/templates/emergency-plumbing-invoice](plan/billing.md#templatesemergency-plumbing-invoice) emergency plumbing invoice
- [ ] [/templates/hvac-maintenance-plan-invoice](plan/billing.md#templateshvac-maintenance-plan-invoice) hvac maintenance plan invoice
- [ ] [/templates/electrician-service-call-invoice](plan/billing.md#templateselectrician-service-call-invoice) electrician service call invoice
- [ ] [/templates/appliance-repair-service-call-invoice](plan/billing.md#templatesappliance-repair-service-call-invoice) appliance repair service call invoice
- [ ] [/templates/emergency-locksmith-invoice](plan/billing.md#templatesemergency-locksmith-invoice) emergency locksmith invoice
- [ ] [/templates/moving-hourly-invoice](plan/billing.md#templatesmoving-hourly-invoice) moving hourly invoice
- [ ] [/templates/graphic-design-deposit-invoice](plan/billing.md#templatesgraphic-design-deposit-invoice) graphic design deposit invoice
- [ ] [/templates/virtual-assistant-retainer-invoice](plan/billing.md#templatesvirtual-assistant-retainer-invoice) virtual assistant retainer invoice
- [ ] [/templates/handyman-labor-and-materials-invoice](plan/billing.md#templateshandyman-labor-and-materials-invoice) handyman labor and materials invoice
- ~~/templates/consulting-project-invoice~~ parked: a 3rd billing type for consulting (the rule is at most 2); a fixed-fee project is the consulting template's default case: cover it there

**Languages** (chunk 4): [ ] 4D-de 0/19 · [ ] 4D-es 0/19 · [ ] 4D-fr 0/19 · [ ] 4D-nl 0/19 · [ ] 4D-sv 0/19 · [ ] 4D-da 0/19 · [ ] 4D-nb 0/19 · [ ] 4D-it 0/19 · [ ] 4D-pt 0/19 · [ ] 4D-pl 0/19

### Invoice types (general documents)

Direction and briefs: [plan/types.md](plan/types.md)

#### 1F: Invoice types: the general documents

- [ ] **1F** · chunk 1 · 0/20 live · The parents of the billing-type pages (deposit, final, hourly, retainer …) and the who-invoices types (freelance, subcontractor). Bigger searches than the trade versions: build before or with 1B, and link 1B's pages up to these

- [ ] [/templates/deposit-invoice](plan/types.md#templatesdeposit-invoice) deposit invoice template
- [ ] [/templates/final-invoice](plan/types.md#templatesfinal-invoice) final invoice template
- [ ] [/templates/milestone-invoice](plan/types.md#templatesmilestone-invoice) milestone invoice template
- [ ] [/templates/hourly-invoice](plan/types.md#templateshourly-invoice) hourly invoice template
- [ ] [/templates/day-rate-invoice](plan/types.md#templatesday-rate-invoice) day rate invoice template
- [ ] [/templates/retainer-invoice](plan/types.md#templatesretainer-invoice) retainer invoice template
- [ ] [/templates/monthly-invoice](plan/types.md#templatesmonthly-invoice) monthly invoice template
- [ ] [/templates/labor-and-materials-invoice](plan/types.md#templateslabor-and-materials-invoice) labor and materials invoice template
- [ ] [/templates/service-invoice](plan/types.md#templatesservice-invoice) service invoice template
- [ ] [/templates/sales-invoice](plan/types.md#templatessales-invoice) sales invoice template
- [ ] [/templates/commercial-invoice](plan/types.md#templatescommercial-invoice) commercial invoice template
- [ ] [/templates/past-due-invoice](plan/types.md#templatespast-due-invoice) past due invoice template
- [ ] [/templates/mileage-invoice](plan/types.md#templatesmileage-invoice) mileage invoice template
- [ ] [/templates/expense-reimbursement-invoice](plan/types.md#templatesexpense-reimbursement-invoice) reimbursement invoice template
- [ ] [/templates/no-vat-invoice](plan/types.md#templatesno-vat-invoice) invoice without vat template
- [ ] [/templates/freelance-invoice](plan/types.md#templatesfreelance-invoice) freelance invoice template
- [ ] [/templates/independent-contractor-invoice](plan/types.md#templatesindependent-contractor-invoice) independent contractor invoice template
- [ ] [/templates/subcontractor-invoice](plan/types.md#templatessubcontractor-invoice) subcontractor invoice template
- [ ] [/templates/personal-invoice](plan/types.md#templatespersonal-invoice) invoice template for individuals
- [ ] [/templates/international-invoice](plan/types.md#templatesinternational-invoice) international invoice template

**Languages** (chunk 1): [ ] 1F-de 0/17 · [ ] 1F-es 0/17 · [ ] 1F-fr 0/17 · [ ] 1F-nl 0/17 · [ ] 1F-sv 0/17 · [ ] 1F-da 0/17 · [ ] 1F-nb 0/17 · [ ] 1F-it 0/17 · [ ] 1F-pt 0/17 · [ ] 1F-pl 0/17

### Industry pages ("invoice app for …")

Direction and briefs: [plan/industries.md](plan/industries.md)

#### 0B: Industry pages, first 20

- [x] **0B** · chunk 0 · 20/20 live

**Languages** (chunk 1): [ ] 0B-de 0/20 · [ ] 0B-es 0/20 · [ ] 0B-fr 0/20 · [ ] 0B-nl 0/20 · [ ] 0B-sv 0/20 · [ ] 0B-da 0/20 · [ ] 0B-nb 0/20 · [ ] 0B-it 0/20 · [ ] 0B-pt 0/20 · [ ] 0B-pl 0/20

#### 0F: Industry pages 21–32 (batch A)

- [x] **0F** · chunk 0 · 12/12 live

**Languages** (chunk 3): [ ] 0F-de 0/12 · [ ] 0F-es 0/12 · [ ] 0F-fr 0/12 · [ ] 0F-nl 0/12 · [ ] 0F-sv 0/12 · [ ] 0F-da 0/12 · [ ] 0F-nb 0/12 · [ ] 0F-it 0/12 · [ ] 0F-pt 0/12 · [ ] 0F-pl 0/12

#### 0G: Industry pages 33–43 (batch A)

- [x] **0G** · chunk 0 · 11/11 live

**Languages** (chunk 3): [ ] 0G-de 0/11 · [ ] 0G-es 0/11 · [ ] 0G-fr 0/11 · [ ] 0G-nl 0/11 · [ ] 0G-sv 0/11 · [ ] 0G-da 0/11 · [ ] 0G-nb 0/11 · [ ] 0G-it 0/11 · [ ] 0G-pt 0/11 · [ ] 0G-pl 0/11

#### 1C: 10 trades: templates + industry pages

- [ ] **1C** · chunk 1 · 0/10 live

- [ ] [/industries/notaries](plan/industries.md#industriesnotaries) invoice app for notaries
- [ ] [/industries/home-inspectors](plan/industries.md#industrieshome-inspectors) invoice app for home inspectors
- [ ] [/industries/it-technicians](plan/industries.md#industriesit-technicians) invoice app for it technicians
- [ ] [/industries/drone-pilots](plan/industries.md#industriesdrone-pilots) invoice app for drone pilots
- [ ] [/industries/tattoo-artists](plan/industries.md#industriestattoo-artists) invoice app for tattoo artists
- [ ] [/industries/personal-chefs](plan/industries.md#industriespersonal-chefs) invoice app for personal chefs
- [ ] [/industries/bakers](plan/industries.md#industriesbakers) invoice app for bakers
- [ ] [/industries/dog-trainers](plan/industries.md#industriesdog-trainers) invoice app for dog trainers
- [ ] [/industries/musicians](plan/industries.md#industriesmusicians) invoice app for musicians
- [ ] [/industries/voice-actors](plan/industries.md#industriesvoice-actors) invoice app for voice actors

**Languages** (chunk 1): [ ] 1C-de 0/9 · [ ] 1C-es 0/9 · [ ] 1C-fr 0/9 · [ ] 1C-nl 0/9 · [ ] 1C-sv 0/9 · [ ] 1C-da 0/9 · [ ] 1C-nb 0/9 · [ ] 1C-it 0/9 · [ ] 1C-pt 0/9 · [ ] 1C-pl 0/9

#### 2B: 20 industry pages: the same trades

- [ ] **2B** · chunk 2 · 0/20 live

- [ ] [/industries/chimney-sweeps](plan/industries.md#industrieschimney-sweeps) invoice app for chimney sweeps
- [ ] [/industries/gutter-cleaners](plan/industries.md#industriesgutter-cleaners) invoice app for gutter cleaners
- [ ] [/industries/septic-companies](plan/industries.md#industriesseptic-companies) invoice app for septic companies
- [ ] [/industries/irrigation-contractors](plan/industries.md#industriesirrigation-contractors) invoice app for irrigation contractors
- [ ] [/industries/deck-builders](plan/industries.md#industriesdeck-builders) invoice app for deck builders
- [ ] [/industries/cabinet-installers](plan/industries.md#industriescabinet-installers) invoice app for cabinet installers
- [ ] [/industries/countertop-installers](plan/industries.md#industriescountertop-installers) invoice app for countertop installers
- [ ] [/industries/insulation-contractors](plan/industries.md#industriesinsulation-contractors) invoice app for insulation contractors
- [ ] [/industries/siding-contractors](plan/industries.md#industriessiding-contractors) invoice app for siding contractors
- [ ] [/industries/window-installers](plan/industries.md#industrieswindow-installers) invoice app for window installers
- [ ] [/industries/paving-contractors](plan/industries.md#industriespaving-contractors) invoice app for paving contractors
- [ ] [/industries/excavation-contractors](plan/industries.md#industriesexcavation-contractors) invoice app for excavation contractors
- [ ] [/industries/demolition-contractors](plan/industries.md#industriesdemolition-contractors) invoice app for demolition contractors
- [ ] [/industries/solar-installers](plan/industries.md#industriessolar-installers) invoice app for solar installers
- [ ] [/industries/home-stagers](plan/industries.md#industrieshome-stagers) invoice app for home stagers
- [ ] [/industries/security-system-installers](plan/industries.md#industriessecurity-system-installers) invoice app for security system installers
- [ ] [/industries/av-installers](plan/industries.md#industriesav-installers) invoice app for av installers
- [ ] [/industries/mold-remediation-companies](plan/industries.md#industriesmold-remediation-companies) invoice app for mold remediation companies
- [ ] [/industries/restoration-companies](plan/industries.md#industriesrestoration-companies) invoice app for restoration companies
- [ ] [/industries/duct-cleaners](plan/industries.md#industriesduct-cleaners) invoice app for duct cleaners

**Languages** (chunk 2): [ ] 2B-de 0/20 · [ ] 2B-es 0/20 · [ ] 2B-fr 0/20 · [ ] 2B-nl 0/20 · [ ] 2B-sv 0/20 · [ ] 2B-da 0/20 · [ ] 2B-nb 0/20 · [ ] 2B-it 0/20 · [ ] 2B-pt 0/20 · [ ] 2B-pl 0/20

#### 3C: 20 industry pages: the same trades

- [ ] **3C** · chunk 3 · 0/20 live

- [ ] [/industries/welders](plan/industries.md#industrieswelders) invoice app for welders
- [ ] [/industries/sign-makers](plan/industries.md#industriessign-makers) invoice app for sign makers
- [ ] [/industries/screen-printers](plan/industries.md#industriesscreen-printers) invoice app for screen printers
- [ ] [/industries/embroidery-businesses](plan/industries.md#industriesembroidery-businesses) invoice app for embroidery businesses
- [ ] [/industries/tailors](plan/industries.md#industriestailors) invoice app for tailors
- [ ] [/industries/jewelers](plan/industries.md#industriesjewelers) invoice app for jewelers
- [ ] [/industries/bike-mechanics](plan/industries.md#industriesbike-mechanics) invoice app for bike mechanics
- [ ] [/industries/small-engine-mechanics](plan/industries.md#industriessmall-engine-mechanics) invoice app for small engine mechanics
- [ ] [/industries/marine-mechanics](plan/industries.md#industriesmarine-mechanics) invoice app for marine mechanics
- [ ] [/industries/rv-technicians](plan/industries.md#industriesrv-technicians) invoice app for rv technicians
- [ ] [/industries/towing-companies](plan/industries.md#industriestowing-companies) invoice app for towing companies
- [ ] [/industries/couriers](plan/industries.md#industriescouriers) invoice app for couriers
- [ ] [/industries/owner-operators](plan/industries.md#industriesowner-operators) invoice app for owner operators
- [ ] [/industries/limo-services](plan/industries.md#industrieslimo-services) invoice app for limo services
- [ ] [/industries/photo-booth-rentals](plan/industries.md#industriesphoto-booth-rentals) invoice app for photo booth rentals
- [ ] [/industries/party-rental-companies](plan/industries.md#industriesparty-rental-companies) invoice app for party rental companies
- [ ] [/industries/officiants](plan/industries.md#industriesofficiants) invoice app for wedding officiants
- [ ] [/industries/illustrators](plan/industries.md#industriesillustrators) invoice app for illustrators
- [ ] [/industries/video-editors](plan/industries.md#industriesvideo-editors) invoice app for video editors
- [ ] [/industries/podcast-producers](plan/industries.md#industriespodcast-producers) invoice app for podcast producers

**Languages** (chunk 3): [ ] 3C-de 0/20 · [ ] 3C-es 0/20 · [ ] 3C-fr 0/20 · [ ] 3C-nl 0/20 · [ ] 3C-sv 0/20 · [ ] 3C-da 0/20 · [ ] 3C-nb 0/20 · [ ] 3C-it 0/20 · [ ] 3C-pt 0/20 · [ ] 3C-pl 0/20

#### 4C: 20 industry pages: the same trades

- [ ] **4C** · chunk 4 · 0/20 live

- [ ] [/industries/seo-consultants](plan/industries.md#industriesseo-consultants) invoice app for seo consultants
- [ ] [/industries/marketing-agencies](plan/industries.md#industriesmarketing-agencies) invoice app for marketing agencies
- [ ] [/industries/ux-designers](plan/industries.md#industriesux-designers) invoice app for ux designers
- [ ] [/industries/app-developers](plan/industries.md#industriesapp-developers) invoice app for app developers
- [ ] [/industries/data-analysts](plan/industries.md#industriesdata-analysts) invoice app for data analysts
- [ ] [/industries/tax-preparers](plan/industries.md#industriestax-preparers) invoice app for tax preparers
- [ ] [/industries/lawyers](plan/industries.md#industrieslawyers) invoice app for lawyers
- [ ] [/industries/property-managers](plan/industries.md#industriesproperty-managers) invoice app for property managers
- [ ] [/industries/landlords](plan/industries.md#industrieslandlords) invoice app for landlords
- [ ] [/industries/security-companies](plan/industries.md#industriessecurity-companies) invoice app for security companies
- [ ] [/industries/therapists](plan/industries.md#industriestherapists) invoice app for therapists
- [ ] [/industries/nutritionists](plan/industries.md#industriesnutritionists) invoice app for nutritionists
- [ ] [/industries/yoga-teachers](plan/industries.md#industriesyoga-teachers) invoice app for yoga teachers
- [ ] [/industries/dance-teachers](plan/industries.md#industriesdance-teachers) invoice app for dance teachers
- [ ] [/industries/swim-instructors](plan/industries.md#industriesswim-instructors) invoice app for swim instructors
- [ ] [/industries/sports-coaches](plan/industries.md#industriessports-coaches) invoice app for sports coaches
- [ ] [/industries/babysitters](plan/industries.md#industriesbabysitters) invoice app for babysitters
- [ ] [/industries/caregivers](plan/industries.md#industriescaregivers) invoice app for caregivers
- [ ] [/industries/doulas](plan/industries.md#industriesdoulas) invoice app for doulas
- [ ] [/industries/barbers](plan/industries.md#industriesbarbers) invoice app for barbers

**Languages** (chunk 4): [ ] 4C-de 0/19 · [ ] 4C-es 0/19 · [ ] 4C-fr 0/19 · [ ] 4C-nl 0/19 · [ ] 4C-sv 0/19 · [ ] 4C-da 0/19 · [ ] 4C-nb 0/19 · [ ] 4C-it 0/19 · [ ] 4C-pt 0/19 · [ ] 4C-pl 0/19

#### 5B: 20 industry pages: the same trades

- [ ] **5B** · chunk 5 · 0/20 live

- [ ] [/industries/nail-technicians](plan/industries.md#industriesnail-technicians) invoice app for nail technicians
- [ ] [/industries/estheticians](plan/industries.md#industriesestheticians) invoice app for estheticians
- [ ] [/industries/lash-technicians](plan/industries.md#industrieslash-technicians) invoice app for lash technicians
- [ ] [/industries/artists](plan/industries.md#industriesartists) invoice app for visual artists
- [ ] [/industries/music-producers](plan/industries.md#industriesmusic-producers) invoice app for music producers
- [ ] [/industries/recording-studios](plan/industries.md#industriesrecording-studios) invoice app for recording studios
- [ ] [/industries/sound-engineers](plan/industries.md#industriessound-engineers) invoice app for sound engineers
- [ ] [/industries/content-creators](plan/industries.md#industriescontent-creators) invoice app for content creators
- [ ] [/industries/proofreaders](plan/industries.md#industriesproofreaders) invoice app for proofreaders
- [ ] [/industries/driving-instructors](plan/industries.md#industriesdriving-instructors) invoice app for driving instructors
- [ ] [/industries/farmers](plan/industries.md#industriesfarmers) invoice app for farmers
- [ ] [/industries/print-shops](plan/industries.md#industriesprint-shops) invoice app for print shops
- [ ] [/industries/3d-printing-services](plan/industries.md#industries3d-printing-services) invoice app for 3d printing services
- [ ] [/industries/engravers](plan/industries.md#industriesengravers) invoice app for engravers
- [ ] [/industries/furniture-makers](plan/industries.md#industriesfurniture-makers) invoice app for furniture makers
- [ ] [/industries/glaziers](plan/industries.md#industriesglaziers) invoice app for glaziers
- [ ] [/industries/wildlife-removal-companies](plan/industries.md#industrieswildlife-removal-companies) invoice app for wildlife removal companies
- [ ] [/industries/aquarium-services](plan/industries.md#industriesaquarium-services) invoice app for aquarium services
- [ ] [/industries/surveyors](plan/industries.md#industriessurveyors) invoice app for surveyors
- [ ] [/industries/professional-organizers](plan/industries.md#industriesprofessional-organizers) invoice app for professional organizers

**Languages** (chunk 5): [ ] 5B-de 0/20 · [ ] 5B-es 0/20 · [ ] 5B-fr 0/20 · [ ] 5B-nl 0/20 · [ ] 5B-sv 0/20 · [ ] 5B-da 0/20 · [ ] 5B-nb 0/20 · [ ] 5B-it 0/20 · [ ] 5B-pt 0/20 · [ ] 5B-pl 0/20

#### 6B: 16 trades with their own demand + 4 industry pages

- [ ] **6B** · chunk 6 · 0/4 live

- [ ] [/industries/architects](plan/industries.md#industriesarchitects) invoice app for architects
- [ ] [/industries/real-estate-agents](plan/industries.md#industriesreal-estate-agents) invoice app for real estate agents
- [ ] [/industries/private-investigators](plan/industries.md#industriesprivate-investigators) invoice app for private investigators
- [ ] [/industries/equipment-rental-companies](plan/industries.md#industriesequipment-rental-companies) invoice app for equipment rental companies

**Languages** (chunk 6): [ ] 6B-de 0/4 · [ ] 6B-es 0/4 · [ ] 6B-fr 0/4 · [ ] 6B-nl 0/4 · [ ] 6B-sv 0/4 · [ ] 6B-da 0/4 · [ ] 6B-nb 0/4 · [ ] 6B-it 0/4 · [ ] 6B-pt 0/4 · [ ] 6B-pl 0/4

### Compare pages ("{competitor} alternative")

Direction and briefs: [plan/compare.md](plan/compare.md)

#### 0C: Compare pages (English only)

- [x] **0C** · chunk 0 · 20/20 live

#### 2C: 20 compares (English only)

- [ ] **2C** · chunk 2 · 0/20 live

- [ ] [/compare/invoice-simple](plan/compare.md#compareinvoice-simple) invoice simple alternative
- [ ] [/compare/invoice-home](plan/compare.md#compareinvoice-home) invoice home alternative
- [ ] [/compare/moon-invoice](plan/compare.md#comparemoon-invoice) moon invoice alternative
- [ ] [/compare/invoicely](plan/compare.md#compareinvoicely) invoicely alternative
- [ ] [/compare/paypal-invoicing](plan/compare.md#comparepaypal-invoicing) paypal invoicing alternative
- [ ] [/compare/tradify](plan/compare.md#comparetradify) tradify alternative
- [ ] [/compare/fieldpulse](plan/compare.md#comparefieldpulse) fieldpulse alternative
- [ ] [/compare/hiveage](plan/compare.md#comparehiveage) hiveage alternative
- [ ] [/compare/sumup-invoices](plan/compare.md#comparesumup-invoices) sumup invoices alternative
- [ ] [/compare/sage-accounting](plan/compare.md#comparesage-accounting) sage accounting alternative
- [ ] [/compare/dubsado](plan/compare.md#comparedubsado) dubsado alternative
- [ ] [/compare/17hats](plan/compare.md#compare17hats) 17hats alternative
- [ ] [/compare/plutio](plan/compare.md#compareplutio) plutio alternative
- [ ] [/compare/moxie](plan/compare.md#comparemoxie) moxie alternative
- [ ] [/compare/kashoo](plan/compare.md#comparekashoo) kashoo alternative
- [ ] [/compare/invoicera](plan/compare.md#compareinvoicera) invoicera alternative
- [ ] [/compare/wix-invoices](plan/compare.md#comparewix-invoices) wix invoices alternative
- [ ] [/compare/akaunting](plan/compare.md#compareakaunting) akaunting alternative
- [ ] [/compare/due](plan/compare.md#comparedue) due alternative
- [ ] [/compare/invoiceberry](plan/compare.md#compareinvoiceberry) invoiceberry alternative

**Languages:** none (English only or local).

### Free tools

Direction and briefs: [plan/tools.md](plan/tools.md)

#### 1D: Free tools I (needs code)

- [ ] **1D** · chunk 1 · 0/11 live

- [ ] [/tools/iban-checker](plan/tools.md#toolsiban-checker) iban checker
- [ ] [/tools/late-payment-interest-calculator](plan/tools.md#toolslate-payment-interest-calculator) late payment interest calculator
- [ ] [/tools/due-date-calculator](plan/tools.md#toolsdue-date-calculator) invoice due date calculator
- [ ] [/tools/invoice-number-generator](plan/tools.md#toolsinvoice-number-generator) invoice number generator
- [ ] [/tools/discount-calculator](plan/tools.md#toolsdiscount-calculator) discount calculator
- [ ] [/tools/markup-calculator](plan/tools.md#toolsmarkup-calculator) markup calculator
- [ ] [/tools/profit-margin-calculator](plan/tools.md#toolsprofit-margin-calculator) profit margin calculator
- [ ] [/tools/deposit-calculator](plan/tools.md#toolsdeposit-calculator) deposit calculator
- [ ] [/tools/retainage-calculator](plan/tools.md#toolsretainage-calculator) retainage calculator
- [ ] [/tools/sales-tax-calculator](plan/tools.md#toolssales-tax-calculator) sales tax calculator
- [ ] [/tools/vat-number-checker](plan/tools.md#toolsvat-number-checker) eu vat number checker

**Languages** (chunk 1): [ ] 1D-de 0/9 · [ ] 1D-es 0/9 · [ ] 1D-fr 0/9 · [ ] 1D-nl 0/9 · [ ] 1D-sv 0/9 · [ ] 1D-da 0/9 · [ ] 1D-nb 0/9 · [ ] 1D-it 0/9 · [ ] 1D-pt 0/9 · [ ] 1D-pl 0/9

#### 4A: Free tools II + document generators (needs code)

- [ ] **4A** · chunk 4 · 0/10 live

- [ ] [/tools/mileage-reimbursement-calculator](plan/tools.md#toolsmileage-reimbursement-calculator) mileage reimbursement calculator
- [ ] [/tools/hourly-to-salary-calculator](plan/tools.md#toolshourly-to-salary-calculator) hourly to salary calculator
- [ ] [/tools/day-rate-calculator](plan/tools.md#toolsday-rate-calculator) day rate calculator
- [ ] [/tools/overtime-calculator](plan/tools.md#toolsovertime-calculator) overtime calculator
- [ ] [/tools/price-per-square-foot-calculator](plan/tools.md#toolsprice-per-square-foot-calculator) price per square foot calculator
- [ ] [/tools/break-even-calculator](plan/tools.md#toolsbreak-even-calculator) break even calculator
- [ ] [/tools/late-fee-calculator](plan/tools.md#toolslate-fee-calculator) late fee calculator
- [ ] [/tools/price-increase-calculator](plan/tools.md#toolsprice-increase-calculator) price increase calculator
- [ ] [/tools/commission-calculator](plan/tools.md#toolscommission-calculator) commission calculator
- [ ] [/tools/utilization-rate-calculator](plan/tools.md#toolsutilization-rate-calculator) utilization rate calculator

**Languages** (chunk 4): [ ] 4A-de 0/8 · [ ] 4A-es 0/8 · [ ] 4A-fr 0/8 · [ ] 4A-nl 0/8 · [ ] 4A-sv 0/8 · [ ] 4A-da 0/8 · [ ] 4A-nb 0/8 · [ ] 4A-it 0/8 · [ ] 4A-pt 0/8 · [ ] 4A-pl 0/8

#### 6A: 20 pricing calculators for trades (needs code: one calculator engine, a config per trade)

- [ ] **6A** · chunk 6 · 0/20 live

- [ ] [/tools/house-cleaning-pricing-calculator](plan/tools.md#toolshouse-cleaning-pricing-calculator) house cleaning pricing calculator
- [ ] [/tools/lawn-mowing-pricing-calculator](plan/tools.md#toolslawn-mowing-pricing-calculator) lawn mowing pricing calculator
- [ ] [/tools/pressure-washing-pricing-calculator](plan/tools.md#toolspressure-washing-pricing-calculator) pressure washing pricing calculator
- [ ] [/tools/painting-cost-calculator](plan/tools.md#toolspainting-cost-calculator) painting cost calculator
- [ ] [/tools/window-cleaning-pricing-calculator](plan/tools.md#toolswindow-cleaning-pricing-calculator) window cleaning pricing calculator
- [ ] [/tools/snow-removal-pricing-calculator](plan/tools.md#toolssnow-removal-pricing-calculator) snow plowing pricing calculator
- [ ] [/tools/carpet-cleaning-pricing-calculator](plan/tools.md#toolscarpet-cleaning-pricing-calculator) carpet cleaning pricing calculator
- [ ] [/tools/moving-company-pricing-calculator](plan/tools.md#toolsmoving-company-pricing-calculator) moving company pricing calculator
- [ ] [/tools/junk-removal-pricing-calculator](plan/tools.md#toolsjunk-removal-pricing-calculator) junk removal pricing calculator
- [ ] [/tools/photography-pricing-calculator](plan/tools.md#toolsphotography-pricing-calculator) photography pricing calculator
- [ ] [/tools/drywall-estimate-calculator](plan/tools.md#toolsdrywall-estimate-calculator) drywall estimate calculator
- [ ] [/tools/flooring-installation-cost-calculator](plan/tools.md#toolsflooring-installation-cost-calculator) flooring installation cost calculator
- [ ] [/tools/tile-installation-cost-calculator](plan/tools.md#toolstile-installation-cost-calculator) tile installation cost calculator
- [ ] [/tools/fence-installation-cost-calculator](plan/tools.md#toolsfence-installation-cost-calculator) fence installation cost calculator
- [ ] [/tools/deck-building-cost-calculator](plan/tools.md#toolsdeck-building-cost-calculator) deck cost calculator
- [ ] [/tools/roofing-estimate-calculator](plan/tools.md#toolsroofing-estimate-calculator) roofing estimate calculator
- [ ] [/tools/concrete-cost-calculator](plan/tools.md#toolsconcrete-cost-calculator) concrete cost calculator
- [ ] [/tools/pool-cleaning-pricing-calculator](plan/tools.md#toolspool-cleaning-pricing-calculator) pool cleaning pricing calculator
- [ ] [/tools/catering-cost-calculator](plan/tools.md#toolscatering-cost-calculator) catering cost calculator
- [ ] [/tools/cake-pricing-calculator](plan/tools.md#toolscake-pricing-calculator) cake pricing calculator

**Languages** (chunk 6): [ ] 6A-de 0/20 · [ ] 6A-es 0/20 · [ ] 6A-fr 0/20 · [ ] 6A-nl 0/20 · [ ] 6A-sv 0/20 · [ ] 6A-da 0/20 · [ ] 6A-nb 0/20 · [ ] 6A-it 0/20 · [ ] 6A-pt 0/20 · [ ] 6A-pl 0/20

### Country pages (English)

Direction and briefs: [plan/country.md](plan/country.md)

#### 1E: Country pages I (needs code: the country page type)

- [ ] **1E** · chunk 1 · 0/7 live

- [ ] [/invoice-generator-uk](plan/country.md#invoice-generator-uk) uk vat invoice requirements
- [ ] [/invoice-generator-ireland](plan/country.md#invoice-generator-ireland) vat invoice ireland
- [ ] [/invoice-generator-australia](plan/country.md#invoice-generator-australia) tax invoice australia
- [ ] [/invoice-generator-new-zealand](plan/country.md#invoice-generator-new-zealand) gst invoice nz
- [ ] [/invoice-generator-canada](plan/country.md#invoice-generator-canada) gst hst invoice canada
- [ ] [/invoice-generator-south-africa](plan/country.md#invoice-generator-south-africa) vat invoice south africa
- [ ] [/reverse-charge-invoice](plan/country.md#reverse-charge-invoice) eu reverse charge invoice

**Languages** (chunk 2): [ ] 1E-de 0/1 · [ ] 1E-es 0/1 · [ ] 1E-fr 0/1 · [ ] 1E-nl 0/1 · [ ] 1E-sv 0/1 · [ ] 1E-da 0/1 · [ ] 1E-nb 0/1 · [ ] 1E-it 0/1 · [ ] 1E-pt 0/1 · [ ] 1E-pl 0/1

#### 2D: Country pages II

- [ ] **2D** · chunk 2 · 0/6 live

- [ ] [/invoice-generator-singapore](plan/country.md#invoice-generator-singapore) gst invoice singapore
- [ ] [/invoice-generator-nigeria](plan/country.md#invoice-generator-nigeria) vat invoice nigeria
- [ ] [/invoice-generator-uae](plan/country.md#invoice-generator-uae) tax invoice uae
- [ ] [/invoice-generator-malta](plan/country.md#invoice-generator-malta) vat invoice malta
- [ ] [/invoice-generator-hong-kong](plan/country.md#invoice-generator-hong-kong) invoice template hong kong
- [ ] [/invoice-generator-switzerland](plan/country.md#invoice-generator-switzerland) vat invoice switzerland

**Languages:** none (English only or local).

#### 6C: European countries in English (for foreign freelancers)

- [ ] **6C** · chunk 6 · 0/10 live

- [ ] [/invoice-generator-germany](plan/country.md#invoice-generator-germany) invoice requirements germany
- [ ] [/invoice-generator-netherlands](plan/country.md#invoice-generator-netherlands) invoice requirements netherlands
- [ ] [/invoice-generator-france](plan/country.md#invoice-generator-france) invoice requirements france
- [ ] [/invoice-generator-spain](plan/country.md#invoice-generator-spain) invoice requirements spain
- [ ] [/invoice-generator-austria](plan/country.md#invoice-generator-austria) invoice requirements austria
- [ ] [/invoice-generator-sweden](plan/country.md#invoice-generator-sweden) invoice requirements sweden
- [ ] [/invoice-generator-denmark](plan/country.md#invoice-generator-denmark) invoice requirements denmark
- [ ] [/invoice-generator-norway](plan/country.md#invoice-generator-norway) invoice requirements norway
- [ ] [/invoice-generator-finland](plan/country.md#invoice-generator-finland) invoice requirements finland
- [ ] [/invoice-generator-cyprus](plan/country.md#invoice-generator-cyprus) invoice requirements cyprus

**Languages:** none (English only or local).

### Local pages (in the country's own language)

Direction and briefs: [plan/local.md](plan/local.md)

#### 1E: Country pages I (needs code: the country page type)

- [ ] **1E** · chunk 1 · 0/3 live

- [ ] [/de/rechnung-pflichtangaben](plan/local.md#derechnung-pflichtangaben) pflichtangaben rechnung
- [ ] [/nl/factuureisen](plan/local.md#nlfactuureisen) factuureisen
- [ ] [/fr/mentions-obligatoires-facture](plan/local.md#frmentions-obligatoires-facture) mentions obligatoires facture

**Languages:** none (English only or local).

#### 2D: Country pages II

- [ ] **2D** · chunk 2 · 0/4 live

- [ ] [/es/requisitos-factura](plan/local.md#esrequisitos-factura) requisitos de una factura
- [ ] [/sv/vad-ska-sta-pa-en-faktura](plan/local.md#svvad-ska-sta-pa-en-faktura) vad ska stå på en faktura
- [ ] [/da/krav-til-faktura](plan/local.md#dakrav-til-faktura) krav til faktura
- [ ] [/nb/krav-til-faktura](plan/local.md#nbkrav-til-faktura) krav til faktura

**Languages:** none (English only or local).

#### 3D: 20 local compares (in their own language, HL9)

- [ ] **3D** · chunk 3 · 0/20 live

- [ ] [/nl/moneybird-alternatief](plan/local.md#nlmoneybird-alternatief) moneybird alternatief
- [ ] [/nl/e-boekhouden-alternatief](plan/local.md#nle-boekhouden-alternatief) e-boekhouden alternatief
- [ ] [/nl/jortt-alternatief](plan/local.md#nljortt-alternatief) jortt alternatief
- [ ] [/de/lexware-office-alternative](plan/local.md#delexware-office-alternative) lexware office alternative
- [ ] [/de/sevdesk-alternative](plan/local.md#desevdesk-alternative) sevdesk alternative
- [ ] [/de/fastbill-alternative](plan/local.md#defastbill-alternative) fastbill alternative
- [ ] [/fr/alternative-facture-net](plan/local.md#fralternative-facture-net) alternative facture.net
- [ ] [/fr/alternative-tiime](plan/local.md#fralternative-tiime) alternative tiime
- [ ] [/fr/alternative-henrri](plan/local.md#fralternative-henrri) alternative henrri
- [ ] [/es/alternativa-holded](plan/local.md#esalternativa-holded) alternativa a holded
- [ ] [/es/alternativa-quipu](plan/local.md#esalternativa-quipu) alternativa a quipu
- [ ] [/es/alternativa-billin](plan/local.md#esalternativa-billin) alternativa a billin
- [ ] [/sv/fortnox-alternativ](plan/local.md#svfortnox-alternativ) fortnox alternativ
- [ ] [/sv/bokio-alternativ](plan/local.md#svbokio-alternativ) bokio alternativ
- [ ] [/sv/visma-eekonomi-alternativ](plan/local.md#svvisma-eekonomi-alternativ) visma eekonomi alternativ
- [ ] [/da/billy-alternativ](plan/local.md#dabilly-alternativ) billy alternativ
- [ ] [/da/dinero-alternativ](plan/local.md#dadinero-alternativ) dinero alternativ
- [ ] [/da/e-conomic-alternativ](plan/local.md#dae-conomic-alternativ) e-conomic alternativ
- [ ] [/nb/fiken-alternativ](plan/local.md#nbfiken-alternativ) fiken alternativ
- [ ] [/nb/conta-alternativ](plan/local.md#nbconta-alternativ) conta alternativ

**Languages:** none (English only or local).

#### 6D: Local tax rules (in their own language, no English parent)

- [ ] **6D** · chunk 6 · 0/5 live

- [ ] [/de/kleinbetragsrechnung](plan/local.md#dekleinbetragsrechnung) kleinbetragsrechnung
- [ ] [/de/handwerkerrechnung](plan/local.md#dehandwerkerrechnung) handwerkerrechnung steuer absetzen
- [ ] [/es/factura-simplificada](plan/local.md#esfactura-simplificada) factura simplificada
- [ ] [/sv/rot-och-rut-avdrag-faktura](plan/local.md#svrot-och-rut-avdrag-faktura) rot avdrag faktura
- [ ] [/da/haandvaerkerfradrag-faktura](plan/local.md#dahaandvaerkerfradrag-faktura) håndværkerfradrag faktura

**Languages:** none (English only or local).

### Generators (other documents)

Direction and briefs: [plan/generators.md](plan/generators.md)

#### 4A: Free tools II + document generators (needs code)

- [ ] **4A** · chunk 4 · 0/4 live

- [ ] [/free-receipt-generator](plan/generators.md#free-receipt-generator) free receipt generator
- [ ] [/free-estimate-generator](plan/generators.md#free-estimate-generator) free estimate generator
- [ ] [/free-proforma-invoice-generator](plan/generators.md#free-proforma-invoice-generator) proforma invoice generator
- [ ] [/free-credit-note-generator](plan/generators.md#free-credit-note-generator) credit note generator

**Languages** (chunk 4): [ ] 4A-de 0/4 · [ ] 4A-es 0/4 · [ ] 4A-fr 0/4 · [ ] 4A-nl 0/4 · [ ] 4A-sv 0/4 · [ ] 4A-da 0/4 · [ ] 4A-nb 0/4 · [ ] 4A-it 0/4 · [ ] 4A-pt 0/4 · [ ] 4A-pl 0/4

### Core pages, hubs, trust and legal

Direction and briefs: [plan/core.md](plan/core.md)

#### 1G: Trust pages (E-E-A-T: who's behind the site)

- [ ] **1G** · chunk 1 · 0/2 live

- [ ] [/about](plan/core.md#about) about invoicor
- [ ] [/contact](plan/core.md#contact) contact invoicor

**Languages:** not scheduled yet.

## Not in a chunk yet

Blog topics (you write them on learn.invoicor.com), pages that need a decision or code first,
and pages on hold, with the reason in their brief.

- **on hold: file downloads (53)** (4): [/templates/invoice-template-word](plan/core.md#templatesinvoice-template-word) · [/templates/invoice-template-excel](plan/core.md#templatesinvoice-template-excel) · [/templates/invoice-template-google-docs](plan/core.md#templatesinvoice-template-google-docs) · [/templates/invoice-template-pdf](plan/core.md#templatesinvoice-template-pdf)
- **on hold: e-invoicing** (3): [/it/fattura-elementi-obbligatori](plan/local.md#itfattura-elementi-obbligatori) · [/pt/requisitos-fatura](plan/local.md#ptrequisitos-fatura) · [/pl/elementy-faktury](plan/local.md#plelementy-faktury)
- **blog topics (L4)** (12): [learn:/how-to-write-an-invoice](plan/blog.md#learnhow-to-write-an-invoice) · [learn:/what-to-include-on-an-invoice](plan/blog.md#learnwhat-to-include-on-an-invoice) · [learn:/invoice-vs-receipt](plan/blog.md#learninvoice-vs-receipt) · [learn:/invoice-payment-terms](plan/blog.md#learninvoice-payment-terms) · [learn:/how-to-number-invoices](plan/blog.md#learnhow-to-number-invoices) · [learn:/late-payment-email](plan/blog.md#learnlate-payment-email) · [learn:/what-is-a-proforma-invoice](plan/blog.md#learnwhat-is-a-proforma-invoice) · [learn:/what-is-a-credit-note](plan/blog.md#learnwhat-is-a-credit-note) · [learn:/what-does-net-30-mean](plan/blog.md#learnwhat-does-net-30-mean) · [learn:/how-to-invoice-as-a-freelancer](plan/blog.md#learnhow-to-invoice-as-a-freelancer) · [learn:/what-to-do-when-a-client-doesnt-pay](plan/blog.md#learnwhat-to-do-when-a-client-doesnt-pay) · [learn:/how-to-charge-a-deposit](plan/blog.md#learnhow-to-charge-a-deposit)
