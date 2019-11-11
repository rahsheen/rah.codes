import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-info is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">R. Anthony Porter</h1>
          <h2 className="subtitle">Fullstack Developer</h2>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1 className="title">About</h1>
        <p>
          Fullstack developer that hasn't reached his final form yet.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
