import "./App.css";
import React from "react";
import TitleCounter from "./Components/TitleCounter";
import Todos from "./Components/Todos";
function App() {
  return (
    <div className="App">
      <TitleCounter />
      <Todos />
    </div>
  );
}

export default App;
