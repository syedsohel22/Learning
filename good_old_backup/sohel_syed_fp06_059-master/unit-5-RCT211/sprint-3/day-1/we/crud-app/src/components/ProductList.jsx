import { Checkbox } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/productReducer/action";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((store) => {
    return store.productReducer.Products;
  });
  console.log(products);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleChnage = (e) => {};
  return (
    <div>
      <div>
        <input type="checkbox" value="male" onChange={handleChnage()} />
        <label>men</label>
      </div>
      {products.length > 0 &&
        products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
    </div>
  );
};

export default ProductList;
