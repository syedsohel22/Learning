import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import api from "../components/api";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = () => {
    const payload = {
      email,
      password,
    };
    console.log(payload);
    fetch(`${api}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1> Login Form</h1>
      <div>
        <input
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button onClick={handlelogin}>Login</button>
    </div>
  );
};

export default Register;
