// DO NOT rename the reducer
import { reducer } from "./reducer";



const store = {}

export { store };


//NOTE: Do not remove this code, it is used for calculating your score, if removed it will give you zero marks
if(window.Cypress){
  window.store = store;
}