import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import FollowersPage from "./../pages/FollowersPage";
import RepositoryDetailsPage from "./../pages/RepositoryDetailsPage";

const MainRoutes = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/followers" element={<FollowersPage />} />
      <Route path="/repodetails" element={<RepositoryDetailsPage />} />
    </Routes>
  );
};

export default MainRoutes;
