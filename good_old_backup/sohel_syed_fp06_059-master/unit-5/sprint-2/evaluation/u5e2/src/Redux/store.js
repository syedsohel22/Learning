import { reducer } from "./reducer";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// NOTE: use this store variable to create a store.
export const store = legacy_createStore(reducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}

console.log(store.getState());
