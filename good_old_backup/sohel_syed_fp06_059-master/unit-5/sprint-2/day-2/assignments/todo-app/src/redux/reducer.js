import { GET_TODOS, UPDATE_TODO, DELETE_TODO, ADD_TODO } from "./actionTypes";

const initialValue = {
  todos: [],
};



export const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_TODOS: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case UPDATE_TODO: {
      const updateTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload.changes,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updateTodos,
      };
    }
    case DELETE_TODO: {
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    }
    default: {
      return state;
    }
  }
};
