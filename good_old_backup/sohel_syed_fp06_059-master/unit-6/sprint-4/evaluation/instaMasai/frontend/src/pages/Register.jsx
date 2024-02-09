import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import api from "../components/api";
const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [is_married, setIsMarried] = useState(false);
  const [gender, setGender] = useState("");

  const handlesign = () => {
    const payload = {
      name,
      age,
      email,
      password,
      city,
      is_married,
      gender,
    };
    console.log(payload);
    fetch(`${api}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1> Registration Form</h1>
      <div>
        <input
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          name="age"
          value={age}
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
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
        <input
          name="city"
          value={city}
          placeholder="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          name="is_married"
          value={is_married}
          placeholder="is_married"
          onChange={(e) => {
            setIsMarried(e.target.value);
          }}
        />
        <input
          name="gender"
          value={gender}
          placeholder="gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
      </div>
      <button onClick={handlesign}>Sign up</button>
    </div>
  );
};

export default Register;
