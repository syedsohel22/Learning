import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProductFn } from "../redux/productReducer/action";

const initalState = {
  id: Date.now(),
  name: "",
  image: "",
  brand: "",
  price: "",
  category: "",
  gender: "",
};
const Admin = () => {
  const [product, setProduct] = useState(initalState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((p) => {
      return { ...p, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addProductFn(product));
    setProduct(initalState);
  };
  return (
    <DIV>
      <h1>ADD Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product Name"
          name="name"
          value={product.name}
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="Product Image"
          name="image"
          value={product.image}
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="Product Brand"
          name="brand"
          value={product.brand}
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="Product Price"
          name="price"
          value={product.price}
          type="number"
          onChange={(e) => handleChange(e)}
        />
        <select
          name="category"
          value={product.category}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="shoes">Shoes</option>
        </select>
        <select
          name="gender"
          value={product.gender}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

export default Admin;

const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid grey;
  padding: 10px;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  input {
    height: 40px;
    font-size: larger;
    width: 100%;
  }

  select {
    height: 40px;
    font-size: larger;
    width: 100%;
  }

  button {
    width: 50%;
    height: 35px;
    cursor: pointer;
    border: none;
  }
`;
