import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi',
});

export const getProducts = () => api.get('/get-products');

export const getProductById = (id) => api.get(`/get-products/${id}`);

export default api;
