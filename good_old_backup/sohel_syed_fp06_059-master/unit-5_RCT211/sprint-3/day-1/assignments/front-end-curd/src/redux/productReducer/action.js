import axios from "axios";
import {
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

export const addProductFn = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  return axios
    .post(`http://localhost:8080/products`, newProduct)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: PRODUCT_FAILURE });
    });
};
