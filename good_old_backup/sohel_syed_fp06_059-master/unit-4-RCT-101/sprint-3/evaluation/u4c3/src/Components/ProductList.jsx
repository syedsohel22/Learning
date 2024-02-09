import React from "react";
import { isElement } from "react-dom/test-utils";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({ products = [] }) => {
  return (
    <div data-testid="products-container">
      {products.map((el) => (
        <ProductItem
          key={el.id}
          title={el.title}
          image={el.image}
          price={el.price}
          category={el.category}
        />
      ))}
    </div>
  );
};

// export
export default ProductList;
