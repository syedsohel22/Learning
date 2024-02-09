import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import JobPost from "../pages/JobPost";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addpost" element={<JobPost />} />
    </Routes>
  );
};

export default MainRoutes;
