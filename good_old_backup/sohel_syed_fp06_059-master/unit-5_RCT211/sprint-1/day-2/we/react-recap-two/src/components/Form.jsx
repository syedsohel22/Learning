import React, { useReducer } from "react";
const formReducer = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, payload: state.username };
    case "userpassword":
      return { ...state, payload: state.userpassword };
    default:
      return state;
  }
};
const Form = () => {
  const [state, dispatch] = useReducer(formReducer, {
    username: "",
    userpassword: "",
  });

  const handleSubmitFn = () => {
    console.log(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmitFn}>
        <input
          type="text"
          value={state.username}
          placeholder="userName"
          onChange={(e) =>
            dispatch({ type: "username", payload: e.target.value })
          }
        />{" "}
        <input
          type="text"
          value={state.userpassword}
          placeholder="userPassword"
          onChange={(e) =>
            dispatch({ type: "userpassword", payload: e.target.value })
          }
        />{" "}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
