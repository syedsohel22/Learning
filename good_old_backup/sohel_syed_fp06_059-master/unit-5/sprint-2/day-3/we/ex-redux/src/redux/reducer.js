import * as types from "./actiontype";
const reducer = (oldState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD:
      return { ...oldState, count: oldState.count + payload };
    case types.REDUCE:
      return { ...oldState, count: oldState.count + payload };
    default:
      return oldState;
  }
};

export { reducer };
