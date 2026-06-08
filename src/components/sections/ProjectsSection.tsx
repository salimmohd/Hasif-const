import { projects } from '../../data/siteData'
import MaterialIcon from '../ui/MaterialIcon'

function ProjectsSection() {
  return (
    <section className="bg-surface py-section-padding px-6 md:px-margin-desktop border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
            Our Legacy
          </span>
          <h2 className="heading-serif text-4xl md:text-5xl text-on-surface">
            Architectural Landmarks
          </h2>
        </div>
        <div className="flex space-x-2 mt-8 md:mt-0">
          <button
            className="w-14 h-14 border border-outline text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            type="button"
          >
            <MaterialIcon name="west" />
          </button>
          <button
            className="w-14 h-14 bg-primary text-white flex items-center justify-center hover:bg-on-primary-fixed-variant transition-all"
            type="button"
          >
            <MaterialIcon name="east" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div className="group overflow-hidden" key={project.title}>
            <div className="aspect-[16/10] overflow-hidden mb-8 relative">
              <img
                alt={project.alt}
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                loading="lazy"
                src={project.image}
              />
              <div className="absolute bottom-0 left-0 bg-primary text-white px-6 py-2 font-label-sm text-label-sm tracking-widest">
                {project.category}
              </div>
            </div>
            <div className="px-2">
              <h4 className="heading-serif text-3xl text-on-surface mb-3">
                {project.title}
              </h4>
              <p className="font-body-md text-on-surface-variant max-w-lg mb-6">
                {project.description}
              </p>
              <div className="flex space-x-12 pt-6 border-t border-outline-variant/30">
                <div>
                  <span className="block font-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                    Budget
                  </span>
                  <span className="font-label-bold text-primary">{project.budget}</span>
                </div>
                <div>
                  <span className="block font-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                    Location
                  </span>
                  <span className="font-label-bold text-on-surface">{project.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
