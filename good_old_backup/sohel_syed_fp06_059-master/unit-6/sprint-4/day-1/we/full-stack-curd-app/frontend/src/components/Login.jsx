import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const payload = {
    email,
    password,
  };
  const handleSignup = () => {
    console.log(payload);
    fetch("http://localhost:8080/user/login", {
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

    setEmail("");
    setPassword("");
  };
  useEffect(() => {}, []);
  return (
    <div>
      <h2>Login Form</h2>

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

export default Login;
