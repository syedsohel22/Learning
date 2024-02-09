import React, { useState, createContext } from "react";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };
  const logout = () => {
    setIsAuth(false);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ token, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
