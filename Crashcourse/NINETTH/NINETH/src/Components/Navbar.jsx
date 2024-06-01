import React, { useContext } from "react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Button, Link as ChakraLink } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react";
import { AuthContext } from "../Context/Context";

const Navbar = () => {
  let links = [
    {
      to: "/",
      label: "HOME",
    },
    {
      to: "/about",
      label: "ABOUT",
    },
    {
      to: "/contact",
      label: "CONTACT",
    },
    {
      to: "/tickets",
      label: "TICKETS",
    },
    {
      to: "/login",
      label: "LOGIN",
    }
];
const {isAuth,Logout}=useContext(AuthContext);

  return <Flex align="center"   justify={"space-around"} bg="teal.100" p={4}   w="100%">
    {links?.map((link,index)=>{
        return <ChakraLink color="teal.500" textDecoration={"sample"} fontWeight="700" fontSize="20px" as={ReactRouterLink} to={link.to} key={index}>{link.label}</ChakraLink>
    })}
{isAuth ? <Button colorScheme="teal" variant="outline" fontWeight={700} onClick={Logout}>LOGOUT</Button> :""}
 
 
 
    
  </Flex>;
};

export default Navbar;
