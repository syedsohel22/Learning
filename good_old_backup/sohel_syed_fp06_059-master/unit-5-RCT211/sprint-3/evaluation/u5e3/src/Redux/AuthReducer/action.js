import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
export const loginFunc = (data) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(`https://reqres.in/api/login`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};
