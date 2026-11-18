#!/usr/bin/env bash
# deploy/deploy.sh: the only command you run day to day. On your Mac, in the repo root, while on dev:
#   bash deploy/deploy.sh             go live: dev is merged into main with a pull request; GitHub runs
#                                     every check and test, and only when all are green it uploads
#                                     the site to the server. You see what changed on the live site.
#   bash deploy/deploy.sh --rollback  the previous version back (under a minute)
#   bash deploy/deploy.sh --direct    without GitHub (if GitHub is down): checks, tests and build on
#                                     your Mac, then the same upload
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR/.."

if [ ! -f "$DIR/.env" ]; then
    echo "deploy/.env is missing: cp deploy/.env.example deploy/.env and fill it in"
    exit 1
fi
set -a
# shellcheck source=/dev/null
. "$DIR/.env"
set +a
: "${SERVER_IP:?set SERVER_IP in deploy/.env}"
: "${DOMAIN:?set DOMAIN in deploy/.env}"
SERVER_USER="${SERVER_USER:-root}"
DEPLOY_USER="${DEPLOY_USER:-invoicor_web}"
WEB_PATH="${WEB_PATH:-/var/www/$DOMAIN/web}"
ADMIN="$SERVER_USER@$SERVER_IP"
SUDO=""
[ "$SERVER_USER" = "root" ] || SUDO="sudo"

page_text() {
    # the visible text of the live home page, one line per piece of text
    curl -fsSL "https://$DOMAIN" 2>/dev/null \
        | perl -0pe 's/<script.*?<\/script>//gs; s/<style.*?<\/style>//gs; s/<[^>]+>/\n/g' \
        | sed 's/^[[:space:]]*//; s/[[:space:]]*$//' | grep -v '^$' || true
}

rollback() {
    ssh "$ADMIN" "$SUDO bash -c 'set -e; test -d \"$WEB_PATH-prev\" || { echo \"No previous version to roll back to.\"; exit 1; }
mv \"$WEB_PATH\" \"$WEB_PATH-rolled-back-\$(date +%Y%m%d-%H%M%S)\"; mv \"$WEB_PATH-prev\" \"$WEB_PATH\"'"
    echo "--- rolled back. The bad version is kept on the server as $WEB_PATH-rolled-back-<date>."
}

direct() {
    if [ "$(git rev-parse --abbrev-ref HEAD)" != "main" ] || [ -n "$(git status --porcelain)" ]; then
        echo "--direct deploys main: git checkout main && git pull, with nothing uncommitted"
        exit 1
    fi
    npm ci --no-audit --no-fund
    npm run check
    rsync -az --delete out/ "$ADMIN:$WEB_PATH-new/"
    ssh "$ADMIN" "$SUDO bash -c 'set -e; chown -R $DEPLOY_USER:$DEPLOY_USER \"$WEB_PATH-new\"; rm -rf \"$WEB_PATH-prev\"
[ -d \"$WEB_PATH\" ] && mv \"$WEB_PATH\" \"$WEB_PATH-prev\"; mv \"$WEB_PATH-new\" \"$WEB_PATH\"'"
    echo "--- uploaded. Undo with: bash deploy/deploy.sh --rollback"
}

go_live() {
    command -v gh > /dev/null || { echo "install the GitHub command line: brew install gh"; exit 1; }
    if [ "$(git rev-parse --abbrev-ref HEAD)" != "dev" ]; then
        echo "you are not on dev. Go back with: git checkout dev"
        exit 1
    fi
    if [ -n "$(git status --porcelain)" ]; then
        echo "commit your work first: git add . && git commit -m \"what you did\""
        exit 1
    fi

    git push --quiet origin dev
    git fetch --quiet origin main
    if git diff --quiet origin/main dev; then
        echo "main already has everything dev has, nothing new to deploy."
        exit 0
    fi
    if [ -n "$(git log --oneline --no-merges dev..origin/main)" ]; then
        echo "main has commits dev doesn't have. Bring them into dev first: git merge origin/main"
        exit 1
    fi

    local before after url sha run_id
    before="$(mktemp)"
    page_text > "$before"

    url="$(gh pr list --head dev --base main --state open --json url -q '.[0].url')"
    if [ -z "$url" ]; then
        url="$(gh pr create --base main --head dev \
            --title "Deploy: $(git log -1 --format=%s dev)" \
            --body "$(git log --oneline --no-merges origin/main..dev)")"
    fi
    gh pr merge "$url" --merge > /dev/null
    echo "--- merged into main: $url"

    # dev takes over the merge commit, so next time nothing can clash
    git fetch --quiet origin main
    git merge --quiet --ff-only origin/main
    git push --quiet origin dev
    sha="$(git rev-parse origin/main)"

    echo "--- GitHub: every check and test, then the upload. About 4 minutes."
    run_id=""
    for _ in $(seq 1 30); do
        run_id="$(gh run list --commit "$sha" --branch main --limit 1 --json databaseId -q '.[0].databaseId')"
        [ -n "$run_id" ] && break
        sleep 4
    done
    [ -n "$run_id" ] || { echo "!!! GitHub didn't start a run. See the Actions tab."; exit 1; }
    if ! gh run watch "$run_id" --exit-status --interval 10 > /dev/null; then
        echo "!!! not live: something failed, so nothing changed on the server."
        echo "    Why: gh run view $run_id --log-failed"
        exit 1
    fi
    gh run view "$run_id" --json jobs -q '.jobs[] | "--- \(.name): \(.conclusion)"'
    if gh run view "$run_id" --log 2>/dev/null | grep -q "Deploy skipped"; then
        echo "!!! checks green, but the deploy secrets aren't set: run bash deploy/setup.sh"
        exit 1
    fi

    after="$(mktemp)"
    page_text > "$after"
    if diff -q "$before" "$after" > /dev/null; then
        echo "--- https://$DOMAIN: no visible text changed on the home page"
    else
        echo "--- https://$DOMAIN: text that changed on the home page"
        diff "$before" "$after" | grep '^[<>]' | sed 's/^< /    before: /; s/^> /    now:    /' | head -40 || true
    fi
    rm -f "$before" "$after"
    echo "--- live. Undo with: bash deploy/deploy.sh --rollback"
}

case "${1:-}" in
    "") go_live ;;
    --rollback) rollback ;;
    --direct) direct ;;
    *) echo "use: bash deploy/deploy.sh [--rollback | --direct]"; exit 1 ;;
esac
