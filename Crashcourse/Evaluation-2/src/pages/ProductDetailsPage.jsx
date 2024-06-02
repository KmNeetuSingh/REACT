import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../utils/api';
import { Box, Button, Text, Spinner, Alert, AlertIcon, useToast, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    setIsDialogOpen(false);
    toast({
      title: 'Item added to cart',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  if (loading) return <Spinner />;
  if (error) return <Alert status="error"><AlertIcon />{error}</Alert>;

  return (
    <Box p={4}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Text fontSize="xl" mb={4}>{product.title}</Text>
        <Text mb={4}>{product.description}</Text>
        <Text mb={4}>Category: {product.category}</Text>
        <Text mb={4}>Price: ${product.price}</Text>
        <Button colorScheme="teal" onClick={() => setIsDialogOpen(true)}>Add to Cart</Button>
        {isDialogOpen && (
          <AlertDialog
            isOpen={isDialogOpen}
            leastDestructiveRef={null}
            onClose={() => setIsDialogOpen(false)}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader>Add to Cart</AlertDialogHeader>
                <AlertDialogBody>
                  Are you sure you want to add this item to cart?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button colorScheme="teal" onClick={handleAddToCart} ml={3}>
                    Confirm
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
