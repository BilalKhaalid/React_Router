import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/order-summary"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Order Summary
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
