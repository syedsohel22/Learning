import React from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export const Dashboard = () => {
  const { isAuth, token } = useContext(AuthContext);
 // console.log(token);
  return (
    <div>
      <h3 data-testid="token">Token:{token} </h3>
      <button data-testid="logout">LOGOUT</button>
    </div>
  );
};
