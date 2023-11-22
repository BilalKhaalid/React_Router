import React, { useState } from "react";
import { useAuth } from "./utils/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    auth.login(user);
    navigate("/profile", { replace: true });
  };

  return (
    <div>
      <label htmlFor="Username">UserName</label>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
