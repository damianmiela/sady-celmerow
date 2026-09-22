# Sady Celmerów

The website of Sady Celmerów, a family orchard in the Trzebnica hills in Poland that
sells apples and juices.

**Live:** https://sadycelmerow.pl, in use by the orchard. The site is in Polish.

## What it does

- **Pages for the orchard:** a home page with the farm's story and customer reviews,
  apple varieties, juices with a juice picker, a photo gallery with a lightbox, and
  legal information.
- **Where to buy:** an interactive map (Leaflet, OpenStreetMap) of the orchard's
  sales points.
- **Contact form:** a server route sends messages through Gmail over SMTP. Spam is
  kept out by Cloudflare Turnstile, a hidden honeypot field and a minimum fill-in
  time.
- **Fast and findable:** images are served as AVIF or WebP, metadata and Open Graph
  tags are set on every page, and there is a sitemap. PageSpeed Insights (Lighthouse
  13.5, mobile, 22 Sep 2026): Performance 85, Accessibility 98, Best Practices 100,
  SEO 100.

## Tech

- Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS
- Framer Motion for animations, Embla for carousels, react-leaflet for the map
- nodemailer and Cloudflare Turnstile for the contact form
- Production: a standalone Next.js build in Docker behind Nginx Proxy Manager,
  deployed by a git push to the server (`scripts/post-receive`,
  `scripts/setup_vps_deploy.sh`, `scripts/deploy_local_setup.md`)

## Run it locally

You need Node.js 20. In the cloned folder:

```bash
npm ci
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000. The contact form needs a Gmail address and app password
in `.env.local`; everything else works without them. The Turnstile keys in the example
are Cloudflare's test keys, which always pass.

## How it was built

Built by Damian Miela; much of the code was written with Claude, Anthropic's AI coding
assistant, under my direction.

## License

All rights reserved. The code is public so you can read it; please ask before reusing
any of it. The photos and texts belong to Sady Celmerów.
