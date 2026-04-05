# CLAUDE.md — Miten Shah Portfolio Development Rules

## Project Overview
High-end portfolio SPA built with React 18 + Vite + Tailwind CSS + Framer Motion.
Theme: Black & Blue Night. Multi-view SPA with card-grid home navigation.

---

## Naming Conventions
- Components: `PascalCase.jsx` (e.g., `CardGrid.jsx`)
- Data: `camelCase.js` (e.g., `portfolioData.js`)
- CSS classes: Tailwind utilities only. No external CSS modules.
- Event handlers: `handle` prefix (e.g., `handleNavigate`, `handleSubmit`)
- Motion values: `useMotionValue`, `useSpring`, `useTransform` from `framer-motion`

## Component Rules
- All new components live in `src/components/`
- Each component is a single named export (default)
- Props are destructured at function signature level
- All interactive elements must have `data-hover` attribute for cursor targeting
- Never import from `../contexts/ThemeContext` — theme is permanently dark

## Style Rules
- Color palette: only use values from Design System (see `docs/design_system.md`)
- NEVER use `dark:` Tailwind variants — site is always dark
- NEVER use `bg-white`, `bg-gray-*`, `text-gray-*` — use night/blue palette
- Font hierarchy: Playfair Display for headings, Inter for body/UI, JetBrains Mono for metrics
- z-index layers: cursor-dot(9999), cursor-ring(9998), preloader(9997), section-overlay(50), nav(40)

## Data Rules
- `src/data/portfolioData.js` is the SINGLE SOURCE OF TRUTH — NEVER modify it during revamps
- All content (experiences, projects, skills, etc.) must flow through this file's exports

## Documentation Sync Rule
> **After every commit, update `/docs` if any design tokens, component API, or content structure changed.**
> Specifically: update `docs/design_system.md` for style changes, `docs/content_map.md` for content changes.

## Git Rules
- Commit attribution: `miten4720@gmail.com`
- Commit message format: `feat|fix|style|docs: description`
- Push target: `origin master` → `https://github.com/miten24/miten24.github.io`
- Always run `npm run build` before pushing — 0 errors required

## Asset Rules
- `public/headshot.jpg` — professional headshot (used in About section)
- `public/favicon.svg` — "MS" monogram SVG
- `public/MitenShah.pdf` — CV for download — NEVER rename or move
- Analytics scripts (Clarity + Google Analytics) in `index.html` — NEVER remove

## Backend Rules
- `backend/index.js` — Node.js + Nodemailer email handler
- Both email templates use HTML (inline CSS only — no external stylesheets in email)
- Email client safe fonts: Arial, sans-serif (Playfair won't load in email clients)
