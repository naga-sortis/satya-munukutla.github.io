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
  resumeLink: "/resume.pdf",
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
      companylogo: require("./assets/images/sortis-logo.svg"),
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
      companylogo: require("./assets/images/sortis-logo.svg"),
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
      companylogo: require("./assets/images/sortis-logo.svg"),
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
      companylogo: require("./assets/images/sortis-logo.svg"),
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

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOVEREIGN AI PRODUCTS & PLATFORMS I'VE BUILT",
  projects: [
    {
      projectName: "Veltrix Sage & Beacon",
      projectDesc:
        "Two sovereign AI products on the same private stack — Sage lets teams query organisational knowledge, Beacon surfaces that knowledge from Microsoft 365 (SharePoint, Teams, OneDrive). Private vLLM inference, ChromaDB vector store, zero data exfiltration.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/naga-sortis/Veltrix_beacon_sage"
        }
      ]
    },
    {
      projectName: "NexSignal",
      projectDesc:
        "Android app that gives real cellular signal intelligence and automatically switches between SIM cards on dual-SIM devices to maintain the best available connection — built for the Orange Spain market.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/naga-sortis/signal_strength_app"
        }
      ]
    },
    {
      projectName: "SLM — Server Lifecycle Manager",
      projectDesc:
        "Internal IT operations platform managing server lifecycle, credentials, and VPN access across the organisation — Vue 3 / Django REST Framework / PostgreSQL / Celery. In production at slm.sortis.es.",
      footerLink: [
        {
          name: "Live site",
          url: "https://slm.sortis.es"
        }
      ]
    }
  ],
  display: true
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
      image: require("./assets/images/aws-badge.svg"),
      imageAlt: "AWS Cloud Practitioner",
      footerLink: []
    },
    {
      title: "Azure Cloud Concepts",
      subtitle: "Microsoft",
      image: require("./assets/images/azure-badge.svg"),
      imageAlt: "Azure Cloud Concepts",
      footerLink: []
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "Cisco",
      image: require("./assets/images/cisco-badge.svg"),
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
  resumeSection
};
