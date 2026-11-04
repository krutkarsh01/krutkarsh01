const fs = require('fs');
const path = require('path');

// 1. ALL 17 PROTO_DATA OBJECTS
const PROTO_DATA = {
  "meax": {
    "tag": "🚚 On-Demand Logistics & Multi-Sided Marketplace",
    "flag": "🇪🇸 Spain",
    "title": "MEAX Delivery Marketplace Functional Architecture",
    "desc": "Engineered the functional architecture for a complex 5-sided on-demand delivery ecosystem. Mapped real-time order lifecycle state machines (Pending → Accepted → Preparing → Dispatched → Delivered), merchant catalog synchronization, dynamic dispatch routing, driver acceptance flows, customer live tracking, and administrative revenue commissions.",
    "problem": "Fragmented logistics communication causing 28% delivery delays and high courier drop-off rates.",
    "solution": "Event-driven dispatch state machine with role-based real-time telemetry across 5 synchronized actor applications.",
    "links": [
      { "name": "Website", "url": "https://meaxwebsiteprototype.oneapp.dev/", "featured": true },
      { "name": "Admin Panel", "url": "https://meaxadminpanelprototype.oneapp.dev/" },
      { "name": "Merchant Dashboard", "url": "https://meaxmerchantdashboardprototype.oneapp.dev/" },
      { "name": "Driver App", "url": "https://meaxdriverappprototype.oneapp.dev/" },
      { "name": "Customer App", "url": "https://meaxcustomerappprototype.oneapp.dev/" }
    ],
    "live": "",
    "liveLabel": ""
  },
  "veterinarios": {
    "tag": "🩺 Healthcare & Veterinary SaaS",
    "flag": "🇪🇸 Spain",
    "title": "112 Veterinarios Multi-Clinic Emergency Triage & Management Portal",
    "desc": "Multi-tenant clinical management platform handling medical emergency triage, veterinarian appointment calendars, patient EHR records, emergency ambulance dispatch, and multi-location practice revenue accounting across veterinary clinics in Spain.",
    "problem": "Lack of unified triage protocols leading to critical delays during emergency pet trauma admissions.",
    "solution": "5-role clinical workflow system connecting pet parents, clinic triage reception, attending vets, and emergency ambulance dispatchers in real time.",
    "links": [
      { "name": "Owner / Admin", "url": "https://112veterinariosownerprototype.oneapp.dev/", "featured": true },
      { "name": "Veterinarian", "url": "https://112veterinariosdoctorprototype.oneapp.dev/" },
      { "name": "Pet Parent", "url": "https://112veterinarioscustomerprototype.oneapp.dev/" },
      { "name": "Clinic Reception", "url": "https://112veterinariosclinicprototype.oneapp.dev/" },
      { "name": "Ambulance Dispatch", "url": "https://112veterinariosdriverprototype.oneapp.dev/" }
    ],
    "live": "https://112veterinarios.com",
    "liveLabel": "112veterinarios.com"
  },
  "qmasystem": {
    "tag": "🔬 MedTech Clinical Trial SaaS & Dynamometry",
    "flag": "🇺🇸 USA",
    "title": "QMA System | Quantitative Muscle Assessment & Dynamometry (Aeverl Medical LLC)",
    "desc": "Gold-standard quantitative muscle assessment (QMA) and isometric dynamometry system utilized in longitudinal neuromuscular clinical trials, research hospitals, and university clinics. Formulated clinical trial protocol specifications, longitudinal patient force graphing, sensor calibration logs, and FDA 21 CFR Part 11 electronic record compliance.",
    "problem": "Manual neuromuscular force measurement suffered from intra-observer variability and lacked audit-ready trial data traceability.",
    "solution": "Standardized isometric dynamometry acquisition software with automated patient baseline calibration, multi-joint protocol matrices, and FDA-compliant trial exports.",
    "links": [
      { "name": "Clinical Trial Platform Demo", "url": "https://qmasystem.netlify.app/", "featured": true }
    ],
    "live": "http://qmasystem.com/",
    "liveLabel": "qmasystem.com"
  },
  "elmanantial": {
    "tag": "🏢 PropTech & Residential Community Ecosystem",
    "flag": "🇪🇸 Spain",
    "title": "El Manantial Residential Facility & HOA Management Platform",
    "desc": "Comprehensive residential facility and community management application. Formulated functional specifications for resident/tenant onboarding, maintenance ticketing escalation matrix, common amenity booking calendars, gatehouse visitor verification, and HOA financial administration.",
    "problem": "Delayed facility maintenance responses and uncoordinated common area bookings causing resident disputes.",
    "solution": "Role-segregated community platform with automated maintenance ticket routing, digital visitor passes, and amenity reservation quotas.",
    "links": [
      { "name": "Resident / Tenant", "url": "https://elmantial_resident_may.oneapp.dev/", "featured": true },
      { "name": "Owner", "url": "https://elamantial_owner_may.oneapp.dev/" },
      { "name": "Staff / Maintenance", "url": "https://elamantial_staff_may.oneapp.dev/" },
      { "name": "Super Admin", "url": "https://tsrs_superadmin_may2026.oneapp.dev/" }
    ],
    "live": "https://elmanantial.es",
    "liveLabel": "elmanantial.es"
  },
  "team1display": {
    "tag": "📦 Trade Show Prepress & ERP Operations",
    "flag": "🇱🇹 Lithuania",
    "title": "Team 1 Display Production ERP & Asset Reservation System",
    "desc": "High-throughput trade show exhibit fabrication, prepress printing, and physical asset reservation management platform. Defined business rules for date-range equipment availability locks, conflict-resolution algorithms for concurrent booking requests, warehouse dispatch preparation checklists, and post-event inspection reporting.",
    "problem": "Double-booking of high-value custom trade show hardware and manual artwork prepress approvals causing costly fabrication delays.",
    "solution": "Automated date-range locking engine coupled with prepress artwork preflight checklists and warehouse dispatch staging manifests.",
    "links": [
      { "name": "Customer Portal", "url": "https://team1displayservicesnet-customer.oneapp.dev/", "featured": true },
      { "name": "Admin Management", "url": "https://team1displayservicesnet-admin.oneapp.dev/" }
    ],
    "live": "",
    "liveLabel": ""
  },
  "timeforteahk": {
    "tag": "🫖 Luxury Hospitality & E-Commerce",
    "flag": "🇭🇰 Hong Kong",
    "title": "Time for Tea HK — Luxury Teapots, Tableware & Event Styling",
    "desc": "Luxury hospitality, artisanal tableware, and bespoke event styling platform in Hong Kong. Exclusive regional distributor of iconic German Mono Filio teapots, offering curated tableware collections, French flax linen catalogs, single-estate loose-leaf tea subscriptions, and private tasting event bookings.",
    "problem": "High-end artisanal brands struggled to convey tactile craftsmanship and private event styling services through traditional e-commerce.",
    "solution": "Sensory-rich editorial commerce experience marrying exclusive German design distribution with white-glove event concierge booking workflows.",
    "links": [
      { "name": "Luxury Boutique & Styling Demo", "url": "https://timeforteahk.netlify.app/", "featured": true }
    ],
    "live": "http://timeforteahk.com",
    "liveLabel": "timeforteahk.com"
  },
  "industrialcuttingtools": {
    "tag": "🛡️ Industrial Safety & B2B Procurement",
    "flag": "🇺🇸 USA",
    "title": "Industrial Cutting Tools USA — OSHA-Compliant Safety Knives Platform",
    "desc": "Official B2B product catalog and safety procurement platform for Industrial Cutting Tools USA. Engineered specifications for OSHA-compliant auto-retracting safety knives, concealed blade box cutters, replacement blade matrices, bulk commercial procurement, and workplace injury prevention training modules.",
    "problem": "Warehouse and manufacturing facility laceration injuries drove up workers' comp claims due to substandard manual utility knives.",
    "solution": "Comprehensive B2B safety portal featuring OSHA-compliant spring-retracting cutter specs, blade cross-compatibility matrices, and enterprise bulk reordering.",
    "links": [
      { "name": "B2B Safety Catalog Demo", "url": "https://industrialcuttingtools-usa.netlify.app/", "featured": true }
    ],
    "live": "http://industrialcuttingtools-usa.com/",
    "liveLabel": "industrialcuttingtools-usa.com"
  },
  "latensandforma": {
    "tag": "🎨 Architecture & Spatial Design Studio",
    "flag": "🇨🇭 Switzerland",
    "title": "Latens & Forma Transdisciplinary Art & Design Studio (Zurich)",
    "desc": "Transdisciplinary art and spatial architecture studio based in Zurich, Switzerland. Curated living digital showcase for experimental material research, traditional textile crafts, cyanotype prints, fiber sculptures, and collective architectural memory.",
    "problem": "Avant-garde transdisciplinary design practices required non-linear portfolio navigation that bridges physical material research and digital archives.",
    "solution": "Curated spatial narrative interface integrating high-resolution material archives, exhibition history, and direct studio acquisition inquiries.",
    "links": [
      { "name": "Studio Exhibition Demo", "url": "https://latensandforma.netlify.app/#home", "featured": true }
    ],
    "live": "http://latensandforma.com/",
    "liveLabel": "latensandforma.com"
  },
  "smpdakar": {
    "tag": "⚡ Energy Infrastructure & EPCI-VF",
    "flag": "🇸🇳 Senegal",
    "title": "SMP Dakar Turnkey Energy & Industrial EPC Platform",
    "desc": "Major West African EPCI-VF (Engineering, Procurement, Construction, Installation & Vendor Financing) contractor portal. Mapped turnkey energy project lifecycles, onshore/offshore pipeline infrastructure, heavy industrial steel manufacturing, storage terminals, and institutional project financing workflows.",
    "problem": "Complex international consortiums and state-owned energy entities faced opacity in project financing and multi-stage construction tracking.",
    "solution": "Turnkey EPC digital portal structuring multi-million dollar vendor financing models, QHSE compliance manifests, and engineering project milestones.",
    "links": [
      { "name": "EPC Industrial Portal Demo", "url": "https://smpdakar.netlify.app/", "featured": true }
    ],
    "live": "http://smpdakar.com/",
    "liveLabel": "smpdakar.com"
  },
  "polavida": {
    "tag": "🌿 Somatic Healing & Holistic Transformation",
    "flag": "🇵🇹 Portugal",
    "title": "Pola Vida Somatic Healing & Tantra Transformation Platform",
    "desc": "Trauma-informed somatic healing and holistic transformation platform offering in-person Portugal retreats and international online coaching. Features two complete client-facing UI design variations with session scheduling, workshop registration, and sensory-balanced visual storytelling.",
    "problem": "Somatic wellness seekers needed a calm, trauma-aware digital onboarding journey balancing deep psychological safety with clear retreat logistics.",
    "solution": "Dual-variation interactive prototype system featuring tailored client intake diagnostics, retreat accommodation selection, and integrated session booking.",
    "links": [
      { "name": "Design 1 (Warm Organic)", "url": "https://polavida.netlify.app/?v=a", "featured": true },
      { "name": "Design 2 (Atmospheric)", "url": "https://polavida.netlify.app/?v=b" }
    ],
    "live": "http://polavida.com/",
    "liveLabel": "polavida.com"
  },
  "tecnicafa": {
    "tag": "⚽ Sports Academy & Youth Football Platform",
    "flag": "🇬🇧 United Kingdom",
    "title": "Tecnica FA — Premier Youth Football Academy (Austin Berkley)",
    "desc": "Elite youth football development academy platform across South London, founded by UEFA B licensed coach and ex-Crystal Palace manager Austin Berkley. Designed age-group training schedules, trialist evaluation rubrics, parent booking portals, and grassroots talent pathway tracking.",
    "problem": "Independent elite sports academies suffered from manual trial registrations, unorganized session capacity caps, and poor parent communication.",
    "solution": "Streamlined academy management platform featuring automated term booking, age-bracket skill progression tracking, and direct coach communication.",
    "links": [
      { "name": "Academy Operations Demo", "url": "https://tecnicafa.netlify.app/", "featured": true }
    ],
    "live": "http://tecnicafa.com",
    "liveLabel": "tecnicafa.com"
  },
  "kelioniukryptis": {
    "tag": "✈️ Travel Tech & Booking Engine",
    "flag": "🇱🇹 Lithuania",
    "title": "Kelionių Kryptis Tour Booking Engine & Travel ERP",
    "desc": "Lithuanian travel agency dynamic packaging engine and tour operations portal. Architected sub-second flight and hotel package bundling, traveler manifest management, tour operator API integrations, dynamic markup rules, multi-passenger booking workflows, and instant voucher issuance.",
    "problem": "Manual quote generation took 30+ minutes per inquiry, resulting in lost bookings during high-demand seasonal travel peaks.",
    "solution": "Sub-second flight and hotel bundling engine with dynamic markup rules, live manifest exports, and instant booking vouchers.",
    "links": [
      { "name": "Customer Portal", "url": "https://kelioniukryptislt-customer.oneapp.dev/", "featured": true },
      { "name": "Admin Operations", "url": "https://kelioniukryptislt-admin.oneapp.dev/" }
    ],
    "live": "https://kelioniukryptis.lt",
    "liveLabel": "kelioniukryptis.lt"
  },
  "stealthmanager": {
    "tag": "⚡ Agency SaaS & CPQ Architecture",
    "flag": "🇺🇸 USA",
    "title": "Stealth Manager CPQ & White-Label Scoping Architecture",
    "desc": "Interactive CPQ (Configure, Price, Quote) builder allowing agency partners to calculate white-label development costs, configure add-on modules, select SLA support tiers, and generate instant proposals and statements of work with automated multi-tier margin validation and automated contract generation.",
    "problem": "Disorganized discount approval loops delaying enterprise deal closures by weeks.",
    "solution": "Automated multi-tier margin validation with dynamic pricing rules and automated contract generation.",
    "links": [
      { "name": "CPQ Builder Sandbox", "url": "https://mobrilzcombuilder-page.oneapp.dev/", "featured": true }
    ],
    "live": "https://go.stealthmanager.com/builder-page",
    "liveLabel": "go.stealthmanager.com/builder-page"
  },
  "ovella": {
    "tag": "🧮 Architectural Calculation & Quotation Tool",
    "flag": "🇫🇮 Finland",
    "title": "Ovella Bike Parking Planning Calculator",
    "desc": "Planner-facing calculation tool for Ovella Systems (Helsinki). Recommends optimal bike parking configurations for architectural spaces, estimates capacity, calculates space-saving ROI against standard solutions, and converts project specs directly into quote requests.",
    "problem": "Planners had no quick way to estimate how many bikes an Ovella system fits in a given space or to compare it with standard racks before contacting sales.",
    "solution": "Guided calculation with product recommendations, an efficiency comparison against standard parking, and a direct-to-quote submission.",
    "links": [
      { "name": "Calculator Tool", "url": "https://ovella-v7.netlify.app", "featured": true }
    ],
    "live": "https://ovella.net",
    "liveLabel": "ovella.net"
  },
  "harmonykids": {
    "tag": "🎵 Sensory-Friendly EdTech & Adaptive AI",
    "flag": "🇺🇸 USA",
    "title": "Harmony Kids & MelodyCare AI Music Learning Platform",
    "desc": "Mobile app ecosystem for sensory-friendly children's music education featuring COPPA-compliant onboarding, playable virtual piano and guitar interfaces, rhythm progression trees, real-time AI lesson feedback, and an integrated parent / IEP progress tracking hub.",
    "problem": "Children with sensory processing differences struggled with rigid music instruction apps lacking personalized pacing.",
    "solution": "15-screen sensory-safe mobile flow with low-stimulation visual themes, playable instruments, AI lesson feedback, and parent progress hub.",
    "links": [
      { "name": "Mobile App Demo V1", "url": "https://harmonykids.oneapp.dev/", "featured": true },
      { "name": "MelodyCare Special Needs V2", "url": "https://melodycare.vercel.app/" }
    ],
    "live": "",
    "liveLabel": ""
  },
  "msvtechnologies": {
    "tag": "💻 ICT Infrastructure & Authorized Retail",
    "flag": "🇷🇼 Rwanda",
    "title": "MSV Technologies ICT Services & Authorized Brand Shop",
    "desc": "Dual digital ecosystem for a leading Kigali technology provider: an enterprise hardware and managed IT services corporate portal, paired with an authorized consumer brand shop for LG and AirLux appliances with localized catalog and quote workflows.",
    "problem": "B2B enterprise IT clients and retail consumer appliance buyers required distinct customer journeys on separate domain surfaces.",
    "solution": "Two dedicated experiences: a corporate IT infrastructure portal and an authorized appliance showroom with instant quote requests.",
    "links": [
      { "name": "Hardware & IT Services", "url": "https://msvtechnologiescom.oneapp.dev/", "featured": true },
      { "name": "LG & AirLux Brand Shop", "url": "https://msvtechnologiescom.netlify.app/" }
    ],
    "live": "https://msvtechnologies.com",
    "liveLabel": "msvtechnologies.com"
  },
  "leatherindia": {
    "tag": "🏛️ National Export Promotion & Trade Portal",
    "flag": "🇮🇳 India",
    "title": "Council for Leather Exports (CLE) Official Trade Portal",
    "desc": "Institutional trade portal for India's apex leather and footwear export promotion body under the Ministry of Commerce & Industry. Restructured information architecture bringing trade inquiries, DGFT Trade Connect, the e-Sewa facilitation center, and international delegation campaigns into one streamlined gateway.",
    "problem": "Exporters needed faster access to trade services, DGFT circulars, and trade inquiry dispute mechanisms from the homepage.",
    "solution": "Restructured government homepage with prioritized service links, a live trade news ticker, and unified exporter support pathways.",
    "links": [
      { "name": "Trade Portal Website", "url": "https://leatherindiaorg.netlify.app/", "featured": true }
    ],
    "live": "https://leatherindia.org",
    "liveLabel": "leatherindia.org"
  }
};

// 2. ALL 34 HUBS (with coordinates, flags, badges, and deep prototype links)
const ALL_HUBS = [
  {
    id: "spain",
    name: "Spain",
    flag: "🇪🇸",
    lat: 40.4,
    lng: -3.7,
    role: "MEAX · 112 Veterinarios · El Manantial",
    coords: "40.4168° N, 3.7038° W",
    desc: "Flagship European delivery marketplace, multi-clinic veterinary emergency triage platform, and residential community ecosystem, each prototyped role-by-role.",
    pills: ["Marketplace", "Healthcare SaaS", "PropTech"],
    source: "Portfolio Hub",
    region: "Europe",
    protoId: "meax",
    protoUrl: "https://meaxwebsiteprototype.oneapp.dev/"
  },
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    lat: 30.27,
    lng: -97.74,
    role: "QMA System · Industrial Cutting Tools · Stealth Manager · Harmony Kids",
    coords: "30.2672° N, 97.7431° W",
    desc: "Austin technology accounts and high-stakes deliverables: MedTech clinical dynamometry software (Aeverl Medical LLC), OSHA-compliant industrial safety equipment catalog, CPQ agency scoping builder, and COPPA sensory EdTech apps.",
    pills: ["Clinical SaaS", "Industrial Safety", "CPQ Builder", "EdTech AI"],
    source: "Portfolio Hub",
    region: "Americas",
    protoId: "qmasystem",
    protoUrl: "https://qmasystem.netlify.app/"
  },
  {
    id: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    lat: 47.38,
    lng: 8.54,
    role: "Latens & Forma Art & Spatial Design Studio",
    coords: "47.3769° N, 8.5417° E",
    desc: "Transdisciplinary art, material research, and spatial architecture studio based in Zurich. Features interactive digital curation for fiber sculptures, cyanotypes, and exhibition archives.",
    pills: ["Spatial Design", "Material Research", "Studio Portfolio"],
    source: "Portfolio Hub",
    region: "Europe",
    protoId: "latensandforma",
    protoUrl: "https://latensandforma.netlify.app/#home"
  },
  {
    id: "senegal",
    name: "Senegal",
    flag: "🇸🇳",
    lat: 14.72,
    lng: -17.47,
    role: "SMP Dakar Turnkey Energy & Industrial EPC",
    coords: "14.7167° N, 17.4677° W",
    desc: "Major West African EPCI-VF contractor portal for turnkey energy infrastructure, pipeline engineering, industrial steel manufacturing, and vendor project financing.",
    pills: ["Energy Infrastructure", "EPCI-VF", "Turnkey Engineering"],
    source: "Portfolio Hub",
    region: "Africa",
    protoId: "smpdakar",
    protoUrl: "https://smpdakar.netlify.app/"
  },
  {
    id: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    lat: 38.72,
    lng: -9.14,
    role: "Pola Vida Somatic Healing & Transformation",
    coords: "38.7223° N, 9.1393° W",
    desc: "Trauma-informed somatic healing and holistic retreat platform in Portugal. Features two complete client-facing UI design variations with session scheduling and retreat registration.",
    pills: ["Somatic Coaching", "Retreats Booking", "Dual UI Designs"],
    source: "Portfolio Hub",
    region: "Europe",
    protoId: "polavida",
    protoUrl: "https://polavida.netlify.app/?v=a"
  },
  {
    id: "hongkong",
    name: "Hong Kong",
    flag: "🇭🇰",
    lat: 22.32,
    lng: 114.17,
    role: "Time for Tea HK — Luxury Hospitality & Tableware",
    coords: "22.3193° N, 114.1694° E",
    desc: "Exclusive regional distributor of German Mono Filio teapots in Hong Kong, curated artisanal tableware, French flax linen catalogs, and bespoke afternoon tea event styling.",
    pills: ["Luxury E-Commerce", "Mono Filio", "Event Styling"],
    source: "Portfolio Hub",
    region: "Asia",
    protoId: "timeforteahk",
    protoUrl: "https://timeforteahk.netlify.app/"
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    lat: 51.51,
    lng: -0.13,
    role: "Tecnica FA Football Academy · Austin Berkley",
    coords: "51.5074° N, 0.1278° W",
    desc: "Premier youth football development academy platform across South London by UEFA B coach and ex-Crystal Palace manager Austin Berkley. Plus verified UK technology client endorsements.",
    pills: ["Sports Academy", "Austin Berkley", "Trustpilot review"],
    source: "Portfolio Hub",
    region: "Europe",
    protoId: "tecnicafa",
    protoUrl: "https://tecnicafa.netlify.app/"
  },
  {
    id: "finland",
    name: "Finland",
    flag: "🇫🇮",
    lat: 60.17,
    lng: 24.94,
    role: "Ovella Systems Bike Parking Calculator",
    coords: "60.1699° N, 24.9384° E",
    desc: "Architectural planning and calculation tool for Ovella Systems (Helsinki), estimating capacity and space-saving ROI.",
    pills: ["Planning Tool", "Space Optimization", "Quotation Engine"],
    source: "Portfolio Hub",
    region: "Europe",
    protoId: "ovella",
    protoUrl: "https://ovella-v7.netlify.app"
  },
  {
    id: "lithuania",
    name: "Lithuania",
    flag: "🇱🇹",
    lat: 54.69,
    lng: 25.28,
    role: "Team 1 Display ERP · Kelionių Kryptis",
    coords: "54.6872° N, 25.2797° E",
    desc: "Dual Baltic enterprise systems: Team 1 Display high-throughput prepress exhibit fabrication ERP, and Kelionių Kryptis tour dynamic package bundling engine.",
    pills: ["Fabrication ERP", "Travel Booking", "Dynamic Packaging"],
    source: "Portfolio Hub",
    region: "Europe",
    protoId: "team1display",
    protoUrl: "https://team1displayservicesnet-customer.oneapp.dev/"
  },
  {
    id: "rwanda",
    name: "Rwanda",
    flag: "🇷🇼",
    lat: -1.94,
    lng: 30.06,
    role: "MSV Technologies ICT & LG Brand Shop",
    coords: "1.9441° S, 30.0619° E",
    desc: "Corporate IT managed services platform and authorized consumer LG / AirLux showroom for a premier Kigali technology provider.",
    pills: ["ICT Services", "Brand Shop", "Authorized Retail"],
    source: "Portfolio Hub",
    region: "Africa",
    protoId: "msvtechnologies",
    protoUrl: "https://msvtechnologiescom.oneapp.dev/"
  },
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    lat: 28.54,
    lng: 77.39,
    role: "Council for Leather Exports (CLE) · Noida Base",
    coords: "28.5355° N, 77.3910° E",
    desc: "Apex trade promotion portal for the Ministry of Commerce & Industry, and Kumar's core engineering orchestration headquarters.",
    pills: ["Trade Portal", "Government Services", "Home Base"],
    source: "Portfolio Hub",
    region: "Asia",
    protoId: "leatherindia",
    protoUrl: "https://leatherindiaorg.netlify.app/"
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    lat: 52.52,
    lng: 13.41,
    role: "Enterprise Project · Verified Client Review",
    coords: "52.5200° N, 13.4050° E",
    desc: "End-to-end business analysis and project delivery for German corporate client; verified LinkedIn endorsement.",
    pills: ["Enterprise Delivery", "LinkedIn review"],
    source: "Verified Review",
    region: "Europe"
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    lat: 48.86,
    lng: 2.35,
    role: "Custom Enterprise Portal · Verified Review",
    coords: "48.8566° N, 2.3522° E",
    desc: "Pre-sales analysis, scoping documentation, and on-time sprint release; verified Trustpilot client feedback.",
    pills: ["Web Portal", "Trustpilot review"],
    source: "Verified Review",
    region: "Europe"
  },
  {
    id: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    lat: 52.37,
    lng: 4.9,
    role: "SaaS Workflow & Pre-Sales Scoping",
    coords: "52.3676° N, 4.9041° E",
    desc: "Complex SaaS application architecture and client delivery across Dutch technology hubs; verified Trustpilot review.",
    pills: ["SaaS Delivery", "Trustpilot review"],
    source: "Verified Review",
    region: "Europe"
  },
  {
    id: "uae",
    name: "UAE",
    flag: "🇦🇪",
    lat: 25.2,
    lng: 55.27,
    role: "Motor Impact FZE · Verified Review",
    coords: "25.2048° N, 55.2708° E",
    desc: "Enterprise client engagement completed within estimated timeframe; verified Trustpilot review naming Kumar as main lead.",
    pills: ["Enterprise System", "Trustpilot review"],
    source: "Verified Review",
    region: "Middle East"
  },
  {
    id: "israel",
    name: "Israel",
    flag: "🇮🇱",
    lat: 32.09,
    lng: 34.78,
    role: "High-Tech Client Project · Verified Review",
    coords: "32.0853° N, 34.7818° E",
    desc: "Multi-stakeholder delivery management with Kumar as project manager; verified Trustpilot review crediting on-time release.",
    pills: ["Tech Delivery", "Trustpilot review"],
    source: "Verified Review",
    region: "Middle East"
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    lat: -33.87,
    lng: 151.21,
    role: "WordPress Rebuild & Redesign · Verified Review",
    coords: "33.8688° S, 151.2093° E",
    desc: "Full architectural rebuild and responsive redesign; verified Trustpilot review naming Kumar as central point of contact.",
    pills: ["Web Rebuild", "Trustpilot review"],
    source: "Verified Review",
    region: "Oceania"
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    lat: 43.65,
    lng: -79.38,
    role: "North American Enterprise Delivery",
    coords: "43.6532° N, 79.3832° W",
    desc: "Cross-border agile sprint management and requirements documentation for Canadian technology startup accounts.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Americas"
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    lat: 41.9,
    lng: 12.5,
    role: "European Client Delivery",
    coords: "41.9028° N, 12.4964° E",
    desc: "Client engagements delivered with the Mobrilz engineering team for Italian commercial partners.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Europe"
  },
  {
    id: "belgium",
    name: "Belgium",
    flag: "🇧🇪",
    lat: 50.85,
    lng: 4.35,
    role: "European Client Delivery",
    coords: "50.8503° N, 4.3517° E",
    desc: "Client systems delivered with the Mobrilz team for Brussels-based enterprise customers.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Europe"
  },
  {
    id: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    lat: 59.33,
    lng: 18.07,
    role: "Nordic Client Delivery",
    coords: "59.3293° N, 18.0686° E",
    desc: "Nordic customer delivery and technical documentation for Swedish corporate accounts.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Europe"
  },
  {
    id: "slovakia",
    name: "Slovakia",
    flag: "🇸🇰",
    lat: 48.15,
    lng: 17.11,
    role: "Central European Client Delivery",
    coords: "48.1486° N, 17.1077° E",
    desc: "Technical specification and client delivery for Slovakian software operations.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Europe"
  },
  {
    id: "romania",
    name: "Romania",
    flag: "🇷🇴",
    lat: 44.43,
    lng: 26.1,
    role: "Eastern European Client Delivery",
    coords: "44.4268° N, 26.1025° E",
    desc: "Platform engineering specifications delivered for Bucharest-based client.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Europe"
  },
  {
    id: "bulgaria",
    name: "Bulgaria",
    flag: "🇧🇬",
    lat: 42.7,
    lng: 23.32,
    role: "Balkan Regional Client Delivery",
    coords: "42.6977° N, 23.3219° E",
    desc: "Custom web and mobile solutions delivered for Bulgarian corporate client.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Europe"
  },
  {
    id: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    lat: -23.56,
    lng: -46.64,
    role: "Latin American Client Delivery",
    coords: "23.5558° S, 46.6396° W",
    desc: "Bilingual platform delivery for Brazilian customer base with the Mobrilz engineering team.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Americas"
  },
  {
    id: "suriname",
    name: "Suriname",
    flag: "🇸🇷",
    lat: 5.85,
    lng: -55.2,
    role: "Caribbean Basin Client Delivery",
    coords: "5.8520° N, 55.2038° W",
    desc: "E-commerce and web applications delivered for Paramaribo client.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Americas"
  },
  {
    id: "southafrica",
    name: "South Africa",
    flag: "🇿🇦",
    lat: -26.2,
    lng: 28.05,
    role: "African Enterprise Client Delivery",
    coords: "26.2041° S, 28.0473° E",
    desc: "Enterprise platform delivery for Johannesburg commercial customers.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Africa"
  },
  {
    id: "malawi",
    name: "Malawi",
    flag: "🇲🇼",
    lat: -13.96,
    lng: 33.77,
    role: "East African Client Delivery",
    coords: "13.9626° S, 33.7741° E",
    desc: "NGO and organizational management systems delivered with the Mobrilz team.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Africa"
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    lat: 3.14,
    lng: 101.69,
    role: "Southeast Asian Client Delivery",
    coords: "3.1390° N, 101.6869° E",
    desc: "Client engagements delivered for Kuala Lumpur enterprise customers.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Asia"
  },
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    lat: -6.21,
    lng: 106.85,
    role: "ASEAN Market Client Delivery",
    coords: "6.2088° S, 106.8456° E",
    desc: "Multi-tier web applications delivered for Jakarta corporate clients.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Asia"
  },
  {
    id: "laos",
    name: "Laos",
    flag: "🇱🇦",
    lat: 17.98,
    lng: 102.63,
    role: "Indochina Regional Client Delivery",
    coords: "17.9757° N, 102.6331° E",
    desc: "Client software delivered with the Mobrilz team for Vientiane commercial client.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Asia"
  },
  {
    id: "taiwan",
    name: "Taiwan",
    flag: "🇹🇼",
    lat: 25.03,
    lng: 121.57,
    role: "East Asian Tech Client Delivery",
    coords: "25.0330° N, 121.5654° E",
    desc: "Digital solution scoping and sprint execution for Taipei business accounts.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Asia"
  },
  {
    id: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    lat: -36.85,
    lng: 174.76,
    role: "Oceanian Regional Client Delivery",
    coords: "36.8485° S, 174.7633° E",
    desc: "Client web applications delivered with the Mobrilz team for Auckland accounts.",
    pills: ["Client delivery", "Mobrilz"],
    source: "Client Market",
    region: "Oceania"
  }
];

// TOP 7 HOMEPAGE PROTOTYPES
const TOP_HOMEPAGE_PROTOS = [
  { id: "meax", name: "MEAX Delivery Marketplace", flag: "🇪🇸 Spain", tag: "🚚 On-Demand Logistics", img: "/images/meax.jpg" },
  { id: "veterinarios", name: "112 Veterinarios Multi-Clinic Portal", flag: "🇪🇸 Spain", tag: "🩺 Healthcare & Veterinary SaaS", img: "/images/veterinarios.jpg" },
  { id: "qmasystem", name: "QMA System & Dynamometry", flag: "🇺🇸 USA", tag: "🔬 MedTech Clinical Trial SaaS", img: "/images/qmasystem.jpg" },
  { id: "elmanantial", name: "El Manantial Community Ecosystem", flag: "🇪🇸 Spain", tag: "🏢 PropTech & Residential", img: "/images/elmanantial.jpg" },
  { id: "team1display", name: "Team 1 Display Production ERP", flag: "🇱🇹 Lithuania", tag: "📦 Trade Show Prepress & ERP", img: "/images/team1display.jpg" },
  { id: "timeforteahk", name: "Time for Tea HK", flag: "🇭🇰 Hong Kong", tag: "🫖 Luxury Hospitality & Tableware", img: "/images/timeforteahk.jpg" },
  { id: "industrialcuttingtools", name: "Industrial Cutting Tools USA", flag: "🇺🇸 USA", tag: "🛡️ OSHA Safety & B2B Procurement", img: "/images/industrialcuttingtools.jpg" }
];

console.log("Loaded metadata dictionaries successfully.");

// Export for usage
module.exports = { PROTO_DATA, ALL_HUBS, TOP_HOMEPAGE_PROTOS };
