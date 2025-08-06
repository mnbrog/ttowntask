import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className="bg-gray-100 mt-16">
    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8 text-center md:text-left">
      <div className="flex flex-col items-center md:items-start">
        <StaticImage
          src="../images/ttowntasklogotrans.png"
          alt="T Town Task logo"
          className="h-12 w-auto"
        />
        <p className="mt-4 text-sm">No Job Too Small, We Do It All.</p>
      </div>
      <nav className="space-y-2">
        <Link to="/" className="block hover:underline">
          Home
        </Link>
        <Link to="/services" className="block hover:underline">
          Services
        </Link>
        <Link to="/schedule" className="block hover:underline">
          Schedule
        </Link>
        <Link to="/about" className="block hover:underline">
          About
        </Link>
        <Link to="/contact" className="block hover:underline">
          Contact
        </Link>
      </nav>
      <div className="text-sm">
        <p>
          Phone:{" "}
          <a href="tel:2056577554" className="text-indigo-600">
            205-657-7554
          </a>
        </p>
      </div>
    </div>
    <div className="text-center text-xs py-4 bg-gray-200">
      © {new Date().getFullYear()} T Town Task
    </div>
  </footer>
)

export default Footer
