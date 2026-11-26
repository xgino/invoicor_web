# Local pages (in the country's own language)

> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**0 done · 35 planned**

## Direction

- **URL:** `/{lang}/{local slug}` · **Key:** the country's own search words (e.g. "pflichtangaben rechnung", "factuureisen")
- **Blueprint:** [BLUEPRINTS.md](../BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · **Where it's written:** page code under the language routes (chunk 43)
- **Links to:** the language's generator page and VAT calculator.
- **Languages:** **local**: only in its own language.

**Can do:**

- Written in the language from the start (rule R4): local invoice rules, small-business schemes, local wording and examples.
- Later: comparisons with that country's own rivals (HL9).
- Local topics that have no English parent (`local topic`): rules only that country has, e.g. the German Kleinbetragsrechnung (≤ 250 €), the Swedish ROT/RUT deduction on the invoice.

**Can't do:**

- Compete with that language's generator page: this is "what must be on it", the generator is "make one".
- Invite people to make a PDF invoice where the law requires e-invoicing (IT, PT, PL): those are on hold until the product supports it.

## Done (0): don't build these again

_None yet._

## Planned (35)

### Item LO1 (12)

#### /de/rechnung-pflichtangaben

- **Key:** pflichtangaben rechnung · also: rechnung pflichtangaben; was muss auf eine rechnung
- **Item:** LO1 · **Intent:** country rules + generator preset · **Languages:** local (written in de)
- **Write about:** Written in German for German businesses (page code, chunk 43, under the de routes): the mandatory invoice details (§14 Abs. 4 UStG), small invoices up to €250 (§33 UStDV), Kleinunternehmer (§19 UStG) and the note to use, the e-invoicing obligation from 2025 and its transition rules (be honest: Invoicor makes PDF invoices; say when a PDF is still allowed for B2B, check and date). Sources: Gesetze im Internet, BMF, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /de/rechnung-erstellen): one sentence and a link. That page is 'make one', this page is 'what must be on it'.
- **Notes:** §14 UStG, Kleinunternehmer §19; replaces /guides/invoice-requirements-germany; next to /de/rechnung-erstellen, must not compete with it

#### /nl/factuureisen

- **Key:** factuureisen · also: wat moet er op een factuur; factuur eisen belastingdienst
- **Item:** LO1 · **Intent:** country rules + generator preset · **Languages:** local (written in nl)
- **Write about:** Written in Dutch for Dutch businesses (page code, chunk 43, under the nl routes): the Belastingdienst invoice requirements (factuureisen), the KvK number and btw-id, the KOR (small business scheme) and what to put on the invoice, 'btw verlegd', the 5-year/7-year retention rule. Sources: belastingdienst.nl, kvk.nl, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /nl/gratis-factuur-maken).
- **Notes:** btw-nummer, KvK, KOR; replaces /guides/invoice-requirements-netherlands

#### /fr/mentions-obligatoires-facture

- **Key:** mentions obligatoires facture · also: facture mentions légales; mentions facture auto-entrepreneur
- **Item:** LO1 · **Intent:** country rules + generator preset · **Languages:** local (written in fr)
- **Write about:** Written in French for French businesses (page code, chunk 43, under the fr routes): the mandatory mentions (SIRET, TVA intracommunautaire, numbering, due date), 'TVA non applicable, art. 293 B du CGI' for micro-entrepreneurs, late-payment penalties and the €40 fixed compensation, the e-invoicing reform timetable (check and date). Sources: service-public.fr, economie.gouv.fr, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /fr/creer-une-facture).
- **Notes:** SIRET, TVA non applicable art. 293 B

#### /es/requisitos-factura

- **Key:** requisitos de una factura · also: datos obligatorios factura; que debe llevar una factura
- **Item:** LO1 · **Intent:** country rules + generator preset · **Languages:** local (written in es)
- **Write about:** Written in Spanish for Spain (page code, chunk 43, es routes): the mandatory data (NIF, numbering, IVA, the Reglamento de facturación), simplified invoices, and the coming Verifactu and B2B e-invoice rules (check dates; say plainly when a PDF from a non-certified tool stops being enough). Sources: agenciatributaria.gob.es, BOE, dated.
- **Don't write about:** How to make an invoice (owned by /es/crear-factura).

#### /sv/vad-ska-sta-pa-en-faktura

- **Key:** vad ska stå på en faktura · also: fakturakrav; krav på faktura
- **Item:** LO1 · **Intent:** country rules + generator preset · **Languages:** local (written in sv)
- **Write about:** Written in Swedish (page code, chunk 43, sv routes): Skatteverket's invoice requirements (momsregistreringsnummer, F-skatt, numbering, moms), simplified invoices, 'omvänd betalningsskyldighet'. Sources: skatteverket.se, dated.
- **Don't write about:** How to make an invoice (owned by /sv/skapa-faktura).

#### /da/krav-til-faktura

- **Key:** krav til faktura · also: hvad skal en faktura indeholde
- **Item:** LO1 · **Intent:** country rules + generator preset · **Languages:** local (written in da)
- **Write about:** Written in Danish (page code, chunk 43, da routes): the invoice requirements (CVR number, numbering, moms), simplified invoices, and the bookkeeping law's rules on digital systems (check what applies to issuing invoices; hedge). Sources: skat.dk, erhvervsstyrelsen.dk, dated.
- **Don't write about:** How to make an invoice (owned by /da/lav-faktura).
- **Already covered (link, don't repeat):** /da (“faktura-app til iphone”)

#### /nb/krav-til-faktura

- **Key:** krav til faktura · also: hva skal stå på en faktura
- **Item:** LO1 · **Intent:** country rules + generator preset · **Languages:** local (written in nb)
- **Write about:** Written in Norwegian Bokmål (page code, chunk 43, nb routes): bokføringsforskriften's requirements (organisasjonsnummer, 'MVA' after the number when registered, numbering, due date), EHF for the public sector (Invoicor doesn't send EHF: say so). Sources: skatteetaten.no, lovdata.no, dated.
- **Don't write about:** How to make an invoice (owned by /nb/lag-faktura).

#### /de/kleinbetragsrechnung

- **Key:** kleinbetragsrechnung · also: kleinbetragsrechnung vorlage; rechnung unter 250 euro
- **Item:** LO1 · **Intent:** local rules · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (chunk 43). Written in the language from the start (R4). In German, for Germany: what a small invoice up to €250 gross must show and what it may leave out (§33 UStDV: cite and date), with Austria's €400 rule as a box. A generator example.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

#### /de/handwerkerrechnung

- **Key:** handwerkerrechnung steuer absetzen · also: handwerkerleistungen rechnung; lohnkosten auf rechnung ausweisen
- **Item:** LO1 · **Intent:** local rules · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (chunk 43). Written in the language from the start (R4). In German: the client can deduct part of the labor cost (§35a EStG: check the share and the yearly cap) only when the invoice shows labor, travel and machine costs apart from materials and the client pays by bank transfer. How to lay out the lines; a sample. The same for household services.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

#### /es/factura-simplificada

- **Key:** factura simplificada · also: factura simplificada requisitos; ticket o factura
- **Item:** LO1 · **Intent:** local rules · **Languages:** local (written in es)
- **Write about:** Needs page code under the language routes (chunk 43). Written in the language from the start (R4). In Spanish, for Spain: when a simplified invoice is allowed (the €400 limit and the €3,000 sectors in Real Decreto 1619/2012: check), what it must show, when the customer can ask for a full invoice; Verifactu (check if and when it applies).
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

#### /sv/rot-och-rut-avdrag-faktura

- **Key:** rot avdrag faktura · also: rut avdrag faktura; faktura med rotavdrag
- **Item:** LO1 · **Intent:** local rules · **Languages:** local (written in sv)
- **Write about:** Needs page code under the language routes (chunk 43). Written in the language from the start (R4). In Swedish: with ROT and RUT the business invoices the customer only their share and claims the rest from Skatteverket; the invoice shows labor apart, the deduction, the customer's personal number (and property for ROT); the current shares and caps (check, they changed in 2025). Paid electronically. Cite Skatteverket and date it.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

#### /da/haandvaerkerfradrag-faktura

- **Key:** håndværkerfradrag faktura · also: servicefradrag faktura; krav til faktura håndværkerfradrag
- **Item:** LO1 · **Intent:** local rules · **Languages:** local (written in da)
- **Write about:** Needs page code under the language routes (chunk 43). Written in the language from the start (R4). In Danish: what the invoice must show so the customer can claim the deduction (labor apart, the address of the work, the CVR number, paid electronically) and which work qualifies now (it has changed several times: check skat.dk and date it).
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

### Item LO2 (20)

#### /nl/moneybird-alternatief

- **Key:** moneybird alternatief
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in nl)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Moneybird; check it still exists and its current plans.

#### /nl/e-boekhouden-alternatief

- **Key:** e-boekhouden alternatief
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in nl)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: e-Boekhouden; check it still exists and its current plans.

#### /nl/jortt-alternatief

- **Key:** jortt alternatief
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in nl)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Jortt; check it still exists and its current plans.

#### /de/lexware-office-alternative

- **Key:** lexware office alternative
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in de)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Lexware Office (formerly lexoffice); check it still exists and its current plans.

#### /de/sevdesk-alternative

- **Key:** sevdesk alternative
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in de)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: sevDesk; check it still exists and its current plans.

#### /de/fastbill-alternative

- **Key:** fastbill alternative
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in de)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: FastBill; check it still exists and its current plans.

#### /fr/alternative-facture-net

- **Key:** alternative facture.net
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in fr)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Facture.net; check it still exists and its current plans.

#### /fr/alternative-tiime

- **Key:** alternative tiime
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in fr)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Tiime; check it still exists and its current plans.

#### /fr/alternative-henrri

- **Key:** alternative henrri
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in fr)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Henrri; check it still exists and its current plans.

#### /es/alternativa-holded

- **Key:** alternativa a holded
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in es)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Holded; check it still exists and its current plans.

#### /es/alternativa-quipu

- **Key:** alternativa a quipu
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in es)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Quipu; check it still exists and its current plans.

#### /es/alternativa-billin

- **Key:** alternativa a billin
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in es)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Billin; check it still exists and its current plans.

#### /sv/fortnox-alternativ

- **Key:** fortnox alternativ
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in sv)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Fortnox; check it still exists and its current plans.

#### /sv/bokio-alternativ

- **Key:** bokio alternativ
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in sv)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Bokio; check it still exists and its current plans.

#### /sv/visma-eekonomi-alternativ

- **Key:** visma eekonomi alternativ
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in sv)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Visma eEkonomi; check it still exists and its current plans.

#### /da/billy-alternativ

- **Key:** billy alternativ
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in da)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Billy; check it still exists and its current plans.

#### /da/dinero-alternativ

- **Key:** dinero alternativ
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in da)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Dinero; check it still exists and its current plans.

#### /da/e-conomic-alternativ

- **Key:** e-conomic alternativ
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in da)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: e-conomic; check it still exists and its current plans.

#### /nb/fiken-alternativ

- **Key:** fiken alternativ
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in nb)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Fiken; check it still exists and its current plans.

#### /nb/conta-alternativ

- **Key:** conta alternativ
- **Item:** LO2 · **Intent:** compare · **Languages:** local (written in nb)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Conta; check it still exists and its current plans.

### on hold: e-invoicing (3)

#### /it/fattura-elementi-obbligatori

- **Key:** elementi obbligatori fattura · also: cosa deve contenere una fattura
- **Item:** on hold: e-invoicing · **Intent:** country rules · **Languages:** local (written in it)
- **Write about:** On hold: in Italy invoices must be electronic and go through the SdI (fatturazione elettronica; nearly all businesses, incl. the regime forfettario since 2024). A PDF from Invoicor is only a courtesy copy, so the page can't send people to make one. Build only if the product supports it, or as a purely informational page with that said in the first paragraph.
- **Notes:** blocked by e-invoicing law

#### /pt/requisitos-fatura

- **Key:** requisitos de uma fatura · also: o que deve constar numa fatura
- **Item:** on hold: e-invoicing · **Intent:** country rules · **Languages:** local (written in pt)
- **Write about:** On hold: in Portugal invoices must come from AT-certified software (with the ATCUD code and QR code), with few exceptions. A PDF from Invoicor doesn't meet that. Same rule as Italy.
- **Notes:** blocked by certified-software law

#### /pl/elementy-faktury

- **Key:** elementy faktury · also: co musi zawierać faktura
- **Item:** on hold: e-invoicing · **Intent:** country rules · **Languages:** local (written in pl)
- **Write about:** On hold: Poland's KSeF makes structured e-invoices mandatory for businesses in 2026 (check the dates and any small-business exceptions). After that a PDF isn't a valid B2B invoice. Decide when the dates are clear.
- **Notes:** blocked by e-invoicing law
