import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
} from "./actionTypes";
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //get Product
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    //ADD Product
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };

    //Edit Product

    case EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    // Delete Product

    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    default:
      return state;
  }
};
