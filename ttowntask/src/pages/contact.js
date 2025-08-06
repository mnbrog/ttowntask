import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)
  return (
    <Layout>
      <section className="py-16">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center mb-8">
          Call us at{" "}
          <a href="tel:2056577554" className="text-indigo-600">
            205-657-7554
          </a>{" "}
          or send a message below.
        </p>
        {submitted ? (
          <p className="text-center text-green-600">
            Thank you! We will be in touch soon.
          </p>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={() => setSubmitted(true)}
            className="max-w-xl mx-auto space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="service" className="block mb-1">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                className="w-full border rounded p-2"
              >
                <option>Move-In/Move-Out Help</option>
                <option>Cleaning</option>
                <option>Furniture Assembly/Wall Hanging</option>
                <option>Junk Removal</option>
                <option>Grass Cutting</option>
                <option>Errand Running</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border rounded p-2"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded"
              >
                Send
              </button>
            </div>
          </form>
        )}
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
