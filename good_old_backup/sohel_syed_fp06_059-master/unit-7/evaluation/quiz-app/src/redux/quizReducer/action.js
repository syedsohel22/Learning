// get quiz function
import axios from "axios";
import {
  GET_QUIZ_PENDING,
  GET_QUIZ_REJECT,
  GET_QUIZ_SUCCESS,
} from "./actionTypes";

export const getQuizFunc = (param) => (dispatch) => {
  dispatch({ type: GET_QUIZ_PENDING });

  axios
    .get(`https://opentdb.com/api.php?${param}`)
    .then((res) => {
      console.log(res.data.results);
      dispatch({ type: GET_QUIZ_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_QUIZ_REJECT });
    });
};
