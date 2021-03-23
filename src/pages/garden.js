import React,{useState} from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {graphql, Link } from "gatsby";
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const HeaderContainer =  styled.div`
  padding:4% 4% 0 4%;
  width:100%;
  p{
    width:50%;
    margin-top:${tokens.space[5]};
  }
  @media only screen and (max-width: 768px) {
       p{
        width:80%;
       }
    }
    @media only screen and (max-width: 576px) {
      p{
       width:100%;
      }
   }
`;

const GardenContainer =  styled.div`
  padding:4%;
  display:flex;
  flex-wrap:wrap;
  div{
    margin:${tokens.space[4]};
  }
  @media only screen and (max-width: 576px) {
    a{
      width:100%;
      div{
        width:100%;
        margin:${tokens.space[4]} 0;
      }
    }
}
`;

const GardenCard =  styled.div`
  height:130px;
  width:300px;
  background-color:#FCFBFE;
  display:flex;
  justify-content:space-between;
  // align-items:center;
  flex-direction:column;
  font-weight:${tokens.fontWeights.semibold};

  padding:${tokens.space[2]};
  border-radius: 2px;
  color:${tokens.colors.primary[1]};
  box-shadow: 0 0 2px rgba(33,33,33,.2);
  border-bottom:0;
  transition: all .4s ease-in-out;
  &:hover{
      box-shadow: 0 0 6px rgba(33,33,33,.2); 
      border-bottom: 1px solid ${tokens.colors.primary[0]};
  }

  .footer_notes{
    font-size:${tokens.fontSizes[2]};
    font-weight:${tokens.fontWeights.medium};
    display:flex;
    justify-content:space-between;
    .level{
      color:${tokens.colors.tertiary[1]}
    }
  }
`;

const FilterSection =  styled.div`
  padding:2% 4% 0 4%;
  span{
    margin:0 ${tokens.space[2]};
    cursor:pointer;
  }
`;

const DigitalGardenPage = ({
  data : { gardenQuery}
}) => {
  const [gardenNotes, setgardenNotes] = useState(gardenQuery.edges || []);

  const growthStage = tokens.terms.garden;

  const handleStateFilter = (key) => {
    const filteredCards = gardenQuery.edges.filter(card=>{
      return card.node.frontmatter.growthStage === key
    });

    setgardenNotes(filteredCards);
  };

  return(
  <Layout>
    <SEO title="Digital Garden" />
      <HeaderContainer>
        <h1>Digital Garden</h1>
        <p>A personal internet space containing my personal wiki of some loosly knit thoughts, ideas, learnings, and work. </p>
      </HeaderContainer>
      <FilterSection>
        {
          Object.entries(growthStage).map(([key,value],k)=>(
            <span role="button" tabIndex="0" onClick={()=>handleStateFilter(key)} onKeyDown={()=>handleStateFilter(key)}>{value.label}</span>
          ))
        }
      </FilterSection>
      <GardenContainer>
        {
          gardenNotes.map(item=>(
            <Link to={item.node.frontmatter.slug}>
              <GardenCard>
                <div>{item.node.frontmatter.title}</div>
                <div className="footer_notes">
                  <span>{item.node.frontmatter.date}</span>
                  <span className="level">{growthStage[item.node.frontmatter.growthStage].label} {growthStage[item.node.frontmatter.growthStage].icon}</span>
                </div>
              </GardenCard>
            </Link>
          ))
        }
      </GardenContainer>
  </Layout>
)};

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
            date(formatString: "MMM DD, YYYY")
            slug
            growthStage
          }
        }
      }
    }
  }
`