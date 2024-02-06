import axios from "axios";
import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./actionType";

export const singInfn = (data) => (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });
  axios
    .post("https://reqres.in/api/login", data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SIGNIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNIN_FAILURE });
    });
};
