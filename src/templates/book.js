import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BooksPage = ({children}) => (
  <Layout>
    <SEO title="Books" />
    <div style={{padding:"4%"}}>
      {children}
    </div>
  </Layout>
)

export default BooksPage