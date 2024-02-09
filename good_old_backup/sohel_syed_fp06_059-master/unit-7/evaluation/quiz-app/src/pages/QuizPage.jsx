import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const questions = useSelector((store) => store.quizReducer.quiz);
  const toast = useToast();
  console.log(questions);
  // if (questions.length > 0) {
  //   const { question } = questions[currentQuestionIndex];
  //   const { correct_answer, incorrect_answers } =
  //     questions[currentQuestionIndex];
  //   const options = [correct_answer, ...incorrect_answers];
  // }

  const { question } = questions.length > 0 && questions[currentQuestionIndex];
  const { correct_answer, incorrect_answers } =
    questions.length > 0 && questions[currentQuestionIndex];
  const options = [correct_answer, ...incorrect_answers];
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption("");
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    console.log("score:", score, questions.length);
  };

  useEffect(() => {
    console.log(selectedOption, correct_answer);
    if (selectedOption === correct_answer) {
      setScore((p) => p + 1);
      toast({
        title: "Correnct Answer.!",
        description: "Hurrey...!.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }
    console.log(selectedOption, score);
  }, [selectedOption]);

  return (
    <Box p={4}>
      <Box>
        <h1>
          Question {currentQuestionIndex + 1}/{questions.length}
        </h1>
        <h2>Question : {question}</h2>
        <RadioGroup onClick={handleOptionChange} value={selectedOption}>
          <Stack spacing={2}>
            {options.map((option) => (
              <Radio key={option} value={option}>
                {option}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>

      <Box mt={4}>
        <Button
          colorScheme="blue"
          mr={2}
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        <Button
          colorScheme="blue"
          mr={2}
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </Button>
        {currentQuestionIndex === questions.length - 1 && (
          <Button colorScheme="green" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default QuizPage;
