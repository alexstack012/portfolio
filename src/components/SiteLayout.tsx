import type { PropsWithChildren } from 'react'
import Navbar from './Navbar'

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <p>Built with React, TypeScript, and a focus on accessible front-end craft.</p>
      </footer>
    </div>
  )
}
