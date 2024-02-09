import useMyReducer from "../hooks/useMyReducer";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useMyReducer(reducer, { count: 0 });

  function handleIncrement() {
    dispatch({ type: "INCREMENT" });
  }

  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div>
      <h1>Counter App With Custom useReducer-Hook</h1>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
