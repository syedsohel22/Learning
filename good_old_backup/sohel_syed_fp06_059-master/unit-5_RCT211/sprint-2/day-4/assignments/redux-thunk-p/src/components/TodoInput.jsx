import React from "react";
import { useDispatch } from "react-redux";
import { getTodosFn } from "../redux/action";

const TodoInput = () => {
  const [title, settitle] = React.useState("");
  const dispatch = useDispatch();

  console.log(title);
  const handleAdd = () => {
    dispatch(getTodosFn);
    settitle("");
  };
  return (
    <div>
      <input
        placeholder="Add Todos"
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
