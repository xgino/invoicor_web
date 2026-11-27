# Invoice types (general documents)

> **Generated, don't edit by hand.** Rules: [RULES.md](../RULES.md); pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**16 done · 10 planned**

## Direction

URL, key, sections, what these pages can and can't do, links and languages: [RULES.md § D · Invoice types (general documents)](../RULES.md#d--invoice-types-general-documents).

## Done (16): don't build these again

`deposit-invoice` deposit invoice template · `final-invoice` final invoice template · `milestone-invoice` milestone invoice template · `hourly-invoice` hourly invoice template · `retainer-invoice` retainer invoice template · `monthly-invoice` monthly invoice template · `labor-and-materials-invoice` labor and materials invoice template · `service-invoice` service invoice template · `sales-invoice` sales invoice template · `commercial-invoice` commercial invoice template · `past-due-invoice` past due invoice template · `expense-reimbursement-invoice` reimbursement invoice template · `no-vat-invoice` invoice without vat template · `freelance-invoice` freelance invoice template · `independent-contractor-invoice` independent contractor invoice template · `subcontractor-invoice` subcontractor invoice template

## Planned (10)

### Item D2 (10)

#### /templates/self-billing-invoice

- **Key:** self billing invoice template · also: self billing invoice; self-billing agreement
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The customer writes the invoice for the supplier (common with subcontractors, couriers, growers, platforms): the self-billing agreement it needs, the words 'self-billing' on the invoice (UK: HMRC VAT Notice 700/62; EU: Art. 224 VAT Directive: cite and date), the supplier's VAT number, who keeps what. Be honest: Invoicor has no 'self-billing' document type; say what to write in the notes. Sample: a courier firm self-billing a driver for a month of drops.
- **Don't write about:** The subcontractor invoice (/templates/subcontractor-invoice: link it); the reverse charge (/reverse-charge-invoice); credit notes (/free-credit-note-generator).
- **Notes:** local: Gutschrift im Sinne des UStG (de), self-billing / autofacturation (fr): check the local word

#### /templates/itemized-invoice

- **Key:** itemized invoice template · also: itemized bill; itemized invoice example
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Every part, hour and fee on its own line with quantity, unit and unit price: when clients, insurers or the tax office ask for it, how to group lines so it stays readable, discounts per line vs on the total (the app has one discount on the total and one tax rate per invoice: say so), line limits (Free 10, Starter 25, Pro 50: BRAND.md). Sample: a 14-line appliance repair for an insurance claim.
- **Don't write about:** Labor and materials split (/templates/labor-and-materials-invoice: link it); trade templates' own line items.

#### /templates/paid-invoice

- **Key:** paid invoice template · also: paid in full invoice; cash invoice template
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. An invoice that shows it's settled: 'PAID' with the date and method, amount paid and balance zero, when a client wants a paid invoice instead of a receipt (expense claims, warranties), cash sales. The app has a paid status (BRAND.md; check whether the PDF shows it before claiming). Sample: a $640 job paid by card on the day.
- **Don't write about:** The receipt (/free-receipt-generator: link it, and say the difference in two lines); the final invoice after a deposit (/templates/final-invoice).

#### /templates/revised-invoice

- **Key:** revised invoice template · also: corrected invoice; amended invoice
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Fixing an invoice already sent: when a new version with a note is fine and when the rules want a credit note plus a new invoice (VAT-registered sellers: cite and date, hedge per country), keeping the number trail, 'This replaces invoice 1042'. In Invoicor a sent invoice is locked: duplicate it, fix it, send it (BRAND.md). Sample: a wrong hourly rate corrected on a consulting invoice.
- **Don't write about:** Credit notes in depth (/free-credit-note-generator: link it); invoice numbering (/tools/invoice-number-generator).
- **Notes:** de: owned by /de/rechnung-korrigieren (LO7): park the de version

#### /templates/cancellation-fee-invoice

- **Key:** cancellation fee invoice template · also: late cancellation invoice; no show fee invoice
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing a client who cancels late or doesn't show: the clause it rests on (quote it on the invoice), kept deposits vs a new fee, whether VAT or sales tax applies to cancellation fees (EU: often yes since the 2021 CJEU rulings: hedge, check per country), reasonable amounts. Sample: a photographer's 50% fee for a wedding cancelled 3 weeks out.
- **Don't write about:** Deposits (/templates/deposit-invoice: link it); past due invoices (/templates/past-due-invoice).

#### /templates/limited-company-invoice

- **Key:** limited company invoice template · also: ltd company invoice requirements; invoice for limited company uk
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. UK limited companies: the full registered name, the company number, the place of registration and the registered office (Companies Act 2006 and the 2015 Regulations: cite and date), the VAT number when registered, directors' names only if used at all (all or none). Sample: an IT contractor's Ltd billing an agency.
- **Don't write about:** UK VAT rules in general (/invoice-generator-uk: link it); sole trader invoices (/templates/freelance-invoice).
- **Already covered (link, don't repeat):** /templates/moving (“moving company invoice template”)
- **Notes:** en-only: UK company law; other countries' company details are on their local pages

#### /templates/purchase-order-invoice

- **Key:** purchase order invoice template · also: invoice with po number; po invoice
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing a company that issued a purchase order: the PO number where their accounts team looks for it, the same item descriptions and prices as the PO, partial deliveries against one PO, why invoices without a PO get stuck (three-way match: hedge). Where to put the PO number in Invoicor (check: a reference field or the notes). Sample: a print job delivered in two parts against one PO.
- **Don't write about:** Purchase orders themselves (not an Invoicor document); net terms (/tools/due-date-calculator: link it).

#### /templates/nonprofit-invoice

- **Key:** nonprofit invoice template · also: invoice for nonprofit organization; charity invoice template
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Two cases: a nonprofit billing for its services, events or memberships (sales tax exemption certificates in the US, hedge per state; UK charity VAT reliefs, hedge), and a business billing a nonprofit (exempt certificate on file, donated amounts shown as a discount). Say plainly that an invoice is not a donation receipt. Sample: a charity billing a school for workshops.
- **Don't write about:** Donation receipts (not an invoice; /free-receipt-generator for a simple receipt); pro bono work (/templates/pro-bono-invoice).
- **Notes:** en-only: US 501(c)(3) and UK charity rules

#### /templates/pro-bono-invoice

- **Key:** pro bono invoice template · also: no charge invoice; zero dollar invoice
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Showing the value of free work: the normal price per line, a 100% discount, a total of 0, why (the client sees the value; some charities want it for their records; your own records). Tax: donated services are usually not deductible as a gift (US IRS: hedge, cite); VAT on free services varies (hedge). Sample: a designer's free logo for a local food bank.
- **Don't write about:** Nonprofit invoices (/templates/nonprofit-invoice: link it); discounts in general (/tools/discount-calculator).

#### /templates/royalty-invoice

- **Key:** royalty invoice template · also: licensing fee invoice; usage rights invoice
- **Item:** D2 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing for use rather than work: the licence (what, where, how long), the royalty basis (a fixed fee, per unit sold, or a percentage of a reported amount, with the period and the statement it rests on), withholding tax on cross-border royalties (hedge, treaties), VAT on licences (a service: reverse charge B2B in the EU). Sample: a photographer's licence for a year of web use plus a quarterly royalty.
- **Don't write about:** Photography templates (link /templates/photography); international invoices (/templates/international-invoice).

## Parked (5): not built, key reserved

No proven demand, or the parent page covers it. Unpark (`status: planned`) only with new evidence.

- `/templates/day-rate-invoice` day rate invoice template: parked 2026-11-27 (demand gate): search results show one dedicated page, the rest fall back to hourly templates; the hourly page covers day rates. Local versions (Tagessatz, dagtarief) can return as local pages with their own evidence; was: local: Rechnung nach Tagessatz (de), factuur dagtarief (nl)
- `/templates/mileage-invoice` mileage invoice template: parked 2026-11-27 (demand gate): results are mileage logs and employee reimbursement forms, not invoices; the expense reimbursement page covers billing miles to a client; was: en-only: a US habit
- `/templates/personal-invoice` invoice template for individuals: parked 2026-11-27 (demand gate): no site uses "invoice template for individuals"; results treat it as freelance or simple invoices (the freelance page). The big local searches (Rechnung als Privatperson, factuur als particulier) can return as local pages; was: local: Rechnung als Privatperson (de), factuur als particulier (nl): both big local searches
- `/templates/international-invoice` international invoice template: parked 2026-11-27 (demand gate): intent split between commercial/export invoices (the commercial page) and currency tools; the freelance and commercial pages cover foreign clients. Local versions (Rechnung ins Ausland) can return as local pages; was: local: Rechnung ins Ausland / in Fremdwährung (de), factuur buitenland (nl)
- `/de/vorlagen/korrigierte-rechnung` korrigierte rechnung vorlage: owned by /de/rechnung-korrigieren (LO7): a German version would compete with it
