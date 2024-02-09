import { TODO_FAILURE, TODO_REQUEST } from "./actionTypes";

export const todoRequestACtion = () => {
  return { type: TODO_REQUEST };
};

export const todoFailureAction = () => {
  return { type: TODO_FAILURE };
};
