import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";

import { ProductCard } from "./ProductCard";
export const ProductList = () => {
  const productArr = useSelector((state) => {
    return state.productReducer.products;
  });
  // console.log(productArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div data-testid="product-list">
      {/* Map through products with ProductCard component  */}
      {productArr.map((el) => {
        return <ProductCard key={el.id} el={el} />;
      })}
    </div>
  );
};
