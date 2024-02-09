import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({ project, setProject }) => {
  const handleList = (id) => {
    let newList = project.map((e, i) => {
      if (i === id) {
        return {
          ...e,
          status: e.status === "pending" ? "completed" : "reviewed",
        };
      } else {
        return e;
      }
    });
    setProject(newList);
  };
  return (
    <div className="project-list-wrapper">
      {project.length > 0 ? (
        <table data-testid="project-container">
          {/* Add table head  */}
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Tech Stack</th>
              <th>Assigned To</th>
              <th>Current Status</th>
              <th>Toggle</th>
            </tr>
          </thead>
          {/* Map through the list and use `ProjectRow` Component  */}
          <tbody>
            {project.map((e, i) => (
              <tr key={i}>
                <ProjectRow
                  val={e}
                  id={i}
                  handle={(val) => handleList(val)}
                ></ProjectRow>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 data-testid="no-project-container">No Project Found</h1>
      )}
    </div>
  );
};
