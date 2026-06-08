import MaterialIcon from '../ui/MaterialIcon'

function TestimonialSection() {
  return (
    <section className="py-section-padding px-6 md:px-margin-desktop bg-white border-y border-outline-variant/30">
      <div className="max-w-4xl mx-auto text-center">
        <MaterialIcon
          className="text-primary-fixed-dim text-7xl opacity-40 mb-10 block"
          name="format_quote"
        />
        <p className="heading-serif text-3xl md:text-4xl leading-snug text-primary mb-12 italic">
          "Hasif Construction delivered our industrial plant ahead of schedule with zero safety
          incidents. Their attention to structural detail and engineering integrity is unmatched in
          the industry today."
        </p>
        <div className="flex flex-col items-center">
          <div className="w-16 h-px bg-outline mb-8"></div>
          <h5 className="font-headline-md text-primary tracking-tight">Marcus Thorne</h5>
          <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-[0.2em] mt-2">
            CEO, Industrial Nexus Corp
          </span>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
