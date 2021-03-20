import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import {LINKS} from "./constant";
import styled from 'styled-components';
import {tokens} from "../../../config/themes"

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding:${tokens.space[8]};
  font-family: ${tokens.font.primary};
  width:100%;

  svg {
    transition:transform 0.2s ease;
    &:hover{
      transform: scale(1.2);
    }
  }

  @media only screen and (max-width: 576px) {
    padding:${tokens.space[2]};
  }
`;

const NavList = styled.ul`
  display:flex;
  list-style:none;
  a{
    text-decoration:none;
    margin: 0 ${tokens.space[4]};
    color:${tokens.colors.primary[1]};
    font-size:${tokens.fontSizes[4]};
    transition:color 0.4s linear;

    .active{
      color:${tokens.colors.tertiary[0]};
    }

    &:hover{
      color:${tokens.colors.tertiary[0]};
    }

    @media only screen and (max-width: 576px) {
      font-size:${tokens.fontSizes[2]};
      margin: 0 ${tokens.space[2]};
    }
  } 
`;

const Header = ({ siteTitle }) => (
  <NavHeader>
      <Link to="/">
        {/* <span style={{color:"#3C3446",fontSize:"48px", fontWeight:"900"}}> {"T"} </span> */}
        <svg width="40" height="40" viewBox="0 0 281 219" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M78.5 211.5V40H18.5L7 5H254L243 40C220.333 36.1667 174.5 32.5 174.5 55.5C174.5 78.5 201.5 88.5 201.5 88.5C201.5 88.5 276 111.5 276 155.479C276 205.639 230.5 218.5 179.5 211.5" stroke="black" stroke-width="10"/>
        </svg>
      </Link>
      <nav>
        <NavList>
          {
            LINKS.map(item=>(
              <li key={item.id}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))
          }
        </NavList>
    </nav>
  </NavHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;