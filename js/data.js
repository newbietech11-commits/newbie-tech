/* ─────────────────────────────────────────────
   data.js: Single source of truth for all
   content, configuration, and tool functions.
───────────────────────────────────────────── */

export const NAV_LINKS = [
  { href:'#services',   label:'Services'   },
  { href:'#team',       label:'Team'       },
  { href:'#work',       label:'Work'       },
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

/* WORKS now lives server-side (data/content.seed.json), managed via the admin panel at /admin */

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

/* Contact info (email, phone, instagram, address) now lives server-side (data/content.seed.json), managed via the admin panel at /admin */

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

/* ─── Tool runner functions ─── */

function runCurrencyRecognizer(input) {
  const results = [];
  const patterns = [
    { re:/\$\s?[\d,]+(\.\d{1,2})?/g,  currency:'USD' },
    { re:/€\s?[\d,]+(\.\d{1,2})?/g,   currency:'EUR' },
    { re:/£\s?[\d,]+(\.\d{1,2})?/g,   currency:'GBP' },
    { re:/₹\s?[\d,]+(\.\d{1,2})?/g,   currency:'INR' },
  ];
  patterns.forEach(({ re, currency }) =>
    (input.match(re) || []).forEach(v => results.push({ currency, value: v.trim() }))
  );
  if (!results.length) return 'No currency values found.\n\nTry: "Total $1,200 plus €500 tax"';
  return results.map((x, i) => `Result ${i + 1}\n  Currency : ${x.currency}\n  Value    : ${x.value}`).join('\n\n');
}

function runTextExtractor(input) {
  const out = [];
  const emails = input.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g) || [];
  const urls   = input.match(/https?:\/\/[^\s]+/g) || [];
  const dates  = input.match(/\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\d{4}-\d{2}-\d{2})\b/g) || [];
  const phones = input.match(/\+?[\d][\d\s\-()]{8,}/g) || [];
  if (emails.length) out.push(`Email Addresses (${emails.length})\n  ${emails.join('\n  ')}`);
  if (urls.length)   out.push(`URLs (${urls.length})\n  ${urls.join('\n  ')}`);
  if (dates.length)  out.push(`Dates (${dates.length})\n  ${dates.join('\n  ')}`);
  if (phones.length) out.push(`Phone Numbers (${phones.length})\n  ${phones.map(x => x.trim()).join('\n  ')}`);
  return out.length ? out.join('\n\n') : 'No entities found.\n\nTry pasting text with emails, URLs, or dates.';
}

function runOcrParser(input) {
  const fields = {};
  const name = input.match(/name[:\s]+([A-Za-z\s]+)/i);
  const dob  = input.match(/d\.?o\.?b\.?[:\s]+([0-9\/\-]+)/i);
  const id   = input.match(/id\s?(?:no|num|number)?[:\s#]+([A-Z0-9]+)/i);
  const exp  = input.match(/exp(?:iry|ires?)?[:\s]+([0-9\/\-]+)/i);
  const addr = input.match(/address[:\s]+(.+)/i);
  if (name) fields['Full Name']     = name[1].trim();
  if (dob)  fields['Date of Birth'] = dob[1].trim();
  if (id)   fields['ID Number']     = id[1].trim();
  if (exp)  fields['Expiry']        = exp[1].trim();
  if (addr) fields['Address']       = addr[1].trim();
  if (!Object.keys(fields).length) return 'No fields found.\n\nTry: "Name: John Doe  DOB: 01/01/1990  ID No: AB1234"';
  return 'Extracted Fields\n\n' + Object.entries(fields).map(([k, v]) => `  ${k.padEnd(14)}: ${v}`).join('\n');
}

function runSentimentAnalysis(input) {
  if (!input.trim()) return 'Enter text to analyze.';
  const pos = ['good','great','excellent','love','amazing','wonderful','happy','best','fantastic','awesome','nice','perfect','outstanding','brilliant'];
  const neg = ['bad','terrible','awful','hate','horrible','worst','poor','ugly','broken','fail','useless','annoying','dreadful','disappointing'];
  const words = input.toLowerCase().split(/\W+/);
  let score = 0;
  words.forEach(w => { if (pos.includes(w)) score++; if (neg.includes(w)) score--; });
  const label = score > 0 ? 'POSITIVE' : score < 0 ? 'NEGATIVE' : 'NEUTRAL';
  const confidence = Math.min(0.52 + Math.abs(score) * 0.11, 0.97).toFixed(2);
  return `Sentiment Analysis\n\n  Result       : ${label}\n  Confidence   : ${(confidence * 100).toFixed(0)}%\n  Score        : ${score > 0 ? '+' : ''}${score}\n  Words        : ${words.filter(Boolean).length} analyzed`;
}

export const TOOLS = [
  {
    id:'currency', icon:'💱',
    title:'Currency Recognizer', sub:'Extract values from any text',
    desc:'Instantly detect and extract currency values from raw text, useful for invoice processing, financial document parsing, and automated data extraction.',
    placeholder:'e.g. "Invoice total is $1,200.50 and €800 with ₹50,000 deposit"',
    run: runCurrencyRecognizer,
  },
  {
    id:'extract', icon:'📋',
    title:'Text Extractor', sub:'Emails, URLs, dates, phone numbers',
    desc:'Extract structured entities from unstructured text, email addresses, website URLs, dates, and phone numbers in one pass.',
    placeholder:'Paste any text containing emails, URLs, dates, or phone numbers...',
    run: runTextExtractor,
  },
  {
    id:'ocr', icon:'🪪',
    title:'OCR Field Parser', sub:'Structured extraction from ID documents',
    desc:'Simulate the OCR extraction engine built for identity documents, extract Name, DOB, ID Number, Expiry, and Address from raw OCR output.',
    placeholder:'e.g. "Name: John Doe  DOB: 01/01/1990  ID No: AB123456  Expiry: 12/2028"',
    run: runOcrParser,
  },
  {
    id:'sentiment', icon:'🎭',
    title:'Sentiment Analysis', sub:'Positive / Negative / Neutral',
    desc:'Score the sentiment of any text, ideal for customer feedback pipelines, review classification, and content moderation systems.',
    placeholder:'Type any text to analyze its tone and sentiment...',
    run: runSentimentAnalysis,
  },
];
