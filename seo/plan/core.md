# Core pages, hubs, trust and legal

> **Generated, don't edit by hand.** Rules: [RULES.md](../RULES.md); pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [plan](../PLAN.md).

**9 done · 10 planned**

## Direction

URL, key, sections, what these pages can and can't do, links and languages: [RULES.md § P · Core pages, hubs, trust and legal](../RULES.md#p--core-pages-hubs-trust-and-legal).

## Done (9): don't build these again

`/` invoice app iphone · `/templates` invoice templates · `/industries` invoicing software by industry · `/compare` invoice app alternatives · `/help` invoicor help · `/affiliate` invoicor affiliate program · `/terms` invoicor terms of service · `/privacy` invoicor privacy policy · `/android` invoicor for android: coming soon

## Planned (10)

### on hold: file downloads (53) (4)

#### /templates/invoice-template-word

- **Key:** invoice template word
- **Item:** on hold: file downloads (53) · **Intent:** download · **Languages:** en-only
- **Write about:** On hold: we don't offer a Word download (S1-n). Only build this when there's a real .docx file to download (chunk 53).
- **Notes:** Big-volume quick wins

#### /templates/invoice-template-excel

- **Key:** invoice template excel
- **Item:** on hold: file downloads (53) · **Intent:** download · **Languages:** en-only
- **Write about:** On hold: we don't offer an Excel download (S1-n). Only with a real .xlsx file (chunk 53).
- **Notes:** Big-volume quick wins

#### /templates/invoice-template-google-docs

- **Key:** invoice template google docs
- **Item:** on hold: file downloads (53) · **Intent:** download · **Languages:** en-only
- **Write about:** On hold: needs a real Google Docs copy link (chunk 53).
- **Notes:** Big-volume quick wins

#### /templates/invoice-template-pdf

- **Key:** invoice template pdf
- **Item:** on hold: file downloads (53) · **Intent:** download · **Languages:** en-only
- **Write about:** On hold: the generator already makes PDFs; check for overlap before building (chunk 53).
- **Don't write about:** The free generator (/free-invoice-generator).
- **Notes:** Big-volume quick wins

### Item P1 (2)

#### /about

- **Key:** about invoicor
- **Item:** P1 · **Intent:** brand / trust · **Languages:** yes
- **Write about:** Who makes Invoicor and why, where the data lives (servers in Germany), how to reach us; facts only, no invented team size or numbers.
- **Notes:** E-E-A-T

#### /contact

- **Key:** contact invoicor
- **Item:** P1 · **Intent:** brand / trust · **Languages:** yes
- **Write about:** How to reach the team: email and in-app feedback, read by the team, replies can take a few days (BRAND.md §10: no live chat, no phone, no response-time promise).
- **Notes:** E-E-A-T

### Item P2 (4)

#### /features

- **Key:** invoicor features · also: what invoicor can do; invoice app features
- **Item:** P2 · **Intent:** product · **Languages:** yes
- **Write about:** Needs page code. Everything the app does, straight from the BRAND.md §10 'does' column (templates, 11 invoice languages, 38 currencies, payment link field, saved clients and products, duplicate, statuses, dashboard, business profiles, data in Germany), each with a screenshot, and a short honest 'what it doesn't do' list from the 'does not' column (no payments, no recurring invoices, no estimates, no team logins). Re-check §10 before publishing.
- **Don't write about:** Prices (the home page's pricing section, /#pricing: link it); per-trade pitches (the industry pages).

#### /security

- **Key:** invoicor data security · also: where is my invoice data stored; gdpr invoice app
- **Item:** P2 · **Intent:** trust · **Languages:** yes
- **Write about:** Needs page code. Where the data lives (servers in Germany: BRAND.md), that Invoicor never handles payments (you paste your own payment link), how to export or delete your data and account (check the app and the privacy policy), who can see it. Only what's true today; no certificates or audits unless we have them.
- **Don't write about:** The privacy policy text (/privacy: link it, don't repeat it).

#### /countries

- **Key:** invoice requirements by country · also: invoice rules by country
- **Item:** P2 · **Intent:** hub · **Languages:** en-only
- **Write about:** Needs task S3 (the country page type) and the first country pages. The hub of the country pages (CT): grouped by region, each with the currency and the one rule that matters most, plus the reverse-charge and cross-border pages. Links to each language's local country page where one exists.
- **Don't write about:** The rules themselves (each country page owns its own).

#### /de/impressum

- **Key:** impressum
- **Item:** P2 · **Intent:** legal · **Languages:** local (written in de)
- **Write about:** Needs your details first (roadmap H7): the legal notice German law requires for business sites aimed at Germany (§5 DDG: name and address of the operator, email, register and VAT ID if any: check). Linked from the footer of every page; noindex is fine.
