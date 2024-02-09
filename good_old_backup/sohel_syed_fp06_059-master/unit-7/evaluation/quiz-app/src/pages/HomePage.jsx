import { Box, Button, Flex, Heading, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getQuizFunc } from "../redux/quizReducer/action";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState(0);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = () => {
    //https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
    const param = `amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`;
    dispatch(getQuizFunc(param));
    console.log(param);
    navigate("/quiz");
  };
  return (
    <Box m={"auto"} w={"90%"}>
      <Heading as={"h1"}>Set up your Quiz</Heading>
      <Flex
        border={"1px solid grey"}
        w={"50%"}
        direction={"column"}
        m={"auto"}
        gap={5}
        mt={10}
        p={10}
      >
        <Input
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          placeholder="Select Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
        </Select>
        <Select
          placeholder="Select Difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
        <Input
          placeholder="Choose number of Questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
        />
        <Button bg={"red"} color={"white"} onClick={handleSubmit}>
          START QUIZ
        </Button>
      </Flex>
    </Box>
  );
};

export default HomePage;
