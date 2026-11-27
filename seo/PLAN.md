# Page plan

> **Generated, don't edit by hand.** Every item per category, with its pages below it: T1, T2 …
> for trade templates, I1 … for industry pages, and so on; L1, L2 … for the language versions
> (one language each). Boxes tick themselves when the pages are live. The rules for every page:
> [RULES.md](RULES.md). The brief per English page is in [plan/](plan/) (one file per category); the
> instructions per language page are in [plan/languages/](plan/languages/) (one file per
> language). What exists today: [PAGES.md](PAGES.md). Data: [keyword-map.csv](keyword-map.csv)
> (`item`, `brief`, `avoid`), items: `scripts/pages-items.mjs`. After any change: `npm run pages`.

**207 / 4,000 pages live** (5%) · planned: 977 English and local pages + 8,299 language pages · **9,483 when everything is built** (fewer after the demand gate parks the weak ones)

## How to run an item

Say which: "do T5", "do D1, B1", "do L1, L2" or "do S1". Then:

1. **English item (T5, B1 …):** first the demand gate ([RULES.md §2](RULES.md#2-thin-and-duplicate-pages-what-google-punishes)):
   park the pages nobody searches for. Then, for each page listed under the item, read its brief
   (the link), its category's section in [RULES.md §5](RULES.md#5-categories) and the fact sheet
   [BRAND.md §10](../BRAND.md). Use one live page of the same type as the model. Write them all,
   then: `npm run content:check` → `npm run build` → `npm run pages` → `npm run check`. Update
   ROADMAP.md; one commit per item.
2. **Language item (L1 …):** one item's pages in one language, written for that country. Its
   instructions per page are in that language's file in [plan/languages/](plan/languages/).
   Needs task S1 for templates and industry pages, and the English pages live first.
3. **Task (S1 …):** code work, no pages. Tick it in `scripts/pages-items.mjs` (`done: true`).
4. **After each deploy:** check indexing per page type before adding more of it ([RULES.md §2](RULES.md#2-thin-and-duplicate-pages-what-google-punishes)).
5. **New pages for the plan:** "add 10 pages to T" (the `seo-add-pages` skill, [RULES.md §3](RULES.md#3-planning-new-items)).

## Overview

| Category | Items | Pages done | Pages to build | Language items |
|---|---|---|---|---|
| [Trade templates](#trade-templates-t) | T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 T15 T16 T17 T18 T19 T20 | 50 | 263 | 0/200 done |
| [Billing-type templates](#billing-type-templates-b) | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12 B13 B14 B15 | 0 | 177 | 0/150 done |
| [Invoice types (general documents)](#invoice-types-general-documents-d) | D1 D2 | 0 | 30 | 0/20 done |
| [Industry pages ("invoice app for …")](#industry-pages-invoice-app-for--i) | I1 I2 I3 I4 I5 I6 I7 I8 I9 I10 I11 I12 I13 I14 I15 I16 I17 I18 I19 I20 | 43 | 196 | 0/200 done |
| [Compare pages ("{competitor} alternative")](#compare-pages-competitor-alternative-c) | C1 C2 C3 C4 C5 C6 C7 C8 C9 C10 C11 | 20 | 77 | none |
| [Free tools](#free-tools-tl) | TL0 TL1 TL2 TL3 TL4 TL5 TL6 TL7 TL8 TL9 | 4 | 109 | 10/90 done |
| [Country pages (English)](#country-pages-english-ct) | CT1 CT2 CT3 CT4 CT5 CT6 | 0 | 39 | 0/10 done |
| [Local pages (in the country's own language)](#local-pages-in-the-countrys-own-language-lo) | LO1 LO2 LO3 LO4 LO5 LO6 LO7 LO8 | 0 | 71 | none |
| [Generators](#generators-g) | G0 G1 G2 | 1 | 9 | 10/30 done |
| [Core pages, hubs, trust and legal](#core-pages-hubs-trust-and-legal-p) | P0 P1 P2 | 9 | 6 | 0/30 done |
| [Languages](#languages-l) | L1–L730 | 80 | 8299 | |

## Best next (by score)

The items that can be built now (no task in the way), best first: the average `score` of their planned pages (blank counts as 3; how to score: [RULES.md §3](RULES.md#3-planning-new-items)), ties in the suggested order below. 0 of 977 planned pages are scored.

| # | Item | Pages to build | Score | Scored |
|---|---|---|---|---|
| 1 | [D1](#d1-invoice-types-the-general-documents) Invoice types: the general documents | 20 | 3.0 | 0/20 |
| 2 | [B1](#b1-billing-types-i) Billing types I | 20 | 3.0 | 0/20 |
| 3 | [T4](#t4-10-trades-notary-home-inspection-it-services-) 10 trades: notary, home inspection, IT services … | 10 | 3.0 | 0/10 |
| 4 | [I4](#i4-industry-pages-for-t4s-trades) Industry pages for T4's trades | 10 | 3.0 | 0/10 |
| 5 | [TL1](#tl1-free-tools-i) Free tools I | 11 | 3.0 | 0/11 |
| 6 | [P1](#p1-trust-pages-about-contact-e-e-a-t) Trust pages: about, contact (E-E-A-T) | 2 | 3.0 | 0/2 |
| 7 | [I10](#i10-one-trade-per-page-split-the-combined-industry-pages) One trade per page: split the combined industry pages | 6 | 3.0 | 0/6 |
| 8 | [I11](#i11-who-invoices-self-employed-freelancers-sellers) Who invoices: self-employed, freelancers, sellers | 9 | 3.0 | 0/9 |
| 9 | [T5](#t5-home-and-property-services) Home and property services | 20 | 3.0 | 0/20 |
| 10 | [I5](#i5-industry-pages-for-t5s-trades) Industry pages for T5's trades | 20 | 3.0 | 0/20 |
| 11 | [C2](#c2-20-more-compares-english-only) 20 more compares (English only) | 20 | 3.0 | 0/20 |
| 12 | [B2](#b2-billing-types-ii) Billing types II | 20 | 3.0 | 0/20 |
| 13 | [T6](#t6-makers-repair-transport-events) Makers, repair, transport, events | 20 | 3.0 | 0/20 |
| 14 | [I6](#i6-industry-pages-for-t6s-trades) Industry pages for T6's trades | 20 | 3.0 | 0/20 |
| 15 | [LO2](#lo2-local-rivals-in-their-own-language-hl9) Local rivals, in their own language (HL9) | 20 | 3.0 | 0/20 |

And 56 more ready items. Waiting for a task: **S4** (TL3, TL7, TL8, TL9) · **S3** (CT1, CT2, CT3, CT4, CT5, CT6, LO1, LO3, LO4, LO5, LO6, LO7, LO8).

## Suggested order

The English items and tasks in the order that pays off most (parents first, bigger searches first,
code before the pages that need it). Language items: in their number order, alongside, once their
English pages are live.

**S1** → **D1** → **B1** → **T4** → **I4** → **TL1** → **P1** → **I10** → **I11** → **S3** → **CT1** → **T5** → **I5** → **C2** → **S2** → **CT2** → **B2** → **T6** → **I6** → **LO1** → **LO2** → **TL2** → **G1** → **T7** → **I7** → **B3** → **T8** → **I8** → **S4** → **TL3** → **T9** → **I9** → **CT3** → **T10** → **T11** → **T12** → **T13** → **T14** → **T15** → **T16** → **T17** → **T18** → **T19** → **T20** → **I12** → **I13** → **I14** → **I15** → **I16** → **I17** → **I18** → **I19** → **I20** → **B4** → **B5** → **B6** → **B7** → **B8** → **B9** → **B10** → **B11** → **B12** → **B13** → **B14** → **B15** → **TL4** → **TL5** → **TL6** → **TL7** → **TL8** → **TL9** → **CT4** → **CT5** → **CT6** → **LO3** → **LO4** → **LO5** → **LO6** → **LO7** → **LO8** → **C3** → **C4** → **C5** → **C6** → **C7** → **C8** → **C9** → **C10** → **C11** → **D2** → **G2** → **P2**

## Tasks (S): code, no pages

- [ ] **S1** Language setup for templates and industry pages (roadmap H4): The template and industry page labels in 11 languages, `content/{locale}/templates.json` and `industries.json`, local slugs per language in the route table, hreflang between the versions, the language switcher, the hubs per language, and the sitemap split per page type (a sitemap index, so Search Console shows indexing per type). Every L item for templates and industry pages waits for this.
- [ ] **S2** Hubs at scale: With 150+ templates the hubs need groups (home services, trades, creative, professional, invoice types, billing types) with anchors and a short intro each, so every page is at most 2 clicks from its hub. No thin sub-hub URLs: groups are sections of the one hub.
- [ ] **S3** Country page type (roadmap chunk 43): The page code for country pages (CT items) and local rule pages (LO1): the generator preset per country plus the rules section. CT and LO1 wait for this.
- [ ] **S4** Calculator engine (for TL3, TL7–TL9): One calculator component driven by a config per trade (inputs, units, formula steps, the 'Put on an invoice' link), metric units per language. TL3 and TL7–TL9 wait for this.

## Trade templates (T)

Rules: [RULES.md § T · Trade templates](RULES.md#t--trade-templates) · every brief: [plan/templates.md](plan/templates.md)

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

### T10: Home systems and specialist contractors

- [ ] **T10** · 0/18 live · languages: [L311–L320](#t10-in-every-language)
  - [ ] [/templates/well-drilling](plan/templates.md#templateswell-drilling) well drilling invoice template
  - [ ] [/templates/drain-cleaning](plan/templates.md#templatesdrain-cleaning) drain cleaning invoice template
  - [ ] [/templates/gas-engineer](plan/templates.md#templatesgas-engineer) gas engineer invoice template
  - [ ] [/templates/foundation-repair](plan/templates.md#templatesfoundation-repair) foundation repair invoice template
  - [ ] [/templates/basement-waterproofing](plan/templates.md#templatesbasement-waterproofing) basement waterproofing invoice template
  - [ ] [/templates/radon-mitigation](plan/templates.md#templatesradon-mitigation) radon mitigation invoice template
  - [ ] [/templates/asbestos-removal](plan/templates.md#templatesasbestos-removal) asbestos removal invoice template
  - [ ] [/templates/wallpaper-installation](plan/templates.md#templateswallpaper-installation) wallpaper installation invoice template
  - [ ] [/templates/epoxy-flooring](plan/templates.md#templatesepoxy-flooring) epoxy flooring invoice template
  - [ ] [/templates/window-treatments](plan/templates.md#templateswindow-treatments) window treatment invoice template
  - [ ] [/templates/christmas-light-installation](plan/templates.md#templateschristmas-light-installation) christmas light installation invoice template
  - [ ] [/templates/fire-protection](plan/templates.md#templatesfire-protection) fire protection invoice template
  - [ ] [/templates/low-voltage-cabling](plan/templates.md#templateslow-voltage-cabling) low voltage cabling invoice template
  - [ ] [/templates/gutter-installation](plan/templates.md#templatesgutter-installation) gutter installation invoice template
  - [ ] [/templates/fireplace-installation](plan/templates.md#templatesfireplace-installation) fireplace installation invoice template
  - [ ] [/templates/home-energy-audit](plan/templates.md#templateshome-energy-audit) home energy audit invoice template
  - [ ] [/templates/sealcoating](plan/templates.md#templatessealcoating) sealcoating invoice template
  - [ ] [/templates/parking-lot-striping](plan/templates.md#templatesparking-lot-striping) parking lot striping invoice template

### T11: Property, waste and household services

- [ ] **T11** · 0/18 live · languages: [L321–L330](#t11-in-every-language)
  - [ ] [/templates/janitorial](plan/templates.md#templatesjanitorial) janitorial invoice template
  - [ ] [/templates/hood-cleaning](plan/templates.md#templateshood-cleaning) hood cleaning invoice template
  - [ ] [/templates/biohazard-cleanup](plan/templates.md#templatesbiohazard-cleanup) biohazard cleanup invoice template
  - [ ] [/templates/laundry-service](plan/templates.md#templateslaundry-service) laundry service invoice template
  - [ ] [/templates/dumpster-rental](plan/templates.md#templatesdumpster-rental) dumpster rental invoice template
  - [ ] [/templates/portable-toilet-rental](plan/templates.md#templatesportable-toilet-rental) portable toilet rental invoice template
  - [ ] [/templates/home-watch](plan/templates.md#templateshome-watch) home watch invoice template
  - [ ] [/templates/estate-sale](plan/templates.md#templatesestate-sale) estate sale invoice template
  - [ ] [/templates/self-storage](plan/templates.md#templatesself-storage) self storage invoice template
  - [ ] [/templates/vacation-rental](plan/templates.md#templatesvacation-rental) vacation rental invoice template
  - [ ] [/templates/graffiti-removal](plan/templates.md#templatesgraffiti-removal) graffiti removal invoice template
  - [ ] [/templates/property-preservation](plan/templates.md#templatesproperty-preservation) property preservation invoice template
  - [ ] [/templates/auctioneer](plan/templates.md#templatesauctioneer) auctioneer invoice template
  - [ ] [/templates/appraisal](plan/templates.md#templatesappraisal) appraisal invoice template
  - [ ] [/templates/concierge](plan/templates.md#templatesconcierge) concierge invoice template
  - [ ] [/templates/personal-shopper](plan/templates.md#templatespersonal-shopper) personal shopper invoice template
  - [ ] [/templates/house-sitting](plan/templates.md#templateshouse-sitting) house sitting invoice template
  - [ ] [/templates/senior-move-management](plan/templates.md#templatessenior-move-management) senior move management invoice template

### T12: Auto, transport and heavy equipment

- [ ] **T12** · 0/15 live · languages: [L331–L340](#t12-in-every-language)
  - [ ] [/templates/window-tinting](plan/templates.md#templateswindow-tinting) window tinting invoice template
  - [ ] [/templates/auto-glass](plan/templates.md#templatesauto-glass) auto glass invoice template
  - [ ] [/templates/paintless-dent-repair](plan/templates.md#templatespaintless-dent-repair) paintless dent repair invoice template
  - [ ] [/templates/tire-service](plan/templates.md#templatestire-service) tire shop invoice template
  - [ ] [/templates/car-hauling](plan/templates.md#templatescar-hauling) car hauling invoice template
  - [ ] [/templates/motorcycle-repair](plan/templates.md#templatesmotorcycle-repair) motorcycle repair invoice template
  - [ ] [/templates/heavy-equipment-repair](plan/templates.md#templatesheavy-equipment-repair) heavy equipment repair invoice template
  - [ ] [/templates/freight-broker](plan/templates.md#templatesfreight-broker) freight broker invoice template
  - [ ] [/templates/truck-dispatch](plan/templates.md#templatestruck-dispatch) truck dispatch invoice template
  - [ ] [/templates/flight-instruction](plan/templates.md#templatesflight-instruction) flight instruction invoice template
  - [ ] [/templates/valet-parking](plan/templates.md#templatesvalet-parking) valet parking invoice template
  - [ ] [/templates/bus-charter](plan/templates.md#templatesbus-charter) bus charter invoice template
  - [ ] [/templates/car-audio-installation](plan/templates.md#templatescar-audio-installation) car audio installation invoice template
  - [ ] [/templates/aircraft-maintenance](plan/templates.md#templatesaircraft-maintenance) aircraft maintenance invoice template
  - [ ] [/templates/crane-services](plan/templates.md#templatescrane-services) crane service invoice template

### T13: Workshops, repair and industrial trades

- [ ] **T13** · 0/15 live · languages: [L341–L350](#t13-in-every-language)
  - [ ] [/templates/machining](plan/templates.md#templatesmachining) machining invoice template
  - [ ] [/templates/sandblasting](plan/templates.md#templatessandblasting) sandblasting invoice template
  - [ ] [/templates/powder-coating](plan/templates.md#templatespowder-coating) powder coating invoice template
  - [ ] [/templates/scaffolding](plan/templates.md#templatesscaffolding) scaffolding invoice template
  - [ ] [/templates/millwright](plan/templates.md#templatesmillwright) millwright invoice template
  - [ ] [/templates/concrete-cutting](plan/templates.md#templatesconcrete-cutting) concrete cutting invoice template
  - [ ] [/templates/environmental-consulting](plan/templates.md#templatesenvironmental-consulting) environmental consulting invoice template
  - [ ] [/templates/commercial-refrigeration](plan/templates.md#templatescommercial-refrigeration) commercial refrigeration invoice template
  - [ ] [/templates/restaurant-equipment-repair](plan/templates.md#templatesrestaurant-equipment-repair) restaurant equipment repair invoice template
  - [ ] [/templates/shoe-repair](plan/templates.md#templatesshoe-repair) shoe repair invoice template
  - [ ] [/templates/piano-tuning](plan/templates.md#templatespiano-tuning) piano tuning invoice template
  - [ ] [/templates/instrument-repair](plan/templates.md#templatesinstrument-repair) instrument repair invoice template
  - [ ] [/templates/furniture-refinishing](plan/templates.md#templatesfurniture-refinishing) furniture refinishing invoice template
  - [ ] [/templates/gunsmith](plan/templates.md#templatesgunsmith) gunsmith invoice template
  - [ ] [/templates/knife-sharpening](plan/templates.md#templatesknife-sharpening) knife sharpening invoice template

### T14: Events, food, travel and entertainment

- [ ] **T14** · 0/15 live · languages: [L351–L360](#t14-in-every-language)
  - [ ] [/templates/balloon-decor](plan/templates.md#templatesballoon-decor) balloon decor invoice template
  - [ ] [/templates/face-painting](plan/templates.md#templatesface-painting) face painting invoice template
  - [ ] [/templates/entertainer](plan/templates.md#templatesentertainer) entertainer invoice template
  - [ ] [/templates/audio-visual](plan/templates.md#templatesaudio-visual) audio visual invoice template
  - [ ] [/templates/calligraphy](plan/templates.md#templatescalligraphy) calligraphy invoice template
  - [ ] [/templates/wedding-invitations](plan/templates.md#templateswedding-invitations) wedding invitation invoice template
  - [ ] [/templates/henna](plan/templates.md#templateshenna) henna invoice template
  - [ ] [/templates/event-decor](plan/templates.md#templatesevent-decor) event decor invoice template
  - [ ] [/templates/food-truck](plan/templates.md#templatesfood-truck) food truck invoice template
  - [ ] [/templates/cooking-classes](plan/templates.md#templatescooking-classes) cooking class invoice template
  - [ ] [/templates/meal-prep](plan/templates.md#templatesmeal-prep) meal prep invoice template
  - [ ] [/templates/meat-processing](plan/templates.md#templatesmeat-processing) meat processing invoice template
  - [ ] [/templates/referee](plan/templates.md#templatesreferee) referee invoice template
  - [ ] [/templates/tour-guide](plan/templates.md#templatestour-guide) tour guide invoice template
  - [ ] [/templates/travel-agent](plan/templates.md#templatestravel-agent) travel agent invoice template

### T15: Professional services II

- [ ] **T15** · 0/15 live · languages: [L361–L370](#t15-in-every-language)
  - [ ] [/templates/accounting](plan/templates.md#templatesaccounting) accounting invoice template
  - [ ] [/templates/financial-advisor](plan/templates.md#templatesfinancial-advisor) financial advisor invoice template
  - [ ] [/templates/recruitment](plan/templates.md#templatesrecruitment) recruitment invoice template
  - [ ] [/templates/staffing-agency](plan/templates.md#templatesstaffing-agency) staffing agency invoice template
  - [ ] [/templates/grant-writing](plan/templates.md#templatesgrant-writing) grant writing invoice template
  - [ ] [/templates/resume-writing](plan/templates.md#templatesresume-writing) resume writing invoice template
  - [ ] [/templates/technical-writing](plan/templates.md#templatestechnical-writing) technical writing invoice template
  - [ ] [/templates/transcription](plan/templates.md#templatestranscription) transcription invoice template
  - [ ] [/templates/court-reporter](plan/templates.md#templatescourt-reporter) court reporter invoice template
  - [ ] [/templates/interpreter](plan/templates.md#templatesinterpreter) interpreter invoice template
  - [ ] [/templates/paralegal](plan/templates.md#templatesparalegal) paralegal invoice template
  - [ ] [/templates/mediation](plan/templates.md#templatesmediation) mediation invoice template
  - [ ] [/templates/expert-witness](plan/templates.md#templatesexpert-witness) expert witness invoice template
  - [ ] [/templates/process-server](plan/templates.md#templatesprocess-server) process server invoice template
  - [ ] [/templates/engineering](plan/templates.md#templatesengineering) engineering invoice template

### T16: Digital and tech services

- [ ] **T16** · 0/10 live · languages: [L371–L380](#t16-in-every-language)
  - [ ] [/templates/cybersecurity](plan/templates.md#templatescybersecurity) cybersecurity invoice template
  - [ ] [/templates/data-entry](plan/templates.md#templatesdata-entry) data entry invoice template
  - [ ] [/templates/ppc-management](plan/templates.md#templatesppc-management) ppc management invoice template
  - [ ] [/templates/web-hosting](plan/templates.md#templatesweb-hosting) web hosting invoice template
  - [ ] [/templates/game-development](plan/templates.md#templatesgame-development) game development invoice template
  - [ ] [/templates/animation](plan/templates.md#templatesanimation) animation invoice template
  - [ ] [/templates/3d-rendering](plan/templates.md#templates3d-rendering) 3d rendering invoice template
  - [ ] [/templates/photo-retouching](plan/templates.md#templatesphoto-retouching) photo retouching invoice template
  - [ ] [/templates/livestream-production](plan/templates.md#templateslivestream-production) livestream production invoice template
  - [ ] [/templates/virtual-tours](plan/templates.md#templatesvirtual-tours) virtual tour invoice template

### T17: Creative, fashion and crafts

- [ ] **T17** · 0/12 live · languages: [L381–L390](#t17-in-every-language)
  - [ ] [/templates/film-production](plan/templates.md#templatesfilm-production) film production invoice template
  - [ ] [/templates/actor](plan/templates.md#templatesactor) actor invoice template
  - [ ] [/templates/model](plan/templates.md#templatesmodel) model invoice template
  - [ ] [/templates/fashion-design](plan/templates.md#templatesfashion-design) fashion design invoice template
  - [ ] [/templates/stylist](plan/templates.md#templatesstylist) stylist invoice template
  - [ ] [/templates/muralist](plan/templates.md#templatesmuralist) muralist invoice template
  - [ ] [/templates/pottery](plan/templates.md#templatespottery) pottery invoice template
  - [ ] [/templates/jewelry-making](plan/templates.md#templatesjewelry-making) jewelry making invoice template
  - [ ] [/templates/picture-framing](plan/templates.md#templatespicture-framing) picture framing invoice template
  - [ ] [/templates/crafts](plan/templates.md#templatescrafts) craft invoice template
  - [ ] [/templates/studio-rental](plan/templates.md#templatesstudio-rental) studio rental invoice template
  - [ ] [/templates/stained-glass](plan/templates.md#templatesstained-glass) stained glass invoice template

### T18: Health and wellness II

- [ ] **T18** · 0/15 live · languages: [L391–L400](#t18-in-every-language)
  - [ ] [/templates/acupuncture](plan/templates.md#templatesacupuncture) acupuncture invoice template
  - [ ] [/templates/chiropractic](plan/templates.md#templateschiropractic) chiropractic invoice template
  - [ ] [/templates/physiotherapy](plan/templates.md#templatesphysiotherapy) physical therapy invoice template
  - [ ] [/templates/speech-therapy](plan/templates.md#templatesspeech-therapy) speech therapy invoice template
  - [ ] [/templates/occupational-therapy](plan/templates.md#templatesoccupational-therapy) occupational therapy invoice template
  - [ ] [/templates/reiki](plan/templates.md#templatesreiki) reiki invoice template
  - [ ] [/templates/spray-tanning](plan/templates.md#templatesspray-tanning) spray tan invoice template
  - [ ] [/templates/microblading](plan/templates.md#templatesmicroblading) microblading invoice template
  - [ ] [/templates/hair-braiding](plan/templates.md#templateshair-braiding) hair braiding invoice template
  - [ ] [/templates/locum](plan/templates.md#templateslocum) locum invoice template
  - [ ] [/templates/nursing](plan/templates.md#templatesnursing) nursing invoice template
  - [ ] [/templates/midwife](plan/templates.md#templatesmidwife) midwife invoice template
  - [ ] [/templates/lactation-consultant](plan/templates.md#templateslactation-consultant) lactation consultant invoice template
  - [ ] [/templates/sleep-consultant](plan/templates.md#templatessleep-consultant) sleep consultant invoice template
  - [ ] [/templates/hypnotherapy](plan/templates.md#templateshypnotherapy) hypnotherapy invoice template

### T19: Education and childcare

- [ ] **T19** · 0/12 live · languages: [L401–L410](#t19-in-every-language)
  - [ ] [/templates/daycare](plan/templates.md#templatesdaycare) daycare invoice template
  - [ ] [/templates/after-school-program](plan/templates.md#templatesafter-school-program) after school program invoice template
  - [ ] [/templates/summer-camp](plan/templates.md#templatessummer-camp) summer camp invoice template
  - [ ] [/templates/language-lessons](plan/templates.md#templateslanguage-lessons) language lessons invoice template
  - [ ] [/templates/art-lessons](plan/templates.md#templatesart-lessons) art lessons invoice template
  - [ ] [/templates/corporate-training](plan/templates.md#templatescorporate-training) corporate training invoice template
  - [ ] [/templates/public-speaking](plan/templates.md#templatespublic-speaking) speaker invoice template
  - [ ] [/templates/horse-riding-lessons](plan/templates.md#templateshorse-riding-lessons) riding lessons invoice template
  - [ ] [/templates/martial-arts](plan/templates.md#templatesmartial-arts) martial arts invoice template
  - [ ] [/templates/college-admissions-consulting](plan/templates.md#templatescollege-admissions-consulting) college admissions consulting invoice template
  - [ ] [/templates/cpr-training](plan/templates.md#templatescpr-training) cpr training invoice template
  - [ ] [/templates/music-therapy](plan/templates.md#templatesmusic-therapy) music therapy invoice template

### T20: Animals, farms and outdoors

- [ ] **T20** · 0/12 live · languages: [L411–L420](#t20-in-every-language)
  - [ ] [/templates/pet-boarding](plan/templates.md#templatespet-boarding) pet boarding invoice template
  - [ ] [/templates/horse-boarding](plan/templates.md#templateshorse-boarding) horse boarding invoice template
  - [ ] [/templates/farrier](plan/templates.md#templatesfarrier) farrier invoice template
  - [ ] [/templates/pet-waste-removal](plan/templates.md#templatespet-waste-removal) pet waste removal invoice template
  - [ ] [/templates/hunting-guide](plan/templates.md#templateshunting-guide) hunting guide invoice template
  - [ ] [/templates/fishing-charter](plan/templates.md#templatesfishing-charter) fishing charter invoice template
  - [ ] [/templates/custom-harvesting](plan/templates.md#templatescustom-harvesting) custom harvesting invoice template
  - [ ] [/templates/land-clearing](plan/templates.md#templatesland-clearing) land clearing invoice template
  - [ ] [/templates/logging](plan/templates.md#templateslogging) logging invoice template
  - [ ] [/templates/firewood](plan/templates.md#templatesfirewood) firewood invoice template
  - [ ] [/templates/pond-maintenance](plan/templates.md#templatespond-maintenance) pond maintenance invoice template
  - [ ] [/templates/taxidermy](plan/templates.md#templatestaxidermy) taxidermy invoice template

## Billing-type templates (B)

Rules: [RULES.md § B · Billing-type templates](RULES.md#b--billing-type-templates) · every brief: [plan/billing.md](plan/billing.md)

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

### B4: Deposits: events and weddings

- [ ] **B4** · 0/11 live · languages: [L531–L540](#b4-in-every-language)
  - [ ] [/templates/photo-booth-deposit-invoice](plan/billing.md#templatesphoto-booth-deposit-invoice) photo booth deposit invoice
  - [ ] [/templates/party-rental-deposit-invoice](plan/billing.md#templatesparty-rental-deposit-invoice) party rental deposit invoice
  - [ ] [/templates/wedding-officiant-deposit-invoice](plan/billing.md#templateswedding-officiant-deposit-invoice) wedding officiant deposit invoice
  - [ ] [/templates/venue-deposit-invoice](plan/billing.md#templatesvenue-deposit-invoice) venue deposit invoice
  - [ ] [/templates/balloon-decor-deposit-invoice](plan/billing.md#templatesballoon-decor-deposit-invoice) balloon decor deposit invoice
  - [ ] [/templates/bartending-deposit-invoice](plan/billing.md#templatesbartending-deposit-invoice) bartending deposit invoice
  - [ ] [/templates/limo-deposit-invoice](plan/billing.md#templateslimo-deposit-invoice) limo deposit invoice
  - [ ] [/templates/entertainer-deposit-invoice](plan/billing.md#templatesentertainer-deposit-invoice) entertainer deposit invoice
  - [ ] [/templates/food-truck-deposit-invoice](plan/billing.md#templatesfood-truck-deposit-invoice) food truck deposit invoice
  - [ ] [/templates/event-decor-deposit-invoice](plan/billing.md#templatesevent-decor-deposit-invoice) event decor deposit invoice
  - [ ] [/templates/wedding-invitation-deposit-invoice](plan/billing.md#templateswedding-invitation-deposit-invoice) wedding invitation deposit invoice

### B5: Deposits: custom and made-to-order work

- [ ] **B5** · 0/13 live · languages: [L541–L550](#b5-in-every-language)
  - [ ] [/templates/custom-furniture-deposit-invoice](plan/billing.md#templatescustom-furniture-deposit-invoice) custom furniture deposit invoice
  - [ ] [/templates/cabinet-deposit-invoice](plan/billing.md#templatescabinet-deposit-invoice) cabinet deposit invoice
  - [ ] [/templates/countertop-deposit-invoice](plan/billing.md#templatescountertop-deposit-invoice) countertop deposit invoice
  - [ ] [/templates/upholstery-deposit-invoice](plan/billing.md#templatesupholstery-deposit-invoice) upholstery deposit invoice
  - [ ] [/templates/custom-jewelry-deposit-invoice](plan/billing.md#templatescustom-jewelry-deposit-invoice) custom jewelry deposit invoice
  - [ ] [/templates/fashion-design-deposit-invoice](plan/billing.md#templatesfashion-design-deposit-invoice) fashion design deposit invoice
  - [ ] [/templates/art-commission-deposit-invoice](plan/billing.md#templatesart-commission-deposit-invoice) art commission deposit invoice
  - [ ] [/templates/mural-deposit-invoice](plan/billing.md#templatesmural-deposit-invoice) mural deposit invoice
  - [ ] [/templates/taxidermy-deposit-invoice](plan/billing.md#templatestaxidermy-deposit-invoice) taxidermy deposit invoice
  - [ ] [/templates/sign-deposit-invoice](plan/billing.md#templatessign-deposit-invoice) sign deposit invoice
  - [ ] [/templates/window-treatment-deposit-invoice](plan/billing.md#templateswindow-treatment-deposit-invoice) blinds deposit invoice
  - [ ] [/templates/screen-printing-deposit-invoice](plan/billing.md#templatesscreen-printing-deposit-invoice) screen printing deposit invoice
  - [ ] [/templates/embroidery-deposit-invoice](plan/billing.md#templatesembroidery-deposit-invoice) embroidery deposit invoice

### B6: Deposits: contractors and home projects

- [ ] **B6** · 0/13 live · languages: [L551–L560](#b6-in-every-language)
  - [ ] [/templates/fence-deposit-invoice](plan/billing.md#templatesfence-deposit-invoice) fence deposit invoice
  - [ ] [/templates/deck-deposit-invoice](plan/billing.md#templatesdeck-deposit-invoice) deck deposit invoice
  - [ ] [/templates/solar-deposit-invoice](plan/billing.md#templatessolar-deposit-invoice) solar deposit invoice
  - [ ] [/templates/siding-deposit-invoice](plan/billing.md#templatessiding-deposit-invoice) siding deposit invoice
  - [ ] [/templates/window-deposit-invoice](plan/billing.md#templateswindow-deposit-invoice) window installation deposit invoice
  - [ ] [/templates/remodeling-deposit-invoice](plan/billing.md#templatesremodeling-deposit-invoice) remodeling deposit invoice
  - [ ] [/templates/flooring-deposit-invoice](plan/billing.md#templatesflooring-deposit-invoice) flooring deposit invoice
  - [ ] [/templates/tile-deposit-invoice](plan/billing.md#templatestile-deposit-invoice) tile deposit invoice
  - [ ] [/templates/foundation-repair-deposit-invoice](plan/billing.md#templatesfoundation-repair-deposit-invoice) foundation repair deposit invoice
  - [ ] [/templates/well-drilling-deposit-invoice](plan/billing.md#templateswell-drilling-deposit-invoice) well drilling deposit invoice
  - [ ] [/templates/masonry-deposit-invoice](plan/billing.md#templatesmasonry-deposit-invoice) masonry deposit invoice
  - [ ] [/templates/concrete-deposit-invoice](plan/billing.md#templatesconcrete-deposit-invoice) concrete deposit invoice
  - [ ] [/templates/paving-deposit-invoice](plan/billing.md#templatespaving-deposit-invoice) paving deposit invoice

### B7: Progress invoices: construction trades

- [ ] **B7** · 0/9 live · languages: [L561–L570](#b7-in-every-language)
  - [ ] [/templates/excavation-progress-invoice](plan/billing.md#templatesexcavation-progress-invoice) excavation progress invoice
  - [ ] [/templates/solar-installation-progress-invoice](plan/billing.md#templatessolar-installation-progress-invoice) solar progress invoice
  - [ ] [/templates/drywall-progress-invoice](plan/billing.md#templatesdrywall-progress-invoice) drywall progress invoice
  - [ ] [/templates/insulation-progress-invoice](plan/billing.md#templatesinsulation-progress-invoice) insulation progress invoice
  - [ ] [/templates/carpentry-progress-invoice](plan/billing.md#templatescarpentry-progress-invoice) carpentry progress invoice
  - [ ] [/templates/window-installation-progress-invoice](plan/billing.md#templateswindow-installation-progress-invoice) window installation progress invoice
  - [ ] [/templates/architect-progress-invoice](plan/billing.md#templatesarchitect-progress-invoice) architect progress invoice
  - [ ] [/templates/demolition-progress-invoice](plan/billing.md#templatesdemolition-progress-invoice) demolition progress invoice
  - [ ] [/templates/fabrication-progress-invoice](plan/billing.md#templatesfabrication-progress-invoice) steel fabrication progress invoice

### B8: Monthly and seasonal service invoices

- [ ] **B8** · 0/13 live · languages: [L571–L580](#b8-in-every-language)
  - [ ] [/templates/monthly-window-cleaning-invoice](plan/billing.md#templatesmonthly-window-cleaning-invoice) monthly window cleaning invoice
  - [ ] [/templates/monthly-dog-walking-invoice](plan/billing.md#templatesmonthly-dog-walking-invoice) monthly dog walking invoice
  - [ ] [/templates/monthly-aquarium-maintenance-invoice](plan/billing.md#templatesmonthly-aquarium-maintenance-invoice) monthly aquarium maintenance invoice
  - [ ] [/templates/monthly-bookkeeping-invoice](plan/billing.md#templatesmonthly-bookkeeping-invoice) monthly bookkeeping invoice
  - [ ] [/templates/monthly-seo-invoice](plan/billing.md#templatesmonthly-seo-invoice) monthly seo invoice
  - [ ] [/templates/monthly-security-invoice](plan/billing.md#templatesmonthly-security-invoice) monthly security guard invoice
  - [ ] [/templates/property-management-fee-invoice](plan/billing.md#templatesproperty-management-fee-invoice) property management fee invoice
  - [ ] [/templates/monthly-dance-class-invoice](plan/billing.md#templatesmonthly-dance-class-invoice) monthly dance class invoice
  - [ ] [/templates/weekly-home-care-invoice](plan/billing.md#templatesweekly-home-care-invoice) weekly home care invoice
  - [ ] [/templates/monthly-courier-invoice](plan/billing.md#templatesmonthly-courier-invoice) monthly courier invoice
  - [ ] [/templates/pool-opening-closing-invoice](plan/billing.md#templatespool-opening-closing-invoice) pool opening and closing invoice
  - [ ] [/templates/sprinkler-winterization-invoice](plan/billing.md#templatessprinkler-winterization-invoice) sprinkler winterization invoice
  - [ ] [/templates/seasonal-gutter-cleaning-invoice](plan/billing.md#templatesseasonal-gutter-cleaning-invoice) seasonal gutter cleaning invoice

### B9: Retainers for professionals

- [ ] **B9** · 0/10 live · languages: [L581–L590](#b9-in-every-language)
  - [ ] [/templates/legal-retainer-invoice](plan/billing.md#templateslegal-retainer-invoice) legal retainer invoice
  - [ ] [/templates/marketing-retainer-invoice](plan/billing.md#templatesmarketing-retainer-invoice) marketing agency retainer invoice
  - [ ] [/templates/copywriting-retainer-invoice](plan/billing.md#templatescopywriting-retainer-invoice) copywriting retainer invoice
  - [ ] [/templates/graphic-design-retainer-invoice](plan/billing.md#templatesgraphic-design-retainer-invoice) graphic design retainer invoice
  - [ ] [/templates/ux-retainer-invoice](plan/billing.md#templatesux-retainer-invoice) ux design retainer invoice
  - [ ] [/templates/private-investigator-retainer-invoice](plan/billing.md#templatesprivate-investigator-retainer-invoice) private investigator retainer invoice
  - [ ] [/templates/financial-advisor-retainer-invoice](plan/billing.md#templatesfinancial-advisor-retainer-invoice) financial advisor retainer invoice
  - [ ] [/templates/accounting-retainer-invoice](plan/billing.md#templatesaccounting-retainer-invoice) accounting retainer invoice
  - [ ] [/templates/expert-witness-retainer-invoice](plan/billing.md#templatesexpert-witness-retainer-invoice) expert witness retainer invoice
  - [ ] [/templates/video-editing-retainer-invoice](plan/billing.md#templatesvideo-editing-retainer-invoice) video editing retainer invoice

### B10: Hourly billing for professionals and care

- [ ] **B10** · 0/7 live · languages: [L591–L600](#b10-in-every-language)
  - [ ] [/templates/legal-hourly-invoice](plan/billing.md#templateslegal-hourly-invoice) legal hourly invoice
  - [ ] [/templates/it-hourly-invoice](plan/billing.md#templatesit-hourly-invoice) it services hourly invoice
  - [ ] [/templates/translation-hourly-invoice](plan/billing.md#templatestranslation-hourly-invoice) translation hourly invoice
  - [ ] [/templates/video-editing-hourly-invoice](plan/billing.md#templatesvideo-editing-hourly-invoice) video editing hourly invoice
  - [ ] [/templates/home-care-hourly-invoice](plan/billing.md#templateshome-care-hourly-invoice) home care hourly invoice
  - [ ] [/templates/data-analysis-hourly-invoice](plan/billing.md#templatesdata-analysis-hourly-invoice) data analysis hourly invoice
  - [ ] [/templates/ux-design-hourly-invoice](plan/billing.md#templatesux-design-hourly-invoice) ux design hourly invoice

### B11: Packages: lessons, wellness and coaching

- [ ] **B11** · 0/10 live · languages: [L601–L610](#b11-in-every-language)
  - [ ] [/templates/swim-lesson-package-invoice](plan/billing.md#templatesswim-lesson-package-invoice) swim lesson package invoice
  - [ ] [/templates/yoga-class-pack-invoice](plan/billing.md#templatesyoga-class-pack-invoice) yoga class pack invoice
  - [ ] [/templates/massage-package-invoice](plan/billing.md#templatesmassage-package-invoice) massage package invoice
  - [ ] [/templates/driving-lesson-package-invoice](plan/billing.md#templatesdriving-lesson-package-invoice) driving lesson package invoice
  - [ ] [/templates/riding-lesson-package-invoice](plan/billing.md#templatesriding-lesson-package-invoice) riding lesson package invoice
  - [ ] [/templates/nutrition-package-invoice](plan/billing.md#templatesnutrition-package-invoice) nutrition package invoice
  - [ ] [/templates/facial-package-invoice](plan/billing.md#templatesfacial-package-invoice) facial package invoice
  - [ ] [/templates/coaching-package-invoice](plan/billing.md#templatescoaching-package-invoice) sports coaching package invoice
  - [ ] [/templates/language-lesson-package-invoice](plan/billing.md#templateslanguage-lesson-package-invoice) language lesson package invoice
  - [ ] [/templates/physiotherapy-package-invoice](plan/billing.md#templatesphysiotherapy-package-invoice) physiotherapy package invoice

### B12: Service calls, emergencies and insurance jobs

- [ ] **B12** · 0/11 live · languages: [L611–L620](#b12-in-every-language)
  - [ ] [/templates/garage-door-service-call-invoice](plan/billing.md#templatesgarage-door-service-call-invoice) garage door service call invoice
  - [ ] [/templates/emergency-towing-invoice](plan/billing.md#templatesemergency-towing-invoice) emergency towing invoice
  - [ ] [/templates/emergency-tree-removal-invoice](plan/billing.md#templatesemergency-tree-removal-invoice) emergency tree removal invoice
  - [ ] [/templates/emergency-drain-cleaning-invoice](plan/billing.md#templatesemergency-drain-cleaning-invoice) emergency drain cleaning invoice
  - [ ] [/templates/emergency-board-up-invoice](plan/billing.md#templatesemergency-board-up-invoice) emergency board up invoice
  - [ ] [/templates/refrigeration-service-call-invoice](plan/billing.md#templatesrefrigeration-service-call-invoice) refrigeration service call invoice
  - [ ] [/templates/restaurant-equipment-service-call-invoice](plan/billing.md#templatesrestaurant-equipment-service-call-invoice) restaurant equipment service call invoice
  - [ ] [/templates/field-service-call-invoice](plan/billing.md#templatesfield-service-call-invoice) field service call invoice
  - [ ] [/templates/call-out-charge-invoice](plan/billing.md#templatescall-out-charge-invoice) call out charge invoice
  - [ ] [/templates/water-damage-insurance-invoice](plan/billing.md#templateswater-damage-insurance-invoice) water damage insurance invoice
  - [ ] [/templates/mold-remediation-insurance-invoice](plan/billing.md#templatesmold-remediation-insurance-invoice) mold remediation insurance invoice

### B13: Milestones: creative, tech and engineering projects

- [ ] **B13** · 0/9 live · languages: [L621–L630](#b13-in-every-language)
  - [ ] [/templates/game-development-milestone-invoice](plan/billing.md#templatesgame-development-milestone-invoice) game development milestone invoice
  - [ ] [/templates/animation-milestone-invoice](plan/billing.md#templatesanimation-milestone-invoice) animation milestone invoice
  - [ ] [/templates/film-production-milestone-invoice](plan/billing.md#templatesfilm-production-milestone-invoice) film production milestone invoice
  - [ ] [/templates/engineering-milestone-invoice](plan/billing.md#templatesengineering-milestone-invoice) engineering milestone invoice
  - [ ] [/templates/illustration-milestone-invoice](plan/billing.md#templatesillustration-milestone-invoice) illustration milestone invoice
  - [ ] [/templates/music-production-milestone-invoice](plan/billing.md#templatesmusic-production-milestone-invoice) music production milestone invoice
  - [ ] [/templates/marketing-project-milestone-invoice](plan/billing.md#templatesmarketing-project-milestone-invoice) marketing project milestone invoice
  - [ ] [/templates/technical-writing-milestone-invoice](plan/billing.md#templatestechnical-writing-milestone-invoice) technical writing milestone invoice
  - [ ] [/templates/environmental-consulting-phase-invoice](plan/billing.md#templatesenvironmental-consulting-phase-invoice) environmental consulting phase invoice

### B14: Final invoices: events and custom work

- [ ] **B14** · 0/7 live · languages: [L631–L640](#b14-in-every-language)
  - [ ] [/templates/dj-final-invoice](plan/billing.md#templatesdj-final-invoice) dj final invoice
  - [ ] [/templates/event-planner-final-invoice](plan/billing.md#templatesevent-planner-final-invoice) event planner final invoice
  - [ ] [/templates/florist-final-invoice](plan/billing.md#templatesflorist-final-invoice) florist final invoice
  - [ ] [/templates/band-final-invoice](plan/billing.md#templatesband-final-invoice) band final invoice
  - [ ] [/templates/venue-final-invoice](plan/billing.md#templatesvenue-final-invoice) venue final invoice
  - [ ] [/templates/party-rental-final-invoice](plan/billing.md#templatesparty-rental-final-invoice) party rental final invoice
  - [ ] [/templates/custom-furniture-final-invoice](plan/billing.md#templatescustom-furniture-final-invoice) custom furniture final invoice

### B15: Per-unit billing: per word, mile and minute

- [ ] **B15** · 0/5 live · languages: [L641–L650](#b15-in-every-language)
  - [ ] [/templates/proofreading-per-word-invoice](plan/billing.md#templatesproofreading-per-word-invoice) proofreading per word invoice
  - [ ] [/templates/voice-over-per-word-invoice](plan/billing.md#templatesvoice-over-per-word-invoice) voice over per word invoice
  - [ ] [/templates/courier-per-mile-invoice](plan/billing.md#templatescourier-per-mile-invoice) courier per mile invoice
  - [ ] [/templates/towing-per-mile-invoice](plan/billing.md#templatestowing-per-mile-invoice) towing per mile invoice
  - [ ] [/templates/trucking-rate-per-mile-invoice](plan/billing.md#templatestrucking-rate-per-mile-invoice) trucking rate per mile invoice

## Invoice types (general documents) (D)

Rules: [RULES.md § D · Invoice types (general documents)](RULES.md#d--invoice-types-general-documents) · every brief: [plan/types.md](plan/types.md)

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

### D2: Invoice types II: special cases (self-billing, revised, paid, PO …)

- [ ] **D2** · 0/10 live · 1 parked · languages: [L701–L710](#d2-in-every-language)
  - [ ] [/templates/self-billing-invoice](plan/types.md#templatesself-billing-invoice) self billing invoice template
  - [ ] [/templates/itemized-invoice](plan/types.md#templatesitemized-invoice) itemized invoice template
  - [ ] [/templates/paid-invoice](plan/types.md#templatespaid-invoice) paid invoice template
  - [ ] [/templates/revised-invoice](plan/types.md#templatesrevised-invoice) revised invoice template
  - [ ] [/templates/cancellation-fee-invoice](plan/types.md#templatescancellation-fee-invoice) cancellation fee invoice template
  - [ ] [/templates/limited-company-invoice](plan/types.md#templateslimited-company-invoice) limited company invoice template
  - [ ] [/templates/purchase-order-invoice](plan/types.md#templatespurchase-order-invoice) purchase order invoice template
  - [ ] [/templates/nonprofit-invoice](plan/types.md#templatesnonprofit-invoice) nonprofit invoice template
  - [ ] [/templates/pro-bono-invoice](plan/types.md#templatespro-bono-invoice) pro bono invoice template
  - [ ] [/templates/royalty-invoice](plan/types.md#templatesroyalty-invoice) royalty invoice template
  - ~~/de/vorlagen/korrigierte-rechnung~~ parked: owned by /de/rechnung-korrigieren (LO7): a German version would compete with it

## Industry pages ("invoice app for …") (I)

Rules: [RULES.md § I · Industry pages ("invoice app for …")](RULES.md#i--industry-pages-invoice-app-for-) · every brief: [plan/industries.md](plan/industries.md)

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

### I10: One trade per page: split the combined industry pages

- [ ] **I10** · 0/6 live · each split narrows its old combined page when it goes live (see the briefs) · languages: [L421–L430](#i10-in-every-language)
  - [ ] [/industries/hvac-companies](plan/industries.md#industrieshvac-companies) invoice app for hvac companies
  - [ ] [/industries/auto-detailers](plan/industries.md#industriesauto-detailers) invoice app for auto detailers
  - [ ] [/industries/videographers](plan/industries.md#industriesvideographers) invoice app for videographers
  - [ ] [/industries/lawn-care-companies](plan/industries.md#industrieslawn-care-companies) invoice app for lawn care companies
  - [ ] [/industries/life-coaches](plan/industries.md#industrieslife-coaches) invoice app for life coaches
  - [ ] [/industries/hair-stylists](plan/industries.md#industrieshair-stylists) invoice app for hair stylists

### I11: Who invoices: self-employed, freelancers, sellers

- [ ] **I11** · 0/9 live · languages: [L431–L440](#i11-in-every-language)
  - [ ] [/industries/self-employed](plan/industries.md#industriesself-employed) invoice app for self employed
  - [ ] [/industries/freelancers](plan/industries.md#industriesfreelancers) invoice app for freelancers
  - [ ] [/industries/independent-contractors](plan/industries.md#industriesindependent-contractors) invoice app for independent contractors
  - [ ] [/industries/tradespeople](plan/industries.md#industriestradespeople) invoice app for tradespeople
  - [ ] [/industries/home-service-businesses](plan/industries.md#industrieshome-service-businesses) invoice app for home service businesses
  - [ ] [/industries/gig-workers](plan/industries.md#industriesgig-workers) invoice app for gig workers
  - [ ] [/industries/crafters](plan/industries.md#industriescrafters) invoice app for crafters
  - [ ] [/industries/online-sellers](plan/industries.md#industriesonline-sellers) invoice app for online sellers
  - [ ] [/industries/wholesalers](plan/industries.md#industrieswholesalers) invoice app for wholesalers

### I12: Specialist contractors

- [ ] **I12** · 0/10 live · languages: [L441–L450](#i12-in-every-language)
  - [ ] [/industries/handymen](plan/industries.md#industrieshandymen) invoice app for handymen
  - [ ] [/industries/garage-door-companies](plan/industries.md#industriesgarage-door-companies) invoice app for garage door companies
  - [ ] [/industries/gas-engineers](plan/industries.md#industriesgas-engineers) invoice app for gas engineers
  - [ ] [/industries/plasterers](plan/industries.md#industriesplasterers) invoice app for plasterers
  - [ ] [/industries/concrete-contractors](plan/industries.md#industriesconcrete-contractors) invoice app for concrete contractors
  - [ ] [/industries/low-voltage-contractors](plan/industries.md#industrieslow-voltage-contractors) invoice app for low voltage contractors
  - [ ] [/industries/fire-protection-companies](plan/industries.md#industriesfire-protection-companies) invoice app for fire protection companies
  - [ ] [/industries/scaffolding-companies](plan/industries.md#industriesscaffolding-companies) invoice app for scaffolding companies
  - [ ] [/industries/foundation-repair-companies](plan/industries.md#industriesfoundation-repair-companies) invoice app for foundation repair companies
  - [ ] [/industries/christmas-light-installers](plan/industries.md#industrieschristmas-light-installers) invoice app for christmas light installers

### I13: Cleaning, waste and property services

- [ ] **I13** · 0/7 live · languages: [L451–L460](#i13-in-every-language)
  - [ ] [/industries/janitorial-companies](plan/industries.md#industriesjanitorial-companies) invoice app for janitorial companies
  - [ ] [/industries/dumpster-rental-companies](plan/industries.md#industriesdumpster-rental-companies) invoice app for dumpster rental companies
  - [ ] [/industries/portable-toilet-companies](plan/industries.md#industriesportable-toilet-companies) invoice app for portable toilet companies
  - [ ] [/industries/pooper-scooper-businesses](plan/industries.md#industriespooper-scooper-businesses) invoice app for pooper scooper businesses
  - [ ] [/industries/hood-cleaning-companies](plan/industries.md#industrieshood-cleaning-companies) invoice app for hood cleaning companies
  - [ ] [/industries/property-preservation-companies](plan/industries.md#industriesproperty-preservation-companies) invoice app for property preservation companies
  - [ ] [/industries/appraisers](plan/industries.md#industriesappraisers) invoice app for appraisers

### I14: Auto shops and transport

- [ ] **I14** · 0/10 live · languages: [L461–L470](#i14-in-every-language)
  - [ ] [/industries/auto-body-shops](plan/industries.md#industriesauto-body-shops) invoice app for auto body shops
  - [ ] [/industries/auto-glass-shops](plan/industries.md#industriesauto-glass-shops) invoice app for auto glass shops
  - [ ] [/industries/tire-shops](plan/industries.md#industriestire-shops) invoice app for tire shops
  - [ ] [/industries/window-tint-shops](plan/industries.md#industrieswindow-tint-shops) invoice app for window tint shops
  - [ ] [/industries/pdr-technicians](plan/industries.md#industriespdr-technicians) invoice app for pdr technicians
  - [ ] [/industries/heavy-equipment-mechanics](plan/industries.md#industriesheavy-equipment-mechanics) invoice app for heavy equipment mechanics
  - [ ] [/industries/car-haulers](plan/industries.md#industriescar-haulers) invoice app for car haulers
  - [ ] [/industries/freight-brokers](plan/industries.md#industriesfreight-brokers) invoice app for freight brokers
  - [ ] [/industries/truck-dispatchers](plan/industries.md#industriestruck-dispatchers) invoice app for truck dispatchers
  - [ ] [/industries/flight-instructors](plan/industries.md#industriesflight-instructors) invoice app for flight instructors

### I15: Professional services

- [ ] **I15** · 0/11 live · languages: [L471–L480](#i15-in-every-language)
  - [ ] [/industries/accountants](plan/industries.md#industriesaccountants) invoice app for accountants
  - [ ] [/industries/financial-advisors](plan/industries.md#industriesfinancial-advisors) invoice app for financial advisors
  - [ ] [/industries/recruiters](plan/industries.md#industriesrecruiters) invoice app for recruiters
  - [ ] [/industries/staffing-agencies](plan/industries.md#industriesstaffing-agencies) invoice app for staffing agencies
  - [ ] [/industries/mediators](plan/industries.md#industriesmediators) invoice app for mediators
  - [ ] [/industries/process-servers](plan/industries.md#industriesprocess-servers) invoice app for process servers
  - [ ] [/industries/court-reporters](plan/industries.md#industriescourt-reporters) invoice app for court reporters
  - [ ] [/industries/insurance-adjusters](plan/industries.md#industriesinsurance-adjusters) invoice app for insurance adjusters
  - [ ] [/industries/msps](plan/industries.md#industriesmsps) invoice app for msps
  - [ ] [/industries/engineering-firms](plan/industries.md#industriesengineering-firms) invoice app for engineering firms
  - [ ] [/industries/environmental-consultants](plan/industries.md#industriesenvironmental-consultants) invoice app for environmental consultants

### I16: Events, food and travel

- [ ] **I16** · 0/10 live · languages: [L481–L490](#i16-in-every-language)
  - [ ] [/industries/balloon-artists](plan/industries.md#industriesballoon-artists) invoice app for balloon artists
  - [ ] [/industries/entertainers](plan/industries.md#industriesentertainers) invoice app for entertainers
  - [ ] [/industries/travel-agents](plan/industries.md#industriestravel-agents) invoice app for travel agents
  - [ ] [/industries/tour-operators](plan/industries.md#industriestour-operators) invoice app for tour operators
  - [ ] [/industries/meal-prep-businesses](plan/industries.md#industriesmeal-prep-businesses) invoice app for meal prep businesses
  - [ ] [/industries/food-trucks](plan/industries.md#industriesfood-trucks) invoice app for food trucks
  - [ ] [/industries/event-decorators](plan/industries.md#industriesevent-decorators) invoice app for event decorators
  - [ ] [/industries/wedding-vendors](plan/industries.md#industrieswedding-vendors) invoice app for wedding vendors
  - [ ] [/industries/bartenders](plan/industries.md#industriesbartenders) invoice app for bartenders
  - [ ] [/industries/event-venues](plan/industries.md#industriesevent-venues) invoice app for event venues

### I17: Creative and media

- [ ] **I17** · 0/9 live · languages: [L491–L500](#i17-in-every-language)
  - [ ] [/industries/production-companies](plan/industries.md#industriesproduction-companies) invoice app for production companies
  - [ ] [/industries/animators](plan/industries.md#industriesanimators) invoice app for animators
  - [ ] [/industries/3d-artists](plan/industries.md#industries3d-artists) invoice app for 3d artists
  - [ ] [/industries/fashion-designers](plan/industries.md#industriesfashion-designers) invoice app for fashion designers
  - [ ] [/industries/fashion-stylists](plan/industries.md#industriesfashion-stylists) invoice app for fashion stylists
  - [ ] [/industries/actors](plan/industries.md#industriesactors) invoice app for actors
  - [ ] [/industries/models](plan/industries.md#industriesmodels) invoice app for models
  - [ ] [/industries/creative-agencies](plan/industries.md#industriescreative-agencies) invoice app for creative agencies
  - [ ] [/industries/game-developers](plan/industries.md#industriesgame-developers) invoice app for game developers

### I18: Health, wellness and beauty

- [ ] **I18** · 0/11 live · languages: [L501–L510](#i18-in-every-language)
  - [ ] [/industries/physiotherapists](plan/industries.md#industriesphysiotherapists) invoice app for physiotherapists
  - [ ] [/industries/chiropractors](plan/industries.md#industrieschiropractors) invoice app for chiropractors
  - [ ] [/industries/acupuncturists](plan/industries.md#industriesacupuncturists) invoice app for acupuncturists
  - [ ] [/industries/speech-therapists](plan/industries.md#industriesspeech-therapists) invoice app for speech therapists
  - [ ] [/industries/occupational-therapists](plan/industries.md#industriesoccupational-therapists) invoice app for occupational therapists
  - [ ] [/industries/locums](plan/industries.md#industrieslocums) invoice app for locums
  - [ ] [/industries/nurses](plan/industries.md#industriesnurses) invoice app for nurses
  - [ ] [/industries/midwives](plan/industries.md#industriesmidwives) invoice app for midwives
  - [ ] [/industries/holistic-practitioners](plan/industries.md#industriesholistic-practitioners) invoice app for holistic practitioners
  - [ ] [/industries/spray-tan-artists](plan/industries.md#industriesspray-tan-artists) invoice app for spray tan artists
  - [ ] [/industries/pmu-artists](plan/industries.md#industriespmu-artists) invoice app for pmu artists

### I19: Education and childcare

- [ ] **I19** · 0/10 live · languages: [L511–L520](#i19-in-every-language)
  - [ ] [/industries/daycare-providers](plan/industries.md#industriesdaycare-providers) invoice app for daycare providers
  - [ ] [/industries/childminders](plan/industries.md#industrieschildminders) invoice app for childminders
  - [ ] [/industries/after-school-programs](plan/industries.md#industriesafter-school-programs) invoice app for after school programs
  - [ ] [/industries/summer-camps](plan/industries.md#industriessummer-camps) invoice app for summer camps
  - [ ] [/industries/language-teachers](plan/industries.md#industrieslanguage-teachers) invoice app for language teachers
  - [ ] [/industries/corporate-trainers](plan/industries.md#industriescorporate-trainers) invoice app for corporate trainers
  - [ ] [/industries/speakers](plan/industries.md#industriesspeakers) invoice app for speakers
  - [ ] [/industries/riding-instructors](plan/industries.md#industriesriding-instructors) invoice app for riding instructors
  - [ ] [/industries/martial-arts-schools](plan/industries.md#industriesmartial-arts-schools) invoice app for martial arts schools
  - [ ] [/industries/cpr-instructors](plan/industries.md#industriescpr-instructors) invoice app for cpr instructors

### I20: Animals, farms and outdoors

- [ ] **I20** · 0/9 live · languages: [L521–L530](#i20-in-every-language)
  - [ ] [/industries/dog-groomers](plan/industries.md#industriesdog-groomers) invoice app for dog groomers
  - [ ] [/industries/kennels](plan/industries.md#industrieskennels) invoice app for kennels
  - [ ] [/industries/farriers](plan/industries.md#industriesfarriers) invoice app for farriers
  - [ ] [/industries/stables](plan/industries.md#industriesstables) invoice app for stables
  - [ ] [/industries/horse-trainers](plan/industries.md#industrieshorse-trainers) invoice app for horse trainers
  - [ ] [/industries/outfitters](plan/industries.md#industriesoutfitters) invoice app for outfitters
  - [ ] [/industries/fishing-charters](plan/industries.md#industriesfishing-charters) invoice app for fishing charters
  - [ ] [/industries/custom-harvesters](plan/industries.md#industriescustom-harvesters) invoice app for custom harvesters
  - [ ] [/industries/loggers](plan/industries.md#industriesloggers) invoice app for loggers

## Compare pages ("{competitor} alternative") (C)

Rules: [RULES.md § C · Compare pages ("{competitor} alternative")](RULES.md#c--compare-pages-competitor-alternative) · every brief: [plan/compare.md](plan/compare.md)

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

### C3: UK accounting and banking apps

- [ ] **C3** · 0/8 live
  - [ ] [/compare/freeagent](plan/compare.md#comparefreeagent) freeagent alternative
  - [ ] [/compare/kashflow](plan/compare.md#comparekashflow) kashflow alternative
  - [ ] [/compare/crunch](plan/compare.md#comparecrunch) crunch alternative
  - [ ] [/compare/pandle](plan/compare.md#comparepandle) pandle alternative
  - [ ] [/compare/tide-invoicing](plan/compare.md#comparetide-invoicing) tide invoicing alternative
  - [ ] [/compare/countingup](plan/compare.md#comparecountingup) countingup alternative
  - [ ] [/compare/anna-money](plan/compare.md#compareanna-money) anna money alternative
  - [ ] [/compare/quickfile](plan/compare.md#comparequickfile) quickfile alternative

### C4: Australia and New Zealand

- [ ] **C4** · 0/6 live
  - [ ] [/compare/myob](plan/compare.md#comparemyob) myob alternative
  - [ ] [/compare/reckon](plan/compare.md#comparereckon) reckon one alternative
  - [ ] [/compare/hnry](plan/compare.md#comparehnry) hnry alternative
  - [ ] [/compare/fergus](plan/compare.md#comparefergus) fergus software alternative
  - [ ] [/compare/rounded](plan/compare.md#comparerounded) rounded app alternative
  - [ ] [/compare/simpro](plan/compare.md#comparesimpro) simpro alternative

### C5: India (GST billing apps)

- [ ] **C5** · 0/5 live
  - [ ] [/compare/vyapar](plan/compare.md#comparevyapar) vyapar alternative
  - [ ] [/compare/refrens](plan/compare.md#comparerefrens) refrens alternative
  - [ ] [/compare/mybillbook](plan/compare.md#comparemybillbook) mybillbook alternative
  - [ ] [/compare/swipe](plan/compare.md#compareswipe) swipe billing alternative
  - [ ] [/compare/tallyprime](plan/compare.md#comparetallyprime) tallyprime alternative

### C6: Field service, lawn and pest

- [ ] **C6** · 0/9 live
  - [ ] [/compare/servicetitan](plan/compare.md#compareservicetitan) servicetitan alternative
  - [ ] [/compare/workiz](plan/compare.md#compareworkiz) workiz alternative
  - [ ] [/compare/kickserv](plan/compare.md#comparekickserv) kickserv alternative
  - [ ] [/compare/gorilladesk](plan/compare.md#comparegorilladesk) gorilladesk alternative
  - [ ] [/compare/service-fusion](plan/compare.md#compareservice-fusion) service fusion alternative
  - [ ] [/compare/fieldedge](plan/compare.md#comparefieldedge) fieldedge alternative
  - [ ] [/compare/yardbook](plan/compare.md#compareyardbook) yardbook alternative
  - [ ] [/compare/lawnpro](plan/compare.md#comparelawnpro) lawnpro alternative
  - [ ] [/compare/service-autopilot](plan/compare.md#compareservice-autopilot) service autopilot alternative

### C7: Construction and roofing

- [ ] **C7** · 0/6 live
  - [ ] [/compare/buildertrend](plan/compare.md#comparebuildertrend) buildertrend alternative
  - [ ] [/compare/jobnimbus](plan/compare.md#comparejobnimbus) jobnimbus alternative
  - [ ] [/compare/acculynx](plan/compare.md#compareacculynx) acculynx alternative
  - [ ] [/compare/contractor-foreman](plan/compare.md#comparecontractor-foreman) contractor foreman alternative
  - [ ] [/compare/knowify](plan/compare.md#compareknowify) knowify alternative
  - [ ] [/compare/houzz-pro](plan/compare.md#comparehouzz-pro) houzz pro alternative

### C8: Photographers and creative studios

- [ ] **C8** · 0/7 live
  - [ ] [/compare/studio-ninja](plan/compare.md#comparestudio-ninja) studio ninja alternative
  - [ ] [/compare/vsco-workspace](plan/compare.md#comparevsco-workspace) vsco workspace alternative
  - [ ] [/compare/pixieset-studio-manager](plan/compare.md#comparepixieset-studio-manager) pixieset studio manager alternative
  - [ ] [/compare/sprout-studio](plan/compare.md#comparesprout-studio) sprout studio alternative
  - [ ] [/compare/hectic](plan/compare.md#comparehectic) hectic app alternative
  - [ ] [/compare/paymo](plan/compare.md#comparepaymo) paymo alternative
  - [ ] [/compare/indy](plan/compare.md#compareindy) indy app alternative

### C9: Payments and banks

- [ ] **C9** · 0/6 live
  - [ ] [/compare/wise-invoices](plan/compare.md#comparewise-invoices) wise invoice alternative
  - [ ] [/compare/payoneer](plan/compare.md#comparepayoneer) payoneer alternative
  - [ ] [/compare/gocardless](plan/compare.md#comparegocardless) gocardless alternative
  - [ ] [/compare/melio](plan/compare.md#comparemelio) melio alternative
  - [ ] [/compare/bill-com](plan/compare.md#comparebill-com) bill.com alternative
  - [ ] [/compare/helcim](plan/compare.md#comparehelcim) helcim alternative

### C10: Invoice apps and design tools

- [ ] **C10** · 0/5 live
  - [ ] [/compare/saldo-invoice](plan/compare.md#comparesaldo-invoice) saldo invoice alternative
  - [ ] [/compare/invoice-asap](plan/compare.md#compareinvoice-asap) invoice asap alternative
  - [ ] [/compare/invoice-owl](plan/compare.md#compareinvoice-owl) invoice owl alternative
  - [ ] [/compare/canva-invoice](plan/compare.md#comparecanva-invoice) canva invoice alternative
  - [ ] [/compare/adobe-express-invoice](plan/compare.md#compareadobe-express-invoice) adobe express invoice alternative

### C11: Small-business accounting

- [ ] **C11** · 0/5 live
  - [ ] [/compare/patriot-software](plan/compare.md#comparepatriot-software) patriot software alternative
  - [ ] [/compare/bench](plan/compare.md#comparebench) bench accounting alternative
  - [ ] [/compare/zipbooks](plan/compare.md#comparezipbooks) zipbooks alternative
  - [ ] [/compare/manager-io](plan/compare.md#comparemanager-io) manager.io alternative
  - [ ] [/compare/odoo-invoicing](plan/compare.md#compareodoo-invoicing) odoo invoicing alternative

## Free tools (TL)

Rules: [RULES.md § TL · Free tools](RULES.md#tl--free-tools) · every brief: [plan/tools.md](plan/tools.md)

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

### TL4: VAT and GST calculators per country (English)

- [ ] **TL4** · 0/9 live
  - [ ] [/tools/uk-vat-calculator](plan/tools.md#toolsuk-vat-calculator) uk vat calculator
  - [ ] [/tools/ireland-vat-calculator](plan/tools.md#toolsireland-vat-calculator) ireland vat calculator
  - [ ] [/tools/south-africa-vat-calculator](plan/tools.md#toolssouth-africa-vat-calculator) south africa vat calculator
  - [ ] [/tools/uae-vat-calculator](plan/tools.md#toolsuae-vat-calculator) uae vat calculator
  - [ ] [/tools/australia-gst-calculator](plan/tools.md#toolsaustralia-gst-calculator) australia gst calculator
  - [ ] [/tools/nz-gst-calculator](plan/tools.md#toolsnz-gst-calculator) nz gst calculator
  - [ ] [/tools/singapore-gst-calculator](plan/tools.md#toolssingapore-gst-calculator) singapore gst calculator
  - [ ] [/tools/india-gst-calculator](plan/tools.md#toolsindia-gst-calculator) india gst calculator
  - [ ] [/tools/canada-gst-hst-calculator](plan/tools.md#toolscanada-gst-hst-calculator) canada gst hst calculator

### TL5: Tax tools for the self-employed

- [ ] **TL5** · 0/8 live · languages: [L651–L660](#tl5-in-every-language)
  - [ ] [/tools/self-employment-tax-calculator](plan/tools.md#toolsself-employment-tax-calculator) self employment tax calculator
  - [ ] [/tools/quarterly-estimated-tax-calculator](plan/tools.md#toolsquarterly-estimated-tax-calculator) quarterly estimated tax calculator
  - [ ] [/tools/1099-vs-w2-calculator](plan/tools.md#tools1099-vs-w2-calculator) 1099 vs w2 calculator
  - [ ] [/tools/vat-threshold-checker](plan/tools.md#toolsvat-threshold-checker) vat threshold calculator
  - [ ] [/tools/flat-rate-vat-calculator](plan/tools.md#toolsflat-rate-vat-calculator) flat rate vat calculator
  - [ ] [/tools/cis-deduction-calculator](plan/tools.md#toolscis-deduction-calculator) cis deduction calculator
  - [ ] [/tools/reverse-charge-checker](plan/tools.md#toolsreverse-charge-checker) reverse charge checker
  - [ ] [/tools/invoice-requirements-checker](plan/tools.md#toolsinvoice-requirements-checker) invoice requirements checker

### TL6: Payment fees, terms and payment details

- [ ] **TL6** · 0/13 live · languages: [L661–L670](#tl6-in-every-language)
  - [ ] [/tools/paypal-fee-calculator](plan/tools.md#toolspaypal-fee-calculator) paypal fee calculator
  - [ ] [/tools/stripe-fee-calculator](plan/tools.md#toolsstripe-fee-calculator) stripe fee calculator
  - [ ] [/tools/square-fee-calculator](plan/tools.md#toolssquare-fee-calculator) square fee calculator
  - [ ] [/tools/credit-card-surcharge-calculator](plan/tools.md#toolscredit-card-surcharge-calculator) credit card surcharge calculator
  - [ ] [/tools/early-payment-discount-calculator](plan/tools.md#toolsearly-payment-discount-calculator) early payment discount calculator
  - [ ] [/tools/invoice-factoring-calculator](plan/tools.md#toolsinvoice-factoring-calculator) invoice factoring calculator
  - [ ] [/tools/prorated-invoice-calculator](plan/tools.md#toolsprorated-invoice-calculator) prorated invoice calculator
  - [ ] [/tools/business-days-calculator](plan/tools.md#toolsbusiness-days-calculator) business days calculator
  - [ ] [/tools/dso-calculator](plan/tools.md#toolsdso-calculator) days sales outstanding calculator
  - [ ] [/tools/sepa-qr-code-generator](plan/tools.md#toolssepa-qr-code-generator) sepa qr code generator
  - [ ] [/tools/swiss-qr-bill-generator](plan/tools.md#toolsswiss-qr-bill-generator) swiss qr bill generator
  - [ ] [/tools/amount-in-words-converter](plan/tools.md#toolsamount-in-words-converter) amount in words converter
  - [ ] [/tools/invoice-currency-converter](plan/tools.md#toolsinvoice-currency-converter) invoice currency converter

### TL7: Job costing and materials for contractors

- [ ] **TL7** · 0/15 live · needs task S4 · languages: [L671–L680](#tl7-in-every-language)
  - [ ] [/tools/job-costing-calculator](plan/tools.md#toolsjob-costing-calculator) job costing calculator
  - [ ] [/tools/overhead-rate-calculator](plan/tools.md#toolsoverhead-rate-calculator) overhead rate calculator
  - [ ] [/tools/labor-burden-calculator](plan/tools.md#toolslabor-burden-calculator) labor burden calculator
  - [ ] [/tools/equipment-cost-per-hour-calculator](plan/tools.md#toolsequipment-cost-per-hour-calculator) equipment cost per hour calculator
  - [ ] [/tools/board-feet-calculator](plan/tools.md#toolsboard-feet-calculator) board feet calculator
  - [ ] [/tools/cubic-yard-calculator](plan/tools.md#toolscubic-yard-calculator) cubic yard calculator
  - [ ] [/tools/insulation-cost-calculator](plan/tools.md#toolsinsulation-cost-calculator) insulation cost calculator
  - [ ] [/tools/siding-cost-calculator](plan/tools.md#toolssiding-cost-calculator) siding cost calculator
  - [ ] [/tools/paver-cost-calculator](plan/tools.md#toolspaver-cost-calculator) paver cost calculator
  - [ ] [/tools/retaining-wall-cost-calculator](plan/tools.md#toolsretaining-wall-cost-calculator) retaining wall cost calculator
  - [ ] [/tools/landscape-material-calculator](plan/tools.md#toolslandscape-material-calculator) landscape material calculator
  - [ ] [/tools/sod-cost-calculator](plan/tools.md#toolssod-cost-calculator) sod cost calculator
  - [ ] [/tools/gutter-installation-cost-calculator](plan/tools.md#toolsgutter-installation-cost-calculator) gutter installation cost calculator
  - [ ] [/tools/epoxy-floor-cost-calculator](plan/tools.md#toolsepoxy-floor-cost-calculator) epoxy floor cost calculator
  - [ ] [/tools/wallpaper-calculator](plan/tools.md#toolswallpaper-calculator) wallpaper calculator

### TL8: Pricing calculators II: services and transport

- [ ] **TL8** · 0/16 live · needs task S4 · languages: [L681–L690](#tl8-in-every-language)
  - [ ] [/tools/janitorial-bidding-calculator](plan/tools.md#toolsjanitorial-bidding-calculator) janitorial bidding calculator
  - [ ] [/tools/gutter-cleaning-pricing-calculator](plan/tools.md#toolsgutter-cleaning-pricing-calculator) gutter cleaning pricing calculator
  - [ ] [/tools/pest-control-pricing-calculator](plan/tools.md#toolspest-control-pricing-calculator) pest control pricing calculator
  - [ ] [/tools/pet-sitting-pricing-calculator](plan/tools.md#toolspet-sitting-pricing-calculator) pet sitting pricing calculator
  - [ ] [/tools/dog-grooming-pricing-calculator](plan/tools.md#toolsdog-grooming-pricing-calculator) dog grooming pricing calculator
  - [ ] [/tools/auto-detailing-pricing-calculator](plan/tools.md#toolsauto-detailing-pricing-calculator) auto detailing pricing calculator
  - [ ] [/tools/courier-delivery-pricing-calculator](plan/tools.md#toolscourier-delivery-pricing-calculator) courier delivery pricing calculator
  - [ ] [/tools/event-planner-fee-calculator](plan/tools.md#toolsevent-planner-fee-calculator) event planner fee calculator
  - [ ] [/tools/florist-pricing-calculator](plan/tools.md#toolsflorist-pricing-calculator) florist pricing calculator
  - [ ] [/tools/translation-cost-calculator](plan/tools.md#toolstranslation-cost-calculator) translation cost calculator
  - [ ] [/tools/transcription-cost-calculator](plan/tools.md#toolstranscription-cost-calculator) transcription cost calculator
  - [ ] [/tools/voice-over-rate-calculator](plan/tools.md#toolsvoice-over-rate-calculator) voice over rate calculator
  - [ ] [/tools/copywriting-rate-calculator](plan/tools.md#toolscopywriting-rate-calculator) copywriting rate calculator
  - [ ] [/tools/trucking-cost-per-mile-calculator](plan/tools.md#toolstrucking-cost-per-mile-calculator) trucking cost per mile calculator
  - [ ] [/tools/fuel-surcharge-calculator](plan/tools.md#toolsfuel-surcharge-calculator) fuel surcharge calculator
  - [ ] [/tools/detention-pay-calculator](plan/tools.md#toolsdetention-pay-calculator) detention pay calculator

### TL9: Pricing calculators III: makers and production

- [ ] **TL9** · 0/7 live · needs task S4 · languages: [L691–L700](#tl9-in-every-language)
  - [ ] [/tools/3d-printing-cost-calculator](plan/tools.md#tools3d-printing-cost-calculator) 3d printing cost calculator
  - [ ] [/tools/screen-printing-pricing-calculator](plan/tools.md#toolsscreen-printing-pricing-calculator) screen printing pricing calculator
  - [ ] [/tools/embroidery-pricing-calculator](plan/tools.md#toolsembroidery-pricing-calculator) embroidery pricing calculator
  - [ ] [/tools/wholesale-price-calculator](plan/tools.md#toolswholesale-price-calculator) wholesale price calculator
  - [ ] [/tools/etsy-fee-calculator](plan/tools.md#toolsetsy-fee-calculator) etsy fee calculator
  - [ ] [/tools/upholstery-fabric-calculator](plan/tools.md#toolsupholstery-fabric-calculator) upholstery fabric calculator
  - [ ] [/tools/laser-engraving-pricing-calculator](plan/tools.md#toolslaser-engraving-pricing-calculator) laser engraving pricing calculator

## Country pages (English) (CT)

Rules: [RULES.md § CT · Country pages (English)](RULES.md#ct--country-pages-english) · every brief: [plan/country.md](plan/country.md)

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

### CT4: More EU countries in English (none of our languages)

- [ ] **CT4** · 0/8 live · needs task S3
  - [ ] [/invoice-generator-luxembourg](plan/country.md#invoice-generator-luxembourg) invoice requirements luxembourg
  - [ ] [/invoice-generator-estonia](plan/country.md#invoice-generator-estonia) invoice requirements estonia
  - [ ] [/invoice-generator-lithuania](plan/country.md#invoice-generator-lithuania) invoice requirements lithuania
  - [ ] [/invoice-generator-latvia](plan/country.md#invoice-generator-latvia) invoice requirements latvia
  - [ ] [/invoice-generator-slovakia](plan/country.md#invoice-generator-slovakia) invoice requirements slovakia
  - [ ] [/invoice-generator-slovenia](plan/country.md#invoice-generator-slovenia) invoice requirements slovenia
  - [ ] [/invoice-generator-bulgaria](plan/country.md#invoice-generator-bulgaria) invoice requirements bulgaria
  - [ ] [/invoice-generator-czech-republic](plan/country.md#invoice-generator-czech-republic) invoice requirements czech republic

### CT5: India, Japan, Thailand and Quebec

- [ ] **CT5** · 0/4 live · needs task S3
  - [ ] [/invoice-generator-india](plan/country.md#invoice-generator-india) gst invoice format india
  - [ ] [/invoice-generator-japan](plan/country.md#invoice-generator-japan) qualified invoice japan
  - [ ] [/invoice-generator-thailand](plan/country.md#invoice-generator-thailand) tax invoice thailand
  - [ ] [/invoice-generator-quebec](plan/country.md#invoice-generator-quebec) quebec invoice requirements

### CT6: Cross-border invoicing (UK, EU, US)

- [ ] **CT6** · 0/4 live · needs task S3
  - [ ] [/eu-client-from-uk](plan/country.md#eu-client-from-uk) invoice eu client from uk
  - [ ] [/us-client-from-europe](plan/country.md#us-client-from-europe) invoice us client from europe
  - [ ] [/uk-client-from-eu](plan/country.md#uk-client-from-eu) invoice uk client from eu
  - [ ] [/oss-invoice](plan/country.md#oss-invoice) oss invoice

## Local pages (in the country's own language) (LO)

Rules: [RULES.md § LO · Local pages (in the country's own language)](RULES.md#lo--local-pages-in-the-countrys-own-language) · every brief: [plan/local.md](plan/local.md)

### LO1: Invoice rules per country, in its own language

- [ ] **LO1** · 0/12 live · needs task S3 · it, pt, pl stay on hold (e-invoicing)
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

### LO3: Payment reminders and the fees the law allows

- [ ] **LO3** · 0/8 live · needs task S3
  - [ ] [/de/mahnung-schreiben](plan/local.md#demahnung-schreiben) mahnung schreiben
  - [ ] [/nl/betalingsherinnering](plan/local.md#nlbetalingsherinnering) betalingsherinnering sturen
  - [ ] [/nl/incassokosten-berekenen](plan/local.md#nlincassokosten-berekenen) incassokosten berekenen
  - [ ] [/fr/relance-facture-impayee](plan/local.md#frrelance-facture-impayee) relance facture impayée
  - [ ] [/es/reclamar-factura-impagada](plan/local.md#esreclamar-factura-impagada) reclamar factura impagada
  - [ ] [/sv/betalningspaminnelse](plan/local.md#svbetalningspaminnelse) betalningspåminnelse
  - [ ] [/da/rykker-faktura](plan/local.md#darykker-faktura) rykker faktura
  - [ ] [/nb/purring-faktura](plan/local.md#nbpurring-faktura) purring faktura

### LO4: E-invoicing: when a PDF stops being enough

- [ ] **LO4** · 0/5 live · needs task S3
  - [ ] [/de/e-rechnung-pflicht](plan/local.md#dee-rechnung-pflicht) e-rechnung pflicht
  - [ ] [/fr/facturation-electronique-obligatoire](plan/local.md#frfacturation-electronique-obligatoire) facturation électronique obligatoire
  - [ ] [/es/verifactu-autonomos](plan/local.md#esverifactu-autonomos) verifactu autónomos
  - [ ] [/nl/e-facturatie-verplicht-belgie](plan/local.md#nle-facturatie-verplicht-belgie) e-facturatie verplicht belgië
  - [ ] [/fr/facturation-electronique-belgique](plan/local.md#frfacturation-electronique-belgique) facturation électronique belgique

### LO5: Business numbers on the invoice

- [ ] **LO5** · 0/6 live · needs task S3
  - [ ] [/de/steuernummer-auf-rechnung](plan/local.md#desteuernummer-auf-rechnung) steuernummer auf rechnung
  - [ ] [/nl/kvk-nummer-op-factuur](plan/local.md#nlkvk-nummer-op-factuur) kvk nummer op factuur
  - [ ] [/fr/facture-en-attente-de-siret](plan/local.md#frfacture-en-attente-de-siret) facture en attente de siret
  - [ ] [/sv/f-skatt-faktura](plan/local.md#svf-skatt-faktura) f-skatt på faktura
  - [ ] [/nb/foretaksregisteret-pa-faktura](plan/local.md#nbforetaksregisteret-pa-faktura) foretaksregisteret på faktura
  - [ ] [/da/cvr-nummer-faktura](plan/local.md#dacvr-nummer-faktura) cvr nummer på faktura

### LO6: Other countries that share a language (Austria, Switzerland, Quebec, Luxembourg)

- [ ] **LO6** · 0/8 live · needs task S3
  - [ ] [/de/rechnung-oesterreich](plan/local.md#derechnung-oesterreich) rechnungsmerkmale österreich
  - [ ] [/de/honorarnote](plan/local.md#dehonorarnote) honorarnote
  - [ ] [/de/rechnung-schweiz](plan/local.md#derechnung-schweiz) mwst rechnung schweiz
  - [ ] [/fr/facture-suisse](plan/local.md#frfacture-suisse) facture suisse mentions obligatoires
  - [ ] [/it/fattura-svizzera](plan/local.md#itfattura-svizzera) fattura svizzera requisiti
  - [ ] [/fr/facture-quebec-tps-tvq](plan/local.md#frfacture-quebec-tps-tvq) facture tps tvq
  - [ ] [/fr/facture-travailleur-autonome](plan/local.md#frfacture-travailleur-autonome) facture travailleur autonome
  - [ ] [/fr/facture-luxembourg](plan/local.md#frfacture-luxembourg) facture luxembourg mentions obligatoires

### LO7: More local rules (Germany, France, Spain)

- [ ] **LO7** · 0/7 live · needs task S3
  - [ ] [/de/leistungsdatum-rechnung](plan/local.md#deleistungsdatum-rechnung) leistungsdatum rechnung
  - [ ] [/de/aufbewahrungspflicht-hinweis-rechnung](plan/local.md#deaufbewahrungspflicht-hinweis-rechnung) aufbewahrungspflicht hinweis rechnung
  - [ ] [/de/rechnung-korrigieren](plan/local.md#derechnung-korrigieren) rechnung korrigieren
  - [ ] [/fr/mention-assurance-decennale-facture](plan/local.md#frmention-assurance-decennale-facture) mention assurance décennale facture
  - [ ] [/fr/delai-de-paiement-legal](plan/local.md#frdelai-de-paiement-legal) délai de paiement légal facture
  - [ ] [/es/factura-con-retencion-irpf](plan/local.md#esfactura-con-retencion-irpf) factura con retención irpf
  - [ ] [/es/recargo-de-equivalencia-factura](plan/local.md#esrecargo-de-equivalencia-factura) recargo de equivalencia factura

### LO8: Payment reference numbers (Sweden, Norway, Denmark, Belgium)

- [ ] **LO8** · 0/5 live · needs task S3 · needs tool code
  - [ ] [/sv/ocr-nummer-generator](plan/local.md#svocr-nummer-generator) ocr nummer generator
  - [ ] [/nb/kid-nummer-generator](plan/local.md#nbkid-nummer-generator) kid nummer generator
  - [ ] [/da/fik-nummer](plan/local.md#dafik-nummer) fik nummer
  - [ ] [/nl/gestructureerde-mededeling-generator](plan/local.md#nlgestructureerde-mededeling-generator) gestructureerde mededeling generator
  - [ ] [/fr/communication-structuree-generateur](plan/local.md#frcommunication-structuree-generateur) communication structurée générateur

## Generators (G)

Rules: [RULES.md § G · Generators](RULES.md#g--generators) · every brief: [plan/generators.md](plan/generators.md)

### G0: The free invoice generator (built)

- [x] **G0** · 1/1 live · languages: [L291–L300](#g0-in-every-language)
  - [x] [/free-invoice-generator](https://invoicor.com/free-invoice-generator) free invoice generator

### G1: Document generators (receipt, estimate, proforma, credit note)

- [ ] **G1** · 0/4 live · languages: [L191–L200](#g1-in-every-language)
  - [ ] [/free-receipt-generator](plan/generators.md#free-receipt-generator) free receipt generator
  - [ ] [/free-estimate-generator](plan/generators.md#free-estimate-generator) free estimate generator
  - [ ] [/free-proforma-invoice-generator](plan/generators.md#free-proforma-invoice-generator) proforma invoice generator
  - [ ] [/free-credit-note-generator](plan/generators.md#free-credit-note-generator) credit note generator

### G2: Document generators II (purchase order, delivery note, statement, debit note, work order)

- [ ] **G2** · 0/5 live · languages: [L711–L720](#g2-in-every-language)
  - [ ] [/free-purchase-order-generator](plan/generators.md#free-purchase-order-generator) purchase order generator
  - [ ] [/free-delivery-note-generator](plan/generators.md#free-delivery-note-generator) delivery note generator
  - [ ] [/free-statement-of-account-generator](plan/generators.md#free-statement-of-account-generator) statement of account generator
  - [ ] [/free-debit-note-generator](plan/generators.md#free-debit-note-generator) debit note generator
  - [ ] [/free-work-order-generator](plan/generators.md#free-work-order-generator) work order generator

## Core pages, hubs, trust and legal (P)

Rules: [RULES.md § P · Core pages, hubs, trust and legal](RULES.md#p--core-pages-hubs-trust-and-legal) · every brief: [plan/core.md](plan/core.md)

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

### P2: Features, security, the countries hub and the German Impressum

- [ ] **P2** · 0/4 live · languages: [L721–L730](#p2-in-every-language)
  - [ ] [/features](plan/core.md#features) invoicor features
  - [ ] [/security](plan/core.md#security) invoicor data security
  - [ ] [/countries](plan/core.md#countries) invoice requirements by country
  - [ ] [/de/impressum](plan/core.md#deimpressum) impressum

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

### T10 in every language

Home systems and specialist contractors · 16 pages

- [ ] [**L311**](plan/languages/de.md#l311-t10-in-german) German · 0/16
- [ ] [**L312**](plan/languages/es.md#l312-t10-in-spanish) Spanish · 0/16
- [ ] [**L313**](plan/languages/fr.md#l313-t10-in-french) French · 0/16
- [ ] [**L314**](plan/languages/nl.md#l314-t10-in-dutch) Dutch · 0/16
- [ ] [**L315**](plan/languages/sv.md#l315-t10-in-swedish) Swedish · 0/16
- [ ] [**L316**](plan/languages/da.md#l316-t10-in-danish) Danish · 0/16
- [ ] [**L317**](plan/languages/nb.md#l317-t10-in-norwegian-bokmål) Norwegian (Bokmål) · 0/16
- [ ] [**L318**](plan/languages/it.md#l318-t10-in-italian) Italian · 0/16
- [ ] [**L319**](plan/languages/pt.md#l319-t10-in-portuguese) Portuguese · 0/16
- [ ] [**L320**](plan/languages/pl.md#l320-t10-in-polish) Polish · 0/16

### T11 in every language

Property, waste and household services · 14 pages

- [ ] [**L321**](plan/languages/de.md#l321-t11-in-german) German · 0/14
- [ ] [**L322**](plan/languages/es.md#l322-t11-in-spanish) Spanish · 0/14
- [ ] [**L323**](plan/languages/fr.md#l323-t11-in-french) French · 0/14
- [ ] [**L324**](plan/languages/nl.md#l324-t11-in-dutch) Dutch · 0/14
- [ ] [**L325**](plan/languages/sv.md#l325-t11-in-swedish) Swedish · 0/14
- [ ] [**L326**](plan/languages/da.md#l326-t11-in-danish) Danish · 0/14
- [ ] [**L327**](plan/languages/nb.md#l327-t11-in-norwegian-bokmål) Norwegian (Bokmål) · 0/14
- [ ] [**L328**](plan/languages/it.md#l328-t11-in-italian) Italian · 0/14
- [ ] [**L329**](plan/languages/pt.md#l329-t11-in-portuguese) Portuguese · 0/14
- [ ] [**L330**](plan/languages/pl.md#l330-t11-in-polish) Polish · 0/14

### T12 in every language

Auto, transport and heavy equipment · 14 pages

- [ ] [**L331**](plan/languages/de.md#l331-t12-in-german) German · 0/14
- [ ] [**L332**](plan/languages/es.md#l332-t12-in-spanish) Spanish · 0/14
- [ ] [**L333**](plan/languages/fr.md#l333-t12-in-french) French · 0/14
- [ ] [**L334**](plan/languages/nl.md#l334-t12-in-dutch) Dutch · 0/14
- [ ] [**L335**](plan/languages/sv.md#l335-t12-in-swedish) Swedish · 0/14
- [ ] [**L336**](plan/languages/da.md#l336-t12-in-danish) Danish · 0/14
- [ ] [**L337**](plan/languages/nb.md#l337-t12-in-norwegian-bokmål) Norwegian (Bokmål) · 0/14
- [ ] [**L338**](plan/languages/it.md#l338-t12-in-italian) Italian · 0/14
- [ ] [**L339**](plan/languages/pt.md#l339-t12-in-portuguese) Portuguese · 0/14
- [ ] [**L340**](plan/languages/pl.md#l340-t12-in-polish) Polish · 0/14

### T13 in every language

Workshops, repair and industrial trades · 14 pages

- [ ] [**L341**](plan/languages/de.md#l341-t13-in-german) German · 0/14
- [ ] [**L342**](plan/languages/es.md#l342-t13-in-spanish) Spanish · 0/14
- [ ] [**L343**](plan/languages/fr.md#l343-t13-in-french) French · 0/14
- [ ] [**L344**](plan/languages/nl.md#l344-t13-in-dutch) Dutch · 0/14
- [ ] [**L345**](plan/languages/sv.md#l345-t13-in-swedish) Swedish · 0/14
- [ ] [**L346**](plan/languages/da.md#l346-t13-in-danish) Danish · 0/14
- [ ] [**L347**](plan/languages/nb.md#l347-t13-in-norwegian-bokmål) Norwegian (Bokmål) · 0/14
- [ ] [**L348**](plan/languages/it.md#l348-t13-in-italian) Italian · 0/14
- [ ] [**L349**](plan/languages/pt.md#l349-t13-in-portuguese) Portuguese · 0/14
- [ ] [**L350**](plan/languages/pl.md#l350-t13-in-polish) Polish · 0/14

### T14 in every language

Events, food, travel and entertainment · 15 pages

- [ ] [**L351**](plan/languages/de.md#l351-t14-in-german) German · 0/15
- [ ] [**L352**](plan/languages/es.md#l352-t14-in-spanish) Spanish · 0/15
- [ ] [**L353**](plan/languages/fr.md#l353-t14-in-french) French · 0/15
- [ ] [**L354**](plan/languages/nl.md#l354-t14-in-dutch) Dutch · 0/15
- [ ] [**L355**](plan/languages/sv.md#l355-t14-in-swedish) Swedish · 0/15
- [ ] [**L356**](plan/languages/da.md#l356-t14-in-danish) Danish · 0/15
- [ ] [**L357**](plan/languages/nb.md#l357-t14-in-norwegian-bokmål) Norwegian (Bokmål) · 0/15
- [ ] [**L358**](plan/languages/it.md#l358-t14-in-italian) Italian · 0/15
- [ ] [**L359**](plan/languages/pt.md#l359-t14-in-portuguese) Portuguese · 0/15
- [ ] [**L360**](plan/languages/pl.md#l360-t14-in-polish) Polish · 0/15

### T15 in every language

Professional services II · 12 pages

- [ ] [**L361**](plan/languages/de.md#l361-t15-in-german) German · 0/12
- [ ] [**L362**](plan/languages/es.md#l362-t15-in-spanish) Spanish · 0/12
- [ ] [**L363**](plan/languages/fr.md#l363-t15-in-french) French · 0/12
- [ ] [**L364**](plan/languages/nl.md#l364-t15-in-dutch) Dutch · 0/12
- [ ] [**L365**](plan/languages/sv.md#l365-t15-in-swedish) Swedish · 0/12
- [ ] [**L366**](plan/languages/da.md#l366-t15-in-danish) Danish · 0/12
- [ ] [**L367**](plan/languages/nb.md#l367-t15-in-norwegian-bokmål) Norwegian (Bokmål) · 0/12
- [ ] [**L368**](plan/languages/it.md#l368-t15-in-italian) Italian · 0/12
- [ ] [**L369**](plan/languages/pt.md#l369-t15-in-portuguese) Portuguese · 0/12
- [ ] [**L370**](plan/languages/pl.md#l370-t15-in-polish) Polish · 0/12

### T16 in every language

Digital and tech services · 10 pages

- [ ] [**L371**](plan/languages/de.md#l371-t16-in-german) German · 0/10
- [ ] [**L372**](plan/languages/es.md#l372-t16-in-spanish) Spanish · 0/10
- [ ] [**L373**](plan/languages/fr.md#l373-t16-in-french) French · 0/10
- [ ] [**L374**](plan/languages/nl.md#l374-t16-in-dutch) Dutch · 0/10
- [ ] [**L375**](plan/languages/sv.md#l375-t16-in-swedish) Swedish · 0/10
- [ ] [**L376**](plan/languages/da.md#l376-t16-in-danish) Danish · 0/10
- [ ] [**L377**](plan/languages/nb.md#l377-t16-in-norwegian-bokmål) Norwegian (Bokmål) · 0/10
- [ ] [**L378**](plan/languages/it.md#l378-t16-in-italian) Italian · 0/10
- [ ] [**L379**](plan/languages/pt.md#l379-t16-in-portuguese) Portuguese · 0/10
- [ ] [**L380**](plan/languages/pl.md#l380-t16-in-polish) Polish · 0/10

### T17 in every language

Creative, fashion and crafts · 12 pages

- [ ] [**L381**](plan/languages/de.md#l381-t17-in-german) German · 0/12
- [ ] [**L382**](plan/languages/es.md#l382-t17-in-spanish) Spanish · 0/12
- [ ] [**L383**](plan/languages/fr.md#l383-t17-in-french) French · 0/12
- [ ] [**L384**](plan/languages/nl.md#l384-t17-in-dutch) Dutch · 0/12
- [ ] [**L385**](plan/languages/sv.md#l385-t17-in-swedish) Swedish · 0/12
- [ ] [**L386**](plan/languages/da.md#l386-t17-in-danish) Danish · 0/12
- [ ] [**L387**](plan/languages/nb.md#l387-t17-in-norwegian-bokmål) Norwegian (Bokmål) · 0/12
- [ ] [**L388**](plan/languages/it.md#l388-t17-in-italian) Italian · 0/12
- [ ] [**L389**](plan/languages/pt.md#l389-t17-in-portuguese) Portuguese · 0/12
- [ ] [**L390**](plan/languages/pl.md#l390-t17-in-polish) Polish · 0/12

### T18 in every language

Health and wellness II · 15 pages

- [ ] [**L391**](plan/languages/de.md#l391-t18-in-german) German · 0/15
- [ ] [**L392**](plan/languages/es.md#l392-t18-in-spanish) Spanish · 0/15
- [ ] [**L393**](plan/languages/fr.md#l393-t18-in-french) French · 0/15
- [ ] [**L394**](plan/languages/nl.md#l394-t18-in-dutch) Dutch · 0/15
- [ ] [**L395**](plan/languages/sv.md#l395-t18-in-swedish) Swedish · 0/15
- [ ] [**L396**](plan/languages/da.md#l396-t18-in-danish) Danish · 0/15
- [ ] [**L397**](plan/languages/nb.md#l397-t18-in-norwegian-bokmål) Norwegian (Bokmål) · 0/15
- [ ] [**L398**](plan/languages/it.md#l398-t18-in-italian) Italian · 0/15
- [ ] [**L399**](plan/languages/pt.md#l399-t18-in-portuguese) Portuguese · 0/15
- [ ] [**L400**](plan/languages/pl.md#l400-t18-in-polish) Polish · 0/15

### T19 in every language

Education and childcare · 11 pages

- [ ] [**L401**](plan/languages/de.md#l401-t19-in-german) German · 0/11
- [ ] [**L402**](plan/languages/es.md#l402-t19-in-spanish) Spanish · 0/11
- [ ] [**L403**](plan/languages/fr.md#l403-t19-in-french) French · 0/11
- [ ] [**L404**](plan/languages/nl.md#l404-t19-in-dutch) Dutch · 0/11
- [ ] [**L405**](plan/languages/sv.md#l405-t19-in-swedish) Swedish · 0/11
- [ ] [**L406**](plan/languages/da.md#l406-t19-in-danish) Danish · 0/11
- [ ] [**L407**](plan/languages/nb.md#l407-t19-in-norwegian-bokmål) Norwegian (Bokmål) · 0/11
- [ ] [**L408**](plan/languages/it.md#l408-t19-in-italian) Italian · 0/11
- [ ] [**L409**](plan/languages/pt.md#l409-t19-in-portuguese) Portuguese · 0/11
- [ ] [**L410**](plan/languages/pl.md#l410-t19-in-polish) Polish · 0/11

### T20 in every language

Animals, farms and outdoors · 12 pages

- [ ] [**L411**](plan/languages/de.md#l411-t20-in-german) German · 0/12
- [ ] [**L412**](plan/languages/es.md#l412-t20-in-spanish) Spanish · 0/12
- [ ] [**L413**](plan/languages/fr.md#l413-t20-in-french) French · 0/12
- [ ] [**L414**](plan/languages/nl.md#l414-t20-in-dutch) Dutch · 0/12
- [ ] [**L415**](plan/languages/sv.md#l415-t20-in-swedish) Swedish · 0/12
- [ ] [**L416**](plan/languages/da.md#l416-t20-in-danish) Danish · 0/12
- [ ] [**L417**](plan/languages/nb.md#l417-t20-in-norwegian-bokmål) Norwegian (Bokmål) · 0/12
- [ ] [**L418**](plan/languages/it.md#l418-t20-in-italian) Italian · 0/12
- [ ] [**L419**](plan/languages/pt.md#l419-t20-in-portuguese) Portuguese · 0/12
- [ ] [**L420**](plan/languages/pl.md#l420-t20-in-polish) Polish · 0/12

### I10 in every language

One trade per page: split the combined industry pages · 6 pages

- [ ] [**L421**](plan/languages/de.md#l421-i10-in-german) German · 0/6
- [ ] [**L422**](plan/languages/es.md#l422-i10-in-spanish) Spanish · 0/6
- [ ] [**L423**](plan/languages/fr.md#l423-i10-in-french) French · 0/6
- [ ] [**L424**](plan/languages/nl.md#l424-i10-in-dutch) Dutch · 0/6
- [ ] [**L425**](plan/languages/sv.md#l425-i10-in-swedish) Swedish · 0/6
- [ ] [**L426**](plan/languages/da.md#l426-i10-in-danish) Danish · 0/6
- [ ] [**L427**](plan/languages/nb.md#l427-i10-in-norwegian-bokmål) Norwegian (Bokmål) · 0/6
- [ ] [**L428**](plan/languages/it.md#l428-i10-in-italian) Italian · 0/6
- [ ] [**L429**](plan/languages/pt.md#l429-i10-in-portuguese) Portuguese · 0/6
- [ ] [**L430**](plan/languages/pl.md#l430-i10-in-polish) Polish · 0/6

### I11 in every language

Who invoices: self-employed, freelancers, sellers · 7 pages

- [ ] [**L431**](plan/languages/de.md#l431-i11-in-german) German · 0/7
- [ ] [**L432**](plan/languages/es.md#l432-i11-in-spanish) Spanish · 0/7
- [ ] [**L433**](plan/languages/fr.md#l433-i11-in-french) French · 0/7
- [ ] [**L434**](plan/languages/nl.md#l434-i11-in-dutch) Dutch · 0/7
- [ ] [**L435**](plan/languages/sv.md#l435-i11-in-swedish) Swedish · 0/7
- [ ] [**L436**](plan/languages/da.md#l436-i11-in-danish) Danish · 0/7
- [ ] [**L437**](plan/languages/nb.md#l437-i11-in-norwegian-bokmål) Norwegian (Bokmål) · 0/7
- [ ] [**L438**](plan/languages/it.md#l438-i11-in-italian) Italian · 0/7
- [ ] [**L439**](plan/languages/pt.md#l439-i11-in-portuguese) Portuguese · 0/7
- [ ] [**L440**](plan/languages/pl.md#l440-i11-in-polish) Polish · 0/7

### I12 in every language

Specialist contractors · 8 pages

- [ ] [**L441**](plan/languages/de.md#l441-i12-in-german) German · 0/8
- [ ] [**L442**](plan/languages/es.md#l442-i12-in-spanish) Spanish · 0/8
- [ ] [**L443**](plan/languages/fr.md#l443-i12-in-french) French · 0/8
- [ ] [**L444**](plan/languages/nl.md#l444-i12-in-dutch) Dutch · 0/8
- [ ] [**L445**](plan/languages/sv.md#l445-i12-in-swedish) Swedish · 0/8
- [ ] [**L446**](plan/languages/da.md#l446-i12-in-danish) Danish · 0/8
- [ ] [**L447**](plan/languages/nb.md#l447-i12-in-norwegian-bokmål) Norwegian (Bokmål) · 0/8
- [ ] [**L448**](plan/languages/it.md#l448-i12-in-italian) Italian · 0/8
- [ ] [**L449**](plan/languages/pt.md#l449-i12-in-portuguese) Portuguese · 0/8
- [ ] [**L450**](plan/languages/pl.md#l450-i12-in-polish) Polish · 0/8

### I13 in every language

Cleaning, waste and property services · 3 pages

- [ ] [**L451**](plan/languages/de.md#l451-i13-in-german) German · 0/3
- [ ] [**L452**](plan/languages/es.md#l452-i13-in-spanish) Spanish · 0/3
- [ ] [**L453**](plan/languages/fr.md#l453-i13-in-french) French · 0/3
- [ ] [**L454**](plan/languages/nl.md#l454-i13-in-dutch) Dutch · 0/3
- [ ] [**L455**](plan/languages/sv.md#l455-i13-in-swedish) Swedish · 0/3
- [ ] [**L456**](plan/languages/da.md#l456-i13-in-danish) Danish · 0/3
- [ ] [**L457**](plan/languages/nb.md#l457-i13-in-norwegian-bokmål) Norwegian (Bokmål) · 0/3
- [ ] [**L458**](plan/languages/it.md#l458-i13-in-italian) Italian · 0/3
- [ ] [**L459**](plan/languages/pt.md#l459-i13-in-portuguese) Portuguese · 0/3
- [ ] [**L460**](plan/languages/pl.md#l460-i13-in-polish) Polish · 0/3

### I14 in every language

Auto shops and transport · 8 pages

- [ ] [**L461**](plan/languages/de.md#l461-i14-in-german) German · 0/8
- [ ] [**L462**](plan/languages/es.md#l462-i14-in-spanish) Spanish · 0/8
- [ ] [**L463**](plan/languages/fr.md#l463-i14-in-french) French · 0/8
- [ ] [**L464**](plan/languages/nl.md#l464-i14-in-dutch) Dutch · 0/8
- [ ] [**L465**](plan/languages/sv.md#l465-i14-in-swedish) Swedish · 0/8
- [ ] [**L466**](plan/languages/da.md#l466-i14-in-danish) Danish · 0/8
- [ ] [**L467**](plan/languages/nb.md#l467-i14-in-norwegian-bokmål) Norwegian (Bokmål) · 0/8
- [ ] [**L468**](plan/languages/it.md#l468-i14-in-italian) Italian · 0/8
- [ ] [**L469**](plan/languages/pt.md#l469-i14-in-portuguese) Portuguese · 0/8
- [ ] [**L470**](plan/languages/pl.md#l470-i14-in-polish) Polish · 0/8

### I15 in every language

Professional services · 8 pages

- [ ] [**L471**](plan/languages/de.md#l471-i15-in-german) German · 0/8
- [ ] [**L472**](plan/languages/es.md#l472-i15-in-spanish) Spanish · 0/8
- [ ] [**L473**](plan/languages/fr.md#l473-i15-in-french) French · 0/8
- [ ] [**L474**](plan/languages/nl.md#l474-i15-in-dutch) Dutch · 0/8
- [ ] [**L475**](plan/languages/sv.md#l475-i15-in-swedish) Swedish · 0/8
- [ ] [**L476**](plan/languages/da.md#l476-i15-in-danish) Danish · 0/8
- [ ] [**L477**](plan/languages/nb.md#l477-i15-in-norwegian-bokmål) Norwegian (Bokmål) · 0/8
- [ ] [**L478**](plan/languages/it.md#l478-i15-in-italian) Italian · 0/8
- [ ] [**L479**](plan/languages/pt.md#l479-i15-in-portuguese) Portuguese · 0/8
- [ ] [**L480**](plan/languages/pl.md#l480-i15-in-polish) Polish · 0/8

### I16 in every language

Events, food and travel · 10 pages

- [ ] [**L481**](plan/languages/de.md#l481-i16-in-german) German · 0/10
- [ ] [**L482**](plan/languages/es.md#l482-i16-in-spanish) Spanish · 0/10
- [ ] [**L483**](plan/languages/fr.md#l483-i16-in-french) French · 0/10
- [ ] [**L484**](plan/languages/nl.md#l484-i16-in-dutch) Dutch · 0/10
- [ ] [**L485**](plan/languages/sv.md#l485-i16-in-swedish) Swedish · 0/10
- [ ] [**L486**](plan/languages/da.md#l486-i16-in-danish) Danish · 0/10
- [ ] [**L487**](plan/languages/nb.md#l487-i16-in-norwegian-bokmål) Norwegian (Bokmål) · 0/10
- [ ] [**L488**](plan/languages/it.md#l488-i16-in-italian) Italian · 0/10
- [ ] [**L489**](plan/languages/pt.md#l489-i16-in-portuguese) Portuguese · 0/10
- [ ] [**L490**](plan/languages/pl.md#l490-i16-in-polish) Polish · 0/10

### I17 in every language

Creative and media · 9 pages

- [ ] [**L491**](plan/languages/de.md#l491-i17-in-german) German · 0/9
- [ ] [**L492**](plan/languages/es.md#l492-i17-in-spanish) Spanish · 0/9
- [ ] [**L493**](plan/languages/fr.md#l493-i17-in-french) French · 0/9
- [ ] [**L494**](plan/languages/nl.md#l494-i17-in-dutch) Dutch · 0/9
- [ ] [**L495**](plan/languages/sv.md#l495-i17-in-swedish) Swedish · 0/9
- [ ] [**L496**](plan/languages/da.md#l496-i17-in-danish) Danish · 0/9
- [ ] [**L497**](plan/languages/nb.md#l497-i17-in-norwegian-bokmål) Norwegian (Bokmål) · 0/9
- [ ] [**L498**](plan/languages/it.md#l498-i17-in-italian) Italian · 0/9
- [ ] [**L499**](plan/languages/pt.md#l499-i17-in-portuguese) Portuguese · 0/9
- [ ] [**L500**](plan/languages/pl.md#l500-i17-in-polish) Polish · 0/9

### I18 in every language

Health, wellness and beauty · 11 pages

- [ ] [**L501**](plan/languages/de.md#l501-i18-in-german) German · 0/11
- [ ] [**L502**](plan/languages/es.md#l502-i18-in-spanish) Spanish · 0/11
- [ ] [**L503**](plan/languages/fr.md#l503-i18-in-french) French · 0/11
- [ ] [**L504**](plan/languages/nl.md#l504-i18-in-dutch) Dutch · 0/11
- [ ] [**L505**](plan/languages/sv.md#l505-i18-in-swedish) Swedish · 0/11
- [ ] [**L506**](plan/languages/da.md#l506-i18-in-danish) Danish · 0/11
- [ ] [**L507**](plan/languages/nb.md#l507-i18-in-norwegian-bokmål) Norwegian (Bokmål) · 0/11
- [ ] [**L508**](plan/languages/it.md#l508-i18-in-italian) Italian · 0/11
- [ ] [**L509**](plan/languages/pt.md#l509-i18-in-portuguese) Portuguese · 0/11
- [ ] [**L510**](plan/languages/pl.md#l510-i18-in-polish) Polish · 0/11

### I19 in every language

Education and childcare · 9 pages

- [ ] [**L511**](plan/languages/de.md#l511-i19-in-german) German · 0/9
- [ ] [**L512**](plan/languages/es.md#l512-i19-in-spanish) Spanish · 0/9
- [ ] [**L513**](plan/languages/fr.md#l513-i19-in-french) French · 0/9
- [ ] [**L514**](plan/languages/nl.md#l514-i19-in-dutch) Dutch · 0/9
- [ ] [**L515**](plan/languages/sv.md#l515-i19-in-swedish) Swedish · 0/9
- [ ] [**L516**](plan/languages/da.md#l516-i19-in-danish) Danish · 0/9
- [ ] [**L517**](plan/languages/nb.md#l517-i19-in-norwegian-bokmål) Norwegian (Bokmål) · 0/9
- [ ] [**L518**](plan/languages/it.md#l518-i19-in-italian) Italian · 0/9
- [ ] [**L519**](plan/languages/pt.md#l519-i19-in-portuguese) Portuguese · 0/9
- [ ] [**L520**](plan/languages/pl.md#l520-i19-in-polish) Polish · 0/9

### I20 in every language

Animals, farms and outdoors · 9 pages

- [ ] [**L521**](plan/languages/de.md#l521-i20-in-german) German · 0/9
- [ ] [**L522**](plan/languages/es.md#l522-i20-in-spanish) Spanish · 0/9
- [ ] [**L523**](plan/languages/fr.md#l523-i20-in-french) French · 0/9
- [ ] [**L524**](plan/languages/nl.md#l524-i20-in-dutch) Dutch · 0/9
- [ ] [**L525**](plan/languages/sv.md#l525-i20-in-swedish) Swedish · 0/9
- [ ] [**L526**](plan/languages/da.md#l526-i20-in-danish) Danish · 0/9
- [ ] [**L527**](plan/languages/nb.md#l527-i20-in-norwegian-bokmål) Norwegian (Bokmål) · 0/9
- [ ] [**L528**](plan/languages/it.md#l528-i20-in-italian) Italian · 0/9
- [ ] [**L529**](plan/languages/pt.md#l529-i20-in-portuguese) Portuguese · 0/9
- [ ] [**L530**](plan/languages/pl.md#l530-i20-in-polish) Polish · 0/9

### B4 in every language

Deposits: events and weddings · 11 pages

- [ ] [**L531**](plan/languages/de.md#l531-b4-in-german) German · 0/11
- [ ] [**L532**](plan/languages/es.md#l532-b4-in-spanish) Spanish · 0/11
- [ ] [**L533**](plan/languages/fr.md#l533-b4-in-french) French · 0/11
- [ ] [**L534**](plan/languages/nl.md#l534-b4-in-dutch) Dutch · 0/11
- [ ] [**L535**](plan/languages/sv.md#l535-b4-in-swedish) Swedish · 0/11
- [ ] [**L536**](plan/languages/da.md#l536-b4-in-danish) Danish · 0/11
- [ ] [**L537**](plan/languages/nb.md#l537-b4-in-norwegian-bokmål) Norwegian (Bokmål) · 0/11
- [ ] [**L538**](plan/languages/it.md#l538-b4-in-italian) Italian · 0/11
- [ ] [**L539**](plan/languages/pt.md#l539-b4-in-portuguese) Portuguese · 0/11
- [ ] [**L540**](plan/languages/pl.md#l540-b4-in-polish) Polish · 0/11

### B5 in every language

Deposits: custom and made-to-order work · 13 pages

- [ ] [**L541**](plan/languages/de.md#l541-b5-in-german) German · 0/13
- [ ] [**L542**](plan/languages/es.md#l542-b5-in-spanish) Spanish · 0/13
- [ ] [**L543**](plan/languages/fr.md#l543-b5-in-french) French · 0/13
- [ ] [**L544**](plan/languages/nl.md#l544-b5-in-dutch) Dutch · 0/13
- [ ] [**L545**](plan/languages/sv.md#l545-b5-in-swedish) Swedish · 0/13
- [ ] [**L546**](plan/languages/da.md#l546-b5-in-danish) Danish · 0/13
- [ ] [**L547**](plan/languages/nb.md#l547-b5-in-norwegian-bokmål) Norwegian (Bokmål) · 0/13
- [ ] [**L548**](plan/languages/it.md#l548-b5-in-italian) Italian · 0/13
- [ ] [**L549**](plan/languages/pt.md#l549-b5-in-portuguese) Portuguese · 0/13
- [ ] [**L550**](plan/languages/pl.md#l550-b5-in-polish) Polish · 0/13

### B6 in every language

Deposits: contractors and home projects · 13 pages

- [ ] [**L551**](plan/languages/de.md#l551-b6-in-german) German · 0/13
- [ ] [**L552**](plan/languages/es.md#l552-b6-in-spanish) Spanish · 0/13
- [ ] [**L553**](plan/languages/fr.md#l553-b6-in-french) French · 0/13
- [ ] [**L554**](plan/languages/nl.md#l554-b6-in-dutch) Dutch · 0/13
- [ ] [**L555**](plan/languages/sv.md#l555-b6-in-swedish) Swedish · 0/13
- [ ] [**L556**](plan/languages/da.md#l556-b6-in-danish) Danish · 0/13
- [ ] [**L557**](plan/languages/nb.md#l557-b6-in-norwegian-bokmål) Norwegian (Bokmål) · 0/13
- [ ] [**L558**](plan/languages/it.md#l558-b6-in-italian) Italian · 0/13
- [ ] [**L559**](plan/languages/pt.md#l559-b6-in-portuguese) Portuguese · 0/13
- [ ] [**L560**](plan/languages/pl.md#l560-b6-in-polish) Polish · 0/13

### B7 in every language

Progress invoices: construction trades · 9 pages

- [ ] [**L561**](plan/languages/de.md#l561-b7-in-german) German · 0/9
- [ ] [**L562**](plan/languages/es.md#l562-b7-in-spanish) Spanish · 0/9
- [ ] [**L563**](plan/languages/fr.md#l563-b7-in-french) French · 0/9
- [ ] [**L564**](plan/languages/nl.md#l564-b7-in-dutch) Dutch · 0/9
- [ ] [**L565**](plan/languages/sv.md#l565-b7-in-swedish) Swedish · 0/9
- [ ] [**L566**](plan/languages/da.md#l566-b7-in-danish) Danish · 0/9
- [ ] [**L567**](plan/languages/nb.md#l567-b7-in-norwegian-bokmål) Norwegian (Bokmål) · 0/9
- [ ] [**L568**](plan/languages/it.md#l568-b7-in-italian) Italian · 0/9
- [ ] [**L569**](plan/languages/pt.md#l569-b7-in-portuguese) Portuguese · 0/9
- [ ] [**L570**](plan/languages/pl.md#l570-b7-in-polish) Polish · 0/9

### B8 in every language

Monthly and seasonal service invoices · 13 pages

- [ ] [**L571**](plan/languages/de.md#l571-b8-in-german) German · 0/13
- [ ] [**L572**](plan/languages/es.md#l572-b8-in-spanish) Spanish · 0/13
- [ ] [**L573**](plan/languages/fr.md#l573-b8-in-french) French · 0/13
- [ ] [**L574**](plan/languages/nl.md#l574-b8-in-dutch) Dutch · 0/13
- [ ] [**L575**](plan/languages/sv.md#l575-b8-in-swedish) Swedish · 0/13
- [ ] [**L576**](plan/languages/da.md#l576-b8-in-danish) Danish · 0/13
- [ ] [**L577**](plan/languages/nb.md#l577-b8-in-norwegian-bokmål) Norwegian (Bokmål) · 0/13
- [ ] [**L578**](plan/languages/it.md#l578-b8-in-italian) Italian · 0/13
- [ ] [**L579**](plan/languages/pt.md#l579-b8-in-portuguese) Portuguese · 0/13
- [ ] [**L580**](plan/languages/pl.md#l580-b8-in-polish) Polish · 0/13

### B9 in every language

Retainers for professionals · 10 pages

- [ ] [**L581**](plan/languages/de.md#l581-b9-in-german) German · 0/10
- [ ] [**L582**](plan/languages/es.md#l582-b9-in-spanish) Spanish · 0/10
- [ ] [**L583**](plan/languages/fr.md#l583-b9-in-french) French · 0/10
- [ ] [**L584**](plan/languages/nl.md#l584-b9-in-dutch) Dutch · 0/10
- [ ] [**L585**](plan/languages/sv.md#l585-b9-in-swedish) Swedish · 0/10
- [ ] [**L586**](plan/languages/da.md#l586-b9-in-danish) Danish · 0/10
- [ ] [**L587**](plan/languages/nb.md#l587-b9-in-norwegian-bokmål) Norwegian (Bokmål) · 0/10
- [ ] [**L588**](plan/languages/it.md#l588-b9-in-italian) Italian · 0/10
- [ ] [**L589**](plan/languages/pt.md#l589-b9-in-portuguese) Portuguese · 0/10
- [ ] [**L590**](plan/languages/pl.md#l590-b9-in-polish) Polish · 0/10

### B10 in every language

Hourly billing for professionals and care · 7 pages

- [ ] [**L591**](plan/languages/de.md#l591-b10-in-german) German · 0/7
- [ ] [**L592**](plan/languages/es.md#l592-b10-in-spanish) Spanish · 0/7
- [ ] [**L593**](plan/languages/fr.md#l593-b10-in-french) French · 0/7
- [ ] [**L594**](plan/languages/nl.md#l594-b10-in-dutch) Dutch · 0/7
- [ ] [**L595**](plan/languages/sv.md#l595-b10-in-swedish) Swedish · 0/7
- [ ] [**L596**](plan/languages/da.md#l596-b10-in-danish) Danish · 0/7
- [ ] [**L597**](plan/languages/nb.md#l597-b10-in-norwegian-bokmål) Norwegian (Bokmål) · 0/7
- [ ] [**L598**](plan/languages/it.md#l598-b10-in-italian) Italian · 0/7
- [ ] [**L599**](plan/languages/pt.md#l599-b10-in-portuguese) Portuguese · 0/7
- [ ] [**L600**](plan/languages/pl.md#l600-b10-in-polish) Polish · 0/7

### B11 in every language

Packages: lessons, wellness and coaching · 10 pages

- [ ] [**L601**](plan/languages/de.md#l601-b11-in-german) German · 0/10
- [ ] [**L602**](plan/languages/es.md#l602-b11-in-spanish) Spanish · 0/10
- [ ] [**L603**](plan/languages/fr.md#l603-b11-in-french) French · 0/10
- [ ] [**L604**](plan/languages/nl.md#l604-b11-in-dutch) Dutch · 0/10
- [ ] [**L605**](plan/languages/sv.md#l605-b11-in-swedish) Swedish · 0/10
- [ ] [**L606**](plan/languages/da.md#l606-b11-in-danish) Danish · 0/10
- [ ] [**L607**](plan/languages/nb.md#l607-b11-in-norwegian-bokmål) Norwegian (Bokmål) · 0/10
- [ ] [**L608**](plan/languages/it.md#l608-b11-in-italian) Italian · 0/10
- [ ] [**L609**](plan/languages/pt.md#l609-b11-in-portuguese) Portuguese · 0/10
- [ ] [**L610**](plan/languages/pl.md#l610-b11-in-polish) Polish · 0/10

### B12 in every language

Service calls, emergencies and insurance jobs · 11 pages

- [ ] [**L611**](plan/languages/de.md#l611-b12-in-german) German · 0/11
- [ ] [**L612**](plan/languages/es.md#l612-b12-in-spanish) Spanish · 0/11
- [ ] [**L613**](plan/languages/fr.md#l613-b12-in-french) French · 0/11
- [ ] [**L614**](plan/languages/nl.md#l614-b12-in-dutch) Dutch · 0/11
- [ ] [**L615**](plan/languages/sv.md#l615-b12-in-swedish) Swedish · 0/11
- [ ] [**L616**](plan/languages/da.md#l616-b12-in-danish) Danish · 0/11
- [ ] [**L617**](plan/languages/nb.md#l617-b12-in-norwegian-bokmål) Norwegian (Bokmål) · 0/11
- [ ] [**L618**](plan/languages/it.md#l618-b12-in-italian) Italian · 0/11
- [ ] [**L619**](plan/languages/pt.md#l619-b12-in-portuguese) Portuguese · 0/11
- [ ] [**L620**](plan/languages/pl.md#l620-b12-in-polish) Polish · 0/11

### B13 in every language

Milestones: creative, tech and engineering projects · 9 pages

- [ ] [**L621**](plan/languages/de.md#l621-b13-in-german) German · 0/9
- [ ] [**L622**](plan/languages/es.md#l622-b13-in-spanish) Spanish · 0/9
- [ ] [**L623**](plan/languages/fr.md#l623-b13-in-french) French · 0/9
- [ ] [**L624**](plan/languages/nl.md#l624-b13-in-dutch) Dutch · 0/9
- [ ] [**L625**](plan/languages/sv.md#l625-b13-in-swedish) Swedish · 0/9
- [ ] [**L626**](plan/languages/da.md#l626-b13-in-danish) Danish · 0/9
- [ ] [**L627**](plan/languages/nb.md#l627-b13-in-norwegian-bokmål) Norwegian (Bokmål) · 0/9
- [ ] [**L628**](plan/languages/it.md#l628-b13-in-italian) Italian · 0/9
- [ ] [**L629**](plan/languages/pt.md#l629-b13-in-portuguese) Portuguese · 0/9
- [ ] [**L630**](plan/languages/pl.md#l630-b13-in-polish) Polish · 0/9

### B14 in every language

Final invoices: events and custom work · 7 pages

- [ ] [**L631**](plan/languages/de.md#l631-b14-in-german) German · 0/7
- [ ] [**L632**](plan/languages/es.md#l632-b14-in-spanish) Spanish · 0/7
- [ ] [**L633**](plan/languages/fr.md#l633-b14-in-french) French · 0/7
- [ ] [**L634**](plan/languages/nl.md#l634-b14-in-dutch) Dutch · 0/7
- [ ] [**L635**](plan/languages/sv.md#l635-b14-in-swedish) Swedish · 0/7
- [ ] [**L636**](plan/languages/da.md#l636-b14-in-danish) Danish · 0/7
- [ ] [**L637**](plan/languages/nb.md#l637-b14-in-norwegian-bokmål) Norwegian (Bokmål) · 0/7
- [ ] [**L638**](plan/languages/it.md#l638-b14-in-italian) Italian · 0/7
- [ ] [**L639**](plan/languages/pt.md#l639-b14-in-portuguese) Portuguese · 0/7
- [ ] [**L640**](plan/languages/pl.md#l640-b14-in-polish) Polish · 0/7

### B15 in every language

Per-unit billing: per word, mile and minute · 5 pages

- [ ] [**L641**](plan/languages/de.md#l641-b15-in-german) German · 0/5
- [ ] [**L642**](plan/languages/es.md#l642-b15-in-spanish) Spanish · 0/5
- [ ] [**L643**](plan/languages/fr.md#l643-b15-in-french) French · 0/5
- [ ] [**L644**](plan/languages/nl.md#l644-b15-in-dutch) Dutch · 0/5
- [ ] [**L645**](plan/languages/sv.md#l645-b15-in-swedish) Swedish · 0/5
- [ ] [**L646**](plan/languages/da.md#l646-b15-in-danish) Danish · 0/5
- [ ] [**L647**](plan/languages/nb.md#l647-b15-in-norwegian-bokmål) Norwegian (Bokmål) · 0/5
- [ ] [**L648**](plan/languages/it.md#l648-b15-in-italian) Italian · 0/5
- [ ] [**L649**](plan/languages/pt.md#l649-b15-in-portuguese) Portuguese · 0/5
- [ ] [**L650**](plan/languages/pl.md#l650-b15-in-polish) Polish · 0/5

### TL5 in every language

Tax tools for the self-employed · 3 pages

- [ ] [**L651**](plan/languages/de.md#l651-tl5-in-german) German · 0/3
- [ ] [**L652**](plan/languages/es.md#l652-tl5-in-spanish) Spanish · 0/3
- [ ] [**L653**](plan/languages/fr.md#l653-tl5-in-french) French · 0/3
- [ ] [**L654**](plan/languages/nl.md#l654-tl5-in-dutch) Dutch · 0/3
- [ ] [**L655**](plan/languages/sv.md#l655-tl5-in-swedish) Swedish · 0/3
- [ ] [**L656**](plan/languages/da.md#l656-tl5-in-danish) Danish · 0/3
- [ ] [**L657**](plan/languages/nb.md#l657-tl5-in-norwegian-bokmål) Norwegian (Bokmål) · 0/3
- [ ] [**L658**](plan/languages/it.md#l658-tl5-in-italian) Italian · 0/3
- [ ] [**L659**](plan/languages/pt.md#l659-tl5-in-portuguese) Portuguese · 0/3
- [ ] [**L660**](plan/languages/pl.md#l660-tl5-in-polish) Polish · 0/3

### TL6 in every language

Payment fees, terms and payment details · 13 pages

- [ ] [**L661**](plan/languages/de.md#l661-tl6-in-german) German · 0/13
- [ ] [**L662**](plan/languages/es.md#l662-tl6-in-spanish) Spanish · 0/13
- [ ] [**L663**](plan/languages/fr.md#l663-tl6-in-french) French · 0/13
- [ ] [**L664**](plan/languages/nl.md#l664-tl6-in-dutch) Dutch · 0/13
- [ ] [**L665**](plan/languages/sv.md#l665-tl6-in-swedish) Swedish · 0/13
- [ ] [**L666**](plan/languages/da.md#l666-tl6-in-danish) Danish · 0/13
- [ ] [**L667**](plan/languages/nb.md#l667-tl6-in-norwegian-bokmål) Norwegian (Bokmål) · 0/13
- [ ] [**L668**](plan/languages/it.md#l668-tl6-in-italian) Italian · 0/13
- [ ] [**L669**](plan/languages/pt.md#l669-tl6-in-portuguese) Portuguese · 0/13
- [ ] [**L670**](plan/languages/pl.md#l670-tl6-in-polish) Polish · 0/13

### TL7 in every language

Job costing and materials for contractors · 13 pages

- [ ] [**L671**](plan/languages/de.md#l671-tl7-in-german) German · 0/13
- [ ] [**L672**](plan/languages/es.md#l672-tl7-in-spanish) Spanish · 0/13
- [ ] [**L673**](plan/languages/fr.md#l673-tl7-in-french) French · 0/13
- [ ] [**L674**](plan/languages/nl.md#l674-tl7-in-dutch) Dutch · 0/13
- [ ] [**L675**](plan/languages/sv.md#l675-tl7-in-swedish) Swedish · 0/13
- [ ] [**L676**](plan/languages/da.md#l676-tl7-in-danish) Danish · 0/13
- [ ] [**L677**](plan/languages/nb.md#l677-tl7-in-norwegian-bokmål) Norwegian (Bokmål) · 0/13
- [ ] [**L678**](plan/languages/it.md#l678-tl7-in-italian) Italian · 0/13
- [ ] [**L679**](plan/languages/pt.md#l679-tl7-in-portuguese) Portuguese · 0/13
- [ ] [**L680**](plan/languages/pl.md#l680-tl7-in-polish) Polish · 0/13

### TL8 in every language

Pricing calculators II: services and transport · 14 pages

- [ ] [**L681**](plan/languages/de.md#l681-tl8-in-german) German · 0/14
- [ ] [**L682**](plan/languages/es.md#l682-tl8-in-spanish) Spanish · 0/14
- [ ] [**L683**](plan/languages/fr.md#l683-tl8-in-french) French · 0/14
- [ ] [**L684**](plan/languages/nl.md#l684-tl8-in-dutch) Dutch · 0/14
- [ ] [**L685**](plan/languages/sv.md#l685-tl8-in-swedish) Swedish · 0/14
- [ ] [**L686**](plan/languages/da.md#l686-tl8-in-danish) Danish · 0/14
- [ ] [**L687**](plan/languages/nb.md#l687-tl8-in-norwegian-bokmål) Norwegian (Bokmål) · 0/14
- [ ] [**L688**](plan/languages/it.md#l688-tl8-in-italian) Italian · 0/14
- [ ] [**L689**](plan/languages/pt.md#l689-tl8-in-portuguese) Portuguese · 0/14
- [ ] [**L690**](plan/languages/pl.md#l690-tl8-in-polish) Polish · 0/14

### TL9 in every language

Pricing calculators III: makers and production · 7 pages

- [ ] [**L691**](plan/languages/de.md#l691-tl9-in-german) German · 0/7
- [ ] [**L692**](plan/languages/es.md#l692-tl9-in-spanish) Spanish · 0/7
- [ ] [**L693**](plan/languages/fr.md#l693-tl9-in-french) French · 0/7
- [ ] [**L694**](plan/languages/nl.md#l694-tl9-in-dutch) Dutch · 0/7
- [ ] [**L695**](plan/languages/sv.md#l695-tl9-in-swedish) Swedish · 0/7
- [ ] [**L696**](plan/languages/da.md#l696-tl9-in-danish) Danish · 0/7
- [ ] [**L697**](plan/languages/nb.md#l697-tl9-in-norwegian-bokmål) Norwegian (Bokmål) · 0/7
- [ ] [**L698**](plan/languages/it.md#l698-tl9-in-italian) Italian · 0/7
- [ ] [**L699**](plan/languages/pt.md#l699-tl9-in-portuguese) Portuguese · 0/7
- [ ] [**L700**](plan/languages/pl.md#l700-tl9-in-polish) Polish · 0/7

### D2 in every language

Invoice types II: special cases (self-billing, revised, paid, PO …) · 8 pages

- [ ] [**L701**](plan/languages/de.md#l701-d2-in-german) German · 0/7
- [ ] [**L702**](plan/languages/es.md#l702-d2-in-spanish) Spanish · 0/8
- [ ] [**L703**](plan/languages/fr.md#l703-d2-in-french) French · 0/8
- [ ] [**L704**](plan/languages/nl.md#l704-d2-in-dutch) Dutch · 0/8
- [ ] [**L705**](plan/languages/sv.md#l705-d2-in-swedish) Swedish · 0/8
- [ ] [**L706**](plan/languages/da.md#l706-d2-in-danish) Danish · 0/8
- [ ] [**L707**](plan/languages/nb.md#l707-d2-in-norwegian-bokmål) Norwegian (Bokmål) · 0/8
- [ ] [**L708**](plan/languages/it.md#l708-d2-in-italian) Italian · 0/8
- [ ] [**L709**](plan/languages/pt.md#l709-d2-in-portuguese) Portuguese · 0/8
- [ ] [**L710**](plan/languages/pl.md#l710-d2-in-polish) Polish · 0/8

### G2 in every language

Document generators II (purchase order, delivery note, statement, debit note, work order) · 5 pages

- [ ] [**L711**](plan/languages/de.md#l711-g2-in-german) German · 0/5
- [ ] [**L712**](plan/languages/es.md#l712-g2-in-spanish) Spanish · 0/5
- [ ] [**L713**](plan/languages/fr.md#l713-g2-in-french) French · 0/5
- [ ] [**L714**](plan/languages/nl.md#l714-g2-in-dutch) Dutch · 0/5
- [ ] [**L715**](plan/languages/sv.md#l715-g2-in-swedish) Swedish · 0/5
- [ ] [**L716**](plan/languages/da.md#l716-g2-in-danish) Danish · 0/5
- [ ] [**L717**](plan/languages/nb.md#l717-g2-in-norwegian-bokmål) Norwegian (Bokmål) · 0/5
- [ ] [**L718**](plan/languages/it.md#l718-g2-in-italian) Italian · 0/5
- [ ] [**L719**](plan/languages/pt.md#l719-g2-in-portuguese) Portuguese · 0/5
- [ ] [**L720**](plan/languages/pl.md#l720-g2-in-polish) Polish · 0/5

### P2 in every language

Features, security, the countries hub and the German Impressum · 2 pages

- [ ] [**L721**](plan/languages/de.md#l721-p2-in-german) German · 0/2
- [ ] [**L722**](plan/languages/es.md#l722-p2-in-spanish) Spanish · 0/2
- [ ] [**L723**](plan/languages/fr.md#l723-p2-in-french) French · 0/2
- [ ] [**L724**](plan/languages/nl.md#l724-p2-in-dutch) Dutch · 0/2
- [ ] [**L725**](plan/languages/sv.md#l725-p2-in-swedish) Swedish · 0/2
- [ ] [**L726**](plan/languages/da.md#l726-p2-in-danish) Danish · 0/2
- [ ] [**L727**](plan/languages/nb.md#l727-p2-in-norwegian-bokmål) Norwegian (Bokmål) · 0/2
- [ ] [**L728**](plan/languages/it.md#l728-p2-in-italian) Italian · 0/2
- [ ] [**L729**](plan/languages/pt.md#l729-p2-in-portuguese) Portuguese · 0/2
- [ ] [**L730**](plan/languages/pl.md#l730-p2-in-polish) Polish · 0/2

## Not in an item yet

Pages that need a decision or code first, and pages on hold, with the reason in their brief.

- **on hold: file downloads (53)** (4): [/templates/invoice-template-word](plan/core.md#templatesinvoice-template-word) · [/templates/invoice-template-excel](plan/core.md#templatesinvoice-template-excel) · [/templates/invoice-template-google-docs](plan/core.md#templatesinvoice-template-google-docs) · [/templates/invoice-template-pdf](plan/core.md#templatesinvoice-template-pdf)
- **on hold: e-invoicing** (3): [/it/fattura-elementi-obbligatori](plan/local.md#itfattura-elementi-obbligatori) · [/pt/requisitos-fatura](plan/local.md#ptrequisitos-fatura) · [/pl/elementy-faktury](plan/local.md#plelementy-faktury)
