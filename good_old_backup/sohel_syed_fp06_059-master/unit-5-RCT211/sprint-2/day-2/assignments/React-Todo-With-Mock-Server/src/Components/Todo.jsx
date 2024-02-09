import TodoInput from "./TodoInput";
import axios from "axios";
import { useEffect, useState } from "react";

const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`;
console.log(url);
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //get Data
    getData();
    // console.log(todos);
  }, []);

  const handleAddTodo = (input) => {
    const newTodo = {
      title: input,
      status: false,
    };

    axios
      .post(url, newTodo)
      .then((res) => {
        console.log(res.data);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(typeof handleAddTodo);
  return (
    <div>
      {/* add TodoInput component here */}
      {/* map through the todos array and display the tasks */}
      <TodoInput handleAddTodo={handleAddTodo} />
      <div data-testid="todos-wrapper">
        {todos.map((el) => {
          return (
            <div key={el.id}>
              <span>{el.title} </span>-
              <span>{el.status ? "True" : "False"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
