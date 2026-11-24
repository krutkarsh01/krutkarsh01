# Data Models and Storage Architecture

Project: Kumar Utkarsh Professional Portfolio and AI Product Architecture Suite
Document: doc/database.md
Version: 5.0.0

## 1. Storage Strategy
- Phase 1 & 2 Strategy: Type-safe statically compiled TypeScript data dictionaries located under src/data/.
- Advantages: Zero network latency, instant build-time SSG generation, Netlify/Vercel zero-serverless-cost distribution, 100% offline-verifiable.

## 2. Core Entities and Schemas

### 2.1 Project Prototype Schema (IPrototype)
- id: string (unique slug, e.g., meax, el-manantial, qma-system)
- title: string
- client: string
- category: enum (AI Agent, Multi-Tenant SaaS, HealthTech, Industrial IoT, E-Commerce)
- summary: string
- market: string (e.g., Saudi Arabia, Spain, USA, Lithuania)
- year: number
- metrics:
  - reworkReductionPercent: number
  - deliveryWeeks: number
  - usersServed: string
- tags: string[]
- liveDemoUrl: string
- architectureDossier:
  - problemStatement: string
  - solutionArchitecture: string
  - stack: string[]
  - keyRoles: string[]
  - compliance: string[]
- thumbnailImage: string
- heroImage: string

### 2.2 Global Client Atlas Schema (IAtlasCountry)
- countryCode: string (ISO 2-letter, e.g., SA, US, ES, LT)
- countryName: string
- projectCount: number
- flagEmoji: string (stored as unicode or SVG flag asset)
- flagshipProjects: string[]
- latitude: number
- longitude: number

### 2.3 Testimonial Schema (ITestimonial)
- id: string
- clientName: string
- clientRole: string
- company: string
- location: string
- quote: string
- rating: number (1 to 5)
- verifiedDelivery: boolean
- relatedProjectId: string

### 2.4 Navigation Item Schema (INavItem)
- label: string
- href: string
- isExternal: boolean
- badge: string (optional, e.g., 17 Prototypes)
- order: number

### 2.5 Contact Submission Schema (IContactSubmission)
- id: string (UUID)
- senderName: string
- senderEmail: string
- organization: string
- projectScope: string
- estimatedBudget: string
- targetTimeline: string
- submittedAt: string (ISO Timestamp)
- status: enum (Pending, Reviewed, Meeting Scheduled)
