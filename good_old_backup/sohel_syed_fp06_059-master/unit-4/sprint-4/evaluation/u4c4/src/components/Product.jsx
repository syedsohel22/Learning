import React from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

const Product = ({ item }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={item.img} />
      <Text data-cy="product-category">{item.category}</Text>
      <Tag variant="solid" colorScheme="green">
        <TagLabel data-cy="product-brand">{item.brand}</TagLabel>
      </Tag>
      <Heading data-cy="product-details">{item.details}</Heading>
      <Box data-cy="product-price">{item.price}</Box>
    </Stack>
  );
};

export default Product;
