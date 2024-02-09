import axios from "axios";
import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";

export const getTodosFn = () => (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });

  return axios
    .get(`http://localhost:8080/todos`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_TODOS_FAILURE });
      alert(err);
    });
};

export const postTodosFn = () => (dispatch) => {
    
};
