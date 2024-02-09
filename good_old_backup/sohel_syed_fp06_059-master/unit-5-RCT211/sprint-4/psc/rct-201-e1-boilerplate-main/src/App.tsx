import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import useClock from "./hooks/useClock";

function App() {
  const { hours, minutes, Seconds } = useClock();
  return (
    <div className="App">
      <Clock hours={hours} minutes={minutes} secound={Seconds} />
      <List1 list={[1, 2, 3]} />
      <List1 list={[4, 5]} />
      {/* Clock */}
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
