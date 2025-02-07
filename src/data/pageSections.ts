import { PageSection } from '@/types'

const pageSections: PageSection[] = [
  {
    id: 'home',
    heading: 'Lead Generation Specialist for Online Businesses',
    description:
      'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
    buttonLabel: 'Get Started',
    img: {
      src: '/hero.svg',
      width: 510,
      height: 375,
    },
  },
  {
    id: 'onboarding',
    heading: 'Extremely quick onboarding process',
    description:
      "Once you've joined, our team of specialists will reach out to you and get you set up in minutes.",
    buttonLabel: 'Learn More',
    img: {
      src: '/graph.svg',
      width: 510,
      height: 387,
    },
  },
  {
    id: 'services',
    heading: 'All your data is stored on our secure server',
    description:
      'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
    buttonLabel: 'Sign Up',
    img: {
      src: '/vault.svg',
      width: 510,
      height: 295,
    },
  },
]

export default pageSections
