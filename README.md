# invoicor-web

The marketing website for [Invoicor](https://invoicor.com), the iPhone invoice app.

Built with **Next.js 16** (App Router, TypeScript, Tailwind CSS v4) as a **static export**:
`npm run build` produces a plain HTML/CSS/JS site in `out/`, which nginx serves on the VPS.
Every page is pre-rendered, so search engines get the full content, titles and structured data.

- Plan and progress: [ROADMAP.md](ROADMAP.md)
- How to put it live: [DEPLOY.md](DEPLOY.md)
- How to add or edit SEO pages: [CONTENT.md](CONTENT.md)
- Brand and SEO strategy: [BRAND.md](BRAND.md), [seo/](seo/)

## Requirements

- Node.js 20.9 or newer (`node -v`)
- npm

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (first time, or after `package.json` changes) |
| `npm run dev` | Local dev server with hot reload at http://localhost:3000 |
| `npm run build` | Production build into `out/` |
| `npm run preview` | Serve `out/` locally, like production, at http://localhost:3000 |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no output |
| `npm run format` | Format all code with Prettier |
| `npm run content:check` | SEO rules for `content/*.json` (duplicates, word counts, broken links) |
| `npm run api:types` | Regenerate `types/api.generated.ts` from the live API schema |
| `npm run check` | lint + typecheck + content:check + build (run before every deploy) |

## Project structure

```
app/                     routes (one folder per URL) + site-wide files
  layout.tsx             <html>, fonts, navbar, footer, analytics (every page)
  page.tsx               home page
  templates/ industries/ compare/   hub page + [slug] detail pages
  help/ affiliate/ terms/ privacy/
  brand/                 hidden brand reference: every token and component (noindex)
  not-found.tsx          branded 404 (exported as out/404.html)
  sitemap.ts robots.ts manifest.ts llms.txt/  generated at build time
  og.png/route.tsx       default social share image (out/og.png)
  og/[collection]/[slug]/og.png/   per-page share images (templates, industries, compare)
  icon.svg icon.png apple-icon.png  favicons, generated from the SVG logo
  fonts/ fonts.ts        self-hosted Satoshi + Cabinet Grotesk
  globals.css            Tailwind + keyframes + hover/reveal helpers
styles/tokens.css        brand tokens: colors, gradients, type scale, shadows, motion (see BRAND.md §7)
components/
  brand/                 Logo, LogoMark (SVG)
  ui/                    UI kit: Button, Section, Heading, Card, Badge, Breadcrumbs, form parts, Accordion, Tabs… (see /brand)
  layout/                Navbar, Footer
  landing/               home page sections and their building blocks
  content/               shared blocks for SEO pages (breadcrumbs, FAQ, TOC, CTAs)
  affiliate/  analytics/  seo/
content/                 templates.json, industries.json, comparisons.json (page content)
lib/
  config.ts              every URL, ID and key in one place
  content.ts             typed + validated access to content/*.json
  seo.ts jsonld.ts       page metadata and structured data helpers
  api.ts                 build-time calls to the Invoicor API
assets/og-fonts/         TTF copies of the site fonts for the share images (the renderer can't read woff2)
public/                  static files copied as-is (icons, images, BingSiteAuth.xml, IndexNow key)
scripts/                 content-check.mjs, indexnow.mjs
types/                   api.generated.ts (from the API's OpenAPI schema)
deploy/                  deploy script + nginx config
```

## Adding or editing an SEO page

See [CONTENT.md](CONTENT.md): add one JSON entry, run `npm run content:check`, done.

## Configuration

All values have production defaults in `lib/config.ts`, so no `.env` file is needed.
To override something locally, copy `.env.example` to `.env.local`.

## Git hooks and CI

`npm install` sets up a pre-commit hook (husky + lint-staged): staged files are linted and
formatted, content JSON is checked, and the project is type-checked. GitHub Actions
(`.github/workflows/check.yml`) runs all checks on every push to `dev` and `main`. It never deploys.
