import React from "react";
import { useDispatch } from "react-redux";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {
  const [title, setTitle] = React.useState("");
  //http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}
  console.log(process.env.REACT_APP_JSON_SERVER_PORT);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        data-testid="todo-input"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => e.target.value}
      />
      <button data-testid="todo-add-btn" onClick={()=>}>Add</button>
    </div>
  );
};

export default TodoInput;
