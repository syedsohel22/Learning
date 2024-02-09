import {
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_PENDING,
  LOGIN_REQUEST_SUCCESS,
} from "./actionTypes";
const initalstate = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};
export const reducer = (state = initalstate, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case LOGIN_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case LOGIN_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
