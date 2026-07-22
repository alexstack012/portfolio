import dashboardScreenshot from "../assets/images/dash.webp";
import loginScreenshot from "../assets/images/login.webp";
import aginspireScreenshot from "../assets/images/aginspireScreenshot.webp";
import photographyPortfolioScreenshot1 from "../assets/images/photoport1.webp";
import photographyPortfolioScreenshot2 from "../assets/images/photoport2.webp";
import campaignArchiveDashboardScreenshot from "../assets/images/campaignArchiveDashboardScreenshot.png";
import campaignArchiveCharactersScreenshot from "../assets/images/campaignArchiveCharactersScreenshot.png";
import campaignArchiveLogScreenshot from "../assets/images/campaignArchiveLogScreenshot.png";

//this might be overkill for a simple portfolio, but it seemed right to keep content together and separate from presentation logic.

export const profile = {
  firstName: "Alex",
  fullName: "Alex Stack",
  location: "Minnesota, USA",
  role: "Frontend Developer",
  email: "alex_stack012@live.com",
  resumePath: "/ASTACKResume.pdf",
  shortBio:
    "Minnesota frontend developer for hire building responsive React, TypeScript, and Angular experiences for freelance clients and product teams.",
  serviceAreas: ["Minnesota", "United States", "Remote"],
  seoKeywords: [
    "Minnesota frontend developer",
    "Minnesota freelance web developer",
    "React developer for hire",
    "TypeScript developer Minnesota",
    "Angular freelancer",
    "local web developer",
    "frontend engineer for hire",
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/alexstack012",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alex-stack/",
      external: true,
    },
    {
      label: "Resume",
      href: "/AlexStackResume.pdf",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:alex_stack012@live.com",
      external: false,
    },
  ],
};

export const strengths = [
  "Designing responsive UI systems that scale beyond a single page",
  "Shipping clean, typed component architecture in React and TypeScript",
  "Building accessible experiences with strong UX and interaction detail",
  "Collaborating across product, backend, and QA to deliver polished features",
];

export const experienceHighlights = [
  "Minnesota frontend developer with experience building responsive and maintainable applications for real product teams and client work.",
  "Strong background in Angular, React, TypeScript, JavaScript, and API-driven UI development for marketing sites, dashboards, and custom web apps.",
  "Available for freelance web development, front-end feature work, and collaborative product delivery with local or remote clients.",
];

export const story = [
  "I graduated early from high school, served eight years in the U.S. Army, and later transitioned into software through an intensive coding bootcamp during the pandemic.",
  "That path shaped how I work today: disciplined, calm under pressure, quick to learn, and motivated by building tools that genuinely help people.",
  "Outside of work, I spend time with my family, play games, and stay happily deep in everything from Star Wars to DnD and Warhammer 40k.",
];

export const contactChannels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alex-stack",
    href: "https://www.linkedin.com/in/alex-stack/",
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: profile.resumePath,
  },
];

export const featuredProjects = [
  {
    name: "Tabletop Campaign Archive",
    status: "Active personal project, deployment in progress",
    summary:
      "A full-stack campaign-management archive for organizing characters, sessions, lore, locations, spells, and equipment for a lore-heavy dark-fantasy tabletop campaign.",
    description:
      "The Tabletop Campaign Archive is an Angular and PostgreSQL application built for The War of Shadow and Secrets, a dark-fantasy campaign connecting Curse of Strahd, Vecna: Eve of Ruin, and the Shadowfell. It combines searchable reference data with database-backed campaign records, role-aware access, and protected CRUD workflows. Visitors can explore a read-only demonstration, while authenticated keepers can manage characters and campaign sessions.",
    stack: [
      "Angular 21",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "RxJS",
      "SCSS",
      "Vitest",
    ],
    outcomes: [
      "Built a normalized PostgreSQL data layer for campaigns, entities, sessions, locations, aliases, and linked records",
      "Created authenticated editor and read-only demonstration modes with protected Angular routes and signed bearer sessions",
      "Implemented character and campaign-session create, edit, detail, and confirmed-delete workflows",
      "Moved runtime character and campaign-log data from static placeholders into parameterized Express API queries",
      "Added SQL-level visibility filtering so restricted campaign data is never sent to unauthorized users",
      "Designed responsive dark-fantasy interfaces for characters, sessions, spells, equipment, lore, and locations",
    ],
    highlights: [
      "Full-stack Angular, Express, and PostgreSQL architecture",
      "Role-aware authorization and read-only demonstration access",
      "Normalized relational data with aggregated API responses that avoid N+1 queries",
      "Searchable and filterable character, spell, equipment, and session interfaces",
      "Reusable typed API services and shared TypeScript models",
      "Backend, component, service, and production-build validation",
    ],
    repositoryHref: "https://github.com/alexstack012/TTCA",
    repositoryPrivate: false,
    demoHref: "",
    screenshots: [
      {
        src: campaignArchiveDashboardScreenshot,
        alt: "Tabletop Campaign Archive dashboard showing its dark-fantasy campaign collections",
      },
      {
        src: campaignArchiveCharactersScreenshot,
        alt: "Campaign character directory with searchable database-backed NPC records",
      },
      {
        src: campaignArchiveLogScreenshot,
        alt: "Campaign session log showing linked locations and notable characters",
      },
    ],
  },
  {
    name: "Northstar Workforce Solutions Dashboard",
    status: "Case study live, deployment coming soon",
    summary:
      "A mock staffing and workforce-management dashboard designed to feel like a real internal business application for recruiting and operations teams.",
    description:
      "Northstar simulates the workflows a team would use to manage openings, candidates, permissions, and hiring activity across multiple tenants. The focus was on making the product feel credible: authenticated routing, role-aware UX, reusable data access patterns, and polished CRUD flows instead of static portfolio screens.",
    stack: [
      "Angular 21",
      "Angular Material",
      "TypeScript",
      "RxJS",
      "SCSS",
      "json-server",
      "Vitest",
    ],
    outcomes: [
      "Built authenticated routing with session expiry, recovery flows, and browser-session persistence",
      "Created CRUD workflows for jobs and candidates with detail, edit, and delete states",
      "Implemented admin-only user management with tenant-aware presentation and account activation controls",
      "Used a mock API layer to keep setup simple while still demonstrating application architecture",
    ],
    highlights: [
      "Route protection and role-based access control",
      "Reusable service-based data access",
      "Dashboard metrics and internal-tool presentation",
      "Careful handling of mixed string and number identifiers from json-server",
    ],
    repositoryHref: "https://github.com/alexstack012/northstar-dashboard",
    demoHref: "",
    screenshots: [
      {
        src: dashboardScreenshot,
        alt: "Northstar dashboard overview showing workforce metrics and recruiting data",
      },
      {
        src: loginScreenshot,
        alt: "Northstar login screen with branded authentication form",
      },
    ],
  },
  {
    name: "Aginspire",
    status: "Deployed and live at aginspire.org",
    summary:
      "A simple SPA Angular application built for a private client in the Agriculture industry.",
    description:
      "Aginspire is a single-page application built with Angular, designed to provide users with an intuitive interface for exploring a non-profit ag education enterprise that strives to provide fun and educational opportunities for people of all ages",
    stack: ["Angular", "TypeScript", "SCSS", "Hosting via client-provided"],
    outcomes: [
      "Delivered a polished, user-friendly SPA that met the client’s requirements and timeline",
      "Implemented responsive design to ensure accessibility across devices",
      "Collaborated closely with the client to iterate on design and functionality based on feedback",
    ],
    highlights: [
      "End-to-end project delivery from initial requirements gathering to deployment",
      "Responsive design and user experience tailored to the client’s audience",
      "Effective client communication and iteration to meet project goals",
      "Images were taken by myslef during a visit to the client’s farm, adding a personal touch to the project and demonstrating my commitment to understanding the client’s needs and context",
    ],
    repositoryHref: "",
    repositoryPrivate: true,
    demoHref: "https://aginspire.org",
    screenshots: [
      {
        src: aginspireScreenshot,
        alt: "Aginspire homepage showing educational resources for agriculture",
      },
    ],
  },
  {
    name: "My Photo Portfolio template",
    status: "Example code available on GitHub, no live deployment",
    summary:
      "A simple SPA Angular application built for a private client in the photography industry.",
    description:
      "A photography portfolio template built with Angular, designed to provide photographers with a clean and customizable platform to showcase their work and attract potential clients. The application features a responsive design, intuitive navigation, and a user-friendly interface that allows photographers to easily upload and organize their photos into galleries. The template also includes sections for an about page, contact information, and integration with social media platforms to help photographers connect with their audience and grow their online presence.",
    stack: ["Angular", "TypeScript", "SCSS", "Hosting via client-provided"],
    // outcomes: [
    //   'Delivered a polished, user-friendly SPA that met the client’s requirements and timeline',
    //   'Implemented responsive design to ensure accessibility across devices',
    // ],
    highlights: [
      "***NOTE: this project is an example I built for demonstation purposes. the images used are open source and not my own work, but the code and architecture are my own creation.***",
      "Responsive design for users on all devices and user experience tailored to the client’s audience",
      "End-to-end project delivery from initial requirements gathering to deployment",
    ],
    repositoryHref: "https://github.com/alexstack012/photography-portfolio",
    repositoryPrivate: false,
    screenshots: [
      {
        src: photographyPortfolioScreenshot1,
        alt: "Photography portfolio template showing a grid of featured images",
      },
      {
        src: photographyPortfolioScreenshot2,
        alt: "Photography portfolio template displaying a detailed image view",
      },
    ],
  },
];
