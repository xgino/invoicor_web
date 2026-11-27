# Invoice types (general documents)

> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**0 done · 30 planned**

## Direction

- **URL:** `/templates/{type}-invoice` · **Key:** "{deposit | final | hourly | commercial | freelance …} invoice template"
- **Blueprint:** [BLUEPRINTS.md](../BLUEPRINTS.md#invoice-type-template-templatestype-invoice) · **Where it's written:** `content/templates.json` (same fields as a template)
- **Links to:** the trade billing-type pages of this type (both ways), the free generator, one tool (deposit calculator, mileage calculator …).
- **Languages:** **yes** for most: these are the big local searches (Anzahlungsrechnung, Schlussrechnung, factuur zzp). US-only ones (1099, mileage) stay **en-only**.

**Can do:**

- The general document behind many trades: what makes this kind of invoice different (what it must show, how it's numbered, how it relates to the other invoices), with a sample for a typical case.
- Be the parent of the trade billing-type pages: list them ("by trade") and take the general search, so the trade pages only need the trade's specifics.
- A who-invoices type (freelance, subcontractor, independent contractor) when the tax status changes the invoice (no VAT charged, CIS deduction, reverse charge, no tax withheld).

**Can't do:**

- Be a trade template under another name: "service invoice" is about invoicing services in general, not about any trade.
- Synonyms as their own pages: down payment = advance payment = deposit; interim = progress (owned by /templates/construction-progress-invoice); time and materials = labor and materials; sole trader = self-employed = freelance.
- Promise what the app can't: no deposit or partial-payment tracking, no recurring invoices, no customs forms; a commercial invoice is the document, not the carrier's paperwork.
- The concept explained at length (what is a proforma, what does net 30 mean): no "what is" explainers: this page is the document.

## Done (0): don't build these again

_None yet._

## Planned (30)

### Item D1 (20)

#### /templates/deposit-invoice

- **Key:** deposit invoice template · also: down payment invoice; advance payment invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The general deposit invoice: part of the price before work starts. What it must show (that it's a deposit, the full job price, the share asked, what it secures, when the rest is due, refundable or not), its own invoice number, and how the final invoice subtracts it (a negative line: 'Less deposit, invoice #…'). In many VAT countries VAT is due on the deposit when it's paid (hedge; check the local rule). Sample: 30% of a $4,000 job. A 'by trade' section links the trade deposit pages.
- **Don't write about:** Trade specifics (the *-deposit-invoice pages); how much to ask (the deposit calculator); any claim that the app tracks deposits (it doesn't).
- **Notes:** parent of the *-deposit-invoice pages; local: Anzahlungsrechnung (de), aanbetalingsfactuur (nl), facture d'acompte (fr), factura de anticipo (es)

#### /templates/final-invoice

- **Key:** final invoice template · also: final bill invoice; closing invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The last invoice of a job paid in parts: the full price, minus every earlier invoice by number and date (deposit, progress invoices), the balance due, marked 'Final invoice'. Tax only on what's left when earlier invoices already charged it (hedge; Germany's Schlussrechnung rules are strict: the local version). Sample: a $12,000 job after a $3,000 deposit and a $4,500 progress invoice.
- **Don't write about:** The deposit invoice itself (/templates/deposit-invoice); photography and catering finals (their own pages).
- **Notes:** local: Schlussrechnung (de), eindfactuur (nl), facture de solde (fr), factura final (es)

#### /templates/milestone-invoice

- **Key:** milestone invoice template · also: milestone billing invoice; milestone payment invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. A project billed in agreed stages (design 30%, build 50%, launch 20%): the milestone and the contract it's from, what was delivered and accepted, its share of the total, what's been paid so far. Milestones are deliverables; progress billing is % complete (construction, its own page). Sample: milestone 2 of 3 on a $9,000 project.
- **Don't write about:** Construction progress and retainage (/templates/construction-progress-invoice); the web, app and video milestone pages (trade specifics).

#### /templates/hourly-invoice

- **Key:** hourly invoice template · also: timesheet invoice; hours worked invoice; invoice for hours
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Hours × rate for any work: hours by day or by task (a timesheet summary on the invoice), rounding and minimum increments, different rates (standard, rush, travel), a cap agreed upfront. The app has no timer: you enter the hours you tracked; the hours calculator adds up times. Sample: 3 dates at 2 rates.
- **Don't write about:** The trade hourly pages (consulting, handyman, VA, bookkeeping, cleaning, moving); setting your rate (the hourly rate calculator).

#### /templates/day-rate-invoice

- **Key:** day rate invoice template · also: daily rate invoice; per day invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing per day (film and event crews, UK contractors, consultants): what counts as a day (hours, overtime after X hours, half days), travel days, kit hire as its own line, per diems. Sample: 4 days + a half day + kit hire.
- **Don't write about:** Hourly billing (/templates/hourly-invoice); setting the rate (the day rate calculator).
- **Notes:** local: Rechnung nach Tagessatz (de), factuur dagtarief (nl)

#### /templates/retainer-invoice

- **Key:** retainer invoice template · also: monthly retainer invoice; advance retainer invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. A fixed fee paid ahead for availability or a block of hours (lawyers, consultants, agencies): the period, what's included (hours or scope), what happens to unused hours (rolled over or lost, per the contract), work beyond it billed on its own lines. An advance against future work vs a pure availability fee. Each month: duplicate last month's invoice (the app doesn't send recurring invoices). Sample: May, 20 hours included, 3 hours over.
- **Don't write about:** The consulting, social media, website, interior design and VA retainer pages (trade specifics); legal trust-account rules (hedge, no law cited).

#### /templates/monthly-invoice

- **Key:** monthly invoice template · also: monthly billing invoice; monthly service invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. One invoice a month for ongoing service (cleaning, lawn care, pools, lessons, equipment): the service period, visits or units that month, a flat fee or per visit, skipped visits credited, the due date. With the app: duplicate last month's invoice, change the period and the number. Sample: October, 4 weekly visits, 1 skipped and credited.
- **Don't write about:** Retainers (/templates/retainer-invoice); the trade monthly pages (lawn care, pool, cleaning, music lessons); any promise of automatic recurring invoices (the app doesn't send them).

#### /templates/labor-and-materials-invoice

- **Key:** labor and materials invoice template · also: time and materials invoice; parts and labor invoice; labor invoice template
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The general labor + materials invoice for any trade: labor lines (hours × rate or a flat price), material lines (quantity, unit, unit price), markup on materials (shown or built in), trip and disposal fees, and where tax applies (in many US states materials are taxed and labor isn't: hedge). Time and materials vs a fixed price. Sample: a repair with 3 labor hours and 5 material lines. A 'by trade' section links the trade versions.
- **Don't write about:** Trade materials in depth (the plumbing, electrical, HVAC … labor and materials pages); markup math (the markup calculator).
- **Notes:** parent of the *-labor-and-materials-invoice pages: those must pass the demand gate on their own

#### /templates/service-invoice

- **Key:** service invoice template · also: invoice for services; invoice for services rendered; service bill
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Invoicing services rather than goods, for any business: a description the client recognises (what, when, for whom), service date vs invoice date, hours, visits or a flat fee, tax on services (often different from goods: hedge), payment terms. Sample: 3 service lines. 'Find your trade' links to the templates hub.
- **Don't write about:** Any trade's specifics (the trade templates); selling goods (/templates/sales-invoice).
- **Already covered (link, don't repeat):** /templates/pool-service (“pool service invoice template”) · /templates/tree-service (“tree service invoice template”)

#### /templates/sales-invoice

- **Key:** sales invoice template · also: invoice for goods; product invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Selling goods: item and SKU, quantity, unit price, discount, shipping, sales tax or VAT on goods, delivery date and address, returns terms. How it differs from a receipt (already paid) and a commercial invoice (export). Sample: 4 products + shipping, for makers, resellers and B2B orders.
- **Don't write about:** Export and customs (/templates/commercial-invoice); receipts (the receipt generator).

#### /templates/commercial-invoice

- **Key:** commercial invoice template · also: commercial invoice for export; customs invoice; shipping invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The invoice that travels with goods across a border: seller, buyer and consignee, a precise description per item, HS code, country of origin, quantity, weight, value and currency, Incoterms, reason for export, a signed declaration. Honest: Invoicor makes the invoice PDF; HS codes and origin go in the item lines or notes; carriers and customs may want their own forms too. Sample: 3 items shipped from the UK to the US (duties hedged).
- **Don't write about:** Customs advice beyond the fields (link the customs authority); the EU reverse charge (/reverse-charge-invoice).
- **Notes:** local: Handelsrechnung (de), handelsfactuur (nl), facture commerciale (fr), factura comercial (es)

#### /templates/past-due-invoice

- **Key:** past due invoice template · also: overdue invoice template; late invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Re-sending an unpaid invoice: the same number and date, 'PAST DUE' and the days overdue, the original due date, a late fee only if the contract or the law allows it (as a line or a new invoice: hedge), how to pay, a short firm note. The app has no reminders: you share the PDF again. Sample: 30 days overdue with the agreed 1.5% monthly fee.
- **Don't write about:** Late payment emails and what to do when a client doesn't pay (not this page's topic); interest math (the late fee and late payment interest calculators).
- **Notes:** en-only: in other languages this is a dunning letter (Mahnung, aanmaning), a letter rather than an invoice; decide later

#### /templates/mileage-invoice

- **Key:** mileage invoice template · also: mileage reimbursement invoice; travel mileage invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing a client for miles driven: date, from and to, purpose, miles, rate per mile (the contract sets it; the IRS standard rate is a common reference: cite and date it), tolls and parking at cost; as its own invoice or as lines on the job invoice. Sample: 5 trips.
- **Don't write about:** Employee expense claims (not an invoice); the math (the mileage reimbursement calculator).
- **Notes:** en-only: a US habit

#### /templates/expense-reimbursement-invoice

- **Key:** reimbursement invoice template · also: invoice for expenses; expense invoice; rebilling expenses
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Passing costs on to a client: what you paid (travel, materials, fees), at cost or with a markup (per the contract), receipts kept and listed, and the tax difference between a disbursement paid in the client's name (often outside VAT) and a rebilled cost (part of your price): hedge, with the HMRC guidance as the English example (cite and date).
- **Don't write about:** Mileage (/templates/mileage-invoice); employee expense reports.
- **Notes:** local: Auslagen / durchlaufende Posten (de), doorbelasten kosten (nl), débours (fr)

#### /templates/no-vat-invoice

- **Key:** invoice without vat template · also: non vat registered invoice; invoice not registered for vat; invoice with no tax
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. For sellers below the VAT threshold or exempt: what an invoice without VAT must and mustn't show (no VAT line, no VAT number, the wording a country requires), why the client can't reclaim VAT on it, what changes when you cross the threshold. English examples: the UK (not VAT registered: cite HMRC, date it) and Australia (not registered for GST, so it isn't a 'tax invoice'). Sample with the note and no tax line.
- **Don't write about:** Exempt services by country in detail (the local versions); VAT numbers in general (the country pages).
- **Notes:** each language version is that country's small-business scheme: Kleinunternehmer §19 UStG (de), KOR (nl), franchise en base art. 293 B (fr), exención/franquiciado (es: check the current rule), the small-business exemption (sv), under 50,000 kr (da), under 50,000 NOK (nb); it, pt, pl last (e-invoicing)

#### /templates/freelance-invoice

- **Key:** freelance invoice template · also: self employed invoice template; sole trader invoice template; freelancer invoice
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Freelancers in any field: what the client's accounts team needs (your legal name, address, tax ID or UTR where asked, their PO number, bank details), project, hourly or day-rate lines, usage rights when you sell creative work, VAT if registered or the no-VAT note, payment terms from the contract. UK sole traders and the self-employed use the same document. Sample: a project fee + 2 extra hours. A 'by field' section links the trade templates.
- **Don't write about:** Field specifics (freelance design, copywriting, web development, translation …); US 1099 detail (/templates/independent-contractor-invoice).
- **Already covered (link, don't repeat):** /industries/web-developers (“invoice app for freelance developers”)
- **Notes:** local: Rechnung Freiberufler / Selbstständige (de), factuur zzp (nl), facture auto-entrepreneur (fr), factura autónomo (es)

#### /templates/independent-contractor-invoice

- **Key:** independent contractor invoice template · also: 1099 contractor invoice; 1099 invoice template
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. US independent contractors: the invoice shows you're a business, not an employee (your name or business name, no tax withheld, your own expenses), the W-9 the client keeps on file, and the 1099-NEC the client files above the IRS threshold (it's changing: check the IRS page for the year and date it). Billing by project or hour. Sample: a month of contract work.
- **Don't write about:** Freelancing in general (/templates/freelance-invoice); construction contractors (/templates/construction, /industries/general-contractors); tax advice beyond hedged facts.
- **Already covered (link, don't repeat):** /industries/general-contractors (“invoice app for contractors”)
- **Notes:** en-only: US tax status

#### /templates/subcontractor-invoice

- **Key:** subcontractor invoice template · also: sub contractor invoice; subcontractor billing
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. A sub billing the main contractor, not the owner: the project, the GC's PO or contract number, scope or % complete, retainage held, change orders by number, the lien waiver that often goes with payment (US: hedge per state). UK: CIS deductions on the labor part (cite HMRC, date it). Sample: an $18,000 subcontract, 40% complete, 10% retainage.
- **Don't write about:** Progress billing in depth (/templates/construction-progress-invoice); retainage math (the retainage calculator).
- **Notes:** local: Subunternehmer Rechnung (de: §13b reverse charge on construction services), onderaannemer factuur (nl: btw verlegd, G-rekening)

#### /templates/personal-invoice

- **Key:** invoice template for individuals · also: personal invoice template; invoice without a business; invoice as a private person
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Someone without a business who needs to invoice once (a one-off job, a speaker fee, selling equipment to a company): what to put instead of a business name and tax number, whether tax applies (usually not), why the payer needs it, and when repeated work becomes a business that must register (hedge: it varies by country). Sample: a one-off design job by a private person.
- **Don't write about:** Small-business VAT schemes (/templates/no-vat-invoice); freelancing as a business (/templates/freelance-invoice).
- **Notes:** local: Rechnung als Privatperson (de), factuur als particulier (nl): both big local searches

#### /templates/international-invoice

- **Key:** international invoice template · also: invoice foreign client; invoice in foreign currency; invoice in usd
- **Item:** D1 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Invoicing a client in another country: which currency (yours or theirs, and the rate if you convert), bank details that work abroad (IBAN, SWIFT/BIC or a payment link), the client's full address and tax ID, which tax applies (EU business clients: the reverse charge, link it; services exported outside the EU are often outside VAT: hedge), the invoice language. Invoicor: 38 currencies, invoices in 11 languages. Sample: a UK freelancer billing a US client in USD.
- **Don't write about:** The EU reverse charge in depth (/reverse-charge-invoice); exporting goods (/templates/commercial-invoice).
- **Notes:** local: Rechnung ins Ausland / in Fremdwährung (de), factuur buitenland (nl)

### Item D2 (10)

#### /templates/self-billing-invoice

- **Key:** self billing invoice template · also: self billing invoice; self-billing agreement
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. The customer writes the invoice for the supplier (common with subcontractors, couriers, growers, platforms): the self-billing agreement it needs, the words 'self-billing' on the invoice (UK: HMRC VAT Notice 700/62; EU: Art. 224 VAT Directive: cite and date), the supplier's VAT number, who keeps what. Be honest: Invoicor has no 'self-billing' document type; say what to write in the notes. Sample: a courier firm self-billing a driver for a month of drops.
- **Don't write about:** The subcontractor invoice (/templates/subcontractor-invoice: link it); the reverse charge (/reverse-charge-invoice); credit notes (/free-credit-note-generator).
- **Notes:** local: Gutschrift im Sinne des UStG (de), self-billing / autofacturation (fr): check the local word

#### /templates/itemized-invoice

- **Key:** itemized invoice template · also: itemized bill; itemized invoice example
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Every part, hour and fee on its own line with quantity, unit and unit price: when clients, insurers or the tax office ask for it, how to group lines so it stays readable, discounts per line vs on the total (the app has one discount on the total and one tax rate per invoice: say so), line limits (Free 10, Starter 25, Pro 50: BRAND.md). Sample: a 14-line appliance repair for an insurance claim.
- **Don't write about:** Labor and materials split (/templates/labor-and-materials-invoice: link it); trade templates' own line items.

#### /templates/paid-invoice

- **Key:** paid invoice template · also: paid in full invoice; cash invoice template
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. An invoice that shows it's settled: 'PAID' with the date and method, amount paid and balance zero, when a client wants a paid invoice instead of a receipt (expense claims, warranties), cash sales. The app has a paid status (BRAND.md; check whether the PDF shows it before claiming). Sample: a $640 job paid by card on the day.
- **Don't write about:** The receipt (/free-receipt-generator: link it, and say the difference in two lines); the final invoice after a deposit (/templates/final-invoice).

#### /templates/revised-invoice

- **Key:** revised invoice template · also: corrected invoice; amended invoice
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Fixing an invoice already sent: when a new version with a note is fine and when the rules want a credit note plus a new invoice (VAT-registered sellers: cite and date, hedge per country), keeping the number trail, 'This replaces invoice 1042'. In Invoicor a sent invoice is locked: duplicate it, fix it, send it (BRAND.md). Sample: a wrong hourly rate corrected on a consulting invoice.
- **Don't write about:** Credit notes in depth (/free-credit-note-generator: link it); invoice numbering (/tools/invoice-number-generator).
- **Notes:** de: owned by /de/rechnung-korrigieren (LO7): park the de version

#### /templates/cancellation-fee-invoice

- **Key:** cancellation fee invoice template · also: late cancellation invoice; no show fee invoice
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing a client who cancels late or doesn't show: the clause it rests on (quote it on the invoice), kept deposits vs a new fee, whether VAT or sales tax applies to cancellation fees (EU: often yes since the 2021 CJEU rulings: hedge, check per country), reasonable amounts. Sample: a photographer's 50% fee for a wedding cancelled 3 weeks out.
- **Don't write about:** Deposits (/templates/deposit-invoice: link it); past due invoices (/templates/past-due-invoice).

#### /templates/limited-company-invoice

- **Key:** limited company invoice template · also: ltd company invoice requirements; invoice for limited company uk
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. UK limited companies: the full registered name, the company number, the place of registration and the registered office (Companies Act 2006 and the 2015 Regulations: cite and date), the VAT number when registered, directors' names only if used at all (all or none). Sample: an IT contractor's Ltd billing an agency.
- **Don't write about:** UK VAT rules in general (/invoice-generator-uk: link it); sole trader invoices (/templates/freelance-invoice).
- **Already covered (link, don't repeat):** /templates/moving (“moving company invoice template”)
- **Notes:** en-only: UK company law; other countries' company details are on their local pages

#### /templates/purchase-order-invoice

- **Key:** purchase order invoice template · also: invoice with po number; po invoice
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing a company that issued a purchase order: the PO number where their accounts team looks for it, the same item descriptions and prices as the PO, partial deliveries against one PO, why invoices without a PO get stuck (three-way match: hedge). Where to put the PO number in Invoicor (check: a reference field or the notes). Sample: a print job delivered in two parts against one PO.
- **Don't write about:** Purchase orders themselves (not an Invoicor document); net terms (/tools/due-date-calculator: link it).

#### /templates/nonprofit-invoice

- **Key:** nonprofit invoice template · also: invoice for nonprofit organization; charity invoice template
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** en-only
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Two cases: a nonprofit billing for its services, events or memberships (sales tax exemption certificates in the US, hedge per state; UK charity VAT reliefs, hedge), and a business billing a nonprofit (exempt certificate on file, donated amounts shown as a discount). Say plainly that an invoice is not a donation receipt. Sample: a charity billing a school for workshops.
- **Don't write about:** Donation receipts (not an invoice; /free-receipt-generator for a simple receipt); pro bono work (/templates/pro-bono-invoice).
- **Notes:** en-only: US 501(c)(3) and UK charity rules

#### /templates/pro-bono-invoice

- **Key:** pro bono invoice template · also: no charge invoice; zero dollar invoice
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Showing the value of free work: the normal price per line, a 100% discount, a total of 0, why (the client sees the value; some charities want it for their records; your own records). Tax: donated services are usually not deductible as a gift (US IRS: hedge, cite); VAT on free services varies (hedge). Sample: a designer's free logo for a local food bank.
- **Don't write about:** Nonprofit invoices (/templates/nonprofit-invoice: link it); discounts in general (/tools/discount-calculator).

#### /templates/royalty-invoice

- **Key:** royalty invoice template · also: licensing fee invoice; usage rights invoice
- **Item:** D2 · **Intent:** template (download/fill) · **Languages:** yes
- **Write about:** Same fields and depth as the live templates (content/templates.json), with a filled-in sample invoice. Billing for use rather than work: the licence (what, where, how long), the royalty basis (a fixed fee, per unit sold, or a percentage of a reported amount, with the period and the statement it rests on), withholding tax on cross-border royalties (hedge, treaties), VAT on licences (a service: reverse charge B2B in the EU). Sample: a photographer's licence for a year of web use plus a quarterly royalty.
- **Don't write about:** Photography templates (link /templates/photography); international invoices (/templates/international-invoice).

## Parked (1): not built, key reserved

No proven demand, or the parent page covers it. Unpark (`status: planned`) only with new evidence.

- `/de/vorlagen/korrigierte-rechnung` korrigierte rechnung vorlage: owned by /de/rechnung-korrigieren (LO7): a German version would compete with it
