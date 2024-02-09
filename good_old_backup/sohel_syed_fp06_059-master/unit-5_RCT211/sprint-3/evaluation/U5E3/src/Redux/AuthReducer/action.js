import axios from "axios";
import {
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_PENDING,
  LOGIN_REQUEST_SUCCESS,
} from "./actionTypes";

export const login = (userData) => (dispatch) => {
  // Complete login logic here
  dispatch({ type: LOGIN_REQUEST_PENDING });

  axios
    .post(`https://reqres.in/api/login`, userData)
    .then((res) => {
      console.log(res.data.token);
      dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_REQUEST_FAILURE });
    });
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
