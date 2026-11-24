# Module Architecture, Navigation, CTAs, and Security Contracts

Project: Kumar Utkarsh Professional Portfolio and AI Product Architecture Suite
Document: doc/modules.md
Version: 5.0.0

## 1. Universal Layout Architecture

### 1.1 Universal Header (Navbar)
- Fixed at top (sticky) with subtle backdrop-blur and 1px border.
- Layout:
  - Left: Brand Logo / Wordmark ("Kumar Utkarsh" with title badge "Senior AI Product Strategist")
  - Center (Desktop): Navigation links:
    - Overview (/)
    - Prototypes (/prototypes)
    - Process (/process)
    - Experience (/experience)
    - Skills (/skills)
    - Testimonials (/testimonials)
    - About (/about)
  - Right:
    - Primary CTA Button: "Schedule Strategic Consultation" (links to /contact or opens booking modal)
    - Mobile Menu Hamburger Toggle (visible on screens < 1024px)
- Responsive Mobile Drawer (Sheet):
  - Full height slide-out drawer containing all links, status badge, and contact action.
  - Automatically closes on route change.

### 1.2 Universal Footer
- Consistent across every single route without exception.
- Layout:
  - Column 1: Brand mission, credential overview, 34-country delivery footprint.
  - Column 2: Navigation shortcuts (Prototypes, Process, Experience, Skills).
  - Column 3: Trust & Proof (Testimonials, Global Atlas, Rework Metrics).
  - Column 4: Contact & Social (LinkedIn, GitHub, Email, Consultation Booking).
  - Bottom Bar: Copyright notice, Netlify/Vercel deployment indicators, and privacy disclaimer.

## 2. Call-to-Action (CTA) Matrix

| Location | Primary CTA | Action / Target | Secondary CTA | Action / Target |
| :--- | :--- | :--- | :--- | :--- |
| Universal Header | Schedule Consultation | /contact or Modal | - | - |
| Hero Section | Explore 17 Prototypes | /prototypes | Review Delivery Process | /process |
| Metrics Section | View Case Studies | /prototypes | Download Resume | /resume.pdf |
| Prototypes Grid | Launch Sandbox | Live external URL | Read Architecture Dossier | In-page Modal |
| Process Page | Initiate Project Audit | /contact | Review Case Studies | /prototypes |
| Universal Footer | Book Strategic Call | /contact | Connect on LinkedIn | External URL |

## 3. Security, Privacy, and Performance Contracts
- Form Input Sanitization: Strict regex validation on all contact fields; no unescaped HTML.
- Cross-Site Scripting (XSS) Prevention: React JSX native auto-escaping; zero dangerouslySetInnerHTML usage without sanitization.
- CSP Headers: Enforced in deployment config (Netlify headers / Next.js security headers).
- Asset Optimization: Next.js Image component for WebP/AVIF generation, prefetching for internal links.
- Layout Stability: Pre-allocated aspect ratios for all prototype mockups and diagrams.
