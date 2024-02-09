import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>React-Redux-Thunk</h1>
      <div>
        <h2>TODO APP</h2>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
