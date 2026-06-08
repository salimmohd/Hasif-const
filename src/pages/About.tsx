import StatsSection from '../components/sections/StatsSection'
import TestimonialSection from '../components/sections/TestimonialSection'
import PageIntro from '../components/ui/PageIntro'

function About() {
  return (
    <>
      <PageIntro
        copy="Hasif Construction combines safety-first planning with modern construction management."
        eyebrow="About"
        title="Built on technical discipline and field experience."
      />
      <StatsSection />
      <TestimonialSection />
    </>
  )
}

export default About
