#!/usr/bin/env bash
# deploy/setup.sh: once, on your Mac in the repo root (safe to run again, it skips what exists).
#   bash deploy/setup.sh               the server user, its key and the GitHub secrets. Changes nothing
#                                      the visitors see: not nginx, not the live site, not the API.
#   bash deploy/setup.sh info          writes deploy/server-info.txt (the nginx details Claude needs
#                                      to write the new nginx file) and prints NGINX_SITE
#   bash deploy/setup.sh launch        launch day, after the first deploy: the new nginx file goes
#                                      live (backup first, tested, undone by itself if the site fails)
#   bash deploy/setup.sh undo-launch   back to the old site and the old nginx file
#
# The website is static files: the server needs no Node.js and no .env for it. The API is a separate
# repo with its own deploy; nothing here touches it.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
say() { echo "--- $*"; }

load_settings() {
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
    PARENT="$(dirname "$WEB_PATH")"
    ADMIN="$SERVER_USER@$SERVER_IP"
    SUDO=""
    [ "$SERVER_USER" = "root" ] || SUDO="sudo"
}

remote() { ssh "$ADMIN" "$@"; }

checks() {
    command -v gh > /dev/null || { echo "install the GitHub command line: brew install gh"; exit 1; }
    gh auth status > /dev/null 2>&1 || { echo "log in first: gh auth login"; exit 1; }
    ssh -o BatchMode=yes -o ConnectTimeout=10 "$ADMIN" true 2>/dev/null \
        || { echo "cannot log in with: ssh $ADMIN  (without a password: ssh-copy-id $ADMIN)"; exit 1; }
    REPO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
    say "repo $REPO, server $SERVER_IP, website folder $WEB_PATH"
}

# ---------- once: server user, key, GitHub secrets ----------

setup() {
    # 1. the deploy user: may create and rename web, web-new and web-prev in the domain folder,
    #    nothing else (no sudo, no access to the API)
    remote "$SUDO bash -s" <<REMOTE
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive
missing=""
for pkg in rsync acl; do dpkg -s \$pkg > /dev/null 2>&1 || missing="\$missing \$pkg"; done
[ -z "\$missing" ] || { apt-get update -qq && apt-get install -y -qq \$missing; }
id -u $DEPLOY_USER > /dev/null 2>&1 || useradd --system --create-home --shell /bin/bash $DEPLOY_USER
mkdir -p "$PARENT"
setfacl -m u:$DEPLOY_USER:rwx "$PARENT"
# the current website folder (the old site) becomes the deploy user's, so it can be swapped out
for d in "$WEB_PATH" "$WEB_PATH-prev" "$WEB_PATH-new"; do [ -d "\$d" ] && chown -R $DEPLOY_USER:$DEPLOY_USER "\$d"; done
sudo -u $DEPLOY_USER -H bash -c 'mkdir -p ~/.ssh && chmod 700 ~/.ssh && touch ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys'
REMOTE
    say "server user $DEPLOY_USER ready (writes only $PARENT/web*)"

    # 2. a key for GitHub, made here and never stored on your Mac
    local tmp
    tmp="$(mktemp -d)"
    ssh-keygen -q -t ed25519 -N "" -C "github-actions-$DEPLOY_USER" -f "$tmp/key"
    remote "$SUDO sudo -u $DEPLOY_USER -H bash -c 'grep -v github-actions-$DEPLOY_USER ~/.ssh/authorized_keys > ~/.ssh/ak.tmp || true
mv ~/.ssh/ak.tmp ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys
echo \"$(cat "$tmp/key.pub")\" >> ~/.ssh/authorized_keys'"
    ssh -i "$tmp/key" -o IdentitiesOnly=yes -o BatchMode=yes -o StrictHostKeyChecking=accept-new \
        "$DEPLOY_USER@$SERVER_IP" "test -w '$PARENT'" \
        || { echo "!!! $DEPLOY_USER can't log in or can't write $PARENT"; rm -rf "$tmp"; exit 1; }
    say "GitHub's key works for $DEPLOY_USER@$SERVER_IP"

    # 3. the GitHub environment "production": only main may deploy
    gh api -X PUT "repos/$REPO/environments/production" --silent --input - <<'JSON'
{"deployment_branch_policy": {"protected_branches": false, "custom_branch_policies": true}}
JSON
    gh api -X POST "repos/$REPO/environments/production/deployment-branch-policies" \
        -f name=main -f type=branch --silent 2>/dev/null || true
    gh api -X DELETE "repos/$REPO/environments/staging" --silent 2>/dev/null || true

    # 4. the secrets the deploy job reads (.github/workflows/check.yml)
    gh secret set DEPLOY_SSH_KEY --env production --repo "$REPO" < "$tmp/key"
    gh secret set DEPLOY_SSH_TARGET --env production --repo "$REPO" --body "$DEPLOY_USER@$SERVER_IP"
    gh secret set DEPLOY_WEB_PATH --env production --repo "$REPO" --body "$WEB_PATH"
    ssh-keyscan -t ed25519 "$SERVER_IP" 2>/dev/null | gh secret set DEPLOY_KNOWN_HOSTS --env production --repo "$REPO"
    rm -rf "$tmp"
    say "GitHub secrets set (environment production, branch main only)"

    cat <<NEXT

Done. Nothing the visitors see has changed yet. Next:
  1. bash deploy/setup.sh info      then tell Claude, it writes the new nginx file
  2. launch day: bash deploy/deploy.sh, then bash deploy/setup.sh launch
NEXT
}

# ---------- the nginx details for Claude ----------

info() {
    local out="$DIR/server-info.txt"
    remote "$SUDO bash -s" > "$out" <<REMOTE
echo "== nginx -v"; nginx -v 2>&1
echo; echo "== files in sites-enabled that serve $DOMAIN"
grep -rl "server_name[^;]*$DOMAIN" /etc/nginx/sites-enabled/ 2>/dev/null | while read -r f; do echo "\$f -> \$(readlink -f "\$f")"; done
for f in \$(grep -rl "server_name[^;]*$DOMAIN" /etc/nginx/sites-enabled/ 2>/dev/null); do
  echo; echo "== content of \$(readlink -f "\$f")"; cat "\$f"
done
echo; echo "== ls -la $PARENT"; ls -la "$PARENT"
echo; echo "== what's in $WEB_PATH"; ls "$WEB_PATH" 2>/dev/null | head -20
REMOTE
    say "written to deploy/server-info.txt (not in git). Tell Claude: \"server-info is there\"."
    local site
    site="$(grep -A1 "files in sites-enabled" "$out" | tail -1 | sed 's/.*-> //')"
    [ -n "$site" ] && say "put this in deploy/.env: NGINX_SITE=$site"
}

# ---------- launch day ----------

check_live() {
    local home page missing
    home="$(curl -s -o /dev/null -w '%{http_code}' "https://$DOMAIN/")"
    page="$(curl -s -o /dev/null -w '%{http_code}' "https://$DOMAIN/templates/plumbing")"
    missing="$(curl -s -o /dev/null -w '%{http_code}' "https://$DOMAIN/this-page-does-not-exist")"
    echo "    home $home, template page $page (expect 200), unknown page $missing (expect 404)"
    [ "$home" = 200 ] && [ "$page" = 200 ] && [ "$missing" = 404 ]
}

launch() {
    : "${NGINX_SITE:?run bash deploy/setup.sh info first and put NGINX_SITE in deploy/.env}"
    local conf="$DIR/nginx/$DOMAIN.conf"
    [ -f "$conf" ] || { echo "$conf is missing (Claude writes it from deploy/server-info.txt)"; exit 1; }
    remote "test -f '$WEB_PATH/index.html' && test -f '$WEB_PATH/404.html'" \
        || { echo "the new site isn't uploaded yet: run bash deploy/deploy.sh first"; exit 1; }

    say "backups: the nginx file and the old site"
    remote "$SUDO bash -c 'set -e; [ -f ~/nginx-$DOMAIN-before-launch.conf ] || cp \"$NGINX_SITE\" ~/nginx-$DOMAIN-before-launch.conf
[ -d \"$WEB_PATH-prev\" ] && [ ! -d ~/web-old-site-backup ] && cp -a \"$WEB_PATH-prev\" ~/web-old-site-backup || true'"

    say "new nginx file"
    scp -q "$conf" "$ADMIN:/tmp/$DOMAIN.conf"
    if ! remote "$SUDO bash -c 'cp /tmp/$DOMAIN.conf \"$NGINX_SITE\" && nginx -t -q && systemctl reload nginx'"; then
        echo "!!! nginx refused the new file, putting the old one back"
        remote "$SUDO bash -c 'cp ~/nginx-$DOMAIN-before-launch.conf \"$NGINX_SITE\" && nginx -t -q && systemctl reload nginx'"
        exit 1
    fi
    sleep 2
    if ! check_live; then
        echo "!!! the site doesn't answer as expected, putting the old nginx file back"
        remote "$SUDO bash -c 'cp ~/nginx-$DOMAIN-before-launch.conf \"$NGINX_SITE\" && nginx -t -q && systemctl reload nginx'"
        exit 1
    fi
    REPO="${REPO:-$(gh repo view --json nameWithOwner -q .nameWithOwner)}"
    gh variable set PRODUCTION_LIVE --repo "$REPO" --body true
    say "live. From now on every deploy checks the live site, rolls back on failure and pings IndexNow."
    say "next: DEPLOY.md section D (Search Console, sitemap)"
}

undo_launch() {
    say "back to the old nginx file and the old site"
    remote "$SUDO bash -c 'set -e; cp ~/nginx-$DOMAIN-before-launch.conf \"$NGINX_SITE\"
if [ -d ~/web-old-site-backup ]; then rm -rf \"$WEB_PATH-new-site\"; mv \"$WEB_PATH\" \"$WEB_PATH-new-site\"; cp -a ~/web-old-site-backup \"$WEB_PATH\"; fi
nginx -t -q && systemctl reload nginx'"
    REPO="${REPO:-$(gh repo view --json nameWithOwner -q .nameWithOwner)}"
    gh variable set PRODUCTION_LIVE --repo "$REPO" --body false
    say "old site back. The new one is kept as $WEB_PATH-new-site."
}

load_settings
case "${1:-}" in
    "") checks; setup ;;
    info) info ;;
    launch) checks; launch ;;
    undo-launch) checks; undo_launch ;;
    *) echo "use: bash deploy/setup.sh [info | launch | undo-launch]"; exit 1 ;;
esac
