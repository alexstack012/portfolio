export const profile = {
  firstName: 'Alex',
  fullName: 'Alex Stack',
  location: 'Minnesota, USA',
  role: 'Frontend Engineer',
  summary:
    'I build accessible, maintainable interfaces with React, TypeScript, and a product mindset shaped by real-world engineering teams.',
  email: 'alex_stack012@live.com',
  resumePath: '/ASTACKResume.pdf',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/alexstack012',
      external: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alex-stack/',
      external: true,
    },
    {
      label: 'Resume',
      href: '/ASTACKResume.pdf',
      external: true,
    },
    {
      label: 'Email',
      href: 'mailto:alex_stack012@live.com',
      external: false,
    },
  ],
}

export const strengths = [
  'Designing responsive UI systems that scale beyond a single page',
  'Shipping clean, typed component architecture in React and TypeScript',
  'Building accessible experiences with strong UX and interaction detail',
  'Collaborating across product, backend, and QA to deliver polished features',
]

export const experienceHighlights = [
  'Frontend-focused engineer with several years of experience building responsive and maintainable applications.',
  'Strong background in Angular, React, TypeScript, JavaScript, and API-driven UI development.',
  'Comfortable contributing across the stack with Node, Python, SQL, and practical debugging in production environments.',
]

export const story = [
  'I graduated early from high school, served eight years in the U.S. Army, and later transitioned into software through an intensive coding bootcamp during the pandemic.',
  'That path shaped how I work today: disciplined, calm under pressure, quick to learn, and motivated by building tools that genuinely help people.',
  'Outside of work, I spend time with my family, play games, and stay happily deep in everything from Star Wars to DnD and Warhammer 40k.',
]

export const contactChannels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/alex-stack',
    href: 'https://www.linkedin.com/in/alex-stack/',
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: profile.resumePath,
  },
]

export const featuredProjects = [
  {
    name: 'Northstar Workforce Solutions Dashboard',
    status: 'Case study live, deployment coming soon',
    summary:
      'A mock staffing and workforce-management dashboard designed to feel like a real internal business application for recruiting and operations teams.',
    description:
      'Northstar simulates the workflows a team would use to manage openings, candidates, permissions, and hiring activity across multiple tenants. The focus was on making the product feel credible: authenticated routing, role-aware UX, reusable data access patterns, and polished CRUD flows instead of static portfolio screens.',
    stack: [
      'Angular 21',
      'Angular Material',
      'TypeScript',
      'RxJS',
      'SCSS',
      'json-server',
      'Vitest',
    ],
    outcomes: [
      'Built authenticated routing with session expiry, recovery flows, and browser-session persistence',
      'Created CRUD workflows for jobs and candidates with detail, edit, and delete states',
      'Implemented admin-only user management with tenant-aware presentation and account activation controls',
      'Used a mock API layer to keep setup simple while still demonstrating application architecture',
    ],
    highlights: [
      'Route protection and role-based access control',
      'Reusable service-based data access',
      'Dashboard metrics and internal-tool presentation',
      'Careful handling of mixed string and number identifiers from json-server',
    ],
    repositoryHref: 'https://example.com/northstar-dashboard-repo-placeholder',
    demoHref: 'https://example.com/northstar-dashboard-demo-placeholder',
    screenshotPlaceholder: 'Add dashboard overview screenshot here',
    screenshotAlt: 'Placeholder for Northstar dashboard screenshot',
  },
]
