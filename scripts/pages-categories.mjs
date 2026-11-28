/**
 * The page categories: which rows of seo/pages/*.csv belong to each (`match`). Everything
 * else about a category (URL, key, sections, can and can't, links, languages) is in seo/RULES.md §5 under "{letter} · {title}"; the site test checks every category has one.
 * Edit seo/pages/*.csv to plan pages; then `npm run pages`.
 *
 * `match(row)` decides which rows (live and planned) belong to the category.
 */
export const CATEGORIES = [
  {
    id: "templates",
    title: "Trade templates",
    match: (r) => r.page_type === "template" && r.lang === "en",
  },
  {
    id: "billing",
    title: "Billing-type templates",
    match: (r) => r.page_type === "template (billing type)",
  },
  {
    id: "types",
    title: "Invoice types (general documents)",
    match: (r) => r.page_type === "template (invoice type)",
  },
  {
    id: "industries",
    title: 'Industry pages ("invoice app for …")',
    match: (r) => r.page_type === "industry",
  },
  {
    id: "compare",
    title: 'Compare pages ("{competitor} alternative")',
    match: (r) => r.page_type === "compare",
  },
  {
    id: "tools",
    title: "Free tools",
    match: (r) => r.page_type === "tool" && r.lang === "en",
  },
  {
    id: "country",
    title: "Country pages (English)",
    match: (r) => r.page_type === "country" && r.lang === "en",
  },
  {
    id: "local",
    title: "Local pages (in the country's own language)",
    match: (r) =>
      (r.page_type === "country" && r.lang !== "en") ||
      ["compare (local)", "local topic"].includes(r.page_type),
  },
  {
    id: "generators",
    title: "Generators",
    match: (r) => r.page_type === "generator" && r.lang === "en",
  },
  {
    id: "core",
    title: "Core pages, hubs, trust and legal",
    match: (r) =>
      [
        "home",
        "hub",
        "support",
        "program",
        "legal",
        "trust",
        "product",
        "android",
        "template (file format)",
      ].includes(r.page_type) &&
      (r.lang === "en" || r.localize === "local"),
  },
];
