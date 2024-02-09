import React from "react";

const TodoInput = () => {
  return (
    <div>
      <input data-testid="todo-input" />
      <button data-testid="add-button">Add Todo</button>
    </div>
  );
};

export default TodoInput;
