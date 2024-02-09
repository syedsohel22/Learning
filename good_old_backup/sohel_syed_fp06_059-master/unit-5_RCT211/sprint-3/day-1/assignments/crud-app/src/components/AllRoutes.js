import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import AdminPage from "../pages/AdminPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="*" element={<h1>404 page Not Found</h1>}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
