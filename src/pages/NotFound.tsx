import { Link } from 'react-router-dom'
import PageIntro from '../components/ui/PageIntro'

function NotFound() {
  return (
    <>
      <PageIntro
        copy="The page you opened is not available in this build."
        eyebrow="404"
        title="This route is outside the construction site map."
      />
      <section className="bg-white px-unit-4 md:px-unit-8 pb-unit-16">
        <div className="max-w-[1200px] mx-auto">
          <Link
            className="inline-flex bg-primary text-on-primary px-unit-8 py-unit-4 font-label-bold text-label-bold uppercase tracking-widest hover:bg-primary-container transition-all"
            to="/"
          >
            Back Home
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
