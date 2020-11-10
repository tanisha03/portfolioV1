import React from "react";
// import { graphql } from 'gatsby'


import Layout from "../components/Layout";
// import Image from "../components/image";
import { useStaticQuery, graphql } from "gatsby";
import Hero from "../components/Hero"
import SEO from "../components/SEO";
import SectionPartition from "../components/SectionPartition";

const IndexPage = ({
  data : { site, booksQuery}
}) => {
  // const posts = useStaticQuery(
  //   graphql`
  //     query {
  //       allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
  //         nodes {
  //           frontmatter {
  //             title
  //             date
  //             path
  //           }
  //           excerpt
  //         }
  //       }
  //     }
  //   `
  // );
  return (
    <Layout>
      <SEO title="Blog" />
      {/* {posts.allMdx.nodes.map(p => (
        <Post
          title={p.frontmatter.title}
          path={p.frontmatter.path}
          date={p.frontmatter.date}
          description={p.excerpt}
        />
      ))} */}
      <Hero />
      {/* <h1>Tanisha Sabherwal</h1> */}
      <div>
        <SectionPartition 
          header="Digital Garden"
          description="A Software Engineer who talks about development, 
          design, products and everything at its intersection."
          linkLabel="Visit the Garden"
          >
            <div>
              <div>
              {
                booksQuery && booksQuery.edges.map(i=>(
                  <>
                  {/* <p>{i.node.frontmatter.cover.childImageSharp.fluid.src}</p> */}
                  <img src={i.node.frontmatter.cover.childImageSharp.fluid.src}/>
                  {/* <p>{i.node.id}</p> */}
                  </>
                ))
              }
              </div>
              {/* <a href="#">Visit the Garden</a> */}
            </div>
          </SectionPartition>
        <h2>Garden</h2>
        <div>
            {
              booksQuery && booksQuery.edges.map(i=>(
                <p>{i.node.id}</p>
              ))
            }
        </div>
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
    booksQuery: allMdx(filter: {frontmatter: {type: {eq: "book"}}}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            cover {
              childImageSharp {
                fluid(maxWidth: 160, maxHeight:250) {
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