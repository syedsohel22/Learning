import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [turn, setTurn] = useState(false);
  //  console.log(counter);
  const addOne = () => {
    setCounter(() => counter + 1);
    setTurn(!turn);
  };

  const addTwo = () => {
    setCounter(counter + 2);
    setTurn(!turn);
  };

  const handleReset = () => {
    setCounter(0);
    setTurn(!turn);
  };

  return (
    <div className="App">
      {/* Display Player Turn here */}
      <span data-testid="turn-container">{turn ? "Player 2" : "Player 1"}</span>

      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button
          data-testid="add-one-btn"
          disabled={counter == 10}
          onClick={addOne}
        >
          +1
        </button>
        <button
          data-testid="add-two-btn"
          disabled={counter >= 9}
          onClick={addTwo}
        >
          +2
        </button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{counter}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">
        {counter == 10 ? turn? "Player 1" :"Player 2" : "Still To Be Decided"}
      </span>

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
