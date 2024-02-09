import { legacy_createStore } from "redux";
import reducer from "./reducer";

const initalState = {
  counter: 0,
  todos: [],
};
const store = legacy_createStore(reducer, initalState);

export default store;
