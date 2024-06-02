import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  const { isAuthenticated, email, logout } = useContext(AuthContext);

  return (
    <Box bg="teal.500" p={4}>
      <Flex>
        {isAuthenticated && <Box>{email}</Box>}
        <Spacer />
        {isAuthenticated ? (
          <>
            <Link to="/home">
              <Button colorScheme="teal" variant="ghost">Home</Button>
            </Link>
            <Button colorScheme="teal" variant="ghost" onClick={logout}>Logout</Button>
          </>
        ) : (
          <Link to="/login">
            <Button colorScheme="teal" variant="ghost">Login</Button>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
