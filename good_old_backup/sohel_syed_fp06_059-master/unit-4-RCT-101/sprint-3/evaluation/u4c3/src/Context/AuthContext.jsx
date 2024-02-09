import { useState, createContext } from "react";

export const AuthContext = createContext();

const initialAuthState = {
  isAuth: false,
  token: null,
};

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState(initialAuthState);

  //login Function
  const login = (token) => {
    setAuthState({
      ...authState,
      isAuth: true,
      token: token,
    });
  };
  //logout function
  const logout = () => {
    setAuthState(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
