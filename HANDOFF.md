# Handoff Instructions — Yusafir Bangladesh Website Deployment

## What you are deploying

A **Next.js 16 (App Router)** marketing website for *Yusafir Bangladesh*, an education & travel consultancy. The site is feature-complete and has been tested locally. Your job is to push it to GitHub and deploy it to Vercel.

- **Target repo:** `https://github.com/SakiburRahmann/yusafir_website`
- **Framework:** Next.js 16.1.3 (App Router, Turbopack)
- **Language:** TypeScript + React 19
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Animations:** Framer Motion
- **3D globe:** Three.js (hero section)
- **Package manager:** `npm` (a `bun.lock` exists but `npm` works fine — Vercel will detect `package-lock.json` or fall back to `npm`)

---

## Step 1 — Clean the project before committing

The project root contains several directories and files that are **NOT part of the website** and must be excluded from the repo. They are leftovers from the dev environment and will bloat the repo or break the Vercel build if committed.

### Delete these directories entirely:
```bash
rm -rf examples/         # unrelated websocket demo code
rm -rf skills/           # unrelated AI skill library
rm -rf mini-services/    # unrelated side services
rm -rf db/               # local SQLite DB file (Vercel is serverless, no local FS)
rm -rf .zscripts/        # local dev helper scripts
rm -rf upload/           # local upload staging
rm -rf download/         # local download staging (if present)
rm -f  bun.lock          # we'll use npm
rm -f  tsconfig.tsbuildinfo
rm -f  dev.log server.log
rm -rf .next/            # stale build cache
```

### Keep these:
- `src/` — all the actual website code
- `public/` — static assets (logo, founder photo, etc.)
- `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `components.json`, `eslint.config.mjs`
- `prisma/` — keep the schema (even if unused on Vercel, it documents the data model)
- `.gitignore`, `README.md` (if present)

### Update `.gitignore`

Make sure these lines are present (most already are):
```
node_modules
.next
.env*
.vercel
*.log
next-env.d.ts
*.tsbuildinfo
/skills/
/examples/
/mini-services/
/db/
/.zscripts/
/upload/
/download/
```

---

## Step 2 — Fix the build configuration for Vercel

The current `package.json` has a build script designed for self-hosting (standalone output + `bun`). **Vercel does not need this** — it runs `next build` automatically. You must simplify the scripts before committing.

### Edit `package.json` — replace the `scripts` block with:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint ."
}
```

Remove the `db:*` scripts if you don't need Prisma on Vercel (this site doesn't use a database in production — it's a static marketing site). If you keep them, that's fine too, they just won't run.

### Edit `next.config.ts` — change `output: "standalone"` to remove that line:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai"],
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
```

**Why:** `output: "standalone"` produces a self-contained Node server bundle, which Vercel doesn't use. Leaving it doesn't break Vercel, but removing it makes the build faster and the deploy cleaner. The `ignoreBuildErrors: true` is intentional — there are some third-party type mismatches in shadcn dependencies that don't affect runtime.

---

## Step 3 — Handle the `.env` file

The current `.env` contains:
```
DATABASE_URL=file:/home/z/my-project/db/custom.db
```

This is a **local SQLite path** that does not exist on Vercel. The website does not actually use a database at runtime (it's a static marketing site — all content is in `src/lib/site-data.ts`). So you can either:

**Option A (recommended):** Delete `.env` entirely. The build will succeed without it.

```bash
rm .env
```

**Option B:** If a future feature needs a database, set the env var in the Vercel dashboard (Project → Settings → Environment Variables) using a real Postgres URL from Vercel Postgres, Neon, or Supabase. Do NOT commit `.env` to Git.

---

## Step 4 — Install dependencies fresh and verify the build

```bash
# Use Node 20+ (Next.js 16 requirement). Node 18.18+ works but 20+ is recommended.
node -v   # should print v20.x or higher

# Install deps with npm
rm -rf node_modules
npm install

# Run a production build to verify everything compiles
npm run build
```

**Expected result:** Build completes with a `.next/` directory. You may see TypeScript warnings from shadcn UI components (e.g. `navigation-menu.tsx`, `sidebar.tsx`) — these are pre-existing and harmless because `ignoreBuildErrors: true` is set. The build should still succeed.

If the build fails with a different error, do NOT proceed — read the error, fix it, and re-run. Common issues:
- **"Cannot find module 'three'"** → run `npm install three @types/three`
- **"Module not found: canvas"** → unrelated, ignore (it's from a skill that should have been deleted in Step 1)

---

## Step 5 — Commit and push to GitHub

```bash
# Initialize git if needed (the project may already have a .git dir — check first)
git status

# If .git already exists and has unrelated history, start fresh:
rm -rf .git
git init
git branch -M main

# Stage everything (after the cleanup in Step 1, this should be ~50-100 files, not thousands)
git add .

# Verify what's about to be committed — if you see node_modules, .next, skills/, etc., STOP
git status

# First commit
git commit -m "Initial commit: Yusafir Bangladesh marketing website

- Next.js 16 App Router + TypeScript + Tailwind 4 + shadcn/ui
- Hero with Three.js 3D Earth globe and YouTube background video
- Sections: services, destinations carousel, process, about preview,
  partners, media preview (Instagram + YouTube embeds), contact preview
- Pages: /, /about, /about/team, /about/mission, /media, /contact
- Performance: GPU-promoted animations, mobile-conditional YouTube iframe,
  IntersectionObserver-paused globe, reduced-motion support
- Contact: +8801910087009, teamyusafir@gmail.com, LinkedIn company page"

# Add the remote (the repo should already exist on GitHub — if not, create it first)
git remote add origin https://github.com/SakiburRahmann/yusafir_website.git
# Or if it already exists:
git remote set-url origin https://github.com/SakiburRahmann/yusafir_website.git

# Push
git push -u origin main
```

If the repo already has content (an existing README, etc.), you may need to pull first or force-push:
```bash
git push -u origin main --force   # only if you intend to overwrite existing repo content
```

---

## Step 6 — Deploy to Vercel

### Option A — via Vercel Dashboard (recommended, simplest)

1. Go to **https://vercel.com/new**
2. Import the GitHub repo `SakiburRahmann/yusafir_website`
3. Vercel auto-detects Next.js. Use these settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (leave as Vercel default — it auto-detects)
   - **Output Directory:** leave blank (Vercel auto-detects `.next`)
   - **Install Command:** `npm install` (auto-detected)
   - **Node.js Version:** 20.x (set in Settings → General → Node.js Version)
4. **Environment Variables:** none required for the initial deploy. The site is fully static.
5. Click **Deploy**. First deploy takes ~2-4 minutes.
6. Vercel assigns a URL like `yusafir-website-xxx.vercel.app`. Test it.

### Option B — via Vercel CLI

```bash
npm i -g vercel
vercel login          # authenticate with GitHub/email
vercel link           # link this directory to a Vercel project
vercel --prod         # deploy to production
```

### Custom domain (optional, do after the first deploy works)

In Vercel dashboard → Project → Settings → Domains:
- Add `yusafir-bd.com` (or whatever domain the client owns)
- Add the DNS records Vercel shows you at the registrar
- Wait for SSL cert provisioning (5-30 minutes)

---

## Step 7 — Post-deploy verification checklist

Visit the deployed URL and confirm each of these works:

| Page | URL | What to check |
|---|---|---|
| Home | `/` | Hero loads, 3D globe renders (rotating Earth with arcs from Dhaka), YouTube video plays in background (desktop only — mobile shows poster image), all stats visible, globe stays visible during scroll on mobile |
| About | `/about` | Founder photo (Aaquib Javed) loads, copy is clean |
| Team | `/about/team` | All team members show distinct photos (no duplicates), all are men |
| Mission | `/about/mission` | Mission/vision content renders |
| Media | `/media` | Instagram embeds load, YouTube embeds play |
| Contact | `/contact` | Phone `+8801910087009`, email `teamyusafir@gmail.com`, LinkedIn link `https://www.linkedin.com/company/yusafirbangladesh/`, NO Facebook link |
| Destinations carousel (on home) | `/#destination` | United Kingdom card is first, aligned with section header, not touching screen edge. Scroll carousel works. |
| Partners (on home) | `/#partners` | Real partner logos show (via Clearbit API) |
| Footer | All pages | Correct contact info, LinkedIn link, no Facebook |

### Also check:
- Open browser DevTools → Console. There should be **no errors** (warnings about cross-origin iframe or YouTube embeds are fine).
- Test on mobile viewport (DevTools device mode) — globe should be visible and the page should scroll smoothly.
- Run Lighthouse → Performance score should be 85+ on desktop, 70+ on mobile.

---

## Known architectural notes (for your awareness, no action needed)

1. **Three.js globe** — Loaded via `next/dynamic` with `ssr: false` in `src/components/sections/hero.tsx`. Texture images load from `unpkg.com/three-globe` CDN. If that CDN is down, the globe shows a solid blue sphere fallback (still fine).

2. **YouTube background video** — Only loads on desktop (≥768px and >4 CPU cores). On mobile, just the poster image shows. This is intentional for performance.

3. **Partner logos** — Fetched from `https://logo.clearbit.com/{domain}` at runtime in `src/components/sections/partners.tsx`. If a logo fails to load, an initials-based fallback card shows. Clearbit is free and doesn't require an API key for basic logo lookups.

4. **Instagram/YouTube embeds** — Use native blockquote/iframe embeds (no API keys). Instagram embeds load their JS from `instagram.com` — if a post is deleted or Instagram is blocked in the user's region, the embed shows the post URL as a link.

5. **All content is static** — There is no backend, no database calls at runtime, no auth. The `prisma/` schema is documentation-only. All site data lives in `src/lib/site-data.ts` — to change phone/email/team/partners/destinations, edit that one file.

---

## If something breaks

- **Blank page on Vercel but works locally** → Check Vercel build logs. Most common cause: Node version mismatch. Set Node 20 in Vercel project settings.
- **Globe doesn't render** → Open browser console. If you see a WebGL error, the user's browser/device doesn't support WebGL — the site still works, just without the globe. No fix needed.
- **Images 404** → Make sure `public/` was committed (check GitHub repo — `public/founder-aaquib-javed.png`, `public/yusafir-logo.jpg`, `public/logo.svg` should all be there).
- **TypeScript errors in build** → Already handled by `ignoreBuildErrors: true` in `next.config.ts`. If you see NEW errors not in the original build, something was deleted that shouldn't have been.

---

## Final note

This site was carefully tuned for performance and visual polish. Do NOT "optimize" or refactor anything unless asked — every animation timing, every CSS rule in `globals.css` (especially the "Animation Performance Optimizations" section at the bottom), every Three.js parameter in `hero-earth.tsx`, and every breakpoint in `destinations.tsx` was deliberately chosen. Refactoring will reintroduce bugs that took many iterations to fix.

If the deploy succeeds and the verification checklist passes, you're done. Hand the Vercel URL back to the user.
