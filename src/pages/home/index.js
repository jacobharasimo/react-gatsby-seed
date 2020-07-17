import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { Layout } from '../../components/layout';
import { AnchorLink } from '../../components/link';
import { Image } from 'rebass';
import imageSource from '../../images/gatsby-astronaut.png';

const IndexPage = () => (
  <Layout>
    <Flex flexDirection="column" flexWrap="nowrap">
      <Box variant="container">
        <Text as="h1" my={2}>Hi people</Text>
        <Text as="p" mb={1}>Welcome to your new Gatsby site.</Text>
        <Text as="p" mb={1}>Now go build something great.</Text>
      </Box>
      <Box variant="container" mb="1.45rem">
        <Image src={imageSource} width={300}/>
      </Box>
      <Box variant="container">
        <AnchorLink  to="/page-2/">Go to page 2</AnchorLink> <br/>
        <AnchorLink to="/using-typescript/">Go to "Using TypeScript"</AnchorLink>
      </Box>
    </Flex>
  </Layout>
);

export default IndexPage;
