import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

const loginSucces = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const login = (userData) => (dispatch) => {
  dispatch(loginRequest());

  return axios
    .post(`https:reqres.in/api/login`, userData)
    .then((res) => {
      dispatch(loginSucces(res.data.token));
    })
    .catch(() => {
      dispatch(loginFailure());
    });
};
