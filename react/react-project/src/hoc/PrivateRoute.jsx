import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { children } = props;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  console.log(isAuth);
  return isAuth ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
