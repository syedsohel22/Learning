
import Home from "./Home";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import PrivateRoute from "../Components/PrivateRoute";


import Login from "./Login";

function AllRoutes() {
  return (
    <div>
      {/* Add Home, Login and dashboard  */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
