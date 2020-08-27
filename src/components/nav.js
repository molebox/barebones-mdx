import React from "react";
import { Flex, Link, Heading, Spacer } from "@chakra-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";

const Nav = () => {
  return (
    <Flex as="header" m="0 auto" p={2} w="100%" maxW="1440px">
      <Heading fontWeight="light">Barebones-MDX</Heading>
      <Spacer />
      <Flex as="nav" justify="space-evenly">
        <Link as={ReactRouterLink} to="/" p={5}>
          Home
        </Link>
        <Link as={ReactRouterLink} to="page-two" p={5}>
          Page Two
        </Link>
      </Flex>
    </Flex>
  );
};

export default Nav;
