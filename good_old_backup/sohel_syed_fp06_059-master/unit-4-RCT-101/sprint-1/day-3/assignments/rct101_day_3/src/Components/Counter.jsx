import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const handleadd = () => {
    setCount(count + 1);
  };

  const handlereduce = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>COUNTER</h1>
      <h1>Count is {count}</h1>
      <button onClick={handleadd}>Increace</button>
      <button onClick={handlereduce}>Decreace</button>
    </div>
  );
};

export default Counter;
