import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as cartReducer } from "./cartReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";
const rootReducer = {
  productReducer,
  cartReducer,
  authReducer,
};

export const store = legacy_createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);
