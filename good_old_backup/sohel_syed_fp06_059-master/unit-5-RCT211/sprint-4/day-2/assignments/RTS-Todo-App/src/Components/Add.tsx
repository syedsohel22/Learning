import React, { useState } from "react";

export interface Todoobj {
  id?: number;
  title: string;
  description: string;
  status: boolean;
}
const Add = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [todos, setTodos] = useState<Todoobj[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myobj: Todoobj = {
      title,
      description,
      status: false,
    };
    setTodos((p) => [...p, myobj]);
    localStorage.setItem("todo", JSON.stringify(todos));
    setDesc("");
    setTitle("");
  };

  const handleChangeinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeTextErea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };
  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <input
        data-testid="title"
        type="text"
        id="title"
        value={title}
        onChange={handleChangeinput}
      />
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
        value={description}
        onChange={handleChangeTextErea}
      ></textarea>
      <input type="submit" value="Craete Todo" />
    </form>
  );
};

export default Add;
