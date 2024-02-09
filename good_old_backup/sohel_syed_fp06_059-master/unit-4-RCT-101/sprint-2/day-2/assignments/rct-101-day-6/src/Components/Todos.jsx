import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text,
    };

    const todoListAfterNewItemAdditon = [...todos, newItem];
    
    setTodos(todoListAfterNewItemAdditon);
  };

  const handleToggle = (id) => {
    const todosAfterUpdation = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );

    setTodos(todosAfterUpdation);
  };

  const handleDelete = (id) => {
    const todosAfterDeletion = todos.filter((todo) => todo.id !== id);
    setTodos(todosAfterDeletion);
  };
  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
