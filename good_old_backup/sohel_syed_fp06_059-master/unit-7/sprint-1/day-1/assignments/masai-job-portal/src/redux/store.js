import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as jobReducer } from "./jobReducer/reducer";
// adding root reducer for future update and additional reducer may be we need in future.
const rootReducer = combineReducers({
  jobReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
