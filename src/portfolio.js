/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naga",
  title: "Hi, I'm Naga Munukutla",
  subTitle: emoji(
    "AI Product Lead building sovereign AI infrastructure — private LLM systems, document intelligence, and RAG platforms that run entirely on infrastructure I control. No commercial LLM APIs, no data leaving the network."
  ),
  resumeLink: `${process.env.PUBLIC_URL}/resume.pdf`,
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/naga-sortis",
  linkedin: "https://linkedin.com/in/satya-munukutla",
  gmail: "naga.munukutla@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOVEREIGN AI INFRASTRUCTURE · DOCUMENT INTELLIGENCE · FULL-STACK PLATFORMS",
  skills: [
    emoji(
      "⚡ Design and ship sovereign AI products — private LLM inference, no commercial API calls, no data leaving the network"
    ),
    emoji(
      "⚡ Build RAG and document-intelligence pipelines with LangChain, ChromaDB, and self-hosted vLLM"
    ),
    emoji(
      "⚡ Develop full-stack internal platforms — Vue 3 / Django REST Framework / PostgreSQL"
    ),
    emoji(
      "⚡ Ship native Android applications with real-time sensor and signal data pipelines"
    ),
    emoji(
      "⚡ Own AI product roadmaps end-to-end — architecture, GDPR/NIS2 compliance mapping, and production delivery"
    )
  ],
  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "fastapi", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "vuejs", fontAwesomeClassname: "fab fa-vuejs" },
    { skillName: "android", fontAwesomeClassname: "fab fa-android" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "terraform", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidad de Jaén, Spain",
      subHeader: "MSc Telecommunication Engineering",
      duration: "2018 – 2021",
      desc: "Thesis: Arduino-based photovoltaic energy harvesting with MPPT control (500+ hours, MATLAB/Simulink validation).",
      descBullets: []
    },
    {
      schoolName: "Andhra University, India",
      subHeader: "BTech Electronics & Communications Engineering",
      duration: "2014 – 2018",
      desc: "Hackathons with Cisco and Smart India Hackathon; presented startup ideas at APXLR8 accelerator.",
      descBullets: []
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Sovereign AI Infrastructure (private vLLM, RAG, ChromaDB, LangChain)",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud & DevOps (AWS, Terraform, Docker, CI/CD)",
      progressPercentage: "85%"
    },
    {
      Stack: "Full-Stack Development (Vue 3 / Django / FastAPI)",
      progressPercentage: "80%"
    },
    {
      Stack: "Python & SQL (Advanced)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Product Lead",
      company: "Sortis · Zadara Cloud Solutions",
      companylogo: require("./assets/images/sortis-logo.svg").default,
      date: "2024 – Present",
      desc: "Responsible for the AI vertical roadmap — both short-term deliverables and longer-term direction — building internal and external AI products in partnership with Zadara.",
      descBullets: [
        "Veltrix Veritas v2.0 — a Document Intelligence Platform that takes a single technical document and produces a complete sales intelligence package: competitive analysis via self-hosted SearXNG, winning arguments with evidence citations, audience profiles across 16 industry verticals, and multi-channel campaign plans. Runs on private vLLM (Qwen/Qwen2.5-VL-7B-Instruct-AWQ), ChromaDB, and LangChain — zero data leaves the network",
        "Veltrix Sage — organisational knowledge query engine. FastAPI backend, Streamlit UI, ChromaDB vector store, GDPR-compliant, bilingual ES/EN. Production v1.0 deployed on-premise",
        "Veltrix Beacon — Microsoft 365 knowledge discovery with cross-platform PC agents. Same private-infrastructure principle; full production deployment",
        "NEXUS — end-to-end sovereign AI service pack for enterprise clients, including the FORGE embedded AI team-as-a-service offering",
        "Co-authored a technical article on sovereign AI architecture with Zadara's engineering team, published on the Zadara blog",
        "Led architecture and pricing for a €259K public procurement bid (SUMA Gestión Tributaria — generative AI virtual assistant), including compliance mapping across contract documents"
      ]
    },
    {
      role: "Senior Cloud & AI Engineer",
      company: "Sortis Telecommunications · ST Engineering iDirect",
      companylogo: require("./assets/images/sortis-logo.svg").default,
      date: "Jun 2021 – 2024",
      desc: "Customer-facing cloud engineering for satellite network clients — a mix of infrastructure design, Python automation, and direct client engagement across Europe, the US, and India.",
      descBullets: [
        "Led an AI digitalization initiative — built pipelines on AWS to replace manual satellite support workflows with predictive monitoring and automated triage",
        "Designed serverless and containerised infrastructure (Lambda, ECS/Fargate, S3, RDS, CloudWatch) for real-time network diagnostics across client deployments",
        "Built time-series forecasting and anomaly detection on satellite telemetry data; reduced reactive incidents by catching signal degradation before it reached customers",
        "Wrote secure REST APIs connecting customer systems to internal support tooling; handled field training for international client teams",
        "SLM (Server Lifecycle Manager) — built an internal full-stack IT platform on Vue 3, Django 5, PostgreSQL, Redis/Celery, and Nginx; in production at slm.sortis.es",
        "NexSignal — developed an Android app for cellular signal intelligence and dual-SIM carrier switching targeting Orange Spain; produced the full pitch deck and technical alignment documentation"
      ]
    },
    {
      role: "Data Engineer Intern",
      company: "ADEX Corporation",
      date: "Nov 2020 – Jun 2021",
      desc: "Built data pipelines and dashboards for industrial sensor monitoring and power plant performance.",
      descBullets: [
        "Built Python data pipelines for real-time industrial sensor data with automated alarm generation, integrated into a proprietary control optimisation platform",
        "Developed SQL-backed dashboards for power plant performance monitoring and predictive maintenance"
      ]
    },
    {
      role: "Hardware & Embedded Engineer",
      company: "MSR Technologies, India",
      date: "2016 – 2017",
      desc: "Designed sensor-fusion systems on Arduino and Raspberry Pi for home automation and smart parking. Wrote control algorithms in Python and C.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on
// Rendered as an interactive, slide-able carousel — see StartupProject.js

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOVEREIGN AI PRODUCTS & PLATFORMS I'VE BUILT",
  projects: [
    {
      projectName: "Veltrix Veritas v2.0",
      tagline: "Document Intelligence Platform",
      status: "Production",
      projectDesc:
        "Takes a single technical document and produces a complete sales intelligence package — competitive analysis, evidence-backed arguments, audience profiles, and campaign plans — without the document ever leaving the network.",
      problem:
        "Turning a technical document into a sales-ready story — competitive positioning, audience-specific messaging, campaign copy — is slow, manual work, and commercial AI tools require sending that document to an external API.",
      solution:
        "Veritas ingests one technical document and privately generates a full sales intelligence package: competitive analysis via a self-hosted SearXNG search layer, winning arguments backed by evidence citations, audience profiles across 16 industry verticals, and multi-channel campaign plans — all on infrastructure I control.",
      features: [
        "Self-hosted SearXNG competitive analysis — no external search API",
        "Evidence-cited argument generation, not unsourced claims",
        "Audience profiling across 16 industry verticals",
        "Multi-channel campaign plan generation",
        "Zero data leaves the network at any point"
      ],
      techStack: [
        "Private vLLM (Qwen/Qwen2.5-VL-7B-Instruct-AWQ)",
        "ChromaDB",
        "LangChain",
        "Self-hosted SearXNG"
      ],
      footerLink: []
    },
    {
      projectName: "Veltrix Sage",
      tagline: "Organisational Knowledge Query Engine",
      status: "Production v1.0",
      projectDesc:
        "Lets teams query their own organisational knowledge in natural language — documents, wikis, structured knowledge — with every answer cited back to its source, entirely on private infrastructure.",
      problem:
        "Enterprise teams accumulate enormous institutional knowledge in documents, wikis, and threads. Finding the right piece means already knowing where to look — and commercial tools like Copilot or Notion AI solve this by sending your content to an external AI API, which isn't viable for data-sovereignty-bound companies.",
      solution:
        "Sage indexes organisational content into a local ChromaDB vector store and answers questions using a private LLM inference server — the same sovereign stack as Veritas. No content leaves the network at any point.",
      features: [
        "Natural language query over any ingested knowledge base",
        "Source attribution — every answer cites the document and section it came from",
        "Confidence indicators on all responses",
        "Bilingual interface (Spanish / English), auto-detected from the query",
        "GDPR compliance mapping — data classification and retention metadata per document"
      ],
      techStack: [
        "FastAPI backend",
        "Streamlit UI",
        "ChromaDB vector store",
        "Private vLLM (Qwen-compatible)",
        "On-premise Ubuntu deployment"
      ],
      footerLink: []
    },
    {
      projectName: "Veltrix Beacon",
      tagline: "Microsoft 365 Knowledge Discovery",
      status: "Production",
      projectDesc:
        "Sage's companion product — surfaces organisational knowledge straight out of SharePoint, Teams, OneDrive, and Outlook via cross-platform PC agents, respecting Microsoft 365's own permission model.",
      problem:
        "The same institutional-knowledge problem Sage solves, but scattered across SharePoint, Teams, OneDrive, and Outlook — and any agent that indexes it has to respect who is actually allowed to see what.",
      solution:
        "Cross-platform PC agents index Microsoft 365 content into the same local ChromaDB store Sage queries from, incrementally re-embedding only new or modified content, and strictly honouring the M365 permission model so a user only ever retrieves what they already have access to.",
      features: [
        "Cross-platform PC agents indexing SharePoint, Teams, OneDrive, and Outlook",
        "Incremental indexing — only new or modified content is re-embedded",
        "Permission-aware ingestion — no privilege escalation, ever",
        "Same query interface as Sage once content is indexed"
      ],
      techStack: [
        "Python cross-platform PC agents",
        "ChromaDB vector store",
        "FastAPI + Streamlit",
        "Private vLLM inference"
      ],
      footerLink: []
    },
    {
      projectName: "NexSignal",
      tagline: "Cellular Signal Intelligence & Dual-SIM Switching",
      status: "Active development",
      projectDesc:
        "An Android app that gives real intelligence about cellular signal quality — not just a bar count — and automatically switches between SIM cards on dual-SIM devices to keep the best available connection, built for the Orange Spain market.",
      problem:
        "Dual-SIM phones are common in Spain, but Android's native SIM management is manual — users have to guess which SIM is better right now with no real-time signal intelligence. Carriers, meanwhile, lack fine-grained crowdsourced signal data from real devices in real-world conditions.",
      solution:
        "NexSignal runs continuously in the background, collecting signal metrics from both SIMs, comparing them in real time, and automatically switching the active data SIM when a configured quality threshold is crossed. Signal data is also aggregated — anonymised, opt-in — for carrier-side network intelligence.",
      features: [
        "Real-time signal monitoring — RSSI, RSRP, RSRQ, SINR per SIM",
        "Automatic carrier switching on signal-quality differential, no user interaction needed",
        "GPS-tagged signal map showing quality history by location",
        "Network technology and frequency band detection per SIM",
        "Full switching log with reason and signal values at time of switch",
        "Opt-in, anonymised analytics for carrier network intelligence (Orange Spain)",
        "Battery-aware, user-configurable sampling thresholds"
      ],
      techStack: [
        "Android (native)",
        "TelephonyManager / SubscriptionManager / SignalStrength APIs",
        "SQLite",
        "Mapbox / OpenStreetMap",
        "Python (FastAPI) analytics backend"
      ],
      footerLink: []
    },
    {
      projectName: "SLM — Server Lifecycle Manager",
      tagline: "Full-Stack Internal IT Platform",
      status: "Production",
      projectDesc:
        "A single pane of glass for the Sortis infrastructure team — server inventory, encrypted credentials, two-step VPN access, and full audit logging, replacing a mix of spreadsheets and tribal knowledge. In production at slm.sortis.es.",
      problem:
        "The infrastructure team was managing servers, credentials, and VPN access through spreadsheets, shared documents, and tribal knowledge — with no lifecycle tracking, no access control, and no audit trail.",
      solution:
        "SLM covers the full lifecycle of a server or service: provisioning records, encrypted credential management with export, a two-step-authenticated VPN connection flow, and ongoing operational state tracking — all behind role-based access control.",
      features: [
        "Server inventory — provisioning date, hardware specs, assigned services, state, ownership",
        "Encrypted credential storage with role-based export",
        "Two-step-authenticated VPN connection modal",
        "Async task processing via Celery — credential rotation, bulk exports, state sync",
        "Full audit logging — every credential access, export, and state change",
        "Role-based access control — admin, engineer, and read-only roles"
      ],
      techStack: [
        "Vue 3 (Composition API)",
        "Django 5 + Django REST Framework",
        "PostgreSQL",
        "Celery + Redis",
        "Nginx"
      ],
      footerLink: []
    }
  ],
  display: true
};

// Founding — Praxa company brief

const foundingSection = {
  title: "Founding Praxa",
  subtitle: "An early-stage company brief, built in the open.",
  display: true,
  thesis: {
    statement:
      "People and organisations make enormous decisions about the distance between home and work, with almost no data about what that distance actually costs.",
    points: [
      {
        scale: "Once, across borders",
        desc: "Someone weighs relocating to another country and has no honest picture of what changes — cost, taxes, healthcare, schooling, disposable income, paperwork burden.",
        product: "NestGo"
      },
      {
        scale: "Daily, across a city",
        desc: "A company mandates office attendance, signs a lease, sets shift timings — with no measurement of the productive hours the resulting commute destroys.",
        product: "Radius"
      }
    ],
    closing: "Same underlying question. Different scale, different buyer, same company."
  },
  houseStyle:
    "Decision support that ends in a finished artifact, not an insight. NestGo does not stop at a cost-of-living comparison — it fills the visa forms. Radius must not stop at a dashboard — it generates the disclosure, the policy draft, the municipal submission. Rule of thumb: if the user still has to do the tedious part afterwards, the product isn't finished.",
  nestgo: {
    status: "Existing product concept",
    forWhom: "Expats, students, tourists, and employees in relocation programmes.",
    does: [
      "Compares living in the home country vs. the destination country",
      "Auto-fills destination-country visa forms from a passport scan, adapted to applicant type — student, tourist, or employee relocation"
    ],
    why: "The comparison earns trust; the form-filling is the thing people actually pay for."
  },
  radius: {
    status: "Concept stage",
    origin:
      "The Bengaluru \"shut down the IT parks and let us work from home\" problem — employees losing productive hours to traffic and broken roads. India-visible today, structurally global.",
    framing:
      "Do not position this as solving traffic — software cannot fix roads, and any product that claims to will fail. Radius owns the decision layer above the traffic.",
    functions: [
      {
        name: "Measure",
        desc: "Passive, consented, aggregate-only door-to-desk travel time. The critical metric is variance, not average — a predictable 60-minute commute is survivable; a 35-to-95-minute commute forces daily worst-case buffering and is what actually drives attrition. Nobody measures variance today."
      },
      {
        name: "Decide",
        desc: "Executive-facing recommendations: which teams on which days, satellite hub vs. headquarters seat, staggered start times, true hours-cost of a specific lease."
      },
      {
        name: "Escalate",
        desc: "Anonymised aggregate delay data as infrastructure evidence, exportable to municipal bodies, industry associations, and business-park operators."
      }
    ],
    moat:
      "Don't sell a dashboard — dashboards are commodities. Define and own a standard unit: the Commute Drag Index — productive hours lost per employee per month, variance weighted above mean. If that number gets cited in an ESG report, a lease negotiation, or a council session, Praxa becomes the definition rather than a vendor.",
    wedge: [
      {
        market: "EU",
        buyer: "Sustainability / compliance lead",
        pitch: "CSRD Scope 3 Category 7 measured properly, not survey-guessed",
        urgency: "Regulatory deadline"
      },
      {
        market: "India",
        buyer: "COO / Head of Workplace",
        pitch: "Recover productive hours, cut attrition",
        urgency: "Cost and retention pressure"
      }
    ],
    competitiveGap: [
      { who: "Google Maps / Waze", gap: "Optimise one person's next trip. No memory, no aggregate, no organisation." },
      { who: "MoveInSync / Routematic / Cityflo", gap: "Execute transport after someone has already decided everyone commutes. Logistics, not strategy." },
      { who: "Robin / Envoy / OfficeSpace", gap: "Desk booking. Know who reserved a seat, not what reaching it cost." },
      { who: "Civic apps (Sahaaya, FixMyStreet)", gap: "Complaints with no economic weight attached." }
    ],
    seam: "Unoccupied seam: between workplace software and civic infrastructure reality.",
    risks: [
      "Trust — if employees read this as surveillance, adoption dies on day one. Aggregation guarantees must be architectural, not a privacy-policy paragraph.",
      "Civic sales are slow — treat municipal impact as a credibility story, not a revenue line.",
      "Density requirement — infrastructure evidence is worthless below critical mass. First market must be one dense corridor, not a broad rollout."
    ]
  },
  founderNote: {
    constraint: "Solo founder, no external funding. This is the binding constraint and it reorders the roadmap.",
    reasoning:
      "Radius needs several employers on one corridor before it produces anything of value — i.e. enterprise sales, with procurement, security review, and a privacy conversation per customer. One unfunded person cannot run that motion while also building a second product. The sales cycle alone outlasts the runway.",
    therefore: "NestGo funds Praxa. Radius is what NestGo revenue buys.",
    corollary:
      "Delay dual incorporation — two entities means recurring accounting, filings, and social-security obligations in two jurisdictions before any revenue exists. Operating as autónomo in Spain first is materially cheaper than an SL; the crossover point depends on income. Consult a gestor. (Not tax advice.)"
  }
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications and significant work",
  achievementsCards: [
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Amazon Web Services",
      image: require("./assets/images/aws-badge.svg").default,
      imageAlt: "AWS Cloud Practitioner",
      footerLink: []
    },
    {
      title: "Azure Cloud Concepts",
      subtitle: "Microsoft",
      image: require("./assets/images/azure-badge.svg").default,
      imageAlt: "Azure Cloud Concepts",
      footerLink: []
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "Cisco",
      image: require("./assets/images/cisco-badge.svg").default,
      imageAlt: "Cisco Cybersecurity Essentials",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Writing about sovereign AI infrastructure and the products I build.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Information Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to senior AI product, sovereign AI infrastructure, or platform engineering roles. My inbox is always open!",
  number: "+34 662 486 772",
  email_address: "naga.munukutla@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true; // Open to senior AI product / sovereign AI infrastructure / platform engineering roles

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  foundingSection
};
