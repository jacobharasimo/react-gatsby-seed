import React from "react"
import { Flex, Box } from "rebass"
import { AnchorLink } from '../link';

export const Header = () => (
  <Flex bg="grey" py={2}>
    <Box mx={4} width={1/12}>
      SITE_LOGO
    </Box>
    <Box width={11/12}>
      <Flex>
        <Box px={2}>
          <AnchorLink
            to='/'
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            Home
          </AnchorLink>
        </Box>
        <Box px={2}>
          <AnchorLink
            to='/secondPage'
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            Page 2
          </AnchorLink>
        </Box>
      </Flex>
    </Box>
  </Flex>
)
