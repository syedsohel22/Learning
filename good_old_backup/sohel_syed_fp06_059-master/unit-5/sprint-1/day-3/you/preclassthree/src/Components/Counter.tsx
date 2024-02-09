import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        {/* <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button> */}
        <Button handleClick={() => setCount(count - 1)}>Minus</Button>
        <Button handleClick={() => setCount(count + 1)}>Plus</Button>
      </div>
    </div>
  );
};

export default Counter;
