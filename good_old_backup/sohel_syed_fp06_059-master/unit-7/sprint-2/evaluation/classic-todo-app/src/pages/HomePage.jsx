import { useState } from "react";
import {
  VStack,
  Input,
  Checkbox,
  IconButton,
  Flex,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
// import { useSelector } from "react-redux";
import Footer from "./../components/Footer";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //   const data = useSelector((state) => state.todoReducer);
  //   console.log(data);

  console.log(todos);
  /// action => add
  // Add a new to-do item

  const totoalTodo = todos.length;
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, isComplete: false },
      ]);
      setInputValue("");
    }
  };

  // action update
  // Toggle the complete/incomplete state of a to-do item
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // update todo
  const updateTodo = (id) => {};

  // action delete
  // Remove a to-do item
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // redux work

  /// action => add , update and delete
  // useSelector and useDispatch

  //   filter Functions
  const clearAllCompletedFn = () => {
    const clearTodo = todos.filter((todo) => {
      return todo.isComplete === false;
    });
    console.log("clear todo", clearTodo);
    setTodos(clearTodo);
  };

  const allTodoFn = () => {
    return todos;
  };
  return (
    <VStack
      align="stretch"
      spacing={1}
      p={"100px"}
      border={"1px solid grey"}
      bg={"whiteAlpha.500"}
    >
      <Input
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
        bg={"#fff"}
      />

      {todos.map((todo) => (
        <Flex
          key={todo.id}
          alignItems="center"
          border={"1px  solid grey.400"}
          gap={2}
          p={1}
        >
          <Checkbox
            isChecked={todo.isComplete}
            onChange={() => toggleTodo(todo.id)}
          />

          <span
            style={{
              textDecoration: todo.isComplete ? "line-through" : "none",
            }}
          >
            <Text>{todo.text}</Text>
          </span>
          <Spacer />

          <IconButton
            icon={<EditIcon />}
            size="sm"
            variant="ghost"
            onClick={() => updateTodo(todo.id)}
          />
          <IconButton
            icon={<DeleteIcon />}
            size="sm"
            variant="ghost"
            onClick={() => removeTodo(todo.id)}
          />
        </Flex>
      ))}
      <Footer
        total={totoalTodo}
        clearTodo={clearAllCompletedFn}
        alltodo={allTodoFn}
      />
    </VStack>
  );
};

export default TodoApp;
