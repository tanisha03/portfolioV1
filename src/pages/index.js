import React from "react";
import Layout from "../components/Layout";
import {graphql, Link } from "gatsby";
import Hero from "../components/Hero"
import SEO from "../components/SEO";
import SectionPartition from "../components/SectionPartition";
import styled from 'styled-components';
import {tokens} from "../../config/themes"


const GardenCard =  styled.div`
  height:60px;
  width:100%;
  background-color:white;
  display:flex;
  // justify-content:center;
  align-items:center;
  margin-bottom:${tokens.space[1]};
  padding:${tokens.space[2]};
  font-size:${tokens.fontSizes[3]};
  // box-shadow: 1px 1px 2px #1F1B24;
  border-radius: ${tokens.space[2]};
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
          description="Loosely knit notes in and around everything that is processed in my mind."
          linkLabel="Visit the Garden"
          link="/garden"
          direction="row"
          >
            {/* <div> */}
              <div style={{display:"flex", flexDirection:"column", width:"60%"}}>
              {
                gardenQuery && gardenQuery.edges.map(i=>(
                  <Link to={i.node.frontmatter.slug}>
                      <GardenCard>{i.node.frontmatter.title}</GardenCard>
                  </Link>
                ))
              }
              </div>
            {/* </div> */}
        </SectionPartition>

      {/* Book Shelf */}
        <SectionPartition 
          header="Book Shelf"
          description="My virtual study containing all the books that helped me give a new perspective."
          linkLabel="Browse the Book shelf"
          link="/books"
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
          description="Explain code and concepts with figures and pictorial metaphors."
          linkLabel="Explore Code Drawings"
          link="/drawings"
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
                fluid(maxWidth: 160, maxHeight: 230) {
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