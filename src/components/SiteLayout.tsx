import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

export default function SiteLayout({ children }: PropsWithChildren) {
  const { pathname } = useLocation()
  const [touchGlowEnabled, setTouchGlowEnabled] = useState(false)
  const [touchGlows, setTouchGlows] = useState<Array<{ id: number; x: number; y: number }>>([])
  const nextGlowId = useRef(0)
  const glowTimers = useRef(new Set<number>())

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname])

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 720px)')
    const disableOnDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        setTouchGlowEnabled(false)
        setTouchGlows([])
      }
    }

    mobileQuery.addEventListener('change', disableOnDesktop)
    return () => mobileQuery.removeEventListener('change', disableOnDesktop)
  }, [])

  useEffect(() => {
    if (!touchGlowEnabled) return

    const addTouchGlow = (event: PointerEvent) => {
      if (event.pointerType !== 'touch' || !window.matchMedia('(max-width: 720px)').matches) return

      const id = nextGlowId.current++
      setTouchGlows((current) => [...current, { id, x: event.clientX, y: event.clientY }])

      const timer = window.setTimeout(() => {
        setTouchGlows((current) => current.filter((glow) => glow.id !== id))
        glowTimers.current.delete(timer)
      }, 560)
      glowTimers.current.add(timer)
    }

    window.addEventListener('pointerdown', addTouchGlow, { passive: true })
    const timers = glowTimers.current

    return () => {
      window.removeEventListener('pointerdown', addTouchGlow)
      timers.forEach(window.clearTimeout)
      timers.clear()
    }
  }, [touchGlowEnabled])

  const toggleTouchGlow = () => {
    if (touchGlowEnabled) setTouchGlows([])
    setTouchGlowEnabled((current) => !current)
  }

  return (
    <div className="site-shell">
      <Navbar
        touchGlowEnabled={touchGlowEnabled}
        onTouchGlowToggle={toggleTouchGlow}
      />
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <p>Built with React and TypeScript, with accessible design and static route rendering.</p>
      </footer>
      <div className="touch-glow-layer" aria-hidden="true">
        {touchGlows.map((glow) => (
          <span
            key={glow.id}
            className="touch-glow"
            style={{ left: glow.x, top: glow.y } as CSSProperties}
          />
        ))}
      </div>
    </div>
  )
}
