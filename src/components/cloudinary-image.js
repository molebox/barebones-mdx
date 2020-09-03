import React from "react";
import { useImage } from "use-cloudinary";
import { Image, Text, Box, Flex } from "@chakra-ui/core";

/**
 * Lazy loaded image from a Cloudinary account
 * @param {String} publicId of the image
 * @param {Object} transformations to be applied to the image
 * @param {String} boxSize of the image, The width and height value
 * @param {String} borderRadius of the image. Is optional
 * @param {String} cloudName of the cloudinary account
 * @param {String} alt text of the image
 * @example
 *   <LazyImage
      publicId={image.public_id}
      boxSize={150}
      borderRadius={5}
      transformations={{ height: 0.2, border: '2px_solid_black' }}
      cloudName="my-cloud-images"
      alt="A lazy image"
      />
 */
function CloudinaryImage({
  publicId,
  transformations,
  boxSize,
  borderRadius,
  cloudName,
  alt,
  secure_url,
}) {
  const { generateUrl, isLoading, isError, error } = useImage({
    cloudName,
  });
  React.useEffect(() => {
    generateUrl({
      publicId,
      transformations: {
        boxSize,
        boxSize,
        ...transformations,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading)
    return (
      <Box w={boxSize} h={boxSize} align="center" justify="center">
        <Text>Loading...</Text>
      </Box>
    );
  if (isError)
    return (
      <Box w={boxSize} h={boxSize} align="center" justify="center">
        <Text>{error.message}</Text>
      </Box>
    );
  if (url !== undefined) {
    return (
      <Image
        src={secure_url}
        boxSize={boxSize}
        borderRadius={borderRadius}
        alt={alt}
        fallbackSrc={`https://via.placeholder.com/${boxSize}`}
      />
    );
  }
  return (
    <Flex
      h={boxSize}
      w={boxSize}
      bg="brand.background"
      align="center"
      justify="center"
      boxShadow="-3px 3px 0px 1px hsla(0, 0%, 0%, 0.28)"
    ></Flex>
  );
}

export default CloudinaryImage;
