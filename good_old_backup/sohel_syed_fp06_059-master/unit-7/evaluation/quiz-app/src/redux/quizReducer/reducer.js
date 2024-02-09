import {
  GET_QUIZ_PENDING,
  GET_QUIZ_REJECT,
  GET_QUIZ_SUCCESS,
} from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  quiz: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_QUIZ_PENDING:
      return { ...state, isLoading: true, isError: false };
    case GET_QUIZ_SUCCESS:
      return { ...state, isLoading: false, isError: false, quiz: payload };
    case GET_QUIZ_REJECT:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
