import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };

    case LOGIN_FAILURE:
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
};

export { reducer };
