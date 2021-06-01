import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WrapperContainer from "./shared/WrapperContainer";

const BooksPage = ({children}) => (
  <Layout>
    <SEO title="Books" />
    <WrapperContainer>
      {children}
    </WrapperContainer>
  </Layout>
)

export default BooksPage