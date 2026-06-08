function StatsSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-margin-desktop border-b border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col items-center md:items-start">
          <span className="heading-serif text-6xl text-primary mb-2">
            15<span className="text-3xl align-top ml-1">+</span>
          </span>
          <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-[0.15em]">
            Years Experience
          </span>
        </div>

        <div className="flex flex-col items-center md:items-start border-y md:border-y-0 md:border-x border-outline-variant/30 py-12 md:py-0 md:px-16">
          <span className="heading-serif text-6xl text-primary mb-2">
            200<span className="text-3xl align-top ml-1">+</span>
          </span>
          <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-[0.15em]">
            Projects Completed
          </span>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <span className="heading-serif text-6xl text-primary mb-2">
            100<span className="text-3xl align-top ml-1">%</span>
          </span>
          <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-[0.15em]">
            Safety Record
          </span>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
