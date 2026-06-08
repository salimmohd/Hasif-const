import { Link } from 'react-router-dom'
import MaterialIcon from '../components/ui/MaterialIcon'
import PageHero from '../components/ui/PageHero'

const contactMethods = [
  {
    icon: 'call',
    label: 'Direct Line',
    value: '+1 (800) 555-0199',
    note: 'Available 08:00 - 18:00 EST',
  },
  {
    icon: 'alternate_email',
    label: 'Project Email',
    value: 'solutions@hasifconstruction.com',
    note: 'Response within 24 business hours',
  },
  {
    icon: 'location_on',
    label: 'Global Office',
    value: '102 Steel Tower, Dubai, UAE',
    note: 'Technical coordination desk',
  },
]

function Contact() {
  return (
    <main className="pt-unit-16 bg-background text-on-background font-body-md overflow-x-hidden">
      <PageHero
        copy="From initial structural consultation to field execution support, our technical teams are ready to provide the reliability your project demands."
        eyebrow="Contact Channels"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB2fta_L1DdqQrw94exzXDFVV5d9mO8AuOh9J6mKSAQSLJJI_hVs9n0rmEUMavUFGTigFf2Rji-z6YbErxIltE473htS3bOWTcU3afiBKRVBzrWtFueslRPbA0td_BaECLCMGdxzZ3UrVRszVoqAH8gIDH9A3b2WLpOn4yE8wUArEa3H0oDUsQZtxEM2caSWlxQXFMGRMN3q-t6la7uuVxkpWR959TJ24BjbZuC36bE3n3JIvIis_jwH3H3hleED0OKLhF2wiGG0UmO"
        title="Precision Engineering at Every Touchpoint"
      />

      <section className="section-reveal reveal-up max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 py-unit-12 grid grid-cols-1 lg:grid-cols-12 gap-unit-8">
        <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-unit-6 md:p-unit-8">
          <div className="border-b border-outline-variant pb-unit-6 mb-unit-8">
            <h2 className="font-headline-md text-headline-md text-primary uppercase">
              Send a Technical Inquiry
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-unit-2">
              Submit your contact details and our engineering desk will route your inquiry to the
              correct project team.
            </p>
          </div>

          <form className="space-y-unit-6">
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
                  Company
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
                  Email
                </span>
                <input
                  className="bg-transparent border-b border-outline p-unit-2 font-body-md text-body-md form-input-focus transition-all"
                  placeholder="j.doe@company.com"
                  type="email"
                />
              </label>
              <label className="flex flex-col gap-unit-1">
                <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                  Phone
                </span>
                <input
                  className="bg-transparent border-b border-outline p-unit-2 font-body-md text-body-md form-input-focus transition-all"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </label>
            </div>

            <label className="flex flex-col gap-unit-1">
              <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                Inquiry Type
              </span>
              <select className="bg-transparent border-b border-outline p-unit-2 font-body-md text-body-md form-input-focus transition-all appearance-none cursor-pointer">
                <option>Project Consultation</option>
                <option>Technical Documentation</option>
                <option>Site Access Support</option>
                <option>Procurement Inquiry</option>
              </select>
            </label>

            <label className="flex flex-col gap-unit-2">
              <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
                Message
              </span>
              <textarea
                className="bg-transparent border border-outline p-unit-4 font-body-md text-body-md form-input-focus transition-all resize-none"
                placeholder="Briefly describe the support you need..."
                rows={5}
              ></textarea>
            </label>

            <div className="pt-unit-6 flex flex-col sm:flex-row gap-unit-4 justify-between">
              <Link
                className="quote-nav-button border-2 border-outline font-label-bold text-label-bold uppercase text-secondary hover:bg-outline-variant hover:text-primary transition-all"
                to="/get-a-quote"
              >
                Get Quote
              </Link>
              <button
                className="quote-nav-button bg-primary text-on-primary font-label-bold text-label-bold uppercase tracking-wider hover:bg-primary-container transition-all"
                type="button"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>

        <aside className="lg:col-span-4 space-y-unit-8">
          <div className="bg-primary text-on-primary border border-primary p-unit-6">
            <h3 className="font-label-bold text-label-bold uppercase border-b border-on-primary-container pb-unit-2 mb-unit-4">
              Technical Desk
            </h3>
            <p className="font-body-md text-body-md text-on-primary-container mb-unit-6">
              For urgent bid coordination or site access support, contact the engineering desk
              directly.
            </p>
            <div className="flex items-center gap-unit-2">
              <MaterialIcon name="call" />
              <span className="font-label-bold text-label-bold">+1 (800) HASIF-ENG</span>
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant p-unit-6">
            <h3 className="font-label-bold text-label-bold text-primary uppercase border-b border-outline-variant pb-unit-2 mb-unit-4">
              Response Standards
            </h3>
            <ul className="space-y-unit-4">
              {['24 business hour response', 'Secure project documentation', 'Senior engineer routing'].map(
                (item) => (
                  <li className="flex items-start gap-unit-3" key={item}>
                    <span className="mt-1 w-4 h-4 bg-primary shrink-0"></span>
                    <span className="font-body-md text-label-sm text-secondary">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </aside>
      </section>

      <section className="section-reveal reveal-left border-t border-outline-variant py-unit-16 bg-surface-container-lowest">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-6">
            {contactMethods.map((method) => (
              <article
                className="bg-white border border-outline-variant p-unit-6 hover:border-primary transition-colors"
                key={method.label}
              >
                <MaterialIcon className="text-primary text-3xl mb-unit-4" name={method.icon} />
                <h3 className="font-label-bold text-label-bold text-primary uppercase mb-unit-2">
                  {method.label}
                </h3>
                <p className="font-headline-md text-headline-md text-primary mb-unit-2">
                  {method.value}
                </p>
                <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  {method.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
