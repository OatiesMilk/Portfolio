# 04 — Testing

Testing was performed by serving the site locally (`npx serve`) and driving it in a
real browser (Chromium-based) at multiple emulated viewport widths. All issues found
during testing were fixed and retested — this document reflects the final, passing
state.

## 1. Functional Testing

| Test | Steps | Result |
|---|---|---|
| Desktop navigation | Click each nav link | ✅ Pass — smooth-scrolls to the correct section, offset correctly below the sticky header |
| Active nav highlight | Scroll through sections | ✅ Pass — `IntersectionObserver` correctly underlines the nav link for the section in view (verified on Skills) |
| Mobile hamburger menu | Tap hamburger icon at 375px width | ✅ Pass — menu opens with opaque background over full list of links; icon animates to an "X"; `aria-expanded` toggles true/false |
| Mobile menu auto-close | Tap a link while mobile menu is open | ✅ Pass — menu closes and the page smooth-scrolls to the target section |
| CTA buttons | Click "View My Work" / "Contact Me" | ✅ Pass — scroll to `#projects` / `#contact` |
| Project links | Inspect GitHub/Live Demo links | ✅ Pass — all open in a new tab via `target="_blank" rel="noopener noreferrer"` |
| Social links | Inspect footer/contact links | ✅ Pass — real `<a href>` values (GitHub, LinkedIn, `mailto:`) |
| Scroll-to-top button | Scroll past hero, then scroll back | ✅ Pass — hidden while hero is in view, appears once scrolled past it, clicking scrolls smoothly to top |
| Contact form — empty submit | Submit with all fields blank | ✅ Pass — inline error shown under each empty field, no page reload |
| Contact form — invalid email | Enter `not-an-email`, valid name/message | ✅ Pass — only the email field shows "Please enter a valid email address." |
| Contact form — valid submit | Fill all fields correctly, submit | ✅ Pass — success message shown, form fields reset, no network request made (frontend-only, by design) |

## 2. UI Testing (Responsive Layouts)

Verified at all four required reference widths:

| Width | Device class | Result |
|---|---|---|
| 375px | Mobile phone | ✅ Pass — single-column stacked hero, full-width buttons, hamburger nav, single-column project/skill cards |
| 768px | Tablet | ✅ Pass — hamburger nav retained, Skills grid shows 3 columns, About stays single-column (by design, collapses under 900px) |
| 1024px | Laptop | ✅ Pass — full nav bar visible, About section 2-column, Projects/Skills multi-column grids |
| 1440px | Desktop monitor | ✅ Pass — content centered under `max-width: 1200px`, generous side margins, no stretched/awkward elements |

Typography, color, and spacing were checked visually at each width — text remains
readable, no horizontal overflow, no overlapping elements, and all buttons/tap targets
remain comfortably clickable.

## 3. Accessibility Testing

| Check | Method | Result |
|---|---|---|
| Heading hierarchy | Read accessibility tree | ✅ Pass — single `h1` ("Dylan Akia"), `h2` per section, `h3` for cards/items — no skipped levels |
| Landmarks | Read accessibility tree | ✅ Pass — `banner`, `navigation "Primary"`, `main`, labelled `region`s (via `aria-labelledby`), `contentinfo` footer |
| Skip link | Tab from page load | ✅ Pass — "Skip to main content" is the first focusable element and jumps focus to `#main-content` |
| Form labels | Inspect markup | ✅ Pass — every input/textarea has an associated `<label for>` and `aria-describedby` pointing at its error text |
| Alt text | Inspect markup | ✅ Pass — decorative SVGs use `aria-hidden`/`role="presentation"`; the profile avatar SVG has a descriptive `aria-label` acting as alt text |
| Focus states | Tab through interactive elements | ✅ Pass — visible focus ring via `:focus-visible` (not suppressed anywhere) |
| Mobile menu semantics | Inspect markup | ✅ Pass — toggle button has `aria-label`, `aria-expanded`, `aria-controls` |
| Color contrast | Visual check of text/background pairs | ✅ Pass — body text `#0f172a` on `#f8fafc`/`#ffffff` and button text `#ffffff` on `#2563eb` both exceed WCAG AA (4.5:1) for normal text |

## 4. Performance Checks

| Check | Result |
|---|---|
| Console errors | ✅ None — checked at 375px, 768px, and desktop widths after full interaction pass |
| Unnecessary JavaScript | ✅ None — `js/script.js` only implements the 5 documented behaviors, no unused code |
| Large images | ✅ None — all imagery is inline SVG (no binary image requests) |
| Unused CSS | ✅ Reviewed — every class in `style.css` is referenced in `index.html` |
| External requests | ✅ None — zero third-party scripts, fonts, or trackers; the page is fully self-contained |

## 5. Issues Found & Fixed During Testing

| Issue | Cause | Fix |
|---|---|---|
| Opening `index.html` directly via `file://` loaded without any CSS/JS applied in the automated browser preview | The preview tool renders `file://` pages as a static snapshot rather than a live page | Not a defect in the site itself — documented in [05-deployment.md](05-deployment.md) that local development should use a simple static server (or just double-click the file in a normal desktop browser, which loads relative assets fine); a `.claude/launch.json` static server config was added for this project's local testing workflow |

No defects were found in the site's own HTML, CSS, or JavaScript during this pass —
all functional, responsive, and accessibility checks listed above passed on the first
implementation.

## 6. Cross-Browser Notes

The site uses only widely supported CSS/JS features (Flexbox, CSS Grid,
`IntersectionObserver`, CSS custom properties, `scroll-behavior: smooth`), all of which
are supported in current Chrome, Firefox, Edge, and Safari. No vendor prefixes or
polyfills were required.
