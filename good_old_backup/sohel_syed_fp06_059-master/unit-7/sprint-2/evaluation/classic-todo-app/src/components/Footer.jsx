import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = ({ total, clearTodo, alltodo }) => {
  return (
    <Flex justifyContent={"space-between"} border={"1px solid grey"} p={4}>
      <Box>
        <Text>{`${total} items left.`}</Text>
      </Box>
      <Flex gap={5}>
        <Text onClick={alltodo}>All</Text>
        <Text>Active</Text>
        <Text>Completed</Text>
      </Flex>
      <Box>
        <Text onClick={clearTodo}>Clear Completed</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
