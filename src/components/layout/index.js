/**
 * Index component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"

import { Header } from "../header"
import { Footer } from "../footer"
import theme from "../../theme"
import { NavRibbon } from '../navRibbon';
import { Seo } from "../seo"
import { TwitterSeo } from "../twitterSeo"
import { ErrorBoundary } from "../errorBoundary"
import GlobalStyle from "../gloablStyle"

export const Layout = ({ children }) => {
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
      <ThemeProvider theme={theme}>
        <Flex flexDirection="column" height="100%">
          <ErrorBoundary>
            <Seo/>
            <TwitterSeo/>
            <Header/>
            <Box as="main" my={3} flex="1 1 auto" sx={{ overflowY: "auto" }} position="relative">
              {children}
            </Box>
            <Footer/>
          </ErrorBoundary>
        </Flex>
        <GlobalStyle />
      </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
