import {
  BOOK_REQUEST_FAILURE,
  BOOK_REQUEST_PENDING,
  BOOK_REQUEST_SUCCESS,
} from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  books: [],
};
export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case BOOK_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case BOOK_REQUEST_SUCCESS:
      return { ...state, isLoading: false, books: payload };
    case BOOK_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
