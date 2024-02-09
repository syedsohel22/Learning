import React, { useReducer, useState } from "react";
import { ProjectList } from "./ProjectList";

const initialState = {
  name: "",
  tech_stack: "",
  assigned_to: "",
  status: "pending",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return { ...state, name: payload };
    case "TECH_STACK":
      return { ...state, tech_stack: payload };
    case "ASSIGNED_TO":
      return { ...state, assigned_to: payload };
    case "STATUS":
      return { ...state, status: payload ? "completed" : "pending" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
/**
 * 
"NAME"
"TECH_STACK"
"ASSIGNED_TO"
"STATUS"
"RESET"
 */
export const AddProject = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [project, setProject] = useState([]);
  console.log(state);
  console.log(project);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProject([...project, state]);
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <h1>Add Project</h1>
      <div className="form-wrapper" data-testid="form-wrapper">
        <form data-testid="form-element" onSubmit={handleSubmit}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Project Name</label>
            {/* Add Input box here */}
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "NAME", payload: e.target.value })
              }
            />
          </div>
          <div className="tech-stack-wrapper" data-testid="tech-stack-wrapper">
            <label>Tech Stack</label>
            {/* Provide select tag with name attribute `name="tech_stack"` */}
            {/* This Select Tag will have `data-testid="tech-stack-select` */}
            <select
              name="tech_stack"
              value={state.tech_stack}
              data-testid="tech-stack-select"
              onChange={(e) =>
                dispatch({ type: "TECH_STACK", payload: e.target.value })
              }
            >
              <option value=""></option>
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="java">java</option>
              <option value="python">Python</option>
            </select>
          </div>
          <div
            className="assigned-to-wrapper"
            data-testid="assigned-to-wrapper"
          >
            <label>Assignmed to</label>
            {/* Provide select tag with name attribute `name="assigned_to"` */}
            {/* This Select Tag will have `data-testid="assigned-to-select` */}
            <select
              name="assigned_to"
              data-testid="assigned-to-select"
              value={state.assigned_to}
              onChange={(e) =>
                dispatch({ type: "ASSIGNED_TO", payload: e.target.value })
              }
            >
              <option value=""></option>
              <option value="nrupul">Nrupul</option>
              <option value="albert">Albert</option>
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
              checked={state.status === "pending" ? false : true}
              onChange={(e) =>
                dispatch({ type: "STATUS", payload: e.target.checked })
              }
            />
          </div>
          <input type="submit" />
        </form>
      </div>
      <h1>Project List</h1>
      {/* Show the project list here using `ProjectList` component */}
      <ProjectList project={project} setProject={setProject} />
      {}
    </div>
  );
};

export { initialState, reducer };
