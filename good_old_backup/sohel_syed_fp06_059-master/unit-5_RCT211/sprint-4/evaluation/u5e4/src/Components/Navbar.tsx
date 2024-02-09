import React from "react";
type data = {
  data: string;
};
export const Navbar = ({ data }: data) => {
  return (
    <div>
      <h2>Library Management</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-book-link" href="/add-book">
        Add New Book
      </a>
      <h3 data-testid="page-name">{data}</h3>
    </div>
  );
};
