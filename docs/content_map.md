# Content Map — Zero Data Loss Audit

All content sourced from `src/data/portfolioData.js`. This file must NEVER be modified during revamps.

---

## Personal Info
- **Name:** Miten Shah
- **Title:** Product Manager | Agile Strategist | Global Mindset
- **About:** "I'm Miten Shah, a Product Manager driven by curiosity, impact, and a user-first mindset..."
- **LinkedIn:** https://linkedin.com/in/mitenshah24
- **GitHub:** https://github.com/miten24?tab=repositories
- **Email:** mitenshah24@gmail.com
- **CV:** /MitenShah.pdf
- **WhatsApp:** +91 7874393172

---

## Experiences (5 total, 3 featured)

### 1. BigStep Technologies [FEATURED]
- Role: Project/Product Manager
- Duration: Jan 2026 – Present
- Location: Remote, India
- Bullets: 4 (HomeBuild Assist AI, 30% presales conversion, IHCL/Taj InnerCircle, Q1 2026 Certificate)

### 2. InteligenAI [FEATURED]
- Role: Product Manager
- Duration: Jan 2025 – Sep 2025
- Location: Gurugram, India
- Bullets: 4 (Intellivisa 30% processing reduction, GHMIS 2.0 score 55→81, 85% stakeholder visibility, cross-functional team of 10)

### 3. Comono AS [FEATURED]
- Role: Product Manager
- Duration: Sep 2023 – Nov 2024
- Location: Remote, UK
- Bullets: 4 (Prevale launch, full product cycle, 90% feedback alignment, productivity)

### 4. H. Samuel [NOT FEATURED]
- Role: P/T Sales & Strategy Associate
- Duration: Feb 2023 – Sep 2024
- Location: Leeds, UK
- Bullets: 4 (63% sales increase, 40% stock error reduction, 5/5 KPI ratings, 14 new customers record)

### 5. Ajatus Software [NOT FEATURED]
- Role: Project Manager Intern
- Duration: Mar 2022 – Aug 2022
- Location: Remote, India
- Bullets: 4 (8+ B2B clients, market research, inbound leads, technical reports)

**Section Layout**: Single-column timeline. Removed: stats bar (Companies/Locations/Domains), right-side info panel.

---

## Education (2 entries)

### 1. University of York (UK)
- Degree: MSc in Engineering Management
- Duration: Sep 2022 – Sep 2023
- Grade: Distinction (74/100)
- Modules: Management & Marketing of Technology, Enterprise, International Business, etc.

### 2. CHARUSAT (India)
- Degree: B.Tech in Computer Engineering
- Duration: Jul 2018 – May 2022
- Grade: Distinction (9.45/10 CGPA)
- Modules: Engineering Mathematics, Big Data Analytics, Python, Cloud Computing, etc.

**Section Layout**: Single-column timeline with Calendar + Award icons. Removed: right panel (Countries, Degrees count).

---

## Certifications (3 total)
1. Agile Software Development – ETH Zurich
2. Python & Statistics for Financial Analysis – HKUST Hong Kong
3. Digital Transformation Virtual Experience Program – BCG

**Section Layout**: Responsive grid cards (no tabs). Removed: "3 Certifications" count box, "Verified" tags on individual cert cards.

---

## Projects (9 total, 7 featured)

### Featured:
1. **The Miten Narrative** — Jan 2026–Present — 31% reader return, 168s avg engagement — https://the-miten-narrative.vercel.app/
2. **My PSJ Foundation** — Dec 2024–Present — NGO-donor matchmaking, 9+ NGOs — https://mypsjfoundation.vercel.app/
3. **Wedding Planner Kit** — July 2025–Aug 2025 — Power BI dashboard, 18+ metrics — Google Drive link
4. **Technology Transfer of AI** — Apr 2023–Sep 2023 — MSc Thesis — Google Drive link
5. **Forever Bikes Business Proposal** — Dec 2022–Apr 2023 — Cargo bike business, team of 6 — Google Drive link
6. **Hi-Mate Helmet Business Strategy** — Sep 2022–Apr 2023 — UK & India market expansion — Google Drive link
7. **Amazon Industry 4.0 Consultancy** — Sep 2022–Dec 2022 — 5 strategic recommendations

### Not Featured:
8. **Plan My Trip** — Jan 2022–Apr 2022 — Travel planning app, 15+ features — GitHub
9. **ERP System for Society Management** — Jul 2021–Nov 2021 — Society ERP — GitHub

**Section Layout**: Unified card design for all projects (featured and non-featured). Removed: Featured/Total count boxes, "Featured" tag distinction. All cards use: left accent bar, Calendar icon, title, description, "View Project" CTA. Show More/Show Less button for non-featured projects.

---

## Skills

### Product Skills (7)
Product Lifecycle Management, Agile, Scrum, PRD, UAT, Product Strategy, Roadmapping

### Tools & Technologies (9)
Jira, Claude Code, Figma (Make), Notion, Draw.io, Microsoft Office Suite, Google Analytics, MS Clarity, Power BI

### Soft Skills (6)
Stakeholder Management, Leadership, Analytical Thinking, Cross-Functional Collaboration, Communication, User Centric Thinking

**Section Layout**: All 3 categories visible at once (no tabs). Each category shows emoji + label header, followed by responsive flex wrap of skill chip pills. Removed: tab buttons, count badges (e.g., "Product Skills 7").

---

## Community (3 entries)

1. **Microsoft Student Ambassador** — Sep 2019–Sep 2023 — 100+ students mentored, Beta milestone
2. **Wentworth GCRC** — Events & Social Media Chair — Sep 2022–Sep 2023 — 8000+ students, £2,500 Greville Bloodworth Scholarship
3. **Rotaract Club of Surat** — Board of Directors — Feb 2021–Jul 2022 — hair donation drive, 10+ events

**Section Layout**: Stacked role cards with left accent bar, icon, organization, role, duration, description. Removed: "3 Roles" count box at top, impact note paragraph at bottom.

---

## Contact

**Email**: mitenshah24@gmail.com
**WhatsApp**: +91 7874393172

**Section Layout**: Business card format — name, designation, email, phone, headshot. CTAs: "Connect via Email" (mailto) + "Connect via WhatsApp" (deep link with prefilled text). Removed: form submission, backend Nodemailer.

---

## Navigation Sections

Home → About → Experience → Education → Certifications → Projects → Skills → Community → Contact

---

## UI Components Added/Removed in Latest Update

### Added Components
- **SparklesCore.jsx** — Canvas-based aceternity-style particle field beneath hero title

### Removed Components/Features
- "MITEN SHAH" ghost text background (replaced with SparklesCore particles)
- Role tags row below hero name
- Tab buttons in Skills section
- Count badges (e.g., "7 skills", "3 Certifications", "3 Roles")
- Right-side panels (Experience: Domains/Impact Metrics, Education: Countries/Degree count)
- Stat badges on About page (4+ Years, 10+ Products, 3 Continents)
- Headshot image on About page
- "Featured" tag distinction on Project cards
- Featured/Total count boxes on sections
- Contact form + Nodemailer backend (replaced with business card + mailto/WhatsApp links)
- LinkedIn + CV buttons from top navigation
- "Verified" tags on Certification cards
- Impact note paragraph in Community section

### Updated Features
- **CustomCursor**: Reverted to simple 8px dot + 44px ring (no magnification effect)
- **CardGrid**: DVD-style pick-up effect (±1.5-1.9deg base rotation, hover lift with scale 1.06, deeper shadows)
- **SphereTag**: Added `whiteSpace: 'pre-line'` for multi-line label rendering
- **FloatingTags**: Global Mindset repositioned to `right: 4%, top: 58%` (beside CTA buttons, not hidden)
- **All section pages**: Made fully responsive with `clamp()` for typography and spacing

---

## Key Metrics to Preserve

- 20% projected wastage reduction (HomeBuild Assist AI)
- 30% presales conversion rate (BigStep)
- 3+ IHCL projects including Taj InnerCircle App
- Q1 2026 Certificate of Appreciation
- 30% processing time reduction (Intellivisa)
- System performance score 55→81 (GHMIS 2.0)
- 85% stakeholder visibility improvement
- Cross-functional team of 10
- 2 weeks go-to-market reduction (Prevale)
- 90% feedback alignment (Comono)
- 63% product sales increase (H. Samuel)
- 40% stock error reduction
- 5/5 KPI ratings (3 consecutive cycles)
- 14 new customers in one month (company record)
- 8+ B2B client projects (Ajatus)
- 31% reader return rate (The Miten Narrative)
- 168-second average engagement (The Miten Narrative)
- 9+ NGOs onboarded (PSJ Foundation)
- 100+ students mentored (Microsoft)
- 8,000+ students represented (Wentworth)
- £2,500 Greville Bloodworth Scholarship

---

## Documentation Maintenance Rule (CLAUDE.md)

**After every commit:** Update `/docs` if any design tokens, component API, or content structure changed.
- **design_system.md**: Update for style changes, new components, animation changes, layout updates
- **content_map.md**: Update for content changes, section layout changes, removed/added features
- **Last updated**: April 2026 (after commits: DVD card effect, tabless skills, SphereTag text rendering fix)
