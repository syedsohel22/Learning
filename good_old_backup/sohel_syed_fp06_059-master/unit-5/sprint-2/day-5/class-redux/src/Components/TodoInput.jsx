import React, { useState } from "react";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input value={title}/>
      <button>Add Todo</button>
    </div>
  );
};

export default TodoInput;
