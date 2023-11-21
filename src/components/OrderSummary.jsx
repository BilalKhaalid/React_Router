import React from "react";
import { useNavigate } from "react-router";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order Confirmed!</h1>
      <button onClick={() => navigate("/")}>Keep Shopping!</button>
    </div>
  );
};

export default OrderSummary;
