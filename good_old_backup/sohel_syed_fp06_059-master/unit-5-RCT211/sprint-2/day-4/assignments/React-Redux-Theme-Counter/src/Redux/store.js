import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
});

//console.log(counterReducer);
export const store = legacy_createStore(rootReducer);
