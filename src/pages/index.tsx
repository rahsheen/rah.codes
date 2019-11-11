import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./mystyles.scss"

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
          Web developer with more than 4 years of well-rounded experience with a
          degree in the field of Computer Science, extensive knowledge of modern
          Web techniques and love for Coffee. Looking for an opportunity to work
          and upgrade, as well as being involved in an organization that
          believes in gaining a competitive edge and giving back to the
          community.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
