import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PropsWithChildren } from 'react'
import Navbar from './Navbar'

export default function SiteLayout({ children }: PropsWithChildren) {
  const [touchGlowEnabled, setTouchGlowEnabled] = useState(false)
  const [touchGlows, setTouchGlows] = useState<Array<{ id: number; x: number; y: number }>>([])
  const nextGlowId = useRef(0)
  const glowTimers = useRef(new Set<number>())

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
        <p>Built with React, TypeScript, and a focus on accessible front-end craft.</p>
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
