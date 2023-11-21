import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Products"
      />
      <br />
      <div style={{ margin: "15px" }}>
        <Link to="featured" style={{ margin: "10px", textDecoration: "none" }}>
          Featured
        </Link>

        <Link to="new" style={{ margin: "10px", textDecoration: "none" }}>
          New
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Products;
