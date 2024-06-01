import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Tickets from "../Pages/Tickets";
import TicketView from "../Pages/TicketView";
import TicketCreate from "../Pages/TicketCreate";
import TicketEdit from "../Pages/TicketEdit";
import About from "../Pages/About";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/tickets"
        element={
          <PrivateRoute>
            <Tickets />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets/view/:id"
        element={
          <PrivateRoute>
            <TicketView />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets/create"
        element={
          <PrivateRoute>
            <TicketCreate />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets/edit/:id"
        element={
          <PrivateRoute>
            <TicketEdit />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
