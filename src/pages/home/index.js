import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from 'rebass';

import { Layout } from "../../components/layout"
import { Image } from "../../components/image"

const IndexPage = () => (
  <Layout>
    <Flex flexDirection="column" flexWrap="nowrap">
      <Box variant="container">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Box>
      <Box variant="container" mb="1.45rem">
        <Image width="300px"/>
      </Box>
      <Box variant="container">
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
