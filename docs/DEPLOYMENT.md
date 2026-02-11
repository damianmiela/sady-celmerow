# Deployment Guide — Sady Celmerów

## Architecture Overview

```
Local PC  --git push vps main-->  VPS bare repo  --post-receive hook-->  Docker rebuild  -->  Live on :3003
```

- **Local dev:** Next.js dev server on `localhost:3000`
- **Production:** Docker container on VPS, port `3003`
- **Deploy trigger:** `git push vps main`

---

## Prerequisites

### Local Machine

- Node.js 20+ and npm
- Git

### VPS (91.98.112.186)

- Docker Engine 24+
- Docker Compose v2 (comes with Docker Desktop or `docker-compose-plugin`)
- Git
- SSH key authentication from your local machine

---

## 1. Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:3000 — you should see the placeholder page.

### Other useful commands

```bash
npm run build       # Production build (test locally)
npm run lint        # ESLint check
npm run format      # Prettier auto-format
npm run format:check  # Prettier check without changes
```

---

## 2. Local Docker Test (Optional)

```bash
# Build and run locally via Docker
docker compose up --build

# Visit http://localhost:3003
```

This mirrors the exact production setup on the VPS.

---

## 3. VPS Initial Setup (One-Time)

### 3.1 Upload scripts to VPS

From your local project root:

```bash
scp scripts/setup_vps_deploy.sh root@91.98.112.186:/tmp/
scp scripts/post-receive root@91.98.112.186:/tmp/
```

### 3.2 Run setup on VPS

```bash
ssh root@91.98.112.186 "bash /tmp/setup_vps_deploy.sh"
```

This creates:

- Bare git repo at `/opt/sady-celmerow-deploy.git`
- Working directory at `/srv/sady-celmerow`
- Installs the `post-receive` hook

### 3.3 Verify Docker on VPS

```bash
ssh root@91.98.112.186 "docker --version && docker compose version"
```

If Docker is not installed, install it:

```bash
ssh root@91.98.112.186
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker
```

---

## 4. Configure Local Git Remote

```bash
git remote add vps ssh://root@91.98.112.186/opt/sady-celmerow-deploy.git
```

**Alternative** — if you have an SSH config alias `dendigital`:

```bash
git remote add vps dendigital:/opt/sady-celmerow-deploy.git
```

---

## 5. Deploy

```bash
git push vps main
```

The push triggers the `post-receive` hook which:

1. Checks out the latest code to `/srv/sady-celmerow`
2. Runs `docker compose up -d --build`
3. Logs output to `/srv/sady-celmerow/deploy.log`

---

## 6. Verify Deployment

Open: http://91.98.112.186:3003

You should see the "Sady Celmerów — Strona w przygotowaniu" placeholder page.

---

## Troubleshooting

### View deploy logs

```bash
ssh root@91.98.112.186 "tail -100 /srv/sady-celmerow/deploy.log"
```

### Check running containers

```bash
ssh root@91.98.112.186 "docker ps | grep sady-celmerow"
```

### View container logs

```bash
ssh root@91.98.112.186 "docker logs sady-celmerow --tail 50"
```

### Manual rebuild on VPS

```bash
ssh root@91.98.112.186 "cd /srv/sady-celmerow && docker compose up -d --build"
```

### Full restart from scratch

```bash
ssh root@91.98.112.186 "cd /srv/sady-celmerow && docker compose down && docker compose up -d --build"
```

---

## Configuration Reference

| Variable   | Value                              |
| ---------- | ---------------------------------- |
| VPS_HOST   | 91.98.112.186                      |
| VPS_PORT   | 22                                 |
| APP_NAME   | sady-celmerow                      |
| APP_PORT   | 3003 (host) → 3000 (container)     |
| REPO_DIR   | /opt/sady-celmerow-deploy.git      |
| APP_DIR    | /srv/sady-celmerow                 |
| DEPLOY_LOG | /srv/sady-celmerow/deploy.log      |

---

## Verification Checklist

- [ ] `npm run dev` works locally (http://localhost:3000)
- [ ] `docker compose up --build` works locally (http://localhost:3003)
- [ ] VPS setup script ran without errors
- [ ] `git remote -v` shows the `vps` remote
- [ ] `git push vps main` triggers build on VPS
- [ ] http://91.98.112.186:3003 shows the placeholder page
