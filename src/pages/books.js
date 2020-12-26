import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {graphql, Link } from "gatsby";
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const BooksPage = ({
  data : { site, booksQuery}
}) => (
  <Layout>
    <SEO title="Books" />
    <center>
      <h1>Books</h1>
    </center>
    <div style={{padding:"4%", display:"flex"}}>
      {
        booksQuery.edges.map(item=>(
          <div>
            <img src={item.node.frontmatter.cover.childImageSharp.fluid.src} />
            <div>{item.node.frontmatter.title}</div>
          </div>
        ))
      }
    </div>
  </Layout>
)

export default BooksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    booksQuery: allMdx(filter: {frontmatter: {type: {eq: "book"}}}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 320) {
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