//use this variable to create the redux store.

import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

//the initial data of the redux store should be {counter: 10}
const initalState = {
  counter: 10,
};
const store = legacy_createStore(reducer, initalState);

export { store };
console.log("store-", store);
