# QA Testing Methodology, Comprehensive Test Sheet & Security Vulnerability Assessment

**Project**: Kumar Utkarsh Portfolio & Prototype Showcase Platform (`krutkarsh01`)  
**Domain**: B2B IT Business Analysis, AI Product Strategy & Interactive Client Prototypes  
**Roles Analyzed**: Standard Visitor, Prospective Client, Prototype Evaluator, System Administrator  
**Auditor Role**: QA Testing & Security Expert  
**Date**: November 4, 2026  
**Status**: Completed  

---

## Step 1: Understand the Domain, Platform & Roles

### 1.1 Core Domain & System Architecture
The platform is an executive-grade portfolio and interactive delivery hub for a Senior Business Analyst & AI Product Strategist. The system comprises:
- **Core Presentation Layer**: High-performance static HTML5/CSS3/ES6 web application deployed via Netlify edge nodes and run locally via Node.js HTTP server.
- **Shinobi Design System**: Hardware-accelerated UI/UX architecture themed around Naruto character philosophies (Kakashi's multi-role analysis, Minato's Hiraishin rapid delivery, Naruto's perseverance, Obito's dual perspectives, Jiraiya's living specifications).
- **Interactive Prototyping Engine**: Dual-mode rendering engine providing standard Desktop UI and mobile iPhone wireframe simulation mode, linking to 10+ live client cloud prototypes (`oneapp.dev`, `netlify.app`, `vercel.app`).
- **3D WebGL HUD & Dynamic Physics**: Embedded 3D global delivery visualization and ambient chakra particle canvas.

### 1.2 Platform Scope
- **Web Application**: Accessible across desktop, laptop, tablet, and mobile browsers (Chrome, Safari, Firefox, Edge).
- **Responsive Width Spectrum**: 8 distinct width profiles (1920px, 1440px, 1200px, 1024px, 768px, 600px, 414px, 375px).
- **Local Dev Server**: Node.js HTTP service listening on `http://localhost:3000/`.
- **CI/CD & Edge Hosting**: Netlify automated continuous delivery (`npm run build`).

### 1.3 User Roles & Permission Levels
1. **Public Visitor / Client Prospect**:
   - Capabilities: Browse all 8 core routes (`/`, `/about/`, `/process/`, `/skills/`, `/prototypes/`, `/experience/`, `/testimonials/`, `/contact/`).
   - Switch between Desktop UI and Mobile Wireframe simulator.
   - Toggle aesthetic theme modes (3-Tomoe Sharingan Dark Mode vs Toad Sage Light Mode).
   - Click out to live interactive prototypes and third-party calendar booking (Google Calendar / Cal.com).
2. **Prototype Evaluator / QA Reviewer**:
   - Capabilities: Test live multi-role prototype links (Admin dashboards, resident portals, driver interfaces, vendor systems).
   - Evaluate specifications, UI workflows, and state transitions across external prototype environments.
3. **Site Owner / Administrator (Kumar Utkarsh)**:
   - Capabilities: Full control over source repository, Netlify hosting configurations, prototype URL mappings, DNS, and analytics tags.

---

## Step 2: Extract Functional & Testing Requirements

### 2.1 Functional Modules Under Test
- **Module 1: Hitai-ate Konoha Headband (Navigation Bar)**: Enclosed metallic titanium plate, 1-kanji square clan seals (`里`, `道`, `門`, `術`, `巻`, `歴`, `盟`, `信`), active glowing orange pill, Sharingan theme switcher, embedded viewport mode switch, and `Let's Talk` Minato Kunai CTA.
- **Module 2: Universal Viewport Switcher (Desktop UI vs Mobile Wireframe Simulator)**: Instant mode toggle switching body between standard full-bleed responsive layout and centered 414x896px mobile phone wireframe chassis.
- **Module 3: Visual Theme Engine (Sharingan Dark Mode & Sage Light Mode)**: CSS custom property switching, persistent theme state in `localStorage`, 360-degree jutsu spin animation on activation.
- **Module 4: Ambient Shinobi FX (Canvas & SVG Animations)**: Particle canvas engine rendering chakra motes with physics, interactive cursor hover glow, and 3D WebGL globe canvas fallback.
- **Module 5: 6-Stage Delivery Pipeline & Kunai Flight Animation**: Minato's Three-Pronged Kunai traveling dynamically along SVG path milestones with character-arc tooltips.
- **Module 6: Prototypes Directory & Live URL Gateway**: 10 enterprise prototype cards with live external links, authentic high-resolution screenshots, role badges, and tech stacks.
- **Module 7: Hokage Monument & Summoning Scroll (Footer)**: Jiraiya Mt. Myōboku Toad Sage Oil watermark (`油`), Leaf Village coordinates, 3D stone mountain wordmark, and direct communication dispatch links.
- **Module 8: Responsive Engine & 8-Screen Width Integrity**: Zero horizontal overflow, strict component bounds, legible typography across all 8 breakpoints.

### 2.2 Applicable Testing Levels
- **Unit Testing**: DOM node integrity, CSS class toggle validity, localStorage read/write resilience, SVG path coordinate bounds.
- **Integration Testing**: Viewport mode switching synchronization with navigation bar status, theme toggle persistence across multi-page navigation, link routing between all 8 pages.
- **TDD (Test-Driven Development) Sequence**:
  1. Test fail: Viewport toggle outside bounds.
  2. Fix: Nest toggle inside `.nav-actions`.
  3. Test pass: Bounded element verification.
- **Functional Testing**: End-to-end user navigation, form link dispatches, external prototype accessibility.
- **Negative & Edge Testing**: Viewport resizing while in wireframe mode, rapid multi-click on Sharingan toggle, disabled JavaScript execution fallback.

---

## Step 3 & 4: Structured Comprehensive Test Sheet

| Test ID | Priority | User Role | Feature / Module | Functionality to be Tested | Test Type | Expected Outcome | Status | Tested By | Comments |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-NAV-001** | High | Visitor | Hitai-ate Header | Plate Enclosure & Zero Overflow | Functional | All buttons, seals, and CTAs remain 100% inside the brushed titanium headband plate at &ge;1200px. | **Done** | QA-Lead | Confirmed via `screenshots/v18_header_crop.png`. |
| **TC-NAV-002** | High | Visitor | Hitai-ate Header | 1-Kanji Seal Dimension & Wrapping | Unit | Every clan badge (`里`, `道`, `門`, `術`, `巻`, `歴`, `盟`, `信`) renders as an exact 18x18px square with zero text wrapping. | **Done** | QA-Lead | Fixed line-height and `white-space: nowrap`. |
| **TC-NAV-003** | Medium | Visitor | Hitai-ate Header | Active Link Visual Indicator | Functional | Current route displays glowing Kurama flame capsule with zero rogue underlines. | **Done** | QA-Lead | Cyan pseudo-element underlines removed. |
| **TC-NAV-004** | High | Visitor | Hitai-ate Header | Rivet Outer Anchoring | Functional | Left and right decorative rivets (`•`) sit at `left: 8px` and `right: 8px` with no button collision. | **Done** | QA-Lead | Generous 1.4rem padding prevents collision. |
| **TC-VIEW-001** | Critical | Evaluator | Viewport Switcher | Embedded Header Switcher | Integration | Viewport switcher `[🖥️|📱]` resides cleanly inside `.nav-actions` without floating over content. | **Done** | QA-Lead | Floating bottom-right pill completely eliminated. |
| **TC-VIEW-002** | Critical | Evaluator | Wireframe Mode | iPhone Chassis Rendering | Functional | Activating wireframe mode confines viewport to 414px centered frame with notch and chassis styling. | **Done** | QA-Lead | Verified via `screenshots/v18_wireframe.png`. |
| **TC-VIEW-003** | Medium | Evaluator | Wireframe Mode | Mode Persistence | Unit | Toggle state reflects immediately in button active highlight (`.active` class). | **Done** | QA-Lead | Event listener synchronizes UI icons. |
| **TC-THM-001** | High | Visitor | Theme Engine | Sharingan / Sage Theme Toggle | Functional | Clicking eye toggles between Dark Sharingan theme and Light Toad Sage theme. | **Done** | QA-Lead | CSS custom properties switch instantly. |
| **TC-THM-002** | Low | Visitor | Theme Engine | 360° Jutsu Spin Animation | Functional | Eye icon undergoes 360-degree rotation transition on click. | **Done** | QA-Lead | `transform: rotate(360deg)` applied on active. |
| **TC-THM-003** | Medium | Visitor | Theme Engine | LocalStorage Persistence | Unit | Reloading the page retains user's selected theme preference across all 8 routes. | **Done** | QA-Lead | Stored in `localStorage.getItem('shinobi-theme')`. |
| **TC-PGE-001** | Critical | Prospect | Site Routing | All 8 Routes HTTP 200 | Integration | `/`, `/about/`, `/process/`, `/skills/`, `/prototypes/`, `/experience/`, `/testimonials/`, `/contact/` return HTTP 200. | **Done** | QA-Lead | Tested on local server and static paths. |
| **TC-PGE-002** | Critical | Prospect | Content Preservation | 100% Exact Copy & Labels | Functional | Zero text, metrics (700+ projects, 35% rework cut, 98% rating), or labels removed or altered. | **Done** | QA-Lead | Verified line-by-line against original HTML files. |
| **TC-PRT-001** | High | Evaluator | Prototypes Page | Authentic Screenshot Display | Functional | All 10 prototype cards display authentic high-resolution screenshots instead of mismatched mockups. | **Done** | QA-Lead | Replaced with captured live web screenshots. |
| **TC-PRT-002** | High | Evaluator | Prototypes Page | Live Prototype URL Links | Integration | Clicking prototype CTA navigates to live cloud instances (`oneapp.dev`, `netlify.app`, `vercel.app`). | **Done** | QA-Lead | All 18 prototype URLs verified active. |
| **TC-FTR-001** | High | Visitor | Shinobi Footer | Zero Floating Pill Occlusion | Functional | Bottom area of footer is completely free of intrusive floating overlays. | **Done** | QA-Lead | Confirmed via `screenshots/v18_footer_crop.png`. |
| **TC-FTR-002** | Medium | Visitor | Shinobi Footer | Hokage Rock 3D Monument | Functional | `KUMAR UTKARSH` wordmark renders with 3D stone mountain relief styling. | **Done** | QA-Lead | CSS text-shadow layering produces stone depth. |
| **TC-FTR-003** | Medium | Visitor | Shinobi Footer | Jiraiya Oil Seal Watermark | Functional | Card exhibits semi-transparent Mt. Myōboku `油` stamp at upper right. | **Done** | QA-Lead | Clean background watermark with low opacity. |
| **TC-FTR-004** | High | Visitor | Shinobi Footer | Minato Kunai Flight Animation | Functional | Three-pronged Kunai glides smoothly along 6-stage journey route SVG. | **Done** | QA-Lead | SVG motion path execution confirmed. |
| **TC-RES-001** | Critical | All | Responsiveness | 8-Screen Width Check | Negative | Zero horizontal scrollbars at 1920, 1440, 1200, 1024, 768, 600, 414, 375px. | **Done** | QA-Lead | Verified with headless Chrome across viewports. |
| **TC-BLD-001** | Critical | Admin | Build System | Local Dev Server Execution | Functional | `npm run dev` boots HTTP server on `http://localhost:3000/`. | **Done** | QA-Lead | Active and verified via curl. |
| **TC-BLD-002** | Critical | Admin | Deployment | Netlify Build Success | Functional | `npm run build` exits with code 0. | **Done** | QA-Lead | Output confirmed: `Production static assets verified for Netlify.` |

---

## Step 5: Edge Cases, Negative Testing & Administrative Controls

### 5.1 Negative & Stress Scenarios
1. **Rapid Multi-Click Stress on Theme Switcher**:
   - Condition: User clicks the Sharingan toggle 20 times in 2 seconds.
   - Result: No animation queue stutter; CSS transition handles mid-flight class toggling gracefully without DOM locking.
2. **Micro-Viewport Stress (<360px)**:
   - Condition: Window resized down to 320px (iPhone SE 1st gen).
   - Result: Hitai-ate navbar collapses seamlessly into mobile hamburger drawer; brand monogram shrinks to icon-only badge; zero horizontal page scroll.
3. **Canvas Fallback on WebGL Disabled / Low Memory**:
   - Condition: WebGL context creation failure or headless environments without GPU.
   - Result: Script gracefully catches WebGL initialization error; ambient 2D particle canvas or static SVG chakra grid renders without console exceptions.
4. **Local Storage Failure / Incognito Mode Restrictions**:
   - Condition: Browser disables `localStorage` (Safari strict private mode).
   - Result: Wrapped in `try-catch` blocks; defaults to Sharingan Dark Theme safely without halting script execution.
5. **Slow Network / Lazy Image Load Edge**:
   - Condition: Slow 3G connection during prototype card loading.
   - Result: Images have explicit `width`, `height`, and `loading="lazy"` attributes preventing Cumulative Layout Shift (CLS).

---

## Step 6: Security & Vulnerability Assessment (Post-Feature Completion)

*Audit conducted by independent Security Auditor & Penetration Tester. Below are all identified security risks, exploit paths, breaking points, and attack vectors strictly formatted in bullet points without code patches.*

### Identified Security Vulnerabilities & Exploit Paths:

* **Clickjacking & UI Redressing on Embedded Prototypes**:
  - The application provides live links and potential iframe embeds to external prototype domains (`oneapp.dev`, `netlify.app`, `vercel.app`).
  - Several external staging prototype endpoints lack `Content-Security-Policy: frame-ancestors` and `X-Frame-Options: DENY/SAMEORIGIN` headers.
  - A malicious third party could embed the client prototype administrative interfaces in an invisible iframe to perform clickjacking or credential harvesting against authenticated evaluators.

* **Reverse Tabnabbing Attack Vector via Target Blank Hyperlinks**:
  - Outgoing prototype and social hyperlinks utilizing `target="_blank"` on certain legacy HTML pages originally lacked explicit `rel="noopener noreferrer"`.
  - An untrusted external site opened in a new tab could access `window.opener.location` to redirect the victim's portfolio tab to a spoofed phishing page.

* **DOM-based Cross-Site Scripting (XSS) via Unsanitized URL Hash / Search Parameters**:
  - Dynamic routing and tab switching logic in client scripts inspect `window.location.hash` to highlight active tabs.
  - If malicious payloads like `location.hash = "#<img src=x onerror=alert(1)>"` are passed and injected via `innerHTML` into dynamic modal containers without HTML entity encoding, arbitrary JavaScript execution occurs in the origin context.

* **Client-Side Storage Tampering & Denial of Service**:
  - The theme engine and wireframe preferences rely directly on unvalidated `localStorage` values (`shinobi-theme`, `shinobi-viewport`).
  - An attacker executing script injection or physical console manipulation can inject serialized malicious payloads or fill local storage quota (5MB+), triggering uncaught quota exceed exceptions that brick interactive controls.

* **Cross-Origin Resource Sharing (CORS) Misconfiguration on Live Prototype APIs**:
  - Several backend API endpoints backing the live cloud prototypes (`oneapp.dev` backend microservices) emit `Access-Control-Allow-Origin: *` with `Access-Control-Allow-Credentials: true`.
  - This permissive wildcard posture permits unauthorized third-party origins to query prototype customer and resident records if session cookies are present.

* **Information Exposure Through Public Source Maps & Git Metadata**:
  - If production deployment does not strip `.map` source files or block access to `.git` folders on static hosting providers, internal directory structures, staging API keys, and developer commit logs are directly exposed to unauthenticated scrapers.

* **Third-Party CDN Script Hijacking (Subresource Integrity Deficiency)**:
  - External CDN scripts (such as FontAwesome or WebGL three.js CDNs loaded from external servers) lack cryptographic `integrity="sha384-..."` hashes.
  - In the event of a CDN compromise or DNS cache poisoning attack, malicious scripts could be executed inside all visitor sessions without detection.

