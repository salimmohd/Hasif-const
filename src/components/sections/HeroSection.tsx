import { Link } from 'react-router-dom'
import { heroImage } from '../../data/siteData'
import MaterialIcon from '../ui/MaterialIcon'

function HeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="A massive modern civil engineering construction site at dusk with cranes, structural steel, and dramatic sky."
          className="w-full h-full object-cover brightness-[0.45] contrast-[1.1]"
          src={heroImage}
        />
      </div>

      <div className="relative z-10 px-6 md:px-margin-desktop max-w-5xl">
        <div className="inline-flex items-center space-x-4 mb-8">
          <div className="w-12 h-px bg-primary-fixed"></div>
          <span className="text-primary-fixed font-label-sm uppercase tracking-[0.2em]">
            Engineering Excellence Since 2009
          </span>
        </div>

        <h1 className="heading-serif text-5xl md:text-7xl text-white mb-10 leading-[1.1]">
          Building the Future through <br className="hidden md:block" /> Precision Engineering.
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          <Link
            className="bg-primary text-white px-12 py-5 font-label-bold text-label-bold uppercase tracking-widest hover:bg-on-primary-fixed-variant transition-all flex items-center group"
            to="/contact"
          >
            Start Your Project
            <MaterialIcon
              className="ml-3 group-hover:translate-x-1 transition-transform"
              name="east"
            />
          </Link>
          <Link
            className="border border-white/40 text-white px-12 py-5 font-label-bold text-label-bold uppercase tracking-widest hover:bg-white/5 transition-all"
            to="/portfolio"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
