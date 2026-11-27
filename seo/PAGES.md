# Pages we have

> **Generated, don't edit by hand.** Every live page on invoicor.com and its translations,
> with its **key** (the search it's for), its language decision and the
> date it was made. What we still want to build is in [PLAN.md](PLAN.md). The data for both is
> [keyword-map.csv](keyword-map.csv). After adding or removing pages: `npm run build && npm run pages`.
> Is a key taken? `npm run pages -- --check "plumbing deposit invoice"` (`--lang de` for German).
> The site test fails when this file or the CSV is behind the site.

**223 live pages** · last change 2026-11-27 · 964 more planned in [PLAN.md](PLAN.md)

## Counts

| Section | Live | Page types |
|---|---|---|
| other English pages | 7 | legal 2, home 1, generator 1, support 1, program 1, android 1 |
| /compare | 21 | compare 20, hub 1 |
| /industries | 44 | industry 43, hub 1 |
| /templates | 67 | template 50, template (invoice type) 16, hub 1 |
| /tools | 4 | tool 4 |
| /da | 8 | tool 4, home 1, generator 1, support 1, android 1 |
| /de | 8 | tool 4, home 1, generator 1, support 1, android 1 |
| /es | 8 | tool 4, home 1, generator 1, support 1, android 1 |
| /fr | 8 | tool 4, home 1, generator 1, support 1, android 1 |
| /it | 8 | tool 4, home 1, generator 1, support 1, android 1 |
| /nb | 8 | tool 4, home 1, generator 1, support 1, android 1 |
| /nl | 8 | tool 4, home 1, generator 1, support 1, android 1 |
| /pl | 8 | tool 4, home 1, generator 1, support 1, android 1 |
| /pt | 8 | tool 4, home 1, generator 1, support 1, android 1 |
| /sv | 8 | tool 4, home 1, generator 1, support 1, android 1 |

## Languages

Every page has a language decision in the `localize` column (roadmap R4): **yes** = written per
country in all 11 languages (local words, rules and examples, not word for word), **local** = only
in its own language, **en-only** = stays English. The language versions still to write are on the
to-do list in [PLAN.md](PLAN.md#languages-l).

| Page type | Decision | English | Per other language | Still to write |
|---|---|---|---|---|
| home | yes | 1 | 1 |  |
| generator | yes | 1 | 1 |  |
| hub | yes, en-only | 3 | 0 | 20 |
| template | yes | 50 | 0 | 500 |
| industry | yes | 43 | 0 | 430 |
| compare | en-only | 20 | 0 |  |
| support | yes | 1 | 1 |  |
| program | yes | 1 | 0 | 10 |
| legal | yes | 2 | 0 | 20 |
| tool | yes | 4 | 4 |  |
| android | yes | 1 | 1 |  |
| template (invoice type) | yes, en-only | 16 | 0 | 140 |

**1120 language versions still to write** for live pages.

### invoicor.com: page type × language

| Type | en | nl | de | fr | es | it | pt | pl | sv | da | nb |
|---|---|---|---|---|---|---|---|---|---|---|---|
| home | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| generator | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| hub | 3 | · | · | · | · | · | · | · | · | · | · |
| template | 50 | · | · | · | · | · | · | · | · | · | · |
| industry | 43 | · | · | · | · | · | · | · | · | · | · |
| compare | 20 | · | · | · | · | · | · | · | · | · | · |
| support | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| program | 1 | · | · | · | · | · | · | · | · | · | · |
| legal | 2 | · | · | · | · | · | · | · | · | · | · |
| tool | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| android | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| template (invoice type) | 16 | · | · | · | · | · | · | · | · | · | · |

### Made per day

| Date | Pages | What |
|---|---|---|
| 2026-11-27 | 16 | template (invoice type) 16 |
| 2026-11-26 | 53 | template 30, industry 23 |
| 2026-11-18 | 124 | template 10, industry 10, compare 10, tool 4, hub 3, legal 2, home 1, generator 1, support 1, program 1, android 1, translations 80 (10 languages: tool 40, home 10, generator 10, support 10, android 10) |
| 2026-11-17 | 30 | template 10, industry 10, compare 10 |

## Keys that are too close

Live pages in the same language whose keys share most of their words (≥ 60%).
They may compete for the same search: merge them, or give one a clearly different key and intent.

| Alike | Page | Key | Page | Key |
|---|---|---|---|---|
| 62% | /templates/cleaning-services | cleaning invoice template | /templates/window-cleaning | window cleaning invoice template |
| 62% | /templates/cleaning-services | cleaning invoice template | /templates/carpet-cleaning | carpet cleaning invoice template |

## All pages

### other English pages (7)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| / | invoice app iphone | home | yes | 2026-11-18 |
| /affiliate | invoicor affiliate program | program | yes | 2026-11-18 |
| /android | invoicor for android: coming soon | android | yes | 2026-11-18 |
| /free-invoice-generator | free invoice generator | generator | yes | 2026-11-18 |
| /help | invoicor help | support | yes | 2026-11-18 |
| /privacy | invoicor privacy policy | legal | yes | 2026-11-18 |
| /terms | invoicor terms of service | legal | yes | 2026-11-18 |

### /compare (21)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /compare | invoice app alternatives | hub | en-only | 2026-11-18 |
| /compare/billdu | billdu alternative | compare | en-only | 2026-11-18 |
| /compare/bonsai | bonsai alternative | compare | en-only | 2026-11-17 |
| /compare/bookipi | bookipi alternative | compare | en-only | 2026-11-18 |
| /compare/freshbooks | freshbooks alternative | compare | en-only | 2026-11-17 |
| /compare/harvest | harvest alternative | compare | en-only | 2026-11-18 |
| /compare/honeybook | honeybook alternative | compare | en-only | 2026-11-17 |
| /compare/housecall-pro | housecall pro alternative | compare | en-only | 2026-11-18 |
| /compare/invoice-fly | invoice fly alternative | compare | en-only | 2026-11-18 |
| /compare/invoice-ninja | invoice ninja alternative | compare | en-only | 2026-11-18 |
| /compare/invoice2go | invoice2go alternative | compare | en-only | 2026-11-17 |
| /compare/jobber | jobber alternative | compare | en-only | 2026-11-18 |
| /compare/joist | joist alternative | compare | en-only | 2026-11-18 |
| /compare/quickbooks | quickbooks alternative | compare | en-only | 2026-11-17 |
| /compare/servicem8 | servicem8 alternative | compare | en-only | 2026-11-18 |
| /compare/square-invoices | square invoices alternative | compare | en-only | 2026-11-17 |
| /compare/stripe-invoices | stripe invoicing alternative | compare | en-only | 2026-11-17 |
| /compare/wave | wave alternative | compare | en-only | 2026-11-17 |
| /compare/xero | xero alternative | compare | en-only | 2026-11-17 |
| /compare/zervant | zervant alternative | compare | en-only | 2026-11-18 |
| /compare/zoho-invoice | zoho invoice alternative | compare | en-only | 2026-11-17 |

### /industries (44)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /industries | invoicing software by industry | hub | yes | 2026-11-18 |
| /industries/appliance-repair | invoice app for appliance repair technicians | industry | yes | 2026-11-26 |
| /industries/auto-detailing-mechanics | invoice app for mechanics | industry | yes | 2026-11-17 |
| /industries/bookkeepers | invoice app for bookkeepers | industry | yes | 2026-11-26 |
| /industries/carpenters | invoice app for carpenters | industry | yes | 2026-11-26 |
| /industries/carpet-cleaners | invoice app for carpet cleaners | industry | yes | 2026-11-26 |
| /industries/caterers | invoice app for caterers | industry | yes | 2026-11-18 |
| /industries/cleaning-services | invoice app for cleaning business | industry | yes | 2026-11-17 |
| /industries/consultants-coaches | invoicing software for consultants | industry | yes | 2026-11-17 |
| /industries/copywriters | invoice app for copywriters | industry | yes | 2026-11-26 |
| /industries/djs | invoice app for djs | industry | yes | 2026-11-26 |
| /industries/electricians | invoice app for electricians | industry | yes | 2026-11-17 |
| /industries/event-planners | invoice app for event planners | industry | yes | 2026-11-26 |
| /industries/flooring-installers | invoice app for flooring installers | industry | yes | 2026-11-26 |
| /industries/florists | invoice app for florists | industry | yes | 2026-11-26 |
| /industries/freelance-designers | invoicing app for freelance designers | industry | yes | 2026-11-17 |
| /industries/general-contractors | invoice app for contractors | industry | yes | 2026-11-17 |
| /industries/hair-makeup-artists | invoice app for makeup artists | industry | yes | 2026-11-18 |
| /industries/interior-designers | invoice app for interior designers | industry | yes | 2026-11-26 |
| /industries/junk-removal | invoice app for junk removal businesses | industry | yes | 2026-11-26 |
| /industries/landscaping-lawn-care | landscaping invoicing software | industry | yes | 2026-11-17 |
| /industries/locksmiths | invoice app for locksmiths | industry | yes | 2026-11-26 |
| /industries/masons | invoice app for masons | industry | yes | 2026-11-26 |
| /industries/massage-therapists | invoice app for massage therapists | industry | yes | 2026-11-26 |
| /industries/movers | invoice app for movers | industry | yes | 2026-11-18 |
| /industries/music-teachers | invoice app for music teachers | industry | yes | 2026-11-26 |
| /industries/painters | invoice app for painters | industry | yes | 2026-11-18 |
| /industries/personal-trainers | invoicing for personal trainers | industry | yes | 2026-11-17 |
| /industries/pest-control | pest control invoicing software | industry | yes | 2026-11-18 |
| /industries/pet-care | invoice app for dog walkers | industry | yes | 2026-11-18 |
| /industries/photographers-videographers | invoicing software for photographers | industry | yes | 2026-11-17 |
| /industries/plumbers-hvac | invoice app for plumbers | industry | yes | 2026-11-17 |
| /industries/pool-service | invoice app for pool service companies | industry | yes | 2026-11-26 |
| /industries/pressure-washing | invoice app for pressure washing businesses | industry | yes | 2026-11-26 |
| /industries/roofers | roofing invoice app | industry | yes | 2026-11-18 |
| /industries/snow-removal | invoice app for snow removal businesses | industry | yes | 2026-11-26 |
| /industries/social-media-managers | invoice app for social media managers | industry | yes | 2026-11-26 |
| /industries/tile-installers | invoice app for tile installers | industry | yes | 2026-11-26 |
| /industries/translators | invoice app for translators | industry | yes | 2026-11-26 |
| /industries/tree-service | invoice app for tree service companies | industry | yes | 2026-11-26 |
| /industries/tutors | invoice app for tutors | industry | yes | 2026-11-18 |
| /industries/virtual-assistants | invoice app for virtual assistants | industry | yes | 2026-11-18 |
| /industries/web-developers | invoice app for freelance developers | industry | yes | 2026-11-18 |
| /industries/window-cleaners | invoice app for window cleaners | industry | yes | 2026-11-26 |

### /templates (67)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /templates | invoice templates | hub | yes | 2026-11-18 |
| /templates/appliance-repair | appliance repair invoice template | template | yes | 2026-11-26 |
| /templates/auto-detailing | auto detailing invoice template | template | yes | 2026-11-17 |
| /templates/bookkeeping | bookkeeping invoice template | template | yes | 2026-11-26 |
| /templates/carpentry | carpentry invoice template | template | yes | 2026-11-26 |
| /templates/carpet-cleaning | carpet cleaning invoice template | template | yes | 2026-11-26 |
| /templates/catering | catering invoice template | template | yes | 2026-11-18 |
| /templates/cleaning-services | cleaning invoice template | template | yes | 2026-11-17 |
| /templates/commercial-invoice | commercial invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/construction | construction invoice template | template | yes | 2026-11-18 |
| /templates/consulting | consulting invoice template | template | yes | 2026-11-17 |
| /templates/copywriting | copywriter invoice template | template | yes | 2026-11-26 |
| /templates/deposit-invoice | deposit invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/dj | dj invoice template | template | yes | 2026-11-26 |
| /templates/drywall | drywall invoice template | template | yes | 2026-11-26 |
| /templates/electrician | electrician invoice template | template | yes | 2026-11-18 |
| /templates/event-planning | event planner invoice template | template | yes | 2026-11-26 |
| /templates/expense-reimbursement-invoice | reimbursement invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/fence-installation | fence installation invoice template | template | yes | 2026-11-26 |
| /templates/final-invoice | final invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/flooring | flooring invoice template | template | yes | 2026-11-26 |
| /templates/florist | florist invoice template | template | yes | 2026-11-26 |
| /templates/freelance-design | graphic design invoice template | template | yes | 2026-11-17 |
| /templates/freelance-invoice | freelance invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/garage-door-repair | garage door repair invoice template | template | yes | 2026-11-26 |
| /templates/handyman | handyman invoice template | template | yes | 2026-11-17 |
| /templates/hourly-invoice | hourly invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/hvac | hvac invoice template | template | yes | 2026-11-17 |
| /templates/independent-contractor-invoice | independent contractor invoice template | template (invoice type) | en-only | 2026-11-27 |
| /templates/interior-design | interior design invoice template | template | yes | 2026-11-26 |
| /templates/junk-removal | junk removal invoice template | template | yes | 2026-11-26 |
| /templates/labor-and-materials-invoice | labor and materials invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/landscaping | landscaping invoice template | template | yes | 2026-11-17 |
| /templates/locksmith | locksmith invoice template | template | yes | 2026-11-26 |
| /templates/makeup-artist | makeup artist invoice template | template | yes | 2026-11-26 |
| /templates/masonry | masonry invoice template | template | yes | 2026-11-26 |
| /templates/massage-therapy | massage therapy invoice template | template | yes | 2026-11-26 |
| /templates/milestone-invoice | milestone invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/monthly-invoice | monthly invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/moving | moving company invoice template | template | yes | 2026-11-18 |
| /templates/music-lessons | music teacher invoice template | template | yes | 2026-11-26 |
| /templates/no-vat-invoice | invoice without vat template | template (invoice type) | yes | 2026-11-27 |
| /templates/painting | painting invoice template | template | yes | 2026-11-18 |
| /templates/past-due-invoice | past due invoice template | template (invoice type) | en-only | 2026-11-27 |
| /templates/personal-training | personal trainer invoice template | template | yes | 2026-11-18 |
| /templates/pest-control | pest control invoice template | template | yes | 2026-11-18 |
| /templates/pet-sitting | pet sitting invoice template | template | yes | 2026-11-26 |
| /templates/photography | photography invoice template | template | yes | 2026-11-17 |
| /templates/plumbing | plumbing invoice template | template | yes | 2026-11-17 |
| /templates/pool-service | pool service invoice template | template | yes | 2026-11-26 |
| /templates/pressure-washing | pressure washing invoice template | template | yes | 2026-11-26 |
| /templates/remodeling | remodeling invoice template | template | yes | 2026-11-26 |
| /templates/retainer-invoice | retainer invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/roofing | roofing invoice template | template | yes | 2026-11-18 |
| /templates/sales-invoice | sales invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/service-invoice | service invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/snow-removal | snow removal invoice template | template | yes | 2026-11-26 |
| /templates/social-media-management | social media manager invoice template | template | yes | 2026-11-26 |
| /templates/subcontractor-invoice | subcontractor invoice template | template (invoice type) | yes | 2026-11-27 |
| /templates/tile-installation | tile installation invoice template | template | yes | 2026-11-26 |
| /templates/translation | translation invoice template | template | yes | 2026-11-26 |
| /templates/tree-service | tree service invoice template | template | yes | 2026-11-26 |
| /templates/tutoring | tutoring invoice template | template | yes | 2026-11-18 |
| /templates/videography | videography invoice template | template | yes | 2026-11-17 |
| /templates/virtual-assistant | virtual assistant invoice template | template | yes | 2026-11-26 |
| /templates/web-development | web development invoice template | template | yes | 2026-11-18 |
| /templates/window-cleaning | window cleaning invoice template | template | yes | 2026-11-26 |

### /tools (4)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /tools | free invoicing tools | tool | yes | 2026-11-18 |
| /tools/hourly-rate-calculator | freelance hourly rate calculator | tool | yes | 2026-11-18 |
| /tools/hours-calculator | hours calculator | tool | yes | 2026-11-18 |
| /tools/vat-calculator | vat calculator | tool | yes | 2026-11-18 |

### /da (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /da | faktura-app til iphone | home | yes | 2026-11-18 |
| /da/android | invoicor til android: kommer snart | android | yes | 2026-11-18 |
| /da/hjaelp | hjælp og ofte stillede spørgsmål | support | yes | 2026-11-18 |
| /da/lav-faktura | lav faktura | generator | yes | 2026-11-18 |
| /da/vaerktoejer | gratis værktøjer: fakturagenerator og beregnere | tool | yes | 2026-11-18 |
| /da/vaerktoejer/beregn-timepris | beregn timepris | tool | yes | 2026-11-18 |
| /da/vaerktoejer/momsberegner | momsberegner: beregn moms online (gratis) | tool | yes | 2026-11-18 |
| /da/vaerktoejer/timeberegner | timeberegner: beregn timer til fakturaen | tool | yes | 2026-11-18 |

### /de (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /de | rechnungs-app für iphone | home | yes | 2026-11-18 |
| /de/android | invoicor für android: bald verfügbar | android | yes | 2026-11-18 |
| /de/hilfe | hilfe und häufige fragen | support | yes | 2026-11-18 |
| /de/rechnung-erstellen | rechnung erstellen | generator | yes | 2026-11-18 |
| /de/tools | kostenlose tools: rechnung, mwst-rechner & mehr | tool | yes | 2026-11-18 |
| /de/tools/mehrwertsteuer-rechner | mehrwertsteuer rechner | tool | yes | 2026-11-18 |
| /de/tools/stundenrechner | stundenrechner: arbeitsstunden für die rechnung | tool | yes | 2026-11-18 |
| /de/tools/stundensatz-rechner | stundensatz rechner | tool | yes | 2026-11-18 |

### /es (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /es | app para hacer facturas gratis en iphone | home | yes | 2026-11-18 |
| /es/android | invoicor para android: muy pronto | android | yes | 2026-11-18 |
| /es/ayuda | ayuda y preguntas frecuentes | support | yes | 2026-11-18 |
| /es/crear-factura | crear factura | generator | yes | 2026-11-18 |
| /es/herramientas | herramientas gratis para facturar | tool | yes | 2026-11-18 |
| /es/herramientas/calculadora-horas | calculadora horas | tool | yes | 2026-11-18 |
| /es/herramientas/calculadora-iva | calculadora iva | tool | yes | 2026-11-18 |
| /es/herramientas/calcular-precio-hora | calcular precio hora | tool | yes | 2026-11-18 |

### /fr (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /fr | application facture iphone | home | yes | 2026-11-18 |
| /fr/aide | aide et questions fréquentes | support | yes | 2026-11-18 |
| /fr/android | invoicor pour android : bientôt disponible | android | yes | 2026-11-18 |
| /fr/creer-une-facture | creer une facture | generator | yes | 2026-11-18 |
| /fr/outils | outils gratuits : facture, calcul tva, heures | tool | yes | 2026-11-18 |
| /fr/outils/calcul-heures | calcul heures | tool | yes | 2026-11-18 |
| /fr/outils/calcul-taux-horaire | calcul taux horaire | tool | yes | 2026-11-18 |
| /fr/outils/calcul-tva | calcul tva | tool | yes | 2026-11-18 |

### /it (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /it | app per fatture su iphone, gratis per iniziare | home | yes | 2026-11-18 |
| /it/aiuto | centro assistenza e aiuto | support | yes | 2026-11-18 |
| /it/android | invoicor per android: in arrivo | android | yes | 2026-11-18 |
| /it/crea-fattura | crea fattura | generator | yes | 2026-11-18 |
| /it/strumenti | strumenti gratuiti: fattura, calcolo iva e ore | tool | yes | 2026-11-18 |
| /it/strumenti/calcolo-iva | calcolo iva | tool | yes | 2026-11-18 |
| /it/strumenti/calcolo-ore | calcolo ore | tool | yes | 2026-11-18 |
| /it/strumenti/calcolo-tariffa-oraria | calcolo tariffa oraria | tool | yes | 2026-11-18 |

### /nb (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /nb | faktura-app for iphone | home | yes | 2026-11-18 |
| /nb/android | invoicor for android: kommer snart | android | yes | 2026-11-18 |
| /nb/hjelp | hjelp og vanlige spørsmål | support | yes | 2026-11-18 |
| /nb/lag-faktura | lag faktura | generator | yes | 2026-11-18 |
| /nb/verktoy | gratis verktøy: faktura, mva og timepris | tool | yes | 2026-11-18 |
| /nb/verktoy/beregn-timepris | beregn timepris | tool | yes | 2026-11-18 |
| /nb/verktoy/mva-kalkulator | mva kalkulator | tool | yes | 2026-11-18 |
| /nb/verktoy/timekalkulator | timekalkulator: regne ut timer til fakturaen | tool | yes | 2026-11-18 |

### /nl (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /nl | factuur app voor iphone | home | yes | 2026-11-18 |
| /nl/android | invoicor voor android: binnenkort | android | yes | 2026-11-18 |
| /nl/gratis-factuur-maken | gratis factuur maken | generator | yes | 2026-11-18 |
| /nl/help | help en veelgestelde vragen | support | yes | 2026-11-18 |
| /nl/tools | gratis tools voor zzp'ers: factuur en btw | tool | yes | 2026-11-18 |
| /nl/tools/btw-berekenen | btw berekenen | tool | yes | 2026-11-18 |
| /nl/tools/uren-berekenen | uren berekenen | tool | yes | 2026-11-18 |
| /nl/tools/uurtarief-berekenen | uurtarief berekenen | tool | yes | 2026-11-18 |

### /pl (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /pl | darmowa aplikacja do faktur na iphone'a | home | yes | 2026-11-18 |
| /pl/android | invoicor na androida: już wkrótce | android | yes | 2026-11-18 |
| /pl/narzedzia | darmowe narzędzia: generator faktur i kalkulatory | tool | yes | 2026-11-18 |
| /pl/narzedzia/kalkulator-godzin | kalkulator godzin | tool | yes | 2026-11-18 |
| /pl/narzedzia/kalkulator-stawki-godzinowej | kalkulator stawki godzinowej | tool | yes | 2026-11-18 |
| /pl/narzedzia/kalkulator-vat | kalkulator vat | tool | yes | 2026-11-18 |
| /pl/pomoc | pomoc i najczęstsze pytania | support | yes | 2026-11-18 |
| /pl/wystaw-fakture | wystaw fakture | generator | yes | 2026-11-18 |

### /pt (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /pt | app de faturas para iphone | home | yes | 2026-11-18 |
| /pt/ajuda | ajuda e perguntas frequentes | support | yes | 2026-11-18 |
| /pt/android | invoicor para android: em breve | android | yes | 2026-11-18 |
| /pt/criar-fatura | criar fatura | generator | yes | 2026-11-18 |
| /pt/ferramentas | ferramentas grátis: faturas, iva e horas | tool | yes | 2026-11-18 |
| /pt/ferramentas/calculadora-horas | calculadora horas | tool | yes | 2026-11-18 |
| /pt/ferramentas/calcular-iva | calcular iva | tool | yes | 2026-11-18 |
| /pt/ferramentas/calcular-preco-hora | calcular preco hora | tool | yes | 2026-11-18 |

### /sv (8)

| URL | Key | Type | Languages | Made |
|---|---|---|---|---|
| /sv | fakturaapp för iphone | home | yes | 2026-11-18 |
| /sv/android | invoicor för android: kommer snart | android | yes | 2026-11-18 |
| /sv/hjalp | hjälp och vanliga frågor | support | yes | 2026-11-18 |
| /sv/skapa-faktura | skapa faktura | generator | yes | 2026-11-18 |
| /sv/verktyg | gratis verktyg: faktura, momsräknare, timpris | tool | yes | 2026-11-18 |
| /sv/verktyg/momsraknare | momsräknare: räkna ut moms online gratis | tool | yes | 2026-11-18 |
| /sv/verktyg/rakna-ut-timpris | rakna ut timpris | tool | yes | 2026-11-18 |
| /sv/verktyg/timraknare | räkna timmar: gratis timräknare för fakturan | tool | yes | 2026-11-18 |
