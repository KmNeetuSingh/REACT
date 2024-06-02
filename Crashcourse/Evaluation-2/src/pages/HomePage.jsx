import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { SimpleGrid, Box, Select, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../utils/api';

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data.data);
        setFilteredProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    if (sortOrder === 'Ascending') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'Descending') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [sortOrder, categoryFilter, products]);

  if (loading) return <Spinner />;
  if (error) return <Alert status="error"><AlertIcon />{error}</Alert>;

  return (
    <Box p={4}>
      <Box mb={4}>
        <Select placeholder="Sort by Price" onChange={(e) => setSortOrder(e.target.value)}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </Select>
        <Select placeholder="Filter by Category" onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="Home Decor">Home Decor</option>
        </Select>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
