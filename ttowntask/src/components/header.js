import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const Header = () => {
  const [open, setOpen] = useState(false)
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/schedule", label: "Schedule" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ]
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <StaticImage
            src="../images/ttowntasklogotrans.png"
            alt="T Town Task logo"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {links.map(link => (
            <Link key={link.to} to={link.to} className="hover:text-indigo-600">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <nav className="md:hidden px-4 pb-4 space-y-2">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="block border-b py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
