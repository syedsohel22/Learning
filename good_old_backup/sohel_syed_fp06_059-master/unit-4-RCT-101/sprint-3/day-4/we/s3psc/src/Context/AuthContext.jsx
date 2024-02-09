import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setisAuth] = useState(false);

  const login = () => {
    setisAuth(true);
  };

  const logout = () => {
    setisAuth(false);
  };
  return (
    <AuthContext.Provider value={{ login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
