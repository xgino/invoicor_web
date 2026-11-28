# Editing the SEO pages

The template, industry and compare pages are generated from three JSON files. You never touch
page code to add or change one of these pages.

| File | URL | Hub page |
|---|---|---|
| `content/templates.json` | `/templates/{slug}` | `/templates` |
| `content/industries.json` | `/industries/{slug}` | `/industries` |
| `content/comparisons.json` | `/compare/{slug}` | `/compare` |

Each file is a list of entries; one entry = one page.

## Add a page

1. Check [seo/PLAN.md](seo/PLAN.md) (the brief for planned pages) and [seo/PAGES.md](seo/PAGES.md) (what
   exists) first, and run `npm run pages -- --check "<key>"`: if another URL already targets the same
   search, improve that page instead (one search intent = one URL).
2. Copy an existing entry in the right file and paste it at the end of the list.
3. Change every field. At minimum:
   - `slug`: the URL part, lowercase with dashes (`window-cleaning`). Never change it once live.
   - `title`: the browser and Google title, 60 characters max, ending in `| Invoicor`.
   - `meta_description`: the Google snippet, 155 characters max, with a benefit and a call to action.
   - `h1`: the visible headline (different from the title is fine).
   - `faqs`: 4 to 6 questions that are specific to this page.
4. Check related links. `related` (templates, industries) and `related_comparisons` (compare) may
   only point to slugs that exist in the same file.
5. Update the date for that collection in `CONTENT_UPDATED_AT` in `lib/content.ts`, so the sitemap
   tells search engines the page changed.
6. Run the checks:

   ```bash
   npm run content:check   # SEO rules (fast)
   npm run dev             # look at the page at http://localhost:3000/templates/{slug}
   npm run check           # everything, before committing
   ```

The page, its sitemap entry, canonical URL, breadcrumbs, FAQ markup, `llms.txt` line and footer
or hub links are all generated from the entry.

## Edit a page

Change the text in the JSON, then do steps 5 and 6 above. Don't change the `slug` of a live page:
it would break the URL and lose its ranking. If a URL really must change, add a 301 redirect in
`deploy/nginx/invoicor.com.conf`.

## Remove a page

Don't delete pages that get search traffic. Improve them, or redirect them in nginx to the closest
page. Remove the entry only after the redirect is in place, and remove any `related` links to it.

## Only claim what the app does

Every sentence that says what Invoicor does must match the fact sheet in [BRAND.md](BRAND.md)
section 10. The unit tests block the claims found false before (Apple Pay checkout, automatic
recurring invoices, per-line tax flags, "unlimited invoices", "135 currencies" and similar) in
the fields that speak for the app. If a test fails after your edit, fix the sentence, not the test.

## What the checks enforce

**`npm run build` fails** when a required field is missing or has the wrong type, or a slug is
duplicated or not lowercase-with-dashes (`lib/content.ts`).

**`npm run test:unit` fails** when a page repeats a claim the app can't back up (see above).

**`npm run test:site` fails** (after a build) when a URL from `tests/urls.txt` is missing. Never remove
a live URL from that list without a 301 redirect in `deploy/nginx/invoicor.com.conf`.

**`npm run content:check` fails** (`scripts/content-check.mjs`) when:
- two pages share a title, meta description or H1
- a related link points to a page that doesn't exist
- a page has fewer than 500 words
- two pages of the same type are more than 80% alike (near-duplicate, "doorway" pages)

It **warns** when a title is over 60 characters or a description over 155 (Google cuts them off).

## Fields per page type

Numbered fields (`req_1_title` … `req_6_title`) are optional: leave one out and that block isn't shown.

**Templates:** `slug`, `niche`, `title`, `meta_description`, `h1`, `subtitle`, `intro_paragraph`,
`what_to_include_intro`, `req_1…6_title/text`, `what_to_include_outro`, `sample_breakdown_*`
(the example invoice table), `industry_notes_title`, `industry_notes[]`, `mistakes_title`,
`mistakes[]`, `pro_tip`, `when_to_use_each_format_title`, `format_pdf/word/excel_desc`, `faqs[]`,
`related[]`, `industry` (slug of the matching industry page; both pages then link to each other).
The `sample_breakdown_rows` are also the example the free generator opens with from “Use this
template free” (`/free-invoice-generator?example={slug}`), so keep them realistic: up to 10 rows,
a number in `qty` and in `rate`.

**Industries:** `slug`, `industry`, `title`, `meta_description`, `icon`, `color`, `badge_text`,
`h1`, `subtitle`, `industry_stats[]`, `industry_mistake_1…3_*`, `feature_1…3_*`, `expert_tip_*`,
`real_scenario_*`, `common_line_items[]`, `industry_glossary_title`, `industry_glossary[]`,
`tax_or_compliance_*`, `faqs[]`, `related[]`.

**Comparisons:** `slug`, `competitor`, `title`, `meta_description`, `badge_text`, `h1`,
`subtitle`, `mistake_1…3_*`, `feature_compare_1…5_name/us/them` (`us`/`them` are true/false),
`policy_h2`, `policy_text`, `solution_h2`, `solution_text`, `stat_1…2_*`, `pricing_them*`,
`target_audience_*`, `step_1…3_*`, `faqs[]`, `related_comparisons[]`. Invoicor's own prices come
from `content/pricing.json`, never from this file.

Comparison pages: only state facts about competitors that you can source (their pricing page,
App Store listing or public reviews), and re-check them every few months. Prices change.
