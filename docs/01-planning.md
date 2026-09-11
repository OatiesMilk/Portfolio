# 01 — Planning

## 1. Purpose of the Website

The website is a personal portfolio for a developer to present themselves professionally
to recruiters, hiring managers, collaborators, and clients. It acts as a single online
reference point that answers three questions for any visitor within seconds:

- Who is this person?
- What can they do?
- How do I get in touch with them?

## 2. Target Users

| User type | Goal when visiting |
|---|---|
| Recruiters / HR | Quickly assess skills, experience, and fit for a role |
| Hiring managers / technical leads | Review real project work and technical depth |
| Potential clients | Evaluate credibility before reaching out for freelance/contract work |
| Fellow developers / collaborators | Find contact info and social/GitHub links |
| The site owner | Maintain and update content easily over time (beginner-friendly codebase) |

## 3. Main Features

1. Hero/introduction section (name, title, short pitch, CTA buttons)
2. About Me section (bio, goals, interests)
3. Skills section (technical skills displayed as cards)
4. Projects section (at least 3 sample projects with tech stack and links)
5. Education / Experience timeline
6. Contact section (email, location, social links, contact form UI)
7. Responsive navigation bar with mobile menu
8. Smooth scrolling and active nav-link highlighting
9. Scroll-to-top button

## 4. Functional Requirements

- Users can view the homepage.
- Users can navigate between portfolio sections.
- Users can read the About Me section.
- Users can view a list of skills.
- Users can view portfolio projects.
- Users can view education/experience.
- Users can access contact information.
- Users can click social media links.
- Navigation should work on desktop and mobile.

## 5. Non-Functional Requirements

- Responsive design (mobile, tablet, laptop, desktop)
- Accessible HTML (semantic tags, labels, alt text, keyboard support)
- Fast loading (no frameworks, no build step, optimized assets)
- Clean, minimal, professional UI
- Maintainable code (clear structure, CSS variables, descriptive names)
- Semantic HTML5 elements
- Basic on-page SEO (meta description, title, Open Graph tags, semantic headings)
- Cross-browser compatibility (Chrome, Firefox, Edge, Safari)

## 6. Technology Stack

Chosen deliberately to keep the project simple and beginner-friendly:

- **HTML5** — page structure and content
- **CSS3** (vanilla, with CSS custom properties) — styling and responsiveness
- **Vanilla JavaScript** (no frameworks/libraries) — interactivity

No React, Vue, Next.js, build tools, databases, or backend APIs are used. There is no
strong reason to introduce that complexity for a static personal portfolio, and avoiding
it keeps the project easy for a beginner to read, run, and modify (open `index.html`,
no `npm install` required).

## 7. Project Scope

**In scope**
- A single-page (one HTML file) portfolio site with anchor-linked sections
- Static, client-side-only functionality (no backend, no database)
- A frontend-only contact form (validates input, does not send data anywhere unless a
  backend/form service is later wired in — this is documented clearly in the code and docs)
- Placeholder profile/project imagery that the owner is expected to replace
- Documentation covering the full SDLC (planning → deployment)

**Out of scope**
- User authentication / accounts
- A CMS or admin panel
- Server-side processing of the contact form
- Blog/CMS functionality
- Multi-page routing (kept as a single page with in-page navigation for simplicity)

## 8. Assumptions & Constraints

See [02-requirements.md](02-requirements.md) for the full list of assumptions and
constraints carried into the requirements analysis phase.
