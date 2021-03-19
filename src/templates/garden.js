import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {Heading} from "./shared"
import ShareCard from "./shared/ShareCard"

const GardenPage = ({children,pageContext}) => {
  return(
    <Layout>
      <SEO title="Garden" />
      <div style={{padding:"4% 8%", width:"100%"}}>
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
        {/* <div style={{width:"100%"}}>{children}</div> */}
        {children}
        <ShareCard 
          link={`http://twitter.com/intent/tweet?text=${pageContext?.frontmatter?.title}&url=http://tanishasabherwal.netlify.app${pageContext?.frontmatter?.slug}&via=tanishaaa03`}
        />
      </div>
    </Layout>
)};

export default GardenPage