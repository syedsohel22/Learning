//action creator functions here
import {
  GET_TODOS_REQUEST,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  ADD_TODOS_ERROR,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
} from "./actionTypes";
export const getTodoReqestAction = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

export const getTodoSuccessAction = (payload) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: payload,
  };
};
export const getTodoErrorAction = () => {
  return {
    type: GET_TODOS_ERROR,
  };
};

export const addTodoRequestAction = () => {
  return {
    type: ADD_TODOS_REQUEST,
  };
};
export const addTodoSuccessAction = (payload) => {
  return {
    type: ADD_TODOS_SUCCESS,
    payload: payload,
  };
};
export const addTodoErrorAction = () => {
  return {
    type: ADD_TODOS_ERROR,
  };
};
