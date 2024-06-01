import React, { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  return <Box>{isAuth ? children : <Navigate to="/login" />}</Box>;
};

export default PrivateRoute;
