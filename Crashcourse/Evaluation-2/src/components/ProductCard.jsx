import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Text fontSize="xl" mb={4}>{product.title}</Text>
      <Text mb={4}>Category: {product.category}</Text>
      <Text mb={4}>Price: ${product.price}</Text>
      <Link to={`/products/${product.id}`}>
        <Button colorScheme="teal">More Details</Button>
      </Link>
    </Box>
  );
};

export default ProductCard;
