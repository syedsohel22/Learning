import "./App.css";
import { useToggleItems } from "./hooks/useToggleItems";

function App() {
  const [item, handleToggle] = useToggleItems(["A", "B", "C"], 1);
  return (
    <div className="App">
      <h1>Custom Hooks</h1>

      <h1 data-testid="status">{item}</h1>
      <button data-testid="toggle" onClick={handleToggle}>
        Toggle
      </button>
    </div>
  );
}

export default App;
