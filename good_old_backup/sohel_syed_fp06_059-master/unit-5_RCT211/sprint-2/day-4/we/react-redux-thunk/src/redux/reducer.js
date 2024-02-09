import {
  GET_TODO_FAILURE,
  GET_TODO_PENDING,
  GET_TODO_SUCESS,
} from "./actionTypes";

const inintalstate = {
  isLoading: false,
  isError: false,
  todos: [],
};
const reducer = (state = inintalstate, { type, payload }) => {
  switch (type) {
    case GET_TODO_PENDING:
      return { ...state, isLoading: true };
    case GET_TODO_SUCESS:
      return { ...state, isLoading: false, todos: payload };
    case GET_TODO_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default reducer;
