import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SchedulePage = () => (
  <Layout>
    <section className="py-16">
      <h1 className="text-3xl font-bold text-center mb-8">
        Schedule a Service
      </h1>
      <p className="max-w-2xl mx-auto text-center mb-8">
        Select a time on the calendar below to book your appointment. We’ll
        confirm your request shortly.
      </p>
      <div className="relative" style={{ paddingTop: "56.25%" }}>
        <iframe
          src="https://calendly.com/ttowntask/30min?hide_gdpr_banner=1"
          title="Schedule with T Town Task"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Schedule" />

export default SchedulePage
