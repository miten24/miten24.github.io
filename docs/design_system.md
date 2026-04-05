# Design System — Miten Shah Portfolio

## Theme: Black & Blue Night (Permanent Dark)

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `#0A0A0A` | Near-black | Page background |
| `#111111` | Dark | Card backgrounds |
| `#1A1A1A` | Elevated dark | Hover states, elevated cards |
| `#222222` | Subtle | Section dividers |
| `#3B82F6` | Blue-500 | Primary accent, CTAs, borders on hover |
| `#60A5FA` | Blue-400 | Highlights, cursor ring, glow effects |
| `#1D4ED8` | Blue-700 | Subtle fills, pressed states |
| `#FFFFFF` | White | Primary headings, important labels |
| `#A3A3A3` | Grey-white | Body text, descriptions |
| `#525252` | Muted | Dates, captions, meta info |
| `rgba(255,255,255,0.06)` | — | Default borders |
| `rgba(96,165,250,0.40)` | — | Hover borders |
| `rgba(96,165,250,0.08)` | — | Subtle blue fills |

---

## Typography

### Fonts
- **Playfair Display** — Serif, Google Fonts
  - Weights: 400, 700, 900
  - Used for: Page hero text, section H2 headings
- **Inter** — Sans-serif, Google Fonts
  - Weights: 300, 400, 500, 600, 700
  - Used for: Body text, UI labels, card titles (uppercase)
- **JetBrains Mono** — Monospace, Google Fonts
  - Weights: 300, 400, 500
  - Used for: Card numbers, metrics, dates, preloader percentage

### Type Scale
| Element | Font | Size | Weight | Style |
|---------|------|------|--------|-------|
| Hero name "MITEN SHAH" | Playfair Display | clamp(5rem,12vw,14rem) | 900 | UPPERCASE |
| Section H2 | Playfair Display | 3rem–4rem | 700 | Normal |
| Card title | Inter | 0.75rem | 600 | UPPERCASE, tracking-widest |
| Card number | JetBrains Mono | 0.7rem | 400 | — |
| Body text | Inter | 1rem | 400 | Normal |
| Caption/date | JetBrains Mono | 0.8rem | 400 | — |
| Preloader % | JetBrains Mono | 5rem–8rem | 300 | — |

---

## Spacing & Grid

### Home Card Grid
- Layout: Horizontal flex row, `overflow-x: scroll` (scrollbar hidden)
- Card size: `280px × 380px` (desktop), `220px × 300px` (mobile)
- Card gap: `1.5rem`
- Stagger: Even cards `margin-top: 0`, Odd cards `margin-top: 5rem`
- Padding: `2rem` left padding to start, `4rem` right padding to end

### Section Pages
- Max width: `4xl` (56rem) for single-column, `6xl` (72rem) for grids
- Padding: `5rem` top, `4rem` sides
- Timeline gutter: `2rem` left margin

---

## Component Specifications

### CustomCursor
- Dot: `8×8px`, `border-radius: 50%`, `background: #ffffff`, no lag
- Ring: `44×44px`, `border-radius: 50%`, `border: 1.5px solid #60A5FA`, spring lag
- Hover state: Ring scales to `64×64px`, fills with `rgba(96,165,250,0.15)`
- z-index: Dot=9999, Ring=9998

### CardGrid Cards
- Size: `280×380px` (desktop)
- Background: `#111111`
- Border: `1px solid rgba(255,255,255,0.06)` → `1px solid rgba(96,165,250,0.4)` on hover
- Hover glow: `box-shadow: 0 0 30px rgba(96,165,250,0.12)`
- Tilt: `±6deg` via mouse tracking, `perspective: 1000px`
- `layoutId`: `card-{sectionId}` for shared layout morph animation

### SphereTag (Floating Role Tags)
- Size: `110×110px`
- Border: `1px solid rgba(96,165,250,0.25)`
- Background: `radial-gradient(circle, rgba(96,165,250,0.08), transparent)`
- Text: Inter, uppercase, `0.6rem`, `#A3A3A3`, tracking-widest
- Outer rotating ring: SVG circle with rotating dashes
- Float animation: `y: [0, -18px, 0]`, `4–6s duration`, staggered delays

### PageLoader
- Background: `#0A0A0A` full-screen overlay
- Counter: JetBrains Mono, `5–8rem`, white text, blue `%` sign
- Progress bar: `2px` height at bottom, blue fill animates from 0→100%
- Duration: ~1.6s total, exits with fade + slide-up

### SectionNav
- Position: `fixed top-0`, full width, `z-40`
- Background: `rgba(10,10,10,0.85)` + `backdrop-blur`
- Links: uppercase Inter, `0.7rem`, muted grey → white on hover/active
- Active section: blue underline or blue text
- Home button: arrow icon left
- Mobile: horizontal scroll with hidden scrollbar

---

## Animation Tokens

| Animation | Easing | Duration |
|-----------|--------|----------|
| Card morph (layoutId) | Spring (stiffness:120, damping:20) | Auto |
| Page enter | `easeOut` | 0.5s |
| Page exit | `easeIn` | 0.3s |
| Cursor ring | Spring (stiffness:200, damping:20) | Auto |
| Sphere float | `easeInOut`, repeat infinity | 4–6s |
| Preloader count | Linear | 1.6s |
| Card tilt | `easeOut` | 0.1s |
| Hover states | `easeOut` | 0.2s |

---

## Z-Index Layers

| Layer | Z-Index | Element |
|-------|---------|---------|
| Cursor dot | 9999 | CustomCursor dot |
| Cursor ring | 9998 | CustomCursor ring |
| Preloader | 9997 | PageLoader overlay |
| Section overlay | 50 | Active section view |
| Section nav | 40 | SectionNav |
| Top navigation | 30 | Navigation bar |
| Floating tags | 5 | SphereTag elements |
| Background text | 0 | "MITEN SHAH" hero text |
