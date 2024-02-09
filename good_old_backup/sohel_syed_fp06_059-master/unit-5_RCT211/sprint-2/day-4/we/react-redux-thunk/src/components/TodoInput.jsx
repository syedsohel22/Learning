import React, { useState } from "react";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const handleAdd = () => {};
  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="Add Toodos"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default TodoInput;
