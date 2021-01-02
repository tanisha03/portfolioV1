import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {graphql, Link } from "gatsby";
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const BookContainer = styled.div`
  margin:${tokens.space[4]};
  img{
    margin-bottom:${tokens.space[4]};
  }
  h2{
    color:${tokens.colors.primary[0]};
    font-weight:${tokens.fontWeights.medium};
    margin-bottom:${tokens.space[2]};
  }
  h4{
    color:${tokens.colors.primary[1]};
    font-weight:${tokens.fontWeights.light}
  }
`;

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
          <BookContainer>
            <Link to={item.node.frontmatter.link}><img src={item.node.frontmatter.cover.childImageSharp.fluid.src} /></Link>
            <h2>{item.node.frontmatter.title}</h2>
            <h4>{item.node.frontmatter.author}</h4>
          </BookContainer>
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
            author
            link
            cover {
              childImageSharp {
                fluid(maxWidth: 250, maxHeight: 380) {
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