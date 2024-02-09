import React, { useState } from "react";

interface TodoInputProps{
  handl
}
const TodoInput = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleClick = () => {

  };
  return (
    <div>
      <input
        placeholder="add todo here"
        value={todoTitle}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoInput;
