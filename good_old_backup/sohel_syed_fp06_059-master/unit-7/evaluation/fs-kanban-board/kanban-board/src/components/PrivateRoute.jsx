import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ childern }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);

  console.log(isAuth, "private route");

  return !isAuth ? <Navigate to={"/signin"} /> : childern;
};

export default PrivateRoute;
