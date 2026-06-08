import { Link } from 'react-router-dom'

function CtaSection() {
  return (
    <section className="relative py-32 px-6 md:px-margin-desktop bg-primary overflow-hidden">
      <div className="absolute inset-0 hazard-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="heading-serif text-4xl md:text-5xl text-white mb-4">
            Ready to break ground?
          </h2>
          <p className="font-body-lg text-primary-fixed opacity-70">
            Let's discuss your next engineering masterpiece with our technical experts.
          </p>
        </div>
        <Link
          className="bg-white text-primary px-16 py-6 font-label-bold text-label-bold uppercase tracking-widest hover:bg-surface-variant transition-all shadow-2xl"
          to="/contact"
        >
          REQUEST CONSULTATION
        </Link>
      </div>
    </section>
  )
}

export default CtaSection
