import type { ReactNode } from 'react'

type PageHeroProps = {
  copy: string
  eyebrow: string
  image: string
  title: ReactNode
}

function PageHero({ copy, eyebrow, image, title }: PageHeroProps) {
  return (
    <section className="page-heading-section relative overflow-hidden bg-surface-container-low border-b border-outline-variant">
      <div className="absolute inset-0 z-0">
        <img alt="" className="w-full h-full object-cover opacity-10" src={image} />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/95 to-surface-container-low/88"></div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 w-full">
        <div className="max-w-3xl bg-surface-container-lowest/70 backdrop-blur-[2px] p-unit-6 md:p-unit-8 border-l-4 border-primary">
          <span className="inline-block px-unit-2 py-unit-1 bg-primary text-on-primary font-label-bold text-label-sm mb-unit-4 uppercase">
            {eyebrow}
          </span>
          <h1 className="font-headline-xl text-4xl md:text-headline-xl text-primary mb-unit-6 leading-none">
            {title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {copy}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageHero
