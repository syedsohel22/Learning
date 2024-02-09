import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../redux/action";
const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          id: v4(),
          value,
          isCompleted: false,
        })
      );
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type here ..."
        value={value}
        onChange={handleChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default TodoInput;
