import "./App.css";
import Pin from "./components/Pin";

function App() {
  return (
    <div className="App">
      <h1>Generic/Custom Component</h1>
      <Pin length={4} maxLength={1}/>
    </div>
  );
}

export default App;
