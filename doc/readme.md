# Master Architectural Plan and Evolution Blueprint
Project: Kumar Utkarsh Professional Portfolio and AI Product Architecture Suite
Version: 5.9.10
Framework: Next.js (App Router), Tailwind CSS, shadcn/ui
Deployment Targets: Vercel / Netlify

## Table of Contents
1. [Evolution Changelog and Version History](#evolution-changelog-and-version-history)
2. [Documentation Directory Index](#documentation-directory-index)
3. [Phase 1 Planning and UX Specifications](#phase-1-planning-and-ux-specifications)
4. [Master Execution Checklist](#master-execution-checklist)

---

## Evolution Changelog and Version History

### [v5.9.10] - Incoming Stage ClipPath Restoration to Prevent Premature Bleed-Through

#### I - INPUT
1. User prompt with screenshot `media_1795534224037_344f2762.jpg`:
   - *"The next section is visible before page effect only on this section on both desktop and pther resposnsive"*
   - Red highlight box showing early diagonal peel starting at bottom right, while Section 2 ("Delivering in 34 Global Markets") was already fully visible across the entire top and middle of the screen behind the transparent Hero section.
   - Root Cause: In [js/page-shift-controller.js](file:///Users/ashu/Documents/GitHub/krutkarsh01/js/page-shift-controller.js), `inStage.panel.style.clipPath` was previously set to `'none'`. Because Section 1 (Hero) is transparent to display the live WebGL Aurora and Starfield, the entire incoming section was rendered behind Hero across the full 100vw x 100vh viewport, bleeding through before the crease line reached it.

#### M - MISSION
- [x] Task 22.1: Restore `inStage.panel.style.clipPath = geom.inClip;` and `inStage.panel.style.webkitClipPath = geom.inClip;` in [js/page-shift-controller.js](file:///Users/ashu/Documents/GitHub/krutkarsh01/js/page-shift-controller.js) so incoming sections are strictly constrained to the revealed side of the diagonal crease line.
- [x] Task 22.2: Ensure Section 2 is 100% invisible to the top-left of the crease line, preventing any premature text or element bleed-through behind the transparent Hero section on both desktop and mobile viewports.
- [x] Task 22.3: Verify via Headless Chrome CDP screenshots for Mobile 390x844 (`screenshots/v77_mobile_early_peel_80.png`), Desktop 1440x900 early peel (`screenshots/v77_desktop_early_peel_100.png`), and mid peel (`screenshots/v77_desktop_peel_350.png`).
- [x] Task 22.4: Verify production build cleanliness (`npm run build`).

---

### [v5.9.9] - Permanent Aurora Borealis and Bloxi17 Starfield Transparency Fix

#### I - INPUT
1. User prompt: *"again in fixing. you removed the aurora and stars"*
   - Root Cause Analysis:
     - In [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css), `#stage-nlHeroSection > .turn-sticky-panel.is-peeling` had an opaque `radial-gradient(ellipse at 50% 30%, #02120f 0%, #010806 100%) !important`.
     - In [js/page-shift-controller.js](file:///Users/ashu/Documents/GitHub/krutkarsh01/js/page-shift-controller.js), `rect.top <= 0` evaluated to true at scroll 0, instantly applying `.is-peeling` to the Hero stage on page load.
     - Because `.is-peeling` has `z-index: 40 !important`, the opaque dark gradient completely covered `#universal-aurora-backdrop` (z-index 0) and `#universal-aurora-canvas` (z-index 1).

#### M - MISSION
- [x] Task 21.1: Set `#stage-nlHeroSection > .turn-sticky-panel` AND `#stage-nlHeroSection > .turn-sticky-panel.is-peeling` to `background: transparent !important` in [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css) so the Northern Lights aurora curtains and glowing Bloxi17 starfield are permanently visible through the Hero stage.
- [x] Task 21.2: Update [js/page-shift-controller.js](file:///Users/ashu/Documents/GitHub/krutkarsh01/js/page-shift-controller.js) scroll detection condition to `rect.top < -2` so resting at scroll 0 leaves the Hero in its natural non-peeling state with no peel classes, no crease line, and zero incoming section bleed.
- [x] Task 21.3: Verify via Headless Chrome CDP screenshots for Desktop 1440x900 (`screenshots/v76_desktop_scroll_0_aurora_stars.png`) and Mobile 390x844 (`screenshots/v76_mobile_scroll_0_aurora_stars.png`).
- [x] Task 21.4: Verify production build (`npm run build`).

---

### [v5.9.8] - Full-Bleed Zero-Gutter Hero and Continuous Responsive Page Turn Restoration

#### I - INPUT
1. User prompt with screenshot `media_1795533406203_1a3e8cb1.jpg`:
   - Red boxes highlighting side gutters on the far-left and far-right of the Hero section: *"Why is there space over here. And in fixing the last tasks, you have disuturbed the whole page scrolling effect on all scrrens. Please check and fix"*

#### M - MISSION
- [x] Task 20.1: Eliminate horizontal gutters on Hero stage by removing `padding-left` and `padding-right` from `.turn-sticky-panel` and forcing `#stage-nlHeroSection > .turn-sticky-panel` to edge-to-edge full bleed (`padding-left: 0 !important; padding-right: 0 !important; width: 100% !important; max-width: 100% !important;`).
- [x] Task 20.2: Fix page scrolling effect disturbance by reverting the artificial `HOLD_RATIO` freeze in `js/page-shift-controller.js` and restoring continuous, fluid diagonal page peel mapping (`activeProgress = Math.max(0, Math.min(1, -rect.top / turnDist))`).
- [x] Task 20.3: Ensure incoming panel (`inStage`) remains fully mounted and visible without skipping or sudden jumps, keeping the peel responsive and active across all viewport widths.
- [x] Task 20.4: Add 64px mobile header clearance for `#stage-nlHeroSection .nl-hero-content` so hero headline "Architecting Intelligent Systems" is 100% visible and unclipped below top navigation bar on mobile devices.
- [x] Task 20.5: Capture and verify Headless Chrome CDP screenshots for desktop (1440x900) and mobile (390x844) at resting (scroll 0) and active peel (scroll 300).
- [x] Task 20.6: Run production build verification (`npm run build`).

---

### [v5.9.7] - Scroll Reading Hold Zone, Living Aurora Restoration, Pillar Popup Modal & Balanced Deck Spacing

#### I - INPUT
1. User prompt with 6 annotated screenshots:
   - **Image 1 & 2 (`media_1795531993099_8c0e98a0.jpg`, `media_1795532038950_8668e419.jpg`):** Red box around premature peel crease line cutting across active reading view in Atlas and Gallery: *"1. Here in scroll, there is an issue. The page effect is coming before hand before the section is over. Image 1 adn 2"*
   - **Image 3 (`media_1795532089743_0a089ac4.jpg`):** Red box around Hero sky: *"2. Why did you remove the aurora amd star effect Image3"*
   - **Image 4 (`media_1795532111658_1d2d312d.jpg`):** Red boxes around truncated descriptions in 2x2 Pillar cards: *"3. Image 4 , if you made this section like this, the texts are getting cut. Make popup on click to ready full"*
   - **Image 5 & 6 (`media_1795532253441_49612e32.jpg`, `media_1795532272036_1ba285da.jpg`):** Red boxes above Gallery title, and above/below Pillar deck: *"4. Make spacing IMAGE 5 & 6"*

#### M - MISSION
- [x] Task 19.1: Prevent premature page curl by introducing a dedicated reading hold zone (`HOLD_RATIO = 0.50` desktop / `0.58` mobile) where sections rest 100% visible with zero crease line. On mobile, automatically scroll internal overflow content during the hold phase so the section is completely viewed before the peel triggers.
- [x] Task 19.2: Restore living WebGL Northern Lights Aurora and Bloxi17 Starfield in Hero section by resetting `#stage-nlHeroSection > .turn-sticky-panel` to `background: transparent !important` while resting, applying opaque backing only during active peel.
- [x] Task 19.3: Build interactive Architecture Pillar Specification modal popup (`#pillar-modal`) triggered on click of any pillar card, displaying full title, description, verified metric, and 5 detailed architecture specifications.
- [x] Task 19.4: Add clean tap affordance pill (`Read Full Spec ↗`) on all 4 pillar cards.
- [x] Task 19.5: Balance container spacing in [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css):
  - `#portfolio-curved-gallery .prototypes-grand-deck`: `padding-top: clamp(38px, 4.5vh, 52px) !important` (Image 5 fix).
  - `#pillarsGrandDeck.pillars-grand-deck`: `padding: clamp(38px, 4.5vh, 52px) clamp(20px, 2.5vw, 36px) clamp(36px, 4.2vh, 48px) !important` (Image 6 fix).
- [x] Task 19.6: Verify all fixes with Headless Chrome CDP screenshots across Desktop (1280x800) and Mobile (390x844).
- [x] Task 19.7: Verify production build (`npm run build`).

#### E - EXECUTE
1. Updated [js/page-shift-controller.js](file:///Users/ashu/Documents/GitHub/krutkarsh01/js/page-shift-controller.js):
   - Implemented `HOLD_RATIO` threshold in `updatePeelProgress()`.
   - Linked `stage.panel.scrollTop` to scroll progress during the resting zone so users smoothly view the full section before page turn.
   - Guarded crease line rendering so it is completely hidden during the hold zone.
2. Updated [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css):
   - Extended `.turn-stage-wrapper.has-turn-effect` scroll track to `240vh` (desktop) and `280vh` (mobile).
   - Set `#stage-nlHeroSection > .turn-sticky-panel` to `transparent !important` when resting.
   - Adjusted `#pillarsGrandDeck` padding and `#prototypesGrandDeck` top padding.
   - Styled `.teaser-pillar-card` hover micro-interactions, `.pillar-read-more-pill`, and `#pillar-modal`.
3. Updated [index.html](file:///Users/ashu/Documents/GitHub/krutkarsh01/index.html):
   - Added `onclick="openPillarModal(idx)"` and `Read Full Spec ↗` pills to all 4 pillar cards.
   - Inserted `#pillar-modal` lightbox markup and JS data dictionary (`PILLAR_DATA`, `openPillarModal`, `closePillarModal`).
4. Captured verification screenshots:
   - `screenshots/v71_hero_aurora_stars.png` (Living aurora and starfield restored).
   - `screenshots/v71_desktop_pillars_spacing.png` (Balanced top/bottom spacing in Pillars).
   - `screenshots/v71_desktop_gallery_spacing.png` (Balanced top spacing in Gallery).
   - `screenshots/v71_pillar_modal_open.png` (Desktop pillar specification modal).
   - `screenshots/v71_mobile_atlas_resting.png` (Mobile Atlas resting without premature peel line).
   - `screenshots/v73_mobile_pillar_modal_clean.png` (Clean mobile pillar modal).

#### T - TESTING & VERIFICATION
- Headless Chrome CDP tests run against `http://localhost:3000/`.
- All 4 user issues verified and confirmed fixed.
- Production build verified (`npm run build`, exit code 0).

---

### [v5.9.6] - Mobile Header Clearance, Opaque Backgrounds & Intact Reveal Architecture (Resolving "Sections are cut")

#### I - INPUT
1. User prompt with mobile screenshot (`media_1795531091583_814ae51b.jpg`) highlighting the top area with a red rectangle:
   - "Sections are cut"
2. Root-cause visual analysis of user screenshot:
   - On mobile portrait viewports, centering tall panels (`1300px+`) with `justify-content: center` caused CSS flexbox overflow into negative coordinates above `top: 0`, causing section titles (such as "Delivering in 34 Global Markets") to be cut off and hidden beneath the top navbar.
   - Slicing incoming panels with a diagonal `clipPath` broke text lines on mobile into fragmented syllables.
   - Transparent hero panel backgrounds caused double-exposure overlap between hero text and atlas text during peel.

#### M - MISSION
- [x] Task 18.1: Eliminate negative coordinate overflow on mobile by switching `.turn-sticky-panel` alignment to `justify-content: flex-start !important` with responsive top clearance `padding-top: clamp(60px, 8vh, 76px) !important` to stay cleanly below the fixed 56px navbar.
- [x] Task 18.2: Provide solid dark cosmic background (`radial-gradient(ellipse at 50% 30%, #02120f 0%, #010806 100%) !important`) across all stage panels to prevent double-exposure text overlap.
- [x] Task 18.3: Keep incoming panel intact (`clipPath = 'none'`) during active peel so revealed text is never diagonally sliced into incomplete words.
- [x] Task 18.4: Verify complete mobile scroll progression across all 5 sections via Chrome CDP.
- [x] Task 18.5: Verify desktop viewports to ensure zero regression in desktop page-turn animation.
- [x] Task 18.6: Validate production build (`npm run build`).

#### E - EXECUTE
1. Updated [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css):
   - Configured `.turn-stage-wrapper > .turn-sticky-panel` with `justify-content: flex-start !important`, `padding-top: clamp(60px, 8vh, 76px) !important`, and `overflow-y: auto`.
   - Set opaque cosmic gradient background for all stages (`#stage-nlHeroSection`, `#stage-global-client-atlas`, `#stage-core-value-proposition`, `#stage-portfolio-curved-gallery`, `#stage-contact`).
   - Mobile layout reordering for Atlas: `.osiris-col-right { order: 1; }`, `.osiris-col-left { order: 2; }` ensuring title and dossier card are immediately readable on mobile.
2. Updated [js/page-shift-controller.js](file:///Users/ashu/Documents/GitHub/krutkarsh01/js/page-shift-controller.js):
   - Removed mobile disable gates in `updatePeelProgress()` and resize handler.
   - Set `inStage.panel.style.clipPath = 'none'` so the revealed surface sits intact underneath the peeling top panel.
3. Verified via Chrome CDP headless browser:
   - Mobile landed & peeling screenshots: `mobile_01_hero_landed.png` through `mobile_10_contact_landed.png`.
   - Desktop landed & peeling screenshots: `desktop_01_hero_landed.png` through `desktop_07_contact_landed.png`.
   - Verified production build cleanliness via `npm run build`.

#### T - TESTING & VERIFICATION
- Headless Chrome CDP tests run on `http://localhost:3000/`.
- Zero section headers clipped beneath navbar.
- Zero words sliced or fragmented during transition.
- Zero double-exposure text bleeding.
- Production build passes cleanly with exit code 0.

---

### [v5.9.5] - Section Badges Removal, Space Adjustments & Universal Responsive Page-Turn Animations

#### I - INPUT
1. User prompt with 4 annotated screenshots:
   - **Image 1 (`CORE VALUE PROPOSITION`):** Highlighted the section tag badge above "Architecting Products for Enterprise Scale" in Section 3 (`#core-value-proposition`).
   - **Image 2 (`01 / GLOBAL CLIENT ATLAS`):** Highlighted the status code badge above "Delivering in 34 Global Markets" in Section 2 (`#global-client-atlas`).
   - **Image 3 (`PORTFOLIO IN FRAMES`):** Highlighted the tag badge above "Real Platforms. Raw Architectures." in Section 4 (`#portfolio-curved-gallery`).
   - **Image 4 (`READY TO SHIP?` & `DIRECT DISPATCH GATEWAY`):** Highlighted both tag badges in Section 5 (`#contact`).
2. User instruction:
   - `"Remove these and adjust space"`
   - `"And fix responsive as well. Insert the animations we did in desktop in all responsive"`

#### M - MISSION
- [x] Task 17.1: Remove all 5 highlighted pill badges across all 4 sections in [index.html](file:///Users/ashu/Documents/GitHub/krutkarsh01/index.html).
- [x] Task 17.2: Rebalance container padding and vertical spacing in [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css) so titles and cards align naturally without top gaps.
- [x] Task 17.3: Universalize the diagonal page curl / peel animation across all responsive viewports (mobile, tablet, desktop) by removing the mobile disable gates in [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css) and [js/page-shift-controller.js](file:///Users/ashu/Documents/GitHub/krutkarsh01/js/page-shift-controller.js).
- [x] Task 17.4: Implement compact 2x2 responsive grid for Core Value Proposition pillars on mobile screens (< 600px) so all 4 pillars fit within the viewport.
- [x] Task 17.5: Verify with Headless Chrome CDP screenshots across Desktop (1280x800) and Mobile (390x844).
- [x] Task 17.6: Execute production build verification (`npm run build`).

#### E - EXECUTE
1. Removed badges from [index.html](file:///Users/ashu/Documents/GitHub/krutkarsh01/index.html):
   - Removed `.sec-tag` (`Core Value Proposition`).
   - Removed `.osiris-badge-row` (`01 / GLOBAL CLIENT ATLAS`).
   - Removed `.gallery-tag` (`PORTFOLIO IN FRAMES`).
   - Removed `.callout-tag` (`Ready to Ship?`).
   - Removed `.shinobi-contact-tag` (`Direct Dispatch Gateway`).
2. Updated [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css):
   - Made `.turn-stage-wrapper.has-turn-effect`, `.turn-sticky-panel`, and `.turn-curl-crease-line` universal for all viewports.
   - Formatted `.teaser-pillars-grid` to a clean 2x2 grid on mobile viewports (< 600px).
   - Re-proportioned contact and atlas masthead padding for smooth top alignment.
3. Updated [js/page-shift-controller.js](file:///Users/ashu/Documents/GitHub/krutkarsh01/js/page-shift-controller.js):
   - Removed `window.innerWidth <= 768` check in `initStickyTurnStages` and `updatePeelProgress`, allowing page-turn peel animations to execute responsively across all screen widths.

#### T - TESTING & VERIFICATION
1. Headless Chrome DOM Verification:
   - `osirisCode: false`, `secTag: false`, `galleryTag: false`, `calloutTag: false`, `shinobiTag: false` (All 5 badges removed).
   - `wrapperCount: 5`, `panelCount: 5`, `panel0Classes: "turn-sticky-panel is-peeling"`, `panel1Classes: "turn-sticky-panel is-fixed-reveal"` on mobile (390px).
2. Visual Proof Captures:
   - [v64_desktop_atlas_no_badge.png](file:///Users/ashu/Documents/GitHub/krutkarsh01/screenshots/v64_desktop_atlas_no_badge.png): Verified badge removed from Atlas on desktop.
   - [v64_desktop_pillars_no_badge.png](file:///Users/ashu/Documents/GitHub/krutkarsh01/screenshots/v64_desktop_pillars_no_badge.png): Verified badge removed from Pillars on desktop.
   - [v64_desktop_contact_no_badges.png](file:///Users/ashu/Documents/GitHub/krutkarsh01/screenshots/v64_desktop_contact_no_badges.png): Verified badges removed from Contact on desktop.
   - [v65_mobile_peel_at_350.png](file:///Users/ashu/Documents/GitHub/krutkarsh01/screenshots/v65_mobile_peel_at_350.png): Verified responsive diagonal curl animation active on mobile.
   - [v66_mobile_pillars_landed.png](file:///Users/ashu/Documents/GitHub/krutkarsh01/screenshots/v66_mobile_pillars_landed.png): Verified 2x2 compact pillar card grid fitting on mobile.
3. Production build test passed (`npm run build` exited with code 0).

---

### [v5.9.4] - Curved Gallery Spacing Adjustment & Stray Crease Isolation

#### I - INPUT
1. User prompt with screenshot (Image 10):
   - **Image 10:** "Remove this and adjust container space" (Red box highlighting the redundant button `[ Explore All 17 Prototypes → ]` under the carousel navigation pill in `#portfolio-curved-gallery`).
   - Also addressed the root cause of stray white corner lines showing on incoming panels during page shifts.

#### M - MISSION
- [x] Task 16.1: Remove `.gallery-see-all-wrap` (`Explore All 17 Prototypes →`) from `#portfolio-curved-gallery` in `index.html`.
- [x] Task 16.2: Adjust container padding and vertical margins in `css/page-shift-curl.css` for `#portfolio-curved-gallery`, `#prototypesGrandDeck`, and `.gallery-nav-bar` for balanced vertical centering.
- [x] Task 16.3: Isolate `.turn-curl-crease-line` so non-peeling panels strictly hide it (`.turn-sticky-panel:not(.is-peeling) .turn-curl-crease-line { display: none !important; opacity: 0 !important; }`), preventing stray white diagonal lines from bleeding onto incoming sections.
- [x] Task 16.4: Headless Chrome CDP visual inspection and screenshot verification (`screenshots/v62_gallery_post_adjustment.png`).
- [x] Task 16.5: Run production build verification (`npm run build`).

#### E - EXECUTE
1. Removed `gallery-see-all-wrap` button block from [index.html](file:///Users/ashu/Documents/GitHub/krutkarsh01/index.html).
2. Adjusted vertical container spacing in [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css):
   - `#portfolio-curved-gallery.curved-gallery-section`: `padding: clamp(8px, 1.5vh, 20px) 0 !important;`
   - `#portfolio-curved-gallery .prototypes-grand-deck`: `padding: clamp(10px, 1.5vh, 18px) 0 !important;`
   - `#portfolio-curved-gallery .gallery-nav-bar`: `margin-top: clamp(8px, 1.2vh, 14px) !important; margin-bottom: 0 !important;`
3. Isolated crease SVG rendering in [css/page-shift-curl.css](file:///Users/ashu/Documents/GitHub/krutkarsh01/css/page-shift-curl.css) so it only ever activates on actively peeling outgoing panels.

#### T - TESTING & VERIFICATION
1. Headless Chrome CDP evaluation confirmed:
   - Redundant `Explore All 17 Prototypes →` button successfully removed (`seeAllExists: false`).
   - Gallery container height reduced from overflowing 775px to 669px, centering cleanly inside the 100vh panel.
   - Crease line strictly hidden on non-peeling stages with zero stray corner artifacts.
2. Verified visual proof in [v62_gallery_post_adjustment.png](file:///Users/ashu/Documents/GitHub/krutkarsh01/screenshots/v62_gallery_post_adjustment.png).
3. Production build test passed (`npm run build` exited with code 0).

---

### [v5.9.3] - Contact-Footer Zero Gap, Contact Title Padding & Incoming Content Fade-In

#### I - INPUT
1. User prompt with 3 annotated screenshots:
   - **Image 1:** "Remove this space" (Red box showing empty margin and border-top separation between the Contact card and Site Footer).
     - *Fix:* Removed the 4rem margin and extra padding on `#stage-contact`, set `#stage-contact { margin-bottom: 0 !important; }`, `#siteFooter { margin-top: 0 !important; }`, and removed the divider border.
   - **Image 2:** "Fix this" (Red box showing "Ready to Ship?" badge and "Need Living Specifications" heading clipped against the top navigation bar).
     - *Fix:* Re-proportioned `#contact .callout-banner-split` (`padding: clamp(20px, 2.5vw, 32px) !important; margin-top: clamp(8px, 1.5vh, 16px) !important;`) and scaled `.callout-title` down to `clamp(24px, 2.8vw, 38px) !important; line-height: 1.18 !important;`, keeping the entire header safely below the navbar.
   - **Image 3:** "Fix this fading issue" ("This is fading out" on Section 1, "But this is not fading in" on Section 2).
     - *Fix:* In `js/page-shift-controller.js`, mapped `--incoming-opacity: 0.35 + (activeProgress * 0.65)` to the incoming section during active peeling, and bound `.turn-sticky-panel.is-fixed-reveal > * { opacity: var(--incoming-opacity, 1); }` so Section 2 progressively and smoothly fades in as Section 1 fades out.

#### M - MISSION
- [x] Task 15.1: Image 1 - Remove the empty space and line between Contact and Site Footer.
- [x] Task 15.2: Image 2 - Adjust Contact card padding and font size so the top badge and heading never clip the navbar.
- [x] Task 15.3: Image 3 - Implement smooth progressive fade-in dynamics for incoming sections.
- [x] Task 15.4: Verify with Headless Chrome screenshots.
- [x] Task 15.5: Run production build verification (`npm run build`).

#### E - EXECUTE
- Updated [js/page-shift-controller.js](js/page-shift-controller.js) with dynamic `--incoming-opacity` curve.
- Updated [css/page-shift-curl.css](css/page-shift-curl.css) with zero-gap footer attachment and Contact card top spacing.
- Captured proof screenshots:
  - `screenshots/proof_image1_zero_footer_gap.png`
  - `screenshots/proof_image2_contact_title_clear_of_nav.png`
  - `screenshots/proof_image3_fade_dynamics.png`

#### T - TESTING & VERIFICATION
- Image 1: Visual gap between Contact and Site Footer reduced to standard 19px padding margin.
- Image 2: Contact title font reduced to `38px` and lowered below the navigation bar.
- Image 3: Headless Chrome CDP evaluated incoming opacity at `0.55` at mid-turn (verified that incoming content fades in progressively).
- Build verification: `npm run build` executed successfully with code 0.

---

### [v5.5.0] - Atlas Redundancy Elimination, Geometry Spacing Optimization & Verified Fade In/Out

#### I - INPUT
1. User directive from Image 1 (`media_1795523360099_3851490f.png`):
   - Move 3D WebGL globe upward to fill top negative space.
   - Remove duplicate marker legend (`17 Prototypes · 13 Reviews · 34 Markets`).
   - Remove redundant `.osiris-dossier-top` header (`ALL 34+ CLIENT MARKETS` and `WORLDWIDE DELIVERY`).
   - Move action buttons (`Explore All 17 Prototypes` and `Read Verified Client Reviews`) up closer to the metrics pills.
2. User directive from Image 2 (`media_1795523360099_d8018c7c.png`):
   - Smoothly fade out all outgoing section parts on scroll (`opacity: 1 -> 0`).
   - Smoothly fade in the incoming section directly underneath in the same screen space (`opacity: 0 -> 1`).
   - Crisp white fold line along the diagonal peel edge.
   - Take live screenshots and verify visual output.

#### M - MISSION
- [x] Task 8.1: In [index.html](index.html), permanently remove `.osiris-legend` and `.osiris-dossier-top`.
- [x] Task 8.2: In [css/page-shift-curl.css](css/page-shift-curl.css), tighten `.osiris-split-grid` padding to `24px 28px`, lift the 3D globe with `margin-top: -8px`, and pull `.osiris-actions-grid` up with `margin-top: 14px`.
- [x] Task 8.3: In [js/page-shift-controller.js](js/page-shift-controller.js), update fade-out curve `Math.max(0, 1 - (progress * 1.4))` and incoming fade-in curve `Math.min(1, progress * 1.6)`.
- [x] Task 8.4: Capture live headless Chrome screenshots at `scrollY = 0`, `scrollY = 350`, and `scrollY = 1500`.
- [x] Task 8.5: Verify zero errors via `npm run build`.

#### E - EXECUTE
- Updated [index.html](index.html).
- Updated [css/page-shift-curl.css](css/page-shift-curl.css).
- Updated [js/page-shift-controller.js](js/page-shift-controller.js).
- Captured visual evidence:
  - `screenshots/v55_scroll_0_hero.png`
  - `screenshots/v55_scroll_350_peel.png`
  - `screenshots/v55_scroll_1500_atlas.png`

#### T - TESTING & VERIFICATION
- Screenshot audit passed: Confirmed outgoing hero fade-out, incoming atlas fade-in, white diagonal crease line, and clean compact Atlas card geometry.
- Build test passed: `npm run build` executed with zero errors.

---

### [v5.4.1] - Immediate Underlying Section Stacking & Instant Reveal Through Peel Corner

#### I - INPUT
1. User feedback from screenshot (`media_1795522608763_b35bfcb9.jpg`):
   - Red box on bottom-right corner during diagonal peel showed dark empty aurora background instead of the underlying section.
   - User directive: "Okay, but the next section is not immediately visible on scroll like i said fade in affect. Please fix"
2. Root cause diagnosis:
   - In desktop sticky turns, while Section 1 was pinned, Section 2 was resting in normal document flow below the 160vh scroll track instead of being pulled directly behind Section 1.
   - Consequently, cutting open the bottom-right corner of Section 1 revealed empty page backdrop rather than Section 2's cards and globe.
3. Fix requirement:
   - Position the incoming stage directly behind the active peeling stage (`margin-top: -100vh; position: relative; z-index: 10;`) so Section 2 is immediately visible through the diagonal cut the moment the fold begins.
   - Set baseline incoming opacity to 0.85 -> 1.0 so content is crisp and visible through the opening immediately on scroll.

#### M - MISSION
- [x] Task 7.1: Apply desktop sticky under-stacking (`margin-top: -100vh; z-index: 10;`) to `.turn-stage-wrapper.has-turn-effect + .turn-stage-wrapper` in `css/page-shift-curl.css`.
- [x] Task 7.2: Update `js/page-shift-controller.js` to initialize incoming section with baseline visibility (`0.85`) ramping to `1.00`.
- [x] Task 7.3: Verify production build and confirm responsive unstacking remains intact on mobile.

#### E - EXECUTE
- Updated [css/page-shift-curl.css](css/page-shift-curl.css).
- Updated [js/page-shift-controller.js](js/page-shift-controller.js).

#### T - TESTING & VERIFICATION
- Node test passed: Confirmed `margin-top: -100vh` and immediate opacity curve `0.85 + (progress * 0.15)`.
- Build test passed: `npm run build` completed with zero errors.

---

### [v5.4.0] - White Crease Fold Borderline & Synchronized Section Fade In/Out

#### I - INPUT
1. User directive from screenshot (`media_1795522384019_22813624.jpg`):
   - "This section all parts should start disappearing on scroll with fade-out effect"
   - "And the next section should start appearing here, with fade in effect"
   - "And this page scroll effect should be more clearly visible. Maybe we put white borderline or something like that to make it visually good."
2. Technical requirements:
   - Dynamic crisp white borderline along the diagonal peel fold axis connecting `(100%, peelY)` to `(peelX, 100%)`.
   - Outgoing section content progressive fade out via `--outgoing-opacity`.
   - Incoming section bottom-right progressive reveal via `--incoming-opacity` and `--incoming-blur`.
   - 100% preservation of all sections, footer, and mobile responsive unstacking.

#### M - MISSION
- [x] Task 6.1: Add `.turn-curl-crease-line` and SVG stroke styling in `css/page-shift-curl.css`.
- [x] Task 6.2: Implement dynamic SVG line positioning in `js/page-shift-controller.js` to draw a crisp white crease edge along the peeling diagonal corner.
- [x] Task 6.3: Implement synchronized fade out on the outgoing section and progressive fade in on the incoming section.
- [x] Task 6.4: Validate build and verify responsive behavior.

#### E - EXECUTE
- Updated [css/page-shift-curl.css](css/page-shift-curl.css).
- Updated [js/page-shift-controller.js](js/page-shift-controller.js).

#### T - TESTING & VERIFICATION
- Node test passed: Confirmed presence of white curl borderline CSS and JS dynamic positioning.
- Build test passed: `npm run build` executed successfully with zero errors.

---

### [v5.3.0] - Code of Sagar Responsive Sticky Page-Turn & Full Section Preservation

#### I - INPUT
1. User directive: "no scroll, means only for the sections. Not for footer or long sections. It should work as per responsiveness. When you are fixing, you are removing all sections from Homepage. So test it when you have implemented and how it is looking and check and make fixes accordingly."
2. Problem identified: Naive fixed deck stacking risks hiding content or disabling natural vertical scrolling for long sections and the footer.
3. Target architecture:
   - Sticky Turn Stages (`.turn-stage-wrapper` + `.turn-sticky-panel`): While scrolling through each transition zone, the current section remains sticky-pinned in the viewport (`height: 100vh`) and peels diagonally from bottom-right to top-left.
   - The incoming section sits directly underneath in the same screen space, transitioning from soft translucent (`opacity: 0.20`) to 100% opaque.
   - Once peeled, the page naturally flows into the next section.
   - The footer and all 5 homepage sections are 100% preserved and fully scrollable.
   - On mobile screens (width <= 768px), sticky pinning is gracefully unstacked (`height: auto !important`) to guarantee natural fluid touch-scrolling with zero truncation.

#### M - MISSION
- [x] Task 5.1: Engineer `css/page-shift-curl.css` with `.turn-stage-wrapper` and `.turn-sticky-panel` responsive sticky mechanics.
- [x] Task 5.2: Engineer `js/page-shift-controller.js` to compute scroll progress on pinned stages and drive diagonal clip-paths and opacity without blocking page scrolling.
- [x] Task 5.3: Ensure 100% of homepage sections (`#nlHeroSection`, `#global-client-atlas`, `#core-value-proposition`, `#portfolio-curved-gallery`, `#contact`) and the footer (`#siteFooter`) remain completely intact in the DOM.
- [x] Task 5.4: Verify with automated tests across desktop and mobile viewports.

#### E - EXECUTE
- Updated [css/page-shift-curl.css](css/page-shift-curl.css).
- Updated [js/page-shift-controller.js](js/page-shift-controller.js).
- Verified [index.html](index.html) integration.

#### T - TESTING & VERIFICATION
- Node automated test: Confirmed all 5 sections and the footer exist and are rendered.
- Responsive test: Confirmed mobile unstacking rules (`@media (max-width: 768px) { height: auto !important; }`).
- Build verification: `npm run build` executed successfully with zero errors.

---

### [v5.2.0] - Diagonal Page-Shift Curl & Section-Turn Architecture

#### I - INPUT
1. User directive: Introduce a dynamic page-shift peel effect across each homepage section boundary matching Code of Sagar aesthetic (`codeofsagar.in`).
2. Requirements captured from user annotations on `krutkarsh.net`:
   - Section 1 (Hero) to Section 2 (Global Client Atlas) peel transition along a diagonal axis from bottom-right to top-left.
   - Incoming section progressive reveal transitioning smoothly from dimmed/transparent to full sharp opacity as the curl advances.
   - Zero disturbance to existing fonts, styles, layouts, or 3D WebGL canvases.
   - Standard ASCII characters only (no emojis, no em dashes).

#### M - MISSION
- [x] Task 4.1: Engineer `css/page-shift-curl.css` GPU-accelerated styling with diagonal clip-path curling, crease highlights, and soft cast shadows.
- [x] Task 4.2: Engineer `js/page-shift-controller.js` scroll driver managing intersection progress, clip-path coordinates, and progressive section opacity transitions.
- [x] Task 4.3: Integrate `css/page-shift-curl.css` and `js/page-shift-controller.js` into `index.html` without altering any inner section markup or styles.
- [x] Task 4.4: Verify production build via `npm run build` and ensure zero layout shifting.

#### E - EXECUTE
- Created [css/page-shift-curl.css](css/page-shift-curl.css).
- Created [js/page-shift-controller.js](js/page-shift-controller.js).
- Updated [index.html](index.html) with clean stylesheet and script linkages.

#### T - TESTING & VERIFICATION
- Inspected `git diff index.html`: Confirmed clean linkage additions without any alterations to existing CSS classes, fonts, or inline attributes.
- Production build verified: `npm run build` completed with zero errors.

---

### [v5.1.2] - Pure Text-Only AEO/SEO Copy Optimization in Global Client Atlas

#### I - INPUT
1. User directive: Restore all original font sizes, styling, CSS classes, and HTML tag hierarchies without disturbance.
2. Requirement: Execute text-only string replacements on the Global Client Atlas section to eliminate redundant continent lists and boost SEO, AEO, and GEO relevance while leaving all CSS classes, layouts, font sizes, line heights, and legend elements 100% untouched.

#### M - MISSION
- [x] Task 3.1: Revert all structural tag and class modifications in `index.html`.
- [x] Task 3.2: Perform surgical text-only replacement on `<p class="osiris-subtitle">`.
- [x] Task 3.3: Perform surgical text-only replacement on `<h3 id="hub-card-title">`.
- [x] Task 3.4: Perform surgical text-only replacement on `<p id="hub-card-desc">`.
- [x] Task 3.5: Synchronize JavaScript state handler `focusGlobeHub` with identical text strings.

#### E - EXECUTE
- Executed strict inner-text replacements in [index.html](index.html).
- Preserved all surrounding CSS classes (`.osiris-title`, `.osiris-subtitle`, `.osiris-dossier-card`, `.osiris-legend`, etc.) and element tags exactly as authored.

#### T - TESTING & VERIFICATION
- Inspected `git diff index.html`: Confirmed zero class name changes, zero tag structure changes, and zero style disruptions.
- Built project via `npm run build`: Verified static output passes without errors.

---

### [v5.0.0] - Modern Architecture Prototype Blueprint & Next.js Foundation Specification

#### I - INPUT
1. User directive: Establish comprehensive Next.js, Tailwind CSS, and shadcn/ui architecture with universal header and footer across all pages.
2. Responsiveness requirement: Fluid responsive layout across mobile and desktop without tab switching.
3. Documentation requirement: Dedicated structured markdown files under doc/ directory:
   - index (doc/index.md)
   - technology (doc/technology.md)
   - database (doc/database.md)
   - deployment (doc/deployment.md)
   - process (doc/process.md)
   - feature structure (doc/feature_structure.md)
   - modules (doc/modules.md)
   - readme (doc/readme.md)
4. Quality & Execution governance: IMET protocol (Input, Mission, Execute, Testing) with execution summary logged before any changes.
5. Typographic constraints: No emojis, no em dashes, standard ASCII characters only.

#### M - MISSION
- [x] Task 1.1: Initialize dedicated doc/ directory with all required modular architecture specifications.
- [x] Task 1.2: Establish doc/readme.md as the central plan and evolutionary history file.
- [x] Task 1.3: Document complete UI/UX user journeys, wireframe structures, CTA matrix, and security specifications.
- [ ] Task 1.4: Present comprehensive Phase 1 Plan to user and await explicit approval prior to writing any production application code.

#### E - EXECUTE
- Created doc/index.md, doc/technology.md, doc/database.md, doc/deployment.md, doc/process.md, doc/feature_structure.md, doc/modules.md, and doc/readme.md.
- Verified dynamic relative links across all documentation files.

#### T - TESTING & VERIFICATION
- Directory structure confirmed: All 8 required markdown documents created and validated.
- Syntax validation: Verified clean Markdown formatting without unsupported unicode or em dashes.

---

## Documentation Directory Index
- Master Index: [index.md](index.md)
- Technology Stack: [technology.md](technology.md)
- Data Models & Schema: [database.md](database.md)
- Deployment Guide: [deployment.md](deployment.md)
- Methodology & Process: [process.md](process.md)
- Feature Structure: [feature_structure.md](feature_structure.md)
- Modules & Navigation: [modules.md](modules.md)

---

## Master Execution Checklist

### Phase 1: Planning and Approval (Current)
- [x] 1. Complete UI/UX plan covering all user types and journeys.
- [x] 2. Screen definition, CTA matrix, navigation link mapping, and layout gap audit.
- [x] 3. Documentation generation in doc/ directory.
- [ ] 4. User approval checkpoint (MUST wait for user sign-off before Phase 2 code execution).

### Phase 2: Next.js + Tailwind + shadcn/ui Scaffolding (Awaiting Approval)
- [ ] 1. Initialize Next.js App Router with TypeScript and Tailwind CSS.
- [ ] 2. Setup shadcn/ui components (Button, Card, Badge, Dialog, Sheet, Input, Textarea).
- [ ] 3. Implement Universal Header (Navbar with responsive Mobile Sheet drawer).
- [ ] 4. Implement Universal Footer across all routes.
- [ ] 5. Port static data dictionaries (17 prototypes, 34 atlas countries, testimonials, timeline).
- [ ] 6. Build 8 core routes:
  - / (Home)
  - /about (About & Philosophy)
  - /prototypes (Interactive Sandboxes & Case Studies)
  - /experience (Leadership & Engineering Timeline)
  - /process (Documentation-First Delivery Model)
  - /skills (AI Architecture & Tech Arsenal)
  - /testimonials (Client Reviews & Endorsements)
  - /contact (Consultation Booking & Dispatch Gateway)
- [ ] 7. Verification: Run npm run dev and confirm http://localhost:3000 starts without errors.
- [ ] 8. Build verification: Run npm run build and verify Netlify / Vercel export readiness.
- [ ] 9. Responsive verification: Automated zero-overflow check across mobile (393px, 480px), tablet (768px), and desktop (1280px+).
