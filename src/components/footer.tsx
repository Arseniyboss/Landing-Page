import Link from 'next/link'
import footerSections from '@/data/footerSections'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="mt-8 lg:mt-28">
      <section className="grid grid-cols-2 justify-center gap-8 px-8 md:flex md:gap-x-16">
        {footerSections.map((section) => (
          <article key={section.title}>
            <h2 className="text-xl md:text-2xl font-bold">{section.title}</h2>
            <ul className="space-y-1 mt-4">
              {section.links.map((link, index) => (
                <li key={index}>
                  <Link href="/">{link}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <p className="text-center py-12">Copyright © {currentYear} Ultra</p>
    </footer>
  )
}

export default Footer
