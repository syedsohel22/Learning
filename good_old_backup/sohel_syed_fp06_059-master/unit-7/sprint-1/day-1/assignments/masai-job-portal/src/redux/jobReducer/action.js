import axios from "axios";
import {
  GET_JOB_POST_SUCESSE,
  POST_JOB_POST_SUCESSE,
  JOB_POST_FAILURE,
  JOB_POST_PENDING,
} from "./actionTypes";

const API =
  "https://masai-job-portal-json-server-api.onrender.com/api/jobposts";
export const postJobPostFn = (formData) => (dispatch) => {
  dispatch({ type: JOB_POST_PENDING });
  return axios
    .post(`${API}`, formData)
    .then((res) => {
      dispatch({ type: POST_JOB_POST_SUCESSE, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: JOB_POST_FAILURE });
      console.log(err);
    });
};

export const getJobPostFn = (query) => (dispatch) => {
  dispatch({ type: JOB_POST_PENDING });

  return axios
    .get(`${API}${query}`)
    .then((res) => {
      dispatch({ type: GET_JOB_POST_SUCESSE, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: JOB_POST_FAILURE });
      console.log(err);
    });
};
