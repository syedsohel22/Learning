import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const location = useLocation();
  return !isAuth ? (
    <Navigate to={"/login"} state={location.pathname} />
  ) : (
    children
  );
};
