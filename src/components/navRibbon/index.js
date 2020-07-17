import React from 'react';
import { Box, Button, Flex, Image, Link, Text } from 'rebass';
import { AnchorLink } from '../link';

export const NavRibbon = () => {

  return (
    <Flex bg="lightGrey">
      <Link>
        <Image
          sx={{ height: '100%', width: 'auto' }}
          pr={3}
          pt={0}
          src="https://via.placeholder.com/172x50"
          alt="LOGO"
        />
      </Link>
      <Box sx={{ zIndex: 999999 }} width={1} as="nav">
        <Flex
          alignItems="stretch"
          as="ul"
          alignContent="stretch"
          sx={{ height: '100%' }}>
          <Box as="li" variant="navItem">
            <Button variant="link" as={Link} p={3}>
              Category Link 1
            </Button>
            <Flex as="ul" variant="subNav" flexDirection="column">
              <Box as="li" variant="subNavItem">
                <Text
                  display="block"
                  px={4}
                  py={2}
                  as={Link}
                >
                  Item Link
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box as="li">
            <Button
              p={3}
              variant="link"
              as={AnchorLink}
              to='/secondPage'
            >
              Page 2
            </Button>
          </Box>
          <Box mx="auto" as="li"/>
          <Box as="li">
            <Button
              p={3}
              variant="invertLink"
              fontWeight="bold"
              as={Link}
            >
              Right Link 1
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
