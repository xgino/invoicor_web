# SEO baseline (ROADMAP X2)

A snapshot of how invoicor.com performed **before** the new site went live, so we can show what
changed (S1-k, X9, E1-a). Takes about 20 minutes. The site launched on **2026-11-18**, so every
date range below **ends on 2026-11-17** (Search Console keeps 16 months, so the old site's data is
still there). Indexing and links can't be dated: export them anyway, they show where the new site
starts.

Put every file in `seo/baseline/2026-11/` with the names below (Claude reads them from there).
Don't edit the files; CSV straight from the tools is what we want.

## 1. Google Search Console (search.google.com/search-console)

Choose the **Domain property `invoicor.com`** (top left). It includes learn.invoicor.com.

**a. Performance, last 3 months**
1. Left menu: **Performance → Search results**.
2. Date → **Custom** → **2026-08-18 to 2026-11-17** (the 3 months before the launch). Tick all four boxes at the top: Clicks, Impressions, CTR, Position.
3. Top right: **Export → Download CSV**. You get a zip with `Queries.csv`, `Pages.csv`,
   `Countries.csv`, `Devices.csv`, `Dates.csv` and more.
4. Unzip it into `seo/baseline/2026-11/gsc-3m/`.

**b. Performance, last 16 months** (the longest Google keeps; shows seasons)
- Same steps with Date → **Custom**, from the earliest date it offers to **2026-11-17** → unzip into `seo/baseline/2026-11/gsc-16m/`.

**c. Indexing**
1. Left menu: **Indexing → Pages**.
2. Top right: **Export → Download CSV** → unzip into `seo/baseline/2026-11/gsc-pages/`.
   (Which pages Google indexed, and why others aren't.)

**d. Links**
1. Left menu: **Links** (at the bottom).
2. Top right: **Export external links → Latest links** (CSV) → save as
   `seo/baseline/2026-11/gsc-links-latest.csv`.
3. Also **Export external links → More sample links** → `gsc-links-sample.csv`.

## 2. Bing Webmaster Tools (bing.com/webmasters)

If the site isn't added yet: **Add site → Import from Google Search Console** (one click, no DNS).
Bing only shows data from the day it's added, so add it now even if the export is still empty.

1. **Search Performance**: date range **custom, 2026-08-18 to 2026-11-17** (if Bing has data that far back) → **Export** (top right) → save as
   `seo/baseline/2026-11/bing-performance.csv`. Export both the Keywords and the Pages tab if
   it offers them separately.
2. **Backlinks** → **Export** → `seo/baseline/2026-11/bing-backlinks.csv`.

## 3. Tell Claude

Commit the folder (or just tell Claude it's there). Claude then:
- fills in today's positions in `seo/pages/*.csv` (`baseline_position`) and proposes 10 priority keywords (X9),
- compares again on 2026-12-16 or 4 weeks after the launch (S1-k).
