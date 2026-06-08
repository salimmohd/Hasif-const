import { Link } from 'react-router-dom'
import { footerLinks } from '../../data/siteData'
import MaterialIcon from '../ui/MaterialIcon'

function Footer() {
  return (
    <footer className="bg-on-surface text-surface">
      <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 pt-24 pb-unit-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-16 md:gap-unit-12">
          <div className="md:col-span-5">
            <Link
              className="font-headline-md text-headline-md font-bold text-white tracking-tight block mb-unit-8"
              to="/"
            >
              HASIF CONSTRUCTION
            </Link>
            <p className="font-body-md text-body-md text-surface-variant max-w-md mb-unit-12 opacity-80">
              Building resilient foundations for the modern world with precision, safety, and
              unwavering integrity.
            </p>
            <div className="flex items-center gap-unit-6">
              {[
                ['share', '/contact'],
                ['public', '/portfolio'],
                ['verified', '/about'],
              ].map(([icon, path]) => (
                <Link
                  className="text-surface-variant hover:text-white transition-colors"
                  key={icon}
                  to={path}
                >
                  <MaterialIcon className="text-[24px]" name={icon} />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-label-bold text-label-bold text-white uppercase tracking-widest mb-unit-8">
              Resources
            </h2>
            <nav className="flex flex-col gap-unit-6">
              {footerLinks.map((link) => (
                <Link
                  className="font-label-sm text-label-sm text-surface-variant hover:text-white uppercase tracking-widest transition-colors"
                  key={link.path}
                  to={link.path}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-label-bold text-label-bold text-white uppercase tracking-widest mb-unit-8">
              Contact
            </h2>
            <div className="flex flex-col gap-unit-6 font-label-sm text-label-sm text-surface-variant uppercase tracking-widest">
              <div className="flex items-start gap-unit-6">
                <MaterialIcon className="text-primary-fixed-dim mt-1" name="location_on" />
                <span>
                  102 Steel Tower, Industrial <br />
                  Zone, <br />
                  Dubai, UAE
                </span>
              </div>
              <div className="flex items-center gap-unit-6">
                <MaterialIcon className="text-primary-fixed-dim" name="phone" />
                <span>+971 4 000 0000</span>
              </div>
              <div className="flex items-center gap-unit-6">
                <MaterialIcon className="text-primary-fixed-dim" name="mail" />
                <span>tender@hasif.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/5 my-unit-16"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-unit-6">
          <p className="font-label-sm text-[11px] text-surface-variant uppercase tracking-[0.28em]">
            &copy; 2026 Hasif Construction. Engineering Excellence.
          </p>
          <div className="flex items-center gap-unit-12">
            <Link
              className="font-label-sm text-[11px] text-surface-variant hover:text-white uppercase tracking-[0.2em] transition-colors"
              to="/terms"
            >
              Terms
            </Link>
            <Link
              className="font-label-sm text-[11px] text-surface-variant hover:text-white uppercase tracking-[0.2em] transition-colors"
              to="/cookies"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
