import { Link } from 'react-router-dom'
import MaterialIcon from '../components/ui/MaterialIcon'
import PageHero from '../components/ui/PageHero'

const serviceCards = [
  {
    icon: 'add_road',
    title: 'Roadworks',
    copy: 'Precision paving and highway construction for high-volume transport.',
  },
  {
    icon: 'construction',
    title: 'Infrastructure',
    copy: 'Bridges, tunnels, and utility networks engineered for longevity.',
  },
  {
    icon: 'water_drop',
    title: 'Drainage',
    copy: 'Advanced hydrological solutions and subterranean management.',
  },
]

const commercialCards = [
  {
    title: 'Logistics',
    copy: 'Scalable warehouse and distribution facilities with smart connectivity.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClEXvy8Da7wO_SJ2LdCBZymO0aM3RcOIzrCkYqtq8hb8wAVwHlBUtgGntbyFOQyvHBilcAb0B62MXwzKjXsuRB0qBvFsjdPP-I2D151LYODVsixMFamIPV29ar_DxOXzRX8pGUYphZIfFS3NwGsJbxW4kPMmzmvIGzfj5dfDn2OC8FcNBDfm4pamotoOArLcyjW7x8IZc-SEEe2e9puNwFEKzAYtEXJFhMJUaEdDiuVtd8RuU1GLpAgs5mAQvFFFCIS8PHwP84Btt7',
  },
  {
    title: 'Offices',
    copy: 'Corporate headquarters designed for productivity and brand identity.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQK7fn1JYwyE6xybEcBNPXmFisz8F3Ql0-idjhhDrglvctsSKyYj30zG-nxKvSeOqktiBUV3m1exMMjDlD9FXxm7nhPKS3YLmeNAH7XuimmzfyjGmLUr0sAnBV-YpN39Bf6TrTmEJq_MMx68Nii_9DyByDLKnHSGfFJS39JigvTtSqPse4Dg7ae8i8ldaoBdmodCAYRMLT8_6eD1l9MIw4dLhhobBDK9pCB0u0MscvE9ttVYye0dx4Jf7R_u_DJNuIVFYJ_Q54qj4-',
  },
  {
    title: 'Retail',
    copy: 'Engaging consumer environments built to technical retail standards.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHoaavuF-jU2RGsPtigT7eYUmE6NdKjsio0HxatlFN-o5MaGaKU3W8zompRlg1qcPeiEjnXcKhFb29GqkKNErTek6NRoiHaCe0okYaK7B5lJXRFfd8odUXmKfFHQiVexqkCiUIb04BVASO_HeERnamJa3VRSqgnDRRD3F-8gsDzDNwEfydNKyLZgwEFBM7DUAEaRSJ1ogQJSnu1K2Am9Yi8KjzEcl_N8ZmUu2fjNQCuzAVLrGqwVLRFaDfJSnPIVdE_tWWwGvmBp2h',
  },
]

function Services() {
  return (
    <main className="pt-unit-16 bg-background text-on-background font-body-md overflow-x-hidden">
      <PageHero
        copy="At Hasif Construction, we translate complex engineering challenges into enduring physical realities. From critical infrastructure to luxury dwellings, our precision is your permanence."
        eyebrow="Our Capabilities"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCqyQ-ROftUZoUtitm4x0hjdDRQU71hVpMTwcj8U7zS1w2XIGBmqQRLyYXyCOVYHD81YWZDj-zQxtFIJIf5DSTlsUpCE2qTakrXGvKUTaE4GIyDAk8mP7SGXHL-HHG-0mfCK_369XufLn8VT8SP9TbKJE8GOov3YBbbhMTjfEzto4e-TAfmpz0TsMpemXAiTZBtJM6KuwTnrRnwTs3AIUPL65iI2D3pUr9DyUjDG-dQaOO9CAxUSfoRumTciZzEG31SWJ5VI6llDdjN"
        title="Building Foundations for the Future"
      />

      <section className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 pb-unit-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-6 mt-unit-8">
          <section className="section-reveal reveal-left md:col-span-12 flex flex-col md:flex-row gap-unit-6 border-t-2 border-primary pt-unit-8">
            <div className="md:w-1/3">
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">
                Civil Engineering
              </h2>
              <p className="font-body-md text-body-md text-secondary mt-unit-2">
                Infrastructure that forms the backbone of modern society.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-unit-4">
              {serviceCards.map((card) => (
                <article
                  className="group bg-surface-container-lowest border border-outline-variant p-unit-4 transition-all hover:border-primary"
                  key={card.title}
                >
                  <MaterialIcon className="text-primary mb-unit-2" name={card.icon} />
                  <h3 className="font-label-bold text-label-bold text-primary">{card.title}</h3>
                  <p className="text-label-sm font-label-sm text-secondary mt-unit-1">
                    {card.copy}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="section-reveal reveal-zoom md:col-span-7 h-96 overflow-hidden border border-outline-variant">
            <img
              alt="Civil engineering detail"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsB4A2sTFEt7opXnDB9G240c3pM8yvkOCOsmN8akktCXB3Yhj8DKjau3yC04WWgGzSNDaOkJt6iheuyJPgfwiAqIh9a_5qV7ud6rHAHz3nXLTo8FnrZfU4yB8OQ9REPa8SpiMPsJn4BmCSC8qYLmc2YqUipFHSXKw8lDeGyfMxMAlDEqxEtdK81PUb1iRF49d1kr9TU0G_vkYU3sXf3tVTOLV3GrZnzS9uLQphHy9RtriaiTVORQEfyKCpoMSYKmthyheyGKpjS9s3"
            />
          </div>

          <section className="section-reveal reveal-right md:col-span-5 bg-primary text-on-primary p-unit-8 flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tighter mb-unit-4">
              Residential Construction
            </h2>
            <ul className="space-y-unit-4">
              {[
                ['High-End Apartments', 'Modern urban living spaces featuring premium materials and finishes.'],
                ['Luxury Homes', 'Bespoke residential estates designed for discerning private clients.'],
              ].map(([title, copy]) => (
                <li className="flex items-start gap-unit-2" key={title}>
                  <span className="w-2 h-2 mt-2 bg-on-primary-container shrink-0"></span>
                  <div>
                    <h3 className="font-label-bold text-label-bold">{title}</h3>
                    <p className="text-label-sm font-label-sm text-on-primary-container">{copy}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-unit-6">
              <Link
                className="inline-block border-2 border-on-primary text-on-primary font-label-bold text-label-bold px-unit-6 py-unit-2 hover:bg-on-primary hover:text-primary transition-colors"
                to="/portfolio"
              >
                VIEW RESIDENTIAL PORTFOLIO
              </Link>
            </div>
          </section>

          <section className="section-reveal reveal-up md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-unit-6 mt-unit-8 border-t border-outline-variant pt-unit-8">
            <div className="md:col-span-3 mb-unit-4">
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">
                Commercial & Industrial
              </h2>
            </div>
            {commercialCards.map((card) => (
              <article
                className="relative group h-80 overflow-hidden border border-outline-variant"
                key={card.title}
              >
                <img
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={card.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-unit-6 flex flex-col justify-end">
                  <h3 className="font-headline-md text-headline-md text-white mb-unit-1">
                    {card.title}
                  </h3>
                  <p className="font-label-sm text-label-sm text-white/80">{card.copy}</p>
                </div>
              </article>
            ))}
          </section>
        </div>

        <section className="section-reveal reveal-skew mt-unit-16 border-t-4 border-primary bg-surface-container p-unit-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-unit-8">
            <div className="md:w-1/2">
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-unit-4">
                Safety & Compliance
              </h2>
              <p className="font-body-md text-body-md text-secondary mb-unit-6">
                Safety is not a checkbox; it is our operational foundation. We maintain rigorous
                compliance standards across every project site globally, ensuring the protection of
                our workforce and the integrity of your investment.
              </p>
              <div className="flex flex-wrap gap-unit-4">
                {['ISO 9001:2015', 'ISO 45001:2018', 'ISO 14001:2015'].map((label) => (
                  <div
                    className="flex items-center gap-unit-2 bg-surface-container-lowest border border-outline px-unit-4 py-unit-2"
                    key={label}
                  >
                    <MaterialIcon className="text-primary" name="verified" />
                    <span className="font-label-bold text-label-bold text-primary">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-primary p-unit-6 text-on-primary">
              <h3 className="font-label-bold text-label-bold mb-unit-2 border-b border-on-primary-container pb-unit-1">
                TECHNICAL AUDIT READY
              </h3>
              <p className="text-label-sm font-label-sm text-on-primary-container mb-unit-4">
                Our internal Technical Portal provides clients with 24/7 access to safety logs,
                site inspections, and compliance certifications.
              </p>
              <Link
                className="inline-flex items-center gap-unit-2 font-label-bold text-label-bold hover:underline"
                to="/project-portal"
              >
                ACCESS PORTAL <MaterialIcon className="text-sm" name="arrow_forward" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-reveal reveal-zoom mt-unit-16 text-center py-unit-12 border border-outline-variant bg-white">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-unit-4">
            Ready to start your next project?
          </h2>
          <p className="font-body-md text-body-md text-secondary mb-unit-8 max-w-xl mx-auto">
            Consult with our lead engineers today to discuss technical requirements, scheduling,
            and strategic site management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-unit-4">
            <Link
              className="bg-primary text-on-primary font-label-bold text-label-bold px-unit-8 py-unit-4 hover:opacity-90 transition-all"
              to="/get-a-quote"
            >
              REQUEST TECHNICAL PROPOSAL
            </Link>
            <Link
              className="border-2 border-primary text-primary font-label-bold text-label-bold px-unit-8 py-unit-4 hover:bg-primary hover:text-on-primary transition-all"
              to="/portfolio"
            >
              DOWNLOAD SERVICES BROCHURE
            </Link>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Services
