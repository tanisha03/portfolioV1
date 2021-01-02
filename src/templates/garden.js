import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {Heading} from "./shared"

const GardenPage = ({children,pageContext}) => {
  console.log(pageContext);
  return(
    <Layout>
      <SEO title="Garden" />
      <div style={{padding:"4% 10%"}}>
        <Heading>{pageContext?.frontmatter?.title}</Heading>
        {children}
      </div>
    </Layout>
)};

export default GardenPage