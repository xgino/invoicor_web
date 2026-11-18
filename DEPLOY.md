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

The website and the API are separate: this repo only ever writes `web`, `web-new` and `web-prev`,
never the API. nginx is the only shared piece.

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
# work on dev, commit, push: GitHub runs all checks (see the Actions tab)
git checkout dev && git push

# going live = merging into main (when the checks on dev are green)
git checkout main && git pull && git merge dev && git push
git checkout dev
```

The push to `main` deploys by itself. Before a big change, look at it locally first:
`npm run build && npm run preview` → http://localhost:4173 (the same files that go live).

## C. Rollback

Automatic when the live check fails. By hand (under a minute), from your Mac:
`bash deploy/deploy.sh --rollback`, or on the server:

```bash
cd /var/www/invoicor.com && mv web web-bad && mv web-prev web
```

## D. After the first deploy (one time)

1. `curl -s https://invoicor.com/templates/plumbing | grep "<h1"`: the real heading in the raw HTML.
2. `curl -sI https://www.invoicor.com/` → `301` to `https://invoicor.com/`.
3. `curl -sI https://invoicor.com/does-not-exist` → `404`.
4. `https://invoicor.com/llms.txt` and `https://invoicor.com/d3e8f87315d5d18c667a3f10ea082f94.txt`
   (the IndexNow key) both load.
5. Google Search Console + Bing Webmaster Tools: submit `https://invoicor.com/sitemap.xml`, then
   "Inspect URL" → "Request indexing" for the home page and the top pages (ROADMAP X6).
6. Watch Search Console → Pages for 2–4 weeks (ROADMAP X13).

## E. Manual fallback (without GitHub)

`bash deploy/deploy.sh` from your Mac on `main`: runs all checks, builds, uploads and switches the
same way. Needs `deploy/.env` (copy `deploy/.env.example`: `SSH_TARGET` and `WEB_PATH`).

---

## F. One-time setup

### F.1 What goes where

| Where | What |
|---|---|
| **VPS** | Nothing for the website: no `.env`, no Node.js. Only a `deploy` user (F.2) and nginx (F.5). |
| **GitHub → repo `invoicor_web` → Settings → Environments → `production` → Environment secrets** | `DEPLOY_SSH_KEY`, `DEPLOY_SSH_TARGET`, `DEPLOY_KNOWN_HOSTS`, `DEPLOY_WEB_PATH` (F.4) |
| **GitHub → Settings → Secrets and variables → Actions → Variables tab** | `PRODUCTION_LIVE` = `true` (only from launch day, F.5). Later, optional: `APP_STORE_PROVIDER_TOKEN` (ROADMAP X10). |
| **Your Mac, `deploy/.env`** | Only for the manual fallback (E). Never committed. |

The build settings have the right defaults and need nothing: `NEXT_PUBLIC_SITE_URL`
(`https://invoicor.com`) and `NEXT_PUBLIC_API_URL` (`https://invoicor.com/api`). Only set them as
GitHub variables if the domain or the API address ever changes.

### F.2 On the VPS: a deploy user (5 min)

A separate user, so the GitHub key can only write the website folder, nothing else on the server.
Replace `/var/www/invoicor.com` if your domain folder lives somewhere else.

```bash
sudo adduser --disabled-password --gecos "" deploy
sudo apt install -y acl rsync
# deploy may create and rename web, web-new and web-prev inside the domain folder,
# without changing the owner of anything that's there (the API, the old site):
sudo setfacl -m u:deploy:rwx /var/www/invoicor.com
# nginx must be able to read what deploy uploads (normally already the case):
ls -ld /var/www/invoicor.com
```

### F.3 On your Mac: a key only for deploys (5 min)

```bash
ssh-keygen -t ed25519 -f ~/.ssh/invoicor_deploy -N "" -C "github-deploy-invoicor-web"

# Put the public half on the server, for the deploy user (replace you@SERVER_IP with your own login):
cat ~/.ssh/invoicor_deploy.pub | ssh you@SERVER_IP \
  'sudo mkdir -p /home/deploy/.ssh && sudo tee -a /home/deploy/.ssh/authorized_keys >/dev/null && sudo chown -R deploy:deploy /home/deploy/.ssh && sudo chmod 700 /home/deploy/.ssh && sudo chmod 600 /home/deploy/.ssh/authorized_keys'

# Test: must print "ok" without asking for a password
ssh -i ~/.ssh/invoicor_deploy deploy@SERVER_IP 'echo ok'

# The server's fingerprint (for DEPLOY_KNOWN_HOSTS)
ssh-keyscan -t ed25519 SERVER_IP
```

### F.4 On GitHub: the secrets (5 min)

Repo `invoicor_web` → **Settings → Environments → `production`** (it exists already; else **New
environment**) → **Add environment secret**, four times:

| Name | Value |
|---|---|
| `DEPLOY_SSH_KEY` | The whole private key: `pbcopy < ~/.ssh/invoicor_deploy`, then paste (including the `-----BEGIN` and `-----END` lines) |
| `DEPLOY_SSH_TARGET` | `deploy@SERVER_IP` |
| `DEPLOY_KNOWN_HOSTS` | The line `ssh-keyscan` printed (starts with the IP, then `ssh-ed25519 …`) |
| `DEPLOY_WEB_PATH` | `/var/www/invoicor.com/web` |

In the same `production` page, under **Deployment branches and tags**, choose **Selected branches**
→ add `main`. Optional: **Required reviewers** → you, so every live deploy waits for one click.

From the next push to `main`, the deploy uploads. Until launch day it **only uploads** (no live
checks), because nginx still serves the old site.

### F.5 nginx and launch day (one time)

nginx needs a few changes for the new site (pages as `.html` files, real 404s, caching, old-URL
redirects). The reference is `deploy/nginx/invoicor.com.conf`. Claude writes your exact file from
these outputs (ROADMAP X3):

```bash
grep -rln invoicor /etc/nginx/sites-enabled/
sudo cat /etc/nginx/sites-enabled/<the file from above>
nginx -v
ls -la /var/www/invoicor.com
```

Launch day (ROADMAP X5):

1. Back up: `sudo cp /etc/nginx/sites-enabled/<file> ~/nginx-invoicor-backup.conf` and
   `sudo cp -a /var/www/invoicor.com/web ~/web-old-site-backup`.
2. Merge `dev` into `main` and push. The deploy uploads the new site into `web` (the old one moves
   to `web-prev`).
3. Put the new nginx file in place: `sudo nginx -t && sudo systemctl reload nginx`. Steps 2 and 3
   right after each other: between them, deep links of the new site don't work yet.
4. GitHub → Settings → Secrets and variables → Actions → **Variables** → `PRODUCTION_LIVE` = `true`.
   From now on every deploy checks the live site, rolls back on failure and tells search engines
   what changed (IndexNow).
5. Section D.

**Undo the whole launch** (back to the old site, under a minute):

```bash
sudo cp ~/nginx-invoicor-backup.conf /etc/nginx/sites-enabled/<file>
cd /var/www/invoicor.com && mv web web-new-site && mv web-prev web
sudo nginx -t && sudo systemctl reload nginx
```
