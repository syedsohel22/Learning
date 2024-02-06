import { Box } from "@chakra-ui/react";
import UserBanner from "../components/UserBanner";
import MainTaskTable from "../components/MainTaskTable";
const Home = () => {
  return (
    <Box px={10}>
      <UserBanner />
      <MainTaskTable />
    </Box>
  );
};

export default Home;
