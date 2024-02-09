import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Stack,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postJobPostFn } from "../redux/jobReducer/action";

const initialState = {
  city: "",
  location: "",
  company: "",
  contract: "",
  image: "",
  language: "",
  level: "",
  role: "",
  position: "",
  postedAt: new Date(),
  id: Date.now(),
};

const JobPost = () => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(postJobPostFn(formData));
    console.log(formData);
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Post New Job
        </Heading>

        {/* Company name */}
        <FormControl id="company_name" isRequired>
          <FormLabel>Company name</FormLabel>
          <Input
            placeholder="Company name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.company}
            name="company"
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        {/* Image  */}
        <FormControl id="Company Logo" isRequired>
          <FormLabel>Logo</FormLabel>
          <Input
            placeholder="Company Logo URL"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.image}
            name="image"
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>
        {/* City */}
        <FormControl id="city" isRequired>
          <FormLabel>City</FormLabel>
          <Input
            placeholder="City"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.city}
            name="city"
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        {/* Location */}
        <FormControl id="location" isRequired>
          <FormLabel>Location</FormLabel>
          <Input
            placeholder="Location"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.location}
            name="location"
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        {/* Role */}
        <FormControl id="role" isRequired>
          <FormLabel>Role</FormLabel>
          <Select
            placeholder="Select Role"
            value={formData.role}
            name="role"
            onChange={(e) => handleOnChange(e)}
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="FullStack">FullStack</option>
          </Select>
        </FormControl>

        {/* Position */}
        <FormControl id="position" isRequired>
          <FormLabel>Position</FormLabel>
          <Select
            placeholder="Select Position"
            value={formData.position}
            name="position"
            onChange={(e) => handleOnChange(e)}
          >
            <option value="Backend Developer">Backend Developer</option>
            <option value="Junior Frontend Developer">
              Junior Frontend Developer
            </option>
            <option value="Junior Backend Developer">
              Junior Backend Developer
            </option>
            <option value="FSD">FSD</option>
          </Select>
        </FormControl>
        {/* Level */}

        <FormControl id="level" isRequired>
          <FormLabel>Level</FormLabel>
          <Select
            placeholder="Select Level"
            value={formData.level}
            name="level"
            onChange={(e) => handleOnChange(e)}
          >
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </Select>
        </FormControl>
        {/* Language */}
        <FormControl id="language" isRequired>
          <FormLabel>Language</FormLabel>
          <Input
            placeholder="Language"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.language}
            name="language"
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        {/* Contract */}
        <FormControl id="contract" isRequired>
          <FormLabel>Contract</FormLabel>
          <Input
            placeholder="Contract"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.contract}
            name="contract"
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        {/* Date */}
        <FormControl id="date" isRequired>
          <FormLabel>Date</FormLabel>
          <Input
            placeholder="Date"
            _placeholder={{ color: "gray.500" }}
            type="date"
            value={formData.postedAt}
            name="postedAt"
            onChange={(e) => handleOnChange(e)}
          />
        </FormControl>

        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default JobPost;
