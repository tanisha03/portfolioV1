import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {Heading} from "./shared"

const GardenPage = ({children,pageContext}) => {
  return(
    <Layout>
      <SEO title="Garden" />
      <div style={{padding:"4% 10%"}}>
        <Heading>
          <h1>{pageContext?.frontmatter?.title}</h1>
          <div className="header-wrapper">
            <p>Updated on {new Date(pageContext?.frontmatter?.date).toString().slice(4,15)}</p>
            <div>{pageContext?.frontmatter?.topics.map(topic=>(
              <span>{topic}</span>
            ))}
            </div>
          </div>
        </Heading>
        {children}
      </div>
    </Layout>
)};

export default GardenPage