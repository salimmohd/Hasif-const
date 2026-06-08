import ServicesSection from '../components/sections/ServicesSection'
import PageIntro from '../components/ui/PageIntro'

function Services() {
  return (
    <>
      <PageIntro
        copy="Civil, residential, and commercial delivery routed through a React page while the homepage keeps the original visual system."
        eyebrow="Services"
        title="Engineering capability for every project phase."
      />
      <ServicesSection />
    </>
  )
}

export default Services
