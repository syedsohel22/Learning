import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
enum TodoStatus {
  PENDING = "pending",
  DONE = "done",
}

export interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
}
const Todos = () => {
  // state managemet
  const [todos, setTodos] = useState<Todo[]>([]);
  // add todo

  const handleAdd = (title: string) => {
    const payload: Todo = {
      id: Date.now(),
      title,
      status: TodoStatus.PENDING,
    };
    setTodos([...todos, payload]);
  };
  return (
    <div>
      <TodoInput handleAdd={handleAdd} />
      <TodoList data={todos} />
    </div>
  );
};

export default Todos;
