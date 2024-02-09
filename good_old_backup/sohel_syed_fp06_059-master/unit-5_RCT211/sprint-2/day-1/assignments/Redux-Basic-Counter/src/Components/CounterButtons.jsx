import React from "react";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import { store } from "../Redux/store";

const CounterButtons = (val) => {
  const { dispatch } = store;
  const handleAdd = () => {
    dispatch(handleAddActionObj(val));
  };
  const handleReduce = () => {
    dispatch(handleReduceActionObj(val));
  };
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleAdd}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={handleReduce}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
