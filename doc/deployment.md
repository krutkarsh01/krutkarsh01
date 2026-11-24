# Deployment and Build Verification

Project: Kumar Utkarsh Professional Portfolio and AI Product Architecture Suite
Document: doc/deployment.md
Version: 5.0.0

## 1. Local Development Lifecycle
- Command: npm run dev
- Expected Output: Local server initializes at http://localhost:3000
- Hot Module Replacement (HMR) active with React Fast Refresh.
- Clean startup check: No missing module errors, clean console.

## 2. Production Build Lifecycle
- Command: npm run build
- Execution:
  1. TypeScript verification (tsc --noEmit)
  2. Next.js static asset compilation
  3. Static generation of all defined routes (/ , /about, /experience, /prototypes, /process, /skills, /testimonials, /contact)
  4. Generation of production bundle in .next directory or exported static assets in out directory.

## 3. Platform Configurations

### 3.1 Netlify Deployment
- Configuration File: netlify.toml
- Build Command: npm run build
- Publish Directory: .next (or out for pure static export)
- Node Version: >= 18.18.0
- Security Headers:
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;

### 3.2 Vercel Deployment
- Framework Preset: Next.js
- Root Directory: ./
- Build Command: next build
- Output Directory: Automatic (.next)
- Environment Variables: Standard production settings.

## 4. Zero Error Guarantee Checklist
- 1. Zero unresolved imports or dynamic path misconfigurations.
- 2. Zero horizontal scroll overflow across 320px to 2560px viewports.
- 3. Next.js image optimization configured with explicit widths/heights to eliminate Layout Shift (CLS = 0).
- 4. Lighthouse Performance target: >= 90.
- 5. Lighthouse Accessibility target: >= 95.
