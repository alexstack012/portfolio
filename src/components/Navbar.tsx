import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import FlareIcon from '@mui/icons-material/Flare'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

interface NavbarProps {
  touchGlowEnabled: boolean
  onTouchGlowToggle: () => void
}

export default function Navbar({ touchGlowEnabled, onTouchGlowToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('resize', closeMenu)

    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <header className="site-header">
      <NavLink className="brand-mark" to="/" onClick={() => setIsOpen(false)}>
        <span className="brand-mark__accent">A</span>
        <span>Stack</span>
      </NavLink>

      <div className="mobile-controls">
        <button
          type="button"
          className={`glow-toggle${touchGlowEnabled ? ' glow-toggle--active' : ''}`}
          aria-pressed={touchGlowEnabled}
          aria-label={`${touchGlowEnabled ? 'Disable' : 'Enable'} touch glow effect`}
          title="Touch glow"
          onClick={onTouchGlowToggle}
        >
          <FlareIcon fontSize="small" />
          <span>Glow</span>
        </button>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`nav-overlay${isOpen ? ' nav-overlay--visible' : ''}`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <nav
        id="site-navigation"
        className={`site-nav${isOpen ? ' site-nav--open' : ''}`}
        aria-label="Primary"
      >
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `site-nav__link${isActive ? ' site-nav__link--active' : ''}`}
            onClick={() => setIsOpen(false)}
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
