#!/bin/bash
#
# setup_vps_deploy.sh
# Run this ONCE on the VPS to set up the bare repo and deployment structure.
# Usage: bash setup_vps_deploy.sh
# Idempotent — safe to re-run.
#
set -e

# ============================================================
# CONFIGURATION — adjust if needed
# ============================================================
APP_NAME="sady-celmerow"
REPO_DIR="/opt/${APP_NAME}-deploy.git"
APP_DIR="/srv/${APP_NAME}"
HOOK_SOURCE="/tmp/post-receive"

# ============================================================
# 1. Create directory structure
# ============================================================
echo ">>> Creating directories..."
mkdir -p "${REPO_DIR}"
mkdir -p "${APP_DIR}"

# ============================================================
# 2. Initialize bare repo (skip if already exists)
# ============================================================
if [ ! -f "${REPO_DIR}/HEAD" ]; then
    echo ">>> Initializing bare repository at ${REPO_DIR}..."
    git init --bare "${REPO_DIR}"
    git -C "${REPO_DIR}" symbolic-ref HEAD refs/heads/main
else
    echo ">>> Bare repository already exists at ${REPO_DIR}, skipping init."
fi

# ============================================================
# 3. Install post-receive hook
# ============================================================
HOOK_DEST="${REPO_DIR}/hooks/post-receive"

if [ -f "${HOOK_SOURCE}" ]; then
    echo ">>> Installing post-receive hook from ${HOOK_SOURCE}..."
    cp "${HOOK_SOURCE}" "${HOOK_DEST}"
    chmod +x "${HOOK_DEST}"
    echo ">>> Hook installed at ${HOOK_DEST}"
else
    echo ">>> WARNING: ${HOOK_SOURCE} not found."
    echo "    Please upload it first:  scp scripts/post-receive root@<VPS_IP>:/tmp/"
    echo "    Then re-run this script."
fi

# ============================================================
# 4. Verify Docker is available
# ============================================================
echo ""
echo ">>> Checking Docker..."
if command -v docker > /dev/null 2>&1; then
    echo "    docker: $(docker --version)"
else
    echo "    WARNING: Docker not found. Please install Docker before deploying."
fi

if docker compose version > /dev/null 2>&1; then
    echo "    docker compose: $(docker compose version)"
else
    echo "    WARNING: docker compose not found. Please install Docker Compose v2."
fi

# ============================================================
# Done
# ============================================================
echo ""
echo "============================================"
echo " VPS setup complete for: ${APP_NAME}"
echo " Bare repo:   ${REPO_DIR}"
echo " Working dir: ${APP_DIR}"
echo " Hook:        ${REPO_DIR}/hooks/post-receive"
echo ""
echo " Next steps:"
echo "   1. On your local machine, add the remote:"
echo "      git remote add vps ssh://root@<VPS_IP>${REPO_DIR}"
echo "   2. Push to deploy:"
echo "      git push vps main"
echo "============================================"
