import React, { useEffect, useState } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Pagination from "./Pagination";
import Product from "./Product";
import axios from "axios";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [total, setTotal] = useState(0);

  const getData = () => {
    return axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?page=${page}&limit=${limit}`
    );
  };


  useEffect(() => {
    getData(page, limit).then((res) => {
      console.log("res%_My_api_data%", res);
      console.log("Actual data from API", res.data);
      setData(res.data.data);
      setTotal(res.data.totalPages);
      // console.log(res.data.totalPages);
    });
  }, [page, limit]);





  return (
    <Flex direction="column" w="80%" m="auto">
      <Grid templateColumns="repeat(3, 1fr)" gap={6} w="80%" m="auto">
        {/* List of Products */}




        {data
          ? data.map((ele) => {
              return (
                <GridItem key={ele.id}>
                  <Product item={ele} />
                </GridItem>
              );
            })
          : null}
      </Grid>
      {/* Pagination */}
      <Pagination
        setLimit={setLimit}
        setPage={setPage}
        totalPage={total}
        page={page}
      />

      
    </Flex>
  );
};

export default Products;
