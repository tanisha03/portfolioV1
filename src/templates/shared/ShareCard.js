import React from "react"
import {Icons} from "../../assets/icon"
import styled from 'styled-components';


const ShareCardWrapper = styled.div`
  display:block;
  width:fit-content;
  margin:0 auto;
  font-size:1.5em;
  padding: 5% 0 0;
  a{
    display:flex;
    align-items:center;
    text-align:center;
    svg{
      margin-left:12px;
    }
  }
`;

const ShareCard = ({link}) => (
  <ShareCardWrapper>
    <a href={link} rel="noreferrer" target="_blank">
      Share on Twitter
      {Icons['share']}
    </a>
  </ShareCardWrapper>
)

export default ShareCard