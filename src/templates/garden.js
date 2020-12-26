import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const GardenPage = ({children}) => (
  <Layout>
    <SEO title="Garden" />
    <div style={{padding:"4%"}}>
      {children}
    </div>
  </Layout>
)

export default GardenPage