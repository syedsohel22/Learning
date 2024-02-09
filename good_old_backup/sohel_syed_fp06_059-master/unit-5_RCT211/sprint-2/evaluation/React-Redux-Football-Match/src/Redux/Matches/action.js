import axios from "axios";
import {
  GET_MATCH_FAILURE,
  GET_MATCH_REQUEST,
  GET_MATCH_SUCCESS,
} from "./actionTypes";

export const getMatches = (paramObj) => (dispatch) => {
  // Complete the logic

  dispatch({ type: GET_MATCH_REQUEST });
  return axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches`,
      paramObj
    )
    .then((res) => {
      dispatch({ type: GET_MATCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_MATCH_FAILURE });
    });
};

export const sortMatchFn = (paramstr) => (dispatch) => {
  console.log(paramstr);
  return axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches`,
      paramstr
    )
    .then((res) => {
      dispatch({ type: GET_MATCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_MATCH_FAILURE });
    });
};
