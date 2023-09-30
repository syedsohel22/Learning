import { Box, Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={10}
      >
        <Link to={"/"}>
          <Box>Task-App</Box>
        </Link>
        <HStack>
          <Link to={"/"}>
            <Box>Home</Box>
          </Link>
          <Link to={"/login"}>
            <Box>Login</Box>
          </Link>
          <Link to={"/signin"}>
            {" "}
            <Box>Sign-in</Box>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
