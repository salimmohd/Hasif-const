import CtaSection from '../components/sections/CtaSection'
import PageIntro from '../components/ui/PageIntro'

function Contact() {
  return (
    <>
      <PageIntro
        copy="Use this routed page for tender requests, consultations, and project inquiries."
        eyebrow="Contact"
        title="Ready to talk through the next build."
      />
      <section className="bg-white px-6 md:px-margin-desktop py-24 border-y border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-label-sm text-on-surface-variant uppercase tracking-widest block mb-3">
              Address
            </span>
            <p className="font-headline-md text-primary">102 Steel Tower, Industrial Zone</p>
          </div>
          <div>
            <span className="font-label-sm text-on-surface-variant uppercase tracking-widest block mb-3">
              Phone
            </span>
            <p className="font-headline-md text-primary">+971 4 000 0000</p>
          </div>
          <div>
            <span className="font-label-sm text-on-surface-variant uppercase tracking-widest block mb-3">
              Email
            </span>
            <p className="font-headline-md text-primary">tender@hasif.com</p>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}

export default Contact
