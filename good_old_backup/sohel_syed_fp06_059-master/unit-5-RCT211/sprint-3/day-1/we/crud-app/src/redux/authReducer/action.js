import axios from "axios";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (userdata) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(`https://reqres.in/api/login`, userdata)
    .then((res) => {
      console.log("from login page=>", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL });
    });
};
