import { ADD, REDUCE } from "./actionTypes";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, counter: counter + payload };
    case REDUCE:
      return { ...state, counter: counter - payload };
    default:
      return state;
  }
};
export default reducer;
