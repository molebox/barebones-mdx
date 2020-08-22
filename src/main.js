import React from 'react'
import {render} from 'react-dom'
import {MDXProvider} from '@mdx-js/react'
import { MdxEmbedProvider } from '@pauliescanlon/gatsby-mdx-embed';
import { ThemeProvider, Box, Flex } from 'theme-ui';
import theme from './theme';

import Content from './content.mdx'
// import Box from './components/box';
// import Flex from './components/flex';

const components = {
  h1: props => <h1 style={{color: 'tomato'}} {...props} />,
  Box,
  Flex
}

render(
  <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <MdxEmbedProvider>
            <Content />
        </MdxEmbedProvider>
      </ThemeProvider>
  </MDXProvider>,
  document.querySelector('#demo')
)