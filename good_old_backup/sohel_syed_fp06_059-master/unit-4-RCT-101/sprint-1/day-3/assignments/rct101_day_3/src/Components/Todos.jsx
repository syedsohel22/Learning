import React, { useState } from "react";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodos = () => {
    setTodos([...todos, ...text]);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input value={text} onChange={handleChange} placeholder="Add To Do" />
      <button onClick={handleAddTodos}>ADD</button>
      <br />
      {todos.map((el) => {
        <p> {el.todos}</p>;
      })}
    </div>
  );
};

export default Todos;
