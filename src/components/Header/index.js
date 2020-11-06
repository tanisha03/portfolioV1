import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import {LINKS} from "./constant";
import styled from 'styled-components';

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding:32px;
  font-family: Montserrat;
`;

const NavList = styled.ul`
  display:flex;
  list-style:none;
  a{
    text-decoration:none;
    margin: 0 16px;
    color:#3C3446;
    font-size:18px;
  }
`;

const Header = ({ siteTitle }) => (
  <NavHeader>
      <span style={{color:"#3C3446",fontSize:"48px", fontWeight:"900"}}> {"T"} </span>
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