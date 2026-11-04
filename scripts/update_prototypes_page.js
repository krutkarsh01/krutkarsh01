const fs = require('fs');
const { PROTO_DATA } = require('./update_data_and_templates');

let protoHtml = fs.readFileSync('prototypes/index.html', 'utf8');

// 1. Update PROTO_DATA dictionary in prototypes/index.html
const pDataStart = protoHtml.indexOf('var protoData = {');
const pDataEnd = protoHtml.indexOf('window.PROTO_DATA = protoData;', pDataStart);
if (pDataStart !== -1 && pDataEnd !== -1) {
  const newScript = 'var protoData = ' + JSON.stringify(PROTO_DATA) + ';\n  ';
  protoHtml = protoHtml.substring(0, pDataStart) + newScript + protoHtml.substring(pDataEnd);
  console.log('✓ Successfully updated PROTO_DATA in prototypes/index.html');
}

// 2. Update Filter Bar
const filterBarStart = protoHtml.indexOf('<div class="proto-filter-bar"');
const filterBarEnd = protoHtml.indexOf('</div> <!-- Prototypes Grid -->', filterBarStart);
if (filterBarStart !== -1 && filterBarEnd !== -1) {
  const newFilterBar = `<div class="proto-filter-bar" role="toolbar" aria-label="Prototype Categories">
    <button class="proto-filter-btn active" onclick="filterPrototypes('all', event)" aria-pressed="true" data-category-btn="all">
      All Projects (17)
    </button><button class="proto-filter-btn" onclick="filterPrototypes('platforms', event)" aria-pressed="false" data-category-btn="platforms">
      Multi-Role Platforms (4)
    </button><button class="proto-filter-btn" onclick="filterPrototypes('enterprise', event)" aria-pressed="false" data-category-btn="enterprise">
      Enterprise SaaS &amp; MedTech (4)
    </button><button class="proto-filter-btn" onclick="filterPrototypes('hospitality', event)" aria-pressed="false" data-category-btn="hospitality">
      E-Commerce &amp; Hospitality (3)
    </button><button class="proto-filter-btn" onclick="filterPrototypes('tools', event)" aria-pressed="false" data-category-btn="tools">
      Tools &amp; Calculators (3)
    </button><button class="proto-filter-btn" onclick="filterPrototypes('websites', event)" aria-pressed="false" data-category-btn="websites">
      Corporate &amp; Trade Portals (3)
    </button>
  </div>`;
  protoHtml = protoHtml.substring(0, filterBarStart) + newFilterBar + protoHtml.substring(filterBarEnd);
  console.log('✓ Successfully updated Filter Bar in prototypes/index.html');
}

// 3. Define the 17 Detailed Cards
const CARDS_CONFIG = [
  // PLATFORMS (4)
  {
    id: "meax",
    category: "platforms",
    img: "/images/meax.jpg",
    catTag: "🚚 On-Demand Logistics",
    rolesBadge: "5 ROLES",
    title: "MEAX Delivery Marketplace",
    domain: "",
    desc: PROTO_DATA.meax.desc,
    specs: [
      { k: "Architecture", v: "5-Actor Multi-Tenant Delivery Ecosystem" },
      { k: "Core Logic", v: "Real-Time Dispatch State Machine" },
      { k: "Deliverables", v: "BRD, ERD, 5 Interactive Prototypes" }
    ],
    roles: PROTO_DATA.meax.links
  },
  {
    id: "veterinarios",
    category: "platforms",
    img: "/images/veterinarios.jpg",
    catTag: "🩺 Healthcare & Veterinary SaaS",
    rolesBadge: "5 ROLES",
    title: "112 Veterinarios Multi-Clinic Portal",
    domain: "https://112veterinarios.com",
    desc: PROTO_DATA.veterinarios.desc,
    specs: [
      { k: "Architecture", v: "Multi-Tenant Clinical Emergency Triage" },
      { k: "Core Logic", v: "Role-Based Access Control & Triage Matrix" },
      { k: "Deliverables", v: "Clinical Spec, HIPAA/GDPR PRD, 5 Prototypes" }
    ],
    roles: PROTO_DATA.veterinarios.links
  },
  {
    id: "elmanantial",
    category: "platforms",
    img: "/images/elmanantial.jpg",
    catTag: "🏢 PropTech & Community Ecosystem",
    rolesBadge: "4 ROLES",
    title: "El Manantial Residential Management",
    domain: "https://elmanantial.es",
    desc: PROTO_DATA.elmanantial.desc,
    specs: [
      { k: "Architecture", v: "Multi-Tenant Community PropTech" },
      { k: "Core Logic", v: "Amenity Quota & Maintenance Escalation Engine" },
      { k: "Deliverables", v: "Functional Architecture, RBAC Matrix, PRD" }
    ],
    roles: PROTO_DATA.elmanantial.links
  },
  {
    id: "team1display",
    category: "platforms",
    img: "/images/team1display.jpg",
    catTag: "📦 Trade Show Prepress & ERP",
    rolesBadge: "2 ROLES",
    title: "Team 1 Display Production ERP",
    domain: "",
    desc: PROTO_DATA.team1display.desc,
    specs: [
      { k: "Architecture", v: "Distributed Asset Booking Ledger" },
      { k: "Core Logic", v: "Date-Range Equipment Availability Lock" },
      { k: "Deliverables", v: "Functional Architecture, ER Diagrams, 2 Prototypes" }
    ],
    roles: PROTO_DATA.team1display.links
  },

  // ENTERPRISE SAAS & MEDTECH (4)
  {
    id: "qmasystem",
    category: "enterprise",
    img: "/images/qmasystem.jpg",
    catTag: "🔬 MedTech Clinical SaaS",
    rolesBadge: "CLINICAL DEMO",
    title: "QMA System | Quantitative Muscle Assessment",
    domain: "http://qmasystem.com/",
    desc: PROTO_DATA.qmasystem.desc,
    specs: [
      { k: "Architecture", v: "Clinical Dynamometry Trial Software" },
      { k: "Core Logic", v: "FDA 21 CFR Part 11 Protocol & Calibration" },
      { k: "Deliverables", v: "Clinical PRD, Signal Data Architecture, Demo" }
    ],
    roles: PROTO_DATA.qmasystem.links
  },
  {
    id: "industrialcuttingtools",
    category: "enterprise",
    img: "/images/industrialcuttingtools.jpg",
    catTag: "🛡️ Industrial Safety & Procurement",
    rolesBadge: "B2B CATALOG",
    title: "Industrial Cutting Tools USA",
    domain: "http://industrialcuttingtools-usa.com/",
    desc: PROTO_DATA.industrialcuttingtools.desc,
    specs: [
      { k: "Architecture", v: "OSHA-Compliant Enterprise Safety Catalog" },
      { k: "Core Logic", v: "Bulk Tiered Pricing & Blade Compatibility Matrix" },
      { k: "Deliverables", v: "B2B Architecture, Product Taxonomy, Interactive Demo" }
    ],
    roles: PROTO_DATA.industrialcuttingtools.links
  },
  {
    id: "smpdakar",
    category: "enterprise",
    img: "/images/smpdakar.jpg",
    catTag: "⚡ Energy EPC & Infrastructure",
    rolesBadge: "TURNKEY EPC",
    title: "SMP Dakar Turnkey Energy EPC Platform",
    domain: "http://smpdakar.com/",
    desc: PROTO_DATA.smpdakar.desc,
    specs: [
      { k: "Architecture", v: "Turnkey Industrial Contracting Portal" },
      { k: "Core Logic", v: "Vendor Financing & Pipeline Lifecycle Tracking" },
      { k: "Deliverables", v: "EPC Workflow Architecture, Milestone Matrix, Demo" }
    ],
    roles: PROTO_DATA.smpdakar.links
  },
  {
    id: "stealthmanager",
    category: "enterprise",
    img: "/images/stealthmanager.jpg",
    catTag: "⚡ Agency SaaS & CPQ",
    rolesBadge: "CPQ BUILDER",
    title: "Stealth Manager CPQ Architecture",
    domain: "https://go.stealthmanager.com/builder-page",
    desc: PROTO_DATA.stealthmanager.desc,
    specs: [
      { k: "Architecture", v: "Dynamic CPQ Calculation Engine" },
      { k: "Core Logic", v: "Multi-Tier Margin & SOW Automation" },
      { k: "Deliverables", v: "Pricing Engine, SOW Logic, Interactive Prototype" }
    ],
    roles: PROTO_DATA.stealthmanager.links
  },

  // E-COMMERCE & HOSPITALITY (3)
  {
    id: "timeforteahk",
    category: "hospitality",
    img: "/images/timeforteahk.jpg",
    catTag: "🫖 Luxury Hospitality & Retail",
    rolesBadge: "LUXURY COMMERCE",
    title: "Time for Tea HK — Luxury Tableware",
    domain: "http://timeforteahk.com",
    desc: PROTO_DATA.timeforteahk.desc,
    specs: [
      { k: "Architecture", v: "Luxury Tableware & Concierge Event Booking" },
      { k: "Core Logic", v: "Mono Filio Regional Catalog & Tasting Scheduler" },
      { k: "Deliverables", v: "E-Commerce Architecture, Event Concierge, Demo" }
    ],
    roles: PROTO_DATA.timeforteahk.links
  },
  {
    id: "polavida",
    category: "hospitality",
    img: "/images/polavida.jpg",
    catTag: "🌿 Somatic Coaching & Retreats",
    rolesBadge: "DUAL DESIGNS",
    title: "Pola Vida Somatic Healing Platform",
    domain: "http://polavida.com/",
    desc: PROTO_DATA.polavida.desc,
    specs: [
      { k: "Architecture", v: "Dual-Variation Somatic Wellness Portal" },
      { k: "Core Logic", v: "Client Intake Flow & Retreat Registration Engine" },
      { k: "Deliverables", v: "Information Architecture, 2 Interactive Prototypes" }
    ],
    roles: PROTO_DATA.polavida.links
  },
  {
    id: "kelioniukryptis",
    category: "hospitality",
    img: "/images/kelioniukryptis.jpg",
    catTag: "✈️ Travel Tech & Booking",
    rolesBadge: "2 ROLES",
    title: "Kelionių Kryptis Tour Booking Engine",
    domain: "https://kelioniukryptis.lt",
    desc: PROTO_DATA.kelioniukryptis.desc,
    specs: [
      { k: "Architecture", v: "Dynamic Flight & Hotel Bundling Engine" },
      { k: "Core Logic", v: "Multi-Passenger Manifest & Markup Automation" },
      { k: "Deliverables", v: "Booking State Machine, API Specs, 2 Prototypes" }
    ],
    roles: PROTO_DATA.kelioniukryptis.links
  },

  // TOOLS & CALCULATORS (3)
  {
    id: "ovella",
    category: "tools",
    img: "/images/ovella.jpg",
    catTag: "🧮 Planning & Quotation Tool",
    rolesBadge: "CALCULATOR",
    title: "Ovella Bike Parking Calculator",
    domain: "https://ovella.net",
    desc: PROTO_DATA.ovella.desc,
    specs: [
      { k: "Architecture", v: "Spatial Geometry Optimization Algorithm" },
      { k: "Core Logic", v: "Direct-to-Quote Spec Generation Engine" },
      { k: "Deliverables", v: "Calculation Logic, ROI Engine, Interactive Tool" }
    ],
    roles: PROTO_DATA.ovella.links
  },
  {
    id: "harmonykids",
    category: "tools",
    img: "/images/harmonykids.jpg",
    catTag: "🎵 Sensory-Friendly EdTech",
    rolesBadge: "2 APPS",
    title: "Harmony Kids & MelodyCare AI",
    domain: "",
    desc: PROTO_DATA.harmonykids.desc,
    specs: [
      { k: "Architecture", v: "COPPA-Aware Sensory-Friendly Mobile App" },
      { k: "Core Logic", v: "Adaptive Rhythm Progression & AI Lesson Feedback" },
      { k: "Deliverables", v: "15-Screen Mobile Architecture, 2 Mobile Demos" }
    ],
    roles: PROTO_DATA.harmonykids.links
  },
  {
    id: "latensandforma",
    category: "tools",
    img: "/images/latensandforma.jpg",
    catTag: "🎨 Spatial Architecture & Design",
    rolesBadge: "STUDIO PORTFOLIO",
    title: "Latens & Forma Design Studio (Zurich)",
    domain: "http://latensandforma.com/",
    desc: PROTO_DATA.latensandforma.desc,
    specs: [
      { k: "Architecture", v: "Non-Linear Material Research & Spatial Archive" },
      { k: "Core Logic", v: "Interactive Fiber Sculpture & Cyanotype Curation" },
      { k: "Deliverables", v: "Spatial Design Architecture, Exhibition Flow, Demo" }
    ],
    roles: PROTO_DATA.latensandforma.links
  },

  // CORPORATE & TRADE PORTALS (3)
  {
    id: "tecnicafa",
    category: "websites",
    img: "/images/tecnicafa.jpg",
    catTag: "⚽ Sports Academy & Development",
    rolesBadge: "ACADEMY PORTAL",
    title: "Tecnica FA — Austin Berkley Football Academy",
    domain: "http://tecnicafa.com",
    desc: PROTO_DATA.tecnicafa.desc,
    specs: [
      { k: "Architecture", v: "Sports Academy Operations & Talent Tracking" },
      { k: "Core Logic", v: "Age-Bracket Curriculum & Trial Booking Engine" },
      { k: "Deliverables", v: "Academy Architecture, Trialist Flow, Interactive Demo" }
    ],
    roles: PROTO_DATA.tecnicafa.links
  },
  {
    id: "msvtechnologies",
    category: "websites",
    img: "/images/msvtechnologies.jpg",
    catTag: "💻 ICT Services & Retail",
    rolesBadge: "2 SITES",
    title: "MSV Technologies ICT & LG Brand Shop",
    domain: "https://msvtechnologies.com",
    desc: PROTO_DATA.msvtechnologies.desc,
    specs: [
      { k: "Architecture", v: "Dual B2B IT Services + Authorized Brand Showroom" },
      { k: "Core Logic", v: "Segmented Audience Information Architecture" },
      { k: "Deliverables", v: "B2B & Retail Specifications, 2 Interactive Prototypes" }
    ],
    roles: PROTO_DATA.msvtechnologies.links
  },
  {
    id: "leatherindia",
    category: "websites",
    img: "/images/leatherindia.jpg",
    catTag: "🏛️ National Trade Body Website",
    rolesBadge: "TRADE PORTAL",
    title: "Council for Leather Exports (CLE) Official Portal",
    domain: "https://leatherindia.org",
    desc: PROTO_DATA.leatherindia.desc,
    specs: [
      { k: "Architecture", v: "Institutional Trade & Exporter Support Portal" },
      { k: "Core Logic", v: "Prioritized DGFT Trade Services & News Integration" },
      { k: "Deliverables", v: "Government Portal Architecture, Interactive Prototype" }
    ],
    roles: PROTO_DATA.leatherindia.links
  }
];

// Generate Grid HTML
let gridHtml = '<div class="projects-grid" id="prototypesGrid">\n';

CARDS_CONFIG.forEach(c => {
  gridHtml += `<div class="proto-card reveal-init" data-category="${c.category}" data-proto-id="${c.id}" id="card-${c.id}" title="Open full spec">
  <div class="proto-thumb">
    <img src="${c.img}" alt="${c.title} preview" loading="lazy" decoding="async" width="800" height="450">
  </div>
  <div class="proto-header">
    <div class="proto-meta">
      <span class="proto-category">${c.catTag}</span>
      <span class="proto-badge-roles">${c.rolesBadge}</span>
    </div>
    <h3 class="proto-title">${c.title}</h3>
    ${c.domain ? `<div class="proto-domain"><a href="${c.domain}" target="_blank" rel="noopener noreferrer">🌐 ${c.domain.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗</a></div>` : ''}
  </div>
  <p class="proto-description">${c.desc}</p>
  <div class="proto-specs">
    ${c.specs.map(s => `<div class="spec-pill"><span>${s.k}:</span> ${s.v}</div>`).join('')}
  </div>
  <div style="margin-bottom: 1.25rem;">
    <button type="button" class="btn btn-secondary proto-spec-trigger-btn" onclick="openProtoQuickView('${c.id}')" style="width: 100%; justify-content: center; display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.65rem 1rem; font-size: 0.85rem; font-weight: 600; border-radius: 8px;">
      <span>View Full Spec</span> <span>↗</span>
    </button>
  </div>
  <div class="proto-roles-wrapper">
    <div class="roles-header">
      <span class="roles-title">Interactive Role Sandboxes</span>
    </div>
    <div class="role-buttons-grid">
      ${c.roles.map(r => `<a href="${r.url}" target="_blank" rel="noopener noreferrer" class="role-link-btn${r.featured ? ' featured' : ''}" title="Open ${r.name}"><span>${r.name}</span> <span class="arrow-icon">↗</span></a>`).join('')}
    </div>
  </div>
</div>\n`;
});

gridHtml += '</div>';

// Replace Grid in prototypes/index.html
const gridStart = protoHtml.indexOf('<div class="projects-grid" id="prototypesGrid">');
const gridEnd = protoHtml.indexOf('</div> </div> <script>', gridStart) + 6;
if (gridStart !== -1 && gridEnd !== -1) {
  protoHtml = protoHtml.substring(0, gridStart) + gridHtml + protoHtml.substring(gridEnd);
  console.log('✓ Successfully rendered all 17 cards into prototypes/index.html');
}

fs.writeFileSync('prototypes/index.html', protoHtml, 'utf8');
console.log('✓ prototypes/index.html successfully written to disk.');

