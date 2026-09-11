# 02 — Requirements Analysis

## 1. Functional Requirements (FR)

| ID | Requirement |
|---|---|
| FR-1 | Users can view the homepage with a hero introduction. |
| FR-2 | Users can navigate between portfolio sections via a nav bar. |
| FR-3 | Users can read the About Me section. |
| FR-4 | Users can view a list of skills. |
| FR-5 | Users can view portfolio projects, each with name, description, tech stack, and links. |
| FR-6 | Users can view education/experience in a timeline or card layout. |
| FR-7 | Users can access contact information (email, location, social links). |
| FR-8 | Users can click social media links which open in a new tab. |
| FR-9 | Navigation must work on both desktop (visible nav bar) and mobile (hamburger menu). |
| FR-10 | Users can submit the contact form and receive inline validation feedback. |
| FR-11 | Users can click a scroll-to-top button once they scroll past the hero section. |

## 2. Non-Functional Requirements (NFR)

| ID | Requirement |
|---|---|
| NFR-1 | **Responsive** — layout adapts correctly at 375px, 768px, 1024px, and 1440px+ widths. |
| NFR-2 | **Accessible** — semantic landmarks, labelled form fields, visible focus states, sufficient color contrast, meaningful alt text. |
| NFR-3 | **Fast loading** — no external frameworks, no render-blocking scripts, minimal asset weight. |
| NFR-4 | **Clean UI** — consistent spacing, color palette, and typography scale. |
| NFR-5 | **Maintainable** — CSS variables for theme values, clearly separated HTML/CSS/JS files, descriptive class names. |
| NFR-6 | **Semantic HTML** — `header`, `nav`, `main`, `section`, `footer`, correct heading order. |
| NFR-7 | **Basic SEO** — title tag, meta description, Open Graph tags, single `h1`, descriptive link text. |
| NFR-8 | **Cross-browser compatible** — works in current Chrome, Firefox, Edge, and Safari without vendor-specific hacks. |

## 3. User Stories & Acceptance Criteria

### US-1: Quick understanding of who the owner is
*As a visitor, I want to quickly understand who the portfolio owner is, so that I can decide whether to keep reading.*

**Acceptance criteria**
- A hero section is the first thing visible on page load.
- It shows the owner's name, professional title, and a one-sentence pitch.
- It includes at least one call-to-action button (e.g., "View Projects", "Contact Me").

### US-2: See the owner's skills
*As a visitor, I want to see the owner's skills, so that I can assess technical fit.*

**Acceptance criteria**
- A dedicated Skills section lists individual skills as visually distinct cards/badges.
- Each skill is legible without needing to hover or click.

### US-3: View completed projects
*As a visitor, I want to view completed projects, so that I can judge real-world ability.*

**Acceptance criteria**
- At least 3 projects are displayed.
- Each project shows a name, short description, technologies used, and a working link
  (GitHub and/or live demo).

### US-4: Contact the portfolio owner
*As a visitor, I want to contact the portfolio owner, so that I can start a conversation.*

**Acceptance criteria**
- Email address, location, and social links (GitHub, LinkedIn) are visible in the Contact section.
- A contact form is present with Name, Email, and Message fields.
- Submitting the form with invalid/missing data shows clear inline error messages and
  does not silently fail.
- The form is clearly documented (in code comments and docs) as frontend-only unless a
  backend/email service is connected.

### US-5: Easy navigation on mobile
*As a mobile user, I want the website to be easy to navigate, so that I don't get frustrated on a small screen.*

**Acceptance criteria**
- Below the tablet breakpoint, the nav bar collapses into a hamburger icon.
- Tapping the icon opens a full-width/dropdown menu with all section links.
- Tapping a link scrolls to the section and closes the menu automatically.
- All tap targets are at least 44x44px.

## 4. Assumptions

1. The site owner will replace placeholder name, bio, project, and contact content with
   their own — placeholders use realistic sample data, not lorem ipsum.
2. No backend/server is available; the contact form validates client-side only. If the
   owner later wants real submissions, they can connect a third-party form service
   (e.g., Formspree) or their own backend — this is called out in the deployment docs.
3. Images are represented with lightweight inline SVG placeholders so the project has
   zero external image dependencies out of the box.
4. A single HTML page with anchor-linked sections satisfies "site structure" — separate
   physical pages are not required for a portfolio of this scope.
5. Target browsers are the current and one prior major version of Chrome, Firefox, Edge,
   and Safari (desktop and mobile).

## 5. Constraints

1. Technology is limited to HTML5, CSS3, and vanilla JavaScript — no frameworks, build
   tools, or package managers, per project scope.
2. No database or server-side code.
3. Must remain simple enough for a beginner to read and customize without prior
   framework knowledge.
4. Must be deployable on free static hosting (e.g., GitHub Pages) with no server config.
