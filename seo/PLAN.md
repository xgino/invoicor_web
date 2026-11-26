# Page plan: the road to 4,000 pages

> **Generated, don't edit by hand.** Every item per category, with its pages below it: T1, T2 …
> for trade templates, I1 … for industry pages, and so on; L1, L2 … for the language versions
> (one language each). Boxes tick themselves when the pages are live. The brief per English page is
> in [plan/](plan/) (one file per category, with what its pages can and can't do); the
> instructions per language page are in [plan/languages/](plan/languages/) (one file per
> language). What exists today: [PAGES.md](PAGES.md). Data: [keyword-map.csv](keyword-map.csv)
> (`item`, `brief`, `avoid`), items: `scripts/pages-items.mjs`, categories:
> `scripts/pages-categories.mjs`. After any change: `npm run pages`.

**241 / 4,000 pages live** (6%) · planned: 401 English and local pages + 4,140 language pages · **4,782 when everything is built** (fewer after the demand gate parks the weak ones)

## How to run an item

Say which: "do T5", "do D1, B1", "do L1, L2" or "do S1". Then:

1. **English item (T5, B1 …):** first the demand gate (rules below): park the pages nobody
   searches for. Then, for each page listed under the item, read its brief (the link) and its
   category's direction in the same file, the blueprint and the fact sheet
   [BRAND.md §10](../BRAND.md). Use one live page of the same type as the model. Write them all,
   then: `npm run content:check` → `npm run build` → `npm run pages` → `npm run check`. Update
   ROADMAP.md; one commit per item.
2. **Language item (L1 …):** one item's pages in one language, written for that country. Its
   instructions per page are in that language's file in [plan/languages/](plan/languages/).
   Needs task S1 for templates and industry pages, and the English pages live first.
3. **Task (S1 …):** code work, no pages. Tick it in `scripts/pages-items.mjs` (`done: true`).
4. **After each deploy:** wait 2–3 weeks and check in Search Console how many of the new pages got
   indexed. A page type under ~50% indexed after 4 weeks: stop and improve it before adding more.

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
  Search Console (sitemap per type, task S1).

## Rules for language items

- Written for the country, by local search words (research them first), not word for word.
- The slug, title, H1 and examples in that language; prices, currency and number format of that
  market (the table below).
- Never claim the app's screens are in that language (they're English); say "invoices in your
  language".
- The e-invoicing warnings below are part of the page where they apply (first paragraph).
- A page with no local search, or a trade that works differently there (a notary in Germany is a
  state office with fixed fees), gets a `parked` row in that language (`translation_of` = the
  English URL, the reason in `notes`): skipped, not translated anyway.
- German first (it already gets clicks); Italian, Portuguese and Polish last (e-invoicing).

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

## Rules for new items

So the plan can keep growing (the goal of 4,000 can move up or down with the results):

- **One item = 15–25 pages of one category**, named with that category's letter and the next
  number (T10, B4 …). Add it at the end of `ITEMS` in `scripts/pages-items.mjs`; numbers never
  change.
- **Languages:** if its pages are `localize: yes`, add the item at the end of `LANGUAGE_SOURCES`:
  its 10 L items appear by themselves, with the next free numbers.
- **New page ideas** must fit a category's direction ([plan/](plan/)), pass the key check, and get
  a brief (`brief`) and what not to repeat (`avoid`) before they get an `item`.
- **Proven types first:** a new page type (a new category) starts with one item of ≤ 10 pages and
  grows only after it indexes.
- **Parents before children:** the general page ("deposit invoice") comes before or with its
  specific ones ("photography deposit invoice"), and the children link up to it.
- **Bigger searches first:** a new trade or topic must be a search of its own, not a sub-niche or a
  synonym of a planned one.
- **Re-plan with Search Console data** every ~5 items: more of what ranks, less of what doesn't.

## Overview

| Category | Items | Pages done | Pages to build | Language items |
|---|---|---|---|---|
| [Trade templates](#trade-templates-t) | T1 T2 T3 T4 T5 T6 T7 T8 T9 | 50 | 106 | 0/90 done |
| [Billing-type templates](#billing-type-templates-b) | B1 B2 B3 | 0 | 59 | 0/30 done |
| [Invoice types (general documents)](#invoice-types-general-documents-d) | D1 | 0 | 20 | 0/10 done |
| [Industry pages ("invoice app for …")](#industry-pages-invoice-app-for--i) | I1 I2 I3 I4 I5 I6 I7 I8 I9 | 43 | 94 | 0/90 done |
| [Compare pages ("{competitor} alternative")](#compare-pages-competitor-alternative-c) | C1 C2 | 20 | 20 | none |
| [Free tools](#free-tools-tl) | TL0 TL1 TL2 TL3 | 4 | 41 | 10/40 done |
| [Country pages (English)](#country-pages-english-ct) | CT1 CT2 CT3 | 0 | 23 | 0/10 done |
| [Local pages (in the country's own language)](#local-pages-in-the-countrys-own-language-lo) | LO1 LO2 | 0 | 32 | none |
| [Generators (other documents)](#generators-other-documents-g) | G0 G1 | 1 | 4 | 10/20 done |
| [Blog (learn.invoicor.com)](#blog-learninvoicorcom-bl) | BL1 BL2 | 34 | 0 | none |
| [Core pages, hubs, trust and legal](#core-pages-hubs-trust-and-legal-p) | P0 P1 | 9 | 2 | 0/20 done |
| [Languages](#languages-l) | L1–L310 | 80 | 4140 | |

## Suggested order

The English items and tasks in the order that pays off most (parents first, bigger searches first,
code before the pages that need it). Language items: in their number order, alongside, once their
English pages are live.

**S1** → **D1** → **B1** → **T4** → **I4** → **TL1** → **P1** → **S3** → **CT1** → **T5** → **I5** → **C2** → **S2** → **CT2** → **B2** → **T6** → **I6** → **LO1** → **LO2** → **TL2** → **G1** → **T7** → **I7** → **B3** → **T8** → **I8** → **S4** → **TL3** → **T9** → **I9** → **CT3**

## Tasks (S): code, no pages

- [ ] **S1** Language setup for templates and industry pages (roadmap H4): The template and industry page labels in 11 languages, `content/{locale}/templates.json` and `industries.json`, local slugs per language in the route table, hreflang between the versions, the language switcher, the hubs per language, and the sitemap split per page type (a sitemap index, so Search Console shows indexing per type). Every L item for templates and industry pages waits for this.
- [ ] **S2** Hubs at scale: With 150+ templates the hubs need groups (home services, trades, creative, professional, invoice types, billing types) with anchors and a short intro each, so every page is at most 2 clicks from its hub. No thin sub-hub URLs: groups are sections of the one hub.
- [ ] **S3** Country page type (roadmap chunk 43): The page code for country pages (CT items) and local rule pages (LO1): the generator preset per country plus the rules section. CT and LO1 wait for this.
- [ ] **S4** Calculator engine (for TL3): One calculator component driven by a config per trade (inputs, units, formula steps, the 'Put on an invoice' link), metric units per language. TL3 waits for this.

## Trade templates (T)

Direction (what these pages can and can't do) and every brief: [plan/templates.md](plan/templates.md)

### T1: Trade templates 1–20 (built)

- [x] **T1** · 20/20 live · languages: [L1–L10](#t1-in-every-language)
  - [x] [/templates/photography](https://invoicor.com/templates/photography) photography invoice template
  - [x] [/templates/plumbing](https://invoicor.com/templates/plumbing) plumbing invoice template
  - [x] [/templates/hvac](https://invoicor.com/templates/hvac) hvac invoice template
  - [x] [/templates/freelance-design](https://invoicor.com/templates/freelance-design) graphic design invoice template
  - [x] [/templates/handyman](https://invoicor.com/templates/handyman) handyman invoice template
  - [x] [/templates/videography](https://invoicor.com/templates/videography) videography invoice template
  - [x] [/templates/landscaping](https://invoicor.com/templates/landscaping) landscaping invoice template
  - [x] [/templates/consulting](https://invoicor.com/templates/consulting) consulting invoice template
  - [x] [/templates/cleaning-services](https://invoicor.com/templates/cleaning-services) cleaning invoice template
  - [x] [/templates/auto-detailing](https://invoicor.com/templates/auto-detailing) auto detailing invoice template
  - [x] [/templates/electrician](https://invoicor.com/templates/electrician) electrician invoice template
  - [x] [/templates/construction](https://invoicor.com/templates/construction) construction invoice template
  - [x] [/templates/roofing](https://invoicor.com/templates/roofing) roofing invoice template
  - [x] [/templates/painting](https://invoicor.com/templates/painting) painting invoice template
  - [x] [/templates/web-development](https://invoicor.com/templates/web-development) web development invoice template
  - [x] [/templates/personal-training](https://invoicor.com/templates/personal-training) personal trainer invoice template
  - [x] [/templates/tutoring](https://invoicor.com/templates/tutoring) tutoring invoice template
  - [x] [/templates/catering](https://invoicor.com/templates/catering) catering invoice template
  - [x] [/templates/moving](https://invoicor.com/templates/moving) moving company invoice template
  - [x] [/templates/pest-control](https://invoicor.com/templates/pest-control) pest control invoice template

### T2: Trade templates 21–35 (built)

- [x] **T2** · 15/15 live · languages: [L21–L30](#t2-in-every-language)
  - [x] [/templates/virtual-assistant](https://invoicor.com/templates/virtual-assistant) virtual assistant invoice template
  - [x] [/templates/pet-sitting](https://invoicor.com/templates/pet-sitting) pet sitting invoice template
  - [x] [/templates/makeup-artist](https://invoicor.com/templates/makeup-artist) makeup artist invoice template
  - [x] [/templates/carpentry](https://invoicor.com/templates/carpentry) carpentry invoice template
  - [x] [/templates/flooring](https://invoicor.com/templates/flooring) flooring invoice template
  - [x] [/templates/tile-installation](https://invoicor.com/templates/tile-installation) tile installation invoice template
  - [x] [/templates/drywall](https://invoicor.com/templates/drywall) drywall invoice template
  - [x] [/templates/masonry](https://invoicor.com/templates/masonry) masonry invoice template
  - [x] [/templates/fence-installation](https://invoicor.com/templates/fence-installation) fence installation invoice template
  - [x] [/templates/pool-service](https://invoicor.com/templates/pool-service) pool service invoice template
  - [x] [/templates/window-cleaning](https://invoicor.com/templates/window-cleaning) window cleaning invoice template
  - [x] [/templates/pressure-washing](https://invoicor.com/templates/pressure-washing) pressure washing invoice template
  - [x] [/templates/tree-service](https://invoicor.com/templates/tree-service) tree service invoice template
  - [x] [/templates/snow-removal](https://invoicor.com/templates/snow-removal) snow removal invoice template
  - [x] [/templates/locksmith](https://invoicor.com/templates/locksmith) locksmith invoice template

### T3: Trade templates 36–50 (built)

- [x] **T3** · 15/15 live · languages: [L31–L40](#t3-in-every-language)
  - [x] [/templates/appliance-repair](https://invoicor.com/templates/appliance-repair) appliance repair invoice template
  - [x] [/templates/junk-removal](https://invoicor.com/templates/junk-removal) junk removal invoice template
  - [x] [/templates/carpet-cleaning](https://invoicor.com/templates/carpet-cleaning) carpet cleaning invoice template
  - [x] [/templates/interior-design](https://invoicor.com/templates/interior-design) interior design invoice template
  - [x] [/templates/remodeling](https://invoicor.com/templates/remodeling) remodeling invoice template
  - [x] [/templates/garage-door-repair](https://invoicor.com/templates/garage-door-repair) garage door repair invoice template
  - [x] [/templates/dj](https://invoicor.com/templates/dj) dj invoice template
  - [x] [/templates/event-planning](https://invoicor.com/templates/event-planning) event planner invoice template
  - [x] [/templates/florist](https://invoicor.com/templates/florist) florist invoice template
  - [x] [/templates/massage-therapy](https://invoicor.com/templates/massage-therapy) massage therapy invoice template
  - [x] [/templates/translation](https://invoicor.com/templates/translation) translation invoice template
  - [x] [/templates/copywriting](https://invoicor.com/templates/copywriting) copywriter invoice template
  - [x] [/templates/social-media-management](https://invoicor.com/templates/social-media-management) social media manager invoice template
  - [x] [/templates/music-lessons](https://invoicor.com/templates/music-lessons) music teacher invoice template
  - [x] [/templates/bookkeeping](https://invoicor.com/templates/bookkeeping) bookkeeping invoice template

### T4: 10 trades: notary, home inspection, IT services …

- [ ] **T4** · 0/10 live · languages: [L81–L90](#t4-in-every-language)
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

### T5: Home and property services

- [ ] **T5** · 0/20 live · languages: [L131–L140](#t5-in-every-language)
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

### T6: Makers, repair, transport, events

- [ ] **T6** · 0/20 live · languages: [L161–L170](#t6-in-every-language)
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

### T7: Professional, wellness, care

- [ ] **T7** · 0/20 live · languages: [L201–L210](#t7-in-every-language)
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

### T8: Beauty, creative, specialist

- [ ] **T8** · 0/20 live · languages: [L231–L240](#t8-in-every-language)
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

### T9: Trades with demand of their own: auto repair, auto body, architect …

- [ ] **T9** · 0/16 live · languages: [L261–L270](#t9-in-every-language)
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

## Billing-type templates (B)

Direction (what these pages can and can't do) and every brief: [plan/billing.md](plan/billing.md)

### B1: Billing types I

- [ ] **B1** · 0/20 live · build with or after D1 (the parents) · languages: [L71–L80](#b1-in-every-language)
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

### B2: Billing types II

- [ ] **B2** · 0/20 live · languages: [L151–L160](#b2-in-every-language)
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

### B3: Billing types III

- [ ] **B3** · 0/19 live · 1 parked · languages: [L221–L230](#b3-in-every-language)
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

## Invoice types (general documents) (D)

Direction (what these pages can and can't do) and every brief: [plan/types.md](plan/types.md)

### D1: Invoice types: the general documents

- [ ] **D1** · 0/20 live · the parents of the billing types and big local searches (Anzahlungsrechnung, factuur zzp): build first · languages: [L61–L70](#d1-in-every-language)
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

## Industry pages ("invoice app for …") (I)

Direction (what these pages can and can't do) and every brief: [plan/industries.md](plan/industries.md)

### I1: Industry pages 1–20 (built)

- [x] **I1** · 20/20 live · languages: [L11–L20](#i1-in-every-language)
  - [x] [/industries/plumbers-hvac](https://invoicor.com/industries/plumbers-hvac) invoice app for plumbers
  - [x] [/industries/freelance-designers](https://invoicor.com/industries/freelance-designers) invoicing app for freelance designers
  - [x] [/industries/landscaping-lawn-care](https://invoicor.com/industries/landscaping-lawn-care) landscaping invoicing software
  - [x] [/industries/electricians](https://invoicor.com/industries/electricians) invoice app for electricians
  - [x] [/industries/general-contractors](https://invoicor.com/industries/general-contractors) invoice app for contractors
  - [x] [/industries/photographers-videographers](https://invoicor.com/industries/photographers-videographers) invoicing software for photographers
  - [x] [/industries/consultants-coaches](https://invoicor.com/industries/consultants-coaches) invoicing software for consultants
  - [x] [/industries/cleaning-services](https://invoicor.com/industries/cleaning-services) invoice app for cleaning business
  - [x] [/industries/personal-trainers](https://invoicor.com/industries/personal-trainers) invoicing for personal trainers
  - [x] [/industries/auto-detailing-mechanics](https://invoicor.com/industries/auto-detailing-mechanics) invoice app for mechanics
  - [x] [/industries/roofers](https://invoicor.com/industries/roofers) roofing invoice app
  - [x] [/industries/painters](https://invoicor.com/industries/painters) invoice app for painters
  - [x] [/industries/web-developers](https://invoicor.com/industries/web-developers) invoice app for freelance developers
  - [x] [/industries/tutors](https://invoicor.com/industries/tutors) invoice app for tutors
  - [x] [/industries/caterers](https://invoicor.com/industries/caterers) invoice app for caterers
  - [x] [/industries/movers](https://invoicor.com/industries/movers) invoice app for movers
  - [x] [/industries/pest-control](https://invoicor.com/industries/pest-control) pest control invoicing software
  - [x] [/industries/virtual-assistants](https://invoicor.com/industries/virtual-assistants) invoice app for virtual assistants
  - [x] [/industries/pet-care](https://invoicor.com/industries/pet-care) invoice app for dog walkers
  - [x] [/industries/hair-makeup-artists](https://invoicor.com/industries/hair-makeup-artists) invoice app for makeup artists

### I2: Industry pages 21–32 (built)

- [x] **I2** · 12/12 live · languages: [L41–L50](#i2-in-every-language)
  - [x] [/industries/carpenters](https://invoicor.com/industries/carpenters) invoice app for carpenters
  - [x] [/industries/flooring-installers](https://invoicor.com/industries/flooring-installers) invoice app for flooring installers
  - [x] [/industries/tile-installers](https://invoicor.com/industries/tile-installers) invoice app for tile installers
  - [x] [/industries/masons](https://invoicor.com/industries/masons) invoice app for masons
  - [x] [/industries/pool-service](https://invoicor.com/industries/pool-service) invoice app for pool service companies
  - [x] [/industries/window-cleaners](https://invoicor.com/industries/window-cleaners) invoice app for window cleaners
  - [x] [/industries/pressure-washing](https://invoicor.com/industries/pressure-washing) invoice app for pressure washing businesses
  - [x] [/industries/tree-service](https://invoicor.com/industries/tree-service) invoice app for tree service companies
  - [x] [/industries/snow-removal](https://invoicor.com/industries/snow-removal) invoice app for snow removal businesses
  - [x] [/industries/locksmiths](https://invoicor.com/industries/locksmiths) invoice app for locksmiths
  - [x] [/industries/appliance-repair](https://invoicor.com/industries/appliance-repair) invoice app for appliance repair technicians
  - [x] [/industries/junk-removal](https://invoicor.com/industries/junk-removal) invoice app for junk removal businesses

### I3: Industry pages 33–43 (built)

- [x] **I3** · 11/11 live · languages: [L51–L60](#i3-in-every-language)
  - [x] [/industries/carpet-cleaners](https://invoicor.com/industries/carpet-cleaners) invoice app for carpet cleaners
  - [x] [/industries/interior-designers](https://invoicor.com/industries/interior-designers) invoice app for interior designers
  - [x] [/industries/djs](https://invoicor.com/industries/djs) invoice app for djs
  - [x] [/industries/event-planners](https://invoicor.com/industries/event-planners) invoice app for event planners
  - [x] [/industries/florists](https://invoicor.com/industries/florists) invoice app for florists
  - [x] [/industries/massage-therapists](https://invoicor.com/industries/massage-therapists) invoice app for massage therapists
  - [x] [/industries/translators](https://invoicor.com/industries/translators) invoice app for translators
  - [x] [/industries/copywriters](https://invoicor.com/industries/copywriters) invoice app for copywriters
  - [x] [/industries/social-media-managers](https://invoicor.com/industries/social-media-managers) invoice app for social media managers
  - [x] [/industries/music-teachers](https://invoicor.com/industries/music-teachers) invoice app for music teachers
  - [x] [/industries/bookkeepers](https://invoicor.com/industries/bookkeepers) invoice app for bookkeepers

### I4: Industry pages for T4's trades

- [ ] **I4** · 0/10 live · languages: [L91–L100](#i4-in-every-language)
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

### I5: Industry pages for T5's trades

- [ ] **I5** · 0/20 live · languages: [L141–L150](#i5-in-every-language)
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

### I6: Industry pages for T6's trades

- [ ] **I6** · 0/20 live · languages: [L171–L180](#i6-in-every-language)
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

### I7: Industry pages for T7's trades

- [ ] **I7** · 0/20 live · languages: [L211–L220](#i7-in-every-language)
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

### I8: Industry pages for T8's trades

- [ ] **I8** · 0/20 live · languages: [L241–L250](#i8-in-every-language)
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

### I9: Architects, real estate agents, private investigators, equipment rental

- [ ] **I9** · 0/4 live · languages: [L271–L280](#i9-in-every-language)
  - [ ] [/industries/architects](plan/industries.md#industriesarchitects) invoice app for architects
  - [ ] [/industries/real-estate-agents](plan/industries.md#industriesreal-estate-agents) invoice app for real estate agents
  - [ ] [/industries/private-investigators](plan/industries.md#industriesprivate-investigators) invoice app for private investigators
  - [ ] [/industries/equipment-rental-companies](plan/industries.md#industriesequipment-rental-companies) invoice app for equipment rental companies

## Compare pages ("{competitor} alternative") (C)

Direction (what these pages can and can't do) and every brief: [plan/compare.md](plan/compare.md)

### C1: Compare pages (built, English only)

- [x] **C1** · 20/20 live
  - [x] [/compare/quickbooks](https://invoicor.com/compare/quickbooks) quickbooks alternative
  - [x] [/compare/freshbooks](https://invoicor.com/compare/freshbooks) freshbooks alternative
  - [x] [/compare/invoice2go](https://invoicor.com/compare/invoice2go) invoice2go alternative
  - [x] [/compare/wave](https://invoicor.com/compare/wave) wave alternative
  - [x] [/compare/xero](https://invoicor.com/compare/xero) xero alternative
  - [x] [/compare/zoho-invoice](https://invoicor.com/compare/zoho-invoice) zoho invoice alternative
  - [x] [/compare/square-invoices](https://invoicor.com/compare/square-invoices) square invoices alternative
  - [x] [/compare/honeybook](https://invoicor.com/compare/honeybook) honeybook alternative
  - [x] [/compare/bonsai](https://invoicor.com/compare/bonsai) bonsai alternative
  - [x] [/compare/stripe-invoices](https://invoicor.com/compare/stripe-invoices) stripe invoicing alternative
  - [x] [/compare/invoice-fly](https://invoicor.com/compare/invoice-fly) invoice fly alternative
  - [x] [/compare/bookipi](https://invoicor.com/compare/bookipi) bookipi alternative
  - [x] [/compare/joist](https://invoicor.com/compare/joist) joist alternative
  - [x] [/compare/jobber](https://invoicor.com/compare/jobber) jobber alternative
  - [x] [/compare/housecall-pro](https://invoicor.com/compare/housecall-pro) housecall pro alternative
  - [x] [/compare/invoice-ninja](https://invoicor.com/compare/invoice-ninja) invoice ninja alternative
  - [x] [/compare/harvest](https://invoicor.com/compare/harvest) harvest alternative
  - [x] [/compare/servicem8](https://invoicor.com/compare/servicem8) servicem8 alternative
  - [x] [/compare/billdu](https://invoicor.com/compare/billdu) billdu alternative
  - [x] [/compare/zervant](https://invoicor.com/compare/zervant) zervant alternative

### C2: 20 more compares (English only)

- [ ] **C2** · 0/20 live
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

## Free tools (TL)

Direction (what these pages can and can't do) and every brief: [plan/tools.md](plan/tools.md)

### TL0: Free tools built before the plan (hub, VAT, hours, hourly rate)

- [x] **TL0** · 4/4 live · languages: [L281–L290](#tl0-in-every-language)
  - [x] [/tools](https://invoicor.com/tools) free invoicing tools
  - [x] [/tools/vat-calculator](https://invoicor.com/tools/vat-calculator) vat calculator
  - [x] [/tools/hours-calculator](https://invoicor.com/tools/hours-calculator) hours calculator
  - [x] [/tools/hourly-rate-calculator](https://invoicor.com/tools/hourly-rate-calculator) freelance hourly rate calculator

### TL1: Free tools I

- [ ] **TL1** · 0/11 live · languages: [L101–L110](#tl1-in-every-language)
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

### TL2: Free tools II

- [ ] **TL2** · 0/10 live · languages: [L181–L190](#tl2-in-every-language)
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

### TL3: Pricing calculators for trades

- [ ] **TL3** · 0/20 live · needs task S4 · languages: [L251–L260](#tl3-in-every-language)
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

## Country pages (English) (CT)

Direction (what these pages can and can't do) and every brief: [plan/country.md](plan/country.md)

### CT1: Country pages I (English-speaking countries + EU reverse charge)

- [ ] **CT1** · 0/7 live · needs task S3 · languages: [L111–L120](#ct1-in-every-language)
  - [ ] [/invoice-generator-uk](plan/country.md#invoice-generator-uk) uk vat invoice requirements
  - [ ] [/invoice-generator-ireland](plan/country.md#invoice-generator-ireland) vat invoice ireland
  - [ ] [/invoice-generator-australia](plan/country.md#invoice-generator-australia) tax invoice australia
  - [ ] [/invoice-generator-new-zealand](plan/country.md#invoice-generator-new-zealand) gst invoice nz
  - [ ] [/invoice-generator-canada](plan/country.md#invoice-generator-canada) gst hst invoice canada
  - [ ] [/invoice-generator-south-africa](plan/country.md#invoice-generator-south-africa) vat invoice south africa
  - [ ] [/reverse-charge-invoice](plan/country.md#reverse-charge-invoice) eu reverse charge invoice

### CT2: Country pages II

- [ ] **CT2** · 0/6 live · needs task S3
  - [ ] [/invoice-generator-singapore](plan/country.md#invoice-generator-singapore) gst invoice singapore
  - [ ] [/invoice-generator-nigeria](plan/country.md#invoice-generator-nigeria) vat invoice nigeria
  - [ ] [/invoice-generator-uae](plan/country.md#invoice-generator-uae) tax invoice uae
  - [ ] [/invoice-generator-malta](plan/country.md#invoice-generator-malta) vat invoice malta
  - [ ] [/invoice-generator-hong-kong](plan/country.md#invoice-generator-hong-kong) invoice template hong kong
  - [ ] [/invoice-generator-switzerland](plan/country.md#invoice-generator-switzerland) vat invoice switzerland

### CT3: European countries in English (for foreign freelancers)

- [ ] **CT3** · 0/10 live · needs task S3
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

## Local pages (in the country's own language) (LO)

Direction (what these pages can and can't do) and every brief: [plan/local.md](plan/local.md)

### LO1: Invoice rules per country, in its own language

- [ ] **LO1** · 0/12 live · needs task S3; it, pt, pl stay on hold (e-invoicing)
  - [ ] [/de/rechnung-pflichtangaben](plan/local.md#derechnung-pflichtangaben) pflichtangaben rechnung
  - [ ] [/nl/factuureisen](plan/local.md#nlfactuureisen) factuureisen
  - [ ] [/fr/mentions-obligatoires-facture](plan/local.md#frmentions-obligatoires-facture) mentions obligatoires facture
  - [ ] [/es/requisitos-factura](plan/local.md#esrequisitos-factura) requisitos de una factura
  - [ ] [/sv/vad-ska-sta-pa-en-faktura](plan/local.md#svvad-ska-sta-pa-en-faktura) vad ska stå på en faktura
  - [ ] [/da/krav-til-faktura](plan/local.md#dakrav-til-faktura) krav til faktura
  - [ ] [/nb/krav-til-faktura](plan/local.md#nbkrav-til-faktura) krav til faktura
  - [ ] [/de/kleinbetragsrechnung](plan/local.md#dekleinbetragsrechnung) kleinbetragsrechnung
  - [ ] [/de/handwerkerrechnung](plan/local.md#dehandwerkerrechnung) handwerkerrechnung steuer absetzen
  - [ ] [/es/factura-simplificada](plan/local.md#esfactura-simplificada) factura simplificada
  - [ ] [/sv/rot-och-rut-avdrag-faktura](plan/local.md#svrot-och-rut-avdrag-faktura) rot avdrag faktura
  - [ ] [/da/haandvaerkerfradrag-faktura](plan/local.md#dahaandvaerkerfradrag-faktura) håndværkerfradrag faktura

### LO2: Local rivals, in their own language (HL9)

- [ ] **LO2** · 0/20 live
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

## Generators (other documents) (G)

Direction (what these pages can and can't do) and every brief: [plan/generators.md](plan/generators.md)

### G0: The free invoice generator (built)

- [x] **G0** · 1/1 live · languages: [L291–L300](#g0-in-every-language)
  - [x] [/free-invoice-generator](https://invoicor.com/free-invoice-generator) free invoice generator

### G1: Document generators (receipt, estimate, proforma, credit note)

- [ ] **G1** · 0/4 live · languages: [L191–L200](#g1-in-every-language)
  - [ ] [/free-receipt-generator](plan/generators.md#free-receipt-generator) free receipt generator
  - [ ] [/free-estimate-generator](plan/generators.md#free-estimate-generator) free estimate generator
  - [ ] [/free-proforma-invoice-generator](plan/generators.md#free-proforma-invoice-generator) proforma invoice generator
  - [ ] [/free-credit-note-generator](plan/generators.md#free-credit-note-generator) credit note generator

## Blog (learn.invoicor.com) (BL)

Direction (what these pages can and can't do) and every brief: [plan/blog.md](plan/blog.md)

### BL1: Blog articles 1–17 (built, learn.invoicor.com)

- [x] **BL1** · 17/17 live
  - [x] [learn:/how-to-use-an-invoice-maker-for-iphone](https://invoicor.comhttps://learn.invoicor.com/how-to-use-an-invoice-maker-for-iphone) how to use an invoice maker for iphone
  - [x] [learn:/how-to-create-an-invoice-on-iphone-in-seconds](https://invoicor.comhttps://learn.invoicor.com/how-to-create-an-invoice-on-iphone-in-seconds) how to create an invoice on iphone in seconds
  - [x] [learn:/free-invoice-app-for-iphone-what-to-look-for](https://invoicor.comhttps://learn.invoicor.com/free-invoice-app-for-iphone-what-to-look-for) free invoice app for iphone what to look for
  - [x] [learn:/how-pdf-invoice-templates-work-on-iphone](https://invoicor.comhttps://learn.invoicor.com/how-pdf-invoice-templates-work-on-iphone) how pdf invoice templates work on iphone
  - [x] [learn:/what-is-a-multi-currency-invoicing-app](https://invoicor.comhttps://learn.invoicor.com/what-is-a-multi-currency-invoicing-app) what is a multi currency invoicing app
  - [x] [learn:/how-a-tax-calculator-helps-when-creating-invoices](https://invoicor.comhttps://learn.invoicor.com/how-a-tax-calculator-helps-when-creating-invoices) how a tax calculator helps when creating invoices
  - [x] [learn:/how-to-share-an-invoice-pdf-from-iphone](https://invoicor.comhttps://learn.invoicor.com/how-to-share-an-invoice-pdf-from-iphone) how to share an invoice pdf from iphone
  - [x] [learn:/what-makes-an-invoice-look-professional](https://invoicor.comhttps://learn.invoicor.com/what-makes-an-invoice-look-professional) what makes an invoice look professional
  - [x] [learn:/invoice-creation-checklist-for-iphone-users](https://invoicor.comhttps://learn.invoicor.com/invoice-creation-checklist-for-iphone-users) invoice creation checklist for iphone users
  - [x] [learn:/what-is-an-invoice-maker](https://invoicor.comhttps://learn.invoicor.com/what-is-an-invoice-maker) what is an invoice maker
  - [x] [learn:/how-to-use-pdf-invoice-templates-on-iphone](https://invoicor.comhttps://learn.invoicor.com/how-to-use-pdf-invoice-templates-on-iphone) how to use pdf invoice templates on iphone
  - [x] [learn:/how-to-calculate-tax-on-an-invoice-in-the-app](https://invoicor.comhttps://learn.invoicor.com/how-to-calculate-tax-on-an-invoice-in-the-app) how to calculate tax on an invoice in the app
  - [x] [learn:/can-you-create-invoices-in-different-currencies](https://invoicor.comhttps://learn.invoicor.com/can-you-create-invoices-in-different-currencies) can you create invoices in different currencies
  - [x] [learn:/how-auto-fill-helps-you-create-invoices-faster](https://invoicor.comhttps://learn.invoicor.com/how-auto-fill-helps-you-create-invoices-faster) how auto fill helps you create invoices faster
  - [x] [learn:/how-to-share-invoices-instantly-from-iphone](https://invoicor.comhttps://learn.invoicor.com/how-to-share-invoices-instantly-from-iphone) how to share invoices instantly from iphone
  - [x] [learn:/how-to-create-a-receipt-on-iphone-in-minutes](https://invoicor.comhttps://learn.invoicor.com/how-to-create-a-receipt-on-iphone-in-minutes) how to create a receipt on iphone in minutes
  - [x] [learn:/how-to-save-an-invoice-as-a-pdf-on-iphone](https://invoicor.comhttps://learn.invoicor.com/how-to-save-an-invoice-as-a-pdf-on-iphone) how to save an invoice as a pdf on iphone

### BL2: Blog articles 18–34 (built, learn.invoicor.com)

- [x] **BL2** · 17/17 live
  - [x] [learn:/how-to-send-an-invoice-from-iphone-by-email](https://invoicor.comhttps://learn.invoicor.com/how-to-send-an-invoice-from-iphone-by-email) how to send an invoice from iphone by email
  - [x] [learn:/how-to-change-the-currency-on-an-invoice](https://invoicor.comhttps://learn.invoicor.com/how-to-change-the-currency-on-an-invoice) how to change the currency on an invoice
  - [x] [learn:/how-to-reuse-invoice-details-on-iphone](https://invoicor.comhttps://learn.invoicor.com/how-to-reuse-invoice-details-on-iphone) how to reuse invoice details on iphone
  - [x] [learn:/how-to-number-invoices-on-iphone](https://invoicor.comhttps://learn.invoicor.com/how-to-number-invoices-on-iphone) how to number invoices on iphone
  - [x] [learn:/what-should-an-invoice-include](https://invoicor.comhttps://learn.invoicor.com/what-should-an-invoice-include) what should an invoice include
  - [x] [learn:/what-is-a-pdf-invoice](https://invoicor.comhttps://learn.invoicor.com/what-is-a-pdf-invoice) what is a pdf invoice
  - [x] [learn:/what-does-auto-fill-mean-in-an-invoice-app](https://invoicor.comhttps://learn.invoicor.com/what-does-auto-fill-mean-in-an-invoice-app) what does auto fill mean in an invoice app
  - [x] [learn:/why-use-an-invoice-app-on-iphone](https://invoicor.comhttps://learn.invoicor.com/why-use-an-invoice-app-on-iphone) why use an invoice app on iphone
  - [x] [learn:/what-does-an-invoice-tax-calculator-do](https://invoicor.comhttps://learn.invoicor.com/what-does-an-invoice-tax-calculator-do) what does an invoice tax calculator do
  - [x] [learn:/what-is-a-multi-currency-invoice](https://invoicor.comhttps://learn.invoicor.com/what-is-a-multi-currency-invoice) what is a multi currency invoice
  - [x] [learn:/best-invoice-app-features-for-freelancers-on-iphone](https://invoicor.comhttps://learn.invoicor.com/best-invoice-app-features-for-freelancers-on-iphone) best invoice app features for freelancers on iphone
  - [x] [learn:/best-ways-to-send-invoices-from-iphone](https://invoicor.comhttps://learn.invoicor.com/best-ways-to-send-invoices-from-iphone) best ways to send invoices from iphone
  - [x] [learn:/best-invoice-template-styles-for-mobile-use](https://invoicor.comhttps://learn.invoicor.com/best-invoice-template-styles-for-mobile-use) best invoice template styles for mobile use
  - [x] [learn:/can-you-make-an-invoice-on-iphone-without-paper](https://invoicor.comhttps://learn.invoicor.com/can-you-make-an-invoice-on-iphone-without-paper) can you make an invoice on iphone without paper
  - [x] [learn:/can-you-edit-an-invoice-after-saving-it](https://invoicor.comhttps://learn.invoicor.com/can-you-edit-an-invoice-after-saving-it) can you edit an invoice after saving it
  - [x] [learn:/can-you-send-an-invoice-as-a-pdf-from-iphone](https://invoicor.comhttps://learn.invoicor.com/can-you-send-an-invoice-as-a-pdf-from-iphone) can you send an invoice as a pdf from iphone
  - [x] [learn:/do-you-need-to-fill-every-invoice-field](https://invoicor.comhttps://learn.invoicor.com/do-you-need-to-fill-every-invoice-field) do you need to fill every invoice field

## Core pages, hubs, trust and legal (P)

Direction (what these pages can and can't do) and every brief: [plan/core.md](plan/core.md)

### P0: Core pages (built): home, hubs, help, affiliate, terms, privacy, Android

- [x] **P0** · 9/9 live · languages: [L301–L310](#p0-in-every-language)
  - [x] [/](https://invoicor.com/) invoice app iphone
  - [x] [/templates](https://invoicor.com/templates) invoice templates
  - [x] [/industries](https://invoicor.com/industries) invoicing software by industry
  - [x] [/compare](https://invoicor.com/compare) invoice app alternatives
  - [x] [/help](https://invoicor.com/help) invoicor help
  - [x] [/affiliate](https://invoicor.com/affiliate) invoicor affiliate program
  - [x] [/terms](https://invoicor.com/terms) invoicor terms of service
  - [x] [/privacy](https://invoicor.com/privacy) invoicor privacy policy
  - [x] [/android](https://invoicor.com/android) invoicor for android: coming soon

### P1: Trust pages: about, contact (E-E-A-T)

- [ ] **P1** · 0/2 live · languages: [L121–L130](#p1-in-every-language)
  - [ ] [/about](plan/core.md#about) about invoicor
  - [ ] [/contact](plan/core.md#contact) contact invoicor

## Languages (L)

One L item = one item's pages in one language. The instructions per page (search words, what to
write for that country, what not to) are in the language's file; the number links there.

### T1 in every language

Trade templates 1–20 (built) · 20 pages

- [ ] [**L1**](plan/languages/de.md#l1-t1-in-german) German · 0/20
- [ ] [**L2**](plan/languages/es.md#l2-t1-in-spanish) Spanish · 0/20
- [ ] [**L3**](plan/languages/fr.md#l3-t1-in-french) French · 0/20
- [ ] [**L4**](plan/languages/nl.md#l4-t1-in-dutch) Dutch · 0/20
- [ ] [**L5**](plan/languages/sv.md#l5-t1-in-swedish) Swedish · 0/20
- [ ] [**L6**](plan/languages/da.md#l6-t1-in-danish) Danish · 0/20
- [ ] [**L7**](plan/languages/nb.md#l7-t1-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L8**](plan/languages/it.md#l8-t1-in-italian) Italian · 0/20
- [ ] [**L9**](plan/languages/pt.md#l9-t1-in-portuguese) Portuguese · 0/20
- [ ] [**L10**](plan/languages/pl.md#l10-t1-in-polish) Polish · 0/20

### I1 in every language

Industry pages 1–20 (built) · 20 pages

- [ ] [**L11**](plan/languages/de.md#l11-i1-in-german) German · 0/20
- [ ] [**L12**](plan/languages/es.md#l12-i1-in-spanish) Spanish · 0/20
- [ ] [**L13**](plan/languages/fr.md#l13-i1-in-french) French · 0/20
- [ ] [**L14**](plan/languages/nl.md#l14-i1-in-dutch) Dutch · 0/20
- [ ] [**L15**](plan/languages/sv.md#l15-i1-in-swedish) Swedish · 0/20
- [ ] [**L16**](plan/languages/da.md#l16-i1-in-danish) Danish · 0/20
- [ ] [**L17**](plan/languages/nb.md#l17-i1-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L18**](plan/languages/it.md#l18-i1-in-italian) Italian · 0/20
- [ ] [**L19**](plan/languages/pt.md#l19-i1-in-portuguese) Portuguese · 0/20
- [ ] [**L20**](plan/languages/pl.md#l20-i1-in-polish) Polish · 0/20

### T2 in every language

Trade templates 21–35 (built) · 15 pages

- [ ] [**L21**](plan/languages/de.md#l21-t2-in-german) German · 0/15
- [ ] [**L22**](plan/languages/es.md#l22-t2-in-spanish) Spanish · 0/15
- [ ] [**L23**](plan/languages/fr.md#l23-t2-in-french) French · 0/15
- [ ] [**L24**](plan/languages/nl.md#l24-t2-in-dutch) Dutch · 0/15
- [ ] [**L25**](plan/languages/sv.md#l25-t2-in-swedish) Swedish · 0/15
- [ ] [**L26**](plan/languages/da.md#l26-t2-in-danish) Danish · 0/15
- [ ] [**L27**](plan/languages/nb.md#l27-t2-in-norwegian-bokmål) Norwegian (Bokmål) · 0/15
- [ ] [**L28**](plan/languages/it.md#l28-t2-in-italian) Italian · 0/15
- [ ] [**L29**](plan/languages/pt.md#l29-t2-in-portuguese) Portuguese · 0/15
- [ ] [**L30**](plan/languages/pl.md#l30-t2-in-polish) Polish · 0/15

### T3 in every language

Trade templates 36–50 (built) · 15 pages

- [ ] [**L31**](plan/languages/de.md#l31-t3-in-german) German · 0/15
- [ ] [**L32**](plan/languages/es.md#l32-t3-in-spanish) Spanish · 0/15
- [ ] [**L33**](plan/languages/fr.md#l33-t3-in-french) French · 0/15
- [ ] [**L34**](plan/languages/nl.md#l34-t3-in-dutch) Dutch · 0/15
- [ ] [**L35**](plan/languages/sv.md#l35-t3-in-swedish) Swedish · 0/15
- [ ] [**L36**](plan/languages/da.md#l36-t3-in-danish) Danish · 0/15
- [ ] [**L37**](plan/languages/nb.md#l37-t3-in-norwegian-bokmål) Norwegian (Bokmål) · 0/15
- [ ] [**L38**](plan/languages/it.md#l38-t3-in-italian) Italian · 0/15
- [ ] [**L39**](plan/languages/pt.md#l39-t3-in-portuguese) Portuguese · 0/15
- [ ] [**L40**](plan/languages/pl.md#l40-t3-in-polish) Polish · 0/15

### I2 in every language

Industry pages 21–32 (built) · 12 pages

- [ ] [**L41**](plan/languages/de.md#l41-i2-in-german) German · 0/12
- [ ] [**L42**](plan/languages/es.md#l42-i2-in-spanish) Spanish · 0/12
- [ ] [**L43**](plan/languages/fr.md#l43-i2-in-french) French · 0/12
- [ ] [**L44**](plan/languages/nl.md#l44-i2-in-dutch) Dutch · 0/12
- [ ] [**L45**](plan/languages/sv.md#l45-i2-in-swedish) Swedish · 0/12
- [ ] [**L46**](plan/languages/da.md#l46-i2-in-danish) Danish · 0/12
- [ ] [**L47**](plan/languages/nb.md#l47-i2-in-norwegian-bokmål) Norwegian (Bokmål) · 0/12
- [ ] [**L48**](plan/languages/it.md#l48-i2-in-italian) Italian · 0/12
- [ ] [**L49**](plan/languages/pt.md#l49-i2-in-portuguese) Portuguese · 0/12
- [ ] [**L50**](plan/languages/pl.md#l50-i2-in-polish) Polish · 0/12

### I3 in every language

Industry pages 33–43 (built) · 11 pages

- [ ] [**L51**](plan/languages/de.md#l51-i3-in-german) German · 0/11
- [ ] [**L52**](plan/languages/es.md#l52-i3-in-spanish) Spanish · 0/11
- [ ] [**L53**](plan/languages/fr.md#l53-i3-in-french) French · 0/11
- [ ] [**L54**](plan/languages/nl.md#l54-i3-in-dutch) Dutch · 0/11
- [ ] [**L55**](plan/languages/sv.md#l55-i3-in-swedish) Swedish · 0/11
- [ ] [**L56**](plan/languages/da.md#l56-i3-in-danish) Danish · 0/11
- [ ] [**L57**](plan/languages/nb.md#l57-i3-in-norwegian-bokmål) Norwegian (Bokmål) · 0/11
- [ ] [**L58**](plan/languages/it.md#l58-i3-in-italian) Italian · 0/11
- [ ] [**L59**](plan/languages/pt.md#l59-i3-in-portuguese) Portuguese · 0/11
- [ ] [**L60**](plan/languages/pl.md#l60-i3-in-polish) Polish · 0/11

### D1 in every language

Invoice types: the general documents · 17 pages

- [ ] [**L61**](plan/languages/de.md#l61-d1-in-german) German · 0/17
- [ ] [**L62**](plan/languages/es.md#l62-d1-in-spanish) Spanish · 0/17
- [ ] [**L63**](plan/languages/fr.md#l63-d1-in-french) French · 0/17
- [ ] [**L64**](plan/languages/nl.md#l64-d1-in-dutch) Dutch · 0/17
- [ ] [**L65**](plan/languages/sv.md#l65-d1-in-swedish) Swedish · 0/17
- [ ] [**L66**](plan/languages/da.md#l66-d1-in-danish) Danish · 0/17
- [ ] [**L67**](plan/languages/nb.md#l67-d1-in-norwegian-bokmål) Norwegian (Bokmål) · 0/17
- [ ] [**L68**](plan/languages/it.md#l68-d1-in-italian) Italian · 0/17
- [ ] [**L69**](plan/languages/pt.md#l69-d1-in-portuguese) Portuguese · 0/17
- [ ] [**L70**](plan/languages/pl.md#l70-d1-in-polish) Polish · 0/17

### B1 in every language

Billing types I · 20 pages

- [ ] [**L71**](plan/languages/de.md#l71-b1-in-german) German · 0/20
- [ ] [**L72**](plan/languages/es.md#l72-b1-in-spanish) Spanish · 0/20
- [ ] [**L73**](plan/languages/fr.md#l73-b1-in-french) French · 0/20
- [ ] [**L74**](plan/languages/nl.md#l74-b1-in-dutch) Dutch · 0/20
- [ ] [**L75**](plan/languages/sv.md#l75-b1-in-swedish) Swedish · 0/20
- [ ] [**L76**](plan/languages/da.md#l76-b1-in-danish) Danish · 0/20
- [ ] [**L77**](plan/languages/nb.md#l77-b1-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L78**](plan/languages/it.md#l78-b1-in-italian) Italian · 0/20
- [ ] [**L79**](plan/languages/pt.md#l79-b1-in-portuguese) Portuguese · 0/20
- [ ] [**L80**](plan/languages/pl.md#l80-b1-in-polish) Polish · 0/20

### T4 in every language

10 trades: notary, home inspection, IT services … · 9 pages

- [ ] [**L81**](plan/languages/de.md#l81-t4-in-german) German · 0/9
- [ ] [**L82**](plan/languages/es.md#l82-t4-in-spanish) Spanish · 0/9
- [ ] [**L83**](plan/languages/fr.md#l83-t4-in-french) French · 0/9
- [ ] [**L84**](plan/languages/nl.md#l84-t4-in-dutch) Dutch · 0/9
- [ ] [**L85**](plan/languages/sv.md#l85-t4-in-swedish) Swedish · 0/9
- [ ] [**L86**](plan/languages/da.md#l86-t4-in-danish) Danish · 0/9
- [ ] [**L87**](plan/languages/nb.md#l87-t4-in-norwegian-bokmål) Norwegian (Bokmål) · 0/9
- [ ] [**L88**](plan/languages/it.md#l88-t4-in-italian) Italian · 0/9
- [ ] [**L89**](plan/languages/pt.md#l89-t4-in-portuguese) Portuguese · 0/9
- [ ] [**L90**](plan/languages/pl.md#l90-t4-in-polish) Polish · 0/9

### I4 in every language

Industry pages for T4's trades · 9 pages

- [ ] [**L91**](plan/languages/de.md#l91-i4-in-german) German · 0/9
- [ ] [**L92**](plan/languages/es.md#l92-i4-in-spanish) Spanish · 0/9
- [ ] [**L93**](plan/languages/fr.md#l93-i4-in-french) French · 0/9
- [ ] [**L94**](plan/languages/nl.md#l94-i4-in-dutch) Dutch · 0/9
- [ ] [**L95**](plan/languages/sv.md#l95-i4-in-swedish) Swedish · 0/9
- [ ] [**L96**](plan/languages/da.md#l96-i4-in-danish) Danish · 0/9
- [ ] [**L97**](plan/languages/nb.md#l97-i4-in-norwegian-bokmål) Norwegian (Bokmål) · 0/9
- [ ] [**L98**](plan/languages/it.md#l98-i4-in-italian) Italian · 0/9
- [ ] [**L99**](plan/languages/pt.md#l99-i4-in-portuguese) Portuguese · 0/9
- [ ] [**L100**](plan/languages/pl.md#l100-i4-in-polish) Polish · 0/9

### TL1 in every language

Free tools I · 9 pages

- [ ] [**L101**](plan/languages/de.md#l101-tl1-in-german) German · 0/9
- [ ] [**L102**](plan/languages/es.md#l102-tl1-in-spanish) Spanish · 0/9
- [ ] [**L103**](plan/languages/fr.md#l103-tl1-in-french) French · 0/9
- [ ] [**L104**](plan/languages/nl.md#l104-tl1-in-dutch) Dutch · 0/9
- [ ] [**L105**](plan/languages/sv.md#l105-tl1-in-swedish) Swedish · 0/9
- [ ] [**L106**](plan/languages/da.md#l106-tl1-in-danish) Danish · 0/9
- [ ] [**L107**](plan/languages/nb.md#l107-tl1-in-norwegian-bokmål) Norwegian (Bokmål) · 0/9
- [ ] [**L108**](plan/languages/it.md#l108-tl1-in-italian) Italian · 0/9
- [ ] [**L109**](plan/languages/pt.md#l109-tl1-in-portuguese) Portuguese · 0/9
- [ ] [**L110**](plan/languages/pl.md#l110-tl1-in-polish) Polish · 0/9

### CT1 in every language

Country pages I (English-speaking countries + EU reverse charge) · 1 pages

- [ ] [**L111**](plan/languages/de.md#l111-ct1-in-german) German · 0/1
- [ ] [**L112**](plan/languages/es.md#l112-ct1-in-spanish) Spanish · 0/1
- [ ] [**L113**](plan/languages/fr.md#l113-ct1-in-french) French · 0/1
- [ ] [**L114**](plan/languages/nl.md#l114-ct1-in-dutch) Dutch · 0/1
- [ ] [**L115**](plan/languages/sv.md#l115-ct1-in-swedish) Swedish · 0/1
- [ ] [**L116**](plan/languages/da.md#l116-ct1-in-danish) Danish · 0/1
- [ ] [**L117**](plan/languages/nb.md#l117-ct1-in-norwegian-bokmål) Norwegian (Bokmål) · 0/1
- [ ] [**L118**](plan/languages/it.md#l118-ct1-in-italian) Italian · 0/1
- [ ] [**L119**](plan/languages/pt.md#l119-ct1-in-portuguese) Portuguese · 0/1
- [ ] [**L120**](plan/languages/pl.md#l120-ct1-in-polish) Polish · 0/1

### P1 in every language

Trust pages: about, contact (E-E-A-T) · 2 pages

- [ ] [**L121**](plan/languages/de.md#l121-p1-in-german) German · 0/2
- [ ] [**L122**](plan/languages/es.md#l122-p1-in-spanish) Spanish · 0/2
- [ ] [**L123**](plan/languages/fr.md#l123-p1-in-french) French · 0/2
- [ ] [**L124**](plan/languages/nl.md#l124-p1-in-dutch) Dutch · 0/2
- [ ] [**L125**](plan/languages/sv.md#l125-p1-in-swedish) Swedish · 0/2
- [ ] [**L126**](plan/languages/da.md#l126-p1-in-danish) Danish · 0/2
- [ ] [**L127**](plan/languages/nb.md#l127-p1-in-norwegian-bokmål) Norwegian (Bokmål) · 0/2
- [ ] [**L128**](plan/languages/it.md#l128-p1-in-italian) Italian · 0/2
- [ ] [**L129**](plan/languages/pt.md#l129-p1-in-portuguese) Portuguese · 0/2
- [ ] [**L130**](plan/languages/pl.md#l130-p1-in-polish) Polish · 0/2

### T5 in every language

Home and property services · 20 pages

- [ ] [**L131**](plan/languages/de.md#l131-t5-in-german) German · 0/20
- [ ] [**L132**](plan/languages/es.md#l132-t5-in-spanish) Spanish · 0/20
- [ ] [**L133**](plan/languages/fr.md#l133-t5-in-french) French · 0/20
- [ ] [**L134**](plan/languages/nl.md#l134-t5-in-dutch) Dutch · 0/20
- [ ] [**L135**](plan/languages/sv.md#l135-t5-in-swedish) Swedish · 0/20
- [ ] [**L136**](plan/languages/da.md#l136-t5-in-danish) Danish · 0/20
- [ ] [**L137**](plan/languages/nb.md#l137-t5-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L138**](plan/languages/it.md#l138-t5-in-italian) Italian · 0/20
- [ ] [**L139**](plan/languages/pt.md#l139-t5-in-portuguese) Portuguese · 0/20
- [ ] [**L140**](plan/languages/pl.md#l140-t5-in-polish) Polish · 0/20

### I5 in every language

Industry pages for T5's trades · 20 pages

- [ ] [**L141**](plan/languages/de.md#l141-i5-in-german) German · 0/20
- [ ] [**L142**](plan/languages/es.md#l142-i5-in-spanish) Spanish · 0/20
- [ ] [**L143**](plan/languages/fr.md#l143-i5-in-french) French · 0/20
- [ ] [**L144**](plan/languages/nl.md#l144-i5-in-dutch) Dutch · 0/20
- [ ] [**L145**](plan/languages/sv.md#l145-i5-in-swedish) Swedish · 0/20
- [ ] [**L146**](plan/languages/da.md#l146-i5-in-danish) Danish · 0/20
- [ ] [**L147**](plan/languages/nb.md#l147-i5-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L148**](plan/languages/it.md#l148-i5-in-italian) Italian · 0/20
- [ ] [**L149**](plan/languages/pt.md#l149-i5-in-portuguese) Portuguese · 0/20
- [ ] [**L150**](plan/languages/pl.md#l150-i5-in-polish) Polish · 0/20

### B2 in every language

Billing types II · 20 pages

- [ ] [**L151**](plan/languages/de.md#l151-b2-in-german) German · 0/20
- [ ] [**L152**](plan/languages/es.md#l152-b2-in-spanish) Spanish · 0/20
- [ ] [**L153**](plan/languages/fr.md#l153-b2-in-french) French · 0/20
- [ ] [**L154**](plan/languages/nl.md#l154-b2-in-dutch) Dutch · 0/20
- [ ] [**L155**](plan/languages/sv.md#l155-b2-in-swedish) Swedish · 0/20
- [ ] [**L156**](plan/languages/da.md#l156-b2-in-danish) Danish · 0/20
- [ ] [**L157**](plan/languages/nb.md#l157-b2-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L158**](plan/languages/it.md#l158-b2-in-italian) Italian · 0/20
- [ ] [**L159**](plan/languages/pt.md#l159-b2-in-portuguese) Portuguese · 0/20
- [ ] [**L160**](plan/languages/pl.md#l160-b2-in-polish) Polish · 0/20

### T6 in every language

Makers, repair, transport, events · 20 pages

- [ ] [**L161**](plan/languages/de.md#l161-t6-in-german) German · 0/20
- [ ] [**L162**](plan/languages/es.md#l162-t6-in-spanish) Spanish · 0/20
- [ ] [**L163**](plan/languages/fr.md#l163-t6-in-french) French · 0/20
- [ ] [**L164**](plan/languages/nl.md#l164-t6-in-dutch) Dutch · 0/20
- [ ] [**L165**](plan/languages/sv.md#l165-t6-in-swedish) Swedish · 0/20
- [ ] [**L166**](plan/languages/da.md#l166-t6-in-danish) Danish · 0/20
- [ ] [**L167**](plan/languages/nb.md#l167-t6-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L168**](plan/languages/it.md#l168-t6-in-italian) Italian · 0/20
- [ ] [**L169**](plan/languages/pt.md#l169-t6-in-portuguese) Portuguese · 0/20
- [ ] [**L170**](plan/languages/pl.md#l170-t6-in-polish) Polish · 0/20

### I6 in every language

Industry pages for T6's trades · 20 pages

- [ ] [**L171**](plan/languages/de.md#l171-i6-in-german) German · 0/20
- [ ] [**L172**](plan/languages/es.md#l172-i6-in-spanish) Spanish · 0/20
- [ ] [**L173**](plan/languages/fr.md#l173-i6-in-french) French · 0/20
- [ ] [**L174**](plan/languages/nl.md#l174-i6-in-dutch) Dutch · 0/20
- [ ] [**L175**](plan/languages/sv.md#l175-i6-in-swedish) Swedish · 0/20
- [ ] [**L176**](plan/languages/da.md#l176-i6-in-danish) Danish · 0/20
- [ ] [**L177**](plan/languages/nb.md#l177-i6-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L178**](plan/languages/it.md#l178-i6-in-italian) Italian · 0/20
- [ ] [**L179**](plan/languages/pt.md#l179-i6-in-portuguese) Portuguese · 0/20
- [ ] [**L180**](plan/languages/pl.md#l180-i6-in-polish) Polish · 0/20

### TL2 in every language

Free tools II · 8 pages

- [ ] [**L181**](plan/languages/de.md#l181-tl2-in-german) German · 0/8
- [ ] [**L182**](plan/languages/es.md#l182-tl2-in-spanish) Spanish · 0/8
- [ ] [**L183**](plan/languages/fr.md#l183-tl2-in-french) French · 0/8
- [ ] [**L184**](plan/languages/nl.md#l184-tl2-in-dutch) Dutch · 0/8
- [ ] [**L185**](plan/languages/sv.md#l185-tl2-in-swedish) Swedish · 0/8
- [ ] [**L186**](plan/languages/da.md#l186-tl2-in-danish) Danish · 0/8
- [ ] [**L187**](plan/languages/nb.md#l187-tl2-in-norwegian-bokmål) Norwegian (Bokmål) · 0/8
- [ ] [**L188**](plan/languages/it.md#l188-tl2-in-italian) Italian · 0/8
- [ ] [**L189**](plan/languages/pt.md#l189-tl2-in-portuguese) Portuguese · 0/8
- [ ] [**L190**](plan/languages/pl.md#l190-tl2-in-polish) Polish · 0/8

### G1 in every language

Document generators (receipt, estimate, proforma, credit note) · 4 pages

- [ ] [**L191**](plan/languages/de.md#l191-g1-in-german) German · 0/4
- [ ] [**L192**](plan/languages/es.md#l192-g1-in-spanish) Spanish · 0/4
- [ ] [**L193**](plan/languages/fr.md#l193-g1-in-french) French · 0/4
- [ ] [**L194**](plan/languages/nl.md#l194-g1-in-dutch) Dutch · 0/4
- [ ] [**L195**](plan/languages/sv.md#l195-g1-in-swedish) Swedish · 0/4
- [ ] [**L196**](plan/languages/da.md#l196-g1-in-danish) Danish · 0/4
- [ ] [**L197**](plan/languages/nb.md#l197-g1-in-norwegian-bokmål) Norwegian (Bokmål) · 0/4
- [ ] [**L198**](plan/languages/it.md#l198-g1-in-italian) Italian · 0/4
- [ ] [**L199**](plan/languages/pt.md#l199-g1-in-portuguese) Portuguese · 0/4
- [ ] [**L200**](plan/languages/pl.md#l200-g1-in-polish) Polish · 0/4

### T7 in every language

Professional, wellness, care · 19 pages

- [ ] [**L201**](plan/languages/de.md#l201-t7-in-german) German · 0/19
- [ ] [**L202**](plan/languages/es.md#l202-t7-in-spanish) Spanish · 0/19
- [ ] [**L203**](plan/languages/fr.md#l203-t7-in-french) French · 0/19
- [ ] [**L204**](plan/languages/nl.md#l204-t7-in-dutch) Dutch · 0/19
- [ ] [**L205**](plan/languages/sv.md#l205-t7-in-swedish) Swedish · 0/19
- [ ] [**L206**](plan/languages/da.md#l206-t7-in-danish) Danish · 0/19
- [ ] [**L207**](plan/languages/nb.md#l207-t7-in-norwegian-bokmål) Norwegian (Bokmål) · 0/19
- [ ] [**L208**](plan/languages/it.md#l208-t7-in-italian) Italian · 0/19
- [ ] [**L209**](plan/languages/pt.md#l209-t7-in-portuguese) Portuguese · 0/19
- [ ] [**L210**](plan/languages/pl.md#l210-t7-in-polish) Polish · 0/19

### I7 in every language

Industry pages for T7's trades · 19 pages

- [ ] [**L211**](plan/languages/de.md#l211-i7-in-german) German · 0/19
- [ ] [**L212**](plan/languages/es.md#l212-i7-in-spanish) Spanish · 0/19
- [ ] [**L213**](plan/languages/fr.md#l213-i7-in-french) French · 0/19
- [ ] [**L214**](plan/languages/nl.md#l214-i7-in-dutch) Dutch · 0/19
- [ ] [**L215**](plan/languages/sv.md#l215-i7-in-swedish) Swedish · 0/19
- [ ] [**L216**](plan/languages/da.md#l216-i7-in-danish) Danish · 0/19
- [ ] [**L217**](plan/languages/nb.md#l217-i7-in-norwegian-bokmål) Norwegian (Bokmål) · 0/19
- [ ] [**L218**](plan/languages/it.md#l218-i7-in-italian) Italian · 0/19
- [ ] [**L219**](plan/languages/pt.md#l219-i7-in-portuguese) Portuguese · 0/19
- [ ] [**L220**](plan/languages/pl.md#l220-i7-in-polish) Polish · 0/19

### B3 in every language

Billing types III · 19 pages

- [ ] [**L221**](plan/languages/de.md#l221-b3-in-german) German · 0/19
- [ ] [**L222**](plan/languages/es.md#l222-b3-in-spanish) Spanish · 0/19
- [ ] [**L223**](plan/languages/fr.md#l223-b3-in-french) French · 0/19
- [ ] [**L224**](plan/languages/nl.md#l224-b3-in-dutch) Dutch · 0/19
- [ ] [**L225**](plan/languages/sv.md#l225-b3-in-swedish) Swedish · 0/19
- [ ] [**L226**](plan/languages/da.md#l226-b3-in-danish) Danish · 0/19
- [ ] [**L227**](plan/languages/nb.md#l227-b3-in-norwegian-bokmål) Norwegian (Bokmål) · 0/19
- [ ] [**L228**](plan/languages/it.md#l228-b3-in-italian) Italian · 0/19
- [ ] [**L229**](plan/languages/pt.md#l229-b3-in-portuguese) Portuguese · 0/19
- [ ] [**L230**](plan/languages/pl.md#l230-b3-in-polish) Polish · 0/19

### T8 in every language

Beauty, creative, specialist · 20 pages

- [ ] [**L231**](plan/languages/de.md#l231-t8-in-german) German · 0/20
- [ ] [**L232**](plan/languages/es.md#l232-t8-in-spanish) Spanish · 0/20
- [ ] [**L233**](plan/languages/fr.md#l233-t8-in-french) French · 0/20
- [ ] [**L234**](plan/languages/nl.md#l234-t8-in-dutch) Dutch · 0/20
- [ ] [**L235**](plan/languages/sv.md#l235-t8-in-swedish) Swedish · 0/20
- [ ] [**L236**](plan/languages/da.md#l236-t8-in-danish) Danish · 0/20
- [ ] [**L237**](plan/languages/nb.md#l237-t8-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L238**](plan/languages/it.md#l238-t8-in-italian) Italian · 0/20
- [ ] [**L239**](plan/languages/pt.md#l239-t8-in-portuguese) Portuguese · 0/20
- [ ] [**L240**](plan/languages/pl.md#l240-t8-in-polish) Polish · 0/20

### I8 in every language

Industry pages for T8's trades · 20 pages

- [ ] [**L241**](plan/languages/de.md#l241-i8-in-german) German · 0/20
- [ ] [**L242**](plan/languages/es.md#l242-i8-in-spanish) Spanish · 0/20
- [ ] [**L243**](plan/languages/fr.md#l243-i8-in-french) French · 0/20
- [ ] [**L244**](plan/languages/nl.md#l244-i8-in-dutch) Dutch · 0/20
- [ ] [**L245**](plan/languages/sv.md#l245-i8-in-swedish) Swedish · 0/20
- [ ] [**L246**](plan/languages/da.md#l246-i8-in-danish) Danish · 0/20
- [ ] [**L247**](plan/languages/nb.md#l247-i8-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L248**](plan/languages/it.md#l248-i8-in-italian) Italian · 0/20
- [ ] [**L249**](plan/languages/pt.md#l249-i8-in-portuguese) Portuguese · 0/20
- [ ] [**L250**](plan/languages/pl.md#l250-i8-in-polish) Polish · 0/20

### TL3 in every language

Pricing calculators for trades · 20 pages

- [ ] [**L251**](plan/languages/de.md#l251-tl3-in-german) German · 0/20
- [ ] [**L252**](plan/languages/es.md#l252-tl3-in-spanish) Spanish · 0/20
- [ ] [**L253**](plan/languages/fr.md#l253-tl3-in-french) French · 0/20
- [ ] [**L254**](plan/languages/nl.md#l254-tl3-in-dutch) Dutch · 0/20
- [ ] [**L255**](plan/languages/sv.md#l255-tl3-in-swedish) Swedish · 0/20
- [ ] [**L256**](plan/languages/da.md#l256-tl3-in-danish) Danish · 0/20
- [ ] [**L257**](plan/languages/nb.md#l257-tl3-in-norwegian-bokmål) Norwegian (Bokmål) · 0/20
- [ ] [**L258**](plan/languages/it.md#l258-tl3-in-italian) Italian · 0/20
- [ ] [**L259**](plan/languages/pt.md#l259-tl3-in-portuguese) Portuguese · 0/20
- [ ] [**L260**](plan/languages/pl.md#l260-tl3-in-polish) Polish · 0/20

### T9 in every language

Trades with demand of their own: auto repair, auto body, architect … · 16 pages

- [ ] [**L261**](plan/languages/de.md#l261-t9-in-german) German · 0/16
- [ ] [**L262**](plan/languages/es.md#l262-t9-in-spanish) Spanish · 0/16
- [ ] [**L263**](plan/languages/fr.md#l263-t9-in-french) French · 0/16
- [ ] [**L264**](plan/languages/nl.md#l264-t9-in-dutch) Dutch · 0/16
- [ ] [**L265**](plan/languages/sv.md#l265-t9-in-swedish) Swedish · 0/16
- [ ] [**L266**](plan/languages/da.md#l266-t9-in-danish) Danish · 0/16
- [ ] [**L267**](plan/languages/nb.md#l267-t9-in-norwegian-bokmål) Norwegian (Bokmål) · 0/16
- [ ] [**L268**](plan/languages/it.md#l268-t9-in-italian) Italian · 0/16
- [ ] [**L269**](plan/languages/pt.md#l269-t9-in-portuguese) Portuguese · 0/16
- [ ] [**L270**](plan/languages/pl.md#l270-t9-in-polish) Polish · 0/16

### I9 in every language

Architects, real estate agents, private investigators, equipment rental · 4 pages

- [ ] [**L271**](plan/languages/de.md#l271-i9-in-german) German · 0/4
- [ ] [**L272**](plan/languages/es.md#l272-i9-in-spanish) Spanish · 0/4
- [ ] [**L273**](plan/languages/fr.md#l273-i9-in-french) French · 0/4
- [ ] [**L274**](plan/languages/nl.md#l274-i9-in-dutch) Dutch · 0/4
- [ ] [**L275**](plan/languages/sv.md#l275-i9-in-swedish) Swedish · 0/4
- [ ] [**L276**](plan/languages/da.md#l276-i9-in-danish) Danish · 0/4
- [ ] [**L277**](plan/languages/nb.md#l277-i9-in-norwegian-bokmål) Norwegian (Bokmål) · 0/4
- [ ] [**L278**](plan/languages/it.md#l278-i9-in-italian) Italian · 0/4
- [ ] [**L279**](plan/languages/pt.md#l279-i9-in-portuguese) Portuguese · 0/4
- [ ] [**L280**](plan/languages/pl.md#l280-i9-in-polish) Polish · 0/4

### TL0 in every language

Free tools built before the plan (hub, VAT, hours, hourly rate) · 4 pages

- [x] [**L281**](plan/languages/de.md#l281-tl0-in-german) German · 4/4
- [x] [**L282**](plan/languages/es.md#l282-tl0-in-spanish) Spanish · 4/4
- [x] [**L283**](plan/languages/fr.md#l283-tl0-in-french) French · 4/4
- [x] [**L284**](plan/languages/nl.md#l284-tl0-in-dutch) Dutch · 4/4
- [x] [**L285**](plan/languages/sv.md#l285-tl0-in-swedish) Swedish · 4/4
- [x] [**L286**](plan/languages/da.md#l286-tl0-in-danish) Danish · 4/4
- [x] [**L287**](plan/languages/nb.md#l287-tl0-in-norwegian-bokmål) Norwegian (Bokmål) · 4/4
- [x] [**L288**](plan/languages/it.md#l288-tl0-in-italian) Italian · 4/4
- [x] [**L289**](plan/languages/pt.md#l289-tl0-in-portuguese) Portuguese · 4/4
- [x] [**L290**](plan/languages/pl.md#l290-tl0-in-polish) Polish · 4/4

### G0 in every language

The free invoice generator (built) · 1 pages

- [x] [**L291**](plan/languages/de.md#l291-g0-in-german) German · 1/1
- [x] [**L292**](plan/languages/es.md#l292-g0-in-spanish) Spanish · 1/1
- [x] [**L293**](plan/languages/fr.md#l293-g0-in-french) French · 1/1
- [x] [**L294**](plan/languages/nl.md#l294-g0-in-dutch) Dutch · 1/1
- [x] [**L295**](plan/languages/sv.md#l295-g0-in-swedish) Swedish · 1/1
- [x] [**L296**](plan/languages/da.md#l296-g0-in-danish) Danish · 1/1
- [x] [**L297**](plan/languages/nb.md#l297-g0-in-norwegian-bokmål) Norwegian (Bokmål) · 1/1
- [x] [**L298**](plan/languages/it.md#l298-g0-in-italian) Italian · 1/1
- [x] [**L299**](plan/languages/pt.md#l299-g0-in-portuguese) Portuguese · 1/1
- [x] [**L300**](plan/languages/pl.md#l300-g0-in-polish) Polish · 1/1

### P0 in every language

Core pages (built): home, hubs, help, affiliate, terms, privacy, Android · 8 pages

- [ ] [**L301**](plan/languages/de.md#l301-p0-in-german) German · 3/8
- [ ] [**L302**](plan/languages/es.md#l302-p0-in-spanish) Spanish · 3/8
- [ ] [**L303**](plan/languages/fr.md#l303-p0-in-french) French · 3/8
- [ ] [**L304**](plan/languages/nl.md#l304-p0-in-dutch) Dutch · 3/8
- [ ] [**L305**](plan/languages/sv.md#l305-p0-in-swedish) Swedish · 3/8
- [ ] [**L306**](plan/languages/da.md#l306-p0-in-danish) Danish · 3/8
- [ ] [**L307**](plan/languages/nb.md#l307-p0-in-norwegian-bokmål) Norwegian (Bokmål) · 3/8
- [ ] [**L308**](plan/languages/it.md#l308-p0-in-italian) Italian · 3/8
- [ ] [**L309**](plan/languages/pt.md#l309-p0-in-portuguese) Portuguese · 3/8
- [ ] [**L310**](plan/languages/pl.md#l310-p0-in-polish) Polish · 3/8

## Not in an item yet

Blog topics (you write them on learn.invoicor.com), pages that need a decision or code first,
and pages on hold, with the reason in their brief.

- **on hold: file downloads (53)** (4): [/templates/invoice-template-word](plan/core.md#templatesinvoice-template-word) · [/templates/invoice-template-excel](plan/core.md#templatesinvoice-template-excel) · [/templates/invoice-template-google-docs](plan/core.md#templatesinvoice-template-google-docs) · [/templates/invoice-template-pdf](plan/core.md#templatesinvoice-template-pdf)
- **on hold: e-invoicing** (3): [/it/fattura-elementi-obbligatori](plan/local.md#itfattura-elementi-obbligatori) · [/pt/requisitos-fatura](plan/local.md#ptrequisitos-fatura) · [/pl/elementy-faktury](plan/local.md#plelementy-faktury)
- **blog topics (L4)** (12): [learn:/how-to-write-an-invoice](plan/blog.md#learnhow-to-write-an-invoice) · [learn:/what-to-include-on-an-invoice](plan/blog.md#learnwhat-to-include-on-an-invoice) · [learn:/invoice-vs-receipt](plan/blog.md#learninvoice-vs-receipt) · [learn:/invoice-payment-terms](plan/blog.md#learninvoice-payment-terms) · [learn:/how-to-number-invoices](plan/blog.md#learnhow-to-number-invoices) · [learn:/late-payment-email](plan/blog.md#learnlate-payment-email) · [learn:/what-is-a-proforma-invoice](plan/blog.md#learnwhat-is-a-proforma-invoice) · [learn:/what-is-a-credit-note](plan/blog.md#learnwhat-is-a-credit-note) · [learn:/what-does-net-30-mean](plan/blog.md#learnwhat-does-net-30-mean) · [learn:/how-to-invoice-as-a-freelancer](plan/blog.md#learnhow-to-invoice-as-a-freelancer) · [learn:/what-to-do-when-a-client-doesnt-pay](plan/blog.md#learnwhat-to-do-when-a-client-doesnt-pay) · [learn:/how-to-charge-a-deposit](plan/blog.md#learnhow-to-charge-a-deposit)
