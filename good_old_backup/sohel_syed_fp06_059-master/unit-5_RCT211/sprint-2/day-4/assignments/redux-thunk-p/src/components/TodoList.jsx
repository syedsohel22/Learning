import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });
  console.log(todos);
  return (
    <div>
      <div>
        {todos.length > 0 &&
          todos.map((el) => {
            return (
              <p>
                {el.title}--{el.status}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
