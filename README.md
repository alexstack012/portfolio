# Alex Stack Software Engineering Portfolio

React and TypeScript portfolio for `https://alexstackcodes.com`, deployed as static assets on
Cloudflare Workers.

## Local development

```sh
npm install
npm run dev
```

Public routes are `/`, `/experience`, `/projects`, and `/contact`.

## Production build

```sh
npm run lint
npm run build
```

The build type-checks the application, creates the client bundle, creates a temporary React server
bundle, and prerenders every public route into `dist`. `scripts/prerender.mjs` validates that every
generated page has one title, description, canonical, structured-data block, and meaningful rendered
content. React hydrates the generated HTML so client-side navigation and project screenshot dialogs
continue to work.

`public/sitemap.xml`, `public/robots.txt`, the favicon, sharing image, and resume are copied into the
same static output. Add new public pages to `src/data/seo.ts` and `src/routes.tsx`, then update the
sitemap.

## Deployment

```sh
npm run deploy
```

Deployment is intentionally separate from the build and should only be run after reviewing the
generated pages in `dist`.
