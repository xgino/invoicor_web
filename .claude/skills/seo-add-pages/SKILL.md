---
name: seo-add-pages
description: Suggest and plan new SEO pages for invoicor.com. Use when the user asks for "X more pages", "add pages to category Y", "what pages should we add", "expand T/D/C/…", or "do the same for <category> up to N". Reads the rules, what's live and what's planned, then returns a ranked list to approve before anything is written.
---

# Add SEO pages to the plan

The page log [seo/keyword-map.csv](../../../seo/keyword-map.csv) is the one source of truth: every
page, live, planned or parked, is one row. PLAN.md, PAGES.md and seo/plan/ are generated from it
(`npm run pages`); never edit them by hand. This routine plans pages (rows); writing them is
"do <item>" (see PLAN.md → How to run an item).

## 1. Read only this (not PLAN.md, not the whole CSV)

1. `npm run -s pages:category` → every category with its letter and counts.
2. `npm run -s pages:category -- <letter>` → the category's direction (can / can't, links,
   languages) and every row in it, one line each. This is "what we have and what's planned".
3. The shared rules: `seo/PLAN.md` from "## Rules for every page" to "## Overview" (about 70
   lines: page rules, language rules, rules for new items). Read with offset/limit, not the file.
4. The claims the app backs up: `BRAND.md` §10. A page may only promise those.
5. Why the category stopped last time: `grep -n "Stopped at" ROADMAP.md`, the category's lines.
   Don't re-propose what was left out on purpose unless something changed (new API currency, new
   app feature, Search Console data).
6. The blueprint section named in step 2 (`seo/BLUEPRINTS.md`), for what a page of this type has.

## 2. Unbuilt pages come first

If the category has **planned** rows not yet live, say so at the top: "D has 30 planned, 0 live:
building D1 is worth more than planning D3." New rows only help when the planned ones are weak or
used up. The user decides.

## 3. Find candidates (about twice the number asked)

Each candidate must:
- fit the category's **can**, and none of its **can't**;
- be a search of its own: not a synonym, sub-niche, city or state version of a row in the list
  (doorway pages and near-duplicates are what Google's scaled-content policy punishes);
- pass `npm run pages -- --check "<key>"` (and `--lang xx` for a local page);
- answer something its neighbours don't: if the honest page would be its parent with other
  nouns, drop it and suggest improving the parent instead;
- promise only what BRAND.md §10 backs up;
- for countries and local pages: a currency the API supports and a country where a PDF invoice is
  still valid (no e-invoicing-only markets).

Demand evidence, best available: Search Console queries, Google autocomplete and "People also
ask", a keyword tool if one is connected. No evidence found = say "demand unchecked" (the demand
gate at writing time will park it), never invent volumes.

## 4. Rank and return. Write nothing yet

Score each 1–5 and sort by the total, highest first:
- **Demand** (evidence above; unchecked = 2),
- **Value of its own** (how different from the nearest page),
- **Parent first** (a general page that others will link up to scores higher),
- **Ready** (5 = needs no code; lower when it waits for a task such as S1, S3, S4).

Return one table:

| # | URL | Key | Score | Why it's not thin | Nearest existing page | Demand | Needs |

Then a short **Left out** list: each rejected idea with its reason (synonym of X, key taken by Y,
app can't, e-invoicing country). If fewer good pages exist than asked, return fewer and say why:
the number is a direction, not a quota.

## 5. After the user approves (they may strike rows)

1. Append the rows to `seo/keyword-map.csv` with a small script that uses `parseCsv` / `toCsv`
   from `scripts/pages-lib.mjs`. Fields: url, lang, status `planned`, page_type, localize
   (yes / local / en-only, with the reason in notes), primary_keyword, secondary_keywords,
   intent, item, brief (what to write, with sources to check), avoid (what neighbours own: link
   them). A language version that shouldn't exist gets a `parked` row (`translation_of` = the
   English URL, reason in notes).
2. `scripts/pages-items.mjs`: the new item at the end of `ITEMS` (next free number for the
   letter, never renumber) and in `ORDER`; if any row is `localize: yes`, also at the end of
   `LANGUAGE_SOURCES` (append-only).
3. `npm run pages`, then `npm run check`.
4. ROADMAP.md: one R entry with what was added and, if it stopped short, **"Stopped at <item>"**
   and why (step 5 of the reading list depends on that wording).
5. One commit, push to `dev` (never `main`), check CI.
