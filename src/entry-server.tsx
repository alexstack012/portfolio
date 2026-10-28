import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './routes'
import {
  buildStructuredData,
  canonicalUrl,
  publicRoutes,
  SHARE_IMAGE_PATH,
  SITE_NAME,
  SITE_ORIGIN,
} from './data/seo'
import type { SeoPage } from './data/seo'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function renderHead(page: SeoPage) {
  const route = publicRoutes.find((candidate) => candidate.page === page)!
  const canonical = canonicalUrl(route.path)
  const image = `${SITE_ORIGIN}${SHARE_IMAGE_PATH}`
  const structuredData = JSON.stringify(buildStructuredData(page)).replace(/</g, '\\u003c')

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    '<meta name="robots" content="index, follow, max-image-preview:large" />',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:alt" content="Alex Stack software engineering portfolio project interface" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<script id="route-structured-data" type="application/ld+json">${structuredData}</script>`,
  ].join('\n    ')
}

export function render(path: string) {
  const route = publicRoutes.find((candidate) => candidate.path === path)
  if (!route) throw new Error(`Cannot prerender unknown route: ${path}`)

  return {
    html: renderToString(
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>,
    ),
    head: renderHead(route.page),
  }
}

export { publicRoutes }
