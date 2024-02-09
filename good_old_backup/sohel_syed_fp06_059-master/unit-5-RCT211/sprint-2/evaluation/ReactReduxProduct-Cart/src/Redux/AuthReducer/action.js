import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import { axios } from "axios";
export const login = (payload) => (dispatch) => {
  // Complete login Functionality
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(`https://reqres.in/`, payload)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.token });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
