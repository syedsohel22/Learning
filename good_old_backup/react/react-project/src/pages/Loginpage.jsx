import React, { useState } from "react";

const Loginpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "user" && password === "12345") {
      JSON.stringify(localStorage.setItem("isAuth", true));
    }
  };

  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Loginpage;
