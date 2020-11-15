import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <center>
      <h1>NOT FOUND</h1>
      <p>oopsieee, seems like you lost your way !</p>
    </center>
  </Layout>
)

export default NotFoundPage