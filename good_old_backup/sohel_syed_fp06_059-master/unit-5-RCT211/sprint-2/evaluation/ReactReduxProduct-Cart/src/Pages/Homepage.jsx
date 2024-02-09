import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { ProductList } from "../Components/ProductList";

export const Homepage = () => {
 // console.log(process.env.REACT_APP_JSON_SERVER_PORT);
  return (
    <DIV>
      <Sidebar />
      <ProductList />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
