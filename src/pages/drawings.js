import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {graphql, Link } from "gatsby";
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const CodeDrawingsPage = ({
  data : { site, drawingsQuery}
}) => (
  <Layout>
    <SEO title="Code Drawings" />
    <center>
      <h1>Code Drawings</h1>
    </center>
    <div style={{padding:"4%", display:"flex"}}>
      {
        drawingsQuery.edges.map(item=>(
          <div>
            <img src={item.node.frontmatter.cover.childImageSharp.fluid.src} />
            <div>{item.node.frontmatter.title}</div>
          </div>
        ))
      }
    </div>
  </Layout>
)

export default CodeDrawingsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    drawingsQuery: allMdx(filter: {frontmatter: {type: {eq: "drawings"}}}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 320, maxHeight: 460) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`