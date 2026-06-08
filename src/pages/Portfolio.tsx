import ProjectsSection from '../components/sections/ProjectsSection'
import PageIntro from '../components/ui/PageIntro'

function Portfolio() {
  return (
    <>
      <PageIntro
        copy="Featured transport, bridge, and commercial builds can be expanded here as the portfolio grows."
        eyebrow="Portfolio"
        title="Project work shaped by precision and scale."
      />
      <ProjectsSection />
    </>
  )
}

export default Portfolio
