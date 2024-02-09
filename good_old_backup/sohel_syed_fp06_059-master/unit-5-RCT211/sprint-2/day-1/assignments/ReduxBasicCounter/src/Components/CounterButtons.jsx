import React from "react";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import { store } from "../Redux/store";
const CounterButtons = () => {
  const { dispatch } = store;
  // console.log(store, dispatch);
  const handleADD = () => {
    dispatch(handleAddActionObj());
  };
  const handleREDUCE = () => {
    dispatch(handleReduceActionObj());
  };
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleADD}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={handleREDUCE}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
