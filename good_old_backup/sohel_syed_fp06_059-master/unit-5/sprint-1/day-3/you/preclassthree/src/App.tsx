import React from "react";

import "./App.css";
import Button from "./Components/Button";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <Button color="red">hello</Button>
      <Button color="green">okay</Button>
      <Button color="blue">bye</Button>
      <br></br>
      <br></br>
      <br></br>
      <Counter />
    </div>
  );
}

export default App;
