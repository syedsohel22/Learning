import React from "react";

export const ProjectRow = ({ id, name, tech_stack, assigned_to, status }) => {
  return (
    <>
      <td data-testid="project-id">
        {/* Show serial number */}
        {id}
      </td>
      <td data-testid="project-name">
        {/* Show project name */}
        {name}
      </td>
      <td data-testid="project-tech-stack">
        {/* Show tech stack */}
        {tech_stack}
      </td>
      <td data-testid="project-assigned-to">
        {/* Show assigned to value  */}
        {assigned_to}
      </td>
      <td data-testid="project-status">
        {/* Show the current status value */}
        {status ? "completed" : "pending"}
      </td>
      <td>
        <button data-testid="toggle-button" onClick={() => !status}>
          Toggle
        </button>
      </td>
    </>
  );
};
