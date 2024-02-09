import {
  GET_JOB_POST_SUCESSE,
  JOB_POST_FAILURE,
  JOB_POST_PENDING,
  POST_JOB_POST_SUCESSE,
} from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case JOB_POST_PENDING:
      return { ...state, isLoading: true };
    case JOB_POST_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case GET_JOB_POST_SUCESSE:
      return { ...state, isLoading: false, data: [...payload] };
    case POST_JOB_POST_SUCESSE:
      return { ...state, isLoading: false, isError: false };
    default:
      return state;
  }
};
