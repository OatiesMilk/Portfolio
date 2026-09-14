# Personal Portfolio Website

A simple, modern, responsive personal portfolio website built with plain HTML, CSS,
and JavaScript — no frameworks, no build tools, no backend required. Built following a
full Software Development Life Cycle (SDLC), documented step by step in [`docs/`](docs).

## Features

- Sticky navigation bar with a mobile hamburger menu
- Smooth scrolling between sections with active-link highlighting
- Hero/introduction section with call-to-action buttons
- About Me section with a short bio and interest tags
- Skills section with visual proficiency bars
- Projects section (3 sample projects) with tech tags and GitHub/demo links
- Education & Experience timeline
- Contact section with contact details and a validated contact form, wired to
  Formspree so submissions are actually delivered by email
- Scroll-to-top button
- Fully responsive (tested at 375px, 768px, 1024px, and 1440px+)
- Semantic, accessible HTML (skip link, landmarks, labelled form fields, focus states)

## Technologies

- **HTML5** — semantic page structure
- **CSS3** — custom properties (design tokens), Flexbox, CSS Grid, media queries
- **Vanilla JavaScript** — no libraries or frameworks

## Project Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/          # drop real photos/screenshots here (see its README)
├── docs/
│   ├── 01-planning.md
│   ├── 02-requirements.md
│   ├── 03-design.md
│   ├── 04-testing.md
│   └── 05-deployment.md
└── README.md
```

## How to Run Locally

Just open [`index.html`](index.html) directly in your browser — no install needed.

Or, if you have Node.js installed, serve it over HTTP (recommended, matches how it will
run once deployed):

```bash
npx serve .
```

See [docs/05-deployment.md](docs/05-deployment.md) for more options (Python's built-in
server, etc.).

## How to Customize Content

Everything lives in plain, readable HTML — no templating engine, no data files.

| What to change | Where |
|---|---|
| Name, title, intro | `<section id="home">` in `index.html` |
| Bio, interests | `<section id="about">` in `index.html` |
| Skills list & levels | `<section id="skills">` — each `<li class="skill-card">`; adjust the `width` percentage on the inner `<span>` to change the bar level |
| Projects | `<section id="projects">` — duplicate a `<li class="project-card">` block for more projects |
| Education/experience | `<section id="education">` — duplicate a `<li class="timeline-item">` block |
| Email, location, social links | `<section id="contact">` and the `<footer>` |
| Colors, fonts, spacing | `:root` variables at the top of `css/style.css` |
| Profile/project images | Replace the inline `<svg>` placeholders with `<img>` tags pointing at files in `assets/images/` (see [assets/images/README.md](assets/images/README.md)) |

## How to Deploy

This site is deployed on **Vercel**. Full instructions (connecting the repo, the CLI
flow, custom domains, and alternatives like GitHub Pages/Netlify) are in
[docs/05-deployment.md](docs/05-deployment.md). Short version:

1. Push the repo to GitHub.
2. Import it at [vercel.com](https://vercel.com) → **Add New → Project**.
3. Leave the framework preset as **Other** (no build step needed) and deploy.

Every push to `main` auto-deploys to production; every other branch/PR gets its own
preview URL.

## Future Improvements

- Swap the inline SVG project placeholders for real screenshots/mockups.
- Add a downloadable resume/CV link in the hero or contact section.
- Add simple project filtering (e.g., by technology) once there are more than a
  handful of projects.
- Add basic analytics (a privacy-friendly option like Plausible) if visitor insight is
  wanted post-deployment.

## SDLC Documentation

This project's full development process is documented in order:

1. [Planning](docs/01-planning.md)
2. [Requirements Analysis](docs/02-requirements.md)
3. [System Design](docs/03-design.md)
4. [Testing](docs/04-testing.md)
5. [Deployment](docs/05-deployment.md)
