import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServiceCard from "../components/service-card"
import { services } from "../data/services"

const IndexPage = () => {
  return (
    <Layout>
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">
          No Job Too Small, We Do It All.
        </h1>
        <Link
          to="/schedule"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg"
        >
          Book Now
        </Link>
      </section>
      <section className="py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="text-indigo-600 underline">
            View All Services
          </Link>
        </div>
      </section>
      <section className="py-16 bg-indigo-50">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-lg text-center">
          <li>Reliable and trustworthy team</li>
          <li>Flexible scheduling to fit your needs</li>
          <li>Transparent pricing with no surprises</li>
        </ul>
      </section>
      <section className="bg-indigo-600 text-white py-12 text-center">
        <p className="text-xl mb-4">Ready to get started?</p>
        <Link
          to="/schedule"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold"
        >
          Book Now
        </Link>
      </section>
    </Layout>
  )
}

export const Head = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "T Town Task",
    telephone: "205-657-7554",
    url: "https://ttowntask.com",
  }
  return <Seo title="Home" schema={schema} />
}

export default IndexPage
