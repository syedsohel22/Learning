import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(true);
  const [token, setToken] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const item = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  useEffect(() => {
    const toggleAuth = () => {
      return fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((res) => {
          setToken(res.token);
          console.log(res.token);
        });
    };
    toggleAuth();
  }, []);

  // 
  const value = {
    isAuth,
    loading,
    error,
    token,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
