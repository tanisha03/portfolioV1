import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, {keyframes} from 'styled-components';
import Header from "./Header/index.js";
import Footer from "./Footer";
import "./index.css";
import {tokens} from "../../config/themes"
import Helmet from "react-helmet";
import favicon from "../assets/favicon.ico"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


const Container = styled.div`
    font-family:${tokens.font.primary};
    a{
      text-decoration:none;
      color:${tokens.colors.tertiary[0]}
    }
    width:100%;
    min-height:70vh;
    main{
      width:100%;
    }
`;

const Main =styled.main`
animation: ${fadeIn} 1s linear;
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
      <Helmet>
        <link rel="icon" href={favicon} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-196038948-1"></script>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
          <Main>
            {children}
          </Main>
      </Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;