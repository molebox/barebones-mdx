import React from "react";
import { render } from "react-dom";
import { MDXProvider } from "@mdx-js/react";
import { MdxEmbedProvider } from "@pauliescanlon/gatsby-mdx-embed";
import { ThemeProvider, Box, Flex } from "theme-ui";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Content from "./content.mdx";
import PageTwo from "./page-two.mdx";

const components = {
  // h1: props => <h1 style={{color: 'tomato'}} {...props} />,
  Box,
  Flex,
};

render(
  <MDXProvider components={components}>
    <ThemeProvider theme={theme}>
      <MdxEmbedProvider>
        <Router>
          <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
              Home
            </Link>
            <Link to="/page-two" style={{ padding: 5 }}>
              Page Two
            </Link>
          </nav>
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
