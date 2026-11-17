# invoicor-web

The marketing website for [Invoicor](https://invoicor.com), the iPhone invoice app.

Built with **Next.js 16** (App Router, TypeScript, Tailwind CSS v4) as a **static export**:
`npm run build` produces a plain HTML/CSS/JS site in `out/`, which nginx serves on the VPS.
Every page is pre-rendered, so search engines get the full content, titles and structured data.

- Plan and progress: [ROADMAP.md](ROADMAP.md)
- How to put it live: [DEPLOY.md](DEPLOY.md)

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
| `npm run check` | lint + typecheck + build (run before every deploy) |

## Project structure

```
app/                     routes (one folder per URL) + site-wide files
  layout.tsx             <html>, fonts, navbar, footer, analytics (every page)
  page.tsx               home page
  templates/ industries/ compare/   hub page + [slug] detail pages
  help/ affiliate/ terms/ privacy/
  not-found.tsx          branded 404 (exported as out/404.html)
  sitemap.ts robots.ts manifest.ts  generated at build time
  og.png/route.tsx       default social share image (out/og.png)
  fonts/ fonts.ts        self-hosted Satoshi + Cabinet Grotesk
  globals.css            Tailwind + keyframes + hover/reveal helpers
components/
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
public/                  static files copied as-is (icons, images, BingSiteAuth.xml)
deploy/                  deploy script + nginx config
```

## Adding or editing an SEO page

1. Edit the entry in `content/templates.json`, `industries.json` or `comparisons.json`
   (copy an existing entry for a new page; `slug` becomes the URL).
2. Run `npm run build`. The build fails with a clear message if a field is missing or a slug
   is duplicated. Related links to pages that don't exist are skipped with a warning.
3. Update `CONTENT_UPDATED_AT` in `lib/content.ts`, so the sitemap tells Google something changed.

The page, its sitemap entry, canonical URL, breadcrumbs and FAQ markup are generated automatically.

## Configuration

All values have production defaults in `lib/config.ts`, so no `.env` file is needed.
To override something locally, copy `.env.example` to `.env.local`.
