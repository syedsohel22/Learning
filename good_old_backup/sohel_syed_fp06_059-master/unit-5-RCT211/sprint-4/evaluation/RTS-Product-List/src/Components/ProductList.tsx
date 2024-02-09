import React, { useEffect, useState } from "react";
import { getProducts, Productobj } from "../api";
import { ProductCard } from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<Productobj[]>([]);

  useEffect(() => {
    const fetchPro = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchPro();
  }, []);
  return (
    <div className={`product-list`}>
      {/* Add all product cards here in grid format  */}
      {products.length > 0 &&
        products.map((e, i) => {
          return <ProductCard key={i} {...e} func={setProducts} />;
        })}
    </div>
  );
};

export default ProductList;
