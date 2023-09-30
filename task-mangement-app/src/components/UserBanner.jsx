import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";

const UserBanner = () => {
  const user = {
    firstName: "Sohel",
    lastName: "Syed",
    email: "user@example.com",
  };
  return (
    <Box>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Heading>{`${user.firstName} ${user.lastName}`}</Heading>
          <Text>{user.email}</Text>
        </Box>
        <Box>
          <Button>ADD TASK</Button>
        </Box>
      </Flex>
      <Divider orientation="horizontal" />
    </Box>
  );
};

export default UserBanner;
