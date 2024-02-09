import "./App.css";
import Counter from "./Components/Counter";
import InputBox from "./Components/InputBox";
import Todos from "./Components/Todos";
import TodoStatus from "./Components/TodoStatus";
function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <InputBox />
      <hr />

      <Todos />

      <hr />
      <TodoStatus />
    </div>
  );
}

export default App;
