import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
    >
      <Box w={"50%"} m={"auto"} bgGradient="linear(to-b, #746eff, white)">
        <Navbar />
        <HomePage />
      </Box>
    </Flex>
  );
}

export default App;
