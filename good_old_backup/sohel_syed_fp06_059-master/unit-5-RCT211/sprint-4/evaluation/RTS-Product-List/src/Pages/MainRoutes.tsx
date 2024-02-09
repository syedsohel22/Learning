import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "./AddProduct";
import { HomePage } from "./HomePage";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        Home
      </Route>
      <Route path="/add-product" element={<AddProduct />}>
        AddProduct
      </Route>
    </Routes>
  );
};
