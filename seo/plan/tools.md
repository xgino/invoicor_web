# Free tools

> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [chunks](../PLAN.md).

**4 done · 21 planned**

## Direction

- **URL:** `/tools/{tool}` (local slugs per language, `lib/i18n/routes.ts`) · **Key:** "{tool} calculator / checker / generator"
- **Blueprint:** [ROADMAP.md](../../ROADMAP.md#t-free-tools) · **Where it's written:** page code: `components/tools/`, `lib/tools/registry.ts`
- **Links to:** the free generator, the other tools (hub), the related templates.
- **Languages:** **yes**: every tool exists in all 11 languages with local presets (T9).

**Can do:**

- A tool that works in the browser and gives a real answer (a number, a check), with the steps in plain words.
- A button that puts the result on an invoice in the free generator (`?item=&qty=&price=&tax=&currency=`).
- Country presets per language (rates, number format, currency).

**Can't do:**

- Rates or rules without a source and a date (VAT, late-payment interest): re-check every 6 months.
- Claims a check can't back up: an IBAN check catches typos, it doesn't prove who owns the account.
- Tools that need our server or a paid API without a decision first (VAT number check, business register: T5, T6).

## Done (4): don't build these again

`/tools` free invoicing tools · `vat-calculator` vat calculator · `hours-calculator` hours calculator · `hourly-rate-calculator` freelance hourly rate calculator

## Planned (21)

### Item 1D (11)

#### /tools/iban-checker

- **Key:** iban checker · also: iban validator; check iban
- **Item:** 1D · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T3. Check an IBAN in the browser: length per country and the ISO 13616 mod-97 check digits; show the country and the bank code. Say plainly: it catches typos, it doesn't prove who owns the account (since October 2025 EU banks check the name for SEPA transfers: Verification of Payee).
- **Notes:** T3

#### /tools/late-payment-interest-calculator

- **Key:** late payment interest calculator · also: late payment fee calculator; statutory interest calculator
- **Item:** 1D · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T7. Business-to-business late payment interest per country: EU statutory interest (the ECB reference rate + 8 points; + 9 in Germany) and the fixed €40 compensation per invoice; the UK's Late Payment Act (base rate + 8%, fixed sums by debt size); consumer rules differ (e.g. the Dutch WIK scale). Every rate with its source and date; re-check every half year. The result goes onto a reminder invoice in the generator.
- **Notes:** T7

#### /tools/due-date-calculator

- **Key:** invoice due date calculator · also: net 30 calculator; payment terms calculator
- **Item:** 1D · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Invoice date + terms (due on receipt, Net 7/15/30/60, end of month, end of month + 30) = the due date, with the weekday; explain each term in one line.
- **Don't write about:** What payment terms mean in depth (the blog topic invoice-payment-terms).
- **Notes:** T8

#### /tools/invoice-number-generator

- **Key:** invoice number generator · also: invoice numbering format
- **Item:** 1D · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Build an invoice number format (prefix, year, client code, sequence) and show the next 5 numbers; the rules in one paragraph (unique, sequential; in the EU no gaps). Copy to the generator.
- **Don't write about:** How to number invoices in general (the blog: learn:/how-to-number-invoices-on-iphone).
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”) · learn:/how-to-number-invoices-on-iphone (“how to number invoices on iphone”)
- **Notes:** T8

#### /tools/discount-calculator

- **Key:** discount calculator · also: invoice discount calculator; percentage off calculator
- **Item:** 1D · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. A discount as a percentage or an amount, before or after tax, with the new total; explain early-payment discounts (e.g. 2/10 net 30).
- **Notes:** T8

#### /tools/markup-calculator

- **Key:** markup calculator · also: markup percentage calculator; price from cost
- **Item:** 1D · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Cost + markup % = price, and the margin that gives; the difference between markup and margin in plain words (link the margin calculator). Useful for parts and materials on trade invoices.
- **Notes:** T8

#### /tools/profit-margin-calculator

- **Key:** profit margin calculator · also: gross margin calculator
- **Item:** 1D · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T8. Price and cost = margin % and profit; or cost and target margin = price. Link the markup calculator both ways.
- **Notes:** T8

#### /tools/deposit-calculator

- **Key:** deposit calculator · also: down payment calculator; deposit invoice amount
- **Item:** 1D · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). The deposit (% or amount) of a job total, the balance due, and both as invoice lines: the deposit invoice and the final invoice with the deposit subtracted, each one click into the generator. Link the deposit templates.
- **Notes:** new

#### /tools/retainage-calculator

- **Key:** retainage calculator · also: retention calculator construction
- **Item:** 1D · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Progress billing: contract value, % complete, previous payments and the retainage % = this invoice's amount and the retainage held. US construction term; English only. Link /templates/construction-progress-invoice.
- **Notes:** new

#### /tools/sales-tax-calculator

- **Key:** sales tax calculator · also: us sales tax calculator
- **Item:** 1D · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). US sales tax: amount + rate = tax and total; state base rates as presets (sourced, dated; local rates add on top, say so). English only (US topic). Link the VAT calculator for other countries.
- **Don't write about:** The VAT calculator (owned by /tools/vat-calculator).
- **Already covered (link, don't repeat):** learn:/what-does-an-invoice-tax-calculator-do (“what does an invoice tax calculator do”)
- **Notes:** new

#### /tools/vat-number-checker

- **Key:** eu vat number checker · also: vies vat check; validate vat number
- **Item:** 1D · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts in 11 languages (lib/i18n/pages/tools). Roadmap T5. Checks an EU VAT number with the European Commission's VIES service (and often returns the company name). Needs a small server proxy in invoicor_api with caching and rate limits (browsers can't call VIES directly): a decision first.
- **Notes:** T5, needs the API

### Item 4A (10)

#### /tools/mileage-reimbursement-calculator

- **Key:** mileage reimbursement calculator · also: irs mileage calculator
- **Item:** 4A · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Miles × the IRS standard mileage rate (sourced and dated, updated each January); the result as an invoice line. US topic: English only.

#### /tools/hourly-to-salary-calculator

- **Key:** hourly to salary calculator · also: hourly rate to annual salary
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Hourly rate × hours × weeks = yearly, and back; link the hourly rate calculator (that one is for freelancers setting a rate).
- **Already covered (link, don't repeat):** /tools/hourly-rate-calculator (“freelance hourly rate calculator”)

#### /tools/day-rate-calculator

- **Key:** day rate calculator · also: freelance day rate
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). A day rate from an hourly rate or a yearly target; half days; link the hourly rate calculator.
- **Already covered (link, don't repeat):** /tools/hourly-rate-calculator (“freelance hourly rate calculator”)

#### /tools/overtime-calculator

- **Key:** overtime calculator · also: overtime pay calculator
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Regular and overtime hours and the multiplier (1.5×, 2×) = the amount; the rules for employees differ by country (hedge); for invoicing contractors' overtime.

#### /tools/price-per-square-foot-calculator

- **Key:** price per square foot calculator · also: cost per square foot
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Area (with a rooms helper) × price, or total ÷ area; square meters in metric languages; for trades (flooring, painting).

#### /tools/break-even-calculator

- **Key:** break even calculator · also: break even point
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Fixed costs, price and variable cost = the break-even units and revenue, in plain words.

#### /tools/late-fee-calculator

- **Key:** late fee calculator · also: invoice late fee
- **Item:** 4A · **Intent:** tool (do) · **Languages:** en-only
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). A US-style late fee (a flat fee or % per month) on an overdue invoice; caps vary by state (hedge). English only; the EU statutory interest is its own tool (late-payment-interest-calculator).

#### /tools/price-increase-calculator

- **Key:** price increase calculator · also: percentage increase calculator
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Old and new price = the % change, or a % raise = the new price; a short template line to tell clients.

#### /tools/commission-calculator

- **Key:** commission calculator · also: sales commission calculator
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Sales × rate (flat or tiered) = the commission to invoice.

#### /tools/utilization-rate-calculator

- **Key:** utilization rate calculator · also: billable hours calculator
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs page code (components/tools, lib/tools/registry.ts) and its texts per language (lib/i18n/pages/tools). Billable vs total hours = utilization, and the income at a rate; link the hours calculator.
- **Already covered (link, don't repeat):** /tools/hourly-rate-calculator (“freelance hourly rate calculator”)
