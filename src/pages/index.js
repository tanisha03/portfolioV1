import React from "react";
import Layout from "../components/Layout";
import {graphql, Link } from "gatsby";
import Hero from "../components/Hero"
import SEO from "../components/SEO";
import SectionPartition from "../components/SectionPartition";
import styled from 'styled-components';
import {tokens} from "../../config/themes"


const GardenCard =  styled.div`
  height:200px;
  width:160px;
  background-color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 ${tokens.space[4]};
`;


const IndexPage = ({
  data : { site, booksQuery, gardenQuery,drawingsQuery}
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
              <div style={{display:"flex"}}>
              {
                gardenQuery && gardenQuery.edges.map(i=>(
                  <Link to={i.node.frontmatter.slug}>
                      <GardenCard>{i.node.frontmatter.title}</GardenCard>
                  </Link>
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
                  <Link to={i.node.frontmatter.slug}>
                      <img src={i.node.frontmatter.cover.childImageSharp.fluid.src} style={{margin:`0 ${tokens.space[4]}`}}/>
                  </Link>
                ))
              }
              </div>
            </div>
        </SectionPartition>

        {/* Code Draw */}
        <SectionPartition 
          header="Code Drawings"
          description="A Software Engineer who talks about development, 
          design, products and everything at its intersection."
          linkLabel="Explore Code Drawings"
          >
            <div>
              <div>
              {
                drawingsQuery && drawingsQuery.edges.map(i=>(
                  <Link to={i.node.frontmatter.slug}>
                      <img src={i.node.frontmatter.cover.childImageSharp.fluid.src} style={{margin:`0 ${tokens.space[4]}`}}/>
                  </Link>
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
            slug
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
    drawingsQuery: allMdx(filter: {frontmatter: {type: {eq: "drawings"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
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
            slug
          }
        }
      }
    }
  }
  
`