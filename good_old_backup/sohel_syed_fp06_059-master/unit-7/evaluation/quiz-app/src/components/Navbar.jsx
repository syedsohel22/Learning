import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex justifyContent={"space-around"} bg={"green"}>
      <Box>Quiz App</Box>
      <HStack>
        <Button>
         
          Home
        </Button>
        <Button>
          {" "}
          
          Quiz
        </Button>
        <Button>Result</Button>
        <Button>Dashboard</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
