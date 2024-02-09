import React, { useEffect, useState } from "react";

const Signin = () => {
  const [name, setname] = React.useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const payload = {
    name,
    email,
    password,
  };
  const handleSignup = () => {
    console.log(payload);
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setname("");
    setEmail("");
    setPassword("");
  };
  useEffect(() => {}, []);
  return (
    <div>
      <h2>Registration Form</h2>
      <label>Username</label>
      <br />
      <input
        type="text"
        name="name"
        onChange={(e) => setname(e.target.value)}
        value={name}
      />
      <br />
      <label>email</label>
      <br />
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <label>password</label>
      <br />
      <input
        type="text"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <button onClick={handleSignup}>Sign-Up</button>
    </div>
  );
};

export default Signin;
