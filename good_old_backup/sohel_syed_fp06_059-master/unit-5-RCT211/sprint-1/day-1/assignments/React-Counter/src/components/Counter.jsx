import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const double = () => {
    setCount(count * 2);
  };
  return (
    <div>
      <h2 data-testid="counter-header">Counter</h2>
      <h3 data-testid="count">{count}</h3>
      <button onClick={minus} data-testid="subtract-btn">
        -
      </button>
      <button onClick={add} data-testid="add-btn">
        +
      </button>
      <button onClick={double} data-testid="double-btn">
        Double
      </button>
    </div>
  );
};

export default Counter;
