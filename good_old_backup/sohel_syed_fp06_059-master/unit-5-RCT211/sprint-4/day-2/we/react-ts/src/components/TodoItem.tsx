import React from "react";
import { updateTodo } from "../api";
import { Todo } from "../constant";
interface updatetoggleprop extends Todo {
  update: () => void;
}
const TodoItem = ({ title, status, id, update }: updatetoggleprop) => {
  const handleToggle = () => {
    updateTodo(id, status);
    update();
  };
  return (
    <div>
      <p>
        {title}--{status ? "True" : "False"}
      </p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default TodoItem;
