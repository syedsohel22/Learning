import React from "react";
import { Route, Routes } from "react-router-dom";
import CoffeeData from "../Components/CoffeeData";
import EmployeeData from "../Components/EmployeeData";
import RestaurantData from "../Components/RestaurantData";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/coffee-data" element={<CoffeeData />}>
        CoffeeData
      </Route>
      <Route path="/restaurant-data" element={<RestaurantData />}>
        RestaurantData
      </Route>
      <Route path="/employee-data" element={<EmployeeData />}>
        EmployeeData
      </Route>
    </Routes>
  );
};

export { AllRoutes };
