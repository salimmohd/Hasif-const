import { Link } from 'react-router-dom'
import MaterialIcon from '../ui/MaterialIcon'

function Footer() {
  return (
    <footer className="w-full pt-24 pb-12 px-6 md:px-margin-desktop bg-on-surface text-surface border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
        <div className="md:col-span-5">
          <Link
            className="font-display-lg text-headline-lg text-white uppercase tracking-[0.2em] font-extrabold mb-8 block"
            to="/"
          >
            Hasif
          </Link>
          <p className="font-body-md text-surface-variant max-w-sm mb-10 opacity-80">
            Building resilient foundations for the modern world with precision, safety, and
            unwavering integrity.
          </p>
          <div className="flex space-x-6">
            <Link className="text-surface-variant hover:text-white transition-colors" to="/contact">
              <MaterialIcon name="share" />
            </Link>
            <Link
              className="text-surface-variant hover:text-white transition-colors"
              to="/portfolio"
            >
              <MaterialIcon name="public" />
            </Link>
            <Link className="text-surface-variant hover:text-white transition-colors" to="/about">
              <MaterialIcon name="verified" />
            </Link>
          </div>
        </div>

        <div className="md:col-span-3">
          <span className="font-label-bold text-white mb-8 block tracking-widest">RESOURCES</span>
          <nav className="flex flex-col space-y-5">
            <Link
              className="font-label-sm text-surface-variant hover:text-white transition-all uppercase tracking-widest"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="font-label-sm text-surface-variant hover:text-white transition-all uppercase tracking-widest"
              to="/safety-standards"
            >
              Safety Standards
            </Link>
            <Link
              className="font-label-sm text-surface-variant hover:text-white transition-all uppercase tracking-widest"
              to="/project-portal"
            >
              Project Portal
            </Link>
            <Link
              className="font-label-sm text-surface-variant hover:text-white transition-all uppercase tracking-widest"
              to="/careers"
            >
              Careers
            </Link>
          </nav>
        </div>

        <div className="md:col-span-4">
          <span className="font-label-bold text-white mb-8 block tracking-widest">CONTACT</span>
          <div className="flex flex-col space-y-6 text-surface-variant font-label-sm">
            <div className="flex items-start">
              <MaterialIcon className="mr-4 text-primary-fixed-dim" name="location_on" />
              <span className="uppercase tracking-wider">
                102 Steel Tower, Industrial Zone, <br />
                Dubai, UAE
              </span>
            </div>
            <div className="flex items-center">
              <MaterialIcon className="mr-4 text-primary-fixed-dim" name="phone" />
              <span className="uppercase tracking-wider">+971 4 000 0000</span>
            </div>
            <div className="flex items-center">
              <MaterialIcon className="mr-4 text-primary-fixed-dim" name="mail" />
              <span className="uppercase tracking-wider">tender@hasif.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-label-sm text-surface-variant uppercase tracking-[0.2em] text-[10px]">
          &copy; 2024 Hasif Construction. Engineering Excellence.
        </span>
        <div className="flex space-x-8">
          <Link
            className="font-label-sm text-surface-variant hover:text-white text-[10px] uppercase tracking-widest"
            to="/terms"
          >
            Terms
          </Link>
          <Link
            className="font-label-sm text-surface-variant hover:text-white text-[10px] uppercase tracking-widest"
            to="/cookies"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
