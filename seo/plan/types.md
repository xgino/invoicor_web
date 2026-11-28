# Invoice types (general documents)

> **Generated, don't edit by hand.** Rules: [RULES.md](../RULES.md); pages and briefs:
> `seo/pages/`; then `npm run pages`. Back to the [plan](../PLAN.md).

**38 done · 10 planned**

## Direction

URL, key, sections, what these pages can and can't do, links and languages: [RULES.md § D · Invoice types (general documents)](../RULES.md#d--invoice-types-general-documents).

## Done (38): don't build these again

**D1** `deposit-invoice` deposit invoice template · **D1-de** `/de/vorlagen/anzahlungsrechnung` anzahlungsrechnung · **D1-nl** `/nl/templates/aanbetalingsfactuur` aanbetalingsfactuur · **D2** `final-invoice` final invoice template · **D2-de** `/de/vorlagen/schlussrechnung` schlussrechnung · **D2-nl** `/nl/templates/eindfactuur` eindfactuur · **D3** `milestone-invoice` milestone invoice template · **D3-de** `/de/vorlagen/teilrechnung` teilrechnung · **D3-nl** `/nl/templates/termijnfactuur` termijnfactuur · **D4** `hourly-invoice` hourly invoice template · **D4-de** `/de/vorlagen/stundenrechnung` stundenrechnung · **D6** `retainer-invoice` retainer invoice template · **D7** `monthly-invoice` monthly invoice template · **D7-de** `/de/vorlagen/dauerrechnung` dauerrechnung · **D7-nl** `/nl/templates/periodieke-factuur` periodieke factuur · **D8** `labor-and-materials-invoice` labor and materials invoice template · **D8-de** `/de/vorlagen/rechnung-lohn-und-material` rechnung lohn und material · **D9** `service-invoice` service invoice template · **D9-de** `/de/vorlagen/rechnung-dienstleistung` rechnung dienstleistung · **D10** `sales-invoice` sales invoice template · **D10-nl** `/nl/templates/verkoopfactuur` verkoopfactuur · **D11** `commercial-invoice` commercial invoice template · **D11-de** `/de/vorlagen/handelsrechnung` handelsrechnung · **D11-nl** `/nl/templates/commerciele-factuur` commerciële factuur · **D12** `past-due-invoice` past due invoice template · **D14** `expense-reimbursement-invoice` reimbursement invoice template · **D14-de** `/de/vorlagen/auslagen-weiterberechnen` auslagen weiterberechnen · **D14-nl** `/nl/templates/kosten-doorberekenen` kosten doorberekenen · **D15** `no-vat-invoice` invoice without vat template · **D15-de** `/de/vorlagen/kleinunternehmer-rechnung` kleinunternehmer rechnung · **D15-nl** `/nl/templates/factuur-zonder-btw` factuur zonder btw · **D16** `freelance-invoice` freelance invoice template · **D16-de** `/de/vorlagen/rechnung-freiberufler` rechnung freiberufler · **D16-nl** `/nl/templates/zzp-factuur` zzp factuur · **D17** `independent-contractor-invoice` independent contractor invoice template · **D18** `subcontractor-invoice` subcontractor invoice template · **D18-de** `/de/vorlagen/subunternehmer-rechnung` subunternehmer rechnung · **D18-nl** `/nl/templates/factuur-onderaannemer` factuur onderaannemer

## Planned (10)

### D21–D30: Invoice types II: special cases (self-billing, revised, paid, PO …) (10)

#### D21 · /templates/self-billing-invoice

- **Key:** self billing invoice template · also: self billing invoice; self-billing agreement
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The customer writes the invoice for the supplier (common with subcontractors, couriers, growers, platforms): the self-billing agreement it needs, the words 'self-billing' on the invoice (UK: HMRC VAT Notice 700/62; EU: Art. 224 VAT Directive: cite and date), the supplier's VAT number, who keeps what. Be honest: Invoicor has no 'self-billing' document type; say what to write in the notes. Sample: a courier firm self-billing a driver for a month of drops.
- **Don't write about:** The subcontractor invoice (/templates/subcontractor-invoice: link it); the reverse charge (/reverse-charge-invoice); credit notes (/free-credit-note-generator).
- **Notes:** local: Gutschrift im Sinne des UStG (de), self-billing / autofacturation (fr): check the local word

#### D22 · /templates/itemized-invoice

- **Key:** itemized invoice template · also: itemized bill; itemized invoice example
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Every part, hour and fee on its own line with quantity, unit and unit price: when clients, insurers or the tax office ask for it, how to group lines so it stays readable, discounts per line vs on the total (the app has one discount on the total and one tax rate per invoice: say so), line limits (Free 10, Starter 25, Pro 50: BRAND.md). Sample: a 14-line appliance repair for an insurance claim.
- **Don't write about:** Labor and materials split (/templates/labor-and-materials-invoice: link it); trade templates' own line items.

#### D23 · /templates/paid-invoice

- **Key:** paid invoice template · also: paid in full invoice; cash invoice template
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. An invoice that shows it's settled: 'PAID' with the date and method, amount paid and balance zero, when a client wants a paid invoice instead of a receipt (expense claims, warranties), cash sales. The app has a paid status (BRAND.md; check whether the PDF shows it before claiming). Sample: a $640 job paid by card on the day.
- **Don't write about:** The receipt (/free-receipt-generator: link it, and say the difference in two lines); the final invoice after a deposit (/templates/final-invoice).

#### D24 · /templates/revised-invoice

- **Key:** revised invoice template · also: corrected invoice; amended invoice
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Fixing an invoice already sent: when a new version with a note is fine and when the rules want a credit note plus a new invoice (VAT-registered sellers: cite and date, hedge per country), keeping the number trail, 'This replaces invoice 1042'. In Invoicor a sent invoice is locked: duplicate it, fix it, send it (BRAND.md). Sample: a wrong hourly rate corrected on a consulting invoice.
- **Don't write about:** Credit notes in depth (/free-credit-note-generator: link it); invoice numbering (/tools/invoice-number-generator).
- **Notes:** de: owned by /de/rechnung-korrigieren (LO7): park the de version

#### D25 · /templates/cancellation-fee-invoice

- **Key:** cancellation fee invoice template · also: late cancellation invoice; no show fee invoice
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing a client who cancels late or doesn't show: the clause it rests on (quote it on the invoice), kept deposits vs a new fee, whether VAT or sales tax applies to cancellation fees (EU: often yes since the 2021 CJEU rulings: hedge, check per country), reasonable amounts. Sample: a photographer's 50% fee for a wedding cancelled 3 weeks out.
- **Don't write about:** Deposits (/templates/deposit-invoice: link it); past due invoices (/templates/past-due-invoice).

#### D26 · /templates/limited-company-invoice

- **Key:** limited company invoice template · also: ltd company invoice requirements; invoice for limited company uk
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. UK limited companies: the full registered name, the company number, the place of registration and the registered office (Companies Act 2006 and the 2015 Regulations: cite and date), the VAT number when registered, directors' names only if used at all (all or none). Sample: an IT contractor's Ltd billing an agency.
- **Don't write about:** UK VAT rules in general (/invoice-generator-uk: link it); sole trader invoices (/templates/freelance-invoice).
- **Already covered (link, don't repeat):** /templates/moving (“moving company invoice template”)
- **Notes:** en-only: UK company law; other countries' company details are on their local pages

#### D27 · /templates/purchase-order-invoice

- **Key:** purchase order invoice template · also: invoice with po number; po invoice
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing a company that issued a purchase order: the PO number where their accounts team looks for it, the same item descriptions and prices as the PO, partial deliveries against one PO, why invoices without a PO get stuck (three-way match: hedge). Where to put the PO number in Invoicor (check: a reference field or the notes). Sample: a print job delivered in two parts against one PO.
- **Don't write about:** Purchase orders themselves (not an Invoicor document); net terms (/tools/due-date-calculator: link it).

#### D28 · /templates/nonprofit-invoice

- **Key:** nonprofit invoice template · also: invoice for nonprofit organization; charity invoice template
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Two cases: a nonprofit billing for its services, events or memberships (sales tax exemption certificates in the US, hedge per state; UK charity VAT reliefs, hedge), and a business billing a nonprofit (exempt certificate on file, donated amounts shown as a discount). Say plainly that an invoice is not a donation receipt. Sample: a charity billing a school for workshops.
- **Don't write about:** Donation receipts (not an invoice; /free-receipt-generator for a simple receipt); pro bono work (/templates/pro-bono-invoice).
- **Notes:** en-only: US 501(c)(3) and UK charity rules

#### D29 · /templates/pro-bono-invoice

- **Key:** pro bono invoice template · also: no charge invoice; zero dollar invoice
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Showing the value of free work: the normal price per line, a 100% discount, a total of 0, why (the client sees the value; some charities want it for their records; your own records). Tax: donated services are usually not deductible as a gift (US IRS: hedge, cite); VAT on free services varies (hedge). Sample: a designer's free logo for a local food bank.
- **Don't write about:** Nonprofit invoices (/templates/nonprofit-invoice: link it); discounts in general (/tools/discount-calculator).

#### D30 · /templates/royalty-invoice

- **Key:** royalty invoice template · also: licensing fee invoice; usage rights invoice
- **Group:** D21–D30 · **Score:** not scored · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing for use rather than work: the licence (what, where, how long), the royalty basis (a fixed fee, per unit sold, or a percentage of a reported amount, with the period and the statement it rests on), withholding tax on cross-border royalties (hedge, treaties), VAT on licences (a service: reverse charge B2B in the EU). Sample: a photographer's licence for a year of web use plus a quarterly royalty.
- **Don't write about:** Photography templates (link /templates/photography); international invoices (/templates/international-invoice).

## Parked (11): not built, key reserved

No proven demand, or the parent page covers it. Unpark (`status: planned`) only with new evidence.

- **D4-nl** `/nl/templates/urenfactuur` urenfactuur: parked 2026-11-28 (demand gate, nl): no dedicated Dutch pages; general zzp invoice guides cover hours (the zzp-factuur page)
- **D5** `/templates/day-rate-invoice` day rate invoice template: parked 2026-11-27 (demand gate): search results show one dedicated page, the rest fall back to hourly templates; the hourly page covers day rates. Local versions (Tagessatz, dagtarief) can return as local pages with their own evidence; was: local: Rechnung nach Tagessatz (de), factuur dagtarief (nl)
- **D6-de** `/de/vorlagen/pauschalrechnung` pauschalrechnung: parked 2026-11-27 (demand gate, de): no German site uses "Retainer-Rechnung"; a Pauschalrechnung means a flat fee, not a fee paid ahead for availability, so the honest German page would be a different one. Revisit with Search Console data.
- **D6-nl** `/nl/templates/voorschotfactuur` voorschotfactuur: parked 2026-11-28 (demand gate, nl): "retainer" is barely used in Dutch; voorschotfactuur means an advance invoice (the aanbetalingsfactuur page)
- **D8-nl** `/nl/templates/factuur-arbeid-en-materiaal` factuur arbeid en materiaal: parked 2026-11-28 (demand gate, nl): no pages from established sites; better on the trade pages
- **D9-nl** `/nl/templates/dienstenfactuur` factuur diensten: parked 2026-11-28 (demand gate, nl): only generic invoice pages rank (factuureisen, LO2, covers it)
- **D10-de** `/de/vorlagen/verkaufsrechnung` verkaufsrechnung: parked 2026-11-27 (demand gate, de): weak results; German sites treat a Verkaufsrechnung as an ordinary Rechnung, which the Rechnung-Pflichtangaben page (LO1) covers.
- **D13** `/templates/mileage-invoice` mileage invoice template: parked 2026-11-27 (demand gate): results are mileage logs and employee reimbursement forms, not invoices; the expense reimbursement page covers billing miles to a client; was: en-only: a US habit
- **D19** `/templates/personal-invoice` invoice template for individuals: parked 2026-11-27 (demand gate): no site uses "invoice template for individuals"; results treat it as freelance or simple invoices (the freelance page). The big local searches (Rechnung als Privatperson, factuur als particulier) can return as local pages; was: local: Rechnung als Privatperson (de), factuur als particulier (nl): both big local searches
- **D20** `/templates/international-invoice` international invoice template: parked 2026-11-27 (demand gate): intent split between commercial/export invoices (the commercial page) and currency tools; the freelance and commercial pages cover foreign clients. Local versions (Rechnung ins Ausland) can return as local pages; was: local: Rechnung ins Ausland / in Fremdwährung (de), factuur buitenland (nl)
- **D24-de** `/de/vorlagen/korrigierte-rechnung` korrigierte rechnung vorlage: owned by /de/rechnung-korrigieren (LO7): a German version would compete with it
