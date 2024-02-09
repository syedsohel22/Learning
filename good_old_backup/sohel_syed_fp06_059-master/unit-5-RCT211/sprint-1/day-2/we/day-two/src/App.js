import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";
function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prev) => prev + 1);
  };
  const sub = () => {
    setCount((prev) => prev - 1);
  };

  console.log(1)
  useEffect(()=>{
    console.log(2);
    return ()=>{
      console.log(3);
    }
  },[]);
  useEffect(()=>{
    console.log(4);
    return ()=>{
      console.log(5);
    }
  },[]);
  console.log(6);
  console.log(null==undefined);
  return (
    <div className="App">
      <>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <button onClick={sub}>-</button>
        <button onClick={add}>+</button>
      </>
      <Counter />
      <Form />
    </div>
  );
}

export default App;
