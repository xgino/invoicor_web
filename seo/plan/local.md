# Local pages (in the country's own language)

> **Generated, don't edit by hand.** Rules: [RULES.md](../RULES.md); pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**0 done · 74 planned**

## Direction

URL, key, sections, what these pages can and can't do, links and languages: [RULES.md § LO · Local pages (in the country's own language)](../RULES.md#lo--local-pages-in-the-countrys-own-language).

## Done (0): don't build these again

_None yet._

## Planned (74)

### Item LO1 (12)

#### /de/rechnung-pflichtangaben

- **Key:** pflichtangaben rechnung · also: rechnung pflichtangaben; was muss auf eine rechnung
- **Item:** LO1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** local (written in de)
- **Write about:** Written in German for German businesses (page code, chunk 43, under the de routes): the mandatory invoice details (§14 Abs. 4 UStG), small invoices up to €250 (§33 UStDV), Kleinunternehmer (§19 UStG) and the note to use, the e-invoicing obligation from 2025 and its transition rules (be honest: Invoicor makes PDF invoices; say when a PDF is still allowed for B2B, check and date). Sources: Gesetze im Internet, BMF, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /de/rechnung-erstellen): one sentence and a link. That page is 'make one', this page is 'what must be on it'.
- **Notes:** §14 UStG, Kleinunternehmer §19; replaces /guides/invoice-requirements-germany; next to /de/rechnung-erstellen, must not compete with it

#### /nl/factuureisen

- **Key:** factuureisen · also: wat moet er op een factuur; factuur eisen belastingdienst
- **Item:** LO1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** local (written in nl)
- **Write about:** Written in Dutch for Dutch businesses (page code, chunk 43, under the nl routes): the Belastingdienst invoice requirements (factuureisen), the KvK number and btw-id, the KOR (small business scheme) and what to put on the invoice, 'btw verlegd', the 5-year/7-year retention rule. Sources: belastingdienst.nl, kvk.nl, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /nl/gratis-factuur-maken).
- **Notes:** btw-nummer, KvK, KOR; replaces /guides/invoice-requirements-netherlands

#### /fr/mentions-obligatoires-facture

- **Key:** mentions obligatoires facture · also: facture mentions légales; mentions facture auto-entrepreneur
- **Item:** LO1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** local (written in fr)
- **Write about:** Written in French for French businesses (page code, chunk 43, under the fr routes): the mandatory mentions (SIRET, TVA intracommunautaire, numbering, due date), 'TVA non applicable, art. 293 B du CGI' for micro-entrepreneurs, late-payment penalties and the €40 fixed compensation, the e-invoicing reform timetable (check and date). Sources: service-public.fr, economie.gouv.fr, dated.
- **Don't write about:** How to make an invoice in the free generator (owned by /fr/creer-une-facture).
- **Notes:** SIRET, TVA non applicable art. 293 B

#### /es/requisitos-factura

- **Key:** requisitos de una factura · also: datos obligatorios factura; que debe llevar una factura
- **Item:** LO1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** local (written in es)
- **Write about:** Written in Spanish for Spain (page code, chunk 43, es routes): the mandatory data (NIF, numbering, IVA, the Reglamento de facturación), simplified invoices, and the coming Verifactu and B2B e-invoice rules (check dates; say plainly when a PDF from a non-certified tool stops being enough). Sources: agenciatributaria.gob.es, BOE, dated.
- **Don't write about:** How to make an invoice (owned by /es/crear-factura).

#### /sv/vad-ska-sta-pa-en-faktura

- **Key:** vad ska stå på en faktura · also: fakturakrav; krav på faktura
- **Item:** LO1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** local (written in sv)
- **Write about:** Written in Swedish (page code, chunk 43, sv routes): Skatteverket's invoice requirements (momsregistreringsnummer, F-skatt, numbering, moms), simplified invoices, 'omvänd betalningsskyldighet'. Sources: skatteverket.se, dated.
- **Don't write about:** How to make an invoice (owned by /sv/skapa-faktura).

#### /da/krav-til-faktura

- **Key:** krav til faktura · also: hvad skal en faktura indeholde
- **Item:** LO1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** local (written in da)
- **Write about:** Written in Danish (page code, chunk 43, da routes): the invoice requirements (CVR number, numbering, moms), simplified invoices, and the bookkeeping law's rules on digital systems (check what applies to issuing invoices; hedge). Sources: skat.dk, erhvervsstyrelsen.dk, dated.
- **Don't write about:** How to make an invoice (owned by /da/lav-faktura).
- **Already covered (link, don't repeat):** /da (“faktura-app til iphone”)

#### /nb/krav-til-faktura

- **Key:** krav til faktura · also: hva skal stå på en faktura
- **Item:** LO1 · **Score:** not scored · **Intent:** country rules + generator preset · **Languages:** local (written in nb)
- **Write about:** Written in Norwegian Bokmål (page code, chunk 43, nb routes): bokføringsforskriften's requirements (organisasjonsnummer, 'MVA' after the number when registered, numbering, due date), EHF for the public sector (Invoicor doesn't send EHF: say so). Sources: skatteetaten.no, lovdata.no, dated.
- **Don't write about:** How to make an invoice (owned by /nb/lag-faktura).

#### /de/kleinbetragsrechnung

- **Key:** kleinbetragsrechnung · also: kleinbetragsrechnung vorlage; rechnung unter 250 euro
- **Item:** LO1 · **Score:** not scored · **Intent:** local rules · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German, for Germany: what a small invoice up to €250 gross must show and what it may leave out (§33 UStDV: cite and date), with Austria's €400 rule as a box. A generator example.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

#### /de/handwerkerrechnung

- **Key:** handwerkerrechnung steuer absetzen · also: handwerkerleistungen rechnung; lohnkosten auf rechnung ausweisen
- **Item:** LO1 · **Score:** not scored · **Intent:** local rules · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German: the client can deduct part of the labor cost (§35a EStG: check the share and the yearly cap) only when the invoice shows labor, travel and machine costs apart from materials and the client pays by bank transfer. How to lay out the lines; a sample. The same for household services.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

#### /es/factura-simplificada

- **Key:** factura simplificada · also: factura simplificada requisitos; ticket o factura
- **Item:** LO1 · **Score:** not scored · **Intent:** local rules · **Languages:** local (written in es)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Spanish, for Spain: when a simplified invoice is allowed (the €400 limit and the €3,000 sectors in Real Decreto 1619/2012: check), what it must show, when the customer can ask for a full invoice; Verifactu (check if and when it applies).
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

#### /sv/rot-och-rut-avdrag-faktura

- **Key:** rot avdrag faktura · also: rut avdrag faktura; faktura med rotavdrag
- **Item:** LO1 · **Score:** not scored · **Intent:** local rules · **Languages:** local (written in sv)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Swedish: with ROT and RUT the business invoices the customer only their share and claims the rest from Skatteverket; the invoice shows labor apart, the deduction, the customer's personal number (and property for ROT); the current shares and caps (check, they changed in 2025). Paid electronically. Cite Skatteverket and date it.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

#### /da/haandvaerkerfradrag-faktura

- **Key:** håndværkerfradrag faktura · also: servicefradrag faktura; krav til faktura håndværkerfradrag
- **Item:** LO1 · **Score:** not scored · **Intent:** local rules · **Languages:** local (written in da)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Danish: what the invoice must show so the customer can claim the deduction (labor apart, the address of the work, the CVR number, paid electronically) and which work qualifies now (it has changed several times: check skat.dk and date it).
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice).

### Item LO2 (20)

#### /nl/moneybird-alternatief

- **Key:** moneybird alternatief
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in nl)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Moneybird; check it still exists and its current plans.

#### /nl/e-boekhouden-alternatief

- **Key:** e-boekhouden alternatief
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in nl)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: e-Boekhouden; check it still exists and its current plans.

#### /nl/jortt-alternatief

- **Key:** jortt alternatief
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in nl)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Jortt; check it still exists and its current plans.

#### /de/lexware-office-alternative

- **Key:** lexware office alternative
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in de)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Lexware Office (formerly lexoffice); check it still exists and its current plans.

#### /de/sevdesk-alternative

- **Key:** sevdesk alternative
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in de)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: sevDesk; check it still exists and its current plans.

#### /de/fastbill-alternative

- **Key:** fastbill alternative
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in de)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: FastBill; check it still exists and its current plans.

#### /fr/alternative-facture-net

- **Key:** alternative facture.net
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in fr)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Facture.net; check it still exists and its current plans.

#### /fr/alternative-tiime

- **Key:** alternative tiime
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in fr)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Tiime; check it still exists and its current plans.

#### /fr/alternative-henrri

- **Key:** alternative henrri
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in fr)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Henrri; check it still exists and its current plans.

#### /es/alternativa-holded

- **Key:** alternativa a holded
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in es)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Holded; check it still exists and its current plans.

#### /es/alternativa-quipu

- **Key:** alternativa a quipu
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in es)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Quipu; check it still exists and its current plans.

#### /es/alternativa-billin

- **Key:** alternativa a billin
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in es)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Billin; check it still exists and its current plans.

#### /sv/fortnox-alternativ

- **Key:** fortnox alternativ
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in sv)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Fortnox; check it still exists and its current plans.

#### /sv/bokio-alternativ

- **Key:** bokio alternativ
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in sv)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Bokio; check it still exists and its current plans.

#### /sv/visma-eekonomi-alternativ

- **Key:** visma eekonomi alternativ
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in sv)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Visma eEkonomi; check it still exists and its current plans.

#### /da/billy-alternativ

- **Key:** billy alternativ
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in da)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Billy; check it still exists and its current plans.

#### /da/dinero-alternativ

- **Key:** dinero alternativ
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in da)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Dinero; check it still exists and its current plans.

#### /da/e-conomic-alternativ

- **Key:** e-conomic alternativ
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in da)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: e-conomic; check it still exists and its current plans.

#### /nb/fiken-alternativ

- **Key:** fiken alternativ
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in nb)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Fiken; check it still exists and its current plans.

#### /nb/conta-alternativ

- **Key:** conta alternativ
- **Item:** LO2 · **Score:** not scored · **Intent:** compare · **Languages:** local (written in nb)
- **Write about:** Written in the language (HL9): a fair comparison with a local rival, their prices from their own site (source and date), and honestly where they're better (most local tools do e-invoicing, bookkeeping and bank links that Invoicor doesn't). Rival: Conta; check it still exists and its current plans.

### Item LO3 (8)

#### /de/mahnung-schreiben

- **Key:** mahnung schreiben · also: zahlungserinnerung vorlage; mahngebühren wie hoch
- **Item:** LO3 · **Score:** not scored · **Intent:** reminder rules · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German, for Germany: Zahlungserinnerung, 1. and 2. Mahnung, when the client is in default (Verzug: 30 days after the invoice for consumers only if the invoice says so, §286 BGB: check), what fees you may charge (actual costs only, the €40 flat fee for businesses, §288 Abs. 5 BGB: cite and date), a sample text per step. Austria and Switzerland in a box (hedged). Sources from the official site, each dated.
- **Don't write about:** How to write the invoice itself (that language's generator page); statutory late-payment interest (that language's version of /tools/late-payment-interest-calculator: link it); debt collection agencies beyond one hedged sentence.

#### /nl/betalingsherinnering

- **Key:** betalingsherinnering sturen · also: betalingsherinnering voorbeeld; veertiendagenbrief
- **Item:** LO3 · **Score:** not scored · **Intent:** reminder rules · **Languages:** local (written in nl)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Dutch, for the Netherlands: the reminder, then for consumers the mandatory 14-day letter (veertiendagenbrief) before collection costs may be charged, what it must say, sample texts; link the incasso calculator. Sources: rijksoverheid.nl, the WIK (cite and date). Sources from the official site, each dated.
- **Don't write about:** How to write the invoice itself (that language's generator page); statutory late-payment interest (that language's version of /tools/late-payment-interest-calculator: link it); debt collection agencies beyond one hedged sentence.

#### /nl/incassokosten-berekenen

- **Key:** incassokosten berekenen · also: wik staffel; buitengerechtelijke incassokosten
- **Item:** LO3 · **Score:** not scored · **Intent:** tool · **Languages:** local (written in nl)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). Needs tool code. In Dutch: the WIK scale (15% of the first €2,500, minimum €40, then the lower steps: check the current scale in the Besluit vergoeding voor buitengerechtelijke incassokosten), B2B vs B2C, when you may charge it (after the 14-day letter for consumers). The answer goes on a reminder invoice in the generator. Sources from the official site, each dated.
- **Don't write about:** How to write the invoice itself (that language's generator page); statutory late-payment interest (that language's version of /tools/late-payment-interest-calculator: link it); debt collection agencies beyond one hedged sentence.

#### /fr/relance-facture-impayee

- **Key:** relance facture impayée · also: lettre de relance facture; mise en demeure facture impayée
- **Item:** LO3 · **Score:** not scored · **Intent:** reminder rules · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French, for France: the friendly reminder, the formal notice (mise en demeure), late-payment penalties and the €40 fixed compensation for businesses (Code de commerce L441-10: check), the payment deadlines (60 days or 45 days end of month), sample texts. Belgium and Switzerland in a box (hedged). Sources from the official site, each dated.
- **Don't write about:** How to write the invoice itself (that language's generator page); statutory late-payment interest (that language's version of /tools/late-payment-interest-calculator: link it); debt collection agencies beyond one hedged sentence.

#### /es/reclamar-factura-impagada

- **Key:** reclamar factura impagada · also: carta reclamación factura; burofax factura impagada
- **Item:** LO3 · **Score:** not scored · **Intent:** reminder rules · **Languages:** local (written in es)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Spanish, for Spain: the reminder, the burofax, late interest and the €40 compensation for businesses (Ley 3/2004: check), the monitorio procedure in one hedged paragraph, sample texts. Say the Verifactu date (from the LO1 page) where it touches the invoice. Sources from the official site, each dated.
- **Don't write about:** How to write the invoice itself (that language's generator page); statutory late-payment interest (that language's version of /tools/late-payment-interest-calculator: link it); debt collection agencies beyond one hedged sentence.

#### /sv/betalningspaminnelse

- **Key:** betalningspåminnelse · also: påminnelseavgift; påminnelse faktura mall
- **Item:** LO3 · **Score:** not scored · **Intent:** reminder rules · **Languages:** local (written in sv)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Swedish: the reminder, the reminder fee (60 kr, only if agreed before, Lag om ersättning för inkassokostnader: check the amount), dröjsmålsränta in one sentence with a link to the interest calculator, sample texts. Sources from the official site, each dated.
- **Don't write about:** How to write the invoice itself (that language's generator page); statutory late-payment interest (that language's version of /tools/late-payment-interest-calculator: link it); debt collection agencies beyond one hedged sentence.

#### /da/rykker-faktura

- **Key:** rykker faktura · also: rykkergebyr; rykkerskrivelse skabelon
- **Item:** LO3 · **Score:** not scored · **Intent:** reminder rules · **Languages:** local (written in da)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Danish: up to three reminders at least 10 days apart and the maximum fee per reminder (100 kr, renteloven §9b: check), the compensation for businesses, sample texts. Sources from the official site, each dated.
- **Don't write about:** How to write the invoice itself (that language's generator page); statutory late-payment interest (that language's version of /tools/late-payment-interest-calculator: link it); debt collection agencies beyond one hedged sentence.

#### /nb/purring-faktura

- **Key:** purring faktura · also: purregebyr; betalingspåminnelse mal
- **Item:** LO3 · **Score:** not scored · **Intent:** reminder rules · **Languages:** local (written in nb)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Norwegian Bokmål: the reminder (betalingspåminnelse), the purregebyr tied to the inkassosats (check the current amount in inkassoforskriften), the 14 days before a debt goes to collection (inkassovarsel), sample texts. Sources from the official site, each dated.
- **Don't write about:** How to write the invoice itself (that language's generator page); statutory late-payment interest (that language's version of /tools/late-payment-interest-calculator: link it); debt collection agencies beyond one hedged sentence.

### Item LO4 (5)

#### /de/e-rechnung-pflicht

- **Key:** e-rechnung pflicht · also: e-rechnung kleinunternehmer; e-rechnung ab 2027
- **Item:** LO4 · **Score:** not scored · **Intent:** e-invoicing rules · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German, for Germany: receiving e-invoices since 2025, sending from 2027 (turnover over €800,000) and 2028 for everyone (check the dates in the BMF letter), who is exempt (Kleinunternehmer, invoices up to €250, B2C), what a PDF is until then (an 'other invoice', fine with the client's consent: check). Say plainly that Invoicor makes PDFs, not XRechnung or ZUGFeRD. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to make an invoice (the generator page). No claim that Invoicor sends e-invoices: it makes PDFs.

#### /fr/facturation-electronique-obligatoire

- **Key:** facturation électronique obligatoire · also: facture électronique 2026; facture électronique micro-entrepreneur
- **Item:** LO4 · **Score:** not scored · **Intent:** e-invoicing rules · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French, for France: everyone must receive e-invoices from September 2026, large and mid-size companies must send them then, SMEs and micro-entrepreneurs from September 2027 (check on impots.gouv.fr), the approved platforms (PA), B2C and export (e-reporting) in one paragraph. Say plainly that Invoicor makes PDFs and isn't an approved platform. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to make an invoice (the generator page). No claim that Invoicor sends e-invoices: it makes PDFs.

#### /es/verifactu-autonomos

- **Key:** verifactu autónomos · also: factura electrónica obligatoria autónomos; verifactu fechas
- **Item:** LO4 · **Score:** not scored · **Intent:** e-invoicing rules · **Languages:** local (written in es)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Spanish, for Spain: Verifactu (certified billing software) and its dates (moved to 2027 for companies and autónomos: check the latest Real Decreto), the separate B2B e-invoice rule from the Ley Crea y Crece (check its status), who is exempt (SII, Basque and Navarre regimes). Say plainly that Invoicor isn't Verifactu software, so its PDFs stop being enough for Spanish sellers on that date. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to make an invoice (the generator page). No claim that Invoicor sends e-invoices: it makes PDFs.

#### /nl/e-facturatie-verplicht-belgie

- **Key:** e-facturatie verplicht belgië · also: peppol verplicht 2026; e-factuur belgië
- **Item:** LO4 · **Score:** not scored · **Intent:** e-invoicing rules · **Languages:** local (written in nl)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Dutch, for Belgium (Flanders): Peppol e-invoices required for B2B since January 2026, e-reporting from 2028 (check on fin.belgium.be), what is exempt (B2C, some exempt sellers), the fines. Say plainly that Invoicor doesn't send Peppol invoices, so it suits Belgian B2C invoices only. Note for the Netherlands: no B2B rule yet (EU ViDA from 2030: check). Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to make an invoice (the generator page). No claim that Invoicor sends e-invoices: it makes PDFs.

#### /fr/facturation-electronique-belgique

- **Key:** facturation électronique belgique · also: peppol obligatoire belgique; facture électronique 2026 belgique
- **Item:** LO4 · **Score:** not scored · **Intent:** e-invoicing rules · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French, for Belgium (Wallonia, Brussels): the same rules as the Dutch Belgium page (Peppol B2B since January 2026, e-reporting 2028, exemptions, fines: check on fin.belgium.be), written for French-speaking Belgians. Say plainly that Invoicor doesn't send Peppol invoices, so it suits B2C only. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to make an invoice (the generator page). No claim that Invoicor sends e-invoices: it makes PDFs.

### Item LO5 (6)

#### /de/steuernummer-auf-rechnung

- **Key:** steuernummer auf rechnung · also: steuernummer oder ust-idnr rechnung; ust-idnr auf rechnung pflicht
- **Item:** LO5 · **Score:** not scored · **Intent:** number rules · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German: the Steuernummer or the USt-IdNr. is required (§14 Abs. 4 Nr. 2 UStG), when the USt-IdNr. is required (EU clients, reverse charge), why many use the USt-IdNr. (privacy), how to get one (BZSt, one sentence), Austria's UID box. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to register a business beyond one sentence and the official link.

#### /nl/kvk-nummer-op-factuur

- **Key:** kvk nummer op factuur · also: btw-id op factuur; btw nummer of btw-id factuur
- **Item:** LO5 · **Score:** not scored · **Intent:** number rules · **Languages:** local (written in nl)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Dutch: the KvK number and the btw-id (since 2020 instead of the old btw number with the BSN), which one goes where, the KOR case, when a client's btw-id is needed (verlegd, EU). Sources: belastingdienst.nl, kvk.nl, dated. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to register a business beyond one sentence and the official link.

#### /fr/facture-en-attente-de-siret

- **Key:** facture en attente de siret · also: facture sans siret; siret en cours d'attribution
- **Item:** LO5 · **Score:** not scored · **Intent:** number rules · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French: can a new micro-entrepreneur invoice before the SIRET arrives (the mention to use: check on autoentrepreneur.urssaf.fr), the SIREN vs SIRET, the RCS/RM mention for companies and artisans, the VAT number when it applies. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to register a business beyond one sentence and the official link.

#### /sv/f-skatt-faktura

- **Key:** f-skatt på faktura · also: godkänd för f-skatt faktura; momsregistreringsnummer faktura
- **Item:** LO5 · **Score:** not scored · **Intent:** number rules · **Languages:** local (written in sv)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Swedish: what F-skatt means for the client (no tax deduction from the payment), whether 'Godkänd för F-skatt' must be on the invoice (not required by law since 2009 but expected: check on skatteverket.se), the momsregistreringsnummer (SE…01), organisationsnummer vs personnummer for sole traders. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to register a business beyond one sentence and the official link.

#### /nb/foretaksregisteret-pa-faktura

- **Key:** foretaksregisteret på faktura · also: organisasjonsnummer på faktura; mva på faktura
- **Item:** LO5 · **Score:** not scored · **Intent:** number rules · **Languages:** local (written in nb)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Norwegian Bokmål: 'Foretaksregisteret' after the organisasjonsnummer for registered companies (foretaksregisterloven §10-2: check), 'MVA' after it when VAT-registered, what an enkeltpersonforetak not in the register writes. Sources: brreg.no, lovdata.no, dated. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to register a business beyond one sentence and the official link.

#### /da/cvr-nummer-faktura

- **Key:** cvr nummer på faktura · also: faktura uden cvr nummer; se nummer faktura
- **Item:** LO5 · **Score:** not scored · **Intent:** number rules · **Languages:** local (written in da)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Danish: the CVR number (or SE number) on the invoice, what applies without a CVR (B-income: hedged, link skat.dk), when the client's CVR is needed (reverse charge, EU). Sources: skat.dk, virk.dk, dated. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page: link it); how to register a business beyond one sentence and the official link.

### Item LO6 (8)

#### /de/rechnung-oesterreich

- **Key:** rechnungsmerkmale österreich · also: rechnung österreich pflichtangaben; uid nummer rechnung österreich
- **Item:** LO6 · **Score:** not scored · **Intent:** country rules · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German, for Austria: the required details (§11 UStG: the UID of the client above €10,000: check), Kleinbetragsrechnung up to €400, Kleinunternehmer (€55,000 since 2025: check), 20% / 13% / 10%. EUR. Sources: bmf.gv.at, usp.gv.at, dated. Link /invoice-generator-austria when it exists (hreflang). Sources from the official site, each dated.
- **Don't write about:** The rules of the language's main country (its LO1 page: link it); how to make an invoice (the generator page).

#### /de/honorarnote

- **Key:** honorarnote · also: honorarnote vorlage; honorarnote ohne ust
- **Item:** LO6 · **Score:** not scored · **Intent:** template · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German, for Austria: the Honorarnote (the Austrian word for a freelancer's invoice: Neue Selbständige, Werkvertrag), what it must show, with or without USt (Kleinunternehmer), SVS in one hedged sentence, a sample in the generator. Sources from the official site, each dated.
- **Don't write about:** The rules of the language's main country (its LO1 page: link it); how to make an invoice (the generator page).

#### /de/rechnung-schweiz

- **Key:** mwst rechnung schweiz · also: rechnung schweiz anforderungen; rechnung ohne mwst schweiz
- **Item:** LO6 · **Score:** not scored · **Intent:** country rules · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German, for Switzerland: what an invoice must show (Art. 26 MWSTG: check), the UID with MWST, the CHF 100,000 registration threshold, 8.1% / 2.6% / 3.8% (check), the QR-bill (link that tool). CHF. Sources: estv.admin.ch, dated. Link /invoice-generator-switzerland (hreflang). Sources from the official site, each dated.
- **Don't write about:** The rules of the language's main country (its LO1 page: link it); how to make an invoice (the generator page).

#### /fr/facture-suisse

- **Key:** facture suisse mentions obligatoires · also: facture tva suisse; facture sans tva suisse
- **Item:** LO6 · **Score:** not scored · **Intent:** country rules · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French, for French-speaking Switzerland: the same rules as the German Swiss page (Art. 26 LTVA, the CHF 100,000 threshold, the rates, the QR-bill: check), French terms (TVA, IDE). CHF. Link /invoice-generator-switzerland (hreflang). Sources from the official site, each dated.
- **Don't write about:** The rules of the language's main country (its LO1 page: link it); how to make an invoice (the generator page).

#### /it/fattura-svizzera

- **Key:** fattura svizzera requisiti · also: fattura iva svizzera; fattura ticino
- **Item:** LO6 · **Score:** not scored · **Intent:** country rules · **Languages:** local (written in it)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Italian, for Ticino and Italian-speaking Switzerland: the Swiss rules (Art. 26 LIVA, the CHF 100,000 threshold, the rates, the QR-bill: check). Say plainly it is for Switzerland only: invoices in Italy need the SdI, which Invoicor doesn't send. CHF. Link /invoice-generator-switzerland (hreflang). Sources from the official site, each dated.
- **Don't write about:** The rules of the language's main country (its LO1 page: link it); how to make an invoice (the generator page).

#### /fr/facture-quebec-tps-tvq

- **Key:** facture tps tvq · also: facture québec exigences; numéro tps tvq facture
- **Item:** LO6 · **Score:** not scored · **Intent:** country rules · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French, for Quebec: GST 5% and QST 9.975%, both registration numbers and when they're required (check revenuquebec.ca), the small supplier threshold ($30,000), invoices in French (Charter of the French language: check the 2025 rules). CAD. Link /invoice-generator-quebec (hreflang). Sources from the official site, each dated.
- **Don't write about:** The rules of the language's main country (its LO1 page: link it); how to make an invoice (the generator page).

#### /fr/facture-travailleur-autonome

- **Key:** facture travailleur autonome · also: modèle facture travailleur autonome; facture travailleur autonome sans taxes
- **Item:** LO6 · **Score:** not scored · **Intent:** template · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French, for Quebec: the travailleur autonome's invoice (the Quebec word, not auto-entrepreneur), with or without GST/QST (small supplier), what to show, a sample in CAD in the generator. Sources from the official site, each dated.
- **Don't write about:** The rules of the language's main country (its LO1 page: link it); how to make an invoice (the generator page).

#### /fr/facture-luxembourg

- **Key:** facture luxembourg mentions obligatoires · also: facture tva luxembourg
- **Item:** LO6 · **Score:** not scored · **Intent:** country rules · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French, for Luxembourg: the same rules as /invoice-generator-luxembourg (required fields per the AED, 17% and the reduced rates, the franchise for small businesses: check), French terms. EUR. Link the English page (hreflang). Sources from the official site, each dated.
- **Don't write about:** The rules of the language's main country (its LO1 page: link it); how to make an invoice (the generator page).

### Item LO7 (7)

#### /de/leistungsdatum-rechnung

- **Key:** leistungsdatum rechnung · also: leistungszeitraum rechnung; leistungsdatum entspricht rechnungsdatum
- **Item:** LO7 · **Score:** not scored · **Intent:** local rule · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German: the date of supply is required (§14 Abs. 4 Nr. 6 UStG), the wording 'Leistungsdatum entspricht Rechnungsdatum', service periods for monthly work, what the Finanzamt does when it's missing (no input tax for the client: hedge). Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice); credit notes (that language's version of /free-credit-note-generator).

#### /de/aufbewahrungspflicht-hinweis-rechnung

- **Key:** aufbewahrungspflicht hinweis rechnung · also: hinweis aufbewahrungspflicht privatkunden; rechnung privatperson handwerker
- **Item:** LO7 · **Score:** not scored · **Intent:** local rule · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German: for work on a property for private clients the invoice must say the client keeps it for 2 years (§14 Abs. 4 Nr. 9 UStG: check), the invoice within 6 months, the sample wording; link the Handwerkerrechnung page for the tax deduction. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice); credit notes (that language's version of /free-credit-note-generator).

#### /de/rechnung-korrigieren

- **Key:** rechnung korrigieren · also: rechnungskorrektur; rechnung stornieren
- **Item:** LO7 · **Score:** not scored · **Intent:** local rule · **Languages:** local (written in de)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In German: correcting a wrong detail (Rechnungsberichtigung, §31 Abs. 5 UStDV) vs cancelling and reissuing (Storno), and why 'Gutschrift' in German tax law means self-billing, not a credit note (check). Link the credit note generator for the refund case. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice); credit notes (that language's version of /free-credit-note-generator).

#### /fr/mention-assurance-decennale-facture

- **Key:** mention assurance décennale facture · also: mention obligatoire décennale devis facture; assurance professionnelle facture artisan
- **Item:** LO7 · **Score:** not scored · **Intent:** local rule · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French, for building trades: the insurer, the policy and the area covered must be on quotes and invoices (loi Pinel 2014, article 22: check), who needs a décennale, the sample wording. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice); credit notes (that language's version of /free-credit-note-generator).

#### /fr/delai-de-paiement-legal

- **Key:** délai de paiement légal facture · also: délai de paiement 30 jours; délai de paiement 45 jours fin de mois
- **Item:** LO7 · **Score:** not scored · **Intent:** local rule · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In French: 30 days by default, the agreed maximum of 60 days or 45 days end of month (L441-10: check), the exceptions (transport, perishable food), what goes on the invoice (the date and the penalties). Link the due-date calculator. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice); credit notes (that language's version of /free-credit-note-generator).

#### /es/factura-con-retencion-irpf

- **Key:** factura con retención irpf · also: retención irpf autónomos 15 o 7; cuándo aplicar retención en factura
- **Item:** LO7 · **Score:** not scored · **Intent:** local rule · **Languages:** local (written in es)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Spanish, for Spain: who applies the IRPF withholding (professionals billing businesses), 15% and 7% for the first three years (check), how it shows on the invoice (subtracted from the total), a worked example. Say the Verifactu date. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice); credit notes (that language's version of /free-credit-note-generator).

#### /es/recargo-de-equivalencia-factura

- **Key:** recargo de equivalencia factura · also: recargo de equivalencia porcentajes
- **Item:** LO7 · **Score:** not scored · **Intent:** local rule · **Languages:** local (written in es)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). In Spanish: when a supplier must add the recargo de equivalencia (selling to retailers in the regime), the rates per VAT rate (5.2% / 1.4% / 0.5%: check), how it shows on the invoice, a worked example. Say the Verifactu date. Sources from the official site, each dated.
- **Don't write about:** The full list of invoice requirements (that language's country page); the small-business scheme (that language's version of /templates/no-vat-invoice); credit notes (that language's version of /free-credit-note-generator).

### Item LO8 (5)

#### /sv/ocr-nummer-generator

- **Key:** ocr nummer generator · also: skapa ocr nummer; ocr referens faktura
- **Item:** LO8 · **Score:** not scored · **Intent:** tool · **Languages:** local (written in sv)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). Needs tool code. In Swedish: makes an OCR reference with the Luhn check digit (and the optional length digit), explains that the payee needs an OCR agreement with Bankgirot or Plusgirot for the bank to check it (check), and puts the number on an invoice in the generator. Sources from the official site, each dated.
- **Don't write about:** Invoice numbers (that language's version of /tools/invoice-number-generator); the SEPA or Swiss QR code (their tool pages: link them).

#### /nb/kid-nummer-generator

- **Key:** kid nummer generator · also: lage kid nummer; kid nummer faktura
- **Item:** LO8 · **Score:** not scored · **Intent:** tool · **Languages:** local (written in nb)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). Needs tool code. In Norwegian Bokmål: makes a KID with the MOD10 or MOD11 check digit, explains that the payee needs a KID agreement with the bank (check), and puts the number on an invoice. Sources from the official site, each dated.
- **Don't write about:** Invoice numbers (that language's version of /tools/invoice-number-generator); the SEPA or Swiss QR code (their tool pages: link them).

#### /da/fik-nummer

- **Key:** fik nummer · also: fi kort +71; betalingsid faktura
- **Item:** LO8 · **Score:** not scored · **Intent:** tool · **Languages:** local (written in da)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). Needs tool code. In Danish: the FI card code (+71, +73, +75) and the payment ID with its check digit, that the payee needs a creditor number from the bank (check), and puts the line on an invoice. Sources from the official site, each dated.
- **Don't write about:** Invoice numbers (that language's version of /tools/invoice-number-generator); the SEPA or Swiss QR code (their tool pages: link them).

#### /nl/gestructureerde-mededeling-generator

- **Key:** gestructureerde mededeling generator · also: gestructureerde mededeling maken; ogm nummer
- **Item:** LO8 · **Score:** not scored · **Intent:** tool · **Languages:** local (written in nl)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). Needs tool code. In Dutch, for Belgium: makes a structured communication (+++123/4567/89002+++, the mod 97 check: check), no bank agreement needed, and puts it on an invoice. Note that Belgian B2B invoices need Peppol since 2026 (link the e-invoicing page). Sources from the official site, each dated.
- **Don't write about:** Invoice numbers (that language's version of /tools/invoice-number-generator); the SEPA or Swiss QR code (their tool pages: link them).

#### /fr/communication-structuree-generateur

- **Key:** communication structurée générateur · also: créer communication structurée; numéro de communication structurée
- **Item:** LO8 · **Score:** not scored · **Intent:** tool · **Languages:** local (written in fr)
- **Write about:** Needs page code under the language routes (task S3). Written in the language from the start (R4). Needs tool code. In French, for Belgium: the same tool as the Dutch page (+++…+++, mod 97), and the same Peppol note for B2B invoices. Sources from the official site, each dated.
- **Don't write about:** Invoice numbers (that language's version of /tools/invoice-number-generator); the SEPA or Swiss QR code (their tool pages: link them).

### on hold: e-invoicing (3)

#### /it/fattura-elementi-obbligatori

- **Key:** elementi obbligatori fattura · also: cosa deve contenere una fattura
- **Item:** on hold: e-invoicing · **Score:** not scored · **Intent:** country rules · **Languages:** local (written in it)
- **Write about:** On hold: in Italy invoices must be electronic and go through the SdI (fatturazione elettronica; nearly all businesses, incl. the regime forfettario since 2024). A PDF from Invoicor is only a courtesy copy, so the page can't send people to make one. Build only if the product supports it, or as a purely informational page with that said in the first paragraph.
- **Notes:** blocked by e-invoicing law

#### /pt/requisitos-fatura

- **Key:** requisitos de uma fatura · also: o que deve constar numa fatura
- **Item:** on hold: e-invoicing · **Score:** not scored · **Intent:** country rules · **Languages:** local (written in pt)
- **Write about:** On hold: in Portugal invoices must come from AT-certified software (with the ATCUD code and QR code), with few exceptions. A PDF from Invoicor doesn't meet that. Same rule as Italy.
- **Notes:** blocked by certified-software law

#### /pl/elementy-faktury

- **Key:** elementy faktury · also: co musi zawierać faktura
- **Item:** on hold: e-invoicing · **Score:** not scored · **Intent:** country rules · **Languages:** local (written in pl)
- **Write about:** On hold: Poland's KSeF makes structured e-invoices mandatory for businesses in 2026 (check the dates and any small-business exceptions). After that a PDF isn't a valid B2B invoice. Decide when the dates are clear.
- **Notes:** blocked by e-invoicing law
