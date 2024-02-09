import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  Input,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getJobPostFn } from "../redux/jobReducer/action";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const navItem = [
    { title: "Home", path: "/" },
    { title: "Post a Job", path: "/addpost" },
  ];
  console.log(search);
  const dispatch = useDispatch();
  useEffect(() => {
    let id = setTimeout(() => {
      dispatch(getJobPostFn(`?q=${search}`));
    }, 1500);

    return () => {
      clearTimeout(id);
    };
  }, [search]);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Logo */}
          <Box>
            {/* Nav elemets */}
            <HStack alignItems={"center"} gap={6}>
              <Box>Masai Job Portal</Box>
              {navItem?.map((el, i) => {
                return (
                  <NavLink to={el.path} key={i}>
                    {el.title}
                  </NavLink>
                );
              })}
            </HStack>
          </Box>
          <Box>
            <Input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Box>
          <Flex alignItems={"center"}>
            {/* lite and dark mode */}
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
