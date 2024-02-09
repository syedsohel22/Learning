import React from "react";
import { useDispatch } from "react-redux";

import { handleAdd, handleReduce } from "../Redux/action";
const CounterButtons = () => {
  const dispatch = useDispatch();

  // console.log(dispatch);

  const handleAddBtn = () => {
    dispatch(handleAdd(1));
  };

  const handleReduceBtn = () => {
    dispatch(handleReduce(1));
  };
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleAddBtn}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={handleReduceBtn}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
