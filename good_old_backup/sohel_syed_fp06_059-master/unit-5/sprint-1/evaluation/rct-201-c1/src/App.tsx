import React, { useState, useEffect } from "react";
import Countries from "./Pages/Countries";
import LoginForm from "./Pages/LoginForm";
import { getCountriesAPI } from "./api";

interface loginformdata {
  handleSubmit: (email: string, password: string) => void;
}
function App(props: loginformdata) {
  //have a local state management to store the user authenticated status
  const [isAuth, setIsAuth] = useState(false);
  //it should email and password, both of type string as parameters
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // Render LoginForm page if the user is NOT authenticated, else render Countries page

  // handleSubmit should be passed as a prop to the LoginForm page
  return (
    <>{isAuth ? <Countries /> : <LoginForm handleSubmit={handleSubmit} />}</>
  );
}

export default App;
