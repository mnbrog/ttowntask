import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServiceCard from "../components/service-card"
import { services } from "../data/services"

const ServicesPage = () => (
  <Layout>
    <section className="py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Services" />

export default ServicesPage
