import * as types from "./actiontype";

const handleAdd = (payload) => {
  return {
    type: types.ADD,
    payload,
  };
};

const handleReduce = (payload) => {
  return {
    type: types.REDUCE,
    payload,
  };
};

export { handleAdd, handleReduce };
