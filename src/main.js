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
  ThemeProvider
} from "@chakra-ui/core";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Content from "./pages/index.mdx";
import PageTwo from "./pages/page-two.mdx";
import Nav from './components/nav';

const components = {
  h1: (props) => <Text fontSize="6xl">{props.children}</Text>,
  h2: (props) => <Text fontSize="5xl">{props.children}</Text>,
  h3: (props) => <Text fontSize="4xl">{props.children}</Text>,
  h4: (props) => <Text fontSize="3xl">{props.children}</Text>,
  h5: (props) => <Text fontSize="2xl">{props.children}</Text>,
  h6: (props) => <Text fontSize="xl">{props.children}</Text>,
  p: (props) => <Text>{props.children}</Text>,
  Text,
  Box,
  Flex,
  Heading,
  Grid: (props) => <Grid {...props}>{props.children}</Grid>,
};

render(
  <MDXProvider components={components}>
    <ThemeProvider theme={theme}>
      <MdxEmbedProvider>
        <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/page-two" element={<PageTwo />} />
          </Routes>
        </Router>
      </MdxEmbedProvider>
    </ThemeProvider>
  </MDXProvider>,
  document.querySelector("#root")
);
