import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  POST_TODOS_SUCCESS,
} from "./actionTypes";

const inintalState = {
  isLoading: false,
  isError: false,
  todos: [],
};

export const reducer = (state = inintalState, { type, paylaod }) => {
  switch (type) {
    case GET_TODOS_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODOS_SUCCESS:
      return { ...state, isLoading: false, todos: paylaod };
    case GET_TODOS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_TODOS_SUCCESS:
      return { ...state, isLoading: false,  };
    default:
      return state;
  }
};
