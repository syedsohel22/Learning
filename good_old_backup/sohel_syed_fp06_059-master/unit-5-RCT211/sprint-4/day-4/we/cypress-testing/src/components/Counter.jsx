import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 data-testid="counter">Counter:{count}</h1>
      <button onClick={() => setCount((p) => p - 1)} className="add">
        -
      </button>
      <button onClick={() => setCount((p) => p + 1)} className="reduce">
        +
      </button>
    </div>
  );
};

export default Counter;
