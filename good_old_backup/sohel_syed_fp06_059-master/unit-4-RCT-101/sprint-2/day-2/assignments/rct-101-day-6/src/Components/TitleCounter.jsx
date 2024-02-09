import React, { useState, useEffect } from "react";
const TitleCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Your Clicked ${count} times!`;
  }, [count]);
  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default TitleCounter;
