import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as quizReducer } from "./quizReducer/reducer";
import { reducer as playerReducer } from "./playerReducer/reducer";
const rootReducer = combineReducers({
  // reducers
  quizReducer,
  playerReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());
