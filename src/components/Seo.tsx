import { useEffect } from 'react'
import {
  buildStructuredData,
  canonicalUrl,
  routeSeo,
  SHARE_IMAGE_PATH,
  SITE_NAME,
  SITE_ORIGIN,
} from '../data/seo'
import type { SeoPage } from '../data/seo'

type SeoProps = {
  page: SeoPage
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
}

export default function Seo({ page }: SeoProps) {
  useEffect(() => {
    const metadata = routeSeo[page]
    const url = canonicalUrl(metadata.path)
    const imageUrl = `${SITE_ORIGIN}${SHARE_IMAGE_PATH}`

    document.title = metadata.title
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: metadata.description,
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: metadata.title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: metadata.description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: 'Alex Stack software engineering portfolio project interface',
    })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: metadata.title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: metadata.description,
    })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: url })

    let script = document.head.querySelector<HTMLScriptElement>('#route-structured-data')
    if (!script) {
      script = document.createElement('script')
      script.id = 'route-structured-data'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(buildStructuredData(page)).replace(/</g, '\\u003c')
  }, [page])

  return null
}
