import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {graphql, Link } from "gatsby";
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const HeaderContainer =  styled.div`
  padding:2% 4% 0;
  p{
    width:50%;
    margin-top:${tokens.space[5]};
  }
`;

const GardenCard =  styled.div`
  height:100px;
  width:250px;
  background-color:#FCFBFE;
  display:flex;
  align-items:center;
  margin:0 ${tokens.space[4]};
  padding:0 ${tokens.space[4]};
  // box-shadow: 0.2px 1.5px 2px #1F1B24;
  // border: 2px solid #F3F1F7;
  border-radius: 2px;
  color:${tokens.colors.primary[0]};
  box-shadow: 0 0 2px rgba(33,33,33,.2);
  border-bottom:0;
  transition: all .8s ease-in-out;
  &:hover{
      box-shadow: 0 0 6px rgba(33,33,33,.2); 
      border-bottom: 1px solid ${tokens.colors.primary[0]};
  }
`;

const DigitalGardenPage = ({
  data : { site, gardenQuery}
}) => (
  <Layout>
    <SEO title="Digital Garden" />
    <HeaderContainer>
      <h1>Digital Garden</h1>
      <p>A personal internet space containing my personal wiki of some loosly knit thoughts, ideas, learnings, and work. </p>
    </HeaderContainer>
    <div style={{padding:"4%", display:"flex"}}>
      {
        gardenQuery.edges.map(item=>(
          <Link to={item.node.frontmatter.slug}>
            <GardenCard>
              {item.node.frontmatter.title}
            </GardenCard>
          </Link>
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