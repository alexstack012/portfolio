import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const template = await readFile(join(dist, 'index.html'), 'utf8')
const serverBundle = await import(pathToFileURL(join(root, '.prerender', 'entry-server.js')).href)

for (const route of serverBundle.publicRoutes) {
  const rendered = serverBundle.render(route.path)
  const document = template
    .replace('<!--seo-head-->', rendered.head)
    .replace('<div id="root"></div>', `<div id="root">${rendered.html}</div>`)
  const output = route.path === '/' ? join(dist, 'index.html') : join(dist, route.path.slice(1), 'index.html')
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, document)
}

for (const route of serverBundle.publicRoutes) {
  const output = route.path === '/' ? join(dist, 'index.html') : join(dist, route.path.slice(1), 'index.html')
  const document = await readFile(output, 'utf8')
  const checks = [
    ['title', (document.match(/<title>/g) ?? []).length === 1],
    ['description', (document.match(/name="description"/g) ?? []).length === 1],
    ['canonical', (document.match(/rel="canonical"/g) ?? []).length === 1],
    ['structured data', (document.match(/id="route-structured-data"/g) ?? []).length === 1],
    ['rendered content', document.includes('<main') && document.includes('<h1')],
  ]
  const failed = checks.filter(([, passed]) => !passed).map(([label]) => label)
  if (failed.length > 0) throw new Error(`${route.path} failed prerender checks: ${failed.join(', ')}`)
}

await rm(join(root, '.prerender'), { recursive: true, force: true })
console.log(`Prerendered ${serverBundle.publicRoutes.length} portfolio routes.`)
