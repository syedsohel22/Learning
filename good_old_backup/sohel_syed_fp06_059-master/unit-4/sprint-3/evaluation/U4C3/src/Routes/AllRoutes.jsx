import {Route,Routes} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard"
import Login from "./Login"
import SingleProductPage from "./SingleProductPage";
import PrivateRoute from "../Components/PrivateRoute"


function AllRoutes() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path= "/login" element={<Login/>} />
         <Route path = "/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
