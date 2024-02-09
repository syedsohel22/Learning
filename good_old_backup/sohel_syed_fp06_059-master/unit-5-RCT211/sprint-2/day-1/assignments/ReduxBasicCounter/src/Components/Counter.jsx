import React from "react";

import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import { store } from "../Redux/store";
const Counter = () => {
  const { getState } = store;
  console.log(getState());
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue />
      <CounterButtons />

      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
