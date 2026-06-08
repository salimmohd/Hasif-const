import { useState } from 'react'
import MaterialIcon from '../components/ui/MaterialIcon'
import PageHero from '../components/ui/PageHero'

const steps = ['Client Info', 'Project Parameters', 'Documentation']

function GetQuote() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((step) => step + 1)
      return
    }

    window.alert('Thank you. Technical documentation received. An engineer will be assigned to your inquiry.')
  }

  return (
    <main className="pt-unit-16 min-h-screen bg-background text-on-background font-body-md antialiased">
      <PageHero
        copy="Initiate your project lifecycle with our standardized technical brief. Our engineering department reviews all submissions within 48 business hours for structural feasibility and resource allocation."
        eyebrow="Project Intake Portal"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDwJR4WAnBKyNCTByUKqlAgWj2TlGIrkS63TpNxhYIMnpG8vQpJRO3bRlNIsvc8Xjzr1NUDPoCH_MPCRuO7iCdAgg6nTsjFCZR4esHbZlW-YEV7_On7Eo7d2eVh9FpCVyzSQdDBqPheld5OZ2GJ_nDXsLZKOwhL1yw8doYlavBZ0sZ2iHohGlqwxc4mn-rSONV_TzpQwlcZ4I-KRUt_HNIhwk05qnEPrh_m9E8XWzMlfakm5W3k7J0RAYtFe_yvg0jEETh1h73xsGCQ"
        title="Technical Inquiry - Engineered for Precision"
      />

      <section className="section-reveal reveal-up max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 py-unit-12 grid grid-cols-1 lg:grid-cols-12 gap-unit-8">
        <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-unit-6 md:p-unit-8">
          <div className="flex items-center gap-unit-4 mb-unit-12 border-b border-outline-variant pb-unit-6 overflow-x-auto whitespace-nowrap">
            {steps.map((label, index) => {
              const step = index + 1
              const isActive = currentStep === step

              return (
                <div className="flex items-center gap-unit-4" key={label}>
                  {index > 0 ? <div className="h-px w-8 bg-outline-variant"></div> : null}
                  <button
                    className={`flex items-center gap-unit-2 font-label-bold text-label-bold cursor-pointer transition-all ${
                      isActive ? 'step-active' : 'step-inactive'
                    }`}
                    onClick={() => setCurrentStep(step)}
                    type="button"
                  >
                    <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center border-current">
                      {String(step).padStart(2, '0')}
                    </span>
                    <span>{label}</span>
                  </button>
                </div>
              )
            })}
          </div>

          <form className="flex flex-col min-h-[400px]">
            {currentStep === 1 ? (
              <div className="space-y-unit-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-6">
                  <label className="flex flex-col gap-unit-1">
                    <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                      Full Name
                    </span>
                    <input
                      className="bg-transparent border-b border-outline p-unit-2 font-body-md text-body-md form-input-focus transition-all"
                      placeholder="John Doe"
                      type="text"
                    />
                  </label>
                  <label className="flex flex-col gap-unit-1">
                    <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                      Company Name
                    </span>
                    <input
                      className="bg-transparent border-b border-outline p-unit-2 font-body-md text-body-md form-input-focus transition-all"
                      placeholder="Engineering Firm LLC"
                      type="text"
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-6">
                  <label className="flex flex-col gap-unit-1">
                    <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                      Professional Email
                    </span>
                    <input
                      className="bg-transparent border-b border-outline p-unit-2 font-body-md text-body-md form-input-focus transition-all"
                      placeholder="j.doe@company.com"
                      type="email"
                    />
                  </label>
                  <label className="flex flex-col gap-unit-1">
                    <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                      Contact Number
                    </span>
                    <input
                      className="bg-transparent border-b border-outline p-unit-2 font-body-md text-body-md form-input-focus transition-all"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </label>
                </div>
              </div>
            ) : null}

            {currentStep === 2 ? (
              <div className="space-y-unit-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-6">
                  <label className="flex flex-col gap-unit-1">
                    <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                      Project Category
                    </span>
                    <select className="bg-transparent border-b border-outline p-unit-2 font-body-md text-body-md form-input-focus transition-all appearance-none cursor-pointer">
                      <option>Civil Infrastructure</option>
                      <option>Industrial Facility</option>
                      <option>Commercial Development</option>
                      <option>Structural Reinforcement</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-unit-1">
                    <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                      Site Location
                    </span>
                    <input
                      className="bg-transparent border-b border-outline p-unit-2 font-body-md text-body-md form-input-focus transition-all"
                      placeholder="City, Country"
                      type="text"
                    />
                  </label>
                </div>
                <div className="flex flex-col gap-unit-1">
                  <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                    Estimated Budget Range (USD)
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-unit-2 mt-unit-2">
                    {['100k - 500k', '500k - 2M', '2M - 10M', '10M+'].map((range) => (
                      <button
                        className={`border p-unit-2 font-label-bold text-label-sm transition-colors ${
                          range === '2M - 10M'
                            ? 'border-primary bg-primary text-on-primary'
                            : 'border-outline hover:bg-primary-fixed'
                        }`}
                        key={range}
                        type="button"
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {currentStep === 3 ? (
              <div className="space-y-unit-6">
                <div className="flex flex-col gap-unit-4 p-unit-6 border-2 border-dashed border-outline-variant text-center bg-background">
                  <MaterialIcon className="text-4xl text-outline" name="cloud_upload" />
                  <div className="flex flex-col">
                    <span className="font-label-bold text-label-bold text-primary">
                      Upload Briefs/Blueprints
                    </span>
                    <span className="font-body-md text-label-sm text-secondary">
                      PDF, DWG, or ZIP (Max 50MB)
                    </span>
                  </div>
                  <button
                    className="mx-auto border-2 border-primary px-unit-6 py-unit-2 font-label-bold text-label-bold hover:bg-primary-container hover:text-on-primary transition-all"
                    type="button"
                  >
                    Select Files
                  </button>
                </div>
                <label className="flex flex-col gap-unit-2">
                  <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                    Technical Requirements Summary
                  </span>
                  <textarea
                    className="bg-transparent border border-outline p-unit-4 font-body-md text-body-md form-input-focus transition-all resize-none"
                    placeholder="Briefly describe specific engineering requirements or site constraints..."
                    rows={4}
                  ></textarea>
                </label>
              </div>
            ) : null}

            <div className="mt-auto pt-unit-12 flex justify-between items-center gap-unit-4">
              <button
                className={`quote-nav-button border-2 border-outline font-label-bold text-label-bold uppercase text-secondary hover:bg-outline-variant hover:text-primary transition-all ${
                  currentStep === 1 ? 'invisible' : ''
                }`}
                onClick={() => setCurrentStep((step) => Math.max(1, step - 1))}
                type="button"
              >
                Previous
              </button>
              <button
                className="quote-nav-button bg-primary text-on-primary font-label-bold text-label-bold uppercase tracking-wider hover:bg-primary-container transition-all"
                onClick={handleNext}
                type="button"
              >
                {currentStep === steps.length ? 'Submit Proposal' : 'Next Step'}
              </button>
            </div>
          </form>
        </div>

        <aside className="lg:col-span-4 space-y-unit-8">
          <div className="bg-surface-container border border-outline-variant p-unit-6">
            <h3 className="font-label-bold text-label-bold text-primary uppercase border-b border-outline-variant pb-unit-2 mb-unit-4">
              Engineering Standards
            </h3>
            <ul className="space-y-unit-4">
              {[
                ['ISO 9001:2015', 'Quality management systems compliant for international structural projects.'],
                ['Technical Precision', 'Our blueprints are vetted by senior structural engineers before quoting.'],
                ['Data Privacy', 'All project documentation is encrypted and handled under strict NDAs.'],
              ].map(([title, copy]) => (
                <li className="flex items-start gap-unit-3" key={title}>
                  <div className="mt-1 w-4 h-4 bg-primary flex-shrink-0"></div>
                  <div>
                    <span className="block font-label-bold text-label-bold text-primary">
                      {title}
                    </span>
                    <span className="block font-body-md text-label-sm text-secondary">{copy}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-square overflow-hidden border border-outline-variant relative group">
            <img
              alt="Technical drafting office"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwJR4WAnBKyNCTByUKqlAgWj2TlGIrkS63TpNxhYIMnpG8vQpJRO3bRlNIsvc8Xjzr1NUDPoCH_MPCRuO7iCdAgg6nTsjFCZR4esHbZlW-YEV7_On7Eo7d2eVh9FpCVyzSQdDBqPheld5OZ2GJ_nDXsLZKOwhL1yw8doYlavBZ0sZ2iHohGlqwxc4mn-rSONV_TzpQwlcZ4I-KRUt_HNIhwk05qnEPrh_m9E8XWzMlfakm5W3k7J0RAYtFe_yvg0jEETh1h73xsGCQ"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            <div className="absolute bottom-0 left-0 p-unit-4 bg-primary text-on-primary font-label-bold text-label-sm">
              HASIF TECH CENTER
            </div>
          </div>

          <div className="bg-surface-container-highest p-unit-6">
            <h3 className="font-label-bold text-label-bold text-primary uppercase mb-unit-2">
              Urgent Inquiry?
            </h3>
            <p className="font-body-md text-label-sm text-secondary mb-unit-4">
              Contact our technical bidding office directly for expedited review of priority
              projects.
            </p>
            <div className="flex items-center gap-unit-2 text-primary">
              <MaterialIcon name="call" />
              <span className="font-label-bold text-label-bold">+1 (800) HASIF-ENG</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section-reveal reveal-zoom border-t border-outline-variant py-unit-8 bg-surface-container-lowest">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8">
          <div className="flex flex-wrap justify-between items-center opacity-40 grayscale gap-unit-8">
            {['STRUCT_CO', 'MECH_IND', 'CIVIL_PRO', 'GLOBAL_BUILD', 'INFRA_SYS'].map((brand) => (
              <span className="font-headline-md text-headline-md font-bold tracking-tighter" key={brand}>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default GetQuote
