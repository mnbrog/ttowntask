import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <section className="py-16">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
      <p className="max-w-3xl mx-auto text-center mb-12">
        Our mission is to make your life easier by handling the tasks you don’t
        have time for.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Our Team</h2>
          <p>Team introductions coming soon.</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
          <p>“Great service!” – Happy Customer</p>
          <p>“Reliable and fast.” – Another Client</p>
        </div>
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold mb-2">Trusted By</h2>
        <p>Licensed &amp; Insured</p>
        <p>Local Business</p>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
