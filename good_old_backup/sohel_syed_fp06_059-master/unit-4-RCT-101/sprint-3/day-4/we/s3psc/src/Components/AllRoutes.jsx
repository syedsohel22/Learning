import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Login from "../Pages/Login";
import SingleProductPage from "../Pages/SingleProductPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route
        path="/products/:product_id"
        element={<SingleProductPage />}
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
