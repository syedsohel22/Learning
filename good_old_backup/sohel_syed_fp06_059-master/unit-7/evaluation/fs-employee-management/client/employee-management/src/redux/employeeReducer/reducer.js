import { FAILURE, GET_EMPLOYEE, PENDING } from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  emp: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case PENDING:
      return { ...state, isLoading: true, isError: false };
    case FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_EMPLOYEE:
      return { ...state, isLoading: false, isError: false, emp: payload };
    default:
      return state;
  }
};
