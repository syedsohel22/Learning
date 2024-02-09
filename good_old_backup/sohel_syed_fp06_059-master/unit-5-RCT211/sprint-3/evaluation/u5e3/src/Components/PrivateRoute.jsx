import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const Auth = useSelector((state) => {
    // console.log(Auth);
    return state.authReducer.isAuth;
  });

  console.log(Auth);
  return Auth ? children : <Navigate to="/login" />;
};
