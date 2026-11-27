# Free tools

> **Generated, don't edit by hand.** Rules: [RULES.md](../RULES.md); pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**4 done · 109 planned**

## Direction

URL, key, sections, what these pages can and can't do, links and languages: [RULES.md § TL · Free tools](../RULES.md#tl--free-tools).

## Done (4): don't build these again

`/tools` free invoicing tools · `vat-calculator` vat calculator · `hours-calculator` hours calculator · `hourly-rate-calculator` freelance hourly rate calculator

## Planned (109)

### Item TL1 (11)

#### /tools/iban-checker

- **Key:** iban checker · also: iban validator; check iban
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T3. Check an IBAN in the browser: length per country and the ISO 13616 mod-97 check digits; show the country and the bank code. Say plainly: it catches typos, it doesn't prove who owns the account (since October 2025 EU banks check the name for SEPA transfers: Verification of Payee).
- **Notes:** T3

#### /tools/late-payment-interest-calculator

- **Key:** late payment interest calculator · also: late payment fee calculator; statutory interest calculator
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T7. Business-to-business late payment interest per country: EU statutory interest (the ECB reference rate + 8 points; + 9 in Germany) and the fixed €40 compensation per invoice; the UK's Late Payment Act (base rate + 8%, fixed sums by debt size); consumer rules differ (e.g. the Dutch WIK scale). Every rate with its source and date; re-check every half year. The result goes onto a reminder invoice in the generator.
- **Notes:** T7

#### /tools/due-date-calculator

- **Key:** invoice due date calculator · also: net 30 calculator; payment terms calculator
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Invoice date + terms (due on receipt, Net 7/15/30/60, end of month, end of month + 30) = the due date, with the weekday; explain each term in one line.
- **Don't write about:** What payment terms mean in depth (not this page's topic).
- **Notes:** T8

#### /tools/invoice-number-generator

- **Key:** invoice number generator · also: invoice numbering format
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Build an invoice number format (prefix, year, client code, sequence) and show the next 5 numbers; the rules in one paragraph (unique, sequential; in the EU no gaps). Copy to the generator.
- **Don't write about:** How to number invoices in general (/tools/invoice-number-generator: link it).
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)
- **Notes:** T8

#### /tools/discount-calculator

- **Key:** discount calculator · also: invoice discount calculator; percentage off calculator
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. A discount as a percentage or an amount, before or after tax, with the new total; explain early-payment discounts (e.g. 2/10 net 30).
- **Notes:** T8

#### /tools/markup-calculator

- **Key:** markup calculator · also: markup percentage calculator; price from cost
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Cost + markup % = price, and the margin that gives; the difference between markup and margin in plain words (link the margin calculator). Useful for parts and materials on trade invoices.
- **Notes:** T8

#### /tools/profit-margin-calculator

- **Key:** profit margin calculator · also: gross margin calculator
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Price and cost = margin % and profit; or cost and target margin = price. Link the markup calculator both ways.
- **Notes:** T8

#### /tools/deposit-calculator

- **Key:** deposit calculator · also: down payment calculator; deposit invoice amount
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). The deposit (% or amount) of a job total, the balance due, and both as invoice lines: the deposit invoice and the final invoice with the deposit subtracted, each one click into the generator. Link the deposit templates.
- **Notes:** new

#### /tools/retainage-calculator

- **Key:** retainage calculator · also: retention calculator construction
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Progress billing: contract value, % complete, previous payments and the retainage % = this invoice's amount and the retainage held. US construction term; English only. Link /templates/construction-progress-invoice.
- **Notes:** new

#### /tools/sales-tax-calculator

- **Key:** sales tax calculator · also: us sales tax calculator
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). US sales tax: amount + rate = tax and total; state base rates as presets (sourced, dated; local rates add on top, say so). English only (US topic). Link the VAT calculator for other countries.
- **Don't write about:** The VAT calculator (owned by /tools/vat-calculator).
- **Notes:** new

#### /tools/vat-number-checker

- **Key:** eu vat number checker · also: vies vat check; validate vat number
- **Item:** TL1 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T5. Checks an EU VAT number with the European Commission's VIES service (and often returns the company name). Needs a small server proxy in invoicor_api with caching and rate limits (browsers can't call VIES directly): a decision first.
- **Notes:** T5, needs the API

### Item TL2 (10)

#### /tools/mileage-reimbursement-calculator

- **Key:** mileage reimbursement calculator · also: irs mileage calculator
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Miles × the IRS standard mileage rate (sourced and dated, updated each January); the result as an invoice line. US topic: English only.

#### /tools/hourly-to-salary-calculator

- **Key:** hourly to salary calculator · also: hourly rate to annual salary
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Hourly rate × hours × weeks = yearly, and back; link the hourly rate calculator (that one is for freelancers setting a rate).

#### /tools/day-rate-calculator

- **Key:** day rate calculator · also: freelance day rate
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). A day rate from an hourly rate or a yearly target; half days; link the hourly rate calculator.

#### /tools/overtime-calculator

- **Key:** overtime calculator · also: overtime pay calculator
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Regular and overtime hours and the multiplier (1.5×, 2×) = the amount; the rules for employees differ by country (hedge); for invoicing contractors' overtime.

#### /tools/price-per-square-foot-calculator

- **Key:** price per square foot calculator · also: cost per square foot
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Area (with a rooms helper) × price, or total ÷ area; square meters in metric languages; for trades (flooring, painting).

#### /tools/break-even-calculator

- **Key:** break even calculator · also: break even point
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Fixed costs, price and variable cost = the break-even units and revenue, in plain words.

#### /tools/late-fee-calculator

- **Key:** late fee calculator · also: invoice late fee
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). A US-style late fee (a flat fee or % per month) on an overdue invoice; caps vary by state (hedge). English only; the EU statutory interest is its own tool (late-payment-interest-calculator).

#### /tools/price-increase-calculator

- **Key:** price increase calculator · also: percentage increase calculator
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Old and new price = the % change, or a % raise = the new price; a short template line to tell clients.

#### /tools/commission-calculator

- **Key:** commission calculator · also: sales commission calculator
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Sales × rate (flat or tiered) = the commission to invoice.

#### /tools/utilization-rate-calculator

- **Key:** utilization rate calculator · also: billable hours calculator
- **Item:** TL2 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Billable vs total hours = utilization, and the income at a rate; link the hours calculator.

### Item TL3 (20)

#### /tools/house-cleaning-pricing-calculator

- **Key:** house cleaning pricing calculator · also: how much to charge for house cleaning; cleaning price calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. By hours (home size → hours × rate × cleaners) or by square feet; extras (oven, fridge, inside windows) as add-ons; first deep clean vs regular visit; supplies. Price per visit and per month.
- **Don't write about:** The cleaning-services template's content (link it: /templates/cleaning-services); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: cleaning-services; language versions in metric units with local currency

#### /tools/lawn-mowing-pricing-calculator

- **Key:** lawn mowing pricing calculator · also: lawn care pricing calculator; how much to charge to mow a lawn
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Lot size minus house and drive → mowing time per 1,000 sq ft × rate, trimming and edging, travel, a minimum charge; per cut and per month (weekly or every two weeks).
- **Don't write about:** The landscaping template's content (link it: /templates/landscaping); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: landscaping; language versions in metric units with local currency

#### /tools/pressure-washing-pricing-calculator

- **Key:** pressure washing pricing calculator · also: power washing price calculator; how much to charge for pressure washing
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per square foot by surface (driveway, deck, siding, roof soft wash) at the pro's rate per surface, chemicals, a minimum job charge; total and per square foot.
- **Don't write about:** The pressure-washing template's content (link it: /templates/pressure-washing); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/pressure-washing (“pressure washing invoice template”) · /industries/pressure-washing (“invoice app for pressure washing businesses”)
- **Notes:** template: pressure-washing; language versions in metric units with local currency

#### /tools/painting-cost-calculator

- **Key:** painting cost calculator · also: house painting price calculator; interior painting estimate calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Wall area from room sizes minus doors and windows, coats, coverage per gallon (or litre) → paint needed and its cost, labor per square foot or hour, prep and trim, markup on paint.
- **Don't write about:** The painting template's content (link it: /templates/painting); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/painting (“painting invoice template”)
- **Notes:** template: painting; language versions in metric units with local currency

#### /tools/window-cleaning-pricing-calculator

- **Key:** window cleaning pricing calculator · also: how much to charge for window cleaning
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per window or pane by type (standard, French, skylight), inside and out, height surcharge per storey, screens and tracks, a minimum charge.
- **Don't write about:** The window-cleaning template's content (link it: /templates/window-cleaning); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/window-cleaning (“window cleaning invoice template”)
- **Notes:** template: window-cleaning; language versions in metric units with local currency

#### /tools/snow-removal-pricing-calculator

- **Key:** snow plowing pricing calculator · also: snow removal price calculator; how much to charge for snow plowing
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per push, per event or per season: driveway size, depth triggers (over 2 in, over 6 in), salt per bag, walks by hand; a season price = expected events × price per push (hedge: weather varies).
- **Don't write about:** The snow-removal template's content (link it: /templates/snow-removal); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: snow-removal; language versions in metric units with local currency

#### /tools/carpet-cleaning-pricing-calculator

- **Key:** carpet cleaning pricing calculator · also: how much to charge for carpet cleaning
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per room or per square foot, stairs per step, stain and pet treatment, upholstery pieces, a minimum charge.
- **Don't write about:** The carpet-cleaning template's content (link it: /templates/carpet-cleaning); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/carpet-cleaning (“carpet cleaning invoice template”)
- **Notes:** template: carpet-cleaning; language versions in metric units with local currency

#### /tools/moving-company-pricing-calculator

- **Key:** moving company pricing calculator · also: how much to charge for moving; mover price calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Hourly crew pricing: movers × hours × rate + truck fee + travel time, stairs and long carries, packing materials; local moves only (US interstate moves are regulated: hedge, FMCSA).
- **Don't write about:** The moving template's content (link it: /templates/moving); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/moving (“moving company invoice template”)
- **Notes:** template: moving; language versions in metric units with local currency

#### /tools/junk-removal-pricing-calculator

- **Key:** junk removal pricing calculator · also: how much to charge for junk removal
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. By truck volume (an eighth up to a full load × the pro's full-load price), heavy items and dump fees per ton, items with their own fees (mattresses, tires, fridges), labor for hard access.
- **Don't write about:** The junk-removal template's content (link it: /templates/junk-removal); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/junk-removal (“junk removal invoice template”) · /industries/junk-removal (“invoice app for junk removal businesses”)
- **Notes:** template: junk-removal; language versions in metric units with local currency

#### /tools/photography-pricing-calculator

- **Key:** photography pricing calculator · also: how much to charge for photography; photographer rate calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Cost of doing business: yearly costs (gear, software, insurance) + target income ÷ sessions a year → price per session; editing hours per session; prints and travel as extras. Link the hourly rate calculator.
- **Don't write about:** The photography template's content (link it: /templates/photography); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/photography (“photography invoice template”)
- **Notes:** template: photography; language versions in metric units with local currency

#### /tools/drywall-estimate-calculator

- **Key:** drywall estimate calculator · also: drywall cost calculator; drywall price per square foot
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Sheets from wall and ceiling area + waste, mud, tape and screws per sheet (stated assumptions), hang and finish labor per sheet or square foot, a price step per finish level.
- **Don't write about:** The drywall template's content (link it: /templates/drywall); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/drywall (“drywall invoice template”)
- **Notes:** template: drywall; language versions in metric units with local currency

#### /tools/flooring-installation-cost-calculator

- **Key:** flooring installation cost calculator · also: flooring labor cost calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Area + waste by layout (straight, diagonal, herringbone), material per square foot (pro- or client-supplied), underlayment, removing the old floor, labor per square foot, transitions and stairs.
- **Don't write about:** The flooring template's content (link it: /templates/flooring); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/flooring (“flooring invoice template”)
- **Notes:** template: flooring; language versions in metric units with local currency

#### /tools/tile-installation-cost-calculator

- **Key:** tile installation cost calculator · also: tile labor cost calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Area + waste by tile size and pattern, tiles per box, thinset and grout bags (assumptions), labor per square foot by surface (floor, wall, shower), prep (backer board, waterproofing).
- **Don't write about:** The tile-installation template's content (link it: /templates/tile-installation); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/tile-installation (“tile installation invoice template”)
- **Notes:** template: tile-installation; language versions in metric units with local currency

#### /tools/fence-installation-cost-calculator

- **Key:** fence installation cost calculator · also: fence cost per foot calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Length → posts at a spacing, panels or pickets, concrete bags per post, gates; material per foot at the pro's prices, labor per foot, removing the old fence, a permit line.
- **Don't write about:** The fence-installation template's content (link it: /templates/fence-installation); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/fence-installation (“fence installation invoice template”)
- **Notes:** template: fence-installation; language versions in metric units with local currency

#### /tools/deck-building-cost-calculator

- **Key:** deck cost calculator · also: deck building cost calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Deck area, joists at spacing, decking boards, footings, railing per linear foot, stairs per step; material at the pro's prices (pressure-treated or composite), labor per square foot, permit.
- **Don't write about:** The deck-building template's content (link it: /templates/deck-building); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: deck-building; language versions in metric units with local currency

#### /tools/roofing-estimate-calculator

- **Key:** roofing estimate calculator · also: roof replacement cost calculator; roofing squares calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Footprint × pitch factor → squares, waste by roof complexity, bundles per square, underlayment, tear-off layers, flashing and ridge, labor per square.
- **Don't write about:** The roofing template's content (link it: /templates/roofing); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/roofing (“roofing invoice template”) · /industries/roofers (“roofing invoice app”)
- **Notes:** template: roofing; language versions in metric units with local currency

#### /tools/concrete-cost-calculator

- **Key:** concrete cost calculator · also: concrete slab cost calculator; cubic yards of concrete calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Slab volume (length × width × thickness → cubic yards or m³, + waste), ready-mix per yard or bags, rebar or mesh, forms, finish, labor per square foot, a short-load fee under the supplier's minimum.
- **Don't write about:** The concrete template's content (link it: /templates/concrete); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: concrete; language versions in metric units with local currency

#### /tools/pool-cleaning-pricing-calculator

- **Key:** pool cleaning pricing calculator · also: how much to charge for pool cleaning
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. A monthly route price: visits a month × time per visit × rate, chemicals included or billed, pool size and screen enclosure, travel; a green-to-clean as its own price.
- **Don't write about:** The pool-service template's content (link it: /templates/pool-service); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: pool-service; language versions in metric units with local currency

#### /tools/catering-cost-calculator

- **Key:** catering cost calculator · also: catering price per person calculator
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per guest: food cost per head ÷ the target food-cost share (e.g. 30%) → menu price, staff hours × rate, rentals, travel, service charge and gratuity as their own lines, the deposit share.
- **Don't write about:** The catering template's content (link it: /templates/catering); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/catering (“catering invoice template”)
- **Notes:** template: catering; language versions in metric units with local currency

#### /tools/cake-pricing-calculator

- **Key:** cake pricing calculator · also: how much to charge for a cake
- **Item:** TL3 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Ingredients per recipe (the baker's costs), boxes and boards, decorating hours × hourly rate, overhead per order, margin → price per cake and per serving; cottage-food rules vary (hedge).
- **Don't write about:** The bakery template's content (link it: /templates/bakery); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: bakery; language versions in metric units with local currency

### Item TL4 (9)

#### /tools/uk-vat-calculator

- **Key:** uk vat calculator · also: vat calculator uk; add vat; remove vat 20%
- **Item:** TL4 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Add and remove VAT at 20%, 5% and 0%, the VAT on a VAT-inclusive price (÷ 6 for 20%), a note on the flat rate scheme (link its calculator). Source: GOV.UK.
- **Don't write about:** What /invoice-generator-uk already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /tools/vat-calculator (“vat calculator”)
- **Notes:** links: /invoice-generator-uk, the tools hub

#### /tools/ireland-vat-calculator

- **Key:** ireland vat calculator · also: irish vat calculator
- **Item:** TL4 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 23%, 13.5%, 9%, 4.8% and 0%, add and remove; which goods and services sit at which rate (examples, link Revenue).
- **Don't write about:** What /invoice-generator-ireland already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /tools/vat-calculator (“vat calculator”)
- **Notes:** links: /invoice-generator-ireland, the tools hub

#### /tools/south-africa-vat-calculator

- **Key:** south africa vat calculator · also: sars vat calculator; vat 15% calculator
- **Item:** TL4 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 15% add and remove, the VAT fraction (15/115), zero-rated and exempt examples. Source: SARS.
- **Don't write about:** What /invoice-generator-south-africa already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-south-africa, the tools hub

#### /tools/uae-vat-calculator

- **Key:** uae vat calculator · also: vat 5% calculator uae
- **Item:** TL4 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 5% add and remove, zero-rated and exempt examples, the registration thresholds as a note. Source: the Federal Tax Authority.
- **Don't write about:** What /invoice-generator-uae already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /tools/vat-calculator (“vat calculator”)
- **Notes:** links: /invoice-generator-uae, the tools hub

#### /tools/australia-gst-calculator

- **Key:** australia gst calculator · also: gst calculator; add gst 10%; remove gst
- **Item:** TL4 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 10% add and remove (÷ 11 for the GST in a price), GST-free items, when you must register (A$75,000: check). Source: ATO.
- **Don't write about:** What /invoice-generator-australia already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-australia, the tools hub

#### /tools/nz-gst-calculator

- **Key:** nz gst calculator · also: gst calculator nz 15%
- **Item:** TL4 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 15% add and remove (× 3/23 for the GST in a price), zero-rated exports. Source: Inland Revenue.
- **Don't write about:** What /invoice-generator-new-zealand already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-new-zealand, the tools hub

#### /tools/singapore-gst-calculator

- **Key:** singapore gst calculator · also: gst 9% calculator
- **Item:** TL4 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 9% add and remove (the rate since 2024: check), registration threshold as a note. Source: IRAS.
- **Don't write about:** What /invoice-generator-singapore already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-singapore, the tools hub

#### /tools/india-gst-calculator

- **Key:** india gst calculator · also: gst calculator india; cgst sgst igst calculator
- **Item:** TL4 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Slab rates (check the current slabs: they changed in 2025), CGST + SGST within a state vs IGST between states, inclusive and exclusive. Note e-invoicing above the turnover limit (hedge). Source: CBIC / GST Council.
- **Don't write about:** Rates without a source and date; claims the tool can't back up.
- **Notes:** links: the tools hub, the free generator

#### /tools/canada-gst-hst-calculator

- **Key:** canada gst hst calculator · also: hst calculator; hst calculator ontario; gst calculator canada
- **Item:** TL4 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. By province: GST 5%, HST provinces (13%, 15%: check), PST/QST where they apply, add and remove. Source: CRA and the provinces.
- **Don't write about:** What /invoice-generator-canada already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-canada, the tools hub

### Item TL5 (8)

#### /tools/self-employment-tax-calculator

- **Key:** self employment tax calculator · also: 1099 tax calculator; se tax calculator
- **Item:** TL5 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. US: net earnings × 92.35% × 15.3% up to the Social Security wage base, plus 2.9% Medicare above it, half deductible (all figures for the year: check IRS). An estimate, not tax advice.
- **Don't write about:** What /templates/independent-contractor-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/independent-contractor-invoice, the tools hub

#### /tools/quarterly-estimated-tax-calculator

- **Key:** quarterly estimated tax calculator · also: estimated tax payments calculator
- **Item:** TL5 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. US: expected self-employment income → SE tax + an income tax estimate by bracket, split into the 4 due dates, the safe-harbour rule as a note. An estimate (hedge).
- **Don't write about:** What /tools/self-employment-tax-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/self-employment-tax-calculator, the tools hub

#### /tools/1099-vs-w2-calculator

- **Key:** 1099 vs w2 calculator · also: contractor vs employee pay calculator
- **Item:** TL5 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The contractor rate that matches a salary: SE tax, benefits, unpaid time off, expenses. Link the hourly rate calculator.
- **Don't write about:** What /tools/hourly-rate-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/hourly-rate-calculator, the tools hub

#### /tools/vat-threshold-checker

- **Key:** vat threshold calculator · also: vat registration threshold checker; when do i need to register for vat
- **Item:** TL5 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Rolling 12-month turnover against the threshold (UK first; each language version with its country's threshold and test), the date you'd cross it, what to do next. Source per country, dated.
- **Don't write about:** What /templates/no-vat-invoice already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /tools/vat-calculator (“vat calculator”)
- **Notes:** links: /templates/no-vat-invoice, the tools hub

#### /tools/flat-rate-vat-calculator

- **Key:** flat rate vat calculator · also: flat rate scheme calculator
- **Item:** TL5 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. UK flat rate scheme: the sector percentage, the limited-cost trader test (16.5%), what you charge vs what you pay HMRC, standard vs flat rate compared. Source: GOV.UK.
- **Don't write about:** What /tools/uk-vat-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/uk-vat-calculator, the tools hub

#### /tools/cis-deduction-calculator

- **Key:** cis deduction calculator · also: cis tax calculator; cis invoice calculator
- **Item:** TL5 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. UK Construction Industry Scheme: the deduction (20% registered, 30% not) on the labour part only, materials excluded, VAT on the gross. Source: GOV.UK.
- **Don't write about:** What /templates/subcontractor-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/subcontractor-invoice, the tools hub

#### /tools/reverse-charge-checker

- **Key:** reverse charge checker · also: does reverse charge apply; vat reverse charge check
- **Item:** TL5 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. A few questions (both businesses VAT-registered? in different EU countries? goods or services? B2B?) → whether the reverse charge applies and the wording to put on the invoice. Source: EU VAT Directive and the national tax offices.
- **Don't write about:** What /reverse-charge-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /reverse-charge-invoice, the tools hub

#### /tools/invoice-requirements-checker

- **Key:** invoice requirements checker · also: is my invoice valid; invoice checklist
- **Item:** TL5 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Pick your country and situation (VAT registered or not, B2B or B2C, abroad) → the checklist of what your invoice must show, each item with its source; links to that country's page.
- **Don't write about:** What /templates/no-vat-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/no-vat-invoice, the tools hub

### Item TL6 (13)

#### /tools/paypal-fee-calculator

- **Key:** paypal fee calculator · also: paypal invoice fee calculator; how much to invoice to receive
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. PayPal's fees by country and payment type (invoices, goods and services, international, currency conversion), and the reverse: how much to invoice to receive X. Fees from PayPal's own fee page with the date.
- **Don't write about:** Rates without a source and date; claims the tool can't back up.
- **Notes:** links: the tools hub, the free generator

#### /tools/stripe-fee-calculator

- **Key:** stripe fee calculator · also: stripe processing fee calculator
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Stripe's card fees by country, international and currency surcharges, invoicing fees, the gross-up. From Stripe's pricing page, dated.
- **Don't write about:** What /compare/stripe-invoices already explains (link it); rates without a source and date.
- **Notes:** links: /compare/stripe-invoices, the tools hub

#### /tools/square-fee-calculator

- **Key:** square fee calculator · also: square invoice fee calculator
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Square's fees for invoices, card-present and online, by country, the gross-up. From Square's pricing page, dated.
- **Don't write about:** What /compare/square-invoices already explains (link it); rates without a source and date.
- **Notes:** links: /compare/square-invoices, the tools hub

#### /tools/credit-card-surcharge-calculator

- **Key:** credit card surcharge calculator · also: card surcharge calculator
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The surcharge to cover a card fee, capped at the actual cost, and where surcharges are banned or capped (EU consumer cards, some US states: hedge, cite).
- **Don't write about:** What /tools/stripe-fee-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/stripe-fee-calculator, the tools hub

#### /tools/early-payment-discount-calculator

- **Key:** early payment discount calculator · also: 2/10 net 30 calculator
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Terms like 2/10 net 30: the discounted amount, the last discount date, and the effective annual cost of not taking it.
- **Don't write about:** What /tools/due-date-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/due-date-calculator, the tools hub

#### /tools/invoice-factoring-calculator

- **Key:** invoice factoring calculator · also: factoring cost calculator
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Advance rate, factoring fee per 30 days, reserve released on payment → what you receive and the effective cost. Not advice; terms vary.
- **Don't write about:** What /templates/trucking already explains (link it); rates without a source and date.
- **Notes:** links: /templates/trucking, the tools hub

#### /tools/prorated-invoice-calculator

- **Key:** prorated invoice calculator · also: proration calculator; prorated rent calculator
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. A monthly or yearly price for part of a period: by days in the month or a 30-day month, start and end dates, the amount to invoice.
- **Don't write about:** What /templates/monthly-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/monthly-invoice, the tools hub

#### /tools/business-days-calculator

- **Key:** business days calculator · also: working days calculator
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Business days between two dates or N business days from a date, without weekends and the public holidays of the chosen country (holiday lists sourced, per year).
- **Don't write about:** What /tools/due-date-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/due-date-calculator, the tools hub

#### /tools/dso-calculator

- **Key:** days sales outstanding calculator · also: dso calculator
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Receivables ÷ credit sales × days, what it means for a small business, a target by payment terms.
- **Don't write about:** What /tools/late-payment-interest-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/late-payment-interest-calculator, the tools hub

#### /tools/sepa-qr-code-generator

- **Key:** sepa qr code generator · also: epc qr code generator; girocode generator; bank transfer qr code
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The EPC QR code (GiroCode) for a SEPA transfer: name, IBAN, BIC, amount, reference → a QR to put on the invoice; made in the browser, nothing sent. Spec: the European Payments Council guideline.
- **Don't write about:** What /tools/iban-checker already explains (link it); rates without a source and date.
- **Notes:** links: /tools/iban-checker, the tools hub

#### /tools/swiss-qr-bill-generator

- **Key:** swiss qr bill generator · also: qr rechnung generator; qr bill switzerland
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The Swiss QR-bill payment part: creditor, QR-IBAN or IBAN, reference, amount → the payment slip as PDF/PNG. Spec: SIX Swiss Payment Standards, dated.
- **Don't write about:** What /invoice-generator-switzerland already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-switzerland, the tools hub

#### /tools/amount-in-words-converter

- **Key:** amount in words converter · also: number to words for invoices; write amount in words
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. An amount → words with the currency ('one thousand two hundred euros and 50 cents'), in the page's language, for invoices and cheques where the words are expected.
- **Don't write about:** Rates without a source and date; claims the tool can't back up.
- **Notes:** links: the tools hub, the free generator

#### /tools/invoice-currency-converter

- **Key:** invoice currency converter · also: convert invoice currency; exchange rate for invoices
- **Item:** TL6 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Needs a decision first: the rate source (ECB daily reference rates are free). An amount at the day's reference rate with the date and source, for the 'converted at' note on an invoice.
- **Don't write about:** What /templates/international-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/international-invoice, the tools hub

### Item TL7 (15)

#### /tools/job-costing-calculator

- **Key:** job costing calculator · also: job cost calculator; job profit calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Revenue minus labour (hours × burdened rate), materials, subcontractors, equipment and overhead share → profit and margin per job.
- **Don't write about:** What /tools/profit-margin-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/profit-margin-calculator, the tools hub

#### /tools/overhead-rate-calculator

- **Key:** overhead rate calculator · also: overhead and profit calculator; contractor overhead calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Yearly overhead ÷ billable hours (or direct costs) → the overhead to add per hour or per job, plus the profit target.
- **Don't write about:** What /tools/markup-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/markup-calculator, the tools hub

#### /tools/labor-burden-calculator

- **Key:** labor burden calculator · also: labor burden rate calculator; employee cost calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wage + payroll taxes, insurance, benefits and paid time off ÷ productive hours → the true hourly cost of a worker (rates per country as examples, hedged).
- **Don't write about:** What /tools/job-costing-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/job-costing-calculator, the tools hub

#### /tools/equipment-cost-per-hour-calculator

- **Key:** equipment cost per hour calculator · also: machine rate calculator; equipment rate calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Purchase price, life, resale, fuel, maintenance, insurance ÷ hours a year → the hourly rate to charge for a machine.
- **Don't write about:** What /templates/equipment-rental already explains (link it); rates without a source and date.
- **Notes:** links: /templates/equipment-rental, the tools hub

#### /tools/board-feet-calculator

- **Key:** board feet calculator · also: board foot calculator; lumber calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Thickness × width × length ÷ 144 per board, × pieces, × price per board foot, waste.
- **Don't write about:** What /templates/carpentry already explains (link it); rates without a source and date.
- **Notes:** links: /templates/carpentry, the tools hub

#### /tools/cubic-yard-calculator

- **Key:** cubic yard calculator · also: cubic yards calculator; yardage calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Length × width × depth → cubic yards for concrete, gravel, soil or mulch, + waste, × price per yard (metric: m³ in the language versions of the material calculator).
- **Don't write about:** What /tools/concrete-cost-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/concrete-cost-calculator, the tools hub

#### /tools/insulation-cost-calculator

- **Key:** insulation cost calculator · also: attic insulation calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area × the depth for the target R-value (or U-value) by material (batts, blown), bags or rolls needed, labour per square foot.
- **Don't write about:** What /templates/insulation already explains (link it); rates without a source and date.
- **Notes:** links: /templates/insulation, the tools hub

#### /tools/siding-cost-calculator

- **Key:** siding cost calculator · also: siding squares calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wall area minus openings → squares + waste, trim and J-channel by linear foot, removal of old siding, labour per square.
- **Don't write about:** What /templates/siding already explains (link it); rates without a source and date.
- **Notes:** links: /templates/siding, the tools hub

#### /tools/paver-cost-calculator

- **Key:** paver cost calculator · also: patio paver calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area → pavers by size + waste, base gravel and sand by depth, edging, labour per square foot.
- **Don't write about:** What /templates/masonry already explains (link it); rates without a source and date.
- **Notes:** links: /templates/masonry, the tools hub

#### /tools/retaining-wall-cost-calculator

- **Key:** retaining wall cost calculator · also: retaining wall block calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Length × height → blocks, caps, base and drainage gravel, labour per face foot; walls over a set height need an engineer (hedge).
- **Don't write about:** What /templates/masonry already explains (link it); rates without a source and date.
- **Notes:** links: /templates/masonry, the tools hub

#### /tools/landscape-material-calculator

- **Key:** landscape material calculator · also: mulch calculator; gravel calculator; topsoil calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area × depth → cubic yards or m³ of mulch, gravel or topsoil, bags vs bulk, delivery, the price to put on the invoice.
- **Don't write about:** What /templates/landscaping already explains (link it); rates without a source and date.
- **Notes:** links: /templates/landscaping, the tools hub

#### /tools/sod-cost-calculator

- **Key:** sod cost calculator · also: sod calculator; turf calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area → pallets or rolls of sod, soil prep, labour per square foot, watering in.
- **Don't write about:** What /templates/landscaping already explains (link it); rates without a source and date.
- **Notes:** links: /templates/landscaping, the tools hub

#### /tools/gutter-installation-cost-calculator

- **Key:** gutter installation cost calculator · also: seamless gutter calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Linear feet by material, downspouts by count and height, guards, removal of old gutters.
- **Don't write about:** What /templates/gutter-installation already explains (link it); rates without a source and date.
- **Notes:** links: /templates/gutter-installation, the tools hub

#### /tools/epoxy-floor-cost-calculator

- **Key:** epoxy floor cost calculator · also: garage floor coating calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area → kits or gallons by system and coats, grinding and crack repair, flakes, labour per square foot.
- **Don't write about:** What /templates/epoxy-flooring already explains (link it); rates without a source and date.
- **Notes:** links: /templates/epoxy-flooring, the tools hub

#### /tools/wallpaper-calculator

- **Key:** wallpaper calculator · also: how many rolls of wallpaper; wallpaper cost calculator
- **Item:** TL7 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wall area, roll size and pattern repeat → rolls needed + waste, removal and hanging labour per roll.
- **Don't write about:** What /templates/wallpaper-installation already explains (link it); rates without a source and date.
- **Notes:** links: /templates/wallpaper-installation, the tools hub

### Item TL8 (16)

#### /tools/janitorial-bidding-calculator

- **Key:** janitorial bidding calculator · also: commercial cleaning bid calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Square feet ÷ production rate per hour by space type → hours per visit × visits a month × wage + burden, supplies, overhead and profit → the monthly bid.
- **Don't write about:** What /templates/janitorial already explains (link it); rates without a source and date.
- **Notes:** links: /templates/janitorial, the tools hub

#### /tools/gutter-cleaning-pricing-calculator

- **Key:** gutter cleaning pricing calculator · also: how much to charge for gutter cleaning
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Linear feet by storey, downspouts, debris level, guards, a minimum.
- **Don't write about:** What /templates/gutter-cleaning already explains (link it); rates without a source and date.
- **Notes:** links: /templates/gutter-cleaning, the tools hub

#### /tools/pest-control-pricing-calculator

- **Key:** pest control pricing calculator · also: how much to charge for pest control
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Initial vs recurring service, home size, pest type, materials, quarterly vs monthly plans.
- **Don't write about:** What /templates/pest-control already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/pest-control (“pest control invoice template”) · /industries/pest-control (“pest control invoicing software”)
- **Notes:** links: /templates/pest-control, the tools hub

#### /tools/pet-sitting-pricing-calculator

- **Key:** pet sitting pricing calculator · also: dog walking rates calculator; how much to charge for pet sitting
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Visit length, pets, overnight stays, holidays and travel → per visit and per week.
- **Don't write about:** What /templates/pet-sitting already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/pet-sitting (“pet sitting invoice template”)
- **Notes:** links: /templates/pet-sitting, the tools hub

#### /tools/dog-grooming-pricing-calculator

- **Key:** dog grooming pricing calculator · also: grooming price calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Size and coat → time × hourly rate, add-ons, matting and behaviour fees, mobile fee.
- **Don't write about:** What /templates/dog-grooming already explains (link it); rates without a source and date.
- **Notes:** links: /templates/dog-grooming, the tools hub

#### /tools/auto-detailing-pricing-calculator

- **Key:** auto detailing pricing calculator · also: car detailing price calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Vehicle size and condition, package, add-ons (ceramic, odour), mobile fee → price per car.
- **Don't write about:** What /templates/auto-detailing already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/auto-detailing (“auto detailing invoice template”)
- **Notes:** links: /templates/auto-detailing, the tools hub

#### /tools/courier-delivery-pricing-calculator

- **Key:** courier delivery pricing calculator · also: delivery fee calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Base fee + distance × rate, weight and size, rush and waiting time, fuel surcharge.
- **Don't write about:** What /templates/courier already explains (link it); rates without a source and date.
- **Notes:** links: /templates/courier, the tools hub

#### /tools/event-planner-fee-calculator

- **Key:** event planner fee calculator · also: wedding planner fee calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Flat fee vs % of the event budget vs hourly, compared side by side, with the deposit share.
- **Don't write about:** What /templates/event-planning already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/event-planning (“event planner invoice template”) · /industries/event-planners (“invoice app for event planners”)
- **Notes:** links: /templates/event-planning, the tools hub

#### /tools/florist-pricing-calculator

- **Key:** florist pricing calculator · also: flower pricing formula calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wholesale cost × the markup (e.g. 3×) + labour %, hard goods at a lower markup → the retail price per arrangement.
- **Don't write about:** What /templates/florist already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/florist (“florist invoice template”) · /industries/florists (“invoice app for florists”)
- **Notes:** links: /templates/florist, the tools hub

#### /tools/translation-cost-calculator

- **Key:** translation cost calculator · also: translation rate calculator; price per word calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Words × rate per word by language pair and field, minimum fee, rush and certification fees.
- **Don't write about:** What /templates/translation already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/translation (“translation invoice template”)
- **Notes:** links: /templates/translation, the tools hub

#### /tools/transcription-cost-calculator

- **Key:** transcription cost calculator · also: transcription rate calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Audio minutes × rate by turnaround and quality, speaker and timestamp add-ons.
- **Don't write about:** What /templates/transcription already explains (link it); rates without a source and date.
- **Notes:** links: /templates/transcription, the tools hub

#### /tools/voice-over-rate-calculator

- **Key:** voice over rate calculator · also: voice over rates calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Per word or finished minute + usage (media, region, term) → a fee range from the pro's own base rate.
- **Don't write about:** What /templates/voice-over already explains (link it); rates without a source and date.
- **Notes:** links: /templates/voice-over, the tools hub

#### /tools/copywriting-rate-calculator

- **Key:** copywriting rate calculator · also: freelance writing rate calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Per word vs per hour vs per project: words, research and revision time, the hourly rate behind a per-word price.
- **Don't write about:** What /templates/copywriting already explains (link it); rates without a source and date.
- **Notes:** links: /templates/copywriting, the tools hub

#### /tools/trucking-cost-per-mile-calculator

- **Key:** trucking cost per mile calculator · also: cost per mile calculator trucking
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Fixed costs (truck payment, insurance, permits) + variable (fuel, maintenance, tyres) ÷ miles (km in the language versions) → cost per mile and the minimum rate.
- **Don't write about:** What /templates/trucking already explains (link it); rates without a source and date.
- **Notes:** links: /templates/trucking, the tools hub

#### /tools/fuel-surcharge-calculator

- **Key:** fuel surcharge calculator · also: trucking fuel surcharge calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Today's diesel price vs the base price ÷ the truck's mpg → the surcharge per mile (US DOE weekly price as the reference, dated).
- **Don't write about:** What /templates/trucking already explains (link it); rates without a source and date.
- **Notes:** links: /templates/trucking, the tools hub

#### /tools/detention-pay-calculator

- **Key:** detention pay calculator · also: detention time calculator
- **Item:** TL8 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Free time, the hourly detention rate, arrival and departure times → the detention line for the invoice.
- **Don't write about:** What /templates/trucking already explains (link it); rates without a source and date.
- **Notes:** links: /templates/trucking, the tools hub

### Item TL9 (7)

#### /tools/3d-printing-cost-calculator

- **Key:** 3d printing cost calculator · also: 3d print price calculator
- **Item:** TL9 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Filament or resin grams × price, machine hours × rate, electricity, failure rate, post-processing, margin.
- **Don't write about:** What /templates/3d-printing already explains (link it); rates without a source and date.
- **Notes:** links: /templates/3d-printing, the tools hub

#### /tools/screen-printing-pricing-calculator

- **Key:** screen printing pricing calculator · also: t-shirt printing price calculator
- **Item:** TL9 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Quantity breaks, colours per location, screens and setup, blanks, extra locations → price per shirt.
- **Don't write about:** What /templates/screen-printing already explains (link it); rates without a source and date.
- **Notes:** links: /templates/screen-printing, the tools hub

#### /tools/embroidery-pricing-calculator

- **Key:** embroidery pricing calculator · also: embroidery stitch count price calculator
- **Item:** TL9 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Stitch count × rate per 1,000 stitches, digitising fee, quantity breaks, garments.
- **Don't write about:** What /templates/embroidery already explains (link it); rates without a source and date.
- **Notes:** links: /templates/embroidery, the tools hub

#### /tools/wholesale-price-calculator

- **Key:** wholesale price calculator · also: retail price calculator; keystone pricing calculator
- **Item:** TL9 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Cost → wholesale (× 2) → retail (× 2, keystone) or by target margin, for makers selling to shops.
- **Don't write about:** What /templates/crafts already explains (link it); rates without a source and date.
- **Notes:** links: /templates/crafts, the tools hub

#### /tools/etsy-fee-calculator

- **Key:** etsy fee calculator · also: etsy profit calculator
- **Item:** TL9 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Listing, transaction, payment processing and offsite-ads fees by country (from Etsy's fee page, dated) → profit per sale.
- **Don't write about:** What /templates/crafts already explains (link it); rates without a source and date.
- **Notes:** links: /templates/crafts, the tools hub

#### /tools/upholstery-fabric-calculator

- **Key:** upholstery fabric calculator · also: how much fabric to reupholster
- **Item:** TL9 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Yards (metres) by piece type, pattern repeat, cushions → fabric needed and its cost.
- **Don't write about:** What /templates/upholstery already explains (link it); rates without a source and date.
- **Notes:** links: /templates/upholstery, the tools hub

#### /tools/laser-engraving-pricing-calculator

- **Key:** laser engraving pricing calculator · also: laser cutting price calculator
- **Item:** TL9 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Machine minutes × rate, material, setup, quantity breaks.
- **Don't write about:** What /templates/laser-engraving already explains (link it); rates without a source and date.
- **Notes:** links: /templates/laser-engraving, the tools hub
