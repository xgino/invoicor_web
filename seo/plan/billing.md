# Billing-type templates

> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [chunks](../PLAN.md).

**0 done · 60 planned**

## Direction

- **URL:** `/templates/{trade}-{billing}-invoice` · **Key:** "{trade} {deposit | progress | milestone | hourly | labor and materials | retainer} invoice"
- **Blueprint:** [BLUEPRINTS.md](../BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice) · **Where it's written:** `content/templates.json`
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

## Done (0): don't build these again

_None yet._

## Planned (60)

### Item 1B (20)

#### /templates/photography-deposit-invoice

- **Key:** photography deposit invoice · also: photographer deposit invoice; wedding photography deposit
- **Item:** 1B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit (retainer) invoice a photographer sends when a client books a date: what it secures (the date, prep time), usual sizes (25–50%), non-refundable wording and the cancellation and reschedule policy, due before the date is held. Sample: a wedding booking deposit. Show how the balance invoice later lists the deposit as a negative line. FAQs: deposit vs retainer, refundable or not, rescheduling, how it appears on the final invoice.
- **Don't write about:** General photography invoice fields, usage rights and licensing (owned by /templates/photography): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/photography (“photography invoice template”)

#### /templates/catering-deposit-invoice

- **Key:** catering deposit invoice · also: catering deposit invoice template
- **Item:** 1B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit that locks a catering date: deposit size, the final headcount deadline and how the final invoice adjusts to the guaranteed count, a tasting fee credited against the deposit, cancellation windows. Sample: a 120-guest wedding deposit.
- **Don't write about:** Per-head menu pricing, service charge vs gratuity, staffing lines (owned by /templates/catering).
- **Already covered (link, don't repeat):** /templates/catering (“catering invoice template”)

#### /templates/contractor-deposit-invoice

- **Key:** contractor deposit invoice · also: construction deposit invoice; down payment invoice
- **Item:** 1B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The down payment a contractor takes before starting: what it pays for (materials, scheduling), how big it may be (some states cap home-improvement down payments, e.g. California: $1,000 or 10% of the contract price, whichever is less, Business and Professions Code §7159.5; verify and date it), a materials deposit vs a booking deposit, what the contract should say. Sample: a kitchen job deposit.
- **Don't write about:** Progress billing and retainage (owned by /templates/construction-progress-invoice); general construction fields (/templates/construction).
- **Already covered (link, don't repeat):** /industries/general-contractors (“invoice app for contractors”)

#### /templates/roofing-deposit-invoice

- **Key:** roofing deposit invoice · also: roofer deposit invoice
- **Item:** 1B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit before a roof job: ordering shingles and materials, scheduling around weather, insurance-claim jobs (homeowner deductible, insurer's first and final checks, hedged), what happens to the deposit if the job is delayed. Sample: a full re-roof materials deposit.
- **Don't write about:** Roofing line items per square, tear-off and disposal (owned by /templates/roofing).
- **Already covered (link, don't repeat):** /templates/roofing (“roofing invoice template”) · /industries/roofers (“roofing invoice app”)

#### /templates/painting-deposit-invoice

- **Key:** painting deposit invoice · also: painter deposit invoice
- **Item:** 1B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The deposit a painter takes for paint and the booked days: color selection before ordering, change orders after the deposit, interior vs exterior weather terms. Sample: an exterior repaint deposit.
- **Don't write about:** Per-room and per-square-foot pricing, prep lines (owned by /templates/painting).
- **Already covered (link, don't repeat):** /templates/painting (“painting invoice template”)

#### /templates/dj-deposit-invoice

- **Key:** dj deposit invoice · also: wedding dj deposit
- **Item:** 1B · **Intent:** template: deposit · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. The date-hold deposit for a DJ booking: deposit size, what it covers, non-refundable terms, balance due before the event, overtime rate agreed in advance. Sample: a wedding DJ deposit.
- **Don't write about:** Full DJ invoice lines (hours, equipment, travel; owned by /templates/dj).
- **Already covered (link, don't repeat):** /templates/dj (“dj invoice template”)

#### /templates/construction-progress-invoice

- **Key:** construction progress invoice · also: progress billing invoice; progress payment invoice
- **Item:** 1B · **Intent:** template: progress · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Progress billing: invoicing by percentage complete or by milestone against a schedule of values, retainage (often 5–10% held until completion), change orders on their own lines, lien waivers (hedged, state rules vary); the AIA G702/G703 forms exist as an industry standard, but this is a plain invoice. Sample: the 3rd progress invoice of a home addition with previous payments shown.
- **Don't write about:** Deposits and down payments (owned by /templates/contractor-deposit-invoice); general construction fields (/templates/construction).
- **Already covered (link, don't repeat):** /templates/construction (“construction invoice template”)

#### /templates/web-development-milestone-invoice

- **Key:** web development milestone invoice · also: website project milestone invoice
- **Item:** 1B · **Intent:** template: progress · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Billing a website project in milestones (discovery, design, build, launch): what counts as done (acceptance), revision rounds, scope changes as new lines, deposit at the start. Sample: milestone 2 of 4.
- **Don't write about:** Monthly maintenance retainers (owned by /templates/web-development-retainer-invoice); general web development fields (/templates/web-development).
- **Already covered (link, don't repeat):** /templates/web-development (“web development invoice template”)

#### /templates/video-production-milestone-invoice

- **Key:** video production milestone invoice · also: videographer milestone invoice
- **Item:** 1B · **Intent:** template: progress · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Billing a video project in stages: pre-production, shoot days, edit and revision rounds, delivery; what each milestone includes, extra revision rounds as lines, usage terms per stage. Sample: the post-production milestone.
- **Don't write about:** Day rates, crew and usage rights (owned by /templates/videography).

#### /templates/consulting-hourly-invoice

- **Key:** consulting hourly invoice · also: hourly consultant invoice
- **Item:** 1B · **Intent:** template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly consulting invoices: hours × rate, billing increments (e.g. 0.25 h), how much detail per entry, minimum billing, travel time; hours come from your own timesheet (the app doesn't track time); link the free hours calculator. Sample: a month of advisory hours.
- **Don't write about:** Retainers (owned by /templates/consulting-retainer-invoice); setting your rate (the rate calculator in /tools); general consulting fields (/templates/consulting).
- **Already covered (link, don't repeat):** /templates/consulting (“consulting invoice template”)

#### /templates/virtual-assistant-hourly-invoice

- **Key:** virtual assistant hourly invoice · also: va hourly invoice
- **Item:** 1B · **Intent:** template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly VA invoices: hours by task category, pre-paid blocks of hours vs billing after, time zones and response times, tools and subscriptions passed through. Sample: a two-week period for one client.
- **Don't write about:** General VA fields (owned by /templates/virtual-assistant); the app pitch for VAs (/industries/virtual-assistants).
- **Already covered (link, don't repeat):** /industries/virtual-assistants (“invoice app for virtual assistants”) · /templates/virtual-assistant (“virtual assistant invoice template”)

#### /templates/handyman-hourly-invoice

- **Key:** handyman hourly invoice · also: handyman hourly rate invoice
- **Item:** 1B · **Intent:** template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly handyman billing: hourly vs flat per job, minimum charge (often 1–2 hours), trip charge, materials at cost or with a markup, rounding. Sample: a half-day of small repairs.
- **Don't write about:** General handyman invoice fields (owned by /templates/handyman).
- **Already covered (link, don't repeat):** /templates/handyman (“handyman invoice template”)

#### /templates/bookkeeping-hourly-invoice

- **Key:** bookkeeping hourly invoice · also: bookkeeper hourly invoice
- **Item:** 1B · **Intent:** template: hourly · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Hourly bookkeeping: catch-up and clean-up work billed by the hour vs the usual monthly fixed fee, what to list per entry, year-end extras. Sample: a catch-up project of 3 months of books.
- **Don't write about:** The monthly fixed-fee bookkeeping invoice (owned by /templates/bookkeeping).
- **Already covered (link, don't repeat):** /templates/bookkeeping (“bookkeeping invoice template”)

#### /templates/plumbing-labor-and-materials-invoice

- **Key:** plumbing labor and materials invoice · also: plumbing parts and labor invoice
- **Item:** 1B · **Intent:** template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Separating labor and parts: labor as hours × rate or a flat fee, each part on its own line, markup on parts (be transparent), parts vs workmanship warranty; sales tax on parts vs labor differs by state, and the app applies one tax rate per invoice (say how to handle it). Sample: a water heater replacement.
- **Don't write about:** General plumbing invoice fields (owned by /templates/plumbing).

#### /templates/electrical-labor-and-materials-invoice

- **Key:** electrical labor and materials invoice · also: electrician parts and labor invoice
- **Item:** 1B · **Intent:** template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Labor and materials for electricians: wire by the foot, devices and fixtures (supplied by you or the customer), permit fees as a pass-through line, labor hours; tax on materials vs labor (state rules, one tax rate per invoice). Sample: a panel upgrade.
- **Don't write about:** General electrician invoice fields (owned by /templates/electrician).

#### /templates/hvac-labor-and-materials-invoice

- **Key:** hvac labor and materials invoice · also: hvac parts and labor invoice
- **Item:** 1B · **Intent:** template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Labor and materials for HVAC: equipment, refrigerant by the pound, parts, labor hours, warranty registration, disposal of old units; tax rules hedged. Sample: an AC condenser replacement.
- **Don't write about:** General HVAC invoice fields and maintenance plans (owned by /templates/hvac).

#### /templates/landscaping-labor-and-materials-invoice

- **Key:** landscaping labor and materials invoice · also: landscaping materials invoice
- **Item:** 1B · **Intent:** template: labor and materials · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Labor and materials for landscaping projects: plants, soil and mulch by the cubic yard, stone by the ton, crew hours, equipment and disposal fees. Sample: a new front-yard bed install.
- **Don't write about:** Recurring lawn care visits and general landscaping fields (owned by /templates/landscaping).

#### /templates/consulting-retainer-invoice

- **Key:** consulting retainer invoice · also: retainer invoice template
- **Item:** 1B · **Intent:** template: retainer · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Monthly consulting retainers: paying for availability vs a block of hours, invoicing at the start of the month, unused hours (roll over or not), the overage rate; in the app, duplicate last month's invoice. Sample: a monthly advisory retainer with an overage line.
- **Don't write about:** Hourly billing (owned by /templates/consulting-hourly-invoice); general consulting fields (/templates/consulting).
- **Already covered (link, don't repeat):** /templates/consulting (“consulting invoice template”)

#### /templates/social-media-retainer-invoice

- **Key:** social media retainer invoice · also: monthly social media invoice
- **Item:** 1B · **Intent:** template: retainer · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Monthly social media retainers: the management fee, what's included (posts, platforms, reports), ad spend billed separately as a pass-through, extras (shoots, campaigns). Sample: a monthly retainer with ad spend on its own line.
- **Don't write about:** General social media manager invoice fields (owned by /templates/social-media-management).
- **Already covered (link, don't repeat):** /templates/social-media-management (“social media manager invoice template”) · /industries/social-media-managers (“invoice app for social media managers”)

#### /templates/web-development-retainer-invoice

- **Key:** website maintenance retainer invoice · also: web maintenance invoice
- **Item:** 1B · **Intent:** template: retainer · **Languages:** yes
- **Write about:** Same fields as the other templates (content/templates.json), plus a sample invoice of this billing type. Website maintenance retainers: hosting, updates and backups, a number of support hours, response times, extra hours at a set rate; billed monthly by duplicating the last invoice. Sample: a monthly care plan.
- **Don't write about:** Project milestones (owned by /templates/web-development-milestone-invoice); general web development fields (/templates/web-development).

### Item 3A (20)

#### /templates/tattoo-deposit-invoice

- **Key:** tattoo deposit invoice · also: tattoo booking deposit
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The booking deposit, non-refundable terms, applied to the final session.
- **Don't write about:** General fields of the trade (owned by /templates/tattoo): one sentence and a link.

#### /templates/cake-deposit-invoice

- **Key:** cake deposit invoice · also: custom cake order deposit
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The order deposit, the final design date, delivery balance.
- **Don't write about:** General fields of the trade (owned by /templates/bakery): one sentence and a link.

#### /templates/band-deposit-invoice

- **Key:** band deposit invoice · also: musician deposit invoice
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Holding the date, the balance before the gig, cancellation.
- **Don't write about:** General fields of the trade (owned by /templates/musician): one sentence and a link.

#### /templates/event-planner-deposit-invoice

- **Key:** event planner deposit invoice · also: wedding planner deposit
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The retainer at booking, payment schedule to the event.
- **Don't write about:** General fields of the trade (owned by /templates/event-planning): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/event-planning (“event planner invoice template”) · /industries/event-planners (“invoice app for event planners”)

#### /templates/florist-deposit-invoice

- **Key:** wedding florist deposit invoice · also: florist deposit
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The deposit, final counts, price changes for seasonal flowers.
- **Don't write about:** General fields of the trade (owned by /templates/florist): one sentence and a link.

#### /templates/makeup-artist-deposit-invoice

- **Key:** makeup artist deposit invoice · also: bridal makeup deposit
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The bridal booking deposit, trial, balance on the day.
- **Don't write about:** General fields of the trade (owned by /templates/makeup-artist): one sentence and a link.
- **Already covered (link, don't repeat):** /industries/hair-makeup-artists (“invoice app for makeup artists”) · /templates/makeup-artist (“makeup artist invoice template”)

#### /templates/interior-design-retainer-invoice

- **Key:** interior design retainer invoice · also: design retainer
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The retainer applied to hours, procurement deposits.
- **Don't write about:** General fields of the trade (owned by /templates/interior-design): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/interior-design (“interior design invoice template”)

#### /templates/app-development-milestone-invoice

- **Key:** app development milestone invoice · also: app project milestone
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Milestones by build stage, acceptance, app store launch.
- **Don't write about:** General fields of the trade (owned by /templates/app-development): one sentence and a link.

#### /templates/remodeling-progress-invoice

- **Key:** remodeling progress invoice · also: renovation progress billing
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Stages (demo, rough-in, finishes), change orders, retainage.
- **Don't write about:** General fields of the trade (owned by /templates/remodeling): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/remodeling (“remodeling invoice template”)

#### /templates/change-order-invoice

- **Key:** construction change order invoice · also: change order template
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. What changed, the price and time impact, signed approval before work.
- **Don't write about:** General fields of the trade (owned by /templates/construction): one sentence and a link.

#### /templates/managed-it-services-invoice

- **Key:** managed it services invoice · also: msp invoice
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Per device or user per month, included hours, projects extra; duplicate monthly.
- **Don't write about:** General fields of the trade (owned by /templates/it-services): one sentence and a link.

#### /templates/tutoring-package-invoice

- **Key:** tutoring package invoice · also: prepaid tutoring sessions
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Prepaid packages, sessions used, expiry.
- **Don't write about:** General fields of the trade (owned by /templates/tutoring): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/tutoring (“tutoring invoice template”)

#### /templates/house-cleaning-hourly-invoice

- **Key:** house cleaning hourly invoice · also: cleaning hourly rate invoice
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Hours per cleaner, minimums, supplies.
- **Don't write about:** General fields of the trade (owned by /templates/cleaning-services): one sentence and a link.

#### /templates/translation-per-word-invoice

- **Key:** translation per word invoice · also: per word rate invoice
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Word counts (source or target), minimum fee, rush.
- **Don't write about:** General fields of the trade (owned by /templates/translation): one sentence and a link.

#### /templates/copywriting-per-word-invoice

- **Key:** copywriting per word invoice · also: freelance writing per word
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Per word vs per piece, revisions, kill fee.
- **Don't write about:** General fields of the trade (owned by /templates/copywriting): one sentence and a link.

#### /templates/roofing-labor-and-materials-invoice

- **Key:** roofing labor and materials invoice · also: roofing materials invoice
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Squares, underlayment, flashing, labor, disposal.
- **Don't write about:** General fields of the trade (owned by /templates/roofing): one sentence and a link.

#### /templates/flooring-labor-and-materials-invoice

- **Key:** flooring labor and materials invoice · also: flooring materials invoice
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Square feet of material plus waste, underlayment, labor per sq ft.
- **Don't write about:** General fields of the trade (owned by /templates/flooring): one sentence and a link.

#### /templates/carpentry-labor-and-materials-invoice

- **Key:** carpentry labor and materials invoice · also: carpentry materials invoice
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Lumber and hardware, labor hours, finish work.
- **Don't write about:** General fields of the trade (owned by /templates/carpentry): one sentence and a link.

#### /templates/painting-labor-and-materials-invoice

- **Key:** painting labor and materials invoice · also: painting materials invoice
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Gallons and supplies, labor per room or hour, prep.
- **Don't write about:** General fields of the trade (owned by /templates/painting): one sentence and a link.

#### /templates/monthly-pool-service-invoice

- **Key:** monthly pool service invoice · also: pool service billing
- **Item:** 3A · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Weekly visits per month, chemicals, repairs extra; duplicate monthly.
- **Don't write about:** General fields of the trade (owned by /templates/pool-service): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/pool-service (“pool service invoice template”) · /industries/pool-service (“invoice app for pool service companies”)

### Item 4D (20)

#### /templates/monthly-lawn-care-invoice

- **Key:** monthly lawn care invoice · also: lawn mowing invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Visits per month, seasonal extras; duplicate monthly.
- **Don't write about:** General fields of the trade (owned by /templates/landscaping): one sentence and a link.

#### /templates/commercial-cleaning-monthly-invoice

- **Key:** monthly cleaning invoice · also: commercial cleaning invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The monthly contract price, extra services, supplies.
- **Don't write about:** General fields of the trade (owned by /templates/cleaning-services): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/cleaning-services (“cleaning invoice template”)

#### /templates/seasonal-snow-removal-invoice

- **Key:** seasonal snow removal invoice · also: snow plowing contract invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Seasonal contract vs per push, installments.
- **Don't write about:** General fields of the trade (owned by /templates/snow-removal): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/snow-removal (“snow removal invoice template”) · /industries/snow-removal (“invoice app for snow removal businesses”)

#### /templates/quarterly-pest-control-invoice

- **Key:** quarterly pest control invoice · also: pest control plan invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The plan price per quarter, callbacks included.
- **Don't write about:** General fields of the trade (owned by /templates/pest-control): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/pest-control (“pest control invoice template”) · /industries/pest-control (“pest control invoicing software”)

#### /templates/personal-training-package-invoice

- **Key:** personal training package invoice · also: training sessions package
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Prepaid packs, sessions used, expiry.
- **Don't write about:** General fields of the trade (owned by /templates/personal-training): one sentence and a link.

#### /templates/dog-training-package-invoice

- **Key:** dog training package invoice · also: dog training sessions
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Packages and board-and-train.
- **Don't write about:** General fields of the trade (owned by /templates/dog-training): one sentence and a link.

#### /templates/monthly-music-lesson-invoice

- **Key:** monthly music lesson invoice · also: music lesson tuition
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Lessons per month, missed lessons, recital fees.
- **Don't write about:** General fields of the trade (owned by /templates/music-lessons): one sentence and a link.

#### /templates/photography-final-invoice

- **Key:** photography final invoice · also: photography balance invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The balance after the deposit, extras, gallery delivery on payment.
- **Don't write about:** General fields of the trade (owned by /templates/photography): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/photography (“photography invoice template”)

#### /templates/videography-deposit-invoice

- **Key:** videography deposit invoice · also: wedding videography deposit
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The date-hold deposit, balance before delivery.
- **Don't write about:** General fields of the trade (owned by /templates/videography): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/videography (“videography invoice template”)

#### /templates/catering-final-invoice

- **Key:** catering final invoice · also: catering balance invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The final headcount, extras, the deposit subtracted.
- **Don't write about:** General fields of the trade (owned by /templates/catering): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/catering (“catering invoice template”)

#### /templates/emergency-plumbing-invoice

- **Key:** emergency plumbing invoice · also: after hours plumbing invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. After-hours rates, call-out fee, temporary fixes.
- **Don't write about:** General fields of the trade (owned by /templates/plumbing): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/plumbing (“plumbing invoice template”)

#### /templates/hvac-maintenance-plan-invoice

- **Key:** hvac maintenance plan invoice · also: hvac service agreement invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The yearly plan, visits included, discounts on repairs.
- **Don't write about:** General fields of the trade (owned by /templates/hvac): one sentence and a link.

#### /templates/electrician-service-call-invoice

- **Key:** electrician service call invoice · also: electrical service call fee
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The trip and diagnostic fee, credited if hired.
- **Don't write about:** General fields of the trade (owned by /templates/electrician): one sentence and a link.

#### /templates/appliance-repair-service-call-invoice

- **Key:** appliance repair service call invoice · also: appliance diagnostic fee
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. The diagnostic fee, parts ordered, second visit.
- **Don't write about:** General fields of the trade (owned by /templates/appliance-repair): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/appliance-repair (“appliance repair invoice template”) · /industries/appliance-repair (“invoice app for appliance repair technicians”)

#### /templates/emergency-locksmith-invoice

- **Key:** emergency locksmith invoice · also: lockout invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. After-hours call-out, lockout vs rekey.
- **Don't write about:** General fields of the trade (owned by /templates/locksmith): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/locksmith (“locksmith invoice template”) · /industries/locksmiths (“invoice app for locksmiths”)

#### /templates/moving-hourly-invoice

- **Key:** moving hourly invoice · also: movers hourly rate
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Crew size × hours, travel time, minimums.
- **Don't write about:** General fields of the trade (owned by /templates/moving): one sentence and a link.

#### /templates/consulting-project-invoice

- **Key:** consulting project invoice · also: fixed fee consulting invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. A fixed-fee project, payment stages, expenses.
- **Don't write about:** General fields of the trade (owned by /templates/consulting): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/consulting (“consulting invoice template”)

#### /templates/graphic-design-deposit-invoice

- **Key:** graphic design deposit invoice · also: design deposit
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. 50% upfront, rounds of revisions, files on final payment.
- **Don't write about:** General fields of the trade (owned by /templates/freelance-design): one sentence and a link.
- **Already covered (link, don't repeat):** /templates/freelance-design (“graphic design invoice template”)

#### /templates/virtual-assistant-retainer-invoice

- **Key:** virtual assistant retainer invoice · also: va retainer
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Monthly hours block, rollover, overage.
- **Don't write about:** General fields of the trade (owned by /templates/virtual-assistant): one sentence and a link.
- **Already covered (link, don't repeat):** /industries/virtual-assistants (“invoice app for virtual assistants”) · /templates/virtual-assistant (“virtual assistant invoice template”)

#### /templates/handyman-labor-and-materials-invoice

- **Key:** handyman labor and materials invoice · also: handyman materials invoice
- **Item:** 4D · **Intent:** template: billing type · **Languages:** yes
- **Write about:** Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. Materials at cost or markup, labor, trip charge.
- **Don't write about:** General fields of the trade (owned by /templates/handyman): one sentence and a link.
