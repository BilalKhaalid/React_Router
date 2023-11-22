import React from "react";
import { useAuth } from "./utils/auth";
import { useNavigate } from "react-router";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    if (auth.user) {
      auth.logout();
      navigate("/");
    } else if (!auth.user) {
      navigate("/login");
    }
  };
  return (
    <>
      {!auth.user ? (
        navigate("/login")
      ) : (
        <div>
          <h1>Welcome {auth.user} </h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};

export default Profile;
