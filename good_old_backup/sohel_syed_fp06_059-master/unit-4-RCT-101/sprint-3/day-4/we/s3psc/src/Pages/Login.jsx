import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { login, isAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password, isAuth);

  const handleLogin = () => {
    const userDetails = {
      email,
      password,
    };

    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.token);
        login(json.token);
      });
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
