import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  Products: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, Products: payload };
    default:
      return state;
  }
};
