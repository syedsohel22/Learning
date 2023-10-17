import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Signup", route: "/signup" },
    { name: "Sigin", route: "/sigin" },
  ];
  console.log(navItems);
  return (
    <Flex align={"center"} justifyContent={"space-around"}>
      <Box>Custom App</Box>
      <Flex>
        {navItems.map((navItem, i) => (
          <Box key={i}>
            <Link to={navItem.route}>
              <Button>{navItem.name}</Button>
            </Link>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
