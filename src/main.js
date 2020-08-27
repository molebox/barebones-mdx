import React from "react";
import { render } from "react-dom";
import { MDXProvider } from "@mdx-js/react";
import { MdxEmbedProvider } from "@pauliescanlon/gatsby-mdx-embed";
import {
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  ChakraProvider,
  CSSReset,
} from "@chakra-ui/core";
import theme from "./theme";
// import theme from "@chakra-ui/theme"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Content from "./pages/index.mdx";
import PageTwo from "./pages/page-two.mdx";
import Nav from "./components/nav";

const components = {
  h1: (props) => (
    <Box as="h1" fontSize="6xl">
      {props.children}
    </Box>
  ),
  h2: (props) => (
    <Text as="h2" fontSize="5xl">
      {props.children}
    </Text>
  ),
  h3: (props) => (
    <Text as="h3" fontSize="4xl">
      {props.children}
    </Text>
  ),
  h4: (props) => (
    <Text as="h4" fontSize="3xl">
      {props.children}
    </Text>
  ),
  h5: (props) => (
    <Text as="h5" fontSize="2xl">
      {props.children}
    </Text>
  ),
  h6: (props) => (
    <Text as="h6" fontSize="xl">
      {props.children}
    </Text>
  ),
  p: (props) => <Text>{props.children}</Text>,
  Text,
  Box,
  Flex,
  Heading,
  a: (props) => (
    <Text as="h6" fontSize="xl">
      {props.children}
    </Text>
  ),
  Grid: (props) => <Grid {...props}>{props.children}</Grid>,
};

render(
  <MDXProvider components={components}>
    <MdxEmbedProvider>
      <Router>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Nav />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/page-two" element={<PageTwo />} />
          </Routes>
        </ChakraProvider>
      </Router>
    </MdxEmbedProvider>
  </MDXProvider>,
  document.querySelector("#root")
);
