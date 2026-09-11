# 03 — System Design

## 1. Site Structure

The site is a single HTML page divided into anchor-linked sections, navigated via a
sticky nav bar. This satisfies the multi-section feel of a traditional multi-page site
while keeping the project simple (no routing needed).

```text
Portfolio (index.html)
├── #home        (Hero)
├── #about       (About Me)
├── #skills      (Skills)
├── #projects    (Projects)
├── #education   (Education / Experience)
└── #contact     (Contact)
```

## 2. Layout Details

### Hero Section (`#home`)
- Name (H1)
- Professional title (e.g., "Full-Stack Web Developer")
- Short 1–2 sentence introduction
- Two CTA buttons: "View My Work" (→ #projects), "Contact Me" (→ #contact)
- Profile image placeholder (inline SVG avatar, swappable for a real photo)

### About Section (`#about`)
- Short biography (2–3 paragraphs)
- Career goals
- Personal interests (short tag list)

### Skills Section (`#skills`)
- Grid of skill cards, each with an icon/initial, name, and proficiency indicator (bar)
- Sample skills: HTML, CSS, JavaScript, Python, Git, UI/UX Design

### Projects Section (`#projects`)
- Grid of project cards. Each card contains:
  - Project image placeholder (SVG)
  - Project name
  - Description (2–3 sentences)
  - Technology tag list
  - "GitHub" and "Live Demo" buttons/links
- Minimum 3 sample projects included.

### Education / Experience Section (`#education`)
- Vertical timeline of cards, each with:
  - Institution/company name
  - Role or degree
  - Date range
  - Short description of responsibilities/achievements

### Contact Section (`#contact`)
- Contact info list: Email, Location, GitHub, LinkedIn (icons + text, all real `<a>` links)
- Contact form (Name, Email, Message, Submit) — **frontend-only**, clearly labeled as such
  in a small helper note under the form and in code comments.

### Footer
- Copyright line with current year (set via JS) and small social icon row.

## 3. Component/Visual Design System

CSS custom properties define the design tokens in `css/style.css`:

```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #1e293b;
  --background-color: #f8fafc;
  --surface-color: #ffffff;
  --text-color: #0f172a;
  --text-muted: #475569;
  --border-color: #e2e8f0;
  --success-color: #16a34a;
  --error-color: #dc2626;
  --radius: 10px;
  --shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  --transition: 0.2s ease;
}
```

Typography: a system-font stack for zero network requests and instant rendering
(`-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`). A modular type
scale (clamp-based) keeps headings readable across breakpoints.

## 4. Responsive Breakpoints

| Breakpoint | Target device | Layout behavior |
|---|---|---|
| < 480px | Small phones | Single column, stacked hero, hamburger nav |
| 480–767px | Large phones | Single column, 2-col skill grid |
| 768–1023px | Tablets | 2-col project/skill grid, hamburger nav retained |
| 1024–1439px | Laptops | Full nav bar visible, 2–3 col grids |
| ≥ 1440px | Desktop monitors | Max content width capped (1200px) and centered, 3-col grids |

Tested reference widths: 375px, 768px, 1024px, 1440px (see
[04-testing.md](04-testing.md)).

## 5. Interaction / JavaScript Design

Implemented in `js/script.js`, kept intentionally minimal:

1. **Mobile navigation toggle** — hamburger button toggles a `.open` class on the nav
   menu; closes automatically when a link is clicked or when clicking outside.
2. **Smooth scrolling** — anchor links scroll smoothly to their target section, offset
   for the sticky header height.
3. **Active nav-link highlighting** — an `IntersectionObserver` watches each section and
   toggles an `.active` class on the matching nav link.
4. **Scroll-to-top button** — hidden until the user scrolls past the hero; clicking it
   scrolls smoothly to the top.
5. **Contact form validation** — checks required fields and a basic email pattern on
   submit; shows inline error messages per field and a success message on valid
   submission (no network request is made — this is a frontend-only form).

## 6. Project Architecture

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/        (placeholder folder; inline SVGs used by default)
├── docs/
│   ├── 01-planning.md
│   ├── 02-requirements.md
│   ├── 03-design.md
│   ├── 04-testing.md
│   └── 05-deployment.md
└── README.md
```

## 7. Accessibility Design Notes

- Landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`.
- Skip-to-content link as the first focusable element.
- Hamburger button has `aria-expanded` and `aria-controls`.
- Form fields use associated `<label for>` and `aria-describedby` for error text.
- Focus-visible outlines are never removed, only restyled.
- Color palette checked for WCAG AA contrast (see testing doc).
