import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({ formData }) => {
  console.log("project list==>", formData);
  return (
    <div className="project-list-wrapper">
      {formData.length > 0 ? (
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
            {formData.map((pro, index) => {
              return (
                <tr key={index}>
                  <ProjectRow {...pro} id={index + 1} />
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1 data-testid="no-project-container">No Project Found</h1>
      )}
    </div>
  );
};
