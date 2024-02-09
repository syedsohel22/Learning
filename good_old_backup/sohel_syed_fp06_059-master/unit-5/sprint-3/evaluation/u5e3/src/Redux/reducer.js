import * as types from "./actionTypes";
const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  activePage: 1,
  perPage: 5,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_POSTS:
      return { ...oldState, isLoading: false, posts: payload };

    case types.ADD_POST:
      return {
        ...oldState,
        isLoading: false,
        posts: [payload, ...oldState.posts],
      };

    case types.TOGGLE_LIKE:
      return {
        ...oldState,
        isLoading: false,
      
      };

    default: {
      return oldState;
    }
  }
};

export { reducer };
