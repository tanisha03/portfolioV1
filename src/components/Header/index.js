import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import {LINKS} from "./constant";
import styled from 'styled-components';

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display:flex;
  list-style:none;
  li{
    text-decoration:none;
  }
`;

const Header = ({ siteTitle }) => (
  <NavHeader>
      <span className="site-title"> {"T"} </span>
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