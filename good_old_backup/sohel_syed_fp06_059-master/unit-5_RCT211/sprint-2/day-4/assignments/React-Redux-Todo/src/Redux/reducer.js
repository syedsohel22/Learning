import {
  ADD_TODOS_ERROR,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

//complete the reducer function
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODOS_SUCCESS:
      return { ...state, isLoading: false, todos: payload, isError: false };
    case GET_TODOS_ERROR:
      return { ...state, isError: true };
    case ADD_TODOS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case ADD_TODOS_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case ADD_TODOS_ERROR:
      return { ...state, isError: true };
    default:
      return state;
  }
};

export { reducer };
