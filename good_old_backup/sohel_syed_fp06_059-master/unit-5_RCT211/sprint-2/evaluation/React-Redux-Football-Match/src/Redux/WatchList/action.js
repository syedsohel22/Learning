import axios from "axios";
import { ADD_TO_WATCHLIST } from "./actionTypes";

export const addToWatchFn = (id) => (dispatch) => {
  return axios
    .post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches/${id}`
    )
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_TO_WATCHLIST });
    })
};
