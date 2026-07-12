/* ─────────────────────────────────────────────
   data.js: Single source of truth for all
   content and configuration.
───────────────────────────────────────────── */

export const NAV_LINKS = [
  { href:'#services',   label:'Services'   },
  { href:'#team',       label:'Team'       },
  { href:'#work',       label:'Work'       },
  { href:'#products',   label:'Products'   },
  { href:'#tools',      label:'Tools'      },
  { href:'#experience', label:'Experience' },
  { href:'#contact',    label:'Contact'    },
];

export const MARQUEE_ITEMS = [
  'React & Next.js', 'Angular', 'DevOps & CI/CD',
  'AWS · GCP · Azure', 'Security', 'Android (Kotlin)',
  'Express / Node.js', 'Java & Spring', 'Python AI',
  'Neo4j RAG', 'OpenSearch', 'OCR & Vision',
  'QA & Testing', 'Legacy Support', 'NoSQL', 'Docker & K8s',
];

export const HERO_METRICS = [
  { countUp:'5',  sup:'+ yrs', label:'of expertise'   },
  { static:'AWS', sup:'+',     label:'GCP · Azure'    },
  { countUp:'20', sup:'Cr+',   label:'docs migrated'  },
];

export const SERVICES = [
  {
    icon:'☁️', title:'Cloud Deployment & DevOps',
    desc:'Full-stack cloud deployments on AWS, GCP, and Azure, CI/CD pipelines, containerisation, Kubernetes, and infrastructure as code so you ship faster with zero downtime.',
    tags:['AWS','GCP','Azure','Terraform','Docker','K8s','CI/CD'],
  },
  {
    icon:'🔒', title:'Security & Compliance',
    desc:'End-to-end security reviews, penetration testing, auth hardening (OAuth2, JWT, SSO), OWASP best practices, and compliance-ready architecture for regulated industries.',
    tags:['OAuth2','JWT','OWASP','Pen Testing','SSL','IAM'],
  },
  {
    icon:'🛡️', title:'Legacy Project Support',
    desc:'We rescue and extend older codebases at minimal rates, bug triage, dependency upgrades, performance tuning, and incremental modernisation without a full rewrite.',
    tags:['Java','PHP','Legacy','Refactoring','Migration'],
  },
  {
    icon:'📱', title:'Android App Development',
    desc:'Scalable, production-ready Android apps built with Kotlin and Jetpack Compose, from solo MVP to enterprise deployments with dedicated support post-launch.',
    tags:['Kotlin','Jetpack Compose','Android','Firebase','REST'],
  },
  {
    icon:'🧪', title:'QA & Testing Services',
    desc:'Manual and automated testing on demand, functional, regression, load, and end-to-end. We can embed a tester into your team or run a full test cycle on your release.',
    tags:['Selenium','Playwright','JUnit','Manual QA','Load Testing'],
  },
  {
    icon:'⚛️', title:'React & Next.js Development',
    desc:'Modern SPAs and full-stack web apps, from landing pages to complex dashboards, built to perform at any scale.',
    tags:['React','Next.js','TypeScript','Tailwind','Redux'],
  },
  {
    icon:'🔷', title:'Angular Enterprise Apps',
    desc:'Scalable, maintainable Angular applications with component libraries, state management, and clean architecture.',
    tags:['Angular','TypeScript','RxJS','NgRx','REST'],
  },
  {
    icon:'🌐', title:'Node.js & Express APIs',
    desc:'Fast, scalable REST and GraphQL APIs, the perfect backend for any frontend or mobile application.',
    tags:['Node.js','Express','REST','GraphQL','JWT'],
  },
  {
    icon:'☕', title:'Java & Spring Engineering',
    desc:'Enterprise-grade backends with Java 17+, Spring Boot, and Spring AI, built for scale and longevity.',
    tags:['Java','Spring Boot','Spring AI','Microservices'],
  },
  {
    icon:'🧠', title:'AI & RAG Development',
    desc:'Graph-powered Retrieval-Augmented Generation systems delivering context-rich AI responses beyond flat vector search.',
    tags:['RAG','LangChain','LLMs','Python','Neo4j'],
  },
  {
    icon:'🗄️', title:'NoSQL & Data Architecture',
    desc:'Designing MongoDB, Neo4j, Redis, and Cassandra stores tailored to your data access patterns and scale requirements.',
    tags:['MongoDB','Neo4j','Redis','Cassandra'],
  },
  {
    icon:'🪪', title:'Computer Vision & OCR',
    desc:'Identity document extraction, structured OCR parsing, and biometric liveness detection for KYC and verification flows.',
    tags:['OpenCV','Tesseract','Python','Face SDK'],
  },
];

/* WORKS lives server-side (Spring Boot backend), managed via the admin panel at /admin */

/* Products we've built and operate ourselves, linked out to their live sites */
export const PRODUCTS = [
  {
    title: '3D Archetypes',
    tag: 'Live Product',
    desc: 'A storefront and admin platform for custom 3D-printed collectibles, React + Spring Boot, built and run end-to-end by our team.',
    href: 'https://3darchetypes.com/',
  },
];

export const TEAM_COLUMNS = [
  {
    label:'Frontend & Mobile',
    items:['React & Next.js','Angular','Express / Node.js','Android (Kotlin)','Responsive UI','TypeScript'],
  },
  {
    label:'Backend, Cloud & Security',
    items:['Java & Spring Boot','AWS · GCP · Azure','DevOps & CI/CD','Security & OAuth2','Docker & Kubernetes','Legacy Support'],
  },
  {
    label:'AI, QA & Support',
    items:['RAG & Semantic Search','OCR Pipelines','Knowledge Graphs','Manual & Auto QA','Dedicated Support Team','Spring AI'],
  },
];

export const WHY_CARDS = [
  { icon:'🏗️', title:'Full-stack under one roof',    desc:'Frontend, backend, cloud, mobile, and AI, one team, zero coordination overhead between agencies.' },
  { icon:'⚡',  title:'Startup speed',               desc:'We move fast. Small projects shipped in days; large builds with weekly deliverables and full transparency.' },
  { icon:'🤝', title:'Dedicated support team',       desc:'Post-launch, a dedicated support squad monitors, patches, and extends your product so you can focus on growth.' },
  { icon:'💸', title:'Minimal rates for legacy',     desc:'Got an older project that just needs love? We offer highly competitive rates to maintain and modernise existing codebases.' },
];

export const TIMELINE_ITEMS = [
  {
    date:'2019 – Present',
    title:'Startup Engineering Studio',
    company:'Newbie Tech · Full-Stack, Cloud, Mobile & AI',
    points:[
      'Cloud deployments on AWS, GCP, and Azure with full CI/CD pipelines',
      'Security hardening, OAuth2/JWT, and compliance-ready architecture',
      'Scalable Android apps with Kotlin and Jetpack Compose',
      'Legacy project rescue and modernisation at competitive rates',
      'Manual and automated QA, embedded testers or full release cycles',
      'Migrated 20+ crore documents across federated databases with zero data loss',
      'Graph-powered RAG systems, semantic search, and OCR pipelines',
      'Operated NoSQL stores at scale: MongoDB, Redis, Neo4j, Cassandra',
    ],
  },
];

/* Contact info (email, phone, instagram, address) lives server-side, managed via the admin panel at /admin */

/* Paste your deployed Google Apps Script URL here */
export const FORM_ENDPOINT = '';

export const ENGAGEMENT_TYPES = [
  'Cloud / DevOps (AWS, GCP, Azure)',
  'Security & Compliance',
  'Android App Development',
  'Legacy Project Support',
  'QA & Testing',
  'React / Next.js App',
  'Angular Enterprise App',
  'Node.js / Express API',
  'Full-Stack Application',
  'Java Backend Engineering',
  'AI / RAG System',
  'Small Freelance Project',
  'Other / General Inquiry',
];

export const CODE_LINES = [
  { ln:1,  parts:[{ c:'tok-cmt', t:'// NewbieTech · startup studio' }] },
  { ln:2,  parts:[] },
  { ln:3,  parts:[{ c:'tok-kw', t:'import ' }, { c:'tok-cls', t:'{ deploy }' }, { c:'', t:' ' }, { c:'tok-kw', t:'from' }, { c:'tok-str', t:' "aws-cdk"' }] },
  { ln:4,  parts:[{ c:'tok-kw', t:'import ' }, { c:'tok-cls', t:'{ Shield }' }, { c:'', t:' ' }, { c:'tok-kw', t:'from' }, { c:'tok-str', t:' "security"' }] },
  { ln:5,  parts:[] },
  { ln:6,  parts:[{ c:'tok-kw', t:'async function ' }, { c:'tok-fn', t:'launchProduct' }, { c:'', t:'(config) {' }] },
  { ln:7,  parts:[{ c:'', t:'  ' }, { c:'tok-kw', t:'const ' }, { c:'', t:'stack = ' }, { c:'tok-kw', t:'await ' }, { c:'tok-fn', t:'deploy' }, { c:'', t:'({' }] },
  { ln:8,  parts:[{ c:'', t:'    cloud: ' }, { c:'tok-str', t:'"AWS | GCP | Azure"' }, { c:'', t:',' }] },
  { ln:9,  parts:[{ c:'', t:'    android: ' }, { c:'tok-str', t:'"scalable"' }, { c:'', t:', security: ' }, { c:'tok-num', t:'true' }, { c:'', t:',' }] },
  { ln:10, parts:[{ c:'', t:'    support: ' }, { c:'tok-str', t:'"24 / 7"' }, { c:'', t:', ci_cd: ' }, { c:'tok-num', t:'true' }] },
  { ln:11, parts:[{ c:'', t:'  });' }] },
  { ln:12, parts:[{ c:'tok-kw', t:'  return ' }, { c:'tok-cls', t:'Shield' }, { c:'', t:'.' }, { c:'tok-fn', t:'wrap' }, { c:'', t:'(stack);' }] },
  { ln:13, parts:[{ c:'', t:'}' }] },
];

export const CODE_BADGES = [
  { bg:'#238636', color:'#3fb950', label:'✓ Deployed' },
  { bg:'#1158a7', color:'#58a6ff', label:'☁ Cloud'   },
  { bg:'#6e40c9', color:'#a371f7', label:'🔒 Secured' },
  { bg:'#b08800', color:'#e3b341', label:'📱 Android' },
];
