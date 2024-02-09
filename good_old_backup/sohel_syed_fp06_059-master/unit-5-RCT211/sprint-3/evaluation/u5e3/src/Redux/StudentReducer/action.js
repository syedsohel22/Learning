import {
  STUDENT_REQUEST_FAILURE,
  STUDENT_REQUEST_PENDING,
  STUDENT_REQUEST_SUCCESS,
} from "./actionTypes";
import axios from "axios";
//console.log(process.env.REACT_APP_JSON_SERVER_PORT);

export const getStudent = () => (dispatch) => {
  dispatch({ type: STUDENT_REQUEST_PENDING });

  return axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`)
    .then((res) => {
      //  console.log(res.data);
      dispatch({ type: STUDENT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: STUDENT_REQUEST_FAILURE });
    });
};
