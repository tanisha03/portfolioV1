import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import Header from "./Header/index.js";
import Footer from "./Footer";
import "./index.css";
import {tokens} from "../../config/themes"

const Container = styled.div`
    font-family:${tokens.font.primary};
    a{
      text-decoration:none;
      color:${tokens.colors.tertiary[0]}
    }
    width:100%;
    min-height:70vh;
`;


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
          <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;