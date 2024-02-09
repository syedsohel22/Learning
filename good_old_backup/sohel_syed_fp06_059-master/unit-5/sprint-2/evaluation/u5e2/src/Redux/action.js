//Write the API calling functions here;
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

//Write the API calling functions here;
export const getProductRequestAction = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};
export const getProductSuccessAction = (payload) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
};
export const getProductFailureAction = () => {
  return {
    type: GET_PRODUCTS_FAILURE,
  };
};

export const addProductRequestAction = () => {
  return {
    type: ADD_PRODUCT_REQUEST,
  };
};
export const addProductSuccessAction = () => {
  return {
    type: ADD_PRODUCT_SUCCESS,
  };
};
export const addProductFailureAction = () => {
  return {
    type: ADD_PRODUCT_FAILURE,
  };
};

export const editProductRequestAction = () => {
  return {
    type: EDIT_PRODUCT_REQUEST,
  };
};
export const editProductSuccessAction = () => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
  };
};
export const editProductFailureAction = () => {
  return {
    type: EDIT_PRODUCT_FAILURE,
  };
};

export const deleteProductRequestAction = () => {
  return {
    type: DELETE_PRODUCT_REQUEST,
  };
};
export const deleteProductSuccessAction = () => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
  };
};
export const deleteProductFailureAction = () => {
  return {
    type: DELETE_PRODUCT_FAILURE,
  };
};
