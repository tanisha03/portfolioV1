import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {graphql, Link } from "gatsby";
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const BookWrapper = styled.div`
  padding:4%;
  display:flex;
  flex-wrap:wrap;
  @media only screen and (max-width: 576px) {
    div{
     width:100%;
     img{
       width:100%;
     }
    }
 }
`;

const BookContainer = styled.div`
  margin:${tokens.space[4]};
  img{
    margin-bottom:${tokens.space[4]};
    box-shadow: 0 0 2px rgba(33,33,33,.2);
    transition: box-shadow .5s ease-in-out;
    &:hover{
        box-shadow: 0 0 10px rgba(33,33,33,.2); 
    }
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
    <BookWrapper>
      {
        booksQuery.edges.map(item=>(
          <BookContainer>
            <Link to={item.node.frontmatter.link}><img src={item.node.frontmatter.cover.childImageSharp.fluid.src} alt={item.node.frontmatter.title}/></Link>
            <h2>{item.node.frontmatter.title}</h2>
            <h4>{item.node.frontmatter.author}</h4>
          </BookContainer>
        ))
      }
    </BookWrapper>
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