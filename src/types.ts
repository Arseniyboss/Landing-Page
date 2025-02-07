export type NavLink = {
  id: number
  label: string
  href: string
}

export type Image = {
  src: string
  width: number
  height: number
}

export type PageSection = {
  id: string
  heading: string
  description: string
  buttonLabel: string
  img: Image
}

export type PricingPlan = {
  id: number
  heading: string
  price: number
  features: string[]
}

export type FooterSection = {
  title: string
  links: string[]
}
