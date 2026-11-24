# Technology Architecture and Standards

Project: Kumar Utkarsh Professional Portfolio and AI Product Architecture Suite
Document: doc/technology.md
Version: 5.0.0

## 1. Core Framework & Runtime
- Runtime: Node.js (>= 18.18.0)
- Framework: Next.js (App Router architecture)
- Language: TypeScript with strict mode enabled
- Rendering Paradigm: Static Site Generation (SSG) with client hydration where required for interactive WebGL, canvas, and audio elements.

## 2. Styling and Design Engine
- Styling Framework: Tailwind CSS
- Component Library: shadcn/ui (radix-ui primitives)
- Animation: Lucide React icons, Framer Motion for micro-interactions
- Responsive Philosophy: Single fluid responsive layout using standard breakpoints:
  - Mobile: < 640px (sm)
  - Tablet: 640px to 1023px (md)
  - Desktop: 1024px to 1279px (lg)
  - Wide Display: >= 1280px (xl / 2xl)
  - Note: No separate mobile or desktop tab switching; pure adaptive CSS Grid and Flexbox.

## 3. Core Dependencies Specification
- Dependencies:
  - next: ^14.2.0 or ^15.0.0
  - react: ^18.3.0 or ^19.0.0
  - react-dom: ^18.3.0 or ^19.0.0
  - lucide-react: ^0.400.0
  - clsx: ^2.1.0
  - tailwind-merge: ^2.3.0
  - @radix-ui/react-dialog
  - @radix-ui/react-dropdown-menu
  - @radix-ui/react-slot
  - class-variance-authority: ^0.7.0
- Dev Dependencies:
  - typescript: ^5.4.0
  - @types/node: ^20.0.0
  - @types/react: ^18.3.0
  - @types/react-dom: ^18.3.0
  - postcss: ^8.4.0
  - tailwindcss: ^3.4.0
  - autoprefixer: ^10.4.0
  - eslint: ^8.0.0
  - eslint-config-next: ^14.2.0

## 4. Reusable Component Hierarchy
- UI Primitives:
  - Button (variants: default, secondary, outline, ghost, link, sage-pill)
  - Card (Header, Title, Description, Content, Footer)
  - Badge / Pill (tags, platforms, country indicators)
  - Dialog / Modal (for deep case study and prototype expansion)
  - Sheet (for universal mobile drawer navigation)
- Composite Components:
  - UniversalHeader (Navbar with brand logo, nav links, schedule CTA, mobile toggle)
  - UniversalFooter (Brand summary, quick links, compliance info, social channels, copyright)
  - HeroSection (Typography, floating indicators, metric pills)
  - MetricGrid (Proven statistics, rework reduction stats, market reach)
  - PrototypeShowcase (Interactive cards, role selectors, architecture previews)
  - TestimonialWall (Client reviews, verified roles, trust metrics)
  - ContactDrawer / DispatchGateway (Inquiry form, meeting booking trigger)
