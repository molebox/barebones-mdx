## barebones-mdx

[![Netlify Status](https://api.netlify.com/api/v1/badges/93cd2b00-de15-4ac8-861f-8c01ce5c2e9f/deploy-status)](https://app.netlify.com/sites/barebones-mdx/deploys)

A barebones MDX project built with [MDX](https://mdxjs.com/) , [Parcel](https://parceljs.org/), [React Router v6](https://reacttraining.com/blog/react-router-v6-pre/) and [Chakra-ui](https://chakra-ui.com/)

#### Some info

- The site is bundled and the build placed in the dist folder
- The Chakra components are passed into the MDX files via the MDXProvider, so they do not need to be imported into the MDX files. You can just use them
- Only a small portion of the Chakra components have currently been added, its as easy as importing them from Chakra and adding them to the components object to have them available in the MDX files

Three example pages are in the pages directory. When creating new MDX pages add them to the MDXRoutes component, importing the new page in and passing it to the Route component, along with its path (which is its file name). Remember to add the new route to the nav as a link in the same file.

MDX is a super powerful tool. You can do your data fetching from direct inside one of the MDX pages. Example page-three has an example of how you could do this.