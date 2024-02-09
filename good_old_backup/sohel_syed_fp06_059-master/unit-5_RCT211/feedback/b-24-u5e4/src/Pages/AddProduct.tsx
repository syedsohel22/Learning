import React from "react";
import { Navbar } from "../Components/Navbar";
import { addProduct } from "../api";

export interface formDataType {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  id?: number;
}
export const AddProduct = () => {
  const [formData, setFormData] = React.useState<formDataType>({
    name: "",
    brand: "",
    price: 0,
    image: "",
    like: 0,
    dislike: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    addProduct(formData);
  };
  return (
    <div>
      <Navbar navData={"Add Product Page"} />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginBottom: "10px",
        }}
      >
        {/* Add all fields here to take product input */}
        <input
          type="text"
          className="product-name"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />

        <input
          type="text"
          className="product-image"
          placeholder="Image"
          name="image"
          onChange={handleChange}
        />

        <input
          type="text"
          className="product-brand"
          placeholder="product brand"
          name="brand"
          onChange={handleChange}
        />

        <input
          type="text"
          className="product-price"
          placeholder="product price"
          name="price"
          onChange={handleChange}
        />

        <button className="submit-form">Add Product</button>
      </form>
    </div>
  );
};
