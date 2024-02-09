import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h1> {count}</h1>

      <button onClick={() => setCount((p) => p - 1)}>-</button>
      <button onClick={() => setCount((p) => p + 1)}>+</button>
    </div>
  );
}

export default App;
