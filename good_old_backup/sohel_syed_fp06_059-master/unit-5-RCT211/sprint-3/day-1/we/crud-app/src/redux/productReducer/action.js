import axios from "axios";
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from "./actionType";

export const addProduct = (data) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });

  return axios
    .post(`http://localhost:8080/products`, data)
    .then((res) => {
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: ADD_PRODUCT_FAILURE });
    });
};

export const getProduct = () => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });

  return axios
    .get(`http://localhost:8080/products`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ADD_PRODUCT_FAILURE });
    });
};
