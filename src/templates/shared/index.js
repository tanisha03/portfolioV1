import styled from 'styled-components'
import {tokens} from "../../../config/themes"

export const Heading = styled.div`
  padding:3% 0;
  border-bottom:0.5px solid black;
  margin-bottom:2%;
  width:100%;

  h1{
    font-size:${tokens.fontSizes[8]};
    margin-bottom:${tokens.space[2]};
  }

  .header-wrapper{
    display:flex;
    justify-content:space-between;
    width:100%;
    color:${tokens.colors.primary[1]};
    span{
      margin: 0 ${tokens.space[1]};
    }
  }
`;