# Trade templates

> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**50 done · 263 planned**

## Direction

- **URL:** `/templates/{trade}` · **Key:** "{trade} invoice template"
- **Blueprint:** [BLUEPRINTS.md](../BLUEPRINTS.md#template-templatesslug) · **Where it's written:** `content/templates.json`
- **Links to:** its industry page (`industry` field), 2 related templates, the trade's billing-type pages once they exist.
- **Languages:** **yes**: written per country later (local trade names and prices), after the language setup (H4).

**Can do:**

- One page per trade with real work of its own: its jobs, units (per hour, per square foot, per visit), materials, terms and billing habits.
- A filled-in sample invoice with realistic prices; the free generator opens with it (Use this template).
- Trade-specific notes, mistakes, a pro tip and FAQs about how that trade invoices.
- Name the PDF: why a PDF works for this trade, and the free generator.

**Can't do:**

- A trade that's only a synonym or a sub-niche of a live one (wedding photography is part of /templates/photography, mobile mechanic of /templates/auto-repair): improve that page instead.
- Two trades on one page: one trade, one key (auto detailing and auto repair are two searches, so two pages).
- Word, Excel or Google Docs downloads: we don't offer those files (S1-n).
- City or state versions of the same trade (doorway pages).
- Billing-type questions in depth (deposits, retainers, hourly): those are their own pages, see Billing-type templates.

## Done (50): don't build these again

`photography` photography invoice template · `plumbing` plumbing invoice template · `hvac` hvac invoice template · `freelance-design` graphic design invoice template · `handyman` handyman invoice template · `videography` videography invoice template · `landscaping` landscaping invoice template · `consulting` consulting invoice template · `cleaning-services` cleaning invoice template · `auto-detailing` auto detailing invoice template · `electrician` electrician invoice template · `construction` construction invoice template · `roofing` roofing invoice template · `painting` painting invoice template · `web-development` web development invoice template · `personal-training` personal trainer invoice template · `tutoring` tutoring invoice template · `catering` catering invoice template · `moving` moving company invoice template · `pest-control` pest control invoice template · `virtual-assistant` virtual assistant invoice template · `pet-sitting` pet sitting invoice template · `makeup-artist` makeup artist invoice template · `carpentry` carpentry invoice template · `flooring` flooring invoice template · `tile-installation` tile installation invoice template · `drywall` drywall invoice template · `masonry` masonry invoice template · `fence-installation` fence installation invoice template · `pool-service` pool service invoice template · `window-cleaning` window cleaning invoice template · `pressure-washing` pressure washing invoice template · `tree-service` tree service invoice template · `snow-removal` snow removal invoice template · `locksmith` locksmith invoice template · `appliance-repair` appliance repair invoice template · `junk-removal` junk removal invoice template · `carpet-cleaning` carpet cleaning invoice template · `interior-design` interior design invoice template · `remodeling` remodeling invoice template · `garage-door-repair` garage door repair invoice template · `dj` dj invoice template · `event-planning` event planner invoice template · `florist` florist invoice template · `massage-therapy` massage therapy invoice template · `translation` translation invoice template · `copywriting` copywriter invoice template · `social-media-management` social media manager invoice template · `music-lessons` music teacher invoice template · `bookkeeping` bookkeeping invoice template

## Planned (263)

### Item T4 (10)

#### /templates/notary

- **Key:** notary invoice template · also: mobile notary invoice; loan signing invoice
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Mobile notaries and loan signing agents: fees per notarial act are capped by state law (each state publishes its maximum; check and say "check your state's fee schedule"), travel fees billed separately, loan signings paid by signing services or title companies (often net 30), printing and courier fees. Sample: a loan signing with travel and printing. FAQs: can I charge travel, what's the maximum fee, who pays a loan signing, what to put on the invoice.
- **Notes:** industry: notaries; en-only: in DE, FR, ES, IT and NL a notary is a state-appointed lawyer with fees set by law, not a mobile signing service

#### /templates/home-inspection

- **Key:** home inspection invoice template · also: home inspector invoice; inspection report invoice
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Home inspectors: the base fee by square footage and age, add-ons (radon, sewer scope, mold, wood-destroying insects), re-inspection fees, payment due at or before the inspection, buyer vs agent paying, report delivery terms. Sample: a 2,400 sq ft inspection with radon and a sewer scope.
- **Don't write about:** Pest treatment itself (owned by /templates/pest-control): a wood-destroying insect report is mentioned, not explained.
- **Notes:** industry: home-inspectors

#### /templates/it-services

- **Key:** it services invoice template · also: computer repair invoice template; it support invoice
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. IT support and computer repair: hourly support (remote vs on-site, minimum charge), managed services per device or user per month, hardware and licenses resold (with markup, warranty), project work. Sample: a small-office month with 12 managed devices, an on-site visit and a laptop.
- **Don't write about:** Websites and web projects (owned by /templates/web-development).
- **Already covered (link, don't repeat):** /templates/pool-service (“pool service invoice template”) · /templates/tree-service (“tree service invoice template”)
- **Notes:** industry: it-technicians

#### /templates/drone-services

- **Key:** drone services invoice template · also: drone photography invoice; aerial photography invoice
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Drone pilots: flight time or per project, the FAA Part 107 certificate number on the invoice (US commercial pilots need it; verify), editing and deliverables (photos, video, maps), licensing and usage, travel, weather reschedules. Sample: a real-estate aerial package.
- **Don't write about:** Photo usage rights in general (owned by /templates/photography).
- **Already covered (link, don't repeat):** /templates/pool-service (“pool service invoice template”) · /templates/tree-service (“tree service invoice template”)
- **Notes:** industry: drone-pilots

#### /templates/tattoo

- **Key:** tattoo invoice template · also: tattoo artist invoice; tattoo receipt
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Tattoo artists and studios: hourly vs a set price per piece, the booking deposit (non-refundable, applied to the final price), touch-up policy, design fees for custom work, multi-session pieces, cash tips. Sample: a two-session half sleeve with a deposit applied.
- **Don't write about:** Makeup and beauty services (owned by /templates/makeup-artist).
- **Notes:** industry: tattoo-artists

#### /templates/personal-chef

- **Key:** personal chef invoice template · also: private chef invoice; meal prep invoice
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Personal and private chefs: service fee per day or per person, groceries at cost (with receipts) on their own lines, weekly meal-prep packages, dinner parties, travel, cleanup. Sample: a weekly meal-prep week with groceries.
- **Don't write about:** Event catering for big groups (owned by /templates/catering).
- **Already covered (link, don't repeat):** /templates/personal-training (“personal trainer invoice template”)
- **Notes:** industry: personal-chefs

#### /templates/bakery

- **Key:** bakery invoice template · also: cake order invoice; custom cake invoice
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Home and small bakeries: custom cake orders (tiers, servings, design), the order deposit, delivery and setup, tastings, wholesale orders to cafés on account; sales tax on food differs by state (hedge). Sample: a wedding cake order with delivery.
- **Don't write about:** Full event catering (owned by /templates/catering).
- **Notes:** industry: bakers

#### /templates/dog-training

- **Key:** dog training invoice template · also: dog trainer invoice
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Dog trainers: session packages (6 sessions paid up front), private vs group classes, board-and-train programs, behavior consults, travel. Sample: a 6-session package plus an evaluation.
- **Don't write about:** Walks, sitting and grooming (owned by /templates/pet-sitting).
- **Notes:** industry: dog-trainers

#### /templates/musician

- **Key:** musician invoice template · also: band invoice template; gig invoice
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Musicians and bands: performance fee per set or per event, the deposit to hold the date, travel and accommodation, backline and sound, overtime, splitting between band members (who invoices). Sample: a wedding ceremony and reception gig.
- **Don't write about:** DJ services (owned by /templates/dj).
- **Notes:** industry: musicians

#### /templates/voice-over

- **Key:** voice over invoice template · also: voice actor invoice
- **Item:** T4 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Voice actors: session fee plus usage (broadcast, online, internal; term and territory), pickups and revisions, studio fees, rush fees. Sample: an online ad with a 1-year usage line.
- **Don't write about:** Copywriting (owned by /templates/copywriting).
- **Notes:** industry: voice-actors

### Item T5 (20)

#### /templates/chimney-sweep

- **Key:** chimney sweep invoice template · also: chimney cleaning invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Inspection levels (Level 1/2/3 per NFPA 211; check), cleaning per flue, creosote removal, cap and crown repair, a camera inspection report.
- **Notes:** industry: chimney-sweeps

#### /templates/gutter-cleaning

- **Key:** gutter cleaning invoice template · also: gutter cleaner invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Price per linear foot and by number of stories, downspout flushing, gutter guard installs, seasonal repeat visits.
- **Already covered (link, don't repeat):** /templates/cleaning-services (“cleaning invoice template”) · /templates/window-cleaning (“window cleaning invoice template”) · /templates/carpet-cleaning (“carpet cleaning invoice template”)
- **Notes:** industry: gutter-cleaners

#### /templates/septic-service

- **Key:** septic pumping invoice template · also: septic service invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Pumping by tank size or gallons, disposal fees, locating and digging up lids, inspections for home sales, baffle and filter repairs.
- **Notes:** industry: septic-companies

#### /templates/irrigation

- **Key:** irrigation invoice template · also: sprinkler repair invoice; sprinkler winterization invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Spring startups and fall winterization (blowouts), zones, heads and valves as parts, backflow testing (licensed in many states; hedge).
- **Notes:** industry: irrigation-contractors

#### /templates/deck-building

- **Key:** deck building invoice template · also: deck contractor invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Price per square foot, wood vs composite materials, railings and stairs, permits, the deposit and progress payments.
- **Don't write about:** Staining and painting a deck (owned by /templates/painting).
- **Notes:** industry: deck-builders

#### /templates/cabinet-installation

- **Key:** cabinet installation invoice template · also: kitchen cabinet invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per linear foot or per box, removal of old cabinets, hardware, crown molding, who supplies the cabinets.
- **Don't write about:** Full remodels (owned by /templates/remodeling).
- **Notes:** industry: cabinet-installers

#### /templates/countertop-installation

- **Key:** countertop installation invoice template · also: granite countertop invoice; quartz countertop invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Price per square foot of slab, templating visit, sink and cooktop cutouts, edge profiles, the deposit at templating, removal of old tops.
- **Notes:** industry: countertop-installers

#### /templates/insulation

- **Key:** insulation invoice template · also: insulation contractor invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Square feet and R-value, blown-in vs batts vs spray foam, removal of old insulation, air sealing; energy rebates change (hedge, check current programs).
- **Notes:** industry: insulation-contractors

#### /templates/siding

- **Key:** siding installation invoice template · also: siding contractor invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Price per square (100 sq ft), material (vinyl, fiber cement, wood), trim and wrap, tear-off and disposal.
- **Notes:** industry: siding-contractors

#### /templates/window-installation

- **Key:** window installation invoice template · also: window replacement invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Price per window by size and type, removal and disposal, capping and trim, glass options, permits where needed.
- **Don't write about:** Window cleaning (owned by /templates/window-cleaning).
- **Already covered (link, don't repeat):** /templates/window-cleaning (“window cleaning invoice template”) · /industries/window-cleaners (“invoice app for window cleaners”)
- **Notes:** industry: window-installers

#### /templates/asphalt-paving

- **Key:** asphalt paving invoice template · also: paving invoice; sealcoating invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Square feet or tons, base preparation, sealcoating and crack filling, striping, the deposit for materials.
- **Notes:** industry: paving-contractors

#### /templates/excavation

- **Key:** excavation invoice template · also: excavating invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Machine hours by machine, operator, trucking and haul-off per load, trenching, mobilization fee.
- **Notes:** industry: excavation-contractors

#### /templates/demolition

- **Key:** demolition invoice template · also: demo contractor invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Labor, dumpster and disposal by ton, permits, hazardous material testing by licensed specialists (asbestos: hedge, never DIY advice).
- **Notes:** industry: demolition-contractors

#### /templates/solar-installation

- **Key:** solar installation invoice template · also: solar panel installation invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. System size in kW, panels and inverter, racking, permits and interconnection, progress payments; incentives change (hedge, check the current rules).
- **Don't write about:** Electrical work in general (owned by /templates/electrician).
- **Notes:** industry: solar-installers

#### /templates/home-staging

- **Key:** home staging invoice template · also: staging invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Consultation fee, furniture and decor rental per month, install and de-stage, extending the rental when a house doesn't sell.
- **Notes:** industry: home-stagers

#### /templates/security-system-installation

- **Key:** security system installation invoice template · also: alarm installation invoice; camera installation invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Equipment (cameras, panels, sensors), install labor, monitoring per month (in the app: duplicate monthly), licensing in some states (hedge).
- **Notes:** industry: security-system-installers

#### /templates/home-theater-installation

- **Key:** home theater installation invoice template · also: tv mounting invoice; av installation invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. TV mounting, in-wall wiring, speakers, calibration, equipment supplied or resold.
- **Notes:** industry: av-installers

#### /templates/mold-remediation

- **Key:** mold remediation invoice template · also: mold removal invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Containment, square feet treated, HEPA cleanup, third-party testing as its own line, insurance claims (hedge).
- **Notes:** industry: mold-remediation-companies

#### /templates/water-damage-restoration

- **Key:** water damage restoration invoice template · also: water mitigation invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Extraction, drying equipment per day (air movers, dehumidifiers), moisture logs, insurance-claim pricing (many insurers use Xactimate; mention, don't explain).
- **Notes:** industry: restoration-companies

#### /templates/air-duct-cleaning

- **Key:** air duct cleaning invoice template · also: duct cleaning invoice; dryer vent cleaning invoice
- **Item:** T5 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per system or per vent, dryer vent add-on, sanitizing, before/after photos sent with the invoice (not attached in the app).
- **Don't write about:** HVAC repair (owned by /templates/hvac).
- **Already covered (link, don't repeat):** /templates/cleaning-services (“cleaning invoice template”)
- **Notes:** industry: duct-cleaners

### Item T6 (20)

#### /templates/welding

- **Key:** welding invoice template · also: mobile welding invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly plus rig time, materials by the foot or pound, mobile trip charge, certified welds (hedge).
- **Notes:** industry: welders

#### /templates/sign-making

- **Key:** sign invoice template · also: sign company invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Design, materials and size, installation, permits for outdoor signs, the deposit.
- **Notes:** industry: sign-makers

#### /templates/screen-printing

- **Key:** screen printing invoice template · also: t-shirt printing invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Price per piece by quantity break, screen setup per color, garments supplied or bought, rush fees.
- **Notes:** industry: screen-printers

#### /templates/embroidery

- **Key:** embroidery invoice template · also: custom embroidery invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Stitch count, the digitizing fee, per piece by quantity, customer-supplied garments.
- **Notes:** industry: embroidery-businesses

#### /templates/alterations

- **Key:** alterations invoice template · also: tailoring invoice; sewing invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per garment and alteration (hem, take in, zipper), rush, wedding dress fittings in stages.
- **Notes:** industry: tailors

#### /templates/jewelry-repair

- **Key:** jewelry repair invoice template · also: jeweler invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Sizing, stone setting, soldering, cleaning, the item's description and insured value on the invoice (hedge appraisals).
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: jewelers

#### /templates/bike-repair

- **Key:** bike repair invoice template · also: bicycle repair invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Tune-up levels, parts and labor, e-bike work, pickup and delivery.
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: bike-mechanics

#### /templates/small-engine-repair

- **Key:** small engine repair invoice template · also: lawn mower repair invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Diagnostic fee, parts, labor, seasonal tune-ups, pickup fees.
- **Notes:** industry: small-engine-mechanics

#### /templates/boat-repair

- **Key:** boat repair invoice template · also: marine service invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Haul-out and launch, engine hours, bottom paint, winterization, storage per month.
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: marine-mechanics

#### /templates/rv-repair

- **Key:** rv repair invoice template · also: mobile rv repair invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Mobile trip charge, roof sealing, appliances, parts with lead times.
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: rv-technicians

#### /templates/towing

- **Key:** towing invoice template · also: tow truck invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hook-up fee, per mile, storage per day, after-hours and winching; rates are capped in some cities and states (hedge).
- **Notes:** industry: towing-companies

#### /templates/courier

- **Key:** courier invoice template · also: delivery invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per delivery or zone, mileage, waiting time, rush and after-hours, monthly statements for business clients.
- **Notes:** industry: couriers

#### /templates/trucking

- **Key:** trucking invoice template · also: owner operator invoice; freight invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Rate confirmation and load number, detention, lumper fees, fuel surcharge, the bill of lading number; factoring companies (mention).
- **Notes:** industry: owner-operators

#### /templates/limousine-service

- **Key:** limousine service invoice template · also: chauffeur invoice; car service invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly with a minimum, gratuity, tolls and parking, waiting time, airport transfers.
- **Already covered (link, don't repeat):** /templates/pool-service (“pool service invoice template”) · /templates/tree-service (“tree service invoice template”)
- **Notes:** industry: limo-services

#### /templates/photo-booth-rental

- **Key:** photo booth rental invoice template · also: photo booth invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hours, prints, props and backdrops, setup and travel, the date-hold deposit.
- **Notes:** industry: photo-booth-rentals

#### /templates/party-rentals

- **Key:** party rental invoice template · also: event rental invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Items per day (tents, tables, chairs), delivery and setup, a damage deposit, late returns.
- **Notes:** industry: party-rental-companies

#### /templates/wedding-officiant

- **Key:** wedding officiant invoice template · also: officiant invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Ceremony fee, rehearsal, travel, custom ceremony writing, filing the license (rules vary).
- **Notes:** industry: officiants

#### /templates/illustration

- **Key:** illustration invoice template · also: illustrator invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per piece, the usage license, revision rounds, the kill fee.
- **Don't write about:** Graphic design (owned by /templates/freelance-design).
- **Notes:** industry: illustrators

#### /templates/video-editing

- **Key:** video editing invoice template · also: video editor invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per hour or per finished minute, revision rounds, footage storage, rush delivery.
- **Don't write about:** Filming and production (owned by /templates/videography).
- **Notes:** industry: video-editors

#### /templates/podcast-production

- **Key:** podcast production invoice template · also: podcast editing invoice
- **Item:** T6 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per episode, editing and mixing, show notes, hosting passed through.
- **Notes:** industry: podcast-producers

### Item T7 (20)

#### /templates/seo-services

- **Key:** seo invoice template · also: seo services invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Monthly retainer, audits, content and links as lines; never promise rankings.
- **Notes:** industry: seo-consultants

#### /templates/marketing-agency

- **Key:** marketing agency invoice template · also: marketing invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Retainer plus campaigns, ad spend passed through, creative production.
- **Don't write about:** Social media management (owned by /templates/social-media-management).
- **Notes:** industry: marketing-agencies

#### /templates/ux-design

- **Key:** ux design invoice template · also: ux designer invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Research, wireframes, prototypes and testing by phase or sprint.
- **Don't write about:** Graphic design (owned by /templates/freelance-design).
- **Already covered (link, don't repeat):** /templates/freelance-design (“graphic design invoice template”) · /templates/interior-design (“interior design invoice template”)
- **Notes:** industry: ux-designers

#### /templates/app-development

- **Key:** app development invoice template · also: mobile app developer invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Milestones, app store fees passed through, maintenance after launch.
- **Don't write about:** Websites (owned by /templates/web-development).
- **Already covered (link, don't repeat):** /templates/web-development (“web development invoice template”)
- **Notes:** industry: app-developers

#### /templates/data-analysis

- **Key:** data analysis invoice template · also: data analyst invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly or per project, dashboards and reports as deliverables, data access terms.
- **Notes:** industry: data-analysts

#### /templates/tax-preparation

- **Key:** tax preparation invoice template · also: tax preparer invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per return and per form or schedule, state returns, e-filing; preparers need a PTIN in the US (hedge).
- **Don't write about:** Bookkeeping (owned by /templates/bookkeeping).
- **Already covered (link, don't repeat):** learn:/what-does-an-invoice-tax-calculator-do (“what does an invoice tax calculator do”)
- **Notes:** industry: tax-preparers; en-only: US-style tax preparation; elsewhere fees are often regulated (Germany: StBVV)

#### /templates/attorney

- **Key:** attorney invoice template · also: legal invoice; law firm invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly in tenths of an hour, costs advanced, flat-fee matters; client trust (IOLTA) accounting is not something Invoicor does: say so; ethics rules vary by state.
- **Notes:** industry: lawyers

#### /templates/property-management

- **Key:** property management invoice template · also: property manager invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Management fee as a % of rent, leasing fees, maintenance passed through, owner statements.
- **Notes:** industry: property-managers

#### /templates/rent

- **Key:** rent invoice template · also: rent receipt; monthly rent invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Monthly rent, utilities, late fees (state caps; hedge), deposits; in the app, duplicate each month.
- **Don't write about:** Property management fees (owned by /templates/property-management).
- **Notes:** industry: landlords

#### /templates/security-guard

- **Key:** security guard invoice template · also: security services invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly per guard, armed or unarmed, overtime and holidays, event security.
- **Notes:** industry: security-companies

#### /templates/therapy

- **Key:** therapist invoice template · also: counseling invoice; superbill template
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Session fees, a superbill for out-of-network clients (diagnosis and procedure codes; hedge), minimal health details; never claim HIPAA compliance.
- **Already covered (link, don't repeat):** /industries/massage-therapists (“invoice app for massage therapists”)
- **Notes:** industry: therapists

#### /templates/nutrition

- **Key:** nutritionist invoice template · also: dietitian invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Consults, packages, meal plans, follow-ups.
- **Notes:** industry: nutritionists

#### /templates/yoga

- **Key:** yoga instructor invoice template · also: yoga teacher invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Classes taught for studios, private sessions, workshops and retreats.
- **Notes:** industry: yoga-teachers

#### /templates/dance-lessons

- **Key:** dance teacher invoice template · also: dance studio invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Monthly tuition, private lessons, costume and recital fees.
- **Already covered (link, don't repeat):** /templates/music-lessons (“music teacher invoice template”)
- **Notes:** industry: dance-teachers

#### /templates/swim-lessons

- **Key:** swim lessons invoice template · also: swim instructor invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per lesson and packages, pool rental, group vs private.
- **Notes:** industry: swim-instructors

#### /templates/sports-coaching

- **Key:** sports coach invoice template · also: private coaching invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Private sessions, camps and clinics, team fees.
- **Don't write about:** Personal training (owned by /templates/personal-training).
- **Notes:** industry: sports-coaches

#### /templates/babysitting

- **Key:** babysitting invoice template · also: nanny invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly, extra children, late nights; a nanny working regularly for one family may be a household employee (hedge: check the tax rules).
- **Notes:** industry: babysitters

#### /templates/caregiving

- **Key:** caregiver invoice template · also: home care invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Non-medical home care by the hour, overnights, mileage, errands; no medical claims.
- **Notes:** industry: caregivers

#### /templates/doula

- **Key:** doula invoice template · also: birth doula invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The birth package, the deposit, on-call period, postpartum hours.
- **Notes:** industry: doulas

#### /templates/barber

- **Key:** barber invoice template · also: barbershop invoice
- **Item:** T7 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Chair rental vs commission, house calls and events, products.
- **Don't write about:** Hair and makeup for events (owned by /templates/makeup-artist).
- **Notes:** industry: barbers

### Item T8 (20)

#### /templates/nail-technician

- **Key:** nail technician invoice template · also: nail salon invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Services and add-ons, booth rental, mobile appointments.
- **Notes:** industry: nail-technicians

#### /templates/esthetician

- **Key:** esthetician invoice template · also: skin care invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Facials and treatments, packages, products sold.
- **Notes:** industry: estheticians

#### /templates/lash-extensions

- **Key:** lash tech invoice template · also: eyelash extension invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Full sets and fills, removal, deposits for bookings.
- **Notes:** industry: lash-technicians

#### /templates/art-commission

- **Key:** art commission invoice template · also: commissioned artwork invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The commission price, deposit, sizes and materials, shipping, reproduction rights.
- **Don't write about:** Illustration for clients (owned by /templates/illustration).
- **Notes:** industry: artists

#### /templates/music-production

- **Key:** music producer invoice template · also: beat invoice; music production invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per track, mixing and mastering, beat leases vs exclusive rights, studio time.
- **Already covered (link, don't repeat):** /templates/music-lessons (“music teacher invoice template”)
- **Notes:** industry: music-producers

#### /templates/recording-studio

- **Key:** recording studio invoice template · also: studio time invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly or day rates, engineer, mixing, file delivery.
- **Notes:** industry: recording-studios

#### /templates/sound-engineering

- **Key:** sound engineer invoice template · also: live sound invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Day rates for events, equipment, load-in and overtime.
- **Notes:** industry: sound-engineers

#### /templates/content-creator

- **Key:** content creator invoice template · also: influencer invoice; ugc invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Deliverables per post or video, usage rights and term, exclusivity, whitelisting.
- **Notes:** industry: content-creators

#### /templates/proofreading

- **Key:** proofreading invoice template · also: editing invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per word or per page, levels of editing, turnaround.
- **Don't write about:** Copywriting (owned by /templates/copywriting).
- **Notes:** industry: proofreaders

#### /templates/driving-instructor

- **Key:** driving instructor invoice template · also: driving lessons invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per lesson and packages, test day fees, car use.
- **Notes:** industry: driving-instructors

#### /templates/farm

- **Key:** farm invoice template · also: produce invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Wholesale orders by unit (case, pound), delivery, standing weekly orders; food sales tax rules vary.
- **Notes:** industry: farmers

#### /templates/print-shop

- **Key:** print shop invoice template · also: printing invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Quantities and paper, design and proofs, finishing, delivery.
- **Notes:** industry: print-shops

#### /templates/3d-printing

- **Key:** 3d printing invoice template · also: 3d printing service invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per part by material and hours, design or modeling, setup.
- **Notes:** industry: 3d-printing-services

#### /templates/laser-engraving

- **Key:** laser engraving invoice template · also: engraving invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per item, setup and artwork, materials supplied or not.
- **Notes:** industry: engravers

#### /templates/custom-furniture

- **Key:** custom furniture invoice template · also: furniture maker invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The design, the deposit, materials, finishing, delivery.
- **Don't write about:** Carpentry on site (owned by /templates/carpentry).
- **Notes:** industry: furniture-makers

#### /templates/glazier

- **Key:** glass repair invoice template · also: glazier invoice; window glass replacement invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Glass by size and type, labor, board-ups and emergencies.
- **Don't write about:** Window installation (owned by /templates/window-installation).
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: glaziers

#### /templates/wildlife-removal

- **Key:** wildlife removal invoice template · also: animal removal invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Inspection, trapping per visit, exclusion work, cleanup; local wildlife rules (hedge).
- **Don't write about:** Insects and rodents (owned by /templates/pest-control).
- **Already covered (link, don't repeat):** /templates/snow-removal (“snow removal invoice template”) · /templates/junk-removal (“junk removal invoice template”)
- **Notes:** industry: wildlife-removal-companies

#### /templates/aquarium-maintenance

- **Key:** aquarium maintenance invoice template · also: aquarium service invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Monthly service visits, livestock and equipment, setups.
- **Notes:** industry: aquarium-services

#### /templates/land-surveying

- **Key:** land surveying invoice template · also: surveyor invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Boundary, topographic and ALTA surveys, field crew hours, recording fees.
- **Notes:** industry: surveyors

#### /templates/professional-organizing

- **Key:** professional organizer invoice template · also: home organizer invoice
- **Item:** T8 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly or per project, products bought, donation runs.
- **Notes:** industry: professional-organizers

### Item T9 (16)

#### /templates/auto-repair

- **Key:** auto repair invoice template · also: mechanic invoice template; car repair invoice; garage invoice template
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Shop or mobile mechanic: parts with part numbers (new, used, OEM or aftermarket), labor by book hours vs actual hours, diagnostic fee, shop supplies fee, the vehicle (year, make, model, VIN, odometer in and out), parts and labor warranty, old parts returned; some states require itemized repair invoices (hedge; e.g. California BAR: cite and date). When it goes live, move the mechanic content off /templates/auto-detailing.
- **Don't write about:** Detailing (/templates/auto-detailing); body and paint (/templates/auto-body).
- **Already covered (link, don't repeat):** /templates/auto-detailing (“auto detailing invoice template”) · /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: auto-detailing-mechanics

#### /templates/auto-body

- **Key:** auto body invoice template · also: collision repair invoice; body shop invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Collision and paint: the insurance claim number and adjuster, the estimate vs supplements, the deductible the customer pays vs the insurer's share, paint and materials per hour, frame time, sublet work (glass, alignment), refinish hours. Sample: an insured repair with a $500 deductible.
- **Don't write about:** Mechanical repair (/templates/auto-repair); detailing (/templates/auto-detailing).
- **Already covered (link, don't repeat):** /templates/auto-detailing (“auto detailing invoice template”)
- **Notes:** industry: auto-detailing-mechanics

#### /templates/dog-grooming

- **Key:** dog grooming invoice template · also: pet grooming invoice; grooming invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per dog by size and coat (bath, full groom, hand strip), add-ons (nails, teeth, de-shedding, flea bath), matting and behaviour surcharges, the mobile van fee, no-show policy, a multi-dog discount. Sample: two dogs.
- **Don't write about:** Pet sitting and walking (/templates/pet-sitting); training (/templates/dog-training).
- **Notes:** industry: pet-care

#### /templates/hair-salon

- **Key:** hair salon invoice template · also: salon invoice; hair stylist invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. When a salon or stylist invoices instead of ringing up at the till: bridal and event hair on location, B2B work (shoots, theatre), weekly booth or chair rent the owner invoices to renters, product sales taxed apart. Say plainly that everyday salon sales are till receipts. Sample: 4 weeks of booth rent + a wedding party.
- **Don't write about:** Makeup (/templates/makeup-artist); barbering (/templates/barber).
- **Notes:** industry: hair-makeup-artists

#### /templates/architect

- **Key:** architect invoice template · also: architectural services invoice; architecture invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Fees by phase (schematic design, design development, construction documents, bidding, construction administration) as a % of a fixed fee or of construction cost, or hourly; reimbursables at cost or with a multiplier; additional services by agreement. Sample: phase 2 at 40% of a $30,000 fee. Fee rules vary by country (Germany's HOAI: the local version; hedge).
- **Don't write about:** Interior design (/templates/interior-design); construction billing (/templates/construction-progress-invoice).
- **Notes:** industry: architects

#### /templates/real-estate

- **Key:** real estate invoice template · also: real estate commission invoice; realtor invoice template; commission invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Agents and brokers invoicing a brokerage, a seller or a developer: the property, sale price, commission rate and split (agent and brokerage, co-op), referral fees, closing date; or flat-fee services. Who pays and how much is negotiated and varies by state and country (US: buyer-agent pay since the 2024 NAR settlement: cite and date). Sample: a 2.5% side on a $400,000 sale, a 70/30 split.
- **Don't write about:** Property management (/templates/property-management); rent (/templates/rent); the math (the commission calculator).
- **Notes:** industry: real-estate-agents

#### /templates/equipment-rental

- **Key:** equipment rental invoice template · also: rental equipment invoice; tool rental invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Construction and tool rental: day, week and 4-week rates (and when the cheaper rate applies), delivery and pickup, fuel and cleaning charges, damage waiver, hour meter in and out, the deposit, late returns. Sample: a mini excavator for 9 days (a week + 2 days).
- **Don't write about:** Party and event rentals (/templates/party-rentals); photo booths (/templates/photo-booth-rental).
- **Notes:** industry: equipment-rental-companies

#### /templates/private-investigator

- **Key:** private investigator invoice template · also: pi invoice; investigation invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. A retainer, then hourly: surveillance hours, report writing, mileage, database search fees, court time; the licence number many US states require on documents (hedge per state); describe the work without exposing the subject. Sample: 12 h surveillance, 2 h report, 140 miles, database fees.
- **Don't write about:** Security guards (/templates/security-guard).
- **Notes:** industry: private-investigators

#### /templates/phone-repair

- **Key:** phone repair invoice template · also: cell phone repair invoice; screen repair invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per repair: the device (model, IMEI or serial), the fault, parts (OEM or aftermarket screen, battery), labor or a flat price, a diagnostic fee if not repaired, the part's warranty, data-loss and water-damage disclaimers. Sample: a screen + battery.
- **Don't write about:** IT support for businesses (/templates/it-services); appliance repair (/templates/appliance-repair).
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: it-technicians

#### /templates/furniture-assembly

- **Key:** furniture assembly invoice template · also: flat pack assembly invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per item (bed, wardrobe, desk: the box's piece count as a guide) or hourly with a minimum, wall anchoring, packaging removal, travel; client-supplied items and missing parts in the terms. Sample: 4 items for a move-in.
- **Don't write about:** Handyman work in general (/templates/handyman); custom furniture making (/templates/custom-furniture).
- **Notes:** industry: none (link /templates/handyman as related)

#### /templates/upholstery

- **Key:** upholstery invoice template · also: reupholstery invoice; upholsterer invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Labor per piece by type (dining seat, armchair, sofa), fabric by the yard or metre (supplied, or the customer's own with a COM fee), foam and webbing, pickup and delivery, a deposit for the fabric. Sample: a sofa + 6 dining seats.
- **Don't write about:** Furniture making (/templates/custom-furniture).
- **Notes:** industry: furniture-makers

#### /templates/life-coaching

- **Key:** life coach invoice template · also: coaching invoice template; coaching session invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Packages (6 or 12 sessions), single sessions, programmes paid in instalments, cancellation and no-show rules, VAT on coaching (hedge). Not therapy: no health claims. Sample: a 6-session package in 2 instalments.
- **Don't write about:** Business consulting (/templates/consulting); therapy (/templates/therapy); sports coaching (/templates/sports-coaching).
- **Notes:** industry: consultants-coaches

#### /templates/bartending

- **Key:** bartending invoice template · also: bartender invoice; mobile bar invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Event bartending: hours × bartenders with a minimum, setup and breakdown, a bar package per guest when the bartender supplies the drinks (licensing rules vary: hedge), mixers and ice, glassware rental, travel, a gratuity line. Sample: a 120-guest wedding, 2 bartenders, 5 hours.
- **Don't write about:** Catering food service (/templates/catering).
- **Notes:** industry: caterers

#### /templates/plastering

- **Key:** plastering invoice template · also: plasterer invoice; stucco invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Skim coat vs full replaster by area, patching per item, ceilings and coving, drying time between coats, materials (bags, beads), access and scaffolding; UK and EU plastering, US stucco and veneer plaster. Sample: replaster a room and skim the ceiling.
- **Don't write about:** Drywall hanging and taping (/templates/drywall).
- **Notes:** industry: general-contractors

#### /templates/concrete

- **Key:** concrete invoice template · also: concrete contractor invoice; concrete work invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Flatwork: slab or driveway by square foot and thickness, cubic yards poured, rebar or mesh, forms, finish (broom, stamped, exposed aggregate), removing the old slab, pump-truck and short-load fees, curing time. Sample: a 600 sq ft driveway.
- **Don't write about:** Brick, block and stone (/templates/masonry); the volume math (/tools/concrete-cost-calculator).
- **Notes:** industry: masons

#### /templates/event-venue

- **Key:** event venue invoice template · also: venue rental invoice; venue hire invoice
- **Item:** T9 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Venue hire: date and hours (setup and breakdown time), the fee by day or hour, a food and beverage minimum, service charge vs gratuity, security and cleaning fees, the damage deposit, the payment schedule (deposit at booking, balance before the event). Sample: a Saturday wedding.
- **Don't write about:** Event planning (/templates/event-planning); party rentals (/templates/party-rentals).
- **Already covered (link, don't repeat):** /templates/event-planning (“event planner invoice template”)
- **Notes:** industry: event-planners

### Item T10 (18)

#### /templates/well-drilling

- **Key:** well drilling invoice template · also: water well invoice; well pump invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Drilling per foot (rate by rock or soil), casing per foot, the pump and pressure tank, the permit and water test, a dry-hole clause; deposits are common (link D1). Sample: a 220 ft residential well.
- **Don't write about:** Plumbing repairs (/templates/plumbing).
- **Notes:** industry: plumbers-hvac

#### /templates/drain-cleaning

- **Key:** drain cleaning invoice template · also: sewer cleaning invoice; hydro jetting invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per drain or per hour, snaking vs hydro jetting, camera inspection with the video as a deliverable, cleanout access, after-hours rates, the no-guarantee note on root intrusion. Sample: main line jetting + camera.
- **Don't write about:** General plumbing (/templates/plumbing); septic pumping (/templates/septic-service).
- **Already covered (link, don't repeat):** /templates/cleaning-services (“cleaning invoice template”) · /templates/window-cleaning (“window cleaning invoice template”) · /templates/carpet-cleaning (“carpet cleaning invoice template”)
- **Notes:** industry: plumbers-hvac

#### /templates/gas-engineer

- **Key:** gas engineer invoice template · also: gas safe invoice; boiler service invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. UK and EU heating engineers: boiler service and repair, the gas safety record (CP12) for landlords, parts, call-out fee; the registration number on the invoice (Gas Safe in the UK: cite and date). Sample: annual service + landlord certificate.
- **Don't write about:** HVAC in the US sense (/templates/hvac); plumbing (/templates/plumbing).
- **Notes:** industry: plumbers-hvac

#### /templates/foundation-repair

- **Key:** foundation repair invoice template · also: foundation contractor invoice; pier installation invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Piers per unit (push, helical), crack repair per linear foot, engineer's report, permits, the transferable warranty, progress or deposit billing on big jobs (link B items). Sample: 8 helical piers.
- **Don't write about:** Waterproofing (/templates/basement-waterproofing); concrete flatwork (/templates/concrete).
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: general-contractors

#### /templates/basement-waterproofing

- **Key:** basement waterproofing invoice template · also: waterproofing invoice; sump pump installation invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Interior drain tile per linear foot, sump pump and battery backup, wall membrane, exterior excavation if any, crawl space encapsulation, warranty terms. Sample: 60 ft drain tile + sump.
- **Don't write about:** Foundation repair (/templates/foundation-repair); water damage cleanup (/templates/water-damage-restoration).
- **Notes:** industry: general-contractors

#### /templates/radon-mitigation

- **Key:** radon mitigation invoice template · also: radon system installation invoice; radon testing invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Testing (short-term kit vs continuous monitor), the sub-slab system (fan, piping, sealing), post-mitigation test, the licence or certification many states and countries require (hedge; e.g. US EPA guidance, Sweden's radon rules: cite and date). Sample: test + system + retest.
- **Don't write about:** Home inspection (/templates/home-inspection).
- **Notes:** industry: general-contractors

#### /templates/asbestos-removal

- **Key:** asbestos removal invoice template · also: asbestos abatement invoice; asbestos survey invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Survey and sampling (lab fees per sample), containment, removal per square foot, licensed disposal with the waste consignment note, air clearance testing; licensing and notification rules (hedge, cite the regulator). Sample: survey + removal of a ceiling.
- **Don't write about:** Demolition (/templates/demolition); mold (/templates/mold-remediation).
- **Already covered (link, don't repeat):** /templates/snow-removal (“snow removal invoice template”) · /templates/junk-removal (“junk removal invoice template”)
- **Notes:** industry: general-contractors

#### /templates/wallpaper-installation

- **Key:** wallpaper installation invoice template · also: wallpaper hanging invoice; wallpaper removal invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per roll or per wall, removal of old paper, wall prep and primer, pattern matching (more waste on large repeats), murals as a fixed price, client-supplied paper. Sample: a feature wall + a bathroom.
- **Don't write about:** Painting (/templates/painting).
- **Notes:** industry: painters

#### /templates/epoxy-flooring

- **Key:** epoxy flooring invoice template · also: epoxy floor coating invoice; garage floor coating invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per square foot by system (single coat, flake, metallic), grinding and crack repair, moisture testing, cure time before use, the coating warranty. Sample: a 2-car garage with flake.
- **Don't write about:** Flooring installation (/templates/flooring); concrete pouring (/templates/concrete).
- **Already covered (link, don't repeat):** /templates/flooring (“flooring invoice template”)
- **Notes:** industry: flooring-installers

#### /templates/window-treatments

- **Key:** window treatment invoice template · also: blinds installation invoice; shutters invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per window: measuring, the product (blinds, shades, shutters, curtains with rods), installation per unit, motorisation, the deposit when ordering custom products (link D1). Sample: 9 windows, 2 motorised.
- **Don't write about:** Window installation (/templates/window-installation); interior design (/templates/interior-design).
- **Already covered (link, don't repeat):** /templates/window-cleaning (“window cleaning invoice template”)
- **Notes:** industry: none (link 2 related templates)

#### /templates/christmas-light-installation

- **Key:** christmas light installation invoice template · also: holiday lighting invoice; christmas lights invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per linear foot of roofline, trees per wrap, lease vs purchase of the lights, takedown and storage in January, a timer, the seasonal deposit. Sample: roofline + 2 trees, takedown included.
- **Don't write about:** Landscaping (/templates/landscaping); electrical work (/templates/electrician).
- **Notes:** industry: landscaping-lawn-care

#### /templates/fire-protection

- **Key:** fire protection invoice template · also: fire sprinkler inspection invoice; fire alarm inspection invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Inspections by schedule (sprinklers, alarms, extinguishers, hoods), deficiencies found and quoted separately, the inspection report as a deliverable, the licence number, code references (hedge, NFPA or the local code: cite). Sample: annual sprinkler + alarm inspection.
- **Don't write about:** Security systems (/templates/security-system-installation); hood cleaning (/templates/hood-cleaning).
- **Notes:** industry: none (link 2 related templates)

#### /templates/low-voltage-cabling

- **Key:** low voltage cabling invoice template · also: network cabling invoice; data cabling invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per drop (Cat6, fibre), patch panel and rack work, testing and certification report, labelling, after-hours work in offices. Sample: 24 drops + a rack.
- **Don't write about:** IT support (/templates/it-services); electrical work (/templates/electrician).
- **Notes:** industry: electricians

#### /templates/gutter-installation

- **Key:** gutter installation invoice template · also: seamless gutter invoice; gutter replacement invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per linear foot by material (aluminium, copper, steel), downspouts per unit, guards, removal of old gutters, fascia repair as found. Sample: 140 ft seamless + 4 downspouts.
- **Don't write about:** Gutter cleaning (/templates/gutter-cleaning); roofing (/templates/roofing).
- **Notes:** industry: gutter-cleaners

#### /templates/fireplace-installation

- **Key:** fireplace installation invoice template · also: wood stove installation invoice; gas fireplace invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The unit, the flue liner, hearth and surround, gas line or electrical by a licensed trade, the permit and inspection, commissioning. Sample: a wood stove with liner.
- **Don't write about:** Chimney cleaning (/templates/chimney-sweep); masonry (/templates/masonry).
- **Notes:** industry: chimney-sweeps

#### /templates/home-energy-audit

- **Key:** home energy audit invoice template · also: energy assessment invoice; blower door test invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The audit fee by home size, blower door and thermal imaging, the report with recommendations, rebate paperwork (programmes vary: hedge, cite); in the EU the energy certificate (Energieausweis, energielabel) as a local angle. Sample: a full audit + report.
- **Don't write about:** Insulation work (/templates/insulation); home inspection (/templates/home-inspection).
- **Notes:** industry: none (link 2 related templates)

#### /templates/sealcoating

- **Key:** sealcoating invoice template · also: driveway sealing invoice; asphalt sealcoating invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per square foot, crack filling per linear foot, oil-spot primer, two coats, cure time and the do-not-drive window, residential vs parking lots. Sample: a 1,200 sq ft driveway.
- **Don't write about:** New asphalt (/templates/asphalt-paving); line striping (/templates/parking-lot-striping).
- **Notes:** industry: paving-contractors

#### /templates/parking-lot-striping

- **Key:** parking lot striping invoice template · also: line striping invoice; pavement marking invoice
- **Item:** T10 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per stall or per linear foot, accessible stalls and signage (ADA in the US: hedge), stencils, arrows, curb painting, night work. Sample: a 60-stall lot restripe.
- **Don't write about:** Sealcoating (/templates/sealcoating); paving (/templates/asphalt-paving).
- **Notes:** industry: paving-contractors

### Item T11 (18)

#### /templates/janitorial

- **Key:** janitorial invoice template · also: commercial cleaning invoice; office cleaning invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Contract cleaning for businesses: the monthly contract price by square footage and frequency, supplies included or billed, extra services (carpets, windows, floor stripping) as lines, the service period. Repeat monthly by duplicating the invoice. Sample: an office, 5 nights a week.
- **Don't write about:** House cleaning (/templates/cleaning-services); the monthly invoice in general (/templates/monthly-invoice).
- **Notes:** industry: cleaning-services

#### /templates/hood-cleaning

- **Key:** hood cleaning invoice template · also: kitchen exhaust cleaning invoice; restaurant hood cleaning invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per hood system by size, ducts and fans, filters exchange, access panels installed, before-and-after photos and the certificate sticker, frequency by cooking type (NFPA 96 in the US: hedge, cite). Sample: a restaurant, 2 hoods.
- **Don't write about:** Fire protection inspections (/templates/fire-protection); general cleaning (/templates/cleaning-services).
- **Already covered (link, don't repeat):** /templates/cleaning-services (“cleaning invoice template”) · /templates/window-cleaning (“window cleaning invoice template”) · /templates/carpet-cleaning (“carpet cleaning invoice template”)
- **Notes:** industry: cleaning-services

#### /templates/biohazard-cleanup

- **Key:** biohazard cleanup invoice template · also: crime scene cleanup invoice; trauma cleaning invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hours by technician, PPE and disposal of regulated waste, odour treatment, materials removed, insurance billing (the claim number, the policyholder's share), discreet descriptions. Sample: an insured cleanup, 2 technicians.
- **Don't write about:** Mold (/templates/mold-remediation); water damage (/templates/water-damage-restoration).
- **Notes:** industry: cleaning-services

#### /templates/laundry-service

- **Key:** laundry service invoice template · also: wash and fold invoice; commercial laundry invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per pound or kilo, per item for dry cleaning and linens, pickup and delivery, B2B accounts (salons, Airbnb hosts, gyms) billed monthly. Sample: a host's monthly linens.
- **Don't write about:** Alterations (/templates/alterations).
- **Already covered (link, don't repeat):** /templates/pool-service (“pool service invoice template”) · /templates/tree-service (“tree service invoice template”)
- **Notes:** industry: none (link 2 related templates)

#### /templates/dumpster-rental

- **Key:** dumpster rental invoice template · also: roll off rental invoice; skip hire invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. By container size and rental period, tonnage included and overage per ton, prohibited items fees, extra days, the permit for street placement (UK: skip permit). Sample: a 20-yard for 7 days, 1.4 tons over.
- **Don't write about:** Junk removal (/templates/junk-removal); equipment rental (/templates/equipment-rental).
- **Notes:** industry: junk-removal

#### /templates/portable-toilet-rental

- **Key:** portable toilet rental invoice template · also: porta potty rental invoice; restroom trailer invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Units per event or per month for job sites, servicing frequency, handwash stations, delivery and pickup, damage. Sample: a construction site, 2 units, weekly service.
- **Don't write about:** Septic pumping (/templates/septic-service); party rentals (/templates/party-rentals).
- **Notes:** industry: septic-companies

#### /templates/home-watch

- **Key:** home watch invoice template · also: home watch service invoice; vacation home check invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Visits per month at a set price, the checklist and report per visit, storm checks, key holding, extra visits and vendor meet-ups billed apart. Sample: a winter season, 2 visits a month.
- **Don't write about:** Property management (/templates/property-management); house sitting (/templates/house-sitting).
- **Notes:** industry: property-managers

#### /templates/estate-sale

- **Key:** estate sale invoice template · also: estate sale company invoice; estate liquidation invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Commission on gross sales (the rate and any minimum), sale prep and pricing, advertising, clean-out after the sale, the settlement statement to the family. Sample: a 3-day sale, 35% commission.
- **Don't write about:** Auctions (/templates/auctioneer); senior moves (/templates/senior-move-management).
- **Notes:** industry: none (link 2 related templates)

#### /templates/self-storage

- **Key:** self storage invoice template · also: storage unit invoice; storage rental invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Unit size and monthly rate, the rental period, insurance or protection plan, late fees per the lease (hedge: lien laws vary), a deposit; monthly by duplicating the invoice. Sample: a 10×10 unit for 3 months.
- **Don't write about:** Rent (/templates/rent); equipment rental (/templates/equipment-rental).
- **Notes:** industry: none (link 2 related templates)

#### /templates/vacation-rental

- **Key:** vacation rental invoice template · also: airbnb invoice; holiday rental invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hosts billing guests directly (repeat guests, company stays): nights × rate, cleaning fee, deposit, tourist or occupancy tax as its own line (rules vary by city: hedge), the cancellation terms. Sample: 5 nights + cleaning + city tax.
- **Don't write about:** Long-term rent (/templates/rent); property management fees (/templates/property-management).
- **Notes:** industry: landlords

#### /templates/graffiti-removal

- **Key:** graffiti removal invoice template · also: graffiti cleaning invoice; anti graffiti coating invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per square foot by surface, the method (chemical, soda blasting, paint-out with colour match), anti-graffiti coating, recurring removal contracts for businesses and councils. Sample: a shopfront + coating.
- **Don't write about:** Pressure washing (/templates/pressure-washing).
- **Already covered (link, don't repeat):** /templates/snow-removal (“snow removal invoice template”) · /templates/junk-removal (“junk removal invoice template”)
- **Notes:** industry: pressure-washing

#### /templates/property-preservation

- **Key:** property preservation invoice template · also: foreclosure cleanout invoice; reo property invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Work orders from banks and servicers: the work order number, before-during-after photos, cleanout per cubic yard, lock changes, winterisation, lawn cuts, bids for repairs; pricing per the client's price sheet. Sample: an initial secure + cleanout.
- **Don't write about:** Junk removal (/templates/junk-removal); property management (/templates/property-management).
- **Notes:** industry: property-managers

#### /templates/auctioneer

- **Key:** auctioneer invoice template · also: auction services invoice; buyer's premium invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The seller's commission, the buyer's premium (who pays what), lotting and cataloguing fees, advertising, the settlement to the seller after the sale; the licence where required (hedge). Sample: an equipment auction settlement.
- **Don't write about:** Estate sales (/templates/estate-sale).
- **Notes:** industry: none (link 2 related templates)

#### /templates/appraisal

- **Key:** appraisal invoice template · also: appraiser invoice; real estate appraisal invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The appraisal fee by property type and report form, rush fee, travel, the licence number, who ordered it (lender, AMC, private client); the fee must not depend on the value (hedge). Sample: a private single-family appraisal.
- **Don't write about:** Home inspection (/templates/home-inspection); real estate agents (/templates/real-estate).
- **Notes:** industry: none (link 2 related templates)

#### /templates/concierge

- **Key:** concierge invoice template · also: concierge service invoice; lifestyle management invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. A monthly membership or hourly, errands and bookings as lines, purchases passed on at cost (receipts; link the reimbursement invoice), a markup only by agreement. Sample: a monthly retainer + 4 errands.
- **Don't write about:** Virtual assistants (/templates/virtual-assistant); personal shopping (/templates/personal-shopper).
- **Notes:** industry: none (link 2 related templates)

#### /templates/personal-shopper

- **Key:** personal shopper invoice template · also: personal styling invoice; wardrobe consultation invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly or per session, purchases on the client's card vs paid by you and rebilled, the wardrobe edit, returns handled. Sample: a 3-hour shopping session + items rebilled.
- **Don't write about:** Fashion styling for shoots (/templates/stylist); concierge (/templates/concierge).
- **Already covered (link, don't repeat):** /templates/personal-training (“personal trainer invoice template”)
- **Notes:** industry: none (link 2 related templates)

#### /templates/house-sitting

- **Key:** house sitting invoice template · also: house sitter invoice; house sitting service invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per night or per day, overnight vs drop-in, pets and plants, mail and bins, the key handover; holiday rates. Sample: 10 nights with one dog.
- **Don't write about:** Pet sitting and dog walking (/templates/pet-sitting); home watch (/templates/home-watch).
- **Already covered (link, don't repeat):** /templates/pet-sitting (“pet sitting invoice template”)
- **Notes:** industry: pet-care

#### /templates/senior-move-management

- **Key:** senior move management invoice template · also: senior move manager invoice; downsizing services invoice
- **Item:** T11 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly by team member, floor plans for the new home, sorting and downsizing, coordinating movers (their bill apart), unpacking and setup, estate sale or donation handling. Sample: a 3-day downsizing move.
- **Don't write about:** Moving (/templates/moving); professional organizing (/templates/professional-organizing).
- **Notes:** industry: movers

### Item T12 (15)

#### /templates/window-tinting

- **Key:** window tinting invoice template · also: car window tint invoice; residential window film invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per window or per vehicle by film type (ceramic, carbon), windshield strips, removal of old tint, home and office film per square foot; legal tint limits vary by state and country (hedge). Sample: a sedan, ceramic.
- **Don't write about:** Auto glass replacement (/templates/auto-glass); detailing (/templates/auto-detailing).
- **Already covered (link, don't repeat):** /templates/window-cleaning (“window cleaning invoice template”)
- **Notes:** industry: auto-detailing-mechanics

#### /templates/auto-glass

- **Key:** auto glass invoice template · also: windshield replacement invoice; windshield repair invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Windshield replacement or chip repair, the glass part (OEM or aftermarket), moulding and adhesive, ADAS camera calibration, mobile service, insurance claim and deductible. Sample: a windshield with calibration, insured.
- **Don't write about:** Window tint (/templates/window-tinting); body shop (/templates/auto-body).
- **Already covered (link, don't repeat):** /templates/auto-detailing (“auto detailing invoice template”)
- **Notes:** industry: auto-detailing-mechanics

#### /templates/paintless-dent-repair

- **Key:** paintless dent repair invoice template · also: pdr invoice; hail damage repair invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per dent by size and location, hail damage per panel from a dent matrix, R&I of trims, insurance claims (supplements). Sample: a hail claim, 4 panels.
- **Don't write about:** Body and paint (/templates/auto-body).
- **Notes:** industry: auto-detailing-mechanics

#### /templates/tire-service

- **Key:** tire shop invoice template · also: tire installation invoice; tyre invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Tyres by size and brand, mounting and balancing per tyre, valve stems, disposal fees (often required by law: hedge), alignment, seasonal changeover and storage (EU). Sample: 4 tyres + alignment + disposal.
- **Don't write about:** Mechanical repair (/templates/auto-repair).
- **Notes:** industry: auto-detailing-mechanics

#### /templates/car-hauling

- **Key:** car hauling invoice template · also: auto transport invoice; vehicle shipping invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per vehicle by distance, open vs enclosed, the bill of lading and inspection, inoperable surcharge, terminal vs door-to-door, the carrier's authority number (US: hedge). Sample: 2 cars, 900 miles, open trailer.
- **Don't write about:** Towing (/templates/towing); trucking freight (/templates/trucking).
- **Notes:** industry: towing-companies

#### /templates/motorcycle-repair

- **Key:** motorcycle repair invoice template · also: motorbike repair invoice; motorcycle service invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Labor by the hour or by book time, parts, tyres, scheduled service by mileage, storage fees, pickup. Sample: a major service + tyres.
- **Don't write about:** Car repair (/templates/auto-repair); small engines (/templates/small-engine-repair).
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: auto-detailing-mechanics

#### /templates/heavy-equipment-repair

- **Key:** heavy equipment repair invoice template · also: heavy equipment mechanic invoice; field service invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Field service: travel time and mileage to the site, labor per hour (shop vs field rate), parts, fluids and filters, the machine's serial number and hour meter, diagnostic time. Sample: an excavator hydraulic repair in the field.
- **Don't write about:** Small engines (/templates/small-engine-repair); equipment rental (/templates/equipment-rental).
- **Notes:** industry: none (link 2 related templates)

#### /templates/freight-broker

- **Key:** freight broker invoice template · also: freight brokerage invoice; logistics invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The broker billing the shipper: load number, pickup and delivery, the rate confirmation, accessorials (detention, lumper, layover), the proof of delivery; the broker's authority number (US: hedge). Sample: one FTL load with detention.
- **Don't write about:** The carrier's own invoice (/templates/trucking); dispatch fees (/templates/truck-dispatch).
- **Notes:** industry: owner-operators

#### /templates/truck-dispatch

- **Key:** truck dispatch invoice template · also: truck dispatcher invoice; dispatch service invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Dispatchers billing carriers: a percentage per load (or a flat weekly fee), the load list for the week, extra services (paperwork, factoring setup). Sample: a week of 4 loads at 8%.
- **Don't write about:** Freight brokerage (/templates/freight-broker); trucking (/templates/trucking).
- **Notes:** industry: owner-operators

#### /templates/flight-instruction

- **Key:** flight instruction invoice template · also: flight instructor invoice; cfi invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Instruction hours (flight and ground), aircraft rental per Hobbs or tach hour (wet or dry), fuel surcharge, checkride prep, the instructor's certificate number. Sample: 3 lessons, 4.2 flight hours.
- **Don't write about:** Driving lessons (/templates/driving-instructor).
- **Notes:** industry: none (link 2 related templates)

#### /templates/valet-parking

- **Key:** valet parking invoice template · also: valet service invoice; event valet invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Events: attendants × hours with a minimum, the supervisor, signage and podium, insurance certificate, hosted vs guest-paid, gratuity line. Sample: a wedding, 4 attendants, 6 hours.
- **Don't write about:** Event venue (/templates/event-venue); security (/templates/security-guard).
- **Notes:** industry: none (link 2 related templates)

#### /templates/bus-charter

- **Key:** bus charter invoice template · also: coach hire invoice; charter bus invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per hour or per day with a minimum, mileage over the allowance, driver hours and overnight costs, tolls and parking, the deposit and cancellation terms. Sample: a day trip, 56-seat coach.
- **Don't write about:** Limousines and chauffeurs (/templates/limousine-service).
- **Notes:** industry: limo-services

#### /templates/car-audio-installation

- **Key:** car audio installation invoice template · also: car stereo installation invoice; remote start installation invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Equipment (head unit, amp, speakers, wiring kits), labor per install, dash kits and harnesses, remote starters, the warranty on labor. Sample: head unit + amp + sub.
- **Don't write about:** Repair (/templates/auto-repair).
- **Notes:** industry: auto-detailing-mechanics

#### /templates/aircraft-maintenance

- **Key:** aircraft maintenance invoice template · also: a&p mechanic invoice; aircraft annual inspection invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Annual or 100-hour inspections, squawks found and fixed, parts with traceability, labor hours, the logbook entry and the mechanic's certificate number (hedge on regulations). Sample: an annual + 3 squawks.
- **Don't write about:** Flight lessons (/templates/flight-instruction).
- **Notes:** industry: none (link 2 related templates)

#### /templates/crane-services

- **Key:** crane service invoice template · also: crane rental invoice; crane hire invoice
- **Item:** T12 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per hour with a minimum (portal to portal), the operator and rigger, travel and setup time, permits, lift plans, overtime. Sample: a 4-hour minimum lift with rigger.
- **Don't write about:** Equipment rental without an operator (/templates/equipment-rental).
- **Already covered (link, don't repeat):** /templates/pool-service (“pool service invoice template”) · /templates/tree-service (“tree service invoice template”)
- **Notes:** industry: none (link 2 related templates)

### Item T13 (15)

#### /templates/machining

- **Key:** machining invoice template · also: cnc machining invoice; machine shop invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per part or per job: setup charge, machine hours, material, finishing and heat treat (outsourced), quantity breaks, the customer PO and drawing revision, inspection reports. Sample: 50 parts with setup.
- **Don't write about:** Welding (/templates/welding); 3D printing (/templates/3d-printing).
- **Notes:** industry: none (link 2 related templates)

#### /templates/sandblasting

- **Key:** sandblasting invoice template · also: media blasting invoice; abrasive blasting invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per square foot or per hour by media, masking, containment and disposal, mobile vs shop, primer coat after blasting. Sample: a trailer frame, shop job.
- **Don't write about:** Powder coating (/templates/powder-coating); pressure washing (/templates/pressure-washing).
- **Notes:** industry: none (link 2 related templates)

#### /templates/powder-coating

- **Key:** powder coating invoice template · also: powder coat invoice; powder coating shop invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per part or per batch, stripping and blasting, colour changes, masking, multi-coat finishes, rush orders. Sample: a set of 4 wheels, two-tone.
- **Don't write about:** Sandblasting (/templates/sandblasting).
- **Notes:** industry: none (link 2 related templates)

#### /templates/scaffolding

- **Key:** scaffolding invoice template · also: scaffold hire invoice; scaffolding rental invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Erect and dismantle as a fixed price, hire per week after the included period, inspections (the inspection record: hedge per country), alterations, adaptations, transport. Sample: a house front, 6 weeks.
- **Don't write about:** Equipment rental (/templates/equipment-rental); roofing (/templates/roofing).
- **Notes:** industry: general-contractors

#### /templates/millwright

- **Key:** millwright invoice template · also: industrial maintenance invoice; machinery installation invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Machinery moving and installation, alignment (laser), shutdown work at overtime rates, crew hours, rigging equipment, per diem on travel jobs. Sample: a conveyor install during a weekend shutdown.
- **Don't write about:** Heavy equipment repair (/templates/heavy-equipment-repair); crane services (/templates/crane-services).
- **Notes:** industry: none (link 2 related templates)

#### /templates/concrete-cutting

- **Key:** concrete cutting invoice template · also: core drilling invoice; concrete sawing invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per linear foot by depth (wall sawing, flat sawing), core holes per diameter, water and slurry management, a minimum charge, scanning for rebar first. Sample: 3 cores + 20 ft of slab cut.
- **Don't write about:** Pouring and flatwork (/templates/concrete); demolition (/templates/demolition).
- **Notes:** industry: masons

#### /templates/environmental-consulting

- **Key:** environmental consulting invoice template · also: environmental consultant invoice; phase 1 esa invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Phase I/II site assessments as a fixed fee, sampling and lab costs passed through, field hours, reports, regulator meetings; project numbers for the client's lender. Sample: a Phase I report + 2 samples.
- **Don't write about:** General consulting (/templates/consulting); asbestos surveys (/templates/asbestos-removal).
- **Already covered (link, don't repeat):** /templates/consulting (“consulting invoice template”)
- **Notes:** industry: consultants-coaches

#### /templates/commercial-refrigeration

- **Key:** commercial refrigeration invoice template · also: refrigeration repair invoice; walk-in cooler repair invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Service calls for restaurants and shops: emergency rates, refrigerant by the pound (the certification and logs where required: hedge), parts, preventive maintenance contracts. Sample: a walk-in cooler compressor repair, after hours.
- **Don't write about:** Residential HVAC (/templates/hvac); kitchen equipment repair (/templates/restaurant-equipment-repair).
- **Notes:** industry: plumbers-hvac

#### /templates/restaurant-equipment-repair

- **Key:** restaurant equipment repair invoice template · also: commercial kitchen repair invoice; commercial appliance repair invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Ovens, fryers, dishwashers, ice machines: trip charge, labor per hour, parts, after-hours rates, the asset's model and serial, a maintenance agreement. Sample: a fryer and an ice machine.
- **Don't write about:** Home appliances (/templates/appliance-repair); refrigeration (/templates/commercial-refrigeration).
- **Notes:** industry: appliance-repair

#### /templates/shoe-repair

- **Key:** shoe repair invoice template · also: cobbler invoice; shoe repair ticket
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per job (heels, soles, stitching, stretching, polishing), boots and bags, the claim ticket number, pickup date and unclaimed-item policy, B2B work for shops. Sample: soles + heels on 2 pairs.
- **Don't write about:** Alterations (/templates/alterations); leather furniture (/templates/upholstery).
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: none (link 2 related templates)

#### /templates/piano-tuning

- **Key:** piano tuning invoice template · also: piano technician invoice; piano repair invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Tuning per visit, pitch raise, repairs and regulation per hour, travel zones, schools and venues on contract. Sample: a pitch raise + tuning.
- **Don't write about:** Lessons (/templates/music-lessons); instrument repair (/templates/instrument-repair).
- **Notes:** industry: music-teachers

#### /templates/instrument-repair

- **Key:** instrument repair invoice template · also: luthier invoice; guitar repair invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Setups, fretwork, electronics, brass and woodwind repad, parts, the instrument's make and serial, rush fees. Sample: a guitar setup + refret.
- **Don't write about:** Piano tuning (/templates/piano-tuning).
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”)
- **Notes:** industry: musicians

#### /templates/furniture-refinishing

- **Key:** furniture refinishing invoice template · also: furniture restoration invoice; antique restoration invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per piece: stripping, repairs, stain and finish, hardware, veneer work, pickup and delivery; deposits on large pieces. Sample: a dining table + 6 chairs.
- **Don't write about:** Upholstery (/templates/upholstery); new furniture (/templates/custom-furniture).
- **Notes:** industry: furniture-makers

#### /templates/gunsmith

- **Key:** gunsmith invoice template · also: gunsmithing invoice; firearm repair invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per job (cleaning, repair, scope mounting, cerakote), parts, test firing, the serial number and the transfer rules (hedge: licensing varies by state). Sample: a scope mount + trigger job.
- **Don't write about:** Knife sharpening (/templates/knife-sharpening).
- **Notes:** industry: none (link 2 related templates)

#### /templates/knife-sharpening

- **Key:** knife sharpening invoice template · also: sharpening service invoice; mobile knife sharpening invoice
- **Item:** T13 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per blade by type (kitchen, serrated, scissors, tools), restaurant routes on a rotation (knife rental vs sharpening), repairs of tips and chips. Sample: a restaurant's weekly rotation.
- **Don't write about:** Restaurant equipment (/templates/restaurant-equipment-repair).
- **Notes:** industry: none (link 2 related templates)

### Item T14 (15)

#### /templates/balloon-decor

- **Key:** balloon decor invoice template · also: balloon garland invoice; balloon arch invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per piece (garland per foot, arches, columns), setup and teardown time, delivery, venue restrictions, the deposit on booking. Sample: a 20 ft garland + 2 columns.
- **Don't write about:** Event decor in general (/templates/event-decor); party rentals (/templates/party-rentals).
- **Notes:** industry: event-planners

#### /templates/face-painting

- **Key:** face painting invoice template · also: face painter invoice; kids party entertainer invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per hour with a minimum (faces per hour as a guide), travel, glitter tattoos as add-on, public events vs private parties, the deposit. Sample: a 2-hour birthday.
- **Don't write about:** Henna (/templates/henna); entertainers (/templates/entertainer).
- **Already covered (link, don't repeat):** /templates/painting (“painting invoice template”)
- **Notes:** industry: event-planners

#### /templates/entertainer

- **Key:** entertainer invoice template · also: magician invoice; performer invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per show or per hour, travel, sound equipment, the performance agreement (date, length, audience), the deposit and cancellation. Sample: a corporate magic show.
- **Don't write about:** DJs (/templates/dj); musicians (/templates/musician).
- **Notes:** industry: event-planners

#### /templates/audio-visual

- **Key:** audio visual invoice template · also: av invoice; event av rental invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Event AV: equipment by day (projectors, screens, mics, LED walls), technicians by hour, setup and strike, labor overtime, the venue's in-house AV fee. Sample: a 1-day conference.
- **Don't write about:** Home theater installs (/templates/home-theater-installation); DJ (/templates/dj).
- **Notes:** industry: av-installers

#### /templates/calligraphy

- **Key:** calligraphy invoice template · also: calligrapher invoice; envelope addressing invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per envelope or per piece, place cards, signage, live event calligraphy per hour, proof rounds, rush fees, client-supplied materials. Sample: 120 envelopes + 8 signs.
- **Don't write about:** Wedding invitations (/templates/wedding-invitations); illustration (/templates/illustration).
- **Notes:** industry: none (link 2 related templates)

#### /templates/wedding-invitations

- **Key:** wedding invitation invoice template · also: stationery invoice; invitation design invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Design fee, printing per piece by method (digital, letterpress, foil), envelopes, proofs, rush, postage; the deposit on ordering. Sample: 100 invitations + RSVP cards.
- **Don't write about:** Graphic design (/templates/freelance-design); printing (/templates/print-shop).
- **Notes:** industry: none (link 2 related templates)

#### /templates/henna

- **Key:** henna invoice template · also: henna artist invoice; bridal henna invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Bridal henna per hands and feet, guests per hour, travel, aftercare, the deposit. Sample: bridal + 2 hours of guests.
- **Don't write about:** Face painting (/templates/face-painting); tattoos (/templates/tattoo).
- **Notes:** industry: none (link 2 related templates)

#### /templates/event-decor

- **Key:** event decor invoice template · also: event decorator invoice; wedding decor invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Design fee, rentals from your stock (linens, centrepieces, backdrops) per item, florals bought in, setup and teardown, damage and loss. Sample: a wedding reception for 120.
- **Don't write about:** Event planning (/templates/event-planning); balloons (/templates/balloon-decor); florists (/templates/florist).
- **Already covered (link, don't repeat):** /templates/event-planning (“event planner invoice template”)
- **Notes:** industry: event-planners

#### /templates/food-truck

- **Key:** food truck invoice template · also: food truck catering invoice; food truck event invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Private events: a guaranteed minimum, per guest or per item menus, travel, service hours, the permit at the venue (hedge), gratuity. Sample: a company lunch, 80 guests.
- **Don't write about:** Full-service catering (/templates/catering).
- **Notes:** industry: caterers

#### /templates/cooking-classes

- **Key:** cooking class invoice template · also: cooking lesson invoice; private cooking class invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per person or per group, ingredients included, private and corporate team-building classes, the venue, cancellation. Sample: a corporate class for 12.
- **Don't write about:** Private chef dinners (/templates/personal-chef).
- **Notes:** industry: personal-chefs

#### /templates/meal-prep

- **Key:** meal prep invoice template · also: meal prep service invoice; meal delivery invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Weekly plans by meals, ingredients at cost or included, containers, delivery, dietary plans; weekly by duplicating the invoice. Sample: 10 meals a week for a month.
- **Don't write about:** Private chef (/templates/personal-chef); catering (/templates/catering).
- **Notes:** industry: personal-chefs

#### /templates/meat-processing

- **Key:** meat processing invoice template · also: deer processing invoice; custom butcher invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per pound hanging weight, kill fee, cut and wrap, sausage and jerky per pound, smoking, the animal's tag number; game vs livestock rules (hedge). Sample: a deer with 10 lb of sausage.
- **Don't write about:** Farm sales (/templates/farm).
- **Notes:** industry: farmers

#### /templates/referee

- **Key:** referee invoice template · also: sports official invoice; umpire invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per game by level, mileage, tournaments per day, the assigner's fee, the league or school's vendor details. Sample: 6 youth games in a weekend.
- **Don't write about:** Coaching (/templates/sports-coaching).
- **Notes:** industry: sports-coaches

#### /templates/tour-guide

- **Key:** tour guide invoice template · also: tour guide invoice; private tour invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per tour or per day, group size tiers, entrance fees passed on, transport, the guide's licence where required (hedge), deposits from agencies. Sample: a full-day private tour for 6.
- **Don't write about:** Travel agency fees (/templates/travel-agent).
- **Notes:** industry: none (link 2 related templates)

#### /templates/travel-agent

- **Key:** travel agent invoice template · also: travel agency invoice; travel booking invoice
- **Item:** T14 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Planning fees, bookings passed on at cost vs commission from suppliers, service fees per ticket, deposits and final payment dates; seller of travel rules where they exist (hedge). Sample: a planning fee + a booked trip.
- **Don't write about:** Tour guiding (/templates/tour-guide).
- **Notes:** industry: none (link 2 related templates)

### Item T15 (15)

#### /templates/accounting

- **Key:** accounting invoice template · also: accountant invoice template; cpa invoice template
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Accountants and CPA firms: year-end accounts, tax returns, advisory by the hour or fixed fee, monthly packages, engagement letter reference, out-of-scope work billed apart. Sample: a year-end package + 3 advisory hours.
- **Don't write about:** Bookkeeping (/templates/bookkeeping); tax preparation (/templates/tax-preparation).
- **Notes:** industry: bookkeepers

#### /templates/financial-advisor

- **Key:** financial advisor invoice template · also: financial planner invoice; advisory fee invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Fee-only planners: a flat planning fee, hourly, or a retainer; the advisory fee as % of assets billed quarterly (often deducted from the account: say so); registration disclosures (hedge). Sample: a financial plan + quarterly fee.
- **Don't write about:** Accounting (/templates/accounting); consulting (/templates/consulting).
- **Notes:** industry: consultants-coaches

#### /templates/recruitment

- **Key:** recruitment invoice template · also: recruitment agency invoice; placement fee invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Placement fees as % of first-year salary, retained search in stages, the guarantee or rebate period, the candidate and start date, VAT on fees. Sample: a 20% placement on a €60,000 role.
- **Don't write about:** Temp staffing (/templates/staffing-agency).
- **Notes:** industry: none (link 2 related templates)

#### /templates/staffing-agency

- **Key:** staffing agency invoice template · also: temp agency invoice; staffing invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Temp workers billed weekly: hours per worker from approved timesheets × bill rate, overtime rates, the markup inside the bill rate, the PO, temp-to-hire conversion fees. Sample: a week of 3 temps.
- **Don't write about:** Permanent placement (/templates/recruitment); security staff (/templates/security-guard).
- **Notes:** industry: none (link 2 related templates)

#### /templates/grant-writing

- **Key:** grant writing invoice template · also: grant writer invoice; proposal writing invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per proposal or hourly, research phase, budget preparation, rounds of edits; professional standards generally discourage commission on the award (hedge, cite the Grant Professionals Association). Sample: one federal proposal, fixed fee.
- **Don't write about:** Copywriting (/templates/copywriting); technical writing (/templates/technical-writing).
- **Notes:** industry: copywriters

#### /templates/resume-writing

- **Key:** resume writing invoice template · also: resume writer invoice; cv writing invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Packages (CV, cover letter, LinkedIn), per level (entry, executive), rush, revisions included. Sample: an executive package.
- **Don't write about:** Copywriting (/templates/copywriting); coaching (/templates/life-coaching).
- **Notes:** industry: copywriters

#### /templates/technical-writing

- **Key:** technical writing invoice template · also: technical writer invoice; documentation invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hourly or per deliverable (manuals, API docs, SOPs), research and SME interviews, revision cycles, tools and licences. Sample: a user manual by milestone.
- **Don't write about:** Marketing copy (/templates/copywriting); proofreading (/templates/proofreading).
- **Notes:** industry: copywriters

#### /templates/transcription

- **Key:** transcription invoice template · also: transcriptionist invoice; transcription services invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per audio minute by turnaround and quality (clean vs verbatim), speakers, timestamps, difficult audio surcharge, legal and medical specialisms. Sample: 140 audio minutes, verbatim.
- **Don't write about:** Court reporting (/templates/court-reporter); translation (/templates/translation).
- **Notes:** industry: virtual-assistants

#### /templates/court-reporter

- **Key:** court reporter invoice template · also: court reporting invoice; deposition transcript invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Appearance fee, per page for the original and copies, expedited delivery, exhibits, realtime, the case name and number. Sample: a deposition, 180 pages, 2 copies.
- **Don't write about:** General transcription (/templates/transcription).
- **Notes:** industry: none (link 2 related templates)

#### /templates/interpreter

- **Key:** interpreter invoice template · also: interpreting invoice; interpreter services invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per hour with a 2-hour minimum or half/full day, travel time, cancellation fees, conference vs court vs medical settings. Sample: a half-day medical appointment + travel.
- **Don't write about:** Written translation (/templates/translation).
- **Notes:** industry: translators

#### /templates/paralegal

- **Key:** paralegal invoice template · also: freelance paralegal invoice; legal assistant invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Freelance paralegals billing law firms: hours per matter, the matter number, tasks (drafting, research, filings), costs advanced; working only under an attorney's supervision (hedge). Sample: 12 hours on 2 matters.
- **Don't write about:** Attorneys (/templates/attorney).
- **Notes:** industry: lawyers

#### /templates/mediation

- **Key:** mediation invoice template · also: mediator invoice; mediation services invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per session or per hour, split between the parties (who pays what share), prep time, the agreement drafting, cancellation. Sample: a full-day mediation split 50/50.
- **Don't write about:** Attorneys (/templates/attorney).
- **Notes:** industry: lawyers

#### /templates/expert-witness

- **Key:** expert witness invoice template · also: expert witness fee invoice; litigation consulting invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The retainer, review hours, report writing, deposition and trial time at different rates, travel, the case caption. Sample: a retainer drawdown + 10 review hours.
- **Don't write about:** Consulting (/templates/consulting).
- **Notes:** industry: none (link 2 related templates)

#### /templates/process-server

- **Key:** process server invoice template · also: process serving invoice; service of process invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per serve by area and rush level, attempts, skip tracing, the affidavit of service, mileage, the case number. Sample: 2 serves, one rush.
- **Don't write about:** Private investigation (/templates/private-investigator).
- **Notes:** industry: none (link 2 related templates)

#### /templates/engineering

- **Key:** engineering invoice template · also: engineering services invoice; structural engineer invoice
- **Item:** T15 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Consulting engineers: inspections and calculations as fixed fees, hourly design work, site visits, stamped drawings, reimbursables, project numbers. Sample: a structural inspection + beam calculation.
- **Don't write about:** Architects (/templates/architect); land surveying (/templates/land-surveying).
- **Notes:** industry: none (link 2 related templates)

### Item T16 (10)

#### /templates/cybersecurity

- **Key:** cybersecurity invoice template · also: penetration testing invoice; security audit invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Fixed-fee assessments (pen test, audit) by scope, retainers for incident response, hours, the report as a deliverable, confidentiality in the descriptions. Sample: an external pen test + retest.
- **Don't write about:** IT support (/templates/it-services).
- **Notes:** industry: it-technicians

#### /templates/data-entry

- **Key:** data entry invoice template · also: data entry invoice; data processing invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per record, per page or per hour, accuracy checks, file formats delivered, rush work, data protection note. Sample: 4,000 records at a per-record rate.
- **Don't write about:** Virtual assistants (/templates/virtual-assistant); data analysis (/templates/data-analysis).
- **Notes:** industry: virtual-assistants

#### /templates/ppc-management

- **Key:** ppc management invoice template · also: google ads management invoice; paid ads invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. A management fee (flat, or % of ad spend with a minimum), setup fee, the ad spend billed by the platform or passed through, reporting period. Sample: a month at 12% of $8,000 spend.
- **Don't write about:** SEO (/templates/seo-services); social media management (/templates/social-media-management).
- **Notes:** industry: marketing-agencies

#### /templates/web-hosting

- **Key:** web hosting invoice template · also: website hosting invoice; website maintenance invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hosting plans per month or year, domains, SSL, backups, care plans with included hours, the service period; annual renewals by duplicating last year's invoice. Sample: a yearly plan for 3 sites.
- **Don't write about:** Building websites (/templates/web-development); retainers (/templates/web-development-retainer-invoice).
- **Already covered (link, don't repeat):** /templates/web-development (“web development invoice template”)
- **Notes:** industry: web-developers

#### /templates/game-development

- **Key:** game development invoice template · also: game developer invoice; game art invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Milestones (prototype, vertical slice, alpha), art assets per piece, hourly contract work, licences and engines, publisher advances. Sample: a milestone + 12 asset pieces.
- **Don't write about:** Apps (/templates/app-development); illustration (/templates/illustration).
- **Already covered (link, don't repeat):** /templates/web-development (“web development invoice template”)
- **Notes:** industry: app-developers

#### /templates/animation

- **Key:** animation invoice template · also: animator invoice; motion graphics invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per second of finished animation or per project, storyboards and animatics, revision rounds, voice and music licences passed through, usage rights. Sample: a 60-second explainer.
- **Don't write about:** Video editing (/templates/video-editing); illustration (/templates/illustration).
- **Notes:** industry: illustrators

#### /templates/3d-rendering

- **Key:** 3d rendering invoice template · also: architectural rendering invoice; 3d visualization invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per image by view and resolution, animations per second, modelling from plans, revision rounds, rush. Sample: 4 exterior + 2 interior renders.
- **Don't write about:** 3D printing (/templates/3d-printing); architects (/templates/architect).
- **Notes:** industry: none (link 2 related templates)

#### /templates/photo-retouching

- **Key:** photo retouching invoice template · also: photo editing invoice; retouching invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per image by level (basic, high-end), batch pricing, culling, rush, the photographer or brand as the client. Sample: 40 basic + 6 high-end edits.
- **Don't write about:** Photography sessions (/templates/photography).
- **Notes:** industry: photographers-videographers

#### /templates/livestream-production

- **Key:** livestream production invoice template · also: live streaming invoice; webcast production invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per event: crew and cameras, the streaming platform, graphics, rehearsal, internet backup, the recording delivered after. Sample: a 3-camera church or conference stream.
- **Don't write about:** Video production (/templates/videography); event AV (/templates/audio-visual).
- **Notes:** industry: photographers-videographers

#### /templates/virtual-tours

- **Key:** virtual tour invoice template · also: 360 tour invoice; matterport invoice
- **Item:** T16 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per property by square footage, hosting per month or year, floor plans, extra photos, travel. Sample: a 2,500 sq ft listing + hosting.
- **Don't write about:** Real estate photography in general (/templates/photography); drones (/templates/drone-services).
- **Already covered (link, don't repeat):** /templates/virtual-assistant (“virtual assistant invoice template”)
- **Notes:** industry: photographers-videographers

### Item T17 (12)

#### /templates/film-production

- **Key:** film production invoice template · also: production company invoice; film crew invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Production companies and crews: pre-production, shoot days by crew role, equipment packages, post-production, expenses and per diems, the production's PO and job number. Sample: a 2-day commercial shoot.
- **Don't write about:** Small video jobs (/templates/videography); editing only (/templates/video-editing).
- **Notes:** industry: photographers-videographers

#### /templates/actor

- **Key:** actor invoice template · also: actor invoice template; acting job invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Self-employed actors: day rate or session fee, usage and buyout, fittings and rehearsals, the agent's commission (who invoices whom), expenses. Sample: a 2-day commercial with a buyout.
- **Don't write about:** Voice-over (/templates/voice-over); modelling (/templates/model).
- **Notes:** industry: voice-actors

#### /templates/model

- **Key:** model invoice template · also: modeling invoice; model booking invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Day or half-day rate, usage rights by media and period, overtime, fittings, travel, the agency's commission and VAT. Sample: a half-day e-commerce shoot.
- **Don't write about:** Acting (/templates/actor); stylists (/templates/stylist).
- **Notes:** industry: none (link 2 related templates)

#### /templates/fashion-design

- **Key:** fashion design invoice template · also: fashion designer invoice; garment production invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Design fees, pattern making, samples, production per unit with quantity breaks, fabric deposits, tech packs. Sample: a design + 3 samples + 50 units.
- **Don't write about:** Alterations (/templates/alterations); embroidery (/templates/embroidery).
- **Already covered (link, don't repeat):** /templates/freelance-design (“graphic design invoice template”) · /templates/interior-design (“interior design invoice template”)
- **Notes:** industry: none (link 2 related templates)

#### /templates/stylist

- **Key:** stylist invoice template · also: fashion stylist invoice; wardrobe stylist invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Shoots and clients: day rate, prep and shopping days, the wardrobe budget passed on with receipts, returns, kit fee. Sample: a 1-day editorial + a prep day.
- **Don't write about:** Hair styling (/templates/hair-salon); personal shopping (/templates/personal-shopper).
- **Notes:** industry: hair-makeup-artists

#### /templates/muralist

- **Key:** muralist invoice template · also: mural artist invoice; mural painting invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per square foot or a project fee, the design fee and sketch rounds, materials and lifts, anti-graffiti coat, deposit and stage payments. Sample: a 300 sq ft exterior mural.
- **Don't write about:** Commissions on canvas (/templates/art-commission); house painting (/templates/painting).
- **Notes:** industry: artists

#### /templates/pottery

- **Key:** pottery invoice template · also: ceramics invoice; pottery wholesale invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Wholesale orders to shops and restaurants (minimums, per-piece prices, lead times), custom commissions, classes, shipping and breakage terms. Sample: a restaurant order of 60 plates.
- **Don't write about:** Selling goods in general (/templates/sales-invoice).
- **Notes:** industry: none (link 2 related templates)

#### /templates/jewelry-making

- **Key:** jewelry making invoice template · also: jewelry designer invoice; custom jewelry invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Custom pieces: design fee, metal by weight at the day's price, stones with certificates, labour, a deposit for materials, wholesale to shops. Sample: a custom ring with a client's stone.
- **Don't write about:** Repairs (/templates/jewelry-repair).
- **Notes:** industry: jewelers

#### /templates/picture-framing

- **Key:** picture framing invoice template · also: custom framing invoice; framing shop invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Moulding per foot, mats, glazing (standard, UV, museum), mounting, hardware, art hanging, corporate orders. Sample: 3 pieces with museum glass.
- **Don't write about:** Art commissions (/templates/art-commission).
- **Notes:** industry: none (link 2 related templates)

#### /templates/crafts

- **Key:** craft invoice template · also: handmade goods invoice; craft business invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Makers selling to shops, markets and custom clients: per item, wholesale vs retail price, custom orders with deposits, shipping, sales tax or VAT on goods. Sample: a wholesale order to a gift shop.
- **Don't write about:** Goods in general (/templates/sales-invoice); pottery (/templates/pottery).
- **Notes:** industry: none (link 2 related templates)

#### /templates/studio-rental

- **Key:** studio rental invoice template · also: photo studio rental invoice; studio hire invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per hour with a minimum, equipment add-ons (lights, backdrops), overtime, cleaning fee, the damage deposit. Sample: a 4-hour shoot with lighting.
- **Don't write about:** Recording studios (/templates/recording-studio); event venues (/templates/event-venue).
- **Notes:** industry: recording-studios

#### /templates/stained-glass

- **Key:** stained glass invoice template · also: stained glass artist invoice; glass restoration invoice
- **Item:** T17 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Commissions per square foot, design drawings, restoration (releading) of old windows, installation and protective glazing, deposits. Sample: a restored church panel.
- **Don't write about:** Window glass (/templates/glazier).
- **Notes:** industry: artists

### Item T18 (15)

#### /templates/acupuncture

- **Key:** acupuncture invoice template · also: acupuncturist invoice; acupuncture receipt
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per session (initial vs follow-up), packages, herbs as products, the licence number; for insurance reimbursement clients often need a superbill (link /templates/therapy). Sample: an initial + 3 follow-ups.
- **Don't write about:** The superbill in depth (/templates/therapy); massage (/templates/massage-therapy).
- **Notes:** industry: massage-therapists

#### /templates/chiropractic

- **Key:** chiropractic invoice template · also: chiropractor invoice; chiropractic receipt
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Cash-pay visits: exams, adjustments, X-rays, packages and memberships, the provider's licence; insurance codes only on a superbill (hedge). Sample: an exam + X-ray + 2 adjustments.
- **Don't write about:** The superbill (/templates/therapy); physical therapy (/templates/physiotherapy).
- **Notes:** industry: none (link 2 related templates)

#### /templates/physiotherapy

- **Key:** physical therapy invoice template · also: physiotherapy invoice; physio invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Private practice: assessment and treatment sessions, home visits, packages, the therapist's registration; insurance or health-fund billing details vary by country (hedge). Sample: assessment + 4 sessions.
- **Don't write about:** The superbill (/templates/therapy); occupational therapy (/templates/occupational-therapy).
- **Already covered (link, don't repeat):** /templates/massage-therapy (“massage therapy invoice template”)
- **Notes:** industry: none (link 2 related templates)

#### /templates/speech-therapy

- **Key:** speech therapy invoice template · also: speech language pathologist invoice; slp invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Private clients and schools: sessions, evaluations and reports, contract hours for schools, teletherapy, cancellations. Sample: an evaluation + 8 sessions.
- **Don't write about:** The superbill (/templates/therapy).
- **Already covered (link, don't repeat):** /templates/massage-therapy (“massage therapy invoice template”)
- **Notes:** industry: none (link 2 related templates)

#### /templates/occupational-therapy

- **Key:** occupational therapy invoice template · also: occupational therapist invoice; ot invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Assessments, home or school visits, equipment recommendations, reports for funders, mileage. Sample: a home assessment + report.
- **Don't write about:** Physiotherapy (/templates/physiotherapy).
- **Already covered (link, don't repeat):** /templates/massage-therapy (“massage therapy invoice template”)
- **Notes:** industry: none (link 2 related templates)

#### /templates/reiki

- **Key:** reiki invoice template · also: reiki practitioner invoice; energy healing invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Sessions, distance sessions, packages, classes and attunements; wording without health claims. Sample: 3 sessions + a level 1 class.
- **Don't write about:** Massage (/templates/massage-therapy); coaching (/templates/life-coaching).
- **Notes:** industry: massage-therapists

#### /templates/spray-tanning

- **Key:** spray tan invoice template · also: spray tanning invoice; mobile spray tan invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per session, mobile fee, bridal parties, packages, the patch-test note. Sample: a bridal party of 6, mobile.
- **Don't write about:** Skin care (/templates/esthetician).
- **Notes:** industry: estheticians

#### /templates/microblading

- **Key:** microblading invoice template · also: permanent makeup invoice; brow artist invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The procedure, the touch-up included or later, the deposit to book, consent forms, licensing (hedge per state or country). Sample: microblading + a 6-week touch-up.
- **Don't write about:** Lashes (/templates/lash-extensions); makeup (/templates/makeup-artist).
- **Notes:** industry: estheticians

#### /templates/hair-braiding

- **Key:** hair braiding invoice template · also: braider invoice; braiding service invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per style by length and size, hair included or brought, take-down, the booking deposit, late and no-show policy. Sample: medium knotless + hair.
- **Don't write about:** Salon services (/templates/hair-salon).
- **Notes:** industry: hair-makeup-artists

#### /templates/locum

- **Key:** locum invoice template · also: locum doctor invoice; locum gp invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Self-employed doctors, pharmacists or vets covering shifts: sessions or hours by date, the practice, travel, the registration number; pension and tax notes (UK: hedge, cite NHS guidance). Sample: 6 sessions in a month.
- **Don't write about:** Nursing (/templates/nursing).
- **Notes:** industry: none (link 2 related templates)

#### /templates/nursing

- **Key:** nursing invoice template · also: nurse invoice; independent nurse invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Independent and agency nurses billing per shift or hour, the patient or facility, mileage, the licence number; private duty vs facility contracts. Sample: 4 private-duty shifts.
- **Don't write about:** Home care (/templates/caregiving); locums (/templates/locum).
- **Notes:** industry: caregivers

#### /templates/midwife

- **Key:** midwife invoice template · also: midwifery invoice; home birth invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. A global fee for prenatal, birth and postnatal care in stages, birth supplies, lab fees passed on, the licence; health-insurance billing differs by country (hedge). Sample: a home-birth package in 3 payments.
- **Don't write about:** Doulas (/templates/doula).
- **Notes:** industry: doulas

#### /templates/lactation-consultant

- **Key:** lactation consultant invoice template · also: ibclc invoice; breastfeeding consultant invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Home or virtual consults, follow-ups, pump rentals, the certification; a superbill for insurance where it applies (link /templates/therapy). Sample: a home visit + a virtual follow-up.
- **Don't write about:** Doulas (/templates/doula).
- **Notes:** industry: doulas

#### /templates/sleep-consultant

- **Key:** sleep consultant invoice template · also: baby sleep consultant invoice; sleep coaching invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Packages (plan + 2 weeks of support), virtual or in-home, follow-up calls, extra weeks. Sample: a 2-week package.
- **Don't write about:** Coaching (/templates/life-coaching).
- **Notes:** industry: none (link 2 related templates)

#### /templates/hypnotherapy

- **Key:** hypnotherapy invoice template · also: hypnotherapist invoice; hypnosis session invoice
- **Item:** T18 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Sessions, programmes (smoking, weight) as packages, recordings, cancellations; no medical claims. Sample: a 4-session programme.
- **Don't write about:** Counselling (/templates/therapy).
- **Notes:** industry: therapists

### Item T19 (12)

#### /templates/daycare

- **Key:** daycare invoice template · also: childcare invoice; daycare receipt
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Weekly or monthly tuition, registration fee, late pickup fees, meals, holidays and closures, the provider's licence and tax ID for the parents' tax credit or childcare subsidy (hedge per country). Sample: a month for 2 children.
- **Don't write about:** Babysitting and nannies (/templates/babysitting).
- **Notes:** industry: babysitters

#### /templates/after-school-program

- **Key:** after school program invoice template · also: after school care invoice; afterschool invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per term or month, days per week, pickup from school, activities, late fees, sibling discount. Sample: a term, 3 days a week.
- **Don't write about:** Daycare (/templates/daycare); tutoring (/templates/tutoring).
- **Notes:** industry: babysitters

#### /templates/summer-camp

- **Key:** summer camp invoice template · also: camp invoice; camp registration invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per week per child, deposit on registration, extended care, trips, the refund policy, sibling discounts. Sample: 3 weeks for 2 children.
- **Don't write about:** After-school care (/templates/after-school-program).
- **Notes:** industry: none (link 2 related templates)

#### /templates/language-lessons

- **Key:** language lessons invoice template · also: language tutor invoice; language teacher invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per lesson or package, online vs in person, group classes, exam preparation, materials, company language training. Sample: 10 lessons + a business course.
- **Don't write about:** Tutoring in school subjects (/templates/tutoring); translation (/templates/translation).
- **Notes:** industry: tutors

#### /templates/art-lessons

- **Key:** art lessons invoice template · also: art class invoice; art teacher invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per class or term, materials fee, private lessons, workshops and parties. Sample: a 6-week term + materials.
- **Don't write about:** Music lessons (/templates/music-lessons).
- **Notes:** industry: tutors

#### /templates/corporate-training

- **Key:** corporate training invoice template · also: training invoice template; workshop facilitator invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per day or per participant, design and preparation, materials and certificates, travel, online vs on site, the client's PO. Sample: a 2-day workshop for 15.
- **Don't write about:** Consulting (/templates/consulting); public speaking (/templates/public-speaking).
- **Notes:** industry: consultants-coaches

#### /templates/public-speaking

- **Key:** speaker invoice template · also: speaking fee invoice; keynote speaker invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The speaking fee, travel and accommodation (or a flat travel fee), book sales, recording rights, the deposit and balance; speakers' bureau commission. Sample: a keynote + travel.
- **Don't write about:** Training workshops (/templates/corporate-training).
- **Notes:** industry: consultants-coaches

#### /templates/horse-riding-lessons

- **Key:** riding lessons invoice template · also: horse riding lesson invoice; equestrian lessons invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per lesson (private, group), packages, horse use vs own horse, arena fees, shows and coaching at events. Sample: 8 lessons, school horse.
- **Don't write about:** Boarding (/templates/horse-boarding).
- **Notes:** industry: none (link 2 related templates)

#### /templates/martial-arts

- **Key:** martial arts invoice template · also: martial arts school invoice; karate class invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Memberships per month, belt test fees, uniforms and gear, private lessons, family plans; monthly by duplicating the invoice. Sample: a family plan + a belt test.
- **Don't write about:** Personal training (/templates/personal-training).
- **Notes:** industry: personal-trainers

#### /templates/college-admissions-consulting

- **Key:** college admissions consulting invoice template · also: college consultant invoice; admissions counseling invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Packages by grade or number of schools, hourly essay help, test planning, payment plans. Sample: a senior-year package in 3 payments.
- **Don't write about:** Tutoring (/templates/tutoring).
- **Already covered (link, don't repeat):** /templates/consulting (“consulting invoice template”)
- **Notes:** industry: tutors

#### /templates/cpr-training

- **Key:** cpr training invoice template · also: first aid training invoice; cpr instructor invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per participant with a class minimum, certification cards and the issuing body's fees, on-site group classes, equipment. Sample: a workplace class for 12.
- **Don't write about:** Corporate training (/templates/corporate-training).
- **Notes:** industry: none (link 2 related templates)

#### /templates/music-therapy

- **Key:** music therapy invoice template · also: music therapist invoice; music therapy session invoice
- **Item:** T19 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Sessions (individual, group), facility contracts per hour, assessments and reports, the credential (MT-BC in the US: hedge), funding or insurance notes. Sample: a care home's monthly group sessions.
- **Don't write about:** Music lessons (/templates/music-lessons); counselling (/templates/therapy).
- **Already covered (link, don't repeat):** /templates/massage-therapy (“massage therapy invoice template”) · /templates/music-lessons (“music teacher invoice template”)
- **Notes:** industry: therapists

### Item T20 (12)

#### /templates/pet-boarding

- **Key:** pet boarding invoice template · also: dog boarding invoice; kennel invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per night by size, holiday surcharges, multiple pets, daycare days, bathing on checkout, medications, vaccination requirements in the terms. Sample: 6 nights for 2 dogs over a holiday.
- **Don't write about:** Pet sitting in the owner's home (/templates/pet-sitting); grooming (/templates/dog-grooming).
- **Already covered (link, don't repeat):** /templates/pet-sitting (“pet sitting invoice template”)
- **Notes:** industry: pet-care

#### /templates/horse-boarding

- **Key:** horse boarding invoice template · also: stable invoice; livery invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Monthly board by type (full, partial, pasture), feed and bedding extras, turnout, blanketing, farrier and vet visits passed on, the board agreement. Sample: a month of full board + farrier.
- **Don't write about:** Farriers (/templates/farrier); lessons (/templates/horse-riding-lessons).
- **Notes:** industry: farmers

#### /templates/farrier

- **Key:** farrier invoice template · also: horseshoeing invoice; farrier service invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per horse: trim, front shoes, full set, specialty shoes, pads, a barn call fee shared across horses, missed appointments. Sample: 4 horses at one barn.
- **Don't write about:** Horse boarding (/templates/horse-boarding).
- **Notes:** industry: farmers

#### /templates/pet-waste-removal

- **Key:** pet waste removal invoice template · also: pooper scooper invoice; dog waste removal invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Weekly or twice-weekly service by number of dogs, initial cleanup fee, deodorising, commercial sites (HOAs, apartments); monthly by duplicating the invoice. Sample: a month, weekly, 2 dogs.
- **Don't write about:** Pet sitting (/templates/pet-sitting); lawn care (/templates/landscaping).
- **Notes:** industry: pet-care

#### /templates/hunting-guide

- **Key:** hunting guide invoice template · also: outfitter invoice; guided hunt invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Guided hunts per day or package, lodging and meals, trophy fees, processing passed on, licences and tags (the client buys them: hedge), the deposit and cancellation. Sample: a 3-day guided hunt.
- **Don't write about:** Meat processing (/templates/meat-processing); fishing charters (/templates/fishing-charter).
- **Notes:** industry: none (link 2 related templates)

#### /templates/fishing-charter

- **Key:** fishing charter invoice template · also: charter boat invoice; fishing trip invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Half or full day, per person or per boat, bait and tackle, fish cleaning, the fuel surcharge, licences, the captain's licence, gratuity line. Sample: a full-day trip for 4.
- **Don't write about:** Hunting guides (/templates/hunting-guide); boat repair (/templates/boat-repair).
- **Notes:** industry: none (link 2 related templates)

#### /templates/custom-harvesting

- **Key:** custom harvesting invoice template · also: custom farming invoice; harvesting services invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per acre by crop, per bushel or tonne hauling, fuel surcharge, the field names and acres, combine and trucks; contractor work for farms (Lohnunternehmer, loonwerker in local versions). Sample: 300 acres of wheat + hauling.
- **Don't write about:** Farm sales (/templates/farm); land clearing (/templates/land-clearing).
- **Notes:** industry: farmers

#### /templates/land-clearing

- **Key:** land clearing invoice template · also: forestry mulching invoice; brush clearing invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per acre or per hour by density, forestry mulching vs removal, stump grinding, hauling, permits and protected species (hedge). Sample: 2 acres of mulching.
- **Don't write about:** Tree removal (/templates/tree-service); excavation (/templates/excavation).
- **Notes:** industry: tree-service

#### /templates/logging

- **Key:** logging invoice template · also: timber harvesting invoice; logging contractor invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per tonne or per cord, stumpage paid to the owner vs cutting and hauling fees, scale tickets, the harvest plan. Sample: a timber sale settlement.
- **Don't write about:** Tree service (/templates/tree-service); firewood (/templates/firewood).
- **Notes:** industry: tree-service

#### /templates/firewood

- **Key:** firewood invoice template · also: firewood delivery invoice; firewood sales invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per cord or cubic metre (face cord vs full cord: define it), seasoned vs green, delivery and stacking, kiln-dried. Sample: 2 cords delivered and stacked.
- **Don't write about:** Logging (/templates/logging).
- **Notes:** industry: tree-service

#### /templates/pond-maintenance

- **Key:** pond maintenance invoice template · also: pond cleaning invoice; water feature maintenance invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Spring and autumn cleanouts, monthly service, pumps and filters, plants and fish, algae treatment. Sample: a spring cleanout + monthly service.
- **Don't write about:** Aquariums (/templates/aquarium-maintenance); pool service (/templates/pool-service).
- **Notes:** industry: landscaping-lawn-care

#### /templates/taxidermy

- **Key:** taxidermy invoice template · also: taxidermist invoice; taxidermy deposit invoice
- **Item:** T20 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Per mount type (shoulder, full body, European, fish per inch), the deposit at drop-off, tanning, shipping, the tag or permit number (hedge: wildlife rules), pickup policy. Sample: a shoulder mount with deposit.
- **Don't write about:** Meat processing (/templates/meat-processing).
- **Notes:** industry: none (link 2 related templates)
