import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (userData) => (dispatch) => {
  // Complete the login functionality
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(`https://reqres.in/api/login`, userData)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log("here",err);
      dispatch({ type: LOGIN_FAILURE });
    });
};
