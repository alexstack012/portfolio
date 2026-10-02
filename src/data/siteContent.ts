import dashboardScreenshot from "../assets/images/dash.webp";
import loginScreenshot from "../assets/images/login.webp";
import aginspireScreenshot from "../assets/images/aginspireScreenshot.webp";
import campaignArchiveDashboardScreenshot from "../assets/images/campaignArchiveDashboardScreenshot.webp";
import campaignArchiveCharactersScreenshot from "../assets/images/campaignArchiveCharactersScreenshot.webp";
import campaignArchiveLogScreenshot from "../assets/images/campaignArchiveLogScreenshot.webp";

//this might be overkill for a simple portfolio, but it seemed right to keep content together and separate from presentation logic.

export const profile = {
  firstName: "Alex",
  fullName: "Alex Stack",
  location: "Minnesota, USA",
  role: "Frontend Developer",
  email: "alex_stack012@live.com",
  resumePath: "/AlexStackResume.pdf",
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

type FeaturedProject = {
  name: string;
  category: string;
  status: string;
  summary: string;
  description: string;
  stack: string[];
  outcomes: string[];
  highlights: string[];
  links: Array<{
    label: string;
    href?: string;
    disabled?: boolean;
  }>;
  mediaLabel?: string;
  screenshots: Array<{
    src: string;
    alt: string;
  }>;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "StackApply",
    category: "Shipped browser extension",
    status: "Free beta live for Chromium and Firefox",
    summary:
      "A local-first browser extension that scans job application pages, identifies likely profile fields, and lets applicants review high-confidence matches before autofilling.",
    description:
      "I built StackApply as a real cross-browser product, not an automatic application bot: it supports multi-step application workflows, reports fields that were filled, need review, or were blocked, stores applicant data locally, and never submits an application. One TypeScript codebase produces separate Manifest V3 builds for Chromium browsers and Firefox, with automated and manual release QA. A paid-feature architecture using Stripe-hosted checkout and signed entitlements is in development while the public Free Beta remains deliberately locked to free features.",
    stack: [
      "TypeScript",
      "JavaScript",
      "Browser Extension APIs",
      "Manifest V3",
      "WebExtensions",
      "HTML/CSS",
      "Vite",
      "Vitest",
      "Playwright",
      "Stripe architecture",
    ],
    outcomes: [
      "Released version 0.9 as a Free Beta through the Chrome Web Store and Firefox Add-ons",
      "Built confidence-based detection and guarded autofill that favors review over incorrect data entry",
      "Kept applicant profiles, work history, and education data in local browser storage",
    ],
    highlights: [
      "Separate verified Chromium and Firefox distributions from one TypeScript source tree",
      "User-controlled scanning, individual or bulk filling, and multi-page application support",
      "Regression coverage for matching, storage, browser behavior, and release builds",
    ],
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/pmbednfckdcfdkceghlabjccinicomnp",
      },
      {
        label: "Firefox Add-ons",
        href: "https://addons.mozilla.org/en-US/firefox/addon/stackapply/",
      },
    ],
    mediaLabel: "Browser extension",
    screenshots: [],
  },
  {
    name: "Tabletop Campaign Archive",
    category: "Full-stack product",
    status: "Live full-stack application",
    summary:
      "A production-deployed campaign platform for organizing interconnected characters, sessions, locations, lore, plot points, spells, and equipment.",
    description:
      "I designed and shipped the Angular application, Express REST API, and normalized PostgreSQL model used to manage years of connected campaign data. Public visitors get a restricted read-only demo, while authenticated keepers use protected CRUD workflows; SQL-level visibility rules prevent restricted records from reaching unauthorized users.",
    stack: [
      "Angular 21",
      "TypeScript",
      "RxJS",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "SCSS",
      "Vitest",
      "Playwright",
      "Cloudflare Workers",
      "Render",
      "Neon",
    ],
    outcomes: [
      "Deployed the frontend, API, and database through Cloudflare Workers, Render, and Neon",
      "Modeled campaigns, sessions, characters, locations, lore, aliases, and many-to-many relationships",
      "Implemented authenticated editor and restricted demo roles with signed sessions and protected routes",
    ],
    highlights: [
      "Parameterized and transactional repository-layer queries with aggregated relationship data",
      "Responsive search, filtering, relationship management, and explicit loading/error states",
      "Backend, frontend, service, and end-to-end validation with Vitest and Playwright",
    ],
    links: [
      { label: "Live Demo", href: "https://archive.alexstackcodes.com" },
      { label: "GitHub Repo", href: "https://github.com/alexstack012/TTCA" },
    ],
    screenshots: [
      {
        src: campaignArchiveDashboardScreenshot,
        alt: "Tabletop Campaign Archive dashboard showing campaign collections and navigation",
      },
      {
        src: campaignArchiveCharactersScreenshot,
        alt: "Searchable campaign character directory displaying database-backed NPC records",
      },
      {
        src: campaignArchiveLogScreenshot,
        alt: "Campaign session log displaying linked locations, characters, and narrative records",
      },
    ],
  },
  {
    name: "Full Stack Innovations Quick Launch",
    category: "Commercial template platform",
    status: "Product platform in active development",
    summary:
      "A productized Angular website system with eight reusable designs and eight matching self-service editors for quickly configuring, validating, purchasing, and delivering customer sites.",
    description:
      "I own the platform end to end: shared configuration patterns keep copy, branding, media, links, and SEO out of component markup; assisted-service and self-service workspaces support home services, appointments, photography, art, creator, streaming, and lightweight commerce use cases. Local connected workflows now cover saved projects, sanitized uploads, frozen revisions, Stripe sandbox checkout, entitlement-bound ZIP delivery, and purchase recovery without claiming that public self-service sales are live.",
    stack: [
      "Angular 21",
      "TypeScript",
      "RxJS",
      "Node.js",
      "Playwright",
      "Stripe Checkout",
      "GitHub Actions",
      "HTML/CSS",
    ],
    outcomes: [
      "Built 16 production site/editor builds around eight reusable customer-facing designs",
      "Centralized customer content, brand colors, assets, links, and SEO in typed site configuration",
      "Verified all eight local mock purchase, recovery, and exact-ZIP delivery flows",
    ],
    highlights: [
      "Responsive editors with local drafts, validation, preview, and portable configuration files",
      "Automated build, accessibility, responsive-layout, browser, and archive inspection across the collection",
      "Stripe sandbox architecture for hosted checkout, verified webhooks, receipts, refunds, and private downloads",
    ],
    links: [],
    mediaLabel: "Reusable Angular templates",
    screenshots: [],
  },
  {
    name: "Northstar Workforce Solutions Dashboard",
    category: "Testing-focused case study",
    status: "Local case study with automated QA",
    summary:
      "A staffing and workforce-management dashboard built to demonstrate production-style Angular architecture and testable internal-tool workflows.",
    description:
      "Northstar models how recruiting and operations teams manage openings, candidates, users, permissions, and hiring activity across tenants. I paired authenticated, role-aware CRUD workflows with an isolated seeded Playwright harness so automated tests exercise real user paths without changing local development data.",
    stack: [
      "Angular 21",
      "Angular Material",
      "TypeScript",
      "RxJS",
      "SCSS",
      "json-server",
      "Vitest",
      "Playwright",
    ],
    outcomes: [
      "Built authenticated routing, session expiry, password recovery, and role-based authorization",
      "Created tested CRUD workflows for jobs, candidates, and admin-only user management",
      "Added eight Playwright end-to-end scenarios backed by isolated, repeatable seed data",
    ],
    highlights: [
      "Page objects, API fixtures, runtime data preparation, and feature-based test organization",
      "Reusable RxJS services and typed Angular data access",
      "Responsive Angular Material dashboard and internal-tool presentation",
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/alexstack012/northstar-dashboard" },
    ],
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
    category: "Client project",
    status: "Deployed and live at aginspire.org",
    summary:
      "A responsive Angular website delivered for an agriculture education nonprofit and deployed on the client's hosting.",
    description:
      "I handled requirements, implementation, original on-site photography, client feedback, and deployment handoff. The single-page experience presents the organization's educational programs clearly across desktop and mobile devices.",
    stack: ["Angular", "TypeScript", "SCSS", "Responsive Web Development"],
    outcomes: [
      "Delivered the client project from requirements gathering through deployment",
      "Implemented responsive layouts for mobile, tablet, and desktop use",
      "Iterated directly with the client on content, design, and functionality",
    ],
    highlights: [
      "Accessible, audience-focused information architecture",
      "Original photography captured during an on-site client visit",
      "Client-managed hosting handoff",
    ],
    links: [
      { label: "Live Site", href: "https://aginspire.org" },
      { label: "GitHub Repo (Private)", disabled: true },
    ],
    screenshots: [
      {
        src: aginspireScreenshot,
        alt: "Aginspire homepage showing educational resources for agriculture",
      },
    ],
  },
];
