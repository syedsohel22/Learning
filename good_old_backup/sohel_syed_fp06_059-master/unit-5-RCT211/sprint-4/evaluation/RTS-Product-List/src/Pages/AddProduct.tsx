import React, { useState } from "react";
import { addProduct, Productobj } from "../api";
import { Navbar } from "../Components/Navbar";

export const AddProduct = () => {
  const [name, setName] = useState<string>("");
  const [image, setimage] = useState<string>("");
  const [brand, setbrand] = useState<string>("");
  const [price, setprice] = useState<number>(0);
  //name
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  //image
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setimage(e.target.value);
  };
  //brand
  const handleChangeBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setbrand(e.target.value);
  };
  //price
  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setprice(Number(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myProduct: Productobj = {
      name,
      brand,
      price,
      image,
      like: 0,
      dislike: 0,
      id: Date.now(),
    };
    addProduct(myProduct);
    console.log(myProduct);
    setName("");
    setbrand("");
    setimage("");
    setprice(0);
  };

  return (
    <div>
      <Navbar data={"Add Product Page"} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="product-name"
          placeholder="Product Name"
          value={name}
          onChange={handleChangeName}
        />
        <input
          type="text"
          className="product-image"
          placeholder="product-image"
          value={image}
          onChange={handleChangeImage}
        />
        <input
          type="text"
          className="product-brand"
          placeholder="product-brand"
          value={brand}
          onChange={handleChangeBrand}
        />
        <input
          type="number"
          className="product-price"
          placeholder="product-price"
          value={price}
          onChange={handleChangePrice}
        />
        <button type="submit" className="submit-form">
          Add Product
        </button>
      </form>
    </div>
  );
};

/*
   1. input to accept name with class `product-name`
  2. input to accept image with class `product-image`
  3. input to accept brand with class `product-brand`
  4. input to accept price with class `product-price`
- Provide a `button` to submit with class`submit-form`
 */
