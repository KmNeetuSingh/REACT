import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { Box, Button, Input, Stack, useToast } from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const toast = useToast();

  useEffect(() => {
    document.getElementById('email').focus();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login', {
        email,
        password
      });

      const token = response.data.token;
      login(token, email);
       window.location.href = '/home'; 
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: 'Invalid email or password. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <Stack spacing={3}>
        <Input
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleLogin}>Login</Button>
      </Stack>
    </Box>
  );
};

export default LoginPage;
