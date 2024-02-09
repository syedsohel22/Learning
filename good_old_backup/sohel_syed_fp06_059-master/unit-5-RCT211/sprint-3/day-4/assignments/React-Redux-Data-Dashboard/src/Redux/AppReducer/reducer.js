import * as types from "./actionType";

const initialState = {
  coffeeData: [],
  restaurantData: [],
  employeeData: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.COFFEE_API_SUCCESS:
      return { ...state, coffeeData: payload };
    case types.EMPLOYEE_API_SUCCESS:
      return { ...state, employeeData: payload };
    case types.RESTAURANT_API_SUCCESS:
      return { ...state, restaurantData: payload };
    default:
      return state;
  }
};

export { reducer };
