import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MaterialIcon from '../components/ui/MaterialIcon'

const homeHeroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDETrv_QEDgtCH7eNVwDIMatbI-W0SAXd50JXN0F-wTjkbimpQRE31wE4tOTETlESmwTsTA27KNcvAhqpQs6Z9F6tq0CGf0-yGFjI26w7KaOVfIaGe-jRKMsq9lvSEyx1lNK8Wy59ca_VY8L2oC0XnmjK2XrM9y6vAtLcrl1WdLm85b2cASCDCjPxCE6NXryJdVTzE_akNhBjyWSrn2vg4LQPMsJaHUwpjLwl-OQ2B5U4rbi3gtsTT2WGgROqaKKHj3rB-0wy_w4Zus'

const bridgeHeroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDrFaJ2THf_CfZnzOeHsNbsmtchpAWZOkAPVbH8D34o47R1pqL2dsh1eq3uEHyUJYH6C4HAYhvsjCFOMuLGUf9cdvxIRspdwHBrtGGpzvwjt4ioc-RQz3gHk0RKAyZbI-mCj3EhnjFkpSthhd12sRwtxtRfpHkbcbLcboA_71IQbORN-dbw7jLeC4ZAOMkoZKZZz2kPfesHpv2VrfeCfQl19F-hbdSl2QFfIQ0dSCbcDJlaTKrX6UOt8DmQ8-3WwsXvUjHKrGQkuaDf'

const engineeringHeroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBsB4A2sTFEt7opXnDB9G240c3pM8yvkOCOsmN8akktCXB3Yhj8DKjau3yC04WWgGzSNDaOkJt6iheuyJPgfwiAqIh9a_5qV7ud6rHAHz3nXLTo8FnrZfU4yB8OQ9REPa8SpiMPsJn4BmCSC8qYLmc2YqUipFHSXKw8lDeGyfMxMAlDEqxEtdK81PUb1iRF49d1kr9TU0G_vkYU3sXf3tVTOLV3GrZnzS9uLQphHy9RtriaiTVORQEfyKCpoMSYKmthyheyGKpjS9s3'

const heroSlides = [
  {
    eyebrow: 'Established 2009',
    title: 'Structural Integrity for Modern Infrastructure',
    copy: 'Hasif Construction delivers civil, residential, commercial, and industrial projects with disciplined engineering, technical oversight, and zero-compromise execution.',
    image: homeHeroImage,
    imageAlt: 'Construction cranes at dusk',
  },
  {
    eyebrow: 'Precision Engineering',
    title: 'Built for permanence from concept to completion',
    copy: 'Our technical teams align scope, safety, procurement, and scheduling before site execution begins.',
    image: engineeringHeroImage,
    imageAlt: 'Concrete pillars and steel reinforcement on a civil engineering site',
  },
  {
    eyebrow: 'Authorized Field Excellence',
    title: 'Reliable project delivery at every scale',
    copy: 'From foundations to landmark structures, we manage construction with measurable quality controls and field accountability.',
    image: bridgeHeroImage,
    imageAlt: 'Cable-stayed bridge spanning a river at dawn',
  },
]

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1))
  }

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5500)

    return () => {
      window.clearInterval(sliderTimer)
    }
  }, [])

  return (
    <main className="pt-unit-16 bg-background text-on-background font-body-md overflow-x-hidden">
      <section className="page-heading-section relative overflow-hidden bg-surface-container-low">
        {heroSlides.map((heroSlide, index) => (
          <div
            className={`hero-slide-bg absolute inset-0 ${
              activeSlide === index ? 'hero-slide-bg-active' : ''
            }`}
            key={heroSlide.title}
          >
            <img
              alt={heroSlide.imageAlt}
              className="w-full h-full object-cover"
              src={heroSlide.image}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/95 to-surface-container-low/88"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 w-full py-unit-16">
          <div
            className="hero-slide-content max-w-3xl bg-surface-container-lowest/70 backdrop-blur-[2px] p-unit-6 md:p-unit-8 border-l-4 border-primary"
            key={slide.title}
          >
            <span className="inline-flex items-center gap-unit-2 bg-primary text-on-primary font-label-bold text-label-sm px-unit-2 py-unit-1 mb-unit-4 uppercase">
              <MaterialIcon className="text-[18px]" name="verified" />
              {slide.eyebrow}
            </span>
            <h1 className="font-headline-xl text-4xl md:text-headline-xl text-primary max-w-3xl mb-unit-6 leading-none">
              {slide.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-unit-8">
              {slide.copy}
            </p>
            <div className="flex flex-col sm:flex-row gap-unit-4">
              <Link
                className="bg-primary text-on-primary font-label-bold text-label-bold px-unit-12 py-unit-4 uppercase hover:bg-primary-container transition-all"
                to="/get-a-quote"
              >
                Start Your Project
              </Link>
              <Link
                className="border-2 border-primary text-primary font-label-bold text-label-bold px-unit-12 py-unit-4 uppercase hover:bg-primary hover:text-on-primary transition-all"
                to="/portfolio"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="mt-unit-12 flex flex-col sm:flex-row sm:items-center gap-unit-6">
            <div className="flex gap-unit-2">
              <button
                aria-label="Previous slide"
                className="w-12 h-12 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
                onClick={showPreviousSlide}
                type="button"
              >
                <MaterialIcon name="west" />
              </button>
              <button
                aria-label="Next slide"
                className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors"
                onClick={showNextSlide}
                type="button"
              >
                <MaterialIcon name="east" />
              </button>
            </div>
            <div className="flex items-center gap-unit-2">
              {heroSlides.map((heroSlide, index) => (
                <button
                  aria-label={`Show slide ${index + 1}: ${heroSlide.title}`}
                  className={`h-1 transition-all ${
                    activeSlide === index ? 'w-12 bg-primary' : 'w-6 bg-primary/30'
                  }`}
                  key={heroSlide.title}
                  onClick={() => setActiveSlide(index)}
                  type="button"
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-reveal reveal-up py-unit-12 bg-white border-y border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-unit-8 text-center">
            {[
              ['450+', 'Projects Delivered'],
              ['15+', 'Global Markets'],
              ['0', 'Safety Incidents'],
              ['14', 'Years of Precision'],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-headline-xl text-headline-xl text-primary">{value}</div>
                <div className="font-label-bold text-label-bold text-secondary uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal reveal-left py-unit-16 bg-surface-container-lowest perspective-grid">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8">
          <div className="flex flex-col md:flex-row justify-between gap-unit-8 mb-unit-12">
            <div>
              <span className="font-label-bold text-primary uppercase tracking-[0.2em] mb-unit-2 block">
                Core Capabilities
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase">
                Engineered project delivery
              </h2>
              <div className="h-1 w-24 bg-primary mt-unit-2"></div>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-xl">
              From site feasibility to final handover, every build is handled through a technical
              workflow built for precision, compliance, and long-term permanence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-6">
            {[
              ['architecture', 'Civil Engineering', 'Roadworks, drainage systems, foundations, bridges, and core infrastructure.'],
              ['home_work', 'Residential', 'High-end apartments and luxury homes built with measurable quality controls.'],
              ['corporate_fare', 'Commercial', 'Offices, logistics hubs, industrial facilities, and mixed-use developments.'],
            ].map(([icon, title, copy]) => (
              <article
                className="bg-white border border-outline-variant p-unit-8 hover:border-primary transition-colors"
                key={title}
              >
                <div className="bg-primary text-on-primary w-12 h-12 flex items-center justify-center mb-unit-6">
                  <MaterialIcon name={icon} />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-unit-4 uppercase">
                  {title}
                </h3>
                <p className="text-secondary font-body-md text-body-md mb-unit-6">{copy}</p>
                <Link
                  className="font-label-bold text-label-bold text-primary uppercase inline-flex items-center gap-unit-2"
                  to="/services"
                >
                  Learn More <MaterialIcon className="text-sm" name="arrow_forward" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal reveal-right py-unit-16 bg-primary text-on-primary">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 grid grid-cols-1 md:grid-cols-12 gap-unit-8 items-center">
          <div className="md:col-span-5">
            <h2 className="font-headline-lg text-headline-lg uppercase mb-unit-4">
              Reliability is built before concrete is poured.
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim">
              Our technical teams align scope, safety, procurement, and scheduling before site
              execution begins.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-unit-4">
            {[
              ['verified', 'ISO-aligned quality systems'],
              ['engineering', 'Senior structural review'],
              ['shield', 'Zero-incident safety culture'],
              ['hub', 'Connected project management'],
            ].map(([icon, label]) => (
              <div
                className="border border-on-primary/20 p-unit-6 flex items-center gap-unit-4"
                key={label}
              >
                <MaterialIcon className="text-primary-fixed-dim" name={icon} />
                <span className="font-label-bold text-label-bold uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal reveal-zoom py-unit-16 bg-surface-container-high">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-unit-6">
            Ready to Build the Future?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-unit-8">
            Partner with Hasif Construction for civil engineering solutions that stand the test of
            time.
          </p>
          <Link
            className="inline-block bg-primary text-on-primary font-label-bold text-label-bold px-unit-12 py-unit-4 uppercase hover:bg-primary-container transition-all"
            to="/get-a-quote"
          >
            Consult Our Team
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
