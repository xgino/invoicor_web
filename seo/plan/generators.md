# Generators (other documents)

> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [chunks](../PLAN.md).

**1 done · 4 planned**

## Direction

- **URL:** `/free-{document}-generator` · **Key:** "free {document} generator"
- **Blueprint:** [BLUEPRINTS.md](../BLUEPRINTS.md#generator-free-invoice-generator-chunks-3035) · **Where it's written:** page code: a `document_type` in the web generator (chunk 44)
- **Links to:** the invoice generator, the matching blog explainer.
- **Languages:** **yes**, like the invoice generator.

**Can do:**

- Other business documents made in the browser like the invoice: receipt, estimate, proforma, credit note.
- Say plainly that the app itself makes invoices only.

**Can't do:**

- Separate pages for synonyms (quote = estimate: one page owns both keys).
- Fewer than 10 is right here: only documents a small business really sends.

## Done (1): don't build these again

`/free-invoice-generator` free invoice generator

## Planned (4)

### Item 4A (4)

#### /free-receipt-generator

- **Key:** free receipt generator
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a receipt mode in the web generator. The page says plainly that the app itself makes invoices, not receipts.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

#### /free-estimate-generator

- **Key:** free estimate generator
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): an estimate mode in the web generator. The page says plainly that the app has no estimates or quotes.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

#### /free-proforma-invoice-generator

- **Key:** proforma invoice generator · also: proforma invoice template
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a proforma mode in the web generator (the title 'Proforma invoice', 'not a tax invoice', no invoice number sequence). Explain when a proforma is used (prepayment, customs, quotes for imports). The app itself makes invoices only.
- **Don't write about:** What a proforma invoice is in depth (the blog topic what-is-a-proforma-invoice): link.
- **Already covered (link, don't repeat):** /free-invoice-generator (“free invoice generator”)

#### /free-credit-note-generator

- **Key:** credit note generator · also: credit memo template; credit note template
- **Item:** 4A · **Intent:** tool (do) · **Languages:** yes
- **Write about:** Needs code first (chunk 44): a credit note mode (refers to the original invoice number, negative amounts). The app has no credit notes: say so; in the app you cancel and duplicate.
- **Don't write about:** What a credit note is (the blog topic what-is-a-credit-note): link.
