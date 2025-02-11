import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const { counter } = useSelector((state) => {
    return state.counter;
  });
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
