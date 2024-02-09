import "./App.css";
import { useState } from "react";
import { subscribe, count } from "./Redux/store";
function App() {
  const [forseUpdate, setForceUpdate] = useState(0);

  subscribe(() => {
    setForceUpdate((prev) => prev + 1);
  });
  const addHandler = () => {
    dispatchEvent({ type: "ADD", payload: 2 });
  };

  const reduceHandler = () => {};
  return (
    <div className="App">
      <h1>
        <i>Redux Class</i>
      </h1>
      <div>
        <h1>Count:{count}</h1>
        <button onClick={addHandler}>-</button>
        <button onClick={reduceHandler}>+</button>
      </div>
    </div>
  );
}

export default App;
