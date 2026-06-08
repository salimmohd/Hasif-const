import { Link } from 'react-router-dom'
import { services } from '../../data/siteData'
import MaterialIcon from '../ui/MaterialIcon'

function ServicesSection() {
  return (
    <section className="py-section-padding px-6 md:px-margin-desktop bg-surface">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20">
        <div className="max-w-2xl">
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
            Core Competencies
          </span>
          <h2 className="heading-serif text-4xl md:text-5xl text-on-surface">
            Precision construction for <br /> complex infrastructures.
          </h2>
        </div>
        <div className="mt-8 md:mt-0">
          <Link
            className="font-label-bold text-primary flex items-center hover:opacity-70 transition-opacity"
            to="/services"
          >
            VIEW ALL SERVICES <MaterialIcon className="ml-2" name="east" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            className="group border border-outline-variant/50 p-10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 bg-white relative overflow-hidden"
            key={service.title}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <MaterialIcon className="text-8xl" name={service.icon} />
            </div>
            <MaterialIcon className="text-primary text-4xl mb-8 block" name={service.icon} />
            <h3 className="font-headline-md text-on-surface mb-6 tracking-tight">
              {service.title}
            </h3>
            <p className="font-body-md text-on-surface-variant mb-10 leading-relaxed">
              {service.description}
            </p>
            <div className="h-px w-8 bg-primary mb-6 group-hover:w-full transition-all duration-500"></div>
            <Link
              className="inline-flex items-center font-label-bold text-label-bold text-primary group-hover:translate-x-1 transition-transform"
              to="/services"
            >
              LEARN MORE
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
