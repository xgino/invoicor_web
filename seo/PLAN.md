# Page plan

> **Generated, don't edit by hand.** Every page has an ID: a letter per category and a number
> (T5, D12, LO3); its language versions add the language (D12-de). Pages sit in groups of
> 10–25 (D1–D20) per category. Boxes tick themselves when the pages are live. The rules for
> every page: [RULES.md](RULES.md). The brief per English page is in [plan/](plan/) (one file per
> category); the instructions per language version in [plan/languages/](plan/languages/). What
> exists today: [PAGES.md](PAGES.md). Data: [pages/](pages/) (`id`, `brief`,
> `avoid`), groups and tasks: `scripts/pages-items.mjs`. After any change: `npm run pages`.

**358 / 4,000 pages live** (9%) · planned: 955 English and local pages + 7,964 language versions · **9,277 when everything is built** (fewer after the demand gate parks the weak ones)

## How to run

Say which: "do D4" (one page and its language versions), "do D4-de" (one language version),
"do D1–D20" (a group), "do D1–D20 in German" or "do S1" (a task). One page at a glance:
`npm run pages:page D4`. Then:

1. **English pages (D4, D1–D20 …):** first the demand gate ([RULES.md §2](RULES.md#2-thin-and-duplicate-pages-what-google-punishes)):
   park the pages nobody searches for. Then, for each page, read its brief (the link), its
   category's section in [RULES.md §5](RULES.md#5-categories) and the fact sheet
   [BRAND.md §10](../BRAND.md). Use one live page of the same type as the model. Write them all,
   then: `npm run content:check` → `npm run build` → `npm run pages` → `npm run check`. Update
   ROADMAP.md; one commit per request.
2. **Language versions (D4-de, D1–D20 in German …):** written for that country, from the
   instructions in that language's file in [plan/languages/](plan/languages/). Needs task S1 for
   templates and industry pages, and the English page live first. "do D4" includes them once
   both are true.
3. **Task (S1 …):** code work, no pages. Tick it in `scripts/pages-items.mjs` (`done: true`).
4. **After each deploy:** check indexing per page type before adding more of it ([RULES.md §2](RULES.md#2-thin-and-duplicate-pages-what-google-punishes)).
5. **New pages for the plan:** "add 10 pages to T" (the `seo-add-pages` skill, [RULES.md §3](RULES.md#3-planning-new-items)).

## Overview

| Category | Page IDs | Groups | Pages done | Pages to build | Languages done |
|---|---|---|---|---|---|
| [Trade templates](#trade-templates-t) | T1–T313 | 20 | 50 | 263 | 30/2904 |
| [Billing-type templates](#billing-type-templates-b) | B1–B178 | 15 | 0 | 177 | 0/1770 |
| [Invoice types (general documents)](#invoice-types-general-documents-d) | D1–D30 | 2 | 16 | 10 | 65/156 |
| [Industry pages ("invoice app for …")](#industry-pages-invoice-app-for--i) | I1–I239 | 20 | 43 | 196 | 10/2207 |
| [Compare pages ("{competitor} alternative")](#compare-pages-competitor-alternative-c) | C1–C97 | 11 | 20 | 77 | none |
| [Free tools](#free-tools-tl) | TL1–TL113 | 10 | 4 | 109 | 40/910 |
| [Country pages (English)](#country-pages-english-ct) | CT1–CT39 | 6 | 0 | 39 | 0/10 |
| [Local pages (in the country's own language)](#local-pages-in-the-countrys-own-language-lo) | LO1–LO74 | 8 | 0 | 71 | none |
| [Generators](#generators-g) | G1–G10 | 3 | 1 | 9 | 10/100 |
| [Core pages, hubs, trust and legal](#core-pages-hubs-trust-and-legal-p) | P1–P19 | 3 | 11 | 4 | 58/120 |

## Best next (by score)

The groups that can be built now (no task in the way), best first: the average `score` of their planned pages (blank counts as 3; how to score: [RULES.md §3](RULES.md#3-planning-new-items)), ties in the suggested order below. 0 of 955 planned pages are scored.

| # | Group | Pages to build | Score | Scored |
|---|---|---|---|---|
| 1 | [B1–B20](#b1b20-billing-types-i) Billing types I | 20 | 3.0 | 0/20 |
| 2 | [T51–T60](#t51t60-10-trades-notary-home-inspection-it-services-) 10 trades: notary, home inspection, IT services … | 10 | 3.0 | 0/10 |
| 3 | [I44–I53](#i44i53-industry-pages-for-t51t60s-trades) Industry pages for T51–T60's trades | 10 | 3.0 | 0/10 |
| 4 | [TL5–TL15](#tl5tl15-free-tools-i) Free tools I | 11 | 3.0 | 0/11 |
| 5 | [I138–I143](#i138i143-one-trade-per-page-split-the-combined-industry-pages) One trade per page: split the combined industry pages | 6 | 3.0 | 0/6 |
| 6 | [I144–I152](#i144i152-who-invoices-self-employed-freelancers-sellers) Who invoices: self-employed, freelancers, sellers | 9 | 3.0 | 0/9 |
| 7 | [T61–T80](#t61t80-home-and-property-services) Home and property services | 20 | 3.0 | 0/20 |
| 8 | [I54–I73](#i54i73-industry-pages-for-t61t80s-trades) Industry pages for T61–T80's trades | 20 | 3.0 | 0/20 |
| 9 | [C21–C40](#c21c40-20-more-compares-english-only) 20 more compares (English only) | 20 | 3.0 | 0/20 |
| 10 | [B21–B40](#b21b40-billing-types-ii) Billing types II | 20 | 3.0 | 0/20 |
| 11 | [T81–T100](#t81t100-makers-repair-transport-events) Makers, repair, transport, events | 20 | 3.0 | 0/20 |
| 12 | [I74–I93](#i74i93-industry-pages-for-t81t100s-trades) Industry pages for T81–T100's trades | 20 | 3.0 | 0/20 |
| 13 | [LO13–LO32](#lo13lo32-local-rivals-in-their-own-language-hl9) Local rivals, in their own language (HL9) | 20 | 3.0 | 0/20 |
| 14 | [TL16–TL25](#tl16tl25-free-tools-ii) Free tools II | 10 | 3.0 | 0/10 |
| 15 | [G2–G5](#g2g5-document-generators-receipt-estimate-proforma-credit-note) Document generators (receipt, estimate, proforma, credit note) | 4 | 3.0 | 0/4 |

And 54 more ready groups. Waiting for a task: **S4** (TL26–TL45, TL76–TL90, TL91–TL106, TL107–TL113) · **S3** (CT1–CT7, CT8–CT13, CT14–CT23, CT24–CT31, CT32–CT35, CT36–CT39, LO1–LO12, LO33–LO40, LO41–LO45, LO46–LO51, LO52–LO59, LO60–LO66, LO67–LO71).

## Suggested order

The groups and tasks in the order that pays off most (parents first, bigger searches first, code
before the pages that need it). A group's language versions follow once its English pages are live.

~~S1~~ → ~~D1–D20~~ → **B1–B20** → **T51–T60** → **I44–I53** → **TL5–TL15** → ~~P10–P11~~ → **I138–I143** → **I144–I152** → **S3** → **CT1–CT7** → **T61–T80** → **I54–I73** → **C21–C40** → **S2** → **CT8–CT13** → **B21–B40** → **T81–T100** → **I74–I93** → **LO1–LO12** → **LO13–LO32** → **TL16–TL25** → **G2–G5** → **T101–T120** → **I94–I113** → **B41–B60** → **T121–T140** → **I114–I133** → **S4** → **TL26–TL45** → **T141–T156** → **I134–I137** → **CT14–CT23** → **T157–T174** → **T175–T192** → **T193–T207** → **T208–T222** → **T223–T237** → **T238–T252** → **T253–T262** → **T263–T274** → **T275–T289** → **T290–T301** → **T302–T313** → **I153–I162** → **I163–I169** → **I170–I179** → **I180–I190** → **I191–I200** → **I201–I209** → **I210–I220** → **I221–I230** → **I231–I239** → **B61–B71** → **B72–B84** → **B85–B97** → **B98–B106** → **B107–B119** → **B120–B129** → **B130–B136** → **B137–B146** → **B147–B157** → **B158–B166** → **B167–B173** → **B174–B178** → **TL46–TL54** → **TL55–TL62** → **TL63–TL75** → **TL76–TL90** → **TL91–TL106** → **TL107–TL113** → **CT24–CT31** → **CT32–CT35** → **CT36–CT39** → **LO33–LO40** → **LO41–LO45** → **LO46–LO51** → **LO52–LO59** → **LO60–LO66** → **LO67–LO71** → **C41–C48** → **C49–C54** → **C55–C59** → **C60–C68** → **C69–C74** → **C75–C81** → **C82–C87** → **C88–C92** → **C93–C97** → **D21–D30** → **G6–G10** → **P12–P15**

## Tasks (S): code, no pages

- [x] **S1** Language setup for templates and industry pages (roadmap H4): The template and industry page labels in 11 languages, `content/{locale}/templates.json` and `industries.json`, local slugs per language in the route table, hreflang between the versions, the language switcher, the hubs per language, and the sitemap split per page type (a sitemap index, so Search Console shows indexing per type). Every L item for templates and industry pages waits for this.
- [ ] **S2** Hubs at scale: With 150+ templates the hubs need groups (home services, trades, creative, professional, invoice types, billing types) with anchors and a short intro each, so every page is at most 2 clicks from its hub. No thin sub-hub URLs: groups are sections of the one hub.
- [ ] **S3** Country page type (roadmap chunk 43): The page code for country pages (CT) and the local pages (LO): the generator preset per country plus the rules section. The CT and LO groups wait for this (`needs`).
- [ ] **S4** Calculator engine (for the pricing calculators): One calculator component driven by a config per trade (inputs, units, formula steps, the 'Put on an invoice' link), metric units per language. The pricing calculator groups wait for this (`needs`).

## Trade templates (T)

Rules: [RULES.md § T · Trade templates](RULES.md#t--trade-templates) · every brief: [plan/templates.md](plan/templates.md)

### T1–T20: Trade templates 1–20 (built)

- [x] **T1–T20** · 20/20 live · [languages](#t1t20-in-every-language): 24/181
  - [x] **T1** [/templates/photography](https://invoicor.com/templates/photography) photography invoice template
  - [x] **T2** [/templates/plumbing](https://invoicor.com/templates/plumbing) plumbing invoice template
  - [x] **T3** [/templates/hvac](https://invoicor.com/templates/hvac) hvac invoice template
  - [x] **T4** [/templates/freelance-design](https://invoicor.com/templates/freelance-design) graphic design invoice template
  - [x] **T5** [/templates/handyman](https://invoicor.com/templates/handyman) handyman invoice template
  - [x] **T6** [/templates/videography](https://invoicor.com/templates/videography) videography invoice template
  - [x] **T7** [/templates/landscaping](https://invoicor.com/templates/landscaping) landscaping invoice template
  - [x] **T8** [/templates/consulting](https://invoicor.com/templates/consulting) consulting invoice template
  - [x] **T9** [/templates/cleaning-services](https://invoicor.com/templates/cleaning-services) cleaning invoice template
  - [x] **T10** [/templates/auto-detailing](https://invoicor.com/templates/auto-detailing) auto detailing invoice template
  - [x] **T11** [/templates/electrician](https://invoicor.com/templates/electrician) electrician invoice template
  - [x] **T12** [/templates/construction](https://invoicor.com/templates/construction) construction invoice template
  - [x] **T13** [/templates/roofing](https://invoicor.com/templates/roofing) roofing invoice template
  - [x] **T14** [/templates/painting](https://invoicor.com/templates/painting) painting invoice template
  - [x] **T15** [/templates/web-development](https://invoicor.com/templates/web-development) web development invoice template
  - [x] **T16** [/templates/personal-training](https://invoicor.com/templates/personal-training) personal trainer invoice template
  - [x] **T17** [/templates/tutoring](https://invoicor.com/templates/tutoring) tutoring invoice template
  - [x] **T18** [/templates/catering](https://invoicor.com/templates/catering) catering invoice template
  - [x] **T19** [/templates/moving](https://invoicor.com/templates/moving) moving company invoice template
  - [x] **T20** [/templates/pest-control](https://invoicor.com/templates/pest-control) pest control invoice template

### T21–T35: Trade templates 21–35 (built)

- [x] **T21–T35** · 15/15 live · [languages](#t21t35-in-every-language): 3/115
  - [x] **T21** [/templates/virtual-assistant](https://invoicor.com/templates/virtual-assistant) virtual assistant invoice template
  - [x] **T22** [/templates/pet-sitting](https://invoicor.com/templates/pet-sitting) pet sitting invoice template
  - [x] **T23** [/templates/makeup-artist](https://invoicor.com/templates/makeup-artist) makeup artist invoice template
  - [x] **T24** [/templates/carpentry](https://invoicor.com/templates/carpentry) carpentry invoice template
  - [x] **T25** [/templates/flooring](https://invoicor.com/templates/flooring) flooring invoice template
  - [x] **T26** [/templates/tile-installation](https://invoicor.com/templates/tile-installation) tile installation invoice template
  - [x] **T27** [/templates/drywall](https://invoicor.com/templates/drywall) drywall invoice template
  - [x] **T28** [/templates/masonry](https://invoicor.com/templates/masonry) masonry invoice template
  - [x] **T29** [/templates/fence-installation](https://invoicor.com/templates/fence-installation) fence installation invoice template
  - [x] **T30** [/templates/pool-service](https://invoicor.com/templates/pool-service) pool service invoice template
  - [x] **T31** [/templates/window-cleaning](https://invoicor.com/templates/window-cleaning) window cleaning invoice template
  - [x] **T32** [/templates/pressure-washing](https://invoicor.com/templates/pressure-washing) pressure washing invoice template
  - [x] **T33** [/templates/tree-service](https://invoicor.com/templates/tree-service) tree service invoice template
  - [x] **T34** [/templates/snow-removal](https://invoicor.com/templates/snow-removal) snow removal invoice template
  - [x] **T35** [/templates/locksmith](https://invoicor.com/templates/locksmith) locksmith invoice template

### T36–T50: Trade templates 36–50 (built)

- [x] **T36–T50** · 15/15 live · [languages](#t36t50-in-every-language): 3/118
  - [x] **T36** [/templates/appliance-repair](https://invoicor.com/templates/appliance-repair) appliance repair invoice template
  - [x] **T37** [/templates/junk-removal](https://invoicor.com/templates/junk-removal) junk removal invoice template
  - [x] **T38** [/templates/carpet-cleaning](https://invoicor.com/templates/carpet-cleaning) carpet cleaning invoice template
  - [x] **T39** [/templates/interior-design](https://invoicor.com/templates/interior-design) interior design invoice template
  - [x] **T40** [/templates/remodeling](https://invoicor.com/templates/remodeling) remodeling invoice template
  - [x] **T41** [/templates/garage-door-repair](https://invoicor.com/templates/garage-door-repair) garage door repair invoice template
  - [x] **T42** [/templates/dj](https://invoicor.com/templates/dj) dj invoice template
  - [x] **T43** [/templates/event-planning](https://invoicor.com/templates/event-planning) event planner invoice template
  - [x] **T44** [/templates/florist](https://invoicor.com/templates/florist) florist invoice template
  - [x] **T45** [/templates/massage-therapy](https://invoicor.com/templates/massage-therapy) massage therapy invoice template
  - [x] **T46** [/templates/translation](https://invoicor.com/templates/translation) translation invoice template
  - [x] **T47** [/templates/copywriting](https://invoicor.com/templates/copywriting) copywriter invoice template
  - [x] **T48** [/templates/social-media-management](https://invoicor.com/templates/social-media-management) social media manager invoice template
  - [x] **T49** [/templates/music-lessons](https://invoicor.com/templates/music-lessons) music teacher invoice template
  - [x] **T50** [/templates/bookkeeping](https://invoicor.com/templates/bookkeeping) bookkeeping invoice template

### T51–T60: 10 trades: notary, home inspection, IT services …

- [ ] **T51–T60** · 0/10 live · [languages](#t51t60-in-every-language): 0/90
  - [ ] **T51** [/templates/notary](plan/templates.md#t51--templatesnotary) notary invoice template
  - [ ] **T52** [/templates/home-inspection](plan/templates.md#t52--templateshome-inspection) home inspection invoice template
  - [ ] **T53** [/templates/it-services](plan/templates.md#t53--templatesit-services) it services invoice template
  - [ ] **T54** [/templates/drone-services](plan/templates.md#t54--templatesdrone-services) drone services invoice template
  - [ ] **T55** [/templates/tattoo](plan/templates.md#t55--templatestattoo) tattoo invoice template
  - [ ] **T56** [/templates/personal-chef](plan/templates.md#t56--templatespersonal-chef) personal chef invoice template
  - [ ] **T57** [/templates/bakery](plan/templates.md#t57--templatesbakery) bakery invoice template
  - [ ] **T58** [/templates/dog-training](plan/templates.md#t58--templatesdog-training) dog training invoice template
  - [ ] **T59** [/templates/musician](plan/templates.md#t59--templatesmusician) musician invoice template
  - [ ] **T60** [/templates/voice-over](plan/templates.md#t60--templatesvoice-over) voice over invoice template

### T61–T80: Home and property services

- [ ] **T61–T80** · 0/20 live · [languages](#t61t80-in-every-language): 0/200
  - [ ] **T61** [/templates/chimney-sweep](plan/templates.md#t61--templateschimney-sweep) chimney sweep invoice template
  - [ ] **T62** [/templates/gutter-cleaning](plan/templates.md#t62--templatesgutter-cleaning) gutter cleaning invoice template
  - [ ] **T63** [/templates/septic-service](plan/templates.md#t63--templatesseptic-service) septic pumping invoice template
  - [ ] **T64** [/templates/irrigation](plan/templates.md#t64--templatesirrigation) irrigation invoice template
  - [ ] **T65** [/templates/deck-building](plan/templates.md#t65--templatesdeck-building) deck building invoice template
  - [ ] **T66** [/templates/cabinet-installation](plan/templates.md#t66--templatescabinet-installation) cabinet installation invoice template
  - [ ] **T67** [/templates/countertop-installation](plan/templates.md#t67--templatescountertop-installation) countertop installation invoice template
  - [ ] **T68** [/templates/insulation](plan/templates.md#t68--templatesinsulation) insulation invoice template
  - [ ] **T69** [/templates/siding](plan/templates.md#t69--templatessiding) siding installation invoice template
  - [ ] **T70** [/templates/window-installation](plan/templates.md#t70--templateswindow-installation) window installation invoice template
  - [ ] **T71** [/templates/asphalt-paving](plan/templates.md#t71--templatesasphalt-paving) asphalt paving invoice template
  - [ ] **T72** [/templates/excavation](plan/templates.md#t72--templatesexcavation) excavation invoice template
  - [ ] **T73** [/templates/demolition](plan/templates.md#t73--templatesdemolition) demolition invoice template
  - [ ] **T74** [/templates/solar-installation](plan/templates.md#t74--templatessolar-installation) solar installation invoice template
  - [ ] **T75** [/templates/home-staging](plan/templates.md#t75--templateshome-staging) home staging invoice template
  - [ ] **T76** [/templates/security-system-installation](plan/templates.md#t76--templatessecurity-system-installation) security system installation invoice template
  - [ ] **T77** [/templates/home-theater-installation](plan/templates.md#t77--templateshome-theater-installation) home theater installation invoice template
  - [ ] **T78** [/templates/mold-remediation](plan/templates.md#t78--templatesmold-remediation) mold remediation invoice template
  - [ ] **T79** [/templates/water-damage-restoration](plan/templates.md#t79--templateswater-damage-restoration) water damage restoration invoice template
  - [ ] **T80** [/templates/air-duct-cleaning](plan/templates.md#t80--templatesair-duct-cleaning) air duct cleaning invoice template

### T81–T100: Makers, repair, transport, events

- [ ] **T81–T100** · 0/20 live · [languages](#t81t100-in-every-language): 0/200
  - [ ] **T81** [/templates/welding](plan/templates.md#t81--templateswelding) welding invoice template
  - [ ] **T82** [/templates/sign-making](plan/templates.md#t82--templatessign-making) sign invoice template
  - [ ] **T83** [/templates/screen-printing](plan/templates.md#t83--templatesscreen-printing) screen printing invoice template
  - [ ] **T84** [/templates/embroidery](plan/templates.md#t84--templatesembroidery) embroidery invoice template
  - [ ] **T85** [/templates/alterations](plan/templates.md#t85--templatesalterations) alterations invoice template
  - [ ] **T86** [/templates/jewelry-repair](plan/templates.md#t86--templatesjewelry-repair) jewelry repair invoice template
  - [ ] **T87** [/templates/bike-repair](plan/templates.md#t87--templatesbike-repair) bike repair invoice template
  - [ ] **T88** [/templates/small-engine-repair](plan/templates.md#t88--templatessmall-engine-repair) small engine repair invoice template
  - [ ] **T89** [/templates/boat-repair](plan/templates.md#t89--templatesboat-repair) boat repair invoice template
  - [ ] **T90** [/templates/rv-repair](plan/templates.md#t90--templatesrv-repair) rv repair invoice template
  - [ ] **T91** [/templates/towing](plan/templates.md#t91--templatestowing) towing invoice template
  - [ ] **T92** [/templates/courier](plan/templates.md#t92--templatescourier) courier invoice template
  - [ ] **T93** [/templates/trucking](plan/templates.md#t93--templatestrucking) trucking invoice template
  - [ ] **T94** [/templates/limousine-service](plan/templates.md#t94--templateslimousine-service) limousine service invoice template
  - [ ] **T95** [/templates/photo-booth-rental](plan/templates.md#t95--templatesphoto-booth-rental) photo booth rental invoice template
  - [ ] **T96** [/templates/party-rentals](plan/templates.md#t96--templatesparty-rentals) party rental invoice template
  - [ ] **T97** [/templates/wedding-officiant](plan/templates.md#t97--templateswedding-officiant) wedding officiant invoice template
  - [ ] **T98** [/templates/illustration](plan/templates.md#t98--templatesillustration) illustration invoice template
  - [ ] **T99** [/templates/video-editing](plan/templates.md#t99--templatesvideo-editing) video editing invoice template
  - [ ] **T100** [/templates/podcast-production](plan/templates.md#t100--templatespodcast-production) podcast production invoice template

### T101–T120: Professional, wellness, care

- [ ] **T101–T120** · 0/20 live · [languages](#t101t120-in-every-language): 0/190
  - [ ] **T101** [/templates/seo-services](plan/templates.md#t101--templatesseo-services) seo invoice template
  - [ ] **T102** [/templates/marketing-agency](plan/templates.md#t102--templatesmarketing-agency) marketing agency invoice template
  - [ ] **T103** [/templates/ux-design](plan/templates.md#t103--templatesux-design) ux design invoice template
  - [ ] **T104** [/templates/app-development](plan/templates.md#t104--templatesapp-development) app development invoice template
  - [ ] **T105** [/templates/data-analysis](plan/templates.md#t105--templatesdata-analysis) data analysis invoice template
  - [ ] **T106** [/templates/tax-preparation](plan/templates.md#t106--templatestax-preparation) tax preparation invoice template
  - [ ] **T107** [/templates/attorney](plan/templates.md#t107--templatesattorney) attorney invoice template
  - [ ] **T108** [/templates/property-management](plan/templates.md#t108--templatesproperty-management) property management invoice template
  - [ ] **T109** [/templates/rent](plan/templates.md#t109--templatesrent) rent invoice template
  - [ ] **T110** [/templates/security-guard](plan/templates.md#t110--templatessecurity-guard) security guard invoice template
  - [ ] **T111** [/templates/therapy](plan/templates.md#t111--templatestherapy) therapist invoice template
  - [ ] **T112** [/templates/nutrition](plan/templates.md#t112--templatesnutrition) nutritionist invoice template
  - [ ] **T113** [/templates/yoga](plan/templates.md#t113--templatesyoga) yoga instructor invoice template
  - [ ] **T114** [/templates/dance-lessons](plan/templates.md#t114--templatesdance-lessons) dance teacher invoice template
  - [ ] **T115** [/templates/swim-lessons](plan/templates.md#t115--templatesswim-lessons) swim lessons invoice template
  - [ ] **T116** [/templates/sports-coaching](plan/templates.md#t116--templatessports-coaching) sports coach invoice template
  - [ ] **T117** [/templates/babysitting](plan/templates.md#t117--templatesbabysitting) babysitting invoice template
  - [ ] **T118** [/templates/caregiving](plan/templates.md#t118--templatescaregiving) caregiver invoice template
  - [ ] **T119** [/templates/doula](plan/templates.md#t119--templatesdoula) doula invoice template
  - [ ] **T120** [/templates/barber](plan/templates.md#t120--templatesbarber) barber invoice template

### T121–T140: Beauty, creative, specialist

- [ ] **T121–T140** · 0/20 live · [languages](#t121t140-in-every-language): 0/200
  - [ ] **T121** [/templates/nail-technician](plan/templates.md#t121--templatesnail-technician) nail technician invoice template
  - [ ] **T122** [/templates/esthetician](plan/templates.md#t122--templatesesthetician) esthetician invoice template
  - [ ] **T123** [/templates/lash-extensions](plan/templates.md#t123--templateslash-extensions) lash tech invoice template
  - [ ] **T124** [/templates/art-commission](plan/templates.md#t124--templatesart-commission) art commission invoice template
  - [ ] **T125** [/templates/music-production](plan/templates.md#t125--templatesmusic-production) music producer invoice template
  - [ ] **T126** [/templates/recording-studio](plan/templates.md#t126--templatesrecording-studio) recording studio invoice template
  - [ ] **T127** [/templates/sound-engineering](plan/templates.md#t127--templatessound-engineering) sound engineer invoice template
  - [ ] **T128** [/templates/content-creator](plan/templates.md#t128--templatescontent-creator) content creator invoice template
  - [ ] **T129** [/templates/proofreading](plan/templates.md#t129--templatesproofreading) proofreading invoice template
  - [ ] **T130** [/templates/driving-instructor](plan/templates.md#t130--templatesdriving-instructor) driving instructor invoice template
  - [ ] **T131** [/templates/farm](plan/templates.md#t131--templatesfarm) farm invoice template
  - [ ] **T132** [/templates/print-shop](plan/templates.md#t132--templatesprint-shop) print shop invoice template
  - [ ] **T133** [/templates/3d-printing](plan/templates.md#t133--templates3d-printing) 3d printing invoice template
  - [ ] **T134** [/templates/laser-engraving](plan/templates.md#t134--templateslaser-engraving) laser engraving invoice template
  - [ ] **T135** [/templates/custom-furniture](plan/templates.md#t135--templatescustom-furniture) custom furniture invoice template
  - [ ] **T136** [/templates/glazier](plan/templates.md#t136--templatesglazier) glass repair invoice template
  - [ ] **T137** [/templates/wildlife-removal](plan/templates.md#t137--templateswildlife-removal) wildlife removal invoice template
  - [ ] **T138** [/templates/aquarium-maintenance](plan/templates.md#t138--templatesaquarium-maintenance) aquarium maintenance invoice template
  - [ ] **T139** [/templates/land-surveying](plan/templates.md#t139--templatesland-surveying) land surveying invoice template
  - [ ] **T140** [/templates/professional-organizing](plan/templates.md#t140--templatesprofessional-organizing) professional organizer invoice template

### T141–T156: Trades with demand of their own: auto repair, auto body, architect …

- [ ] **T141–T156** · 0/16 live · [languages](#t141t156-in-every-language): 0/160
  - [ ] **T141** [/templates/auto-repair](plan/templates.md#t141--templatesauto-repair) auto repair invoice template
  - [ ] **T142** [/templates/auto-body](plan/templates.md#t142--templatesauto-body) auto body invoice template
  - [ ] **T143** [/templates/dog-grooming](plan/templates.md#t143--templatesdog-grooming) dog grooming invoice template
  - [ ] **T144** [/templates/hair-salon](plan/templates.md#t144--templateshair-salon) hair salon invoice template
  - [ ] **T145** [/templates/architect](plan/templates.md#t145--templatesarchitect) architect invoice template
  - [ ] **T146** [/templates/real-estate](plan/templates.md#t146--templatesreal-estate) real estate invoice template
  - [ ] **T147** [/templates/equipment-rental](plan/templates.md#t147--templatesequipment-rental) equipment rental invoice template
  - [ ] **T148** [/templates/private-investigator](plan/templates.md#t148--templatesprivate-investigator) private investigator invoice template
  - [ ] **T149** [/templates/phone-repair](plan/templates.md#t149--templatesphone-repair) phone repair invoice template
  - [ ] **T150** [/templates/furniture-assembly](plan/templates.md#t150--templatesfurniture-assembly) furniture assembly invoice template
  - [ ] **T151** [/templates/upholstery](plan/templates.md#t151--templatesupholstery) upholstery invoice template
  - [ ] **T152** [/templates/life-coaching](plan/templates.md#t152--templateslife-coaching) life coach invoice template
  - [ ] **T153** [/templates/bartending](plan/templates.md#t153--templatesbartending) bartending invoice template
  - [ ] **T154** [/templates/plastering](plan/templates.md#t154--templatesplastering) plastering invoice template
  - [ ] **T155** [/templates/concrete](plan/templates.md#t155--templatesconcrete) concrete invoice template
  - [ ] **T156** [/templates/event-venue](plan/templates.md#t156--templatesevent-venue) event venue invoice template

### T157–T174: Home systems and specialist contractors

- [ ] **T157–T174** · 0/18 live · [languages](#t157t174-in-every-language): 0/160
  - [ ] **T157** [/templates/well-drilling](plan/templates.md#t157--templateswell-drilling) well drilling invoice template
  - [ ] **T158** [/templates/drain-cleaning](plan/templates.md#t158--templatesdrain-cleaning) drain cleaning invoice template
  - [ ] **T159** [/templates/gas-engineer](plan/templates.md#t159--templatesgas-engineer) gas engineer invoice template
  - [ ] **T160** [/templates/foundation-repair](plan/templates.md#t160--templatesfoundation-repair) foundation repair invoice template
  - [ ] **T161** [/templates/basement-waterproofing](plan/templates.md#t161--templatesbasement-waterproofing) basement waterproofing invoice template
  - [ ] **T162** [/templates/radon-mitigation](plan/templates.md#t162--templatesradon-mitigation) radon mitigation invoice template
  - [ ] **T163** [/templates/asbestos-removal](plan/templates.md#t163--templatesasbestos-removal) asbestos removal invoice template
  - [ ] **T164** [/templates/wallpaper-installation](plan/templates.md#t164--templateswallpaper-installation) wallpaper installation invoice template
  - [ ] **T165** [/templates/epoxy-flooring](plan/templates.md#t165--templatesepoxy-flooring) epoxy flooring invoice template
  - [ ] **T166** [/templates/window-treatments](plan/templates.md#t166--templateswindow-treatments) window treatment invoice template
  - [ ] **T167** [/templates/christmas-light-installation](plan/templates.md#t167--templateschristmas-light-installation) christmas light installation invoice template
  - [ ] **T168** [/templates/fire-protection](plan/templates.md#t168--templatesfire-protection) fire protection invoice template
  - [ ] **T169** [/templates/low-voltage-cabling](plan/templates.md#t169--templateslow-voltage-cabling) low voltage cabling invoice template
  - [ ] **T170** [/templates/gutter-installation](plan/templates.md#t170--templatesgutter-installation) gutter installation invoice template
  - [ ] **T171** [/templates/fireplace-installation](plan/templates.md#t171--templatesfireplace-installation) fireplace installation invoice template
  - [ ] **T172** [/templates/home-energy-audit](plan/templates.md#t172--templateshome-energy-audit) home energy audit invoice template
  - [ ] **T173** [/templates/sealcoating](plan/templates.md#t173--templatessealcoating) sealcoating invoice template
  - [ ] **T174** [/templates/parking-lot-striping](plan/templates.md#t174--templatesparking-lot-striping) parking lot striping invoice template

### T175–T192: Property, waste and household services

- [ ] **T175–T192** · 0/18 live · [languages](#t175t192-in-every-language): 0/140
  - [ ] **T175** [/templates/janitorial](plan/templates.md#t175--templatesjanitorial) janitorial invoice template
  - [ ] **T176** [/templates/hood-cleaning](plan/templates.md#t176--templateshood-cleaning) hood cleaning invoice template
  - [ ] **T177** [/templates/biohazard-cleanup](plan/templates.md#t177--templatesbiohazard-cleanup) biohazard cleanup invoice template
  - [ ] **T178** [/templates/laundry-service](plan/templates.md#t178--templateslaundry-service) laundry service invoice template
  - [ ] **T179** [/templates/dumpster-rental](plan/templates.md#t179--templatesdumpster-rental) dumpster rental invoice template
  - [ ] **T180** [/templates/portable-toilet-rental](plan/templates.md#t180--templatesportable-toilet-rental) portable toilet rental invoice template
  - [ ] **T181** [/templates/home-watch](plan/templates.md#t181--templateshome-watch) home watch invoice template
  - [ ] **T182** [/templates/estate-sale](plan/templates.md#t182--templatesestate-sale) estate sale invoice template
  - [ ] **T183** [/templates/self-storage](plan/templates.md#t183--templatesself-storage) self storage invoice template
  - [ ] **T184** [/templates/vacation-rental](plan/templates.md#t184--templatesvacation-rental) vacation rental invoice template
  - [ ] **T185** [/templates/graffiti-removal](plan/templates.md#t185--templatesgraffiti-removal) graffiti removal invoice template
  - [ ] **T186** [/templates/property-preservation](plan/templates.md#t186--templatesproperty-preservation) property preservation invoice template
  - [ ] **T187** [/templates/auctioneer](plan/templates.md#t187--templatesauctioneer) auctioneer invoice template
  - [ ] **T188** [/templates/appraisal](plan/templates.md#t188--templatesappraisal) appraisal invoice template
  - [ ] **T189** [/templates/concierge](plan/templates.md#t189--templatesconcierge) concierge invoice template
  - [ ] **T190** [/templates/personal-shopper](plan/templates.md#t190--templatespersonal-shopper) personal shopper invoice template
  - [ ] **T191** [/templates/house-sitting](plan/templates.md#t191--templateshouse-sitting) house sitting invoice template
  - [ ] **T192** [/templates/senior-move-management](plan/templates.md#t192--templatessenior-move-management) senior move management invoice template

### T193–T207: Auto, transport and heavy equipment

- [ ] **T193–T207** · 0/15 live · [languages](#t193t207-in-every-language): 0/140
  - [ ] **T193** [/templates/window-tinting](plan/templates.md#t193--templateswindow-tinting) window tinting invoice template
  - [ ] **T194** [/templates/auto-glass](plan/templates.md#t194--templatesauto-glass) auto glass invoice template
  - [ ] **T195** [/templates/paintless-dent-repair](plan/templates.md#t195--templatespaintless-dent-repair) paintless dent repair invoice template
  - [ ] **T196** [/templates/tire-service](plan/templates.md#t196--templatestire-service) tire shop invoice template
  - [ ] **T197** [/templates/car-hauling](plan/templates.md#t197--templatescar-hauling) car hauling invoice template
  - [ ] **T198** [/templates/motorcycle-repair](plan/templates.md#t198--templatesmotorcycle-repair) motorcycle repair invoice template
  - [ ] **T199** [/templates/heavy-equipment-repair](plan/templates.md#t199--templatesheavy-equipment-repair) heavy equipment repair invoice template
  - [ ] **T200** [/templates/freight-broker](plan/templates.md#t200--templatesfreight-broker) freight broker invoice template
  - [ ] **T201** [/templates/truck-dispatch](plan/templates.md#t201--templatestruck-dispatch) truck dispatch invoice template
  - [ ] **T202** [/templates/flight-instruction](plan/templates.md#t202--templatesflight-instruction) flight instruction invoice template
  - [ ] **T203** [/templates/valet-parking](plan/templates.md#t203--templatesvalet-parking) valet parking invoice template
  - [ ] **T204** [/templates/bus-charter](plan/templates.md#t204--templatesbus-charter) bus charter invoice template
  - [ ] **T205** [/templates/car-audio-installation](plan/templates.md#t205--templatescar-audio-installation) car audio installation invoice template
  - [ ] **T206** [/templates/aircraft-maintenance](plan/templates.md#t206--templatesaircraft-maintenance) aircraft maintenance invoice template
  - [ ] **T207** [/templates/crane-services](plan/templates.md#t207--templatescrane-services) crane service invoice template

### T208–T222: Workshops, repair and industrial trades

- [ ] **T208–T222** · 0/15 live · [languages](#t208t222-in-every-language): 0/140
  - [ ] **T208** [/templates/machining](plan/templates.md#t208--templatesmachining) machining invoice template
  - [ ] **T209** [/templates/sandblasting](plan/templates.md#t209--templatessandblasting) sandblasting invoice template
  - [ ] **T210** [/templates/powder-coating](plan/templates.md#t210--templatespowder-coating) powder coating invoice template
  - [ ] **T211** [/templates/scaffolding](plan/templates.md#t211--templatesscaffolding) scaffolding invoice template
  - [ ] **T212** [/templates/millwright](plan/templates.md#t212--templatesmillwright) millwright invoice template
  - [ ] **T213** [/templates/concrete-cutting](plan/templates.md#t213--templatesconcrete-cutting) concrete cutting invoice template
  - [ ] **T214** [/templates/environmental-consulting](plan/templates.md#t214--templatesenvironmental-consulting) environmental consulting invoice template
  - [ ] **T215** [/templates/commercial-refrigeration](plan/templates.md#t215--templatescommercial-refrigeration) commercial refrigeration invoice template
  - [ ] **T216** [/templates/restaurant-equipment-repair](plan/templates.md#t216--templatesrestaurant-equipment-repair) restaurant equipment repair invoice template
  - [ ] **T217** [/templates/shoe-repair](plan/templates.md#t217--templatesshoe-repair) shoe repair invoice template
  - [ ] **T218** [/templates/piano-tuning](plan/templates.md#t218--templatespiano-tuning) piano tuning invoice template
  - [ ] **T219** [/templates/instrument-repair](plan/templates.md#t219--templatesinstrument-repair) instrument repair invoice template
  - [ ] **T220** [/templates/furniture-refinishing](plan/templates.md#t220--templatesfurniture-refinishing) furniture refinishing invoice template
  - [ ] **T221** [/templates/gunsmith](plan/templates.md#t221--templatesgunsmith) gunsmith invoice template
  - [ ] **T222** [/templates/knife-sharpening](plan/templates.md#t222--templatesknife-sharpening) knife sharpening invoice template

### T223–T237: Events, food, travel and entertainment

- [ ] **T223–T237** · 0/15 live · [languages](#t223t237-in-every-language): 0/150
  - [ ] **T223** [/templates/balloon-decor](plan/templates.md#t223--templatesballoon-decor) balloon decor invoice template
  - [ ] **T224** [/templates/face-painting](plan/templates.md#t224--templatesface-painting) face painting invoice template
  - [ ] **T225** [/templates/entertainer](plan/templates.md#t225--templatesentertainer) entertainer invoice template
  - [ ] **T226** [/templates/audio-visual](plan/templates.md#t226--templatesaudio-visual) audio visual invoice template
  - [ ] **T227** [/templates/calligraphy](plan/templates.md#t227--templatescalligraphy) calligraphy invoice template
  - [ ] **T228** [/templates/wedding-invitations](plan/templates.md#t228--templateswedding-invitations) wedding invitation invoice template
  - [ ] **T229** [/templates/henna](plan/templates.md#t229--templateshenna) henna invoice template
  - [ ] **T230** [/templates/event-decor](plan/templates.md#t230--templatesevent-decor) event decor invoice template
  - [ ] **T231** [/templates/food-truck](plan/templates.md#t231--templatesfood-truck) food truck invoice template
  - [ ] **T232** [/templates/cooking-classes](plan/templates.md#t232--templatescooking-classes) cooking class invoice template
  - [ ] **T233** [/templates/meal-prep](plan/templates.md#t233--templatesmeal-prep) meal prep invoice template
  - [ ] **T234** [/templates/meat-processing](plan/templates.md#t234--templatesmeat-processing) meat processing invoice template
  - [ ] **T235** [/templates/referee](plan/templates.md#t235--templatesreferee) referee invoice template
  - [ ] **T236** [/templates/tour-guide](plan/templates.md#t236--templatestour-guide) tour guide invoice template
  - [ ] **T237** [/templates/travel-agent](plan/templates.md#t237--templatestravel-agent) travel agent invoice template

### T238–T252: Professional services II

- [ ] **T238–T252** · 0/15 live · [languages](#t238t252-in-every-language): 0/120
  - [ ] **T238** [/templates/accounting](plan/templates.md#t238--templatesaccounting) accounting invoice template
  - [ ] **T239** [/templates/financial-advisor](plan/templates.md#t239--templatesfinancial-advisor) financial advisor invoice template
  - [ ] **T240** [/templates/recruitment](plan/templates.md#t240--templatesrecruitment) recruitment invoice template
  - [ ] **T241** [/templates/staffing-agency](plan/templates.md#t241--templatesstaffing-agency) staffing agency invoice template
  - [ ] **T242** [/templates/grant-writing](plan/templates.md#t242--templatesgrant-writing) grant writing invoice template
  - [ ] **T243** [/templates/resume-writing](plan/templates.md#t243--templatesresume-writing) resume writing invoice template
  - [ ] **T244** [/templates/technical-writing](plan/templates.md#t244--templatestechnical-writing) technical writing invoice template
  - [ ] **T245** [/templates/transcription](plan/templates.md#t245--templatestranscription) transcription invoice template
  - [ ] **T246** [/templates/court-reporter](plan/templates.md#t246--templatescourt-reporter) court reporter invoice template
  - [ ] **T247** [/templates/interpreter](plan/templates.md#t247--templatesinterpreter) interpreter invoice template
  - [ ] **T248** [/templates/paralegal](plan/templates.md#t248--templatesparalegal) paralegal invoice template
  - [ ] **T249** [/templates/mediation](plan/templates.md#t249--templatesmediation) mediation invoice template
  - [ ] **T250** [/templates/expert-witness](plan/templates.md#t250--templatesexpert-witness) expert witness invoice template
  - [ ] **T251** [/templates/process-server](plan/templates.md#t251--templatesprocess-server) process server invoice template
  - [ ] **T252** [/templates/engineering](plan/templates.md#t252--templatesengineering) engineering invoice template

### T253–T262: Digital and tech services

- [ ] **T253–T262** · 0/10 live · [languages](#t253t262-in-every-language): 0/100
  - [ ] **T253** [/templates/cybersecurity](plan/templates.md#t253--templatescybersecurity) cybersecurity invoice template
  - [ ] **T254** [/templates/data-entry](plan/templates.md#t254--templatesdata-entry) data entry invoice template
  - [ ] **T255** [/templates/ppc-management](plan/templates.md#t255--templatesppc-management) ppc management invoice template
  - [ ] **T256** [/templates/web-hosting](plan/templates.md#t256--templatesweb-hosting) web hosting invoice template
  - [ ] **T257** [/templates/game-development](plan/templates.md#t257--templatesgame-development) game development invoice template
  - [ ] **T258** [/templates/animation](plan/templates.md#t258--templatesanimation) animation invoice template
  - [ ] **T259** [/templates/3d-rendering](plan/templates.md#t259--templates3d-rendering) 3d rendering invoice template
  - [ ] **T260** [/templates/photo-retouching](plan/templates.md#t260--templatesphoto-retouching) photo retouching invoice template
  - [ ] **T261** [/templates/livestream-production](plan/templates.md#t261--templateslivestream-production) livestream production invoice template
  - [ ] **T262** [/templates/virtual-tours](plan/templates.md#t262--templatesvirtual-tours) virtual tour invoice template

### T263–T274: Creative, fashion and crafts

- [ ] **T263–T274** · 0/12 live · [languages](#t263t274-in-every-language): 0/120
  - [ ] **T263** [/templates/film-production](plan/templates.md#t263--templatesfilm-production) film production invoice template
  - [ ] **T264** [/templates/actor](plan/templates.md#t264--templatesactor) actor invoice template
  - [ ] **T265** [/templates/model](plan/templates.md#t265--templatesmodel) model invoice template
  - [ ] **T266** [/templates/fashion-design](plan/templates.md#t266--templatesfashion-design) fashion design invoice template
  - [ ] **T267** [/templates/stylist](plan/templates.md#t267--templatesstylist) stylist invoice template
  - [ ] **T268** [/templates/muralist](plan/templates.md#t268--templatesmuralist) muralist invoice template
  - [ ] **T269** [/templates/pottery](plan/templates.md#t269--templatespottery) pottery invoice template
  - [ ] **T270** [/templates/jewelry-making](plan/templates.md#t270--templatesjewelry-making) jewelry making invoice template
  - [ ] **T271** [/templates/picture-framing](plan/templates.md#t271--templatespicture-framing) picture framing invoice template
  - [ ] **T272** [/templates/crafts](plan/templates.md#t272--templatescrafts) craft invoice template
  - [ ] **T273** [/templates/studio-rental](plan/templates.md#t273--templatesstudio-rental) studio rental invoice template
  - [ ] **T274** [/templates/stained-glass](plan/templates.md#t274--templatesstained-glass) stained glass invoice template

### T275–T289: Health and wellness II

- [ ] **T275–T289** · 0/15 live · [languages](#t275t289-in-every-language): 0/150
  - [ ] **T275** [/templates/acupuncture](plan/templates.md#t275--templatesacupuncture) acupuncture invoice template
  - [ ] **T276** [/templates/chiropractic](plan/templates.md#t276--templateschiropractic) chiropractic invoice template
  - [ ] **T277** [/templates/physiotherapy](plan/templates.md#t277--templatesphysiotherapy) physical therapy invoice template
  - [ ] **T278** [/templates/speech-therapy](plan/templates.md#t278--templatesspeech-therapy) speech therapy invoice template
  - [ ] **T279** [/templates/occupational-therapy](plan/templates.md#t279--templatesoccupational-therapy) occupational therapy invoice template
  - [ ] **T280** [/templates/reiki](plan/templates.md#t280--templatesreiki) reiki invoice template
  - [ ] **T281** [/templates/spray-tanning](plan/templates.md#t281--templatesspray-tanning) spray tan invoice template
  - [ ] **T282** [/templates/microblading](plan/templates.md#t282--templatesmicroblading) microblading invoice template
  - [ ] **T283** [/templates/hair-braiding](plan/templates.md#t283--templateshair-braiding) hair braiding invoice template
  - [ ] **T284** [/templates/locum](plan/templates.md#t284--templateslocum) locum invoice template
  - [ ] **T285** [/templates/nursing](plan/templates.md#t285--templatesnursing) nursing invoice template
  - [ ] **T286** [/templates/midwife](plan/templates.md#t286--templatesmidwife) midwife invoice template
  - [ ] **T287** [/templates/lactation-consultant](plan/templates.md#t287--templateslactation-consultant) lactation consultant invoice template
  - [ ] **T288** [/templates/sleep-consultant](plan/templates.md#t288--templatessleep-consultant) sleep consultant invoice template
  - [ ] **T289** [/templates/hypnotherapy](plan/templates.md#t289--templateshypnotherapy) hypnotherapy invoice template

### T290–T301: Education and childcare

- [ ] **T290–T301** · 0/12 live · [languages](#t290t301-in-every-language): 0/110
  - [ ] **T290** [/templates/daycare](plan/templates.md#t290--templatesdaycare) daycare invoice template
  - [ ] **T291** [/templates/after-school-program](plan/templates.md#t291--templatesafter-school-program) after school program invoice template
  - [ ] **T292** [/templates/summer-camp](plan/templates.md#t292--templatessummer-camp) summer camp invoice template
  - [ ] **T293** [/templates/language-lessons](plan/templates.md#t293--templateslanguage-lessons) language lessons invoice template
  - [ ] **T294** [/templates/art-lessons](plan/templates.md#t294--templatesart-lessons) art lessons invoice template
  - [ ] **T295** [/templates/corporate-training](plan/templates.md#t295--templatescorporate-training) corporate training invoice template
  - [ ] **T296** [/templates/public-speaking](plan/templates.md#t296--templatespublic-speaking) speaker invoice template
  - [ ] **T297** [/templates/horse-riding-lessons](plan/templates.md#t297--templateshorse-riding-lessons) riding lessons invoice template
  - [ ] **T298** [/templates/martial-arts](plan/templates.md#t298--templatesmartial-arts) martial arts invoice template
  - [ ] **T299** [/templates/college-admissions-consulting](plan/templates.md#t299--templatescollege-admissions-consulting) college admissions consulting invoice template
  - [ ] **T300** [/templates/cpr-training](plan/templates.md#t300--templatescpr-training) cpr training invoice template
  - [ ] **T301** [/templates/music-therapy](plan/templates.md#t301--templatesmusic-therapy) music therapy invoice template

### T302–T313: Animals, farms and outdoors

- [ ] **T302–T313** · 0/12 live · [languages](#t302t313-in-every-language): 0/120
  - [ ] **T302** [/templates/pet-boarding](plan/templates.md#t302--templatespet-boarding) pet boarding invoice template
  - [ ] **T303** [/templates/horse-boarding](plan/templates.md#t303--templateshorse-boarding) horse boarding invoice template
  - [ ] **T304** [/templates/farrier](plan/templates.md#t304--templatesfarrier) farrier invoice template
  - [ ] **T305** [/templates/pet-waste-removal](plan/templates.md#t305--templatespet-waste-removal) pet waste removal invoice template
  - [ ] **T306** [/templates/hunting-guide](plan/templates.md#t306--templateshunting-guide) hunting guide invoice template
  - [ ] **T307** [/templates/fishing-charter](plan/templates.md#t307--templatesfishing-charter) fishing charter invoice template
  - [ ] **T308** [/templates/custom-harvesting](plan/templates.md#t308--templatescustom-harvesting) custom harvesting invoice template
  - [ ] **T309** [/templates/land-clearing](plan/templates.md#t309--templatesland-clearing) land clearing invoice template
  - [ ] **T310** [/templates/logging](plan/templates.md#t310--templateslogging) logging invoice template
  - [ ] **T311** [/templates/firewood](plan/templates.md#t311--templatesfirewood) firewood invoice template
  - [ ] **T312** [/templates/pond-maintenance](plan/templates.md#t312--templatespond-maintenance) pond maintenance invoice template
  - [ ] **T313** [/templates/taxidermy](plan/templates.md#t313--templatestaxidermy) taxidermy invoice template

## Billing-type templates (B)

Rules: [RULES.md § B · Billing-type templates](RULES.md#b--billing-type-templates) · every brief: [plan/billing.md](plan/billing.md)

### B1–B20: Billing types I

- [ ] **B1–B20** · 0/20 live · build with or after D1–D20 (the parents) · [languages](#b1b20-in-every-language): 0/200
  - [ ] **B1** [/templates/photography-deposit-invoice](plan/billing.md#b1--templatesphotography-deposit-invoice) photography deposit invoice
  - [ ] **B2** [/templates/catering-deposit-invoice](plan/billing.md#b2--templatescatering-deposit-invoice) catering deposit invoice
  - [ ] **B3** [/templates/contractor-deposit-invoice](plan/billing.md#b3--templatescontractor-deposit-invoice) contractor deposit invoice
  - [ ] **B4** [/templates/roofing-deposit-invoice](plan/billing.md#b4--templatesroofing-deposit-invoice) roofing deposit invoice
  - [ ] **B5** [/templates/painting-deposit-invoice](plan/billing.md#b5--templatespainting-deposit-invoice) painting deposit invoice
  - [ ] **B6** [/templates/dj-deposit-invoice](plan/billing.md#b6--templatesdj-deposit-invoice) dj deposit invoice
  - [ ] **B7** [/templates/construction-progress-invoice](plan/billing.md#b7--templatesconstruction-progress-invoice) construction progress invoice
  - [ ] **B8** [/templates/web-development-milestone-invoice](plan/billing.md#b8--templatesweb-development-milestone-invoice) web development milestone invoice
  - [ ] **B9** [/templates/video-production-milestone-invoice](plan/billing.md#b9--templatesvideo-production-milestone-invoice) video production milestone invoice
  - [ ] **B10** [/templates/consulting-hourly-invoice](plan/billing.md#b10--templatesconsulting-hourly-invoice) consulting hourly invoice
  - [ ] **B11** [/templates/virtual-assistant-hourly-invoice](plan/billing.md#b11--templatesvirtual-assistant-hourly-invoice) virtual assistant hourly invoice
  - [ ] **B12** [/templates/handyman-hourly-invoice](plan/billing.md#b12--templateshandyman-hourly-invoice) handyman hourly invoice
  - [ ] **B13** [/templates/bookkeeping-hourly-invoice](plan/billing.md#b13--templatesbookkeeping-hourly-invoice) bookkeeping hourly invoice
  - [ ] **B14** [/templates/plumbing-labor-and-materials-invoice](plan/billing.md#b14--templatesplumbing-labor-and-materials-invoice) plumbing labor and materials invoice
  - [ ] **B15** [/templates/electrical-labor-and-materials-invoice](plan/billing.md#b15--templateselectrical-labor-and-materials-invoice) electrical labor and materials invoice
  - [ ] **B16** [/templates/hvac-labor-and-materials-invoice](plan/billing.md#b16--templateshvac-labor-and-materials-invoice) hvac labor and materials invoice
  - [ ] **B17** [/templates/landscaping-labor-and-materials-invoice](plan/billing.md#b17--templateslandscaping-labor-and-materials-invoice) landscaping labor and materials invoice
  - [ ] **B18** [/templates/consulting-retainer-invoice](plan/billing.md#b18--templatesconsulting-retainer-invoice) consulting retainer invoice
  - [ ] **B19** [/templates/social-media-retainer-invoice](plan/billing.md#b19--templatessocial-media-retainer-invoice) social media retainer invoice
  - [ ] **B20** [/templates/web-development-retainer-invoice](plan/billing.md#b20--templatesweb-development-retainer-invoice) website maintenance retainer invoice

### B21–B40: Billing types II

- [ ] **B21–B40** · 0/20 live · [languages](#b21b40-in-every-language): 0/200
  - [ ] **B21** [/templates/tattoo-deposit-invoice](plan/billing.md#b21--templatestattoo-deposit-invoice) tattoo deposit invoice
  - [ ] **B22** [/templates/cake-deposit-invoice](plan/billing.md#b22--templatescake-deposit-invoice) cake deposit invoice
  - [ ] **B23** [/templates/band-deposit-invoice](plan/billing.md#b23--templatesband-deposit-invoice) band deposit invoice
  - [ ] **B24** [/templates/event-planner-deposit-invoice](plan/billing.md#b24--templatesevent-planner-deposit-invoice) event planner deposit invoice
  - [ ] **B25** [/templates/florist-deposit-invoice](plan/billing.md#b25--templatesflorist-deposit-invoice) wedding florist deposit invoice
  - [ ] **B26** [/templates/makeup-artist-deposit-invoice](plan/billing.md#b26--templatesmakeup-artist-deposit-invoice) makeup artist deposit invoice
  - [ ] **B27** [/templates/interior-design-retainer-invoice](plan/billing.md#b27--templatesinterior-design-retainer-invoice) interior design retainer invoice
  - [ ] **B28** [/templates/app-development-milestone-invoice](plan/billing.md#b28--templatesapp-development-milestone-invoice) app development milestone invoice
  - [ ] **B29** [/templates/remodeling-progress-invoice](plan/billing.md#b29--templatesremodeling-progress-invoice) remodeling progress invoice
  - [ ] **B30** [/templates/change-order-invoice](plan/billing.md#b30--templateschange-order-invoice) construction change order invoice
  - [ ] **B31** [/templates/managed-it-services-invoice](plan/billing.md#b31--templatesmanaged-it-services-invoice) managed it services invoice
  - [ ] **B32** [/templates/tutoring-package-invoice](plan/billing.md#b32--templatestutoring-package-invoice) tutoring package invoice
  - [ ] **B33** [/templates/house-cleaning-hourly-invoice](plan/billing.md#b33--templateshouse-cleaning-hourly-invoice) house cleaning hourly invoice
  - [ ] **B34** [/templates/translation-per-word-invoice](plan/billing.md#b34--templatestranslation-per-word-invoice) translation per word invoice
  - [ ] **B35** [/templates/copywriting-per-word-invoice](plan/billing.md#b35--templatescopywriting-per-word-invoice) copywriting per word invoice
  - [ ] **B36** [/templates/roofing-labor-and-materials-invoice](plan/billing.md#b36--templatesroofing-labor-and-materials-invoice) roofing labor and materials invoice
  - [ ] **B37** [/templates/flooring-labor-and-materials-invoice](plan/billing.md#b37--templatesflooring-labor-and-materials-invoice) flooring labor and materials invoice
  - [ ] **B38** [/templates/carpentry-labor-and-materials-invoice](plan/billing.md#b38--templatescarpentry-labor-and-materials-invoice) carpentry labor and materials invoice
  - [ ] **B39** [/templates/painting-labor-and-materials-invoice](plan/billing.md#b39--templatespainting-labor-and-materials-invoice) painting labor and materials invoice
  - [ ] **B40** [/templates/monthly-pool-service-invoice](plan/billing.md#b40--templatesmonthly-pool-service-invoice) monthly pool service invoice

### B41–B60: Billing types III

- [ ] **B41–B60** · 0/19 live · 1 parked · [languages](#b41b60-in-every-language): 0/190
  - [ ] **B41** [/templates/monthly-lawn-care-invoice](plan/billing.md#b41--templatesmonthly-lawn-care-invoice) monthly lawn care invoice
  - [ ] **B42** [/templates/commercial-cleaning-monthly-invoice](plan/billing.md#b42--templatescommercial-cleaning-monthly-invoice) monthly cleaning invoice
  - [ ] **B43** [/templates/seasonal-snow-removal-invoice](plan/billing.md#b43--templatesseasonal-snow-removal-invoice) seasonal snow removal invoice
  - [ ] **B44** [/templates/quarterly-pest-control-invoice](plan/billing.md#b44--templatesquarterly-pest-control-invoice) quarterly pest control invoice
  - [ ] **B45** [/templates/personal-training-package-invoice](plan/billing.md#b45--templatespersonal-training-package-invoice) personal training package invoice
  - [ ] **B46** [/templates/dog-training-package-invoice](plan/billing.md#b46--templatesdog-training-package-invoice) dog training package invoice
  - [ ] **B47** [/templates/monthly-music-lesson-invoice](plan/billing.md#b47--templatesmonthly-music-lesson-invoice) monthly music lesson invoice
  - [ ] **B48** [/templates/photography-final-invoice](plan/billing.md#b48--templatesphotography-final-invoice) photography final invoice
  - [ ] **B49** [/templates/videography-deposit-invoice](plan/billing.md#b49--templatesvideography-deposit-invoice) videography deposit invoice
  - [ ] **B50** [/templates/catering-final-invoice](plan/billing.md#b50--templatescatering-final-invoice) catering final invoice
  - [ ] **B51** [/templates/emergency-plumbing-invoice](plan/billing.md#b51--templatesemergency-plumbing-invoice) emergency plumbing invoice
  - [ ] **B52** [/templates/hvac-maintenance-plan-invoice](plan/billing.md#b52--templateshvac-maintenance-plan-invoice) hvac maintenance plan invoice
  - [ ] **B53** [/templates/electrician-service-call-invoice](plan/billing.md#b53--templateselectrician-service-call-invoice) electrician service call invoice
  - [ ] **B54** [/templates/appliance-repair-service-call-invoice](plan/billing.md#b54--templatesappliance-repair-service-call-invoice) appliance repair service call invoice
  - [ ] **B55** [/templates/emergency-locksmith-invoice](plan/billing.md#b55--templatesemergency-locksmith-invoice) emergency locksmith invoice
  - [ ] **B56** [/templates/moving-hourly-invoice](plan/billing.md#b56--templatesmoving-hourly-invoice) moving hourly invoice
  - [ ] **B58** [/templates/graphic-design-deposit-invoice](plan/billing.md#b58--templatesgraphic-design-deposit-invoice) graphic design deposit invoice
  - [ ] **B59** [/templates/virtual-assistant-retainer-invoice](plan/billing.md#b59--templatesvirtual-assistant-retainer-invoice) virtual assistant retainer invoice
  - [ ] **B60** [/templates/handyman-labor-and-materials-invoice](plan/billing.md#b60--templateshandyman-labor-and-materials-invoice) handyman labor and materials invoice
  - ~~**B57** /templates/consulting-project-invoice~~ parked: a 3rd billing type for consulting (the rule is at most 2); a fixed-fee project is the consulting template's default case: cover it there

### B61–B71: Deposits: events and weddings

- [ ] **B61–B71** · 0/11 live · [languages](#b61b71-in-every-language): 0/110
  - [ ] **B61** [/templates/photo-booth-deposit-invoice](plan/billing.md#b61--templatesphoto-booth-deposit-invoice) photo booth deposit invoice
  - [ ] **B62** [/templates/party-rental-deposit-invoice](plan/billing.md#b62--templatesparty-rental-deposit-invoice) party rental deposit invoice
  - [ ] **B63** [/templates/wedding-officiant-deposit-invoice](plan/billing.md#b63--templateswedding-officiant-deposit-invoice) wedding officiant deposit invoice
  - [ ] **B64** [/templates/venue-deposit-invoice](plan/billing.md#b64--templatesvenue-deposit-invoice) venue deposit invoice
  - [ ] **B65** [/templates/balloon-decor-deposit-invoice](plan/billing.md#b65--templatesballoon-decor-deposit-invoice) balloon decor deposit invoice
  - [ ] **B66** [/templates/bartending-deposit-invoice](plan/billing.md#b66--templatesbartending-deposit-invoice) bartending deposit invoice
  - [ ] **B67** [/templates/limo-deposit-invoice](plan/billing.md#b67--templateslimo-deposit-invoice) limo deposit invoice
  - [ ] **B68** [/templates/entertainer-deposit-invoice](plan/billing.md#b68--templatesentertainer-deposit-invoice) entertainer deposit invoice
  - [ ] **B69** [/templates/food-truck-deposit-invoice](plan/billing.md#b69--templatesfood-truck-deposit-invoice) food truck deposit invoice
  - [ ] **B70** [/templates/event-decor-deposit-invoice](plan/billing.md#b70--templatesevent-decor-deposit-invoice) event decor deposit invoice
  - [ ] **B71** [/templates/wedding-invitation-deposit-invoice](plan/billing.md#b71--templateswedding-invitation-deposit-invoice) wedding invitation deposit invoice

### B72–B84: Deposits: custom and made-to-order work

- [ ] **B72–B84** · 0/13 live · [languages](#b72b84-in-every-language): 0/130
  - [ ] **B72** [/templates/custom-furniture-deposit-invoice](plan/billing.md#b72--templatescustom-furniture-deposit-invoice) custom furniture deposit invoice
  - [ ] **B73** [/templates/cabinet-deposit-invoice](plan/billing.md#b73--templatescabinet-deposit-invoice) cabinet deposit invoice
  - [ ] **B74** [/templates/countertop-deposit-invoice](plan/billing.md#b74--templatescountertop-deposit-invoice) countertop deposit invoice
  - [ ] **B75** [/templates/upholstery-deposit-invoice](plan/billing.md#b75--templatesupholstery-deposit-invoice) upholstery deposit invoice
  - [ ] **B76** [/templates/custom-jewelry-deposit-invoice](plan/billing.md#b76--templatescustom-jewelry-deposit-invoice) custom jewelry deposit invoice
  - [ ] **B77** [/templates/fashion-design-deposit-invoice](plan/billing.md#b77--templatesfashion-design-deposit-invoice) fashion design deposit invoice
  - [ ] **B78** [/templates/art-commission-deposit-invoice](plan/billing.md#b78--templatesart-commission-deposit-invoice) art commission deposit invoice
  - [ ] **B79** [/templates/mural-deposit-invoice](plan/billing.md#b79--templatesmural-deposit-invoice) mural deposit invoice
  - [ ] **B80** [/templates/taxidermy-deposit-invoice](plan/billing.md#b80--templatestaxidermy-deposit-invoice) taxidermy deposit invoice
  - [ ] **B81** [/templates/sign-deposit-invoice](plan/billing.md#b81--templatessign-deposit-invoice) sign deposit invoice
  - [ ] **B82** [/templates/window-treatment-deposit-invoice](plan/billing.md#b82--templateswindow-treatment-deposit-invoice) blinds deposit invoice
  - [ ] **B83** [/templates/screen-printing-deposit-invoice](plan/billing.md#b83--templatesscreen-printing-deposit-invoice) screen printing deposit invoice
  - [ ] **B84** [/templates/embroidery-deposit-invoice](plan/billing.md#b84--templatesembroidery-deposit-invoice) embroidery deposit invoice

### B85–B97: Deposits: contractors and home projects

- [ ] **B85–B97** · 0/13 live · [languages](#b85b97-in-every-language): 0/130
  - [ ] **B85** [/templates/fence-deposit-invoice](plan/billing.md#b85--templatesfence-deposit-invoice) fence deposit invoice
  - [ ] **B86** [/templates/deck-deposit-invoice](plan/billing.md#b86--templatesdeck-deposit-invoice) deck deposit invoice
  - [ ] **B87** [/templates/solar-deposit-invoice](plan/billing.md#b87--templatessolar-deposit-invoice) solar deposit invoice
  - [ ] **B88** [/templates/siding-deposit-invoice](plan/billing.md#b88--templatessiding-deposit-invoice) siding deposit invoice
  - [ ] **B89** [/templates/window-deposit-invoice](plan/billing.md#b89--templateswindow-deposit-invoice) window installation deposit invoice
  - [ ] **B90** [/templates/remodeling-deposit-invoice](plan/billing.md#b90--templatesremodeling-deposit-invoice) remodeling deposit invoice
  - [ ] **B91** [/templates/flooring-deposit-invoice](plan/billing.md#b91--templatesflooring-deposit-invoice) flooring deposit invoice
  - [ ] **B92** [/templates/tile-deposit-invoice](plan/billing.md#b92--templatestile-deposit-invoice) tile deposit invoice
  - [ ] **B93** [/templates/foundation-repair-deposit-invoice](plan/billing.md#b93--templatesfoundation-repair-deposit-invoice) foundation repair deposit invoice
  - [ ] **B94** [/templates/well-drilling-deposit-invoice](plan/billing.md#b94--templateswell-drilling-deposit-invoice) well drilling deposit invoice
  - [ ] **B95** [/templates/masonry-deposit-invoice](plan/billing.md#b95--templatesmasonry-deposit-invoice) masonry deposit invoice
  - [ ] **B96** [/templates/concrete-deposit-invoice](plan/billing.md#b96--templatesconcrete-deposit-invoice) concrete deposit invoice
  - [ ] **B97** [/templates/paving-deposit-invoice](plan/billing.md#b97--templatespaving-deposit-invoice) paving deposit invoice

### B98–B106: Progress invoices: construction trades

- [ ] **B98–B106** · 0/9 live · [languages](#b98b106-in-every-language): 0/90
  - [ ] **B98** [/templates/excavation-progress-invoice](plan/billing.md#b98--templatesexcavation-progress-invoice) excavation progress invoice
  - [ ] **B99** [/templates/solar-installation-progress-invoice](plan/billing.md#b99--templatessolar-installation-progress-invoice) solar progress invoice
  - [ ] **B100** [/templates/drywall-progress-invoice](plan/billing.md#b100--templatesdrywall-progress-invoice) drywall progress invoice
  - [ ] **B101** [/templates/insulation-progress-invoice](plan/billing.md#b101--templatesinsulation-progress-invoice) insulation progress invoice
  - [ ] **B102** [/templates/carpentry-progress-invoice](plan/billing.md#b102--templatescarpentry-progress-invoice) carpentry progress invoice
  - [ ] **B103** [/templates/window-installation-progress-invoice](plan/billing.md#b103--templateswindow-installation-progress-invoice) window installation progress invoice
  - [ ] **B104** [/templates/architect-progress-invoice](plan/billing.md#b104--templatesarchitect-progress-invoice) architect progress invoice
  - [ ] **B105** [/templates/demolition-progress-invoice](plan/billing.md#b105--templatesdemolition-progress-invoice) demolition progress invoice
  - [ ] **B106** [/templates/fabrication-progress-invoice](plan/billing.md#b106--templatesfabrication-progress-invoice) steel fabrication progress invoice

### B107–B119: Monthly and seasonal service invoices

- [ ] **B107–B119** · 0/13 live · [languages](#b107b119-in-every-language): 0/130
  - [ ] **B107** [/templates/monthly-window-cleaning-invoice](plan/billing.md#b107--templatesmonthly-window-cleaning-invoice) monthly window cleaning invoice
  - [ ] **B108** [/templates/monthly-dog-walking-invoice](plan/billing.md#b108--templatesmonthly-dog-walking-invoice) monthly dog walking invoice
  - [ ] **B109** [/templates/monthly-aquarium-maintenance-invoice](plan/billing.md#b109--templatesmonthly-aquarium-maintenance-invoice) monthly aquarium maintenance invoice
  - [ ] **B110** [/templates/monthly-bookkeeping-invoice](plan/billing.md#b110--templatesmonthly-bookkeeping-invoice) monthly bookkeeping invoice
  - [ ] **B111** [/templates/monthly-seo-invoice](plan/billing.md#b111--templatesmonthly-seo-invoice) monthly seo invoice
  - [ ] **B112** [/templates/monthly-security-invoice](plan/billing.md#b112--templatesmonthly-security-invoice) monthly security guard invoice
  - [ ] **B113** [/templates/property-management-fee-invoice](plan/billing.md#b113--templatesproperty-management-fee-invoice) property management fee invoice
  - [ ] **B114** [/templates/monthly-dance-class-invoice](plan/billing.md#b114--templatesmonthly-dance-class-invoice) monthly dance class invoice
  - [ ] **B115** [/templates/weekly-home-care-invoice](plan/billing.md#b115--templatesweekly-home-care-invoice) weekly home care invoice
  - [ ] **B116** [/templates/monthly-courier-invoice](plan/billing.md#b116--templatesmonthly-courier-invoice) monthly courier invoice
  - [ ] **B117** [/templates/pool-opening-closing-invoice](plan/billing.md#b117--templatespool-opening-closing-invoice) pool opening and closing invoice
  - [ ] **B118** [/templates/sprinkler-winterization-invoice](plan/billing.md#b118--templatessprinkler-winterization-invoice) sprinkler winterization invoice
  - [ ] **B119** [/templates/seasonal-gutter-cleaning-invoice](plan/billing.md#b119--templatesseasonal-gutter-cleaning-invoice) seasonal gutter cleaning invoice

### B120–B129: Retainers for professionals

- [ ] **B120–B129** · 0/10 live · [languages](#b120b129-in-every-language): 0/100
  - [ ] **B120** [/templates/legal-retainer-invoice](plan/billing.md#b120--templateslegal-retainer-invoice) legal retainer invoice
  - [ ] **B121** [/templates/marketing-retainer-invoice](plan/billing.md#b121--templatesmarketing-retainer-invoice) marketing agency retainer invoice
  - [ ] **B122** [/templates/copywriting-retainer-invoice](plan/billing.md#b122--templatescopywriting-retainer-invoice) copywriting retainer invoice
  - [ ] **B123** [/templates/graphic-design-retainer-invoice](plan/billing.md#b123--templatesgraphic-design-retainer-invoice) graphic design retainer invoice
  - [ ] **B124** [/templates/ux-retainer-invoice](plan/billing.md#b124--templatesux-retainer-invoice) ux design retainer invoice
  - [ ] **B125** [/templates/private-investigator-retainer-invoice](plan/billing.md#b125--templatesprivate-investigator-retainer-invoice) private investigator retainer invoice
  - [ ] **B126** [/templates/financial-advisor-retainer-invoice](plan/billing.md#b126--templatesfinancial-advisor-retainer-invoice) financial advisor retainer invoice
  - [ ] **B127** [/templates/accounting-retainer-invoice](plan/billing.md#b127--templatesaccounting-retainer-invoice) accounting retainer invoice
  - [ ] **B128** [/templates/expert-witness-retainer-invoice](plan/billing.md#b128--templatesexpert-witness-retainer-invoice) expert witness retainer invoice
  - [ ] **B129** [/templates/video-editing-retainer-invoice](plan/billing.md#b129--templatesvideo-editing-retainer-invoice) video editing retainer invoice

### B130–B136: Hourly billing for professionals and care

- [ ] **B130–B136** · 0/7 live · [languages](#b130b136-in-every-language): 0/70
  - [ ] **B130** [/templates/legal-hourly-invoice](plan/billing.md#b130--templateslegal-hourly-invoice) legal hourly invoice
  - [ ] **B131** [/templates/it-hourly-invoice](plan/billing.md#b131--templatesit-hourly-invoice) it services hourly invoice
  - [ ] **B132** [/templates/translation-hourly-invoice](plan/billing.md#b132--templatestranslation-hourly-invoice) translation hourly invoice
  - [ ] **B133** [/templates/video-editing-hourly-invoice](plan/billing.md#b133--templatesvideo-editing-hourly-invoice) video editing hourly invoice
  - [ ] **B134** [/templates/home-care-hourly-invoice](plan/billing.md#b134--templateshome-care-hourly-invoice) home care hourly invoice
  - [ ] **B135** [/templates/data-analysis-hourly-invoice](plan/billing.md#b135--templatesdata-analysis-hourly-invoice) data analysis hourly invoice
  - [ ] **B136** [/templates/ux-design-hourly-invoice](plan/billing.md#b136--templatesux-design-hourly-invoice) ux design hourly invoice

### B137–B146: Packages: lessons, wellness and coaching

- [ ] **B137–B146** · 0/10 live · [languages](#b137b146-in-every-language): 0/100
  - [ ] **B137** [/templates/swim-lesson-package-invoice](plan/billing.md#b137--templatesswim-lesson-package-invoice) swim lesson package invoice
  - [ ] **B138** [/templates/yoga-class-pack-invoice](plan/billing.md#b138--templatesyoga-class-pack-invoice) yoga class pack invoice
  - [ ] **B139** [/templates/massage-package-invoice](plan/billing.md#b139--templatesmassage-package-invoice) massage package invoice
  - [ ] **B140** [/templates/driving-lesson-package-invoice](plan/billing.md#b140--templatesdriving-lesson-package-invoice) driving lesson package invoice
  - [ ] **B141** [/templates/riding-lesson-package-invoice](plan/billing.md#b141--templatesriding-lesson-package-invoice) riding lesson package invoice
  - [ ] **B142** [/templates/nutrition-package-invoice](plan/billing.md#b142--templatesnutrition-package-invoice) nutrition package invoice
  - [ ] **B143** [/templates/facial-package-invoice](plan/billing.md#b143--templatesfacial-package-invoice) facial package invoice
  - [ ] **B144** [/templates/coaching-package-invoice](plan/billing.md#b144--templatescoaching-package-invoice) sports coaching package invoice
  - [ ] **B145** [/templates/language-lesson-package-invoice](plan/billing.md#b145--templateslanguage-lesson-package-invoice) language lesson package invoice
  - [ ] **B146** [/templates/physiotherapy-package-invoice](plan/billing.md#b146--templatesphysiotherapy-package-invoice) physiotherapy package invoice

### B147–B157: Service calls, emergencies and insurance jobs

- [ ] **B147–B157** · 0/11 live · [languages](#b147b157-in-every-language): 0/110
  - [ ] **B147** [/templates/garage-door-service-call-invoice](plan/billing.md#b147--templatesgarage-door-service-call-invoice) garage door service call invoice
  - [ ] **B148** [/templates/emergency-towing-invoice](plan/billing.md#b148--templatesemergency-towing-invoice) emergency towing invoice
  - [ ] **B149** [/templates/emergency-tree-removal-invoice](plan/billing.md#b149--templatesemergency-tree-removal-invoice) emergency tree removal invoice
  - [ ] **B150** [/templates/emergency-drain-cleaning-invoice](plan/billing.md#b150--templatesemergency-drain-cleaning-invoice) emergency drain cleaning invoice
  - [ ] **B151** [/templates/emergency-board-up-invoice](plan/billing.md#b151--templatesemergency-board-up-invoice) emergency board up invoice
  - [ ] **B152** [/templates/refrigeration-service-call-invoice](plan/billing.md#b152--templatesrefrigeration-service-call-invoice) refrigeration service call invoice
  - [ ] **B153** [/templates/restaurant-equipment-service-call-invoice](plan/billing.md#b153--templatesrestaurant-equipment-service-call-invoice) restaurant equipment service call invoice
  - [ ] **B154** [/templates/field-service-call-invoice](plan/billing.md#b154--templatesfield-service-call-invoice) field service call invoice
  - [ ] **B155** [/templates/call-out-charge-invoice](plan/billing.md#b155--templatescall-out-charge-invoice) call out charge invoice
  - [ ] **B156** [/templates/water-damage-insurance-invoice](plan/billing.md#b156--templateswater-damage-insurance-invoice) water damage insurance invoice
  - [ ] **B157** [/templates/mold-remediation-insurance-invoice](plan/billing.md#b157--templatesmold-remediation-insurance-invoice) mold remediation insurance invoice

### B158–B166: Milestones: creative, tech and engineering projects

- [ ] **B158–B166** · 0/9 live · [languages](#b158b166-in-every-language): 0/90
  - [ ] **B158** [/templates/game-development-milestone-invoice](plan/billing.md#b158--templatesgame-development-milestone-invoice) game development milestone invoice
  - [ ] **B159** [/templates/animation-milestone-invoice](plan/billing.md#b159--templatesanimation-milestone-invoice) animation milestone invoice
  - [ ] **B160** [/templates/film-production-milestone-invoice](plan/billing.md#b160--templatesfilm-production-milestone-invoice) film production milestone invoice
  - [ ] **B161** [/templates/engineering-milestone-invoice](plan/billing.md#b161--templatesengineering-milestone-invoice) engineering milestone invoice
  - [ ] **B162** [/templates/illustration-milestone-invoice](plan/billing.md#b162--templatesillustration-milestone-invoice) illustration milestone invoice
  - [ ] **B163** [/templates/music-production-milestone-invoice](plan/billing.md#b163--templatesmusic-production-milestone-invoice) music production milestone invoice
  - [ ] **B164** [/templates/marketing-project-milestone-invoice](plan/billing.md#b164--templatesmarketing-project-milestone-invoice) marketing project milestone invoice
  - [ ] **B165** [/templates/technical-writing-milestone-invoice](plan/billing.md#b165--templatestechnical-writing-milestone-invoice) technical writing milestone invoice
  - [ ] **B166** [/templates/environmental-consulting-phase-invoice](plan/billing.md#b166--templatesenvironmental-consulting-phase-invoice) environmental consulting phase invoice

### B167–B173: Final invoices: events and custom work

- [ ] **B167–B173** · 0/7 live · [languages](#b167b173-in-every-language): 0/70
  - [ ] **B167** [/templates/dj-final-invoice](plan/billing.md#b167--templatesdj-final-invoice) dj final invoice
  - [ ] **B168** [/templates/event-planner-final-invoice](plan/billing.md#b168--templatesevent-planner-final-invoice) event planner final invoice
  - [ ] **B169** [/templates/florist-final-invoice](plan/billing.md#b169--templatesflorist-final-invoice) florist final invoice
  - [ ] **B170** [/templates/band-final-invoice](plan/billing.md#b170--templatesband-final-invoice) band final invoice
  - [ ] **B171** [/templates/venue-final-invoice](plan/billing.md#b171--templatesvenue-final-invoice) venue final invoice
  - [ ] **B172** [/templates/party-rental-final-invoice](plan/billing.md#b172--templatesparty-rental-final-invoice) party rental final invoice
  - [ ] **B173** [/templates/custom-furniture-final-invoice](plan/billing.md#b173--templatescustom-furniture-final-invoice) custom furniture final invoice

### B174–B178: Per-unit billing: per word, mile and minute

- [ ] **B174–B178** · 0/5 live · [languages](#b174b178-in-every-language): 0/50
  - [ ] **B174** [/templates/proofreading-per-word-invoice](plan/billing.md#b174--templatesproofreading-per-word-invoice) proofreading per word invoice
  - [ ] **B175** [/templates/voice-over-per-word-invoice](plan/billing.md#b175--templatesvoice-over-per-word-invoice) voice over per word invoice
  - [ ] **B176** [/templates/courier-per-mile-invoice](plan/billing.md#b176--templatescourier-per-mile-invoice) courier per mile invoice
  - [ ] **B177** [/templates/towing-per-mile-invoice](plan/billing.md#b177--templatestowing-per-mile-invoice) towing per mile invoice
  - [ ] **B178** [/templates/trucking-rate-per-mile-invoice](plan/billing.md#b178--templatestrucking-rate-per-mile-invoice) trucking rate per mile invoice

## Invoice types (general documents) (D)

Rules: [RULES.md § D · Invoice types (general documents)](RULES.md#d--invoice-types-general-documents) · every brief: [plan/types.md](plan/types.md)

### D1–D20: Invoice types: the general documents

- [x] **D1–D20** · 16/16 live · 4 parked · the parents of the billing types and big local searches (Anzahlungsrechnung, factuur zzp): build first · [languages](#d1d20-in-every-language): 65/77
  - [x] **D1** [/templates/deposit-invoice](https://invoicor.com/templates/deposit-invoice) deposit invoice template
  - [x] **D4** [/templates/hourly-invoice](https://invoicor.com/templates/hourly-invoice) hourly invoice template
  - [x] **D6** [/templates/retainer-invoice](https://invoicor.com/templates/retainer-invoice) retainer invoice template
  - [x] **D9** [/templates/service-invoice](https://invoicor.com/templates/service-invoice) service invoice template
  - [x] **D10** [/templates/sales-invoice](https://invoicor.com/templates/sales-invoice) sales invoice template
  - [x] **D11** [/templates/commercial-invoice](https://invoicor.com/templates/commercial-invoice) commercial invoice template
  - [x] **D16** [/templates/freelance-invoice](https://invoicor.com/templates/freelance-invoice) freelance invoice template
  - [x] **D18** [/templates/subcontractor-invoice](https://invoicor.com/templates/subcontractor-invoice) subcontractor invoice template
  - [x] **D2** [/templates/final-invoice](https://invoicor.com/templates/final-invoice) final invoice template
  - [x] **D3** [/templates/milestone-invoice](https://invoicor.com/templates/milestone-invoice) milestone invoice template
  - [x] **D7** [/templates/monthly-invoice](https://invoicor.com/templates/monthly-invoice) monthly invoice template
  - [x] **D8** [/templates/labor-and-materials-invoice](https://invoicor.com/templates/labor-and-materials-invoice) labor and materials invoice template
  - [x] **D12** [/templates/past-due-invoice](https://invoicor.com/templates/past-due-invoice) past due invoice template
  - [x] **D14** [/templates/expense-reimbursement-invoice](https://invoicor.com/templates/expense-reimbursement-invoice) reimbursement invoice template
  - [x] **D15** [/templates/no-vat-invoice](https://invoicor.com/templates/no-vat-invoice) invoice without vat template
  - [x] **D17** [/templates/independent-contractor-invoice](https://invoicor.com/templates/independent-contractor-invoice) independent contractor invoice template
  - ~~**D5** /templates/day-rate-invoice~~ parked: parked 2026-11-27 (demand gate): search results show one dedicated page, the rest fall back to hourly templates; the hourly page covers day rates. Local versions (Tagessatz, dagtarief) can return as local pages with their own evidence; was: local: Rechnung nach Tagessatz (de), factuur dagtarief (nl)
  - ~~**D13** /templates/mileage-invoice~~ parked: parked 2026-11-27 (demand gate): results are mileage logs and employee reimbursement forms, not invoices; the expense reimbursement page covers billing miles to a client; was: en-only: a US habit
  - ~~**D19** /templates/personal-invoice~~ parked: parked 2026-11-27 (demand gate): no site uses "invoice template for individuals"; results treat it as freelance or simple invoices (the freelance page). The big local searches (Rechnung als Privatperson, factuur als particulier) can return as local pages; was: local: Rechnung als Privatperson (de), factuur als particulier (nl): both big local searches
  - ~~**D20** /templates/international-invoice~~ parked: parked 2026-11-27 (demand gate): intent split between commercial/export invoices (the commercial page) and currency tools; the freelance and commercial pages cover foreign clients. Local versions (Rechnung ins Ausland) can return as local pages; was: local: Rechnung ins Ausland / in Fremdwährung (de), factuur buitenland (nl)

### D21–D30: Invoice types II: special cases (self-billing, revised, paid, PO …)

- [ ] **D21–D30** · 0/10 live · [languages](#d21d30-in-every-language): 0/79
  - [ ] **D21** [/templates/self-billing-invoice](plan/types.md#d21--templatesself-billing-invoice) self billing invoice template
  - [ ] **D22** [/templates/itemized-invoice](plan/types.md#d22--templatesitemized-invoice) itemized invoice template
  - [ ] **D23** [/templates/paid-invoice](plan/types.md#d23--templatespaid-invoice) paid invoice template
  - [ ] **D24** [/templates/revised-invoice](plan/types.md#d24--templatesrevised-invoice) revised invoice template
  - [ ] **D25** [/templates/cancellation-fee-invoice](plan/types.md#d25--templatescancellation-fee-invoice) cancellation fee invoice template
  - [ ] **D26** [/templates/limited-company-invoice](plan/types.md#d26--templateslimited-company-invoice) limited company invoice template
  - [ ] **D27** [/templates/purchase-order-invoice](plan/types.md#d27--templatespurchase-order-invoice) purchase order invoice template
  - [ ] **D28** [/templates/nonprofit-invoice](plan/types.md#d28--templatesnonprofit-invoice) nonprofit invoice template
  - [ ] **D29** [/templates/pro-bono-invoice](plan/types.md#d29--templatespro-bono-invoice) pro bono invoice template
  - [ ] **D30** [/templates/royalty-invoice](plan/types.md#d30--templatesroyalty-invoice) royalty invoice template

## Industry pages ("invoice app for …") (I)

Rules: [RULES.md § I · Industry pages ("invoice app for …")](RULES.md#i--industry-pages-invoice-app-for-) · every brief: [plan/industries.md](plan/industries.md)

### I1–I20: Industry pages 1–20 (built)

- [x] **I1–I20** · 20/20 live · [languages](#i1i20-in-every-language): 8/192
  - [x] **I1** [/industries/plumbers-hvac](https://invoicor.com/industries/plumbers-hvac) invoice app for plumbers
  - [x] **I2** [/industries/freelance-designers](https://invoicor.com/industries/freelance-designers) invoicing app for freelance designers
  - [x] **I3** [/industries/landscaping-lawn-care](https://invoicor.com/industries/landscaping-lawn-care) landscaping invoicing software
  - [x] **I4** [/industries/electricians](https://invoicor.com/industries/electricians) invoice app for electricians
  - [x] **I5** [/industries/general-contractors](https://invoicor.com/industries/general-contractors) invoice app for contractors
  - [x] **I6** [/industries/photographers-videographers](https://invoicor.com/industries/photographers-videographers) invoicing software for photographers
  - [x] **I7** [/industries/consultants-coaches](https://invoicor.com/industries/consultants-coaches) invoicing software for consultants
  - [x] **I8** [/industries/cleaning-services](https://invoicor.com/industries/cleaning-services) invoice app for cleaning business
  - [x] **I9** [/industries/personal-trainers](https://invoicor.com/industries/personal-trainers) invoicing for personal trainers
  - [x] **I10** [/industries/auto-detailing-mechanics](https://invoicor.com/industries/auto-detailing-mechanics) invoice app for mechanics
  - [x] **I11** [/industries/roofers](https://invoicor.com/industries/roofers) roofing invoice app
  - [x] **I12** [/industries/painters](https://invoicor.com/industries/painters) invoice app for painters
  - [x] **I13** [/industries/web-developers](https://invoicor.com/industries/web-developers) invoice app for freelance developers
  - [x] **I14** [/industries/tutors](https://invoicor.com/industries/tutors) invoice app for tutors
  - [x] **I15** [/industries/caterers](https://invoicor.com/industries/caterers) invoice app for caterers
  - [x] **I16** [/industries/movers](https://invoicor.com/industries/movers) invoice app for movers
  - [x] **I17** [/industries/pest-control](https://invoicor.com/industries/pest-control) pest control invoicing software
  - [x] **I18** [/industries/virtual-assistants](https://invoicor.com/industries/virtual-assistants) invoice app for virtual assistants
  - [x] **I19** [/industries/pet-care](https://invoicor.com/industries/pet-care) invoice app for dog walkers
  - [x] **I20** [/industries/hair-makeup-artists](https://invoicor.com/industries/hair-makeup-artists) invoice app for makeup artists

### I21–I32: Industry pages 21–32 (built)

- [x] **I21–I32** · 12/12 live · [languages](#i21i32-in-every-language): 1/112
  - [x] **I21** [/industries/carpenters](https://invoicor.com/industries/carpenters) invoice app for carpenters
  - [x] **I22** [/industries/flooring-installers](https://invoicor.com/industries/flooring-installers) invoice app for flooring installers
  - [x] **I23** [/industries/tile-installers](https://invoicor.com/industries/tile-installers) invoice app for tile installers
  - [x] **I24** [/industries/masons](https://invoicor.com/industries/masons) invoice app for masons
  - [x] **I25** [/industries/pool-service](https://invoicor.com/industries/pool-service) invoice app for pool service companies
  - [x] **I26** [/industries/window-cleaners](https://invoicor.com/industries/window-cleaners) invoice app for window cleaners
  - [x] **I27** [/industries/pressure-washing](https://invoicor.com/industries/pressure-washing) invoice app for pressure washing businesses
  - [x] **I28** [/industries/tree-service](https://invoicor.com/industries/tree-service) invoice app for tree service companies
  - [x] **I29** [/industries/snow-removal](https://invoicor.com/industries/snow-removal) invoice app for snow removal businesses
  - [x] **I30** [/industries/locksmiths](https://invoicor.com/industries/locksmiths) invoice app for locksmiths
  - [x] **I31** [/industries/appliance-repair](https://invoicor.com/industries/appliance-repair) invoice app for appliance repair technicians
  - [x] **I32** [/industries/junk-removal](https://invoicor.com/industries/junk-removal) invoice app for junk removal businesses

### I33–I43: Industry pages 33–43 (built)

- [x] **I33–I43** · 11/11 live · [languages](#i33i43-in-every-language): 1/103
  - [x] **I33** [/industries/carpet-cleaners](https://invoicor.com/industries/carpet-cleaners) invoice app for carpet cleaners
  - [x] **I34** [/industries/interior-designers](https://invoicor.com/industries/interior-designers) invoice app for interior designers
  - [x] **I35** [/industries/djs](https://invoicor.com/industries/djs) invoice app for djs
  - [x] **I36** [/industries/event-planners](https://invoicor.com/industries/event-planners) invoice app for event planners
  - [x] **I37** [/industries/florists](https://invoicor.com/industries/florists) invoice app for florists
  - [x] **I38** [/industries/massage-therapists](https://invoicor.com/industries/massage-therapists) invoice app for massage therapists
  - [x] **I39** [/industries/translators](https://invoicor.com/industries/translators) invoice app for translators
  - [x] **I40** [/industries/copywriters](https://invoicor.com/industries/copywriters) invoice app for copywriters
  - [x] **I41** [/industries/social-media-managers](https://invoicor.com/industries/social-media-managers) invoice app for social media managers
  - [x] **I42** [/industries/music-teachers](https://invoicor.com/industries/music-teachers) invoice app for music teachers
  - [x] **I43** [/industries/bookkeepers](https://invoicor.com/industries/bookkeepers) invoice app for bookkeepers

### I44–I53: Industry pages for T51–T60's trades

- [ ] **I44–I53** · 0/10 live · [languages](#i44i53-in-every-language): 0/90
  - [ ] **I44** [/industries/notaries](plan/industries.md#i44--industriesnotaries) invoice app for notaries
  - [ ] **I45** [/industries/home-inspectors](plan/industries.md#i45--industrieshome-inspectors) invoice app for home inspectors
  - [ ] **I46** [/industries/it-technicians](plan/industries.md#i46--industriesit-technicians) invoice app for it technicians
  - [ ] **I47** [/industries/drone-pilots](plan/industries.md#i47--industriesdrone-pilots) invoice app for drone pilots
  - [ ] **I48** [/industries/tattoo-artists](plan/industries.md#i48--industriestattoo-artists) invoice app for tattoo artists
  - [ ] **I49** [/industries/personal-chefs](plan/industries.md#i49--industriespersonal-chefs) invoice app for personal chefs
  - [ ] **I50** [/industries/bakers](plan/industries.md#i50--industriesbakers) invoice app for bakers
  - [ ] **I51** [/industries/dog-trainers](plan/industries.md#i51--industriesdog-trainers) invoice app for dog trainers
  - [ ] **I52** [/industries/musicians](plan/industries.md#i52--industriesmusicians) invoice app for musicians
  - [ ] **I53** [/industries/voice-actors](plan/industries.md#i53--industriesvoice-actors) invoice app for voice actors

### I54–I73: Industry pages for T61–T80's trades

- [ ] **I54–I73** · 0/20 live · [languages](#i54i73-in-every-language): 0/200
  - [ ] **I54** [/industries/chimney-sweeps](plan/industries.md#i54--industrieschimney-sweeps) invoice app for chimney sweeps
  - [ ] **I55** [/industries/gutter-cleaners](plan/industries.md#i55--industriesgutter-cleaners) invoice app for gutter cleaners
  - [ ] **I56** [/industries/septic-companies](plan/industries.md#i56--industriesseptic-companies) invoice app for septic companies
  - [ ] **I57** [/industries/irrigation-contractors](plan/industries.md#i57--industriesirrigation-contractors) invoice app for irrigation contractors
  - [ ] **I58** [/industries/deck-builders](plan/industries.md#i58--industriesdeck-builders) invoice app for deck builders
  - [ ] **I59** [/industries/cabinet-installers](plan/industries.md#i59--industriescabinet-installers) invoice app for cabinet installers
  - [ ] **I60** [/industries/countertop-installers](plan/industries.md#i60--industriescountertop-installers) invoice app for countertop installers
  - [ ] **I61** [/industries/insulation-contractors](plan/industries.md#i61--industriesinsulation-contractors) invoice app for insulation contractors
  - [ ] **I62** [/industries/siding-contractors](plan/industries.md#i62--industriessiding-contractors) invoice app for siding contractors
  - [ ] **I63** [/industries/window-installers](plan/industries.md#i63--industrieswindow-installers) invoice app for window installers
  - [ ] **I64** [/industries/paving-contractors](plan/industries.md#i64--industriespaving-contractors) invoice app for paving contractors
  - [ ] **I65** [/industries/excavation-contractors](plan/industries.md#i65--industriesexcavation-contractors) invoice app for excavation contractors
  - [ ] **I66** [/industries/demolition-contractors](plan/industries.md#i66--industriesdemolition-contractors) invoice app for demolition contractors
  - [ ] **I67** [/industries/solar-installers](plan/industries.md#i67--industriessolar-installers) invoice app for solar installers
  - [ ] **I68** [/industries/home-stagers](plan/industries.md#i68--industrieshome-stagers) invoice app for home stagers
  - [ ] **I69** [/industries/security-system-installers](plan/industries.md#i69--industriessecurity-system-installers) invoice app for security system installers
  - [ ] **I70** [/industries/av-installers](plan/industries.md#i70--industriesav-installers) invoice app for av installers
  - [ ] **I71** [/industries/mold-remediation-companies](plan/industries.md#i71--industriesmold-remediation-companies) invoice app for mold remediation companies
  - [ ] **I72** [/industries/restoration-companies](plan/industries.md#i72--industriesrestoration-companies) invoice app for restoration companies
  - [ ] **I73** [/industries/duct-cleaners](plan/industries.md#i73--industriesduct-cleaners) invoice app for duct cleaners

### I74–I93: Industry pages for T81–T100's trades

- [ ] **I74–I93** · 0/20 live · [languages](#i74i93-in-every-language): 0/200
  - [ ] **I74** [/industries/welders](plan/industries.md#i74--industrieswelders) invoice app for welders
  - [ ] **I75** [/industries/sign-makers](plan/industries.md#i75--industriessign-makers) invoice app for sign makers
  - [ ] **I76** [/industries/screen-printers](plan/industries.md#i76--industriesscreen-printers) invoice app for screen printers
  - [ ] **I77** [/industries/embroidery-businesses](plan/industries.md#i77--industriesembroidery-businesses) invoice app for embroidery businesses
  - [ ] **I78** [/industries/tailors](plan/industries.md#i78--industriestailors) invoice app for tailors
  - [ ] **I79** [/industries/jewelers](plan/industries.md#i79--industriesjewelers) invoice app for jewelers
  - [ ] **I80** [/industries/bike-mechanics](plan/industries.md#i80--industriesbike-mechanics) invoice app for bike mechanics
  - [ ] **I81** [/industries/small-engine-mechanics](plan/industries.md#i81--industriessmall-engine-mechanics) invoice app for small engine mechanics
  - [ ] **I82** [/industries/marine-mechanics](plan/industries.md#i82--industriesmarine-mechanics) invoice app for marine mechanics
  - [ ] **I83** [/industries/rv-technicians](plan/industries.md#i83--industriesrv-technicians) invoice app for rv technicians
  - [ ] **I84** [/industries/towing-companies](plan/industries.md#i84--industriestowing-companies) invoice app for towing companies
  - [ ] **I85** [/industries/couriers](plan/industries.md#i85--industriescouriers) invoice app for couriers
  - [ ] **I86** [/industries/owner-operators](plan/industries.md#i86--industriesowner-operators) invoice app for owner operators
  - [ ] **I87** [/industries/limo-services](plan/industries.md#i87--industrieslimo-services) invoice app for limo services
  - [ ] **I88** [/industries/photo-booth-rentals](plan/industries.md#i88--industriesphoto-booth-rentals) invoice app for photo booth rentals
  - [ ] **I89** [/industries/party-rental-companies](plan/industries.md#i89--industriesparty-rental-companies) invoice app for party rental companies
  - [ ] **I90** [/industries/officiants](plan/industries.md#i90--industriesofficiants) invoice app for wedding officiants
  - [ ] **I91** [/industries/illustrators](plan/industries.md#i91--industriesillustrators) invoice app for illustrators
  - [ ] **I92** [/industries/video-editors](plan/industries.md#i92--industriesvideo-editors) invoice app for video editors
  - [ ] **I93** [/industries/podcast-producers](plan/industries.md#i93--industriespodcast-producers) invoice app for podcast producers

### I94–I113: Industry pages for T101–T120's trades

- [ ] **I94–I113** · 0/20 live · [languages](#i94i113-in-every-language): 0/190
  - [ ] **I94** [/industries/seo-consultants](plan/industries.md#i94--industriesseo-consultants) invoice app for seo consultants
  - [ ] **I95** [/industries/marketing-agencies](plan/industries.md#i95--industriesmarketing-agencies) invoice app for marketing agencies
  - [ ] **I96** [/industries/ux-designers](plan/industries.md#i96--industriesux-designers) invoice app for ux designers
  - [ ] **I97** [/industries/app-developers](plan/industries.md#i97--industriesapp-developers) invoice app for app developers
  - [ ] **I98** [/industries/data-analysts](plan/industries.md#i98--industriesdata-analysts) invoice app for data analysts
  - [ ] **I99** [/industries/tax-preparers](plan/industries.md#i99--industriestax-preparers) invoice app for tax preparers
  - [ ] **I100** [/industries/lawyers](plan/industries.md#i100--industrieslawyers) invoice app for lawyers
  - [ ] **I101** [/industries/property-managers](plan/industries.md#i101--industriesproperty-managers) invoice app for property managers
  - [ ] **I102** [/industries/landlords](plan/industries.md#i102--industrieslandlords) invoice app for landlords
  - [ ] **I103** [/industries/security-companies](plan/industries.md#i103--industriessecurity-companies) invoice app for security companies
  - [ ] **I104** [/industries/therapists](plan/industries.md#i104--industriestherapists) invoice app for therapists
  - [ ] **I105** [/industries/nutritionists](plan/industries.md#i105--industriesnutritionists) invoice app for nutritionists
  - [ ] **I106** [/industries/yoga-teachers](plan/industries.md#i106--industriesyoga-teachers) invoice app for yoga teachers
  - [ ] **I107** [/industries/dance-teachers](plan/industries.md#i107--industriesdance-teachers) invoice app for dance teachers
  - [ ] **I108** [/industries/swim-instructors](plan/industries.md#i108--industriesswim-instructors) invoice app for swim instructors
  - [ ] **I109** [/industries/sports-coaches](plan/industries.md#i109--industriessports-coaches) invoice app for sports coaches
  - [ ] **I110** [/industries/babysitters](plan/industries.md#i110--industriesbabysitters) invoice app for babysitters
  - [ ] **I111** [/industries/caregivers](plan/industries.md#i111--industriescaregivers) invoice app for caregivers
  - [ ] **I112** [/industries/doulas](plan/industries.md#i112--industriesdoulas) invoice app for doulas
  - [ ] **I113** [/industries/barbers](plan/industries.md#i113--industriesbarbers) invoice app for barbers

### I114–I133: Industry pages for T121–T140's trades

- [ ] **I114–I133** · 0/20 live · [languages](#i114i133-in-every-language): 0/200
  - [ ] **I114** [/industries/nail-technicians](plan/industries.md#i114--industriesnail-technicians) invoice app for nail technicians
  - [ ] **I115** [/industries/estheticians](plan/industries.md#i115--industriesestheticians) invoice app for estheticians
  - [ ] **I116** [/industries/lash-technicians](plan/industries.md#i116--industrieslash-technicians) invoice app for lash technicians
  - [ ] **I117** [/industries/artists](plan/industries.md#i117--industriesartists) invoice app for visual artists
  - [ ] **I118** [/industries/music-producers](plan/industries.md#i118--industriesmusic-producers) invoice app for music producers
  - [ ] **I119** [/industries/recording-studios](plan/industries.md#i119--industriesrecording-studios) invoice app for recording studios
  - [ ] **I120** [/industries/sound-engineers](plan/industries.md#i120--industriessound-engineers) invoice app for sound engineers
  - [ ] **I121** [/industries/content-creators](plan/industries.md#i121--industriescontent-creators) invoice app for content creators
  - [ ] **I122** [/industries/proofreaders](plan/industries.md#i122--industriesproofreaders) invoice app for proofreaders
  - [ ] **I123** [/industries/driving-instructors](plan/industries.md#i123--industriesdriving-instructors) invoice app for driving instructors
  - [ ] **I124** [/industries/farmers](plan/industries.md#i124--industriesfarmers) invoice app for farmers
  - [ ] **I125** [/industries/print-shops](plan/industries.md#i125--industriesprint-shops) invoice app for print shops
  - [ ] **I126** [/industries/3d-printing-services](plan/industries.md#i126--industries3d-printing-services) invoice app for 3d printing services
  - [ ] **I127** [/industries/engravers](plan/industries.md#i127--industriesengravers) invoice app for engravers
  - [ ] **I128** [/industries/furniture-makers](plan/industries.md#i128--industriesfurniture-makers) invoice app for furniture makers
  - [ ] **I129** [/industries/glaziers](plan/industries.md#i129--industriesglaziers) invoice app for glaziers
  - [ ] **I130** [/industries/wildlife-removal-companies](plan/industries.md#i130--industrieswildlife-removal-companies) invoice app for wildlife removal companies
  - [ ] **I131** [/industries/aquarium-services](plan/industries.md#i131--industriesaquarium-services) invoice app for aquarium services
  - [ ] **I132** [/industries/surveyors](plan/industries.md#i132--industriessurveyors) invoice app for surveyors
  - [ ] **I133** [/industries/professional-organizers](plan/industries.md#i133--industriesprofessional-organizers) invoice app for professional organizers

### I134–I137: Architects, real estate agents, private investigators, equipment rental

- [ ] **I134–I137** · 0/4 live · [languages](#i134i137-in-every-language): 0/40
  - [ ] **I134** [/industries/architects](plan/industries.md#i134--industriesarchitects) invoice app for architects
  - [ ] **I135** [/industries/real-estate-agents](plan/industries.md#i135--industriesreal-estate-agents) invoice app for real estate agents
  - [ ] **I136** [/industries/private-investigators](plan/industries.md#i136--industriesprivate-investigators) invoice app for private investigators
  - [ ] **I137** [/industries/equipment-rental-companies](plan/industries.md#i137--industriesequipment-rental-companies) invoice app for equipment rental companies

### I138–I143: One trade per page: split the combined industry pages

- [ ] **I138–I143** · 0/6 live · each split narrows its old combined page when it goes live (see the briefs) · [languages](#i138i143-in-every-language): 0/60
  - [ ] **I138** [/industries/hvac-companies](plan/industries.md#i138--industrieshvac-companies) invoice app for hvac companies
  - [ ] **I139** [/industries/auto-detailers](plan/industries.md#i139--industriesauto-detailers) invoice app for auto detailers
  - [ ] **I140** [/industries/videographers](plan/industries.md#i140--industriesvideographers) invoice app for videographers
  - [ ] **I141** [/industries/lawn-care-companies](plan/industries.md#i141--industrieslawn-care-companies) invoice app for lawn care companies
  - [ ] **I142** [/industries/life-coaches](plan/industries.md#i142--industrieslife-coaches) invoice app for life coaches
  - [ ] **I143** [/industries/hair-stylists](plan/industries.md#i143--industrieshair-stylists) invoice app for hair stylists

### I144–I152: Who invoices: self-employed, freelancers, sellers

- [ ] **I144–I152** · 0/9 live · [languages](#i144i152-in-every-language): 0/70
  - [ ] **I144** [/industries/self-employed](plan/industries.md#i144--industriesself-employed) invoice app for self employed
  - [ ] **I145** [/industries/freelancers](plan/industries.md#i145--industriesfreelancers) invoice app for freelancers
  - [ ] **I146** [/industries/independent-contractors](plan/industries.md#i146--industriesindependent-contractors) invoice app for independent contractors
  - [ ] **I147** [/industries/tradespeople](plan/industries.md#i147--industriestradespeople) invoice app for tradespeople
  - [ ] **I148** [/industries/home-service-businesses](plan/industries.md#i148--industrieshome-service-businesses) invoice app for home service businesses
  - [ ] **I149** [/industries/gig-workers](plan/industries.md#i149--industriesgig-workers) invoice app for gig workers
  - [ ] **I150** [/industries/crafters](plan/industries.md#i150--industriescrafters) invoice app for crafters
  - [ ] **I151** [/industries/online-sellers](plan/industries.md#i151--industriesonline-sellers) invoice app for online sellers
  - [ ] **I152** [/industries/wholesalers](plan/industries.md#i152--industrieswholesalers) invoice app for wholesalers

### I153–I162: Specialist contractors

- [ ] **I153–I162** · 0/10 live · [languages](#i153i162-in-every-language): 0/80
  - [ ] **I153** [/industries/handymen](plan/industries.md#i153--industrieshandymen) invoice app for handymen
  - [ ] **I154** [/industries/garage-door-companies](plan/industries.md#i154--industriesgarage-door-companies) invoice app for garage door companies
  - [ ] **I155** [/industries/gas-engineers](plan/industries.md#i155--industriesgas-engineers) invoice app for gas engineers
  - [ ] **I156** [/industries/plasterers](plan/industries.md#i156--industriesplasterers) invoice app for plasterers
  - [ ] **I157** [/industries/concrete-contractors](plan/industries.md#i157--industriesconcrete-contractors) invoice app for concrete contractors
  - [ ] **I158** [/industries/low-voltage-contractors](plan/industries.md#i158--industrieslow-voltage-contractors) invoice app for low voltage contractors
  - [ ] **I159** [/industries/fire-protection-companies](plan/industries.md#i159--industriesfire-protection-companies) invoice app for fire protection companies
  - [ ] **I160** [/industries/scaffolding-companies](plan/industries.md#i160--industriesscaffolding-companies) invoice app for scaffolding companies
  - [ ] **I161** [/industries/foundation-repair-companies](plan/industries.md#i161--industriesfoundation-repair-companies) invoice app for foundation repair companies
  - [ ] **I162** [/industries/christmas-light-installers](plan/industries.md#i162--industrieschristmas-light-installers) invoice app for christmas light installers

### I163–I169: Cleaning, waste and property services

- [ ] **I163–I169** · 0/7 live · [languages](#i163i169-in-every-language): 0/30
  - [ ] **I163** [/industries/janitorial-companies](plan/industries.md#i163--industriesjanitorial-companies) invoice app for janitorial companies
  - [ ] **I164** [/industries/dumpster-rental-companies](plan/industries.md#i164--industriesdumpster-rental-companies) invoice app for dumpster rental companies
  - [ ] **I165** [/industries/portable-toilet-companies](plan/industries.md#i165--industriesportable-toilet-companies) invoice app for portable toilet companies
  - [ ] **I166** [/industries/pooper-scooper-businesses](plan/industries.md#i166--industriespooper-scooper-businesses) invoice app for pooper scooper businesses
  - [ ] **I167** [/industries/hood-cleaning-companies](plan/industries.md#i167--industrieshood-cleaning-companies) invoice app for hood cleaning companies
  - [ ] **I168** [/industries/property-preservation-companies](plan/industries.md#i168--industriesproperty-preservation-companies) invoice app for property preservation companies
  - [ ] **I169** [/industries/appraisers](plan/industries.md#i169--industriesappraisers) invoice app for appraisers

### I170–I179: Auto shops and transport

- [ ] **I170–I179** · 0/10 live · [languages](#i170i179-in-every-language): 0/80
  - [ ] **I170** [/industries/auto-body-shops](plan/industries.md#i170--industriesauto-body-shops) invoice app for auto body shops
  - [ ] **I171** [/industries/auto-glass-shops](plan/industries.md#i171--industriesauto-glass-shops) invoice app for auto glass shops
  - [ ] **I172** [/industries/tire-shops](plan/industries.md#i172--industriestire-shops) invoice app for tire shops
  - [ ] **I173** [/industries/window-tint-shops](plan/industries.md#i173--industrieswindow-tint-shops) invoice app for window tint shops
  - [ ] **I174** [/industries/pdr-technicians](plan/industries.md#i174--industriespdr-technicians) invoice app for pdr technicians
  - [ ] **I175** [/industries/heavy-equipment-mechanics](plan/industries.md#i175--industriesheavy-equipment-mechanics) invoice app for heavy equipment mechanics
  - [ ] **I176** [/industries/car-haulers](plan/industries.md#i176--industriescar-haulers) invoice app for car haulers
  - [ ] **I177** [/industries/freight-brokers](plan/industries.md#i177--industriesfreight-brokers) invoice app for freight brokers
  - [ ] **I178** [/industries/truck-dispatchers](plan/industries.md#i178--industriestruck-dispatchers) invoice app for truck dispatchers
  - [ ] **I179** [/industries/flight-instructors](plan/industries.md#i179--industriesflight-instructors) invoice app for flight instructors

### I180–I190: Professional services

- [ ] **I180–I190** · 0/11 live · [languages](#i180i190-in-every-language): 0/80
  - [ ] **I180** [/industries/accountants](plan/industries.md#i180--industriesaccountants) invoice app for accountants
  - [ ] **I181** [/industries/financial-advisors](plan/industries.md#i181--industriesfinancial-advisors) invoice app for financial advisors
  - [ ] **I182** [/industries/recruiters](plan/industries.md#i182--industriesrecruiters) invoice app for recruiters
  - [ ] **I183** [/industries/staffing-agencies](plan/industries.md#i183--industriesstaffing-agencies) invoice app for staffing agencies
  - [ ] **I184** [/industries/mediators](plan/industries.md#i184--industriesmediators) invoice app for mediators
  - [ ] **I185** [/industries/process-servers](plan/industries.md#i185--industriesprocess-servers) invoice app for process servers
  - [ ] **I186** [/industries/court-reporters](plan/industries.md#i186--industriescourt-reporters) invoice app for court reporters
  - [ ] **I187** [/industries/insurance-adjusters](plan/industries.md#i187--industriesinsurance-adjusters) invoice app for insurance adjusters
  - [ ] **I188** [/industries/msps](plan/industries.md#i188--industriesmsps) invoice app for msps
  - [ ] **I189** [/industries/engineering-firms](plan/industries.md#i189--industriesengineering-firms) invoice app for engineering firms
  - [ ] **I190** [/industries/environmental-consultants](plan/industries.md#i190--industriesenvironmental-consultants) invoice app for environmental consultants

### I191–I200: Events, food and travel

- [ ] **I191–I200** · 0/10 live · [languages](#i191i200-in-every-language): 0/100
  - [ ] **I191** [/industries/balloon-artists](plan/industries.md#i191--industriesballoon-artists) invoice app for balloon artists
  - [ ] **I192** [/industries/entertainers](plan/industries.md#i192--industriesentertainers) invoice app for entertainers
  - [ ] **I193** [/industries/travel-agents](plan/industries.md#i193--industriestravel-agents) invoice app for travel agents
  - [ ] **I194** [/industries/tour-operators](plan/industries.md#i194--industriestour-operators) invoice app for tour operators
  - [ ] **I195** [/industries/meal-prep-businesses](plan/industries.md#i195--industriesmeal-prep-businesses) invoice app for meal prep businesses
  - [ ] **I196** [/industries/food-trucks](plan/industries.md#i196--industriesfood-trucks) invoice app for food trucks
  - [ ] **I197** [/industries/event-decorators](plan/industries.md#i197--industriesevent-decorators) invoice app for event decorators
  - [ ] **I198** [/industries/wedding-vendors](plan/industries.md#i198--industrieswedding-vendors) invoice app for wedding vendors
  - [ ] **I199** [/industries/bartenders](plan/industries.md#i199--industriesbartenders) invoice app for bartenders
  - [ ] **I200** [/industries/event-venues](plan/industries.md#i200--industriesevent-venues) invoice app for event venues

### I201–I209: Creative and media

- [ ] **I201–I209** · 0/9 live · [languages](#i201i209-in-every-language): 0/90
  - [ ] **I201** [/industries/production-companies](plan/industries.md#i201--industriesproduction-companies) invoice app for production companies
  - [ ] **I202** [/industries/animators](plan/industries.md#i202--industriesanimators) invoice app for animators
  - [ ] **I203** [/industries/3d-artists](plan/industries.md#i203--industries3d-artists) invoice app for 3d artists
  - [ ] **I204** [/industries/fashion-designers](plan/industries.md#i204--industriesfashion-designers) invoice app for fashion designers
  - [ ] **I205** [/industries/fashion-stylists](plan/industries.md#i205--industriesfashion-stylists) invoice app for fashion stylists
  - [ ] **I206** [/industries/actors](plan/industries.md#i206--industriesactors) invoice app for actors
  - [ ] **I207** [/industries/models](plan/industries.md#i207--industriesmodels) invoice app for models
  - [ ] **I208** [/industries/creative-agencies](plan/industries.md#i208--industriescreative-agencies) invoice app for creative agencies
  - [ ] **I209** [/industries/game-developers](plan/industries.md#i209--industriesgame-developers) invoice app for game developers

### I210–I220: Health, wellness and beauty

- [ ] **I210–I220** · 0/11 live · [languages](#i210i220-in-every-language): 0/110
  - [ ] **I210** [/industries/physiotherapists](plan/industries.md#i210--industriesphysiotherapists) invoice app for physiotherapists
  - [ ] **I211** [/industries/chiropractors](plan/industries.md#i211--industrieschiropractors) invoice app for chiropractors
  - [ ] **I212** [/industries/acupuncturists](plan/industries.md#i212--industriesacupuncturists) invoice app for acupuncturists
  - [ ] **I213** [/industries/speech-therapists](plan/industries.md#i213--industriesspeech-therapists) invoice app for speech therapists
  - [ ] **I214** [/industries/occupational-therapists](plan/industries.md#i214--industriesoccupational-therapists) invoice app for occupational therapists
  - [ ] **I215** [/industries/locums](plan/industries.md#i215--industrieslocums) invoice app for locums
  - [ ] **I216** [/industries/nurses](plan/industries.md#i216--industriesnurses) invoice app for nurses
  - [ ] **I217** [/industries/midwives](plan/industries.md#i217--industriesmidwives) invoice app for midwives
  - [ ] **I218** [/industries/holistic-practitioners](plan/industries.md#i218--industriesholistic-practitioners) invoice app for holistic practitioners
  - [ ] **I219** [/industries/spray-tan-artists](plan/industries.md#i219--industriesspray-tan-artists) invoice app for spray tan artists
  - [ ] **I220** [/industries/pmu-artists](plan/industries.md#i220--industriespmu-artists) invoice app for pmu artists

### I221–I230: Education and childcare

- [ ] **I221–I230** · 0/10 live · [languages](#i221i230-in-every-language): 0/90
  - [ ] **I221** [/industries/daycare-providers](plan/industries.md#i221--industriesdaycare-providers) invoice app for daycare providers
  - [ ] **I222** [/industries/childminders](plan/industries.md#i222--industrieschildminders) invoice app for childminders
  - [ ] **I223** [/industries/after-school-programs](plan/industries.md#i223--industriesafter-school-programs) invoice app for after school programs
  - [ ] **I224** [/industries/summer-camps](plan/industries.md#i224--industriessummer-camps) invoice app for summer camps
  - [ ] **I225** [/industries/language-teachers](plan/industries.md#i225--industrieslanguage-teachers) invoice app for language teachers
  - [ ] **I226** [/industries/corporate-trainers](plan/industries.md#i226--industriescorporate-trainers) invoice app for corporate trainers
  - [ ] **I227** [/industries/speakers](plan/industries.md#i227--industriesspeakers) invoice app for speakers
  - [ ] **I228** [/industries/riding-instructors](plan/industries.md#i228--industriesriding-instructors) invoice app for riding instructors
  - [ ] **I229** [/industries/martial-arts-schools](plan/industries.md#i229--industriesmartial-arts-schools) invoice app for martial arts schools
  - [ ] **I230** [/industries/cpr-instructors](plan/industries.md#i230--industriescpr-instructors) invoice app for cpr instructors

### I231–I239: Animals, farms and outdoors

- [ ] **I231–I239** · 0/9 live · [languages](#i231i239-in-every-language): 0/90
  - [ ] **I231** [/industries/dog-groomers](plan/industries.md#i231--industriesdog-groomers) invoice app for dog groomers
  - [ ] **I232** [/industries/kennels](plan/industries.md#i232--industrieskennels) invoice app for kennels
  - [ ] **I233** [/industries/farriers](plan/industries.md#i233--industriesfarriers) invoice app for farriers
  - [ ] **I234** [/industries/stables](plan/industries.md#i234--industriesstables) invoice app for stables
  - [ ] **I235** [/industries/horse-trainers](plan/industries.md#i235--industrieshorse-trainers) invoice app for horse trainers
  - [ ] **I236** [/industries/outfitters](plan/industries.md#i236--industriesoutfitters) invoice app for outfitters
  - [ ] **I237** [/industries/fishing-charters](plan/industries.md#i237--industriesfishing-charters) invoice app for fishing charters
  - [ ] **I238** [/industries/custom-harvesters](plan/industries.md#i238--industriescustom-harvesters) invoice app for custom harvesters
  - [ ] **I239** [/industries/loggers](plan/industries.md#i239--industriesloggers) invoice app for loggers

## Compare pages ("{competitor} alternative") (C)

Rules: [RULES.md § C · Compare pages ("{competitor} alternative")](RULES.md#c--compare-pages-competitor-alternative) · every brief: [plan/compare.md](plan/compare.md)

### C1–C20: Compare pages (built, English only)

- [x] **C1–C20** · 20/20 live
  - [x] **C1** [/compare/quickbooks](https://invoicor.com/compare/quickbooks) quickbooks alternative
  - [x] **C2** [/compare/freshbooks](https://invoicor.com/compare/freshbooks) freshbooks alternative
  - [x] **C3** [/compare/invoice2go](https://invoicor.com/compare/invoice2go) invoice2go alternative
  - [x] **C4** [/compare/wave](https://invoicor.com/compare/wave) wave alternative
  - [x] **C5** [/compare/xero](https://invoicor.com/compare/xero) xero alternative
  - [x] **C6** [/compare/zoho-invoice](https://invoicor.com/compare/zoho-invoice) zoho invoice alternative
  - [x] **C7** [/compare/square-invoices](https://invoicor.com/compare/square-invoices) square invoices alternative
  - [x] **C8** [/compare/honeybook](https://invoicor.com/compare/honeybook) honeybook alternative
  - [x] **C9** [/compare/bonsai](https://invoicor.com/compare/bonsai) bonsai alternative
  - [x] **C10** [/compare/stripe-invoices](https://invoicor.com/compare/stripe-invoices) stripe invoicing alternative
  - [x] **C11** [/compare/invoice-fly](https://invoicor.com/compare/invoice-fly) invoice fly alternative
  - [x] **C12** [/compare/bookipi](https://invoicor.com/compare/bookipi) bookipi alternative
  - [x] **C13** [/compare/joist](https://invoicor.com/compare/joist) joist alternative
  - [x] **C14** [/compare/jobber](https://invoicor.com/compare/jobber) jobber alternative
  - [x] **C15** [/compare/housecall-pro](https://invoicor.com/compare/housecall-pro) housecall pro alternative
  - [x] **C16** [/compare/invoice-ninja](https://invoicor.com/compare/invoice-ninja) invoice ninja alternative
  - [x] **C17** [/compare/harvest](https://invoicor.com/compare/harvest) harvest alternative
  - [x] **C18** [/compare/servicem8](https://invoicor.com/compare/servicem8) servicem8 alternative
  - [x] **C19** [/compare/billdu](https://invoicor.com/compare/billdu) billdu alternative
  - [x] **C20** [/compare/zervant](https://invoicor.com/compare/zervant) zervant alternative

### C21–C40: 20 more compares (English only)

- [ ] **C21–C40** · 0/20 live
  - [ ] **C21** [/compare/invoice-simple](plan/compare.md#c21--compareinvoice-simple) invoice simple alternative
  - [ ] **C22** [/compare/invoice-home](plan/compare.md#c22--compareinvoice-home) invoice home alternative
  - [ ] **C23** [/compare/moon-invoice](plan/compare.md#c23--comparemoon-invoice) moon invoice alternative
  - [ ] **C24** [/compare/invoicely](plan/compare.md#c24--compareinvoicely) invoicely alternative
  - [ ] **C25** [/compare/paypal-invoicing](plan/compare.md#c25--comparepaypal-invoicing) paypal invoicing alternative
  - [ ] **C26** [/compare/tradify](plan/compare.md#c26--comparetradify) tradify alternative
  - [ ] **C27** [/compare/fieldpulse](plan/compare.md#c27--comparefieldpulse) fieldpulse alternative
  - [ ] **C28** [/compare/hiveage](plan/compare.md#c28--comparehiveage) hiveage alternative
  - [ ] **C29** [/compare/sumup-invoices](plan/compare.md#c29--comparesumup-invoices) sumup invoices alternative
  - [ ] **C30** [/compare/sage-accounting](plan/compare.md#c30--comparesage-accounting) sage accounting alternative
  - [ ] **C31** [/compare/dubsado](plan/compare.md#c31--comparedubsado) dubsado alternative
  - [ ] **C32** [/compare/17hats](plan/compare.md#c32--compare17hats) 17hats alternative
  - [ ] **C33** [/compare/plutio](plan/compare.md#c33--compareplutio) plutio alternative
  - [ ] **C34** [/compare/moxie](plan/compare.md#c34--comparemoxie) moxie alternative
  - [ ] **C35** [/compare/kashoo](plan/compare.md#c35--comparekashoo) kashoo alternative
  - [ ] **C36** [/compare/invoicera](plan/compare.md#c36--compareinvoicera) invoicera alternative
  - [ ] **C37** [/compare/wix-invoices](plan/compare.md#c37--comparewix-invoices) wix invoices alternative
  - [ ] **C38** [/compare/akaunting](plan/compare.md#c38--compareakaunting) akaunting alternative
  - [ ] **C39** [/compare/due](plan/compare.md#c39--comparedue) due alternative
  - [ ] **C40** [/compare/invoiceberry](plan/compare.md#c40--compareinvoiceberry) invoiceberry alternative

### C41–C48: UK accounting and banking apps

- [ ] **C41–C48** · 0/8 live
  - [ ] **C41** [/compare/freeagent](plan/compare.md#c41--comparefreeagent) freeagent alternative
  - [ ] **C42** [/compare/kashflow](plan/compare.md#c42--comparekashflow) kashflow alternative
  - [ ] **C43** [/compare/crunch](plan/compare.md#c43--comparecrunch) crunch alternative
  - [ ] **C44** [/compare/pandle](plan/compare.md#c44--comparepandle) pandle alternative
  - [ ] **C45** [/compare/tide-invoicing](plan/compare.md#c45--comparetide-invoicing) tide invoicing alternative
  - [ ] **C46** [/compare/countingup](plan/compare.md#c46--comparecountingup) countingup alternative
  - [ ] **C47** [/compare/anna-money](plan/compare.md#c47--compareanna-money) anna money alternative
  - [ ] **C48** [/compare/quickfile](plan/compare.md#c48--comparequickfile) quickfile alternative

### C49–C54: Australia and New Zealand

- [ ] **C49–C54** · 0/6 live
  - [ ] **C49** [/compare/myob](plan/compare.md#c49--comparemyob) myob alternative
  - [ ] **C50** [/compare/reckon](plan/compare.md#c50--comparereckon) reckon one alternative
  - [ ] **C51** [/compare/hnry](plan/compare.md#c51--comparehnry) hnry alternative
  - [ ] **C52** [/compare/fergus](plan/compare.md#c52--comparefergus) fergus software alternative
  - [ ] **C53** [/compare/rounded](plan/compare.md#c53--comparerounded) rounded app alternative
  - [ ] **C54** [/compare/simpro](plan/compare.md#c54--comparesimpro) simpro alternative

### C55–C59: India (GST billing apps)

- [ ] **C55–C59** · 0/5 live
  - [ ] **C55** [/compare/vyapar](plan/compare.md#c55--comparevyapar) vyapar alternative
  - [ ] **C56** [/compare/refrens](plan/compare.md#c56--comparerefrens) refrens alternative
  - [ ] **C57** [/compare/mybillbook](plan/compare.md#c57--comparemybillbook) mybillbook alternative
  - [ ] **C58** [/compare/swipe](plan/compare.md#c58--compareswipe) swipe billing alternative
  - [ ] **C59** [/compare/tallyprime](plan/compare.md#c59--comparetallyprime) tallyprime alternative

### C60–C68: Field service, lawn and pest

- [ ] **C60–C68** · 0/9 live
  - [ ] **C60** [/compare/servicetitan](plan/compare.md#c60--compareservicetitan) servicetitan alternative
  - [ ] **C61** [/compare/workiz](plan/compare.md#c61--compareworkiz) workiz alternative
  - [ ] **C62** [/compare/kickserv](plan/compare.md#c62--comparekickserv) kickserv alternative
  - [ ] **C63** [/compare/gorilladesk](plan/compare.md#c63--comparegorilladesk) gorilladesk alternative
  - [ ] **C64** [/compare/service-fusion](plan/compare.md#c64--compareservice-fusion) service fusion alternative
  - [ ] **C65** [/compare/fieldedge](plan/compare.md#c65--comparefieldedge) fieldedge alternative
  - [ ] **C66** [/compare/yardbook](plan/compare.md#c66--compareyardbook) yardbook alternative
  - [ ] **C67** [/compare/lawnpro](plan/compare.md#c67--comparelawnpro) lawnpro alternative
  - [ ] **C68** [/compare/service-autopilot](plan/compare.md#c68--compareservice-autopilot) service autopilot alternative

### C69–C74: Construction and roofing

- [ ] **C69–C74** · 0/6 live
  - [ ] **C69** [/compare/buildertrend](plan/compare.md#c69--comparebuildertrend) buildertrend alternative
  - [ ] **C70** [/compare/jobnimbus](plan/compare.md#c70--comparejobnimbus) jobnimbus alternative
  - [ ] **C71** [/compare/acculynx](plan/compare.md#c71--compareacculynx) acculynx alternative
  - [ ] **C72** [/compare/contractor-foreman](plan/compare.md#c72--comparecontractor-foreman) contractor foreman alternative
  - [ ] **C73** [/compare/knowify](plan/compare.md#c73--compareknowify) knowify alternative
  - [ ] **C74** [/compare/houzz-pro](plan/compare.md#c74--comparehouzz-pro) houzz pro alternative

### C75–C81: Photographers and creative studios

- [ ] **C75–C81** · 0/7 live
  - [ ] **C75** [/compare/studio-ninja](plan/compare.md#c75--comparestudio-ninja) studio ninja alternative
  - [ ] **C76** [/compare/vsco-workspace](plan/compare.md#c76--comparevsco-workspace) vsco workspace alternative
  - [ ] **C77** [/compare/pixieset-studio-manager](plan/compare.md#c77--comparepixieset-studio-manager) pixieset studio manager alternative
  - [ ] **C78** [/compare/sprout-studio](plan/compare.md#c78--comparesprout-studio) sprout studio alternative
  - [ ] **C79** [/compare/hectic](plan/compare.md#c79--comparehectic) hectic app alternative
  - [ ] **C80** [/compare/paymo](plan/compare.md#c80--comparepaymo) paymo alternative
  - [ ] **C81** [/compare/indy](plan/compare.md#c81--compareindy) indy app alternative

### C82–C87: Payments and banks

- [ ] **C82–C87** · 0/6 live
  - [ ] **C82** [/compare/wise-invoices](plan/compare.md#c82--comparewise-invoices) wise invoice alternative
  - [ ] **C83** [/compare/payoneer](plan/compare.md#c83--comparepayoneer) payoneer alternative
  - [ ] **C84** [/compare/gocardless](plan/compare.md#c84--comparegocardless) gocardless alternative
  - [ ] **C85** [/compare/melio](plan/compare.md#c85--comparemelio) melio alternative
  - [ ] **C86** [/compare/bill-com](plan/compare.md#c86--comparebill-com) bill.com alternative
  - [ ] **C87** [/compare/helcim](plan/compare.md#c87--comparehelcim) helcim alternative

### C88–C92: Invoice apps and design tools

- [ ] **C88–C92** · 0/5 live
  - [ ] **C88** [/compare/saldo-invoice](plan/compare.md#c88--comparesaldo-invoice) saldo invoice alternative
  - [ ] **C89** [/compare/invoice-asap](plan/compare.md#c89--compareinvoice-asap) invoice asap alternative
  - [ ] **C90** [/compare/invoice-owl](plan/compare.md#c90--compareinvoice-owl) invoice owl alternative
  - [ ] **C91** [/compare/canva-invoice](plan/compare.md#c91--comparecanva-invoice) canva invoice alternative
  - [ ] **C92** [/compare/adobe-express-invoice](plan/compare.md#c92--compareadobe-express-invoice) adobe express invoice alternative

### C93–C97: Small-business accounting

- [ ] **C93–C97** · 0/5 live
  - [ ] **C93** [/compare/patriot-software](plan/compare.md#c93--comparepatriot-software) patriot software alternative
  - [ ] **C94** [/compare/bench](plan/compare.md#c94--comparebench) bench accounting alternative
  - [ ] **C95** [/compare/zipbooks](plan/compare.md#c95--comparezipbooks) zipbooks alternative
  - [ ] **C96** [/compare/manager-io](plan/compare.md#c96--comparemanager-io) manager.io alternative
  - [ ] **C97** [/compare/odoo-invoicing](plan/compare.md#c97--compareodoo-invoicing) odoo invoicing alternative

## Free tools (TL)

Rules: [RULES.md § TL · Free tools](RULES.md#tl--free-tools) · every brief: [plan/tools.md](plan/tools.md)

### TL1–TL4: Free tools built before the plan (hub, VAT, hours, hourly rate)

- [x] **TL1–TL4** · 4/4 live · [languages](#tl1tl4-in-every-language): 40/40
  - [x] **TL1** [/tools](https://invoicor.com/tools) free invoicing tools
  - [x] **TL2** [/tools/vat-calculator](https://invoicor.com/tools/vat-calculator) vat calculator
  - [x] **TL3** [/tools/hours-calculator](https://invoicor.com/tools/hours-calculator) hours calculator
  - [x] **TL4** [/tools/hourly-rate-calculator](https://invoicor.com/tools/hourly-rate-calculator) freelance hourly rate calculator

### TL5–TL15: Free tools I

- [ ] **TL5–TL15** · 0/11 live · [languages](#tl5tl15-in-every-language): 0/90
  - [ ] **TL5** [/tools/iban-checker](plan/tools.md#tl5--toolsiban-checker) iban checker
  - [ ] **TL6** [/tools/late-payment-interest-calculator](plan/tools.md#tl6--toolslate-payment-interest-calculator) late payment interest calculator
  - [ ] **TL7** [/tools/due-date-calculator](plan/tools.md#tl7--toolsdue-date-calculator) invoice due date calculator
  - [ ] **TL8** [/tools/invoice-number-generator](plan/tools.md#tl8--toolsinvoice-number-generator) invoice number generator
  - [ ] **TL9** [/tools/discount-calculator](plan/tools.md#tl9--toolsdiscount-calculator) discount calculator
  - [ ] **TL10** [/tools/markup-calculator](plan/tools.md#tl10--toolsmarkup-calculator) markup calculator
  - [ ] **TL11** [/tools/profit-margin-calculator](plan/tools.md#tl11--toolsprofit-margin-calculator) profit margin calculator
  - [ ] **TL12** [/tools/deposit-calculator](plan/tools.md#tl12--toolsdeposit-calculator) deposit calculator
  - [ ] **TL13** [/tools/retainage-calculator](plan/tools.md#tl13--toolsretainage-calculator) retainage calculator
  - [ ] **TL14** [/tools/sales-tax-calculator](plan/tools.md#tl14--toolssales-tax-calculator) sales tax calculator
  - [ ] **TL15** [/tools/vat-number-checker](plan/tools.md#tl15--toolsvat-number-checker) eu vat number checker

### TL16–TL25: Free tools II

- [ ] **TL16–TL25** · 0/10 live · [languages](#tl16tl25-in-every-language): 0/80
  - [ ] **TL16** [/tools/mileage-reimbursement-calculator](plan/tools.md#tl16--toolsmileage-reimbursement-calculator) mileage reimbursement calculator
  - [ ] **TL17** [/tools/hourly-to-salary-calculator](plan/tools.md#tl17--toolshourly-to-salary-calculator) hourly to salary calculator
  - [ ] **TL18** [/tools/day-rate-calculator](plan/tools.md#tl18--toolsday-rate-calculator) day rate calculator
  - [ ] **TL19** [/tools/overtime-calculator](plan/tools.md#tl19--toolsovertime-calculator) overtime calculator
  - [ ] **TL20** [/tools/price-per-square-foot-calculator](plan/tools.md#tl20--toolsprice-per-square-foot-calculator) price per square foot calculator
  - [ ] **TL21** [/tools/break-even-calculator](plan/tools.md#tl21--toolsbreak-even-calculator) break even calculator
  - [ ] **TL22** [/tools/late-fee-calculator](plan/tools.md#tl22--toolslate-fee-calculator) late fee calculator
  - [ ] **TL23** [/tools/price-increase-calculator](plan/tools.md#tl23--toolsprice-increase-calculator) price increase calculator
  - [ ] **TL24** [/tools/commission-calculator](plan/tools.md#tl24--toolscommission-calculator) commission calculator
  - [ ] **TL25** [/tools/utilization-rate-calculator](plan/tools.md#tl25--toolsutilization-rate-calculator) utilization rate calculator

### TL26–TL45: Pricing calculators for trades

- [ ] **TL26–TL45** · 0/20 live · needs task S4 · [languages](#tl26tl45-in-every-language): 0/200
  - [ ] **TL26** [/tools/house-cleaning-pricing-calculator](plan/tools.md#tl26--toolshouse-cleaning-pricing-calculator) house cleaning pricing calculator
  - [ ] **TL27** [/tools/lawn-mowing-pricing-calculator](plan/tools.md#tl27--toolslawn-mowing-pricing-calculator) lawn mowing pricing calculator
  - [ ] **TL28** [/tools/pressure-washing-pricing-calculator](plan/tools.md#tl28--toolspressure-washing-pricing-calculator) pressure washing pricing calculator
  - [ ] **TL29** [/tools/painting-cost-calculator](plan/tools.md#tl29--toolspainting-cost-calculator) painting cost calculator
  - [ ] **TL30** [/tools/window-cleaning-pricing-calculator](plan/tools.md#tl30--toolswindow-cleaning-pricing-calculator) window cleaning pricing calculator
  - [ ] **TL31** [/tools/snow-removal-pricing-calculator](plan/tools.md#tl31--toolssnow-removal-pricing-calculator) snow plowing pricing calculator
  - [ ] **TL32** [/tools/carpet-cleaning-pricing-calculator](plan/tools.md#tl32--toolscarpet-cleaning-pricing-calculator) carpet cleaning pricing calculator
  - [ ] **TL33** [/tools/moving-company-pricing-calculator](plan/tools.md#tl33--toolsmoving-company-pricing-calculator) moving company pricing calculator
  - [ ] **TL34** [/tools/junk-removal-pricing-calculator](plan/tools.md#tl34--toolsjunk-removal-pricing-calculator) junk removal pricing calculator
  - [ ] **TL35** [/tools/photography-pricing-calculator](plan/tools.md#tl35--toolsphotography-pricing-calculator) photography pricing calculator
  - [ ] **TL36** [/tools/drywall-estimate-calculator](plan/tools.md#tl36--toolsdrywall-estimate-calculator) drywall estimate calculator
  - [ ] **TL37** [/tools/flooring-installation-cost-calculator](plan/tools.md#tl37--toolsflooring-installation-cost-calculator) flooring installation cost calculator
  - [ ] **TL38** [/tools/tile-installation-cost-calculator](plan/tools.md#tl38--toolstile-installation-cost-calculator) tile installation cost calculator
  - [ ] **TL39** [/tools/fence-installation-cost-calculator](plan/tools.md#tl39--toolsfence-installation-cost-calculator) fence installation cost calculator
  - [ ] **TL40** [/tools/deck-building-cost-calculator](plan/tools.md#tl40--toolsdeck-building-cost-calculator) deck cost calculator
  - [ ] **TL41** [/tools/roofing-estimate-calculator](plan/tools.md#tl41--toolsroofing-estimate-calculator) roofing estimate calculator
  - [ ] **TL42** [/tools/concrete-cost-calculator](plan/tools.md#tl42--toolsconcrete-cost-calculator) concrete cost calculator
  - [ ] **TL43** [/tools/pool-cleaning-pricing-calculator](plan/tools.md#tl43--toolspool-cleaning-pricing-calculator) pool cleaning pricing calculator
  - [ ] **TL44** [/tools/catering-cost-calculator](plan/tools.md#tl44--toolscatering-cost-calculator) catering cost calculator
  - [ ] **TL45** [/tools/cake-pricing-calculator](plan/tools.md#tl45--toolscake-pricing-calculator) cake pricing calculator

### TL46–TL54: VAT and GST calculators per country (English)

- [ ] **TL46–TL54** · 0/9 live
  - [ ] **TL46** [/tools/uk-vat-calculator](plan/tools.md#tl46--toolsuk-vat-calculator) uk vat calculator
  - [ ] **TL47** [/tools/ireland-vat-calculator](plan/tools.md#tl47--toolsireland-vat-calculator) ireland vat calculator
  - [ ] **TL48** [/tools/south-africa-vat-calculator](plan/tools.md#tl48--toolssouth-africa-vat-calculator) south africa vat calculator
  - [ ] **TL49** [/tools/uae-vat-calculator](plan/tools.md#tl49--toolsuae-vat-calculator) uae vat calculator
  - [ ] **TL50** [/tools/australia-gst-calculator](plan/tools.md#tl50--toolsaustralia-gst-calculator) australia gst calculator
  - [ ] **TL51** [/tools/nz-gst-calculator](plan/tools.md#tl51--toolsnz-gst-calculator) nz gst calculator
  - [ ] **TL52** [/tools/singapore-gst-calculator](plan/tools.md#tl52--toolssingapore-gst-calculator) singapore gst calculator
  - [ ] **TL53** [/tools/india-gst-calculator](plan/tools.md#tl53--toolsindia-gst-calculator) india gst calculator
  - [ ] **TL54** [/tools/canada-gst-hst-calculator](plan/tools.md#tl54--toolscanada-gst-hst-calculator) canada gst hst calculator

### TL55–TL62: Tax tools for the self-employed

- [ ] **TL55–TL62** · 0/8 live · [languages](#tl55tl62-in-every-language): 0/30
  - [ ] **TL55** [/tools/self-employment-tax-calculator](plan/tools.md#tl55--toolsself-employment-tax-calculator) self employment tax calculator
  - [ ] **TL56** [/tools/quarterly-estimated-tax-calculator](plan/tools.md#tl56--toolsquarterly-estimated-tax-calculator) quarterly estimated tax calculator
  - [ ] **TL57** [/tools/1099-vs-w2-calculator](plan/tools.md#tl57--tools1099-vs-w2-calculator) 1099 vs w2 calculator
  - [ ] **TL58** [/tools/vat-threshold-checker](plan/tools.md#tl58--toolsvat-threshold-checker) vat threshold calculator
  - [ ] **TL59** [/tools/flat-rate-vat-calculator](plan/tools.md#tl59--toolsflat-rate-vat-calculator) flat rate vat calculator
  - [ ] **TL60** [/tools/cis-deduction-calculator](plan/tools.md#tl60--toolscis-deduction-calculator) cis deduction calculator
  - [ ] **TL61** [/tools/reverse-charge-checker](plan/tools.md#tl61--toolsreverse-charge-checker) reverse charge checker
  - [ ] **TL62** [/tools/invoice-requirements-checker](plan/tools.md#tl62--toolsinvoice-requirements-checker) invoice requirements checker

### TL63–TL75: Payment fees, terms and payment details

- [ ] **TL63–TL75** · 0/13 live · [languages](#tl63tl75-in-every-language): 0/130
  - [ ] **TL63** [/tools/paypal-fee-calculator](plan/tools.md#tl63--toolspaypal-fee-calculator) paypal fee calculator
  - [ ] **TL64** [/tools/stripe-fee-calculator](plan/tools.md#tl64--toolsstripe-fee-calculator) stripe fee calculator
  - [ ] **TL65** [/tools/square-fee-calculator](plan/tools.md#tl65--toolssquare-fee-calculator) square fee calculator
  - [ ] **TL66** [/tools/credit-card-surcharge-calculator](plan/tools.md#tl66--toolscredit-card-surcharge-calculator) credit card surcharge calculator
  - [ ] **TL67** [/tools/early-payment-discount-calculator](plan/tools.md#tl67--toolsearly-payment-discount-calculator) early payment discount calculator
  - [ ] **TL68** [/tools/invoice-factoring-calculator](plan/tools.md#tl68--toolsinvoice-factoring-calculator) invoice factoring calculator
  - [ ] **TL69** [/tools/prorated-invoice-calculator](plan/tools.md#tl69--toolsprorated-invoice-calculator) prorated invoice calculator
  - [ ] **TL70** [/tools/business-days-calculator](plan/tools.md#tl70--toolsbusiness-days-calculator) business days calculator
  - [ ] **TL71** [/tools/dso-calculator](plan/tools.md#tl71--toolsdso-calculator) days sales outstanding calculator
  - [ ] **TL72** [/tools/sepa-qr-code-generator](plan/tools.md#tl72--toolssepa-qr-code-generator) sepa qr code generator
  - [ ] **TL73** [/tools/swiss-qr-bill-generator](plan/tools.md#tl73--toolsswiss-qr-bill-generator) swiss qr bill generator
  - [ ] **TL74** [/tools/amount-in-words-converter](plan/tools.md#tl74--toolsamount-in-words-converter) amount in words converter
  - [ ] **TL75** [/tools/invoice-currency-converter](plan/tools.md#tl75--toolsinvoice-currency-converter) invoice currency converter

### TL76–TL90: Job costing and materials for contractors

- [ ] **TL76–TL90** · 0/15 live · needs task S4 · [languages](#tl76tl90-in-every-language): 0/130
  - [ ] **TL76** [/tools/job-costing-calculator](plan/tools.md#tl76--toolsjob-costing-calculator) job costing calculator
  - [ ] **TL77** [/tools/overhead-rate-calculator](plan/tools.md#tl77--toolsoverhead-rate-calculator) overhead rate calculator
  - [ ] **TL78** [/tools/labor-burden-calculator](plan/tools.md#tl78--toolslabor-burden-calculator) labor burden calculator
  - [ ] **TL79** [/tools/equipment-cost-per-hour-calculator](plan/tools.md#tl79--toolsequipment-cost-per-hour-calculator) equipment cost per hour calculator
  - [ ] **TL80** [/tools/board-feet-calculator](plan/tools.md#tl80--toolsboard-feet-calculator) board feet calculator
  - [ ] **TL81** [/tools/cubic-yard-calculator](plan/tools.md#tl81--toolscubic-yard-calculator) cubic yard calculator
  - [ ] **TL82** [/tools/insulation-cost-calculator](plan/tools.md#tl82--toolsinsulation-cost-calculator) insulation cost calculator
  - [ ] **TL83** [/tools/siding-cost-calculator](plan/tools.md#tl83--toolssiding-cost-calculator) siding cost calculator
  - [ ] **TL84** [/tools/paver-cost-calculator](plan/tools.md#tl84--toolspaver-cost-calculator) paver cost calculator
  - [ ] **TL85** [/tools/retaining-wall-cost-calculator](plan/tools.md#tl85--toolsretaining-wall-cost-calculator) retaining wall cost calculator
  - [ ] **TL86** [/tools/landscape-material-calculator](plan/tools.md#tl86--toolslandscape-material-calculator) landscape material calculator
  - [ ] **TL87** [/tools/sod-cost-calculator](plan/tools.md#tl87--toolssod-cost-calculator) sod cost calculator
  - [ ] **TL88** [/tools/gutter-installation-cost-calculator](plan/tools.md#tl88--toolsgutter-installation-cost-calculator) gutter installation cost calculator
  - [ ] **TL89** [/tools/epoxy-floor-cost-calculator](plan/tools.md#tl89--toolsepoxy-floor-cost-calculator) epoxy floor cost calculator
  - [ ] **TL90** [/tools/wallpaper-calculator](plan/tools.md#tl90--toolswallpaper-calculator) wallpaper calculator

### TL91–TL106: Pricing calculators II: services and transport

- [ ] **TL91–TL106** · 0/16 live · needs task S4 · [languages](#tl91tl106-in-every-language): 0/140
  - [ ] **TL91** [/tools/janitorial-bidding-calculator](plan/tools.md#tl91--toolsjanitorial-bidding-calculator) janitorial bidding calculator
  - [ ] **TL92** [/tools/gutter-cleaning-pricing-calculator](plan/tools.md#tl92--toolsgutter-cleaning-pricing-calculator) gutter cleaning pricing calculator
  - [ ] **TL93** [/tools/pest-control-pricing-calculator](plan/tools.md#tl93--toolspest-control-pricing-calculator) pest control pricing calculator
  - [ ] **TL94** [/tools/pet-sitting-pricing-calculator](plan/tools.md#tl94--toolspet-sitting-pricing-calculator) pet sitting pricing calculator
  - [ ] **TL95** [/tools/dog-grooming-pricing-calculator](plan/tools.md#tl95--toolsdog-grooming-pricing-calculator) dog grooming pricing calculator
  - [ ] **TL96** [/tools/auto-detailing-pricing-calculator](plan/tools.md#tl96--toolsauto-detailing-pricing-calculator) auto detailing pricing calculator
  - [ ] **TL97** [/tools/courier-delivery-pricing-calculator](plan/tools.md#tl97--toolscourier-delivery-pricing-calculator) courier delivery pricing calculator
  - [ ] **TL98** [/tools/event-planner-fee-calculator](plan/tools.md#tl98--toolsevent-planner-fee-calculator) event planner fee calculator
  - [ ] **TL99** [/tools/florist-pricing-calculator](plan/tools.md#tl99--toolsflorist-pricing-calculator) florist pricing calculator
  - [ ] **TL100** [/tools/translation-cost-calculator](plan/tools.md#tl100--toolstranslation-cost-calculator) translation cost calculator
  - [ ] **TL101** [/tools/transcription-cost-calculator](plan/tools.md#tl101--toolstranscription-cost-calculator) transcription cost calculator
  - [ ] **TL102** [/tools/voice-over-rate-calculator](plan/tools.md#tl102--toolsvoice-over-rate-calculator) voice over rate calculator
  - [ ] **TL103** [/tools/copywriting-rate-calculator](plan/tools.md#tl103--toolscopywriting-rate-calculator) copywriting rate calculator
  - [ ] **TL104** [/tools/trucking-cost-per-mile-calculator](plan/tools.md#tl104--toolstrucking-cost-per-mile-calculator) trucking cost per mile calculator
  - [ ] **TL105** [/tools/fuel-surcharge-calculator](plan/tools.md#tl105--toolsfuel-surcharge-calculator) fuel surcharge calculator
  - [ ] **TL106** [/tools/detention-pay-calculator](plan/tools.md#tl106--toolsdetention-pay-calculator) detention pay calculator

### TL107–TL113: Pricing calculators III: makers and production

- [ ] **TL107–TL113** · 0/7 live · needs task S4 · [languages](#tl107tl113-in-every-language): 0/70
  - [ ] **TL107** [/tools/3d-printing-cost-calculator](plan/tools.md#tl107--tools3d-printing-cost-calculator) 3d printing cost calculator
  - [ ] **TL108** [/tools/screen-printing-pricing-calculator](plan/tools.md#tl108--toolsscreen-printing-pricing-calculator) screen printing pricing calculator
  - [ ] **TL109** [/tools/embroidery-pricing-calculator](plan/tools.md#tl109--toolsembroidery-pricing-calculator) embroidery pricing calculator
  - [ ] **TL110** [/tools/wholesale-price-calculator](plan/tools.md#tl110--toolswholesale-price-calculator) wholesale price calculator
  - [ ] **TL111** [/tools/etsy-fee-calculator](plan/tools.md#tl111--toolsetsy-fee-calculator) etsy fee calculator
  - [ ] **TL112** [/tools/upholstery-fabric-calculator](plan/tools.md#tl112--toolsupholstery-fabric-calculator) upholstery fabric calculator
  - [ ] **TL113** [/tools/laser-engraving-pricing-calculator](plan/tools.md#tl113--toolslaser-engraving-pricing-calculator) laser engraving pricing calculator

## Country pages (English) (CT)

Rules: [RULES.md § CT · Country pages (English)](RULES.md#ct--country-pages-english) · every brief: [plan/country.md](plan/country.md)

### CT1–CT7: Country pages I (English-speaking countries + EU reverse charge)

- [ ] **CT1–CT7** · 0/7 live · needs task S3 · [languages](#ct1ct7-in-every-language): 0/10
  - [ ] **CT1** [/invoice-generator-uk](plan/country.md#ct1--invoice-generator-uk) uk vat invoice requirements
  - [ ] **CT2** [/invoice-generator-ireland](plan/country.md#ct2--invoice-generator-ireland) vat invoice ireland
  - [ ] **CT3** [/invoice-generator-australia](plan/country.md#ct3--invoice-generator-australia) tax invoice australia
  - [ ] **CT4** [/invoice-generator-new-zealand](plan/country.md#ct4--invoice-generator-new-zealand) gst invoice nz
  - [ ] **CT5** [/invoice-generator-canada](plan/country.md#ct5--invoice-generator-canada) gst hst invoice canada
  - [ ] **CT6** [/invoice-generator-south-africa](plan/country.md#ct6--invoice-generator-south-africa) vat invoice south africa
  - [ ] **CT7** [/reverse-charge-invoice](plan/country.md#ct7--reverse-charge-invoice) eu reverse charge invoice

### CT8–CT13: Country pages II

- [ ] **CT8–CT13** · 0/6 live · needs task S3
  - [ ] **CT8** [/invoice-generator-singapore](plan/country.md#ct8--invoice-generator-singapore) gst invoice singapore
  - [ ] **CT9** [/invoice-generator-nigeria](plan/country.md#ct9--invoice-generator-nigeria) vat invoice nigeria
  - [ ] **CT10** [/invoice-generator-uae](plan/country.md#ct10--invoice-generator-uae) tax invoice uae
  - [ ] **CT11** [/invoice-generator-malta](plan/country.md#ct11--invoice-generator-malta) vat invoice malta
  - [ ] **CT12** [/invoice-generator-hong-kong](plan/country.md#ct12--invoice-generator-hong-kong) invoice template hong kong
  - [ ] **CT13** [/invoice-generator-switzerland](plan/country.md#ct13--invoice-generator-switzerland) vat invoice switzerland

### CT14–CT23: European countries in English (for foreign freelancers)

- [ ] **CT14–CT23** · 0/10 live · needs task S3
  - [ ] **CT14** [/invoice-generator-germany](plan/country.md#ct14--invoice-generator-germany) invoice requirements germany
  - [ ] **CT15** [/invoice-generator-netherlands](plan/country.md#ct15--invoice-generator-netherlands) invoice requirements netherlands
  - [ ] **CT16** [/invoice-generator-france](plan/country.md#ct16--invoice-generator-france) invoice requirements france
  - [ ] **CT17** [/invoice-generator-spain](plan/country.md#ct17--invoice-generator-spain) invoice requirements spain
  - [ ] **CT18** [/invoice-generator-austria](plan/country.md#ct18--invoice-generator-austria) invoice requirements austria
  - [ ] **CT19** [/invoice-generator-sweden](plan/country.md#ct19--invoice-generator-sweden) invoice requirements sweden
  - [ ] **CT20** [/invoice-generator-denmark](plan/country.md#ct20--invoice-generator-denmark) invoice requirements denmark
  - [ ] **CT21** [/invoice-generator-norway](plan/country.md#ct21--invoice-generator-norway) invoice requirements norway
  - [ ] **CT22** [/invoice-generator-finland](plan/country.md#ct22--invoice-generator-finland) invoice requirements finland
  - [ ] **CT23** [/invoice-generator-cyprus](plan/country.md#ct23--invoice-generator-cyprus) invoice requirements cyprus

### CT24–CT31: More EU countries in English (none of our languages)

- [ ] **CT24–CT31** · 0/8 live · needs task S3
  - [ ] **CT24** [/invoice-generator-luxembourg](plan/country.md#ct24--invoice-generator-luxembourg) invoice requirements luxembourg
  - [ ] **CT25** [/invoice-generator-estonia](plan/country.md#ct25--invoice-generator-estonia) invoice requirements estonia
  - [ ] **CT26** [/invoice-generator-lithuania](plan/country.md#ct26--invoice-generator-lithuania) invoice requirements lithuania
  - [ ] **CT27** [/invoice-generator-latvia](plan/country.md#ct27--invoice-generator-latvia) invoice requirements latvia
  - [ ] **CT28** [/invoice-generator-slovakia](plan/country.md#ct28--invoice-generator-slovakia) invoice requirements slovakia
  - [ ] **CT29** [/invoice-generator-slovenia](plan/country.md#ct29--invoice-generator-slovenia) invoice requirements slovenia
  - [ ] **CT30** [/invoice-generator-bulgaria](plan/country.md#ct30--invoice-generator-bulgaria) invoice requirements bulgaria
  - [ ] **CT31** [/invoice-generator-czech-republic](plan/country.md#ct31--invoice-generator-czech-republic) invoice requirements czech republic

### CT32–CT35: India, Japan, Thailand and Quebec

- [ ] **CT32–CT35** · 0/4 live · needs task S3
  - [ ] **CT32** [/invoice-generator-india](plan/country.md#ct32--invoice-generator-india) gst invoice format india
  - [ ] **CT33** [/invoice-generator-japan](plan/country.md#ct33--invoice-generator-japan) qualified invoice japan
  - [ ] **CT34** [/invoice-generator-thailand](plan/country.md#ct34--invoice-generator-thailand) tax invoice thailand
  - [ ] **CT35** [/invoice-generator-quebec](plan/country.md#ct35--invoice-generator-quebec) quebec invoice requirements

### CT36–CT39: Cross-border invoicing (UK, EU, US)

- [ ] **CT36–CT39** · 0/4 live · needs task S3
  - [ ] **CT36** [/eu-client-from-uk](plan/country.md#ct36--eu-client-from-uk) invoice eu client from uk
  - [ ] **CT37** [/us-client-from-europe](plan/country.md#ct37--us-client-from-europe) invoice us client from europe
  - [ ] **CT38** [/uk-client-from-eu](plan/country.md#ct38--uk-client-from-eu) invoice uk client from eu
  - [ ] **CT39** [/oss-invoice](plan/country.md#ct39--oss-invoice) oss invoice

## Local pages (in the country's own language) (LO)

Rules: [RULES.md § LO · Local pages (in the country's own language)](RULES.md#lo--local-pages-in-the-countrys-own-language) · every brief: [plan/local.md](plan/local.md)

### LO1–LO12: Invoice rules per country, in its own language

- [ ] **LO1–LO12** · 0/12 live · needs task S3 · it, pt, pl stay on hold (e-invoicing)
  - [ ] **LO1** [/de/rechnung-pflichtangaben](plan/local.md#lo1--derechnung-pflichtangaben) pflichtangaben rechnung
  - [ ] **LO2** [/nl/factuureisen](plan/local.md#lo2--nlfactuureisen) factuureisen
  - [ ] **LO3** [/fr/mentions-obligatoires-facture](plan/local.md#lo3--frmentions-obligatoires-facture) mentions obligatoires facture
  - [ ] **LO4** [/es/requisitos-factura](plan/local.md#lo4--esrequisitos-factura) requisitos de una factura
  - [ ] **LO5** [/sv/vad-ska-sta-pa-en-faktura](plan/local.md#lo5--svvad-ska-sta-pa-en-faktura) vad ska stå på en faktura
  - [ ] **LO6** [/da/krav-til-faktura](plan/local.md#lo6--dakrav-til-faktura) krav til faktura
  - [ ] **LO7** [/nb/krav-til-faktura](plan/local.md#lo7--nbkrav-til-faktura) krav til faktura
  - [ ] **LO8** [/de/kleinbetragsrechnung](plan/local.md#lo8--dekleinbetragsrechnung) kleinbetragsrechnung
  - [ ] **LO9** [/de/handwerkerrechnung](plan/local.md#lo9--dehandwerkerrechnung) handwerkerrechnung steuer absetzen
  - [ ] **LO10** [/es/factura-simplificada](plan/local.md#lo10--esfactura-simplificada) factura simplificada
  - [ ] **LO11** [/sv/rot-och-rut-avdrag-faktura](plan/local.md#lo11--svrot-och-rut-avdrag-faktura) rot avdrag faktura
  - [ ] **LO12** [/da/haandvaerkerfradrag-faktura](plan/local.md#lo12--dahaandvaerkerfradrag-faktura) håndværkerfradrag faktura

### LO13–LO32: Local rivals, in their own language (HL9)

- [ ] **LO13–LO32** · 0/20 live
  - [ ] **LO13** [/nl/moneybird-alternatief](plan/local.md#lo13--nlmoneybird-alternatief) moneybird alternatief
  - [ ] **LO14** [/nl/e-boekhouden-alternatief](plan/local.md#lo14--nle-boekhouden-alternatief) e-boekhouden alternatief
  - [ ] **LO15** [/nl/jortt-alternatief](plan/local.md#lo15--nljortt-alternatief) jortt alternatief
  - [ ] **LO16** [/de/lexware-office-alternative](plan/local.md#lo16--delexware-office-alternative) lexware office alternative
  - [ ] **LO17** [/de/sevdesk-alternative](plan/local.md#lo17--desevdesk-alternative) sevdesk alternative
  - [ ] **LO18** [/de/fastbill-alternative](plan/local.md#lo18--defastbill-alternative) fastbill alternative
  - [ ] **LO19** [/fr/alternative-facture-net](plan/local.md#lo19--fralternative-facture-net) alternative facture.net
  - [ ] **LO20** [/fr/alternative-tiime](plan/local.md#lo20--fralternative-tiime) alternative tiime
  - [ ] **LO21** [/fr/alternative-henrri](plan/local.md#lo21--fralternative-henrri) alternative henrri
  - [ ] **LO22** [/es/alternativa-holded](plan/local.md#lo22--esalternativa-holded) alternativa a holded
  - [ ] **LO23** [/es/alternativa-quipu](plan/local.md#lo23--esalternativa-quipu) alternativa a quipu
  - [ ] **LO24** [/es/alternativa-billin](plan/local.md#lo24--esalternativa-billin) alternativa a billin
  - [ ] **LO25** [/sv/fortnox-alternativ](plan/local.md#lo25--svfortnox-alternativ) fortnox alternativ
  - [ ] **LO26** [/sv/bokio-alternativ](plan/local.md#lo26--svbokio-alternativ) bokio alternativ
  - [ ] **LO27** [/sv/visma-eekonomi-alternativ](plan/local.md#lo27--svvisma-eekonomi-alternativ) visma eekonomi alternativ
  - [ ] **LO28** [/da/billy-alternativ](plan/local.md#lo28--dabilly-alternativ) billy alternativ
  - [ ] **LO29** [/da/dinero-alternativ](plan/local.md#lo29--dadinero-alternativ) dinero alternativ
  - [ ] **LO30** [/da/e-conomic-alternativ](plan/local.md#lo30--dae-conomic-alternativ) e-conomic alternativ
  - [ ] **LO31** [/nb/fiken-alternativ](plan/local.md#lo31--nbfiken-alternativ) fiken alternativ
  - [ ] **LO32** [/nb/conta-alternativ](plan/local.md#lo32--nbconta-alternativ) conta alternativ

### LO33–LO40: Payment reminders and the fees the law allows

- [ ] **LO33–LO40** · 0/8 live · needs task S3
  - [ ] **LO33** [/de/mahnung-schreiben](plan/local.md#lo33--demahnung-schreiben) mahnung schreiben
  - [ ] **LO34** [/nl/betalingsherinnering](plan/local.md#lo34--nlbetalingsherinnering) betalingsherinnering sturen
  - [ ] **LO35** [/nl/incassokosten-berekenen](plan/local.md#lo35--nlincassokosten-berekenen) incassokosten berekenen
  - [ ] **LO36** [/fr/relance-facture-impayee](plan/local.md#lo36--frrelance-facture-impayee) relance facture impayée
  - [ ] **LO37** [/es/reclamar-factura-impagada](plan/local.md#lo37--esreclamar-factura-impagada) reclamar factura impagada
  - [ ] **LO38** [/sv/betalningspaminnelse](plan/local.md#lo38--svbetalningspaminnelse) betalningspåminnelse
  - [ ] **LO39** [/da/rykker-faktura](plan/local.md#lo39--darykker-faktura) rykker faktura
  - [ ] **LO40** [/nb/purring-faktura](plan/local.md#lo40--nbpurring-faktura) purring faktura

### LO41–LO45: E-invoicing: when a PDF stops being enough

- [ ] **LO41–LO45** · 0/5 live · needs task S3
  - [ ] **LO41** [/de/e-rechnung-pflicht](plan/local.md#lo41--dee-rechnung-pflicht) e-rechnung pflicht
  - [ ] **LO42** [/fr/facturation-electronique-obligatoire](plan/local.md#lo42--frfacturation-electronique-obligatoire) facturation électronique obligatoire
  - [ ] **LO43** [/es/verifactu-autonomos](plan/local.md#lo43--esverifactu-autonomos) verifactu autónomos
  - [ ] **LO44** [/nl/e-facturatie-verplicht-belgie](plan/local.md#lo44--nle-facturatie-verplicht-belgie) e-facturatie verplicht belgië
  - [ ] **LO45** [/fr/facturation-electronique-belgique](plan/local.md#lo45--frfacturation-electronique-belgique) facturation électronique belgique

### LO46–LO51: Business numbers on the invoice

- [ ] **LO46–LO51** · 0/6 live · needs task S3
  - [ ] **LO46** [/de/steuernummer-auf-rechnung](plan/local.md#lo46--desteuernummer-auf-rechnung) steuernummer auf rechnung
  - [ ] **LO47** [/nl/kvk-nummer-op-factuur](plan/local.md#lo47--nlkvk-nummer-op-factuur) kvk nummer op factuur
  - [ ] **LO48** [/fr/facture-en-attente-de-siret](plan/local.md#lo48--frfacture-en-attente-de-siret) facture en attente de siret
  - [ ] **LO49** [/sv/f-skatt-faktura](plan/local.md#lo49--svf-skatt-faktura) f-skatt på faktura
  - [ ] **LO50** [/nb/foretaksregisteret-pa-faktura](plan/local.md#lo50--nbforetaksregisteret-pa-faktura) foretaksregisteret på faktura
  - [ ] **LO51** [/da/cvr-nummer-faktura](plan/local.md#lo51--dacvr-nummer-faktura) cvr nummer på faktura

### LO52–LO59: Other countries that share a language (Austria, Switzerland, Quebec, Luxembourg)

- [ ] **LO52–LO59** · 0/8 live · needs task S3
  - [ ] **LO52** [/de/rechnung-oesterreich](plan/local.md#lo52--derechnung-oesterreich) rechnungsmerkmale österreich
  - [ ] **LO53** [/de/honorarnote](plan/local.md#lo53--dehonorarnote) honorarnote
  - [ ] **LO54** [/de/rechnung-schweiz](plan/local.md#lo54--derechnung-schweiz) mwst rechnung schweiz
  - [ ] **LO55** [/fr/facture-suisse](plan/local.md#lo55--frfacture-suisse) facture suisse mentions obligatoires
  - [ ] **LO56** [/it/fattura-svizzera](plan/local.md#lo56--itfattura-svizzera) fattura svizzera requisiti
  - [ ] **LO57** [/fr/facture-quebec-tps-tvq](plan/local.md#lo57--frfacture-quebec-tps-tvq) facture tps tvq
  - [ ] **LO58** [/fr/facture-travailleur-autonome](plan/local.md#lo58--frfacture-travailleur-autonome) facture travailleur autonome
  - [ ] **LO59** [/fr/facture-luxembourg](plan/local.md#lo59--frfacture-luxembourg) facture luxembourg mentions obligatoires

### LO60–LO66: More local rules (Germany, France, Spain)

- [ ] **LO60–LO66** · 0/7 live · needs task S3
  - [ ] **LO60** [/de/leistungsdatum-rechnung](plan/local.md#lo60--deleistungsdatum-rechnung) leistungsdatum rechnung
  - [ ] **LO61** [/de/aufbewahrungspflicht-hinweis-rechnung](plan/local.md#lo61--deaufbewahrungspflicht-hinweis-rechnung) aufbewahrungspflicht hinweis rechnung
  - [ ] **LO62** [/de/rechnung-korrigieren](plan/local.md#lo62--derechnung-korrigieren) rechnung korrigieren
  - [ ] **LO63** [/fr/mention-assurance-decennale-facture](plan/local.md#lo63--frmention-assurance-decennale-facture) mention assurance décennale facture
  - [ ] **LO64** [/fr/delai-de-paiement-legal](plan/local.md#lo64--frdelai-de-paiement-legal) délai de paiement légal facture
  - [ ] **LO65** [/es/factura-con-retencion-irpf](plan/local.md#lo65--esfactura-con-retencion-irpf) factura con retención irpf
  - [ ] **LO66** [/es/recargo-de-equivalencia-factura](plan/local.md#lo66--esrecargo-de-equivalencia-factura) recargo de equivalencia factura

### LO67–LO71: Payment reference numbers (Sweden, Norway, Denmark, Belgium)

- [ ] **LO67–LO71** · 0/5 live · needs task S3 · needs tool code
  - [ ] **LO67** [/sv/ocr-nummer-generator](plan/local.md#lo67--svocr-nummer-generator) ocr nummer generator
  - [ ] **LO68** [/nb/kid-nummer-generator](plan/local.md#lo68--nbkid-nummer-generator) kid nummer generator
  - [ ] **LO69** [/da/fik-nummer](plan/local.md#lo69--dafik-nummer) fik nummer
  - [ ] **LO70** [/nl/gestructureerde-mededeling-generator](plan/local.md#lo70--nlgestructureerde-mededeling-generator) gestructureerde mededeling generator
  - [ ] **LO71** [/fr/communication-structuree-generateur](plan/local.md#lo71--frcommunication-structuree-generateur) communication structurée générateur

## Generators (G)

Rules: [RULES.md § G · Generators](RULES.md#g--generators) · every brief: [plan/generators.md](plan/generators.md)

### G1–G1: The free invoice generator (built)

- [x] **G1–G1** · 1/1 live · [languages](#g1g1-in-every-language): 10/10
  - [x] **G1** [/free-invoice-generator](https://invoicor.com/free-invoice-generator) free invoice generator

### G2–G5: Document generators (receipt, estimate, proforma, credit note)

- [ ] **G2–G5** · 0/4 live · [languages](#g2g5-in-every-language): 0/40
  - [ ] **G2** [/free-receipt-generator](plan/generators.md#g2--free-receipt-generator) free receipt generator
  - [ ] **G3** [/free-estimate-generator](plan/generators.md#g3--free-estimate-generator) free estimate generator
  - [ ] **G4** [/free-proforma-invoice-generator](plan/generators.md#g4--free-proforma-invoice-generator) proforma invoice generator
  - [ ] **G5** [/free-credit-note-generator](plan/generators.md#g5--free-credit-note-generator) credit note generator

### G6–G10: Document generators II (purchase order, delivery note, statement, debit note, work order)

- [ ] **G6–G10** · 0/5 live · [languages](#g6g10-in-every-language): 0/50
  - [ ] **G6** [/free-purchase-order-generator](plan/generators.md#g6--free-purchase-order-generator) purchase order generator
  - [ ] **G7** [/free-delivery-note-generator](plan/generators.md#g7--free-delivery-note-generator) delivery note generator
  - [ ] **G8** [/free-statement-of-account-generator](plan/generators.md#g8--free-statement-of-account-generator) statement of account generator
  - [ ] **G9** [/free-debit-note-generator](plan/generators.md#g9--free-debit-note-generator) debit note generator
  - [ ] **G10** [/free-work-order-generator](plan/generators.md#g10--free-work-order-generator) work order generator

## Core pages, hubs, trust and legal (P)

Rules: [RULES.md § P · Core pages, hubs, trust and legal](RULES.md#p--core-pages-hubs-trust-and-legal) · every brief: [plan/core.md](plan/core.md)

### P1–P9: Core pages (built): home, hubs, help, affiliate, terms, privacy, Android

- [x] **P1–P9** · 9/9 live · [languages](#p1p9-in-every-language): 38/80
  - [x] **P1** [/](https://invoicor.com/) invoice app iphone
  - [x] **P2** [/templates](https://invoicor.com/templates) invoice templates
  - [x] **P3** [/industries](https://invoicor.com/industries) invoicing software by industry
  - [x] **P4** [/compare](https://invoicor.com/compare) invoice app alternatives
  - [x] **P5** [/help](https://invoicor.com/help) invoicor help
  - [x] **P6** [/affiliate](https://invoicor.com/affiliate) invoicor affiliate program
  - [x] **P7** [/terms](https://invoicor.com/terms) invoicor terms of service
  - [x] **P8** [/privacy](https://invoicor.com/privacy) invoicor privacy policy
  - [x] **P9** [/android](https://invoicor.com/android) invoicor for android: coming soon

### P10–P11: Trust pages: about, contact (E-E-A-T)

- [x] **P10–P11** · 2/2 live · [languages](#p10p11-in-every-language): 20/20
  - [x] **P10** [/about](https://invoicor.com/about) about invoicor
  - [x] **P11** [/contact](https://invoicor.com/contact) contact invoicor

### P12–P15: Features, security, the countries hub and the German Impressum

- [ ] **P12–P15** · 0/4 live · [languages](#p12p15-in-every-language): 0/20
  - [ ] **P12** [/features](plan/core.md#p12--features) invoicor features
  - [ ] **P13** [/security](plan/core.md#p13--security) invoicor data security
  - [ ] **P14** [/countries](plan/core.md#p14--countries) invoice requirements by country
  - [ ] **P15** [/de/impressum](plan/core.md#p15--deimpressum) impressum

## Languages

Per group, its `localize: yes` pages in each language: "do D1–D20 in German", or one version:
"do D4-de". The instructions per version (search words, what to write for that country, what
not to) are in the language's file; each line links there.

### T1–T20 in every language

Trade templates 1–20 (built) · 20 pages

- [ ] [**T1–T20 in German**](plan/languages/de.md#t1t20-in-german) · 7/9
- [ ] [**T1–T20 in Spanish**](plan/languages/es.md#t1t20-in-spanish) · 0/20
- [ ] [**T1–T20 in French**](plan/languages/fr.md#t1t20-in-french) · 8/17
- [ ] [**T1–T20 in Dutch**](plan/languages/nl.md#t1t20-in-dutch) · 9/15
- [ ] [**T1–T20 in Swedish**](plan/languages/sv.md#t1t20-in-swedish) · 0/20
- [ ] [**T1–T20 in Danish**](plan/languages/da.md#t1t20-in-danish) · 0/20
- [ ] [**T1–T20 in Norwegian (Bokmål)**](plan/languages/nb.md#t1t20-in-norwegian-bokmål) · 0/20
- [ ] [**T1–T20 in Italian**](plan/languages/it.md#t1t20-in-italian) · 0/20
- [ ] [**T1–T20 in Portuguese**](plan/languages/pt.md#t1t20-in-portuguese) · 0/20
- [ ] [**T1–T20 in Polish**](plan/languages/pl.md#t1t20-in-polish) · 0/20

### T21–T35 in every language

Trade templates 21–35 (built) · 15 pages

- [ ] [**T21–T35 in German**](plan/languages/de.md#t21t35-in-german) · 1/3
- [ ] [**T21–T35 in Spanish**](plan/languages/es.md#t21t35-in-spanish) · 0/15
- [ ] [**T21–T35 in French**](plan/languages/fr.md#t21t35-in-french) · 2/5
- [ ] [**T21–T35 in Dutch**](plan/languages/nl.md#t21t35-in-dutch) · 0/2
- [ ] [**T21–T35 in Swedish**](plan/languages/sv.md#t21t35-in-swedish) · 0/15
- [ ] [**T21–T35 in Danish**](plan/languages/da.md#t21t35-in-danish) · 0/15
- [ ] [**T21–T35 in Norwegian (Bokmål)**](plan/languages/nb.md#t21t35-in-norwegian-bokmål) · 0/15
- [ ] [**T21–T35 in Italian**](plan/languages/it.md#t21t35-in-italian) · 0/15
- [ ] [**T21–T35 in Portuguese**](plan/languages/pt.md#t21t35-in-portuguese) · 0/15
- [ ] [**T21–T35 in Polish**](plan/languages/pl.md#t21t35-in-polish) · 0/15

### T36–T50 in every language

Trade templates 36–50 (built) · 15 pages

- [ ] [**T36–T50 in German**](plan/languages/de.md#t36t50-in-german) · 2/3
- [ ] [**T36–T50 in Spanish**](plan/languages/es.md#t36t50-in-spanish) · 0/15
- [ ] [**T36–T50 in French**](plan/languages/fr.md#t36t50-in-french) · 0/6
- [ ] [**T36–T50 in Dutch**](plan/languages/nl.md#t36t50-in-dutch) · 1/4
- [ ] [**T36–T50 in Swedish**](plan/languages/sv.md#t36t50-in-swedish) · 0/15
- [ ] [**T36–T50 in Danish**](plan/languages/da.md#t36t50-in-danish) · 0/15
- [ ] [**T36–T50 in Norwegian (Bokmål)**](plan/languages/nb.md#t36t50-in-norwegian-bokmål) · 0/15
- [ ] [**T36–T50 in Italian**](plan/languages/it.md#t36t50-in-italian) · 0/15
- [ ] [**T36–T50 in Portuguese**](plan/languages/pt.md#t36t50-in-portuguese) · 0/15
- [ ] [**T36–T50 in Polish**](plan/languages/pl.md#t36t50-in-polish) · 0/15

### T51–T60 in every language

10 trades: notary, home inspection, IT services … · 9 pages

- [ ] [**T51–T60 in German**](plan/languages/de.md#t51t60-in-german) · 0/9
- [ ] [**T51–T60 in Spanish**](plan/languages/es.md#t51t60-in-spanish) · 0/9
- [ ] [**T51–T60 in French**](plan/languages/fr.md#t51t60-in-french) · 0/9
- [ ] [**T51–T60 in Dutch**](plan/languages/nl.md#t51t60-in-dutch) · 0/9
- [ ] [**T51–T60 in Swedish**](plan/languages/sv.md#t51t60-in-swedish) · 0/9
- [ ] [**T51–T60 in Danish**](plan/languages/da.md#t51t60-in-danish) · 0/9
- [ ] [**T51–T60 in Norwegian (Bokmål)**](plan/languages/nb.md#t51t60-in-norwegian-bokmål) · 0/9
- [ ] [**T51–T60 in Italian**](plan/languages/it.md#t51t60-in-italian) · 0/9
- [ ] [**T51–T60 in Portuguese**](plan/languages/pt.md#t51t60-in-portuguese) · 0/9
- [ ] [**T51–T60 in Polish**](plan/languages/pl.md#t51t60-in-polish) · 0/9

### T61–T80 in every language

Home and property services · 20 pages

- [ ] [**T61–T80 in German**](plan/languages/de.md#t61t80-in-german) · 0/20
- [ ] [**T61–T80 in Spanish**](plan/languages/es.md#t61t80-in-spanish) · 0/20
- [ ] [**T61–T80 in French**](plan/languages/fr.md#t61t80-in-french) · 0/20
- [ ] [**T61–T80 in Dutch**](plan/languages/nl.md#t61t80-in-dutch) · 0/20
- [ ] [**T61–T80 in Swedish**](plan/languages/sv.md#t61t80-in-swedish) · 0/20
- [ ] [**T61–T80 in Danish**](plan/languages/da.md#t61t80-in-danish) · 0/20
- [ ] [**T61–T80 in Norwegian (Bokmål)**](plan/languages/nb.md#t61t80-in-norwegian-bokmål) · 0/20
- [ ] [**T61–T80 in Italian**](plan/languages/it.md#t61t80-in-italian) · 0/20
- [ ] [**T61–T80 in Portuguese**](plan/languages/pt.md#t61t80-in-portuguese) · 0/20
- [ ] [**T61–T80 in Polish**](plan/languages/pl.md#t61t80-in-polish) · 0/20

### T81–T100 in every language

Makers, repair, transport, events · 20 pages

- [ ] [**T81–T100 in German**](plan/languages/de.md#t81t100-in-german) · 0/20
- [ ] [**T81–T100 in Spanish**](plan/languages/es.md#t81t100-in-spanish) · 0/20
- [ ] [**T81–T100 in French**](plan/languages/fr.md#t81t100-in-french) · 0/20
- [ ] [**T81–T100 in Dutch**](plan/languages/nl.md#t81t100-in-dutch) · 0/20
- [ ] [**T81–T100 in Swedish**](plan/languages/sv.md#t81t100-in-swedish) · 0/20
- [ ] [**T81–T100 in Danish**](plan/languages/da.md#t81t100-in-danish) · 0/20
- [ ] [**T81–T100 in Norwegian (Bokmål)**](plan/languages/nb.md#t81t100-in-norwegian-bokmål) · 0/20
- [ ] [**T81–T100 in Italian**](plan/languages/it.md#t81t100-in-italian) · 0/20
- [ ] [**T81–T100 in Portuguese**](plan/languages/pt.md#t81t100-in-portuguese) · 0/20
- [ ] [**T81–T100 in Polish**](plan/languages/pl.md#t81t100-in-polish) · 0/20

### T101–T120 in every language

Professional, wellness, care · 19 pages

- [ ] [**T101–T120 in German**](plan/languages/de.md#t101t120-in-german) · 0/19
- [ ] [**T101–T120 in Spanish**](plan/languages/es.md#t101t120-in-spanish) · 0/19
- [ ] [**T101–T120 in French**](plan/languages/fr.md#t101t120-in-french) · 0/19
- [ ] [**T101–T120 in Dutch**](plan/languages/nl.md#t101t120-in-dutch) · 0/19
- [ ] [**T101–T120 in Swedish**](plan/languages/sv.md#t101t120-in-swedish) · 0/19
- [ ] [**T101–T120 in Danish**](plan/languages/da.md#t101t120-in-danish) · 0/19
- [ ] [**T101–T120 in Norwegian (Bokmål)**](plan/languages/nb.md#t101t120-in-norwegian-bokmål) · 0/19
- [ ] [**T101–T120 in Italian**](plan/languages/it.md#t101t120-in-italian) · 0/19
- [ ] [**T101–T120 in Portuguese**](plan/languages/pt.md#t101t120-in-portuguese) · 0/19
- [ ] [**T101–T120 in Polish**](plan/languages/pl.md#t101t120-in-polish) · 0/19

### T121–T140 in every language

Beauty, creative, specialist · 20 pages

- [ ] [**T121–T140 in German**](plan/languages/de.md#t121t140-in-german) · 0/20
- [ ] [**T121–T140 in Spanish**](plan/languages/es.md#t121t140-in-spanish) · 0/20
- [ ] [**T121–T140 in French**](plan/languages/fr.md#t121t140-in-french) · 0/20
- [ ] [**T121–T140 in Dutch**](plan/languages/nl.md#t121t140-in-dutch) · 0/20
- [ ] [**T121–T140 in Swedish**](plan/languages/sv.md#t121t140-in-swedish) · 0/20
- [ ] [**T121–T140 in Danish**](plan/languages/da.md#t121t140-in-danish) · 0/20
- [ ] [**T121–T140 in Norwegian (Bokmål)**](plan/languages/nb.md#t121t140-in-norwegian-bokmål) · 0/20
- [ ] [**T121–T140 in Italian**](plan/languages/it.md#t121t140-in-italian) · 0/20
- [ ] [**T121–T140 in Portuguese**](plan/languages/pt.md#t121t140-in-portuguese) · 0/20
- [ ] [**T121–T140 in Polish**](plan/languages/pl.md#t121t140-in-polish) · 0/20

### T141–T156 in every language

Trades with demand of their own: auto repair, auto body, architect … · 16 pages

- [ ] [**T141–T156 in German**](plan/languages/de.md#t141t156-in-german) · 0/16
- [ ] [**T141–T156 in Spanish**](plan/languages/es.md#t141t156-in-spanish) · 0/16
- [ ] [**T141–T156 in French**](plan/languages/fr.md#t141t156-in-french) · 0/16
- [ ] [**T141–T156 in Dutch**](plan/languages/nl.md#t141t156-in-dutch) · 0/16
- [ ] [**T141–T156 in Swedish**](plan/languages/sv.md#t141t156-in-swedish) · 0/16
- [ ] [**T141–T156 in Danish**](plan/languages/da.md#t141t156-in-danish) · 0/16
- [ ] [**T141–T156 in Norwegian (Bokmål)**](plan/languages/nb.md#t141t156-in-norwegian-bokmål) · 0/16
- [ ] [**T141–T156 in Italian**](plan/languages/it.md#t141t156-in-italian) · 0/16
- [ ] [**T141–T156 in Portuguese**](plan/languages/pt.md#t141t156-in-portuguese) · 0/16
- [ ] [**T141–T156 in Polish**](plan/languages/pl.md#t141t156-in-polish) · 0/16

### T157–T174 in every language

Home systems and specialist contractors · 16 pages

- [ ] [**T157–T174 in German**](plan/languages/de.md#t157t174-in-german) · 0/16
- [ ] [**T157–T174 in Spanish**](plan/languages/es.md#t157t174-in-spanish) · 0/16
- [ ] [**T157–T174 in French**](plan/languages/fr.md#t157t174-in-french) · 0/16
- [ ] [**T157–T174 in Dutch**](plan/languages/nl.md#t157t174-in-dutch) · 0/16
- [ ] [**T157–T174 in Swedish**](plan/languages/sv.md#t157t174-in-swedish) · 0/16
- [ ] [**T157–T174 in Danish**](plan/languages/da.md#t157t174-in-danish) · 0/16
- [ ] [**T157–T174 in Norwegian (Bokmål)**](plan/languages/nb.md#t157t174-in-norwegian-bokmål) · 0/16
- [ ] [**T157–T174 in Italian**](plan/languages/it.md#t157t174-in-italian) · 0/16
- [ ] [**T157–T174 in Portuguese**](plan/languages/pt.md#t157t174-in-portuguese) · 0/16
- [ ] [**T157–T174 in Polish**](plan/languages/pl.md#t157t174-in-polish) · 0/16

### T175–T192 in every language

Property, waste and household services · 14 pages

- [ ] [**T175–T192 in German**](plan/languages/de.md#t175t192-in-german) · 0/14
- [ ] [**T175–T192 in Spanish**](plan/languages/es.md#t175t192-in-spanish) · 0/14
- [ ] [**T175–T192 in French**](plan/languages/fr.md#t175t192-in-french) · 0/14
- [ ] [**T175–T192 in Dutch**](plan/languages/nl.md#t175t192-in-dutch) · 0/14
- [ ] [**T175–T192 in Swedish**](plan/languages/sv.md#t175t192-in-swedish) · 0/14
- [ ] [**T175–T192 in Danish**](plan/languages/da.md#t175t192-in-danish) · 0/14
- [ ] [**T175–T192 in Norwegian (Bokmål)**](plan/languages/nb.md#t175t192-in-norwegian-bokmål) · 0/14
- [ ] [**T175–T192 in Italian**](plan/languages/it.md#t175t192-in-italian) · 0/14
- [ ] [**T175–T192 in Portuguese**](plan/languages/pt.md#t175t192-in-portuguese) · 0/14
- [ ] [**T175–T192 in Polish**](plan/languages/pl.md#t175t192-in-polish) · 0/14

### T193–T207 in every language

Auto, transport and heavy equipment · 14 pages

- [ ] [**T193–T207 in German**](plan/languages/de.md#t193t207-in-german) · 0/14
- [ ] [**T193–T207 in Spanish**](plan/languages/es.md#t193t207-in-spanish) · 0/14
- [ ] [**T193–T207 in French**](plan/languages/fr.md#t193t207-in-french) · 0/14
- [ ] [**T193–T207 in Dutch**](plan/languages/nl.md#t193t207-in-dutch) · 0/14
- [ ] [**T193–T207 in Swedish**](plan/languages/sv.md#t193t207-in-swedish) · 0/14
- [ ] [**T193–T207 in Danish**](plan/languages/da.md#t193t207-in-danish) · 0/14
- [ ] [**T193–T207 in Norwegian (Bokmål)**](plan/languages/nb.md#t193t207-in-norwegian-bokmål) · 0/14
- [ ] [**T193–T207 in Italian**](plan/languages/it.md#t193t207-in-italian) · 0/14
- [ ] [**T193–T207 in Portuguese**](plan/languages/pt.md#t193t207-in-portuguese) · 0/14
- [ ] [**T193–T207 in Polish**](plan/languages/pl.md#t193t207-in-polish) · 0/14

### T208–T222 in every language

Workshops, repair and industrial trades · 14 pages

- [ ] [**T208–T222 in German**](plan/languages/de.md#t208t222-in-german) · 0/14
- [ ] [**T208–T222 in Spanish**](plan/languages/es.md#t208t222-in-spanish) · 0/14
- [ ] [**T208–T222 in French**](plan/languages/fr.md#t208t222-in-french) · 0/14
- [ ] [**T208–T222 in Dutch**](plan/languages/nl.md#t208t222-in-dutch) · 0/14
- [ ] [**T208–T222 in Swedish**](plan/languages/sv.md#t208t222-in-swedish) · 0/14
- [ ] [**T208–T222 in Danish**](plan/languages/da.md#t208t222-in-danish) · 0/14
- [ ] [**T208–T222 in Norwegian (Bokmål)**](plan/languages/nb.md#t208t222-in-norwegian-bokmål) · 0/14
- [ ] [**T208–T222 in Italian**](plan/languages/it.md#t208t222-in-italian) · 0/14
- [ ] [**T208–T222 in Portuguese**](plan/languages/pt.md#t208t222-in-portuguese) · 0/14
- [ ] [**T208–T222 in Polish**](plan/languages/pl.md#t208t222-in-polish) · 0/14

### T223–T237 in every language

Events, food, travel and entertainment · 15 pages

- [ ] [**T223–T237 in German**](plan/languages/de.md#t223t237-in-german) · 0/15
- [ ] [**T223–T237 in Spanish**](plan/languages/es.md#t223t237-in-spanish) · 0/15
- [ ] [**T223–T237 in French**](plan/languages/fr.md#t223t237-in-french) · 0/15
- [ ] [**T223–T237 in Dutch**](plan/languages/nl.md#t223t237-in-dutch) · 0/15
- [ ] [**T223–T237 in Swedish**](plan/languages/sv.md#t223t237-in-swedish) · 0/15
- [ ] [**T223–T237 in Danish**](plan/languages/da.md#t223t237-in-danish) · 0/15
- [ ] [**T223–T237 in Norwegian (Bokmål)**](plan/languages/nb.md#t223t237-in-norwegian-bokmål) · 0/15
- [ ] [**T223–T237 in Italian**](plan/languages/it.md#t223t237-in-italian) · 0/15
- [ ] [**T223–T237 in Portuguese**](plan/languages/pt.md#t223t237-in-portuguese) · 0/15
- [ ] [**T223–T237 in Polish**](plan/languages/pl.md#t223t237-in-polish) · 0/15

### T238–T252 in every language

Professional services II · 12 pages

- [ ] [**T238–T252 in German**](plan/languages/de.md#t238t252-in-german) · 0/12
- [ ] [**T238–T252 in Spanish**](plan/languages/es.md#t238t252-in-spanish) · 0/12
- [ ] [**T238–T252 in French**](plan/languages/fr.md#t238t252-in-french) · 0/12
- [ ] [**T238–T252 in Dutch**](plan/languages/nl.md#t238t252-in-dutch) · 0/12
- [ ] [**T238–T252 in Swedish**](plan/languages/sv.md#t238t252-in-swedish) · 0/12
- [ ] [**T238–T252 in Danish**](plan/languages/da.md#t238t252-in-danish) · 0/12
- [ ] [**T238–T252 in Norwegian (Bokmål)**](plan/languages/nb.md#t238t252-in-norwegian-bokmål) · 0/12
- [ ] [**T238–T252 in Italian**](plan/languages/it.md#t238t252-in-italian) · 0/12
- [ ] [**T238–T252 in Portuguese**](plan/languages/pt.md#t238t252-in-portuguese) · 0/12
- [ ] [**T238–T252 in Polish**](plan/languages/pl.md#t238t252-in-polish) · 0/12

### T253–T262 in every language

Digital and tech services · 10 pages

- [ ] [**T253–T262 in German**](plan/languages/de.md#t253t262-in-german) · 0/10
- [ ] [**T253–T262 in Spanish**](plan/languages/es.md#t253t262-in-spanish) · 0/10
- [ ] [**T253–T262 in French**](plan/languages/fr.md#t253t262-in-french) · 0/10
- [ ] [**T253–T262 in Dutch**](plan/languages/nl.md#t253t262-in-dutch) · 0/10
- [ ] [**T253–T262 in Swedish**](plan/languages/sv.md#t253t262-in-swedish) · 0/10
- [ ] [**T253–T262 in Danish**](plan/languages/da.md#t253t262-in-danish) · 0/10
- [ ] [**T253–T262 in Norwegian (Bokmål)**](plan/languages/nb.md#t253t262-in-norwegian-bokmål) · 0/10
- [ ] [**T253–T262 in Italian**](plan/languages/it.md#t253t262-in-italian) · 0/10
- [ ] [**T253–T262 in Portuguese**](plan/languages/pt.md#t253t262-in-portuguese) · 0/10
- [ ] [**T253–T262 in Polish**](plan/languages/pl.md#t253t262-in-polish) · 0/10

### T263–T274 in every language

Creative, fashion and crafts · 12 pages

- [ ] [**T263–T274 in German**](plan/languages/de.md#t263t274-in-german) · 0/12
- [ ] [**T263–T274 in Spanish**](plan/languages/es.md#t263t274-in-spanish) · 0/12
- [ ] [**T263–T274 in French**](plan/languages/fr.md#t263t274-in-french) · 0/12
- [ ] [**T263–T274 in Dutch**](plan/languages/nl.md#t263t274-in-dutch) · 0/12
- [ ] [**T263–T274 in Swedish**](plan/languages/sv.md#t263t274-in-swedish) · 0/12
- [ ] [**T263–T274 in Danish**](plan/languages/da.md#t263t274-in-danish) · 0/12
- [ ] [**T263–T274 in Norwegian (Bokmål)**](plan/languages/nb.md#t263t274-in-norwegian-bokmål) · 0/12
- [ ] [**T263–T274 in Italian**](plan/languages/it.md#t263t274-in-italian) · 0/12
- [ ] [**T263–T274 in Portuguese**](plan/languages/pt.md#t263t274-in-portuguese) · 0/12
- [ ] [**T263–T274 in Polish**](plan/languages/pl.md#t263t274-in-polish) · 0/12

### T275–T289 in every language

Health and wellness II · 15 pages

- [ ] [**T275–T289 in German**](plan/languages/de.md#t275t289-in-german) · 0/15
- [ ] [**T275–T289 in Spanish**](plan/languages/es.md#t275t289-in-spanish) · 0/15
- [ ] [**T275–T289 in French**](plan/languages/fr.md#t275t289-in-french) · 0/15
- [ ] [**T275–T289 in Dutch**](plan/languages/nl.md#t275t289-in-dutch) · 0/15
- [ ] [**T275–T289 in Swedish**](plan/languages/sv.md#t275t289-in-swedish) · 0/15
- [ ] [**T275–T289 in Danish**](plan/languages/da.md#t275t289-in-danish) · 0/15
- [ ] [**T275–T289 in Norwegian (Bokmål)**](plan/languages/nb.md#t275t289-in-norwegian-bokmål) · 0/15
- [ ] [**T275–T289 in Italian**](plan/languages/it.md#t275t289-in-italian) · 0/15
- [ ] [**T275–T289 in Portuguese**](plan/languages/pt.md#t275t289-in-portuguese) · 0/15
- [ ] [**T275–T289 in Polish**](plan/languages/pl.md#t275t289-in-polish) · 0/15

### T290–T301 in every language

Education and childcare · 11 pages

- [ ] [**T290–T301 in German**](plan/languages/de.md#t290t301-in-german) · 0/11
- [ ] [**T290–T301 in Spanish**](plan/languages/es.md#t290t301-in-spanish) · 0/11
- [ ] [**T290–T301 in French**](plan/languages/fr.md#t290t301-in-french) · 0/11
- [ ] [**T290–T301 in Dutch**](plan/languages/nl.md#t290t301-in-dutch) · 0/11
- [ ] [**T290–T301 in Swedish**](plan/languages/sv.md#t290t301-in-swedish) · 0/11
- [ ] [**T290–T301 in Danish**](plan/languages/da.md#t290t301-in-danish) · 0/11
- [ ] [**T290–T301 in Norwegian (Bokmål)**](plan/languages/nb.md#t290t301-in-norwegian-bokmål) · 0/11
- [ ] [**T290–T301 in Italian**](plan/languages/it.md#t290t301-in-italian) · 0/11
- [ ] [**T290–T301 in Portuguese**](plan/languages/pt.md#t290t301-in-portuguese) · 0/11
- [ ] [**T290–T301 in Polish**](plan/languages/pl.md#t290t301-in-polish) · 0/11

### T302–T313 in every language

Animals, farms and outdoors · 12 pages

- [ ] [**T302–T313 in German**](plan/languages/de.md#t302t313-in-german) · 0/12
- [ ] [**T302–T313 in Spanish**](plan/languages/es.md#t302t313-in-spanish) · 0/12
- [ ] [**T302–T313 in French**](plan/languages/fr.md#t302t313-in-french) · 0/12
- [ ] [**T302–T313 in Dutch**](plan/languages/nl.md#t302t313-in-dutch) · 0/12
- [ ] [**T302–T313 in Swedish**](plan/languages/sv.md#t302t313-in-swedish) · 0/12
- [ ] [**T302–T313 in Danish**](plan/languages/da.md#t302t313-in-danish) · 0/12
- [ ] [**T302–T313 in Norwegian (Bokmål)**](plan/languages/nb.md#t302t313-in-norwegian-bokmål) · 0/12
- [ ] [**T302–T313 in Italian**](plan/languages/it.md#t302t313-in-italian) · 0/12
- [ ] [**T302–T313 in Portuguese**](plan/languages/pt.md#t302t313-in-portuguese) · 0/12
- [ ] [**T302–T313 in Polish**](plan/languages/pl.md#t302t313-in-polish) · 0/12

### I1–I20 in every language

Industry pages 1–20 (built) · 20 pages

- [ ] [**I1–I20 in German**](plan/languages/de.md#i1i20-in-german) · 8/12
- [ ] [**I1–I20 in Spanish**](plan/languages/es.md#i1i20-in-spanish) · 0/20
- [ ] [**I1–I20 in French**](plan/languages/fr.md#i1i20-in-french) · 0/20
- [ ] [**I1–I20 in Dutch**](plan/languages/nl.md#i1i20-in-dutch) · 0/20
- [ ] [**I1–I20 in Swedish**](plan/languages/sv.md#i1i20-in-swedish) · 0/20
- [ ] [**I1–I20 in Danish**](plan/languages/da.md#i1i20-in-danish) · 0/20
- [ ] [**I1–I20 in Norwegian (Bokmål)**](plan/languages/nb.md#i1i20-in-norwegian-bokmål) · 0/20
- [ ] [**I1–I20 in Italian**](plan/languages/it.md#i1i20-in-italian) · 0/20
- [ ] [**I1–I20 in Portuguese**](plan/languages/pt.md#i1i20-in-portuguese) · 0/20
- [ ] [**I1–I20 in Polish**](plan/languages/pl.md#i1i20-in-polish) · 0/20

### I21–I32 in every language

Industry pages 21–32 (built) · 12 pages

- [ ] [**I21–I32 in German**](plan/languages/de.md#i21i32-in-german) · 1/4
- [ ] [**I21–I32 in Spanish**](plan/languages/es.md#i21i32-in-spanish) · 0/12
- [ ] [**I21–I32 in French**](plan/languages/fr.md#i21i32-in-french) · 0/12
- [ ] [**I21–I32 in Dutch**](plan/languages/nl.md#i21i32-in-dutch) · 0/12
- [ ] [**I21–I32 in Swedish**](plan/languages/sv.md#i21i32-in-swedish) · 0/12
- [ ] [**I21–I32 in Danish**](plan/languages/da.md#i21i32-in-danish) · 0/12
- [ ] [**I21–I32 in Norwegian (Bokmål)**](plan/languages/nb.md#i21i32-in-norwegian-bokmål) · 0/12
- [ ] [**I21–I32 in Italian**](plan/languages/it.md#i21i32-in-italian) · 0/12
- [ ] [**I21–I32 in Portuguese**](plan/languages/pt.md#i21i32-in-portuguese) · 0/12
- [ ] [**I21–I32 in Polish**](plan/languages/pl.md#i21i32-in-polish) · 0/12

### I33–I43 in every language

Industry pages 33–43 (built) · 11 pages

- [ ] [**I33–I43 in German**](plan/languages/de.md#i33i43-in-german) · 1/4
- [ ] [**I33–I43 in Spanish**](plan/languages/es.md#i33i43-in-spanish) · 0/11
- [ ] [**I33–I43 in French**](plan/languages/fr.md#i33i43-in-french) · 0/11
- [ ] [**I33–I43 in Dutch**](plan/languages/nl.md#i33i43-in-dutch) · 0/11
- [ ] [**I33–I43 in Swedish**](plan/languages/sv.md#i33i43-in-swedish) · 0/11
- [ ] [**I33–I43 in Danish**](plan/languages/da.md#i33i43-in-danish) · 0/11
- [ ] [**I33–I43 in Norwegian (Bokmål)**](plan/languages/nb.md#i33i43-in-norwegian-bokmål) · 0/11
- [ ] [**I33–I43 in Italian**](plan/languages/it.md#i33i43-in-italian) · 0/11
- [ ] [**I33–I43 in Portuguese**](plan/languages/pt.md#i33i43-in-portuguese) · 0/11
- [ ] [**I33–I43 in Polish**](plan/languages/pl.md#i33i43-in-polish) · 0/11

### I44–I53 in every language

Industry pages for T51–T60's trades · 9 pages

- [ ] [**I44–I53 in German**](plan/languages/de.md#i44i53-in-german) · 0/9
- [ ] [**I44–I53 in Spanish**](plan/languages/es.md#i44i53-in-spanish) · 0/9
- [ ] [**I44–I53 in French**](plan/languages/fr.md#i44i53-in-french) · 0/9
- [ ] [**I44–I53 in Dutch**](plan/languages/nl.md#i44i53-in-dutch) · 0/9
- [ ] [**I44–I53 in Swedish**](plan/languages/sv.md#i44i53-in-swedish) · 0/9
- [ ] [**I44–I53 in Danish**](plan/languages/da.md#i44i53-in-danish) · 0/9
- [ ] [**I44–I53 in Norwegian (Bokmål)**](plan/languages/nb.md#i44i53-in-norwegian-bokmål) · 0/9
- [ ] [**I44–I53 in Italian**](plan/languages/it.md#i44i53-in-italian) · 0/9
- [ ] [**I44–I53 in Portuguese**](plan/languages/pt.md#i44i53-in-portuguese) · 0/9
- [ ] [**I44–I53 in Polish**](plan/languages/pl.md#i44i53-in-polish) · 0/9

### I54–I73 in every language

Industry pages for T61–T80's trades · 20 pages

- [ ] [**I54–I73 in German**](plan/languages/de.md#i54i73-in-german) · 0/20
- [ ] [**I54–I73 in Spanish**](plan/languages/es.md#i54i73-in-spanish) · 0/20
- [ ] [**I54–I73 in French**](plan/languages/fr.md#i54i73-in-french) · 0/20
- [ ] [**I54–I73 in Dutch**](plan/languages/nl.md#i54i73-in-dutch) · 0/20
- [ ] [**I54–I73 in Swedish**](plan/languages/sv.md#i54i73-in-swedish) · 0/20
- [ ] [**I54–I73 in Danish**](plan/languages/da.md#i54i73-in-danish) · 0/20
- [ ] [**I54–I73 in Norwegian (Bokmål)**](plan/languages/nb.md#i54i73-in-norwegian-bokmål) · 0/20
- [ ] [**I54–I73 in Italian**](plan/languages/it.md#i54i73-in-italian) · 0/20
- [ ] [**I54–I73 in Portuguese**](plan/languages/pt.md#i54i73-in-portuguese) · 0/20
- [ ] [**I54–I73 in Polish**](plan/languages/pl.md#i54i73-in-polish) · 0/20

### I74–I93 in every language

Industry pages for T81–T100's trades · 20 pages

- [ ] [**I74–I93 in German**](plan/languages/de.md#i74i93-in-german) · 0/20
- [ ] [**I74–I93 in Spanish**](plan/languages/es.md#i74i93-in-spanish) · 0/20
- [ ] [**I74–I93 in French**](plan/languages/fr.md#i74i93-in-french) · 0/20
- [ ] [**I74–I93 in Dutch**](plan/languages/nl.md#i74i93-in-dutch) · 0/20
- [ ] [**I74–I93 in Swedish**](plan/languages/sv.md#i74i93-in-swedish) · 0/20
- [ ] [**I74–I93 in Danish**](plan/languages/da.md#i74i93-in-danish) · 0/20
- [ ] [**I74–I93 in Norwegian (Bokmål)**](plan/languages/nb.md#i74i93-in-norwegian-bokmål) · 0/20
- [ ] [**I74–I93 in Italian**](plan/languages/it.md#i74i93-in-italian) · 0/20
- [ ] [**I74–I93 in Portuguese**](plan/languages/pt.md#i74i93-in-portuguese) · 0/20
- [ ] [**I74–I93 in Polish**](plan/languages/pl.md#i74i93-in-polish) · 0/20

### I94–I113 in every language

Industry pages for T101–T120's trades · 19 pages

- [ ] [**I94–I113 in German**](plan/languages/de.md#i94i113-in-german) · 0/19
- [ ] [**I94–I113 in Spanish**](plan/languages/es.md#i94i113-in-spanish) · 0/19
- [ ] [**I94–I113 in French**](plan/languages/fr.md#i94i113-in-french) · 0/19
- [ ] [**I94–I113 in Dutch**](plan/languages/nl.md#i94i113-in-dutch) · 0/19
- [ ] [**I94–I113 in Swedish**](plan/languages/sv.md#i94i113-in-swedish) · 0/19
- [ ] [**I94–I113 in Danish**](plan/languages/da.md#i94i113-in-danish) · 0/19
- [ ] [**I94–I113 in Norwegian (Bokmål)**](plan/languages/nb.md#i94i113-in-norwegian-bokmål) · 0/19
- [ ] [**I94–I113 in Italian**](plan/languages/it.md#i94i113-in-italian) · 0/19
- [ ] [**I94–I113 in Portuguese**](plan/languages/pt.md#i94i113-in-portuguese) · 0/19
- [ ] [**I94–I113 in Polish**](plan/languages/pl.md#i94i113-in-polish) · 0/19

### I114–I133 in every language

Industry pages for T121–T140's trades · 20 pages

- [ ] [**I114–I133 in German**](plan/languages/de.md#i114i133-in-german) · 0/20
- [ ] [**I114–I133 in Spanish**](plan/languages/es.md#i114i133-in-spanish) · 0/20
- [ ] [**I114–I133 in French**](plan/languages/fr.md#i114i133-in-french) · 0/20
- [ ] [**I114–I133 in Dutch**](plan/languages/nl.md#i114i133-in-dutch) · 0/20
- [ ] [**I114–I133 in Swedish**](plan/languages/sv.md#i114i133-in-swedish) · 0/20
- [ ] [**I114–I133 in Danish**](plan/languages/da.md#i114i133-in-danish) · 0/20
- [ ] [**I114–I133 in Norwegian (Bokmål)**](plan/languages/nb.md#i114i133-in-norwegian-bokmål) · 0/20
- [ ] [**I114–I133 in Italian**](plan/languages/it.md#i114i133-in-italian) · 0/20
- [ ] [**I114–I133 in Portuguese**](plan/languages/pt.md#i114i133-in-portuguese) · 0/20
- [ ] [**I114–I133 in Polish**](plan/languages/pl.md#i114i133-in-polish) · 0/20

### I134–I137 in every language

Architects, real estate agents, private investigators, equipment rental · 4 pages

- [ ] [**I134–I137 in German**](plan/languages/de.md#i134i137-in-german) · 0/4
- [ ] [**I134–I137 in Spanish**](plan/languages/es.md#i134i137-in-spanish) · 0/4
- [ ] [**I134–I137 in French**](plan/languages/fr.md#i134i137-in-french) · 0/4
- [ ] [**I134–I137 in Dutch**](plan/languages/nl.md#i134i137-in-dutch) · 0/4
- [ ] [**I134–I137 in Swedish**](plan/languages/sv.md#i134i137-in-swedish) · 0/4
- [ ] [**I134–I137 in Danish**](plan/languages/da.md#i134i137-in-danish) · 0/4
- [ ] [**I134–I137 in Norwegian (Bokmål)**](plan/languages/nb.md#i134i137-in-norwegian-bokmål) · 0/4
- [ ] [**I134–I137 in Italian**](plan/languages/it.md#i134i137-in-italian) · 0/4
- [ ] [**I134–I137 in Portuguese**](plan/languages/pt.md#i134i137-in-portuguese) · 0/4
- [ ] [**I134–I137 in Polish**](plan/languages/pl.md#i134i137-in-polish) · 0/4

### I138–I143 in every language

One trade per page: split the combined industry pages · 6 pages

- [ ] [**I138–I143 in German**](plan/languages/de.md#i138i143-in-german) · 0/6
- [ ] [**I138–I143 in Spanish**](plan/languages/es.md#i138i143-in-spanish) · 0/6
- [ ] [**I138–I143 in French**](plan/languages/fr.md#i138i143-in-french) · 0/6
- [ ] [**I138–I143 in Dutch**](plan/languages/nl.md#i138i143-in-dutch) · 0/6
- [ ] [**I138–I143 in Swedish**](plan/languages/sv.md#i138i143-in-swedish) · 0/6
- [ ] [**I138–I143 in Danish**](plan/languages/da.md#i138i143-in-danish) · 0/6
- [ ] [**I138–I143 in Norwegian (Bokmål)**](plan/languages/nb.md#i138i143-in-norwegian-bokmål) · 0/6
- [ ] [**I138–I143 in Italian**](plan/languages/it.md#i138i143-in-italian) · 0/6
- [ ] [**I138–I143 in Portuguese**](plan/languages/pt.md#i138i143-in-portuguese) · 0/6
- [ ] [**I138–I143 in Polish**](plan/languages/pl.md#i138i143-in-polish) · 0/6

### I144–I152 in every language

Who invoices: self-employed, freelancers, sellers · 7 pages

- [ ] [**I144–I152 in German**](plan/languages/de.md#i144i152-in-german) · 0/7
- [ ] [**I144–I152 in Spanish**](plan/languages/es.md#i144i152-in-spanish) · 0/7
- [ ] [**I144–I152 in French**](plan/languages/fr.md#i144i152-in-french) · 0/7
- [ ] [**I144–I152 in Dutch**](plan/languages/nl.md#i144i152-in-dutch) · 0/7
- [ ] [**I144–I152 in Swedish**](plan/languages/sv.md#i144i152-in-swedish) · 0/7
- [ ] [**I144–I152 in Danish**](plan/languages/da.md#i144i152-in-danish) · 0/7
- [ ] [**I144–I152 in Norwegian (Bokmål)**](plan/languages/nb.md#i144i152-in-norwegian-bokmål) · 0/7
- [ ] [**I144–I152 in Italian**](plan/languages/it.md#i144i152-in-italian) · 0/7
- [ ] [**I144–I152 in Portuguese**](plan/languages/pt.md#i144i152-in-portuguese) · 0/7
- [ ] [**I144–I152 in Polish**](plan/languages/pl.md#i144i152-in-polish) · 0/7

### I153–I162 in every language

Specialist contractors · 8 pages

- [ ] [**I153–I162 in German**](plan/languages/de.md#i153i162-in-german) · 0/8
- [ ] [**I153–I162 in Spanish**](plan/languages/es.md#i153i162-in-spanish) · 0/8
- [ ] [**I153–I162 in French**](plan/languages/fr.md#i153i162-in-french) · 0/8
- [ ] [**I153–I162 in Dutch**](plan/languages/nl.md#i153i162-in-dutch) · 0/8
- [ ] [**I153–I162 in Swedish**](plan/languages/sv.md#i153i162-in-swedish) · 0/8
- [ ] [**I153–I162 in Danish**](plan/languages/da.md#i153i162-in-danish) · 0/8
- [ ] [**I153–I162 in Norwegian (Bokmål)**](plan/languages/nb.md#i153i162-in-norwegian-bokmål) · 0/8
- [ ] [**I153–I162 in Italian**](plan/languages/it.md#i153i162-in-italian) · 0/8
- [ ] [**I153–I162 in Portuguese**](plan/languages/pt.md#i153i162-in-portuguese) · 0/8
- [ ] [**I153–I162 in Polish**](plan/languages/pl.md#i153i162-in-polish) · 0/8

### I163–I169 in every language

Cleaning, waste and property services · 3 pages

- [ ] [**I163–I169 in German**](plan/languages/de.md#i163i169-in-german) · 0/3
- [ ] [**I163–I169 in Spanish**](plan/languages/es.md#i163i169-in-spanish) · 0/3
- [ ] [**I163–I169 in French**](plan/languages/fr.md#i163i169-in-french) · 0/3
- [ ] [**I163–I169 in Dutch**](plan/languages/nl.md#i163i169-in-dutch) · 0/3
- [ ] [**I163–I169 in Swedish**](plan/languages/sv.md#i163i169-in-swedish) · 0/3
- [ ] [**I163–I169 in Danish**](plan/languages/da.md#i163i169-in-danish) · 0/3
- [ ] [**I163–I169 in Norwegian (Bokmål)**](plan/languages/nb.md#i163i169-in-norwegian-bokmål) · 0/3
- [ ] [**I163–I169 in Italian**](plan/languages/it.md#i163i169-in-italian) · 0/3
- [ ] [**I163–I169 in Portuguese**](plan/languages/pt.md#i163i169-in-portuguese) · 0/3
- [ ] [**I163–I169 in Polish**](plan/languages/pl.md#i163i169-in-polish) · 0/3

### I170–I179 in every language

Auto shops and transport · 8 pages

- [ ] [**I170–I179 in German**](plan/languages/de.md#i170i179-in-german) · 0/8
- [ ] [**I170–I179 in Spanish**](plan/languages/es.md#i170i179-in-spanish) · 0/8
- [ ] [**I170–I179 in French**](plan/languages/fr.md#i170i179-in-french) · 0/8
- [ ] [**I170–I179 in Dutch**](plan/languages/nl.md#i170i179-in-dutch) · 0/8
- [ ] [**I170–I179 in Swedish**](plan/languages/sv.md#i170i179-in-swedish) · 0/8
- [ ] [**I170–I179 in Danish**](plan/languages/da.md#i170i179-in-danish) · 0/8
- [ ] [**I170–I179 in Norwegian (Bokmål)**](plan/languages/nb.md#i170i179-in-norwegian-bokmål) · 0/8
- [ ] [**I170–I179 in Italian**](plan/languages/it.md#i170i179-in-italian) · 0/8
- [ ] [**I170–I179 in Portuguese**](plan/languages/pt.md#i170i179-in-portuguese) · 0/8
- [ ] [**I170–I179 in Polish**](plan/languages/pl.md#i170i179-in-polish) · 0/8

### I180–I190 in every language

Professional services · 8 pages

- [ ] [**I180–I190 in German**](plan/languages/de.md#i180i190-in-german) · 0/8
- [ ] [**I180–I190 in Spanish**](plan/languages/es.md#i180i190-in-spanish) · 0/8
- [ ] [**I180–I190 in French**](plan/languages/fr.md#i180i190-in-french) · 0/8
- [ ] [**I180–I190 in Dutch**](plan/languages/nl.md#i180i190-in-dutch) · 0/8
- [ ] [**I180–I190 in Swedish**](plan/languages/sv.md#i180i190-in-swedish) · 0/8
- [ ] [**I180–I190 in Danish**](plan/languages/da.md#i180i190-in-danish) · 0/8
- [ ] [**I180–I190 in Norwegian (Bokmål)**](plan/languages/nb.md#i180i190-in-norwegian-bokmål) · 0/8
- [ ] [**I180–I190 in Italian**](plan/languages/it.md#i180i190-in-italian) · 0/8
- [ ] [**I180–I190 in Portuguese**](plan/languages/pt.md#i180i190-in-portuguese) · 0/8
- [ ] [**I180–I190 in Polish**](plan/languages/pl.md#i180i190-in-polish) · 0/8

### I191–I200 in every language

Events, food and travel · 10 pages

- [ ] [**I191–I200 in German**](plan/languages/de.md#i191i200-in-german) · 0/10
- [ ] [**I191–I200 in Spanish**](plan/languages/es.md#i191i200-in-spanish) · 0/10
- [ ] [**I191–I200 in French**](plan/languages/fr.md#i191i200-in-french) · 0/10
- [ ] [**I191–I200 in Dutch**](plan/languages/nl.md#i191i200-in-dutch) · 0/10
- [ ] [**I191–I200 in Swedish**](plan/languages/sv.md#i191i200-in-swedish) · 0/10
- [ ] [**I191–I200 in Danish**](plan/languages/da.md#i191i200-in-danish) · 0/10
- [ ] [**I191–I200 in Norwegian (Bokmål)**](plan/languages/nb.md#i191i200-in-norwegian-bokmål) · 0/10
- [ ] [**I191–I200 in Italian**](plan/languages/it.md#i191i200-in-italian) · 0/10
- [ ] [**I191–I200 in Portuguese**](plan/languages/pt.md#i191i200-in-portuguese) · 0/10
- [ ] [**I191–I200 in Polish**](plan/languages/pl.md#i191i200-in-polish) · 0/10

### I201–I209 in every language

Creative and media · 9 pages

- [ ] [**I201–I209 in German**](plan/languages/de.md#i201i209-in-german) · 0/9
- [ ] [**I201–I209 in Spanish**](plan/languages/es.md#i201i209-in-spanish) · 0/9
- [ ] [**I201–I209 in French**](plan/languages/fr.md#i201i209-in-french) · 0/9
- [ ] [**I201–I209 in Dutch**](plan/languages/nl.md#i201i209-in-dutch) · 0/9
- [ ] [**I201–I209 in Swedish**](plan/languages/sv.md#i201i209-in-swedish) · 0/9
- [ ] [**I201–I209 in Danish**](plan/languages/da.md#i201i209-in-danish) · 0/9
- [ ] [**I201–I209 in Norwegian (Bokmål)**](plan/languages/nb.md#i201i209-in-norwegian-bokmål) · 0/9
- [ ] [**I201–I209 in Italian**](plan/languages/it.md#i201i209-in-italian) · 0/9
- [ ] [**I201–I209 in Portuguese**](plan/languages/pt.md#i201i209-in-portuguese) · 0/9
- [ ] [**I201–I209 in Polish**](plan/languages/pl.md#i201i209-in-polish) · 0/9

### I210–I220 in every language

Health, wellness and beauty · 11 pages

- [ ] [**I210–I220 in German**](plan/languages/de.md#i210i220-in-german) · 0/11
- [ ] [**I210–I220 in Spanish**](plan/languages/es.md#i210i220-in-spanish) · 0/11
- [ ] [**I210–I220 in French**](plan/languages/fr.md#i210i220-in-french) · 0/11
- [ ] [**I210–I220 in Dutch**](plan/languages/nl.md#i210i220-in-dutch) · 0/11
- [ ] [**I210–I220 in Swedish**](plan/languages/sv.md#i210i220-in-swedish) · 0/11
- [ ] [**I210–I220 in Danish**](plan/languages/da.md#i210i220-in-danish) · 0/11
- [ ] [**I210–I220 in Norwegian (Bokmål)**](plan/languages/nb.md#i210i220-in-norwegian-bokmål) · 0/11
- [ ] [**I210–I220 in Italian**](plan/languages/it.md#i210i220-in-italian) · 0/11
- [ ] [**I210–I220 in Portuguese**](plan/languages/pt.md#i210i220-in-portuguese) · 0/11
- [ ] [**I210–I220 in Polish**](plan/languages/pl.md#i210i220-in-polish) · 0/11

### I221–I230 in every language

Education and childcare · 9 pages

- [ ] [**I221–I230 in German**](plan/languages/de.md#i221i230-in-german) · 0/9
- [ ] [**I221–I230 in Spanish**](plan/languages/es.md#i221i230-in-spanish) · 0/9
- [ ] [**I221–I230 in French**](plan/languages/fr.md#i221i230-in-french) · 0/9
- [ ] [**I221–I230 in Dutch**](plan/languages/nl.md#i221i230-in-dutch) · 0/9
- [ ] [**I221–I230 in Swedish**](plan/languages/sv.md#i221i230-in-swedish) · 0/9
- [ ] [**I221–I230 in Danish**](plan/languages/da.md#i221i230-in-danish) · 0/9
- [ ] [**I221–I230 in Norwegian (Bokmål)**](plan/languages/nb.md#i221i230-in-norwegian-bokmål) · 0/9
- [ ] [**I221–I230 in Italian**](plan/languages/it.md#i221i230-in-italian) · 0/9
- [ ] [**I221–I230 in Portuguese**](plan/languages/pt.md#i221i230-in-portuguese) · 0/9
- [ ] [**I221–I230 in Polish**](plan/languages/pl.md#i221i230-in-polish) · 0/9

### I231–I239 in every language

Animals, farms and outdoors · 9 pages

- [ ] [**I231–I239 in German**](plan/languages/de.md#i231i239-in-german) · 0/9
- [ ] [**I231–I239 in Spanish**](plan/languages/es.md#i231i239-in-spanish) · 0/9
- [ ] [**I231–I239 in French**](plan/languages/fr.md#i231i239-in-french) · 0/9
- [ ] [**I231–I239 in Dutch**](plan/languages/nl.md#i231i239-in-dutch) · 0/9
- [ ] [**I231–I239 in Swedish**](plan/languages/sv.md#i231i239-in-swedish) · 0/9
- [ ] [**I231–I239 in Danish**](plan/languages/da.md#i231i239-in-danish) · 0/9
- [ ] [**I231–I239 in Norwegian (Bokmål)**](plan/languages/nb.md#i231i239-in-norwegian-bokmål) · 0/9
- [ ] [**I231–I239 in Italian**](plan/languages/it.md#i231i239-in-italian) · 0/9
- [ ] [**I231–I239 in Portuguese**](plan/languages/pt.md#i231i239-in-portuguese) · 0/9
- [ ] [**I231–I239 in Polish**](plan/languages/pl.md#i231i239-in-polish) · 0/9

### B1–B20 in every language

Billing types I · 20 pages

- [ ] [**B1–B20 in German**](plan/languages/de.md#b1b20-in-german) · 0/20
- [ ] [**B1–B20 in Spanish**](plan/languages/es.md#b1b20-in-spanish) · 0/20
- [ ] [**B1–B20 in French**](plan/languages/fr.md#b1b20-in-french) · 0/20
- [ ] [**B1–B20 in Dutch**](plan/languages/nl.md#b1b20-in-dutch) · 0/20
- [ ] [**B1–B20 in Swedish**](plan/languages/sv.md#b1b20-in-swedish) · 0/20
- [ ] [**B1–B20 in Danish**](plan/languages/da.md#b1b20-in-danish) · 0/20
- [ ] [**B1–B20 in Norwegian (Bokmål)**](plan/languages/nb.md#b1b20-in-norwegian-bokmål) · 0/20
- [ ] [**B1–B20 in Italian**](plan/languages/it.md#b1b20-in-italian) · 0/20
- [ ] [**B1–B20 in Portuguese**](plan/languages/pt.md#b1b20-in-portuguese) · 0/20
- [ ] [**B1–B20 in Polish**](plan/languages/pl.md#b1b20-in-polish) · 0/20

### B21–B40 in every language

Billing types II · 20 pages

- [ ] [**B21–B40 in German**](plan/languages/de.md#b21b40-in-german) · 0/20
- [ ] [**B21–B40 in Spanish**](plan/languages/es.md#b21b40-in-spanish) · 0/20
- [ ] [**B21–B40 in French**](plan/languages/fr.md#b21b40-in-french) · 0/20
- [ ] [**B21–B40 in Dutch**](plan/languages/nl.md#b21b40-in-dutch) · 0/20
- [ ] [**B21–B40 in Swedish**](plan/languages/sv.md#b21b40-in-swedish) · 0/20
- [ ] [**B21–B40 in Danish**](plan/languages/da.md#b21b40-in-danish) · 0/20
- [ ] [**B21–B40 in Norwegian (Bokmål)**](plan/languages/nb.md#b21b40-in-norwegian-bokmål) · 0/20
- [ ] [**B21–B40 in Italian**](plan/languages/it.md#b21b40-in-italian) · 0/20
- [ ] [**B21–B40 in Portuguese**](plan/languages/pt.md#b21b40-in-portuguese) · 0/20
- [ ] [**B21–B40 in Polish**](plan/languages/pl.md#b21b40-in-polish) · 0/20

### B41–B60 in every language

Billing types III · 19 pages

- [ ] [**B41–B60 in German**](plan/languages/de.md#b41b60-in-german) · 0/19
- [ ] [**B41–B60 in Spanish**](plan/languages/es.md#b41b60-in-spanish) · 0/19
- [ ] [**B41–B60 in French**](plan/languages/fr.md#b41b60-in-french) · 0/19
- [ ] [**B41–B60 in Dutch**](plan/languages/nl.md#b41b60-in-dutch) · 0/19
- [ ] [**B41–B60 in Swedish**](plan/languages/sv.md#b41b60-in-swedish) · 0/19
- [ ] [**B41–B60 in Danish**](plan/languages/da.md#b41b60-in-danish) · 0/19
- [ ] [**B41–B60 in Norwegian (Bokmål)**](plan/languages/nb.md#b41b60-in-norwegian-bokmål) · 0/19
- [ ] [**B41–B60 in Italian**](plan/languages/it.md#b41b60-in-italian) · 0/19
- [ ] [**B41–B60 in Portuguese**](plan/languages/pt.md#b41b60-in-portuguese) · 0/19
- [ ] [**B41–B60 in Polish**](plan/languages/pl.md#b41b60-in-polish) · 0/19

### B61–B71 in every language

Deposits: events and weddings · 11 pages

- [ ] [**B61–B71 in German**](plan/languages/de.md#b61b71-in-german) · 0/11
- [ ] [**B61–B71 in Spanish**](plan/languages/es.md#b61b71-in-spanish) · 0/11
- [ ] [**B61–B71 in French**](plan/languages/fr.md#b61b71-in-french) · 0/11
- [ ] [**B61–B71 in Dutch**](plan/languages/nl.md#b61b71-in-dutch) · 0/11
- [ ] [**B61–B71 in Swedish**](plan/languages/sv.md#b61b71-in-swedish) · 0/11
- [ ] [**B61–B71 in Danish**](plan/languages/da.md#b61b71-in-danish) · 0/11
- [ ] [**B61–B71 in Norwegian (Bokmål)**](plan/languages/nb.md#b61b71-in-norwegian-bokmål) · 0/11
- [ ] [**B61–B71 in Italian**](plan/languages/it.md#b61b71-in-italian) · 0/11
- [ ] [**B61–B71 in Portuguese**](plan/languages/pt.md#b61b71-in-portuguese) · 0/11
- [ ] [**B61–B71 in Polish**](plan/languages/pl.md#b61b71-in-polish) · 0/11

### B72–B84 in every language

Deposits: custom and made-to-order work · 13 pages

- [ ] [**B72–B84 in German**](plan/languages/de.md#b72b84-in-german) · 0/13
- [ ] [**B72–B84 in Spanish**](plan/languages/es.md#b72b84-in-spanish) · 0/13
- [ ] [**B72–B84 in French**](plan/languages/fr.md#b72b84-in-french) · 0/13
- [ ] [**B72–B84 in Dutch**](plan/languages/nl.md#b72b84-in-dutch) · 0/13
- [ ] [**B72–B84 in Swedish**](plan/languages/sv.md#b72b84-in-swedish) · 0/13
- [ ] [**B72–B84 in Danish**](plan/languages/da.md#b72b84-in-danish) · 0/13
- [ ] [**B72–B84 in Norwegian (Bokmål)**](plan/languages/nb.md#b72b84-in-norwegian-bokmål) · 0/13
- [ ] [**B72–B84 in Italian**](plan/languages/it.md#b72b84-in-italian) · 0/13
- [ ] [**B72–B84 in Portuguese**](plan/languages/pt.md#b72b84-in-portuguese) · 0/13
- [ ] [**B72–B84 in Polish**](plan/languages/pl.md#b72b84-in-polish) · 0/13

### B85–B97 in every language

Deposits: contractors and home projects · 13 pages

- [ ] [**B85–B97 in German**](plan/languages/de.md#b85b97-in-german) · 0/13
- [ ] [**B85–B97 in Spanish**](plan/languages/es.md#b85b97-in-spanish) · 0/13
- [ ] [**B85–B97 in French**](plan/languages/fr.md#b85b97-in-french) · 0/13
- [ ] [**B85–B97 in Dutch**](plan/languages/nl.md#b85b97-in-dutch) · 0/13
- [ ] [**B85–B97 in Swedish**](plan/languages/sv.md#b85b97-in-swedish) · 0/13
- [ ] [**B85–B97 in Danish**](plan/languages/da.md#b85b97-in-danish) · 0/13
- [ ] [**B85–B97 in Norwegian (Bokmål)**](plan/languages/nb.md#b85b97-in-norwegian-bokmål) · 0/13
- [ ] [**B85–B97 in Italian**](plan/languages/it.md#b85b97-in-italian) · 0/13
- [ ] [**B85–B97 in Portuguese**](plan/languages/pt.md#b85b97-in-portuguese) · 0/13
- [ ] [**B85–B97 in Polish**](plan/languages/pl.md#b85b97-in-polish) · 0/13

### B98–B106 in every language

Progress invoices: construction trades · 9 pages

- [ ] [**B98–B106 in German**](plan/languages/de.md#b98b106-in-german) · 0/9
- [ ] [**B98–B106 in Spanish**](plan/languages/es.md#b98b106-in-spanish) · 0/9
- [ ] [**B98–B106 in French**](plan/languages/fr.md#b98b106-in-french) · 0/9
- [ ] [**B98–B106 in Dutch**](plan/languages/nl.md#b98b106-in-dutch) · 0/9
- [ ] [**B98–B106 in Swedish**](plan/languages/sv.md#b98b106-in-swedish) · 0/9
- [ ] [**B98–B106 in Danish**](plan/languages/da.md#b98b106-in-danish) · 0/9
- [ ] [**B98–B106 in Norwegian (Bokmål)**](plan/languages/nb.md#b98b106-in-norwegian-bokmål) · 0/9
- [ ] [**B98–B106 in Italian**](plan/languages/it.md#b98b106-in-italian) · 0/9
- [ ] [**B98–B106 in Portuguese**](plan/languages/pt.md#b98b106-in-portuguese) · 0/9
- [ ] [**B98–B106 in Polish**](plan/languages/pl.md#b98b106-in-polish) · 0/9

### B107–B119 in every language

Monthly and seasonal service invoices · 13 pages

- [ ] [**B107–B119 in German**](plan/languages/de.md#b107b119-in-german) · 0/13
- [ ] [**B107–B119 in Spanish**](plan/languages/es.md#b107b119-in-spanish) · 0/13
- [ ] [**B107–B119 in French**](plan/languages/fr.md#b107b119-in-french) · 0/13
- [ ] [**B107–B119 in Dutch**](plan/languages/nl.md#b107b119-in-dutch) · 0/13
- [ ] [**B107–B119 in Swedish**](plan/languages/sv.md#b107b119-in-swedish) · 0/13
- [ ] [**B107–B119 in Danish**](plan/languages/da.md#b107b119-in-danish) · 0/13
- [ ] [**B107–B119 in Norwegian (Bokmål)**](plan/languages/nb.md#b107b119-in-norwegian-bokmål) · 0/13
- [ ] [**B107–B119 in Italian**](plan/languages/it.md#b107b119-in-italian) · 0/13
- [ ] [**B107–B119 in Portuguese**](plan/languages/pt.md#b107b119-in-portuguese) · 0/13
- [ ] [**B107–B119 in Polish**](plan/languages/pl.md#b107b119-in-polish) · 0/13

### B120–B129 in every language

Retainers for professionals · 10 pages

- [ ] [**B120–B129 in German**](plan/languages/de.md#b120b129-in-german) · 0/10
- [ ] [**B120–B129 in Spanish**](plan/languages/es.md#b120b129-in-spanish) · 0/10
- [ ] [**B120–B129 in French**](plan/languages/fr.md#b120b129-in-french) · 0/10
- [ ] [**B120–B129 in Dutch**](plan/languages/nl.md#b120b129-in-dutch) · 0/10
- [ ] [**B120–B129 in Swedish**](plan/languages/sv.md#b120b129-in-swedish) · 0/10
- [ ] [**B120–B129 in Danish**](plan/languages/da.md#b120b129-in-danish) · 0/10
- [ ] [**B120–B129 in Norwegian (Bokmål)**](plan/languages/nb.md#b120b129-in-norwegian-bokmål) · 0/10
- [ ] [**B120–B129 in Italian**](plan/languages/it.md#b120b129-in-italian) · 0/10
- [ ] [**B120–B129 in Portuguese**](plan/languages/pt.md#b120b129-in-portuguese) · 0/10
- [ ] [**B120–B129 in Polish**](plan/languages/pl.md#b120b129-in-polish) · 0/10

### B130–B136 in every language

Hourly billing for professionals and care · 7 pages

- [ ] [**B130–B136 in German**](plan/languages/de.md#b130b136-in-german) · 0/7
- [ ] [**B130–B136 in Spanish**](plan/languages/es.md#b130b136-in-spanish) · 0/7
- [ ] [**B130–B136 in French**](plan/languages/fr.md#b130b136-in-french) · 0/7
- [ ] [**B130–B136 in Dutch**](plan/languages/nl.md#b130b136-in-dutch) · 0/7
- [ ] [**B130–B136 in Swedish**](plan/languages/sv.md#b130b136-in-swedish) · 0/7
- [ ] [**B130–B136 in Danish**](plan/languages/da.md#b130b136-in-danish) · 0/7
- [ ] [**B130–B136 in Norwegian (Bokmål)**](plan/languages/nb.md#b130b136-in-norwegian-bokmål) · 0/7
- [ ] [**B130–B136 in Italian**](plan/languages/it.md#b130b136-in-italian) · 0/7
- [ ] [**B130–B136 in Portuguese**](plan/languages/pt.md#b130b136-in-portuguese) · 0/7
- [ ] [**B130–B136 in Polish**](plan/languages/pl.md#b130b136-in-polish) · 0/7

### B137–B146 in every language

Packages: lessons, wellness and coaching · 10 pages

- [ ] [**B137–B146 in German**](plan/languages/de.md#b137b146-in-german) · 0/10
- [ ] [**B137–B146 in Spanish**](plan/languages/es.md#b137b146-in-spanish) · 0/10
- [ ] [**B137–B146 in French**](plan/languages/fr.md#b137b146-in-french) · 0/10
- [ ] [**B137–B146 in Dutch**](plan/languages/nl.md#b137b146-in-dutch) · 0/10
- [ ] [**B137–B146 in Swedish**](plan/languages/sv.md#b137b146-in-swedish) · 0/10
- [ ] [**B137–B146 in Danish**](plan/languages/da.md#b137b146-in-danish) · 0/10
- [ ] [**B137–B146 in Norwegian (Bokmål)**](plan/languages/nb.md#b137b146-in-norwegian-bokmål) · 0/10
- [ ] [**B137–B146 in Italian**](plan/languages/it.md#b137b146-in-italian) · 0/10
- [ ] [**B137–B146 in Portuguese**](plan/languages/pt.md#b137b146-in-portuguese) · 0/10
- [ ] [**B137–B146 in Polish**](plan/languages/pl.md#b137b146-in-polish) · 0/10

### B147–B157 in every language

Service calls, emergencies and insurance jobs · 11 pages

- [ ] [**B147–B157 in German**](plan/languages/de.md#b147b157-in-german) · 0/11
- [ ] [**B147–B157 in Spanish**](plan/languages/es.md#b147b157-in-spanish) · 0/11
- [ ] [**B147–B157 in French**](plan/languages/fr.md#b147b157-in-french) · 0/11
- [ ] [**B147–B157 in Dutch**](plan/languages/nl.md#b147b157-in-dutch) · 0/11
- [ ] [**B147–B157 in Swedish**](plan/languages/sv.md#b147b157-in-swedish) · 0/11
- [ ] [**B147–B157 in Danish**](plan/languages/da.md#b147b157-in-danish) · 0/11
- [ ] [**B147–B157 in Norwegian (Bokmål)**](plan/languages/nb.md#b147b157-in-norwegian-bokmål) · 0/11
- [ ] [**B147–B157 in Italian**](plan/languages/it.md#b147b157-in-italian) · 0/11
- [ ] [**B147–B157 in Portuguese**](plan/languages/pt.md#b147b157-in-portuguese) · 0/11
- [ ] [**B147–B157 in Polish**](plan/languages/pl.md#b147b157-in-polish) · 0/11

### B158–B166 in every language

Milestones: creative, tech and engineering projects · 9 pages

- [ ] [**B158–B166 in German**](plan/languages/de.md#b158b166-in-german) · 0/9
- [ ] [**B158–B166 in Spanish**](plan/languages/es.md#b158b166-in-spanish) · 0/9
- [ ] [**B158–B166 in French**](plan/languages/fr.md#b158b166-in-french) · 0/9
- [ ] [**B158–B166 in Dutch**](plan/languages/nl.md#b158b166-in-dutch) · 0/9
- [ ] [**B158–B166 in Swedish**](plan/languages/sv.md#b158b166-in-swedish) · 0/9
- [ ] [**B158–B166 in Danish**](plan/languages/da.md#b158b166-in-danish) · 0/9
- [ ] [**B158–B166 in Norwegian (Bokmål)**](plan/languages/nb.md#b158b166-in-norwegian-bokmål) · 0/9
- [ ] [**B158–B166 in Italian**](plan/languages/it.md#b158b166-in-italian) · 0/9
- [ ] [**B158–B166 in Portuguese**](plan/languages/pt.md#b158b166-in-portuguese) · 0/9
- [ ] [**B158–B166 in Polish**](plan/languages/pl.md#b158b166-in-polish) · 0/9

### B167–B173 in every language

Final invoices: events and custom work · 7 pages

- [ ] [**B167–B173 in German**](plan/languages/de.md#b167b173-in-german) · 0/7
- [ ] [**B167–B173 in Spanish**](plan/languages/es.md#b167b173-in-spanish) · 0/7
- [ ] [**B167–B173 in French**](plan/languages/fr.md#b167b173-in-french) · 0/7
- [ ] [**B167–B173 in Dutch**](plan/languages/nl.md#b167b173-in-dutch) · 0/7
- [ ] [**B167–B173 in Swedish**](plan/languages/sv.md#b167b173-in-swedish) · 0/7
- [ ] [**B167–B173 in Danish**](plan/languages/da.md#b167b173-in-danish) · 0/7
- [ ] [**B167–B173 in Norwegian (Bokmål)**](plan/languages/nb.md#b167b173-in-norwegian-bokmål) · 0/7
- [ ] [**B167–B173 in Italian**](plan/languages/it.md#b167b173-in-italian) · 0/7
- [ ] [**B167–B173 in Portuguese**](plan/languages/pt.md#b167b173-in-portuguese) · 0/7
- [ ] [**B167–B173 in Polish**](plan/languages/pl.md#b167b173-in-polish) · 0/7

### B174–B178 in every language

Per-unit billing: per word, mile and minute · 5 pages

- [ ] [**B174–B178 in German**](plan/languages/de.md#b174b178-in-german) · 0/5
- [ ] [**B174–B178 in Spanish**](plan/languages/es.md#b174b178-in-spanish) · 0/5
- [ ] [**B174–B178 in French**](plan/languages/fr.md#b174b178-in-french) · 0/5
- [ ] [**B174–B178 in Dutch**](plan/languages/nl.md#b174b178-in-dutch) · 0/5
- [ ] [**B174–B178 in Swedish**](plan/languages/sv.md#b174b178-in-swedish) · 0/5
- [ ] [**B174–B178 in Danish**](plan/languages/da.md#b174b178-in-danish) · 0/5
- [ ] [**B174–B178 in Norwegian (Bokmål)**](plan/languages/nb.md#b174b178-in-norwegian-bokmål) · 0/5
- [ ] [**B174–B178 in Italian**](plan/languages/it.md#b174b178-in-italian) · 0/5
- [ ] [**B174–B178 in Portuguese**](plan/languages/pt.md#b174b178-in-portuguese) · 0/5
- [ ] [**B174–B178 in Polish**](plan/languages/pl.md#b174b178-in-polish) · 0/5

### D1–D20 in every language

Invoice types: the general documents · 14 pages

- [x] [**D1–D20 in German**](plan/languages/de.md#d1d20-in-german) · 12/12
- [ ] [**D1–D20 in Spanish**](plan/languages/es.md#d1d20-in-spanish) · 8/11
- [x] [**D1–D20 in French**](plan/languages/fr.md#d1d20-in-french) · 12/12
- [x] [**D1–D20 in Dutch**](plan/languages/nl.md#d1d20-in-dutch) · 10/10
- [ ] [**D1–D20 in Swedish**](plan/languages/sv.md#d1d20-in-swedish) · 10/11
- [ ] [**D1–D20 in Danish**](plan/languages/da.md#d1d20-in-danish) · 10/11
- [ ] [**D1–D20 in Norwegian (Bokmål)**](plan/languages/nb.md#d1d20-in-norwegian-bokmål) · 3/10
- [ ] [**D1–D20 in Italian**](plan/languages/it.md#d1d20-in-italian) · 0/0
- [ ] [**D1–D20 in Portuguese**](plan/languages/pt.md#d1d20-in-portuguese) · 0/0
- [ ] [**D1–D20 in Polish**](plan/languages/pl.md#d1d20-in-polish) · 0/0

### D21–D30 in every language

Invoice types II: special cases (self-billing, revised, paid, PO …) · 8 pages

- [ ] [**D21–D30 in German**](plan/languages/de.md#d21d30-in-german) · 0/7
- [ ] [**D21–D30 in Spanish**](plan/languages/es.md#d21d30-in-spanish) · 0/8
- [ ] [**D21–D30 in French**](plan/languages/fr.md#d21d30-in-french) · 0/8
- [ ] [**D21–D30 in Dutch**](plan/languages/nl.md#d21d30-in-dutch) · 0/8
- [ ] [**D21–D30 in Swedish**](plan/languages/sv.md#d21d30-in-swedish) · 0/8
- [ ] [**D21–D30 in Danish**](plan/languages/da.md#d21d30-in-danish) · 0/8
- [ ] [**D21–D30 in Norwegian (Bokmål)**](plan/languages/nb.md#d21d30-in-norwegian-bokmål) · 0/8
- [ ] [**D21–D30 in Italian**](plan/languages/it.md#d21d30-in-italian) · 0/8
- [ ] [**D21–D30 in Portuguese**](plan/languages/pt.md#d21d30-in-portuguese) · 0/8
- [ ] [**D21–D30 in Polish**](plan/languages/pl.md#d21d30-in-polish) · 0/8

### TL1–TL4 in every language

Free tools built before the plan (hub, VAT, hours, hourly rate) · 4 pages

- [x] [**TL1–TL4 in German**](plan/languages/de.md#tl1tl4-in-german) · 4/4
- [x] [**TL1–TL4 in Spanish**](plan/languages/es.md#tl1tl4-in-spanish) · 4/4
- [x] [**TL1–TL4 in French**](plan/languages/fr.md#tl1tl4-in-french) · 4/4
- [x] [**TL1–TL4 in Dutch**](plan/languages/nl.md#tl1tl4-in-dutch) · 4/4
- [x] [**TL1–TL4 in Swedish**](plan/languages/sv.md#tl1tl4-in-swedish) · 4/4
- [x] [**TL1–TL4 in Danish**](plan/languages/da.md#tl1tl4-in-danish) · 4/4
- [x] [**TL1–TL4 in Norwegian (Bokmål)**](plan/languages/nb.md#tl1tl4-in-norwegian-bokmål) · 4/4
- [x] [**TL1–TL4 in Italian**](plan/languages/it.md#tl1tl4-in-italian) · 4/4
- [x] [**TL1–TL4 in Portuguese**](plan/languages/pt.md#tl1tl4-in-portuguese) · 4/4
- [x] [**TL1–TL4 in Polish**](plan/languages/pl.md#tl1tl4-in-polish) · 4/4

### TL5–TL15 in every language

Free tools I · 9 pages

- [ ] [**TL5–TL15 in German**](plan/languages/de.md#tl5tl15-in-german) · 0/9
- [ ] [**TL5–TL15 in Spanish**](plan/languages/es.md#tl5tl15-in-spanish) · 0/9
- [ ] [**TL5–TL15 in French**](plan/languages/fr.md#tl5tl15-in-french) · 0/9
- [ ] [**TL5–TL15 in Dutch**](plan/languages/nl.md#tl5tl15-in-dutch) · 0/9
- [ ] [**TL5–TL15 in Swedish**](plan/languages/sv.md#tl5tl15-in-swedish) · 0/9
- [ ] [**TL5–TL15 in Danish**](plan/languages/da.md#tl5tl15-in-danish) · 0/9
- [ ] [**TL5–TL15 in Norwegian (Bokmål)**](plan/languages/nb.md#tl5tl15-in-norwegian-bokmål) · 0/9
- [ ] [**TL5–TL15 in Italian**](plan/languages/it.md#tl5tl15-in-italian) · 0/9
- [ ] [**TL5–TL15 in Portuguese**](plan/languages/pt.md#tl5tl15-in-portuguese) · 0/9
- [ ] [**TL5–TL15 in Polish**](plan/languages/pl.md#tl5tl15-in-polish) · 0/9

### TL16–TL25 in every language

Free tools II · 8 pages

- [ ] [**TL16–TL25 in German**](plan/languages/de.md#tl16tl25-in-german) · 0/8
- [ ] [**TL16–TL25 in Spanish**](plan/languages/es.md#tl16tl25-in-spanish) · 0/8
- [ ] [**TL16–TL25 in French**](plan/languages/fr.md#tl16tl25-in-french) · 0/8
- [ ] [**TL16–TL25 in Dutch**](plan/languages/nl.md#tl16tl25-in-dutch) · 0/8
- [ ] [**TL16–TL25 in Swedish**](plan/languages/sv.md#tl16tl25-in-swedish) · 0/8
- [ ] [**TL16–TL25 in Danish**](plan/languages/da.md#tl16tl25-in-danish) · 0/8
- [ ] [**TL16–TL25 in Norwegian (Bokmål)**](plan/languages/nb.md#tl16tl25-in-norwegian-bokmål) · 0/8
- [ ] [**TL16–TL25 in Italian**](plan/languages/it.md#tl16tl25-in-italian) · 0/8
- [ ] [**TL16–TL25 in Portuguese**](plan/languages/pt.md#tl16tl25-in-portuguese) · 0/8
- [ ] [**TL16–TL25 in Polish**](plan/languages/pl.md#tl16tl25-in-polish) · 0/8

### TL26–TL45 in every language

Pricing calculators for trades · 20 pages

- [ ] [**TL26–TL45 in German**](plan/languages/de.md#tl26tl45-in-german) · 0/20
- [ ] [**TL26–TL45 in Spanish**](plan/languages/es.md#tl26tl45-in-spanish) · 0/20
- [ ] [**TL26–TL45 in French**](plan/languages/fr.md#tl26tl45-in-french) · 0/20
- [ ] [**TL26–TL45 in Dutch**](plan/languages/nl.md#tl26tl45-in-dutch) · 0/20
- [ ] [**TL26–TL45 in Swedish**](plan/languages/sv.md#tl26tl45-in-swedish) · 0/20
- [ ] [**TL26–TL45 in Danish**](plan/languages/da.md#tl26tl45-in-danish) · 0/20
- [ ] [**TL26–TL45 in Norwegian (Bokmål)**](plan/languages/nb.md#tl26tl45-in-norwegian-bokmål) · 0/20
- [ ] [**TL26–TL45 in Italian**](plan/languages/it.md#tl26tl45-in-italian) · 0/20
- [ ] [**TL26–TL45 in Portuguese**](plan/languages/pt.md#tl26tl45-in-portuguese) · 0/20
- [ ] [**TL26–TL45 in Polish**](plan/languages/pl.md#tl26tl45-in-polish) · 0/20

### TL55–TL62 in every language

Tax tools for the self-employed · 3 pages

- [ ] [**TL55–TL62 in German**](plan/languages/de.md#tl55tl62-in-german) · 0/3
- [ ] [**TL55–TL62 in Spanish**](plan/languages/es.md#tl55tl62-in-spanish) · 0/3
- [ ] [**TL55–TL62 in French**](plan/languages/fr.md#tl55tl62-in-french) · 0/3
- [ ] [**TL55–TL62 in Dutch**](plan/languages/nl.md#tl55tl62-in-dutch) · 0/3
- [ ] [**TL55–TL62 in Swedish**](plan/languages/sv.md#tl55tl62-in-swedish) · 0/3
- [ ] [**TL55–TL62 in Danish**](plan/languages/da.md#tl55tl62-in-danish) · 0/3
- [ ] [**TL55–TL62 in Norwegian (Bokmål)**](plan/languages/nb.md#tl55tl62-in-norwegian-bokmål) · 0/3
- [ ] [**TL55–TL62 in Italian**](plan/languages/it.md#tl55tl62-in-italian) · 0/3
- [ ] [**TL55–TL62 in Portuguese**](plan/languages/pt.md#tl55tl62-in-portuguese) · 0/3
- [ ] [**TL55–TL62 in Polish**](plan/languages/pl.md#tl55tl62-in-polish) · 0/3

### TL63–TL75 in every language

Payment fees, terms and payment details · 13 pages

- [ ] [**TL63–TL75 in German**](plan/languages/de.md#tl63tl75-in-german) · 0/13
- [ ] [**TL63–TL75 in Spanish**](plan/languages/es.md#tl63tl75-in-spanish) · 0/13
- [ ] [**TL63–TL75 in French**](plan/languages/fr.md#tl63tl75-in-french) · 0/13
- [ ] [**TL63–TL75 in Dutch**](plan/languages/nl.md#tl63tl75-in-dutch) · 0/13
- [ ] [**TL63–TL75 in Swedish**](plan/languages/sv.md#tl63tl75-in-swedish) · 0/13
- [ ] [**TL63–TL75 in Danish**](plan/languages/da.md#tl63tl75-in-danish) · 0/13
- [ ] [**TL63–TL75 in Norwegian (Bokmål)**](plan/languages/nb.md#tl63tl75-in-norwegian-bokmål) · 0/13
- [ ] [**TL63–TL75 in Italian**](plan/languages/it.md#tl63tl75-in-italian) · 0/13
- [ ] [**TL63–TL75 in Portuguese**](plan/languages/pt.md#tl63tl75-in-portuguese) · 0/13
- [ ] [**TL63–TL75 in Polish**](plan/languages/pl.md#tl63tl75-in-polish) · 0/13

### TL76–TL90 in every language

Job costing and materials for contractors · 13 pages

- [ ] [**TL76–TL90 in German**](plan/languages/de.md#tl76tl90-in-german) · 0/13
- [ ] [**TL76–TL90 in Spanish**](plan/languages/es.md#tl76tl90-in-spanish) · 0/13
- [ ] [**TL76–TL90 in French**](plan/languages/fr.md#tl76tl90-in-french) · 0/13
- [ ] [**TL76–TL90 in Dutch**](plan/languages/nl.md#tl76tl90-in-dutch) · 0/13
- [ ] [**TL76–TL90 in Swedish**](plan/languages/sv.md#tl76tl90-in-swedish) · 0/13
- [ ] [**TL76–TL90 in Danish**](plan/languages/da.md#tl76tl90-in-danish) · 0/13
- [ ] [**TL76–TL90 in Norwegian (Bokmål)**](plan/languages/nb.md#tl76tl90-in-norwegian-bokmål) · 0/13
- [ ] [**TL76–TL90 in Italian**](plan/languages/it.md#tl76tl90-in-italian) · 0/13
- [ ] [**TL76–TL90 in Portuguese**](plan/languages/pt.md#tl76tl90-in-portuguese) · 0/13
- [ ] [**TL76–TL90 in Polish**](plan/languages/pl.md#tl76tl90-in-polish) · 0/13

### TL91–TL106 in every language

Pricing calculators II: services and transport · 14 pages

- [ ] [**TL91–TL106 in German**](plan/languages/de.md#tl91tl106-in-german) · 0/14
- [ ] [**TL91–TL106 in Spanish**](plan/languages/es.md#tl91tl106-in-spanish) · 0/14
- [ ] [**TL91–TL106 in French**](plan/languages/fr.md#tl91tl106-in-french) · 0/14
- [ ] [**TL91–TL106 in Dutch**](plan/languages/nl.md#tl91tl106-in-dutch) · 0/14
- [ ] [**TL91–TL106 in Swedish**](plan/languages/sv.md#tl91tl106-in-swedish) · 0/14
- [ ] [**TL91–TL106 in Danish**](plan/languages/da.md#tl91tl106-in-danish) · 0/14
- [ ] [**TL91–TL106 in Norwegian (Bokmål)**](plan/languages/nb.md#tl91tl106-in-norwegian-bokmål) · 0/14
- [ ] [**TL91–TL106 in Italian**](plan/languages/it.md#tl91tl106-in-italian) · 0/14
- [ ] [**TL91–TL106 in Portuguese**](plan/languages/pt.md#tl91tl106-in-portuguese) · 0/14
- [ ] [**TL91–TL106 in Polish**](plan/languages/pl.md#tl91tl106-in-polish) · 0/14

### TL107–TL113 in every language

Pricing calculators III: makers and production · 7 pages

- [ ] [**TL107–TL113 in German**](plan/languages/de.md#tl107tl113-in-german) · 0/7
- [ ] [**TL107–TL113 in Spanish**](plan/languages/es.md#tl107tl113-in-spanish) · 0/7
- [ ] [**TL107–TL113 in French**](plan/languages/fr.md#tl107tl113-in-french) · 0/7
- [ ] [**TL107–TL113 in Dutch**](plan/languages/nl.md#tl107tl113-in-dutch) · 0/7
- [ ] [**TL107–TL113 in Swedish**](plan/languages/sv.md#tl107tl113-in-swedish) · 0/7
- [ ] [**TL107–TL113 in Danish**](plan/languages/da.md#tl107tl113-in-danish) · 0/7
- [ ] [**TL107–TL113 in Norwegian (Bokmål)**](plan/languages/nb.md#tl107tl113-in-norwegian-bokmål) · 0/7
- [ ] [**TL107–TL113 in Italian**](plan/languages/it.md#tl107tl113-in-italian) · 0/7
- [ ] [**TL107–TL113 in Portuguese**](plan/languages/pt.md#tl107tl113-in-portuguese) · 0/7
- [ ] [**TL107–TL113 in Polish**](plan/languages/pl.md#tl107tl113-in-polish) · 0/7

### G1–G1 in every language

The free invoice generator (built) · 1 pages

- [x] [**G1–G1 in German**](plan/languages/de.md#g1g1-in-german) · 1/1
- [x] [**G1–G1 in Spanish**](plan/languages/es.md#g1g1-in-spanish) · 1/1
- [x] [**G1–G1 in French**](plan/languages/fr.md#g1g1-in-french) · 1/1
- [x] [**G1–G1 in Dutch**](plan/languages/nl.md#g1g1-in-dutch) · 1/1
- [x] [**G1–G1 in Swedish**](plan/languages/sv.md#g1g1-in-swedish) · 1/1
- [x] [**G1–G1 in Danish**](plan/languages/da.md#g1g1-in-danish) · 1/1
- [x] [**G1–G1 in Norwegian (Bokmål)**](plan/languages/nb.md#g1g1-in-norwegian-bokmål) · 1/1
- [x] [**G1–G1 in Italian**](plan/languages/it.md#g1g1-in-italian) · 1/1
- [x] [**G1–G1 in Portuguese**](plan/languages/pt.md#g1g1-in-portuguese) · 1/1
- [x] [**G1–G1 in Polish**](plan/languages/pl.md#g1g1-in-polish) · 1/1

### G2–G5 in every language

Document generators (receipt, estimate, proforma, credit note) · 4 pages

- [ ] [**G2–G5 in German**](plan/languages/de.md#g2g5-in-german) · 0/4
- [ ] [**G2–G5 in Spanish**](plan/languages/es.md#g2g5-in-spanish) · 0/4
- [ ] [**G2–G5 in French**](plan/languages/fr.md#g2g5-in-french) · 0/4
- [ ] [**G2–G5 in Dutch**](plan/languages/nl.md#g2g5-in-dutch) · 0/4
- [ ] [**G2–G5 in Swedish**](plan/languages/sv.md#g2g5-in-swedish) · 0/4
- [ ] [**G2–G5 in Danish**](plan/languages/da.md#g2g5-in-danish) · 0/4
- [ ] [**G2–G5 in Norwegian (Bokmål)**](plan/languages/nb.md#g2g5-in-norwegian-bokmål) · 0/4
- [ ] [**G2–G5 in Italian**](plan/languages/it.md#g2g5-in-italian) · 0/4
- [ ] [**G2–G5 in Portuguese**](plan/languages/pt.md#g2g5-in-portuguese) · 0/4
- [ ] [**G2–G5 in Polish**](plan/languages/pl.md#g2g5-in-polish) · 0/4

### G6–G10 in every language

Document generators II (purchase order, delivery note, statement, debit note, work order) · 5 pages

- [ ] [**G6–G10 in German**](plan/languages/de.md#g6g10-in-german) · 0/5
- [ ] [**G6–G10 in Spanish**](plan/languages/es.md#g6g10-in-spanish) · 0/5
- [ ] [**G6–G10 in French**](plan/languages/fr.md#g6g10-in-french) · 0/5
- [ ] [**G6–G10 in Dutch**](plan/languages/nl.md#g6g10-in-dutch) · 0/5
- [ ] [**G6–G10 in Swedish**](plan/languages/sv.md#g6g10-in-swedish) · 0/5
- [ ] [**G6–G10 in Danish**](plan/languages/da.md#g6g10-in-danish) · 0/5
- [ ] [**G6–G10 in Norwegian (Bokmål)**](plan/languages/nb.md#g6g10-in-norwegian-bokmål) · 0/5
- [ ] [**G6–G10 in Italian**](plan/languages/it.md#g6g10-in-italian) · 0/5
- [ ] [**G6–G10 in Portuguese**](plan/languages/pt.md#g6g10-in-portuguese) · 0/5
- [ ] [**G6–G10 in Polish**](plan/languages/pl.md#g6g10-in-polish) · 0/5

### CT1–CT7 in every language

Country pages I (English-speaking countries + EU reverse charge) · 1 pages

- [ ] [**CT1–CT7 in German**](plan/languages/de.md#ct1ct7-in-german) · 0/1
- [ ] [**CT1–CT7 in Spanish**](plan/languages/es.md#ct1ct7-in-spanish) · 0/1
- [ ] [**CT1–CT7 in French**](plan/languages/fr.md#ct1ct7-in-french) · 0/1
- [ ] [**CT1–CT7 in Dutch**](plan/languages/nl.md#ct1ct7-in-dutch) · 0/1
- [ ] [**CT1–CT7 in Swedish**](plan/languages/sv.md#ct1ct7-in-swedish) · 0/1
- [ ] [**CT1–CT7 in Danish**](plan/languages/da.md#ct1ct7-in-danish) · 0/1
- [ ] [**CT1–CT7 in Norwegian (Bokmål)**](plan/languages/nb.md#ct1ct7-in-norwegian-bokmål) · 0/1
- [ ] [**CT1–CT7 in Italian**](plan/languages/it.md#ct1ct7-in-italian) · 0/1
- [ ] [**CT1–CT7 in Portuguese**](plan/languages/pt.md#ct1ct7-in-portuguese) · 0/1
- [ ] [**CT1–CT7 in Polish**](plan/languages/pl.md#ct1ct7-in-polish) · 0/1

### P1–P9 in every language

Core pages (built): home, hubs, help, affiliate, terms, privacy, Android · 8 pages

- [ ] [**P1–P9 in German**](plan/languages/de.md#p1p9-in-german) · 5/8
- [ ] [**P1–P9 in Spanish**](plan/languages/es.md#p1p9-in-spanish) · 4/8
- [ ] [**P1–P9 in French**](plan/languages/fr.md#p1p9-in-french) · 4/8
- [ ] [**P1–P9 in Dutch**](plan/languages/nl.md#p1p9-in-dutch) · 4/8
- [ ] [**P1–P9 in Swedish**](plan/languages/sv.md#p1p9-in-swedish) · 4/8
- [ ] [**P1–P9 in Danish**](plan/languages/da.md#p1p9-in-danish) · 4/8
- [ ] [**P1–P9 in Norwegian (Bokmål)**](plan/languages/nb.md#p1p9-in-norwegian-bokmål) · 4/8
- [ ] [**P1–P9 in Italian**](plan/languages/it.md#p1p9-in-italian) · 3/8
- [ ] [**P1–P9 in Portuguese**](plan/languages/pt.md#p1p9-in-portuguese) · 3/8
- [ ] [**P1–P9 in Polish**](plan/languages/pl.md#p1p9-in-polish) · 3/8

### P10–P11 in every language

Trust pages: about, contact (E-E-A-T) · 2 pages

- [x] [**P10–P11 in German**](plan/languages/de.md#p10p11-in-german) · 2/2
- [x] [**P10–P11 in Spanish**](plan/languages/es.md#p10p11-in-spanish) · 2/2
- [x] [**P10–P11 in French**](plan/languages/fr.md#p10p11-in-french) · 2/2
- [x] [**P10–P11 in Dutch**](plan/languages/nl.md#p10p11-in-dutch) · 2/2
- [x] [**P10–P11 in Swedish**](plan/languages/sv.md#p10p11-in-swedish) · 2/2
- [x] [**P10–P11 in Danish**](plan/languages/da.md#p10p11-in-danish) · 2/2
- [x] [**P10–P11 in Norwegian (Bokmål)**](plan/languages/nb.md#p10p11-in-norwegian-bokmål) · 2/2
- [x] [**P10–P11 in Italian**](plan/languages/it.md#p10p11-in-italian) · 2/2
- [x] [**P10–P11 in Portuguese**](plan/languages/pt.md#p10p11-in-portuguese) · 2/2
- [x] [**P10–P11 in Polish**](plan/languages/pl.md#p10p11-in-polish) · 2/2

### P12–P15 in every language

Features, security, the countries hub and the German Impressum · 2 pages

- [ ] [**P12–P15 in German**](plan/languages/de.md#p12p15-in-german) · 0/2
- [ ] [**P12–P15 in Spanish**](plan/languages/es.md#p12p15-in-spanish) · 0/2
- [ ] [**P12–P15 in French**](plan/languages/fr.md#p12p15-in-french) · 0/2
- [ ] [**P12–P15 in Dutch**](plan/languages/nl.md#p12p15-in-dutch) · 0/2
- [ ] [**P12–P15 in Swedish**](plan/languages/sv.md#p12p15-in-swedish) · 0/2
- [ ] [**P12–P15 in Danish**](plan/languages/da.md#p12p15-in-danish) · 0/2
- [ ] [**P12–P15 in Norwegian (Bokmål)**](plan/languages/nb.md#p12p15-in-norwegian-bokmål) · 0/2
- [ ] [**P12–P15 in Italian**](plan/languages/it.md#p12p15-in-italian) · 0/2
- [ ] [**P12–P15 in Portuguese**](plan/languages/pt.md#p12p15-in-portuguese) · 0/2
- [ ] [**P12–P15 in Polish**](plan/languages/pl.md#p12p15-in-polish) · 0/2

## Not in a group yet

Pages that need a decision or code first, and pages on hold, with the reason in their brief.

- **on hold: e-invoicing** (3): [LO72 /it/fattura-elementi-obbligatori](plan/local.md#lo72--itfattura-elementi-obbligatori) · [LO73 /pt/requisitos-fatura](plan/local.md#lo73--ptrequisitos-fatura) · [LO74 /pl/elementy-faktury](plan/local.md#lo74--plelementy-faktury)
- **on hold: file downloads (53)** (4): [P16 /templates/invoice-template-word](plan/core.md#p16--templatesinvoice-template-word) · [P17 /templates/invoice-template-excel](plan/core.md#p17--templatesinvoice-template-excel) · [P18 /templates/invoice-template-google-docs](plan/core.md#p18--templatesinvoice-template-google-docs) · [P19 /templates/invoice-template-pdf](plan/core.md#p19--templatesinvoice-template-pdf)
