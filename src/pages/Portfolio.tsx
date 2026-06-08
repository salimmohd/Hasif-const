import { useState } from 'react'
import { Link } from 'react-router-dom'
import MaterialIcon from '../components/ui/MaterialIcon'
import PageHero from '../components/ui/PageHero'

const filters = ['All Projects', 'Civil', 'Residential', 'Commercial']

const projects = [
  {
    span: 'md:col-span-8',
    ratio: 'aspect-[16/9]',
    category: 'Commercial',
    title: 'The Meridian Financial Center',
    location: 'Dubai, UAE',
    budgetLabel: 'Budget',
    budget: '$420M',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdGSgF-C9YsT1m40aPxcaPR6muK6TtWsXKallFnb5KbqrKuKrgseOOzUjOOAptx86NYTm3LiLmblIPg1L8wyzqwHL5js_eItewsVk4hTGBo0S-OO-8mk_PMYlz4XzClvxUA0zsTVN3aIox-bfbdCJhgZufVWuzBCuVt2r_NM2YxJ3K7VZo_Fqntb_qdBD3OBdlch0eUY4CFbAnb06I53GLoW36shVqBs42fzSBgFPFpX_5NwSLZDN4ZkP32ovXxP0lwBlywwHZp4zA',
    meta: [
      ['Completion', '2023'],
      ['Height', '312m'],
    ],
  },
  {
    span: 'md:col-span-4',
    ratio: 'aspect-[4/5] md:aspect-auto md:h-[calc(100%-140px)]',
    category: 'Civil',
    title: 'Helix Suspension Bridge',
    location: 'Seattle, WA',
    budgetLabel: 'Budget',
    budget: '$1.2B',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrFaJ2THf_CfZnzOeHsNbsmtchpAWZOkAPVbH8D34o47R1pqL2dsh1eq3uEHyUJYH6C4HAYhvsjCFOMuLGUf9cdvxIRspdwHBrtGGpzvwjt4ioc-RQz3gHk0RKAyZbI-mCj3EhnjFkpSthhd12sRwtxtRfpHkbcbLcboA_71IQbORN-dbw7jLeC4ZAOMkoZKZZz2kPfesHpv2VrfeCfQl19F-hbdSl2QFfIQ0dSCbcDJlaTKrX6UOt8DmQ8-3WwsXvUjHKrGQkuaDf',
  },
  {
    span: 'md:col-span-4',
    ratio: 'aspect-square',
    category: 'Residential',
    title: 'Aura Estate',
    location: 'Beverly Hills, CA',
    budgetLabel: 'Budget',
    budget: '$85M',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBB3X1DVIi1unS_5UUeg7KqLgpei2SMdVybGS3-7plvEYqQPz43qurbnlJ2jMxpyNogTV0WUjTxEcPxWjfNjH-0E9YJZVQOeIdEfo_N5E_--vBUnWo9BC7z3DAWO-bsLE-ssrQOwq_9WERUqvNEXZ9nL0gPEQJ7ZLtj70-XUkhLvvug2D2_ZmuvOUsjQT9zmXOMhQ6BP09ftrLyCQ6ZfYerPHbrV6NMCQQYPKXUKPZMiOI2ntwLGUVydSodAUqRLs5QMyrS2FwsKHWV',
    meta: [['Year', '2022']],
  },
  {
    span: 'md:col-span-8',
    ratio: 'aspect-[21/9]',
    category: 'Industrial',
    filterCategory: 'Commercial',
    title: 'Quantum Logistics Hub',
    location: 'Frankfurt, DE',
    budgetLabel: 'Capacity',
    budget: '1.2M sq.ft',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBN5zQCW9UNuZwU__1c51memVw0JnwiRnNd-y8Jv6a7hFZekmaphHgFKP6g3Jli80ytBwENAKM1I_Vg0vxNX4i6Dl1Fg9V3LJR2fuTMGpXCEdsk1Io9bK3n0zapqb-b9KIdYjxSDnlnotiV1pIs87Y0PXnANZG-ksLDWC_jXfxCM1Xy10aJabV6i5mZH1UxBf_Yuj2wjawK5zEP1eQ7BSx3mllINXxKFMMFhIK1kCyo-LrU7NJxBtNMac9GY2DM3XgGnGoseRIY5s9K',
  },
]

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState(filters[0])
  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => (project.filterCategory ?? project.category) === activeFilter)

  return (
    <main className="pt-unit-16 bg-background text-on-background font-body-md overflow-x-hidden">
      <PageHero
        copy="Forging the future of infrastructure through disciplined precision, technical mastery, and an unwavering commitment to permanence."
        eyebrow="Portfolio"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBAgxlBzoc25OUPlFj-4Hq1OAeTfW66acjLbmr2UmJiEPCKqCpjwK5-e_EBgbKPta-oVsdMJZm6ftu4ZpmQHwHKnlP-SjDAsqO4W5qOUF3HFzHU-vjN3DsowURsBHfYLrGwEs9u_i0g5kyd5IwwNQa7WK-pwENot_km5pquZZq0HNt1OrbyatWJ9lDD0npPwmXZSsMhrZjKfNp2rxjV5ycI9_gZ7H98ef7q4S30tR7lmzEufuc3MSjcPwrE_UbEZPZmsArmgTKiRLcZ"
        title="Masterworks - A Legacy of Engineering Excellence"
      />

      <section className="section-reveal reveal-up max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 py-unit-12">
        <div className="flex flex-wrap items-center justify-between gap-unit-6 mb-unit-12 border-b border-outline-variant pb-unit-4">
          <div className="flex flex-wrap gap-unit-4">
            {filters.map((filter) => (
              <button
                className={`font-label-bold text-label-bold transition-colors pb-unit-2 ${
                  activeFilter === filter
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-secondary hover:text-primary'
                }`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center text-secondary">
            <MaterialIcon className="mr-2" name="filter_list" />
            <span className="font-label-bold text-label-bold">
              Viewing {filteredProjects.length} Projects
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-6">
          {filteredProjects.map((project) => (
            <article
              className={`${project.span} group project-card relative overflow-hidden bg-surface border border-outline-variant`}
              key={project.title}
            >
              <div className={`${project.ratio} overflow-hidden`}>
                <img
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                  src={project.image}
                />
              </div>
              <div className="p-unit-6 bg-surface">
                <div className="flex justify-between items-start gap-unit-4 mb-unit-4">
                  <div>
                    <span className="text-primary font-label-bold text-label-bold uppercase tracking-tighter">
                      {project.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary mt-1">
                      {project.title}
                    </h3>
                    <p className="text-secondary flex items-center mt-1">
                      <MaterialIcon className="text-[18px] mr-1" name="location_on" />
                      {project.location}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-secondary font-label-bold text-label-sm uppercase">
                      {project.budgetLabel}
                    </p>
                    <p className="font-headline-md text-primary">{project.budget}</p>
                  </div>
                </div>
                {project.meta ? (
                  <div className="flex border-t border-outline-variant pt-unit-4 gap-unit-8">
                    {project.meta.map(([label, value]) => (
                      <div key={label}>
                        <p className="text-secondary font-label-bold text-label-sm uppercase">
                          {label}
                        </p>
                        <p className="font-label-bold text-primary">{value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-unit-16 text-center">
          <button
            className="bg-surface text-primary border-2 border-primary font-label-bold text-label-bold px-unit-12 py-unit-4 hover:bg-primary hover:text-on-primary transition-all duration-300 active:scale-95"
            type="button"
          >
            View Entire Archive
          </button>
        </div>
      </section>

      <section className="section-reveal reveal-right bg-surface-container py-unit-16 border-t border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 flex flex-col md:flex-row justify-between items-center gap-unit-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-unit-2">
              Ready to Build the Future?
            </h2>
            <p className="text-secondary font-body-lg max-w-xl">
              Consult with our lead engineers on your next landmark project. Precision starts with a
              single conversation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-unit-4">
            <Link
              className="bg-primary text-on-primary font-label-bold text-label-bold px-unit-8 py-unit-4"
              to="/get-a-quote"
            >
              Request Project Proposal
            </Link>
            <Link
              className="bg-surface text-primary border border-outline font-label-bold text-label-bold px-unit-8 py-unit-4"
              to="/project-portal"
            >
              Technical Portal
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio
