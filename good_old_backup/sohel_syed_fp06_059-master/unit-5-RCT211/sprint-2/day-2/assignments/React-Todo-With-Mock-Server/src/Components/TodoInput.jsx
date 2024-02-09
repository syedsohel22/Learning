import React, { useState } from "react";

const TodoInput = ({ handleAddTodo }) => {
  const [input, setInput] = useState("");

  //handle ADD TODO
  const handleAdd = () => {
    // console.log(handleAddTodo);
    handleAddTodo(input);
    // console.log(input);
    setInput("");
  };
  return (
    <div>
      <input
        placeholder="ADD TODO"
        data-testid="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="add-button" onClick={handleAdd}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
