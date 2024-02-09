import React, { useReducer, useState } from "react";
import { ProjectList } from "./ProjectList";

const initialState = {
  name: "",
  tech_stack: "",
  assigned_to: "",
  status: "pending",
};

//add your cases here
/*
"NAME"
"TECH_STACK"
"ASSIGNED_TO"
"STATUS"
"RESET" -
*/
const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "TECH_STACK":
      return { ...state, tech_stack: action.payload };
    case "ASSIGNED_TO":
      return { ...state, assigned_to: action.payload };
    case "STATUS":
      return { ...state, status: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const AddProject = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState([]);
  console.log("formdata", formData);
  console.log("inside add product", state);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, state]);
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <h1>Add Project</h1>
      <div className="form-wrapper" data-testid="form-wrapper">
        <form data-testid="form-element">
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Project Name</label>
            {/* Add Input box here */}
            <input
              type="text"
              name="name"
              onChange={(e) => {
                dispatch({ type: "NAME", payload: e.target.value });
              }}
              value={state.name}
            />
          </div>
          <div className="tech-stack-wrapper" data-testid="tech-stack-wrapper">
            <label>Tech Stack</label>
            {/* Provide select tag with name attribute `name="tech_stack"` */}
            {/* This Select Tag will have `data-testid="tech-stack-select` */}
            {/* `Option`-`Value`
- React - react
- Node - node
- Java -java
- Python - python */}
            <select
              name="tech_stack"
              data-testid="tech-stack-select"
              onChange={(e) => {
                dispatch({ type: "TECH_STACK", payload: e.target.value });
              }}
              value={state.tech_stack}
            >
              <option value="select">Select</option>
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="java">Java</option>
              <option value="python">python</option>
            </select>
          </div>
          <div
            className="assigned-to-wrapper"
            data-testid="assigned-to-wrapper"
          >
            <label>Assignmed to</label>
            {/* Provide select tag with name attribute `name="assigned_to"` */}
            {/* This Select Tag will have `data-testid="assigned-to-select` */}
            {/* `Option`-`Value`
- Nrupul - nrupul
- Albert - albert
- Aman - aman */}
            <select
              name="assigned_to"
              data-testid="assigned-to-select"
              onChange={(e) => {
                dispatch({ type: "ASSIGNED_TO", payload: e.target.value });
              }}
              value={state.assigned_to}
            >
              <option value="select">Select</option>
              <option value="nrupul">Nrupul</option>
              <option value="albert">Albert </option>
              <option value="aman">Aman</option>
            </select>
          </div>
          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status</label>
            {/* Provide checkbox  with name attribute `name="status"` */}
            <input
              type="checkbox"
              name="status"
              onChange={(e) => {
                dispatch({ type: "STATUS", payload: e.target.checked });
              }}
              value={state.status}
            />
          </div>
          <button onClick={handleSubmit}>SUBMIT</button>
        </form>
      </div>
      <h1>Project List</h1>
      {/* Show the project list here using `ProjectList` component */}
      <div>
          <ProjectList formData={formData} />
       {/* //\ {formData.length > 0 ? (
       // ) : (
          <h1 data-testid="no-project-container">No Project Found</h1>
    //    )} */}
      </div>
    </div>
  );
};

export { initialState, reducer };
