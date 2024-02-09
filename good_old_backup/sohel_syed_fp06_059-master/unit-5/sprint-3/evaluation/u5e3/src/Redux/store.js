// DO NOT rename the reducer
import { reducer } from "./reducer";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = legacy_createStore(reducer, applyMiddleware(thunk));
//console.log(store.getState());
export { store };

//NOTE: Do not remove this code, it is used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
