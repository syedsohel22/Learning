import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";

const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`;
const Todos = () => {
  const [todos, setTodos] = useState;

  const getData=()=>{
    
  }
  useEffect(() => {}, []);
  return (
    <div>
      {/* add TodoInput component here */}
      <TodoInput />
      {/* map through the todos array and display the tasks */}
    </div>
  );
};

export default Todos;
