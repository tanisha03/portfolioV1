import React from "react";
import Layout from "../components/Layout";
import {graphql, Link } from "gatsby";
import Hero from "../components/Hero"
import SEO from "../components/SEO";
import SectionPartition from "../components/SectionPartition";
import styled from 'styled-components';
import {tokens} from "../../config/themes"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const GardenWrapper =  styled.div`
  display:flex;
  flex-direction:column;
  width:70%;
  @media only screen and (max-width: 768px) {
    width:80%;
  }
  @media only screen and (max-width: 576px) {
    margin-bottom:${tokens.space[4]};
    width:100%;
  }
`;

const GardenCard =  styled.div`
  height:60px;
  width:100%;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:${tokens.space[1]};
  padding:${tokens.space[2]};
  font-size:${tokens.fontSizes[3]};
  border-radius: ${tokens.space[2]};
  box-shadow: 0 0 2px rgba(33,33,33,.2);
  transition: box-shadow .5s ease-in-out;
  .date{
    font-size:${tokens.fontSizes[2]};
    color:${tokens.colors.primary[1]};
  }
  &:hover{
      box-shadow: 0 0 10px rgba(33,33,33,.2); 
  }
  @media only screen and (max-width: 576px) {
    padding:${tokens.space[2]};
    .date{
      display:none;
    }
  }
`;


const IndexPage = ({
  data : { site, booksQuery, gardenQuery,drawingsQuery}
}) => {
  return (
    <Layout>
      <SEO 
      title="Hi👋"
      />
      <Hero />
      <div>
        
    {/* Digital Garden  */}
      <SectionPartition 
          header="Digital Garden"
          description="Loosely knit notes in and around everything that is processed in my mind. Some are as fresh as a sapling, while others are being tendered into flowers but some remain to be forever blooming and evergreen. "
          linkLabel="Visit the Garden"
          link="/garden"
          direction="row"
          >
            {/* <div> */}
              <GardenWrapper>
              {
                gardenQuery && gardenQuery.edges.map(i=>(
                  <Link to={i.node.frontmatter.slug}>
                      <GardenCard>
                        <span>{i.node.frontmatter.title}</span>
                        <span className="date">{i.node.frontmatter.date}</span> 
                      </GardenCard>
                  </Link>
                ))
              }
              </GardenWrapper>
            {/* </div> */}
        </SectionPartition>

      {/* Code Draw */}
      <SectionPartition 
          header="Code Drawings"
          description="Explaining code and concepts with figures and pictorial metaphors. An attempt to gratify the visual learner within us by expressing shapes into anything and everything."
          linkLabel="Explore Drawings"
          link="/drawings"
          >
            <div>
              <div>
              {
                drawingsQuery && drawingsQuery.edges.map(i=>(
                  <Link to={i.node.frontmatter.slug}>
                       <GatsbyImage image={getImage(i.node.frontmatter.cover)} alt={i.node.frontmatter.title}/>
                      {/* <img src={i.node.frontmatter.cover.childImageSharp.fluid} alt={i.node.frontmatter.title}/> */}
                  </Link>
                ))
              }
              </div>
            </div>
        </SectionPartition>
        

      {/* Book Shelf */}
        <SectionPartition 
          header="Book Shelf"
          description="My virtual study containing all the books that helped me give a new perspective. Some are half read, some fully yet all of them gave me something to ponder upon."
          linkLabel="Browse the Book shelf"
          link="/books"
          >
            <div>
              <div>
              {
                booksQuery && booksQuery.edges.map(i=>(
                  <Link to={i.node.frontmatter.content ? i.node.frontmatter.content : i.node.frontmatter.link}>
                      <GatsbyImage image={getImage(i.node.frontmatter.cover)} alt={i.node.frontmatter.title}/>
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
            content 
            link
            cover {
              childImageSharp {
                gatsbyImageData(
                  width: 250
                  height:358
                )
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
                gatsbyImageData(
                  width: 250
                  height:358
                )
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
            date(formatString: "MMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
  
`