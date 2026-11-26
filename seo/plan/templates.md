# Trade templates

> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**50 done · 106 planned**

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

## Planned (106)

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
