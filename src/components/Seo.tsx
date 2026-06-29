import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value)
  })
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value)
  })
}

export default function Seo({
  title,
  description,
  path = '',
  keywords = [],
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin
    const canonicalUrl = new URL(path || window.location.pathname, siteUrl).toString()

    document.title = title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: keywords.join(', '),
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    })
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    })

    const existingStructuredData = document.head.querySelector<HTMLScriptElement>(
      'script[data-seo-structured-data="true"]',
    )

    if (existingStructuredData) {
      existingStructuredData.remove()
    }

    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.seoStructuredData = 'true'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

    return () => {
      const activeStructuredData = document.head.querySelector<HTMLScriptElement>(
        'script[data-seo-structured-data="true"]',
      )

      if (activeStructuredData) {
        activeStructuredData.remove()
      }
    }
  }, [description, keywords, path, structuredData, title])

  return null
}
