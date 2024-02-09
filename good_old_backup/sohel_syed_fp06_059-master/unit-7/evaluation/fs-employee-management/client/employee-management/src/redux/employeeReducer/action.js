import axios from "axios";
import { FAILURE, GET_EMPLOYEE, PENDING } from "./actionTypes";
import api from "../../components/api";
export const getEmployeeFn = () => (dispatch) => {
  dispatch({ type: PENDING });

  axios
    .get(`${api}/employees`,{})
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_EMPLOYEE, emp: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FAILURE });
    });
};
export const postEmployeeFn = () => (dispatch) => {};
export const updateEmployeeFn = () => (dispatch) => {};
export const deleteEmployeeFn = () => (dispatch) => {};
