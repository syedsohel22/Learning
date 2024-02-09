import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginFunc } from "./../Redux/AuthReducer/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  let store = useSelector((state) => {
    return state.authReducer;
  });

  //console.log(email, password);
  //console.log("login-store", store);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let data = {
    email: email,
    password: password,
  };

  const handleSubmit = () => {
    dispatch(loginFunc(data));
  };
  return (
    <DIV>
      <h2>Log In</h2>
      <input
        data-testid="user-email"
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => handleEmail(e)}
      />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => handlePassword(e)}
      />
      <button data-testid="user-login" onClick={handleSubmit}>
        Log In
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
