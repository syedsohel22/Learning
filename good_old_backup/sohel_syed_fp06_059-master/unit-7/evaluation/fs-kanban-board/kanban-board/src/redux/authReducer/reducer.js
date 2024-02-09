import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./actionType";

const intialState = {
  isLoading: false,
  isError: false,
  token: "",
  isAuth: false,
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SIGNIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case SIGNIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload,
        isAuth: true,
      };
    default:
      return state;
  }
};
