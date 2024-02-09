import { Route, Routes } from "react-router-dom";
import Login from "./../pages/Login";
import DashBoard from "../pages/DashBoard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default MainRoutes;
