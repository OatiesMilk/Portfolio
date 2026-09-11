# 05 — Deployment

This is a fully static site (HTML, CSS, JS — no build step, no server), so it can be
deployed to almost any free static host. Steps below use GitHub Pages as the primary
example, since it pairs directly with the GitHub repo setup.

## 1. Local Development

You do not need a server to preview the site — but relative asset loading is most
reliable when served over HTTP rather than opened as a raw `file://` path.

**Option A — just open the file**

Double-click `index.html`, or open it in your browser directly. This works fine in a
normal desktop browser.

**Option B — serve it locally (recommended)**

If you have Node.js installed:

```bash
npx serve .
```

Then open the printed local URL (e.g. `http://localhost:3000`) in your browser.

If you have Python installed:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## 2. Git Initialization

From the project folder:

```bash
git init
git add .
git commit -m "Initial commit: personal portfolio site"
```

## 3. Create a GitHub Repository

1. Go to GitHub and create a new repository (e.g. `portfolio`).
2. Do **not** initialize it with a README (you already have one locally).
3. Connect your local repo and push:

```bash
git remote add origin https://github.com/<your-username>/portfolio.git
git branch -M main
git push -u origin main
```

## 4. Deploy with GitHub Pages

1. In your GitHub repository, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to "Deploy from a branch".
3. Set **Branch** to `main` and folder to `/ (root)`.
4. Save. GitHub will publish the site at:
   `https://<your-username>.github.io/<repository-name>/`
5. It can take a minute or two for the first deployment to go live.

### Alternative static hosts

Any of these also work well for a static HTML/CSS/JS site (drag-and-drop or connect
your GitHub repo):

- **Netlify** — drag the project folder onto the Netlify dashboard, or connect the repo
  for automatic redeploys on every push.
- **Vercel** — import the GitHub repo; no build command needed (framework preset:
  "Other").
- **Cloudflare Pages** — connect the repo, leave the build command empty, set the
  output directory to `/`.

## 5. Updating the Website

Whenever you change content (bio, projects, skills, contact info, etc.):

```bash
git add .
git commit -m "Update portfolio content"
git push
```

- **GitHub Pages** redeploys automatically a short time after the push.
- **Netlify / Vercel / Cloudflare Pages** (if connected to the repo) redeploy
  automatically on every push as well.

## 6. Contact Form (Formspree)

The contact form in `#contact` is wired to [Formspree](https://formspree.io), a free
form-handling service — no backend code required. The form's `action` attribute in
`index.html` points at a Formspree endpoint, and `js/script.js` runs the existing
client-side validation first, then submits via `fetch()` so the page shows an inline
success/error message instead of redirecting.

To point the form at a different Formspree account (e.g., if you fork this project):

1. Create a free account and form at Formspree.
2. Replace the `action` URL on the `<form id="contact-form">` tag in `index.html`
   with your own endpoint, e.g. `https://formspree.io/f/your-id`.
3. No other changes are needed — the submit handler in `js/script.js` posts to
   whatever URL is in `contactForm.action`.

Formspree's free tier caps at 50 submissions/month and requires confirming your first
real submission via a link they email you; after that it's fully automatic.
