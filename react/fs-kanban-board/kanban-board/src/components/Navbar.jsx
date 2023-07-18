import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p={"20px"}>
      <Box p="2">
        <Heading size="md">Kanban Board</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">
          <Link to={"/signin"}>Sign in</Link>
        </Button>
        <Button colorScheme="teal">
          <Link to={"/board"}>Board</Link>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
