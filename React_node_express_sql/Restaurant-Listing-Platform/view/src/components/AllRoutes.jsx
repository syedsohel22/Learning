import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateRestaurant from "../pages/CreateRestaurant";
import DetailsRestaurant from "../pages/DetailsRestaurant";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateRestaurant />} />
      <Route path="/details" element={<DetailsRestaurant />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default AllRoutes;
