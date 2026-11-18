# Deploying invoicor.com

The site is a **static export**: it's built into plain files (`out/`) and uploaded to the VPS.
The server only runs nginx for it (no Node.js, no PM2, nothing to crash or restart) and needs
**no `.env` on the server**: the few settings are baked in at build time (section F.1).

```
GitHub: push dev  ──check──> deploy ──rsync──> VPS /var/www/staging.invoicor.com/site   (staging)
        push main ──check──> deploy ──rsync──> VPS /var/www/invoicor.com/site           (live)
VPS:    nginx ─┬─ /api/, /admin/ ...  ──> Django (its own repo and deploy, unchanged)
               └─ everything else     ──> /var/www/invoicor.com/site
```

Deploys are **automatic** once set up (section F): every push to `dev` that passes the checks goes
to staging, every push to `main` goes live. `bash deploy/deploy.sh` from your Mac (sections B, E)
stays as the manual fallback.

| What | Where |
|---|---|
| Live website files | `$SITE_DIR/site` on the VPS (from `deploy/.env`) |
| Previous version (for rollback) | `$SITE_DIR/site-prev` |
| nginx config (reference copy) | `deploy/nginx/invoicor.com.conf` |
| Deploy settings (not in git) | `deploy/.env` |
| Staging (password-protected, noindex) | `$STAGING_DIR/site`, served at https://staging.invoicor.com |
| QA checklist | [seo/QA.md](seo/QA.md) |

---

## A. One-time setup

### 1. On your Mac: deploy settings

```bash
cp deploy/.env.example deploy/.env
# edit deploy/.env: SSH_TARGET (e.g. user@1.2.3.4) and SITE_DIR (e.g. /var/www/invoicor.com)
```

Check the SSH login works without a password prompt: `ssh user@1.2.3.4 'echo ok'`.

### 2. On the server: find the current setup

```bash
grep -rln "invoicor" /etc/nginx/sites-enabled/     # which file serves invoicor.com
sudo cat /etc/nginx/sites-enabled/<that-file>      # note the "root" line and the /api/ block
```

### 3. On the server: update nginx (once)

The reference config is written for **nginx 1.24** (check with `nginx -v`). On 1.25.1 or newer,
change `listen 443 ssl http2;` to `listen 443 ssl;` plus a separate `http2 on;` line.

Open the file from step 2 and merge in `deploy/nginx/invoicor.com.conf`:

- **Keep** your `ssl_certificate` lines and your `/api/` (and `/admin/`, `/static/`) proxy blocks;
  only change `location /api/` to `location ^~ /api/` (same for the others).
- Set `root` to `$SITE_DIR/site` (e.g. `/var/www/invoicor.com/site`).
- Add the `www → invoicor.com` redirect, the `/pricing` redirect, the `_next/static` cache block,
  the `location /` block with `try_files`, `error_page 404`, gzip and the headers.

Make a backup first and test before reloading:

```bash
sudo cp /etc/nginx/sites-enabled/<that-file> ~/nginx-invoicor-backup.conf
sudo nano /etc/nginx/sites-enabled/<that-file>
sudo nginx -t && sudo systemctl reload nginx
```

> Do the nginx change in the same session as your first deploy (section B): the new `root`
> folder only exists after the first upload.

---

### 4. Staging (once, recommended before the first Next.js deploy)

A private copy of the site to check before going live. Same static files, behind a password,
hidden from search engines.

```bash
# DNS (where invoicor.com's DNS is managed): A record  staging  ->  your server IP
# On the server:
sudo apt install apache2-utils
sudo htpasswd -c /etc/nginx/.htpasswd-staging invoicor          # choose a password
sudo cp staging.invoicor.com.conf /etc/nginx/sites-available/     # from deploy/nginx/
sudo ln -s /etc/nginx/sites-available/staging.invoicor.com.conf /etc/nginx/sites-enabled/
sudo certbot --nginx -d staging.invoicor.com
sudo nginx -t && sudo systemctl reload nginx
```

On your Mac, add `STAGING_DIR` and `STAGING_AUTH` (`invoicor:yourpassword`) to `deploy/.env`.
Then, from `dev`:

```bash
bash deploy/deploy.sh --staging
node scripts/parity-check.mjs --new https://staging.invoicor.com --auth invoicor:yourpassword
```

Work through [seo/QA.md](seo/QA.md) on staging.

---

## B. Every deploy (manual, from your Mac)

```bash
# 1. Finish work on dev, commit, push
git checkout dev
git add -A && git commit -m "describe the change"
git push

# 2. Bring it to main
git checkout main
git pull
git merge dev
git push

# 3. With automatic deploys (F): nothing to do, the push to main deploys.
#    Without them: build, upload and switch live (runs all checks and tests first)
bash deploy/deploy.sh

# 4. Back to dev for the next change
git checkout dev
```

The script ends by checking that `https://invoicor.com/` returns 200 and an unknown page returns 404,
and tells search engines (IndexNow: Bing, Yandex, Seznam) which pages changed. Google doesn't use
IndexNow; it picks up changes from the sitemap.

### Rollback (under a minute)

```bash
bash deploy/deploy.sh --rollback
```

This swaps back to the previous upload. Fix the problem on `dev`, then deploy again.

---

## C. Launch day: switching from the old Vite site (one time)

1. **Before:** Search Console verified by DNS (Y13), baseline exported (Y1), staging QA green
   ([seo/QA.md](seo/QA.md)), parity report with 0 failures.
2. **Back up** the current site and nginx config on the server:
   ```bash
   sudo cp /etc/nginx/sites-enabled/<that-file> ~/nginx-invoicor-vite-backup.conf
   sudo cp -a <current root folder> ~/invoicor-vite-site-backup      # the "root" from A.2
   ```
3. Merge `dev` into `main` and run `bash deploy/deploy.sh` (section B).
4. Update nginx as in A.3 (the new `root` exists now), `sudo nginx -t && sudo systemctl reload nginx`.
5. Run the checks below and the "after launch" part of [seo/QA.md](seo/QA.md).

**Rollback to the Vite site** (if something is badly wrong, under a minute):
`sudo cp ~/nginx-invoicor-vite-backup.conf /etc/nginx/sites-enabled/<that-file> && sudo nginx -t && sudo systemctl reload nginx`.
After that first launch, `bash deploy/deploy.sh --rollback` switches between Next.js versions.

## D. After the first Next.js deploy (one time)

> **Before** the first deploy: verify Google Search Console with a DNS TXT record (Domain property),
> and export the SEO baseline (ROADMAP X1 and X2). Search Console may be verified through
> the Google Analytics tag today, which now only loads after cookie consent.

1. Check a few pages in the browser and with `curl -s https://invoicor.com/templates/plumbing | grep "<h1"`:
   you should see the real heading in the raw HTML.
2. `curl -sI https://www.invoicor.com/` → `301` to `https://invoicor.com/`.
3. `curl -sI https://invoicor.com/does-not-exist` → `404`.
4. Check `https://invoicor.com/llms.txt` and `https://invoicor.com/d3e8f87315d5d18c667a3f10ea082f94.txt`
   (the IndexNow key) both load.
5. Google Search Console + Bing Webmaster Tools: resubmit `https://invoicor.com/sitemap.xml`,
   then "Inspect URL" → "Request indexing" for the home page and your top pages.
6. Keep an eye on Search Console → Pages for 2–4 weeks (see ROADMAP chunk 29).

## E. Without the script (manual fallback)

```bash
npm ci && npm run check
rsync -az --delete out/ user@server:/var/www/invoicor.com/site-new/
ssh user@server 'cd /var/www/invoicor.com && rm -rf site-prev && mv site site-prev && mv site-new site'
```

---

## F. Automatic deploys with GitHub Actions (one-time setup)

The `deploy` job in `.github/workflows/check.yml` runs after the checks passed on a push:
`dev` → staging, `main` → production. It builds on GitHub, uploads over SSH with its own key, switches
folders (the previous version stays as `site-prev`), checks the site and **rolls back by itself** if
the home page isn't 200 or an unknown page isn't 404. Until the secrets below exist, it skips with a
note and never fails.

**Why this works with a split project:** the website and the API are independent. The website only
ever writes `site`, `site-new` and `site-prev` inside its folder; it never touches the API, the
Django code or the old Vite files. nginx is the only shared piece: it sends `/api/` to Django and
everything else to the website folder. The API keeps its own repo and its own deploy.

### F.1 Settings: what goes where

| Where | What | Notes |
|---|---|---|
| **VPS** | nothing | No `.env` for the website on the server. |
| **GitHub → Settings → Environments → `production`** (secrets) | `DEPLOY_SSH_KEY`, `DEPLOY_SSH_TARGET`, `DEPLOY_KNOWN_HOSTS`, `DEPLOY_DIR` = `/var/www/invoicor.com` | See F.3 and F.4. |
| **GitHub → Environments → `staging`** (secrets) | the same four, with `DEPLOY_DIR` = `/var/www/staging.invoicor.com`, plus `STAGING_AUTH` = `invoicor:<staging password>` | Same key and target as production. |
| **GitHub → Settings → Secrets and variables → Actions → Variables** | `PRODUCTION_LIVE` = `true` (only from launch day, F.6); optional `APP_STORE_PROVIDER_TOKEN` (ROADMAP X10) | Variables, not secrets: they're not sensitive. |
| **Your Mac, `deploy/.env`** | only for the manual fallback script | Copy of `deploy/.env.example`. |

Build-time settings (already correct by default, change only if the domain or API moves):
`NEXT_PUBLIC_SITE_URL` (default `https://invoicor.com`), `NEXT_PUBLIC_API_URL` (default
`https://invoicor.com/api`), `NEXT_PUBLIC_ANALYTICS` (set to `false` for staging by the workflow),
`NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN` (from the `APP_STORE_PROVIDER_TOKEN` variable).

### F.2 On the VPS: a deploy user (5 min)

A separate user that can only write the website folders, so the GitHub key can't touch anything else.

```bash
sudo adduser --disabled-password --gecos "" deploy
sudo mkdir -p /var/www/invoicor.com /var/www/staging.invoicor.com
# Let deploy create and rename folders in both, without changing who owns what's there now:
sudo apt install -y acl rsync
sudo setfacl -m u:deploy:rwx /var/www/invoicor.com /var/www/staging.invoicor.com
sudo chown deploy:deploy /var/www/staging.invoicor.com
```

### F.3 On your Mac: a key just for deploys (5 min)

```bash
ssh-keygen -t ed25519 -f ~/.ssh/invoicor_deploy -N "" -C "github-deploy-invoicor-web"
# Copy the public key to the server, for the deploy user:
cat ~/.ssh/invoicor_deploy.pub | ssh <you>@<server-ip> \
  'sudo mkdir -p /home/deploy/.ssh && sudo tee -a /home/deploy/.ssh/authorized_keys >/dev/null && sudo chown -R deploy:deploy /home/deploy/.ssh && sudo chmod 700 /home/deploy/.ssh && sudo chmod 600 /home/deploy/.ssh/authorized_keys'
# Test (should print ok, with no password prompt):
ssh -i ~/.ssh/invoicor_deploy deploy@<server-ip> 'echo ok'
# The server's fingerprint, for DEPLOY_KNOWN_HOSTS:
ssh-keyscan -t ed25519 <server-ip>
```

### F.4 On GitHub: two environments (10 min)

Repo → **Settings → Environments → New environment**:

1. **`staging`**. Add secrets:
   - `DEPLOY_SSH_KEY`: the whole content of `~/.ssh/invoicor_deploy` (the private key, including the
     `-----BEGIN` and `-----END` lines). `pbcopy < ~/.ssh/invoicor_deploy` copies it.
   - `DEPLOY_SSH_TARGET`: `deploy@<server-ip>`
   - `DEPLOY_KNOWN_HOSTS`: the line `ssh-keyscan` printed.
   - `DEPLOY_DIR`: `/var/www/staging.invoicor.com`
   - `STAGING_AUTH`: `invoicor:<the staging password from A.4>`
2. **`production`**. The same first three secrets, and `DEPLOY_DIR` = `/var/www/invoicor.com`.
   Recommended: under **Deployment branches**, allow only `main`. Optional: **Required reviewers**:
   you. Then every live deploy waits for one click in the Actions tab.

### F.5 Staging first

Set up staging once (A.4: DNS record, password, nginx file, certificate). Then push anything to `dev`:
the Actions tab shows `check`, then `deploy` to staging. Open https://staging.invoicor.com and work
through [seo/QA.md](seo/QA.md).

### F.6 Launch day (one time)

1. Back up the current nginx file and site (C.2).
2. Merge `dev` into `main` and push. The deploy uploads the new site to `/var/www/invoicor.com/site`,
   but doesn't check the live site yet (`PRODUCTION_LIVE` isn't set), because nginx still serves
   the old site.
3. Switch nginx to the new folder (A.3, `root /var/www/invoicor.com/site;`),
   `sudo nginx -t && sudo systemctl reload nginx`.
4. Set the repository variable `PRODUCTION_LIVE` = `true`. From now on every live deploy is checked
   (and rolled back by itself if it fails) and tells search engines what changed (IndexNow).
5. Section D (checks after the first deploy).

**Rollback by hand:** `bash deploy/deploy.sh --rollback` from your Mac, or on the server
`cd /var/www/invoicor.com && mv site site-bad && mv site-prev site`.
