import React, { useState } from "react";

const Add = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const item = {
      title,
      description,
    };
    console.log(item);
  };
  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <input
        data-testid="title"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input type="submit" value="Craete Todo" />
    </form>
  );
};

export default Add;
