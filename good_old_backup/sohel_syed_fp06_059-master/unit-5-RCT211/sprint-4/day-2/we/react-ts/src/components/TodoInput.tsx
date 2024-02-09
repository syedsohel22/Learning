import React, { useState } from "react";
import { postTodo } from "../api";

type todoupdateprop = {
  update: () => void;
};

const TodoInput = ({ update }: todoupdateprop) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postTodo(title);

    update();
    setTitle("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} placeholder="Enter Todo" onChange={handleChange} />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default TodoInput;
