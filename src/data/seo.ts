import { profile } from './siteContent'

export const SITE_ORIGIN = 'https://alexstackcodes.com'
export const SITE_NAME = 'Alex Stack Software Engineering Portfolio'
export const SHARE_IMAGE_PATH = '/portfolio-preview.webp'

export type SeoPage = 'home' | 'experience' | 'projects' | 'contact'

export type RouteSeo = {
  path: string
  title: string
  description: string
  pageType: 'ProfilePage' | 'WebPage' | 'CollectionPage' | 'ContactPage'
}

export const routeSeo: Record<SeoPage, RouteSeo> = {
  home: {
    path: '/',
    title: 'Alex Stack | Software Engineer - Angular & TypeScript',
    description:
      'Software Engineer Alex Stack brings 4+ years of enterprise Angular and TypeScript experience plus full-stack product development, testing, and deployment.',
    pageType: 'ProfilePage',
  },
  experience: {
    path: '/experience',
    title: 'Professional Experience | Alex Stack - Software Engineer',
    description:
      'Explore Alex Stack’s software engineering experience across healthcare, financial services, Angular architecture, API integration, testing, and full-stack products.',
    pageType: 'WebPage',
  },
  projects: {
    path: '/projects',
    title: 'Software Engineering Projects | Alex Stack',
    description:
      'Review browser extensions, Angular applications, full-stack products, automated testing, architecture, and production deployment work built by Alex Stack.',
    pageType: 'CollectionPage',
  },
  contact: {
    path: '/contact',
    title: 'Contact Alex Stack | Software Engineering Opportunities',
    description:
      'Contact Alex Stack about full-time frontend, full-stack, and software engineering opportunities with remote teams or employers in Minnesota.',
    pageType: 'ContactPage',
  },
}

const personId = `${SITE_ORIGIN}/#person`
const websiteId = `${SITE_ORIGIN}/#website`

export function canonicalUrl(path: string) {
  return `${SITE_ORIGIN}${path === '/' ? '/' : path}`
}

export function buildStructuredData(page: SeoPage) {
  const metadata = routeSeo[page]
  const url = canonicalUrl(metadata.path)
  const person = {
    '@type': 'Person',
    '@id': personId,
    name: profile.fullName,
    url: `${SITE_ORIGIN}/`,
    jobTitle: 'Software Engineer',
    email: profile.email,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'MN',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Angular',
      'TypeScript',
      'React',
      'REST APIs',
      'Frontend Architecture',
      'Automated Testing',
      'Node.js',
      'PostgreSQL',
    ],
    sameAs: [
      'https://github.com/alexstack012',
      'https://www.linkedin.com/in/alex-stack/',
      'https://fullstackinnovations.com',
    ],
    affiliation: {
      '@type': 'Organization',
      name: 'Full Stack Innovations LLC',
      url: 'https://fullstackinnovations.com',
    },
  }

  const graph: Record<string, unknown>[] = [
    {
      '@type': metadata.pageType,
      '@id': `${url}#webpage`,
      url,
      name: metadata.title,
      description: metadata.description,
      inLanguage: 'en-US',
      isPartOf: { '@id': websiteId },
      about: { '@id': personId },
    },
    person,
  ]

  if (page === 'home') {
    graph.push({
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${SITE_ORIGIN}/`,
      name: SITE_NAME,
      publisher: { '@id': personId },
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export const publicRoutes = (Object.entries(routeSeo) as Array<[SeoPage, RouteSeo]>).map(
  ([page, metadata]) => ({ page, ...metadata }),
)
