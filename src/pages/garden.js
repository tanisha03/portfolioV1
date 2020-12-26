import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {graphql, Link } from "gatsby";
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const GardenCard =  styled.div`
  height:100px;
  width:250px;
  background-color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 ${tokens.space[4]};
  border:1px solid black;
`;

const DigitalGardenPage = ({
  data : { site, gardenQuery}
}) => (
  <Layout>
    <SEO title="Digital Garden" />
    <center>
      <h1>Digital Garden</h1>
    </center>
    <div style={{padding:"4%", display:"flex"}}>
      {
        gardenQuery.edges.map(item=>(
          <GardenCard>
            {item.node.frontmatter.title}
          </GardenCard>
        ))
      }
    </div>
  </Layout>
)

export default DigitalGardenPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    gardenQuery: allMdx(filter: {frontmatter: {type: {eq: "notes"}}}, sort: {order: DESC, fields: frontmatter___date}) {
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