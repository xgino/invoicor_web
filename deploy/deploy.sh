#!/usr/bin/env bash
# deploy/deploy.sh: the manual fallback for the automatic deploy (DEPLOY.md sections E and F).
# Builds the static site on your Mac and uploads it to the VPS website folder.
#
#   bash deploy/deploy.sh             build main, upload, switch live (keeps the previous version)
#   bash deploy/deploy.sh --rollback  switch back to the previous version
#
# Needs deploy/.env (copy deploy/.env.example). The server only needs nginx: no Node.js, no .env.
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
: "${WEB_PATH:?set WEB_PATH in deploy/.env}"

mode="${1:-production}"

if [ "$mode" = "--rollback" ]; then
  ssh "$SSH_TARGET" "set -e; test -d '$WEB_PATH-prev' || { echo 'No previous version to roll back to.'; exit 1; }; mv '$WEB_PATH' '$WEB_PATH-rolled-back-\$(date +%Y%m%d-%H%M%S)'; mv '$WEB_PATH-prev' '$WEB_PATH'"
  echo "Rolled back. The bad version was kept on the server as $WEB_PATH-rolled-back-<date>."
  exit 0
fi

if [ "$mode" != "production" ]; then
  echo "Unknown option '$mode'. Use --rollback or nothing."
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "You have uncommitted changes. Commit or stash them first."
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

echo "==> Uploading to $SSH_TARGET:$WEB_PATH-new"
rsync -az --delete out/ "$SSH_TARGET:$WEB_PATH-new/"
echo "==> Switching"
ssh "$SSH_TARGET" "set -e; rm -rf '$WEB_PATH-prev'; if [ -d '$WEB_PATH' ]; then mv '$WEB_PATH' '$WEB_PATH-prev'; fi; mv '$WEB_PATH-new' '$WEB_PATH'"

echo "==> Checking the live site"
status="$(curl -s -o /dev/null -w '%{http_code}' https://invoicor.com/)"
missing="$(curl -s -o /dev/null -w '%{http_code}' https://invoicor.com/this-page-does-not-exist)"
echo "    https://invoicor.com/ -> $status (expect 200)"
echo "    unknown page          -> $missing (expect 404)"
echo "==> Notifying search engines (IndexNow)"
node scripts/indexnow.mjs "$prev_sitemap" out/sitemap.xml || true
rm -f "$prev_sitemap"

echo "Done ($(git log -1 --format='%h %s')). Undo with: bash deploy/deploy.sh --rollback"
