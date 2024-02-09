import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
};

export { AllRoutes };
