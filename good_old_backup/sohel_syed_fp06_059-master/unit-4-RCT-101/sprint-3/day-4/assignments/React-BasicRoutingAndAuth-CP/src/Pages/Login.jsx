import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import Home from "./Home";
export default function Login() {
  const { login, isAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(isAuth);
  const handleLogin = (e) => {
    e.preventDefault();
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
      })
      .catch((err) => console.log(err));
  };

  if (isAuth) {
    return <Navigate to={<Home />} />;
  }
  return (
    <div>
      <form className="auth_form" onSubmit={handleLogin}>
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="email"
          className="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="password"
          className="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}
