import {
  FAILURE,
  PENDING,
  POST_EMPLOYEE,
} from "../employeeReducer/actionTypes";
import api from "../../components/api";
import axios from "axios";
export const SignupFn = (payload) => (dispatch) => {
  dispatch({ type: PENDING });
  axios
    .post(`${api}/user/singup`, { payload })
    .then((res) => {
      dispatch({ type: POST_EMPLOYEE });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FAILURE });
    });
};
export const LoginFn = (payload) => (dispatch) => {
  dispatch({ type: PENDING });
  axios
    .post(`${api}/user/login`, { payload })
    .then((res) => {
      dispatch({ type: POST_EMPLOYEE });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FAILURE });
    });
};
