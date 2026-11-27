# Free tools

> **Generated, don't edit by hand.** Rules: [RULES.md](../RULES.md); pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**4 done · 109 planned**

## Direction

URL, key, sections, what these pages can and can't do, links and languages: [RULES.md § TL · Free tools](../RULES.md#tl--free-tools).

## Done (4): don't build these again

**TL1** `/tools` free invoicing tools · **TL2** `vat-calculator` vat calculator · **TL3** `hours-calculator` hours calculator · **TL4** `hourly-rate-calculator` freelance hourly rate calculator

## Planned (109)

### TL5–TL15: Free tools I (11)

#### TL5 · /tools/iban-checker

- **Key:** iban checker · also: iban validator; check iban
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T3. Check an IBAN in the browser: length per country and the ISO 13616 mod-97 check digits; show the country and the bank code. Say plainly: it catches typos, it doesn't prove who owns the account (since October 2025 EU banks check the name for SEPA transfers: Verification of Payee).
- **Notes:** T3

#### TL6 · /tools/late-payment-interest-calculator

- **Key:** late payment interest calculator · also: late payment fee calculator; statutory interest calculator
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T7. Business-to-business late payment interest per country: EU statutory interest (the ECB reference rate + 8 points; + 9 in Germany) and the fixed €40 compensation per invoice; the UK's Late Payment Act (base rate + 8%, fixed sums by debt size); consumer rules differ (e.g. the Dutch WIK scale). Every rate with its source and date; re-check every half year. The result goes onto a reminder invoice in the generator.
- **Notes:** T7

#### TL7 · /tools/due-date-calculator

- **Key:** invoice due date calculator · also: net 30 calculator; payment terms calculator
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Invoice date + terms (due on receipt, Net 7/15/30/60, end of month, end of month + 30) = the due date, with the weekday; explain each term in one line.
- **Don't write about:** What payment terms mean in depth (not this page's topic).
- **Notes:** T8

#### TL8 · /tools/invoice-number-generator

- **Key:** invoice number generator · also: invoice numbering format
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Build an invoice number format (prefix, year, client code, sequence) and show the next 5 numbers; the rules in one paragraph (unique, sequential; in the EU no gaps). Copy to the generator.
- **Don't write about:** How to number invoices in general (/tools/invoice-number-generator: link it).
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)
- **Notes:** T8

#### TL9 · /tools/discount-calculator

- **Key:** discount calculator · also: invoice discount calculator; percentage off calculator
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. A discount as a percentage or an amount, before or after tax, with the new total; explain early-payment discounts (e.g. 2/10 net 30).
- **Notes:** T8

#### TL10 · /tools/markup-calculator

- **Key:** markup calculator · also: markup percentage calculator; price from cost
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Cost + markup % = price, and the margin that gives; the difference between markup and margin in plain words (link the margin calculator). Useful for parts and materials on trade invoices.
- **Notes:** T8

#### TL11 · /tools/profit-margin-calculator

- **Key:** profit margin calculator · also: gross margin calculator
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Price and cost = margin % and profit; or cost and target margin = price. Link the markup calculator both ways.
- **Notes:** T8

#### TL12 · /tools/deposit-calculator

- **Key:** deposit calculator · also: down payment calculator; deposit invoice amount
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). The deposit (% or amount) of a job total, the balance due, and both as invoice lines: the deposit invoice and the final invoice with the deposit subtracted, each one click into the generator. Link the deposit templates.
- **Already covered (link, don't repeat):** /templates/deposit-invoice (“deposit invoice template”)
- **Notes:** new

#### TL13 · /tools/retainage-calculator

- **Key:** retainage calculator · also: retention calculator construction
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Progress billing: contract value, % complete, previous payments and the retainage % = this invoice's amount and the retainage held. US construction term; English only. Link /templates/construction-progress-invoice.
- **Notes:** new

#### TL14 · /tools/sales-tax-calculator

- **Key:** sales tax calculator · also: us sales tax calculator
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). US sales tax: amount + rate = tax and total; state base rates as presets (sourced, dated; local rates add on top, say so). English only (US topic). Link the VAT calculator for other countries.
- **Don't write about:** The VAT calculator (owned by /tools/vat-calculator).
- **Notes:** new

#### TL15 · /tools/vat-number-checker

- **Key:** eu vat number checker · also: vies vat check; validate vat number
- **Group:** TL5–TL15 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T5. Checks an EU VAT number with the European Commission's VIES service (and often returns the company name). Needs a small server proxy in invoicor_api with caching and rate limits (browsers can't call VIES directly): a decision first.
- **Notes:** T5, needs the API

### TL16–TL25: Free tools II (10)

#### TL16 · /tools/mileage-reimbursement-calculator

- **Key:** mileage reimbursement calculator · also: irs mileage calculator
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Miles × the IRS standard mileage rate (sourced and dated, updated each January); the result as an invoice line. US topic: English only.

#### TL17 · /tools/hourly-to-salary-calculator

- **Key:** hourly to salary calculator · also: hourly rate to annual salary
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Hourly rate × hours × weeks = yearly, and back; link the hourly rate calculator (that one is for freelancers setting a rate).

#### TL18 · /tools/day-rate-calculator

- **Key:** day rate calculator · also: freelance day rate
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). A day rate from an hourly rate or a yearly target; half days; link the hourly rate calculator.

#### TL19 · /tools/overtime-calculator

- **Key:** overtime calculator · also: overtime pay calculator
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Regular and overtime hours and the multiplier (1.5×, 2×) = the amount; the rules for employees differ by country (hedge); for invoicing contractors' overtime.

#### TL20 · /tools/price-per-square-foot-calculator

- **Key:** price per square foot calculator · also: cost per square foot
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Area (with a rooms helper) × price, or total ÷ area; square meters in metric languages; for trades (flooring, painting).

#### TL21 · /tools/break-even-calculator

- **Key:** break even calculator · also: break even point
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Fixed costs, price and variable cost = the break-even units and revenue, in plain words.

#### TL22 · /tools/late-fee-calculator

- **Key:** late fee calculator · also: invoice late fee
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). A US-style late fee (a flat fee or % per month) on an overdue invoice; caps vary by state (hedge). English only; the EU statutory interest is its own tool (late-payment-interest-calculator).

#### TL23 · /tools/price-increase-calculator

- **Key:** price increase calculator · also: percentage increase calculator
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Old and new price = the % change, or a % raise = the new price; a short template line to tell clients.

#### TL24 · /tools/commission-calculator

- **Key:** commission calculator · also: sales commission calculator
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Sales × rate (flat or tiered) = the commission to invoice.

#### TL25 · /tools/utilization-rate-calculator

- **Key:** utilization rate calculator · also: billable hours calculator
- **Group:** TL16–TL25 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Billable vs total hours = utilization, and the income at a rate; link the hours calculator.

### TL26–TL45: Pricing calculators for trades (20)

#### TL26 · /tools/house-cleaning-pricing-calculator

- **Key:** house cleaning pricing calculator · also: how much to charge for house cleaning; cleaning price calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. By hours (home size → hours × rate × cleaners) or by square feet; extras (oven, fridge, inside windows) as add-ons; first deep clean vs regular visit; supplies. Price per visit and per month.
- **Don't write about:** The cleaning-services template's content (link it: /templates/cleaning-services); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: cleaning-services; language versions in metric units with local currency

#### TL27 · /tools/lawn-mowing-pricing-calculator

- **Key:** lawn mowing pricing calculator · also: lawn care pricing calculator; how much to charge to mow a lawn
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Lot size minus house and drive → mowing time per 1,000 sq ft × rate, trimming and edging, travel, a minimum charge; per cut and per month (weekly or every two weeks).
- **Don't write about:** The landscaping template's content (link it: /templates/landscaping); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: landscaping; language versions in metric units with local currency

#### TL28 · /tools/pressure-washing-pricing-calculator

- **Key:** pressure washing pricing calculator · also: power washing price calculator; how much to charge for pressure washing
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per square foot by surface (driveway, deck, siding, roof soft wash) at the pro's rate per surface, chemicals, a minimum job charge; total and per square foot.
- **Don't write about:** The pressure-washing template's content (link it: /templates/pressure-washing); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/pressure-washing (“pressure washing invoice template”) · /industries/pressure-washing (“invoice app for pressure washing businesses”)
- **Notes:** template: pressure-washing; language versions in metric units with local currency

#### TL29 · /tools/painting-cost-calculator

- **Key:** painting cost calculator · also: house painting price calculator; interior painting estimate calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Wall area from room sizes minus doors and windows, coats, coverage per gallon (or litre) → paint needed and its cost, labor per square foot or hour, prep and trim, markup on paint.
- **Don't write about:** The painting template's content (link it: /templates/painting); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/painting (“painting invoice template”)
- **Notes:** template: painting; language versions in metric units with local currency

#### TL30 · /tools/window-cleaning-pricing-calculator

- **Key:** window cleaning pricing calculator · also: how much to charge for window cleaning
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per window or pane by type (standard, French, skylight), inside and out, height surcharge per storey, screens and tracks, a minimum charge.
- **Don't write about:** The window-cleaning template's content (link it: /templates/window-cleaning); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/window-cleaning (“window cleaning invoice template”)
- **Notes:** template: window-cleaning; language versions in metric units with local currency

#### TL31 · /tools/snow-removal-pricing-calculator

- **Key:** snow plowing pricing calculator · also: snow removal price calculator; how much to charge for snow plowing
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per push, per event or per season: driveway size, depth triggers (over 2 in, over 6 in), salt per bag, walks by hand; a season price = expected events × price per push (hedge: weather varies).
- **Don't write about:** The snow-removal template's content (link it: /templates/snow-removal); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: snow-removal; language versions in metric units with local currency

#### TL32 · /tools/carpet-cleaning-pricing-calculator

- **Key:** carpet cleaning pricing calculator · also: how much to charge for carpet cleaning
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per room or per square foot, stairs per step, stain and pet treatment, upholstery pieces, a minimum charge.
- **Don't write about:** The carpet-cleaning template's content (link it: /templates/carpet-cleaning); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/carpet-cleaning (“carpet cleaning invoice template”)
- **Notes:** template: carpet-cleaning; language versions in metric units with local currency

#### TL33 · /tools/moving-company-pricing-calculator

- **Key:** moving company pricing calculator · also: how much to charge for moving; mover price calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Hourly crew pricing: movers × hours × rate + truck fee + travel time, stairs and long carries, packing materials; local moves only (US interstate moves are regulated: hedge, FMCSA).
- **Don't write about:** The moving template's content (link it: /templates/moving); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/moving (“moving company invoice template”)
- **Notes:** template: moving; language versions in metric units with local currency

#### TL34 · /tools/junk-removal-pricing-calculator

- **Key:** junk removal pricing calculator · also: how much to charge for junk removal
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. By truck volume (an eighth up to a full load × the pro's full-load price), heavy items and dump fees per ton, items with their own fees (mattresses, tires, fridges), labor for hard access.
- **Don't write about:** The junk-removal template's content (link it: /templates/junk-removal); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/junk-removal (“junk removal invoice template”) · /industries/junk-removal (“invoice app for junk removal businesses”)
- **Notes:** template: junk-removal; language versions in metric units with local currency

#### TL35 · /tools/photography-pricing-calculator

- **Key:** photography pricing calculator · also: how much to charge for photography; photographer rate calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Cost of doing business: yearly costs (gear, software, insurance) + target income ÷ sessions a year → price per session; editing hours per session; prints and travel as extras. Link the hourly rate calculator.
- **Don't write about:** The photography template's content (link it: /templates/photography); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/photography (“photography invoice template”)
- **Notes:** template: photography; language versions in metric units with local currency

#### TL36 · /tools/drywall-estimate-calculator

- **Key:** drywall estimate calculator · also: drywall cost calculator; drywall price per square foot
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Sheets from wall and ceiling area + waste, mud, tape and screws per sheet (stated assumptions), hang and finish labor per sheet or square foot, a price step per finish level.
- **Don't write about:** The drywall template's content (link it: /templates/drywall); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/drywall (“drywall invoice template”)
- **Notes:** template: drywall; language versions in metric units with local currency

#### TL37 · /tools/flooring-installation-cost-calculator

- **Key:** flooring installation cost calculator · also: flooring labor cost calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Area + waste by layout (straight, diagonal, herringbone), material per square foot (pro- or client-supplied), underlayment, removing the old floor, labor per square foot, transitions and stairs.
- **Don't write about:** The flooring template's content (link it: /templates/flooring); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/flooring (“flooring invoice template”)
- **Notes:** template: flooring; language versions in metric units with local currency

#### TL38 · /tools/tile-installation-cost-calculator

- **Key:** tile installation cost calculator · also: tile labor cost calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Area + waste by tile size and pattern, tiles per box, thinset and grout bags (assumptions), labor per square foot by surface (floor, wall, shower), prep (backer board, waterproofing).
- **Don't write about:** The tile-installation template's content (link it: /templates/tile-installation); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/tile-installation (“tile installation invoice template”)
- **Notes:** template: tile-installation; language versions in metric units with local currency

#### TL39 · /tools/fence-installation-cost-calculator

- **Key:** fence installation cost calculator · also: fence cost per foot calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Length → posts at a spacing, panels or pickets, concrete bags per post, gates; material per foot at the pro's prices, labor per foot, removing the old fence, a permit line.
- **Don't write about:** The fence-installation template's content (link it: /templates/fence-installation); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/fence-installation (“fence installation invoice template”)
- **Notes:** template: fence-installation; language versions in metric units with local currency

#### TL40 · /tools/deck-building-cost-calculator

- **Key:** deck cost calculator · also: deck building cost calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Deck area, joists at spacing, decking boards, footings, railing per linear foot, stairs per step; material at the pro's prices (pressure-treated or composite), labor per square foot, permit.
- **Don't write about:** The deck-building template's content (link it: /templates/deck-building); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: deck-building; language versions in metric units with local currency

#### TL41 · /tools/roofing-estimate-calculator

- **Key:** roofing estimate calculator · also: roof replacement cost calculator; roofing squares calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Footprint × pitch factor → squares, waste by roof complexity, bundles per square, underlayment, tear-off layers, flashing and ridge, labor per square.
- **Don't write about:** The roofing template's content (link it: /templates/roofing); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/roofing (“roofing invoice template”) · /industries/roofers (“roofing invoice app”)
- **Notes:** template: roofing; language versions in metric units with local currency

#### TL42 · /tools/concrete-cost-calculator

- **Key:** concrete cost calculator · also: concrete slab cost calculator; cubic yards of concrete calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Slab volume (length × width × thickness → cubic yards or m³, + waste), ready-mix per yard or bags, rebar or mesh, forms, finish, labor per square foot, a short-load fee under the supplier's minimum.
- **Don't write about:** The concrete template's content (link it: /templates/concrete); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: concrete; language versions in metric units with local currency

#### TL43 · /tools/pool-cleaning-pricing-calculator

- **Key:** pool cleaning pricing calculator · also: how much to charge for pool cleaning
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. A monthly route price: visits a month × time per visit × rate, chemicals included or billed, pool size and screen enclosure, travel; a green-to-clean as its own price.
- **Don't write about:** The pool-service template's content (link it: /templates/pool-service); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: pool-service; language versions in metric units with local currency

#### TL44 · /tools/catering-cost-calculator

- **Key:** catering cost calculator · also: catering price per person calculator
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Per guest: food cost per head ÷ the target food-cost share (e.g. 30%) → menu price, staff hours × rate, rentals, travel, service charge and gratuity as their own lines, the deposit share.
- **Don't write about:** The catering template's content (link it: /templates/catering); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Already covered (link, don't repeat):** /templates/catering (“catering invoice template”)
- **Notes:** template: catering; language versions in metric units with local currency

#### TL45 · /tools/cake-pricing-calculator

- **Key:** cake pricing calculator · also: how much to charge for a cake
- **Group:** TL26–TL45 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: one calculator engine with a config per trade (task S4). The pro enters their own rates (defaults are labelled examples, no market prices as facts); the steps in plain words; 'Put on an invoice' fills the generator. Ingredients per recipe (the baker's costs), boxes and boards, decorating hours × hourly rate, overhead per order, margin → price per cake and per serving; cottage-food rules vary (hedge).
- **Don't write about:** The bakery template's content (link it: /templates/bakery); price-per-square-foot math in general (/tools/price-per-square-foot-calculator).
- **Notes:** template: bakery; language versions in metric units with local currency

### TL46–TL54: VAT and GST calculators per country (English) (9)

#### TL46 · /tools/uk-vat-calculator

- **Key:** uk vat calculator · also: vat calculator uk; add vat; remove vat 20%
- **Group:** TL46–TL54 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Add and remove VAT at 20%, 5% and 0%, the VAT on a VAT-inclusive price (÷ 6 for 20%), a note on the flat rate scheme (link its calculator). Source: GOV.UK.
- **Don't write about:** What /invoice-generator-uk already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /tools/vat-calculator (“vat calculator”)
- **Notes:** links: /invoice-generator-uk, the tools hub

#### TL47 · /tools/ireland-vat-calculator

- **Key:** ireland vat calculator · also: irish vat calculator
- **Group:** TL46–TL54 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 23%, 13.5%, 9%, 4.8% and 0%, add and remove; which goods and services sit at which rate (examples, link Revenue).
- **Don't write about:** What /invoice-generator-ireland already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /tools/vat-calculator (“vat calculator”)
- **Notes:** links: /invoice-generator-ireland, the tools hub

#### TL48 · /tools/south-africa-vat-calculator

- **Key:** south africa vat calculator · also: sars vat calculator; vat 15% calculator
- **Group:** TL46–TL54 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 15% add and remove, the VAT fraction (15/115), zero-rated and exempt examples. Source: SARS.
- **Don't write about:** What /invoice-generator-south-africa already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-south-africa, the tools hub

#### TL49 · /tools/uae-vat-calculator

- **Key:** uae vat calculator · also: vat 5% calculator uae
- **Group:** TL46–TL54 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 5% add and remove, zero-rated and exempt examples, the registration thresholds as a note. Source: the Federal Tax Authority.
- **Don't write about:** What /invoice-generator-uae already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /tools/vat-calculator (“vat calculator”)
- **Notes:** links: /invoice-generator-uae, the tools hub

#### TL50 · /tools/australia-gst-calculator

- **Key:** australia gst calculator · also: gst calculator; add gst 10%; remove gst
- **Group:** TL46–TL54 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 10% add and remove (÷ 11 for the GST in a price), GST-free items, when you must register (A$75,000: check). Source: ATO.
- **Don't write about:** What /invoice-generator-australia already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-australia, the tools hub

#### TL51 · /tools/nz-gst-calculator

- **Key:** nz gst calculator · also: gst calculator nz 15%
- **Group:** TL46–TL54 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 15% add and remove (× 3/23 for the GST in a price), zero-rated exports. Source: Inland Revenue.
- **Don't write about:** What /invoice-generator-new-zealand already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-new-zealand, the tools hub

#### TL52 · /tools/singapore-gst-calculator

- **Key:** singapore gst calculator · also: gst 9% calculator
- **Group:** TL46–TL54 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. 9% add and remove (the rate since 2024: check), registration threshold as a note. Source: IRAS.
- **Don't write about:** What /invoice-generator-singapore already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-singapore, the tools hub

#### TL53 · /tools/india-gst-calculator

- **Key:** india gst calculator · also: gst calculator india; cgst sgst igst calculator
- **Group:** TL46–TL54 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Slab rates (check the current slabs: they changed in 2025), CGST + SGST within a state vs IGST between states, inclusive and exclusive. Note e-invoicing above the turnover limit (hedge). Source: CBIC / GST Council.
- **Don't write about:** Rates without a source and date; claims the tool can't back up.
- **Notes:** links: the tools hub, the free generator

#### TL54 · /tools/canada-gst-hst-calculator

- **Key:** canada gst hst calculator · also: hst calculator; hst calculator ontario; gst calculator canada
- **Group:** TL46–TL54 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. By province: GST 5%, HST provinces (13%, 15%: check), PST/QST where they apply, add and remove. Source: CRA and the provinces.
- **Don't write about:** What /invoice-generator-canada already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-canada, the tools hub

### TL55–TL62: Tax tools for the self-employed (8)

#### TL55 · /tools/self-employment-tax-calculator

- **Key:** self employment tax calculator · also: 1099 tax calculator; se tax calculator
- **Group:** TL55–TL62 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. US: net earnings × 92.35% × 15.3% up to the Social Security wage base, plus 2.9% Medicare above it, half deductible (all figures for the year: check IRS). An estimate, not tax advice.
- **Don't write about:** What /templates/independent-contractor-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/independent-contractor-invoice, the tools hub

#### TL56 · /tools/quarterly-estimated-tax-calculator

- **Key:** quarterly estimated tax calculator · also: estimated tax payments calculator
- **Group:** TL55–TL62 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. US: expected self-employment income → SE tax + an income tax estimate by bracket, split into the 4 due dates, the safe-harbour rule as a note. An estimate (hedge).
- **Don't write about:** What /tools/self-employment-tax-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/self-employment-tax-calculator, the tools hub

#### TL57 · /tools/1099-vs-w2-calculator

- **Key:** 1099 vs w2 calculator · also: contractor vs employee pay calculator
- **Group:** TL55–TL62 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The contractor rate that matches a salary: SE tax, benefits, unpaid time off, expenses. Link the hourly rate calculator.
- **Don't write about:** What /tools/hourly-rate-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/hourly-rate-calculator, the tools hub

#### TL58 · /tools/vat-threshold-checker

- **Key:** vat threshold calculator · also: vat registration threshold checker; when do i need to register for vat
- **Group:** TL55–TL62 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Rolling 12-month turnover against the threshold (UK first; each language version with its country's threshold and test), the date you'd cross it, what to do next. Source per country, dated.
- **Don't write about:** What /templates/no-vat-invoice already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /tools/vat-calculator (“vat calculator”)
- **Notes:** links: /templates/no-vat-invoice, the tools hub

#### TL59 · /tools/flat-rate-vat-calculator

- **Key:** flat rate vat calculator · also: flat rate scheme calculator
- **Group:** TL55–TL62 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. UK flat rate scheme: the sector percentage, the limited-cost trader test (16.5%), what you charge vs what you pay HMRC, standard vs flat rate compared. Source: GOV.UK.
- **Don't write about:** What /tools/uk-vat-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/uk-vat-calculator, the tools hub

#### TL60 · /tools/cis-deduction-calculator

- **Key:** cis deduction calculator · also: cis tax calculator; cis invoice calculator
- **Group:** TL55–TL62 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. UK Construction Industry Scheme: the deduction (20% registered, 30% not) on the labour part only, materials excluded, VAT on the gross. Source: GOV.UK.
- **Don't write about:** What /templates/subcontractor-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/subcontractor-invoice, the tools hub

#### TL61 · /tools/reverse-charge-checker

- **Key:** reverse charge checker · also: does reverse charge apply; vat reverse charge check
- **Group:** TL55–TL62 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. A few questions (both businesses VAT-registered? in different EU countries? goods or services? B2B?) → whether the reverse charge applies and the wording to put on the invoice. Source: EU VAT Directive and the national tax offices.
- **Don't write about:** What /reverse-charge-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /reverse-charge-invoice, the tools hub

#### TL62 · /tools/invoice-requirements-checker

- **Key:** invoice requirements checker · also: is my invoice valid; invoice checklist
- **Group:** TL55–TL62 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Pick your country and situation (VAT registered or not, B2B or B2C, abroad) → the checklist of what your invoice must show, each item with its source; links to that country's page.
- **Don't write about:** What /templates/no-vat-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/no-vat-invoice, the tools hub

### TL63–TL75: Payment fees, terms and payment details (13)

#### TL63 · /tools/paypal-fee-calculator

- **Key:** paypal fee calculator · also: paypal invoice fee calculator; how much to invoice to receive
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. PayPal's fees by country and payment type (invoices, goods and services, international, currency conversion), and the reverse: how much to invoice to receive X. Fees from PayPal's own fee page with the date.
- **Don't write about:** Rates without a source and date; claims the tool can't back up.
- **Notes:** links: the tools hub, the free generator

#### TL64 · /tools/stripe-fee-calculator

- **Key:** stripe fee calculator · also: stripe processing fee calculator
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Stripe's card fees by country, international and currency surcharges, invoicing fees, the gross-up. From Stripe's pricing page, dated.
- **Don't write about:** What /compare/stripe-invoices already explains (link it); rates without a source and date.
- **Notes:** links: /compare/stripe-invoices, the tools hub

#### TL65 · /tools/square-fee-calculator

- **Key:** square fee calculator · also: square invoice fee calculator
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Square's fees for invoices, card-present and online, by country, the gross-up. From Square's pricing page, dated.
- **Don't write about:** What /compare/square-invoices already explains (link it); rates without a source and date.
- **Notes:** links: /compare/square-invoices, the tools hub

#### TL66 · /tools/credit-card-surcharge-calculator

- **Key:** credit card surcharge calculator · also: card surcharge calculator
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The surcharge to cover a card fee, capped at the actual cost, and where surcharges are banned or capped (EU consumer cards, some US states: hedge, cite).
- **Don't write about:** What /tools/stripe-fee-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/stripe-fee-calculator, the tools hub

#### TL67 · /tools/early-payment-discount-calculator

- **Key:** early payment discount calculator · also: 2/10 net 30 calculator
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Terms like 2/10 net 30: the discounted amount, the last discount date, and the effective annual cost of not taking it.
- **Don't write about:** What /tools/due-date-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/due-date-calculator, the tools hub

#### TL68 · /tools/invoice-factoring-calculator

- **Key:** invoice factoring calculator · also: factoring cost calculator
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Advance rate, factoring fee per 30 days, reserve released on payment → what you receive and the effective cost. Not advice; terms vary.
- **Don't write about:** What /templates/trucking already explains (link it); rates without a source and date.
- **Notes:** links: /templates/trucking, the tools hub

#### TL69 · /tools/prorated-invoice-calculator

- **Key:** prorated invoice calculator · also: proration calculator; prorated rent calculator
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. A monthly or yearly price for part of a period: by days in the month or a 30-day month, start and end dates, the amount to invoice.
- **Don't write about:** What /templates/monthly-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/monthly-invoice, the tools hub

#### TL70 · /tools/business-days-calculator

- **Key:** business days calculator · also: working days calculator
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Business days between two dates or N business days from a date, without weekends and the public holidays of the chosen country (holiday lists sourced, per year).
- **Don't write about:** What /tools/due-date-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/due-date-calculator, the tools hub

#### TL71 · /tools/dso-calculator

- **Key:** days sales outstanding calculator · also: dso calculator
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Receivables ÷ credit sales × days, what it means for a small business, a target by payment terms.
- **Don't write about:** What /tools/late-payment-interest-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/late-payment-interest-calculator, the tools hub

#### TL72 · /tools/sepa-qr-code-generator

- **Key:** sepa qr code generator · also: epc qr code generator; girocode generator; bank transfer qr code
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The EPC QR code (GiroCode) for a SEPA transfer: name, IBAN, BIC, amount, reference → a QR to put on the invoice; made in the browser, nothing sent. Spec: the European Payments Council guideline.
- **Don't write about:** What /tools/iban-checker already explains (link it); rates without a source and date.
- **Notes:** links: /tools/iban-checker, the tools hub

#### TL73 · /tools/swiss-qr-bill-generator

- **Key:** swiss qr bill generator · also: qr rechnung generator; qr bill switzerland
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. The Swiss QR-bill payment part: creditor, QR-IBAN or IBAN, reference, amount → the payment slip as PDF/PNG. Spec: SIX Swiss Payment Standards, dated.
- **Don't write about:** What /invoice-generator-switzerland already explains (link it); rates without a source and date.
- **Notes:** links: /invoice-generator-switzerland, the tools hub

#### TL74 · /tools/amount-in-words-converter

- **Key:** amount in words converter · also: number to words for invoices; write amount in words
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. An amount → words with the currency ('one thousand two hundred euros and 50 cents'), in the page's language, for invoices and cheques where the words are expected.
- **Don't write about:** Rates without a source and date; claims the tool can't back up.
- **Notes:** links: the tools hub, the free generator

#### TL75 · /tools/invoice-currency-converter

- **Key:** invoice currency converter · also: convert invoice currency; exchange rate for invoices
- **Group:** TL63–TL75 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code. Works in the browser; the steps in plain words; every rate or rule with its official source and the date checked (re-check every 6 months); 'Put on an invoice' fills the generator where the result is an amount. Needs a decision first: the rate source (ECB daily reference rates are free). An amount at the day's reference rate with the date and source, for the 'converted at' note on an invoice.
- **Don't write about:** What /templates/international-invoice already explains (link it); rates without a source and date.
- **Notes:** links: /templates/international-invoice, the tools hub

### TL76–TL90: Job costing and materials for contractors (15)

#### TL76 · /tools/job-costing-calculator

- **Key:** job costing calculator · also: job cost calculator; job profit calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Revenue minus labour (hours × burdened rate), materials, subcontractors, equipment and overhead share → profit and margin per job.
- **Don't write about:** What /tools/profit-margin-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/profit-margin-calculator, the tools hub

#### TL77 · /tools/overhead-rate-calculator

- **Key:** overhead rate calculator · also: overhead and profit calculator; contractor overhead calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Yearly overhead ÷ billable hours (or direct costs) → the overhead to add per hour or per job, plus the profit target.
- **Don't write about:** What /tools/markup-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/markup-calculator, the tools hub

#### TL78 · /tools/labor-burden-calculator

- **Key:** labor burden calculator · also: labor burden rate calculator; employee cost calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wage + payroll taxes, insurance, benefits and paid time off ÷ productive hours → the true hourly cost of a worker (rates per country as examples, hedged).
- **Don't write about:** What /tools/job-costing-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/job-costing-calculator, the tools hub

#### TL79 · /tools/equipment-cost-per-hour-calculator

- **Key:** equipment cost per hour calculator · also: machine rate calculator; equipment rate calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Purchase price, life, resale, fuel, maintenance, insurance ÷ hours a year → the hourly rate to charge for a machine.
- **Don't write about:** What /templates/equipment-rental already explains (link it); rates without a source and date.
- **Notes:** links: /templates/equipment-rental, the tools hub

#### TL80 · /tools/board-feet-calculator

- **Key:** board feet calculator · also: board foot calculator; lumber calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Thickness × width × length ÷ 144 per board, × pieces, × price per board foot, waste.
- **Don't write about:** What /templates/carpentry already explains (link it); rates without a source and date.
- **Notes:** links: /templates/carpentry, the tools hub

#### TL81 · /tools/cubic-yard-calculator

- **Key:** cubic yard calculator · also: cubic yards calculator; yardage calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Length × width × depth → cubic yards for concrete, gravel, soil or mulch, + waste, × price per yard (metric: m³ in the language versions of the material calculator).
- **Don't write about:** What /tools/concrete-cost-calculator already explains (link it); rates without a source and date.
- **Notes:** links: /tools/concrete-cost-calculator, the tools hub

#### TL82 · /tools/insulation-cost-calculator

- **Key:** insulation cost calculator · also: attic insulation calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area × the depth for the target R-value (or U-value) by material (batts, blown), bags or rolls needed, labour per square foot.
- **Don't write about:** What /templates/insulation already explains (link it); rates without a source and date.
- **Notes:** links: /templates/insulation, the tools hub

#### TL83 · /tools/siding-cost-calculator

- **Key:** siding cost calculator · also: siding squares calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wall area minus openings → squares + waste, trim and J-channel by linear foot, removal of old siding, labour per square.
- **Don't write about:** What /templates/siding already explains (link it); rates without a source and date.
- **Notes:** links: /templates/siding, the tools hub

#### TL84 · /tools/paver-cost-calculator

- **Key:** paver cost calculator · also: patio paver calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area → pavers by size + waste, base gravel and sand by depth, edging, labour per square foot.
- **Don't write about:** What /templates/masonry already explains (link it); rates without a source and date.
- **Notes:** links: /templates/masonry, the tools hub

#### TL85 · /tools/retaining-wall-cost-calculator

- **Key:** retaining wall cost calculator · also: retaining wall block calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Length × height → blocks, caps, base and drainage gravel, labour per face foot; walls over a set height need an engineer (hedge).
- **Don't write about:** What /templates/masonry already explains (link it); rates without a source and date.
- **Notes:** links: /templates/masonry, the tools hub

#### TL86 · /tools/landscape-material-calculator

- **Key:** landscape material calculator · also: mulch calculator; gravel calculator; topsoil calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area × depth → cubic yards or m³ of mulch, gravel or topsoil, bags vs bulk, delivery, the price to put on the invoice.
- **Don't write about:** What /templates/landscaping already explains (link it); rates without a source and date.
- **Notes:** links: /templates/landscaping, the tools hub

#### TL87 · /tools/sod-cost-calculator

- **Key:** sod cost calculator · also: sod calculator; turf calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area → pallets or rolls of sod, soil prep, labour per square foot, watering in.
- **Don't write about:** What /templates/landscaping already explains (link it); rates without a source and date.
- **Notes:** links: /templates/landscaping, the tools hub

#### TL88 · /tools/gutter-installation-cost-calculator

- **Key:** gutter installation cost calculator · also: seamless gutter calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Linear feet by material, downspouts by count and height, guards, removal of old gutters.
- **Don't write about:** What /templates/gutter-installation already explains (link it); rates without a source and date.
- **Notes:** links: /templates/gutter-installation, the tools hub

#### TL89 · /tools/epoxy-floor-cost-calculator

- **Key:** epoxy floor cost calculator · also: garage floor coating calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Area → kits or gallons by system and coats, grinding and crack repair, flakes, labour per square foot.
- **Don't write about:** What /templates/epoxy-flooring already explains (link it); rates without a source and date.
- **Notes:** links: /templates/epoxy-flooring, the tools hub

#### TL90 · /tools/wallpaper-calculator

- **Key:** wallpaper calculator · also: how many rolls of wallpaper; wallpaper cost calculator
- **Group:** TL76–TL90 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wall area, roll size and pattern repeat → rolls needed + waste, removal and hanging labour per roll.
- **Don't write about:** What /templates/wallpaper-installation already explains (link it); rates without a source and date.
- **Notes:** links: /templates/wallpaper-installation, the tools hub

### TL91–TL106: Pricing calculators II: services and transport (16)

#### TL91 · /tools/janitorial-bidding-calculator

- **Key:** janitorial bidding calculator · also: commercial cleaning bid calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Square feet ÷ production rate per hour by space type → hours per visit × visits a month × wage + burden, supplies, overhead and profit → the monthly bid.
- **Don't write about:** What /templates/janitorial already explains (link it); rates without a source and date.
- **Notes:** links: /templates/janitorial, the tools hub

#### TL92 · /tools/gutter-cleaning-pricing-calculator

- **Key:** gutter cleaning pricing calculator · also: how much to charge for gutter cleaning
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Linear feet by storey, downspouts, debris level, guards, a minimum.
- **Don't write about:** What /templates/gutter-cleaning already explains (link it); rates without a source and date.
- **Notes:** links: /templates/gutter-cleaning, the tools hub

#### TL93 · /tools/pest-control-pricing-calculator

- **Key:** pest control pricing calculator · also: how much to charge for pest control
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Initial vs recurring service, home size, pest type, materials, quarterly vs monthly plans.
- **Don't write about:** What /templates/pest-control already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/pest-control (“pest control invoice template”) · /industries/pest-control (“pest control invoicing software”)
- **Notes:** links: /templates/pest-control, the tools hub

#### TL94 · /tools/pet-sitting-pricing-calculator

- **Key:** pet sitting pricing calculator · also: dog walking rates calculator; how much to charge for pet sitting
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Visit length, pets, overnight stays, holidays and travel → per visit and per week.
- **Don't write about:** What /templates/pet-sitting already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/pet-sitting (“pet sitting invoice template”)
- **Notes:** links: /templates/pet-sitting, the tools hub

#### TL95 · /tools/dog-grooming-pricing-calculator

- **Key:** dog grooming pricing calculator · also: grooming price calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Size and coat → time × hourly rate, add-ons, matting and behaviour fees, mobile fee.
- **Don't write about:** What /templates/dog-grooming already explains (link it); rates without a source and date.
- **Notes:** links: /templates/dog-grooming, the tools hub

#### TL96 · /tools/auto-detailing-pricing-calculator

- **Key:** auto detailing pricing calculator · also: car detailing price calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Vehicle size and condition, package, add-ons (ceramic, odour), mobile fee → price per car.
- **Don't write about:** What /templates/auto-detailing already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/auto-detailing (“auto detailing invoice template”)
- **Notes:** links: /templates/auto-detailing, the tools hub

#### TL97 · /tools/courier-delivery-pricing-calculator

- **Key:** courier delivery pricing calculator · also: delivery fee calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Base fee + distance × rate, weight and size, rush and waiting time, fuel surcharge.
- **Don't write about:** What /templates/courier already explains (link it); rates without a source and date.
- **Notes:** links: /templates/courier, the tools hub

#### TL98 · /tools/event-planner-fee-calculator

- **Key:** event planner fee calculator · also: wedding planner fee calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Flat fee vs % of the event budget vs hourly, compared side by side, with the deposit share.
- **Don't write about:** What /templates/event-planning already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/event-planning (“event planner invoice template”) · /industries/event-planners (“invoice app for event planners”)
- **Notes:** links: /templates/event-planning, the tools hub

#### TL99 · /tools/florist-pricing-calculator

- **Key:** florist pricing calculator · also: flower pricing formula calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Wholesale cost × the markup (e.g. 3×) + labour %, hard goods at a lower markup → the retail price per arrangement.
- **Don't write about:** What /templates/florist already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/florist (“florist invoice template”) · /industries/florists (“invoice app for florists”)
- **Notes:** links: /templates/florist, the tools hub

#### TL100 · /tools/translation-cost-calculator

- **Key:** translation cost calculator · also: translation rate calculator; price per word calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Words × rate per word by language pair and field, minimum fee, rush and certification fees.
- **Don't write about:** What /templates/translation already explains (link it); rates without a source and date.
- **Already covered (link, don't repeat):** /templates/translation (“translation invoice template”)
- **Notes:** links: /templates/translation, the tools hub

#### TL101 · /tools/transcription-cost-calculator

- **Key:** transcription cost calculator · also: transcription rate calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Audio minutes × rate by turnaround and quality, speaker and timestamp add-ons.
- **Don't write about:** What /templates/transcription already explains (link it); rates without a source and date.
- **Notes:** links: /templates/transcription, the tools hub

#### TL102 · /tools/voice-over-rate-calculator

- **Key:** voice over rate calculator · also: voice over rates calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Per word or finished minute + usage (media, region, term) → a fee range from the pro's own base rate.
- **Don't write about:** What /templates/voice-over already explains (link it); rates without a source and date.
- **Notes:** links: /templates/voice-over, the tools hub

#### TL103 · /tools/copywriting-rate-calculator

- **Key:** copywriting rate calculator · also: freelance writing rate calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Per word vs per hour vs per project: words, research and revision time, the hourly rate behind a per-word price.
- **Don't write about:** What /templates/copywriting already explains (link it); rates without a source and date.
- **Notes:** links: /templates/copywriting, the tools hub

#### TL104 · /tools/trucking-cost-per-mile-calculator

- **Key:** trucking cost per mile calculator · also: cost per mile calculator trucking
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Fixed costs (truck payment, insurance, permits) + variable (fuel, maintenance, tyres) ÷ miles (km in the language versions) → cost per mile and the minimum rate.
- **Don't write about:** What /templates/trucking already explains (link it); rates without a source and date.
- **Notes:** links: /templates/trucking, the tools hub

#### TL105 · /tools/fuel-surcharge-calculator

- **Key:** fuel surcharge calculator · also: trucking fuel surcharge calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Today's diesel price vs the base price ÷ the truck's mpg → the surcharge per mile (US DOE weekly price as the reference, dated).
- **Don't write about:** What /templates/trucking already explains (link it); rates without a source and date.
- **Notes:** links: /templates/trucking, the tools hub

#### TL106 · /tools/detention-pay-calculator

- **Key:** detention pay calculator · also: detention time calculator
- **Group:** TL91–TL106 · **Score:** not scored · **Intent:** tool · **Languages:** en-only
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Free time, the hourly detention rate, arrival and departure times → the detention line for the invoice.
- **Don't write about:** What /templates/trucking already explains (link it); rates without a source and date.
- **Notes:** links: /templates/trucking, the tools hub

### TL107–TL113: Pricing calculators III: makers and production (7)

#### TL107 · /tools/3d-printing-cost-calculator

- **Key:** 3d printing cost calculator · also: 3d print price calculator
- **Group:** TL107–TL113 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Filament or resin grams × price, machine hours × rate, electricity, failure rate, post-processing, margin.
- **Don't write about:** What /templates/3d-printing already explains (link it); rates without a source and date.
- **Notes:** links: /templates/3d-printing, the tools hub

#### TL108 · /tools/screen-printing-pricing-calculator

- **Key:** screen printing pricing calculator · also: t-shirt printing price calculator
- **Group:** TL107–TL113 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Quantity breaks, colours per location, screens and setup, blanks, extra locations → price per shirt.
- **Don't write about:** What /templates/screen-printing already explains (link it); rates without a source and date.
- **Notes:** links: /templates/screen-printing, the tools hub

#### TL109 · /tools/embroidery-pricing-calculator

- **Key:** embroidery pricing calculator · also: embroidery stitch count price calculator
- **Group:** TL107–TL113 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Stitch count × rate per 1,000 stitches, digitising fee, quantity breaks, garments.
- **Don't write about:** What /templates/embroidery already explains (link it); rates without a source and date.
- **Notes:** links: /templates/embroidery, the tools hub

#### TL110 · /tools/wholesale-price-calculator

- **Key:** wholesale price calculator · also: retail price calculator; keystone pricing calculator
- **Group:** TL107–TL113 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Cost → wholesale (× 2) → retail (× 2, keystone) or by target margin, for makers selling to shops.
- **Don't write about:** What /templates/crafts already explains (link it); rates without a source and date.
- **Notes:** links: /templates/crafts, the tools hub

#### TL111 · /tools/etsy-fee-calculator

- **Key:** etsy fee calculator · also: etsy profit calculator
- **Group:** TL107–TL113 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Listing, transaction, payment processing and offsite-ads fees by country (from Etsy's fee page, dated) → profit per sale.
- **Don't write about:** What /templates/crafts already explains (link it); rates without a source and date.
- **Notes:** links: /templates/crafts, the tools hub

#### TL112 · /tools/upholstery-fabric-calculator

- **Key:** upholstery fabric calculator · also: how much fabric to reupholster
- **Group:** TL107–TL113 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Yards (metres) by piece type, pattern repeat, cushions → fabric needed and its cost.
- **Don't write about:** What /templates/upholstery already explains (link it); rates without a source and date.
- **Notes:** links: /templates/upholstery, the tools hub

#### TL113 · /tools/laser-engraving-pricing-calculator

- **Key:** laser engraving pricing calculator · also: laser cutting price calculator
- **Group:** TL107–TL113 · **Score:** not scored · **Intent:** tool · **Languages:** yes
- **Write about:** Needs code: the calculator engine (task S4) with a config. The pro enters their own rates (defaults are labelled examples, no market prices as facts); 'Put on an invoice' fills the generator. Machine minutes × rate, material, setup, quantity breaks.
- **Don't write about:** What /templates/laser-engraving already explains (link it); rates without a source and date.
- **Notes:** links: /templates/laser-engraving, the tools hub
