import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAction, ReduceAction } from "../redux/action";

const Counter = () => {
  const data = useSelector((state) => state.counter);
  console.log(data);
  const dispatch = useDispatch();
  const handelAdd = () => {
    dispatch(AddAction(1));
  };
  const handelReduce = () => {
    dispatch(ReduceAction(1));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count:{data}</h3>
      <button onClick={handelReduce}>-</button>
      <button onClick={handelAdd}>+</button>
    </div>
  );
};

export default Counter;
