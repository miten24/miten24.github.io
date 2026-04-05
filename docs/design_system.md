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
| Hero name "MITEN SHAH" | Playfair Display | clamp(2.8rem, 7vw, 6rem) | 900 | Normal |
| Section H2 | Playfair Display | clamp(2rem, 5vw, 4rem) | 900 | Normal |
| Card title | Inter | 0.76rem | 700 | UPPERCASE, tracking-widest |
| Body text | Inter | clamp(0.82rem, 1.5vw, 0.875rem) | 400 | Normal |
| Caption/date | JetBrains Mono | 0.68rem | 400 | UPPERCASE |
| Skill chip | Inter | clamp(0.78rem, 1.4vw, 0.85rem) | 500 | Normal |
| Preloader % | JetBrains Mono | 5rem–8rem | 300 | — |

---

## Spacing & Grid

### Home Card Grid
- Layout: Horizontal flex row, `overflow-x: scroll` (scrollbar hidden)
- Card size: `clamp(190px, 23vw, 260px) × clamp(270px, 36vw, 370px)` (responsive)
- Card stagger: Even cards `margin-top: 0`, Odd cards `margin-top: 5rem` (diagonal effect)
- Card gap: Flex layout, `snap-scroll` enabled

### Section Pages
- Max width: `1040px` for most sections
- Padding: `7rem clamp(1rem, 4vw, 2rem) 5rem` (responsive top/sides/bottom)
- Content uses `clamp()` for responsive typography and spacing

---

## Component Specifications

### CustomCursor
- **Dot**: `8×8px`, `#FFFFFF`, `border-radius: 50%`, direct mouse follow (no lag)
- **Ring**: `44×44px` (normal) / `64×64px` (hover), `1.5px solid #60A5FA`, spring lag effect
- **Spring config**: `stiffness: 280, damping: 22, mass: 0.5`
- **Hover state**: Ring scales to 64px, fills with `rgba(96,165,250,0.12)`, transition 0.2s
- **z-index**: Dot=9999, Ring=9998
- **Behavior**: Hides when cursor leaves viewport

### CardGrid Cards (DVD Pick-up Effect)
- **Size**: `clamp(190px, 23vw, 260px) × clamp(270px, 36vw, 370px)` (responsive)
- **Base state**: `rotate(±1.2–1.9deg)` — slight tilt like physical cards
- **Background**: `#111111`
- **Default border**: `1px solid rgba(255,255,255,0.07)`
- **Cover art**: 58% of card height, responsive `<CoverArt>` SVG
- **Hover state**:
  - `translateY(-22px)` — lifts card off surface
  - `scale(1.06)` — subtle zoom
  - `rotate(0deg)` — straightens tilt
  - Shadow: `0 32px 80px rgba(0,0,0,0.65), 0 8px 30px rgba(59,130,246,0.2)`
- **Mousemove tilt**: Adds subtle 3D perspective (`rotateX`, `rotateY`) on top of lifted state
- **Transition**: `transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)`
- **layoutId**: `card-{sectionId}` for shared layout morph animation

### SphereTag (Floating Role Tags)
- **Size**: `120×120px`
- **Border**: `1px solid rgba(96,165,250,0.25)`
- **Background**: `radial-gradient(circle at 38% 38%, rgba(96,165,250,0.12) 0%, rgba(59,130,246,0.05) 60%, transparent)`
- **Backdrop**: `blur(4px)`
- **Text**:
  - Font: Inter, 0.55rem, weight 600
  - Color: `#A3A3A3`
  - Tracking: 0.18em uppercase
  - **White-space**: `pre-line` (renders `\n` as line breaks)
  - Line-height: 1.4
- **Float animation**: `y: [0, -18px, 0]`, 4–6s duration, infinite, staggered delays
- **Positions**:
  - Product Manager: `left: 3%, top: 18%`
  - Agile Strategist: `right: 3%, top: 10%`
  - Global Mindset: `right: 4%, top: 58%`

### SparklesCore (NEW — Canvas-based particle field)
- **Purpose**: Aceternity-style particle shimmer beneath hero title
- **Type**: Canvas-based RAF animation
- **Particles**:
  - Max count: 500 (capped at `Math.min(count, 500)`)
  - Size range: `minSize: 0.4, maxSize: 1.1` (default)
  - Density: configurable via `particleDensity` prop (default 900)
  - Color: `#FFFFFF` (or custom `particleColor`)
- **Life cycle**:
  - Fade-in/fade-out via `life` property (0 to 1 to 0)
  - Life speed: `0.003 + Math.random() * 0.005` (default)
  - Drift upward at `speedY: 0.15–0.4 × speed`
- **Rendering**:
  - Particles drawn as circles via `ctx.arc()`
  - Opacity: `p.life * 0.85` (max 85%)
  - Filtered with radial gradient mask to fade edges
- **ResizeObserver**: Auto-resizes canvas on container resize

### SparklesBackground (DOM-based particle system)
- **Purpose**: Ambient sparkle particles scattered on section pages
- **Type**: DOM-based (SVG stars) + CSS transitions
- **Particles**: Configurable count (default 20–36 per section)
- **Spawn rate**: Every 120–400ms until count reached
- **Lifespan**: 1.4–3s per particle, CSS transition fade-out + rotation
- **Colors**: Alternates between two colors (`color1`, `color2`)
- **Star shape**: SVG path 24×24px viewport, scales 8–18px
- **Drop shadow**: `drop-shadow(0 0 4px {color})`
- **Cleanup**: Dead particles removed from DOM every frame

### PageLoader (Pre-existing — no changes)
- Background: `#0A0A0A` full-screen overlay
- Counter: JetBrains Mono, `5–8rem`, white text, blue `%` sign
- Progress bar: `2px` height at bottom, blue fill animates 0→100%
- Duration: ~1.6s total, exits with fade + slide-up

### SectionNav (Full-width responsive)
- Position: `fixed top-0`, full width, `z-40`
- Background: `rgba(10,10,10,0.85)` + `backdrop-blur`
- Layout:
  - **Desktop**: `justifyContent: 'space-evenly'` to fill width
  - **Mobile**: `overflowX: 'auto'` for horizontal scroll
- Links: uppercase Inter, `0.7rem`, muted grey → white on active
- Active section: blue underline or blue text
- Home button: Playfair italic "Miten Shah" text that navigates to home

### Navigation (Logo-only)
- Single element: Italic Playfair "Miten Shah" button
- No LinkedIn link or CV button in top nav
- Navigates home on click

---

## Layout Changes in This Update

### Skills Section (NEW)
- **Before**: 3 tabs (`Product Skills 7`, `Tools & Technologies 9`, `Soft Skills 6`) requiring clicks
- **Now**: All categories visible at once, no tabs, no count badges
- **Display**: Each category has emoji + label, followed by responsive flex wrap of skill chips
- **Background**: `SparklesBackground count={20}` for ambient sparkle effect

### About Section (Simplified)
- Removed: Headshot image, stat badges (4+ Years, 10+ Products, 3 Continents)
- Kept: Bio text, 3 pillar cards (Product Leadership, Agile Mindset, Global Perspective)
- **Background**: `SparklesBackground count={20}`

### Experience Section (Single-column)
- Removed: Stats bar (Companies/Locations/Domains), right-side panel
- Layout: Timeline only, responsive padding with `clamp()`
- **Background**: `SparklesBackground count={16}`

### Education Section (Single-column)
- Removed: Right panel (Countries, Degrees count)
- Layout: Timeline only with Calendar + Award icons
- **Background**: `SparklesBackground count={16}`

### Certifications Section (Grid)
- Removed: "3 Certifications" count box, "Verified" tags on cards
- Header: Just "Professional Certifications." text (no count)
- Grid: `repeat(auto-fill, minmax(clamp(200px, 28vw, 260px), 1fr))`
- **Background**: `SparklesBackground count={16}`

### Projects Section (Unified cards)
- Removed: Featured/Total count boxes, "Featured" tag distinction
- All projects: Same card format (left accent bar, Calendar icon, title, description, View button)
- **Background**: `SparklesBackground count={16}`

### Community Section (Simplified)
- Removed: "3 Roles" count box, impact note paragraph at bottom
- Layout: Just stacked role cards with icon, organization, role, duration, description
- **Background**: `SparklesBackground count={20}`

### Contact Section (Business card format)
- Layout: Name, designation, email (mailto), phone (WhatsApp), headshot
- CTAs: "Connect via Email" + "Connect via WhatsApp" with prefilled text
- Email: Simple `mailto:mitenshah24@gmail.com` (no encoding)
- WhatsApp: `https://wa.me/917874393172?text=...` with `encodeURIComponent`

### Hero Section (Title + Sparkles)
- **Removed**: "MITEN SHAH" ghost text background, role tags row below name
- **Added**: SparklesCore beneath title (aceternity-style particle field)
- **CTA buttons**: Download CV + View LinkedIn
- **Scroll hint**: "Scroll to explore" button scrolls card grid horizontally right
- **Global Mindset sphere**: Positioned at `right: 4%, top: 58%` (beside CTA buttons, not behind)

---

## Animation Tokens

| Animation | Easing | Duration |
|-----------|--------|----------|
| Card morph (layoutId) | Spring (stiffness:120, damping:20) | Auto |
| Card pick-up (hover) | cubic-bezier(0.23, 1, 0.32, 1) | 0.35s |
| Card tilt (mousemove) | Immediate | Real-time |
| Page enter | `easeOut` | 0.5s |
| Page exit | `easeIn` | 0.3s |
| Cursor ring spring | Spring (stiffness:280, damping:22) | Auto |
| Cursor ring hover | `easeOut` | 0.2s |
| Sphere float | `easeInOut`, repeat infinity | 4–6s (staggered) |
| Preloader count | Linear | 1.6s |
| Hover border/glow | `easeOut` | 0.25s–0.3s |
| Skill chip hover | Spring (stiffness:200) | 0.3s |

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
| Background | 0 | Page background, sparkles |

---

## Responsive Breakpoints

The design uses **CSS `clamp()`** for fluid responsiveness without explicit breakpoints:
- Font sizes: `clamp(min, vw%, max)` scale with viewport
- Padding: `clamp(mobile_px, vw%, desktop_px)` adapts to screen size
- Card dimensions: `clamp(190px, 23vw, 260px)` scales between limits
- **Breakpoint indicator**: `md: 768px` used for CSS hiding (e.g., `hidden md:block` for Global Mindset on mobile)
