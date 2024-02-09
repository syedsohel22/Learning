import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productReducer/action";
const initState = {
  title: "",
  image: "",
  price: "",
  brand: "",
  discount: "",
  gender: "",
  id: "",
};
const Admin = () => {
  const [product, setProduct] = useState(initState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addProduct(product));
    setProduct(initState);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((p) => {
      return { ...p, [name]: value };
    });
  };
  return (
    <Box>
      <Heading>Add Products</Heading>
      <Center spaceing={10}>
        <FormControl maxW="450px">
          <Input
            type={"text"}
            placeholder="Image"
            onChange={(e) => handleChange(e)}
            value={product.image}
            name="image"
          />
          <Input
            type={"text"}
            placeholder="Title"
            onChange={(e) => handleChange(e)}
            value={product.title}
            name="title"
          />
          <Input
            type={"text"}
            placeholder="Price"
            onChange={(e) => handleChange(e)}
            value={product.price}
            name="price"
          />
          <Input
            type={"text"}
            placeholder="Brand"
            onChange={(e) => handleChange(e)}
            value={product.brand}
            name="brand"
          />
          <Input
            type={"text"}
            placeholder="Discount"
            onChange={(e) => handleChange(e)}
            value={product.discount}
            name="discount"
          />
          <Select
            id=""
            size="md"
            placeholder="Select Gender"
            onChange={(e) => handleChange(e)}
            value={product.gender}
            name="gender"
          >
            <option value="male">Men</option>
            <option value="female">Woman</option>
            <option value="kids">Kids</option>
          </Select>
          <Button
            onClick={(e) => {
              handleSubmit(e);
            }}
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </Center>
    </Box>
  );
};

export default Admin;
