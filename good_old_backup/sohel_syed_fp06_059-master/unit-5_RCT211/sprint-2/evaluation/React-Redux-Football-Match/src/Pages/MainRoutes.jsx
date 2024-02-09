import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { PrivateRoute } from "./../Components/PrivateRoute";
import { WatchListPage } from "./WatchListPage";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route
        path="/watch-list"
        element={
          <PrivateRoute>
            <WatchListPage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
