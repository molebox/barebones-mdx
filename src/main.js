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
  SimpleGrid,
  Stack,
  ChakraProvider,
  Link,
  Image,
} from "@chakra-ui/core";
import theme from "./theme";
import { MDXRoutes } from "./components/mdx-routes";
import MDXLayout from "./components/mdx-layout";
import Emoji from "./components/emoji";
import CloudinaryImage from "./components/cloudinary-image";

const components = {
  wrapper: (props) => <MDXLayout {...props}>{props.children}</MDXLayout>,
  h1: (props) => (
    <Text as="h1" fontSize="6xl" {...props}>
      {props.children}
    </Text>
  ),
  h2: (props) => (
    <Text as="h2" fontSize="5xl" {...props}>
      {props.children}
    </Text>
  ),
  h3: (props) => (
    <Text as="h3" fontSize="4xl" {...props}>
      {props.children}
    </Text>
  ),
  h4: (props) => (
    <Text as="h4" fontSize="3xl" {...props}>
      {props.children}
    </Text>
  ),
  h5: (props) => (
    <Text as="h5" fontSize="2xl" {...props}>
      {props.children}
    </Text>
  ),
  h6: (props) => (
    <Text as="h6" fontSize="xl" {...props}>
      {props.children}
    </Text>
  ),
  p: (props) => <Text {...props}>{props.children}</Text>,
  Text,
  Box,
  Flex,
  Heading,
  Grid: (props) => <Grid {...props}>{props.children}</Grid>,
  Link,
  Image,
  SimpleGrid,
  Stack,
  Emoji,
  CloudinaryImage: props => <CloudinaryImage {...props}/>,
};

const App = () => {

  return (
    <MDXProvider components={components}>
      <MDXProvider>
    <ChakraProvider theme={theme}>
      <MdxEmbedProvider>
        <MDXRoutes />
      </MdxEmbedProvider>
    </ChakraProvider>
    </MDXProvider>
  </MDXProvider>
  )
}

render(
  <App/>,
  document.querySelector("#root")
);
