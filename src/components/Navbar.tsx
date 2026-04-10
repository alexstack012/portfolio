import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
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
