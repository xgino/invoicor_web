# Swedish (sv): language versions

> **Generated, don't edit by hand.** Every page planned in Swedish, per group, with what each
> version must do. A version's ID is its English page's ID + `-sv` ("do D4-sv"; a whole
> group: "do D1–D20 in Swedish"). Back to the [plan](../../PLAN.md#languages). Data:
> `seo/pages/`; then `npm run pages`.

## Writing for Sweden

- **Money:** SEK · **numbers:** 1 234,56 kr · **VAT:** 25% (12%, 6%)
- **Tax words:** moms; F-skatt; momsregistreringsnummer
- **Watch out:** Public sector needs Peppol e-invoices.
- **Search words** usually look like: template "fakturamall {trade}", app page "faktureringsprogram för {trade}", tool "räkna ut {tool}". Research the real local words first (the demand gate): Google in Swedish (autocomplete, "People also ask"), Search Console for the sv pages.
- **Every page:** written for the country, not word for word; slug, title, H1 and examples in
  Swedish; links to the English page (hreflang) and to the other sv pages; the same depth and
  honesty rules as the English page ([RULES.md](../../RULES.md)).
- **Where:** a template or industry page goes in `content/sv/templates.json` or `industries.json`: the English entry's fields written for the country, `translation_of` (the English slug) and its own headings (RULES.md §4, "Where a version is written"). Its URL: the Swedish base in `lib/i18n/routes.ts` + a local slug.
- **Skip a page** that has no Swedish search or doesn't fit the country: a `parked` row in
  `sv` with `translation_of` = the English URL and the reason in `notes`.

## T1–T20 in Swedish

[ ] Trade templates 1–20 (built) · 0/20 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T1-sv · /templates/photography → Swedish

- [ ] **Live in sv**
- **English page:** [photography invoice template](https://invoicor.com/templates/photography) (live: use it as the source)
- **Search words:** "fakturamall [photography, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T2-sv · /templates/plumbing → Swedish

- [ ] **Live in sv**
- **English page:** [plumbing invoice template](https://invoicor.com/templates/plumbing) (live: use it as the source)
- **Search words:** "fakturamall [plumbing, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T3-sv · /templates/hvac → Swedish

- [ ] **Live in sv**
- **English page:** [hvac invoice template](https://invoicor.com/templates/hvac) (live: use it as the source)
- **Search words:** "fakturamall [hvac, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T4-sv · /templates/freelance-design → Swedish

- [ ] **Live in sv**
- **English page:** [graphic design invoice template](https://invoicor.com/templates/freelance-design) (live: use it as the source)
- **Search words:** "fakturamall [graphic design, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T5-sv · /templates/handyman → Swedish

- [ ] **Live in sv**
- **English page:** [handyman invoice template](https://invoicor.com/templates/handyman) (live: use it as the source)
- **Search words:** "fakturamall [handyman, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T6-sv · /templates/videography → Swedish

- [ ] **Live in sv**
- **English page:** [videography invoice template](https://invoicor.com/templates/videography) (live: use it as the source)
- **Search words:** "fakturamall [videography, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T7-sv · /templates/landscaping → Swedish

- [ ] **Live in sv**
- **English page:** [landscaping invoice template](https://invoicor.com/templates/landscaping) (live: use it as the source)
- **Search words:** "fakturamall [landscaping, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T8-sv · /templates/consulting → Swedish

- [ ] **Live in sv**
- **English page:** [consulting invoice template](https://invoicor.com/templates/consulting) (live: use it as the source)
- **Search words:** "fakturamall [consulting, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T9-sv · /templates/cleaning-services → Swedish

- [ ] **Live in sv**
- **English page:** [cleaning invoice template](https://invoicor.com/templates/cleaning-services) (live: use it as the source)
- **Search words:** "fakturamall [cleaning, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T10-sv · /templates/auto-detailing → Swedish

- [ ] **Live in sv**
- **English page:** [auto detailing invoice template](https://invoicor.com/templates/auto-detailing) (live: use it as the source)
- **Search words:** "fakturamall [auto detailing, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T11-sv · /templates/electrician → Swedish

- [ ] **Live in sv**
- **English page:** [electrician invoice template](https://invoicor.com/templates/electrician) (live: use it as the source)
- **Search words:** "fakturamall [electrician, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T12-sv · /templates/construction → Swedish

- [ ] **Live in sv**
- **English page:** [construction invoice template](https://invoicor.com/templates/construction) (live: use it as the source)
- **Search words:** "fakturamall [construction, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T13-sv · /templates/roofing → Swedish

- [ ] **Live in sv**
- **English page:** [roofing invoice template](https://invoicor.com/templates/roofing) (live: use it as the source)
- **Search words:** "fakturamall [roofing, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T14-sv · /templates/painting → Swedish

- [ ] **Live in sv**
- **English page:** [painting invoice template](https://invoicor.com/templates/painting) (live: use it as the source)
- **Search words:** "fakturamall [painting, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T15-sv · /templates/web-development → Swedish

- [ ] **Live in sv**
- **English page:** [web development invoice template](https://invoicor.com/templates/web-development) (live: use it as the source)
- **Search words:** "fakturamall [web development, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T16-sv · /templates/personal-training → Swedish

- [ ] **Live in sv**
- **English page:** [personal trainer invoice template](https://invoicor.com/templates/personal-training) (live: use it as the source)
- **Search words:** "fakturamall [personal trainer, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T17-sv · /templates/tutoring → Swedish

- [ ] **Live in sv**
- **English page:** [tutoring invoice template](https://invoicor.com/templates/tutoring) (live: use it as the source)
- **Search words:** "fakturamall [tutoring, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T18-sv · /templates/catering → Swedish

- [ ] **Live in sv**
- **English page:** [catering invoice template](https://invoicor.com/templates/catering) (live: use it as the source)
- **Search words:** "fakturamall [catering, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T19-sv · /templates/moving → Swedish

- [ ] **Live in sv**
- **English page:** [moving company invoice template](https://invoicor.com/templates/moving) (live: use it as the source)
- **Search words:** "fakturamall [moving company, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T20-sv · /templates/pest-control → Swedish

- [ ] **Live in sv**
- **English page:** [pest control invoice template](https://invoicor.com/templates/pest-control) (live: use it as the source)
- **Search words:** "fakturamall [pest control, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

## T21–T35 in Swedish

[ ] Trade templates 21–35 (built) · 0/15 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T21-sv · /templates/virtual-assistant → Swedish

- [ ] **Live in sv**
- **English page:** [virtual assistant invoice template](https://invoicor.com/templates/virtual-assistant) (live: use it as the source)
- **Search words:** "fakturamall [virtual assistant, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T22-sv · /templates/pet-sitting → Swedish

- [ ] **Live in sv**
- **English page:** [pet sitting invoice template](https://invoicor.com/templates/pet-sitting) (live: use it as the source)
- **Search words:** "fakturamall [pet sitting, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T23-sv · /templates/makeup-artist → Swedish

- [ ] **Live in sv**
- **English page:** [makeup artist invoice template](https://invoicor.com/templates/makeup-artist) (live: use it as the source)
- **Search words:** "fakturamall [makeup artist, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T24-sv · /templates/carpentry → Swedish

- [ ] **Live in sv**
- **English page:** [carpentry invoice template](https://invoicor.com/templates/carpentry) (live: use it as the source)
- **Search words:** "fakturamall [carpentry, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T25-sv · /templates/flooring → Swedish

- [ ] **Live in sv**
- **English page:** [flooring invoice template](https://invoicor.com/templates/flooring) (live: use it as the source)
- **Search words:** "fakturamall [flooring, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T26-sv · /templates/tile-installation → Swedish

- [ ] **Live in sv**
- **English page:** [tile installation invoice template](https://invoicor.com/templates/tile-installation) (live: use it as the source)
- **Search words:** "fakturamall [tile installation, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T27-sv · /templates/drywall → Swedish

- [ ] **Live in sv**
- **English page:** [drywall invoice template](https://invoicor.com/templates/drywall) (live: use it as the source)
- **Search words:** "fakturamall [drywall, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T28-sv · /templates/masonry → Swedish

- [ ] **Live in sv**
- **English page:** [masonry invoice template](https://invoicor.com/templates/masonry) (live: use it as the source)
- **Search words:** "fakturamall [masonry, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T29-sv · /templates/fence-installation → Swedish

- [ ] **Live in sv**
- **English page:** [fence installation invoice template](https://invoicor.com/templates/fence-installation) (live: use it as the source)
- **Search words:** "fakturamall [fence installation, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T30-sv · /templates/pool-service → Swedish

- [ ] **Live in sv**
- **English page:** [pool service invoice template](https://invoicor.com/templates/pool-service) (live: use it as the source)
- **Search words:** "fakturamall [pool service, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T31-sv · /templates/window-cleaning → Swedish

- [ ] **Live in sv**
- **English page:** [window cleaning invoice template](https://invoicor.com/templates/window-cleaning) (live: use it as the source)
- **Search words:** "fakturamall [window cleaning, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T32-sv · /templates/pressure-washing → Swedish

- [ ] **Live in sv**
- **English page:** [pressure washing invoice template](https://invoicor.com/templates/pressure-washing) (live: use it as the source)
- **Search words:** "fakturamall [pressure washing, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T33-sv · /templates/tree-service → Swedish

- [ ] **Live in sv**
- **English page:** [tree service invoice template](https://invoicor.com/templates/tree-service) (live: use it as the source)
- **Search words:** "fakturamall [tree service, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T34-sv · /templates/snow-removal → Swedish

- [ ] **Live in sv**
- **English page:** [snow removal invoice template](https://invoicor.com/templates/snow-removal) (live: use it as the source)
- **Search words:** "fakturamall [snow removal, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T35-sv · /templates/locksmith → Swedish

- [ ] **Live in sv**
- **English page:** [locksmith invoice template](https://invoicor.com/templates/locksmith) (live: use it as the source)
- **Search words:** "fakturamall [locksmith, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

## T36–T50 in Swedish

[ ] Trade templates 36–50 (built) · 0/15 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T36-sv · /templates/appliance-repair → Swedish

- [ ] **Live in sv**
- **English page:** [appliance repair invoice template](https://invoicor.com/templates/appliance-repair) (live: use it as the source)
- **Search words:** "fakturamall [appliance repair, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T37-sv · /templates/junk-removal → Swedish

- [ ] **Live in sv**
- **English page:** [junk removal invoice template](https://invoicor.com/templates/junk-removal) (live: use it as the source)
- **Search words:** "fakturamall [junk removal, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T38-sv · /templates/carpet-cleaning → Swedish

- [ ] **Live in sv**
- **English page:** [carpet cleaning invoice template](https://invoicor.com/templates/carpet-cleaning) (live: use it as the source)
- **Search words:** "fakturamall [carpet cleaning, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T39-sv · /templates/interior-design → Swedish

- [ ] **Live in sv**
- **English page:** [interior design invoice template](https://invoicor.com/templates/interior-design) (live: use it as the source)
- **Search words:** "fakturamall [interior design, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T40-sv · /templates/remodeling → Swedish

- [ ] **Live in sv**
- **English page:** [remodeling invoice template](https://invoicor.com/templates/remodeling) (live: use it as the source)
- **Search words:** "fakturamall [remodeling, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T41-sv · /templates/garage-door-repair → Swedish

- [ ] **Live in sv**
- **English page:** [garage door repair invoice template](https://invoicor.com/templates/garage-door-repair) (live: use it as the source)
- **Search words:** "fakturamall [garage door repair, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T42-sv · /templates/dj → Swedish

- [ ] **Live in sv**
- **English page:** [dj invoice template](https://invoicor.com/templates/dj) (live: use it as the source)
- **Search words:** "fakturamall [dj, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T43-sv · /templates/event-planning → Swedish

- [ ] **Live in sv**
- **English page:** [event planner invoice template](https://invoicor.com/templates/event-planning) (live: use it as the source)
- **Search words:** "fakturamall [event planner, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T44-sv · /templates/florist → Swedish

- [ ] **Live in sv**
- **English page:** [florist invoice template](https://invoicor.com/templates/florist) (live: use it as the source)
- **Search words:** "fakturamall [florist, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T45-sv · /templates/massage-therapy → Swedish

- [ ] **Live in sv**
- **English page:** [massage therapy invoice template](https://invoicor.com/templates/massage-therapy) (live: use it as the source)
- **Search words:** "fakturamall [massage therapy, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T46-sv · /templates/translation → Swedish

- [ ] **Live in sv**
- **English page:** [translation invoice template](https://invoicor.com/templates/translation) (live: use it as the source)
- **Search words:** "fakturamall [translation, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T47-sv · /templates/copywriting → Swedish

- [ ] **Live in sv**
- **English page:** [copywriter invoice template](https://invoicor.com/templates/copywriting) (live: use it as the source)
- **Search words:** "fakturamall [copywriter, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T48-sv · /templates/social-media-management → Swedish

- [ ] **Live in sv**
- **English page:** [social media manager invoice template](https://invoicor.com/templates/social-media-management) (live: use it as the source)
- **Search words:** "fakturamall [social media manager, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T49-sv · /templates/music-lessons → Swedish

- [ ] **Live in sv**
- **English page:** [music teacher invoice template](https://invoicor.com/templates/music-lessons) (live: use it as the source)
- **Search words:** "fakturamall [music teacher, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### T50-sv · /templates/bookkeeping → Swedish

- [ ] **Live in sv**
- **English page:** [bookkeeping invoice template](https://invoicor.com/templates/bookkeeping) (live: use it as the source)
- **Search words:** "fakturamall [bookkeeping, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

## T51–T60 in Swedish

[ ] 10 trades: notary, home inspection, IT services … · 0/9 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T52-sv · /templates/home-inspection → Swedish

- [ ] **Live in sv**
- **English page:** [home inspection invoice template](../templates.md#t52--templateshome-inspection) (planned: write the English page first)
- **Search words:** "fakturamall [home inspection, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Home inspectors: the base fee by square footage and age, add-ons (radon, sewer scope, mold, wood-destroying insects), re-inspection fees, payment due at or before the inspection, buyer vs agent paying, report delivery terms. Sample: a 2,400 sq ft inspection with radon and a sewer scope.
- **Don't:** Pest treatment itself (owned by /templates/pest-control): a wood-destroying insect report is mentioned, not explained.

### T53-sv · /templates/it-services → Swedish

- [ ] **Live in sv**
- **English page:** [it services invoice template](../templates.md#t53--templatesit-services) (planned: write the English page first)
- **Search words:** "fakturamall [it services, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): IT support and computer repair: hourly support (remote vs on-site, minimum charge), managed services per device or user per month, hardware and licenses resold (with markup, warranty), project work. Sample: a small-office month with 12 managed devices, an on-site visit and a laptop.
- **Don't:** Websites and web projects (owned by /templates/web-development).

### T54-sv · /templates/drone-services → Swedish

- [ ] **Live in sv**
- **English page:** [drone services invoice template](../templates.md#t54--templatesdrone-services) (planned: write the English page first)
- **Search words:** "fakturamall [drone services, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Drone pilots: flight time or per project, the FAA Part 107 certificate number on the invoice (US commercial pilots need it; verify), editing and deliverables (photos, video, maps), licensing and usage, travel, weather reschedules. Sample: a real-estate aerial package.
- **Don't:** Photo usage rights in general (owned by /templates/photography).

### T55-sv · /templates/tattoo → Swedish

- [ ] **Live in sv**
- **English page:** [tattoo invoice template](../templates.md#t55--templatestattoo) (planned: write the English page first)
- **Search words:** "fakturamall [tattoo, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Tattoo artists and studios: hourly vs a set price per piece, the booking deposit (non-refundable, applied to the final price), touch-up policy, design fees for custom work, multi-session pieces, cash tips. Sample: a two-session half sleeve with a deposit applied.
- **Don't:** Makeup and beauty services (owned by /templates/makeup-artist).

### T56-sv · /templates/personal-chef → Swedish

- [ ] **Live in sv**
- **English page:** [personal chef invoice template](../templates.md#t56--templatespersonal-chef) (planned: write the English page first)
- **Search words:** "fakturamall [personal chef, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Personal and private chefs: service fee per day or per person, groceries at cost (with receipts) on their own lines, weekly meal-prep packages, dinner parties, travel, cleanup. Sample: a weekly meal-prep week with groceries.
- **Don't:** Event catering for big groups (owned by /templates/catering).

### T57-sv · /templates/bakery → Swedish

- [ ] **Live in sv**
- **English page:** [bakery invoice template](../templates.md#t57--templatesbakery) (planned: write the English page first)
- **Search words:** "fakturamall [bakery, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Home and small bakeries: custom cake orders (tiers, servings, design), the order deposit, delivery and setup, tastings, wholesale orders to cafés on account; sales tax on food differs by state (hedge). Sample: a wedding cake order with delivery.
- **Don't:** Full event catering (owned by /templates/catering).

### T58-sv · /templates/dog-training → Swedish

- [ ] **Live in sv**
- **English page:** [dog training invoice template](../templates.md#t58--templatesdog-training) (planned: write the English page first)
- **Search words:** "fakturamall [dog training, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Dog trainers: session packages (6 sessions paid up front), private vs group classes, board-and-train programs, behavior consults, travel. Sample: a 6-session package plus an evaluation.
- **Don't:** Walks, sitting and grooming (owned by /templates/pet-sitting).

### T59-sv · /templates/musician → Swedish

- [ ] **Live in sv**
- **English page:** [musician invoice template](../templates.md#t59--templatesmusician) (planned: write the English page first)
- **Search words:** "fakturamall [musician, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Musicians and bands: performance fee per set or per event, the deposit to hold the date, travel and accommodation, backline and sound, overtime, splitting between band members (who invoices). Sample: a wedding ceremony and reception gig.
- **Don't:** DJ services (owned by /templates/dj).

### T60-sv · /templates/voice-over → Swedish

- [ ] **Live in sv**
- **English page:** [voice over invoice template](../templates.md#t60--templatesvoice-over) (planned: write the English page first)
- **Search words:** "fakturamall [voice over, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Voice actors: session fee plus usage (broadcast, online, internal; term and territory), pickups and revisions, studio fees, rush fees. Sample: an online ad with a 1-year usage line.
- **Don't:** Copywriting (owned by /templates/copywriting).

## T61–T80 in Swedish

[ ] Home and property services · 0/20 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T61-sv · /templates/chimney-sweep → Swedish

- [ ] **Live in sv**
- **English page:** [chimney sweep invoice template](../templates.md#t61--templateschimney-sweep) (planned: write the English page first)
- **Search words:** "fakturamall [chimney sweep, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Inspection levels (Level 1/2/3 per NFPA 211; check), cleaning per flue, creosote removal, cap and crown repair, a camera inspection report.

### T62-sv · /templates/gutter-cleaning → Swedish

- [ ] **Live in sv**
- **English page:** [gutter cleaning invoice template](../templates.md#t62--templatesgutter-cleaning) (planned: write the English page first)
- **Search words:** "fakturamall [gutter cleaning, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Price per linear foot and by number of stories, downspout flushing, gutter guard installs, seasonal repeat visits.

### T63-sv · /templates/septic-service → Swedish

- [ ] **Live in sv**
- **English page:** [septic pumping invoice template](../templates.md#t63--templatesseptic-service) (planned: write the English page first)
- **Search words:** "fakturamall [septic pumping, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Pumping by tank size or gallons, disposal fees, locating and digging up lids, inspections for home sales, baffle and filter repairs.

### T64-sv · /templates/irrigation → Swedish

- [ ] **Live in sv**
- **English page:** [irrigation invoice template](../templates.md#t64--templatesirrigation) (planned: write the English page first)
- **Search words:** "fakturamall [irrigation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Spring startups and fall winterization (blowouts), zones, heads and valves as parts, backflow testing (licensed in many states; hedge).

### T65-sv · /templates/deck-building → Swedish

- [ ] **Live in sv**
- **English page:** [deck building invoice template](../templates.md#t65--templatesdeck-building) (planned: write the English page first)
- **Search words:** "fakturamall [deck building, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Price per square foot, wood vs composite materials, railings and stairs, permits, the deposit and progress payments.
- **Don't:** Staining and painting a deck (owned by /templates/painting).

### T66-sv · /templates/cabinet-installation → Swedish

- [ ] **Live in sv**
- **English page:** [cabinet installation invoice template](../templates.md#t66--templatescabinet-installation) (planned: write the English page first)
- **Search words:** "fakturamall [cabinet installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per linear foot or per box, removal of old cabinets, hardware, crown molding, who supplies the cabinets.
- **Don't:** Full remodels (owned by /templates/remodeling).

### T67-sv · /templates/countertop-installation → Swedish

- [ ] **Live in sv**
- **English page:** [countertop installation invoice template](../templates.md#t67--templatescountertop-installation) (planned: write the English page first)
- **Search words:** "fakturamall [countertop installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Price per square foot of slab, templating visit, sink and cooktop cutouts, edge profiles, the deposit at templating, removal of old tops.

### T68-sv · /templates/insulation → Swedish

- [ ] **Live in sv**
- **English page:** [insulation invoice template](../templates.md#t68--templatesinsulation) (planned: write the English page first)
- **Search words:** "fakturamall [insulation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Square feet and R-value, blown-in vs batts vs spray foam, removal of old insulation, air sealing; energy rebates change (hedge, check current programs).

### T69-sv · /templates/siding → Swedish

- [ ] **Live in sv**
- **English page:** [siding installation invoice template](../templates.md#t69--templatessiding) (planned: write the English page first)
- **Search words:** "fakturamall [siding installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Price per square (100 sq ft), material (vinyl, fiber cement, wood), trim and wrap, tear-off and disposal.

### T70-sv · /templates/window-installation → Swedish

- [ ] **Live in sv**
- **English page:** [window installation invoice template](../templates.md#t70--templateswindow-installation) (planned: write the English page first)
- **Search words:** "fakturamall [window installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Price per window by size and type, removal and disposal, capping and trim, glass options, permits where needed.
- **Don't:** Window cleaning (owned by /templates/window-cleaning).

### T71-sv · /templates/asphalt-paving → Swedish

- [ ] **Live in sv**
- **English page:** [asphalt paving invoice template](../templates.md#t71--templatesasphalt-paving) (planned: write the English page first)
- **Search words:** "fakturamall [asphalt paving, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Square feet or tons, base preparation, sealcoating and crack filling, striping, the deposit for materials.

### T72-sv · /templates/excavation → Swedish

- [ ] **Live in sv**
- **English page:** [excavation invoice template](../templates.md#t72--templatesexcavation) (planned: write the English page first)
- **Search words:** "fakturamall [excavation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Machine hours by machine, operator, trucking and haul-off per load, trenching, mobilization fee.

### T73-sv · /templates/demolition → Swedish

- [ ] **Live in sv**
- **English page:** [demolition invoice template](../templates.md#t73--templatesdemolition) (planned: write the English page first)
- **Search words:** "fakturamall [demolition, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Labor, dumpster and disposal by ton, permits, hazardous material testing by licensed specialists (asbestos: hedge, never DIY advice).

### T74-sv · /templates/solar-installation → Swedish

- [ ] **Live in sv**
- **English page:** [solar installation invoice template](../templates.md#t74--templatessolar-installation) (planned: write the English page first)
- **Search words:** "fakturamall [solar installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): System size in kW, panels and inverter, racking, permits and interconnection, progress payments; incentives change (hedge, check the current rules).
- **Don't:** Electrical work in general (owned by /templates/electrician).

### T75-sv · /templates/home-staging → Swedish

- [ ] **Live in sv**
- **English page:** [home staging invoice template](../templates.md#t75--templateshome-staging) (planned: write the English page first)
- **Search words:** "fakturamall [home staging, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Consultation fee, furniture and decor rental per month, install and de-stage, extending the rental when a house doesn't sell.

### T76-sv · /templates/security-system-installation → Swedish

- [ ] **Live in sv**
- **English page:** [security system installation invoice template](../templates.md#t76--templatessecurity-system-installation) (planned: write the English page first)
- **Search words:** "fakturamall [security system installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Equipment (cameras, panels, sensors), install labor, monitoring per month (in the app: duplicate monthly), licensing in some states (hedge).

### T77-sv · /templates/home-theater-installation → Swedish

- [ ] **Live in sv**
- **English page:** [home theater installation invoice template](../templates.md#t77--templateshome-theater-installation) (planned: write the English page first)
- **Search words:** "fakturamall [home theater installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): TV mounting, in-wall wiring, speakers, calibration, equipment supplied or resold.

### T78-sv · /templates/mold-remediation → Swedish

- [ ] **Live in sv**
- **English page:** [mold remediation invoice template](../templates.md#t78--templatesmold-remediation) (planned: write the English page first)
- **Search words:** "fakturamall [mold remediation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Containment, square feet treated, HEPA cleanup, third-party testing as its own line, insurance claims (hedge).

### T79-sv · /templates/water-damage-restoration → Swedish

- [ ] **Live in sv**
- **English page:** [water damage restoration invoice template](../templates.md#t79--templateswater-damage-restoration) (planned: write the English page first)
- **Search words:** "fakturamall [water damage restoration, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Extraction, drying equipment per day (air movers, dehumidifiers), moisture logs, insurance-claim pricing (many insurers use Xactimate; mention, don't explain).

### T80-sv · /templates/air-duct-cleaning → Swedish

- [ ] **Live in sv**
- **English page:** [air duct cleaning invoice template](../templates.md#t80--templatesair-duct-cleaning) (planned: write the English page first)
- **Search words:** "fakturamall [air duct cleaning, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per system or per vent, dryer vent add-on, sanitizing, before/after photos sent with the invoice (not attached in the app).
- **Don't:** HVAC repair (owned by /templates/hvac).

## T81–T100 in Swedish

[ ] Makers, repair, transport, events · 0/20 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T81-sv · /templates/welding → Swedish

- [ ] **Live in sv**
- **English page:** [welding invoice template](../templates.md#t81--templateswelding) (planned: write the English page first)
- **Search words:** "fakturamall [welding, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly plus rig time, materials by the foot or pound, mobile trip charge, certified welds (hedge).

### T82-sv · /templates/sign-making → Swedish

- [ ] **Live in sv**
- **English page:** [sign invoice template](../templates.md#t82--templatessign-making) (planned: write the English page first)
- **Search words:** "fakturamall [sign, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Design, materials and size, installation, permits for outdoor signs, the deposit.

### T83-sv · /templates/screen-printing → Swedish

- [ ] **Live in sv**
- **English page:** [screen printing invoice template](../templates.md#t83--templatesscreen-printing) (planned: write the English page first)
- **Search words:** "fakturamall [screen printing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Price per piece by quantity break, screen setup per color, garments supplied or bought, rush fees.

### T84-sv · /templates/embroidery → Swedish

- [ ] **Live in sv**
- **English page:** [embroidery invoice template](../templates.md#t84--templatesembroidery) (planned: write the English page first)
- **Search words:** "fakturamall [embroidery, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Stitch count, the digitizing fee, per piece by quantity, customer-supplied garments.

### T85-sv · /templates/alterations → Swedish

- [ ] **Live in sv**
- **English page:** [alterations invoice template](../templates.md#t85--templatesalterations) (planned: write the English page first)
- **Search words:** "fakturamall [alterations, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per garment and alteration (hem, take in, zipper), rush, wedding dress fittings in stages.

### T86-sv · /templates/jewelry-repair → Swedish

- [ ] **Live in sv**
- **English page:** [jewelry repair invoice template](../templates.md#t86--templatesjewelry-repair) (planned: write the English page first)
- **Search words:** "fakturamall [jewelry repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Sizing, stone setting, soldering, cleaning, the item's description and insured value on the invoice (hedge appraisals).

### T87-sv · /templates/bike-repair → Swedish

- [ ] **Live in sv**
- **English page:** [bike repair invoice template](../templates.md#t87--templatesbike-repair) (planned: write the English page first)
- **Search words:** "fakturamall [bike repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Tune-up levels, parts and labor, e-bike work, pickup and delivery.

### T88-sv · /templates/small-engine-repair → Swedish

- [ ] **Live in sv**
- **English page:** [small engine repair invoice template](../templates.md#t88--templatessmall-engine-repair) (planned: write the English page first)
- **Search words:** "fakturamall [small engine repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Diagnostic fee, parts, labor, seasonal tune-ups, pickup fees.

### T89-sv · /templates/boat-repair → Swedish

- [ ] **Live in sv**
- **English page:** [boat repair invoice template](../templates.md#t89--templatesboat-repair) (planned: write the English page first)
- **Search words:** "fakturamall [boat repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Haul-out and launch, engine hours, bottom paint, winterization, storage per month.

### T90-sv · /templates/rv-repair → Swedish

- [ ] **Live in sv**
- **English page:** [rv repair invoice template](../templates.md#t90--templatesrv-repair) (planned: write the English page first)
- **Search words:** "fakturamall [rv repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Mobile trip charge, roof sealing, appliances, parts with lead times.

### T91-sv · /templates/towing → Swedish

- [ ] **Live in sv**
- **English page:** [towing invoice template](../templates.md#t91--templatestowing) (planned: write the English page first)
- **Search words:** "fakturamall [towing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hook-up fee, per mile, storage per day, after-hours and winching; rates are capped in some cities and states (hedge).

### T92-sv · /templates/courier → Swedish

- [ ] **Live in sv**
- **English page:** [courier invoice template](../templates.md#t92--templatescourier) (planned: write the English page first)
- **Search words:** "fakturamall [courier, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per delivery or zone, mileage, waiting time, rush and after-hours, monthly statements for business clients.

### T93-sv · /templates/trucking → Swedish

- [ ] **Live in sv**
- **English page:** [trucking invoice template](../templates.md#t93--templatestrucking) (planned: write the English page first)
- **Search words:** "fakturamall [trucking, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Rate confirmation and load number, detention, lumper fees, fuel surcharge, the bill of lading number; factoring companies (mention).

### T94-sv · /templates/limousine-service → Swedish

- [ ] **Live in sv**
- **English page:** [limousine service invoice template](../templates.md#t94--templateslimousine-service) (planned: write the English page first)
- **Search words:** "fakturamall [limousine service, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly with a minimum, gratuity, tolls and parking, waiting time, airport transfers.

### T95-sv · /templates/photo-booth-rental → Swedish

- [ ] **Live in sv**
- **English page:** [photo booth rental invoice template](../templates.md#t95--templatesphoto-booth-rental) (planned: write the English page first)
- **Search words:** "fakturamall [photo booth rental, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hours, prints, props and backdrops, setup and travel, the date-hold deposit.

### T96-sv · /templates/party-rentals → Swedish

- [ ] **Live in sv**
- **English page:** [party rental invoice template](../templates.md#t96--templatesparty-rentals) (planned: write the English page first)
- **Search words:** "fakturamall [party rental, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Items per day (tents, tables, chairs), delivery and setup, a damage deposit, late returns.

### T97-sv · /templates/wedding-officiant → Swedish

- [ ] **Live in sv**
- **English page:** [wedding officiant invoice template](../templates.md#t97--templateswedding-officiant) (planned: write the English page first)
- **Search words:** "fakturamall [wedding officiant, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Ceremony fee, rehearsal, travel, custom ceremony writing, filing the license (rules vary).

### T98-sv · /templates/illustration → Swedish

- [ ] **Live in sv**
- **English page:** [illustration invoice template](../templates.md#t98--templatesillustration) (planned: write the English page first)
- **Search words:** "fakturamall [illustration, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per piece, the usage license, revision rounds, the kill fee.
- **Don't:** Graphic design (owned by /templates/freelance-design).

### T99-sv · /templates/video-editing → Swedish

- [ ] **Live in sv**
- **English page:** [video editing invoice template](../templates.md#t99--templatesvideo-editing) (planned: write the English page first)
- **Search words:** "fakturamall [video editing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per hour or per finished minute, revision rounds, footage storage, rush delivery.
- **Don't:** Filming and production (owned by /templates/videography).

### T100-sv · /templates/podcast-production → Swedish

- [ ] **Live in sv**
- **English page:** [podcast production invoice template](../templates.md#t100--templatespodcast-production) (planned: write the English page first)
- **Search words:** "fakturamall [podcast production, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per episode, editing and mixing, show notes, hosting passed through.

## T101–T120 in Swedish

[ ] Professional, wellness, care · 0/19 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T101-sv · /templates/seo-services → Swedish

- [ ] **Live in sv**
- **English page:** [seo invoice template](../templates.md#t101--templatesseo-services) (planned: write the English page first)
- **Search words:** "fakturamall [seo, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly retainer, audits, content and links as lines; never promise rankings.

### T102-sv · /templates/marketing-agency → Swedish

- [ ] **Live in sv**
- **English page:** [marketing agency invoice template](../templates.md#t102--templatesmarketing-agency) (planned: write the English page first)
- **Search words:** "fakturamall [marketing agency, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Retainer plus campaigns, ad spend passed through, creative production.
- **Don't:** Social media management (owned by /templates/social-media-management).

### T103-sv · /templates/ux-design → Swedish

- [ ] **Live in sv**
- **English page:** [ux design invoice template](../templates.md#t103--templatesux-design) (planned: write the English page first)
- **Search words:** "fakturamall [ux design, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Research, wireframes, prototypes and testing by phase or sprint.
- **Don't:** Graphic design (owned by /templates/freelance-design).

### T104-sv · /templates/app-development → Swedish

- [ ] **Live in sv**
- **English page:** [app development invoice template](../templates.md#t104--templatesapp-development) (planned: write the English page first)
- **Search words:** "fakturamall [app development, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Milestones, app store fees passed through, maintenance after launch.
- **Don't:** Websites (owned by /templates/web-development).

### T105-sv · /templates/data-analysis → Swedish

- [ ] **Live in sv**
- **English page:** [data analysis invoice template](../templates.md#t105--templatesdata-analysis) (planned: write the English page first)
- **Search words:** "fakturamall [data analysis, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly or per project, dashboards and reports as deliverables, data access terms.

### T107-sv · /templates/attorney → Swedish

- [ ] **Live in sv**
- **English page:** [attorney invoice template](../templates.md#t107--templatesattorney) (planned: write the English page first)
- **Search words:** "fakturamall [attorney, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly in tenths of an hour, costs advanced, flat-fee matters; client trust (IOLTA) accounting is not something Invoicor does: say so; ethics rules vary by state.

### T108-sv · /templates/property-management → Swedish

- [ ] **Live in sv**
- **English page:** [property management invoice template](../templates.md#t108--templatesproperty-management) (planned: write the English page first)
- **Search words:** "fakturamall [property management, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Management fee as a % of rent, leasing fees, maintenance passed through, owner statements.

### T109-sv · /templates/rent → Swedish

- [ ] **Live in sv**
- **English page:** [rent invoice template](../templates.md#t109--templatesrent) (planned: write the English page first)
- **Search words:** "fakturamall [rent, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly rent, utilities, late fees (state caps; hedge), deposits; in the app, duplicate each month.
- **Don't:** Property management fees (owned by /templates/property-management).

### T110-sv · /templates/security-guard → Swedish

- [ ] **Live in sv**
- **English page:** [security guard invoice template](../templates.md#t110--templatessecurity-guard) (planned: write the English page first)
- **Search words:** "fakturamall [security guard, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly per guard, armed or unarmed, overtime and holidays, event security.

### T111-sv · /templates/therapy → Swedish

- [ ] **Live in sv**
- **English page:** [therapist invoice template](../templates.md#t111--templatestherapy) (planned: write the English page first)
- **Search words:** "fakturamall [therapist, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Session fees, a superbill for out-of-network clients (diagnosis and procedure codes; hedge), minimal health details; never claim HIPAA compliance.

### T112-sv · /templates/nutrition → Swedish

- [ ] **Live in sv**
- **English page:** [nutritionist invoice template](../templates.md#t112--templatesnutrition) (planned: write the English page first)
- **Search words:** "fakturamall [nutritionist, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Consults, packages, meal plans, follow-ups.

### T113-sv · /templates/yoga → Swedish

- [ ] **Live in sv**
- **English page:** [yoga instructor invoice template](../templates.md#t113--templatesyoga) (planned: write the English page first)
- **Search words:** "fakturamall [yoga instructor, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Classes taught for studios, private sessions, workshops and retreats.

### T114-sv · /templates/dance-lessons → Swedish

- [ ] **Live in sv**
- **English page:** [dance teacher invoice template](../templates.md#t114--templatesdance-lessons) (planned: write the English page first)
- **Search words:** "fakturamall [dance teacher, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly tuition, private lessons, costume and recital fees.

### T115-sv · /templates/swim-lessons → Swedish

- [ ] **Live in sv**
- **English page:** [swim lessons invoice template](../templates.md#t115--templatesswim-lessons) (planned: write the English page first)
- **Search words:** "fakturamall [swim lessons, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per lesson and packages, pool rental, group vs private.

### T116-sv · /templates/sports-coaching → Swedish

- [ ] **Live in sv**
- **English page:** [sports coach invoice template](../templates.md#t116--templatessports-coaching) (planned: write the English page first)
- **Search words:** "fakturamall [sports coach, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private sessions, camps and clinics, team fees.
- **Don't:** Personal training (owned by /templates/personal-training).

### T117-sv · /templates/babysitting → Swedish

- [ ] **Live in sv**
- **English page:** [babysitting invoice template](../templates.md#t117--templatesbabysitting) (planned: write the English page first)
- **Search words:** "fakturamall [babysitting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly, extra children, late nights; a nanny working regularly for one family may be a household employee (hedge: check the tax rules).

### T118-sv · /templates/caregiving → Swedish

- [ ] **Live in sv**
- **English page:** [caregiver invoice template](../templates.md#t118--templatescaregiving) (planned: write the English page first)
- **Search words:** "fakturamall [caregiver, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Non-medical home care by the hour, overnights, mileage, errands; no medical claims.

### T119-sv · /templates/doula → Swedish

- [ ] **Live in sv**
- **English page:** [doula invoice template](../templates.md#t119--templatesdoula) (planned: write the English page first)
- **Search words:** "fakturamall [doula, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The birth package, the deposit, on-call period, postpartum hours.

### T120-sv · /templates/barber → Swedish

- [ ] **Live in sv**
- **English page:** [barber invoice template](../templates.md#t120--templatesbarber) (planned: write the English page first)
- **Search words:** "fakturamall [barber, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Chair rental vs commission, house calls and events, products.
- **Don't:** Hair and makeup for events (owned by /templates/makeup-artist).

## T121–T140 in Swedish

[ ] Beauty, creative, specialist · 0/20 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T121-sv · /templates/nail-technician → Swedish

- [ ] **Live in sv**
- **English page:** [nail technician invoice template](../templates.md#t121--templatesnail-technician) (planned: write the English page first)
- **Search words:** "fakturamall [nail technician, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Services and add-ons, booth rental, mobile appointments.

### T122-sv · /templates/esthetician → Swedish

- [ ] **Live in sv**
- **English page:** [esthetician invoice template](../templates.md#t122--templatesesthetician) (planned: write the English page first)
- **Search words:** "fakturamall [esthetician, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Facials and treatments, packages, products sold.

### T123-sv · /templates/lash-extensions → Swedish

- [ ] **Live in sv**
- **English page:** [lash tech invoice template](../templates.md#t123--templateslash-extensions) (planned: write the English page first)
- **Search words:** "fakturamall [lash tech, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Full sets and fills, removal, deposits for bookings.

### T124-sv · /templates/art-commission → Swedish

- [ ] **Live in sv**
- **English page:** [art commission invoice template](../templates.md#t124--templatesart-commission) (planned: write the English page first)
- **Search words:** "fakturamall [art commission, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The commission price, deposit, sizes and materials, shipping, reproduction rights.
- **Don't:** Illustration for clients (owned by /templates/illustration).

### T125-sv · /templates/music-production → Swedish

- [ ] **Live in sv**
- **English page:** [music producer invoice template](../templates.md#t125--templatesmusic-production) (planned: write the English page first)
- **Search words:** "fakturamall [music producer, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per track, mixing and mastering, beat leases vs exclusive rights, studio time.

### T126-sv · /templates/recording-studio → Swedish

- [ ] **Live in sv**
- **English page:** [recording studio invoice template](../templates.md#t126--templatesrecording-studio) (planned: write the English page first)
- **Search words:** "fakturamall [recording studio, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly or day rates, engineer, mixing, file delivery.

### T127-sv · /templates/sound-engineering → Swedish

- [ ] **Live in sv**
- **English page:** [sound engineer invoice template](../templates.md#t127--templatessound-engineering) (planned: write the English page first)
- **Search words:** "fakturamall [sound engineer, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Day rates for events, equipment, load-in and overtime.

### T128-sv · /templates/content-creator → Swedish

- [ ] **Live in sv**
- **English page:** [content creator invoice template](../templates.md#t128--templatescontent-creator) (planned: write the English page first)
- **Search words:** "fakturamall [content creator, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deliverables per post or video, usage rights and term, exclusivity, whitelisting.

### T129-sv · /templates/proofreading → Swedish

- [ ] **Live in sv**
- **English page:** [proofreading invoice template](../templates.md#t129--templatesproofreading) (planned: write the English page first)
- **Search words:** "fakturamall [proofreading, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per word or per page, levels of editing, turnaround.
- **Don't:** Copywriting (owned by /templates/copywriting).

### T130-sv · /templates/driving-instructor → Swedish

- [ ] **Live in sv**
- **English page:** [driving instructor invoice template](../templates.md#t130--templatesdriving-instructor) (planned: write the English page first)
- **Search words:** "fakturamall [driving instructor, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per lesson and packages, test day fees, car use.

### T131-sv · /templates/farm → Swedish

- [ ] **Live in sv**
- **English page:** [farm invoice template](../templates.md#t131--templatesfarm) (planned: write the English page first)
- **Search words:** "fakturamall [farm, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Wholesale orders by unit (case, pound), delivery, standing weekly orders; food sales tax rules vary.

### T132-sv · /templates/print-shop → Swedish

- [ ] **Live in sv**
- **English page:** [print shop invoice template](../templates.md#t132--templatesprint-shop) (planned: write the English page first)
- **Search words:** "fakturamall [print shop, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Quantities and paper, design and proofs, finishing, delivery.

### T133-sv · /templates/3d-printing → Swedish

- [ ] **Live in sv**
- **English page:** [3d printing invoice template](../templates.md#t133--templates3d-printing) (planned: write the English page first)
- **Search words:** "fakturamall [3d printing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per part by material and hours, design or modeling, setup.

### T134-sv · /templates/laser-engraving → Swedish

- [ ] **Live in sv**
- **English page:** [laser engraving invoice template](../templates.md#t134--templateslaser-engraving) (planned: write the English page first)
- **Search words:** "fakturamall [laser engraving, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per item, setup and artwork, materials supplied or not.

### T135-sv · /templates/custom-furniture → Swedish

- [ ] **Live in sv**
- **English page:** [custom furniture invoice template](../templates.md#t135--templatescustom-furniture) (planned: write the English page first)
- **Search words:** "fakturamall [custom furniture, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The design, the deposit, materials, finishing, delivery.
- **Don't:** Carpentry on site (owned by /templates/carpentry).

### T136-sv · /templates/glazier → Swedish

- [ ] **Live in sv**
- **English page:** [glass repair invoice template](../templates.md#t136--templatesglazier) (planned: write the English page first)
- **Search words:** "fakturamall [glass repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Glass by size and type, labor, board-ups and emergencies.
- **Don't:** Window installation (owned by /templates/window-installation).

### T137-sv · /templates/wildlife-removal → Swedish

- [ ] **Live in sv**
- **English page:** [wildlife removal invoice template](../templates.md#t137--templateswildlife-removal) (planned: write the English page first)
- **Search words:** "fakturamall [wildlife removal, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Inspection, trapping per visit, exclusion work, cleanup; local wildlife rules (hedge).
- **Don't:** Insects and rodents (owned by /templates/pest-control).

### T138-sv · /templates/aquarium-maintenance → Swedish

- [ ] **Live in sv**
- **English page:** [aquarium maintenance invoice template](../templates.md#t138--templatesaquarium-maintenance) (planned: write the English page first)
- **Search words:** "fakturamall [aquarium maintenance, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly service visits, livestock and equipment, setups.

### T139-sv · /templates/land-surveying → Swedish

- [ ] **Live in sv**
- **English page:** [land surveying invoice template](../templates.md#t139--templatesland-surveying) (planned: write the English page first)
- **Search words:** "fakturamall [land surveying, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Boundary, topographic and ALTA surveys, field crew hours, recording fees.

### T140-sv · /templates/professional-organizing → Swedish

- [ ] **Live in sv**
- **English page:** [professional organizer invoice template](../templates.md#t140--templatesprofessional-organizing) (planned: write the English page first)
- **Search words:** "fakturamall [professional organizer, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly or per project, products bought, donation runs.

## T141–T156 in Swedish

[ ] Trades with demand of their own: auto repair, auto body, architect … · 0/16 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T141-sv · /templates/auto-repair → Swedish

- [ ] **Live in sv**
- **English page:** [auto repair invoice template](../templates.md#t141--templatesauto-repair) (planned: write the English page first)
- **Search words:** "fakturamall [auto repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Shop or mobile mechanic: parts with part numbers (new, used, OEM or aftermarket), labor by book hours vs actual hours, diagnostic fee, shop supplies fee, the vehicle (year, make, model, VIN, odometer in and out), parts and labor warranty, old parts returned; some states require itemized repair invoices (hedge; e.g. California BAR: cite and date). When it goes live, move the mechanic content off /templates/auto-detailing.
- **Don't:** Detailing (/templates/auto-detailing); body and paint (/templates/auto-body).

### T142-sv · /templates/auto-body → Swedish

- [ ] **Live in sv**
- **English page:** [auto body invoice template](../templates.md#t142--templatesauto-body) (planned: write the English page first)
- **Search words:** "fakturamall [auto body, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Collision and paint: the insurance claim number and adjuster, the estimate vs supplements, the deductible the customer pays vs the insurer's share, paint and materials per hour, frame time, sublet work (glass, alignment), refinish hours. Sample: an insured repair with a $500 deductible.
- **Don't:** Mechanical repair (/templates/auto-repair); detailing (/templates/auto-detailing).

### T143-sv · /templates/dog-grooming → Swedish

- [ ] **Live in sv**
- **English page:** [dog grooming invoice template](../templates.md#t143--templatesdog-grooming) (planned: write the English page first)
- **Search words:** "fakturamall [dog grooming, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per dog by size and coat (bath, full groom, hand strip), add-ons (nails, teeth, de-shedding, flea bath), matting and behaviour surcharges, the mobile van fee, no-show policy, a multi-dog discount. Sample: two dogs.
- **Don't:** Pet sitting and walking (/templates/pet-sitting); training (/templates/dog-training).

### T144-sv · /templates/hair-salon → Swedish

- [ ] **Live in sv**
- **English page:** [hair salon invoice template](../templates.md#t144--templateshair-salon) (planned: write the English page first)
- **Search words:** "fakturamall [hair salon, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): When a salon or stylist invoices instead of ringing up at the till: bridal and event hair on location, B2B work (shoots, theatre), weekly booth or chair rent the owner invoices to renters, product sales taxed apart. Say plainly that everyday salon sales are till receipts. Sample: 4 weeks of booth rent + a wedding party.
- **Don't:** Makeup (/templates/makeup-artist); barbering (/templates/barber).

### T145-sv · /templates/architect → Swedish

- [ ] **Live in sv**
- **English page:** [architect invoice template](../templates.md#t145--templatesarchitect) (planned: write the English page first)
- **Search words:** "fakturamall [architect, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Fees by phase (schematic design, design development, construction documents, bidding, construction administration) as a % of a fixed fee or of construction cost, or hourly; reimbursables at cost or with a multiplier; additional services by agreement. Sample: phase 2 at 40% of a $30,000 fee. Fee rules vary by country (Germany's HOAI: the local version; hedge).
- **Don't:** Interior design (/templates/interior-design); construction billing (/templates/construction-progress-invoice).

### T146-sv · /templates/real-estate → Swedish

- [ ] **Live in sv**
- **English page:** [real estate invoice template](../templates.md#t146--templatesreal-estate) (planned: write the English page first)
- **Search words:** "fakturamall [real estate, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Agents and brokers invoicing a brokerage, a seller or a developer: the property, sale price, commission rate and split (agent and brokerage, co-op), referral fees, closing date; or flat-fee services. Who pays and how much is negotiated and varies by state and country (US: buyer-agent pay since the 2024 NAR settlement: cite and date). Sample: a 2.5% side on a $400,000 sale, a 70/30 split.
- **Don't:** Property management (/templates/property-management); rent (/templates/rent); the math (the commission calculator).

### T147-sv · /templates/equipment-rental → Swedish

- [ ] **Live in sv**
- **English page:** [equipment rental invoice template](../templates.md#t147--templatesequipment-rental) (planned: write the English page first)
- **Search words:** "fakturamall [equipment rental, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Construction and tool rental: day, week and 4-week rates (and when the cheaper rate applies), delivery and pickup, fuel and cleaning charges, damage waiver, hour meter in and out, the deposit, late returns. Sample: a mini excavator for 9 days (a week + 2 days).
- **Don't:** Party and event rentals (/templates/party-rentals); photo booths (/templates/photo-booth-rental).

### T148-sv · /templates/private-investigator → Swedish

- [ ] **Live in sv**
- **English page:** [private investigator invoice template](../templates.md#t148--templatesprivate-investigator) (planned: write the English page first)
- **Search words:** "fakturamall [private investigator, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A retainer, then hourly: surveillance hours, report writing, mileage, database search fees, court time; the licence number many US states require on documents (hedge per state); describe the work without exposing the subject. Sample: 12 h surveillance, 2 h report, 140 miles, database fees.
- **Don't:** Security guards (/templates/security-guard).

### T149-sv · /templates/phone-repair → Swedish

- [ ] **Live in sv**
- **English page:** [phone repair invoice template](../templates.md#t149--templatesphone-repair) (planned: write the English page first)
- **Search words:** "fakturamall [phone repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per repair: the device (model, IMEI or serial), the fault, parts (OEM or aftermarket screen, battery), labor or a flat price, a diagnostic fee if not repaired, the part's warranty, data-loss and water-damage disclaimers. Sample: a screen + battery.
- **Don't:** IT support for businesses (/templates/it-services); appliance repair (/templates/appliance-repair).

### T150-sv · /templates/furniture-assembly → Swedish

- [ ] **Live in sv**
- **English page:** [furniture assembly invoice template](../templates.md#t150--templatesfurniture-assembly) (planned: write the English page first)
- **Search words:** "fakturamall [furniture assembly, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per item (bed, wardrobe, desk: the box's piece count as a guide) or hourly with a minimum, wall anchoring, packaging removal, travel; client-supplied items and missing parts in the terms. Sample: 4 items for a move-in.
- **Don't:** Handyman work in general (/templates/handyman); custom furniture making (/templates/custom-furniture).

### T151-sv · /templates/upholstery → Swedish

- [ ] **Live in sv**
- **English page:** [upholstery invoice template](../templates.md#t151--templatesupholstery) (planned: write the English page first)
- **Search words:** "fakturamall [upholstery, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Labor per piece by type (dining seat, armchair, sofa), fabric by the yard or metre (supplied, or the customer's own with a COM fee), foam and webbing, pickup and delivery, a deposit for the fabric. Sample: a sofa + 6 dining seats.
- **Don't:** Furniture making (/templates/custom-furniture).

### T152-sv · /templates/life-coaching → Swedish

- [ ] **Live in sv**
- **English page:** [life coach invoice template](../templates.md#t152--templateslife-coaching) (planned: write the English page first)
- **Search words:** "fakturamall [life coach, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Packages (6 or 12 sessions), single sessions, programmes paid in instalments, cancellation and no-show rules, VAT on coaching (hedge). Not therapy: no health claims. Sample: a 6-session package in 2 instalments.
- **Don't:** Business consulting (/templates/consulting); therapy (/templates/therapy); sports coaching (/templates/sports-coaching).

### T153-sv · /templates/bartending → Swedish

- [ ] **Live in sv**
- **English page:** [bartending invoice template](../templates.md#t153--templatesbartending) (planned: write the English page first)
- **Search words:** "fakturamall [bartending, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Event bartending: hours × bartenders with a minimum, setup and breakdown, a bar package per guest when the bartender supplies the drinks (licensing rules vary: hedge), mixers and ice, glassware rental, travel, a gratuity line. Sample: a 120-guest wedding, 2 bartenders, 5 hours.
- **Don't:** Catering food service (/templates/catering).

### T154-sv · /templates/plastering → Swedish

- [ ] **Live in sv**
- **English page:** [plastering invoice template](../templates.md#t154--templatesplastering) (planned: write the English page first)
- **Search words:** "fakturamall [plastering, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Skim coat vs full replaster by area, patching per item, ceilings and coving, drying time between coats, materials (bags, beads), access and scaffolding; UK and EU plastering, US stucco and veneer plaster. Sample: replaster a room and skim the ceiling.
- **Don't:** Drywall hanging and taping (/templates/drywall).

### T155-sv · /templates/concrete → Swedish

- [ ] **Live in sv**
- **English page:** [concrete invoice template](../templates.md#t155--templatesconcrete) (planned: write the English page first)
- **Search words:** "fakturamall [concrete, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Flatwork: slab or driveway by square foot and thickness, cubic yards poured, rebar or mesh, forms, finish (broom, stamped, exposed aggregate), removing the old slab, pump-truck and short-load fees, curing time. Sample: a 600 sq ft driveway.
- **Don't:** Brick, block and stone (/templates/masonry); the volume math (/tools/concrete-cost-calculator).

### T156-sv · /templates/event-venue → Swedish

- [ ] **Live in sv**
- **English page:** [event venue invoice template](../templates.md#t156--templatesevent-venue) (planned: write the English page first)
- **Search words:** "fakturamall [event venue, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Venue hire: date and hours (setup and breakdown time), the fee by day or hour, a food and beverage minimum, service charge vs gratuity, security and cleaning fees, the damage deposit, the payment schedule (deposit at booking, balance before the event). Sample: a Saturday wedding.
- **Don't:** Event planning (/templates/event-planning); party rentals (/templates/party-rentals).

## T157–T174 in Swedish

[ ] Home systems and specialist contractors · 0/16 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T157-sv · /templates/well-drilling → Swedish

- [ ] **Live in sv**
- **English page:** [well drilling invoice template](../templates.md#t157--templateswell-drilling) (planned: write the English page first)
- **Search words:** "fakturamall [well drilling, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Drilling per foot (rate by rock or soil), casing per foot, the pump and pressure tank, the permit and water test, a dry-hole clause; deposits are common (link D1). Sample: a 220 ft residential well.
- **Don't:** Plumbing repairs (/templates/plumbing).

### T158-sv · /templates/drain-cleaning → Swedish

- [ ] **Live in sv**
- **English page:** [drain cleaning invoice template](../templates.md#t158--templatesdrain-cleaning) (planned: write the English page first)
- **Search words:** "fakturamall [drain cleaning, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per drain or per hour, snaking vs hydro jetting, camera inspection with the video as a deliverable, cleanout access, after-hours rates, the no-guarantee note on root intrusion. Sample: main line jetting + camera.
- **Don't:** General plumbing (/templates/plumbing); septic pumping (/templates/septic-service).

### T159-sv · /templates/gas-engineer → Swedish

- [ ] **Live in sv**
- **English page:** [gas engineer invoice template](../templates.md#t159--templatesgas-engineer) (planned: write the English page first)
- **Search words:** "fakturamall [gas engineer, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): UK and EU heating engineers: boiler service and repair, the gas safety record (CP12) for landlords, parts, call-out fee; the registration number on the invoice (Gas Safe in the UK: cite and date). Sample: annual service + landlord certificate.
- **Don't:** HVAC in the US sense (/templates/hvac); plumbing (/templates/plumbing).

### T160-sv · /templates/foundation-repair → Swedish

- [ ] **Live in sv**
- **English page:** [foundation repair invoice template](../templates.md#t160--templatesfoundation-repair) (planned: write the English page first)
- **Search words:** "fakturamall [foundation repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Piers per unit (push, helical), crack repair per linear foot, engineer's report, permits, the transferable warranty, progress or deposit billing on big jobs (link B items). Sample: 8 helical piers.
- **Don't:** Waterproofing (/templates/basement-waterproofing); concrete flatwork (/templates/concrete).

### T161-sv · /templates/basement-waterproofing → Swedish

- [ ] **Live in sv**
- **English page:** [basement waterproofing invoice template](../templates.md#t161--templatesbasement-waterproofing) (planned: write the English page first)
- **Search words:** "fakturamall [basement waterproofing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Interior drain tile per linear foot, sump pump and battery backup, wall membrane, exterior excavation if any, crawl space encapsulation, warranty terms. Sample: 60 ft drain tile + sump.
- **Don't:** Foundation repair (/templates/foundation-repair); water damage cleanup (/templates/water-damage-restoration).

### T162-sv · /templates/radon-mitigation → Swedish

- [ ] **Live in sv**
- **English page:** [radon mitigation invoice template](../templates.md#t162--templatesradon-mitigation) (planned: write the English page first)
- **Search words:** "fakturamall [radon mitigation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Testing (short-term kit vs continuous monitor), the sub-slab system (fan, piping, sealing), post-mitigation test, the licence or certification many states and countries require (hedge; e.g. US EPA guidance, Sweden's radon rules: cite and date). Sample: test + system + retest.
- **Don't:** Home inspection (/templates/home-inspection).

### T163-sv · /templates/asbestos-removal → Swedish

- [ ] **Live in sv**
- **English page:** [asbestos removal invoice template](../templates.md#t163--templatesasbestos-removal) (planned: write the English page first)
- **Search words:** "fakturamall [asbestos removal, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Survey and sampling (lab fees per sample), containment, removal per square foot, licensed disposal with the waste consignment note, air clearance testing; licensing and notification rules (hedge, cite the regulator). Sample: survey + removal of a ceiling.
- **Don't:** Demolition (/templates/demolition); mold (/templates/mold-remediation).

### T164-sv · /templates/wallpaper-installation → Swedish

- [ ] **Live in sv**
- **English page:** [wallpaper installation invoice template](../templates.md#t164--templateswallpaper-installation) (planned: write the English page first)
- **Search words:** "fakturamall [wallpaper installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per roll or per wall, removal of old paper, wall prep and primer, pattern matching (more waste on large repeats), murals as a fixed price, client-supplied paper. Sample: a feature wall + a bathroom.
- **Don't:** Painting (/templates/painting).

### T165-sv · /templates/epoxy-flooring → Swedish

- [ ] **Live in sv**
- **English page:** [epoxy flooring invoice template](../templates.md#t165--templatesepoxy-flooring) (planned: write the English page first)
- **Search words:** "fakturamall [epoxy flooring, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per square foot by system (single coat, flake, metallic), grinding and crack repair, moisture testing, cure time before use, the coating warranty. Sample: a 2-car garage with flake.
- **Don't:** Flooring installation (/templates/flooring); concrete pouring (/templates/concrete).

### T166-sv · /templates/window-treatments → Swedish

- [ ] **Live in sv**
- **English page:** [window treatment invoice template](../templates.md#t166--templateswindow-treatments) (planned: write the English page first)
- **Search words:** "fakturamall [window treatment, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per window: measuring, the product (blinds, shades, shutters, curtains with rods), installation per unit, motorisation, the deposit when ordering custom products (link D1). Sample: 9 windows, 2 motorised.
- **Don't:** Window installation (/templates/window-installation); interior design (/templates/interior-design).

### T168-sv · /templates/fire-protection → Swedish

- [ ] **Live in sv**
- **English page:** [fire protection invoice template](../templates.md#t168--templatesfire-protection) (planned: write the English page first)
- **Search words:** "fakturamall [fire protection, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Inspections by schedule (sprinklers, alarms, extinguishers, hoods), deficiencies found and quoted separately, the inspection report as a deliverable, the licence number, code references (hedge, NFPA or the local code: cite). Sample: annual sprinkler + alarm inspection.
- **Don't:** Security systems (/templates/security-system-installation); hood cleaning (/templates/hood-cleaning).

### T169-sv · /templates/low-voltage-cabling → Swedish

- [ ] **Live in sv**
- **English page:** [low voltage cabling invoice template](../templates.md#t169--templateslow-voltage-cabling) (planned: write the English page first)
- **Search words:** "fakturamall [low voltage cabling, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per drop (Cat6, fibre), patch panel and rack work, testing and certification report, labelling, after-hours work in offices. Sample: 24 drops + a rack.
- **Don't:** IT support (/templates/it-services); electrical work (/templates/electrician).

### T170-sv · /templates/gutter-installation → Swedish

- [ ] **Live in sv**
- **English page:** [gutter installation invoice template](../templates.md#t170--templatesgutter-installation) (planned: write the English page first)
- **Search words:** "fakturamall [gutter installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per linear foot by material (aluminium, copper, steel), downspouts per unit, guards, removal of old gutters, fascia repair as found. Sample: 140 ft seamless + 4 downspouts.
- **Don't:** Gutter cleaning (/templates/gutter-cleaning); roofing (/templates/roofing).

### T171-sv · /templates/fireplace-installation → Swedish

- [ ] **Live in sv**
- **English page:** [fireplace installation invoice template](../templates.md#t171--templatesfireplace-installation) (planned: write the English page first)
- **Search words:** "fakturamall [fireplace installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The unit, the flue liner, hearth and surround, gas line or electrical by a licensed trade, the permit and inspection, commissioning. Sample: a wood stove with liner.
- **Don't:** Chimney cleaning (/templates/chimney-sweep); masonry (/templates/masonry).

### T172-sv · /templates/home-energy-audit → Swedish

- [ ] **Live in sv**
- **English page:** [home energy audit invoice template](../templates.md#t172--templateshome-energy-audit) (planned: write the English page first)
- **Search words:** "fakturamall [home energy audit, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The audit fee by home size, blower door and thermal imaging, the report with recommendations, rebate paperwork (programmes vary: hedge, cite); in the EU the energy certificate (Energieausweis, energielabel) as a local angle. Sample: a full audit + report.
- **Don't:** Insulation work (/templates/insulation); home inspection (/templates/home-inspection).

### T174-sv · /templates/parking-lot-striping → Swedish

- [ ] **Live in sv**
- **English page:** [parking lot striping invoice template](../templates.md#t174--templatesparking-lot-striping) (planned: write the English page first)
- **Search words:** "fakturamall [parking lot striping, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per stall or per linear foot, accessible stalls and signage (ADA in the US: hedge), stencils, arrows, curb painting, night work. Sample: a 60-stall lot restripe.
- **Don't:** Sealcoating (/templates/sealcoating); paving (/templates/asphalt-paving).

## T175–T192 in Swedish

[ ] Property, waste and household services · 0/14 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T175-sv · /templates/janitorial → Swedish

- [ ] **Live in sv**
- **English page:** [janitorial invoice template](../templates.md#t175--templatesjanitorial) (planned: write the English page first)
- **Search words:** "fakturamall [janitorial, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Contract cleaning for businesses: the monthly contract price by square footage and frequency, supplies included or billed, extra services (carpets, windows, floor stripping) as lines, the service period. Repeat monthly by duplicating the invoice. Sample: an office, 5 nights a week.
- **Don't:** House cleaning (/templates/cleaning-services); the monthly invoice in general (/templates/monthly-invoice).

### T176-sv · /templates/hood-cleaning → Swedish

- [ ] **Live in sv**
- **English page:** [hood cleaning invoice template](../templates.md#t176--templateshood-cleaning) (planned: write the English page first)
- **Search words:** "fakturamall [hood cleaning, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per hood system by size, ducts and fans, filters exchange, access panels installed, before-and-after photos and the certificate sticker, frequency by cooking type (NFPA 96 in the US: hedge, cite). Sample: a restaurant, 2 hoods.
- **Don't:** Fire protection inspections (/templates/fire-protection); general cleaning (/templates/cleaning-services).

### T177-sv · /templates/biohazard-cleanup → Swedish

- [ ] **Live in sv**
- **English page:** [biohazard cleanup invoice template](../templates.md#t177--templatesbiohazard-cleanup) (planned: write the English page first)
- **Search words:** "fakturamall [biohazard cleanup, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hours by technician, PPE and disposal of regulated waste, odour treatment, materials removed, insurance billing (the claim number, the policyholder's share), discreet descriptions. Sample: an insured cleanup, 2 technicians.
- **Don't:** Mold (/templates/mold-remediation); water damage (/templates/water-damage-restoration).

### T178-sv · /templates/laundry-service → Swedish

- [ ] **Live in sv**
- **English page:** [laundry service invoice template](../templates.md#t178--templateslaundry-service) (planned: write the English page first)
- **Search words:** "fakturamall [laundry service, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per pound or kilo, per item for dry cleaning and linens, pickup and delivery, B2B accounts (salons, Airbnb hosts, gyms) billed monthly. Sample: a host's monthly linens.
- **Don't:** Alterations (/templates/alterations).

### T179-sv · /templates/dumpster-rental → Swedish

- [ ] **Live in sv**
- **English page:** [dumpster rental invoice template](../templates.md#t179--templatesdumpster-rental) (planned: write the English page first)
- **Search words:** "fakturamall [dumpster rental, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): By container size and rental period, tonnage included and overage per ton, prohibited items fees, extra days, the permit for street placement (UK: skip permit). Sample: a 20-yard for 7 days, 1.4 tons over.
- **Don't:** Junk removal (/templates/junk-removal); equipment rental (/templates/equipment-rental).

### T180-sv · /templates/portable-toilet-rental → Swedish

- [ ] **Live in sv**
- **English page:** [portable toilet rental invoice template](../templates.md#t180--templatesportable-toilet-rental) (planned: write the English page first)
- **Search words:** "fakturamall [portable toilet rental, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Units per event or per month for job sites, servicing frequency, handwash stations, delivery and pickup, damage. Sample: a construction site, 2 units, weekly service.
- **Don't:** Septic pumping (/templates/septic-service); party rentals (/templates/party-rentals).

### T183-sv · /templates/self-storage → Swedish

- [ ] **Live in sv**
- **English page:** [self storage invoice template](../templates.md#t183--templatesself-storage) (planned: write the English page first)
- **Search words:** "fakturamall [self storage, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Unit size and monthly rate, the rental period, insurance or protection plan, late fees per the lease (hedge: lien laws vary), a deposit; monthly by duplicating the invoice. Sample: a 10×10 unit for 3 months.
- **Don't:** Rent (/templates/rent); equipment rental (/templates/equipment-rental).

### T184-sv · /templates/vacation-rental → Swedish

- [ ] **Live in sv**
- **English page:** [vacation rental invoice template](../templates.md#t184--templatesvacation-rental) (planned: write the English page first)
- **Search words:** "fakturamall [vacation rental, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hosts billing guests directly (repeat guests, company stays): nights × rate, cleaning fee, deposit, tourist or occupancy tax as its own line (rules vary by city: hedge), the cancellation terms. Sample: 5 nights + cleaning + city tax.
- **Don't:** Long-term rent (/templates/rent); property management fees (/templates/property-management).

### T185-sv · /templates/graffiti-removal → Swedish

- [ ] **Live in sv**
- **English page:** [graffiti removal invoice template](../templates.md#t185--templatesgraffiti-removal) (planned: write the English page first)
- **Search words:** "fakturamall [graffiti removal, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per square foot by surface, the method (chemical, soda blasting, paint-out with colour match), anti-graffiti coating, recurring removal contracts for businesses and councils. Sample: a shopfront + coating.
- **Don't:** Pressure washing (/templates/pressure-washing).

### T187-sv · /templates/auctioneer → Swedish

- [ ] **Live in sv**
- **English page:** [auctioneer invoice template](../templates.md#t187--templatesauctioneer) (planned: write the English page first)
- **Search words:** "fakturamall [auctioneer, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The seller's commission, the buyer's premium (who pays what), lotting and cataloguing fees, advertising, the settlement to the seller after the sale; the licence where required (hedge). Sample: an equipment auction settlement.
- **Don't:** Estate sales (/templates/estate-sale).

### T188-sv · /templates/appraisal → Swedish

- [ ] **Live in sv**
- **English page:** [appraisal invoice template](../templates.md#t188--templatesappraisal) (planned: write the English page first)
- **Search words:** "fakturamall [appraisal, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The appraisal fee by property type and report form, rush fee, travel, the licence number, who ordered it (lender, AMC, private client); the fee must not depend on the value (hedge). Sample: a private single-family appraisal.
- **Don't:** Home inspection (/templates/home-inspection); real estate agents (/templates/real-estate).

### T189-sv · /templates/concierge → Swedish

- [ ] **Live in sv**
- **English page:** [concierge invoice template](../templates.md#t189--templatesconcierge) (planned: write the English page first)
- **Search words:** "fakturamall [concierge, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A monthly membership or hourly, errands and bookings as lines, purchases passed on at cost (receipts; link the reimbursement invoice), a markup only by agreement. Sample: a monthly retainer + 4 errands.
- **Don't:** Virtual assistants (/templates/virtual-assistant); personal shopping (/templates/personal-shopper).

### T190-sv · /templates/personal-shopper → Swedish

- [ ] **Live in sv**
- **English page:** [personal shopper invoice template](../templates.md#t190--templatespersonal-shopper) (planned: write the English page first)
- **Search words:** "fakturamall [personal shopper, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly or per session, purchases on the client's card vs paid by you and rebilled, the wardrobe edit, returns handled. Sample: a 3-hour shopping session + items rebilled.
- **Don't:** Fashion styling for shoots (/templates/stylist); concierge (/templates/concierge).

### T191-sv · /templates/house-sitting → Swedish

- [ ] **Live in sv**
- **English page:** [house sitting invoice template](../templates.md#t191--templateshouse-sitting) (planned: write the English page first)
- **Search words:** "fakturamall [house sitting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per night or per day, overnight vs drop-in, pets and plants, mail and bins, the key handover; holiday rates. Sample: 10 nights with one dog.
- **Don't:** Pet sitting and dog walking (/templates/pet-sitting); home watch (/templates/home-watch).

## T193–T207 in Swedish

[ ] Auto, transport and heavy equipment · 0/14 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T193-sv · /templates/window-tinting → Swedish

- [ ] **Live in sv**
- **English page:** [window tinting invoice template](../templates.md#t193--templateswindow-tinting) (planned: write the English page first)
- **Search words:** "fakturamall [window tinting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per window or per vehicle by film type (ceramic, carbon), windshield strips, removal of old tint, home and office film per square foot; legal tint limits vary by state and country (hedge). Sample: a sedan, ceramic.
- **Don't:** Auto glass replacement (/templates/auto-glass); detailing (/templates/auto-detailing).

### T194-sv · /templates/auto-glass → Swedish

- [ ] **Live in sv**
- **English page:** [auto glass invoice template](../templates.md#t194--templatesauto-glass) (planned: write the English page first)
- **Search words:** "fakturamall [auto glass, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Windshield replacement or chip repair, the glass part (OEM or aftermarket), moulding and adhesive, ADAS camera calibration, mobile service, insurance claim and deductible. Sample: a windshield with calibration, insured.
- **Don't:** Window tint (/templates/window-tinting); body shop (/templates/auto-body).

### T195-sv · /templates/paintless-dent-repair → Swedish

- [ ] **Live in sv**
- **English page:** [paintless dent repair invoice template](../templates.md#t195--templatespaintless-dent-repair) (planned: write the English page first)
- **Search words:** "fakturamall [paintless dent repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per dent by size and location, hail damage per panel from a dent matrix, R&I of trims, insurance claims (supplements). Sample: a hail claim, 4 panels.
- **Don't:** Body and paint (/templates/auto-body).

### T196-sv · /templates/tire-service → Swedish

- [ ] **Live in sv**
- **English page:** [tire shop invoice template](../templates.md#t196--templatestire-service) (planned: write the English page first)
- **Search words:** "fakturamall [tire shop, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Tyres by size and brand, mounting and balancing per tyre, valve stems, disposal fees (often required by law: hedge), alignment, seasonal changeover and storage (EU). Sample: 4 tyres + alignment + disposal.
- **Don't:** Mechanical repair (/templates/auto-repair).

### T197-sv · /templates/car-hauling → Swedish

- [ ] **Live in sv**
- **English page:** [car hauling invoice template](../templates.md#t197--templatescar-hauling) (planned: write the English page first)
- **Search words:** "fakturamall [car hauling, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per vehicle by distance, open vs enclosed, the bill of lading and inspection, inoperable surcharge, terminal vs door-to-door, the carrier's authority number (US: hedge). Sample: 2 cars, 900 miles, open trailer.
- **Don't:** Towing (/templates/towing); trucking freight (/templates/trucking).

### T198-sv · /templates/motorcycle-repair → Swedish

- [ ] **Live in sv**
- **English page:** [motorcycle repair invoice template](../templates.md#t198--templatesmotorcycle-repair) (planned: write the English page first)
- **Search words:** "fakturamall [motorcycle repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Labor by the hour or by book time, parts, tyres, scheduled service by mileage, storage fees, pickup. Sample: a major service + tyres.
- **Don't:** Car repair (/templates/auto-repair); small engines (/templates/small-engine-repair).

### T199-sv · /templates/heavy-equipment-repair → Swedish

- [ ] **Live in sv**
- **English page:** [heavy equipment repair invoice template](../templates.md#t199--templatesheavy-equipment-repair) (planned: write the English page first)
- **Search words:** "fakturamall [heavy equipment repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Field service: travel time and mileage to the site, labor per hour (shop vs field rate), parts, fluids and filters, the machine's serial number and hour meter, diagnostic time. Sample: an excavator hydraulic repair in the field.
- **Don't:** Small engines (/templates/small-engine-repair); equipment rental (/templates/equipment-rental).

### T200-sv · /templates/freight-broker → Swedish

- [ ] **Live in sv**
- **English page:** [freight broker invoice template](../templates.md#t200--templatesfreight-broker) (planned: write the English page first)
- **Search words:** "fakturamall [freight broker, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The broker billing the shipper: load number, pickup and delivery, the rate confirmation, accessorials (detention, lumper, layover), the proof of delivery; the broker's authority number (US: hedge). Sample: one FTL load with detention.
- **Don't:** The carrier's own invoice (/templates/trucking); dispatch fees (/templates/truck-dispatch).

### T202-sv · /templates/flight-instruction → Swedish

- [ ] **Live in sv**
- **English page:** [flight instruction invoice template](../templates.md#t202--templatesflight-instruction) (planned: write the English page first)
- **Search words:** "fakturamall [flight instruction, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Instruction hours (flight and ground), aircraft rental per Hobbs or tach hour (wet or dry), fuel surcharge, checkride prep, the instructor's certificate number. Sample: 3 lessons, 4.2 flight hours.
- **Don't:** Driving lessons (/templates/driving-instructor).

### T203-sv · /templates/valet-parking → Swedish

- [ ] **Live in sv**
- **English page:** [valet parking invoice template](../templates.md#t203--templatesvalet-parking) (planned: write the English page first)
- **Search words:** "fakturamall [valet parking, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Events: attendants × hours with a minimum, the supervisor, signage and podium, insurance certificate, hosted vs guest-paid, gratuity line. Sample: a wedding, 4 attendants, 6 hours.
- **Don't:** Event venue (/templates/event-venue); security (/templates/security-guard).

### T204-sv · /templates/bus-charter → Swedish

- [ ] **Live in sv**
- **English page:** [bus charter invoice template](../templates.md#t204--templatesbus-charter) (planned: write the English page first)
- **Search words:** "fakturamall [bus charter, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per hour or per day with a minimum, mileage over the allowance, driver hours and overnight costs, tolls and parking, the deposit and cancellation terms. Sample: a day trip, 56-seat coach.
- **Don't:** Limousines and chauffeurs (/templates/limousine-service).

### T205-sv · /templates/car-audio-installation → Swedish

- [ ] **Live in sv**
- **English page:** [car audio installation invoice template](../templates.md#t205--templatescar-audio-installation) (planned: write the English page first)
- **Search words:** "fakturamall [car audio installation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Equipment (head unit, amp, speakers, wiring kits), labor per install, dash kits and harnesses, remote starters, the warranty on labor. Sample: head unit + amp + sub.
- **Don't:** Repair (/templates/auto-repair).

### T206-sv · /templates/aircraft-maintenance → Swedish

- [ ] **Live in sv**
- **English page:** [aircraft maintenance invoice template](../templates.md#t206--templatesaircraft-maintenance) (planned: write the English page first)
- **Search words:** "fakturamall [aircraft maintenance, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Annual or 100-hour inspections, squawks found and fixed, parts with traceability, labor hours, the logbook entry and the mechanic's certificate number (hedge on regulations). Sample: an annual + 3 squawks.
- **Don't:** Flight lessons (/templates/flight-instruction).

### T207-sv · /templates/crane-services → Swedish

- [ ] **Live in sv**
- **English page:** [crane service invoice template](../templates.md#t207--templatescrane-services) (planned: write the English page first)
- **Search words:** "fakturamall [crane service, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per hour with a minimum (portal to portal), the operator and rigger, travel and setup time, permits, lift plans, overtime. Sample: a 4-hour minimum lift with rigger.
- **Don't:** Equipment rental without an operator (/templates/equipment-rental).

## T208–T222 in Swedish

[ ] Workshops, repair and industrial trades · 0/14 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T208-sv · /templates/machining → Swedish

- [ ] **Live in sv**
- **English page:** [machining invoice template](../templates.md#t208--templatesmachining) (planned: write the English page first)
- **Search words:** "fakturamall [machining, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per part or per job: setup charge, machine hours, material, finishing and heat treat (outsourced), quantity breaks, the customer PO and drawing revision, inspection reports. Sample: 50 parts with setup.
- **Don't:** Welding (/templates/welding); 3D printing (/templates/3d-printing).

### T209-sv · /templates/sandblasting → Swedish

- [ ] **Live in sv**
- **English page:** [sandblasting invoice template](../templates.md#t209--templatessandblasting) (planned: write the English page first)
- **Search words:** "fakturamall [sandblasting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per square foot or per hour by media, masking, containment and disposal, mobile vs shop, primer coat after blasting. Sample: a trailer frame, shop job.
- **Don't:** Powder coating (/templates/powder-coating); pressure washing (/templates/pressure-washing).

### T210-sv · /templates/powder-coating → Swedish

- [ ] **Live in sv**
- **English page:** [powder coating invoice template](../templates.md#t210--templatespowder-coating) (planned: write the English page first)
- **Search words:** "fakturamall [powder coating, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per part or per batch, stripping and blasting, colour changes, masking, multi-coat finishes, rush orders. Sample: a set of 4 wheels, two-tone.
- **Don't:** Sandblasting (/templates/sandblasting).

### T211-sv · /templates/scaffolding → Swedish

- [ ] **Live in sv**
- **English page:** [scaffolding invoice template](../templates.md#t211--templatesscaffolding) (planned: write the English page first)
- **Search words:** "fakturamall [scaffolding, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Erect and dismantle as a fixed price, hire per week after the included period, inspections (the inspection record: hedge per country), alterations, adaptations, transport. Sample: a house front, 6 weeks.
- **Don't:** Equipment rental (/templates/equipment-rental); roofing (/templates/roofing).

### T212-sv · /templates/millwright → Swedish

- [ ] **Live in sv**
- **English page:** [millwright invoice template](../templates.md#t212--templatesmillwright) (planned: write the English page first)
- **Search words:** "fakturamall [millwright, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Machinery moving and installation, alignment (laser), shutdown work at overtime rates, crew hours, rigging equipment, per diem on travel jobs. Sample: a conveyor install during a weekend shutdown.
- **Don't:** Heavy equipment repair (/templates/heavy-equipment-repair); crane services (/templates/crane-services).

### T213-sv · /templates/concrete-cutting → Swedish

- [ ] **Live in sv**
- **English page:** [concrete cutting invoice template](../templates.md#t213--templatesconcrete-cutting) (planned: write the English page first)
- **Search words:** "fakturamall [concrete cutting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per linear foot by depth (wall sawing, flat sawing), core holes per diameter, water and slurry management, a minimum charge, scanning for rebar first. Sample: 3 cores + 20 ft of slab cut.
- **Don't:** Pouring and flatwork (/templates/concrete); demolition (/templates/demolition).

### T214-sv · /templates/environmental-consulting → Swedish

- [ ] **Live in sv**
- **English page:** [environmental consulting invoice template](../templates.md#t214--templatesenvironmental-consulting) (planned: write the English page first)
- **Search words:** "fakturamall [environmental consulting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Phase I/II site assessments as a fixed fee, sampling and lab costs passed through, field hours, reports, regulator meetings; project numbers for the client's lender. Sample: a Phase I report + 2 samples.
- **Don't:** General consulting (/templates/consulting); asbestos surveys (/templates/asbestos-removal).

### T215-sv · /templates/commercial-refrigeration → Swedish

- [ ] **Live in sv**
- **English page:** [commercial refrigeration invoice template](../templates.md#t215--templatescommercial-refrigeration) (planned: write the English page first)
- **Search words:** "fakturamall [commercial refrigeration, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Service calls for restaurants and shops: emergency rates, refrigerant by the pound (the certification and logs where required: hedge), parts, preventive maintenance contracts. Sample: a walk-in cooler compressor repair, after hours.
- **Don't:** Residential HVAC (/templates/hvac); kitchen equipment repair (/templates/restaurant-equipment-repair).

### T216-sv · /templates/restaurant-equipment-repair → Swedish

- [ ] **Live in sv**
- **English page:** [restaurant equipment repair invoice template](../templates.md#t216--templatesrestaurant-equipment-repair) (planned: write the English page first)
- **Search words:** "fakturamall [restaurant equipment repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Ovens, fryers, dishwashers, ice machines: trip charge, labor per hour, parts, after-hours rates, the asset's model and serial, a maintenance agreement. Sample: a fryer and an ice machine.
- **Don't:** Home appliances (/templates/appliance-repair); refrigeration (/templates/commercial-refrigeration).

### T217-sv · /templates/shoe-repair → Swedish

- [ ] **Live in sv**
- **English page:** [shoe repair invoice template](../templates.md#t217--templatesshoe-repair) (planned: write the English page first)
- **Search words:** "fakturamall [shoe repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per job (heels, soles, stitching, stretching, polishing), boots and bags, the claim ticket number, pickup date and unclaimed-item policy, B2B work for shops. Sample: soles + heels on 2 pairs.
- **Don't:** Alterations (/templates/alterations); leather furniture (/templates/upholstery).

### T218-sv · /templates/piano-tuning → Swedish

- [ ] **Live in sv**
- **English page:** [piano tuning invoice template](../templates.md#t218--templatespiano-tuning) (planned: write the English page first)
- **Search words:** "fakturamall [piano tuning, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Tuning per visit, pitch raise, repairs and regulation per hour, travel zones, schools and venues on contract. Sample: a pitch raise + tuning.
- **Don't:** Lessons (/templates/music-lessons); instrument repair (/templates/instrument-repair).

### T219-sv · /templates/instrument-repair → Swedish

- [ ] **Live in sv**
- **English page:** [instrument repair invoice template](../templates.md#t219--templatesinstrument-repair) (planned: write the English page first)
- **Search words:** "fakturamall [instrument repair, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Setups, fretwork, electronics, brass and woodwind repad, parts, the instrument's make and serial, rush fees. Sample: a guitar setup + refret.
- **Don't:** Piano tuning (/templates/piano-tuning).

### T220-sv · /templates/furniture-refinishing → Swedish

- [ ] **Live in sv**
- **English page:** [furniture refinishing invoice template](../templates.md#t220--templatesfurniture-refinishing) (planned: write the English page first)
- **Search words:** "fakturamall [furniture refinishing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per piece: stripping, repairs, stain and finish, hardware, veneer work, pickup and delivery; deposits on large pieces. Sample: a dining table + 6 chairs.
- **Don't:** Upholstery (/templates/upholstery); new furniture (/templates/custom-furniture).

### T222-sv · /templates/knife-sharpening → Swedish

- [ ] **Live in sv**
- **English page:** [knife sharpening invoice template](../templates.md#t222--templatesknife-sharpening) (planned: write the English page first)
- **Search words:** "fakturamall [knife sharpening, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per blade by type (kitchen, serrated, scissors, tools), restaurant routes on a rotation (knife rental vs sharpening), repairs of tips and chips. Sample: a restaurant's weekly rotation.
- **Don't:** Restaurant equipment (/templates/restaurant-equipment-repair).

## T223–T237 in Swedish

[ ] Events, food, travel and entertainment · 0/15 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T223-sv · /templates/balloon-decor → Swedish

- [ ] **Live in sv**
- **English page:** [balloon decor invoice template](../templates.md#t223--templatesballoon-decor) (planned: write the English page first)
- **Search words:** "fakturamall [balloon decor, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per piece (garland per foot, arches, columns), setup and teardown time, delivery, venue restrictions, the deposit on booking. Sample: a 20 ft garland + 2 columns.
- **Don't:** Event decor in general (/templates/event-decor); party rentals (/templates/party-rentals).

### T224-sv · /templates/face-painting → Swedish

- [ ] **Live in sv**
- **English page:** [face painting invoice template](../templates.md#t224--templatesface-painting) (planned: write the English page first)
- **Search words:** "fakturamall [face painting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per hour with a minimum (faces per hour as a guide), travel, glitter tattoos as add-on, public events vs private parties, the deposit. Sample: a 2-hour birthday.
- **Don't:** Henna (/templates/henna); entertainers (/templates/entertainer).

### T225-sv · /templates/entertainer → Swedish

- [ ] **Live in sv**
- **English page:** [entertainer invoice template](../templates.md#t225--templatesentertainer) (planned: write the English page first)
- **Search words:** "fakturamall [entertainer, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per show or per hour, travel, sound equipment, the performance agreement (date, length, audience), the deposit and cancellation. Sample: a corporate magic show.
- **Don't:** DJs (/templates/dj); musicians (/templates/musician).

### T226-sv · /templates/audio-visual → Swedish

- [ ] **Live in sv**
- **English page:** [audio visual invoice template](../templates.md#t226--templatesaudio-visual) (planned: write the English page first)
- **Search words:** "fakturamall [audio visual, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Event AV: equipment by day (projectors, screens, mics, LED walls), technicians by hour, setup and strike, labor overtime, the venue's in-house AV fee. Sample: a 1-day conference.
- **Don't:** Home theater installs (/templates/home-theater-installation); DJ (/templates/dj).

### T227-sv · /templates/calligraphy → Swedish

- [ ] **Live in sv**
- **English page:** [calligraphy invoice template](../templates.md#t227--templatescalligraphy) (planned: write the English page first)
- **Search words:** "fakturamall [calligraphy, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per envelope or per piece, place cards, signage, live event calligraphy per hour, proof rounds, rush fees, client-supplied materials. Sample: 120 envelopes + 8 signs.
- **Don't:** Wedding invitations (/templates/wedding-invitations); illustration (/templates/illustration).

### T228-sv · /templates/wedding-invitations → Swedish

- [ ] **Live in sv**
- **English page:** [wedding invitation invoice template](../templates.md#t228--templateswedding-invitations) (planned: write the English page first)
- **Search words:** "fakturamall [wedding invitation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Design fee, printing per piece by method (digital, letterpress, foil), envelopes, proofs, rush, postage; the deposit on ordering. Sample: 100 invitations + RSVP cards.
- **Don't:** Graphic design (/templates/freelance-design); printing (/templates/print-shop).

### T229-sv · /templates/henna → Swedish

- [ ] **Live in sv**
- **English page:** [henna invoice template](../templates.md#t229--templateshenna) (planned: write the English page first)
- **Search words:** "fakturamall [henna, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Bridal henna per hands and feet, guests per hour, travel, aftercare, the deposit. Sample: bridal + 2 hours of guests.
- **Don't:** Face painting (/templates/face-painting); tattoos (/templates/tattoo).

### T230-sv · /templates/event-decor → Swedish

- [ ] **Live in sv**
- **English page:** [event decor invoice template](../templates.md#t230--templatesevent-decor) (planned: write the English page first)
- **Search words:** "fakturamall [event decor, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Design fee, rentals from your stock (linens, centrepieces, backdrops) per item, florals bought in, setup and teardown, damage and loss. Sample: a wedding reception for 120.
- **Don't:** Event planning (/templates/event-planning); balloons (/templates/balloon-decor); florists (/templates/florist).

### T231-sv · /templates/food-truck → Swedish

- [ ] **Live in sv**
- **English page:** [food truck invoice template](../templates.md#t231--templatesfood-truck) (planned: write the English page first)
- **Search words:** "fakturamall [food truck, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private events: a guaranteed minimum, per guest or per item menus, travel, service hours, the permit at the venue (hedge), gratuity. Sample: a company lunch, 80 guests.
- **Don't:** Full-service catering (/templates/catering).

### T232-sv · /templates/cooking-classes → Swedish

- [ ] **Live in sv**
- **English page:** [cooking class invoice template](../templates.md#t232--templatescooking-classes) (planned: write the English page first)
- **Search words:** "fakturamall [cooking class, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per person or per group, ingredients included, private and corporate team-building classes, the venue, cancellation. Sample: a corporate class for 12.
- **Don't:** Private chef dinners (/templates/personal-chef).

### T233-sv · /templates/meal-prep → Swedish

- [ ] **Live in sv**
- **English page:** [meal prep invoice template](../templates.md#t233--templatesmeal-prep) (planned: write the English page first)
- **Search words:** "fakturamall [meal prep, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Weekly plans by meals, ingredients at cost or included, containers, delivery, dietary plans; weekly by duplicating the invoice. Sample: 10 meals a week for a month.
- **Don't:** Private chef (/templates/personal-chef); catering (/templates/catering).

### T234-sv · /templates/meat-processing → Swedish

- [ ] **Live in sv**
- **English page:** [meat processing invoice template](../templates.md#t234--templatesmeat-processing) (planned: write the English page first)
- **Search words:** "fakturamall [meat processing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per pound hanging weight, kill fee, cut and wrap, sausage and jerky per pound, smoking, the animal's tag number; game vs livestock rules (hedge). Sample: a deer with 10 lb of sausage.
- **Don't:** Farm sales (/templates/farm).

### T235-sv · /templates/referee → Swedish

- [ ] **Live in sv**
- **English page:** [referee invoice template](../templates.md#t235--templatesreferee) (planned: write the English page first)
- **Search words:** "fakturamall [referee, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per game by level, mileage, tournaments per day, the assigner's fee, the league or school's vendor details. Sample: 6 youth games in a weekend.
- **Don't:** Coaching (/templates/sports-coaching).

### T236-sv · /templates/tour-guide → Swedish

- [ ] **Live in sv**
- **English page:** [tour guide invoice template](../templates.md#t236--templatestour-guide) (planned: write the English page first)
- **Search words:** "fakturamall [tour guide, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per tour or per day, group size tiers, entrance fees passed on, transport, the guide's licence where required (hedge), deposits from agencies. Sample: a full-day private tour for 6.
- **Don't:** Travel agency fees (/templates/travel-agent).

### T237-sv · /templates/travel-agent → Swedish

- [ ] **Live in sv**
- **English page:** [travel agent invoice template](../templates.md#t237--templatestravel-agent) (planned: write the English page first)
- **Search words:** "fakturamall [travel agent, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Planning fees, bookings passed on at cost vs commission from suppliers, service fees per ticket, deposits and final payment dates; seller of travel rules where they exist (hedge). Sample: a planning fee + a booked trip.
- **Don't:** Tour guiding (/templates/tour-guide).

## T238–T252 in Swedish

[ ] Professional services II · 0/12 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T238-sv · /templates/accounting → Swedish

- [ ] **Live in sv**
- **English page:** [accounting invoice template](../templates.md#t238--templatesaccounting) (planned: write the English page first)
- **Search words:** "fakturamall [accounting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Accountants and CPA firms: year-end accounts, tax returns, advisory by the hour or fixed fee, monthly packages, engagement letter reference, out-of-scope work billed apart. Sample: a year-end package + 3 advisory hours.
- **Don't:** Bookkeeping (/templates/bookkeeping); tax preparation (/templates/tax-preparation).

### T239-sv · /templates/financial-advisor → Swedish

- [ ] **Live in sv**
- **English page:** [financial advisor invoice template](../templates.md#t239--templatesfinancial-advisor) (planned: write the English page first)
- **Search words:** "fakturamall [financial advisor, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Fee-only planners: a flat planning fee, hourly, or a retainer; the advisory fee as % of assets billed quarterly (often deducted from the account: say so); registration disclosures (hedge). Sample: a financial plan + quarterly fee.
- **Don't:** Accounting (/templates/accounting); consulting (/templates/consulting).

### T240-sv · /templates/recruitment → Swedish

- [ ] **Live in sv**
- **English page:** [recruitment invoice template](../templates.md#t240--templatesrecruitment) (planned: write the English page first)
- **Search words:** "fakturamall [recruitment, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Placement fees as % of first-year salary, retained search in stages, the guarantee or rebate period, the candidate and start date, VAT on fees. Sample: a 20% placement on a €60,000 role.
- **Don't:** Temp staffing (/templates/staffing-agency).

### T241-sv · /templates/staffing-agency → Swedish

- [ ] **Live in sv**
- **English page:** [staffing agency invoice template](../templates.md#t241--templatesstaffing-agency) (planned: write the English page first)
- **Search words:** "fakturamall [staffing agency, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Temp workers billed weekly: hours per worker from approved timesheets × bill rate, overtime rates, the markup inside the bill rate, the PO, temp-to-hire conversion fees. Sample: a week of 3 temps.
- **Don't:** Permanent placement (/templates/recruitment); security staff (/templates/security-guard).

### T242-sv · /templates/grant-writing → Swedish

- [ ] **Live in sv**
- **English page:** [grant writing invoice template](../templates.md#t242--templatesgrant-writing) (planned: write the English page first)
- **Search words:** "fakturamall [grant writing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per proposal or hourly, research phase, budget preparation, rounds of edits; professional standards generally discourage commission on the award (hedge, cite the Grant Professionals Association). Sample: one federal proposal, fixed fee.
- **Don't:** Copywriting (/templates/copywriting); technical writing (/templates/technical-writing).

### T243-sv · /templates/resume-writing → Swedish

- [ ] **Live in sv**
- **English page:** [resume writing invoice template](../templates.md#t243--templatesresume-writing) (planned: write the English page first)
- **Search words:** "fakturamall [resume writing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Packages (CV, cover letter, LinkedIn), per level (entry, executive), rush, revisions included. Sample: an executive package.
- **Don't:** Copywriting (/templates/copywriting); coaching (/templates/life-coaching).

### T244-sv · /templates/technical-writing → Swedish

- [ ] **Live in sv**
- **English page:** [technical writing invoice template](../templates.md#t244--templatestechnical-writing) (planned: write the English page first)
- **Search words:** "fakturamall [technical writing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly or per deliverable (manuals, API docs, SOPs), research and SME interviews, revision cycles, tools and licences. Sample: a user manual by milestone.
- **Don't:** Marketing copy (/templates/copywriting); proofreading (/templates/proofreading).

### T245-sv · /templates/transcription → Swedish

- [ ] **Live in sv**
- **English page:** [transcription invoice template](../templates.md#t245--templatestranscription) (planned: write the English page first)
- **Search words:** "fakturamall [transcription, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per audio minute by turnaround and quality (clean vs verbatim), speakers, timestamps, difficult audio surcharge, legal and medical specialisms. Sample: 140 audio minutes, verbatim.
- **Don't:** Court reporting (/templates/court-reporter); translation (/templates/translation).

### T247-sv · /templates/interpreter → Swedish

- [ ] **Live in sv**
- **English page:** [interpreter invoice template](../templates.md#t247--templatesinterpreter) (planned: write the English page first)
- **Search words:** "fakturamall [interpreter, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per hour with a 2-hour minimum or half/full day, travel time, cancellation fees, conference vs court vs medical settings. Sample: a half-day medical appointment + travel.
- **Don't:** Written translation (/templates/translation).

### T249-sv · /templates/mediation → Swedish

- [ ] **Live in sv**
- **English page:** [mediation invoice template](../templates.md#t249--templatesmediation) (planned: write the English page first)
- **Search words:** "fakturamall [mediation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per session or per hour, split between the parties (who pays what share), prep time, the agreement drafting, cancellation. Sample: a full-day mediation split 50/50.
- **Don't:** Attorneys (/templates/attorney).

### T250-sv · /templates/expert-witness → Swedish

- [ ] **Live in sv**
- **English page:** [expert witness invoice template](../templates.md#t250--templatesexpert-witness) (planned: write the English page first)
- **Search words:** "fakturamall [expert witness, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The retainer, review hours, report writing, deposition and trial time at different rates, travel, the case caption. Sample: a retainer drawdown + 10 review hours.
- **Don't:** Consulting (/templates/consulting).

### T252-sv · /templates/engineering → Swedish

- [ ] **Live in sv**
- **English page:** [engineering invoice template](../templates.md#t252--templatesengineering) (planned: write the English page first)
- **Search words:** "fakturamall [engineering, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Consulting engineers: inspections and calculations as fixed fees, hourly design work, site visits, stamped drawings, reimbursables, project numbers. Sample: a structural inspection + beam calculation.
- **Don't:** Architects (/templates/architect); land surveying (/templates/land-surveying).

## T253–T262 in Swedish

[ ] Digital and tech services · 0/10 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T253-sv · /templates/cybersecurity → Swedish

- [ ] **Live in sv**
- **English page:** [cybersecurity invoice template](../templates.md#t253--templatescybersecurity) (planned: write the English page first)
- **Search words:** "fakturamall [cybersecurity, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Fixed-fee assessments (pen test, audit) by scope, retainers for incident response, hours, the report as a deliverable, confidentiality in the descriptions. Sample: an external pen test + retest.
- **Don't:** IT support (/templates/it-services).

### T254-sv · /templates/data-entry → Swedish

- [ ] **Live in sv**
- **English page:** [data entry invoice template](../templates.md#t254--templatesdata-entry) (planned: write the English page first)
- **Search words:** "fakturamall [data entry, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per record, per page or per hour, accuracy checks, file formats delivered, rush work, data protection note. Sample: 4,000 records at a per-record rate.
- **Don't:** Virtual assistants (/templates/virtual-assistant); data analysis (/templates/data-analysis).

### T255-sv · /templates/ppc-management → Swedish

- [ ] **Live in sv**
- **English page:** [ppc management invoice template](../templates.md#t255--templatesppc-management) (planned: write the English page first)
- **Search words:** "fakturamall [ppc management, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A management fee (flat, or % of ad spend with a minimum), setup fee, the ad spend billed by the platform or passed through, reporting period. Sample: a month at 12% of $8,000 spend.
- **Don't:** SEO (/templates/seo-services); social media management (/templates/social-media-management).

### T256-sv · /templates/web-hosting → Swedish

- [ ] **Live in sv**
- **English page:** [web hosting invoice template](../templates.md#t256--templatesweb-hosting) (planned: write the English page first)
- **Search words:** "fakturamall [web hosting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hosting plans per month or year, domains, SSL, backups, care plans with included hours, the service period; annual renewals by duplicating last year's invoice. Sample: a yearly plan for 3 sites.
- **Don't:** Building websites (/templates/web-development); retainers (/templates/web-development-retainer-invoice).

### T257-sv · /templates/game-development → Swedish

- [ ] **Live in sv**
- **English page:** [game development invoice template](../templates.md#t257--templatesgame-development) (planned: write the English page first)
- **Search words:** "fakturamall [game development, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Milestones (prototype, vertical slice, alpha), art assets per piece, hourly contract work, licences and engines, publisher advances. Sample: a milestone + 12 asset pieces.
- **Don't:** Apps (/templates/app-development); illustration (/templates/illustration).

### T258-sv · /templates/animation → Swedish

- [ ] **Live in sv**
- **English page:** [animation invoice template](../templates.md#t258--templatesanimation) (planned: write the English page first)
- **Search words:** "fakturamall [animation, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per second of finished animation or per project, storyboards and animatics, revision rounds, voice and music licences passed through, usage rights. Sample: a 60-second explainer.
- **Don't:** Video editing (/templates/video-editing); illustration (/templates/illustration).

### T259-sv · /templates/3d-rendering → Swedish

- [ ] **Live in sv**
- **English page:** [3d rendering invoice template](../templates.md#t259--templates3d-rendering) (planned: write the English page first)
- **Search words:** "fakturamall [3d rendering, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per image by view and resolution, animations per second, modelling from plans, revision rounds, rush. Sample: 4 exterior + 2 interior renders.
- **Don't:** 3D printing (/templates/3d-printing); architects (/templates/architect).

### T260-sv · /templates/photo-retouching → Swedish

- [ ] **Live in sv**
- **English page:** [photo retouching invoice template](../templates.md#t260--templatesphoto-retouching) (planned: write the English page first)
- **Search words:** "fakturamall [photo retouching, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per image by level (basic, high-end), batch pricing, culling, rush, the photographer or brand as the client. Sample: 40 basic + 6 high-end edits.
- **Don't:** Photography sessions (/templates/photography).

### T261-sv · /templates/livestream-production → Swedish

- [ ] **Live in sv**
- **English page:** [livestream production invoice template](../templates.md#t261--templateslivestream-production) (planned: write the English page first)
- **Search words:** "fakturamall [livestream production, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per event: crew and cameras, the streaming platform, graphics, rehearsal, internet backup, the recording delivered after. Sample: a 3-camera church or conference stream.
- **Don't:** Video production (/templates/videography); event AV (/templates/audio-visual).

### T262-sv · /templates/virtual-tours → Swedish

- [ ] **Live in sv**
- **English page:** [virtual tour invoice template](../templates.md#t262--templatesvirtual-tours) (planned: write the English page first)
- **Search words:** "fakturamall [virtual tour, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per property by square footage, hosting per month or year, floor plans, extra photos, travel. Sample: a 2,500 sq ft listing + hosting.
- **Don't:** Real estate photography in general (/templates/photography); drones (/templates/drone-services).

## T263–T274 in Swedish

[ ] Creative, fashion and crafts · 0/12 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T263-sv · /templates/film-production → Swedish

- [ ] **Live in sv**
- **English page:** [film production invoice template](../templates.md#t263--templatesfilm-production) (planned: write the English page first)
- **Search words:** "fakturamall [film production, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Production companies and crews: pre-production, shoot days by crew role, equipment packages, post-production, expenses and per diems, the production's PO and job number. Sample: a 2-day commercial shoot.
- **Don't:** Small video jobs (/templates/videography); editing only (/templates/video-editing).

### T264-sv · /templates/actor → Swedish

- [ ] **Live in sv**
- **English page:** [actor invoice template](../templates.md#t264--templatesactor) (planned: write the English page first)
- **Search words:** "fakturamall [actor, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Self-employed actors: day rate or session fee, usage and buyout, fittings and rehearsals, the agent's commission (who invoices whom), expenses. Sample: a 2-day commercial with a buyout.
- **Don't:** Voice-over (/templates/voice-over); modelling (/templates/model).

### T265-sv · /templates/model → Swedish

- [ ] **Live in sv**
- **English page:** [model invoice template](../templates.md#t265--templatesmodel) (planned: write the English page first)
- **Search words:** "fakturamall [model, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Day or half-day rate, usage rights by media and period, overtime, fittings, travel, the agency's commission and VAT. Sample: a half-day e-commerce shoot.
- **Don't:** Acting (/templates/actor); stylists (/templates/stylist).

### T266-sv · /templates/fashion-design → Swedish

- [ ] **Live in sv**
- **English page:** [fashion design invoice template](../templates.md#t266--templatesfashion-design) (planned: write the English page first)
- **Search words:** "fakturamall [fashion design, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Design fees, pattern making, samples, production per unit with quantity breaks, fabric deposits, tech packs. Sample: a design + 3 samples + 50 units.
- **Don't:** Alterations (/templates/alterations); embroidery (/templates/embroidery).

### T267-sv · /templates/stylist → Swedish

- [ ] **Live in sv**
- **English page:** [stylist invoice template](../templates.md#t267--templatesstylist) (planned: write the English page first)
- **Search words:** "fakturamall [stylist, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Shoots and clients: day rate, prep and shopping days, the wardrobe budget passed on with receipts, returns, kit fee. Sample: a 1-day editorial + a prep day.
- **Don't:** Hair styling (/templates/hair-salon); personal shopping (/templates/personal-shopper).

### T268-sv · /templates/muralist → Swedish

- [ ] **Live in sv**
- **English page:** [muralist invoice template](../templates.md#t268--templatesmuralist) (planned: write the English page first)
- **Search words:** "fakturamall [muralist, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per square foot or a project fee, the design fee and sketch rounds, materials and lifts, anti-graffiti coat, deposit and stage payments. Sample: a 300 sq ft exterior mural.
- **Don't:** Commissions on canvas (/templates/art-commission); house painting (/templates/painting).

### T269-sv · /templates/pottery → Swedish

- [ ] **Live in sv**
- **English page:** [pottery invoice template](../templates.md#t269--templatespottery) (planned: write the English page first)
- **Search words:** "fakturamall [pottery, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Wholesale orders to shops and restaurants (minimums, per-piece prices, lead times), custom commissions, classes, shipping and breakage terms. Sample: a restaurant order of 60 plates.
- **Don't:** Selling goods in general (/templates/sales-invoice).

### T270-sv · /templates/jewelry-making → Swedish

- [ ] **Live in sv**
- **English page:** [jewelry making invoice template](../templates.md#t270--templatesjewelry-making) (planned: write the English page first)
- **Search words:** "fakturamall [jewelry making, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Custom pieces: design fee, metal by weight at the day's price, stones with certificates, labour, a deposit for materials, wholesale to shops. Sample: a custom ring with a client's stone.
- **Don't:** Repairs (/templates/jewelry-repair).

### T271-sv · /templates/picture-framing → Swedish

- [ ] **Live in sv**
- **English page:** [picture framing invoice template](../templates.md#t271--templatespicture-framing) (planned: write the English page first)
- **Search words:** "fakturamall [picture framing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Moulding per foot, mats, glazing (standard, UV, museum), mounting, hardware, art hanging, corporate orders. Sample: 3 pieces with museum glass.
- **Don't:** Art commissions (/templates/art-commission).

### T272-sv · /templates/crafts → Swedish

- [ ] **Live in sv**
- **English page:** [craft invoice template](../templates.md#t272--templatescrafts) (planned: write the English page first)
- **Search words:** "fakturamall [craft, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Makers selling to shops, markets and custom clients: per item, wholesale vs retail price, custom orders with deposits, shipping, sales tax or VAT on goods. Sample: a wholesale order to a gift shop.
- **Don't:** Goods in general (/templates/sales-invoice); pottery (/templates/pottery).

### T273-sv · /templates/studio-rental → Swedish

- [ ] **Live in sv**
- **English page:** [studio rental invoice template](../templates.md#t273--templatesstudio-rental) (planned: write the English page first)
- **Search words:** "fakturamall [studio rental, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per hour with a minimum, equipment add-ons (lights, backdrops), overtime, cleaning fee, the damage deposit. Sample: a 4-hour shoot with lighting.
- **Don't:** Recording studios (/templates/recording-studio); event venues (/templates/event-venue).

### T274-sv · /templates/stained-glass → Swedish

- [ ] **Live in sv**
- **English page:** [stained glass invoice template](../templates.md#t274--templatesstained-glass) (planned: write the English page first)
- **Search words:** "fakturamall [stained glass, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Commissions per square foot, design drawings, restoration (releading) of old windows, installation and protective glazing, deposits. Sample: a restored church panel.
- **Don't:** Window glass (/templates/glazier).

## T275–T289 in Swedish

[ ] Health and wellness II · 0/15 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T275-sv · /templates/acupuncture → Swedish

- [ ] **Live in sv**
- **English page:** [acupuncture invoice template](../templates.md#t275--templatesacupuncture) (planned: write the English page first)
- **Search words:** "fakturamall [acupuncture, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per session (initial vs follow-up), packages, herbs as products, the licence number; for insurance reimbursement clients often need a superbill (link /templates/therapy). Sample: an initial + 3 follow-ups.
- **Don't:** The superbill in depth (/templates/therapy); massage (/templates/massage-therapy).

### T276-sv · /templates/chiropractic → Swedish

- [ ] **Live in sv**
- **English page:** [chiropractic invoice template](../templates.md#t276--templateschiropractic) (planned: write the English page first)
- **Search words:** "fakturamall [chiropractic, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Cash-pay visits: exams, adjustments, X-rays, packages and memberships, the provider's licence; insurance codes only on a superbill (hedge). Sample: an exam + X-ray + 2 adjustments.
- **Don't:** The superbill (/templates/therapy); physical therapy (/templates/physiotherapy).

### T277-sv · /templates/physiotherapy → Swedish

- [ ] **Live in sv**
- **English page:** [physical therapy invoice template](../templates.md#t277--templatesphysiotherapy) (planned: write the English page first)
- **Search words:** "fakturamall [physical therapy, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private practice: assessment and treatment sessions, home visits, packages, the therapist's registration; insurance or health-fund billing details vary by country (hedge). Sample: assessment + 4 sessions.
- **Don't:** The superbill (/templates/therapy); occupational therapy (/templates/occupational-therapy).

### T278-sv · /templates/speech-therapy → Swedish

- [ ] **Live in sv**
- **English page:** [speech therapy invoice template](../templates.md#t278--templatesspeech-therapy) (planned: write the English page first)
- **Search words:** "fakturamall [speech therapy, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private clients and schools: sessions, evaluations and reports, contract hours for schools, teletherapy, cancellations. Sample: an evaluation + 8 sessions.
- **Don't:** The superbill (/templates/therapy).

### T279-sv · /templates/occupational-therapy → Swedish

- [ ] **Live in sv**
- **English page:** [occupational therapy invoice template](../templates.md#t279--templatesoccupational-therapy) (planned: write the English page first)
- **Search words:** "fakturamall [occupational therapy, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Assessments, home or school visits, equipment recommendations, reports for funders, mileage. Sample: a home assessment + report.
- **Don't:** Physiotherapy (/templates/physiotherapy).

### T280-sv · /templates/reiki → Swedish

- [ ] **Live in sv**
- **English page:** [reiki invoice template](../templates.md#t280--templatesreiki) (planned: write the English page first)
- **Search words:** "fakturamall [reiki, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Sessions, distance sessions, packages, classes and attunements; wording without health claims. Sample: 3 sessions + a level 1 class.
- **Don't:** Massage (/templates/massage-therapy); coaching (/templates/life-coaching).

### T281-sv · /templates/spray-tanning → Swedish

- [ ] **Live in sv**
- **English page:** [spray tan invoice template](../templates.md#t281--templatesspray-tanning) (planned: write the English page first)
- **Search words:** "fakturamall [spray tan, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per session, mobile fee, bridal parties, packages, the patch-test note. Sample: a bridal party of 6, mobile.
- **Don't:** Skin care (/templates/esthetician).

### T282-sv · /templates/microblading → Swedish

- [ ] **Live in sv**
- **English page:** [microblading invoice template](../templates.md#t282--templatesmicroblading) (planned: write the English page first)
- **Search words:** "fakturamall [microblading, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The procedure, the touch-up included or later, the deposit to book, consent forms, licensing (hedge per state or country). Sample: microblading + a 6-week touch-up.
- **Don't:** Lashes (/templates/lash-extensions); makeup (/templates/makeup-artist).

### T283-sv · /templates/hair-braiding → Swedish

- [ ] **Live in sv**
- **English page:** [hair braiding invoice template](../templates.md#t283--templateshair-braiding) (planned: write the English page first)
- **Search words:** "fakturamall [hair braiding, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per style by length and size, hair included or brought, take-down, the booking deposit, late and no-show policy. Sample: medium knotless + hair.
- **Don't:** Salon services (/templates/hair-salon).

### T284-sv · /templates/locum → Swedish

- [ ] **Live in sv**
- **English page:** [locum invoice template](../templates.md#t284--templateslocum) (planned: write the English page first)
- **Search words:** "fakturamall [locum, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Self-employed doctors, pharmacists or vets covering shifts: sessions or hours by date, the practice, travel, the registration number; pension and tax notes (UK: hedge, cite NHS guidance). Sample: 6 sessions in a month.
- **Don't:** Nursing (/templates/nursing).

### T285-sv · /templates/nursing → Swedish

- [ ] **Live in sv**
- **English page:** [nursing invoice template](../templates.md#t285--templatesnursing) (planned: write the English page first)
- **Search words:** "fakturamall [nursing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Independent and agency nurses billing per shift or hour, the patient or facility, mileage, the licence number; private duty vs facility contracts. Sample: 4 private-duty shifts.
- **Don't:** Home care (/templates/caregiving); locums (/templates/locum).

### T286-sv · /templates/midwife → Swedish

- [ ] **Live in sv**
- **English page:** [midwife invoice template](../templates.md#t286--templatesmidwife) (planned: write the English page first)
- **Search words:** "fakturamall [midwife, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A global fee for prenatal, birth and postnatal care in stages, birth supplies, lab fees passed on, the licence; health-insurance billing differs by country (hedge). Sample: a home-birth package in 3 payments.
- **Don't:** Doulas (/templates/doula).

### T287-sv · /templates/lactation-consultant → Swedish

- [ ] **Live in sv**
- **English page:** [lactation consultant invoice template](../templates.md#t287--templateslactation-consultant) (planned: write the English page first)
- **Search words:** "fakturamall [lactation consultant, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Home or virtual consults, follow-ups, pump rentals, the certification; a superbill for insurance where it applies (link /templates/therapy). Sample: a home visit + a virtual follow-up.
- **Don't:** Doulas (/templates/doula).

### T288-sv · /templates/sleep-consultant → Swedish

- [ ] **Live in sv**
- **English page:** [sleep consultant invoice template](../templates.md#t288--templatessleep-consultant) (planned: write the English page first)
- **Search words:** "fakturamall [sleep consultant, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Packages (plan + 2 weeks of support), virtual or in-home, follow-up calls, extra weeks. Sample: a 2-week package.
- **Don't:** Coaching (/templates/life-coaching).

### T289-sv · /templates/hypnotherapy → Swedish

- [ ] **Live in sv**
- **English page:** [hypnotherapy invoice template](../templates.md#t289--templateshypnotherapy) (planned: write the English page first)
- **Search words:** "fakturamall [hypnotherapy, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Sessions, programmes (smoking, weight) as packages, recordings, cancellations; no medical claims. Sample: a 4-session programme.
- **Don't:** Counselling (/templates/therapy).

## T290–T301 in Swedish

[ ] Education and childcare · 0/11 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T290-sv · /templates/daycare → Swedish

- [ ] **Live in sv**
- **English page:** [daycare invoice template](../templates.md#t290--templatesdaycare) (planned: write the English page first)
- **Search words:** "fakturamall [daycare, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Weekly or monthly tuition, registration fee, late pickup fees, meals, holidays and closures, the provider's licence and tax ID for the parents' tax credit or childcare subsidy (hedge per country). Sample: a month for 2 children.
- **Don't:** Babysitting and nannies (/templates/babysitting).

### T291-sv · /templates/after-school-program → Swedish

- [ ] **Live in sv**
- **English page:** [after school program invoice template](../templates.md#t291--templatesafter-school-program) (planned: write the English page first)
- **Search words:** "fakturamall [after school program, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per term or month, days per week, pickup from school, activities, late fees, sibling discount. Sample: a term, 3 days a week.
- **Don't:** Daycare (/templates/daycare); tutoring (/templates/tutoring).

### T292-sv · /templates/summer-camp → Swedish

- [ ] **Live in sv**
- **English page:** [summer camp invoice template](../templates.md#t292--templatessummer-camp) (planned: write the English page first)
- **Search words:** "fakturamall [summer camp, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per week per child, deposit on registration, extended care, trips, the refund policy, sibling discounts. Sample: 3 weeks for 2 children.
- **Don't:** After-school care (/templates/after-school-program).

### T293-sv · /templates/language-lessons → Swedish

- [ ] **Live in sv**
- **English page:** [language lessons invoice template](../templates.md#t293--templateslanguage-lessons) (planned: write the English page first)
- **Search words:** "fakturamall [language lessons, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per lesson or package, online vs in person, group classes, exam preparation, materials, company language training. Sample: 10 lessons + a business course.
- **Don't:** Tutoring in school subjects (/templates/tutoring); translation (/templates/translation).

### T294-sv · /templates/art-lessons → Swedish

- [ ] **Live in sv**
- **English page:** [art lessons invoice template](../templates.md#t294--templatesart-lessons) (planned: write the English page first)
- **Search words:** "fakturamall [art lessons, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per class or term, materials fee, private lessons, workshops and parties. Sample: a 6-week term + materials.
- **Don't:** Music lessons (/templates/music-lessons).

### T295-sv · /templates/corporate-training → Swedish

- [ ] **Live in sv**
- **English page:** [corporate training invoice template](../templates.md#t295--templatescorporate-training) (planned: write the English page first)
- **Search words:** "fakturamall [corporate training, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per day or per participant, design and preparation, materials and certificates, travel, online vs on site, the client's PO. Sample: a 2-day workshop for 15.
- **Don't:** Consulting (/templates/consulting); public speaking (/templates/public-speaking).

### T296-sv · /templates/public-speaking → Swedish

- [ ] **Live in sv**
- **English page:** [speaker invoice template](../templates.md#t296--templatespublic-speaking) (planned: write the English page first)
- **Search words:** "fakturamall [speaker, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The speaking fee, travel and accommodation (or a flat travel fee), book sales, recording rights, the deposit and balance; speakers' bureau commission. Sample: a keynote + travel.
- **Don't:** Training workshops (/templates/corporate-training).

### T297-sv · /templates/horse-riding-lessons → Swedish

- [ ] **Live in sv**
- **English page:** [riding lessons invoice template](../templates.md#t297--templateshorse-riding-lessons) (planned: write the English page first)
- **Search words:** "fakturamall [riding lessons, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per lesson (private, group), packages, horse use vs own horse, arena fees, shows and coaching at events. Sample: 8 lessons, school horse.
- **Don't:** Boarding (/templates/horse-boarding).

### T298-sv · /templates/martial-arts → Swedish

- [ ] **Live in sv**
- **English page:** [martial arts invoice template](../templates.md#t298--templatesmartial-arts) (planned: write the English page first)
- **Search words:** "fakturamall [martial arts, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Memberships per month, belt test fees, uniforms and gear, private lessons, family plans; monthly by duplicating the invoice. Sample: a family plan + a belt test.
- **Don't:** Personal training (/templates/personal-training).

### T300-sv · /templates/cpr-training → Swedish

- [ ] **Live in sv**
- **English page:** [cpr training invoice template](../templates.md#t300--templatescpr-training) (planned: write the English page first)
- **Search words:** "fakturamall [cpr training, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per participant with a class minimum, certification cards and the issuing body's fees, on-site group classes, equipment. Sample: a workplace class for 12.
- **Don't:** Corporate training (/templates/corporate-training).

### T301-sv · /templates/music-therapy → Swedish

- [ ] **Live in sv**
- **English page:** [music therapy invoice template](../templates.md#t301--templatesmusic-therapy) (planned: write the English page first)
- **Search words:** "fakturamall [music therapy, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Sessions (individual, group), facility contracts per hour, assessments and reports, the credential (MT-BC in the US: hedge), funding or insurance notes. Sample: a care home's monthly group sessions.
- **Don't:** Music lessons (/templates/music-lessons); counselling (/templates/therapy).

## T302–T313 in Swedish

[ ] Animals, farms and outdoors · 0/12 live in sv

- **For every template page:** A sample invoice in the local currency and number format with the local VAT line (or the small-business note), local trade words, prices and habits of that market; the local hub and generator links.

### T302-sv · /templates/pet-boarding → Swedish

- [ ] **Live in sv**
- **English page:** [pet boarding invoice template](../templates.md#t302--templatespet-boarding) (planned: write the English page first)
- **Search words:** "fakturamall [pet boarding, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per night by size, holiday surcharges, multiple pets, daycare days, bathing on checkout, medications, vaccination requirements in the terms. Sample: 6 nights for 2 dogs over a holiday.
- **Don't:** Pet sitting in the owner's home (/templates/pet-sitting); grooming (/templates/dog-grooming).

### T303-sv · /templates/horse-boarding → Swedish

- [ ] **Live in sv**
- **English page:** [horse boarding invoice template](../templates.md#t303--templateshorse-boarding) (planned: write the English page first)
- **Search words:** "fakturamall [horse boarding, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly board by type (full, partial, pasture), feed and bedding extras, turnout, blanketing, farrier and vet visits passed on, the board agreement. Sample: a month of full board + farrier.
- **Don't:** Farriers (/templates/farrier); lessons (/templates/horse-riding-lessons).

### T304-sv · /templates/farrier → Swedish

- [ ] **Live in sv**
- **English page:** [farrier invoice template](../templates.md#t304--templatesfarrier) (planned: write the English page first)
- **Search words:** "fakturamall [farrier, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per horse: trim, front shoes, full set, specialty shoes, pads, a barn call fee shared across horses, missed appointments. Sample: 4 horses at one barn.
- **Don't:** Horse boarding (/templates/horse-boarding).

### T305-sv · /templates/pet-waste-removal → Swedish

- [ ] **Live in sv**
- **English page:** [pet waste removal invoice template](../templates.md#t305--templatespet-waste-removal) (planned: write the English page first)
- **Search words:** "fakturamall [pet waste removal, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Weekly or twice-weekly service by number of dogs, initial cleanup fee, deodorising, commercial sites (HOAs, apartments); monthly by duplicating the invoice. Sample: a month, weekly, 2 dogs.
- **Don't:** Pet sitting (/templates/pet-sitting); lawn care (/templates/landscaping).

### T306-sv · /templates/hunting-guide → Swedish

- [ ] **Live in sv**
- **English page:** [hunting guide invoice template](../templates.md#t306--templateshunting-guide) (planned: write the English page first)
- **Search words:** "fakturamall [hunting guide, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Guided hunts per day or package, lodging and meals, trophy fees, processing passed on, licences and tags (the client buys them: hedge), the deposit and cancellation. Sample: a 3-day guided hunt.
- **Don't:** Meat processing (/templates/meat-processing); fishing charters (/templates/fishing-charter).

### T307-sv · /templates/fishing-charter → Swedish

- [ ] **Live in sv**
- **English page:** [fishing charter invoice template](../templates.md#t307--templatesfishing-charter) (planned: write the English page first)
- **Search words:** "fakturamall [fishing charter, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Half or full day, per person or per boat, bait and tackle, fish cleaning, the fuel surcharge, licences, the captain's licence, gratuity line. Sample: a full-day trip for 4.
- **Don't:** Hunting guides (/templates/hunting-guide); boat repair (/templates/boat-repair).

### T308-sv · /templates/custom-harvesting → Swedish

- [ ] **Live in sv**
- **English page:** [custom harvesting invoice template](../templates.md#t308--templatescustom-harvesting) (planned: write the English page first)
- **Search words:** "fakturamall [custom harvesting, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per acre by crop, per bushel or tonne hauling, fuel surcharge, the field names and acres, combine and trucks; contractor work for farms (Lohnunternehmer, loonwerker in local versions). Sample: 300 acres of wheat + hauling.
- **Don't:** Farm sales (/templates/farm); land clearing (/templates/land-clearing).

### T309-sv · /templates/land-clearing → Swedish

- [ ] **Live in sv**
- **English page:** [land clearing invoice template](../templates.md#t309--templatesland-clearing) (planned: write the English page first)
- **Search words:** "fakturamall [land clearing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per acre or per hour by density, forestry mulching vs removal, stump grinding, hauling, permits and protected species (hedge). Sample: 2 acres of mulching.
- **Don't:** Tree removal (/templates/tree-service); excavation (/templates/excavation).

### T310-sv · /templates/logging → Swedish

- [ ] **Live in sv**
- **English page:** [logging invoice template](../templates.md#t310--templateslogging) (planned: write the English page first)
- **Search words:** "fakturamall [logging, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per tonne or per cord, stumpage paid to the owner vs cutting and hauling fees, scale tickets, the harvest plan. Sample: a timber sale settlement.
- **Don't:** Tree service (/templates/tree-service); firewood (/templates/firewood).

### T311-sv · /templates/firewood → Swedish

- [ ] **Live in sv**
- **English page:** [firewood invoice template](../templates.md#t311--templatesfirewood) (planned: write the English page first)
- **Search words:** "fakturamall [firewood, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per cord or cubic metre (face cord vs full cord: define it), seasoned vs green, delivery and stacking, kiln-dried. Sample: 2 cords delivered and stacked.
- **Don't:** Logging (/templates/logging).

### T312-sv · /templates/pond-maintenance → Swedish

- [ ] **Live in sv**
- **English page:** [pond maintenance invoice template](../templates.md#t312--templatespond-maintenance) (planned: write the English page first)
- **Search words:** "fakturamall [pond maintenance, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Spring and autumn cleanouts, monthly service, pumps and filters, plants and fish, algae treatment. Sample: a spring cleanout + monthly service.
- **Don't:** Aquariums (/templates/aquarium-maintenance); pool service (/templates/pool-service).

### T313-sv · /templates/taxidermy → Swedish

- [ ] **Live in sv**
- **English page:** [taxidermy invoice template](../templates.md#t313--templatestaxidermy) (planned: write the English page first)
- **Search words:** "fakturamall [taxidermy, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per mount type (shoulder, full body, European, fish per inch), the deposit at drop-off, tanning, shipping, the tag or permit number (hedge: wildlife rules), pickup policy. Sample: a shoulder mount with deposit.
- **Don't:** Meat processing (/templates/meat-processing).

## I1–I20 in Swedish

[ ] Industry pages 1–20 (built) · 0/20 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I1-sv · /industries/plumbers-hvac → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for plumbers](https://invoicor.com/industries/plumbers-hvac) (live: use it as the source)
- **Search words:** "faktureringsprogram för [plumbers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I2-sv · /industries/freelance-designers → Swedish

- [ ] **Live in sv**
- **English page:** [invoicing app for freelance designers](https://invoicor.com/industries/freelance-designers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [invoicing app for freelance designers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I3-sv · /industries/landscaping-lawn-care → Swedish

- [ ] **Live in sv**
- **English page:** [landscaping invoicing software](https://invoicor.com/industries/landscaping-lawn-care) (live: use it as the source)
- **Search words:** "faktureringsprogram för [landscaping invoicing software, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I4-sv · /industries/electricians → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for electricians](https://invoicor.com/industries/electricians) (live: use it as the source)
- **Search words:** "faktureringsprogram för [electricians, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I5-sv · /industries/general-contractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for contractors](https://invoicor.com/industries/general-contractors) (live: use it as the source)
- **Search words:** "faktureringsprogram för [contractors, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I6-sv · /industries/photographers-videographers → Swedish

- [ ] **Live in sv**
- **English page:** [invoicing software for photographers](https://invoicor.com/industries/photographers-videographers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [invoicing software for photographers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I7-sv · /industries/consultants-coaches → Swedish

- [ ] **Live in sv**
- **English page:** [invoicing software for consultants](https://invoicor.com/industries/consultants-coaches) (live: use it as the source)
- **Search words:** "faktureringsprogram för [invoicing software for consultants, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I8-sv · /industries/cleaning-services → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for cleaning business](https://invoicor.com/industries/cleaning-services) (live: use it as the source)
- **Search words:** "faktureringsprogram för [cleaning business, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I9-sv · /industries/personal-trainers → Swedish

- [ ] **Live in sv**
- **English page:** [invoicing for personal trainers](https://invoicor.com/industries/personal-trainers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [invoicing for personal trainers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I10-sv · /industries/auto-detailing-mechanics → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for mechanics](https://invoicor.com/industries/auto-detailing-mechanics) (live: use it as the source)
- **Search words:** "faktureringsprogram för [mechanics, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I11-sv · /industries/roofers → Swedish

- [ ] **Live in sv**
- **English page:** [roofing invoice app](https://invoicor.com/industries/roofers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [roofing invoice app, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I12-sv · /industries/painters → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for painters](https://invoicor.com/industries/painters) (live: use it as the source)
- **Search words:** "faktureringsprogram för [painters, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I13-sv · /industries/web-developers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for freelance developers](https://invoicor.com/industries/web-developers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [freelance developers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I14-sv · /industries/tutors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for tutors](https://invoicor.com/industries/tutors) (live: use it as the source)
- **Search words:** "faktureringsprogram för [tutors, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I15-sv · /industries/caterers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for caterers](https://invoicor.com/industries/caterers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [caterers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I16-sv · /industries/movers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for movers](https://invoicor.com/industries/movers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [movers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I17-sv · /industries/pest-control → Swedish

- [ ] **Live in sv**
- **English page:** [pest control invoicing software](https://invoicor.com/industries/pest-control) (live: use it as the source)
- **Search words:** "faktureringsprogram för [pest control invoicing software, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I18-sv · /industries/virtual-assistants → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for virtual assistants](https://invoicor.com/industries/virtual-assistants) (live: use it as the source)
- **Search words:** "faktureringsprogram för [virtual assistants, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I19-sv · /industries/pet-care → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for dog walkers](https://invoicor.com/industries/pet-care) (live: use it as the source)
- **Search words:** "faktureringsprogram för [dog walkers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I20-sv · /industries/hair-makeup-artists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for makeup artists](https://invoicor.com/industries/hair-makeup-artists) (live: use it as the source)
- **Search words:** "faktureringsprogram för [makeup artists, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

## I21–I32 in Swedish

[ ] Industry pages 21–32 (built) · 0/12 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I21-sv · /industries/carpenters → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for carpenters](https://invoicor.com/industries/carpenters) (live: use it as the source)
- **Search words:** "faktureringsprogram för [carpenters, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I22-sv · /industries/flooring-installers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for flooring installers](https://invoicor.com/industries/flooring-installers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [flooring installers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I23-sv · /industries/tile-installers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for tile installers](https://invoicor.com/industries/tile-installers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [tile installers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I24-sv · /industries/masons → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for masons](https://invoicor.com/industries/masons) (live: use it as the source)
- **Search words:** "faktureringsprogram för [masons, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I25-sv · /industries/pool-service → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for pool service companies](https://invoicor.com/industries/pool-service) (live: use it as the source)
- **Search words:** "faktureringsprogram för [pool service companies, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I26-sv · /industries/window-cleaners → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for window cleaners](https://invoicor.com/industries/window-cleaners) (live: use it as the source)
- **Search words:** "faktureringsprogram för [window cleaners, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I27-sv · /industries/pressure-washing → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for pressure washing businesses](https://invoicor.com/industries/pressure-washing) (live: use it as the source)
- **Search words:** "faktureringsprogram för [pressure washing businesses, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I28-sv · /industries/tree-service → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for tree service companies](https://invoicor.com/industries/tree-service) (live: use it as the source)
- **Search words:** "faktureringsprogram för [tree service companies, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I29-sv · /industries/snow-removal → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for snow removal businesses](https://invoicor.com/industries/snow-removal) (live: use it as the source)
- **Search words:** "faktureringsprogram för [snow removal businesses, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I30-sv · /industries/locksmiths → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for locksmiths](https://invoicor.com/industries/locksmiths) (live: use it as the source)
- **Search words:** "faktureringsprogram för [locksmiths, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I31-sv · /industries/appliance-repair → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for appliance repair technicians](https://invoicor.com/industries/appliance-repair) (live: use it as the source)
- **Search words:** "faktureringsprogram för [appliance repair technicians, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I32-sv · /industries/junk-removal → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for junk removal businesses](https://invoicor.com/industries/junk-removal) (live: use it as the source)
- **Search words:** "faktureringsprogram för [junk removal businesses, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

## I33–I43 in Swedish

[ ] Industry pages 33–43 (built) · 0/11 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I33-sv · /industries/carpet-cleaners → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for carpet cleaners](https://invoicor.com/industries/carpet-cleaners) (live: use it as the source)
- **Search words:** "faktureringsprogram för [carpet cleaners, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I34-sv · /industries/interior-designers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for interior designers](https://invoicor.com/industries/interior-designers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [interior designers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I35-sv · /industries/djs → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for djs](https://invoicor.com/industries/djs) (live: use it as the source)
- **Search words:** "faktureringsprogram för [djs, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I36-sv · /industries/event-planners → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for event planners](https://invoicor.com/industries/event-planners) (live: use it as the source)
- **Search words:** "faktureringsprogram för [event planners, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I37-sv · /industries/florists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for florists](https://invoicor.com/industries/florists) (live: use it as the source)
- **Search words:** "faktureringsprogram för [florists, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I38-sv · /industries/massage-therapists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for massage therapists](https://invoicor.com/industries/massage-therapists) (live: use it as the source)
- **Search words:** "faktureringsprogram för [massage therapists, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I39-sv · /industries/translators → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for translators](https://invoicor.com/industries/translators) (live: use it as the source)
- **Search words:** "faktureringsprogram för [translators, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I40-sv · /industries/copywriters → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for copywriters](https://invoicor.com/industries/copywriters) (live: use it as the source)
- **Search words:** "faktureringsprogram för [copywriters, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I41-sv · /industries/social-media-managers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for social media managers](https://invoicor.com/industries/social-media-managers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [social media managers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I42-sv · /industries/music-teachers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for music teachers](https://invoicor.com/industries/music-teachers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [music teachers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### I43-sv · /industries/bookkeepers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for bookkeepers](https://invoicor.com/industries/bookkeepers) (live: use it as the source)
- **Search words:** "faktureringsprogram för [bookkeepers, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

## I44–I53 in Swedish

[ ] Industry pages for T51–T60's trades · 0/9 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I45-sv · /industries/home-inspectors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for home inspectors](../industries.md#i45--industrieshome-inspectors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [home inspectors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Invoicing at the inspection: saved inspection packages and add-ons, sending the invoice before the report, buyer or agent as the client.

### I46-sv · /industries/it-technicians → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for it technicians](../industries.md#i46--industriesit-technicians) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [it technicians, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): IT support and repair: monthly managed-service invoices by duplicating last month's, on-site visits, hardware lines, several business clients.

### I47-sv · /industries/drone-pilots → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for drone pilots](../industries.md#i47--industriesdrone-pilots) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [drone pilots, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Drone businesses: per-project packages saved as products, real-estate agents as repeat clients, travel and reshoot lines, the Part 107 number in the notes.

### I48-sv · /industries/tattoo-artists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for tattoo artists](../industries.md#i48--industriestattoo-artists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [tattoo artists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Tattoo artists: deposits as their own invoice, multi-session pieces, studio vs guest artists, paid status at the end of the session.

### I49-sv · /industries/personal-chefs → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for personal chefs](../industries.md#i49--industriespersonal-chefs) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [personal chefs, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Personal chefs: weekly clients (duplicate last week's invoice), groceries at cost, dinner-party quotes turned into invoices.

### I50-sv · /industries/bakers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for bakers](../industries.md#i50--industriesbakers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [bakers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Home and small bakeries: custom orders, deposits, café accounts invoiced weekly, delivery fees; cottage food rules vary by state (hedge).

### I51-sv · /industries/dog-trainers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for dog trainers](../industries.md#i51--industriesdog-trainers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [dog trainers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Dog trainers: packages paid up front, group classes, board-and-train, invoicing after the evaluation.

### I52-sv · /industries/musicians → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for musicians](../industries.md#i52--industriesmusicians) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [musicians, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Musicians and bands: gig invoices from the venue parking lot, deposits, venues vs private clients, one member invoicing for the band.

### I53-sv · /industries/voice-actors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for voice actors](../industries.md#i53--industriesvoice-actors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [voice actors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Voice actors: session plus usage lines, agencies and direct clients, pickups invoiced later, currencies for clients abroad (38 currencies).

## I54–I73 in Swedish

[ ] Industry pages for T61–T80's trades · 0/20 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I54-sv · /industries/chimney-sweeps → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for chimney sweeps](../industries.md#i54--industrieschimney-sweeps) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [chimney sweeps, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: inspection levels (Level 1/2/3 per NFPA 211; check), cleaning per flue, creosote removal, cap and crown repair, a camera inspection report. Show it as their real week of invoicing from the iPhone.

### I55-sv · /industries/gutter-cleaners → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for gutter cleaners](../industries.md#i55--industriesgutter-cleaners) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [gutter cleaners, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: price per linear foot and by number of stories, downspout flushing, gutter guard installs, seasonal repeat visits. Show it as their real week of invoicing from the iPhone.

### I56-sv · /industries/septic-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for septic companies](../industries.md#i56--industriesseptic-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [septic companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: pumping by tank size or gallons, disposal fees, locating and digging up lids, inspections for home sales, baffle and filter repairs. Show it as their real week of invoicing from the iPhone.

### I57-sv · /industries/irrigation-contractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for irrigation contractors](../industries.md#i57--industriesirrigation-contractors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [irrigation contractors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: spring startups and fall winterization (blowouts), zones, heads and valves as parts, backflow testing (licensed in many states; hedge). Show it as their real week of invoicing from the iPhone.

### I58-sv · /industries/deck-builders → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for deck builders](../industries.md#i58--industriesdeck-builders) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [deck builders, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: price per square foot, wood vs composite materials, railings and stairs, permits, the deposit and progress payments. Show it as their real week of invoicing from the iPhone.

### I59-sv · /industries/cabinet-installers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for cabinet installers](../industries.md#i59--industriescabinet-installers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [cabinet installers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per linear foot or per box, removal of old cabinets, hardware, crown molding, who supplies the cabinets. Show it as their real week of invoicing from the iPhone.

### I60-sv · /industries/countertop-installers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for countertop installers](../industries.md#i60--industriescountertop-installers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [countertop installers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: price per square foot of slab, templating visit, sink and cooktop cutouts, edge profiles, the deposit at templating, removal of old tops. Show it as their real week of invoicing from the iPhone.

### I61-sv · /industries/insulation-contractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for insulation contractors](../industries.md#i61--industriesinsulation-contractors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [insulation contractors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: square feet and R-value, blown-in vs batts vs spray foam, removal of old insulation, air sealing; energy rebates change (hedge, check current programs). Show it as their real week of invoicing from the iPhone.

### I62-sv · /industries/siding-contractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for siding contractors](../industries.md#i62--industriessiding-contractors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [siding contractors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: price per square (100 sq ft), material (vinyl, fiber cement, wood), trim and wrap, tear-off and disposal. Show it as their real week of invoicing from the iPhone.

### I63-sv · /industries/window-installers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for window installers](../industries.md#i63--industrieswindow-installers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [window installers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: price per window by size and type, removal and disposal, capping and trim, glass options, permits where needed. Show it as their real week of invoicing from the iPhone.

### I64-sv · /industries/paving-contractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for paving contractors](../industries.md#i64--industriespaving-contractors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [paving contractors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: square feet or tons, base preparation, sealcoating and crack filling, striping, the deposit for materials. Show it as their real week of invoicing from the iPhone.

### I65-sv · /industries/excavation-contractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for excavation contractors](../industries.md#i65--industriesexcavation-contractors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [excavation contractors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: machine hours by machine, operator, trucking and haul-off per load, trenching, mobilization fee. Show it as their real week of invoicing from the iPhone.

### I66-sv · /industries/demolition-contractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for demolition contractors](../industries.md#i66--industriesdemolition-contractors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [demolition contractors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: labor, dumpster and disposal by ton, permits, hazardous material testing by licensed specialists (asbestos: hedge, never DIY advice). Show it as their real week of invoicing from the iPhone.

### I67-sv · /industries/solar-installers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for solar installers](../industries.md#i67--industriessolar-installers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [solar installers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: system size in kW, panels and inverter, racking, permits and interconnection, progress payments; incentives change (hedge, check the current rules). Show it as their real week of invoicing from the iPhone.

### I68-sv · /industries/home-stagers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for home stagers](../industries.md#i68--industrieshome-stagers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [home stagers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: consultation fee, furniture and decor rental per month, install and de-stage, extending the rental when a house doesn't sell. Show it as their real week of invoicing from the iPhone.

### I69-sv · /industries/security-system-installers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for security system installers](../industries.md#i69--industriessecurity-system-installers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [security system installers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: equipment (cameras, panels, sensors), install labor, monitoring per month (in the app: duplicate monthly), licensing in some states (hedge). Show it as their real week of invoicing from the iPhone.

### I70-sv · /industries/av-installers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for av installers](../industries.md#i70--industriesav-installers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [av installers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: TV mounting, in-wall wiring, speakers, calibration, equipment supplied or resold. Show it as their real week of invoicing from the iPhone.

### I71-sv · /industries/mold-remediation-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for mold remediation companies](../industries.md#i71--industriesmold-remediation-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [mold remediation companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: containment, square feet treated, HEPA cleanup, third-party testing as its own line, insurance claims (hedge). Show it as their real week of invoicing from the iPhone.

### I72-sv · /industries/restoration-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for restoration companies](../industries.md#i72--industriesrestoration-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [restoration companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: extraction, drying equipment per day (air movers, dehumidifiers), moisture logs, insurance-claim pricing (many insurers use Xactimate; mention, don't explain). Show it as their real week of invoicing from the iPhone.

### I73-sv · /industries/duct-cleaners → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for duct cleaners](../industries.md#i73--industriesduct-cleaners) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [duct cleaners, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per system or per vent, dryer vent add-on, sanitizing, before/after photos sent with the invoice (not attached in the app). Show it as their real week of invoicing from the iPhone.

## I74–I93 in Swedish

[ ] Industry pages for T81–T100's trades · 0/20 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I74-sv · /industries/welders → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for welders](../industries.md#i74--industrieswelders) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [welders, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hourly plus rig time, materials by the foot or pound, mobile trip charge, certified welds (hedge). Show it as their real week of invoicing from the iPhone.

### I75-sv · /industries/sign-makers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for sign makers](../industries.md#i75--industriessign-makers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [sign makers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: design, materials and size, installation, permits for outdoor signs, the deposit. Show it as their real week of invoicing from the iPhone.

### I76-sv · /industries/screen-printers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for screen printers](../industries.md#i76--industriesscreen-printers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [screen printers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: price per piece by quantity break, screen setup per color, garments supplied or bought, rush fees. Show it as their real week of invoicing from the iPhone.

### I77-sv · /industries/embroidery-businesses → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for embroidery businesses](../industries.md#i77--industriesembroidery-businesses) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [embroidery businesses, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: stitch count, the digitizing fee, per piece by quantity, customer-supplied garments. Show it as their real week of invoicing from the iPhone.

### I78-sv · /industries/tailors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for tailors](../industries.md#i78--industriestailors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [tailors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per garment and alteration (hem, take in, zipper), rush, wedding dress fittings in stages. Show it as their real week of invoicing from the iPhone.

### I79-sv · /industries/jewelers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for jewelers](../industries.md#i79--industriesjewelers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [jewelers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: sizing, stone setting, soldering, cleaning, the item's description and insured value on the invoice (hedge appraisals). Show it as their real week of invoicing from the iPhone.

### I80-sv · /industries/bike-mechanics → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for bike mechanics](../industries.md#i80--industriesbike-mechanics) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [bike mechanics, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: tune-up levels, parts and labor, e-bike work, pickup and delivery. Show it as their real week of invoicing from the iPhone.

### I81-sv · /industries/small-engine-mechanics → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for small engine mechanics](../industries.md#i81--industriessmall-engine-mechanics) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [small engine mechanics, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: diagnostic fee, parts, labor, seasonal tune-ups, pickup fees. Show it as their real week of invoicing from the iPhone.

### I82-sv · /industries/marine-mechanics → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for marine mechanics](../industries.md#i82--industriesmarine-mechanics) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [marine mechanics, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: haul-out and launch, engine hours, bottom paint, winterization, storage per month. Show it as their real week of invoicing from the iPhone.

### I83-sv · /industries/rv-technicians → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for rv technicians](../industries.md#i83--industriesrv-technicians) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [rv technicians, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: mobile trip charge, roof sealing, appliances, parts with lead times. Show it as their real week of invoicing from the iPhone.

### I84-sv · /industries/towing-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for towing companies](../industries.md#i84--industriestowing-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [towing companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hook-up fee, per mile, storage per day, after-hours and winching; rates are capped in some cities and states (hedge). Show it as their real week of invoicing from the iPhone.

### I85-sv · /industries/couriers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for couriers](../industries.md#i85--industriescouriers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [couriers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per delivery or zone, mileage, waiting time, rush and after-hours, monthly statements for business clients. Show it as their real week of invoicing from the iPhone.

### I86-sv · /industries/owner-operators → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for owner operators](../industries.md#i86--industriesowner-operators) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [owner operators, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: rate confirmation and load number, detention, lumper fees, fuel surcharge, the bill of lading number; factoring companies (mention). Show it as their real week of invoicing from the iPhone.

### I87-sv · /industries/limo-services → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for limo services](../industries.md#i87--industrieslimo-services) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [limo services, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hourly with a minimum, gratuity, tolls and parking, waiting time, airport transfers. Show it as their real week of invoicing from the iPhone.

### I88-sv · /industries/photo-booth-rentals → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for photo booth rentals](../industries.md#i88--industriesphoto-booth-rentals) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [photo booth rentals, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hours, prints, props and backdrops, setup and travel, the date-hold deposit. Show it as their real week of invoicing from the iPhone.

### I89-sv · /industries/party-rental-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for party rental companies](../industries.md#i89--industriesparty-rental-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [party rental companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: items per day (tents, tables, chairs), delivery and setup, a damage deposit, late returns. Show it as their real week of invoicing from the iPhone.

### I90-sv · /industries/officiants → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for wedding officiants](../industries.md#i90--industriesofficiants) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [wedding officiants, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: ceremony fee, rehearsal, travel, custom ceremony writing, filing the license (rules vary). Show it as their real week of invoicing from the iPhone.

### I91-sv · /industries/illustrators → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for illustrators](../industries.md#i91--industriesillustrators) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [illustrators, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per piece, the usage license, revision rounds, the kill fee. Show it as their real week of invoicing from the iPhone.

### I92-sv · /industries/video-editors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for video editors](../industries.md#i92--industriesvideo-editors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [video editors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per hour or per finished minute, revision rounds, footage storage, rush delivery. Show it as their real week of invoicing from the iPhone.

### I93-sv · /industries/podcast-producers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for podcast producers](../industries.md#i93--industriespodcast-producers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [podcast producers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per episode, editing and mixing, show notes, hosting passed through. Show it as their real week of invoicing from the iPhone.

## I94–I113 in Swedish

[ ] Industry pages for T101–T120's trades · 0/19 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I94-sv · /industries/seo-consultants → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for seo consultants](../industries.md#i94--industriesseo-consultants) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [seo consultants, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: monthly retainer, audits, content and links as lines; never promise rankings. Show it as their real week of invoicing from the iPhone.

### I95-sv · /industries/marketing-agencies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for marketing agencies](../industries.md#i95--industriesmarketing-agencies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [marketing agencies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: retainer plus campaigns, ad spend passed through, creative production. Show it as their real week of invoicing from the iPhone.

### I96-sv · /industries/ux-designers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for ux designers](../industries.md#i96--industriesux-designers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [ux designers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: research, wireframes, prototypes and testing by phase or sprint. Show it as their real week of invoicing from the iPhone.

### I97-sv · /industries/app-developers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for app developers](../industries.md#i97--industriesapp-developers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [app developers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: milestones, app store fees passed through, maintenance after launch. Show it as their real week of invoicing from the iPhone.

### I98-sv · /industries/data-analysts → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for data analysts](../industries.md#i98--industriesdata-analysts) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [data analysts, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hourly or per project, dashboards and reports as deliverables, data access terms. Show it as their real week of invoicing from the iPhone.

### I100-sv · /industries/lawyers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for lawyers](../industries.md#i100--industrieslawyers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [lawyers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hourly in tenths of an hour, costs advanced, flat-fee matters; client trust (IOLTA) accounting is not something Invoicor does: say so; ethics rules vary by state. Show it as their real week of invoicing from the iPhone.

### I101-sv · /industries/property-managers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for property managers](../industries.md#i101--industriesproperty-managers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [property managers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: management fee as a % of rent, leasing fees, maintenance passed through, owner statements. Show it as their real week of invoicing from the iPhone.

### I102-sv · /industries/landlords → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for landlords](../industries.md#i102--industrieslandlords) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [landlords, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: monthly rent, utilities, late fees (state caps; hedge), deposits; in the app, duplicate each month. Show it as their real week of invoicing from the iPhone.

### I103-sv · /industries/security-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for security companies](../industries.md#i103--industriessecurity-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [security companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hourly per guard, armed or unarmed, overtime and holidays, event security. Show it as their real week of invoicing from the iPhone.

### I104-sv · /industries/therapists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for therapists](../industries.md#i104--industriestherapists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [therapists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: session fees, a superbill for out-of-network clients (diagnosis and procedure codes; hedge), minimal health details; never claim HIPAA compliance. Show it as their real week of invoicing from the iPhone.

### I105-sv · /industries/nutritionists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for nutritionists](../industries.md#i105--industriesnutritionists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [nutritionists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: consults, packages, meal plans, follow-ups. Show it as their real week of invoicing from the iPhone.

### I106-sv · /industries/yoga-teachers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for yoga teachers](../industries.md#i106--industriesyoga-teachers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [yoga teachers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: classes taught for studios, private sessions, workshops and retreats. Show it as their real week of invoicing from the iPhone.

### I107-sv · /industries/dance-teachers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for dance teachers](../industries.md#i107--industriesdance-teachers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [dance teachers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: monthly tuition, private lessons, costume and recital fees. Show it as their real week of invoicing from the iPhone.

### I108-sv · /industries/swim-instructors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for swim instructors](../industries.md#i108--industriesswim-instructors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [swim instructors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per lesson and packages, pool rental, group vs private. Show it as their real week of invoicing from the iPhone.

### I109-sv · /industries/sports-coaches → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for sports coaches](../industries.md#i109--industriessports-coaches) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [sports coaches, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: private sessions, camps and clinics, team fees. Show it as their real week of invoicing from the iPhone.

### I110-sv · /industries/babysitters → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for babysitters](../industries.md#i110--industriesbabysitters) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [babysitters, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hourly, extra children, late nights; a nanny working regularly for one family may be a household employee (hedge: check the tax rules). Show it as their real week of invoicing from the iPhone.

### I111-sv · /industries/caregivers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for caregivers](../industries.md#i111--industriescaregivers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [caregivers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: non-medical home care by the hour, overnights, mileage, errands; no medical claims. Show it as their real week of invoicing from the iPhone.

### I112-sv · /industries/doulas → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for doulas](../industries.md#i112--industriesdoulas) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [doulas, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: the birth package, the deposit, on-call period, postpartum hours. Show it as their real week of invoicing from the iPhone.

### I113-sv · /industries/barbers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for barbers](../industries.md#i113--industriesbarbers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [barbers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: chair rental vs commission, house calls and events, products. Show it as their real week of invoicing from the iPhone.

## I114–I133 in Swedish

[ ] Industry pages for T121–T140's trades · 0/20 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I114-sv · /industries/nail-technicians → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for nail technicians](../industries.md#i114--industriesnail-technicians) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [nail technicians, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: services and add-ons, booth rental, mobile appointments. Show it as their real week of invoicing from the iPhone.

### I115-sv · /industries/estheticians → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for estheticians](../industries.md#i115--industriesestheticians) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [estheticians, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: facials and treatments, packages, products sold. Show it as their real week of invoicing from the iPhone.

### I116-sv · /industries/lash-technicians → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for lash technicians](../industries.md#i116--industrieslash-technicians) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [lash technicians, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: full sets and fills, removal, deposits for bookings. Show it as their real week of invoicing from the iPhone.

### I117-sv · /industries/artists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for visual artists](../industries.md#i117--industriesartists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [visual artists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: the commission price, deposit, sizes and materials, shipping, reproduction rights. Show it as their real week of invoicing from the iPhone.

### I118-sv · /industries/music-producers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for music producers](../industries.md#i118--industriesmusic-producers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [music producers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per track, mixing and mastering, beat leases vs exclusive rights, studio time. Show it as their real week of invoicing from the iPhone.

### I119-sv · /industries/recording-studios → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for recording studios](../industries.md#i119--industriesrecording-studios) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [recording studios, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hourly or day rates, engineer, mixing, file delivery. Show it as their real week of invoicing from the iPhone.

### I120-sv · /industries/sound-engineers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for sound engineers](../industries.md#i120--industriessound-engineers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [sound engineers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: day rates for events, equipment, load-in and overtime. Show it as their real week of invoicing from the iPhone.

### I121-sv · /industries/content-creators → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for content creators](../industries.md#i121--industriescontent-creators) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [content creators, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: deliverables per post or video, usage rights and term, exclusivity, whitelisting. Show it as their real week of invoicing from the iPhone.

### I122-sv · /industries/proofreaders → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for proofreaders](../industries.md#i122--industriesproofreaders) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [proofreaders, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per word or per page, levels of editing, turnaround. Show it as their real week of invoicing from the iPhone.

### I123-sv · /industries/driving-instructors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for driving instructors](../industries.md#i123--industriesdriving-instructors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [driving instructors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per lesson and packages, test day fees, car use. Show it as their real week of invoicing from the iPhone.

### I124-sv · /industries/farmers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for farmers](../industries.md#i124--industriesfarmers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [farmers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: wholesale orders by unit (case, pound), delivery, standing weekly orders; food sales tax rules vary. Show it as their real week of invoicing from the iPhone.

### I125-sv · /industries/print-shops → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for print shops](../industries.md#i125--industriesprint-shops) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [print shops, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: quantities and paper, design and proofs, finishing, delivery. Show it as their real week of invoicing from the iPhone.

### I126-sv · /industries/3d-printing-services → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for 3d printing services](../industries.md#i126--industries3d-printing-services) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [3d printing services, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per part by material and hours, design or modeling, setup. Show it as their real week of invoicing from the iPhone.

### I127-sv · /industries/engravers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for engravers](../industries.md#i127--industriesengravers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [engravers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: per item, setup and artwork, materials supplied or not. Show it as their real week of invoicing from the iPhone.

### I128-sv · /industries/furniture-makers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for furniture makers](../industries.md#i128--industriesfurniture-makers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [furniture makers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: the design, the deposit, materials, finishing, delivery. Show it as their real week of invoicing from the iPhone.

### I129-sv · /industries/glaziers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for glaziers](../industries.md#i129--industriesglaziers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [glaziers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: glass by size and type, labor, board-ups and emergencies. Show it as their real week of invoicing from the iPhone.

### I130-sv · /industries/wildlife-removal-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for wildlife removal companies](../industries.md#i130--industrieswildlife-removal-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [wildlife removal companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: inspection, trapping per visit, exclusion work, cleanup; local wildlife rules (hedge). Show it as their real week of invoicing from the iPhone.

### I131-sv · /industries/aquarium-services → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for aquarium services](../industries.md#i131--industriesaquarium-services) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [aquarium services, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: monthly service visits, livestock and equipment, setups. Show it as their real week of invoicing from the iPhone.

### I132-sv · /industries/surveyors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for surveyors](../industries.md#i132--industriessurveyors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [surveyors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: boundary, topographic and ALTA surveys, field crew hours, recording fees. Show it as their real week of invoicing from the iPhone.

### I133-sv · /industries/professional-organizers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for professional organizers](../industries.md#i133--industriesprofessional-organizers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [professional organizers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Their day and billing: hourly or per project, products bought, donation runs. Show it as their real week of invoicing from the iPhone.

## I134–I137 in Swedish

[ ] Architects, real estate agents, private investigators, equipment rental · 0/4 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I134-sv · /industries/architects → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for architects](../industries.md#i134--industriesarchitects) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [architects, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Solo architects and small practices: phase billing, reimbursables, invoicing after a site visit from the iPhone. Honest: no time tracking or project accounting (link the Harvest and QuickBooks compares).
- **Don't:** The template's content (/templates/architect).

### I135-sv · /industries/real-estate-agents → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for real estate agents](../industries.md#i135--industriesreal-estate-agents) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [real estate agents, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Commission invoices to the brokerage, referral fees to other agents, flat-fee services. The app makes the invoice; it isn't a transaction or CRM tool.
- **Don't:** The template's content (/templates/real-estate).

### I136-sv · /industries/private-investigators → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for private investigators](../industries.md#i136--industriesprivate-investigators) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [private investigators, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Invoicing from the field after a surveillance shift; a retainer invoice, then hourly; discreet line descriptions.
- **Don't:** The template's content (/templates/private-investigator).

### I137-sv · /industries/equipment-rental-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for equipment rental companies](../industries.md#i137--industriesequipment-rental-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [equipment rental companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Small rental yards and owner-operators with a few machines: day, week and month rates, delivery. Honest: no booking calendar, inventory or availability tracking.
- **Don't:** The template's content (/templates/equipment-rental).

## I138–I143 in Swedish

[ ] One trade per page: split the combined industry pages · 0/6 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I138-sv · /industries/hvac-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for hvac companies](../industries.md#i138--industrieshvac-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [hvac companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Split from /industries/plumbers-hvac (one trade per page): service calls with diagnostic fees, equipment and refrigerant lines, maintenance plans billed by duplicating the last invoice, invoicing in the driveway after a repair. When live, narrow plumbers-hvac to plumbers and move its 'hvac invoicing software' key here.
- **Don't:** The template's content (/templates/hvac, /templates/hvac-labor-and-materials-invoice, /templates/hvac-maintenance-plan-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I139-sv · /industries/auto-detailers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for auto detailers](../industries.md#i139--industriesauto-detailers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [auto detailers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Split from /industries/auto-detailing-mechanics: packages by vehicle size, ceramic coating with a deposit, mobile detailing with a travel fee, fleet accounts invoiced monthly. When live, narrow that page to mechanics.
- **Don't:** The template's content (/templates/auto-detailing): link it, don't repeat it; features outside BRAND.md §10.

### I140-sv · /industries/videographers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for videographers](../industries.md#i140--industriesvideographers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [videographers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Split from /industries/photographers-videographers: shoot days, edit rounds, deposits and milestones, licensing, invoicing on set after a wrap. When live, narrow that page to photographers.
- **Don't:** The template's content (/templates/videography, /templates/video-production-milestone-invoice, /templates/videography-deposit-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I141-sv · /industries/lawn-care-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for lawn care companies](../industries.md#i141--industrieslawn-care-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [lawn care companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Split from /industries/landscaping-lawn-care: route work (mowing per cut, weekly or biweekly), seasonal treatments, monthly invoices by duplicating, invoicing between stops. Landscaping projects stay on the landscaping page; move 'lawn care invoice app' here.
- **Don't:** The template's content (/templates/landscaping, /templates/monthly-lawn-care-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I142-sv · /industries/life-coaches → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for life coaches](../industries.md#i142--industrieslife-coaches) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [life coaches, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Split from /industries/consultants-coaches: session packages, programmes in instalments, VAT on coaching (hedge), invoicing after a call from the phone. Move 'coaching invoice app' here; consultants keep the other page.
- **Don't:** The template's content (/templates/life-coaching): link it, don't repeat it; features outside BRAND.md §10.

### I143-sv · /industries/hair-stylists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for hair stylists](../industries.md#i143--industrieshair-stylists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [hair stylists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Split from /industries/hair-makeup-artists: booth-renting stylists invoicing salon owners, bridal and on-location hair, product sales; the till handles everyday clients. Move 'hair stylist invoice app' here.
- **Don't:** The template's content (/templates/hair-salon, /templates/hair-braiding): link it, don't repeat it; features outside BRAND.md §10.

## I144–I152 in Swedish

[ ] Who invoices: self-employed, freelancers, sellers · 0/7 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I144-sv · /industries/self-employed → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for self employed](../industries.md#i144--industriesself-employed) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [self employed, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The self-employed and UK/AU sole traders in any trade: a professional invoice from the phone, the no-VAT note below the threshold, numbering that survives a tax inspection, invoices in the client's currency. Honest: no bookkeeping or tax returns (link accounting compares).
- **Don't:** The template's content (/templates/freelance-invoice, /templates/no-vat-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I145-sv · /industries/freelancers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for freelancers](../industries.md#i145--industriesfreelancers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [freelancers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Freelancers across fields: foreign clients (currencies, languages, reverse charge), project, hourly and day-rate invoices, chasing payment by re-sending the PDF. Parent of the field pages (designers, developers, writers): link them.
- **Don't:** The template's content (/templates/freelance-invoice, /templates/hourly-invoice, /templates/day-rate-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I147-sv · /industries/tradespeople → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for tradespeople](../industries.md#i147--industriestradespeople) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [tradespeople, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): UK, Irish, Australian and NZ tradespeople (the word they search): labour and materials, CIS or GST notes (hedge, link the country pages), invoicing on site before leaving. Link the trade pages (plumbers, electricians, carpenters).
- **Don't:** The template's content (/templates/labor-and-materials-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I149-sv · /industries/gig-workers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for gig workers](../industries.md#i149--industriesgig-workers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [gig workers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Side jobs and gig work (deliveries, odd jobs, tutoring, events): when an invoice is needed at all, a simple free one, and when side income must be registered (hedge per country).
- **Don't:** The template's content (/templates/personal-invoice, /templates/freelance-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I150-sv · /industries/crafters → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for crafters](../industries.md#i150--industriescrafters) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [crafters, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Makers and crafters selling wholesale to shops, at markets and on commission: per-item lines, deposits on custom work, shipping, VAT on goods. Honest: no inventory or shop integration.
- **Don't:** The template's content (/templates/crafts, /templates/pottery, /templates/sales-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I151-sv · /industries/online-sellers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for online sellers](../industries.md#i151--industriesonline-sellers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [online sellers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): When a marketplace order needs a proper invoice (a business buyer asks for one, VAT invoice for EU buyers, a B2B order outside the platform). Honest: no store integration; each invoice is made by hand.
- **Don't:** The template's content (/templates/sales-invoice, /templates/commercial-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I152-sv · /industries/wholesalers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for wholesalers](../industries.md#i152--industrieswholesalers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [wholesalers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Small wholesalers and distributors: price lists by customer, case quantities, delivery dates, net terms, B2B VAT. Honest: no inventory, price lists or EDI.
- **Don't:** The template's content (/templates/sales-invoice): link it, don't repeat it; features outside BRAND.md §10.

## I153–I162 in Swedish

[ ] Specialist contractors · 0/8 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I153-sv · /industries/handymen → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for handymen](../industries.md#i153--industrieshandymen) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [handymen, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Split from /industries/general-contractors, which lists 'handyman invoice app' as a second key: small jobs by the hour with a minimum, materials picked up on the way, several jobs per day, invoicing before leaving. Move that key here.
- **Don't:** The template's content (/templates/handyman, /templates/handyman-hourly-invoice, /templates/handyman-labor-and-materials-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I154-sv · /industries/garage-door-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for garage door companies](../industries.md#i154--industriesgarage-door-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [garage door companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Springs, openers and panels, service calls and emergency rates, parts warranties, invoicing in the driveway.
- **Don't:** The template's content (/templates/garage-door-repair): link it, don't repeat it; features outside BRAND.md §10.

### I155-sv · /industries/gas-engineers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for gas engineers](../industries.md#i155--industriesgas-engineers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [gas engineers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): UK and EU heating engineers: boiler services, landlord safety certificates, parts and call-out fees, the registration number on every invoice (hedge). Honest: the app doesn't make gas safety certificates.
- **Don't:** The template's content (/templates/gas-engineer): link it, don't repeat it; features outside BRAND.md §10.

### I156-sv · /industries/plasterers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for plasterers](../industries.md#i156--industriesplasterers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [plasterers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per room or per square metre, skim vs replaster, materials, day rates, invoicing at the end of a job (UK and EU first).
- **Don't:** The template's content (/templates/plastering): link it, don't repeat it; features outside BRAND.md §10.

### I157-sv · /industries/concrete-contractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for concrete contractors](../industries.md#i157--industriesconcrete-contractors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [concrete contractors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Flatwork by square foot, yards poured, pump and short-load fees passed on, deposits before the pour, progress billing on larger jobs.
- **Don't:** The template's content (/templates/concrete, /templates/concrete-cutting): link it, don't repeat it; features outside BRAND.md §10.

### I158-sv · /industries/low-voltage-contractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for low voltage contractors](../industries.md#i158--industrieslow-voltage-contractors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [low voltage contractors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per drop, certification reports, office jobs after hours, POs from GCs and IT firms.
- **Don't:** The template's content (/templates/low-voltage-cabling): link it, don't repeat it; features outside BRAND.md §10.

### I159-sv · /industries/fire-protection-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for fire protection companies](../industries.md#i159--industriesfire-protection-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [fire protection companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Inspection routes on a schedule, deficiency work invoiced separately, the report and licence number. Honest: no inspection reports or scheduling in the app.
- **Don't:** The template's content (/templates/fire-protection, /templates/hood-cleaning): link it, don't repeat it; features outside BRAND.md §10.

### I160-sv · /industries/scaffolding-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for scaffolding companies](../industries.md#i160--industriesscaffolding-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [scaffolding companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Erect and dismantle as a fixed price, weekly hire after the included period (duplicate the invoice each week), alterations, invoicing main contractors.
- **Don't:** The template's content (/templates/scaffolding): link it, don't repeat it; features outside BRAND.md §10.

## I163–I169 in Swedish

[ ] Cleaning, waste and property services · 0/3 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I163-sv · /industries/janitorial-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for janitorial companies](../industries.md#i163--industriesjanitorial-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [janitorial companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Contract cleaning for offices and sites: monthly invoices per contract (duplicate the last), extra work as lines, POs. Distinct from house cleaning (/industries/cleaning-services: link it).
- **Don't:** The template's content (/templates/janitorial, /templates/commercial-cleaning-monthly-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I164-sv · /industries/dumpster-rental-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for dumpster rental companies](../industries.md#i164--industriesdumpster-rental-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [dumpster rental companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per haul, tonnage overages, extra days, prohibited items, invoicing after the dump ticket comes back. Honest: no dispatch or container tracking.
- **Don't:** The template's content (/templates/dumpster-rental): link it, don't repeat it; features outside BRAND.md §10.

### I169-sv · /industries/appraisers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for appraisers](../industries.md#i169--industriesappraisers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [appraisers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private appraisals invoiced on delivery, AMC and lender orders, rush fees, the licence number.
- **Don't:** The template's content (/templates/appraisal): link it, don't repeat it; features outside BRAND.md §10.

## I170–I179 in Swedish

[ ] Auto shops and transport · 0/8 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I170-sv · /industries/auto-body-shops → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for auto body shops](../industries.md#i170--industriesauto-body-shops) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [auto body shops, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Insurance jobs with deductibles and supplements, customer-pay work, sublets, invoicing at pickup. Honest: no estimating software (CCC, Mitchell).
- **Don't:** The template's content (/templates/auto-body, /templates/paintless-dent-repair): link it, don't repeat it; features outside BRAND.md §10.

### I171-sv · /industries/auto-glass-shops → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for auto glass shops](../industries.md#i171--industriesauto-glass-shops) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [auto glass shops, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Mobile installs, insurance claims and deductibles, calibration lines, invoicing at the car.
- **Don't:** The template's content (/templates/auto-glass): link it, don't repeat it; features outside BRAND.md §10.

### I172-sv · /industries/tire-shops → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for tire shops](../industries.md#i172--industriestire-shops) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [tire shops, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Tyres, mounting, disposal fees, seasonal changeovers and storage (EU), fleet accounts monthly.
- **Don't:** The template's content (/templates/tire-service): link it, don't repeat it; features outside BRAND.md §10.

### I173-sv · /industries/window-tint-shops → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for window tint shops](../industries.md#i173--industrieswindow-tint-shops) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [window tint shops, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Vehicle and residential film, warranties by film, dealer accounts billed weekly.
- **Don't:** The template's content (/templates/window-tinting): link it, don't repeat it; features outside BRAND.md §10.

### I174-sv · /industries/pdr-technicians → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for pdr technicians](../industries.md#i174--industriespdr-technicians) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [pdr technicians, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hail work for dealers and body shops, per-panel pricing from a dent matrix, travelling hail teams invoicing from the road.
- **Don't:** The template's content (/templates/paintless-dent-repair): link it, don't repeat it; features outside BRAND.md §10.

### I175-sv · /industries/heavy-equipment-mechanics → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for heavy equipment mechanics](../industries.md#i175--industriesheavy-equipment-mechanics) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [heavy equipment mechanics, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Field calls with travel time, machine hours and serials, parts, invoicing on site so the customer signs off the job.
- **Don't:** The template's content (/templates/heavy-equipment-repair): link it, don't repeat it; features outside BRAND.md §10.

### I177-sv · /industries/freight-brokers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for freight brokers](../industries.md#i177--industriesfreight-brokers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [freight brokers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Invoicing shippers per load with accessorials, after the POD. Honest: no TMS, load board or carrier payments.
- **Don't:** The template's content (/templates/freight-broker): link it, don't repeat it; features outside BRAND.md §10.

### I179-sv · /industries/flight-instructors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for flight instructors](../industries.md#i179--industriesflight-instructors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [flight instructors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Independent instructors: flight and ground hours, aircraft time if renting your own plane, invoices after each lesson or weekly.
- **Don't:** The template's content (/templates/flight-instruction): link it, don't repeat it; features outside BRAND.md §10.

## I180–I190 in Swedish

[ ] Professional services · 0/8 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I180-sv · /industries/accountants → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for accountants](../industries.md#i180--industriesaccountants) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [accountants, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Small practices and solo accountants: fixed-fee packages, year-end work, advisory hours. Honest: they already have practice software; the angle is quick one-off invoices and foreign clients.
- **Don't:** The template's content (/templates/accounting): link it, don't repeat it; features outside BRAND.md §10.

### I181-sv · /industries/financial-advisors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for financial advisors](../industries.md#i181--industriesfinancial-advisors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [financial advisors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Fee-only planners: plan fees, hourly, quarterly retainers by duplicating the invoice; disclosures hedged.
- **Don't:** The template's content (/templates/financial-advisor): link it, don't repeat it; features outside BRAND.md §10.

### I182-sv · /industries/recruiters → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for recruiters](../industries.md#i182--industriesrecruiters) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [recruiters, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Placement fees on the start date, retained search stages, guarantee periods, VAT on fees.
- **Don't:** The template's content (/templates/recruitment): link it, don't repeat it; features outside BRAND.md §10.

### I183-sv · /industries/staffing-agencies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for staffing agencies](../industries.md#i183--industriesstaffing-agencies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [staffing agencies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Weekly invoices from approved timesheets per client. Honest: no timesheets or payroll; small agencies with a few clients.
- **Don't:** The template's content (/templates/staffing-agency): link it, don't repeat it; features outside BRAND.md §10.

### I184-sv · /industries/mediators → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for mediators](../industries.md#i184--industriesmediators) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [mediators, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Sessions split between parties (one invoice each), prep time, agreements.
- **Don't:** The template's content (/templates/mediation): link it, don't repeat it; features outside BRAND.md §10.

### I188-sv · /industries/msps → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for msps](../industries.md#i188--industriesmsps) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [msps, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Small MSPs: monthly per-user or per-device plans (duplicate monthly), project work, hardware resale. Honest: no PSA or RMM integration.
- **Don't:** The template's content (/templates/managed-it-services-invoice, /templates/it-services): link it, don't repeat it; features outside BRAND.md §10.

### I189-sv · /industries/engineering-firms → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for engineering firms](../industries.md#i189--industriesengineering-firms) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [engineering firms, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Small consulting engineers: inspection fees, project phases, stamped drawings, reimbursables.
- **Don't:** The template's content (/templates/engineering): link it, don't repeat it; features outside BRAND.md §10.

### I190-sv · /industries/environmental-consultants → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for environmental consultants](../industries.md#i190--industriesenvironmental-consultants) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [environmental consultants, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Phase I/II reports as fixed fees, lab costs passed through, project numbers for lenders.
- **Don't:** The template's content (/templates/environmental-consulting): link it, don't repeat it; features outside BRAND.md §10.

## I191–I200 in Swedish

[ ] Events, food and travel · 0/10 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I191-sv · /industries/balloon-artists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for balloon artists](../industries.md#i191--industriesballoon-artists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [balloon artists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposits on booking, garlands per foot, delivery and teardown, invoicing on site.
- **Don't:** The template's content (/templates/balloon-decor): link it, don't repeat it; features outside BRAND.md §10.

### I192-sv · /industries/entertainers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for entertainers](../industries.md#i192--industriesentertainers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [entertainers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Shows per booking, deposits, travel, corporate POs; invoices sent from the venue.
- **Don't:** The template's content (/templates/entertainer, /templates/face-painting): link it, don't repeat it; features outside BRAND.md §10.

### I193-sv · /industries/travel-agents → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for travel agents](../industries.md#i193--industriestravel-agents) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [travel agents, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Planning fees, service fees, deposits and final payments; supplier bookings stay in the booking tools.
- **Don't:** The template's content (/templates/travel-agent): link it, don't repeat it; features outside BRAND.md §10.

### I194-sv · /industries/tour-operators → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for tour operators](../industries.md#i194--industriestour-operators) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [tour operators, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private tours and agency bookings, group tiers, entrance fees passed on. Honest: no booking system.
- **Don't:** The template's content (/templates/tour-guide): link it, don't repeat it; features outside BRAND.md §10.

### I195-sv · /industries/meal-prep-businesses → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for meal prep businesses](../industries.md#i195--industriesmeal-prep-businesses) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [meal prep businesses, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Weekly plans by duplicating the invoice, corporate orders, delivery fees.
- **Don't:** The template's content (/templates/meal-prep): link it, don't repeat it; features outside BRAND.md §10.

### I196-sv · /industries/food-trucks → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for food trucks](../industries.md#i196--industriesfood-trucks) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [food trucks, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private events with minimums and deposits; the POS handles walk-up sales.
- **Don't:** The template's content (/templates/food-truck): link it, don't repeat it; features outside BRAND.md §10.

### I197-sv · /industries/event-decorators → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for event decorators](../industries.md#i197--industriesevent-decorators) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [event decorators, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Design fees, rental items from stock, damage and loss, deposits and balances.
- **Don't:** The template's content (/templates/event-decor): link it, don't repeat it; features outside BRAND.md §10.

### I198-sv · /industries/wedding-vendors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for wedding vendors](../industries.md#i198--industrieswedding-vendors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [wedding vendors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The umbrella page for wedding businesses (planners, florists, DJs, photographers, decorators): deposit at booking, balance before the date, a final invoice that subtracts the deposit. Link each trade's page.
- **Don't:** The template's content (/templates/deposit-invoice, /templates/final-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I199-sv · /industries/bartenders → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for bartenders](../industries.md#i199--industriesbartenders) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [bartenders, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Event packages per guest or per hour, licensing (hedge), gratuity lines.
- **Don't:** The template's content (/templates/bartending): link it, don't repeat it; features outside BRAND.md §10.

### I200-sv · /industries/event-venues → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for event venues](../industries.md#i200--industriesevent-venues) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [event venues, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Small venues: hire fees, F&B minimums, damage deposits, payment schedules. Honest: no booking calendar.
- **Don't:** The template's content (/templates/event-venue): link it, don't repeat it; features outside BRAND.md §10.

## I201–I209 in Swedish

[ ] Creative and media · 0/9 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I201-sv · /industries/production-companies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for production companies](../industries.md#i201--industriesproduction-companies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [production companies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Small production companies: shoot days, crew and kit, post-production milestones, POs and job numbers.
- **Don't:** The template's content (/templates/film-production): link it, don't repeat it; features outside BRAND.md §10.

### I202-sv · /industries/animators → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for animators](../industries.md#i202--industriesanimators) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [animators, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per project or per second, revision rounds, usage rights, international studio clients.
- **Don't:** The template's content (/templates/animation): link it, don't repeat it; features outside BRAND.md §10.

### I203-sv · /industries/3d-artists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for 3d artists](../industries.md#i203--industries3d-artists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [3d artists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per render or per animation second, architects and agencies as clients, rush fees.
- **Don't:** The template's content (/templates/3d-rendering): link it, don't repeat it; features outside BRAND.md §10.

### I204-sv · /industries/fashion-designers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for fashion designers](../industries.md#i204--industriesfashion-designers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [fashion designers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Design fees, samples, production runs with fabric deposits, wholesale orders.
- **Don't:** The template's content (/templates/fashion-design): link it, don't repeat it; features outside BRAND.md §10.

### I205-sv · /industries/fashion-stylists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for fashion stylists](../industries.md#i205--industriesfashion-stylists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [fashion stylists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Shoot days, prep days, wardrobe budgets passed on with receipts.
- **Don't:** The template's content (/templates/stylist, /templates/personal-shopper): link it, don't repeat it; features outside BRAND.md §10.

### I206-sv · /industries/actors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for actors](../industries.md#i206--industriesactors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [actors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Day rates, buyouts, the agent's commission, expenses; invoices in the production's currency.
- **Don't:** The template's content (/templates/actor): link it, don't repeat it; features outside BRAND.md §10.

### I207-sv · /industries/models → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for models](../industries.md#i207--industriesmodels) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [models, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Bookings with usage, overtime and travel, direct clients vs agency bookings.
- **Don't:** The template's content (/templates/model): link it, don't repeat it; features outside BRAND.md §10.

### I208-sv · /industries/creative-agencies → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for creative agencies](../industries.md#i208--industriescreative-agencies) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [creative agencies, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Small branding and design studios: project milestones, retainers, third-party costs. Distinct from marketing agencies (/industries/marketing-agencies: link).
- **Don't:** The template's content (/templates/milestone-invoice, /templates/retainer-invoice): link it, don't repeat it; features outside BRAND.md §10.

### I209-sv · /industries/game-developers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for game developers](../industries.md#i209--industriesgame-developers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [game developers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Contract work for studios, milestones with publishers, asset sales.
- **Don't:** The template's content (/templates/game-development): link it, don't repeat it; features outside BRAND.md §10.

## I210–I220 in Swedish

[ ] Health, wellness and beauty · 0/11 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I210-sv · /industries/physiotherapists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for physiotherapists](../industries.md#i210--industriesphysiotherapists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [physiotherapists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private practice and home visits: per session, packages, health-insurance details on the invoice where clients claim (hedge per country). Honest: no clinical notes or booking.
- **Don't:** The template's content (/templates/physiotherapy): link it, don't repeat it; features outside BRAND.md §10.

### I211-sv · /industries/chiropractors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for chiropractors](../industries.md#i211--industrieschiropractors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [chiropractors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Cash-pay practices, packages, superbills for insurance (link /templates/therapy).
- **Don't:** The template's content (/templates/chiropractic): link it, don't repeat it; features outside BRAND.md §10.

### I212-sv · /industries/acupuncturists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for acupuncturists](../industries.md#i212--industriesacupuncturists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [acupuncturists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Sessions and herbs, superbills for clients who claim (link).
- **Don't:** The template's content (/templates/acupuncture): link it, don't repeat it; features outside BRAND.md §10.

### I213-sv · /industries/speech-therapists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for speech therapists](../industries.md#i213--industriesspeech-therapists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [speech therapists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private clients and school contracts, evaluations, teletherapy sessions.
- **Don't:** The template's content (/templates/speech-therapy): link it, don't repeat it; features outside BRAND.md §10.

### I214-sv · /industries/occupational-therapists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for occupational therapists](../industries.md#i214--industriesoccupational-therapists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [occupational therapists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Assessments, reports for funders, home visits with mileage.
- **Don't:** The template's content (/templates/occupational-therapy): link it, don't repeat it; features outside BRAND.md §10.

### I215-sv · /industries/locums → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for locums](../industries.md#i215--industrieslocums) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [locums, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Sessions across practices, monthly invoices per practice, registration numbers; pension and tax notes hedged.
- **Don't:** The template's content (/templates/locum): link it, don't repeat it; features outside BRAND.md §10.

### I216-sv · /industries/nurses → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for nurses](../industries.md#i216--industriesnurses) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [nurses, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Shifts per facility or private client, mileage, licence numbers.
- **Don't:** The template's content (/templates/nursing): link it, don't repeat it; features outside BRAND.md §10.

### I217-sv · /industries/midwives → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for midwives](../industries.md#i217--industriesmidwives) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [midwives, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Care packages in stages, birth supplies, payment plans; insurance billing differs by country (hedge).
- **Don't:** The template's content (/templates/midwife, /templates/lactation-consultant): link it, don't repeat it; features outside BRAND.md §10.

### I218-sv · /industries/holistic-practitioners → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for holistic practitioners](../industries.md#i218--industriesholistic-practitioners) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [holistic practitioners, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Reiki, hypnotherapy, sound healing and similar: sessions, packages, classes; no health claims.
- **Don't:** The template's content (/templates/reiki, /templates/hypnotherapy, /templates/sleep-consultant): link it, don't repeat it; features outside BRAND.md §10.

### I219-sv · /industries/spray-tan-artists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for spray tan artists](../industries.md#i219--industriesspray-tan-artists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [spray tan artists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Mobile sessions, bridal parties, packages.
- **Don't:** The template's content (/templates/spray-tanning): link it, don't repeat it; features outside BRAND.md §10.

### I220-sv · /industries/pmu-artists → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for pmu artists](../industries.md#i220--industriespmu-artists) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [pmu artists, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposits to book, touch-ups, consent handled separately.
- **Don't:** The template's content (/templates/microblading): link it, don't repeat it; features outside BRAND.md §10.

## I221–I230 in Swedish

[ ] Education and childcare · 0/9 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I221-sv · /industries/daycare-providers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for daycare providers](../industries.md#i221--industriesdaycare-providers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [daycare providers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Home and small centre daycares: weekly or monthly tuition (duplicate each period), late fees, the tax ID parents need for credits or subsidies (hedge). Honest: no attendance or parent portal.
- **Don't:** The template's content (/templates/daycare): link it, don't repeat it; features outside BRAND.md §10.

### I222-sv · /industries/childminders → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for childminders](../industries.md#i222--industrieschildminders) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [childminders, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): UK and EU home-based childminders: hours per child, funded hours vs paid hours (hedge), meals and outings.
- **Don't:** The template's content (/templates/daycare, /templates/after-school-program): link it, don't repeat it; features outside BRAND.md §10.

### I224-sv · /industries/summer-camps → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for summer camps](../industries.md#i224--industriessummer-camps) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [summer camps, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Weekly registrations, deposits, extended care. Honest: no registration forms.
- **Don't:** The template's content (/templates/summer-camp): link it, don't repeat it; features outside BRAND.md §10.

### I225-sv · /industries/language-teachers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for language teachers](../industries.md#i225--industrieslanguage-teachers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [language teachers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Lesson packages, company classes, online students abroad (currencies).
- **Don't:** The template's content (/templates/language-lessons): link it, don't repeat it; features outside BRAND.md §10.

### I226-sv · /industries/corporate-trainers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for corporate trainers](../industries.md#i226--industriescorporate-trainers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [corporate trainers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Day rates, per-participant fees, materials, POs.
- **Don't:** The template's content (/templates/corporate-training): link it, don't repeat it; features outside BRAND.md §10.

### I227-sv · /industries/speakers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for speakers](../industries.md#i227--industriesspeakers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [speakers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposits and balances, travel, bureau commissions.
- **Don't:** The template's content (/templates/public-speaking): link it, don't repeat it; features outside BRAND.md §10.

### I228-sv · /industries/riding-instructors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for riding instructors](../industries.md#i228--industriesriding-instructors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [riding instructors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Lesson packages, horse use, show coaching.
- **Don't:** The template's content (/templates/horse-riding-lessons): link it, don't repeat it; features outside BRAND.md §10.

### I229-sv · /industries/martial-arts-schools → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for martial arts schools](../industries.md#i229--industriesmartial-arts-schools) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [martial arts schools, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly memberships (duplicate), belt tests, gear. Honest: no automatic membership billing.
- **Don't:** The template's content (/templates/martial-arts): link it, don't repeat it; features outside BRAND.md §10.

### I230-sv · /industries/cpr-instructors → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for cpr instructors](../industries.md#i230--industriescpr-instructors) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [cpr instructors, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Workplace classes per participant, certification card fees.
- **Don't:** The template's content (/templates/cpr-training): link it, don't repeat it; features outside BRAND.md §10.

## I231–I239 in Swedish

[ ] Animals, farms and outdoors · 0/9 live in sv

- **For every industry page:** A day in the job in that country, local line items and prices, local tax and licensing notes (hedged); "invoices in your language", never "the app in your language".

### I231-sv · /industries/dog-groomers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for dog groomers](../industries.md#i231--industriesdog-groomers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [dog groomers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Takes 'dog grooming invoice' from /industries/pet-care (dog walkers and sitters stay there): per dog by size and coat, add-ons, mobile vans invoicing in the driveway.
- **Don't:** The template's content (/templates/dog-grooming): link it, don't repeat it; features outside BRAND.md §10.

### I232-sv · /industries/kennels → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for kennels](../industries.md#i232--industrieskennels) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [kennels, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Nightly stays, holiday surcharges, daycare days, invoicing at checkout. Honest: no booking calendar.
- **Don't:** The template's content (/templates/pet-boarding): link it, don't repeat it; features outside BRAND.md §10.

### I233-sv · /industries/farriers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for farriers](../industries.md#i233--industriesfarriers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [farriers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Barn visits with several horses (one invoice per owner), shoeing cycles every 6–8 weeks by duplicating the invoice.
- **Don't:** The template's content (/templates/farrier): link it, don't repeat it; features outside BRAND.md §10.

### I234-sv · /industries/stables → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for stables](../industries.md#i234--industriesstables) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [stables, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly board per horse (duplicate), extras, farrier and vet costs passed on.
- **Don't:** The template's content (/templates/horse-boarding): link it, don't repeat it; features outside BRAND.md §10.

### I235-sv · /industries/horse-trainers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for horse trainers](../industries.md#i235--industrieshorse-trainers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [horse trainers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Training board per month, rides per week, shows and hauling.
- **Don't:** The template's content (/templates/horse-boarding, /templates/horse-riding-lessons): link it, don't repeat it; features outside BRAND.md §10.

### I236-sv · /industries/outfitters → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for outfitters](../industries.md#i236--industriesoutfitters) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [outfitters, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposits a season ahead, trophy fees, lodging; invoicing from camp.
- **Don't:** The template's content (/templates/hunting-guide): link it, don't repeat it; features outside BRAND.md §10.

### I237-sv · /industries/fishing-charters → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for fishing charters](../industries.md#i237--industriesfishing-charters) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [fishing charters, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Trip deposits, balances on the dock, fuel surcharges.
- **Don't:** The template's content (/templates/fishing-charter): link it, don't repeat it; features outside BRAND.md §10.

### I238-sv · /industries/custom-harvesters → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for custom harvesters](../industries.md#i238--industriescustom-harvesters) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [custom harvesters, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per acre or hectare, hauling, fuel; invoicing farmers field by field (Lohnunternehmer, loonwerker in the local versions).
- **Don't:** The template's content (/templates/custom-harvesting): link it, don't repeat it; features outside BRAND.md §10.

### I239-sv · /industries/loggers → Swedish

- [ ] **Live in sv**
- **English page:** [invoice app for loggers](../industries.md#i239--industriesloggers) (planned: write the English page first)
- **Search words:** "faktureringsprogram för [loggers, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Timber sales settlements, per-tonne hauling, firewood sales.
- **Don't:** The template's content (/templates/logging, /templates/firewood, /templates/land-clearing): link it, don't repeat it; features outside BRAND.md §10.

## B1–B20 in Swedish

[ ] Billing types I · 0/20 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B1-sv · /templates/photography-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [photography deposit invoice](../billing.md#b1--templatesphotography-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "photography deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit (retainer) invoice a photographer sends when a client books a date: what it secures (the date, prep time), usual sizes (25–50%), non-refundable wording and the cancellation and reschedule policy, due before the date is held. Sample: a wedding booking deposit. Show how the balance invoice later lists the deposit as a negative line. FAQs: deposit vs retainer, refundable or not, rescheduling, how it appears on the final invoice.
- **Don't:** General photography invoice fields, usage rights and licensing (owned by /templates/photography): one sentence and a link.

### B2-sv · /templates/catering-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [catering deposit invoice](../billing.md#b2--templatescatering-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "catering deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit that locks a catering date: deposit size, the final headcount deadline and how the final invoice adjusts to the guaranteed count, a tasting fee credited against the deposit, cancellation windows. Sample: a 120-guest wedding deposit.
- **Don't:** Per-head menu pricing, service charge vs gratuity, staffing lines (owned by /templates/catering).

### B3-sv · /templates/contractor-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [contractor deposit invoice](../billing.md#b3--templatescontractor-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "contractor deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The down payment a contractor takes before starting: what it pays for (materials, scheduling), how big it may be (some states cap home-improvement down payments, e.g. California: $1,000 or 10% of the contract price, whichever is less, Business and Professions Code §7159.5; verify and date it), a materials deposit vs a booking deposit, what the contract should say. Sample: a kitchen job deposit.
- **Don't:** Progress billing and retainage (owned by /templates/construction-progress-invoice); general construction fields (/templates/construction).

### B4-sv · /templates/roofing-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [roofing deposit invoice](../billing.md#b4--templatesroofing-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "roofing deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit before a roof job: ordering shingles and materials, scheduling around weather, insurance-claim jobs (homeowner deductible, insurer's first and final checks, hedged), what happens to the deposit if the job is delayed. Sample: a full re-roof materials deposit.
- **Don't:** Roofing line items per square, tear-off and disposal (owned by /templates/roofing).

### B5-sv · /templates/painting-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [painting deposit invoice](../billing.md#b5--templatespainting-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "painting deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit a painter takes for paint and the booked days: color selection before ordering, change orders after the deposit, interior vs exterior weather terms. Sample: an exterior repaint deposit.
- **Don't:** Per-room and per-square-foot pricing, prep lines (owned by /templates/painting).

### B6-sv · /templates/dj-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [dj deposit invoice](../billing.md#b6--templatesdj-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "dj deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The date-hold deposit for a DJ booking: deposit size, what it covers, non-refundable terms, balance due before the event, overtime rate agreed in advance. Sample: a wedding DJ deposit.
- **Don't:** Full DJ invoice lines (hours, equipment, travel; owned by /templates/dj).

### B7-sv · /templates/construction-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [construction progress invoice](../billing.md#b7--templatesconstruction-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "construction progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Progress billing: invoicing by percentage complete or by milestone against a schedule of values, retainage (often 5–10% held until completion), change orders on their own lines, lien waivers (hedged, state rules vary); the AIA G702/G703 forms exist as an industry standard, but this is a plain invoice. Sample: the 3rd progress invoice of a home addition with previous payments shown.
- **Don't:** Deposits and down payments (owned by /templates/contractor-deposit-invoice); general construction fields (/templates/construction).

### B8-sv · /templates/web-development-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [web development milestone invoice](../billing.md#b8--templatesweb-development-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "web development milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Billing a website project in milestones (discovery, design, build, launch): what counts as done (acceptance), revision rounds, scope changes as new lines, deposit at the start. Sample: milestone 2 of 4.
- **Don't:** Monthly maintenance retainers (owned by /templates/web-development-retainer-invoice); general web development fields (/templates/web-development).

### B9-sv · /templates/video-production-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [video production milestone invoice](../billing.md#b9--templatesvideo-production-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "video production milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Billing a video project in stages: pre-production, shoot days, edit and revision rounds, delivery; what each milestone includes, extra revision rounds as lines, usage terms per stage. Sample: the post-production milestone.
- **Don't:** Day rates, crew and usage rights (owned by /templates/videography).

### B10-sv · /templates/consulting-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [consulting hourly invoice](../billing.md#b10--templatesconsulting-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "consulting hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly consulting invoices: hours × rate, billing increments (e.g. 0.25 h), how much detail per entry, minimum billing, travel time; hours come from your own timesheet (the app doesn't track time); link the free hours calculator. Sample: a month of advisory hours.
- **Don't:** Retainers (owned by /templates/consulting-retainer-invoice); setting your rate (the rate calculator in /tools); general consulting fields (/templates/consulting).

### B11-sv · /templates/virtual-assistant-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [virtual assistant hourly invoice](../billing.md#b11--templatesvirtual-assistant-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "virtual assistant hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly VA invoices: hours by task category, pre-paid blocks of hours vs billing after, time zones and response times, tools and subscriptions passed through. Sample: a two-week period for one client.
- **Don't:** General VA fields (owned by /templates/virtual-assistant); the app pitch for VAs (/industries/virtual-assistants).

### B12-sv · /templates/handyman-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [handyman hourly invoice](../billing.md#b12--templateshandyman-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "handyman hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly handyman billing: hourly vs flat per job, minimum charge (often 1–2 hours), trip charge, materials at cost or with a markup, rounding. Sample: a half-day of small repairs.
- **Don't:** General handyman invoice fields (owned by /templates/handyman).

### B13-sv · /templates/bookkeeping-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [bookkeeping hourly invoice](../billing.md#b13--templatesbookkeeping-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "bookkeeping hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly bookkeeping: catch-up and clean-up work billed by the hour vs the usual monthly fixed fee, what to list per entry, year-end extras. Sample: a catch-up project of 3 months of books.
- **Don't:** The monthly fixed-fee bookkeeping invoice (owned by /templates/bookkeeping).

### B14-sv · /templates/plumbing-labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [plumbing labor and materials invoice](../billing.md#b14--templatesplumbing-labor-and-materials-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "plumbing labor and materials invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Separating labor and parts: labor as hours × rate or a flat fee, each part on its own line, markup on parts (be transparent), parts vs workmanship warranty; sales tax on parts vs labor differs by state, and the app applies one tax rate per invoice (say how to handle it). Sample: a water heater replacement.
- **Don't:** General plumbing invoice fields (owned by /templates/plumbing).

### B15-sv · /templates/electrical-labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [electrical labor and materials invoice](../billing.md#b15--templateselectrical-labor-and-materials-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "electrical labor and materials invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Labor and materials for electricians: wire by the foot, devices and fixtures (supplied by you or the customer), permit fees as a pass-through line, labor hours; tax on materials vs labor (state rules, one tax rate per invoice). Sample: a panel upgrade.
- **Don't:** General electrician invoice fields (owned by /templates/electrician).

### B16-sv · /templates/hvac-labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [hvac labor and materials invoice](../billing.md#b16--templateshvac-labor-and-materials-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "hvac labor and materials invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Labor and materials for HVAC: equipment, refrigerant by the pound, parts, labor hours, warranty registration, disposal of old units; tax rules hedged. Sample: an AC condenser replacement.
- **Don't:** General HVAC invoice fields and maintenance plans (owned by /templates/hvac).

### B17-sv · /templates/landscaping-labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [landscaping labor and materials invoice](../billing.md#b17--templateslandscaping-labor-and-materials-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "landscaping labor and materials invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Labor and materials for landscaping projects: plants, soil and mulch by the cubic yard, stone by the ton, crew hours, equipment and disposal fees. Sample: a new front-yard bed install.
- **Don't:** Recurring lawn care visits and general landscaping fields (owned by /templates/landscaping).

### B18-sv · /templates/consulting-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [consulting retainer invoice](../billing.md#b18--templatesconsulting-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "consulting retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly consulting retainers: paying for availability vs a block of hours, invoicing at the start of the month, unused hours (roll over or not), the overage rate; in the app, duplicate last month's invoice. Sample: a monthly advisory retainer with an overage line.
- **Don't:** Hourly billing (owned by /templates/consulting-hourly-invoice); general consulting fields (/templates/consulting).

### B19-sv · /templates/social-media-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [social media retainer invoice](../billing.md#b19--templatessocial-media-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "social media retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly social media retainers: the management fee, what's included (posts, platforms, reports), ad spend billed separately as a pass-through, extras (shoots, campaigns). Sample: a monthly retainer with ad spend on its own line.
- **Don't:** General social media manager invoice fields (owned by /templates/social-media-management).

### B20-sv · /templates/web-development-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [website maintenance retainer invoice](../billing.md#b20--templatesweb-development-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "website maintenance retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Website maintenance retainers: hosting, updates and backups, a number of support hours, response times, extra hours at a set rate; billed monthly by duplicating the last invoice. Sample: a monthly care plan.
- **Don't:** Project milestones (owned by /templates/web-development-milestone-invoice); general web development fields (/templates/web-development).

## B21–B40 in Swedish

[ ] Billing types II · 0/20 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B21-sv · /templates/tattoo-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [tattoo deposit invoice](../billing.md#b21--templatestattoo-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "tattoo deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The booking deposit, non-refundable terms, applied to the final session.
- **Don't:** General fields of the trade (owned by /templates/tattoo): one sentence and a link.

### B22-sv · /templates/cake-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [cake deposit invoice](../billing.md#b22--templatescake-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "cake deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The order deposit, the final design date, delivery balance.
- **Don't:** General fields of the trade (owned by /templates/bakery): one sentence and a link.

### B23-sv · /templates/band-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [band deposit invoice](../billing.md#b23--templatesband-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "band deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Holding the date, the balance before the gig, cancellation.
- **Don't:** General fields of the trade (owned by /templates/musician): one sentence and a link.

### B24-sv · /templates/event-planner-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [event planner deposit invoice](../billing.md#b24--templatesevent-planner-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "event planner deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The retainer at booking, payment schedule to the event.
- **Don't:** General fields of the trade (owned by /templates/event-planning): one sentence and a link.

### B25-sv · /templates/florist-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [wedding florist deposit invoice](../billing.md#b25--templatesflorist-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "wedding florist deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit, final counts, price changes for seasonal flowers.
- **Don't:** General fields of the trade (owned by /templates/florist): one sentence and a link.

### B26-sv · /templates/makeup-artist-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [makeup artist deposit invoice](../billing.md#b26--templatesmakeup-artist-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "makeup artist deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The bridal booking deposit, trial, balance on the day.
- **Don't:** General fields of the trade (owned by /templates/makeup-artist): one sentence and a link.

### B27-sv · /templates/interior-design-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [interior design retainer invoice](../billing.md#b27--templatesinterior-design-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "interior design retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The retainer applied to hours, procurement deposits.
- **Don't:** General fields of the trade (owned by /templates/interior-design): one sentence and a link.

### B28-sv · /templates/app-development-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [app development milestone invoice](../billing.md#b28--templatesapp-development-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "app development milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Milestones by build stage, acceptance, app store launch.
- **Don't:** General fields of the trade (owned by /templates/app-development): one sentence and a link.

### B29-sv · /templates/remodeling-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [remodeling progress invoice](../billing.md#b29--templatesremodeling-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "remodeling progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Stages (demo, rough-in, finishes), change orders, retainage.
- **Don't:** General fields of the trade (owned by /templates/remodeling): one sentence and a link.

### B30-sv · /templates/change-order-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [construction change order invoice](../billing.md#b30--templateschange-order-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "construction change order invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): What changed, the price and time impact, signed approval before work.
- **Don't:** General fields of the trade (owned by /templates/construction): one sentence and a link.

### B31-sv · /templates/managed-it-services-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [managed it services invoice](../billing.md#b31--templatesmanaged-it-services-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "managed it services invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per device or user per month, included hours, projects extra; duplicate monthly.
- **Don't:** General fields of the trade (owned by /templates/it-services): one sentence and a link.

### B32-sv · /templates/tutoring-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [tutoring package invoice](../billing.md#b32--templatestutoring-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "tutoring package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Prepaid packages, sessions used, expiry.
- **Don't:** General fields of the trade (owned by /templates/tutoring): one sentence and a link.

### B33-sv · /templates/house-cleaning-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [house cleaning hourly invoice](../billing.md#b33--templateshouse-cleaning-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "house cleaning hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hours per cleaner, minimums, supplies.
- **Don't:** General fields of the trade (owned by /templates/cleaning-services): one sentence and a link.

### B34-sv · /templates/translation-per-word-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [translation per word invoice](../billing.md#b34--templatestranslation-per-word-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "translation per word invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Word counts (source or target), minimum fee, rush.
- **Don't:** General fields of the trade (owned by /templates/translation): one sentence and a link.

### B35-sv · /templates/copywriting-per-word-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [copywriting per word invoice](../billing.md#b35--templatescopywriting-per-word-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "copywriting per word invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per word vs per piece, revisions, kill fee.
- **Don't:** General fields of the trade (owned by /templates/copywriting): one sentence and a link.

### B36-sv · /templates/roofing-labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [roofing labor and materials invoice](../billing.md#b36--templatesroofing-labor-and-materials-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "roofing labor and materials invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Squares, underlayment, flashing, labor, disposal.
- **Don't:** General fields of the trade (owned by /templates/roofing): one sentence and a link.

### B37-sv · /templates/flooring-labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [flooring labor and materials invoice](../billing.md#b37--templatesflooring-labor-and-materials-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "flooring labor and materials invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Square feet of material plus waste, underlayment, labor per sq ft.
- **Don't:** General fields of the trade (owned by /templates/flooring): one sentence and a link.

### B38-sv · /templates/carpentry-labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [carpentry labor and materials invoice](../billing.md#b38--templatescarpentry-labor-and-materials-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "carpentry labor and materials invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Lumber and hardware, labor hours, finish work.
- **Don't:** General fields of the trade (owned by /templates/carpentry): one sentence and a link.

### B39-sv · /templates/painting-labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [painting labor and materials invoice](../billing.md#b39--templatespainting-labor-and-materials-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "painting labor and materials invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Gallons and supplies, labor per room or hour, prep.
- **Don't:** General fields of the trade (owned by /templates/painting): one sentence and a link.

### B40-sv · /templates/monthly-pool-service-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly pool service invoice](../billing.md#b40--templatesmonthly-pool-service-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly pool service invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Weekly visits per month, chemicals, repairs extra; duplicate monthly.
- **Don't:** General fields of the trade (owned by /templates/pool-service): one sentence and a link.

## B41–B60 in Swedish

[ ] Billing types III · 0/19 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B41-sv · /templates/monthly-lawn-care-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly lawn care invoice](../billing.md#b41--templatesmonthly-lawn-care-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly lawn care invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Visits per month, seasonal extras; duplicate monthly.
- **Don't:** General fields of the trade (owned by /templates/landscaping): one sentence and a link.

### B42-sv · /templates/commercial-cleaning-monthly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly cleaning invoice](../billing.md#b42--templatescommercial-cleaning-monthly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly cleaning invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The monthly contract price, extra services, supplies.
- **Don't:** General fields of the trade (owned by /templates/cleaning-services): one sentence and a link.

### B43-sv · /templates/seasonal-snow-removal-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [seasonal snow removal invoice](../billing.md#b43--templatesseasonal-snow-removal-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "seasonal snow removal invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Seasonal contract vs per push, installments.
- **Don't:** General fields of the trade (owned by /templates/snow-removal): one sentence and a link.

### B44-sv · /templates/quarterly-pest-control-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [quarterly pest control invoice](../billing.md#b44--templatesquarterly-pest-control-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "quarterly pest control invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The plan price per quarter, callbacks included.
- **Don't:** General fields of the trade (owned by /templates/pest-control): one sentence and a link.

### B45-sv · /templates/personal-training-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [personal training package invoice](../billing.md#b45--templatespersonal-training-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "personal training package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Prepaid packs, sessions used, expiry.
- **Don't:** General fields of the trade (owned by /templates/personal-training): one sentence and a link.

### B46-sv · /templates/dog-training-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [dog training package invoice](../billing.md#b46--templatesdog-training-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "dog training package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Packages and board-and-train.
- **Don't:** General fields of the trade (owned by /templates/dog-training): one sentence and a link.

### B47-sv · /templates/monthly-music-lesson-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly music lesson invoice](../billing.md#b47--templatesmonthly-music-lesson-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly music lesson invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Lessons per month, missed lessons, recital fees.
- **Don't:** General fields of the trade (owned by /templates/music-lessons): one sentence and a link.

### B48-sv · /templates/photography-final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [photography final invoice](../billing.md#b48--templatesphotography-final-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "photography final invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The balance after the deposit, extras, gallery delivery on payment.
- **Don't:** General fields of the trade (owned by /templates/photography): one sentence and a link.

### B49-sv · /templates/videography-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [videography deposit invoice](../billing.md#b49--templatesvideography-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "videography deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The date-hold deposit, balance before delivery.
- **Don't:** General fields of the trade (owned by /templates/videography): one sentence and a link.

### B50-sv · /templates/catering-final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [catering final invoice](../billing.md#b50--templatescatering-final-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "catering final invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The final headcount, extras, the deposit subtracted.
- **Don't:** General fields of the trade (owned by /templates/catering): one sentence and a link.

### B51-sv · /templates/emergency-plumbing-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [emergency plumbing invoice](../billing.md#b51--templatesemergency-plumbing-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "emergency plumbing invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): After-hours rates, call-out fee, temporary fixes.
- **Don't:** General fields of the trade (owned by /templates/plumbing): one sentence and a link.

### B52-sv · /templates/hvac-maintenance-plan-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [hvac maintenance plan invoice](../billing.md#b52--templateshvac-maintenance-plan-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "hvac maintenance plan invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The yearly plan, visits included, discounts on repairs.
- **Don't:** General fields of the trade (owned by /templates/hvac): one sentence and a link.

### B53-sv · /templates/electrician-service-call-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [electrician service call invoice](../billing.md#b53--templateselectrician-service-call-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "electrician service call invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The trip and diagnostic fee, credited if hired.
- **Don't:** General fields of the trade (owned by /templates/electrician): one sentence and a link.

### B54-sv · /templates/appliance-repair-service-call-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [appliance repair service call invoice](../billing.md#b54--templatesappliance-repair-service-call-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "appliance repair service call invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The diagnostic fee, parts ordered, second visit.
- **Don't:** General fields of the trade (owned by /templates/appliance-repair): one sentence and a link.

### B55-sv · /templates/emergency-locksmith-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [emergency locksmith invoice](../billing.md#b55--templatesemergency-locksmith-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "emergency locksmith invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): After-hours call-out, lockout vs rekey.
- **Don't:** General fields of the trade (owned by /templates/locksmith): one sentence and a link.

### B56-sv · /templates/moving-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [moving hourly invoice](../billing.md#b56--templatesmoving-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "moving hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Crew size × hours, travel time, minimums.
- **Don't:** General fields of the trade (owned by /templates/moving): one sentence and a link.

### B58-sv · /templates/graphic-design-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [graphic design deposit invoice](../billing.md#b58--templatesgraphic-design-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "graphic design deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways. 50% upfront, rounds of revisions, files on final payment.
- **Don't:** General fields of the trade (owned by /templates/freelance-design): one sentence and a link.

### B59-sv · /templates/virtual-assistant-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [virtual assistant retainer invoice](../billing.md#b59--templatesvirtual-assistant-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "virtual assistant retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly hours block, rollover, overage.
- **Don't:** General fields of the trade (owned by /templates/virtual-assistant): one sentence and a link.

### B60-sv · /templates/handyman-labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [handyman labor and materials invoice](../billing.md#b60--templateshandyman-labor-and-materials-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "handyman labor and materials invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Materials at cost or markup, labor, trip charge.
- **Don't:** General fields of the trade (owned by /templates/handyman): one sentence and a link.

## B61–B71 in Swedish

[ ] Deposits: events and weddings · 0/11 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B61-sv · /templates/photo-booth-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [photo booth deposit invoice](../billing.md#b61--templatesphoto-booth-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "photo booth deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A booking fee to hold the date (often non-refundable), the package and hours, the balance due before the event; the final invoice subtracts it.
- **Don't:** General fields of the trade (owned by /templates/photo-booth-rental): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B62-sv · /templates/party-rental-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [party rental deposit invoice](../billing.md#b62--templatesparty-rental-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "party rental deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Two kinds on one page: the booking deposit (part of the price) and the refundable damage deposit (returned after inspection) — keep them on separate lines.
- **Don't:** General fields of the trade (owned by /templates/party-rentals): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B63-sv · /templates/wedding-officiant-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [wedding officiant deposit invoice](../billing.md#b63--templateswedding-officiant-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "wedding officiant deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The retainer that holds the date, rehearsal and travel later, the balance before the ceremony.
- **Don't:** General fields of the trade (owned by /templates/wedding-officiant): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B64-sv · /templates/venue-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [venue deposit invoice](../billing.md#b64--templatesvenue-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "venue deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Booking deposit plus the separate security deposit, the payment schedule to the event date, cancellation tiers by notice.
- **Don't:** General fields of the trade (owned by /templates/event-venue): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B65-sv · /templates/balloon-decor-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [balloon decor deposit invoice](../billing.md#b65--templatesballoon-decor-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "balloon decor deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways and the general /templates/deposit-invoice up. 50% to book (balloons are bought for the order), the balance on delivery, rush orders paid in full.
- **Don't:** General fields of the trade (owned by /templates/balloon-decor): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B66-sv · /templates/bartending-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [bartending deposit invoice](../billing.md#b66--templatesbartending-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "bartending deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit to book staff and stock, the final headcount date, the balance before the event.
- **Don't:** General fields of the trade (owned by /templates/bartending): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B67-sv · /templates/limo-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [limo deposit invoice](../billing.md#b67--templateslimo-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "limo deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit on the booking, the minimum hours, overtime and gratuity settled on the final invoice.
- **Don't:** General fields of the trade (owned by /templates/limousine-service): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B68-sv · /templates/entertainer-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [entertainer deposit invoice](../billing.md#b68--templatesentertainer-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "entertainer deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit in the performance agreement, cancellation by notice period, the balance on the day.
- **Don't:** General fields of the trade (owned by /templates/entertainer): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B69-sv · /templates/food-truck-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [food truck deposit invoice](../billing.md#b69--templatesfood-truck-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "food truck deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit against the guaranteed minimum, the final guest count, the balance after the event if sales fall short.
- **Don't:** General fields of the trade (owned by /templates/food-truck): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B70-sv · /templates/event-decor-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [event decor deposit invoice](../billing.md#b70--templatesevent-decor-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "event decor deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A design fee plus a deposit for rentals and florals bought in, the balance two weeks before, the damage deposit on its own line.
- **Don't:** General fields of the trade (owned by /templates/event-decor): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B71-sv · /templates/wedding-invitation-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [wedding invitation deposit invoice](../billing.md#b71--templateswedding-invitation-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "wedding invitation deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The design deposit, approval of proofs, the balance before printing (custom print can't be returned).
- **Don't:** General fields of the trade (owned by /templates/wedding-invitations): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

## B72–B84 in Swedish

[ ] Deposits: custom and made-to-order work · 0/13 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B72-sv · /templates/custom-furniture-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [custom furniture deposit invoice](../billing.md#b72--templatescustom-furniture-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "custom furniture deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways and the general /templates/deposit-invoice up. 50% to start (materials), the balance on delivery, changes after approval as a new line.
- **Don't:** General fields of the trade (owned by /templates/custom-furniture): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B73-sv · /templates/cabinet-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [cabinet deposit invoice](../billing.md#b73--templatescabinet-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "cabinet deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit when the cabinets are ordered (lead time), the install invoice later, what happens if the client cancels after ordering.
- **Don't:** General fields of the trade (owned by /templates/cabinet-installation): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B74-sv · /templates/countertop-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [countertop deposit invoice](../billing.md#b74--templatescountertop-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "countertop deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit at templating (the slab is cut to size), the balance at install, sinks and cut-outs on the final invoice.
- **Don't:** General fields of the trade (owned by /templates/countertop-installation): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B75-sv · /templates/upholstery-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [upholstery deposit invoice](../billing.md#b75--templatesupholstery-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "upholstery deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit for fabric ordered for the piece, the balance on pickup, customer's own material (COM) without a fabric deposit.
- **Don't:** General fields of the trade (owned by /templates/upholstery): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B76-sv · /templates/custom-jewelry-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [custom jewelry deposit invoice](../billing.md#b76--templatescustom-jewelry-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "custom jewelry deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit covers metal and stones at the day's price, the balance on collection; a resize later as its own invoice.
- **Don't:** General fields of the trade (owned by /templates/jewelry-making): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B77-sv · /templates/fashion-design-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [fashion design deposit invoice](../billing.md#b77--templatesfashion-design-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "fashion design deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Fabric and pattern deposit, fittings, the balance at the final fitting.
- **Don't:** General fields of the trade (owned by /templates/fashion-design): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B78-sv · /templates/art-commission-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [art commission deposit invoice](../billing.md#b78--templatesart-commission-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "art commission deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A non-refundable deposit to start the sketch, the balance before delivery of the final file or piece, usage rights stated.
- **Don't:** General fields of the trade (owned by /templates/art-commission): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B79-sv · /templates/mural-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [mural deposit invoice](../billing.md#b79--templatesmural-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "mural deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The design fee and a deposit for paint and lifts, stage payments on large walls.
- **Don't:** General fields of the trade (owned by /templates/muralist): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B80-sv · /templates/taxidermy-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [taxidermy deposit invoice](../billing.md#b80--templatestaxidermy-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "taxidermy deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposit at drop-off (often half), the balance at pickup, the unclaimed-mount policy.
- **Don't:** General fields of the trade (owned by /templates/taxidermy): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B81-sv · /templates/sign-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [sign deposit invoice](../billing.md#b81--templatessign-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "sign deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways and the general /templates/deposit-invoice up. 50% on approval of the proof, the balance on install; permits and install on the final invoice.
- **Don't:** General fields of the trade (owned by /templates/sign-making): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B82-sv · /templates/window-treatment-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [blinds deposit invoice](../billing.md#b82--templateswindow-treatment-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "blinds deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit when custom blinds or shutters are ordered (made to measure), the balance at install.
- **Don't:** General fields of the trade (owned by /templates/window-treatments): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B83-sv · /templates/screen-printing-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [screen printing deposit invoice](../billing.md#b83--templatesscreen-printing-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "screen printing deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same fields as the templates, with a sample invoice of this billing type; link the trade's template both ways and the general /templates/deposit-invoice up. 50% on order (blanks bought), screens and setup in the deposit, the balance on pickup.
- **Don't:** General fields of the trade (owned by /templates/screen-printing): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B84-sv · /templates/embroidery-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [embroidery deposit invoice](../billing.md#b84--templatesembroidery-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "embroidery deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Digitising fee and a deposit on bulk orders, the balance on delivery.
- **Don't:** General fields of the trade (owned by /templates/embroidery): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

## B85–B97 in Swedish

[ ] Deposits: contractors and home projects · 0/13 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B85-sv · /templates/fence-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [fence deposit invoice](../billing.md#b85--templatesfence-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "fence deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit for materials before the dig, the balance on completion; state limits on contractor deposits (hedge: some states cap them).
- **Don't:** General fields of the trade (owned by /templates/fence-installation): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B86-sv · /templates/deck-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [deck deposit invoice](../billing.md#b86--templatesdeck-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "deck deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposit for lumber or composite, permit fees on their own line, the balance after inspection; deposit caps by state (hedge).
- **Don't:** General fields of the trade (owned by /templates/deck-building): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B87-sv · /templates/solar-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [solar deposit invoice](../billing.md#b87--templatessolar-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "solar deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit at signing, equipment ordered, the next payments at install and at interconnection (progress: link /templates/solar-installation-progress-invoice).
- **Don't:** General fields of the trade (owned by /templates/solar-installation): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B88-sv · /templates/siding-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [siding deposit invoice](../billing.md#b88--templatessiding-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "siding deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit for siding ordered by colour, the balance at completion, rot repairs found on site as a new line.
- **Don't:** General fields of the trade (owned by /templates/siding): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B89-sv · /templates/window-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [window installation deposit invoice](../billing.md#b89--templateswindow-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "window installation deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Custom windows are made to measure: the deposit at ordering, the balance after install.
- **Don't:** General fields of the trade (owned by /templates/window-installation): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B90-sv · /templates/remodeling-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [remodeling deposit invoice](../billing.md#b90--templatesremodeling-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "remodeling deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit at signing (and its legal cap, hedge), then progress invoices (link the remodeling progress page).
- **Don't:** General fields of the trade (owned by /templates/remodeling): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B91-sv · /templates/flooring-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [flooring deposit invoice](../billing.md#b91--templatesflooring-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "flooring deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit for material ordered by the box, the balance after install, leftover boxes returned or left.
- **Don't:** General fields of the trade (owned by /templates/flooring): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B92-sv · /templates/tile-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [tile deposit invoice](../billing.md#b92--templatestile-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "tile deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A deposit for tile and setting materials, the balance at grout and seal.
- **Don't:** General fields of the trade (owned by /templates/tile-installation): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B93-sv · /templates/foundation-repair-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [foundation repair deposit invoice](../billing.md#b93--templatesfoundation-repair-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "foundation repair deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposit at signing, engineer's report and permits, the balance after the final inspection.
- **Don't:** General fields of the trade (owned by /templates/foundation-repair): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B94-sv · /templates/well-drilling-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [well drilling deposit invoice](../billing.md#b94--templateswell-drilling-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "well drilling deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A mobilisation deposit, drilling billed per foot after, what's owed for a dry hole.
- **Don't:** General fields of the trade (owned by /templates/well-drilling): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B95-sv · /templates/masonry-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [masonry deposit invoice](../billing.md#b95--templatesmasonry-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "masonry deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposit for stone or brick ordered, the balance at completion, weather delays.
- **Don't:** General fields of the trade (owned by /templates/masonry): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B96-sv · /templates/concrete-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [concrete deposit invoice](../billing.md#b96--templatesconcrete-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "concrete deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposit before the pour (the plant is booked), the balance after finishing, extra yards on the final invoice.
- **Don't:** General fields of the trade (owned by /templates/concrete): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

### B97-sv · /templates/paving-deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [paving deposit invoice](../billing.md#b97--templatespaving-deposit-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "paving deposit invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Deposit to book the crew and plant, the balance on completion, tonnage over the estimate.
- **Don't:** General fields of the trade (owned by /templates/asphalt-paving): one sentence and a link; the general deposit invoice (owned by /templates/deposit-invoice); any claim that the app tracks deposits, payments or time.

## B98–B106 in Swedish

[ ] Progress invoices: construction trades · 0/9 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B98-sv · /templates/excavation-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [excavation progress invoice](../billing.md#b98--templatesexcavation-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "excavation progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly progress by quantities (cubic yards moved, trench feet) against the schedule of values, retainage.
- **Don't:** General fields of the trade (owned by /templates/excavation): one sentence and a link; the general progress invoice (owned by /templates/construction-progress-invoice); any claim that the app tracks deposits, payments or time.

### B99-sv · /templates/solar-installation-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [solar progress invoice](../billing.md#b99--templatessolar-installation-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "solar progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Payments at equipment delivery, install complete and interconnection approval; link the deposit page.
- **Don't:** General fields of the trade (owned by /templates/solar-installation): one sentence and a link; the general progress invoice (owned by /templates/construction-progress-invoice); any claim that the app tracks deposits, payments or time.

### B100-sv · /templates/drywall-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [drywall progress invoice](../billing.md#b100--templatesdrywall-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "drywall progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Billing a GC by stage (hang, tape, finish) or % complete, retainage held, change orders by number.
- **Don't:** General fields of the trade (owned by /templates/drywall): one sentence and a link; the general progress invoice (owned by /templates/construction-progress-invoice); any claim that the app tracks deposits, payments or time.

### B101-sv · /templates/insulation-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [insulation progress invoice](../billing.md#b101--templatesinsulation-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "insulation progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Commercial jobs billed by area completed per floor, retainage.
- **Don't:** General fields of the trade (owned by /templates/insulation): one sentence and a link; the general progress invoice (owned by /templates/construction-progress-invoice); any claim that the app tracks deposits, payments or time.

### B102-sv · /templates/carpentry-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [carpentry progress invoice](../billing.md#b102--templatescarpentry-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "carpentry progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Framing and finish carpentry billed by stage to a GC or owner, retainage, extras by change order.
- **Don't:** General fields of the trade (owned by /templates/carpentry): one sentence and a link; the general progress invoice (owned by /templates/construction-progress-invoice); any claim that the app tracks deposits, payments or time.

### B103-sv · /templates/window-installation-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [window installation progress invoice](../billing.md#b103--templateswindow-installation-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "window installation progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Larger jobs: windows installed per floor or elevation against the contract, retainage.
- **Don't:** General fields of the trade (owned by /templates/window-installation): one sentence and a link; the general progress invoice (owned by /templates/construction-progress-invoice); any claim that the app tracks deposits, payments or time.

### B104-sv · /templates/architect-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [architect progress invoice](../billing.md#b104--templatesarchitect-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "architect progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Fees by phase completed (schematic, design development, documents, construction administration) as % of the fee, reimbursables.
- **Don't:** General fields of the trade (owned by /templates/architect): one sentence and a link; the general progress invoice (owned by /templates/construction-progress-invoice); any claim that the app tracks deposits, payments or time.

### B105-sv · /templates/demolition-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [demolition progress invoice](../billing.md#b105--templatesdemolition-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "demolition progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Progress by area demolished and loads hauled, abatement subcontracted, retainage.
- **Don't:** General fields of the trade (owned by /templates/demolition): one sentence and a link; the general progress invoice (owned by /templates/construction-progress-invoice); any claim that the app tracks deposits, payments or time.

### B106-sv · /templates/fabrication-progress-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [steel fabrication progress invoice](../billing.md#b106--templatesfabrication-progress-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "steel fabrication progress invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Fabrication jobs billed at drawings approved, material purchased, fabrication and erection complete.
- **Don't:** General fields of the trade (owned by /templates/welding): one sentence and a link; the general progress invoice (owned by /templates/construction-progress-invoice); any claim that the app tracks deposits, payments or time.

## B107–B119 in Swedish

[ ] Monthly and seasonal service invoices · 0/13 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B107-sv · /templates/monthly-window-cleaning-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly window cleaning invoice](../billing.md#b107--templatesmonthly-window-cleaning-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly window cleaning invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Storefront routes: visits that month, inside or outside, skipped visits credited.
- **Don't:** General fields of the trade (owned by /templates/window-cleaning): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B108-sv · /templates/monthly-dog-walking-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly dog walking invoice](../billing.md#b108--templatesmonthly-dog-walking-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly dog walking invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Walks per week × weeks, holidays at a higher rate, cancellations inside 24 hours charged.
- **Don't:** General fields of the trade (owned by /templates/pet-sitting): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B109-sv · /templates/monthly-aquarium-maintenance-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly aquarium maintenance invoice](../billing.md#b109--templatesmonthly-aquarium-maintenance-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly aquarium maintenance invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Visits per month, livestock and supplies as extra lines, emergency visits.
- **Don't:** General fields of the trade (owned by /templates/aquarium-maintenance): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B110-sv · /templates/monthly-bookkeeping-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly bookkeeping invoice](../billing.md#b110--templatesmonthly-bookkeeping-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly bookkeeping invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A fixed monthly fee by transaction volume, catch-up work and payroll as extras.
- **Don't:** General fields of the trade (owned by /templates/bookkeeping): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B111-sv · /templates/monthly-seo-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly seo invoice](../billing.md#b111--templatesmonthly-seo-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly seo invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A monthly SEO fee, the deliverables that month, tools passed on, minimum terms.
- **Don't:** General fields of the trade (owned by /templates/seo-services): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B112-sv · /templates/monthly-security-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly security guard invoice](../billing.md#b112--templatesmonthly-security-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly security guard invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hours per post per month at the contract rate, overtime and holiday rates, extra cover.
- **Don't:** General fields of the trade (owned by /templates/security-guard): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B113-sv · /templates/property-management-fee-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [property management fee invoice](../billing.md#b113--templatesproperty-management-fee-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "property management fee invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The monthly fee (% of rent collected), leasing fees, maintenance coordination; the owner statement vs the invoice.
- **Don't:** General fields of the trade (owned by /templates/property-management): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B114-sv · /templates/monthly-dance-class-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly dance class invoice](../billing.md#b114--templatesmonthly-dance-class-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly dance class invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Monthly tuition by classes per week, costume and recital fees, sibling discounts.
- **Don't:** General fields of the trade (owned by /templates/dance-lessons): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B115-sv · /templates/weekly-home-care-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [weekly home care invoice](../billing.md#b115--templatesweekly-home-care-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "weekly home care invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hours per day × days that week, overnight and weekend rates, mileage for errands.
- **Don't:** General fields of the trade (owned by /templates/caregiving): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B116-sv · /templates/monthly-courier-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly courier invoice](../billing.md#b116--templatesmonthly-courier-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "monthly courier invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Business accounts: every delivery that month by date and job number, waiting time, fuel surcharge.
- **Don't:** General fields of the trade (owned by /templates/courier): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B117-sv · /templates/pool-opening-closing-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [pool opening and closing invoice](../billing.md#b117--templatespool-opening-closing-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "pool opening and closing invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Seasonal openings and closings with chemicals, cover handling and winterising; the monthly service invoice is separate.
- **Don't:** General fields of the trade (owned by /templates/pool-service): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B118-sv · /templates/sprinkler-winterization-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [sprinkler winterization invoice](../billing.md#b118--templatessprinkler-winterization-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "sprinkler winterization invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Autumn blowouts and spring start-ups per zone, repairs found during start-up.
- **Don't:** General fields of the trade (owned by /templates/irrigation): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

### B119-sv · /templates/seasonal-gutter-cleaning-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [seasonal gutter cleaning invoice](../billing.md#b119--templatesseasonal-gutter-cleaning-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "seasonal gutter cleaning invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Spring and autumn visits on one contract, billed per visit or as a season.
- **Don't:** General fields of the trade (owned by /templates/gutter-cleaning): one sentence and a link; the general monthly invoice (owned by /templates/monthly-invoice); any claim that the app tracks deposits, payments or time.

## B120–B129 in Swedish

[ ] Retainers for professionals · 0/10 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B120-sv · /templates/legal-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [legal retainer invoice](../billing.md#b120--templateslegal-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "legal retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The advance into the client trust account, hours drawn against it, the remaining balance, replenishment; trust-account rules hedged (no legal advice).
- **Don't:** General fields of the trade (owned by /templates/attorney): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

### B121-sv · /templates/marketing-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [marketing agency retainer invoice](../billing.md#b121--templatesmarketing-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "marketing agency retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A monthly retainer for a scope of work, out-of-scope work billed apart, ad spend not included.
- **Don't:** General fields of the trade (owned by /templates/marketing-agency): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

### B122-sv · /templates/copywriting-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [copywriting retainer invoice](../billing.md#b122--templatescopywriting-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "copywriting retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A monthly number of pieces or words, unused work by the agreement, rush pieces as extras.
- **Don't:** General fields of the trade (owned by /templates/copywriting): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

### B123-sv · /templates/graphic-design-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [graphic design retainer invoice](../billing.md#b123--templatesgraphic-design-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "graphic design retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A monthly block of design hours, the request log as lines, overage at the hourly rate.
- **Don't:** General fields of the trade (owned by /templates/freelance-design): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

### B124-sv · /templates/ux-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [ux design retainer invoice](../billing.md#b124--templatesux-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "ux design retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A monthly product-design retainer by days per month, sprints delivered.
- **Don't:** General fields of the trade (owned by /templates/ux-design): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

### B125-sv · /templates/private-investigator-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [private investigator retainer invoice](../billing.md#b125--templatesprivate-investigator-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "private investigator retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The retainer paid upfront, hours and expenses drawn against it, the refund of what's unused.
- **Don't:** General fields of the trade (owned by /templates/private-investigator): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

### B126-sv · /templates/financial-advisor-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [financial advisor retainer invoice](../billing.md#b126--templatesfinancial-advisor-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "financial advisor retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A flat annual or quarterly retainer for ongoing planning (duplicate each quarter), what's included.
- **Don't:** General fields of the trade (owned by /templates/financial-advisor): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

### B127-sv · /templates/accounting-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [accounting retainer invoice](../billing.md#b127--templatesaccounting-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "accounting retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A fixed monthly fee for a package (bookkeeping review, payroll, quarterly returns), out-of-scope work billed apart.
- **Don't:** General fields of the trade (owned by /templates/accounting): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

### B128-sv · /templates/expert-witness-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [expert witness retainer invoice](../billing.md#b128--templatesexpert-witness-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "expert witness retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The initial retainer, hours drawn against it, deposition and trial days at their own rates.
- **Don't:** General fields of the trade (owned by /templates/expert-witness): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

### B129-sv · /templates/video-editing-retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [video editing retainer invoice](../billing.md#b129--templatesvideo-editing-retainer-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "video editing retainer invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A monthly number of videos for a creator or brand, extra revisions, rush edits.
- **Don't:** General fields of the trade (owned by /templates/video-editing): one sentence and a link; the general retainer invoice (owned by /templates/retainer-invoice); any claim that the app tracks deposits, payments or time.

## B130–B136 in Swedish

[ ] Hourly billing for professionals and care · 0/7 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B130-sv · /templates/legal-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [legal hourly invoice](../billing.md#b130--templateslegal-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "legal hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Time entries in tenths of an hour per task, rates per lawyer or paralegal, costs advanced; link the retainer page.
- **Don't:** General fields of the trade (owned by /templates/attorney): one sentence and a link; the general hourly invoice (owned by /templates/hourly-invoice); any claim that the app tracks deposits, payments or time.

### B131-sv · /templates/it-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [it services hourly invoice](../billing.md#b131--templatesit-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "it services hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Ad hoc support by the hour with a minimum, remote vs on-site rates, after-hours.
- **Don't:** General fields of the trade (owned by /templates/it-services): one sentence and a link; the general hourly invoice (owned by /templates/hourly-invoice); any claim that the app tracks deposits, payments or time.

### B132-sv · /templates/translation-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [translation hourly invoice](../billing.md#b132--templatestranslation-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "translation hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Work that isn't per word (editing, review, DTP, project management) by the hour; link the per-word page.
- **Don't:** General fields of the trade (owned by /templates/translation): one sentence and a link; the general hourly invoice (owned by /templates/hourly-invoice); any claim that the app tracks deposits, payments or time.

### B133-sv · /templates/video-editing-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [video editing hourly invoice](../billing.md#b133--templatesvideo-editing-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "video editing hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Edit hours by day, revision rounds included, render and export time.
- **Don't:** General fields of the trade (owned by /templates/video-editing): one sentence and a link; the general hourly invoice (owned by /templates/hourly-invoice); any claim that the app tracks deposits, payments or time.

### B134-sv · /templates/home-care-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [home care hourly invoice](../billing.md#b134--templateshome-care-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "home care hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hours per visit with a minimum, rates by time of day, mileage; link the weekly page.
- **Don't:** General fields of the trade (owned by /templates/caregiving): one sentence and a link; the general hourly invoice (owned by /templates/hourly-invoice); any claim that the app tracks deposits, payments or time.

### B135-sv · /templates/data-analysis-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [data analysis hourly invoice](../billing.md#b135--templatesdata-analysis-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "data analysis hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hours per task (cleaning, modelling, dashboards), meetings, tools passed on.
- **Don't:** General fields of the trade (owned by /templates/data-analysis): one sentence and a link; the general hourly invoice (owned by /templates/hourly-invoice); any claim that the app tracks deposits, payments or time.

### B136-sv · /templates/ux-design-hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [ux design hourly invoice](../billing.md#b136--templatesux-design-hourly-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "ux design hourly invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hours per phase (research, wireframes, testing), workshops at a day rate.
- **Don't:** General fields of the trade (owned by /templates/ux-design): one sentence and a link; the general hourly invoice (owned by /templates/hourly-invoice); any claim that the app tracks deposits, payments or time.

## B137–B146 in Swedish

[ ] Packages: lessons, wellness and coaching · 0/10 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B137-sv · /templates/swim-lesson-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [swim lesson package invoice](../billing.md#b137--templatesswim-lesson-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "swim lesson package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A block of lessons paid upfront, make-ups for missed lessons, pool fees.
- **Don't:** General fields of the trade (owned by /templates/swim-lessons): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B138-sv · /templates/yoga-class-pack-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [yoga class pack invoice](../billing.md#b138--templatesyoga-class-pack-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "yoga class pack invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Class packs and private series, expiry dates, studio vs private.
- **Don't:** General fields of the trade (owned by /templates/yoga): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B139-sv · /templates/massage-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [massage package invoice](../billing.md#b139--templatesmassage-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "massage package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Prepaid series (5 or 10 sessions) at a discount, expiry, sessions used so far.
- **Don't:** General fields of the trade (owned by /templates/massage-therapy): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B140-sv · /templates/driving-lesson-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [driving lesson package invoice](../billing.md#b140--templatesdriving-lesson-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "driving lesson package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Blocks of lessons, the test-day fee, missed-lesson charges.
- **Don't:** General fields of the trade (owned by /templates/driving-instructor): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B141-sv · /templates/riding-lesson-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [riding lesson package invoice](../billing.md#b141--templatesriding-lesson-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "riding lesson package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Lesson blocks, school horse vs own horse, expiry.
- **Don't:** General fields of the trade (owned by /templates/horse-riding-lessons): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B142-sv · /templates/nutrition-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [nutrition package invoice](../billing.md#b142--templatesnutrition-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "nutrition package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A programme (assessment + follow-ups + meal plans) in one or more payments.
- **Don't:** General fields of the trade (owned by /templates/nutrition): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B143-sv · /templates/facial-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [facial package invoice](../billing.md#b143--templatesfacial-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "facial package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Treatment series (peels, microneedling) paid upfront, products separate.
- **Don't:** General fields of the trade (owned by /templates/esthetician): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B144-sv · /templates/coaching-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [sports coaching package invoice](../billing.md#b144--templatescoaching-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "sports coaching package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Private sessions in blocks, team clinics per player.
- **Don't:** General fields of the trade (owned by /templates/sports-coaching): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B145-sv · /templates/language-lesson-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [language lesson package invoice](../billing.md#b145--templateslanguage-lesson-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "language lesson package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Lesson blocks, company courses per participant, materials.
- **Don't:** General fields of the trade (owned by /templates/language-lessons): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B146-sv · /templates/physiotherapy-package-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [physiotherapy package invoice](../billing.md#b146--templatesphysiotherapy-package-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "physiotherapy package invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A treatment plan of sessions paid upfront, health-insurance claims per session (hedge).
- **Don't:** General fields of the trade (owned by /templates/physiotherapy): one sentence and a link; the general package invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

## B147–B157 in Swedish

[ ] Service calls, emergencies and insurance jobs · 0/11 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B147-sv · /templates/garage-door-service-call-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [garage door service call invoice](../billing.md#b147--templatesgarage-door-service-call-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "garage door service call invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The service call fee, credited if repaired, parts, after-hours rates.
- **Don't:** General fields of the trade (owned by /templates/garage-door-repair): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B148-sv · /templates/emergency-towing-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [emergency towing invoice](../billing.md#b148--templatesemergency-towing-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "emergency towing invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hook-up fee, mileage, after-hours and winching, motor club or insurance billing.
- **Don't:** General fields of the trade (owned by /templates/towing): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B149-sv · /templates/emergency-tree-removal-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [emergency tree removal invoice](../billing.md#b149--templatesemergency-tree-removal-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "emergency tree removal invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Storm call-outs at emergency rates, crane and crew hours, insurance claims (hedge).
- **Don't:** General fields of the trade (owned by /templates/tree-service): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B150-sv · /templates/emergency-drain-cleaning-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [emergency drain cleaning invoice](../billing.md#b150--templatesemergency-drain-cleaning-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "emergency drain cleaning invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): After-hours call-outs, the trip fee, camera inspection offered after.
- **Don't:** General fields of the trade (owned by /templates/drain-cleaning): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B151-sv · /templates/emergency-board-up-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [emergency board up invoice](../billing.md#b151--templatesemergency-board-up-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "emergency board up invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Board-up after a break-in or storm, the return visit to glaze, insurance billing.
- **Don't:** General fields of the trade (owned by /templates/glazier): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B152-sv · /templates/refrigeration-service-call-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [refrigeration service call invoice](../billing.md#b152--templatesrefrigeration-service-call-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "refrigeration service call invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Emergency rates, refrigerant by weight, stock-loss risk noted, the maintenance contract offered.
- **Don't:** General fields of the trade (owned by /templates/commercial-refrigeration): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B153-sv · /templates/restaurant-equipment-service-call-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [restaurant equipment service call invoice](../billing.md#b153--templatesrestaurant-equipment-service-call-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "restaurant equipment service call invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Trip charge, diagnosis, parts on order and the return visit.
- **Don't:** General fields of the trade (owned by /templates/restaurant-equipment-repair): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B154-sv · /templates/field-service-call-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [field service call invoice](../billing.md#b154--templatesfield-service-call-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "field service call invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Travel time both ways, the service truck rate, labor on site, parts.
- **Don't:** General fields of the trade (owned by /templates/heavy-equipment-repair): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B155-sv · /templates/call-out-charge-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [call out charge invoice](../billing.md#b155--templatescall-out-charge-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "call out charge invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The call-out charge (UK), the first hour, parts, out-of-hours rates.
- **Don't:** General fields of the trade (owned by /templates/gas-engineer): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B156-sv · /templates/water-damage-insurance-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [water damage insurance invoice](../billing.md#b156--templateswater-damage-insurance-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "water damage insurance invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Emergency extraction, drying equipment per day, the claim number, the deductible and the insurer's share on one invoice.
- **Don't:** General fields of the trade (owned by /templates/water-damage-restoration): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B157-sv · /templates/mold-remediation-insurance-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [mold remediation insurance invoice](../billing.md#b157--templatesmold-remediation-insurance-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "mold remediation insurance invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Containment and removal, testing, the claim number and what the policy covers (hedge).
- **Don't:** General fields of the trade (owned by /templates/mold-remediation): one sentence and a link; the general service call invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

## B158–B166 in Swedish

[ ] Milestones: creative, tech and engineering projects · 0/9 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B158-sv · /templates/game-development-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [game development milestone invoice](../billing.md#b158--templatesgame-development-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "game development milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Publisher milestones (prototype, alpha, beta, gold), acceptance criteria, advances against royalties (hedge).
- **Don't:** General fields of the trade (owned by /templates/game-development): one sentence and a link; the general milestone invoice (owned by /templates/milestone-invoice); any claim that the app tracks deposits, payments or time.

### B159-sv · /templates/animation-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [animation milestone invoice](../billing.md#b159--templatesanimation-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "animation milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Script and storyboard, animatic, final animation, delivery; revisions per stage.
- **Don't:** General fields of the trade (owned by /templates/animation): one sentence and a link; the general milestone invoice (owned by /templates/milestone-invoice); any claim that the app tracks deposits, payments or time.

### B160-sv · /templates/film-production-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [film production milestone invoice](../billing.md#b160--templatesfilm-production-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "film production milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Pre-production, shoot, rough cut, final delivery; the production's PO.
- **Don't:** General fields of the trade (owned by /templates/film-production): one sentence and a link; the general milestone invoice (owned by /templates/milestone-invoice); any claim that the app tracks deposits, payments or time.

### B161-sv · /templates/engineering-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [engineering milestone invoice](../billing.md#b161--templatesengineering-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "engineering milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Phases (study, design, permitting, construction support) as % of the fee.
- **Don't:** General fields of the trade (owned by /templates/engineering): one sentence and a link; the general milestone invoice (owned by /templates/milestone-invoice); any claim that the app tracks deposits, payments or time.

### B162-sv · /templates/illustration-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [illustration milestone invoice](../billing.md#b162--templatesillustration-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "illustration milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Book projects: sketches, final art, delivery, the advance and kill fee.
- **Don't:** General fields of the trade (owned by /templates/illustration): one sentence and a link; the general milestone invoice (owned by /templates/milestone-invoice); any claim that the app tracks deposits, payments or time.

### B163-sv · /templates/music-production-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [music production milestone invoice](../billing.md#b163--templatesmusic-production-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "music production milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Pre-production, tracking, mixing, mastering per song or album, points or royalties (hedge).
- **Don't:** General fields of the trade (owned by /templates/music-production): one sentence and a link; the general milestone invoice (owned by /templates/milestone-invoice); any claim that the app tracks deposits, payments or time.

### B164-sv · /templates/marketing-project-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [marketing project milestone invoice](../billing.md#b164--templatesmarketing-project-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "marketing project milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Campaign projects: strategy, creative, launch, report; link the retainer page.
- **Don't:** General fields of the trade (owned by /templates/marketing-agency): one sentence and a link; the general milestone invoice (owned by /templates/milestone-invoice); any claim that the app tracks deposits, payments or time.

### B165-sv · /templates/technical-writing-milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [technical writing milestone invoice](../billing.md#b165--templatestechnical-writing-milestone-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "technical writing milestone invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Outline, first draft, review, final; documentation sets per release.
- **Don't:** General fields of the trade (owned by /templates/technical-writing): one sentence and a link; the general milestone invoice (owned by /templates/milestone-invoice); any claim that the app tracks deposits, payments or time.

### B166-sv · /templates/environmental-consulting-phase-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [environmental consulting phase invoice](../billing.md#b166--templatesenvironmental-consulting-phase-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "environmental consulting phase invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Phase II sampling and lab results, reporting, remediation oversight by phase.
- **Don't:** General fields of the trade (owned by /templates/environmental-consulting): one sentence and a link; the general milestone invoice (owned by /templates/milestone-invoice); any claim that the app tracks deposits, payments or time.

## B167–B173 in Swedish

[ ] Final invoices: events and custom work · 0/7 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B167-sv · /templates/dj-final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [dj final invoice](../billing.md#b167--templatesdj-final-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "dj final invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The balance after the deposit, overtime played on the night, the final invoice before or after the event.
- **Don't:** General fields of the trade (owned by /templates/dj): one sentence and a link; the general final invoice (owned by /templates/final-invoice); any claim that the app tracks deposits, payments or time.

### B168-sv · /templates/event-planner-final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [event planner final invoice](../billing.md#b168--templatesevent-planner-final-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "event planner final invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The planning fee balance, vendor payments passed on, the deposit subtracted.
- **Don't:** General fields of the trade (owned by /templates/event-planning): one sentence and a link; the general final invoice (owned by /templates/final-invoice); any claim that the app tracks deposits, payments or time.

### B169-sv · /templates/florist-final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [florist final invoice](../billing.md#b169--templatesflorist-final-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "florist final invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Final counts two weeks out, the deposit subtracted, rentals and delivery.
- **Don't:** General fields of the trade (owned by /templates/florist): one sentence and a link; the general final invoice (owned by /templates/final-invoice); any claim that the app tracks deposits, payments or time.

### B170-sv · /templates/band-final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [band final invoice](../billing.md#b170--templatesband-final-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "band final invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The balance due on the day, overtime sets, travel.
- **Don't:** General fields of the trade (owned by /templates/musician): one sentence and a link; the general final invoice (owned by /templates/final-invoice); any claim that the app tracks deposits, payments or time.

### B171-sv · /templates/venue-final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [venue final invoice](../billing.md#b171--templatesvenue-final-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "venue final invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The final bill after the event: F&B over the minimum, overtime, damage from the security deposit.
- **Don't:** General fields of the trade (owned by /templates/event-venue): one sentence and a link; the general final invoice (owned by /templates/final-invoice); any claim that the app tracks deposits, payments or time.

### B172-sv · /templates/party-rental-final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [party rental final invoice](../billing.md#b172--templatesparty-rental-final-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "party rental final invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): After pickup: missing or damaged items, late returns, the deposit settled.
- **Don't:** General fields of the trade (owned by /templates/party-rentals): one sentence and a link; the general final invoice (owned by /templates/final-invoice); any claim that the app tracks deposits, payments or time.

### B173-sv · /templates/custom-furniture-final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [custom furniture final invoice](../billing.md#b173--templatescustom-furniture-final-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "custom furniture final invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The balance on delivery, approved changes, delivery and install.
- **Don't:** General fields of the trade (owned by /templates/custom-furniture): one sentence and a link; the general final invoice (owned by /templates/final-invoice); any claim that the app tracks deposits, payments or time.

## B174–B178 in Swedish

[ ] Per-unit billing: per word, mile and minute · 0/5 live in sv

- **For every template (billing type) page:** How this billing type works there (deposit and final invoice rules, VAT on deposits), a sample in the local currency; link the local trade template.

### B174-sv · /templates/proofreading-per-word-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [proofreading per word invoice](../billing.md#b174--templatesproofreading-per-word-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "proofreading per word invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per word or per 1,000 words by level (proofread, copy-edit), turnaround tiers.
- **Don't:** General fields of the trade (owned by /templates/proofreading): one sentence and a link; the general service invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B175-sv · /templates/voice-over-per-word-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [voice over per word invoice](../billing.md#b175--templatesvoice-over-per-word-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "voice over per word invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per word or per finished minute, usage and buyouts, pickups.
- **Don't:** General fields of the trade (owned by /templates/voice-over): one sentence and a link; the general service invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B176-sv · /templates/courier-per-mile-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [courier per mile invoice](../billing.md#b176--templatescourier-per-mile-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "courier per mile invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Per mile with a base fee, waiting time, weight surcharges; link the monthly account page.
- **Don't:** General fields of the trade (owned by /templates/courier): one sentence and a link; the general service invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B177-sv · /templates/towing-per-mile-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [towing per mile invoice](../billing.md#b177--templatestowing-per-mile-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "towing per mile invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hook-up fee + per mile loaded, storage per day; link the emergency page.
- **Don't:** General fields of the trade (owned by /templates/towing): one sentence and a link; the general service invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

### B178-sv · /templates/trucking-rate-per-mile-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [trucking rate per mile invoice](../billing.md#b178--templatestrucking-rate-per-mile-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "trucking rate per mile invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Loaded miles × rate, deadhead, fuel surcharge, detention; the rate confirmation number.
- **Don't:** General fields of the trade (owned by /templates/trucking): one sentence and a link; the general service invoice (owned by /templates/service-invoice); any claim that the app tracks deposits, payments or time.

## D1–D20 in Swedish

[ ] Invoice types: the general documents · 0/14 live in sv

- **For every template (invoice type) page:** This document under that country's rules (the local terms list): what it must show there, the law or tax office as the source with the date checked.

### D1-sv · /templates/deposit-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [deposit invoice template](https://invoicor.com/templates/deposit-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "deposit invoice template"; known local terms: Anzahlungsrechnung (de), aanbetalingsfactuur (nl), facture d'acompte (fr), factura de anticipo (es)
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The general deposit invoice: part of the price before work starts. What it must show (that it's a deposit, the full job price, the share asked, what it secures, when the rest is due, refundable or not), its own invoice number, and how the final invoice subtracts it (a negative line: 'Less deposit, invoice #…'). In many VAT countries VAT is due on the deposit when it's paid (hedge; check the local rule). Sample: 30% of a $4,000 job. A 'by trade' section links the trade deposit pages.
- **Don't:** Trade specifics (the *-deposit-invoice pages); how much to ask (the deposit calculator); any claim that the app tracks deposits (it doesn't).

### D2-sv · /templates/final-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [final invoice template](https://invoicor.com/templates/final-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "final invoice template"; known local terms: Schlussrechnung (de), eindfactuur (nl), facture de solde (fr), factura final (es)
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The last invoice of a job paid in parts: the full price, minus every earlier invoice by number and date (deposit, progress invoices), the balance due, marked 'Final invoice'. Tax only on what's left when earlier invoices already charged it (hedge; Germany's Schlussrechnung rules are strict: the local version). Sample: a $12,000 job after a $3,000 deposit and a $4,500 progress invoice.
- **Don't:** The deposit invoice itself (/templates/deposit-invoice); photography and catering finals (their own pages).

### D3-sv · /templates/milestone-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [milestone invoice template](https://invoicor.com/templates/milestone-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "milestone invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A project billed in agreed stages (design 30%, build 50%, launch 20%): the milestone and the contract it's from, what was delivered and accepted, its share of the total, what's been paid so far. Milestones are deliverables; progress billing is % complete (construction, its own page). Sample: milestone 2 of 3 on a $9,000 project.
- **Don't:** Construction progress and retainage (/templates/construction-progress-invoice); the web, app and video milestone pages (trade specifics).

### D4-sv · /templates/hourly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [hourly invoice template](https://invoicor.com/templates/hourly-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "hourly invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hours × rate for any work: hours by day or by task (a timesheet summary on the invoice), rounding and minimum increments, different rates (standard, rush, travel), a cap agreed upfront. The app has no timer: you enter the hours you tracked; the hours calculator adds up times. Sample: 3 dates at 2 rates.
- **Don't:** The trade hourly pages (consulting, handyman, VA, bookkeeping, cleaning, moving); setting your rate (the hourly rate calculator).

### D6-sv · /templates/retainer-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [retainer invoice template](https://invoicor.com/templates/retainer-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "retainer invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A fixed fee paid ahead for availability or a block of hours (lawyers, consultants, agencies): the period, what's included (hours or scope), what happens to unused hours (rolled over or lost, per the contract), work beyond it billed on its own lines. An advance against future work vs a pure availability fee. Each month: duplicate last month's invoice (the app doesn't send recurring invoices). Sample: May, 20 hours included, 3 hours over.
- **Don't:** The consulting, social media, website, interior design and VA retainer pages (trade specifics); legal trust-account rules (hedge, no law cited).

### D7-sv · /templates/monthly-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [monthly invoice template](https://invoicor.com/templates/monthly-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "monthly invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): One invoice a month for ongoing service (cleaning, lawn care, pools, lessons, equipment): the service period, visits or units that month, a flat fee or per visit, skipped visits credited, the due date. With the app: duplicate last month's invoice, change the period and the number. Sample: October, 4 weekly visits, 1 skipped and credited.
- **Don't:** Retainers (/templates/retainer-invoice); the trade monthly pages (lawn care, pool, cleaning, music lessons); any promise of automatic recurring invoices (the app doesn't send them).

### D8-sv · /templates/labor-and-materials-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [labor and materials invoice template](https://invoicor.com/templates/labor-and-materials-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "labor and materials invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The general labor + materials invoice for any trade: labor lines (hours × rate or a flat price), material lines (quantity, unit, unit price), markup on materials (shown or built in), trip and disposal fees, and where tax applies (in many US states materials are taxed and labor isn't: hedge). Time and materials vs a fixed price. Sample: a repair with 3 labor hours and 5 material lines. A 'by trade' section links the trade versions.
- **Don't:** Trade materials in depth (the plumbing, electrical, HVAC … labor and materials pages); markup math (the markup calculator).

### D9-sv · /templates/service-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [service invoice template](https://invoicor.com/templates/service-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "service invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Invoicing services rather than goods, for any business: a description the client recognises (what, when, for whom), service date vs invoice date, hours, visits or a flat fee, tax on services (often different from goods: hedge), payment terms. Sample: 3 service lines. 'Find your trade' links to the templates hub.
- **Don't:** Any trade's specifics (the trade templates); selling goods (/templates/sales-invoice).

### D10-sv · /templates/sales-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [sales invoice template](https://invoicor.com/templates/sales-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "sales invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Selling goods: item and SKU, quantity, unit price, discount, shipping, sales tax or VAT on goods, delivery date and address, returns terms. How it differs from a receipt (already paid) and a commercial invoice (export). Sample: 4 products + shipping, for makers, resellers and B2B orders.
- **Don't:** Export and customs (/templates/commercial-invoice); receipts (the receipt generator).

### D11-sv · /templates/commercial-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [commercial invoice template](https://invoicor.com/templates/commercial-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "commercial invoice template"; known local terms: Handelsrechnung (de), handelsfactuur (nl), facture commerciale (fr), factura comercial (es)
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The invoice that travels with goods across a border: seller, buyer and consignee, a precise description per item, HS code, country of origin, quantity, weight, value and currency, Incoterms, reason for export, a signed declaration. Honest: Invoicor makes the invoice PDF; HS codes and origin go in the item lines or notes; carriers and customs may want their own forms too. Sample: 3 items shipped from the UK to the US (duties hedged).
- **Don't:** Customs advice beyond the fields (link the customs authority); the EU reverse charge (/reverse-charge-invoice).

### D14-sv · /templates/expense-reimbursement-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [reimbursement invoice template](https://invoicor.com/templates/expense-reimbursement-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "reimbursement invoice template"; known local terms: Auslagen / durchlaufende Posten (de), doorbelasten kosten (nl), débours (fr)
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Passing costs on to a client: what you paid (travel, materials, fees), at cost or with a markup (per the contract), receipts kept and listed, and the tax difference between a disbursement paid in the client's name (often outside VAT) and a rebilled cost (part of your price): hedge, with the HMRC guidance as the English example (cite and date).
- **Don't:** Mileage (/templates/mileage-invoice); employee expense reports.

### D15-sv · /templates/no-vat-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [invoice without vat template](https://invoicor.com/templates/no-vat-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "invoice without vat template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): For sellers below the VAT threshold or exempt: what an invoice without VAT must and mustn't show (no VAT line, no VAT number, the wording a country requires), why the client can't reclaim VAT on it, what changes when you cross the threshold. English examples: the UK (not VAT registered: cite HMRC, date it) and Australia (not registered for GST, so it isn't a 'tax invoice'). Sample with the note and no tax line.
- **Don't:** Exempt services by country in detail (the local versions); VAT numbers in general (the country pages).

### D16-sv · /templates/freelance-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [freelance invoice template](https://invoicor.com/templates/freelance-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "freelance invoice template"; known local terms: Rechnung Freiberufler / Selbstständige (de), factuur zzp (nl), facture auto-entrepreneur (fr), factura autónomo (es)
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Freelancers in any field: what the client's accounts team needs (your legal name, address, tax ID or UTR where asked, their PO number, bank details), project, hourly or day-rate lines, usage rights when you sell creative work, VAT if registered or the no-VAT note, payment terms from the contract. UK sole traders and the self-employed use the same document. Sample: a project fee + 2 extra hours. A 'by field' section links the trade templates.
- **Don't:** Field specifics (freelance design, copywriting, web development, translation …); US 1099 detail (/templates/independent-contractor-invoice).

### D18-sv · /templates/subcontractor-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [subcontractor invoice template](https://invoicor.com/templates/subcontractor-invoice) (live: use it as the source)
- **Search words:** the Swedish term for "subcontractor invoice template"; known local terms: Subunternehmer Rechnung (de: §13b reverse charge on construction services), onderaannemer factuur (nl: btw verlegd, G-rekening)
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A sub billing the main contractor, not the owner: the project, the GC's PO or contract number, scope or % complete, retainage held, change orders by number, the lien waiver that often goes with payment (US: hedge per state). UK: CIS deductions on the labor part (cite HMRC, date it). Sample: an $18,000 subcontract, 40% complete, 10% retainage.
- **Don't:** Progress billing in depth (/templates/construction-progress-invoice); retainage math (the retainage calculator).

## D21–D30 in Swedish

[ ] Invoice types II: special cases (self-billing, revised, paid, PO …) · 0/8 live in sv

- **For every template (invoice type) page:** This document under that country's rules (the local terms list): what it must show there, the law or tax office as the source with the date checked.

### D21-sv · /templates/self-billing-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [self billing invoice template](../types.md#d21--templatesself-billing-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "self billing invoice template"; known local terms: Gutschrift im Sinne des UStG (de), self-billing / autofacturation (fr): check the local word
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The customer writes the invoice for the supplier (common with subcontractors, couriers, growers, platforms): the self-billing agreement it needs, the words 'self-billing' on the invoice (UK: HMRC VAT Notice 700/62; EU: Art. 224 VAT Directive: cite and date), the supplier's VAT number, who keeps what. Be honest: Invoicor has no 'self-billing' document type; say what to write in the notes. Sample: a courier firm self-billing a driver for a month of drops.
- **Don't:** The subcontractor invoice (/templates/subcontractor-invoice: link it); the reverse charge (/reverse-charge-invoice); credit notes (/free-credit-note-generator).

### D22-sv · /templates/itemized-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [itemized invoice template](../types.md#d22--templatesitemized-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "itemized invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Every part, hour and fee on its own line with quantity, unit and unit price: when clients, insurers or the tax office ask for it, how to group lines so it stays readable, discounts per line vs on the total (the app has one discount on the total and one tax rate per invoice: say so), line limits (Free 10, Starter 25, Pro 50: BRAND.md). Sample: a 14-line appliance repair for an insurance claim.
- **Don't:** Labor and materials split (/templates/labor-and-materials-invoice: link it); trade templates' own line items.

### D23-sv · /templates/paid-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [paid invoice template](../types.md#d23--templatespaid-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "paid invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): An invoice that shows it's settled: 'PAID' with the date and method, amount paid and balance zero, when a client wants a paid invoice instead of a receipt (expense claims, warranties), cash sales. The app has a paid status (BRAND.md; check whether the PDF shows it before claiming). Sample: a $640 job paid by card on the day.
- **Don't:** The receipt (/free-receipt-generator: link it, and say the difference in two lines); the final invoice after a deposit (/templates/final-invoice).

### D24-sv · /templates/revised-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [revised invoice template](../types.md#d24--templatesrevised-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "revised invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Fixing an invoice already sent: when a new version with a note is fine and when the rules want a credit note plus a new invoice (VAT-registered sellers: cite and date, hedge per country), keeping the number trail, 'This replaces invoice 1042'. In Invoicor a sent invoice is locked: duplicate it, fix it, send it (BRAND.md). Sample: a wrong hourly rate corrected on a consulting invoice.
- **Don't:** Credit notes in depth (/free-credit-note-generator: link it); invoice numbering (/tools/invoice-number-generator).

### D25-sv · /templates/cancellation-fee-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [cancellation fee invoice template](../types.md#d25--templatescancellation-fee-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "cancellation fee invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Billing a client who cancels late or doesn't show: the clause it rests on (quote it on the invoice), kept deposits vs a new fee, whether VAT or sales tax applies to cancellation fees (EU: often yes since the 2021 CJEU rulings: hedge, check per country), reasonable amounts. Sample: a photographer's 50% fee for a wedding cancelled 3 weeks out.
- **Don't:** Deposits (/templates/deposit-invoice: link it); past due invoices (/templates/past-due-invoice).

### D27-sv · /templates/purchase-order-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [purchase order invoice template](../types.md#d27--templatespurchase-order-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "purchase order invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Billing a company that issued a purchase order: the PO number where their accounts team looks for it, the same item descriptions and prices as the PO, partial deliveries against one PO, why invoices without a PO get stuck (three-way match: hedge). Where to put the PO number in Invoicor (check: a reference field or the notes). Sample: a print job delivered in two parts against one PO.
- **Don't:** Purchase orders themselves (not an Invoicor document); net terms (/tools/due-date-calculator: link it).

### D29-sv · /templates/pro-bono-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [pro bono invoice template](../types.md#d29--templatespro-bono-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "pro bono invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Showing the value of free work: the normal price per line, a 100% discount, a total of 0, why (the client sees the value; some charities want it for their records; your own records). Tax: donated services are usually not deductible as a gift (US IRS: hedge, cite); VAT on free services varies (hedge). Sample: a designer's free logo for a local food bank.
- **Don't:** Nonprofit invoices (/templates/nonprofit-invoice: link it); discounts in general (/tools/discount-calculator).

### D30-sv · /templates/royalty-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [royalty invoice template](../types.md#d30--templatesroyalty-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "royalty invoice template"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Billing for use rather than work: the licence (what, where, how long), the royalty basis (a fixed fee, per unit sold, or a percentage of a reported amount, with the period and the statement it rests on), withholding tax on cross-border royalties (hedge, treaties), VAT on licences (a service: reverse charge B2B in the EU). Sample: a photographer's licence for a year of web use plus a quarterly royalty.
- **Don't:** Photography templates (link /templates/photography); international invoices (/templates/international-invoice).

## TL1–TL4 in Swedish

[x] Free tools built before the plan (hub, VAT, hours, hourly rate) · 4/4 live in sv

- **For every tool page:** The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.

### TL1-sv · /tools → Swedish

- [x] **Live in sv**: /sv/verktyg
- **English page:** [free invoicing tools](https://invoicor.com/tools) (live: use it as the source)
- **Search words:** "räkna ut [free invoicing tools, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### TL2-sv · /tools/vat-calculator → Swedish

- [x] **Live in sv**: /sv/verktyg/momsraknare
- **English page:** [vat calculator](https://invoicor.com/tools/vat-calculator) (live: use it as the source)
- **Search words:** "räkna ut [vat, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### TL3-sv · /tools/hours-calculator → Swedish

- [x] **Live in sv**: /sv/verktyg/timraknare
- **English page:** [hours calculator](https://invoicor.com/tools/hours-calculator) (live: use it as the source)
- **Search words:** "räkna ut [hours, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### TL4-sv · /tools/hourly-rate-calculator → Swedish

- [x] **Live in sv**: /sv/verktyg/rakna-ut-timpris
- **English page:** [freelance hourly rate calculator](https://invoicor.com/tools/hourly-rate-calculator) (live: use it as the source)
- **Search words:** "räkna ut [freelance hourly rate, in Swedish]"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

## TL5–TL15 in Swedish

[ ] Free tools I · 0/9 live in sv

- **For every tool page:** The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.

### TL5-sv · /tools/iban-checker → Swedish

- [ ] **Live in sv**
- **English page:** [iban checker](../tools.md#tl5--toolsiban-checker) (planned: write the English page first)
- **Search words:** "räkna ut [iban, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Roadmap T3. Check an IBAN in the browser: length per country and the ISO 13616 mod-97 check digits; show the country and the bank code. Say plainly: it catches typos, it doesn't prove who owns the account (since October 2025 EU banks check the name for SEPA transfers: Verification of Payee).

### TL6-sv · /tools/late-payment-interest-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [late payment interest calculator](../tools.md#tl6--toolslate-payment-interest-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [late payment interest, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Roadmap T7. Business-to-business late payment interest per country: EU statutory interest (the ECB reference rate + 8 points; + 9 in Germany) and the fixed €40 compensation per invoice; the UK's Late Payment Act (base rate + 8%, fixed sums by debt size); consumer rules differ (e.g. the Dutch WIK scale). Every rate with its source and date; re-check every half year. The result goes onto a reminder invoice in the generator.

### TL7-sv · /tools/due-date-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [invoice due date calculator](../tools.md#tl7--toolsdue-date-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [invoice due date, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Roadmap T8. Invoice date + terms (due on receipt, Net 7/15/30/60, end of month, end of month + 30) = the due date, with the weekday; explain each term in one line.
- **Don't:** What payment terms mean in depth (not this page's topic).

### TL8-sv · /tools/invoice-number-generator → Swedish

- [ ] **Live in sv**
- **English page:** [invoice number generator](../tools.md#tl8--toolsinvoice-number-generator) (planned: write the English page first)
- **Search words:** "räkna ut [invoice number, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Roadmap T8. Build an invoice number format (prefix, year, client code, sequence) and show the next 5 numbers; the rules in one paragraph (unique, sequential; in the EU no gaps). Copy to the generator.
- **Don't:** How to number invoices in general (/tools/invoice-number-generator: link it).

### TL9-sv · /tools/discount-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [discount calculator](../tools.md#tl9--toolsdiscount-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [discount, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Roadmap T8. A discount as a percentage or an amount, before or after tax, with the new total; explain early-payment discounts (e.g. 2/10 net 30).

### TL10-sv · /tools/markup-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [markup calculator](../tools.md#tl10--toolsmarkup-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [markup, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Roadmap T8. Cost + markup % = price, and the margin that gives; the difference between markup and margin in plain words (link the margin calculator). Useful for parts and materials on trade invoices.

### TL11-sv · /tools/profit-margin-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [profit margin calculator](../tools.md#tl11--toolsprofit-margin-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [profit margin, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Roadmap T8. Price and cost = margin % and profit; or cost and target margin = price. Link the markup calculator both ways.

### TL12-sv · /tools/deposit-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [deposit calculator](../tools.md#tl12--toolsdeposit-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [deposit, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The deposit (% or amount) of a job total, the balance due, and both as invoice lines: the deposit invoice and the final invoice with the deposit subtracted, each one click into the generator. Link the deposit templates.

### TL15-sv · /tools/vat-number-checker → Swedish

- [ ] **Live in sv**
- **English page:** [eu vat number checker](../tools.md#tl15--toolsvat-number-checker) (planned: write the English page first)
- **Search words:** "räkna ut [eu vat number, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Roadmap T5. Checks an EU VAT number with the European Commission's VIES service (and often returns the company name). Needs a small server proxy in invoicor_api with caching and rate limits (browsers can't call VIES directly): a decision first.

## TL16–TL25 in Swedish

[ ] Free tools II · 0/8 live in sv

- **For every tool page:** The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.

### TL17-sv · /tools/hourly-to-salary-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [hourly to salary calculator](../tools.md#tl17--toolshourly-to-salary-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [hourly to salary, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Hourly rate × hours × weeks = yearly, and back; link the hourly rate calculator (that one is for freelancers setting a rate).

### TL18-sv · /tools/day-rate-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [day rate calculator](../tools.md#tl18--toolsday-rate-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [day rate, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A day rate from an hourly rate or a yearly target; half days; link the hourly rate calculator.

### TL19-sv · /tools/overtime-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [overtime calculator](../tools.md#tl19--toolsovertime-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [overtime, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Regular and overtime hours and the multiplier (1.5×, 2×) = the amount; the rules for employees differ by country (hedge); for invoicing contractors' overtime.

### TL20-sv · /tools/price-per-square-foot-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [price per square foot calculator](../tools.md#tl20--toolsprice-per-square-foot-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [price per square foot, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Area (with a rooms helper) × price, or total ÷ area; square meters in metric languages; for trades (flooring, painting).

### TL21-sv · /tools/break-even-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [break even calculator](../tools.md#tl21--toolsbreak-even-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [break even, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Fixed costs, price and variable cost = the break-even units and revenue, in plain words.

### TL23-sv · /tools/price-increase-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [price increase calculator](../tools.md#tl23--toolsprice-increase-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [price increase, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Old and new price = the % change, or a % raise = the new price; a short template line to tell clients.

### TL24-sv · /tools/commission-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [commission calculator](../tools.md#tl24--toolscommission-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [commission, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Sales × rate (flat or tiered) = the commission to invoice.

### TL25-sv · /tools/utilization-rate-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [utilization rate calculator](../tools.md#tl25--toolsutilization-rate-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [utilization rate, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Billable vs total hours = utilization, and the income at a rate; link the hours calculator.

## TL26–TL45 in Swedish

[ ] Pricing calculators for trades · 0/20 live in sv

- **For every tool page:** The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.

### TL26-sv · /tools/house-cleaning-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [house cleaning pricing calculator](../tools.md#tl26--toolshouse-cleaning-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [house cleaning pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. By hours (home size → hours × rate × cleaners) or by square feet; extras (oven, fridge, inside windows) as add-ons; first deep clean vs regular visit; supplies. Price per visit and per month.
- **Don't:** The cleaning-services template's content (link it: /templates/cleaning-services); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL27-sv · /tools/lawn-mowing-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [lawn mowing pricing calculator](../tools.md#tl27--toolslawn-mowing-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [lawn mowing pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Lot size minus house and drive → mowing time per 1,000 sq ft × rate, trimming and edging, travel, a minimum charge; per cut and per month (weekly or every two weeks).
- **Don't:** The landscaping template's content (link it: /templates/landscaping); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL28-sv · /tools/pressure-washing-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [pressure washing pricing calculator](../tools.md#tl28--toolspressure-washing-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [pressure washing pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per square foot by surface (driveway, deck, siding, roof soft wash) at the pro's rate per surface, chemicals, a minimum job charge; total and per square foot.
- **Don't:** The pressure-washing template's content (link it: /templates/pressure-washing); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL29-sv · /tools/painting-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [painting cost calculator](../tools.md#tl29--toolspainting-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [painting cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Wall area from room sizes minus doors and windows, coats, coverage per gallon (or litre) → paint needed and its cost, labor per square foot or hour, prep and trim, markup on paint.
- **Don't:** The painting template's content (link it: /templates/painting); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL30-sv · /tools/window-cleaning-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [window cleaning pricing calculator](../tools.md#tl30--toolswindow-cleaning-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [window cleaning pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per window or pane by type (standard, French, skylight), inside and out, height surcharge per storey, screens and tracks, a minimum charge.
- **Don't:** The window-cleaning template's content (link it: /templates/window-cleaning); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL31-sv · /tools/snow-removal-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [snow plowing pricing calculator](../tools.md#tl31--toolssnow-removal-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [snow plowing pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per push, per event or per season: driveway size, depth triggers (over 2 in, over 6 in), salt per bag, walks by hand; a season price = expected events × price per push (hedge: weather varies).
- **Don't:** The snow-removal template's content (link it: /templates/snow-removal); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL32-sv · /tools/carpet-cleaning-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [carpet cleaning pricing calculator](../tools.md#tl32--toolscarpet-cleaning-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [carpet cleaning pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per room or per square foot, stairs per step, stain and pet treatment, upholstery pieces, a minimum charge.
- **Don't:** The carpet-cleaning template's content (link it: /templates/carpet-cleaning); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL33-sv · /tools/moving-company-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [moving company pricing calculator](../tools.md#tl33--toolsmoving-company-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [moving company pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Hourly crew pricing: movers × hours × rate + truck fee + travel time, stairs and long carries, packing materials; local moves only (US interstate moves are regulated: hedge, FMCSA).
- **Don't:** The moving template's content (link it: /templates/moving); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL34-sv · /tools/junk-removal-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [junk removal pricing calculator](../tools.md#tl34--toolsjunk-removal-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [junk removal pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. By truck volume (an eighth up to a full load × the pro's full-load price), heavy items and dump fees per ton, items with their own fees (mattresses, tires, fridges), labor for hard access.
- **Don't:** The junk-removal template's content (link it: /templates/junk-removal); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL35-sv · /tools/photography-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [photography pricing calculator](../tools.md#tl35--toolsphotography-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [photography pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Cost of doing business: yearly costs (gear, software, insurance) + target income ÷ sessions a year → price per session; editing hours per session; prints and travel as extras. Link the hourly rate calculator.
- **Don't:** The photography template's content (link it: /templates/photography); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL36-sv · /tools/drywall-estimate-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [drywall estimate calculator](../tools.md#tl36--toolsdrywall-estimate-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [drywall estimate, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Sheets from wall and ceiling area + waste, mud, tape and screws per sheet (stated assumptions), hang and finish labor per sheet or square foot, a price step per finish level.
- **Don't:** The drywall template's content (link it: /templates/drywall); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL37-sv · /tools/flooring-installation-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [flooring installation cost calculator](../tools.md#tl37--toolsflooring-installation-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [flooring installation cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Area + waste by layout (straight, diagonal, herringbone), material per square foot (pro- or client-supplied), underlayment, removing the old floor, labor per square foot, transitions and stairs.
- **Don't:** The flooring template's content (link it: /templates/flooring); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL38-sv · /tools/tile-installation-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [tile installation cost calculator](../tools.md#tl38--toolstile-installation-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [tile installation cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Area + waste by tile size and pattern, tiles per box, thinset and grout bags (assumptions), labor per square foot by surface (floor, wall, shower), prep (backer board, waterproofing).
- **Don't:** The tile-installation template's content (link it: /templates/tile-installation); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL39-sv · /tools/fence-installation-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [fence installation cost calculator](../tools.md#tl39--toolsfence-installation-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [fence installation cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Length → posts at a spacing, panels or pickets, concrete bags per post, gates; material per foot at the pro's prices, labor per foot, removing the old fence, a permit line.
- **Don't:** The fence-installation template's content (link it: /templates/fence-installation); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL40-sv · /tools/deck-building-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [deck cost calculator](../tools.md#tl40--toolsdeck-building-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [deck cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Deck area, joists at spacing, decking boards, footings, railing per linear foot, stairs per step; material at the pro's prices (pressure-treated or composite), labor per square foot, permit.
- **Don't:** The deck-building template's content (link it: /templates/deck-building); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL41-sv · /tools/roofing-estimate-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [roofing estimate calculator](../tools.md#tl41--toolsroofing-estimate-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [roofing estimate, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Footprint × pitch factor → squares, waste by roof complexity, bundles per square, underlayment, tear-off layers, flashing and ridge, labor per square.
- **Don't:** The roofing template's content (link it: /templates/roofing); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL42-sv · /tools/concrete-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [concrete cost calculator](../tools.md#tl42--toolsconcrete-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [concrete cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Slab volume (length × width × thickness → cubic yards or m³, + waste), ready-mix per yard or bags, rebar or mesh, forms, finish, labor per square foot, a short-load fee under the supplier's minimum.
- **Don't:** The concrete template's content (link it: /templates/concrete); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL43-sv · /tools/pool-cleaning-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [pool cleaning pricing calculator](../tools.md#tl43--toolspool-cleaning-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [pool cleaning pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. A monthly route price: visits a month × time per visit × rate, chemicals included or billed, pool size and screen enclosure, travel; a green-to-clean as its own price.
- **Don't:** The pool-service template's content (link it: /templates/pool-service); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL44-sv · /tools/catering-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [catering cost calculator](../tools.md#tl44--toolscatering-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [catering cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per guest: food cost per head ÷ the target food-cost share (e.g. 30%) → menu price, staff hours × rate, rentals, travel, service charge and gratuity as their own lines, the deposit share.
- **Don't:** The catering template's content (link it: /templates/catering); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

### TL45-sv · /tools/cake-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [cake pricing calculator](../tools.md#tl45--toolscake-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [cake pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Ingredients per recipe (the baker's costs), boxes and boards, decorating hours × hourly rate, overhead per order, margin → price per cake and per serving; cottage-food rules vary (hedge).
- **Don't:** The bakery template's content (link it: /templates/bakery); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).

## TL55–TL62 in Swedish

[ ] Tax tools for the self-employed · 0/3 live in sv

- **For every tool page:** The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.

### TL58-sv · /tools/vat-threshold-checker → Swedish

- [ ] **Live in sv**
- **English page:** [vat threshold calculator](../tools.md#tl58--toolsvat-threshold-checker) (planned: write the English page first)
- **Search words:** "räkna ut [vat threshold, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Rolling 12-month turnover against the threshold (UK first; each language version with its country's threshold and test), the date you'd cross it, what to do next. Source per country, dated.
- **Don't:** What /templates/no-vat-invoice already explains (link it); rates without a source and date.

### TL61-sv · /tools/reverse-charge-checker → Swedish

- [ ] **Live in sv**
- **English page:** [reverse charge checker](../tools.md#tl61--toolsreverse-charge-checker) (planned: write the English page first)
- **Search words:** "räkna ut [reverse charge, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. A few questions (both businesses VAT-registered? in different EU countries? goods or services? B2B?) → whether the reverse charge applies and the wording to put on the invoice. Source: EU VAT Directive and the national tax offices.
- **Don't:** What /reverse-charge-invoice already explains (link it); rates without a source and date.

### TL62-sv · /tools/invoice-requirements-checker → Swedish

- [ ] **Live in sv**
- **English page:** [invoice requirements checker](../tools.md#tl62--toolsinvoice-requirements-checker) (planned: write the English page first)
- **Search words:** "räkna ut [invoice requirements, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Pick your country and situation (VAT registered or not, B2B or B2C, abroad) → the checklist of what your invoice must show, each item with its source; links to that country's page.
- **Don't:** What /templates/no-vat-invoice already explains (link it); rates without a source and date.

## TL63–TL75 in Swedish

[ ] Payment fees, terms and payment details · 0/13 live in sv

- **For every tool page:** The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.

### TL63-sv · /tools/paypal-fee-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [paypal fee calculator](../tools.md#tl63--toolspaypal-fee-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [paypal fee, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. PayPal's fees by country and payment type (invoices, goods and services, international, currency conversion), and the reverse: how much to invoice to receive X. Fees from PayPal's own fee page with the date.
- **Don't:** Rates without a source and date; claims the tool can't back up.

### TL64-sv · /tools/stripe-fee-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [stripe fee calculator](../tools.md#tl64--toolsstripe-fee-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [stripe fee, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Stripe's card fees by country, international and currency surcharges, invoicing fees, the gross-up. From Stripe's pricing page, dated.
- **Don't:** What /compare/stripe-invoices already explains (link it); rates without a source and date.

### TL65-sv · /tools/square-fee-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [square fee calculator](../tools.md#tl65--toolssquare-fee-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [square fee, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Square's fees for invoices, card-present and online, by country, the gross-up. From Square's pricing page, dated.
- **Don't:** What /compare/square-invoices already explains (link it); rates without a source and date.

### TL66-sv · /tools/credit-card-surcharge-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [credit card surcharge calculator](../tools.md#tl66--toolscredit-card-surcharge-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [credit card surcharge, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The surcharge to cover a card fee, capped at the actual cost, and where surcharges are banned or capped (EU consumer cards, some US states: hedge, cite).
- **Don't:** What /tools/stripe-fee-calculator already explains (link it); rates without a source and date.

### TL67-sv · /tools/early-payment-discount-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [early payment discount calculator](../tools.md#tl67--toolsearly-payment-discount-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [early payment discount, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Terms like 2/10 net 30: the discounted amount, the last discount date, and the effective annual cost of not taking it.
- **Don't:** What /tools/due-date-calculator already explains (link it); rates without a source and date.

### TL68-sv · /tools/invoice-factoring-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [invoice factoring calculator](../tools.md#tl68--toolsinvoice-factoring-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [invoice factoring, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Advance rate, factoring fee per 30 days, reserve released on payment → what you receive and the effective cost. Not advice; terms vary.
- **Don't:** What /templates/trucking already explains (link it); rates without a source and date.

### TL69-sv · /tools/prorated-invoice-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [prorated invoice calculator](../tools.md#tl69--toolsprorated-invoice-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [prorated invoice, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. A monthly or yearly price for part of a period: by days in the month or a 30-day month, start and end dates, the amount to invoice.
- **Don't:** What /templates/monthly-invoice already explains (link it); rates without a source and date.

### TL70-sv · /tools/business-days-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [business days calculator](../tools.md#tl70--toolsbusiness-days-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [business days, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Business days between two dates or N business days from a date, without weekends and the public holidays of the chosen country (holiday lists sourced, per year).
- **Don't:** What /tools/due-date-calculator already explains (link it); rates without a source and date.

### TL71-sv · /tools/dso-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [days sales outstanding calculator](../tools.md#tl71--toolsdso-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [days sales outstanding, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Receivables ÷ credit sales × days, what it means for a small business, a target by payment terms.
- **Don't:** What /tools/late-payment-interest-calculator already explains (link it); rates without a source and date.

### TL72-sv · /tools/sepa-qr-code-generator → Swedish

- [ ] **Live in sv**
- **English page:** [sepa qr code generator](../tools.md#tl72--toolssepa-qr-code-generator) (planned: write the English page first)
- **Search words:** "räkna ut [sepa qr code, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The EPC QR code (GiroCode) for a SEPA transfer: name, IBAN, BIC, amount, reference → a QR to put on the invoice; made in the browser, nothing sent. Spec: the European Payments Council guideline.
- **Don't:** What /tools/iban-checker already explains (link it); rates without a source and date.

### TL73-sv · /tools/swiss-qr-bill-generator → Swedish

- [ ] **Live in sv**
- **English page:** [swiss qr bill generator](../tools.md#tl73--toolsswiss-qr-bill-generator) (planned: write the English page first)
- **Search words:** "räkna ut [swiss qr bill, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The Swiss QR-bill payment part: creditor, QR-IBAN or IBAN, reference, amount → the payment slip as PDF/PNG. Spec: SIX Swiss Payment Standards, dated.
- **Don't:** What /invoice-generator-switzerland already explains (link it); rates without a source and date.

### TL74-sv · /tools/amount-in-words-converter → Swedish

- [ ] **Live in sv**
- **English page:** [amount in words converter](../tools.md#tl74--toolsamount-in-words-converter) (planned: write the English page first)
- **Search words:** "räkna ut [amount in words converter, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. An amount → words with the currency ('one thousand two hundred euros and 50 cents'), in the page's language, for invoices and cheques where the words are expected.
- **Don't:** Rates without a source and date; claims the tool can't back up.

### TL75-sv · /tools/invoice-currency-converter → Swedish

- [ ] **Live in sv**
- **English page:** [invoice currency converter](../tools.md#tl75--toolsinvoice-currency-converter) (planned: write the English page first)
- **Search words:** "räkna ut [invoice currency converter, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Needs a decision first: the rate source (ECB daily reference rates are free). An amount at the day's reference rate with the date and source, for the 'converted at' note on an invoice.
- **Don't:** What /templates/international-invoice already explains (link it); rates without a source and date.

## TL76–TL90 in Swedish

[ ] Job costing and materials for contractors · 0/13 live in sv

- **For every tool page:** The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.

### TL76-sv · /tools/job-costing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [job costing calculator](../tools.md#tl76--toolsjob-costing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [job costing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Revenue minus labour (hours × burdened rate), materials, subcontractors, equipment and overhead share → profit and margin per job.
- **Don't:** What /tools/profit-margin-calculator already explains (link it); rates without a source and date.

### TL77-sv · /tools/overhead-rate-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [overhead rate calculator](../tools.md#tl77--toolsoverhead-rate-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [overhead rate, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Yearly overhead ÷ billable hours (or direct costs) → the overhead to add per hour or per job, plus the profit target.
- **Don't:** What /tools/markup-calculator already explains (link it); rates without a source and date.

### TL78-sv · /tools/labor-burden-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [labor burden calculator](../tools.md#tl78--toolslabor-burden-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [labor burden, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wage + payroll taxes, insurance, benefits and paid time off ÷ productive hours → the true hourly cost of a worker (rates per country as examples, hedged).
- **Don't:** What /tools/job-costing-calculator already explains (link it); rates without a source and date.

### TL79-sv · /tools/equipment-cost-per-hour-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [equipment cost per hour calculator](../tools.md#tl79--toolsequipment-cost-per-hour-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [equipment cost per hour, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Purchase price, life, resale, fuel, maintenance, insurance ÷ hours a year → the hourly rate to charge for a machine.
- **Don't:** What /templates/equipment-rental already explains (link it); rates without a source and date.

### TL82-sv · /tools/insulation-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [insulation cost calculator](../tools.md#tl82--toolsinsulation-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [insulation cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area × the depth for the target R-value (or U-value) by material (batts, blown), bags or rolls needed, labour per square foot.
- **Don't:** What /templates/insulation already explains (link it); rates without a source and date.

### TL83-sv · /tools/siding-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [siding cost calculator](../tools.md#tl83--toolssiding-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [siding cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wall area minus openings → squares + waste, trim and J-channel by linear foot, removal of old siding, labour per square.
- **Don't:** What /templates/siding already explains (link it); rates without a source and date.

### TL84-sv · /tools/paver-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [paver cost calculator](../tools.md#tl84--toolspaver-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [paver cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area → pavers by size + waste, base gravel and sand by depth, edging, labour per square foot.
- **Don't:** What /templates/masonry already explains (link it); rates without a source and date.

### TL85-sv · /tools/retaining-wall-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [retaining wall cost calculator](../tools.md#tl85--toolsretaining-wall-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [retaining wall cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Length × height → blocks, caps, base and drainage gravel, labour per face foot; walls over a set height need an engineer (hedge).
- **Don't:** What /templates/masonry already explains (link it); rates without a source and date.

### TL86-sv · /tools/landscape-material-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [landscape material calculator](../tools.md#tl86--toolslandscape-material-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [landscape material, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area × depth → cubic yards or m³ of mulch, gravel or topsoil, bags vs bulk, delivery, the price to put on the invoice.
- **Don't:** What /templates/landscaping already explains (link it); rates without a source and date.

### TL87-sv · /tools/sod-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [sod cost calculator](../tools.md#tl87--toolssod-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [sod cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area → pallets or rolls of sod, soil prep, labour per square foot, watering in.
- **Don't:** What /templates/landscaping already explains (link it); rates without a source and date.

### TL88-sv · /tools/gutter-installation-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [gutter installation cost calculator](../tools.md#tl88--toolsgutter-installation-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [gutter installation cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Linear feet by material, downspouts by count and height, guards, removal of old gutters.
- **Don't:** What /templates/gutter-installation already explains (link it); rates without a source and date.

### TL89-sv · /tools/epoxy-floor-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [epoxy floor cost calculator](../tools.md#tl89--toolsepoxy-floor-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [epoxy floor cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area → kits or gallons by system and coats, grinding and crack repair, flakes, labour per square foot.
- **Don't:** What /templates/epoxy-flooring already explains (link it); rates without a source and date.

### TL90-sv · /tools/wallpaper-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [wallpaper calculator](../tools.md#tl90--toolswallpaper-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [wallpaper, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wall area, roll size and pattern repeat → rolls needed + waste, removal and hanging labour per roll.
- **Don't:** What /templates/wallpaper-installation already explains (link it); rates without a source and date.

## TL91–TL106 in Swedish

[ ] Pricing calculators II: services and transport · 0/14 live in sv

- **For every tool page:** The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.

### TL91-sv · /tools/janitorial-bidding-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [janitorial bidding calculator](../tools.md#tl91--toolsjanitorial-bidding-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [janitorial bidding, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Square feet ÷ production rate per hour by space type → hours per visit × visits a month × wage + burden, supplies, overhead and profit → the monthly bid.
- **Don't:** What /templates/janitorial already explains (link it); rates without a source and date.

### TL92-sv · /tools/gutter-cleaning-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [gutter cleaning pricing calculator](../tools.md#tl92--toolsgutter-cleaning-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [gutter cleaning pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Linear feet by storey, downspouts, debris level, guards, a minimum.
- **Don't:** What /templates/gutter-cleaning already explains (link it); rates without a source and date.

### TL93-sv · /tools/pest-control-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [pest control pricing calculator](../tools.md#tl93--toolspest-control-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [pest control pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Initial vs recurring service, home size, pest type, materials, quarterly vs monthly plans.
- **Don't:** What /templates/pest-control already explains (link it); rates without a source and date.

### TL94-sv · /tools/pet-sitting-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [pet sitting pricing calculator](../tools.md#tl94--toolspet-sitting-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [pet sitting pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Visit length, pets, overnight stays, holidays and travel → per visit and per week.
- **Don't:** What /templates/pet-sitting already explains (link it); rates without a source and date.

### TL95-sv · /tools/dog-grooming-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [dog grooming pricing calculator](../tools.md#tl95--toolsdog-grooming-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [dog grooming pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Size and coat → time × hourly rate, add-ons, matting and behaviour fees, mobile fee.
- **Don't:** What /templates/dog-grooming already explains (link it); rates without a source and date.

### TL96-sv · /tools/auto-detailing-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [auto detailing pricing calculator](../tools.md#tl96--toolsauto-detailing-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [auto detailing pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Vehicle size and condition, package, add-ons (ceramic, odour), mobile fee → price per car.
- **Don't:** What /templates/auto-detailing already explains (link it); rates without a source and date.

### TL97-sv · /tools/courier-delivery-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [courier delivery pricing calculator](../tools.md#tl97--toolscourier-delivery-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [courier delivery pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Base fee + distance × rate, weight and size, rush and waiting time, fuel surcharge.
- **Don't:** What /templates/courier already explains (link it); rates without a source and date.

### TL98-sv · /tools/event-planner-fee-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [event planner fee calculator](../tools.md#tl98--toolsevent-planner-fee-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [event planner fee, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Flat fee vs % of the event budget vs hourly, compared side by side, with the deposit share.
- **Don't:** What /templates/event-planning already explains (link it); rates without a source and date.

### TL99-sv · /tools/florist-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [florist pricing calculator](../tools.md#tl99--toolsflorist-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [florist pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wholesale cost × the markup (e.g. 3×) + labour %, hard goods at a lower markup → the retail price per arrangement.
- **Don't:** What /templates/florist already explains (link it); rates without a source and date.

### TL100-sv · /tools/translation-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [translation cost calculator](../tools.md#tl100--toolstranslation-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [translation cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Words × rate per word by language pair and field, minimum fee, rush and certification fees.
- **Don't:** What /templates/translation already explains (link it); rates without a source and date.

### TL101-sv · /tools/transcription-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [transcription cost calculator](../tools.md#tl101--toolstranscription-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [transcription cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Audio minutes × rate by turnaround and quality, speaker and timestamp add-ons.
- **Don't:** What /templates/transcription already explains (link it); rates without a source and date.

### TL102-sv · /tools/voice-over-rate-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [voice over rate calculator](../tools.md#tl102--toolsvoice-over-rate-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [voice over rate, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Per word or finished minute + usage (media, region, term) → a fee range from the pro's own base rate.
- **Don't:** What /templates/voice-over already explains (link it); rates without a source and date.

### TL103-sv · /tools/copywriting-rate-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [copywriting rate calculator](../tools.md#tl103--toolscopywriting-rate-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [copywriting rate, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Per word vs per hour vs per project: words, research and revision time, the hourly rate behind a per-word price.
- **Don't:** What /templates/copywriting already explains (link it); rates without a source and date.

### TL104-sv · /tools/trucking-cost-per-mile-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [trucking cost per mile calculator](../tools.md#tl104--toolstrucking-cost-per-mile-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [trucking cost per mile, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Fixed costs (truck payment, insurance, permits) + variable (fuel, maintenance, tyres) ÷ miles (km in the language versions) → cost per mile and the minimum rate.
- **Don't:** What /templates/trucking already explains (link it); rates without a source and date.

## TL107–TL113 in Swedish

[ ] Pricing calculators III: makers and production · 0/7 live in sv

- **For every tool page:** The local rates and presets (number format, currency, VAT), local units (metric), the local slug in the route table.

### TL107-sv · /tools/3d-printing-cost-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [3d printing cost calculator](../tools.md#tl107--tools3d-printing-cost-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [3d printing cost, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Filament or resin grams × price, machine hours × rate, electricity, failure rate, post-processing, margin.
- **Don't:** What /templates/3d-printing already explains (link it); rates without a source and date.

### TL108-sv · /tools/screen-printing-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [screen printing pricing calculator](../tools.md#tl108--toolsscreen-printing-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [screen printing pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Quantity breaks, colours per location, screens and setup, blanks, extra locations → price per shirt.
- **Don't:** What /templates/screen-printing already explains (link it); rates without a source and date.

### TL109-sv · /tools/embroidery-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [embroidery pricing calculator](../tools.md#tl109--toolsembroidery-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [embroidery pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Stitch count × rate per 1,000 stitches, digitising fee, quantity breaks, garments.
- **Don't:** What /templates/embroidery already explains (link it); rates without a source and date.

### TL110-sv · /tools/wholesale-price-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [wholesale price calculator](../tools.md#tl110--toolswholesale-price-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [wholesale price, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Cost → wholesale (× 2) → retail (× 2, keystone) or by target margin, for makers selling to shops.
- **Don't:** What /templates/crafts already explains (link it); rates without a source and date.

### TL111-sv · /tools/etsy-fee-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [etsy fee calculator](../tools.md#tl111--toolsetsy-fee-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [etsy fee, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Listing, transaction, payment processing and offsite-ads fees by country (from Etsy's fee page, dated) → profit per sale.
- **Don't:** What /templates/crafts already explains (link it); rates without a source and date.

### TL112-sv · /tools/upholstery-fabric-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [upholstery fabric calculator](../tools.md#tl112--toolsupholstery-fabric-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [upholstery fabric, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Yards (metres) by piece type, pattern repeat, cushions → fabric needed and its cost.
- **Don't:** What /templates/upholstery already explains (link it); rates without a source and date.

### TL113-sv · /tools/laser-engraving-pricing-calculator → Swedish

- [ ] **Live in sv**
- **English page:** [laser engraving pricing calculator](../tools.md#tl113--toolslaser-engraving-pricing-calculator) (planned: write the English page first)
- **Search words:** "räkna ut [laser engraving pricing, in Swedish]"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Machine minutes × rate, material, setup, quantity breaks.
- **Don't:** What /templates/laser-engraving already explains (link it); rates without a source and date.

## G1–G1 in Swedish

[x] The free invoice generator (built) · 1/1 live in sv

- **For every generator page:** The local document name and its rules there; the local generator presets.

### G1-sv · /free-invoice-generator → Swedish

- [x] **Live in sv**: /sv/skapa-faktura
- **English page:** [free invoice generator](https://invoicor.com/free-invoice-generator) (live: use it as the source)
- **Search words:** the Swedish term for "free invoice generator"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

## G2–G5 in Swedish

[ ] Document generators (receipt, estimate, proforma, credit note) · 0/4 live in sv

- **For every generator page:** The local document name and its rules there; the local generator presets.

### G2-sv · /free-receipt-generator → Swedish

- [ ] **Live in sv**
- **English page:** [free receipt generator](../generators.md#g2--free-receipt-generator) (planned: write the English page first)
- **Search words:** the Swedish term for "free receipt generator"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The page says plainly that the app itself makes invoices, not receipts.

### G3-sv · /free-estimate-generator → Swedish

- [ ] **Live in sv**
- **English page:** [free estimate generator](../generators.md#g3--free-estimate-generator) (planned: write the English page first)
- **Search words:** the Swedish term for "free estimate generator"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The page says plainly that the app has no estimates or quotes.

### G4-sv · /free-proforma-invoice-generator → Swedish

- [ ] **Live in sv**
- **English page:** [proforma invoice generator](../generators.md#g4--free-proforma-invoice-generator) (planned: write the English page first)
- **Search words:** the Swedish term for "proforma invoice generator"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Explain when a proforma is used (prepayment, customs, quotes for imports). The app itself makes invoices only.
- **Don't:** What a proforma invoice is in depth: link /free-proforma-invoice-generator.

### G5-sv · /free-credit-note-generator → Swedish

- [ ] **Live in sv**
- **English page:** [credit note generator](../generators.md#g5--free-credit-note-generator) (planned: write the English page first)
- **Search words:** the Swedish term for "credit note generator"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): The app has no credit notes: say so; in the app you cancel and duplicate.
- **Don't:** What a credit note is in depth: link /free-credit-note-generator.

## G6–G10 in Swedish

[ ] Document generators II (purchase order, delivery note, statement, debit note, work order) · 0/5 live in sv

- **For every generator page:** The local document name and its rules there; the local generator presets.

### G6-sv · /free-purchase-order-generator → Swedish

- [ ] **Live in sv**
- **English page:** [purchase order generator](../generators.md#g6--free-purchase-order-generator) (planned: write the English page first)
- **Search words:** the Swedish term for "purchase order generator"; known local terms: Bestellung (de), bon de commande (fr), inkooporder (nl): check the local word
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A PO a small business sends to a supplier: PO number, supplier and ship-to address, items with quantities and agreed prices, delivery date, terms; no tax invoice wording. Show how the supplier's invoice then quotes the PO number (link /templates/purchase-order-invoice).
- **Don't:** Invoicing against a PO (/templates/purchase-order-invoice: link it both ways).

### G7-sv · /free-delivery-note-generator → Swedish

- [ ] **Live in sv**
- **English page:** [delivery note generator](../generators.md#g7--free-delivery-note-generator) (planned: write the English page first)
- **Search words:** the Swedish term for "delivery note generator"; known local terms: Lieferschein (de), bon de livraison (fr), pakbon (nl), albarán (es): big local searches
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A delivery note or packing slip: what was delivered, quantities, the order or PO number, no prices (or an option to show them), a line for the receiver's signature and date (printed, not e-signed: the generator has no e-signatures). How it differs from the invoice that follows.
- **Don't:** Customs documents (/templates/commercial-invoice: link it).

### G8-sv · /free-statement-of-account-generator → Swedish

- [ ] **Live in sv**
- **English page:** [statement of account generator](../generators.md#g8--free-statement-of-account-generator) (planned: write the English page first)
- **Search words:** the Swedish term for "statement of account generator"; known local terms: Kontoauszug means a bank statement in German: use Offene-Posten-Liste / Saldenbestätigung (check)
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A statement for one client over a period: opening balance, each invoice and payment by date and number, the balance due, an ageing line (current, 30, 60, 90+ days). The user types the invoices in (no link to the app's data: say so). When to send one (month end, before chasing).
- **Don't:** Re-sending one overdue invoice (/templates/past-due-invoice: link it); DSO math (/tools/dso-calculator).

### G9-sv · /free-debit-note-generator → Swedish

- [ ] **Live in sv**
- **English page:** [debit note generator](../generators.md#g9--free-debit-note-generator) (planned: write the English page first)
- **Search words:** the Swedish term for "debit note generator"; known local terms: note de débit (fr, Belgium), debetnota (nl), nota de débito (es)
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A debit note: raising the amount of an earlier invoice (an extra charge, a price correction upward) or, in some countries, the buyer's note to the seller for a return (India GST: both uses, check; say which one the page means). It refers to the original invoice number. Pair it with the credit note.
- **Don't:** Credit notes (/free-credit-note-generator: link it both ways); revised invoices (/templates/revised-invoice).

### G10-sv · /free-work-order-generator → Swedish

- [ ] **Live in sv**
- **English page:** [work order generator](../generators.md#g10--free-work-order-generator) (planned: write the English page first)
- **Search words:** the Swedish term for "work order generator"; known local terms: Arbeitsauftrag / Auftragszettel (de), bon d'intervention (fr), werkbon (nl): check
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A work order for a job: client and site, the work to do, parts and hours used, the technician, a line for the client's signature on paper; then turn it into an invoice in one click (prefill the invoice generator with the lines). For trades: plumbing, HVAC, repairs.
- **Don't:** The estimate before the job (/free-estimate-generator); labor and materials invoices (/templates/labor-and-materials-invoice: link it).

## CT1–CT7 in Swedish

[ ] Country pages I (English-speaking countries + EU reverse charge) · 0/1 live in sv

- **For every country page:** That country's own terms for the rule (the local terms list), with the local official source.

### CT7-sv · /reverse-charge-invoice → Swedish

- [ ] **Live in sv**
- **English page:** [eu reverse charge invoice](../country.md#ct7--reverse-charge-invoice) (planned: write the English page first)
- **Search words:** the Swedish term for "eu reverse charge invoice"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): A generator preset with 0% and the note filled in. Sources: the EU's Your Europe pages, dated.
- **Don't:** Country VAT rates (owned by /tools/vat-calculator); the Irish rules (/invoice-generator-ireland).

## P1–P9 in Swedish

[ ] Core pages (built): home, hubs, help, affiliate, terms, privacy, Android · 3/8 live in sv

- **For every home page:** The same facts (BRAND.md §10), written naturally in that language.
- **For every hub page:** The same facts (BRAND.md §10), written naturally in that language.
- **For every support page:** The same facts (BRAND.md §10), written naturally in that language.
- **For every program page:** The same facts (BRAND.md §10), written naturally in that language.
- **For every legal page:** The same facts (BRAND.md §10), written naturally in that language.
- **For every android page:** The same facts (BRAND.md §10), written naturally in that language.

### P1-sv · / → Swedish

- [x] **Live in sv**: /sv
- **English page:** [invoice app iphone](https://invoicor.com/) (live: use it as the source)
- **Search words:** the Swedish term for "invoice app iphone"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### P2-sv · /templates → Swedish

- [ ] **Live in sv**
- **English page:** [invoice templates](https://invoicor.com/templates) (live: use it as the source)
- **Search words:** the Swedish term for "invoice templates"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### P3-sv · /industries → Swedish

- [ ] **Live in sv**
- **English page:** [invoicing software by industry](https://invoicor.com/industries) (live: use it as the source)
- **Search words:** the Swedish term for "invoicing software by industry"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### P5-sv · /help → Swedish

- [x] **Live in sv**: /sv/hjalp
- **English page:** [invoicor help](https://invoicor.com/help) (live: use it as the source)
- **Search words:** the Swedish term for "invoicor help"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### P6-sv · /affiliate → Swedish

- [ ] **Live in sv**
- **English page:** [invoicor affiliate program](https://invoicor.com/affiliate) (live: use it as the source)
- **Search words:** the Swedish term for "invoicor affiliate program"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### P7-sv · /terms → Swedish

- [ ] **Live in sv**
- **English page:** [invoicor terms of service](https://invoicor.com/terms) (live: use it as the source)
- **Search words:** the Swedish term for "invoicor terms of service"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### P8-sv · /privacy → Swedish

- [ ] **Live in sv**
- **English page:** [invoicor privacy policy](https://invoicor.com/privacy) (live: use it as the source)
- **Search words:** the Swedish term for "invoicor privacy policy"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

### P9-sv · /android → Swedish

- [x] **Live in sv**: /sv/android
- **English page:** [invoicor for android: coming soon](https://invoicor.com/android) (live: use it as the source)
- **Search words:** the Swedish term for "invoicor for android: coming soon"
- **Write:** the live page rewritten for Sweden: keep its sections and depth, replace its prices, units, tax lines and rules with local ones (each fact checked for that country), local trade words in the examples and FAQs.

## P10–P11 in Swedish

[ ] Trust pages: about, contact (E-E-A-T) · 0/2 live in sv

- **For every trust page:** The same facts (BRAND.md §10), written naturally in that language.

### P10-sv · /about → Swedish

- [ ] **Live in sv**
- **English page:** [about invoicor](https://invoicor.com/about) (live: use it as the source)
- **Search words:** the Swedish term for "about invoicor"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Who makes Invoicor and why, where the data lives (servers in Germany), how to reach us; facts only, no invented team size or numbers.

### P11-sv · /contact → Swedish

- [ ] **Live in sv**
- **English page:** [contact invoicor](https://invoicor.com/contact) (live: use it as the source)
- **Search words:** the Swedish term for "contact invoicor"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): How to reach the team: email and in-app feedback, read by the team, replies can take a few days (BRAND.md §10: no live chat, no phone, no response-time promise).

## P12–P15 in Swedish

[ ] Features, security, the countries hub and the German Impressum · 0/2 live in sv

- **For every product page:** The same facts (BRAND.md §10), written naturally in that language.
- **For every trust page:** The same facts (BRAND.md §10), written naturally in that language.

### P12-sv · /features → Swedish

- [ ] **Live in sv**
- **English page:** [invoicor features](../core.md#p12--features) (planned: write the English page first)
- **Search words:** the Swedish term for "invoicor features"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Everything the app does, straight from the BRAND.md §10 'does' column (templates, 11 invoice languages, 38 currencies, payment link field, saved clients and products, duplicate, statuses, dashboard, business profiles, data in Germany), each with a screenshot, and a short honest 'what it doesn't do' list from the 'does not' column (no payments, no recurring invoices, no estimates, no team logins). Re-check §10 before publishing.
- **Don't:** Prices (the home page's pricing section, /#pricing: link it); per-trade pitches (the industry pages).

### P13-sv · /security → Swedish

- [ ] **Live in sv**
- **English page:** [invoicor data security](../core.md#p13--security) (planned: write the English page first)
- **Search words:** the Swedish term for "invoicor data security"
- **Write:** the English brief, adapted to the country (local rules, prices and units instead of US ones): Where the data lives (servers in Germany: BRAND.md), that Invoicor never handles payments (you paste your own payment link), how to export or delete your data and account (check the app and the privacy policy), who can see it. Only what's true today; no certificates or audits unless we have them.
- **Don't:** The privacy policy text (/privacy: link it, don't repeat it).
