import {
  GET_TODO_FAILURE,
  GET_TODO_PENDING,
  GET_TODO_SUCCESS,
} from "./actionType";

const initalState = {
  isLoading: false,
  isError: false,
  todos: [],
};
const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_TODO_PENDING:
      return { ...state, isLoading: true };
    case GET_TODO_SUCCESS:
      return { ...state, isLoading: false, isError: false, todos: payload };
    case GET_TODO_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
