import axios from "axios";
import {
  BOOK_REQUEST_FAILURE,
  BOOK_REQUEST_PENDING,
  BOOK_REQUEST_SUCCESS,
} from "./actionTypes";

export const getBooks = (paramObj) => (dispatch) => {
  // Write logic here
  dispatch({ type: BOOK_REQUEST_PENDING });
  axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,
      paramObj
    )
    .then((res) => {
      console.log("data-action", res.data);
      dispatch({ type: BOOK_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: BOOK_REQUEST_FAILURE });
    });
};

export const editBook = () => {
  // Write logic here
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
