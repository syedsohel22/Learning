import {
  Badge,
  Flex,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobPostFn } from "../redux/jobReducer/action";
import Pagination from "../components/Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const { isError, isLoading, data } = useSelector((state) => state.jobReducer);
  //console.log(isError, isLoading, data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobPostFn());
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getTimeAgo = (postedAt) => {
    const currentDate = new Date();
    const postedDate = new Date(postedAt);
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    if (months >= 2) {
      return `${months} months ago`;
    } else if (months === 1) {
      return `1 month ago`;
    } else if (weeks >= 2) {
      return `${weeks} weeks ago`;
    } else if (weeks === 1) {
      return `1 week ago`;
    } else if (days >= 2) {
      return `${days} days ago`;
    } else if (days === 1) {
      return `1 day ago`;
    } else if (hours >= 2) {
      return `${hours} hours ago`;
    } else if (hours === 1) {
      return `1 hour ago`;
    } else if (minutes >= 2) {
      return `${minutes} minutes ago`;
    } else if (minutes === 1) {
      return `1 minute ago`;
    } else if (seconds >= 5) {
      return `${seconds} seconds ago`;
    } else {
      return "Just now";
    }
  };

  return (
    <Stack bg={useColorModeValue("gray.100", "gray.900")} gap={5}>
      {currentJobs?.map((el, i) => {
        return (
          <Flex
            key={i}
            bg={"white"}
            w={"80%"}
            margin={"auto"}
            alignItems={"center"}
            p={"20px"}
            justifyContent={"space-between"}
            borderRadius={"10px"}
          >
            <HStack>
              <Img
                src={el.image}
                alt="company-logo"
                w={"100px"}
                borderRadius={"50%"}
                border={"1px solid grey"}
              />
              <Stack>
                <Text as="b" color={"teal"}>
                  {" "}
                  {el.company}
                </Text>
                <Text as="b">{el.position}</Text>
                <HStack>
                  {/* <Text>{el.postedAt}</Text> */}
                  <Text>Posted {getTimeAgo(el.postedAt)}</Text>

                  <Text as="b">.</Text>
                  <Text>{el.contract}</Text>
                  <Text as="b">.</Text>
                  <Text>{el.location}</Text>
                </HStack>
              </Stack>
            </HStack>
            <HStack>
              <Badge colorScheme="green" p={1}>
                {el.role}
              </Badge>
              <Badge colorScheme="green" p={1}>
                {el.level}
              </Badge>
              <Badge colorScheme="green" p={1}>
                {el.language}
              </Badge>
            </HStack>
          </Flex>
        );
      })}
      <Pagination
        itemsPerPage={jobsPerPage}
        totalItems={data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Stack>
  );
};

export default Home;
