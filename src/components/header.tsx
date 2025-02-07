'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import navLinks from '@/data/navLinks'

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }
  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }
  return (
    <header className="header">
      <p className="text-3xl">Ultra</p>
      <button className="absolute right-8 text-3xl md:hidden" onClick={toggleMobileNav}>
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav>
        <ul
          className={`flex gap-7 max-md:mobileNav ${!isMobileNavOpen && 'max-md:hidden'}`}
        >
          {navLinks.map((link) => (
            <li key={link.id} className="text-lg">
              <a href={link.href} onClick={closeMobileNav}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
