import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {graphql } from "gatsby";
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const MainWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const DrawingsWrapper = styled.div`
  margin:4% 0;
  display:flex;
  justify-content:space-between;
  background-color:${tokens.colors.secondary[1]};
  width:60%;
//   @media only screen and (max-width: 576px) {
//     div{
//      width:100%;
//      img{
//        width:100%;
//      }
//     }
//  }
`;

const DescriptionSection = styled.div`
  padding:8% 6%;
  h2{
    margin-bottom:${tokens.space[6]};
  }
`;

const CodeDrawingsPage = ({
  data : { site, drawingsQuery}
}) => (
  <Layout>
    <SEO title="Code Drawings" />
    <center>
      <h1>Code Drawings</h1>
    </center>
    <MainWrapper>
      {
        drawingsQuery.edges.map(item=>(
          <DrawingsWrapper>
            <DescriptionSection>
              <h2>{item.node.frontmatter.title}</h2>
              <p>{item.node.frontmatter.desc}</p>
              <a href={item.node.frontmatter.cover.childImageSharp.fluid.src}>View</a>
            </DescriptionSection>
            <img src={item.node.frontmatter.cover.childImageSharp.fluid.src} alt={item.node.frontmatter.title}/>
          </DrawingsWrapper>
        ))
      }
    </MainWrapper>
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
            desc
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