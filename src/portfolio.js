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
  username: "Miguel",
  title: "Hi all, I'm Miguel",
  subTitle: emoji(
    "Generative AI Expert at Accenture, building end-to-end AI solutions from data cleaning and model training to deployment with CI/CD pipelines using Azure services and advanced data science."
  ),
  resumeLink:
    "/resume.pdf", // Asegúrate de que el enlace apunte a tu CV correcto
  displayGreeting: true // Mantenlo en true para mostrar esta sección
};



// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/miguelgh65",
  linkedin: "https://www.linkedin.com/in/mgonzalezhndz/",
  gmail: "miguelgh65@gmail.com",
  // El resto de los enlaces están vacíos ya que no los tienes
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // Mantenlo en true para mostrar esta sección
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERT IN GENERATIVE AI, DATA SCIENCE, AND CLOUD SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build and deploy AI-driven solutions using CI/CD pipelines and Azure Functions"
    ),
    emoji(
      "⚡ Develop machine learning models, including diffusion models for Text-to-Speech (TTS) systems"
    ),
    emoji(
      "⚡ Data analysis and model training using Python, PyTorch, and advanced data science techniques"
    ),
    emoji(
      "⚡ Work with Transformers for Natural Language Processing (NLP) and large-scale language models"
    ),
    emoji(
      "⚡ Cloud-based solution integration with RESTful APIs and large-scale databases"
    )
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-brain" // Cambia esto si tienes un ícono mejor
    },
    {
      skillName: "transformers",
      fontAwesomeClassname: "fas fa-robot" // Placeholder para Transformers
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "ci-cd",
      fontAwesomeClassname: "fas fa-tools"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Politécnica de Madrid (UPM)",
      logo: require("./assets/images/upm.png"), // Logo de UPM
      subHeader: "Master's Degree in Telecommunications Engineering",
      duration: "2022",
      desc: "Specialization in Artificial Intelligence and Telecommunications.",
      descBullets: [
        "Development of AI solutions applied to telecommunications",
        "Advanced courses in artificial intelligence and networks",
        "Distinction in final thesis: Creation of a program to clone and blend voices from fictional characters with a smart conversational assistant for Alexa"
      ]
    },
    {
      schoolName: "Politecnico di Milano (Polimi)",
      logo: require("./assets/images/polimi.png"), // Logo de Polimi
      subHeader: "Master's in Computer Science and Artificial Intelligence",
      duration: "2022",
      desc: "Participation in the Erasmus+ program focused on AI and data science.",
      descBullets: [
        "Work on AI and machine learning projects",
        "Publication of studies on natural language processing"
      ]
    },
    {
      schoolName: "Universidad Politécnica de Madrid (UPM)",
      logo: require("./assets/images/upm.png"), // Logo de UPM
      subHeader: "Bachelor's Degree in Telecommunications Technology and Services Engineering",
      duration: "2020",
      desc: "Specialization in telecommunications systems and networks.",
      descBullets: [
        "Study of networks, systems, and data processing",
        "Development of telecommunications-related projects",
        "Outstanding grade in final thesis: Creation of a program to detect febrile states using AI"
      ]
    },
    {
      schoolName: "Asociación Española de Programadores Informáticos (AEPI)",
      logo: require("./assets/images/aepi.jpg"), // Logo de AEPI
      subHeader: "Professional Python Course",
      duration: "2020",
      desc: "Specialized course in Python for software development and data analysis.",
      descBullets: [
        "Development of advanced Python scripts",
        "Applications of Python in data science and automation",
        "Final project: Creation of a car workshop sales management system using Python and SQL"
      ]
    }
  ]
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Artificial Intelligence & Machine Learning", // Especialización en IA
      progressPercentage: "95%" // Proficiencia en IA
    },
    {
      Stack: "Azure Cloud & DevOps", // Experiencia en Azure y CI/CD
      progressPercentage: "85%" // Proficiencia en Azure y servicios en la nube
    },
    {
      Stack: "Diffusion Models & Transformers", // Modelos de Difusión y Transformers
      progressPercentage: "80%" // Proficiencia en Modelos de Difusión y Transformers
    },
    {
      Stack: "PyTorch & Python Programming", // Uso de PyTorch y Python
      progressPercentage: "90%" // Proficiencia en PyTorch y Python
    }
  ],
  displayCodersrank: false // Mantenlo en false si no deseas mostrar las insignias de Codersrank
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Developer (Alexa Prize)",
      company: "Amazon via UPM",
      companylogo: require("./assets/images/amazonupm.png"), // Combined logo for Amazon and UPM
      date: "2021-2023",
      desc: "Participated in the Alexa Prize competition as part of a UPM team, developing AI solutions for conversational interaction.",
      descBullets: [
        "Developed AI models for conversational interaction",
        "Collaborated with Amazon to enhance Alexa-based solutions"
      ]
    },
    {
      role: "Consultant",
      company: "Sortis & ST Engineering",
      companylogo: require("./assets/images/sortisst.png"), // Combined logo for Sortis and ST Engineering
      date: "2022 – 2023",
      desc: "Consultant specializing in satellite network operations and data analysis, working for ST Engineering through Sortis.",
      descBullets: [
        "Optimized global satellite network operations",
        "Performed data analysis and developed automated solutions"
      ]
    },
    {
      role: "AI Engineer",
      company: "Dubme",
      companylogo: require("./assets/images/dubme.jpeg"), // Dubme logo
      date: "2023 – 2024",
      desc: "Developed AI models for automated audio and video generation on multimedia platforms.",
      descBullets: [
        "Implemented diffusion models for voice generation",
        "Automated multimedia workflow processes"
      ]
    },
    {
      role: "Generative AI Expert",
      company: "Accenture",
      companylogo: require("./assets/images/accenture.jpg"), // Accenture logo
      date: "2024 – Present",
      desc: "Generative AI specialist, building end-to-end solutions using Azure, PyTorch, and advanced ML models.",
      descBullets: [
        "Developed generative AI solutions with Azure",
        "Implemented CI/CD pipelines for ML models "
        

      ]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS I AM CURRENTLY WORKING ON",
  projects: [
    {
      image: require("./assets/images/nmpfit.png"), // Asegúrate de tener el logo de NMPfit
      projectName: "NMPfit",
      projectDesc: "An AI-powered (AI embedding database and Langchain) conversational assistant for health, specializing in diet planning, gym routines, and overall wellness management.",
      footerLink: [
        {
          name: "Not website yet",
          url: "wwww.google.com" // Cambia esta URL si tienes el enlace correcto
        }
        // Puedes agregar más botones si es necesario
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Honors, Certifications, and Significant Projects",

  achievementsCards: [
    {
      title: "Honors in Master's Thesis",
      subtitle:
        "Created a program to clone and blend voices from fictional characters with a smart conversational assistant's voice. Graduated with distinction.",
      image: require("./assets/images/matricula.jpg"), // Logo for distinction
      imageAlt: "Master's Thesis Honors",
      footerLink: [
        {
          name: "View Master's Thesis",
          url: "#" // Add link if available
        }
      ]
    },
    {
      title: "Outstanding in Bachelor's Thesis",
      subtitle:
        "Developed a program to detect febrile states using AI. Graduated with outstanding grades.",
      image: require("./assets/images/sobresaliente.png"), // Logo for outstanding
      imageAlt: "Bachelor's Thesis Outstanding",
      footerLink: [
        {
          name: "View Bachelor's Thesis",
          url: "#" // Add link if available
        }
      ]
    },
    {
      title: "Dialogflow Certifications",
      subtitle: "Certified in Dialogflow NCOP and NCPA",
      image: require("./assets/images/st.jpg"), // Logo for Dialogflow
      imageAlt: "Dialogflow Certification",
      footerLink: [
        {
          name: "Certification Details",
          url: "#" // Add link if available
        }
      ]
    },
    {
      title: "Nvidia Deep Learning Fundamentals",
      subtitle: "Certified in Nvidia Deep Learning Fundamentals",
      image: require("./assets/images/nvidia.png"), // Logo for Nvidia
      imageAlt: "Nvidia Deep Learning Certification",
      footerLink: [
        {
          name: "Certification Details",
          url: "#" // Add link if available
        }
      ]
    },
    {
      title: "Azure Certifications (In Progress)",
      subtitle: "Currently pursuing Azure Fundamentals & Azure AI Fundamentals certifications.",
      image: require("./assets/images/azure.png"), // Logo for Azure
      imageAlt: "Azure Certification",
      footerLink: [
        {
          name: "Certification Details",
          url: "#" // Add link if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

// Contact Information Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Currently busy and happy at Accenture, but feel free to reach out for projects or just to say hi. My inbox is always open!",
  number: "+34 648607181", // Reemplaza con tu número si lo deseas
  email_address: "miguelgh696@gmail.com" // Cambia por tu correo si es necesario
};



// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
