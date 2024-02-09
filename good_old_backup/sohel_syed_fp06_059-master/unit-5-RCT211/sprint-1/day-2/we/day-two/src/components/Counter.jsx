import React, { useReducer } from "react";


const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return state + payload;
    case "REDUCE":
      return state - payload;
    default:
      return state;
  }
};

const initialState = 0;
const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const addHandler = () => {
    dispatch({ type: "ADD", payload: 1 });
  };

  const reduceHandler = () => {
    dispatch({ type: "REDUCE", payload: 1 });
  };
  return (
    <div>
      <h1>counter:{count}</h1>
      <button onClick={addHandler}>ADD</button>
      <button onClick={reduceHandler}>reduce</button>
    </div>
  );
};

export default Counter;
