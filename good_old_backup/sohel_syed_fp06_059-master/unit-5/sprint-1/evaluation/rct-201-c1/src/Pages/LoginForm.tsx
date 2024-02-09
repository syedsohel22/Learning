import React, { useState, useEffect } from "react";

interface loginformdata {
  handleSubmit: (email: string, password: string) => void;
}
// should receive the handleSubmit callback function through props
const LoginForm = (props: loginformdata) => {
  // create a form, to take the user email, and password
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  console.log(email, password);
  //  when the user clicks on the Sign In button
  //  call the handleSubmit function, inside this.
  const handleClick = () => {
    props.handleSubmit(email, password);
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login Form</h1>
      <form>
        <input
          placeholder="enter Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="enter Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleClick}>Sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;
