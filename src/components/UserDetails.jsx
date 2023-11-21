import React from "react";
import { useParams } from "react-router";

const UserDetails = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>Details about User: {userId}</h1>
    </div>
  );
};

export default UserDetails;
