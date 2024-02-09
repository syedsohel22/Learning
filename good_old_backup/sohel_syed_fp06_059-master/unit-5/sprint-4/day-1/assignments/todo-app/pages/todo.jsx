import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState("");
  const [item, setItem] = useState([]);
  const handleChange = (e) => {
    setTodos(e.target.value);
  };
  console.log(todos);
  const handleClick = () => {
    setItem([...item, todos]);
  };
  return (
    <div>
      <h1>Todo-App</h1>
      <div>
        <input placeholder="add Todos" value={todos} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <p>{item}</p>
      </div>
    </div>
  );
};

export default Todo;
