# Deploying invoicor.com

The website is a **static export**: it's built into plain files (`out/`) and uploaded into one
folder on the VPS. nginx serves that folder. There is no Node.js on the server, nothing to restart,
and **no `.env` on the server** for the website.

```
push to dev   ──> GitHub: all checks and tests                     (nothing is deployed)
push to main  ──> GitHub: all checks and tests ──pass──> build ──rsync──> VPS  /var/www/invoicor.com/web
                                                        └─fail──> nothing changes on the server

VPS  nginx ─┬─ /api/, /admin/ …  ──> Django   (the invoicor_api repo, deployed on its own)
            └─ everything else   ──> /var/www/invoicor.com/web   (this repo)
```

The website and the API are separate. `/var/www/invoicor.com` is the API (Django). The website
lives only in its own folder inside it, owned by its own deploy user, who can't write anything else:

```
/var/www/invoicor.com/web/current   what nginx serves
/var/www/invoicor.com/web/new       during an upload
/var/www/invoicor.com/web/prev      the previous version (rollback)
```

The old Vite site (`/var/www/invoicor.com/dist`) is never touched; undoing the launch only means
putting the old nginx file back. nginx is the only shared piece.

---

## A. What runs before anything goes live

Every push to `dev` or `main` runs the `check` job (`.github/workflows/check.yml`), the same as
`npm run check` on your Mac:

| Step | What it catches |
|---|---|
| `format:check`, `lint`, `typecheck` | broken code, type errors |
| `content:check` | thin or duplicate SEO pages, titles or descriptions too long |
| `test:unit` (Vitest) | wrong math, broken translations, claims that aren't true (BRAND.md §10) |
| `build` | every page builds |
| `test:site` | every URL in `tests/urls.txt` exists, sitemap, hreflang, structured data |
| `test:e2e` (Playwright, desktop + phone) | the generator makes a real PDF, tools, language switch, accessibility |

On `main` only, the `deploy` job runs **after all of these passed**. If any test fails, nothing is
deployed. After uploading, it checks the live site (home 200, a template page 200, an unknown page
404) and **rolls back by itself** if that fails.

## B. Every change

```bash
# on dev, as often as you like (GitHub runs all checks, nothing is deployed)
git add . && git commit -m "what you did" && git push

# go live
bash deploy/deploy.sh
```

`deploy.sh` merges `dev` into `main` with a pull request and waits for GitHub: every check and test,
then the upload. You see each job's result and which text changed on the home page. Red means
nothing changed on the server, and it prints the command that shows why. Before a big change, look
at it locally first: `npm run build && npm run preview` → http://localhost:4173.

## C. Rollback

Automatic when the live check after a deploy fails. By hand: `bash deploy/deploy.sh --rollback`.

## D. After the first deploy (one time)

1. `curl -s https://invoicor.com/templates/plumbing | grep "<h1"`: the real heading in the raw HTML.
2. `curl -sI https://www.invoicor.com/` → `301` to `https://invoicor.com/`.
3. `curl -sI https://invoicor.com/does-not-exist` → `404`.
4. `https://invoicor.com/llms.txt` and `https://invoicor.com/d3e8f87315d5d18c667a3f10ea082f94.txt`
   (the IndexNow key) both load.
5. Google Search Console + Bing Webmaster Tools: submit `https://invoicor.com/sitemap.xml`, then
   "Inspect URL" → "Request indexing" for the home page and the top pages (ROADMAP X6).
6. Watch Search Console → Pages for 2–4 weeks (ROADMAP X13).

## E. Without GitHub

`bash deploy/deploy.sh --direct` on `main`: every check and test on your Mac, then the same upload.

---

## F. One-time setup

Everything is done by `deploy/setup.sh`, like in the other projects: it makes the server user and
its key and puts the secrets in GitHub. You never copy a key.

| Where | What |
|---|---|
| **VPS** | Nothing to configure for the website: no `.env`, no Node.js. `setup.sh` adds a user (`invoicor_web`) that may only write the website folder. |
| **GitHub** | Filled in by `setup.sh`: environment `production` (deploys only from `main`) with `DEPLOY_SSH_KEY`, `DEPLOY_SSH_TARGET`, `DEPLOY_KNOWN_HOSTS`, `DEPLOY_WEB_PATH`; the variable `PRODUCTION_LIVE` on launch day. |
| **Your Mac, `deploy/.env`** | `SERVER_IP`, `DOMAIN`, and after step 3 `NGINX_SITE` (see `deploy/.env.example`). |

Build settings need nothing: `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_API_URL` default to
`https://invoicor.com` and `https://invoicor.com/api`. Google Analytics, PostHog and IndexNow IDs are
in `lib/config.ts` (public IDs, not secrets). Optional later: the GitHub variable
`APP_STORE_PROVIDER_TOKEN` (ROADMAP X10).

### F.1 Once per Mac

```bash
brew install gh && gh auth login     # GitHub.com, HTTPS, log in with the browser
ssh root@SERVER_IP                    # must log in without a password (else: ssh-copy-id root@SERVER_IP)
```

### F.2 Once for this project

1. `cp deploy/.env.example deploy/.env` and fill in `SERVER_IP` (and `DOMAIN=invoicor.com`).
2. `bash deploy/setup.sh`: the server user, its key and the GitHub secrets. Nothing visitors see
   changes (not nginx, not the live site, not the API). Safe to run again.
3. `bash deploy/setup.sh info`: writes `deploy/server-info.txt` (the current nginx file and
   folders) and prints the `NGINX_SITE=` line for `deploy/.env`. Tell Claude: it writes the new nginx
   file into `deploy/nginx/invoicor.com.conf`, keeping your certificates and `/api/` blocks.
4. A deploy before launch day is harmless: it fills `web/current`, but nginx keeps serving the old
   site until `setup.sh launch`.

### F.3 Launch day

```bash
bash deploy/deploy.sh          # tests, then the new site goes into web/current (the old site keeps running)
bash deploy/setup.sh launch    # right after: backups, the new nginx file, tested, PRODUCTION_LIVE on
```

`launch` backs up the nginx file, installs the new one (root `web/current`), tests it and checks
the live site. If anything fails it puts the old nginx file back by itself. Then section D.

Undo the whole launch (old site and old nginx file back): `bash deploy/setup.sh undo-launch`.

### F.4 About two weeks after a good launch

```bash
bash deploy/setup.sh cleanup
```

Removes the old Vite site (`/var/www/invoicor.com/dist`), the nginx copy that isn't enabled
(`sites-available/invoicor.com`) and the launch backup. It asks first and only works once nginx
serves `web/current`. After this, `undo-launch` is gone; `deploy.sh --rollback` still works.
