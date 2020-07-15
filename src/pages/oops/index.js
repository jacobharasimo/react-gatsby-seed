import React from "react"
import { Text } from 'rebass';

import { Layout } from "../../components/layout"

export const Oops = () => (
  <Layout>
    <Text as="h1">NOT FOUND</Text>
    <Text as="p">You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
)
