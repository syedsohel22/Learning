//Write the API calling functions and action creator functions here

import * as types from "./actionTypes";
import axios from "axios";

//get Posts
const getPosts = () => (dispatch) => {
  //dispatch({ type: types.GET_POSTS });

  return axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`)
    .then((res) => {
      dispatch({ type: types.GET_POSTS, payload: res.data });
      // console.log(res.data);
    });
};

//add Posts
const addPosts = (payload) => async (dispatch) => {
  dispatch({ type: types.ADD_POST });
  try {
    const res = await axios.post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`,
      payload
    );
    dispatch({ type: types.ADD_POST, payload: res.data });
    console.log(res.data);
  } catch (e) {
    dispatch({ type: types.APP_ERROR, payload: e });
  }
};
// patch post
const editPost = (id, payload) => async (dispatch) => {
  dispatch({ type: types.TOGGLE_LIKE });
  try {
    const res = await axios.patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${id}`,
      payload
    );
    dispatch({ type: types.TOGGLE_LIKE, payload: res.data });
  } catch (e) {
    dispatch({ type: types.APP_ERROR, payload: e });
  }
};
export { getPosts, addPosts, editPost };
