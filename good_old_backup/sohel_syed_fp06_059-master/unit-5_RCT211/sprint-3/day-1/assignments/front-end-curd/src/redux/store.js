import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as productReducer } from "./productReducer/reducer";
const rootReducer = {
  productReducer,
};
const store = legacy_createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);

export default store;
