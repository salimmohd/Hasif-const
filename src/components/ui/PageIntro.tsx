type PageIntroProps = {
  copy: string
  eyebrow: string
  title: string
}

function PageIntro({ copy, eyebrow, title }: PageIntroProps) {
  return (
    <main className="min-h-[64vh] bg-surface px-6 md:px-margin-desktop py-section-padding">
      <div className="max-w-4xl">
        <span className="font-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
          {eyebrow}
        </span>
        <h1 className="heading-serif text-5xl md:text-7xl text-on-surface mb-8 leading-[1.1]">
          {title}
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">{copy}</p>
      </div>
    </main>
  )
}

export default PageIntro
