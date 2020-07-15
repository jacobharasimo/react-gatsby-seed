import React from "react"
import { Text } from 'rebass';
import { AnchorLink } from '../../components/link';

import { Layout } from "../../components/layout"

const SecondPage = () => (
  <Layout>
    <Text as="h1" my={2}>Hi from the second page</Text>
    <Text as="p" mb={1}>Welcome to page 2</Text>
    <AnchorLink to="/">Go back to the homepage</AnchorLink>
  </Layout>
)

export default SecondPage
