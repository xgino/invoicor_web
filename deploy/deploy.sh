#!/usr/bin/env bash
# deploy/deploy.sh: build the static site on your Mac and upload it to the VPS.
#
#   bash deploy/deploy.sh             build main, upload, switch live (keeps the previous version)
#   bash deploy/deploy.sh --rollback  switch back to the previous version
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

if [ "${1:-}" = "--rollback" ]; then
  ssh "$SSH_TARGET" "set -e; cd '$SITE_DIR'; test -d site-prev || { echo 'No previous version to roll back to.'; exit 1; }; mv site site-rolled-back-\$(date +%Y%m%d-%H%M%S); mv site-prev site"
  echo "Rolled back. The bad version was kept on the server as site-rolled-back-<date>."
  exit 0
fi

branch="$(git rev-parse --abbrev-ref HEAD)"
if [ "$branch" != "main" ]; then
  echo "Deploy from main (you are on '$branch'). Run: git checkout main && git merge dev"
  exit 1
fi
if [ -n "$(git status --porcelain)" ]; then
  echo "You have uncommitted changes. Commit or stash them first."
  exit 1
fi

echo "==> Installing dependencies"
npm ci --no-audit --no-fund

echo "==> Lint, type check and build (out/)"
npm run check

echo "==> Uploading to $SSH_TARGET:$SITE_DIR/site-new"
ssh "$SSH_TARGET" "mkdir -p '$SITE_DIR'"
rsync -az --delete out/ "$SSH_TARGET:$SITE_DIR/site-new/"

echo "==> Switching live"
ssh "$SSH_TARGET" "set -e; cd '$SITE_DIR'; rm -rf site-prev; if [ -d site ]; then mv site site-prev; fi; mv site-new site"

echo "==> Checking the live site"
status="$(curl -s -o /dev/null -w '%{http_code}' https://invoicor.com/)"
missing="$(curl -s -o /dev/null -w '%{http_code}' https://invoicor.com/this-page-does-not-exist)"
echo "    https://invoicor.com/ -> $status (expect 200)"
echo "    unknown page          -> $missing (expect 404)"
echo "Done ($(git log -1 --format='%h %s')). Undo with: bash deploy/deploy.sh --rollback"
