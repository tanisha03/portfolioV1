import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header/index.js";
import Footer from "./Footer";
import "./index.css";

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
      <div className="main-area">
        <div
          style={{
            // margin: `0 48px`,
            // width: '1080px',
            // padding: `0 1.0875rem 1.45rem`,
            fontFamily: 'Montserrat'
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;