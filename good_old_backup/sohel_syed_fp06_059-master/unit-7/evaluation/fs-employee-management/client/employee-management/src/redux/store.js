import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as employeeReducer } from "./employeeReducer/reducer";
const rootReducer = combineReducers({
  employeeReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
