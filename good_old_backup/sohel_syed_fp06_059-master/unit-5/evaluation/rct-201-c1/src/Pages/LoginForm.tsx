import React, { useState } from "react";

// should receive the handleSubmit callback function through props
interface LoginFormProps {
  handleSubmit: (email: string, password: string) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // create a form, to take the user email, and password

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = e.target;
    setPassword(value);
  };

  //  when the user clicks on the Sign In button
  //  call the handleSubmit function, inside this.
  const handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email.length && password.length) {
      props.handleSubmit(email, password);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login Form</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={email}
          name="email"
          placeholder="enter email"
          onChange={handleEmailChange}
        />
        <input
          type="text"
          value={password}
          name="password"
          placeholder="enter password"
          onChange={handlePasswordChange}
        />
        <button type="submit">sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;
