#!/usr/bin/env bash
# deploy/deploy.sh: build the static site on your Mac and upload it to the VPS.
#
#   bash deploy/deploy.sh             build main, upload, switch live (keeps the previous version)
#   bash deploy/deploy.sh --staging   build the current branch, upload to staging.invoicor.com
#   bash deploy/deploy.sh --rollback  switch production back to the previous version
#
# Needs deploy/.env (copy deploy/.env.example). The server only needs nginx: no Node.js.
# The switch is a folder rename, so visitors never see a half-uploaded site.
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."

if [ ! -f deploy/.env ]; then
  echo "deploy/.env is missing: cp deploy/.env.example deploy/.env and fill it in."
  exit 1
fi
# shellcheck source=/dev/null
. deploy/.env
: "${SSH_TARGET:?set SSH_TARGET in deploy/.env}"
: "${SITE_DIR:?set SITE_DIR in deploy/.env}"

mode="${1:-production}"

# Upload out/ to <dir>/site-new, then swap it in: site -> site-prev, site-new -> site.
upload_and_switch() {
  local dir="$1"
  echo "==> Uploading to $SSH_TARGET:$dir/site-new"
  ssh "$SSH_TARGET" "mkdir -p '$dir'"
  rsync -az --delete out/ "$SSH_TARGET:$dir/site-new/"
  echo "==> Switching"
  ssh "$SSH_TARGET" "set -e; cd '$dir'; rm -rf site-prev; if [ -d site ]; then mv site site-prev; fi; mv site-new site"
}

if [ "$mode" = "--rollback" ]; then
  ssh "$SSH_TARGET" "set -e; cd '$SITE_DIR'; test -d site-prev || { echo 'No previous version to roll back to.'; exit 1; }; mv site site-rolled-back-\$(date +%Y%m%d-%H%M%S); mv site-prev site"
  echo "Rolled back. The bad version was kept on the server as site-rolled-back-<date>."
  exit 0
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "You have uncommitted changes. Commit or stash them first."
  exit 1
fi

if [ "$mode" = "--staging" ]; then
  : "${STAGING_DIR:?set STAGING_DIR in deploy/.env (see deploy/.env.example)}"
  echo "==> Staging build of '$(git rev-parse --abbrev-ref HEAD)'"
  npm ci --no-audit --no-fund
  npm run check
  echo "==> Rebuilding without analytics (staging visits must not count)"
  NEXT_PUBLIC_ANALYTICS=false npm run build
  upload_and_switch "$STAGING_DIR"
  auth=()
  if [ -n "${STAGING_AUTH:-}" ]; then auth=(-u "$STAGING_AUTH"); fi
  status="$(curl -s ${auth[@]+"${auth[@]}"} -o /dev/null -w '%{http_code}' https://staging.invoicor.com/)"
  echo "    https://staging.invoicor.com/ -> $status (expect 200)"
  echo "Done. Next: node scripts/parity-check.mjs --new https://staging.invoicor.com${STAGING_AUTH:+ --auth \$STAGING_AUTH}"
  exit 0
fi

if [ "$mode" != "production" ]; then
  echo "Unknown option '$mode'. Use --staging, --rollback or nothing."
  exit 1
fi

branch="$(git rev-parse --abbrev-ref HEAD)"
if [ "$branch" != "main" ]; then
  echo "Deploy from main (you are on '$branch'). Run: git checkout main && git merge dev"
  exit 1
fi

echo "==> Installing dependencies"
npm ci --no-audit --no-fund

echo "==> Checks, tests and build (out/)"
npm run check

echo "==> Saving the live sitemap (to find changed pages for IndexNow)"
prev_sitemap="$(mktemp)"
curl -s --max-time 15 https://invoicor.com/sitemap.xml -o "$prev_sitemap" || true

upload_and_switch "$SITE_DIR"

echo "==> Checking the live site"
status="$(curl -s -o /dev/null -w '%{http_code}' https://invoicor.com/)"
missing="$(curl -s -o /dev/null -w '%{http_code}' https://invoicor.com/this-page-does-not-exist)"
echo "    https://invoicor.com/ -> $status (expect 200)"
echo "    unknown page          -> $missing (expect 404)"
echo "==> Notifying search engines (IndexNow)"
node scripts/indexnow.mjs "$prev_sitemap" out/sitemap.xml || true
rm -f "$prev_sitemap"

echo "Done ($(git log -1 --format='%h %s')). Undo with: bash deploy/deploy.sh --rollback"
