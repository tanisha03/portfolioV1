import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const DrawingPage = ({children}) => (
  <Layout>
    <SEO title="Drawing" />
    <div style={{padding:"4%"}}>
      {children}
    </div>
  </Layout>
)

export default DrawingPage