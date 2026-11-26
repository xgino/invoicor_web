# Free tools

> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**4 done · 41 planned**

## Direction

- **URL:** `/tools/{tool}` (local slugs per language, `lib/i18n/routes.ts`) · **Key:** "{tool} calculator / checker / generator"
- **Blueprint:** [ROADMAP.md](../../ROADMAP.md#t-free-tools) · **Where it's written:** page code: `components/tools/`, `lib/tools/registry.ts`
- **Links to:** the free generator, the other tools (hub), the related templates.
- **Languages:** **yes**: every tool exists in all 11 languages with local presets (T9).

**Can do:**

- A tool that works in the browser and gives a real answer (a number, a check), with the steps in plain words.
- A button that puts the result on an invoice in the free generator (`?item=&qty=&price=&tax=&currency=`).
- Country presets per language (rates, number format, currency).
- Pricing calculators for a trade ("house cleaning pricing calculator"): the pro enters their own rates, the tool does the trade's math (square feet, coats, visits, loads, guests), then puts the price on an invoice.

**Can't do:**

- Rates or rules without a source and a date (VAT, late-payment interest): re-check every 6 months.
- Claims a check can't back up: an IBAN check catches typos, it doesn't prove who owns the account.
- Tools that need our server or a paid API without a decision first (VAT number check, business register: T5, T6).
- Market prices as facts ("house cleaning costs $150"): default inputs are labelled as examples to replace, and a price range appears only with its source and date.

## Done (4): don't build these again

`/tools` free invoicing tools · `vat-calculator` vat calculator · `hours-calculator` hours calculator · `hourly-rate-calculator` freelance hourly rate calculator

## Planned (41)

### Item TL1 (11)

#### /tools/iban-checker

- **Key:** iban checker · also: iban validator; check iban
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T3. Check an IBAN in the browser: length per country and the ISO 13616 mod-97 check digits; show the country and the bank code. Say plainly: it catches typos, it doesn't prove who owns the account (since October 2025 EU banks check the name for SEPA transfers: Verification of Payee).
- **Notes:** T3

#### /tools/late-payment-interest-calculator

- **Key:** late payment interest calculator · also: late payment fee calculator; statutory interest calculator
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T7. Business-to-business late payment interest per country: EU statutory interest (the ECB reference rate + 8 points; + 9 in Germany) and the fixed €40 compensation per invoice; the UK's Late Payment Act (base rate + 8%, fixed sums by debt size); consumer rules differ (e.g. the Dutch WIK scale). Every rate with its source and date; re-check every half year. The result goes onto a reminder invoice in the generator.
- **Notes:** T7

#### /tools/due-date-calculator

- **Key:** invoice due date calculator · also: net 30 calculator; payment terms calculator
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Invoice date + terms (due on receipt, Net 7/15/30/60, end of month, end of month + 30) = the due date, with the weekday; explain each term in one line.
- **Don't write about:** What payment terms mean in depth (the blog topic invoice-payment-terms).
- **Notes:** T8

#### /tools/invoice-number-generator

- **Key:** invoice number generator · also: invoice numbering format
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Build an invoice number format (prefix, year, client code, sequence) and show the next 5 numbers; the rules in one paragraph (unique, sequential; in the EU no gaps). Copy to the generator.
- **Don't write about:** How to number invoices in general (the blog: learn:/how-to-number-invoices-on-iphone).
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”) · learn:/how-to-number-invoices-on-iphone (“how to number invoices on iphone”)
- **Notes:** T8

#### /tools/discount-calculator

- **Key:** discount calculator · also: invoice discount calculator; percentage off calculator
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. A discount as a percentage or an amount, before or after tax, with the new total; explain early-payment discounts (e.g. 2/10 net 30).
- **Notes:** T8

#### /tools/markup-calculator

- **Key:** markup calculator · also: markup percentage calculator; price from cost
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Cost + markup % = price, and the margin that gives; the difference between markup and margin in plain words (link the margin calculator). Useful for parts and materials on trade invoices.
- **Notes:** T8

#### /tools/profit-margin-calculator

- **Key:** profit margin calculator · also: gross margin calculator
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Price and cost = margin % and profit; or cost and target margin = price. Link the markup calculator both ways.
- **Notes:** T8

#### /tools/deposit-calculator

- **Key:** deposit calculator · also: down payment calculator; deposit invoice amount
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). The deposit (% or amount) of a job total, the balance due, and both as invoice lines: the deposit invoice and the final invoice with the deposit subtracted, each one click into the generator. Link the deposit templates.
- **Notes:** new

#### /tools/retainage-calculator

- **Key:** retainage calculator · also: retention calculator construction
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Progress billing: contract value, % complete, previous payments and the retainage % = this invoice's amount and the retainage held. US construction term; English only. Link /templates/construction-progress-invoice.
- **Notes:** new

#### /tools/sales-tax-calculator

- **Key:** sales tax calculator · also: us sales tax calculator
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). US sales tax: amount + rate = tax and total; state base rates as presets (sourced, dated; local rates add on top, say so). English only (US topic). Link the VAT calculator for other countries.
- **Don't write about:** The VAT calculator (owned by /tools/vat-calculator).
- **Already covered (link, don't repeat):** learn:/what-does-an-invoice-tax-calculator-do (“what does an invoice tax calculator do”)
- **Notes:** new

#### /tools/vat-number-checker

- **Key:** eu vat number checker · also: vies vat check; validate vat number
- **Item:** TL1 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T5. Checks an EU VAT number with the European Commission's VIES service (and often returns the company name). Needs a small server proxy in invoicor_api with caching and rate limits (browsers can't call VIES directly): a decision first.
- **Notes:** T5, needs the API

### Item TL2 (10)

#### /tools/mileage-reimbursement-calculator

- **Key:** mileage reimbursement calculator · also: irs mileage calculator
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Miles × the IRS standard mileage rate (sourced and dated, updated each January); the result as an invoice line. US topic: English only.

#### /tools/hourly-to-salary-calculator

- **Key:** hourly to salary calculator · also: hourly rate to annual salary
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Hourly rate × hours × weeks = yearly, and back; link the hourly rate calculator (that one is for freelancers setting a rate).

#### /tools/day-rate-calculator

- **Key:** day rate calculator · also: freelance day rate
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). A day rate from an hourly rate or a yearly target; half days; link the hourly rate calculator.

#### /tools/overtime-calculator

- **Key:** overtime calculator · also: overtime pay calculator
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Regular and overtime hours and the multiplier (1.5×, 2×) = the amount; the rules for employees differ by country (hedge); for invoicing contractors' overtime.

#### /tools/price-per-square-foot-calculator

- **Key:** price per square foot calculator · also: cost per square foot
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Area (with a rooms helper) × price, or total ÷ area; square meters in metric languages; for trades (flooring, painting).

#### /tools/break-even-calculator

- **Key:** break even calculator · also: break even point
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Fixed costs, price and variable cost = the break-even units and revenue, in plain words.

#### /tools/late-fee-calculator

- **Key:** late fee calculator · also: invoice late fee
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). A US-style late fee (a flat fee or % per month) on an overdue invoice; caps vary by state (hedge). English only; the EU statutory interest is its own tool (late-payment-interest-calculator).

#### /tools/price-increase-calculator

- **Key:** price increase calculator · also: percentage increase calculator
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Old and new price = the % change, or a % raise = the new price; a short template line to tell clients.

#### /tools/commission-calculator

- **Key:** commission calculator · also: sales commission calculator
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Sales × rate (flat or tiered) = the commission to invoice.

#### /tools/utilization-rate-calculator

- **Key:** utilization rate calculator · also: billable hours calculator
- **Item:** TL2 · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Billable vs total hours = utilization, and the income at a rate; link the hours calculator.

### Item TL3 (20)

#### /tools/house-cleaning-pricing-calculator

- **Key:** house cleaning pricing calculator · also: how much to charge for house cleaning; cleaning price calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. By hours (home size → hours × rate × cleaners) or by square feet; extras (oven, fridge, inside windows) as add-ons; first deep clean vs regular visit; supplies. Price per visit and per month.
- **Don't write about:** The cleaning-services template's content (link it: /templates/cleaning-services); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: cleaning-services; language versions in metric units with local currency

#### /tools/lawn-mowing-pricing-calculator

- **Key:** lawn mowing pricing calculator · also: lawn care pricing calculator; how much to charge to mow a lawn
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Lot size minus house and drive → mowing time per 1,000 sq ft × rate, trimming and edging, travel, a minimum charge; per cut and per month (weekly or every two weeks).
- **Don't write about:** The landscaping template's content (link it: /templates/landscaping); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: landscaping; language versions in metric units with local currency

#### /tools/pressure-washing-pricing-calculator

- **Key:** pressure washing pricing calculator · also: power washing price calculator; how much to charge for pressure washing
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per square foot by surface (driveway, deck, siding, roof soft wash) at the pro's rate per surface, chemicals, a minimum job charge; total and per square foot.
- **Don't write about:** The pressure-washing template's content (link it: /templates/pressure-washing); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/pressure-washing (“pressure washing invoice template”) · /industries/pressure-washing (“invoice app for pressure washing businesses”)
- **Notes:** template: pressure-washing; language versions in metric units with local currency

#### /tools/painting-cost-calculator

- **Key:** painting cost calculator · also: house painting price calculator; interior painting estimate calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Wall area from room sizes minus doors and windows, coats, coverage per gallon (or litre) → paint needed and its cost, labor per square foot or hour, prep and trim, markup on paint.
- **Don't write about:** The painting template's content (link it: /templates/painting); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/painting (“painting invoice template”)
- **Notes:** template: painting; language versions in metric units with local currency

#### /tools/window-cleaning-pricing-calculator

- **Key:** window cleaning pricing calculator · also: how much to charge for window cleaning
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per window or pane by type (standard, French, skylight), inside and out, height surcharge per storey, screens and tracks, a minimum charge.
- **Don't write about:** The window-cleaning template's content (link it: /templates/window-cleaning); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/window-cleaning (“window cleaning invoice template”)
- **Notes:** template: window-cleaning; language versions in metric units with local currency

#### /tools/snow-removal-pricing-calculator

- **Key:** snow plowing pricing calculator · also: snow removal price calculator; how much to charge for snow plowing
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per push, per event or per season: driveway size, depth triggers (over 2 in, over 6 in), salt per bag, walks by hand; a season price = expected events × price per push (hedge: weather varies).
- **Don't write about:** The snow-removal template's content (link it: /templates/snow-removal); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: snow-removal; language versions in metric units with local currency

#### /tools/carpet-cleaning-pricing-calculator

- **Key:** carpet cleaning pricing calculator · also: how much to charge for carpet cleaning
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per room or per square foot, stairs per step, stain and pet treatment, upholstery pieces, a minimum charge.
- **Don't write about:** The carpet-cleaning template's content (link it: /templates/carpet-cleaning); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/carpet-cleaning (“carpet cleaning invoice template”)
- **Notes:** template: carpet-cleaning; language versions in metric units with local currency

#### /tools/moving-company-pricing-calculator

- **Key:** moving company pricing calculator · also: how much to charge for moving; mover price calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Hourly crew pricing: movers × hours × rate + truck fee + travel time, stairs and long carries, packing materials; local moves only (US interstate moves are regulated: hedge, FMCSA).
- **Don't write about:** The moving template's content (link it: /templates/moving); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/moving (“moving company invoice template”)
- **Notes:** template: moving; language versions in metric units with local currency

#### /tools/junk-removal-pricing-calculator

- **Key:** junk removal pricing calculator · also: how much to charge for junk removal
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. By truck volume (an eighth up to a full load × the pro's full-load price), heavy items and dump fees per ton, items with their own fees (mattresses, tires, fridges), labor for hard access.
- **Don't write about:** The junk-removal template's content (link it: /templates/junk-removal); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/junk-removal (“junk removal invoice template”) · /industries/junk-removal (“invoice app for junk removal businesses”)
- **Notes:** template: junk-removal; language versions in metric units with local currency

#### /tools/photography-pricing-calculator

- **Key:** photography pricing calculator · also: how much to charge for photography; photographer rate calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Cost of doing business: yearly costs (gear, software, insurance) + target income ÷ sessions a year → price per session; editing hours per session; prints and travel as extras. Link the hourly rate calculator.
- **Don't write about:** The photography template's content (link it: /templates/photography); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/photography (“photography invoice template”)
- **Notes:** template: photography; language versions in metric units with local currency

#### /tools/drywall-estimate-calculator

- **Key:** drywall estimate calculator · also: drywall cost calculator; drywall price per square foot
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Sheets from wall and ceiling area + waste, mud, tape and screws per sheet (stated assumptions), hang and finish labor per sheet or square foot, a price step per finish level.
- **Don't write about:** The drywall template's content (link it: /templates/drywall); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/drywall (“drywall invoice template”)
- **Notes:** template: drywall; language versions in metric units with local currency

#### /tools/flooring-installation-cost-calculator

- **Key:** flooring installation cost calculator · also: flooring labor cost calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Area + waste by layout (straight, diagonal, herringbone), material per square foot (pro- or client-supplied), underlayment, removing the old floor, labor per square foot, transitions and stairs.
- **Don't write about:** The flooring template's content (link it: /templates/flooring); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/flooring (“flooring invoice template”)
- **Notes:** template: flooring; language versions in metric units with local currency

#### /tools/tile-installation-cost-calculator

- **Key:** tile installation cost calculator · also: tile labor cost calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Area + waste by tile size and pattern, tiles per box, thinset and grout bags (assumptions), labor per square foot by surface (floor, wall, shower), prep (backer board, waterproofing).
- **Don't write about:** The tile-installation template's content (link it: /templates/tile-installation); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/tile-installation (“tile installation invoice template”)
- **Notes:** template: tile-installation; language versions in metric units with local currency

#### /tools/fence-installation-cost-calculator

- **Key:** fence installation cost calculator · also: fence cost per foot calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Length → posts at a spacing, panels or pickets, concrete bags per post, gates; material per foot at the pro's prices, labor per foot, removing the old fence, a permit line.
- **Don't write about:** The fence-installation template's content (link it: /templates/fence-installation); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/fence-installation (“fence installation invoice template”)
- **Notes:** template: fence-installation; language versions in metric units with local currency

#### /tools/deck-building-cost-calculator

- **Key:** deck cost calculator · also: deck building cost calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Deck area, joists at spacing, decking boards, footings, railing per linear foot, stairs per step; material at the pro's prices (pressure-treated or composite), labor per square foot, permit.
- **Don't write about:** The deck-building template's content (link it: /templates/deck-building); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: deck-building; language versions in metric units with local currency

#### /tools/roofing-estimate-calculator

- **Key:** roofing estimate calculator · also: roof replacement cost calculator; roofing squares calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Footprint × pitch factor → squares, waste by roof complexity, bundles per square, underlayment, tear-off layers, flashing and ridge, labor per square.
- **Don't write about:** The roofing template's content (link it: /templates/roofing); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/roofing (“roofing invoice template”) · /industries/roofers (“roofing invoice app”)
- **Notes:** template: roofing; language versions in metric units with local currency

#### /tools/concrete-cost-calculator

- **Key:** concrete cost calculator · also: concrete slab cost calculator; cubic yards of concrete calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Slab volume (length × width × thickness → cubic yards or m³, + waste), ready-mix per yard or bags, rebar or mesh, forms, finish, labor per square foot, a short-load fee under the supplier's minimum.
- **Don't write about:** The concrete template's content (link it: /templates/concrete); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: concrete; language versions in metric units with local currency

#### /tools/pool-cleaning-pricing-calculator

- **Key:** pool cleaning pricing calculator · also: how much to charge for pool cleaning
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. A monthly route price: visits a month × time per visit × rate, chemicals included or billed, pool size and screen enclosure, travel; a green-to-clean as its own price.
- **Don't write about:** The pool-service template's content (link it: /templates/pool-service); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: pool-service; language versions in metric units with local currency

#### /tools/catering-cost-calculator

- **Key:** catering cost calculator · also: catering price per person calculator
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per guest: food cost per head ÷ the target food-cost share (e.g. 30%) → menu price, staff hours × rate, rentals, travel, service charge and gratuity as their own lines, the deposit share.
- **Don't write about:** The catering template's content (link it: /templates/catering); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/catering (“catering invoice template”)
- **Notes:** template: catering; language versions in metric units with local currency

#### /tools/cake-pricing-calculator

- **Key:** cake pricing calculator · also: how much to charge for a cake
- **Item:** TL3 · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Ingredients per recipe (the baker's costs), boxes and boards, decorating hours × hourly rate, overhead per order, margin → price per cake and per serving; cottage-food rules vary (hedge).
- **Don't write about:** The bakery template's content (link it: /templates/bakery); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: bakery; language versions in metric units with local currency
