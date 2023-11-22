import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./utils/auth";

const Navbar = () => {
  const auth = useAuth();
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const handleLogout = (e) => {
    e.preventDefault();
    if (auth.user) {
      auth.logout();
      navigate("/");
    } else if (!auth.user) {
      navigate("/login");
    }
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
        to="/profile"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Profile
      </NavLink>
      {!auth.user ? (
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "none" : "underline",
            };
          }}
        >
          Login
        </NavLink>
      ) : (
        <NavLink
          to="/logout"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "none" : "underline",
            };
          }}
          onClick={handleLogout}
        >
          Logout
        </NavLink>
      )}
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
