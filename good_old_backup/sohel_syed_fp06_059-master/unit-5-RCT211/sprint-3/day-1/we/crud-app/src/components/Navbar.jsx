import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex gap="10px" align="center" border="1px solid grey" p={5}>
      <Heading size="sm" fontSize={"20px"}>
        Shopping App
      </Heading>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/admin"}>Admin</Link>
    </Flex>
  );
};

export default Navbar;
