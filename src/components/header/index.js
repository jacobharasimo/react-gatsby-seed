import { Link } from "gatsby"
import React from "react"
import { Flex, Box } from "rebass"

export const Header = () => (
  <Flex bg="grey" py={2}>
    <Box mx={4} width={1/12}>
      SITE_LOGO
    </Box>
    <Box width={11/12}>
      <Flex>
        <Box px={2}>
          <Link
            to='/'
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            Home
          </Link>
        </Box>
        <Box px={2}>
          <Link
            to='/secondPage'
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            Page 2
          </Link>
        </Box>
      </Flex>
    </Box>
  </Flex>
)
