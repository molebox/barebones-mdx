import React from 'react';
import { Flex, Link } from '@chakra-ui/core';
import {
    Link as ReactRouterLink,
  } from "react-router-dom";

const Nav = () => {

    return (
        <Flex as="header">
            <Flex as="nav" justify="space-evenly">
            <Link as={ReactRouterLink} to="/" p={5}>
               Home
             </Link>
             <Link as={ReactRouterLink} to="page-two" p={5}>
              Page Two
             </Link>
            </Flex>
        </Flex>
    )
}

export default Nav;