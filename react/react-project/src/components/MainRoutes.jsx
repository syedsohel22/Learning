import { Route, Routes } from "react-router-dom";

import DashBoard from "../pages/DashBoard";
import PrivateRoute from "../hoc/PrivateRoute";
import Todos from "../pages/Todos";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
