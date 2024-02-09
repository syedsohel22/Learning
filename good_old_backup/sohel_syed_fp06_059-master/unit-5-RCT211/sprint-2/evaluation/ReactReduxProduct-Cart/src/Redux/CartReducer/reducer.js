import { ADD_TO_CART } from "./actionTypes";

const initState = {
  cart: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, card: payload };
    default:
      return state;
  }
};

export { reducer };
