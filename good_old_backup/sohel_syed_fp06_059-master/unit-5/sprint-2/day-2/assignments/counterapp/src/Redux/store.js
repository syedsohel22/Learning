import {legecy_createStore} from "redux";
import { reducer } from "./reducer";

const store=legecy_createStore(reducer);
export {store};