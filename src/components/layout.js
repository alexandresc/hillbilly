/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Contact from "./contact"
import Gallery from "./gallery"
import Services from "./services"
import Company from "./company"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0 1.0875rem 1.45rem`,
        // }}
        class=""
      >
        <main>{children}</main>

        {/* <footer
          class="mt-8 text-center"
        >
          Hillbilly © {new Date().getFullYear()}, Feito com ❤️ em
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> por {` `}
          <a href="https://github.com/alexandresc">Alexandre</a> 
        </footer> */}
        <Company />
        <Gallery />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
