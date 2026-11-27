---
name: seo-add-pages
description: Suggest and plan new SEO pages for invoicor.com. Use when the user asks for "X more pages", "add pages to category Y", "what pages should we add", "expand T/D/C/…", or "do the same for <category> up to N". Reads the rules, what's live and what's planned, then returns a ranked list to approve before anything is written.
---

# Add SEO pages to the plan

The page log [seo/pages/](../../../seo/pages/) (one CSV per category, `D-types.csv` …) is the one
source of truth: every page, live, planned or parked, is one row, its language versions right
below it. PLAN.md, PAGES.md and seo/plan/ are generated from it
(`npm run pages`); never edit them by hand. This routine plans pages (rows); writing them is
"do D4" / "do D1–D20" (see PLAN.md → How to run).

## 1. Read only this (not PLAN.md, not the whole CSV)

1. `npm run -s pages:category` → every category with its letter and counts.
2. `npm run -s pages:category -- <letter>` → the category's rules (its section of
   `seo/RULES.md` §5: URL, key, blueprint, can and can't, links, languages) and every row in it,
   one line each. This is "what we have and what's planned".
3. `seo/RULES.md` §2 (thin and duplicate pages) and §3 (planning new pages); §4 too if the pages
   get language versions. Read with offset/limit, not the whole file.
4. The claims the app backs up: `BRAND.md` §10. A page may only promise those.
5. Why the category stopped last time: `grep -n "Stopped at" ROADMAP.md`, the category's lines.
   Don't re-propose what was left out on purpose unless something changed (new API currency, new
   app feature, Search Console data).

## 2. Language gaps and unbuilt pages come first

Say these at the top, before any new idea; the user decides:
- **Language gaps:** `npm run -s pages:gaps` and the category's line in `seo/LANGUAGES.md`. If its
  live pages miss language versions that can be written now (no task in the Needs column),
  RULES.md §3 says to fill those first: "T's 50 live templates miss 500 versions (they wait for
  S1)".
- **Unbuilt pages:** if the category has **planned** rows not yet live: "D has 10 planned: building
  D21–D30 is worth more than planning D31." New rows only help when the planned ones are weak or
  used up.

## 3. Find candidates (about twice the number asked)

Each candidate must:
- fit the category's **Can**, and none of its **Can't** (RULES.md §5);
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

Give each candidate a `score` of 1–5 by the table in `seo/RULES.md` §3 (demand evidence first;
a parent or a big search lifts it; doubtful value lowers it), with the evidence as `score_why`.
Unchecked demand = 3, never higher without a source. Sort by score, highest first; ties: the
parent before its children, then the page that needs no task. Waiting for a task (S1, S3, S4)
goes in **Needs**, not in the score.

Return one table:

| # | URL | Key | Score | Why it's not thin | Nearest existing page | Demand | Needs |

Then a short **Left out** list: each rejected idea with its reason (synonym of X, key taken by Y,
app can't, e-invoicing country). If fewer good pages exist than asked, return fewer and say why:
the number is a direction, not a quota.

## 5. After the user approves (they may strike rows)

1. Append the rows with a small script that uses `loadRows` / `saveRows` from
   `scripts/pages-data.mjs` (it files each row in its category's CSV). Fields: url, lang, status `planned`, page_type, localize
   (yes / local / en-only, with the reason in notes), primary_keyword, secondary_keywords,
   intent, brief (what to write, with sources to check), avoid (what neighbours own: link
   them), score and score_why (from step 4). A language version that shouldn't exist gets a
   `parked` row (`translation_of` = the English URL, reason in notes).
2. Leave `id` empty and run `npm run pages`: each new page gets the next free ID of its letter
   (in the order the rows were added), and its language versions follow by themselves.
3. `scripts/pages-items.mjs`: the new group at the end of `GROUPS` with the range of those IDs
   (`range: "D31–D40"`, a title) and in `ORDER`; if it waits for a task, `needs: ["S3"]`. Then
   `npm run pages` again and `npm run check`.
4. ROADMAP.md: one R entry with what was added and, if it stopped short, **"Stopped at <range>"**
   and why (step 5 of the reading list depends on that wording).
5. One commit, push to `dev` (never `main`), check CI.
