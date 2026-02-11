# Local Deploy Setup

How to configure your local machine to push-deploy to the VPS.

## Prerequisites

- SSH key authentication to the VPS must already be working.
- The VPS setup script (`setup_vps_deploy.sh`) must have been run on the server.

## Configuration

```
VPS_HOST=91.98.112.186
VPS_PORT=22
VPS_USER=root
REPO_PATH=/opt/repos/sady-celmerow.git
```

## Step 1: Add the VPS as a Git Remote

```bash
git remote add vps ssh://root@91.98.112.186/opt/repos/sady-celmerow.git
```

### Alternative: Using SSH Config Alias

If you have an SSH config alias (e.g., `dendigital`), you can use it instead:

Add to `~/.ssh/config` (if not already present):

```
Host dendigital
    HostName 91.98.112.186
    User root
    Port 22
    IdentityFile ~/.ssh/id_rsa
```

Then use:

```bash
git remote add vps dendigital:/opt/repos/sady-celmerow.git
```

## Step 2: First Push

```bash
git push vps main
```

This triggers the `post-receive` hook on the VPS, which:

1. Checks out the code to `/opt/apps/sady-celmerow`
2. Builds the Docker image
3. Restarts the container on port 3003

## Step 3: Verify

Open in your browser:

```
http://91.98.112.186:3003
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
  ssh root@91.98.112.186 "tail -50 /opt/apps/sady-celmerow/deploy.log"
  ```

- **Check container status:**

  ```bash
  ssh root@91.98.112.186 "docker ps | grep sady-celmerow"
  ```

- **Check container logs:**

  ```bash
  ssh root@91.98.112.186 "docker logs sady-celmerow --tail 50"
  ```

- **Manual rebuild on VPS:**
  ```bash
  ssh root@91.98.112.186 "cd /opt/apps/sady-celmerow && docker compose up -d --build"
  ```
