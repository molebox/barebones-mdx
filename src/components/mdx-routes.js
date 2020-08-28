import React from "react";
import { Flex, Link, Heading, Spacer, Text, CSSReset } from "@chakra-ui/core";
import {
  Link as ReactRouterLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PageOne from "../pages/index.mdx";
import PageTwo from "../pages/page-two.mdx";
import PageThree from "../pages/page-three.mdx";

const Nav = () => (
  <Flex as="header" p={5} align="center" bg="brand.background">
    <Heading
      fontWeight="normal"
      fontSize={["1xl", "4xl", "4xl"]}
      color="brand.accent"
    >
      Barebones-MDX
    </Heading>
    <Spacer />
    <Flex as="nav" align="center" justify="space-evenly" p={5}>
      <Link as={ReactRouterLink} to="/" pr={5}>
        <Text
          fontWeight="600"
          fontSize={["1xl", "3xl", "md"]}
          color="brand.accent"
        >
          Home
        </Text>
      </Link>
      <Link as={ReactRouterLink} to="page-two" pr={5}>
        <Text
          fontWeight="600"
          fontSize={["1xl", "3xl", "md"]}
          color="brand.accent"
        >
          Two
        </Text>
      </Link>
      <Link
        as={ReactRouterLink}
        fontSize={["1xl", "3xl", "md"]}
        to="page-three"
      >
        <Text
          fontWeight="600"
          fontSize={["1xl", "3xl", "md"]}
          color="brand.accent"
        >
          Three
        </Text>
      </Link>
    </Flex>
  </Flex>
);

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
      <Route path="/page-three" element={<PageThree />} />
    </Routes>
  </Router>
);
