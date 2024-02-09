import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  console.log(isAuth);
  return !isAuth ? <Navigate to="/login" /> : children;
};
