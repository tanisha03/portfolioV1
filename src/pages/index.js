import React from "react";

import Layout from "../components/Layout";
// import Image from "../components/image";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/SEO";

const IndexPage = () => {
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
    </Layout>
  );
};

export default IndexPage;