import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Login() {
  const { isAuth, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // console.log(email, password,isAuth);
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
      });

    if (isAuth) {
      return <Navigate to={<Dashboard />} />;
    }
  };
  return (
    <div>
      <form data-testid="auth_form" onSubmit={handleLogin}>
        <input
          type="email"
          data-testid="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
