# Deploying invoicor.com

The site is a **static export**: you build it on your Mac and upload the `out/` folder.
The server only runs nginx (no Node.js, no PM2, nothing to crash or restart).

```
Mac:  dev ──merge──> main ──npm run check──> out/ ──rsync──> VPS
VPS:  nginx ─┬─ /api/, /admin/ ...  ──> Django (unchanged)
             └─ everything else     ──> /var/www/invoicor.com/site  (the uploaded out/)
```

| What | Where |
|---|---|
| Live website files | `$SITE_DIR/site` on the VPS (from `deploy/.env`) |
| Previous version (for rollback) | `$SITE_DIR/site-prev` |
| nginx config (reference copy) | `deploy/nginx/invoicor.com.conf` |
| Deploy settings (not in git) | `deploy/.env` |

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

## B. Every deploy

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

# 3. Build, upload and switch live (runs lint + typecheck + build first; stops on any error)
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

## C. After the first Next.js deploy (one time)

1. Check a few pages in the browser and with `curl -s https://invoicor.com/templates/plumbing | grep "<h1"`:
   you should see the real heading in the raw HTML.
2. `curl -sI https://www.invoicor.com/` → `301` to `https://invoicor.com/`.
3. `curl -sI https://invoicor.com/does-not-exist` → `404`.
4. Check `https://invoicor.com/llms.txt` and `https://invoicor.com/d3e8f87315d5d18c667a3f10ea082f94.txt`
   (the IndexNow key) both load.
5. Google Search Console + Bing Webmaster Tools: resubmit `https://invoicor.com/sitemap.xml`,
   then "Inspect URL" → "Request indexing" for the home page and your top pages.
6. Keep an eye on Search Console → Pages for 2–4 weeks (see ROADMAP chunk 29).

## Without the script (manual fallback)

```bash
npm ci && npm run check
rsync -az --delete out/ user@server:/var/www/invoicor.com/site-new/
ssh user@server 'cd /var/www/invoicor.com && rm -rf site-prev && mv site site-prev && mv site-new site'
```
