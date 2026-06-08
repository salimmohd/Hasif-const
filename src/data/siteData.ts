export const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDETrv_QEDgtCH7eNVwDIMatbI-W0SAXd50JXN0F-wTjkbimpQRE31wE4tOTETlESmwTsTA27KNcvAhqpQs6Z9F6tq0CGf0-yGFjI26w7KaOVfIaGe-jRKMsq9lvSEyx1lNK8Wy59ca_VY8L2oC0XnmjK2XrM9y6vAtLcrl1WdLm85b2cASCDCjPxCE6NXryJdVTzE_akNhBjyWSrn2vg4LQPMsJaHUwpjLwl-OQ2B5U4rbi3gtsTT2WGgROqaKKHj3rB-0wy_w4Zus'

export const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'SERVICES', path: '/services' },
  { label: 'PORTFOLIO', path: '/portfolio' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACT', path: '/contact' },
]

export const services = [
  {
    icon: 'architecture',
    title: 'Civil Engineering',
    description:
      'Infrastructure development including roadworks, drainage systems, and structural foundations for industrial applications with exacting standards.',
  },
  {
    icon: 'home_work',
    title: 'Residential',
    description:
      'Bespoke residential complexes and luxury housing projects built with premium materials and sustainable architectural practices.',
  },
  {
    icon: 'corporate_fare',
    title: 'Commercial',
    description:
      'High-rise office buildings, shopping centers, and mixed-use developments engineered for modern efficiency and urban longevity.',
  },
]

export const projects = [
  {
    category: 'COMMERCIAL',
    title: 'The Apex Terminal',
    description:
      'A multi-modal transport hub featuring 45,000 sq ft of innovative structural design and glass-facade engineering.',
    budget: '$120M',
    location: 'Dubai, UAE',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWniooOSZQlr4E0hFeTXiJSTDz74GWjhNolF5tpDSta4TMFPJ9CM91HItPUPcYzKd34DsQbRYod_kgi6JuHfiFyCA4Yod0mhyk7YAws90dqCQf4e0j6My0lWFvZFQptYQ3S1dReE8ktwGE5nakO2zAAP_042UBIh2KgCoL7kZgNh4J4-_E2QM0bcvRts5Be3JfeeVdeRBbmw7rU1Vnbytmyu_ZZJl0eLseGvN0UTOXhabq2DHx8Jp1tkmxEsj84lJgbjvre--BexeZ',
    alt: 'A wide-angle shot of a newly completed modern airport terminal with complex geometric steel roofing and vast glass walls.',
  },
  {
    category: 'CIVIL',
    title: 'Riverstone Bridge',
    description:
      'Precision-engineered suspension bridge spanning 1.2km of difficult terrain using reinforced concrete techniques.',
    budget: '$85M',
    location: 'London, UK',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAwGjXs5JTKLPLJhqpTm44s9DevVzbge1KiZsRVjDRsnA7R0Enk-EpBzVv5w9FvwE7oyRRpP0e2LI2XVBZUS7agy6rbPPNdsKHAnm4AsjLeOZ6vYOesk_1T0VD3Hlq2HS-itERRzKzjEpG_UHSvyqjNxLvawIuVl476YEpZxUVEe6UXhWqNOuaGQqjO-lnuPW8Qpvz5tLAyCK_56cigBjR5Zp52htGQrJ519py2UWH0b93lzooB-_ZkhpF7htU75DBM0a7KZTM190_',
    alt: 'A massive highway bridge under construction, showing reinforced concrete pillars and heavy machinery.',
  },
]

export const resourcePages: Record<string, { eyebrow: string; title: string; copy: string }> = {
  '/privacy-policy': {
    eyebrow: 'Privacy Policy',
    title: 'Clear standards for project and client information.',
    copy: 'This page can hold the full policy for how Hasif Construction stores, reviews, and protects project information.',
  },
  '/safety-standards': {
    eyebrow: 'Safety Standards',
    title: 'Site discipline begins before work starts.',
    copy: 'Safety documentation, compliance references, and field procedures can be collected here.',
  },
  '/project-portal': {
    eyebrow: 'Project Portal',
    title: 'A dedicated entry point for active builds.',
    copy: 'Portal access, project updates, and document workflows can be connected to this route.',
  },
  '/careers': {
    eyebrow: 'Careers',
    title: 'Build serious work with serious people.',
    copy: 'Open roles, field teams, and engineering opportunities can be published here.',
  },
  '/terms': {
    eyebrow: 'Terms',
    title: 'Terms for working with Hasif Construction.',
    copy: 'Commercial terms, site terms, and legal references can be expanded on this page.',
  },
  '/cookies': {
    eyebrow: 'Cookies',
    title: 'Cookie preferences and site notices.',
    copy: 'Cookie disclosures and privacy settings can be managed here.',
  },
}
