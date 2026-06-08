import CtaSection from '../components/sections/CtaSection'
import HeroSection from '../components/sections/HeroSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ServicesSection from '../components/sections/ServicesSection'
import StatsSection from '../components/sections/StatsSection'
import TestimonialSection from '../components/sections/TestimonialSection'

function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  )
}

export default Home
