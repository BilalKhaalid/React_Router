import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;