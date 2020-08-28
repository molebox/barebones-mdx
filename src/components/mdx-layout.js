import React from "react";
import { Container, Box } from "@chakra-ui/core";

/**
 * The base layout for the MDX pages. You can configure this to set how your pages layout should be.
 */
const MDXLayout = ({ children }) => {
  return <Box>{children}</Box>;
};

export default MDXLayout;
