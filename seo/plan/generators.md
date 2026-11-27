# Generators

> **Generated, don't edit by hand.** Rules: [RULES.md](../RULES.md); pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**1 done · 9 planned**

## Direction

URL, key, sections, what these pages can and can't do, links and languages: [RULES.md § G · Generators](../RULES.md#g--generators).

## Done (1): don't build these again

**G1** `/free-invoice-generator` free invoice generator

## Planned (9)

### G2–G5: Document generators (receipt, estimate, proforma, credit note) (4)

#### G2 · /free-receipt-generator

- **Key:** free receipt generator
- **Group:** G2–G5 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a receipt mode in the web generator. The page says plainly that the app itself makes invoices, not receipts.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

#### G3 · /free-estimate-generator

- **Key:** free estimate generator · also: free quote generator; quote maker; estimate template
- **Group:** G2–G5 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): an estimate mode in the web generator. The page says plainly that the app has no estimates or quotes.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)
- **Notes:** Owns both keys: quote = estimate (no separate quote page).

#### G4 · /free-proforma-invoice-generator

- **Key:** proforma invoice generator · also: proforma invoice template
- **Group:** G2–G5 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a proforma mode in the web generator (the title 'Proforma invoice', 'not a tax invoice', no invoice number sequence). Explain when a proforma is used (prepayment, customs, quotes for imports). The app itself makes invoices only.
- **Don't write about:** What a proforma invoice is in depth: link /free-proforma-invoice-generator.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

#### G5 · /free-credit-note-generator

- **Key:** credit note generator · also: credit memo template; credit note template
- **Group:** G2–G5 · **Score:** not scored · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a credit note mode (refers to the original invoice number, negative amounts). The app has no credit notes: say so; in the app you cancel and duplicate.
- **Don't write about:** What a credit note is in depth: link /free-credit-note-generator.

### G6–G10: Document generators II (purchase order, delivery note, statement, debit note, work order) (5)

#### G6 · /free-purchase-order-generator

- **Key:** purchase order generator · also: purchase order template; po generator
- **Group:** G6–G10 · **Score:** not scored · **Intent:** generator · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a document type in the web generator. Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A PO a small business sends to a supplier: PO number, supplier and ship-to address, items with quantities and agreed prices, delivery date, terms; no tax invoice wording. Show how the supplier's invoice then quotes the PO number (link /templates/purchase-order-invoice).
- **Don't write about:** Invoicing against a PO (/templates/purchase-order-invoice: link it both ways).
- **Notes:** local: Bestellung (de), bon de commande (fr), inkooporder (nl): check the local word

#### G7 · /free-delivery-note-generator

- **Key:** delivery note generator · also: packing slip generator; delivery note template
- **Group:** G6–G10 · **Score:** not scored · **Intent:** generator · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a document type in the web generator. Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A delivery note or packing slip: what was delivered, quantities, the order or PO number, no prices (or an option to show them), a line for the receiver's signature and date (printed, not e-signed: the generator has no e-signatures). How it differs from the invoice that follows.
- **Don't write about:** Customs documents (/templates/commercial-invoice: link it).
- **Notes:** local: Lieferschein (de), bon de livraison (fr), pakbon (nl), albarán (es): big local searches

#### G8 · /free-statement-of-account-generator

- **Key:** statement of account generator · also: customer statement template; account statement generator
- **Group:** G6–G10 · **Score:** not scored · **Intent:** generator · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a document type in the web generator. Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A statement for one client over a period: opening balance, each invoice and payment by date and number, the balance due, an ageing line (current, 30, 60, 90+ days). The user types the invoices in (no link to the app's data: say so). When to send one (month end, before chasing).
- **Don't write about:** Re-sending one overdue invoice (/templates/past-due-invoice: link it); DSO math (/tools/dso-calculator).
- **Notes:** local: Kontoauszug means a bank statement in German: use Offene-Posten-Liste / Saldenbestätigung (check); relevé de compte (fr): check

#### G9 · /free-debit-note-generator

- **Key:** debit note generator · also: debit note template; debit memo
- **Group:** G6–G10 · **Score:** not scored · **Intent:** generator · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a document type in the web generator. Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A debit note: raising the amount of an earlier invoice (an extra charge, a price correction upward) or, in some countries, the buyer's note to the seller for a return (India GST: both uses, check; say which one the page means). It refers to the original invoice number. Pair it with the credit note.
- **Don't write about:** Credit notes (/free-credit-note-generator: link it both ways); revised invoices (/templates/revised-invoice).
- **Notes:** local: note de débit (fr, Belgium), debetnota (nl), nota de débito (es); rare in de and the Nordics: park there if no search

#### G10 · /free-work-order-generator

- **Key:** work order generator · also: work order template; job sheet template
- **Group:** G6–G10 · **Score:** not scored · **Intent:** generator · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a document type in the web generator. Same blueprint as the invoice generator page. The page says plainly that the app itself makes invoices only. A work order for a job: client and site, the work to do, parts and hours used, the technician, a line for the client's signature on paper; then turn it into an invoice in one click (prefill the invoice generator with the lines). For trades: plumbing, HVAC, repairs.
- **Don't write about:** The estimate before the job (/free-estimate-generator); labor and materials invoices (/templates/labor-and-materials-invoice: link it).
- **Notes:** local: Arbeitsauftrag / Auftragszettel (de), bon d'intervention (fr), werkbon (nl): check
