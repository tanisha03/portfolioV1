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
  float:left;
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
  width:280px;
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


const TopicsSection =  styled.div`
padding:2% 4% 0 4%;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
color:${tokens.colors.tertiary[0]};
span{
  margin:0 ${tokens.space[2]};
  padding:${tokens.space[1]} ${tokens.space[2]};
  cursor:pointer;
  &:hover{
    color:${tokens.colors.primary[1]};
  }
  @media only screen and (max-width: 576px) {
    margin:0 ${tokens.space[1]};
    padding:${tokens.space[1]};
    text-align:center;
 }
}
`;

const FilterSection =  styled.div`
  padding:2% 4% 0 4%;
  display:flex;
  justify-content:flex-end;
  span{
    margin:0 ${tokens.space[2]};
    padding:${tokens.space[1]} ${tokens.space[2]};
    border-radius:5px;
    cursor:pointer;
    border:0.5px solid ${tokens.colors.tertiary[3]};
    &:hover{
      background-color:${tokens.colors.tertiary[2]};
      border:0.5px solid ${tokens.colors.tertiary[2]};
    }
    @media only screen and (max-width: 576px) {
      margin:0 ${tokens.space[1]};
      padding:${tokens.space[1]};
      text-align:center;
   }
  }
`;




const extractTopicsFromGardenQuery = (gardenQuery) => {
  let topics=["All"];
  gardenQuery.forEach(note=>{
    note.node.frontmatter.topics.map(topic=>topics.push(topic));
  });
  topics = [...new Set(topics)];
  return topics;
}

const DigitalGardenPage = ({
  data : { gardenQuery}
}) => {
  const [gardenNotes, setGardenNotes] = useState(gardenQuery.edges || []);

  const gardenTopics = extractTopicsFromGardenQuery(gardenQuery.edges);
  const growthStage = tokens.terms.garden;

  const handleStateFilter = (key) => {
    const filteredCards = gardenQuery.edges.filter(card=>{
      return card.node.frontmatter.growthStage === key
    });

    setGardenNotes(filteredCards);
  };

  const handleTopicFilter = (topic) => {

    if(topic==="All") {
      setGardenNotes(gardenQuery.edges);
      return;
    }

    const filteredCards = gardenQuery.edges.filter(card=>{
      return card.node.frontmatter.topics.includes(topic);
    });

    setGardenNotes(filteredCards);
  }

  return(
  <Layout>
    <SEO title="Digital Garden" />
      <HeaderContainer>
        <h1>Digital Garden</h1>
        <p>A personal internet space containing my personal wiki of some loosly knit thoughts, ideas, learnings, and work. Some are as fresh as a sapling, while others are being tendered into flowers but some remain to be forever blooming and evergreen.</p>
      </HeaderContainer>
      <FilterSection>
        {
          Object.entries(growthStage).map(([key,value],k)=>(
            <span role="button" tabIndex="0" key={key} onClick={()=>handleStateFilter(key)} onKeyDown={()=>handleStateFilter(key)}>{value.icon} {value.label}</span>
          ))
        }
      </FilterSection>
      <TopicsSection>
        {
          gardenTopics.map((topic)=>(
            <span role="button" tabIndex="0" key={topic.id} onClick={()=>handleTopicFilter(topic)} onKeyDown={()=>handleTopicFilter(topic)}>{topic}</span>
          ))
        }
      </TopicsSection>
      <GardenContainer>
        {
          gardenNotes.map(item=>(
            <Link to={item.node.frontmatter.slug} key={item.index}>
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
    gardenQuery: allMdx(filter: {frontmatter: {type: {eq: "notes"}, published: {eq: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            slug
            growthStage
            topics
          }
        }
      }
    }
  }
`