import React, { useState } from "react";
import { store } from "../Redux/store";

const CounterValue = () => {
  const [count, setCount] = useState(0);
  const { getState, subscribe } = store;
  subscribe(() => {
    // console.log("state change", getState());
    setCount((prev) => prev + 1);
  });
  console.log(getState());
  // const counter = getState(); //get the counter value from the Redux store
  return <div data-testid="counterValue">{getState().counter}</div>;
};

export default CounterValue;
