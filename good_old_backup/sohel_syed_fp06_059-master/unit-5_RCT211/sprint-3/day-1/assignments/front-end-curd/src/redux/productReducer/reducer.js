import {
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initalState, { type, paylaod }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: paylaod };
    default:
      return state;
  }
};
