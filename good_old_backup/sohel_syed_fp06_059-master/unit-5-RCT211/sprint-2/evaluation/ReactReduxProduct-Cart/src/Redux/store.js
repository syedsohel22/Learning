import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { reducer as cartReducer } from "./CartReducer/reducer";

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer,
  cartReducer: cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
console.log("auth", store.getState().authReducer);
console.log("prodcut", store.getState().productReducer);
console.log("cartReducer", store.getState().cartReducer);
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
