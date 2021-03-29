import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import {graphql } from "gatsby";
import styled from 'styled-components';
import {tokens} from "../../../config/themes"

const MainWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:${tokens.space[6]} 0;
`;


const CodeDrawingsPage = (props) => {
   const imgUrl = props.location.search.slice(1).split('=')[1];
    return(
        <Layout>
            <MainWrapper>
                <img src={imgUrl} style={{width:"70%"}}/>
            </MainWrapper>
        </Layout>
)}

export default CodeDrawingsPage

