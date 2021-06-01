import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WrapperContainer from "./shared/WrapperContainer";


const DrawingPage = ({children}) => (
  <Layout>
    <SEO title="Drawing" />
    <WrapperContainer>
      {children}
    </WrapperContainer>
  </Layout>
)

export default DrawingPage