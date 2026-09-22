# Local Deploy Setup

How to configure your local machine to push-deploy to the VPS.

## Prerequisites

- SSH key authentication to the VPS must already be working.
- The VPS setup script (`setup_vps_deploy.sh`) must have been run on the server.

## Configuration

```
VPS_HOST=<server-ip>
VPS_PORT=22
VPS_USER=<user>
REPO_PATH=/opt/sady-celmerow-deploy.git
```

## Step 1: Add the VPS as a Git Remote

```bash
git remote add vps ssh://<user>@<server-ip>/opt/sady-celmerow-deploy.git
```

### Alternative: Using SSH Config Alias

If you have an SSH config alias (e.g., `dendigital`), you can use it instead:

Add to `~/.ssh/config` (if not already present):

```
Host dendigital
    HostName <server-ip>
    User <user>
    Port 22
    IdentityFile ~/.ssh/id_rsa
```

Then use:

```bash
git remote add vps dendigital:/opt/sady-celmerow-deploy.git
```

## Step 2: First Push

```bash
git push vps main
```

This triggers the `post-receive` hook on the VPS, which:

1. Checks out the code to `/srv/sady-celmerow`
2. Builds the Docker image
3. Restarts the container on port 3003

## Turnstile keys (contact form anti-spam)

Keys are **not** something you invent locally. You create them in **Cloudflare**:

1. Log in at [dash.cloudflare.com](https://dash.cloudflare.com) (a free Cloudflare account is enough).
2. Open **Turnstile** in the sidebar → **Add widget**.
3. Give it a name (e.g. `sadycelmerow`), choose **Managed**, and under hostnames add `sadycelmerow.pl`, `www.sadycelmerow.pl`, and `localhost` if you test locally.
4. After creation, copy **Site key** and **Secret key**.

On the VPS, put them in `/srv/sady-celmerow/.env.local` (same file as Gmail):

```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=paste_site_key_here
TURNSTILE_SECRET_KEY=paste_secret_key_here
```

Because `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is baked in at **build** time, after changing it run a deploy (`git push vps main`) or manually: `cd /srv/sady-celmerow && docker compose up -d --build`.

For **local dev only**, Cloudflare documents [dummy keys that always pass](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) — see `.env.local.example`.

## Step 3: Verify

Open in your browser:

```
http://<server-ip>:3003
```

You should see the "Sady Celmerów" placeholder page.

## Subsequent Deploys

After any changes, simply:

```bash
git add .
git commit -m "your message"
git push vps main
```

## Troubleshooting

- **Check deploy log on VPS:**

  ```bash
  ssh <user>@<server-ip> "tail -50 /srv/sady-celmerow/deploy.log"
  ```

- **Check container status:**

  ```bash
  ssh <user>@<server-ip> "docker ps | grep sady-celmerow"
  ```

- **Check container logs:**

  ```bash
  ssh <user>@<server-ip> "docker logs sady-celmerow --tail 50"
  ```

- **Manual rebuild on VPS:**
  ```bash
  ssh <user>@<server-ip> "cd /srv/sady-celmerow && docker compose up -d --build"
  ```
