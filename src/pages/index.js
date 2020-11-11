import React from "react";
import Layout from "../components/Layout";
import {graphql } from "gatsby";
import Hero from "../components/Hero"
import SEO from "../components/SEO";
import SectionPartition from "../components/SectionPartition";

const IndexPage = ({
  data : { site, booksQuery, notesQuery}
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Hero />
      <div>
        
    {/* Digital Garden  */}
      <SectionPartition 
          header="Digital Garden"
          description="A Software Engineer who talks about development, 
          design, products and everything at its intersection."
          linkLabel="Visit the Garden"
          >
            <div>
              <div>
              {
                notesQuery && notesQuery.edges.map(i=>(
                  <p>{i.node.frontmatter.title}</p>
                ))
              }
              </div>
            </div>
        </SectionPartition>

      {/* Book Shelf */}
        <SectionPartition 
          header="Book Shelf"
          description="A Software Engineer who talks about development, 
          design, products and everything at its intersection."
          linkLabel="Browse the Book shelf"
          >
            <div>
              <div>
              {
                booksQuery && booksQuery.edges.map(i=>(
                  <img src={i.node.frontmatter.cover.childImageSharp.fluid.src}/>
                ))
              }
              </div>
            </div>
        </SectionPartition>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    booksQuery: allMdx(filter: {frontmatter: {type: {eq: "book"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            cover {
              childImageSharp {
                fluid(maxWidth: 160, maxHeight: 250) {
                  src
                }
              }
            }
          }
        }
      }
    }
    gardenQuery: allMdx(filter: {frontmatter: {type: {eq: "notes"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
  
`