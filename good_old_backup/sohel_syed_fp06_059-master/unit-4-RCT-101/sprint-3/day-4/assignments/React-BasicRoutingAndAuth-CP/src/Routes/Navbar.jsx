import { Link } from "react-router-dom";
function Navbar() {
  const Links = [
    { path: "/login", title: "Login" },
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },

    { path: "/products", title: "Products" },
  ];
  return (
    <div className="navbar">
      {Links?.map((link) => (
        <Link key={link.path} to={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export { Navbar };
