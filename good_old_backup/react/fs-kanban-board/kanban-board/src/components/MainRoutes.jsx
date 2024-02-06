import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Board from "../pages/Board";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/board"
        element={
          <PrivateRoute>
            <Board />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
