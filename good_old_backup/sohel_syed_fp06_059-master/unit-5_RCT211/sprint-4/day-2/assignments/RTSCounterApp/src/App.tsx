import React, { useState } from "react";
function App() {
  const count = localStorage.getItem("counter");
  const [number, setNumber] = useState<number>((count && +count) || 0);
  const handleClick = (val: number) => {
    const combo: number = number + val;
    setNumber(combo);
    localStorage.setItem("counter", JSON.stringify(combo));
  };
  return (
    <div className="App">
      <h1 data-testid="counter">
        {/* Show counter here  */}
        {number}
      </h1>
      <button data-testid="increment" onClick={() => handleClick(1)}>
        Increment
      </button>
      <button data-testid="decrement" onClick={() => handleClick(-1)}>
        Decrement
      </button>
      <button data-testid="increment5" onClick={() => handleClick(5)}>
        Increment 5 times
      </button>
      <button data-testid="decrement5" onClick={() => handleClick(-5)}>
        Decrement 5 times
      </button>
    </div>
  );
}

export default App;
