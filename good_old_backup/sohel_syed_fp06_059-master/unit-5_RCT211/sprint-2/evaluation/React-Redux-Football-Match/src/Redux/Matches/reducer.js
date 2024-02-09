import {
  GET_MATCH_FAILURE,
  GET_MATCH_REQUEST,
  GET_MATCH_SUCCESS,
} from "./actionTypes";

const initalstate = {
  isLoading: false,
  isError: false,
  matches: [],
};
export const reducer = (state = initalstate, { type, payload }) => {
  // Complete the logic
  switch (type) {
    case GET_MATCH_REQUEST:
      return { ...state, isLoading: true };
    case GET_MATCH_SUCCESS:
      return { ...state, isLoading: false, matches: payload };
    case GET_MATCH_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
