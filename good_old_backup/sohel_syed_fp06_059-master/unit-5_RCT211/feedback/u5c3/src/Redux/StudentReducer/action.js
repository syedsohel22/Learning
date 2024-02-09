import axios from "axios";
import {
  STUDENT_REQUEST_FAILURE,
  STUDENT_REQUEST_PENDING,
  STUDENT_REQUEST_SUCCESS,
} from "./actionTypes";
const studentRequestPending = () => {
  return { type: STUDENT_REQUEST_PENDING };
};
const studentRequestFailure = () => {
  return { type: STUDENT_REQUEST_FAILURE };
};
const studentRequestSuccess = (payload) => {
  return { type: STUDENT_REQUEST_SUCCESS, payload };
};

export const getStudents = (paramObj) => (dispatch) => {
  dispatch(studentRequestPending());
  axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,
      paramObj
    )
    .then((res) => {
      dispatch(studentRequestSuccess(res.data));
      console.log("from-action", res.data);
      return res.data;
    })
    .catch((err) => {
      dispatch(studentRequestFailure());
      console.log(err);
    });
};
