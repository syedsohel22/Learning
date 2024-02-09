import { Box, Text, useColorModeValue } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      py={4}
      textAlign="center"
    >
      <Text>
        &copy; {new Date().getFullYear()} Masai Job Portal. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
