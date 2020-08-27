import React from "react";
import { Flex, Link, Heading, Spacer, CSSReset } from "@chakra-ui/core";
import { Link as ReactRouterLink, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageOne from '../pages/index.mdx';
import PageTwo from '../pages/page-two.mdx';

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

/**
 * The routes for the app. When adding new pages add a new route and a corresponding nav link in the Nav component above. Import the new page and add it to the route.
 */
export const MDXRoutes = () => (
    <Router> 
    <CSSReset />
    <Nav />
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/page-two" element={<PageTwo />} />
    </Routes>
</Router>
)
