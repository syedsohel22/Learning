import React from "react";
import { Navbar } from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import { useLocation } from "react-router-dom";
import { getProducts } from "../api";

export const HomePage = () => {
  const [data, setData] = React.useState<formDataType[]>([]);

  // const location = useLocation();
  // const navdata =
  //   location.pathname == "/add-product" ? "Add Product Page" : "Home Page";

  React.useEffect(() => {
    getProducts().then((res) => setData(res));
  }, []);

  return (
    <div>
      <Navbar navData={"Home Page"} />
      <ProductList data={data} setData={setData} />
    </div>
  );
};
