import { Link } from 'react-router-dom'
import MaterialIcon from '../components/ui/MaterialIcon'
import PageHero from '../components/ui/PageHero'

const leaders = [
  {
    name: 'Khalid Al-Hasif',
    role: 'Managing Director & Founder',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtzwYNo4G7hLAnDINjaBF5BTiSKsb1vqQTkybJPwHam75UMVlLCyAfR4KtXCzuUunIjnp8I4m9rY_eqoNfCY1cI2gre_ABbAykoP3t4ktDQBqE6r3F385oYoD4Hgr7lNqhQ3o3qHu7ovZhSBwTARMkSkPqXn2gGESoTZwQGjBpk_YmKdPQVlvM2F9r6ICBzRJfjCQaDnZyZx4L-4RcXrre5mKlvlisXp8AF6CTSI805syBYVNbYViymt1BTO-DJef87XUvvikWBZJH',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Chief Operations Officer',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Bg0H9EibtM_nY8dohqpCUn7_a1m62SlPkwNWOM3TzF9ApMga8CxIYREyXpOoa66Us5DferRLWEtx9gPeVUuLPyOPR7DhrCzEB33lwq4aokftmVDJCr4LfXKQqwlBUExk-v5N_jzN7mdeWdGVNkfJr9_3xeCC-1SI_zDpexsoVF-FZYYclZwzPMrfGvHUiqmVWLW6a9RYlht2eRt4KU5WZfrSl_AMgIOyO8d9YKQLd4QNhMxufztBz3mziXNg7FleCjKhPKK5Lmj_',
  },
  {
    name: 'Dr. Robert Chen',
    role: 'Chief Technical Engineer',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYFvd_yyc77BmwlgtHJXjmQxDm-0HK1kBl2qyJ1v_4CJEldmEoXCleiBwOMRw1XVfkR7uZIaim-2hzxzpcgwmd7teauMHewlz3WyimOZcRrXY35LOny5NB469nh_WUb6ADTY2Pixta7oSjnh82fkI7vJjJOvvSQiafqUqqqSGj3gxR1IL1bJAk0adVDAkBDdYmKR9ovDgRK_trjIScRR_ygVc8dy9alv4stODMziDNWhm5TK5BQXtkr00UzGjhZJBx8_7UkBNFzWxs',
  },
  {
    name: 'Amina Yusuf',
    role: 'Chief Financial Officer',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoGsAqiiRQqV1FI9Gx_apaLBsUBXuMgtPmRTotlreYJDL-eqPWmCPu6yqzXhKIH0CE3cD_AOmvkTUg9GoRQ14zs057XpC-JKYUQ8YwFPB9r-65sCA81rH6H1VuSip63RqhLiYZcpUBDdgJeQbqQcwZVJ4lIrrDH3mtiKnEWhMiWKU2j2cHPaCCxJyTnxBiPOrccKZ-vtdsfUuLQy-MnXn6PBfC87l_9QjDKKC7WUFNDvwTgxzweqjc_iaD0sDE0FY8mYm6V7ydHjWr',
  },
]

const principles = [
  {
    icon: 'architecture',
    title: 'Precision',
    copy: 'Our technical metrics are absolute. We utilize advanced BIM modeling and site-surveying technology to ensure every millimeter aligns with the original blueprint.',
  },
  {
    icon: 'gpp_good',
    title: 'Safety',
    copy: 'Zero-incident culture is the foundation of our work. We implement rigorous safety protocols that exceed international civil engineering standards for personnel and structural life.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Innovation',
    copy: 'We integrate high-performance materials and sustainable building practices to ensure long-term structural permanence and environmental responsibility.',
  },
]

function About() {
  return (
    <main className="pt-unit-16 bg-background text-on-background font-body-md">
      <PageHero
        copy="For over a decade, Hasif Construction has set the benchmark for structural integrity and architectural precision across the global civil engineering landscape."
        eyebrow="Established 2009"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuC3ND8XVBJdrAfUpQdy-qDBIF6SQugZ6yi8-fYc_bEjURa51hg8hqVD0injWVHgpX_NVYDTMTQiViOJyhoaq-g-V6Vhh-7eYW6qlNCKtzHu1s-xKT6QXzoI9RIVbu5DWAmVbsxdeOmnN9LjlGrRfykaLxWdO3nMGsvHbZYsjnp_SR7BU2gbcUon2JNpWlapui9gxDR4VsyRvLSDjMv_C3z_QoESNfixdQtJz9B70wdGEtPtT6JBubGxB34k5_t7uf0TT46osfkbmCEe"
        title="Engineering Excellence through Precision"
      />

      <section className="section-reveal reveal-left py-unit-16 bg-surface-container-lowest perspective-grid">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8">
          <div className="mb-unit-12">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-unit-2">
              Core Principles
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-6">
            {principles.map((principle) => (
              <article
                className="bg-white border border-outline-variant p-unit-8 group hover:border-primary transition-colors"
                key={principle.title}
              >
                <div className="bg-primary text-on-primary w-12 h-12 flex items-center justify-center mb-unit-6">
                  <MaterialIcon name={principle.icon} />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-unit-4 uppercase">
                  {principle.title}
                </h3>
                <p className="text-secondary font-body-md text-body-md">{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal reveal-right py-unit-16 bg-primary overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-unit-12 gap-unit-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary uppercase mb-unit-2">
                Executive Leadership
              </h2>
              <div className="h-1 w-24 bg-on-primary"></div>
            </div>
            <p className="text-primary-fixed-dim font-body-md text-body-md max-w-md italic">
              "Reliability is not an accident; it is the result of high intention and sincere
              effort."
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-unit-6">
            {leaders.map((leader) => (
              <article className="group" key={leader.name}>
                <div className="aspect-[3/4] overflow-hidden mb-unit-4 border border-on-primary/20 relative">
                  <img
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    src={leader.image}
                  />
                  <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="font-label-bold text-label-bold text-on-primary uppercase tracking-widest">
                  {leader.name}
                </h4>
                <p className="text-primary-fixed-dim text-label-sm font-label-sm uppercase">
                  {leader.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal reveal-up py-unit-12 bg-white border-y border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-unit-8 text-center">
            {[
              ['450+', 'Projects Delivered'],
              ['15+', 'Global Markets'],
              ['0', 'Safety Incidents'],
              ['14', 'Years of Precision'],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-headline-xl text-headline-xl text-primary">{value}</div>
                <div className="font-label-bold text-label-bold text-secondary uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal reveal-zoom py-unit-16 bg-surface-container-high">
        <div className="max-w-[1200px] mx-auto px-unit-4 md:px-unit-8 text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-unit-6">
            Ready to Build the Future?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-unit-8">
            Partner with Hasif Construction for civil engineering solutions that stand the test of
            time. Precision is not just our standard; it is our permanence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-unit-4">
            <Link
              className="bg-primary text-on-primary font-label-bold text-label-bold px-unit-12 py-unit-4 uppercase hover:opacity-90 transition-all"
              to="/get-a-quote"
            >
              Consult Our Team
            </Link>
            <Link
              className="bg-transparent border-2 border-primary text-primary font-label-bold text-label-bold px-unit-12 py-unit-4 uppercase hover:bg-primary/5 transition-all"
              to="/portfolio"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
