import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/action";

const TodoItem = ({ id, value, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {value} --{" "}
      <button
        onClick={() =>
          dispatch(
            updateTodo(id, {
              isCompleted: !isCompleted,
            })
          )
        }
      >
        {isCompleted ? "Completed" : "InCompleted"}
      </button>
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
