import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="max-w-7xl mx-auto px-4">{children}</main>
    <Footer />
  </>
)

export default Layout
