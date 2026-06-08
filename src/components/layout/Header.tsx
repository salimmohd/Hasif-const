import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../../data/siteData'
import MaterialIcon from '../ui/MaterialIcon'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
      className={`fixed top-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant transition-shadow duration-200 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 h-unit-16 gap-unit-2">
        <Link
          className="font-headline-md text-[15px] sm:text-headline-md font-bold text-primary tracking-tight whitespace-nowrap"
          to="/"
        >
          HASIF CONSTRUCTION
        </Link>

        <nav className="hidden md:flex items-center gap-unit-6">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `font-body-md text-body-md transition-colors duration-200 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary pb-1 font-bold'
                    : 'text-secondary font-medium hover:text-primary'
                }`
              }
              end={item.path === '/'}
              key={item.path}
              onClick={() => setIsMenuOpen(false)}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            className="bg-primary text-on-primary font-label-bold text-label-bold px-unit-6 py-unit-2 hover:bg-primary-container transition-all uppercase tracking-widest"
            to="/get-a-quote"
          >
            Get a Quote
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-unit-2">
          <Link
            className="bg-primary text-on-primary font-label-bold text-[10px] leading-none px-unit-2 py-unit-2 uppercase tracking-wider whitespace-nowrap"
            onClick={() => setIsMenuOpen(false)}
            to="/get-a-quote"
          >
            Get Quote
          </Link>
          <button
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            className="w-11 h-11 border border-outline-variant text-primary flex items-center justify-center shrink-0"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <MaterialIcon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden border-t border-outline-variant bg-surface-container-lowest transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-unit-4 py-unit-4 flex flex-col gap-unit-2">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `font-label-bold text-label-bold uppercase tracking-widest px-unit-2 py-unit-4 border-b border-outline-variant ${
                  isActive ? 'text-primary' : 'text-secondary'
                }`
              }
              end={item.path === '/'}
              key={item.path}
              onClick={() => setIsMenuOpen(false)}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            className="bg-primary text-on-primary font-label-bold text-label-bold px-unit-6 py-unit-4 mt-unit-2 text-center uppercase tracking-widest"
            onClick={() => setIsMenuOpen(false)}
            to="/get-a-quote"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
