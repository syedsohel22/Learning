import React, { useEffect, useState } from "react";
import { getTodo } from "../api";
import { Todo } from "../constant";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [update, setUpdate] = useState(false);

  const updatefn = () => {
    setUpdate((p) => !p);
  };
  useEffect(() => {
    getTodo()
      .then((res) => {
        console.log("now I made get call");
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);
  return (
    <div>
      <TodoInput update={updatefn} />
      {todos.map((el) => {
        return <TodoItem {...el} key={el.id} update={updatefn} />;
      })}
    </div>
  );
};

export default TodoApp;
