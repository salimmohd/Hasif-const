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
      <section className="bg-white px-6 md:px-margin-desktop pb-24">
        <Link
          className="inline-flex bg-primary text-white px-10 py-4 font-label-bold text-label-bold uppercase tracking-widest hover:bg-on-primary-fixed-variant transition-all"
          to="/"
        >
          Back Home
        </Link>
      </section>
    </>
  )
}

export default NotFound
