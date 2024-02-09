import axios from "axios";
import {
  API_FAIL,
  COFFEE_API_SUCCESS,
  RESTAURANT_API_SUCCESS,
  EMPLOYEE_API_SUCCESS,
} from "./actionType";

export const getCoffeeData = () => (dispatch) => {
  //only success and fail will dispatch

  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`
    )
    .then((res) => {
      console.log("Coffee", res.data.data);
      dispatch({ type: COFFEE_API_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: API_FAIL, payload: err });
    });
  //dispatch axios
};

export const getRestaurantData = () => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
    )
    .then((res) => {
      console.log("restaurants", res.data.data);
      dispatch({ type: RESTAURANT_API_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: API_FAIL, payload: err });
    });
};

export const getEmployeeData = () => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`
    )
    .then((res) => {
      console.log("employees", res.data.data);
      dispatch({ type: EMPLOYEE_API_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: API_FAIL, payload: err });
    });
};
