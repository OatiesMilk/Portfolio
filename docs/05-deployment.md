# 05 — Deployment

This is a fully static site (HTML, CSS, JS — no build step, no server), deployed on
**Vercel**. Vercel serves the repo root as-is (framework preset "Other" / zero-config),
so no build command or output directory is needed.

## 1. Local Development

You do not need a server to preview the site — but relative asset loading is most
reliable when served over HTTP rather than opened as a raw `file://` path.

**Option A — just open the file**

Double-click `index.html`, or open it in your browser directly. This works fine in a
normal desktop browser.

**Option B — serve it locally (recommended)**

If you have the Vercel CLI installed:

```bash
npx vercel dev
```

Or with Node.js:

```bash
npx serve .
```

Then open the printed local URL (e.g. `http://localhost:3000`) in your browser.

If you have Python installed:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## 2. Deploy to Vercel

### Option A — Connect the GitHub repo (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login works directly).
2. Click **Add New → Project**, then import this GitHub repository.
3. Framework preset: leave as **Other** (no build step). Build command and output
   directory can stay empty — Vercel serves the repo root.
4. Click **Deploy**. Vercel publishes the site at a generated
   `https://<project-name>.vercel.app` URL immediately.
5. Every push to `main` (or your default branch) automatically triggers a production
   redeploy. Every push to any other branch/PR gets its own **preview URL** — useful for
   checking changes before merging.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # deploys to production
```

### Configuration

`vercel.json` in the repo root sets:
- `cleanUrls` — allows `/about` instead of `/about.html` if extra pages are ever added.
- Long-lived cache headers on `assets/` (images, resume PDF) since those files rarely
  change and benefit from aggressive caching.

No environment variables or secrets are required — this site has no backend.

## 3. Custom Domain (optional)

In the Vercel project dashboard: **Settings → Domains → Add**. Point your domain's DNS
at Vercel per the instructions shown (usually a CNAME or A record). Vercel provisions
HTTPS automatically.

If you add a custom domain, update the `og:url` / `og:image` / `twitter:image` meta
tags in `index.html` (currently pointing at the GitHub Pages URL) to match.

## 4. Updating the Website

Whenever you change content (bio, projects, skills, contact info, etc.):

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel redeploys automatically a few seconds after the push, and comments the deploy
URL directly on the corresponding commit/PR.

## 5. Contact Form (Formspree)

The contact form in `#contact` is wired to [Formspree](https://formspree.io), a free
form-handling service — no backend code required. The form's `action` attribute in
`index.html` points at a Formspree endpoint, and `js/script.js` runs the existing
client-side validation first, then submits via `fetch()` so the page shows an inline
success/error message instead of redirecting. This works identically on Vercel — no
changes needed for the migration.

To point the form at a different Formspree account (e.g., if you fork this project):

1. Create a free account and form at Formspree.
2. Replace the `action` URL on the `<form id="contact-form">` tag in `index.html`
   with your own endpoint, e.g. `https://formspree.io/f/your-id`.
3. No other changes are needed — the submit handler in `js/script.js` posts to
   whatever URL is in `contactForm.action`.

Formspree's free tier caps at 50 submissions/month and requires confirming your first
real submission via a link they email you; after that it's fully automatic.

## Alternative static hosts

Since this is a plain static site, it also works well on:

- **GitHub Pages** — Settings → Pages → Deploy from a branch (`main`, `/root`). Publishes
  at `https://<username>.github.io/<repo>/`.
- **Netlify** — drag the project folder onto the dashboard, or connect the repo for
  automatic redeploys on every push.
- **Cloudflare Pages** — connect the repo, leave the build command empty, set the
  output directory to `/`.
