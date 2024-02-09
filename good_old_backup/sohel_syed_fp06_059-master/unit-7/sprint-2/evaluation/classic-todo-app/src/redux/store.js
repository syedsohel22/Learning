import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as todoReducer } from "./todoReducer/reducer";
const rootReducer = combineReducers({
  todoReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
