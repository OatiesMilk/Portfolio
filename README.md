# Personal Portfolio Website

A modern, responsive personal portfolio website built with plain HTML, CSS, and
JavaScript — no frontend framework, no build step required to run. A small Express
server is included for local development; the site itself deploys to Vercel as a
static site. Built following a full Software Development Life Cycle (SDLC),
documented step by step in [`docs/`](docs).

## Features

- Sticky navigation bar with a mobile hamburger menu (collapses the header actions
  to fit narrow viewports)
- Light/dark theme toggle with the preference persisted in `localStorage`
- Smooth scrolling between sections with active-link highlighting
- Hero/introduction section with call-to-action buttons and a downloadable resume link
- About Me section with a short bio and interest tags
- Skills section with visual proficiency bars
- Projects section with real project write-ups, tech tags, and links to live demos,
  GitHub repos, and design files (Figma/Drive)
- Education & Experience timeline
- Industry Certifications section with verified Credly credential links
- Contact section with contact details and a validated contact form, wired to
  Formspree so submissions are actually delivered by email. The message textarea
  resizes vertically only (bounded 110px–400px) so it can't be dragged wider than
  its container
- Scroll-to-top button
- Fully responsive (tested at 375px, 768px, and 1440px+, with no horizontal overflow)
- Semantic, accessible HTML (skip link, landmarks, labelled form fields, focus states)

## Technologies

- **HTML5** — semantic page structure
- **CSS3** — custom properties (design tokens), Flexbox, CSS Grid, media queries
- **Vanilla JavaScript** — no libraries or frameworks
- **Express** — tiny static file server for local development only (not used in
  production; Vercel serves the static files directly)

## Project Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── Resume.pdf
│   └── images/          # profile photo and project screenshots
├── docs/
│   ├── 01-planning.md
│   ├── 02-requirements.md
│   ├── 03-design.md
│   ├── 04-testing.md
│   └── 05-deployment.md
├── server.js             # local dev server (Express)
├── package.json
├── vercel.json            # Vercel deploy config (static output, clean URLs)
└── README.md
```

## How to Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). You can also just open
[`index.html`](index.html) directly in your browser — no server required — but running
it through `npm run dev` more closely matches how it behaves once deployed.

## How to Customize Content

Everything lives in plain, readable HTML — no templating engine, no data files.

| What to change | Where |
|---|---|
| Name, title, intro | `<section id="home">` in `index.html` |
| Bio, interests | `<section id="about">` in `index.html` |
| Skills list & levels | `<section id="skills">` — each `<li class="skill-card">`; adjust the `width` percentage on the inner `<span>` to change the bar level |
| Projects | `<section id="projects">` — duplicate a project block for more projects |
| Education/experience | `<section id="education">` — duplicate a `<li class="timeline-item">` block |
| Certifications | `<section id="certifications">` — duplicate a credential card and update the Credly link |
| Email, location, social links | `<section id="contact">` and the `<footer>` |
| Resume file | Replace `assets/Resume.pdf` (linked from the header and hero section) |
| Colors, fonts, spacing | `:root` variables at the top of `css/style.css` |
| Profile/project images | `assets/images/` |

## How to Deploy

The site deploys to **Vercel** as a static site (`vercel.json` sets `framework: null`,
`outputDirectory: "."`, and `cleanUrls: true`). Push to `main` and Vercel auto-deploys
if the project is connected to this repo; see [docs/05-deployment.md](docs/05-deployment.md)
for full setup steps and alternatives (Netlify, GitHub Pages).

```bash
git add .
git commit -m "Your change"
git push origin main
```

## Future Improvements

- Add project filtering (e.g., by technology) once there are more than a
  handful of projects.
- Add basic analytics (a privacy-friendly option like Plausible) if visitor insight is
  wanted post-deployment.
- Compress/convert larger project screenshots to WebP for faster load.

## SDLC Documentation

This project's full development process is documented in order:

1. [Planning](docs/01-planning.md)
2. [Requirements Analysis](docs/02-requirements.md)
3. [System Design](docs/03-design.md)
4. [Testing](docs/04-testing.md)
5. [Deployment](docs/05-deployment.md)
