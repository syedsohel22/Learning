import { Image } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ title, brand, image, discount, price }) => {
  return (
    <div>
      <Image src={image} alt={title} />
      <h3>{title}</h3>
      <p>{discount}</p>
      <p>{brand}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
