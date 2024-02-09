import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const Links = [
    { path: "/login", title: "Login" },
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },

    { path: "/products", title: "Products" },
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {Links?.map((link) => (
        <Link key={link.path} to={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
