# Country pages (English)

> **Generated, don't edit by hand.** Rules: [RULES.md](../RULES.md); pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**0 done · 39 planned**

## Direction

URL, key, sections, what these pages can and can't do, links and languages: [RULES.md § CT · Country pages (English)](../RULES.md#ct--country-pages-english).

## Done (0): don't build these again

_None yet._

## Planned (39)

### Item CT1 (7)

#### /invoice-generator-uk

- **Key:** uk vat invoice requirements · also: invoice generator uk; vat invoice template uk
- **Item:** CT1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (new page type, chunk 43): the free generator preset for the UK (GBP, the VAT rates) plus the UK rules. What a VAT invoice must show, full vs simplified invoices (under £250), the VAT number, rates 20/5/0%, the tax point, invoicing when you're not VAT-registered (no VAT shown). Every rule with its source on gov.uk and the date checked.
- **Don't write about:** What every invoice includes in general (not this page's topic); how to use the generator (/free-invoice-generator).
- **Notes:** GBP, 20/5/0% VAT, VAT number; replaces /guides/invoice-requirements-uk

#### /invoice-generator-ireland

- **Key:** vat invoice ireland · also: invoice template ireland; irish vat invoice requirements
- **Item:** CT1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): the generator preset for Ireland (EUR, the VAT rates) plus what a VAT invoice must show per Revenue, the VAT number, rates (23/13.5/9/0%, check and date them), credit notes, not registered = no VAT. Sources: revenue.ie.
- **Don't write about:** General invoice fields (not this page's topic); EU reverse charge (owned by /reverse-charge-invoice): one sentence and a link.
- **Notes:** EUR, 23/13.5/9% VAT

#### /invoice-generator-australia

- **Key:** tax invoice australia · also: abn invoice template; gst invoice australia
- **Item:** CT1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): the generator preset for Australia (AUD, 10% GST) plus the ATO tax invoice rules: the ABN, the words 'tax invoice', GST shown, the extra buyer details from A$1,000, not registered for GST = an 'invoice', not a tax invoice. Sources: ato.gov.au, dated.
- **Don't write about:** General invoice fields (not this page's topic).
- **Notes:** AUD, 10% GST, ABN

#### /invoice-generator-new-zealand

- **Key:** gst invoice nz · also: tax invoice nz; nz invoice template
- **Item:** CT1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): the generator preset for New Zealand (NZD, 15% GST) plus the current IRD rules (since 2023 'taxable supply information' replaced the old tax invoice rules: check and explain), the GST number, thresholds. Sources: ird.govt.nz, dated.
- **Don't write about:** General invoice fields (not this page's topic).
- **Notes:** NZD, 15% GST, GST number

#### /invoice-generator-canada

- **Key:** gst hst invoice canada · also: canada invoice template; invoice requirements canada
- **Item:** CT1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): the generator preset for Canada (CAD) plus the GST/HST rules: the registration number, rates by province (GST 5%, HST provinces, PST and QST separate), the small-supplier threshold, the information required by invoice amount. The app applies one tax rate per invoice: explain how to show GST + PST honestly. Sources: canada.ca, dated.
- **Don't write about:** General invoice fields (not this page's topic); the VAT calculator (/tools/vat-calculator).
- **Notes:** CAD, GST/HST/PST by province

#### /invoice-generator-south-africa

- **Key:** vat invoice south africa · also: tax invoice south africa; sars invoice requirements
- **Item:** CT1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): the generator preset for South Africa (ZAR, 15% VAT) plus SARS tax invoice rules: full vs abridged tax invoices and their thresholds (check), the VAT number, the words 'tax invoice'. Sources: sars.gov.za, dated.
- **Don't write about:** General invoice fields (not this page's topic).
- **Notes:** ZAR, 15% VAT

#### /reverse-charge-invoice

- **Key:** eu reverse charge invoice · also: vat reverse charge invoice; intra eu invoice
- **Item:** CT1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** yes
- **Write about:** Needs page code (task S3): EU business-to-business invoices across borders: when the reverse charge applies (services and goods between VAT-registered businesses in different EU countries), both VAT numbers, no VAT charged, the reverse-charge note (VAT Directive art. 196), checking the client's VAT number in VIES. A generator preset with 0% and the note filled in. Sources: the EU's Your Europe pages, dated.
- **Don't write about:** Country VAT rates (owned by /tools/vat-calculator); the Irish rules (/invoice-generator-ireland).
- **Notes:** EU B2B: both VAT numbers + the reverse-charge note; chunk 43 called it /eu; localize yes (2026-11-26): every EU language searches for it (Reverse-Charge Rechnung, btw verlegd, autoliquidation, inversión del sujeto pasivo); language items in chunk 2

### Item CT2 (6)

#### /invoice-generator-singapore

- **Key:** gst invoice singapore · also: tax invoice singapore; iras invoice requirements
- **Item:** CT2 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): the generator preset (SGD, 9% GST) plus IRAS tax invoice rules: the GST registration number, the words 'tax invoice', simplified tax invoices under the threshold, not registered = no GST. Sources: iras.gov.sg, dated.
- **Don't write about:** General invoice fields (not this page's topic).

#### /invoice-generator-nigeria

- **Key:** vat invoice nigeria · also: invoice template nigeria; firs invoice requirements
- **Item:** CT2 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): the generator preset (NGN, 7.5% VAT) plus what an invoice must show (TIN, VAT), the current e-invoicing plans of the tax authority (check: if e-invoicing becomes mandatory for a business size, say so plainly). Sources: the tax authority's site, dated.
- **Don't write about:** General invoice fields (not this page's topic).

#### /invoice-generator-uae

- **Key:** tax invoice uae · also: vat invoice uae; fta invoice requirements
- **Item:** CT2 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): the generator preset (AED, 5% VAT) plus FTA tax invoice rules: the TRN, the words 'tax invoice', simplified tax invoices, the coming e-invoicing rollout (check dates and say plainly whether a PDF still counts). Sources: tax.gov.ae, dated.
- **Don't write about:** General invoice fields (not this page's topic).

#### /invoice-generator-malta

- **Key:** vat invoice malta · also: malta invoice requirements
- **Item:** CT2 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): EUR, VAT rates (check), the VAT number; Malta's rules from the CFR. Sources dated.
- **Don't write about:** General invoice fields (not this page's topic).

#### /invoice-generator-hong-kong

- **Key:** invoice template hong kong · also: hong kong invoice requirements
- **Item:** CT2 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): HKD, no VAT or GST in Hong Kong; what businesses usually show (business registration number) and record-keeping rules. Sources dated.
- **Don't write about:** General invoice fields (not this page's topic).

#### /invoice-generator-switzerland

- **Key:** vat invoice switzerland · also: mwst invoice switzerland
- **Item:** CT2 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3): CHF, MWST/TVA rates (8.1/2.6/3.8% since 2024; check), the UID with 'MWST', the QR-bill (Swiss payment slip: Invoicor doesn't make QR-bills: say so). Sources: estv.admin.ch, dated.
- **Don't write about:** General invoice fields (not this page's topic).

### Item CT3 (10)

#### /invoice-generator-germany

- **Key:** invoice requirements germany · also: german invoice requirements; freelance invoice germany
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. §14 UStG fields; Steuernummer vs USt-IdNr.; the Kleinunternehmer note (§19 UStG, the thresholds changed in 2025: check); EUR, 19% / 7%; e-invoicing (receiving since 2025, sending phased in from 2027: check and date).
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** pairs with /de/rechnung-pflichtangaben (same rules, in the local language) via hreflang once both exist

#### /invoice-generator-netherlands

- **Key:** invoice requirements netherlands · also: dutch invoice requirements; zzp invoice netherlands
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. The Belastingdienst's required fields; KvK and btw-id; the KOR (small-business scheme); 'btw verlegd'; EUR, 21% / 9%.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** pairs with /nl/factuureisen (same rules, in the local language) via hreflang once both exist

#### /invoice-generator-france

- **Key:** invoice requirements france · also: french invoice requirements; auto entrepreneur invoice france
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. Mentions obligatoires (SIREN/SIRET, the late-payment penalty and the €40 recovery fee); 'TVA non applicable, art. 293 B du CGI'; EUR, 20% / 10% / 5.5% / 2.1%; B2B e-invoicing: receiving from 2026, sending for small businesses from 2027 (check and date).
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** pairs with /fr/mentions-obligatoires-facture (same rules, in the local language) via hreflang once both exist

#### /invoice-generator-spain

- **Key:** invoice requirements spain · also: spanish invoice requirements; autonomo invoice spain
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. Required fields (Real Decreto 1619/2012); NIF/NIE; IRPF withholding on professional invoices (15%, 7% for new autónomos: check); EUR, 21% / 10% / 4%; Verifactu and B2B e-invoicing (dates moved: check and date).
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** pairs with /es/requisitos-factura (same rules, in the local language) via hreflang once both exist

#### /invoice-generator-austria

- **Key:** invoice requirements austria · also: austrian invoice requirements
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. §11 UStG (AT) fields, extra details above €10,000 and the small-invoice rule up to €400; UID number; Kleinunternehmer (threshold changed in 2025: check); EUR, 20% / 13% / 10%.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** no local page planned (Austria: the German page covers the language)

#### /invoice-generator-sweden

- **Key:** invoice requirements sweden · also: swedish invoice requirements
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. Skatteverket's required fields; momsregistreringsnummer; F-skatt on the invoice; the small-business VAT exemption (2025: check); SEK, 25% / 12% / 6%.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** pairs with /sv/vad-ska-sta-pa-en-faktura (same rules, in the local language) via hreflang once both exist

#### /invoice-generator-denmark

- **Key:** invoice requirements denmark · also: danish invoice requirements
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. Skattestyrelsen's required fields; CVR number; registration below DKK 50,000 (check); DKK, 25%; the bookkeeping law's rules for digital systems (hedge).
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** pairs with /da/krav-til-faktura (same rules, in the local language) via hreflang once both exist

#### /invoice-generator-norway

- **Key:** invoice requirements norway · also: norwegian invoice requirements
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. The bookkeeping regulation's fields; organisasjonsnummer + 'MVA'; registration from NOK 50,000 (check); NOK, 25% / 15% / 12%; not in the EU: no EU reverse charge (hedge).
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** pairs with /nb/krav-til-faktura (same rules, in the local language) via hreflang once both exist

#### /invoice-generator-finland

- **Key:** invoice requirements finland · also: finnish invoice requirements
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. Vero.fi's required fields; Y-tunnus and VAT number; the small-business threshold (raised in 2025: check); EUR, the standard rate 25.5% since 2024 and the reduced rates (check 2026 changes).
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** no local page planned (Austria: the German page covers the language)

#### /invoice-generator-cyprus

- **Key:** invoice requirements cyprus · also: cyprus vat invoice
- **Item:** CT3 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43, the country page type). For foreign freelancers and small businesses there who search in English: what an invoice must show, with each rule's official source and the date checked; the generator preset. The Tax Department's required fields; TIC and VAT number; the registration threshold (check); EUR, the standard and reduced rates (check). Many businesses work in English.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice).
- **Notes:** no local page planned (Austria: the German page covers the language)

### Item CT4 (8)

#### /invoice-generator-luxembourg

- **Key:** invoice requirements luxembourg · also: luxembourg vat invoice
- **Item:** CT4 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). Required fields per the AED; VAT 17% and the reduced rates (check); the small-business franchise; e-invoicing only for B2G so far (check). EUR.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-estonia

- **Key:** invoice requirements estonia · also: estonia vat invoice; e-resident invoice
- **Item:** CT4 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). e-Residents and freelancers: required fields per the Tax and Customs Board, VAT 24% (raised in 2025: check), the KMKR number, B2B e-invoices on request since 2025 (check what that means for a PDF). EUR.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-lithuania

- **Key:** invoice requirements lithuania · also: lithuania vat invoice
- **Item:** CT4 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). Required fields, PVM 21%, the i.SAF reporting of invoice data by VAT payers (hedge: the data is reported, the PDF stays valid: check). EUR.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-latvia

- **Key:** invoice requirements latvia · also: latvia vat invoice
- **Item:** CT4 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). Required fields per the VID, PVN 21%, the planned B2B e-invoicing (dates moved: check; if it applies, say so first). EUR.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-slovakia

- **Key:** invoice requirements slovakia · also: slovakia vat invoice
- **Item:** CT4 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). Required fields, DPH (rates changed in 2025: check), B2B e-invoicing planned from 2027 (check): until then a PDF is fine, say so with the date. EUR.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-slovenia

- **Key:** invoice requirements slovenia · also: slovenia vat invoice
- **Item:** CT4 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). Required fields, DDV 22% and the reduced rates, B2B e-invoicing planned from 2028 (check), the fiscal cash register for cash payments (hedge: a cash sale needs a fiscally verified receipt). EUR.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-bulgaria

- **Key:** invoice requirements bulgaria · also: bulgaria vat invoice
- **Item:** CT4 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). Required fields per the NRA, VAT 20%, the switch to the euro in 2026 (prices and invoices in EUR, the conversion rate: check). EUR.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-czech-republic

- **Key:** invoice requirements czech republic · also: czech invoice requirements; czech vat invoice
- **Item:** CT4 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). Required fields (IČO, DIČ), DPH 21% and 12% (since 2024: check), the VAT control statement (hedge), invoices by non-VAT payers. CZK.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

### Item CT5 (4)

#### /invoice-generator-india

- **Key:** gst invoice format india · also: tax invoice format india; gst bill format
- **Item:** CT5 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). GST tax invoice fields (CGST Rules, rule 46: check), GSTIN, HSN/SAC codes, place of supply, CGST + SGST vs IGST; e-invoicing (IRN) is required above a turnover limit, so the page says who can still use a PDF (check the current limit). INR. Link the India GST calculator.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-japan

- **Key:** qualified invoice japan · also: japan invoice system; tekikaku seikyusho
- **Item:** CT5 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). For foreigners and freelancers in Japan: the qualified invoice system since 2023 (the T + 13-digit registration number, consumption tax per rate, 10% and 8% reduced), what an unregistered seller can issue; English with the Japanese terms. JPY.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-thailand

- **Key:** tax invoice thailand · also: thailand vat invoice
- **Item:** CT5 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). Full vs abbreviated tax invoices per the Revenue Department, VAT 7% (check), the 13-digit tax ID, e-Tax invoices optional (check). THB.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /invoice-generator-quebec

- **Key:** quebec invoice requirements · also: qst invoice; quebec gst qst invoice
- **Item:** CT5 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). GST 5% + QST 9.975% and both registration numbers, and the Charter of the French language: invoices to Quebec clients must be in French (another language may be added; check the 2025 rules, cite the OQLF). CAD. Link the Canada page and calculator.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

### Item CT6 (4)

#### /eu-client-from-uk

- **Key:** invoice eu client from uk · also: invoicing eu clients after brexit; uk vat on services to eu
- **Item:** CT6 · **Score:** not scored · **Intent:** cross-border rules · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). UK businesses billing EU clients: services to EU businesses are usually outside the scope of UK VAT with the reverse charge in the EU; goods are exports (zero-rated, customs); B2C digital services and EU VAT (OSS). Each with its GOV.UK source, hedged. GBP or EUR.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /us-client-from-europe

- **Key:** invoice us client from europe · also: invoicing us clients from eu; w-8ben invoice
- **Item:** CT6 · **Score:** not scored · **Intent:** cross-border rules · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). EU and UK freelancers billing US clients: usually no VAT on B2B services exported (reverse charge or outside the scope: hedge per country), the W-8BEN or W-8BEN-E the client may ask for, USD and bank details that work from the US. Link the international invoice template.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /uk-client-from-eu

- **Key:** invoice uk client from eu · also: invoicing uk clients from europe
- **Item:** CT6 · **Score:** not scored · **Intent:** cross-border rules · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). EU businesses billing UK clients: the UK reverse charge on B2B services, the UK VAT number, goods as exports with customs, GBP vs EUR. Sources from the EU country and GOV.UK.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers

#### /oss-invoice

- **Key:** oss invoice · also: one stop shop vat invoice; eu oss invoice requirements
- **Item:** CT6 · **Score:** not scored · **Intent:** cross-border rules · **Languages:** en-only
- **Write about:** Needs page code (task S3, the country page type). In English: what an invoice must show there, each rule with its official source and the date checked; the generator preset (currency, rate). EU B2C distance sales and digital services above €10,000: the VAT of the customer's country, which invoice rules apply (those of the seller's country under OSS: check), what the OSS return needs. Source: the European Commission's OSS guide.
- **Don't write about:** The general 'what goes on an invoice' (not this page's topic); the EU reverse charge in depth (/reverse-charge-invoice: link it); rules without a source and date.
- **Notes:** en-only: none of our 11 languages, or a topic for English speakers
