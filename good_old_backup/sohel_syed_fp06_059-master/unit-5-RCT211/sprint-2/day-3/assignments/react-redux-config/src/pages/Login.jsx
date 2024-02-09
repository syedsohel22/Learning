import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch;

  return (
    <div>
      <input type="text" placeholder="Enter Email" value={email} />
      <input />
    </div>
  );
};

export default Login;
