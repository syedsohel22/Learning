import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as watchListReducer } from "./WatchList/reducer";
import { reducer as matchReducer } from "./Matches/reducer";
import { reducer as authReducer } from "./Authentication/reducer";
const rootReducer = combineReducers({
  watchListReducer,
  matchReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
console.log(store);
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
