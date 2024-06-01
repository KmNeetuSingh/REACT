import { Box, Button, Container, Heading, Input, InputGroup, InputRightElement, VStack, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const handleClick = () => setShow(!show);

  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please provide both email and password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      console.log("Logging in with", email, password); // Debugging
      let res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      console.log("Response:", res); // Debugging

      if (res.data.token) {
        setToken(res.data.token);
        setIsAuth(true);
        navigate("/tickets");
      } else {
        console.log("No token in response");
        toast({
          title: "Login failed",
          description: "No token received from server.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Login Failure", error.response ? error.response.data : error.message);
      toast({
        title: "Login failed",
        description: error.response ? error.response.data.error : error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="80%">
      <Heading textAlign={"center"} mt={4}>
        Login Page
      </Heading>
      <Box boxShadow='md' p={4} maxW={"40%"} m={"auto"} mt={4}>
        <VStack spacing={6} mt={5}>
          <Input 
            placeholder="Enter Email" 
            focusBorderColor='teal.400' 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              focusBorderColor='teal.400'
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="teal" variant={"outline"} onClick={handleLogin}>
            LOGIN
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;
