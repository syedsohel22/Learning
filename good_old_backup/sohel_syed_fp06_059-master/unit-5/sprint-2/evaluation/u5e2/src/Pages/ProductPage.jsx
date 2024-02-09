import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./productpage.css";
import {
  getProductRequestAction,
  getProductSuccessAction,
  getProductFailureAction,
} from "../Redux/action";

import ProductCard from "../Components/ProductCard";
const ProductPage = () => {
  let dispatch = useDispatch();

  const getdata = () => {
    dispatch(getProductRequestAction());
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
      )
      .then((res) => {
        dispatch(getProductSuccessAction(res.data));
        console.log(res.data, "data");
      })
      .catch((err) => {
        dispatch(getProductFailureAction());
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  const { products } = useSelector((store) => {
    return {
      products: store.products,
    };
  });

  console.log(products);
  return (
    <div style={{ width: "100%" }}>
      <div className="product-cards">
        {/* Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
         */}
        {products.map((el) => (
          <ProductCard item={el} key={el.name} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
