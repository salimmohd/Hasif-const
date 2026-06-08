import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../../data/siteData'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`flex justify-between items-center px-6 md:px-margin-desktop w-full sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${
        isScrolled ? 'shadow-sm py-4' : 'py-6'
      }`}
    >
      <Link
        className="font-display-lg text-headline-md text-primary uppercase tracking-[0.15em] font-extrabold"
        to="/"
      >
        Hasif
      </Link>

      <nav className="hidden md:flex items-center space-x-10">
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `nav-link font-label-bold text-label-bold ${
                isActive
                  ? 'active text-primary'
                  : 'text-on-surface-variant hover:text-primary transition-colors duration-200'
              }`
            }
            end={item.path === '/'}
            key={item.path}
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link
        className="bg-primary text-white text-label-bold px-8 py-3 tracking-widest hover:bg-on-primary-fixed-variant transition-all duration-300"
        to="/contact"
      >
        GET A QUOTE
      </Link>
    </header>
  )
}

export default Header
